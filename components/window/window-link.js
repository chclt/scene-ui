import TailwindGlobalStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import Style from "./window-link.css?inline";

export class SceneWindowLink extends LitElement {
    static styles = [
        unsafeCSS(TailwindGlobalStyles),
        unsafeCSS(Style),
    ];

    static properties = {
        href: { type: String },
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

}
customElements.define('scene-window-link', SceneWindowLink);
