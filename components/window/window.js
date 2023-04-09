import TailwindStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import SceneWindowStyle from "./window.css?inline";

export class SceneWindow extends LitElement {
    static styles = [
        unsafeCSS(TailwindStyles),
        unsafeCSS(SceneWindowStyle),
    ];

    static properties = {
        title: { type: String },
        path: { type: String, reflect: true },
    };

    constructor() {
        super();
        this.title = "Scene Window";
        this.path = "/";

        this.requestUpdate();
        this.addEventListener('click', this.clickHandler);
        this.addEventListener('scenewindowback', this.backHandler);
    }

    get pageList() {
        return Array.from(this.childNodes).filter(node => {
            return typeof node.getAttribute === 'function' && node.getAttribute('slot').indexOf('/') == 0
        }).map((el) => {
            return {
                title: el.getAttribute('title'),
                path: el.getAttribute('slot'),
            };
        });
    }

    render() {
        return html`
            <div class="window-dialog">
                <div class="window-content flex-flow-y">
                    <div class="window-header relative">
                        <div class="window-title">
                            <h1>${ this.title }</h1>
                        </div>
                        <!-- Window Header Buttons -->
                        <div class="absolute inset-0 flex items-center justify-end">
                            <slot name="window-header-right"></slot>
                        </div>
                    </div>

                    <div class="flex-flow-x grow">

                        <div class="window-aside w-32 flex flex-col py-4 overflow-y-auto">
                            <slot name="aside"></slot>
                        </div>
                        
                        ${this.pageList && this.pageList.map((page) => {
                            let pagePath = page.path.split('/');
                            if(pagePath.length <= 2) {
                                return html`
                                    <scene-window-main path=${this.path.indexOf('/' + pagePath[1]) == 0 ? this.path : page.path } class="${ this.path.indexOf(('/' + pagePath[1])) >= 0 ? '' : 'hidden' }">
                                        <slot name="/${ pagePath[1] }"></slot>
                                        ${ 
                                            Array.from(this.pageList).filter((page) => {
                                                return page.path !== ('/' + pagePath[1]) && page.path.indexOf(('/' + pagePath[1])) >= 0;
                                            }).map((page) => {
                                                return html`
                                                    <slot name="${ page.path }"></slot>
                                                `;
                                            })
                                        }
                                    </scene-window-mian>
                                `;
                            }}, this)
                        }
                    </div>
                </div>
            </div>
        `;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        switch (name) {
            case 'path':
                let asideItems = this?.shadowRoot?.querySelector('slot[name="aside"]')?.assignedElements();
                asideItems && asideItems.map((el) => {
                    el.tagName === 'SCENE-WINDOW-ASIDE-ITEM' && (el.active = this.path.indexOf(el.href) == 0);
                }, this);
                break;
            default:
                break;
        }
    }

    clickHandler(e) {
        switch (e.target.tagName) {
            case 'SCENE-WINDOW-ASIDE-ITEM':
                this.path = e.target.getAttribute('href');
                break;
            case 'SCENE-WINDOW-LINK':
                this.path = e.target.getAttribute('href');
                break;
            default:
                break;
        }
    }

    backHandler(e) {
        this.path = this.path.substring(0, this.path.lastIndexOf('/'));
    }
}
customElements.define('scene-window', SceneWindow);
