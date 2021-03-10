# nx-formatjs

---

**Using @nrwl/nx with FormatJS, React and react-intl.**

## What can I do with this thing?

- Use `nx extract app` or `nx run extract:app` to extract a localizer file for your TMS of choice
  - This extracts all usages of `intl.formatMessage` or `<FormattedMessage ... />` into a single
    file (`./apps/app/locale/extracted/en.json`), with auto-generated IDs (unless you specified your own).
- Use this file in your Translation Management System (TMS) to generate localization in
- Use `nx ingest --locale=nl` to ingest a file from `app/locale/*.json` (from TMS) to `app/src/locale/*.json`.
  - This converts the output files from the TMS to the requested format for `react-intl`.
  - Three localizations are already defined.
- `App.tsx` defines a localization file per supported locale, and loads them dynamically.

## Sidenotes

- `nx extract` uses `formatjs extract` with `--format lokalise` to fit [Lokalise][0] TMS.
- `nx extract` defines the same ID interpolation format as `./apps/app/.babelrc` specifies
- `.babelrc` uses `babel-plugin-formatjs` as a dev dependency.
- `nx ingest` uses `formatjs compile` with custom handling for Lokalise's format (`./tools/scripts/formatjs-compile.js`)
  .

[0]: https://lokalise.com/
