# Changelog

## v0.2.2 — 2026-11-07

- Fix: `a.gc-card` keeps ink colour (was inheriting link cyan from `.gc-root a`). Found by UAV Student.

## v0.2.1 — 2026-11-07

- Fix: `[hidden]` now always hides elements, even ones with `display` set by Ground Control classes (e.g. `.gc-tag`). Found by UAV Student.

## v0.2.0 — 2026-11-07

First real consumer: UAV Student (educational site).

- **Breaking-safe rename:** all tokens are now emitted as `--gc-*` (`--gc-ink`, `--gc-space-4`, `--gc-font-mono`…). The v0.1 unprefixed names stay as deprecated aliases and will be removed in v1.0.
- Spacing scale filled in: `--gc-space-3` (12px), `--gc-space-5` (20px), `--gc-space-8` (32px).
- New class-based primitives (no JS): `.gc-container`, `.gc-stack`, `.gc-nav`, `.gc-breadcrumb`, `.gc-tag` (+`data-state`), `.gc-card` (+`data-state="pending"`), `.gc-progress` (`--gc-value`), `.gc-checklist`, `.gc-prose` (headings, lists, code, tables, blockquote), `.gc-callout`.
- Link colours are scoped to `.gc-root`, nothing leaks into the host page.
- Demo extended with all new primitives.
- CI: checks that `dist/` matches the source; tags a release automatically when `package.json` version changes.

## v0.1.0 — 2026-10-19

- Tokens: 10 colors (dark theme), 7 text styles, 4 spacing steps, 3 radii.
- Self-hosted fonts: IBM Plex Sans 400/600, JetBrains Mono 400/500, latin + cyrillic.
- Components: `gc-button`, `gc-status-badge`, `gc-telemetry-tile`.
- Zero-dependency build script, demo page.
