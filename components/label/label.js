import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

export class SceneLabel extends LitElement {
    static styles = css`
        :host {
            display: inline;
            position: relative;
        }

        span {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            white-space: nowrap;
            transform-origin: left;
            transition-duration: 0.3s;
            transition-function: ease-in-out;
            transition-property: transform, opacity, filter;
            animation: appear 0.5s ease-in-out;
        }

        .no-animation {
            animation: none;
        }

        .disappear {
            opacity: 0;
            filter: blur(2px)
        }

        @keyframes appear {
            from { opacity: 0; filter: blur(2px); }
            30%  { opacity: 0; filter: blur(2px); }
            to { opacity: 1; filter: blur(0px); }
        }
    `;

    static properties = {
        label: { type: String },
        labelStack: { type: Array, attribute: false }, // [{ src: '', type: '', stackindex: 1 }]
        labelStackLength: { type: Number, attribute: false },
    };

    constructor() {
        super();
        this.labelStack = [];
        this.labelStackLength = 0;
    }

    connectedCallback() {
        super.connectedCallback();

        this.shadowRoot.addEventListener('animationend', (event) => {
            this.labelStack.forEach(() => {
                if (this.labelStack[0].stackindex < event.target.dataset.stackindex) this.labelStack.shift();
            });
            this.requestUpdate();
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== 'label') return;
        this.labelStack.push({
            label: newValue, 
            stackindex: ++this.labelStackLength
        });
        let newSpan = document.createElement('span');
        newSpan.innerText = newValue;
        this.shadowRoot.appendChild(newSpan);
        // calc width
        let newWidth = newSpan.offsetWidth;
        newSpan.remove();

        this.labelStack.forEach(item => {
            let span = this.shadowRoot.querySelector(`span[data-stackindex="${ item.stackindex }"]`);
            let oldWidth = span.offsetWidth;
            let scale = newWidth / oldWidth;
            item.scaleX = scale;
        })
        this.requestUpdate()
    }

    render() {
        return repeat(this.labelStack, (item) => item.stackindex, (item, index) =>
            html`<span data-stackindex="${ item.stackindex }" class="${ item.stackindex == 1 ? 'no-animation' : '' } ${index == this.labelStack.length - 1 ? '' : 'disappear'}" style="transform: scaleX(${ item.scaleX ? item.scaleX : 1 });">${ item.label }</span>` 
        );
    }

}
customElements.define('scene-label', SceneLabel);