# Validation of Padisar Robot Starter v1.4.0

Checked 15 September 2026.

## Completed checks

**27 automated behavior checks passed.** Exact cases and methods are in `validation-results.json`.

- 9 geometry/motion checks cover all five hurt targets, recovery and cooldown, torso exclusion, contact between both hands, limited proximity motion, steady listening, speaking gestures, chat gating, and raycasting of the six interactive regions.
- 11 chat adapter checks cover opening through the torso, history suppression, user/typing/error suppression, streaming text timing and completion, bounded whole-reply gestures, closing, late tokens, and the stalled-response timeout.
- 7 runtime integration simulations cover initialization, logo completion, pointer tracking, hand clicks, torso priority and chat opening, repeated/native activation, reduced-motion suspension with fallback alignment, and cleanup. Some cases verify multiple related conditions.
- JavaScript syntax checks cover the three shipped scripts and all five inline scripts in the standalone demo. The plugin PHP parses as PHP 7.4; this is a syntax check, not WordPress execution.
- The guide contains English and RTL Persian sections, embedded assets, and no Pause/Resume or hint-control markup.
- The mobile poster is 1000 × 800 with real alpha transparency. The original logo is preserved.
- Six offline CPU renders of the actual Three.js geometry were reviewed for neutral, both hand-rub poses, head rubbing, leg flinching, and explanatory talking. Their simplified lighting is not a substitute for WebGL visual verification.

## Methods and practical limits

The geometry checks use the actual model and motion code. DOM checks use Linkedom with controlled timers. Runtime simulations use the actual picking and animation code with stubbed WebGLRenderer and PMREMGenerator; they do not exercise a browser's GPU, layout engine, or native input behavior.

The approved preview browser blocked local-file access. A full browser render/interaction pass for v1.4.0 is therefore **outstanding**. Earlier v1.3 browser results have been removed from this release package so they are not confused with current evidence.

## Existing chat widget observation

Read-only inspection of https://padisarco.ir/ confirmed the public Site Chatbot asset path and the launcher, panel, message, streaming, typing, and error selectors used by this adapter. The inspection did not submit contact details or send a conversation. The adapter depends on that observed markup, not a confirmed vendor integration API.

## Check after installation

The new package has not been installed or tested in the live WordPress/Enfold environment. On a separate test page, verify each body target, torso opening, the real chatbot's waiting/streaming/completion states, closing during a reply, keyboard support, mobile layout, theme styling, and cache/JavaScript optimization compatibility. Instructions are provided in both guides.

This release keeps the requested removal of visible Pause/Resume and hint controls. Motion preferences and offscreen/hidden-tab suspension remain. Touch and reduced-motion modes show a static poster with the torso chat action. No accessibility conformance certification is claimed.
