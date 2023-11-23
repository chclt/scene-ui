import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

export class SceneImage extends LitElement {
    static styles = css`
        :host {
            position: relative;
            display: block;
        }

        div, video {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            animation-name: fade-in;
            animation-duration: inherit;
            animation-timing-function: inherit;
            animation-delay: inherit;
        }
        
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        div {
            background-size: inherit;
            background-position: inherit;
        }

        .no-animation {
            animation: none;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;

    static properties = {
        src: { type: String },
        type: { type: String },
        imageStack: { type: Array, attribute: false }, // [{ src: '', type: '', stackindex: 1 }]
        imageStackLength: { type: Number, attribute: false },
    };

    constructor() {
        super();
        this.imageStack = [];
        this.imageStackLength = 0;
    }

    connectedCallback() {
        super.connectedCallback();

        this.shadowRoot.addEventListener('animationend', (event) => {
            this.imageStack.forEach(() => {
                if (this.imageStack[0].stackindex < event.target.dataset.stackindex) this.imageStack.shift();
            });
            this.requestUpdate();
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== 'src') return;
        this.imageStack.push({ src: newValue, type: this.getAttribute('type') == 'video' ? 'video' : 'image', stackindex: ++this.imageStackLength });
        this.requestUpdate()
    }

    render() {
        return repeat(this.imageStack, (item) => item.stackindex, (item) =>
            item.type == 'video' ? 
            html`<video data-stackindex="${ item.stackindex }" class="${ item.stackindex == 1 ? 'no-animation' : '' }" src="${ item.src }" autoplay muted loop></video>` : 
            html`<div data-stackindex="${ item.stackindex }" class="${ item.stackindex == 1 ? 'no-animation' : '' }" style="background-image: url('${ item.src }');"></div>`
        );
    }

}
customElements.define('scene-image', SceneImage);
