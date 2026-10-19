# WordPress and Enfold guide

## Install

1. Download [`cursor-robot.zip`](../downloads/cursor-robot.zip) and keep it zipped.
2. In WordPress, choose **Plugins → Add New Plugin → Upload Plugin**.
3. Upload the ZIP and activate **Cursor Following Robot**.
4. Place this in a **Shortcode block**, or an Enfold **Text Block**:

```text
[cursor_robot height="560" accent="#06b6d4" tracking="page" idle="true"]
```

The plugin declares WordPress 6.0+ and PHP 7.4+. A fine pointer and WebGL-capable desktop browser are required for animation; touch/reduced-motion visitors get the transparent static poster and native chest action.

Version 1.5.0 uses a new plugin folder and shortcode. For an upgrade, deactivate the earlier installation, install this ZIP, and update the shortcode. No database tables or settings page are created.

## Enfold placement

Use a Text Block in Advanced Layout Builder. For section tracking, place the robot inside a Color Section and use `tracking="section"`; otherwise use `tracking="page"`. Preview the actual front end, rather than the builder canvas.

Clear Enfold's generated asset cache, caching/CDN plugins, and browser cache after replacing a bundle. The robot itself has a transparent background; its surrounding section is styled by the theme.

## Shortcode options

| Attribute | Default | Purpose |
| --- | --- | --- |
| `height` | `560` | Height in pixels, clamped to 320–900. Narrow viewports are capped at 420 px. |
| `accent` | `#06b6d4` | Live illumination color; the poster keeps its default colors. |
| `tracking` | `page` | `page` or the nearest `section`. |
| `idle` | `true` | Set `false` to disable idle breathing; other interactions remain. |
| `chat_selector` | `.scb-fab` | Existing chat launcher selector. |
| `chat_panel` | `.scb-panel` | Existing chat panel selector. |
| `chat_label` | Based on text direction | Accessible chest-button label. |

## Chat connection

This plugin opens an existing chat widget. It does not provide a chatbot, AI backend, voice audio, or an API key.

The default DOM adapter expects these Site Chatbot classes:

| Element / state | Selector |
| --- | --- |
| Launcher | `.scb-fab` |
| Panel | `.scb-panel`; considered open when visible |
| Assistant text | `.scb-row.bot .scb-bubble` |
| Streaming row | `.scb-row.bot.is-streaming` |
| User row | `.scb-row.user` |
| Waiting indicator | `.scb-typing-indicator` |
| Error row | `.scb-row.bot.err` |

Only a chat activated through the robot triggers its listening/speaking mode. Old history, user messages, waiting indicators, and errors do not trigger speech gestures. Reply activity drives visual gestures; there is no audio or phoneme-level lip sync.

Changing launcher and panel selectors only adapts opening. Another provider needs matching reply hooks or a custom adapter. With the panel already activated through the robot, a same-page integration can dispatch:

```js
document.dispatchEvent(new CustomEvent('cursor-robot:reply-start'));
document.dispatchEvent(new CustomEvent('cursor-robot:reply-end'));
document.dispatchEvent(new CustomEvent('cursor-robot:chat-closed'));
```

The observer relies on DOM classes, rather than a vendor API contract. Cross-origin iframes require another integration. A missing launcher/panel produces an availability message. The self-contained demo supplies a clearly labelled local sample chat that sends no messages to an external service.

## Keyboard and motion preferences

Tab focuses the chest button; Enter or Space activates it. The button has a visible focus outline and no rectangular fill. Touch and reduced-motion modes use a static transparent poster, without downloading the 3D bundle. Hidden tabs and offscreen components suspend rendering.

## Verify and troubleshoot

- If an old version remains, confirm the new shortcode/plugin folder and clear all caches.
- If only a poster appears, check motion/touch settings first, then WebGL and bundle loading.
- If chest activation fails, confirm the configured launcher/panel exist and theme CSS is not hiding all component buttons.
- If chat opens without gestures, activate through the chest and verify the real provider's new reply markers.
- Test streaming, closing during a response, keyboard focus, mobile layout, and optimization settings on a staging page.

See [validation](validation.md) for performed checks and remaining live WordPress/Enfold testing. Development commands run from the repository root; shared assets are copied into the plugin folder by `npm run package`.
