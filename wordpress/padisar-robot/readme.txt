=== Padisar Robot Starter ===
Contributors: colonthes
Tags: robot, animation, threejs, shortcode, enfold
Requires at least: 6.0
Requires PHP: 7.4
Stable tag: 1.4.0
License: MIT
License URI: https://opensource.org/licenses/MIT

A pointer-aware 3D robot with a transparent background and an optional connection to your existing support chat.

== Description ==
Add [padisar_robot] to a WordPress Shortcode block or an Enfold Text Block.
Desktop visitors get cursor tracking, body-part reactions, and chat reply gestures.
Touch devices and visitors who prefer reduced motion receive a static poster with a keyboard-accessible torso chat action.

This plugin does not supply a chatbot, AI backend, voice, analytics, or a settings page.
Its default chat adapter expects the Site Chatbot classes documented in the GitHub repository.
The supplied Padisar logo remains the property of its owner and is excluded from the code's MIT license.

== Installation ==
1. Upload downloads/padisar-robot.zip using Plugins > Add New Plugin > Upload Plugin.
2. Activate Padisar Robot Starter.
3. Add [padisar_robot height="560" accent="#06b6d4" tracking="page" idle="true"].
4. Clear your theme, plugin, CDN, and browser caches.

== Frequently Asked Questions ==
= Does it work without Enfold? =
The shortcode uses standard WordPress APIs. Enfold placement is documented, but live theme compatibility must be checked on your own site.

= Does clicking the chest create a chatbot? =
No. It opens an existing launcher, by default .scb-fab, with a panel matching .scb-panel.

= Why do I see a static image? =
This is expected for touch or reduced-motion settings. It is also the fallback if WebGL or the bundle fails.

== Changelog ==
= 1.4.0 =
Cursor tracking, hand/head/leg reactions, transparent branding, existing chat integration, and static fallback. Source and installation package published together on GitHub.
