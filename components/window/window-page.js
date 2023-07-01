import TailwindStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import Style from "./window-page.css?inline";

export class SceneWindowPage extends LitElement {
    static styles = [
        unsafeCSS(TailwindStyles),
        unsafeCSS(Style),
    ];

    static properties = {
        caption: { type: String },
    };

    constructor() {
        super();
        this.caption = "Page Caption";
    }

    render() {
        return html`
            <slot></slot>
        `;
    }

}
customElements.define('scene-window-page', SceneWindowPage);
