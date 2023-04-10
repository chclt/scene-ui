import { LitElement, html, css } from 'lit';

export class SceneSwitch extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .scene-switch-container {
            --switch-width: 3rem;
            --switch-height: 1.5rem;

            --switch-thumb-size: 1.25rem;
            --padding: calc((var(--switch-height) - var(--switch-thumb-size)) / 2);

            width: var(--switch-width);
            height: var(--switch-height);
            flex-shrink: 0;
            display: inline-block;
            overflow: hidden;
            position: relative;
            box-sizing: content-box;
            border-radius: 99px;
            border: 1px solid #f5f5f5;
            background-color: #eaeaea;
            box-shadow: inset 0 0 12px 0 rgb(0 0 0 / 0.05);

            transition-property: background;
            transition-duration: 200ms;
        }

        .scene-switch-track {
            position: absolute;
            width: calc(200% - 4 * var(--padding)  - var(--switch-thumb-size));
            height: calc(100% - 2 * var(--padding));
        
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            top: var(--padding);
            left: calc(-100% + 3 * var(--padding) + var(--switch-thumb-size));
            transition-property: left;
            transition-timing-function: ease-in-out;
            transition-duration: 200ms;
        }

        :host([checked]) .scene-switch-container {
            background-color: #f43f5e;
        }

        .form-check-input:focus + .scene-switch-container {
            border-color: #f43f5e;
            outline: 0;
            box-shadow: 0 0 0 0.25rem rgb(244 63 94 / 25%);
        }

        .form-check-input:active + .scene-switch-container {
            filter: brightness(90%);
        }

        :host([checked]) .scene-switch-container .scene-switch-track {
            left: var(--padding);
        }

        .scene-switch-indicator-on::after, .scene-switch-indicator-off::after {
            content: "";
            display: block;
            box-sizing: border-box;
            border: 1px solid rgb(180 180 180 /30%);
            background-color: rgb(200 200 200 /50%);
            box-shadow: inset 0 0 8px 0 rgb(255 255 255 / 0.05);
        }

        .scene-switch-indicator-on::after {
            width: 4px;
            height: 12px;
            border-radius: 2px;
        }
        
        .scene-switch-indicator-off::after {
            padding: 2px;
            width: 12px;
            height: 12px;
            border-radius: 99px;
        }

        .scene-switch-thumb, .scene-switch-indicator-on, .scene-switch-indicator-off {
            width: var(--switch-thumb-size);
            height: var(--switch-thumb-size);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .scene-switch-thumb {
            border-radius: 99px;
            background-color: white;
            box-shadow: 0 0 8px 0 rgb(0 0 0 / 0.05);
        }
        
        .scene-switch-label {
            margin-left: 0.75rem;
        }
    `;

    static properties = {
        checked: { type: Boolean, reflect: true },
        label: { type: String },
    };

    constructor() {
        super();
        this.checked = false;
        this.label = '';
    }

    render() {
        return html`
            <div @click=${ this.toggleChecked } 
                class="scene-switch-container">
                <div class="scene-switch-track">
                    <div class="scene-switch-indicator-on"></div>
                    <div class="scene-switch-thumb"></div>
                    <div class="scene-switch-indicator-off"></div>
                </div>
            </div>

            ${ this.label && html`<span class="scene-switch-label">${ this.label }</span>` }
      `;
    }

    toggleChecked() {
        this.checked = !this.checked;
    }
}
customElements.define('scene-switch', SceneSwitch);
