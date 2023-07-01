import TailwindStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import SceneWindowStyle from "./window.css?inline";

export class SceneWindow extends LitElement {
    static styles = [
        unsafeCSS(TailwindStyles),
        unsafeCSS(SceneWindowStyle),
    ];

    static properties = {
        caption: { type: String },
        path: { type: String, reflect: true },
    };

    constructor() {
        super();
        this.caption = "Scene Window";
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
                caption: el.getAttribute('caption'),
                path: el.getAttribute('slot'),
            };
        });
    }

    render() {
        return html`
            <div class="window-dialog">
                <div class="window-content flex-flow-y">
                    <div class="window-header relative">
                        <div class="window-caption">
                            <h1>${ this.caption }</h1>
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
        let target;
        switch (true) {
            case (target  = e.target.closest('scene-window-aside-item')) !== null:
                this.path = target.getAttribute('href');
                break;
            case (target  = e.target.closest('scene-window-link')) !== null:
                this.path = target.getAttribute('href');
                break;
        }
    }

    backHandler(e) {
        this.path = this.path.substring(0, this.path.lastIndexOf('/'));
    }

    path_getAbsolutePath(relativePath) {
        let currentPath = this.path;
        if (!currentPath.endsWith('/'))  currentPath += '/';
        if (!currentPath.startsWith('/')) currentPath = '/' + currentPath;
        let absolutePath = new URL(relativePath, 'file://' + currentPath).pathname;
        return absolutePath;
    }

    path_goto(relativePath) {
        this.path = this.path_getAbsolutePath(relativePath);
    }

    path_exists(relativePath) {
        let absolutePath = this.path_getAbsolutePath(relativePath);
        let page = this.querySelector(`[slot="${absolutePath}"]`);
        return page !== null;
    }

    page_exists(relativePath) {
        return this.path_exists(relativePath);
    }

    page_add(element, relativePath, caption = '') {
        let absolutePath = this.path_getAbsolutePath(relativePath);

        let newPage = document.createElement('scene-window-page');
        newPage.setAttribute('slot', absolutePath);
        newPage.setAttribute('caption', caption);
        newPage.appendChild(element);
        this.appendChild(newPage);
        return newPage;
    }
}
customElements.define('scene-window', SceneWindow);
