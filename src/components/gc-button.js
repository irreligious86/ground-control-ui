/**
 * <gc-button variant="primary|secondary|danger" disabled>Arm</gc-button>
 * Fires a normal `click`. Not form-associated: inside a <form>, call form.requestSubmit() yourself.
 */
class GcButton extends HTMLElement {
  static get observedAttributes() { return ['disabled', 'variant']; }
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open', delegatesFocus: true });
    root.innerHTML = `
      <style>
        :host { display: inline-block; }
        button {
          all: unset; box-sizing: border-box; cursor: pointer;
          display: inline-flex; align-items: center; gap: var(--space-2);
          min-height: 40px; padding: 0 var(--space-4);
          border-radius: var(--radius-md);
          font: 600 12px/16px var(--font-sans); letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--accent-hud); color: var(--surface-000);
          border: 1px solid transparent;
        }
        :host([variant="secondary"]) button { background: transparent; color: var(--ink); border-color: var(--ink-muted); }
        :host([variant="danger"]) button { background: var(--signal-red); color: var(--surface-000); }
        button:hover { filter: brightness(1.08); }
        :host([variant="secondary"]) button:hover { border-color: var(--ink); filter: none; }
        button:focus-visible { outline: 2px solid var(--accent-hud); outline-offset: 2px; }
        :host([disabled]) button { cursor: not-allowed; opacity: .45; filter: none; }
      </style>
      <button part="button" type="button"><slot></slot></button>`;
    this._btn = root.querySelector('button');
    this.addEventListener('click', (e) => { if (this.hasAttribute('disabled')) e.stopImmediatePropagation(); }, true);
  }
  attributeChangedCallback() {
    const off = this.hasAttribute('disabled');
    this._btn.disabled = off;
    this._btn.setAttribute('aria-disabled', String(off));
  }
}
if (!customElements.get('gc-button')) customElements.define('gc-button', GcButton);
