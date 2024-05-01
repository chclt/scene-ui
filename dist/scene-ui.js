var Mt=Object.defineProperty;var Bt=(n,t,e)=>t in n?Mt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var g=(n,t,e)=>(Bt(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window,rt=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),ht=new WeakMap;let xt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ht.set(e,t))}return t}toString(){return this.cssText}};const _=n=>new xt(typeof n=="string"?n:n+"",void 0,ot),at=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new xt(e,n,ot)},jt=(n,t)=>{rt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=B.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},ct=rt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const j=window,pt=j.trustedTypes,zt=pt?pt.emptyScript:"",ut=j.reactiveElementPolyfillSupport,J={toAttribute(n,t){switch(t){case Boolean:n=n?zt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},St=(n,t)=>t!==n&&(t==t||n==n),W={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:St};let E=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||W}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ct(s))}else t!==void 0&&e.push(ct(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return jt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=W){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:J).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:J;this._$El=r,this[r]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||St)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};E.finalized=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},ut==null||ut({ReactiveElement:E}),((F=j.reactiveElementVersions)!==null&&F!==void 0?F:j.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const z=window,P=z.trustedTypes,ft=P?P.createPolicy("lit-html",{createHTML:n=>n}):void 0,D="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,lt="?"+y,Dt=`<${lt}>`,U=document,H=()=>U.createComment(""),T=n=>n===null||typeof n!="object"&&typeof n!="function",kt=Array.isArray,Et=n=>kt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",X=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,gt=/>/g,A=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,$t=/"/g,Ct=/^(?:script|style|textarea|title)$/i,It=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),$=It(1),S=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),wt=new WeakMap,C=U.createTreeWalker(U,129,null,!1),Pt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=L;for(let l=0;l<e;l++){const a=n[l];let m,c,h=-1,p=0;for(;p<a.length&&(o.lastIndex=p,c=o.exec(a),c!==null);)p=o.lastIndex,o===L?c[1]==="!--"?o=vt:c[1]!==void 0?o=gt:c[2]!==void 0?(Ct.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=A):c[3]!==void 0&&(o=A):o===A?c[0]===">"?(o=s??L,h=-1):c[1]===void 0?h=-2:(h=o.lastIndex-c[2].length,m=c[1],o=c[3]===void 0?A:c[3]==='"'?$t:mt):o===$t||o===mt?o=A:o===vt||o===gt?o=L:(o=A,s=void 0);const u=o===A&&n[l+1].startsWith("/>")?" ":"";r+=o===L?a+Dt:h>=0?(i.push(m),a.slice(0,h)+D+a.slice(h)+y+u):a+y+(h===-2?(i.push(void 0),l):u)}const d=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ft!==void 0?ft.createHTML(d):d,i]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const d=t.length-1,l=this.parts,[a,m]=Pt(t,e);if(this.el=R.createElement(a,i),C.currentNode=this.el.content,e===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(s=C.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const h of s.getAttributeNames())if(h.endsWith(D)||h.startsWith(y)){const p=m[o++];if(c.push(h),p!==void 0){const u=s.getAttribute(p.toLowerCase()+D).split(y),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:u,ctor:f[1]==="."?Ot:f[1]==="?"?Lt:f[1]==="@"?Nt:M})}else l.push({type:6,index:r})}for(const h of c)s.removeAttribute(h)}if(Ct.test(s.tagName)){const c=s.textContent.split(y),h=c.length-1;if(h>0){s.textContent=P?P.emptyScript:"";for(let p=0;p<h;p++)s.append(c[p],H()),C.nextNode(),l.push({type:2,index:++r});s.append(c[h],H())}}}else if(s.nodeType===8)if(s.data===lt)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(y,c+1))!==-1;)l.push({type:7,index:r}),c+=y.length-1}r++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function k(n,t,e=n,i){var s,r,o,d;if(t===S)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=T(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=k(n,l._$AS(n,t.values),l,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:U).importNode(i,!0);C.currentNode=r;let o=C.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let m;a.type===2?m=new O(o,o.nextSibling,this,t):a.type===1?m=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(m=new Ht(o,this,t)),this._$AV.push(m),a=s[++l]}d!==(a==null?void 0:a.index)&&(o=C.nextNode(),d++)}return r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,s){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),T(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=R.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const o=new Ut(r,this),d=o.u(this.options);o.v(i),this.$(d),this._$AH=o}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new R(t)),e}T(t){kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new O(this.k(H()),this.k(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,i,s,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=k(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const d=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=k(this,d[i+l],e,l),a===S&&(a=this._$AH[l]),o||(o=!T(a)||a!==this._$AH[l]),a===v?t=v:t!==v&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}o&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const Ft=P?P.emptyScript:"";class Lt extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,Ft):this.element.removeAttribute(this.name)}}class Nt extends M{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=k(this,t,e,0))!==null&&i!==void 0?i:v)===S)return;const s=this._$AH,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const Wt={O:D,P:y,A:lt,C:1,M:Pt,L:Ut,D:Et,R:k,I:O,V:M,H:Lt,N:Nt,U:Ot,F:Ht},bt=z.litHtmlPolyfillSupport;bt==null||bt(R,O),((q=z.litHtmlVersions)!==null&&q!==void 0?q:z.litHtmlVersions=[]).push("2.7.2");const qt=(n,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new O(t.insertBefore(H(),d),d,void 0,e??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,Z;let w=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};w.finalized=!0,w._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:w});const yt=globalThis.litElementPolyfillSupport;yt==null||yt({LitElement:w});((Z=globalThis.litElementVersions)!==null&&Z!==void 0?Z:globalThis.litElementVersions=[]).push("3.3.1");class G extends w{constructor(){super()}connectedCallback(){super.connectedCallback();let t=!1;this.shadowRoot.addEventListener("animationend",e=>{t&&this.remove(),t=!0})}render(){return $`
                <div class="scene-raisin">
                    ${this.text}
                </div>
      `}}g(G,"styles",at`
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
            
            border: 1px solid #BD9A76;
            border-radius: 0.75rem;
            
            background-color: var(--scene-amber);
            box-shadow: 0px 0px 8px 0px #BD9A7633;

            text-align: center;
            pointer-events: auto;
            
            /*
            animation: fade 0.5s, fade 0.5s 2.5s forwards reverse;
            */

            animation: blurFade 0.2s ease-in-out, blurFade 0.2s 3.2s forwards reverse ease-in-out;
        }

        @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes blurFade {
            from { opacity: 0; filter: blur(12px); }
            to { opacity: 1; filter: blur(0px); }
        }

    `),g(G,"properties",{text:{type:String}});customElements.define("scene-raisin",G);document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("sceneraisin",n=>{const t=document.createElement("scene-raisin");t.text=n.detail.text,document.body.appendChild(t)})});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vt=n=>(...t)=>({_$litDirective$:n,values:t});class Zt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Kt}=Wt,_t=()=>document.createComment(""),N=(n,t,e)=>{var i;const s=n._$AA.parentNode,r=t===void 0?n._$AB:t._$AA;if(e===void 0){const o=s.insertBefore(_t(),r),d=s.insertBefore(_t(),r);e=new Kt(o,d,n,n.options)}else{const o=e._$AB.nextSibling,d=e._$AM,l=d!==n;if(l){let a;(i=e._$AQ)===null||i===void 0||i.call(e,n),e._$AM=n,e._$AP!==void 0&&(a=n._$AU)!==d._$AU&&e._$AP(a)}if(o!==r||l){let a=e._$AA;for(;a!==o;){const m=a.nextSibling;s.insertBefore(a,r),a=m}}}return e},x=(n,t,e=n)=>(n._$AI(t,e),n),Jt={},Gt=(n,t=Jt)=>n._$AH=t,Qt=n=>n._$AH,K=n=>{var t;(t=n._$AP)===null||t===void 0||t.call(n,!1,!0);let e=n._$AA;const i=n._$AB.nextSibling;for(;e!==i;){const s=e.nextSibling;e.remove(),e=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=(n,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(n[s],s);return i},Tt=Vt(class extends Zt{constructor(n){if(super(n),n.type!==Xt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],r=[];let o=0;for(const d of n)s[o]=i?i(d,o):o,r[o]=e(d,o),o++;return{values:r,keys:s}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,i]){var s;const r=Qt(n),{values:o,keys:d}=this.dt(t,e,i);if(!Array.isArray(r))return this.ht=d,o;const l=(s=this.ht)!==null&&s!==void 0?s:this.ht=[],a=[];let m,c,h=0,p=r.length-1,u=0,f=o.length-1;for(;h<=p&&u<=f;)if(r[h]===null)h++;else if(r[p]===null)p--;else if(l[h]===d[u])a[u]=x(r[h],o[u]),h++,u++;else if(l[p]===d[f])a[f]=x(r[p],o[f]),p--,f--;else if(l[h]===d[f])a[f]=x(r[h],o[f]),N(n,a[f+1],r[h]),h++,f--;else if(l[p]===d[u])a[u]=x(r[p],o[u]),N(n,r[h],r[p]),p--,u++;else if(m===void 0&&(m=At(d,u,f),c=At(l,h,p)),m.has(l[h]))if(m.has(l[p])){const b=c.get(d[u]),I=b!==void 0?r[b]:null;if(I===null){const dt=N(n,r[h]);x(dt,o[u]),a[u]=dt}else a[u]=x(I,o[u]),N(n,r[h],I),r[b]=null;u++}else K(r[p]),p--;else K(r[h]),h++;for(;u<=f;){const b=N(n,a[f+1]);x(b,o[u]),a[u++]=b}for(;h<=p;){const b=r[h++];b!==null&&K(b)}return this.ht=d,Gt(n,a),S}});class Q extends w{constructor(){super(),this.imageStack=[],this.imageStackLength=0}connectedCallback(){super.connectedCallback(),this.shadowRoot.addEventListener("animationend",t=>{this.imageStack.forEach(()=>{this.imageStack[0].stackindex<t.target.dataset.stackindex&&this.imageStack.shift()}),this.requestUpdate()})}attributeChangedCallback(t,e,i){t==="src"&&(this.imageStack.push({src:i,type:this.getAttribute("type")=="video"?"video":"image",stackindex:++this.imageStackLength}),this.requestUpdate())}render(){return Tt(this.imageStack,t=>t.stackindex,t=>t.type=="video"?$`<video data-stackindex="${t.stackindex}" class="${t.stackindex==1?"no-animation":""}" src="${t.src}" autoplay muted loop></video>`:$`<div data-stackindex="${t.stackindex}" class="${t.stackindex==1?"no-animation":""}" style="background-image: url('${t.src}');"></div>`)}}g(Q,"styles",at`
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
    `),g(Q,"properties",{src:{type:String},type:{type:String},imageStack:{type:Array,attribute:!1},imageStackLength:{type:Number,attribute:!1}});customElements.define("scene-image",Q);class Y extends w{constructor(){super(),this.labelStack=[],this.labelStackLength=0}connectedCallback(){super.connectedCallback(),this._calculateWidth(),this.shadowRoot.addEventListener("animationend",t=>{this.labelStack.forEach(()=>{this.labelStack[0].stackindex<t.target.dataset.stackindex&&this.labelStack.shift()}),this.requestUpdate()})}attributeChangedCallback(t,e,i){t==="label"&&(this.labelStack.push({label:i,stackindex:++this.labelStackLength}),this.shadowRoot&&this._calculateWidth(),e==null||this.labelStack[this.labelStack.length-1].width>=this.labelStack[this.labelStack.length-2].width?this.placeholder=this.labelStack[this.labelStack.length-1]:this.placeholder.width=this.labelStack[this.labelStack.length-1].width,this.requestUpdate())}_calculateWidth(){let t=document.createElement("span");t.innerText=this.labelStack[this.labelStack.length-1].label,this.shadowRoot.appendChild(t);let e=t.offsetWidth;this.labelStack[this.labelStack.length-1].width=e,t.remove(),this.labelStack.forEach((i,s)=>{let r=this.shadowRoot.querySelector(`span[data-stackindex="${i.stackindex}"]`),o;if(this.labelStackLength>1&&s==this.labelStack.length-1)i.scaleX_r=this.labelStack[s-1].width/i.width;else{if(!r)return;o=r.offsetWidth,i.scaleX=e/o}})}render(){return $`
            <div aria-hidden="true" class="placeholder" style="max-width: ${this.placeholder?this.placeholder.width:0}px">
                ${this.placeholder?this.placeholder.label:0}
            </div>
            ${Tt(this.labelStack,t=>t.stackindex,(t,e)=>$`
                    <span data-stackindex="${t.stackindex}" 
                    class="${t.stackindex==1?"no-animation":""} ${this.labelStack.length>1&&e!=this.labelStack.length-1?"disappear":""}" 
                    style="--scale-x: ${t.scaleX}; --scale-x-r: ${t.scaleX_r};"
                    >
                        ${t.label}
                    </span>
                `)}
        `}}g(Y,"styles",at`
        :host {
            display: inline-block;
            position: relative;
            
            --transition-duration: var(--s-transition-duration, .5s);
            --blur: var(--s-blur, 8px);
        }

        .placeholder {
            color: transparent;
            transition-property: max-width;
            transition-duration: var(--transition-duration);
            transition-function: ease-out;
        }

        span {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 0;
            white-space: nowrap;
            transform-origin: left;
            transition-duration: var(--transition-duration);
            transition-function: ease-out;
            transition-property: transform, opacity, filter;
            animation: appear var(--transition-duration) ease-out;

        }

        .no-animation {
            animation: none;
        }

        .disappear {
            opacity: 0;
            filter: blur(var(--blur));
            transform: scaleX(var(--scale-x));
        }

        @keyframes appear {
            from { opacity: 0; filter: blur(var(--blur)); transform: scaleX(var(--scale-x-r));}
            to { opacity: 1; filter: blur(0px); transform: scaleX(1);}
        }
    `),g(Y,"properties",{label:{type:String},placeholder:{type:Array,attribute:!1},labelStack:{type:Array,attribute:!1},labelStackLength:{type:Number,attribute:!1}});customElements.define("scene-label",Y);const Rt=`.flex-flow-y{display:flex;flex-direction:column;overflow-y:hidden}.flex-flow-x{display:flex;flex-direction:row;overflow-x:hidden}.window-caption{font-weight:600;color:#646464}.window-caption h1{margin:0;font-size:.875rem;line-height:1.5}.window-body{height:100%;display:flex;flex-direction:column;background-color:#efefef}.window-header,.window-footer{padding:.5rem;display:flex;align-items:center;justify-content:center;background-color:#fefefe}.window-header{border-bottom:1px solid #ececec}.window-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;border-top:1px solid #ececec}.window-dialog{margin-left:auto;margin-right:auto;width:100%;height:100%;max-height:100%;overflow:hidden;display:flex}.window-aside{flex:none;background-color:#f6f6f6;border-right:1px solid #dedede}.window-main{flex:1 1 0%;overflow:hidden}.window-content{width:100%;border-radius:.5rem}
`,Yt=`:host{display:block;overflow:hidden}.hidden{display:none}.relative{position:relative}.absolute{position:absolute}.inset-0{top:0;right:0;bottom:0;left:0}.py-4{padding-top:1rem;padding-bottom:1rem}.w-32{width:8rem}.overflow-y-auto{overflow-y:auto}.flex{display:flex}.flex-col{flex-direction:column}.flex-grow{flex-grow:1}.justify-end{justify-content:flex-end}.items-center{align-items:center}
`;class tt extends w{constructor(){super(),this.caption="Scene Window",this.path="/",this.requestUpdate(),this.addEventListener("click",this.clickHandler),this.addEventListener("scenewindowback",this.backHandler)}get pageList(){return Array.from(this.childNodes).filter(t=>typeof t.getAttribute=="function"&&t.getAttribute("slot").indexOf("/")==0).map(t=>({caption:t.getAttribute("caption"),path:t.getAttribute("slot")}))}render(){return $`
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

                    <div class="flex-flow-x flex-grow">

                        <div class="window-aside w-32 flex flex-col py-4 overflow-y-auto">
                            <slot name="aside"></slot>
                        </div>
                        
                        ${this.pageList&&this.pageList.map(t=>{let e=t.path.split("/");if(e.length<=2)return $`
                                    <scene-window-main path=${this.path.indexOf("/"+e[1])==0?this.path:t.path} class="${this.path.indexOf("/"+e[1])>=0?"":"hidden"}">
                                        <slot name="/${e[1]}"></slot>
                                        ${Array.from(this.pageList).filter(i=>i.path!=="/"+e[1]&&i.path.indexOf("/"+e[1])>=0).map(i=>$`
                                                    <slot name="${i.path}"></slot>
                                                `)}
                                    </scene-window-mian>
                                `},this)}
                    </div>
                </div>
            </div>
        `}attributeChangedCallback(t,e,i){var s,r;switch(super.attributeChangedCallback(t,e,i),t){case"path":let o=(r=(s=this==null?void 0:this.shadowRoot)==null?void 0:s.querySelector('slot[name="aside"]'))==null?void 0:r.assignedElements();o&&o.map(d=>{d.tagName==="SCENE-WINDOW-ASIDE-ITEM"&&(d.active=this.path.indexOf(d.href)==0)},this);break}}clickHandler(t){let e;switch(!0){case(e=t.target.closest("scene-window-aside-item"))!==null:this.path=e.getAttribute("href");break;case(e=t.target.closest("scene-window-link"))!==null:this.path=e.getAttribute("href");break}}backHandler(t){this.path.replace(/(^\/)|(\/$)/g,"").indexOf("/")!=-1&&(this.path=this.path.substring(0,this.path.lastIndexOf("/")))}path_getAbsolutePath(t){let e=this.path;return e.endsWith("/")||(e+="/"),e.startsWith("/")||(e="/"+e),new URL(t,"file://"+e).pathname}path_goto(t){this.path=this.path_getAbsolutePath(t)}path_exists(t){let e=this.path_getAbsolutePath(t);return this.querySelector(`[slot="${e}"]`)!==null}page_exists(t){return this.path_exists(t)}page_add(t,e,i=""){let s=this.path_getAbsolutePath(e),r=document.createElement("scene-window-page");return r.setAttribute("slot",s),r.setAttribute("caption",i),r.appendChild(t),this.appendChild(r),r}}g(tt,"styles",[_(Rt),_(Yt)]),g(tt,"properties",{caption:{type:String},path:{type:String,reflect:!0}});customElements.define("scene-window",tt);const te=`a{padding:.5rem 1rem;display:flex;gap:.5rem;align-items:center;text-decoration:none;-webkit-user-drag:none}:host(:hover),:host([active]){background-color:#eee;box-shadow:inset 0 1px #dedede,inset 0 -1px #dedede}::slotted([slot="icon"]){width:1.25rem;height:1.25rem}::slotted(*){font-size:.875rem;color:#646464}.window-aside-item-icon{width:1.25rem;height:1.25rem;flex-shrink:0}.window-aside-item-label{white-space:nowrap;overflow:hidden}
`;class et extends w{constructor(){super(),this.href="#",this.active=!1}render(){return $`
            <a href="#" @click="${t=>{t.preventDefault()}}">
                <div class="window-aside-item-icon">
                    <slot name="icon"></slot>
                </div>
                <span class="window-aside-item-label">
                    <slot></slot>
                </span>
            </a>
        `}}g(et,"styles",[_(te)]),g(et,"properties",{href:{type:String},active:{type:Boolean,reflect:!0}});customElements.define("scene-window-aside-item",et);const ee=`:host{display:inline}a{text-decoration:underline;-webkit-user-drag:none}
`;class it extends w{constructor(){super()}render(){return $`
            <a href="#" @click="${t=>{t.preventDefault()}}"><slot></slot></a>
        `}}g(it,"styles",[_(ee)]),g(it,"properties",{href:{type:String}});customElements.define("scene-window-link",it);const ie=`:host{flex:1 1 0%;overflow:hidden;display:flex;flex-direction:column;overflow-y:hidden}::slotted(*){flex-shrink:0}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;font-weight:inherit}button{margin:0;padding:0;border-width:0;background-color:transparent;cursor:pointer}.relative{position:relative}.absolute{position:absolute}.box-content{box-sizing:content-box}.inset-0{top:0;right:0;bottom:0;left:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.-m-2{margin:-.5rem}.p-0{padding:0}.p-2{padding:.5rem}.w-6{width:1.5rem}.w-full{width:100%}.h-6{height:1.5rem}.h-full{height:100%}.max-h-full{max-height:100%}.flex{display:flex}.justify-between{justify-content:space-between}.items-center{align-items:center}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.grid{display:grid}.place-items-center{place-items:center}.fill-\\[\\#adadad\\]{fill:#adadad}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.z-10{z-index:10}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}
`;class st extends w{constructor(){super(),this.requestUpdate()}get pageList(){let t=[];return Array.from(this.childNodes).filter(e=>e.tagName==="SLOT").forEach(e=>{e=e.assignedElements()[0],(e.slot==this.path||this.path.indexOf(e.slot+"/")==0||e.slot.indexOf(this.path+"/")==0)&&t.push({caption:e.caption,path:e.slot})}),t}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="path")try{let s=i.split("/").length>e.split("/").length?"forward":"backward";Array.from(this.childNodes).filter(r=>r.tagName==="SLOT").map(r=>{s=="forward"&&(r.name==i||i.indexOf(r.name+"/")==0?r.classList.remove("hidden"):r.classList.add("hidden")),r.name.replace(/(^\/)|(\/$)/g,"")==i.replace(/(^\/)|(\/$)/g,"")?r.removeAttribute("tabindex"):r.setAttribute("tabindex","-1")})}catch{}}render(){const t=this.path.replace(/(^\/)|(\/$)/g,"").split("/").length-1;return $`
            <div class="flex-grow max-h-full" style="--scene-window-page: ${t};">
                <div class="relative window-body p-0 flex-grow overflow-y-auto overflow-x-hidden">
                    <header class="window-header absolute top-0 left-0 right-0 z-10">
                        <div class="w-full h-full relative">
                            <!-- Captions -->
                            <div class="relative w-full h-full overflow-x-hidden" style="-webkit-mask-image: linear-gradient(to right, transparent 2rem, #FFF 4rem, #FFF calc(100% - 4rem), transparent calc(100% - 2rem));">
                                <div class="relative w-full h-full flex whitespace-nowrap transition-transform" style="transform: translateX(calc(-100% * var(--scene-window-page, 0)));">
                                    ${this.pageList.map(e=>$`
                                                <div class="window-caption flex-shrink-0 relative w-full h-full grid place-items-center">
                                                    <h3>${e.caption}</h3>
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
                                    " tabindex="${t?0:-1}">
                                        <svg class="w-full h-full fill-[#adadad]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="left-circle" width="24" height="24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-3-3a1,1,0,0,1,0-1.42l3-3a1,1,0,0,1,1.42,1.42L11.41,12Z"></path></svg>
                                    </button>                                    
                                </div>
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
            </div>
            -->
        `}back(){this.dispatchEvent(new CustomEvent("scenewindowback",{bubbles:!0,composed:!0}))}}g(st,"styles",[_(Rt),_(ie)]),g(st,"properties",{path:{type:String,reflect:!0}});customElements.define("scene-window-main",st);const se=`:host{padding-top:2.5rem;width:100%;overflow:auto;white-space:normal}
`;class nt extends w{constructor(){super(),this.caption="Page Caption"}render(){return $`
            <slot></slot>
        `}}g(nt,"styles",[_(se)]),g(nt,"properties",{caption:{type:String}});customElements.define("scene-window-page",nt);
