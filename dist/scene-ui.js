var yt=Object.defineProperty;var xt=(r,t,e)=>t in r?yt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>(xt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=window,tt=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),it=new WeakMap;let wt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&it.set(e,t))}return t}toString(){return this.cssText}};const b=r=>new wt(typeof r=="string"?r:r+"",void 0,et),ft=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new wt(e,r,et)},$t=(r,t)=>{tt?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=L.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},st=tt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return b(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const T=window,rt=T.trustedTypes,_t=rt?rt.emptyScript:"",ot=T.reactiveElementPolyfillSupport,q={toAttribute(r,t){switch(t){case Boolean:r=r?_t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},gt=(r,t)=>t!==r&&(t==t||r==r),B={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:gt};let x=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=B){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||B}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(st(s))}else t!==void 0&&e.push(st(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=B){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:q).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=s.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:q;this._$El=o,this[o]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||gt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},ot==null||ot({ReactiveElement:x}),((j=T.reactiveElementVersions)!==null&&j!==void 0?j:T.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const M=window,_=M.trustedTypes,nt=_?_.createPolicy("lit-html",{createHTML:r=>r}):void 0,W="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+m,At=`<${bt}>`,A=document,C=()=>A.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",vt=Array.isArray,kt=r=>vt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",D=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,y=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ct=/"/g,mt=/^(?:script|style|textarea|title)$/i,Et=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=Et(1),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ht=new WeakMap,$=A.createTreeWalker(A,129,null,!1),St=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=S;for(let a=0;a<e;a++){const l=r[a];let v,d,h=-1,w=0;for(;w<l.length&&(n.lastIndex=w,d=n.exec(l),d!==null);)w=n.lastIndex,n===S?d[1]==="!--"?n=at:d[1]!==void 0?n=lt:d[2]!==void 0?(mt.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=s??S,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,v=d[1],n=d[3]===void 0?y:d[3]==='"'?ct:dt):n===ct||n===dt?n=y:n===at||n===lt?n=S:(n=y,s=void 0);const O=n===y&&r[a+1].startsWith("/>")?" ":"";o+=n===S?l+At:h>=0?(i.push(v),l.slice(0,h)+W+l.slice(h)+m+O):l+m+(h===-2?(i.push(void 0),a):O)}const c=o+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nt!==void 0?nt.createHTML(c):c,i]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[l,v]=St(t,e);if(this.el=z.createElement(l,i),$.currentNode=this.el.content,e===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=$.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith(W)||h.startsWith(m)){const w=v[n++];if(d.push(h),w!==void 0){const O=s.getAttribute(w.toLowerCase()+W).split(m),H=/([.?@])?(.*)/.exec(w);a.push({type:1,index:o,name:H[2],strings:O,ctor:H[1]==="."?Pt:H[1]==="?"?Ut:H[1]==="@"?Nt:R})}else a.push({type:6,index:o})}for(const h of d)s.removeAttribute(h)}if(mt.test(s.tagName)){const d=s.textContent.split(m),h=d.length-1;if(h>0){s.textContent=_?_.emptyScript:"";for(let w=0;w<h;w++)s.append(d[w],C()),$.nextNode(),a.push({type:2,index:++o});s.append(d[h],C())}}}else if(s.nodeType===8)if(s.data===bt)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(m,d+1))!==-1;)a.push({type:7,index:o}),d+=m.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var s,o,n,c;if(t===k)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=P(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=E(r,a._$AS(r,t.values),a,i)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);$.currentNode=o;let n=$.nextNode(),c=0,a=0,l=s[0];for(;l!==void 0;){if(c===l.index){let v;l.type===2?v=new U(n,n.nextSibling,this,t):l.type===1?v=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(v=new Ot(n,this,t)),this._$AV.push(v),l=s[++a]}c!==(l==null?void 0:l.index)&&(n=$.nextNode(),c++)}return o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):kt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=z.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const n=new Ct(o,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new z(t)),e}T(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class R{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const c=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=E(this,c[i+a],e,a),l===k&&(l=this._$AH[a]),n||(n=!P(l)||l!==this._$AH[a]),l===p?t=p:t!==p&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const zt=_?_.emptyScript:"";class Ut extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,zt):this.element.removeAttribute(this.name)}}class Nt extends R{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:p)===k)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const pt=M.litHtmlPolyfillSupport;pt==null||pt(z,U),((I=M.litHtmlVersions)!==null&&I!==void 0?I:M.litHtmlVersions=[]).push("2.7.2");const Ht=(r,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=n=new U(t.insertBefore(C(),c),c,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F,V;class g extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return k}}g.finalized=!0,g._$litElement$=!0,(F=globalThis.litElementHydrateSupport)===null||F===void 0||F.call(globalThis,{LitElement:g});const ut=globalThis.litElementPolyfillSupport;ut==null||ut({LitElement:g});((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.3.1");class Z extends g{constructor(){super(),this.checked=!1,this.label=""}render(){return f`
            <div @click=${this.toggleChecked} 
                class="scene-switch-container">
                <div class="scene-switch-track">
                    <div class="scene-switch-indicator-on"></div>
                    <div class="scene-switch-thumb"></div>
                    <div class="scene-switch-indicator-off"></div>
                </div>
            </div>

            ${this.label&&f`<span class="scene-switch-label">${this.label}</span>`}
      `}toggleChecked(){this.checked=!this.checked}}u(Z,"styles",ft`
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
    `),u(Z,"properties",{checked:{type:Boolean,reflect:!0},label:{type:String}});customElements.define("scene-switch",Z);class X extends g{constructor(){super(),this.label=""}render(){return f`
                <div class="scene-toast">
                    ${this.text}
                </div>
      `}}u(X,"styles",ft`
        :host {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            padding: 2rem;
            width: fit-content;
            z-index: 50;
        }

        .scene-toast {
            padding: 0.75rem 1.5rem;
            max-width: 20rem;

            color: #996B3D;
            font-weight: 500;
            
            border: 1px solid #BD9A76;
            border-radius: 0.75rem;
            
            background-image: var(--scene-amber);
            box-shadow: 0px 0px 8px 0px #BD9A7633;
            
            text-wrap: balance;

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

    `),u(X,"properties",{text:{type:String}});customElements.define("scene-toast",X);const N=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.bottom-0{bottom:0px}.left-0{left:0px}.right-0{right:0px}.top-0{top:0px}.z-10{z-index:10}.z-50{z-index:50}.-m-2{margin:-.5rem}.m-auto{margin:auto}.box-content{box-sizing:content-box}.block{display:block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-96{height:24rem}.h-full{height:100%}.max-h-full{max-height:100%}.w-32{width:8rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-xs{max-width:20rem}.flex-shrink{flex-shrink:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-col{flex-direction:column}.place-items-center{place-items:center}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-solid{border-style:solid}.border-\\[\\#BD9A76\\]{--tw-border-opacity: 1;border-color:rgb(189 154 118 / var(--tw-border-opacity))}.bg-\\[\\#ddd\\]{--tw-bg-opacity: 1;background-color:rgb(221 221 221 / var(--tw-bg-opacity))}.fill-\\[\\#adadad\\]{fill:#adadad}.p-0{padding:0}.p-2{padding:.5rem}.p-8{padding:2rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.font-medium{font-weight:500}.text-\\[\\#996B3D\\]{--tw-text-opacity: 1;color:rgb(153 107 61 / var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.flex-flow-y{display:flex;flex-direction:column;overflow-y:hidden}.flex-flow-x{display:flex;flex-direction:row;overflow-x:hidden}.window-dialog{margin-left:auto;margin-right:auto;display:flex;height:100%;max-height:100%;width:100%;overflow:hidden}.window-content{width:100%;border-radius:.5rem}.window-aside{flex:none;border-right-width:1px;--tw-border-opacity: 1;border-right-color:rgb(222 222 222 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(246 246 246 / var(--tw-bg-opacity))}.window-main{flex:1 1 0%;overflow:hidden}.window-header,.window-footer{display:flex;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(254 254 254 / var(--tw-bg-opacity));padding:.5rem}.window-header{border-bottom-width:1px;--tw-border-opacity: 1;border-bottom-color:rgb(236 236 236 / var(--tw-border-opacity))}.window-footer{border-top-width:1px;--tw-border-opacity: 1;border-top-color:rgb(236 236 236 / var(--tw-border-opacity))}.window-body{display:flex;height:100%;flex-direction:column;--tw-bg-opacity: 1;background-color:rgb(239 239 239 / var(--tw-bg-opacity))}.window-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end}.window-title{font-weight:600;--tw-text-opacity: 1;color:rgb(100 100 100 / var(--tw-text-opacity))}.window-title h1{margin:0;font-size:.875rem;line-height:1.5}
`,Lt=`:host{display:block;overflow:hidden}
`;class K extends g{constructor(){super(),this.title="Scene Window",this.path="/",this.requestUpdate(),this.addEventListener("click",this.clickHandler),this.addEventListener("scenewindowback",this.backHandler)}get pageList(){return Array.from(this.childNodes).filter(t=>typeof t.getAttribute=="function"&&t.getAttribute("slot").indexOf("/")==0).map(t=>({title:t.getAttribute("title"),path:t.getAttribute("slot")}))}render(){return f`
            <div class="window-dialog">
                <div class="window-content flex-flow-y">
                    <div class="window-header relative">
                        <div class="window-title">
                            <h1>${this.title}</h1>
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
                        
                        ${this.pageList&&this.pageList.map(t=>{let e=t.path.split("/");if(e.length<=2)return f`
                                    <scene-window-main path=${this.path.indexOf("/"+e[1])==0?this.path:t.path} class="${this.path.indexOf("/"+e[1])>=0?"":"hidden"}">
                                        <slot name="/${e[1]}"></slot>
                                        ${Array.from(this.pageList).filter(i=>i.path!=="/"+e[1]&&i.path.indexOf("/"+e[1])>=0).map(i=>f`
                                                    <slot name="${i.path}"></slot>
                                                `)}
                                    </scene-window-mian>
                                `},this)}
                    </div>
                </div>
            </div>
        `}attributeChangedCallback(t,e,i){var s,o;switch(super.attributeChangedCallback(t,e,i),t){case"path":let n=(o=(s=this==null?void 0:this.shadowRoot)==null?void 0:s.querySelector('slot[name="aside"]'))==null?void 0:o.assignedElements();n&&n.map(c=>{c.tagName==="SCENE-WINDOW-ASIDE-ITEM"&&(c.active=this.path.indexOf(c.href)==0)},this);break}}clickHandler(t){let e;switch(!0){case(e=t.target.closest("scene-window-aside-item"))!==null:this.path=e.getAttribute("href");break;case(e=t.target.closest("scene-window-link"))!==null:this.path=e.getAttribute("href");break}}backHandler(t){this.path=this.path.substring(0,this.path.lastIndexOf("/"))}path_getAbsolutePath(t){let e=this.path;return e.endsWith("/")||(e+="/"),e.startsWith("/")||(e="/"+e),new URL(t,"file://"+e).pathname}path_goto(t){this.path=this.path_getAbsolutePath(t)}path_exists(t){let e=this.path_getAbsolutePath(t);return this.querySelector(`[slot="${e}"]`)!==null}page_exists(t){return this.path_exists(t)}page_add(t,e,i=""){let s=this.path_getAbsolutePath(e),o=document.createElement("scene-window-page");return o.setAttribute("slot",s),o.setAttribute("title",i),o.appendChild(t),this.appendChild(o),o}}u(K,"styles",[b(N),b(Lt)]),u(K,"properties",{title:{type:String},path:{type:String,reflect:!0}});customElements.define("scene-window",K);const Tt=`:host{display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;line-height:1}:host(:hover),:host([active]){--tw-bg-opacity: 1;background-color:rgb(238 238 238 / var(--tw-bg-opacity));box-shadow:inset 0 1px #dedede,inset 0 -1px #dedede}::slotted([slot="icon"]){height:1.25rem;width:1.25rem}::slotted(*){font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(100 100 100 / var(--tw-text-opacity))}
`;class J extends g{constructor(){super(),this.href="#",this.active=!1}render(){return f`
            <div class="w-5 h-5 flex-shrink-0">
                <slot name="icon"></slot>
            </div>
            <span class="whitespace-nowrap overflow-hidden">
                <slot></slot>
            </span>
        `}}u(J,"styles",[b(N),b(Tt)]),u(J,"properties",{href:{type:String},active:{type:Boolean,reflect:!0}});customElements.define("scene-window-aside-item",J);const Mt=`:host{display:inline;cursor:pointer;text-decoration-line:underline}
`;class Y extends g{constructor(){super()}render(){return f`
            <slot></slot>
        `}}u(Y,"styles",[b(N),b(Mt)]),u(Y,"properties",{href:{type:String}});customElements.define("scene-window-link",Y);const Rt=`:host{display:flex;flex:1 1 0%;flex-direction:column;overflow:hidden;overflow-y:hidden}::slotted(*){flex-shrink:0}
`;class G extends g{constructor(){super(),this.requestUpdate()}get pageList(){return Array.from(this.childNodes).filter(t=>t.tagName==="SLOT").map(t=>(t=t.assignedElements()[0],{title:t.title,path:t.slot}))}render(){return f`
            <div class="window-flow-y flex-grow max-h-full" style="--scene-window-page: ${this.pageList.findIndex(t=>t.path==this.path)};">
                <div class="relative window-body p-0 flex-grow overflow-y-auto overflow-x-hidden">
                    <header class="window-header absolute top-0 left-0 right-0 z-10">
                        <div class="w-full h-full relative">
                            <!-- Titles -->
                            <div class="relative w-full h-full overflow-x-hidden" style="-webkit-mask-image: linear-gradient(to right, transparent 2rem, #FFF 4rem, #FFF calc(100% - 4rem), transparent calc(100% - 2rem));">
                                <div class="relative w-full h-full flex whitespace-nowrap transition-transform" style="transform: translateX(calc(-100% * var(--scene-window-page, 0)));">
                                    ${this.pageList.map(t=>f`
                                                <div class="window-title shrink-0 relative w-full h-full grid place-items-center">
                                                    <h3>${t.title}</h3>
                                                </div>
                                            `)}
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="-m-2 absolute inset-0 flex items-center justify-between">
                                <div class="flex items-center">
                                    <button @click=${this.back} class="box-content p-2 w-6 h-6" type="button" aria-label="Back" style="
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
        `}back(){this.dispatchEvent(new CustomEvent("scenewindowback",{bubbles:!0,composed:!0}))}}u(G,"styles",[b(N),b(Rt)]),u(G,"properties",{path:{type:String,reflect:!0}});customElements.define("scene-window-main",G);const jt=`:host{width:100%;overflow:auto;white-space:normal;padding-top:2.5rem}
`;class Q extends g{constructor(){super(),this.title="Page Title"}render(){return f`
            <slot></slot>
        `}}u(Q,"styles",[b(N),b(jt)]),u(Q,"properties",{title:{type:String}});customElements.define("scene-window-page",Q);console.log("scene-ui.js");document.body.addEventListener("scenetoast",r=>{console.log("scenetoast",r.detail);const t=document.createElement("scene-toast");t.text=r.detail.text,document.body.appendChild(t)});
