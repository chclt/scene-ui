import { LitElement, html, css } from 'lit';

export class SceneRaisin extends LitElement {
    static styles = css`
        :host {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            padding: 2rem;
            width: fit-content;
            z-index: 50;
            pointer-events: none;
        }

        .scene-raisin {
            padding: 0.75rem 1.5rem;
            max-width: 20rem;

            color: #996B3D;
            font-weight: 500;
            
            border: 1px solid #BD9A76;
            border-radius: 0.75rem;
            
            background-image: var(--scene-amber);
            box-shadow: 0px 0px 8px 0px #BD9A7633;

            text-align: center;
            pointer-events: auto;
            
            /*
            animation: fade 0.5s, fade 0.5s 2.5s forwards reverse;
            */

            animation: blurFade 0.2s ease-in-out, blurFade 0.2s 2.8s forwards reverse ease-in-out;
        }

        @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes blurFade {
            from { opacity: 0; filter: blur(12px); }
            to { opacity: 1; filter: blur(0px); }
        }

    `;

    static properties = {
        text: { type: String },
    };

    constructor() {
        super();
        this.label = '';
    }

    connectedCallback() {
        super.connectedCallback();
        let flag = false;
        this.shadowRoot.addEventListener('animationend', (event) => {
            if (flag) this.remove();
            flag = true;
        });
    }

    render() {
        return html`
                <div class="scene-raisin">
                    ${ this.text}
                </div>
      `;
    }

}
customElements.define('scene-raisin', SceneRaisin);
