import TailwindGlobalStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import Style from "./window-aside-item.css?inline";

export class SceneWindowAsideItem extends LitElement {
    static styles = [
        unsafeCSS(TailwindGlobalStyles),
        unsafeCSS(Style),
    ];

    static properties = {
        href: { type: String },
        active: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.href = "#";
        this.active = false;
    }

    render() {
        return html`
            <a href="#" @click="${(e) => { e.preventDefault();} }">
                <div class="window-aside-item-icon">
                    <slot name="icon"></slot>
                </div>
                <span class="window-aside-item-label">
                    <slot></slot>
                </span>
            </a>
        `;
    }

}
customElements.define('scene-window-aside-item', SceneWindowAsideItem);
