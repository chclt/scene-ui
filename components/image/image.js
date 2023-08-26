import { LitElement, html, css } from 'lit';

export class SceneImage extends LitElement {
    static styles = css`
        :host {
            position: relative;
            display: block;
        }

        .img-old {
            position: absolute;
            inset: 0;
            background-size: inherit;
            background-position: inherit;
        }

        .img-new {
            position: absolute;
            inset: 0;
            background-size: inherit;
            background-position: inherit;
            opacity: 1;
            transition-property: opacity;
            transition-duration: inherit;
            transition-timing-function: inherit;
            transition-delay: inherit;
        }

        .no-transition {
            transition: none;
            opacity: 0;
        }
    `;

    static properties = {
        src: { type: String },
        _oldSrc: { type: String },
        _newSrc: { type: String },
    };

    constructor() {
        super();
        this.imageInited = false;
        this._oldSrc = '';
        this._newSrc = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.shadowRoot.addEventListener('transitionend', (event) => {
            if (event.target.classList.contains('no-transition')) return;
            this._oldSrc = this._newSrc;
            this._newSrc = '';
            this.shadowRoot.querySelector('.img-new').classList.add('no-transition');
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== 'src') return;
        if (!this.imageInited) {
            this._oldSrc = newValue;
            this.imageInited = true;
        } else {
            this._newSrc = newValue;
            this.shadowRoot.querySelector('.img-new').classList.remove('no-transition');
        }
    }

    render() {
        return html`
            <div class="img-old" style="background-image: url('${ this._oldSrc }');"></div>
            <div class="img-new no-transition" style="background-image: url('${ this._newSrc }');"></div>
      `;
    }

}
customElements.define('scene-image', SceneImage);
