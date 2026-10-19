> This detailed guide describes the original v1.4.0 behavior. Download the installation package from [`downloads/padisar-robot.zip`](../downloads/padisar-robot.zip). Development commands now run from the repository root. See [current validation](validation.md).

# Padisar Robot — WordPress / Enfold guide

Version **1.4.0** adds body-part reactions and a connection to the existing support chatbot. The robot remains transparent and keeps your original Padisar chest logo. There are no separate Pause/Resume or “Move your pointer” controls.

## What this version does

| Interaction | Result |
| --- | --- |
| Move the pointer around the page | The head smoothly follows it. The mouth stays hidden. |
| Bring the pointer near a hand | A very small wrist adjustment keeps the hand easy to click. There is no pushing or displacement of the pointer. |
| Click either hand | The robot flinches, shows a brief surprised/wincing expression, brings that hand forward, and rubs it with the opposite hand. |
| Click the head | A short flinch and a hand-to-head rubbing gesture. |
| Click either leg | A short leg/knee flinch and matching facial expression. |
| Click the central torso or logo | The existing support chat opens. The robot turns forward and waits with a steady face and closed mouth. It does not react as if hurt. |
| The chatbot starts displaying its answer | The mouth animates and the arms make gentle explanatory gestures. Typing indicators alone do not make it talk. |
| The answer ends | The mouth returns to its closed listening pose. |
| Close the chat | The robot returns to normal cursor tracking and hides the mouth. Opening chat through the original corner button does not activate robot talking. |

A reaction completes before another hurt reaction can start. Clicking the torso takes priority and can interrupt a reaction to open support. The hands meet in front of the chest; the nearest visible 3D surface determines what a pointer click hits. Upper arms and empty space do not trigger hurt reactions.

Mouth movement is a visual speaking animation. This plugin does **not** produce voice audio or phoneme-level lip synchronization. When a complete answer appears at once, it uses a short, bounded reading gesture based on the reply length. During streaming, it follows reply activity and stops at completion; a timeout also prevents a stalled response from leaving it talking indefinitely.

## Update the installed plugin

1. Download **padisar-robot.zip** and leave it zipped.
2. In WordPress, open **Plugins → Add New Plugin → Upload Plugin**. Upload the ZIP and choose the option to replace the installed plugin. Confirm the version is **1.4.0**.
3. Keep your existing shortcode. The following configuration works with the chat widget identified on the Padisar website:

```text
[padisar_robot height="560" accent="#06b6d4" tracking="page" idle="true"]
```

4. Clear Enfold’s generated asset cache, any caching/CDN plugin, and your browser cache. Reload the front-end page while logged out as well.
5. Earlier Quick CSS rules targeting `.padisar-robot__pause`, `.padisar-robot__hint`, or `.padisar-robot__controls` are unnecessary. You may remove those specific rules. A broad rule that hides **all** buttons inside `.padisar-robot` would also hide the new invisible torso control; remove such a rule if one was added.

The plugin folder remains `padisar-robot`, so the ZIP updates the existing installation. It creates no database tables or settings page.

## Place it in Enfold

1. Open the page in **Advanced Layout Builder**.
2. Put the shortcode as plain text in a **Text Block**, ideally in a column next to the page’s main message.
3. Use a Color Section around both columns for `tracking="section"`; use `tracking="page"` for the whole current page.
4. Preview the actual front end. The page-builder editing canvas is not the animation preview.

The plugin component and mobile poster have transparent backgrounds. Any background assigned to the containing Enfold section or column is controlled by Enfold.

## Chat connection

