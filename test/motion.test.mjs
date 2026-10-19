import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import * as THREE from 'three';
import { createMotion } from '../src/motion.js';

// Bundle only the model's PNG import for Node; exercise the actual scene and motion code.
const output = new URL('../.cache/model-fixture.mjs', import.meta.url);
await mkdir(new URL('../.cache/', import.meta.url), { recursive: true });
await build({ entryPoints: [fileURLToPath(new URL('../src/model.js', import.meta.url))],
  outfile: fileURLToPath(output), bundle: true, platform: 'node', format: 'esm',
  external: ['three'], loader: { '.png': 'dataurl' } });
const { makeRobot } = await import(output.href);
const originalLoad = THREE.TextureLoader.prototype.load;

function fixture() {
  THREE.TextureLoader.prototype.load = (_url, onLoad) => {
    const texture = new THREE.Texture();
    queueMicrotask(() => onLoad?.(texture));
    return texture;
  };
  let robot;
  try { robot = makeRobot('#06b6d4'); }
  finally { THREE.TextureLoader.prototype.load = originalLoad; }
  return { robot, motion: createMotion(robot, false) };
}

function advance(motion, input = {}, seconds = 4) {
  let state;
  for (let i = 0; i < seconds * 30; i++) state = motion.pose(1 / 30, input);
  return state;
}

test('normal gaze follows the pointer without opening the mouth', () => {
  const { robot, motion } = fixture();
  const state = advance(motion, { targetX: 1, targetY: -1 });
  assert.ok(state.aimX > .99 && state.aimY < -.99);
  assert.equal(robot.mouth.visible, false);
});

test('all five body targets react, block overlapping hits, and recover', () => {
  for (const part of ['head', 'hand-left', 'hand-right', 'leg-left', 'leg-right']) {
    const { robot, motion } = fixture();
    assert.equal(motion.hit(part), true, part);
    assert.equal(motion.hit('head'), false, 'overlap must be rejected');
    const active = motion.pose(.1);
    assert.equal(active.reaction, part);
    assert.equal(advance(motion).reaction, null);
    robot.root.traverse(object => {
      assert.ok(object.position.toArray().every(Number.isFinite));
      assert.ok(object.quaternion.toArray().every(Number.isFinite));
    });
  }
});

test('torso and unrelated surfaces cannot trigger a hurt reaction', () => {
  const { motion } = fixture();
  for (const part of ['torso', 'arm-left', '', 'anything']) assert.equal(motion.hit(part), false);
});

test('chat mode settles the gaze and keeps the mouth closed while listening', () => {
  const { robot, motion } = fixture();
  advance(motion, { targetX: 1, targetY: 1 });
  const state = advance(motion, { chat: true, speaking: false, targetX: 1 });
  assert.ok(Math.abs(state.aimX) < .001 && Math.abs(state.aimY) < .001);
  assert.equal(state.mood, 'listening');
  assert.equal(robot.ring.visible, false);
});

test('a reply flag cannot animate speech before chat activation', () => {
  const { robot, motion } = fixture();
  assert.equal(advance(motion, { speaking: true }).speaking, false);
  assert.equal(robot.ring.visible, false);
  assert.equal(advance(motion, { chat: true, speaking: true }).mood, 'speaking');
  assert.equal(robot.ring.visible, true);
  assert.equal(advance(motion, { chat: false, speaking: true }).speaking, false);
  assert.equal(robot.mouth.visible, false);
});

test('hand rubbing brings both actual wrists together in front of the chest', () => {
  for (const part of ['hand-left', 'hand-right']) {
    const { robot, motion } = fixture();
    motion.hit(part);
    advance(motion, {}, 1.5);
    robot.root.updateMatrixWorld(true);
    const wrists = robot.arms.map(arm => arm.wrist.getWorldPosition(new THREE.Vector3()));
    assert.ok(wrists[0].distanceTo(wrists[1]) < .25);
    assert.ok(wrists.every(wrist => wrist.z > .45));
  }
});
