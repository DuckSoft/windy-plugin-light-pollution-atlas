# Repository Guidelines

## Project Overview
Windy plugin that overlays djlorenz Light Pollution Atlas raster tiles on the Windy map. The panel selects an atlas year (2016, 2020, 2022–2025) and overlay opacity; source attribution lives in `src/plugin.svelte`.

## Architecture & Data Flow
- `src/pluginConfig.ts` default-exports the typed Windy `ExternalPluginConfig` (UI placement and router path). `src/plugin.svelte` is the Rollup entry point and the entire control-panel implementation.
- The component maps selected years to remote PNG tile URL templates. On mount it creates a global `L.TileLayer` and adds it to `@windy/map`'s shared map; radio changes call `setUrl`. The range input changes Leaflet opacity and, when its backing layer exists, MapLibre `raster-opacity`. On destroy it removes the overlay.
- State is local Svelte `bind:group`/`bind:value` plus guarded event handlers; `mapOverlay` is nullable. There is no store, dependency-injection container, custom fetch, or asynchronous error-handling flow. Keep map mutations in lifecycle/handlers and preserve cleanup.

## Key Directories
- `src/`: plugin UI, manifest, and screenshot asset.
- `declarations/`: local type declarations, including Leaflet integration types.
- `.github/workflows/`: manually dispatched publish workflow. No `tests/`, `scripts/`, or `docs/` directory is present.
- `dist/`: generated Rollup output; do not edit generated files.

## Development Commands
- `npm install`: install dependencies (`package-lock.json` exists locally but is gitignored; a fresh checkout does not guarantee a lockfile).
- `npm start`: Rollup watch build and HTTPS dev server on port `9999` with CORS headers.
- `npm run build`: recreate `dist/`, build without the dev server, and copy `package.json` there. Produces ESM `dist/plugin.js` (sourcemap) and `dist/plugin.min.js`.
- `npm test` is a failing placeholder, not a test command. There are no package scripts for linting or type-checking.

## Code Conventions & Common Patterns
- Svelte single-file component with markup, `<script lang="ts">`, and `<style lang="less">`; camelCase state/functions (`mapSelection`, `updateOpacity`) and explicit TypeScript types for Windy/Leaflet integration. `@windy/*` imports remain external to the bundle; `L` is a runtime global.
- `.prettierrc`: four spaces, single quotes, trailing commas, 100-character width. `tsconfig.json` enables strict null/implicit-any and unused-local checks with `noEmit`; `.eslintrc.cjs` contains JS/TS/Svelte rules. Follow those configs rather than inventing a second convention.
- Synchronous lifecycle (`onMount`/`onDestroy`), null guards before overlay operations, and conditional MapLibre layer access are the current patterns. Tile loading is delegated to the map libraries; no project-wide error handler or async abstraction exists.

## Important Files
- `src/plugin.svelte`: UI, tile URLs/options, map mutations, and styles.
- `src/pluginConfig.ts`: Windy plugin metadata, including `/light-pollution-atlas` router path.
- `rollup.config.js`: entry, Svelte/Less/SWC processing, external Windy imports, output, and dev server.
- `package.json`, `tsconfig.json`, `.eslintrc.cjs`, `.prettierrc`: commands and language/style settings; `README.md` and `CHANGELOG.md`: project and release context.

## Runtime/Tooling Preferences
Use npm with a supported Node.js runtime; `package.json` declares no exact Node version or `engines`. This is an ESM package (`"type": "module"`) built by Rollup, not Bun. TypeScript targets ES2022 and uses Windy types supplied through `@windycom/plugin-devtools`; Svelte and Less are processed in the Rollup pipeline. Avoid treating `tsconfig.json`'s `noEmit` as the bundler.

## Testing & QA
No test files, configured test framework, coverage target, or automated test/lint CI step is present. `npm test` exits with “no test specified”; do not report it as passing QA. For changes, exercise the affected Windy overlay behavior and run `npm run build` when dependencies are available. The manual `.github/workflows/publish-plugin.yml` workflow runs `npm install` and the build, then packages/uploads with `WINDY_API_KEY`; publishing is not a test run.
