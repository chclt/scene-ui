import TailwindStyles from '../tailwind.global.css?inline';
import { LitElement, html, unsafeCSS } from 'lit';

import Style from "./window-main.css?inline";

export class SceneWindowMain extends LitElement {
    static styles = [
        unsafeCSS(TailwindStyles),
        unsafeCSS(Style),
    ];

    static properties = {
        path: { type: String, reflect: true },
    };

    constructor() {
        super();
        
        this.requestUpdate();
    }

    get pageList() {
        return Array.from(this.childNodes).filter(node => {
            return node.tagName === 'SLOT';
        }).map((el) => {
            el = el.assignedElements()[0];
            return {
                caption: el.caption,
                path: el.slot,
            };
        });
    }

    render() {
        return html`
            <div class="window-flow-y flex-grow max-h-full" style="--scene-window-page: ${ this.pageList.findIndex(page => page.path == this.path) };">
                <div class="relative window-body p-0 flex-grow overflow-y-auto overflow-x-hidden">
                    <header class="window-header absolute top-0 left-0 right-0 z-10">
                        <div class="w-full h-full relative">
                            <!-- Captions -->
                            <div class="relative w-full h-full overflow-x-hidden" style="-webkit-mask-image: linear-gradient(to right, transparent 2rem, #FFF 4rem, #FFF calc(100% - 4rem), transparent calc(100% - 2rem));">
                                <div class="relative w-full h-full flex whitespace-nowrap transition-transform" style="transform: translateX(calc(-100% * var(--scene-window-page, 0)));">
                                    ${
                                        this.pageList.map((page) => {
                                            return html`
                                                <div class="window-caption shrink-0 relative w-full h-full grid place-items-center">
                                                    <h3>${page.caption}</h3>
                                                </div>
                                            `;
                                        })
                                    }
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="-m-2 absolute inset-0 flex items-center justify-between">
                                <div class="flex items-center">
                                    <button @click=${ this.back } class="box-content p-2 w-6 h-6" type="button" aria-label="Back" style="
                                        transform: translateX(min(calc((100% + 1rem) * (var(--scene-window-page) - 1)), 0%));
                                        overflow: hidden;
                                        transition: transform 0.2s ease-in-out;
                                    ">
                                        <svg class="w-full h-full fill-[#adadad] icon glyph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="left-circle" width="24" height="24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-3-3a1,1,0,0,1,0-1.42l3-3a1,1,0,0,1,1.42,1.42L11.41,12Z"></path></svg>
                                    </button>                                    
                                </div>

                                <!--
                                <button type="button" class="btn-submit btn-icon" aria-label="Back">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="check-circle" class="icon glyph" width="24" height="24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.71,8.71-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z"></path></svg>
                                </button>
                                -->
                            </div>   
                        </div> 

                    </header>

                    <!-- Pages -->
                    <div class="flex-grow overflow-x-hidden" style="-webkit-mask-image: linear-gradient(to right, transparent 0%, #FFF 1rem, #FFF calc(100% - 1rem), transparent 100%);">
                        <div class="w-full h-full flex whitespace-nowrap transition-transform" style="transform: translateX(calc(-100% * var(--scene-window-page, 0)));">
                            <slot></slot>
                        </div>
                    </div>

                </div>
            </div>

            <!--
            <div class="window-footer">
                骄傲的底部
            </div>
            -->
        `;
    }

    back() {
        this.dispatchEvent(new CustomEvent('scenewindowback', {
            bubbles: true,
            composed: true,
        }));
    }

}
customElements.define('scene-window-main', SceneWindowMain);
