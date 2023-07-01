var bt=Object.defineProperty;var mt=(s,t,e)=>t in s?bt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var u=(s,t,e)=>(mt(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=window,Q=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),et=new WeakMap;let ut=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&et.set(e,t))}return t}toString(){return this.cssText}};const f=s=>new ut(typeof s=="string"?s:s+"",void 0,tt),yt=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new ut(e,s,tt)},$t=(s,t)=>{Q?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),r=L.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)})},it=Q?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return f(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const M=window,rt=M.trustedTypes,xt=rt?rt.emptyScript:"",st=M.reactiveElementPolyfillSupport,q={toAttribute(s,t){switch(t){case Boolean:s=s?xt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},wt=(s,t)=>t!==s&&(t==t||s==s),B={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:wt};let $=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this._$Ep(i,e);r!==void 0&&(this._$Ev.set(r,i),t.push(r))}),t}static createProperty(t,e=B){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||B}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of i)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(it(r))}else t!==void 0&&e.push(it(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=B){var r;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const n=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:q).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Ev.get(t);if(o!==void 0&&this._$El!==o){const n=r.getPropertyOptions(o),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:q;this._$El=o,this[o]=h.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||wt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(i)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},st==null||st({ReactiveElement:$}),((j=M.reactiveElementVersions)!==null&&j!==void 0?j:M.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const R=window,_=R.trustedTypes,ot=_?_.createPolicy("lit-html",{createHTML:s=>s}):void 0,W="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,ft="?"+m,_t=`<${ft}>`,A=document,C=()=>A.createComment(""),P=s=>s===null||typeof s!="object"&&typeof s!="function",gt=Array.isArray,At=s=>gt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",F=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,at=/>/g,y=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,vt=/^(?:script|style|textarea|title)$/i,kt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),b=kt(1),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ht=new WeakMap,x=A.createTreeWalker(A,129,null,!1),Et=(s,t)=>{const e=s.length-1,i=[];let r,o=t===2?"<svg>":"",n=S;for(let a=0;a<e;a++){const l=s[a];let v,d,c=-1,w=0;for(;w<l.length&&(n.lastIndex=w,d=n.exec(l),d!==null);)w=n.lastIndex,n===S?d[1]==="!--"?n=nt:d[1]!==void 0?n=at:d[2]!==void 0?(vt.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=r??S,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,v=d[1],n=d[3]===void 0?y:d[3]==='"'?dt:lt):n===dt||n===lt?n=y:n===nt||n===at?n=S:(n=y,r=void 0);const O=n===y&&s[a+1].startsWith("/>")?" ":"";o+=n===S?l+_t:c>=0?(i.push(v),l.slice(0,c)+W+l.slice(c)+m+O):l+m+(c===-2?(i.push(void 0),a):O)}const h=o+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ot!==void 0?ot.createHTML(h):h,i]};class U{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[l,v]=Et(t,e);if(this.el=U.createElement(l,i),x.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(r=x.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const c of r.getAttributeNames())if(c.endsWith(W)||c.startsWith(m)){const w=v[n++];if(d.push(c),w!==void 0){const O=r.getAttribute(w.toLowerCase()+W).split(m),H=/([.?@])?(.*)/.exec(w);a.push({type:1,index:o,name:H[2],strings:O,ctor:H[1]==="."?Ct:H[1]==="?"?Ut:H[1]==="@"?Nt:T})}else a.push({type:6,index:o})}for(const c of d)r.removeAttribute(c)}if(vt.test(r.tagName)){const d=r.textContent.split(m),c=d.length-1;if(c>0){r.textContent=_?_.emptyScript:"";for(let w=0;w<c;w++)r.append(d[w],C()),x.nextNode(),a.push({type:2,index:++o});r.append(d[c],C())}}}else if(r.nodeType===8)if(r.data===ft)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(m,d+1))!==-1;)a.push({type:7,index:o}),d+=m.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function E(s,t,e=s,i){var r,o,n,h;if(t===k)return t;let a=i!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[i]:e._$Cl;const l=P(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,i)),i!==void 0?((n=(h=e)._$Co)!==null&&n!==void 0?n:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=E(s,a._$AS(s,t.values),a,i)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);x.currentNode=o;let n=x.nextNode(),h=0,a=0,l=r[0];for(;l!==void 0;){if(h===l.index){let v;l.type===2?v=new N(n,n.nextSibling,this,t):l.type===1?v=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(v=new zt(n,this,t)),this._$AV.push(v),l=r[++a]}h!==(l==null?void 0:l.index)&&(n=x.nextNode(),h++)}return o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class N{constructor(t,e,i,r){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):At(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=U.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const n=new St(o,this),h=n.u(this.options);n.v(i),this.$(h),this._$AH=n}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new U(t)),e}T(t){gt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new N(this.k(C()),this.k(C()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class T{constructor(t,e,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const h=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=E(this,h[i+a],e,a),l===k&&(l=this._$AH[a]),n||(n=!P(l)||l!==this._$AH[a]),l===p?t=p:t!==p&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}n&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Pt=_?_.emptyScript:"";class Ut extends T{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Pt):this.element.removeAttribute(this.name)}}class Nt extends T{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:p)===k)return;const r=this._$AH,o=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class zt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const ct=R.litHtmlPolyfillSupport;ct==null||ct(U,N),((I=R.litHtmlVersions)!==null&&I!==void 0?I:R.litHtmlVersions=[]).push("2.7.2");const Ot=(s,t,e)=>{var i,r;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=o._$litPart$;if(n===void 0){const h=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new N(t.insertBefore(C(),h),h,void 0,e??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D,V;class g extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return k}}g.finalized=!0,g._$litElement$=!0,(D=globalThis.litElementHydrateSupport)===null||D===void 0||D.call(globalThis,{LitElement:g});const pt=globalThis.litElementPolyfillSupport;pt==null||pt({LitElement:g});((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.3.1");class Z extends g{constructor(){super(),this.label=""}render(){return b`
                <div class="scene-toast">
                    ${this.text}
                </div>
      `}}u(Z,"styles",yt`
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

    `),u(Z,"properties",{text:{type:String}});customElements.define("scene-toast",Z);const z=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.left-0{left:0px}.right-0{right:0px}.top-0{top:0px}.z-10{z-index:10}.-m-2{margin:-.5rem}.box-content{box-sizing:content-box}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-96{height:24rem}.h-full{height:100%}.max-h-full{max-height:100%}.w-32{width:8rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-full{width:100%}.flex-shrink-0,.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-col{flex-direction:column}.place-items-center{place-items:center}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.whitespace-nowrap{white-space:nowrap}.border{border-width:1px}.border-2{border-width:2px}.border-solid{border-style:solid}.bg-\\[\\#ddd\\]{--tw-bg-opacity: 1;background-color:rgb(221 221 221 / var(--tw-bg-opacity))}.fill-\\[\\#adadad\\]{fill:#adadad}.p-0{padding:0}.p-2{padding:.5rem}.p-8{padding:2rem}.py-4{padding-top:1rem;padding-bottom:1rem}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.outline-2{outline-width:2px}.outline-offset-2{outline-offset:2px}.blur{--tw-blur: blur(8px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.flex-flow-y{display:flex;flex-direction:column;overflow-y:hidden}.flex-flow-x{display:flex;flex-direction:row;overflow-x:hidden}.window-dialog{margin-left:auto;margin-right:auto;display:flex;height:100%;max-height:100%;width:100%;overflow:hidden}.window-content{width:100%;border-radius:.5rem}.window-aside{flex:none;border-right-width:1px;--tw-border-opacity: 1;border-right-color:rgb(222 222 222 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(246 246 246 / var(--tw-bg-opacity))}.window-main{flex:1 1 0%;overflow:hidden}.window-header,.window-footer{display:flex;align-items:center;justify-content:center;--tw-bg-opacity: 1;background-color:rgb(254 254 254 / var(--tw-bg-opacity));padding:.5rem}.window-header{border-bottom-width:1px;--tw-border-opacity: 1;border-bottom-color:rgb(236 236 236 / var(--tw-border-opacity))}.window-footer{border-top-width:1px;--tw-border-opacity: 1;border-top-color:rgb(236 236 236 / var(--tw-border-opacity))}.window-body{display:flex;height:100%;flex-direction:column;--tw-bg-opacity: 1;background-color:rgb(239 239 239 / var(--tw-bg-opacity))}.window-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end}.window-caption{font-weight:600;--tw-text-opacity: 1;color:rgb(100 100 100 / var(--tw-text-opacity))}.window-caption h1{margin:0;font-size:.875rem;line-height:1.5}
`,Ht=`:host{display:block;overflow:hidden}
`;class X extends g{constructor(){super(),this.caption="Scene Window",this.path="/",this.requestUpdate(),this.addEventListener("click",this.clickHandler),this.addEventListener("scenewindowback",this.backHandler)}get pageList(){return Array.from(this.childNodes).filter(t=>typeof t.getAttribute=="function"&&t.getAttribute("slot").indexOf("/")==0).map(t=>({caption:t.getAttribute("caption"),path:t.getAttribute("slot")}))}render(){return b`
            <div class="window-dialog">
                <div class="window-content flex-flow-y">
                    <div class="window-header relative">
                        <div class="window-caption">
                            <h1>${this.caption}</h1>
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
                        
                        ${this.pageList&&this.pageList.map(t=>{let e=t.path.split("/");if(e.length<=2)return b`
                                    <scene-window-main path=${this.path.indexOf("/"+e[1])==0?this.path:t.path} class="${this.path.indexOf("/"+e[1])>=0?"":"hidden"}">
                                        <slot name="/${e[1]}"></slot>
                                        ${Array.from(this.pageList).filter(i=>i.path!=="/"+e[1]&&i.path.indexOf("/"+e[1])>=0).map(i=>b`
                                                    <slot name="${i.path}"></slot>
                                                `)}
                                    </scene-window-mian>
                                `},this)}
                    </div>
                </div>
            </div>
        `}attributeChangedCallback(t,e,i){var r,o;switch(super.attributeChangedCallback(t,e,i),t){case"path":let n=(o=(r=this==null?void 0:this.shadowRoot)==null?void 0:r.querySelector('slot[name="aside"]'))==null?void 0:o.assignedElements();n&&n.map(h=>{h.tagName==="SCENE-WINDOW-ASIDE-ITEM"&&(h.active=this.path.indexOf(h.href)==0)},this);break}}clickHandler(t){let e;switch(!0){case(e=t.target.closest("scene-window-aside-item"))!==null:this.path=e.getAttribute("href");break;case(e=t.target.closest("scene-window-link"))!==null:this.path=e.getAttribute("href");break}}backHandler(t){this.path=this.path.substring(0,this.path.lastIndexOf("/"))}path_getAbsolutePath(t){let e=this.path;return e.endsWith("/")||(e+="/"),e.startsWith("/")||(e="/"+e),new URL(t,"file://"+e).pathname}path_goto(t){this.path=this.path_getAbsolutePath(t)}path_exists(t){let e=this.path_getAbsolutePath(t);return this.querySelector(`[slot="${e}"]`)!==null}page_exists(t){return this.path_exists(t)}page_add(t,e,i=""){let r=this.path_getAbsolutePath(e),o=document.createElement("scene-window-page");return o.setAttribute("slot",r),o.setAttribute("caption",i),o.appendChild(t),this.appendChild(o),o}}u(X,"styles",[f(z),f(Ht)]),u(X,"properties",{caption:{type:String},path:{type:String,reflect:!0}});customElements.define("scene-window",X);const Lt=`:host{display:flex;align-items:center;gap:.5rem;padding:.5rem 1rem;line-height:1}:host(:hover),:host([active]){--tw-bg-opacity: 1;background-color:rgb(238 238 238 / var(--tw-bg-opacity));box-shadow:inset 0 1px #dedede,inset 0 -1px #dedede}::slotted([slot="icon"]){height:1.25rem;width:1.25rem}::slotted(*){font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(100 100 100 / var(--tw-text-opacity))}
`;class K extends g{constructor(){super(),this.href="#",this.active=!1}render(){return b`
            <div class="w-5 h-5 flex-shrink-0">
                <slot name="icon"></slot>
            </div>
            <span class="whitespace-nowrap overflow-hidden">
                <slot></slot>
            </span>
        `}}u(K,"styles",[f(z),f(Lt)]),u(K,"properties",{href:{type:String},active:{type:Boolean,reflect:!0}});customElements.define("scene-window-aside-item",K);const Mt=`:host{display:inline;cursor:pointer;text-decoration-line:underline}
`;class J extends g{constructor(){super()}render(){return b`
            <slot></slot>
        `}}u(J,"styles",[f(z),f(Mt)]),u(J,"properties",{href:{type:String}});customElements.define("scene-window-link",J);const Rt=`:host{display:flex;flex:1 1 0%;flex-direction:column;overflow:hidden;overflow-y:hidden}::slotted(*){flex-shrink:0}
`;class Y extends g{constructor(){super(),this.requestUpdate()}get pageList(){return Array.from(this.childNodes).filter(t=>t.tagName==="SLOT").map(t=>(t=t.assignedElements()[0],{caption:t.caption,path:t.slot}))}render(){return b`
            <div class="window-flow-y flex-grow max-h-full" style="--scene-window-page: ${this.pageList.findIndex(t=>t.path==this.path)};">
                <div class="relative window-body p-0 flex-grow overflow-y-auto overflow-x-hidden">
                    <header class="window-header absolute top-0 left-0 right-0 z-10">
                        <div class="w-full h-full relative">
                            <!-- Captions -->
                            <div class="relative w-full h-full overflow-x-hidden" style="-webkit-mask-image: linear-gradient(to right, transparent 2rem, #FFF 4rem, #FFF calc(100% - 4rem), transparent calc(100% - 2rem));">
                                <div class="relative w-full h-full flex whitespace-nowrap transition-transform" style="transform: translateX(calc(-100% * var(--scene-window-page, 0)));">
                                    ${this.pageList.map(t=>b`
                                                <div class="window-caption shrink-0 relative w-full h-full grid place-items-center">
                                                    <h3>${t.caption}</h3>
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
        `}back(){this.dispatchEvent(new CustomEvent("scenewindowback",{bubbles:!0,composed:!0}))}}u(Y,"styles",[f(z),f(Rt)]),u(Y,"properties",{path:{type:String,reflect:!0}});customElements.define("scene-window-main",Y);const Tt=`:host{width:100%;overflow:auto;white-space:normal;padding-top:2.5rem}
`;class G extends g{constructor(){super(),this.caption="Page Caption"}render(){return b`
            <slot></slot>
        `}}u(G,"styles",[f(z),f(Tt)]),u(G,"properties",{caption:{type:String}});customElements.define("scene-window-page",G);
