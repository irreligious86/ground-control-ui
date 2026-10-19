# Roadmap

Ground Control UI is the single design system for all my projects: UAV tools, ESP32 web interfaces, Home Assistant dashboards and anything else with a screen. One look, one source of truth, reused everywhere instead of re-invented per project.

## Principles (don't break these)

- `tokens/tokens.json` is the only source of truth. Everything else is generated or consumes it.
- Framework-free: vanilla CSS + Web Components. Must run in a PWA, on an ESP32 web server and in Home Assistant without a bundler.
- Offline-first: no runtime network requests. Fonts and assets ship in the repo.
- Small: every addition is weighed against ESP32 flash.
- Colour means state, and never carries it alone: always with text or an icon.
- The design system artifact is the visual reference; this repo is what ships. Keep `tokens.json` identical in both.
- Semantic versioning with git tags. Projects pin a tag, never `main`.

## Done

- [x] **v0.1.0** — tokens (dark theme), self-hosted fonts, `gc-button`, `gc-status-badge`, `gc-telemetry-tile`, zero-dep build, demo.

## Next

### v0.2 — first real consumer
- [ ] Integrate into Report UAV as a git submodule; replace hard-coded colours with tokens.
- [ ] Add service-worker precache list for `dist/` to the README.
- [ ] Fix whatever the first real project exposes.

### v0.3 — ESP32 profile
- [ ] `dist/esp32/` build: latin-only fonts (or none), minified, gzip-ready.
- [ ] Integrate into the ESP32 LAN scanner web UI.
- [ ] Measure real flash cost and note it in the README.

### v0.4 — more components
- [ ] Icon set (24px grid, 1.5px stroke) for telemetry and states.
- [ ] `gc-alert` banner (caution / critical, dismissible).
- [ ] Form controls: input, select, toggle (form-associated via ElementInternals).
- [ ] `gc-button` form association.
- [ ] Data table for logs and reports.

### Later / ideas
- [ ] Gauges: battery bar, signal strength, attitude indicator.
- [ ] Home Assistant custom cards (generator / EcoFlow load).
- [ ] Daylight theme with high contrast for direct sunlight.
- [ ] Logo and cover mark.
- [ ] Automated check that `dist/` matches the source (CI).
