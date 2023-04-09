import TailwindStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import Style from "./window-page.css?inline";

export class SceneWindowPage extends LitElement {
    static styles = [
        unsafeCSS(TailwindStyles),
        unsafeCSS(Style),
    ];

    static properties = {
        title: { type: String },
    };

    constructor() {
        super();
        this.title = "Page Title";
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

}
customElements.define('scene-window-page', SceneWindowPage);