The automatically configured adapter targets the **Site Chatbot** widget whose public markup and CSS were inspected on [padisarco.ir](https://padisarco.ir/) on **15 September 2026**:

| Existing element / state | Selector |
| --- | --- |
| Corner chat launcher | `.scb-fab` |
| Chat panel | `.scb-panel` (open when displayed; the observed widget adds `.open`) |
| Assistant message | `.scb-row.bot .scb-bubble` |
| Streaming reply | `.scb-row.bot.is-streaming` |
| User message | `.scb-row.user` |
| Waiting indicator | `.scb-typing-indicator` |
| Error response | `.scb-row.bot.err` |

The torso activates the **existing launcher**, rather than creating another chatbot. The adapter watches new assistant reply text in the existing panel. It ignores previous chat history, user messages, waiting dots, and errors. Talking is enabled only for a conversation activated from a robot’s torso, and stops when that panel closes. Only one robot owns chat mode at a time if you place several on a page.

The live widget currently may ask visitors for their contact information before starting a conversation. That remains part of the existing chat flow. The robot does not bypass it or fill it in.

The connection is based on the observed widget markup, not a confirmed public vendor API. If the chat plugin changes its classes or moves into a separate-domain iframe, its adapter will need an update. A real conversation was not submitted during inspection; complete the live test below after installation.

## Shortcode options

| Attribute | Default | Purpose |
| --- | --- | --- |
| `height` | `560` | Desktop height in pixels, limited to 320–900. Below 768 px viewport width, the maximum height is 420 px. |
| `accent` | `#06b6d4` | Color of the live robot’s illuminated features, including its mouth. The supplied logo is not recolored. |
| `tracking` | `page` | `page` or `section`. Pointer events inside unrelated iframes are outside this scope. |
| `idle` | `true` | `false` disables subtle idle breathing. Cursor tracking, click reactions, proximity response, and chat gestures remain available. |
| `chat_selector` | `.scb-fab` | Advanced: selector of the existing launcher. |
| `chat_panel` | `.scb-panel` | Advanced: selector of the existing chat panel. |
| `chat_label` | Based on WordPress text direction | Accessible label of the torso control. |

Example for a Persian page:

```text
[padisar_robot height="560" tracking="section" chat_label="گفت‌وگو با پشتیبانی"]
```

Changing the launcher/panel selectors does not automatically add support for another provider’s response events. The reply observer still expects the Site Chatbot message markers above. A developer can optionally connect another same-document chat integration using:

```js
// These affect speaking only after a torso click has activated chat mode.
document.dispatchEvent(new CustomEvent('padisar-robot:reply-start'));
document.dispatchEvent(new CustomEvent('padisar-robot:reply-end'));
// Notify the robot when an externally managed chat closes.
document.dispatchEvent(new CustomEvent('padisar-robot:chat-closed'));
```

The adapter does not accept arbitrary cross-window messages or intercept network requests.

## Phones, motion preferences, and accessibility

Touch devices and reduced-motion users continue to receive the static transparent poster without downloading the 3D bundle. The torso remains a native, keyboard-accessible support-chat button. Animated hurt reactions and mouth gestures are desktop features; the static fallback does not pretend to be talking.

On desktop, **Tab** focuses the torso; **Enter** or **Space** opens chat. A focus outline identifies it for keyboard users. Pointer clicks use the 3D surfaces, so hands passing in front of the chest are still treated as hands. The torso button has no visible rectangular fill.

Rendering is capped at 30 frames per second and device pixel density at 1.5. Offscreen components and hidden tabs stop rendering. WebGL failure leaves the static poster and chat control available. Essential service information should remain in ordinary Enfold text and links.

## Verify on the website

1. Test on a staging copy or separate test page before replacing a public homepage section.
2. Check pointer tracking and click both hands, head, and legs. Confirm only small proximity movements and clean recovery from each reaction.
3. Click the torso. The same corner chat panel should open, and the head should settle forward. The mouth should remain closed while the chatbot waits.
4. Complete any existing contact form yourself, then send a real test question. Check that speaking begins with assistant reply text, not while the waiting dots are shown.
5. Close chat during a response. The robot should stop talking. Reopen using the corner button: it should stay in normal cursor-tracking mode until its torso is clicked again.
6. Check mobile and keyboard access, and check the page after clearing/minimizing any JavaScript delay settings.

The standalone HTML includes a clearly labelled **local demonstration chat** for trying the animation. Its sample answers do not come from Padisar support and it sends no messages to your site.

## Troubleshooting

| Issue | Check |
| --- | --- |
| Old robot or controls remain | Confirm plugin version 1.4.0 and clear generated, plugin, CDN, and browser caches. |
| Torso does not open chat | Confirm `.scb-fab` and `.scb-panel` exist. Check that an earlier CSS rule is not hiding every robot button. The component shows an availability message if the launcher is missing. |
| Chat opens but the robot never talks | The conversation must start through the torso. Verify actual new assistant text arrives and that the widget still uses the message classes listed above. Mobile/reduced-motion mode stays static. |
| Robot talks during waiting | Check whether the chat plugin changed its waiting indicator or message classification. Do not map the typing indicator to reply-start. |
| Only a static image appears | Expected on touch devices and reduced motion. On desktop, check WebGL support and whether the animation bundle is blocked. |
| Narrow column makes the robot small | Widen the column or reduce `height`. |

## Editing and validation

The editable model is in `src/model.js`, motion and arm coordination in `src/motion.js`, picking/rendering in `src/robot.js`, and the chat connection in `assets/chat-bridge.js`. After changing 3D source code, run `npm ci` and `npm run build` in the repository root, then update the plugin on your site.

See `archive/VALIDATION-v1.4.0.md` and `archive/validation-results-v1.4.0.json` for this release’s checks and limitations. Version 1.4 was checked with DOM simulations, 3D geometry tests, offline pose renders, HTML/JavaScript checks, and a PHP syntax parser. The preview browser blocked local-file access, so a full browser or live WordPress validation of this version is still required. Earlier version 1.3 browser results are not presented as evidence for this release.

Your original logo file is preserved in `assets/padisar-logo.png`. The custom code and Three.js carry their included MIT notices; the Padisar logo retains its existing ownership.
