import TailwindStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import Style from "./window-aside-item.css?inline";

export class SceneWindowAsideItem extends LitElement {
    static styles = [
        unsafeCSS(TailwindStyles),
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
            <div class="w-5 h-5 flex-shrink-0">
                <slot name="icon"></slot>
            </div>
            <span class="whitespace-nowrap overflow-hidden">
                <slot></slot>
            </span>
        `;
    }

}
customElements.define('scene-window-aside-item', SceneWindowAsideItem);
