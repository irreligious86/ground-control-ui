/**
 * <gc-telemetry-tile label="BAT" value="23.8" unit="V" state="caution" status="LOW"></gc-telemetry-tile>
 * Update live: tile.value = 23.7  (or setAttribute('value', ...)).
 * state: ok | caution | critical (omit for neutral). status: short text shown with the state.
 */
class GcTelemetryTile extends HTMLElement {
  static get observedAttributes() { return ['label', 'value', 'unit', 'state', 'status']; }
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host {
          display: block; box-sizing: border-box; min-width: 140px;
          background: var(--gc-surface-200);
          border: 1px solid var(--gc-line);
          border-radius: var(--gc-radius-md);
          padding: var(--gc-space-4);
          color: var(--gc-ink);
        }
        .top { display: flex; justify-content: space-between; align-items: center; gap: var(--gc-space-2); min-height: 16px; }
        .label { font: 600 12px/16px var(--gc-font-sans); letter-spacing: 0.08em; text-transform: uppercase; color: var(--gc-ink-muted); }
        .status { font: 600 11px/16px var(--gc-font-mono); letter-spacing: 0.06em; text-transform: uppercase; }
        .row { display: flex; align-items: baseline; gap: var(--gc-space-1); margin-top: var(--gc-space-2); }
        .value { font: 500 28px/32px var(--gc-font-mono); font-variant-numeric: tabular-nums; }
        .unit { font: 400 13px/18px var(--gc-font-mono); color: var(--gc-ink-muted); }
        :host([state="ok"]) .status { color: var(--gc-accent-hud); }
        :host([state="caution"]) .value, :host([state="caution"]) .status { color: var(--gc-signal-amber); }
        :host([state="critical"]) { border-color: var(--gc-signal-red); }
        :host([state="critical"]) .value, :host([state="critical"]) .status { color: var(--gc-signal-red); }
      </style>
      <div class="top"><span class="label" part="label"></span><span class="status" part="status"></span></div>
      <div class="row"><span class="value" part="value"></span><span class="unit" part="unit"></span></div>`;
    this._el = {
      label: root.querySelector('.label'), value: root.querySelector('.value'),
      unit: root.querySelector('.unit'), status: root.querySelector('.status'),
    };
  }
  get value() { return this.getAttribute('value'); }
  set value(v) { this.setAttribute('value', v); }
  attributeChangedCallback(name, _old, v) {
    if (name === 'state') return;
    const el = this._el[name];
    if (el) el.textContent = v ?? (name === 'value' ? '—' : '');
  }
  connectedCallback() {
    if (!this.hasAttribute('value')) this._el.value.textContent = '—';
  }
}
if (!customElements.get('gc-telemetry-tile')) customElements.define('gc-telemetry-tile', GcTelemetryTile);
