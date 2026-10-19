# Validation

Version **1.5.0**, checked on **19 October 2026**.

| Check | Result | Scope |
| --- | --- | --- |
| `npm test` | 6 tests passed | Actual Three.js geometry and motion, imported directly without texture stubs. |
| Browser smoke checks | 16 scenarios passed | Headless Chromium 153.0.8010.0 with real DOM/input and software WebGL. |
| Build and plugin package | Passed | Bundle, self-contained demo, and installable ZIP rebuilt. |
| PHP syntax | Passed | Parsed as PHP 7.4; live WordPress execution is separate. |
| Plugin ZIP | Passed | 9 entries under `cursor-robot/`; all five shared assets match source files. |
| Static image | Passed | Fresh 1000 × 800 RGBA render, transparent outside the model, with a plain chest. |
| Name and asset review | Passed | Source, filenames, generated HTML, embedded image, and decompressed plugin contents checked. |

See [browser-check-results.json](browser-check-results.json) for individual browser scenarios. These cover desktop rendering, pointer tracking, all five body-part targets and recovery, missing-chat feedback, touch and reduced-motion fallbacks, no 3D download in those basic-example modes, keyboard activation, mobile overflow, demo reply timing/completion/closing, direct local-file opening, and absence of uncaught JavaScript errors.

The browser smoke checks were run with an isolated QA harness. The six motion tests are included and runnable with `npm test`. The standalone demo is generated from `examples/demo.html` and the shared assets by `scripts/build-demo.mjs`.

Bundle SHA-256:

```text
5363d655198862968bc3add1f4f0d5e69b88e2155d8b0374457e20be59c8bda8
```

## Automated checks

GitHub Actions installs locked dependencies, runs motion tests, rebuilds and packages the project, checks generated files for differences, and runs PHP syntax validation. The status badge reports its actual outcome.

## Integration limits

No live WordPress/Enfold installation or real production-chat conversation was performed for this version. Browser chat checks use the labelled local sample. Software WebGL does not cover every physical GPU or browser family.

Before production use, check activation, shortcode rendering, theme styles, cache/optimization settings, the real chat provider's reply/error/closing states, keyboard focus, and mobile/reduced-motion behavior on a staging page.

The default reply observer depends on Site Chatbot DOM classes. Other providers, cross-origin iframes, or repeated mounting in a single-page application can require custom integration or lifecycle cleanup.
