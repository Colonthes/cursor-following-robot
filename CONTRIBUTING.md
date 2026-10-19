# Contributing

## Setup

Use Node.js 22+, npm, and Python 3 if you will package the WordPress plugin.

```bash
npm ci
npm test
npm run build
npm run package
```

On Windows without `python3`, use `py -3 scripts/package-plugin.py` after building.

## Make a change

1. Open an issue for a substantial behavior change, or fork the repository for a focused fix.
2. Edit the canonical source in `src/`, shared browser files in `assets/`, or PHP in `wordpress/cursor-robot/`.
3. Run the checks above. Commit the updated bundle and plugin ZIP when their inputs change; do not commit `node_modules/` or the copied WordPress asset directory.
4. Check the standalone demo and, for integration changes, a staging WordPress page. Verify pointer reactions, chest activation, keyboard access, reduced motion, touch fallback, and chat completion/closing.
5. Submit a pull request explaining the trigger, resulting behavior, and checks actually performed.

Keep assets local, preserve reduced-motion behavior and scoped CSS, and avoid adding network services or dependencies unless the feature requires them. New artwork must have documented reuse permission. Never attach API keys, private chat logs, or WordPress credentials.

The original source uses compact formatting; avoid unrelated reformatting so behavioral changes stay reviewable.
