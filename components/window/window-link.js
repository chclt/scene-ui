import { LitElement, html, unsafeCSS } from 'lit';

import Style from "./window-link.css?inline";

export class SceneWindowLink extends LitElement {
    static styles = [
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
            <a href="#" @click="${(e) => { e.preventDefault();} }"><slot></slot></a>
        `;
    }

}
customElements.define('scene-window-link', SceneWindowLink);
