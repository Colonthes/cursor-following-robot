# Validation

Repository preparation checked on **19 October 2026** against the recovered **v1.4.0** runtime.

## Current checks

| Check | Result | Scope |
| --- | --- | --- |
| `npm test` | 6 tests passed | Actual Three.js model and motion; texture loading is stubbed for Node. |
| Browser smoke checks | 16 scenarios passed | Headless Chromium 153.0.8010.0 with software WebGL; real DOM, rendering, and input. See the recorded results below. |
| `npm run package` | Passed | Builds the bundle and installable WordPress ZIP. |
| Rebuild comparison | Exact byte match | Rebuilt bundle matches the original supplied v1.4.0 bundle. |
| JavaScript syntax | Passed | 7 source/build scripts and 5 embedded standalone-demo scripts. |
| PHP syntax | Passed | Parsed as PHP 7.4 using php-parser; this is not PHP or WordPress execution. |
| Plugin ZIP integrity | Passed | 10 entries, one `padisar-robot/` root, all six shared assets match their source files. |

The browser checks exercised desktop logo/rendering, pointer tracking, all five body-part targets and recovery, missing-provider feedback, reduced-motion and mobile static fallbacks, no bundle download in static modes, native keyboard chest activation, mobile overflow, local demo reply timing/completion/closing, direct local-file opening, and absence of uncaught JavaScript errors.

See [browser-check-results.json](browser-check-results.json) for the browser version and individual scenario results. The browser smoke checks were run during repository preparation with an isolated QA harness; the six motion tests are included and runnable with `npm test`.

The original 3D source, loader, chat bridge, stylesheet, logo, poster, and rebuilt bundle were preserved. Repository work adds documentation, tests, packaging, and plugin author/project links.

Bundle SHA-256:

```text
7e81d154baedc668d927f9ebcb719bc1d89df37de66c61151efa4396cf20b264
```

## Automated repository checks

The GitHub Actions workflow installs locked dependencies, runs the six motion tests, rebuilds/packages the project, checks that generated artifacts are current, and runs `php -l` on the plugin. Its badge reports the actual run status; local checks do not imply that GitHub Actions has already passed.

## Remaining integration checks

No live WordPress/Enfold installation or real production-chat conversation was performed during this repository preparation. The browser chat checks use the labelled local sample. Software WebGL does not cover every physical GPU or browser family.

Before production use, check a staging page for:

1. WordPress activation, shortcode rendering, Enfold styling, and cache/optimization behavior.
2. The real provider's launcher, contact form if any, message markers, streaming, errors, and closing during a reply.
3. Keyboard focus, touch targets, reduced-motion behavior, and mobile layout in your supported browsers.
4. Correct logo and poster placement if you replace the supplied branding.

The default chat adapter depends on the observed Site Chatbot DOM structure, rather than a vendor API contract. A provider update or cross-origin iframe can require a custom integration. Repeated mounting/removal in a single-page application also needs explicit loader/chat-observer lifecycle handling.

## Historical validation

The original 15 September 2026 release included **27 simulation checks**. Those records are preserved as [the historical report](archive/VALIDATION-v1.4.0.md) and [its results](archive/validation-results-v1.4.0.json). Their old browser limitation describes that earlier validation session. Those 27 checks were not rerun as part of the current six-test suite and must not be added to the current test count.
