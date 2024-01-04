var Mt=Object.defineProperty;var Bt=(n,t,e)=>t in n?Mt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var g=(n,t,e)=>(Bt(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window,rt=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),ht=new WeakMap;let kt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ht.set(e,t))}return t}toString(){return this.cssText}};const v=n=>new kt(typeof n=="string"?n:n+"",void 0,at),lt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new kt(e,n,at)},jt=(n,t)=>{rt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=B.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},pt=rt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return v(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const j=window,ut=j.trustedTypes,It=ut?ut.emptyScript:"",ft=j.reactiveElementPolyfillSupport,J={toAttribute(n,t){switch(t){case Boolean:n=n?It:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},St=(n,t)=>t!==n&&(t==t||n==n),W={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:St};let E=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||W}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(pt(s))}else t!==void 0&&e.push(pt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return jt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=W){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:J).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:J;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||St)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};E.finalized=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},ft==null||ft({ReactiveElement:E}),((q=j.reactiveElementVersions)!==null&&q!==void 0?q:j.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;const I=window,P=I.trustedTypes,wt=P?P.createPolicy("lit-html",{createHTML:n=>n}):void 0,D="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+x,Dt=`<${dt}>`,U=document,H=()=>U.createComment(""),T=n=>n===null||typeof n!="object"&&typeof n!="function",Et=Array.isArray,Ct=n=>Et(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",X=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,mt=/>/g,_=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,bt=/"/g,Pt=/^(?:script|style|textarea|title)$/i,Ft=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),b=Ft(1),k=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),$t=new WeakMap,C=U.createTreeWalker(U,129,null,!1),Ut=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=O;for(let l=0;l<e;l++){const a=n[l];let m,h,c=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===O?h[1]==="!--"?r=gt:h[1]!==void 0?r=mt:h[2]!==void 0?(Pt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=_):h[3]!==void 0&&(r=_):r===_?h[0]===">"?(r=s??O,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,m=h[1],r=h[3]===void 0?_:h[3]==='"'?bt:vt):r===bt||r===vt?r=_:r===gt||r===mt?r=O:(r=_,s=void 0);const u=r===_&&n[l+1].startsWith("/>")?" ":"";o+=r===O?a+Dt:c>=0?(i.push(m),a.slice(0,c)+D+a.slice(c)+x+u):a+x+(c===-2?(i.push(void 0),l):u)}const d=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[wt!==void 0?wt.createHTML(d):d,i]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,l=this.parts,[a,m]=Ut(t,e);if(this.el=z.createElement(a,i),C.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=C.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith(D)||c.startsWith(x)){const p=m[r++];if(h.push(c),p!==void 0){const u=s.getAttribute(p.toLowerCase()+D).split(x),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:u,ctor:f[1]==="."?Ot:f[1]==="?"?Lt:f[1]==="@"?Ht:R})}else l.push({type:6,index:o})}for(const c of h)s.removeAttribute(c)}if(Pt.test(s.tagName)){const h=s.textContent.split(x),c=h.length-1;if(c>0){s.textContent=P?P.emptyScript:"";for(let p=0;p<c;p++)s.append(h[p],H()),C.nextNode(),l.push({type:2,index:++o});s.append(h[c],H())}}}else if(s.nodeType===8)if(s.data===dt)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(x,h+1))!==-1;)l.push({type:7,index:o}),h+=x.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function S(n,t,e=n,i){var s,o,r,d;if(t===k)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=T(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=S(n,l._$AS(n,t.values),l,i)),t}class Nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:U).importNode(i,!0);C.currentNode=o;let r=C.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let m;a.type===2?m=new N(r,r.nextSibling,this,t):a.type===1?m=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(m=new Tt(r,this,t)),this._$AV.push(m),a=s[++l]}d!==(a==null?void 0:a.index)&&(r=C.nextNode(),d++)}return o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class N{constructor(t,e,i,s){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),T(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ct(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==w&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=z.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Nt(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new z(t)),e}T(t){Et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new N(this.k(H()),this.k(H()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class R{constructor(t,e,i,s,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=S(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==k,r&&(this._$AH=t);else{const d=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=S(this,d[i+l],e,l),a===k&&(a=this._$AH[l]),r||(r=!T(a)||a!==this._$AH[l]),a===w?t=w:t!==w&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}}const qt=P?P.emptyScript:"";class Lt extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==w?this.element.setAttribute(this.name,qt):this.element.removeAttribute(this.name)}}class Ht extends R{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:w)===k)return;const s=this._$AH,o=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==w&&(s===w||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Wt={O:D,P:x,A:dt,C:1,M:Ut,L:Nt,D:Ct,R:S,I:N,V:R,H:Lt,N:Ht,U:Ot,F:Tt},yt=I.litHtmlPolyfillSupport;yt==null||yt(z,N),((V=I.litHtmlVersions)!==null&&V!==void 0?V:I.litHtmlVersions=[]).push("2.7.2");const Vt=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new N(t.insertBefore(H(),d),d,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,K;let $=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return k}};$.finalized=!0,$._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:$});const xt=globalThis.litElementPolyfillSupport;xt==null||xt({LitElement:$});((K=globalThis.litElementVersions)!==null&&K!==void 0?K:globalThis.litElementVersions=[]).push("3.3.1");class Q extends ${constructor(){super()}connectedCallback(){super.connectedCallback();let t=!1;this.shadowRoot.addEventListener("animationend",e=>{t&&this.remove(),t=!0})}render(){return b`
                <div class="scene-raisin">
                    ${this.text}
                </div>
      `}}g(Q,"styles",lt`
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

    `),g(Q,"properties",{text:{type:String}});customElements.define("scene-raisin",Q);document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("sceneraisin",n=>{const t=document.createElement("scene-raisin");t.text=n.detail.text,document.body.appendChild(t)})});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zt=n=>(...t)=>({_$litDirective$:n,values:t});class Kt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Gt}=Wt,_t=()=>document.createComment(""),L=(n,t,e)=>{var i;const s=n._$AA.parentNode,o=t===void 0?n._$AB:t._$AA;if(e===void 0){const r=s.insertBefore(_t(),o),d=s.insertBefore(_t(),o);e=new Gt(r,d,n,n.options)}else{const r=e._$AB.nextSibling,d=e._$AM,l=d!==n;if(l){let a;(i=e._$AQ)===null||i===void 0||i.call(e,n),e._$AM=n,e._$AP!==void 0&&(a=n._$AU)!==d._$AU&&e._$AP(a)}if(r!==o||l){let a=e._$AA;for(;a!==r;){const m=a.nextSibling;s.insertBefore(a,o),a=m}}}return e},A=(n,t,e=n)=>(n._$AI(t,e),n),Jt={},Qt=(n,t=Jt)=>n._$AH=t,Yt=n=>n._$AH,G=n=>{var t;(t=n._$AP)===null||t===void 0||t.call(n,!1,!0);let e=n._$AA;const i=n._$AB.nextSibling;for(;e!==i;){const s=e.nextSibling;e.remove(),e=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=(n,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(n[s],s);return i},zt=Zt(class extends Kt{constructor(n){if(super(n),n.type!==Xt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],o=[];let r=0;for(const d of n)s[r]=i?i(d,r):r,o[r]=e(d,r),r++;return{values:o,keys:s}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,i]){var s;const o=Yt(n),{values:r,keys:d}=this.dt(t,e,i);if(!Array.isArray(o))return this.ht=d,r;const l=(s=this.ht)!==null&&s!==void 0?s:this.ht=[],a=[];let m,h,c=0,p=o.length-1,u=0,f=r.length-1;for(;c<=p&&u<=f;)if(o[c]===null)c++;else if(o[p]===null)p--;else if(l[c]===d[u])a[u]=A(o[c],r[u]),c++,u++;else if(l[p]===d[f])a[f]=A(o[p],r[f]),p--,f--;else if(l[c]===d[f])a[f]=A(o[c],r[f]),L(n,a[f+1],o[c]),c++,f--;else if(l[p]===d[u])a[u]=A(o[p],r[u]),L(n,o[c],o[p]),p--,u++;else if(m===void 0&&(m=At(d,u,f),h=At(l,c,p)),m.has(l[c]))if(m.has(l[p])){const y=h.get(d[u]),F=y!==void 0?o[y]:null;if(F===null){const ct=L(n,o[c]);A(ct,r[u]),a[u]=ct}else a[u]=A(F,r[u]),L(n,o[c],F),o[y]=null;u++}else G(o[p]),p--;else G(o[c]),c++;for(;u<=f;){const y=L(n,a[f+1]);A(y,r[u]),a[u++]=y}for(;c<=p;){const y=o[c++];y!==null&&G(y)}return this.ht=d,Qt(n,a),k}});class Y extends ${constructor(){super(),this.imageStack=[],this.imageStackLength=0}connectedCallback(){super.connectedCallback(),this.shadowRoot.addEventListener("animationend",t=>{this.imageStack.forEach(()=>{this.imageStack[0].stackindex<t.target.dataset.stackindex&&this.imageStack.shift()}),this.requestUpdate()})}attributeChangedCallback(t,e,i){t==="src"&&(this.imageStack.push({src:i,type:this.getAttribute("type")=="video"?"video":"image",stackindex:++this.imageStackLength}),this.requestUpdate())}render(){return zt(this.imageStack,t=>t.stackindex,t=>t.type=="video"?b`<video data-stackindex="${t.stackindex}" class="${t.stackindex==1?"no-animation":""}" src="${t.src}" autoplay muted loop></video>`:b`<div data-stackindex="${t.stackindex}" class="${t.stackindex==1?"no-animation":""}" style="background-image: url('${t.src}');"></div>`)}}g(Y,"styles",lt`
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
    `),g(Y,"properties",{src:{type:String},type:{type:String},imageStack:{type:Array,attribute:!1},imageStackLength:{type:Number,attribute:!1}});customElements.define("scene-image",Y);class tt extends ${constructor(){super(),this.labelStack=[],this.labelStackLength=0}connectedCallback(){super.connectedCallback(),this.shadowRoot.addEventListener("animationend",t=>{this.labelStack.forEach(()=>{this.labelStack[0].stackindex<t.target.dataset.stackindex&&this.labelStack.shift()}),this.requestUpdate()})}attributeChangedCallback(t,e,i){if(t!=="label")return;this.labelStack.push({label:i,stackindex:++this.labelStackLength});let s=document.createElement("span");s.innerText=i,this.shadowRoot.appendChild(s);let o=s.offsetWidth;s.remove(),this.labelStack.forEach(r=>{let l=this.shadowRoot.querySelector(`span[data-stackindex="${r.stackindex}"]`).offsetWidth,a=o/l;r.scaleX=a}),this.requestUpdate()}render(){return zt(this.labelStack,t=>t.stackindex,(t,e)=>b`<span data-stackindex="${t.stackindex}" class="${t.stackindex==1?"no-animation":""} ${e==this.labelStack.length-1?"":"disappear"}" style="transform: scaleX(${t.scaleX?t.scaleX:1});">${t.label}</span>`)}}g(tt,"styles",lt`
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
    `),g(tt,"properties",{label:{type:String},labelStack:{type:Array,attribute:!1},labelStackLength:{type:Number,attribute:!1}});customElements.define("scene-label",tt);const M=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }
`,Rt=`.flex-flow-y{display:flex;flex-direction:column;overflow-y:hidden}.flex-flow-x{display:flex;flex-direction:row;overflow-x:hidden}.window-caption{font-weight:600;color:#646464}.window-caption h1{margin:0;font-size:.875rem;line-height:1.5}.window-body{height:100%;display:flex;flex-direction:column;background-color:#efefef}.window-header,.window-footer{padding:.5rem;display:flex;align-items:center;justify-content:center;background-color:#fefefe}.window-header{border-bottom:1px solid #ececec}.window-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;border-top:1px solid #ececec}.window-dialog{margin-left:auto;margin-right:auto;width:100%;height:100%;max-height:100%;overflow:hidden;display:flex}.window-aside{flex:none;background-color:#f6f6f6;border-right:1px solid #dedede}.window-main{flex:1 1 0%;overflow:hidden}.window-content{width:100%;border-radius:.5rem}
`,te=`:host{display:block;overflow:hidden}.hidden{display:none}.relative{position:relative}.absolute{position:absolute}.inset-0{top:0;right:0;bottom:0;left:0}.py-4{padding-top:1rem;padding-bottom:1rem}.w-32{width:8rem}.overflow-y-auto{overflow-y:auto}.flex{display:flex}.flex-col{flex-direction:column}.flex-grow{flex-grow:1}.justify-end{justify-content:flex-end}.items-center{align-items:center}
`;class et extends ${constructor(){super(),this.caption="Scene Window",this.path="/",this.requestUpdate(),this.addEventListener("click",this.clickHandler),this.addEventListener("scenewindowback",this.backHandler)}get pageList(){return Array.from(this.childNodes).filter(t=>typeof t.getAttribute=="function"&&t.getAttribute("slot").indexOf("/")==0).map(t=>({caption:t.getAttribute("caption"),path:t.getAttribute("slot")}))}render(){return b`
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
        `}attributeChangedCallback(t,e,i){var s,o;switch(super.attributeChangedCallback(t,e,i),t){case"path":let r=(o=(s=this==null?void 0:this.shadowRoot)==null?void 0:s.querySelector('slot[name="aside"]'))==null?void 0:o.assignedElements();r&&r.map(d=>{d.tagName==="SCENE-WINDOW-ASIDE-ITEM"&&(d.active=this.path.indexOf(d.href)==0)},this);break}}clickHandler(t){let e;switch(!0){case(e=t.target.closest("scene-window-aside-item"))!==null:this.path=e.getAttribute("href");break;case(e=t.target.closest("scene-window-link"))!==null:this.path=e.getAttribute("href");break}}backHandler(t){this.path.replace(/(^\/)|(\/$)/g,"").indexOf("/")!=-1&&(this.path=this.path.substring(0,this.path.lastIndexOf("/")))}path_getAbsolutePath(t){let e=this.path;return e.endsWith("/")||(e+="/"),e.startsWith("/")||(e="/"+e),new URL(t,"file://"+e).pathname}path_goto(t){this.path=this.path_getAbsolutePath(t)}path_exists(t){let e=this.path_getAbsolutePath(t);return this.querySelector(`[slot="${e}"]`)!==null}page_exists(t){return this.path_exists(t)}page_add(t,e,i=""){let s=this.path_getAbsolutePath(e),o=document.createElement("scene-window-page");return o.setAttribute("slot",s),o.setAttribute("caption",i),o.appendChild(t),this.appendChild(o),o}}g(et,"styles",[v(M),v(Rt),v(te)]),g(et,"properties",{caption:{type:String},path:{type:String,reflect:!0}});customElements.define("scene-window",et);const ee=`a{padding:.5rem 1rem;display:flex;gap:.5rem;align-items:center;-webkit-user-drag:none}:host(:hover),:host([active]){background-color:#eee;box-shadow:inset 0 1px #dedede,inset 0 -1px #dedede}::slotted([slot="icon"]){width:1.25rem;height:1.25rem}::slotted(*){font-size:.875rem;color:#646464}.window-aside-item-icon{width:1.25rem;height:1.25rem;flex-shrink:0}.window-aside-item-label{white-space:nowrap;overflow:hidden}
`;class it extends ${constructor(){super(),this.href="#",this.active=!1}render(){return b`
            <a href="#" @click="${t=>{t.preventDefault()}}">
                <div class="window-aside-item-icon">
                    <slot name="icon"></slot>
                </div>
                <span class="window-aside-item-label">
                    <slot></slot>
                </span>
            </a>
        `}}g(it,"styles",[v(M),v(ee)]),g(it,"properties",{href:{type:String},active:{type:Boolean,reflect:!0}});customElements.define("scene-window-aside-item",it);const ie=`:host{display:inline}a{text-decoration:underline;-webkit-user-drag:none}
`;class st extends ${constructor(){super()}render(){return b`
            <a href="#" @click="${t=>{t.preventDefault()}}"><slot></slot></a>
        `}}g(st,"styles",[v(M),v(ie)]),g(st,"properties",{href:{type:String}});customElements.define("scene-window-link",st);const se=`:host{flex:1 1 0%;overflow:hidden;display:flex;flex-direction:column;overflow-y:hidden}::slotted(*){flex-shrink:0}.relative{position:relative}.absolute{position:absolute}.box-content{box-sizing:content-box}.inset-0{top:0;right:0;bottom:0;left:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.-m-2{margin:-.5rem}.p-0{padding:0}.p-2{padding:.5rem}.w-6{width:1.5rem}.w-full{width:100%}.h-6{height:1.5rem}.h-full{height:100%}.max-h-full{max-height:100%}.flex{display:flex}.justify-between{justify-content:space-between}.items-center{align-items:center}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.grid{display:grid}.place-items-center{place-items:center}.fill-\\[\\#adadad\\]{fill:#adadad}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.z-10{z-index:10}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}
`;class nt extends ${constructor(){super(),this.requestUpdate()}get pageList(){let t=[];return Array.from(this.childNodes).filter(e=>e.tagName==="SLOT").forEach(e=>{e=e.assignedElements()[0],(e.slot==this.path||this.path.indexOf(e.slot+"/")==0||e.slot.indexOf(this.path+"/")==0)&&t.push({caption:e.caption,path:e.slot})}),t}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),t==="path")try{let s=i.split("/").length>e.split("/").length?"forward":"backward";Array.from(this.childNodes).filter(o=>o.tagName==="SLOT").map(o=>{s=="forward"&&(o.name==i||i.indexOf(o.name+"/")==0?o.classList.remove("hidden"):o.classList.add("hidden")),o.name.replace(/(^\/)|(\/$)/g,"")==i.replace(/(^\/)|(\/$)/g,"")?o.removeAttribute("tabindex"):o.setAttribute("tabindex","-1")})}catch{}}render(){return b`
            <div class="flex-grow max-h-full" style="--scene-window-page: ${this.path.replace(/(^\/)|(\/$)/g,"").split("/").length-1};">
                <div class="relative window-body p-0 flex-grow overflow-y-auto overflow-x-hidden">
                    <header class="window-header absolute top-0 left-0 right-0 z-10">
                        <div class="w-full h-full relative">
                            <!-- Captions -->
                            <div class="relative w-full h-full overflow-x-hidden" style="-webkit-mask-image: linear-gradient(to right, transparent 2rem, #FFF 4rem, #FFF calc(100% - 4rem), transparent calc(100% - 2rem));">
                                <div class="relative w-full h-full flex whitespace-nowrap transition-transform" style="transform: translateX(calc(-100% * var(--scene-window-page, 0)));">
                                    ${this.pageList.map(t=>b`
                                                <div class="window-caption flex-shrink-0 relative w-full h-full grid place-items-center">
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
        `}back(){this.dispatchEvent(new CustomEvent("scenewindowback",{bubbles:!0,composed:!0}))}}g(nt,"styles",[v(M),v(Rt),v(se)]),g(nt,"properties",{path:{type:String,reflect:!0}});customElements.define("scene-window-main",nt);const ne=`:host{padding-top:2.5rem;width:100%;overflow:auto;white-space:normal}
`;class ot extends ${constructor(){super(),this.caption="Page Caption"}render(){return b`
            <slot></slot>
        `}}g(ot,"styles",[v(M),v(ne)]),g(ot,"properties",{caption:{type:String}});customElements.define("scene-window-page",ot);
