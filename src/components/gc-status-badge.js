/**
 * <gc-status-badge state="ok|info|caution|critical|idle">ARMED</gc-status-badge>
 * The text is required: colour never carries the state alone.
 */
class GcStatusBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
          --c: var(--gc-ink-muted);
          display: inline-flex; align-items: center; gap: var(--gc-space-1);
          height: 22px; padding: 0 var(--gc-space-2);
          border: 1px solid var(--c); border-radius: var(--gc-radius-sm);
          color: var(--c);
          font: 600 11px/1 var(--gc-font-mono); letter-spacing: 0.06em; text-transform: uppercase;
          white-space: nowrap;
        }
        :host([state="ok"]) { --c: var(--gc-accent-hud); }
        :host([state="info"]) { --c: var(--gc-signal-cyan); }
        :host([state="caution"]) { --c: var(--gc-signal-amber); }
        :host([state="critical"]) { background: var(--gc-signal-red); border-color: var(--gc-signal-red); color: var(--gc-surface-000); }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
      </style>
      <span class="dot" part="dot"></span><slot></slot>`;
  }
  connectedCallback() { if (!this.hasAttribute('role')) this.setAttribute('role', 'status'); }
}
if (!customElements.get('gc-status-badge')) customElements.define('gc-status-badge', GcStatusBadge);
