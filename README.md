<div align="center">

# Cursor Following Robot

**An interactive 3D website companion, built with Three.js.**

Cursor-aware movement · Body-part reactions · Existing-chat integration · WordPress shortcode

[![Checks](https://github.com/Colonthes/cursor-following-robot/actions/workflows/checks.yml/badge.svg)](https://github.com/Colonthes/cursor-following-robot/actions/workflows/checks.yml)
[![License: MIT](https://img.shields.io/badge/code-MIT-06b6d4.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.5.0-334155.svg)](CHANGELOG.md)

<img src="assets/robot-poster.png" alt="Static preview of the dark metallic robot with cyan eyes and a plain chest" width="400">

[Download WordPress plugin](https://github.com/Colonthes/cursor-following-robot/raw/refs/heads/main/downloads/cursor-robot.zip) · [English guide](docs/wordpress.md) · [راهنمای فارسی](README.fa.md)

</div>

This project combines a procedural 3D character, generated entirely in code, with restrained pointer tracking and a WordPress integration. The repository includes the **editable base code**, a **standalone demo**, and a **ready-to-install plugin**.

## What it does

- Turns its head toward the pointer across the page or within a selected section.
- Reacts to clicks on its head, hands, and legs; hand reactions include a coordinated rubbing gesture.
- Opens an existing support-chat widget when the chest is activated.
- Uses mouth and arm gestures while the connected widget displays an assistant reply.
- Keeps a transparent background so the character fits into the surrounding page.
- Shows a static poster on touch devices, with reduced motion, or when WebGL fails.
- Limits rendering to 30 fps and pixel density to 1.5, and suspends it offscreen or in a hidden tab.

The robot is a visual interface. **It does not include a chatbot, an AI service, voice audio, or audio lip sync.** The supplied demo chat uses local sample replies. No API key is required.

## Try the standalone demo

1. [Download the repository](https://github.com/Colonthes/cursor-following-robot/archive/refs/heads/main.zip) and extract it.
2. Open **`docs/demo-and-guide.html`** in your browser. It includes its own assets, English and Persian guides, and a labelled local demo chat.

For the minimal integration example, serve the repository locally:

```bash
git clone https://github.com/Colonthes/cursor-following-robot.git
cd cursor-following-robot
python3 -m http.server 8000
```

Open **http://localhost:8000/examples/basic.html**. The checked-in bundle means you can run this example without npm. On Windows, `py -3 -m http.server 8000` is an alternative.

## Install in WordPress

1. Download **[cursor-robot.zip](https://github.com/Colonthes/cursor-following-robot/raw/refs/heads/main/downloads/cursor-robot.zip)** and keep it zipped.
2. Go to **Plugins → Add New Plugin → Upload Plugin**, upload it, and activate **Cursor Following Robot**.
3. Add this shortcode to a WordPress **Shortcode block**, or an Enfold **Text Block**:

```text
[cursor_robot height="560" accent="#06b6d4" tracking="page" idle="true"]
```

4. View the actual front end. Clear Enfold's generated asset cache and any plugin, CDN, or browser cache if an old version remains.

**Requirements declared by the plugin:** WordPress 6.0+ and PHP 7.4+. A desktop browser with WebGL and a fine pointer is needed for animation. Live WordPress/Enfold compatibility still needs validation on your own staging site; see [validation](docs/validation.md).

Use the plugin ZIP linked above for installation. GitHub's **Download ZIP** contains the entire development repository and is not the WordPress installation package.

### Shortcode options

| Option | Default | Meaning |
| --- | --- | --- |
| `height` | `560` | Height in pixels, clamped to 320–900; capped at 420 on narrow screens. |
| `accent` | `#06b6d4` | Live robot illumination color; the static poster keeps its default colors. |
| `tracking` | `page` | `page`, or `section` for the closest Enfold section / tracking area. |
| `idle` | `true` | Set `false` to disable subtle idle breathing; other interactions remain. |
| `chat_selector` | `.scb-fab` | Selector for an existing chat launcher. |
| `chat_panel` | `.scb-panel` | Selector for its panel. |
| `chat_label` | Based on text direction | Accessible label for the chest button. |

## Use on a plain website

Copy the `assets/` folder to your site and use the markup in **[examples/basic.html](examples/basic.html)**. It loads the stylesheet, chat bridge, and lightweight loader; the loader fetches the bundled Three.js code only when an eligible robot comes near the viewport.

Use `data-tracking="section"` with a surrounding `data-robot-tracking-area` element to limit pointer tracking. After inserting a robot through JavaScript, initialize the loader with:

```js
document.dispatchEvent(new CustomEvent('cursor-robot:refresh'));
```

See the [plain-site guide](docs/plain-html.md) for asset paths, configuration, and lifecycle details.

Version 1.5.0 uses the `cursor-robot` plugin folder and `[cursor_robot]` shortcode. When upgrading an earlier installation, deactivate that installation, install this package, and update the shortcode.

## Connect an existing chatbot

The included adapter expects the **Site Chatbot** message classes documented in the [integration guide](docs/wordpress.md#chat-connection). Clicking the chest activates the existing launcher; it does not create a second chat widget.

Changing `chat_selector` and `chat_panel` adapts opening the panel. Other providers also need reply-state hooks or a custom adapter. With chat activated through the robot, a same-page integration can dispatch:

```js
document.dispatchEvent(new CustomEvent('cursor-robot:reply-start'));
document.dispatchEvent(new CustomEvent('cursor-robot:reply-end'));
document.dispatchEvent(new CustomEvent('cursor-robot:chat-closed'));
```

Cross-origin iframes require a separate integration. See the guide for the expected message markers and current limits.

## Develop and package

Use **Node.js 22+** and npm for development. Python 3 is needed only to serve the optional example or create the plugin ZIP.

```bash
npm ci
npm test
npm run build
npm run package
```

- `build` regenerates `assets/robot.bundle.js` from the 3D source.
- `package` rebuilds the bundle, copies assets into the WordPress folder, and creates `downloads/cursor-robot.zip`.
- On Windows without a `python3` command, run `npm run build` followed by `py -3 scripts/package-plugin.py`.

The package does not add database tables or a WordPress settings page. Change shortcode attributes, CSS, or source files instead.

### Repository map

| Path | Purpose |
| --- | --- |
| [`src/`](src/) | Editable model, motion, picking, rendering, and cleanup. |
| [`assets/`](assets/) | Shared browser scripts, stylesheet, images, and prebuilt bundle. |
| [`wordpress/cursor-robot/`](wordpress/cursor-robot/) | WordPress shortcode and plugin metadata; packaging copies in shared assets. |
| [`downloads/cursor-robot.zip`](downloads/cursor-robot.zip) | Ready-to-install WordPress package. |
| [`examples/basic.html`](examples/basic.html) | Minimal plain HTML integration. |
| [`docs/`](docs/) | Full guides, self-contained demo, validation, and historical records. |
| [`test/`](test/) | Tests against the actual model and motion code. |

## Validation and limitations

The repository includes runnable motion tests and a workflow for builds, PHP syntax, and package verification. [Validation notes](docs/validation.md) describe the current tests, browser checks, and integration limits.

The current package has not been installed in a live WordPress/Enfold environment during this repository preparation. The chat adapter relies on a particular widget's DOM classes. Check your real chat flow, keyboard access, mobile layout, and caching setup before using it on a production page.

## Contributing and licensing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for local setup and contribution checks. Report reproducible problems through [GitHub Issues](https://github.com/Colonthes/cursor-following-robot/issues).

Code is distributed under the **[MIT License](LICENSE)**. Three.js has its own [MIT notice](THREE-LICENSE.txt). See [third-party notices](THIRD_PARTY_NOTICES.md).

Maintained by [Colonthes](https://github.com/Colonthes).
