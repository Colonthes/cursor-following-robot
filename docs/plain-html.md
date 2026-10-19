# Plain HTML integration

Serve `examples/basic.html` with a local HTTP server to see the minimum integration. The self-contained `demo-and-guide.html` also works as a downloaded file and includes a local demo chat.

## Assets and markup

Copy **all of `assets/`** to your site. Include `robot.css`, followed by `chat-bridge.js` and `loader.js`, with the bridge before the loader. The `data-bundle` URL must point to your copy of `robot.bundle.js`.

The example supplies the required visual wrapper, static poster, canvas mount, native chest button, and live status region. Keep the poster and button even if animation is the main feature: they provide the fallback and keyboard action.

| HTML attribute | Values / purpose |
| --- | --- |
| `data-accent` | Hex illumination color, for example `#06b6d4`. |
| `data-tracking` | `page` or `section`. |
| `data-idle` | `true` or `false` for idle breathing. |
| `data-chat-selector` | Existing chat launcher selector. |
| `data-chat-panel` | Existing chat panel selector. |
| `data-chat-unavailable` | Localized fallback message when no chat is found. |
| CSS `--pr-height` | Component height, for example `560px`. |

Use a surrounding `[data-robot-tracking-area]` for section tracking on a plain site. Animation does not replace essential content or a normal support link.

## Chat integration

The minimal example deliberately does not install a chat provider. Chest activation reports that support chat is unavailable until the page supplies the configured launcher and panel. Try the self-contained demo for a working local sample.

The included reply observer expects Site Chatbot message classes. See [the WordPress guide](wordpress.md#chat-connection) for those classes and explicit reply events. The robot code itself sends no network request to an AI or chat service; an existing chat provider may have its own data flow.

## Dynamically inserted content

After inserting the complete component markup:

```js
document.dispatchEvent(new CustomEvent('padisar-robot:refresh'));
```

The loader skips already-observed elements. It exposes `window.PadisarRobotStarter.init(element)` after the bundle loads; this returns the instance's `getState()` and `destroy()` methods. The runtime releases its rendering resources when a running component is removed. The loader/chat bridge are designed primarily for static WordPress pages; a single-page application that repeatedly mounts and removes components should add lifecycle cleanup for their observers and listeners.

## Branding

The live model imports `assets/padisar-logo.png`; the static poster contains branding too. Replace **both** before using another brand. The original logo UV crop in `src/model.js` is tailored to a 2000 × 2000 source image; adjust its offset/repeat and logo dimensions for your artwork. Rebuild the bundle after model changes and create a matching transparent poster.

The poster's fallback chest hit area assumes a 1000 × 800 composition. If you redesign it, update `positionFallback()` in `assets/chat-bridge.js` as well.
