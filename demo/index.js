"use strict";(()=>{var xm=Object.create;var ca=Object.defineProperty;var bm=Object.getOwnPropertyDescriptor;var ym=Object.getOwnPropertyNames;var wm=Object.getPrototypeOf,Mm=Object.prototype.hasOwnProperty;var ni=Math.pow,Em=(s,t,e)=>t in s?ca(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Sm=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var Tm=(s,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ym(t))!Mm.call(s,r)&&r!==e&&ca(s,r,{get:()=>t[r],enumerable:!(i=bm(t,r))||i.enumerable});return s};var Am=(s,t,e)=>(e=s!=null?xm(wm(s)):{},Tm(t||!s||!s.__esModule?ca(e,"default",{value:s,enumerable:!0}):e,s));var G=(s,t,e)=>(Em(s,typeof t!="symbol"?t+"":t,e),e);var qc=(s,t,e)=>new Promise((i,r)=>{var a=d=>{try{c(e.next(d))}catch(p){r(p)}},h=d=>{try{c(e.throw(d))}catch(p){r(p)}},c=d=>d.done?i(d.value):Promise.resolve(d.value).then(a,h);c((e=e.apply(s,t)).next())});var Hu=Sm((To,zu)=>{(function(s,t){typeof To=="object"&&typeof zu!="undefined"?t(To):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis!="undefined"?globalThis:s||self,t(s.Tweakpane={}))})(To,function(s){"use strict";class t{constructor(n){let[o,u]=n.split("-"),b=o.split(".");this.major=parseInt(b[0],10),this.minor=parseInt(b[1],10),this.patch=parseInt(b[2],10),this.prerelease=u!=null?u:null}toString(){let n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class e{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class i{constructor(n){this.target=n}}class r extends i{constructor(n,o,u,b){super(n),this.value=o,this.presetKey=u,this.last=b!=null?b:!0}}class a extends i{constructor(n,o,u){super(n),this.value=o,this.presetKey=u}}class h extends i{constructor(n,o){super(n),this.expanded=o}}class c extends i{constructor(n,o){super(n),this.index=o}}function d(l){return l}function p(l){return l==null}function f(l,n){if(l.length!==n.length)return!1;for(let o=0;o<l.length;o++)if(l[o]!==n[o])return!1;return!0}function g(l,n){let o=l;do{let u=Object.getOwnPropertyDescriptor(o,n);if(u&&(u.set!==void 0||u.writable===!0))return!0;o=Object.getPrototypeOf(o)}while(o!==null);return!1}let v={alreadydisposed:()=>"View has been already disposed",invalidparams:l=>`Invalid parameters for '${l.name}'`,nomatchingcontroller:l=>`No matching controller for '${l.key}'`,nomatchingview:l=>`No matching view for '${JSON.stringify(l.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:l=>`Property '${l.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class x{static alreadyDisposed(){return new x({type:"alreadydisposed"})}static notBindable(){return new x({type:"notbindable"})}static propertyNotFound(n){return new x({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new x({type:"shouldneverhappen"})}constructor(n){var o;this.message=(o=v[n.type](n.context))!==null&&o!==void 0?o:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}}class y{constructor(n,o,u){this.obj_=n,this.key_=o,this.presetKey_=u!=null?u:o}static isBindable(n){return!(n===null||typeof n!="object"&&typeof n!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,o){let u=this.read();if(!y.isBindable(u))throw x.notBindable();if(!(n in u))throw x.propertyNotFound(n);u[n]=o}}class M extends e{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,o){let u=o.bind(this);return this.controller_.valueController.emitter.on(n,()=>{u(new i(this))}),this}}class _{constructor(){this.observers_={}}on(n,o){let u=this.observers_[n];return u||(u=this.observers_[n]=[]),u.push({handler:o}),this}off(n,o){let u=this.observers_[n];return u&&(this.observers_[n]=u.filter(b=>b.handler!==o)),this}emit(n,o){let u=this.observers_[n];u&&u.forEach(b=>{b.handler(o)})}}let m="tp";function A(l){return(o,u)=>[m,"-",l,"v",o?`_${o}`:"",u?`-${u}`:""].join("")}function w(l,n){return o=>n(l(o))}function I(l){return l.rawValue}function R(l,n){l.emitter.on("change",w(I,n)),n(l.rawValue)}function N(l,n,o){R(l.value(n),o)}function O(l,n,o){o?l.classList.add(n):l.classList.remove(n)}function H(l,n){return o=>{O(l,n,o)}}function S(l,n){R(l,o=>{n.textContent=o!=null?o:""})}let L=A("btn");class tt{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(L()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("button");u.classList.add(L("b")),o.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;let b=n.createElement("div");b.classList.add(L("t")),S(o.props.value("title"),b),this.buttonElement.appendChild(b)}}class ct{constructor(n,o){this.emitter=new _,this.onClick_=this.onClick_.bind(this),this.props=o.props,this.viewProps=o.viewProps,this.view=new tt(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class q{constructor(n,o){var u;this.constraint_=o==null?void 0:o.constraint,this.equals_=(u=o==null?void 0:o.equals)!==null&&u!==void 0?u:(b,P)=>b===P,this.emitter=new _,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,o){let u=o!=null?o:{forceEmit:!1,last:!0},b=this.constraint_?this.constraint_.constrain(n):n,P=this.rawValue_;this.equals_(P,b)&&!u.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=b,this.emitter.emit("change",{options:u,previousRawValue:P,rawValue:b,sender:this}))}}class ${constructor(n){this.emitter=new _,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,o){let u=o!=null?o:{forceEmit:!1,last:!0},b=this.value_;b===n&&!u.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:u,previousRawValue:b,rawValue:this.value_,sender:this}))}}function W(l,n){let o=n==null?void 0:n.constraint,u=n==null?void 0:n.equals;return!o&&!u?new $(l):new q(l,n)}class Y{constructor(n){this.emitter=new _,this.valMap_=n;for(let o in this.valMap_)this.valMap_[o].emitter.on("change",()=>{this.emitter.emit("change",{key:o,sender:this})})}static createCore(n){return Object.keys(n).reduce((u,b)=>Object.assign(u,{[b]:W(n[b])}),{})}static fromObject(n){let o=this.createCore(n);return new Y(o)}get(n){return this.valMap_[n].rawValue}set(n,o){this.valMap_[n].rawValue=o}value(n){return this.valMap_[n]}}function Q(l,n){let u=Object.keys(n).reduce((b,P)=>{if(b===void 0)return;let F=n[P],ot=F(l[P]);return ot.succeeded?Object.assign(Object.assign({},b),{[P]:ot.value}):void 0},{});return u}function nt(l,n){return l.reduce((o,u)=>{if(o===void 0)return;let b=n(u);if(!(!b.succeeded||b.value===void 0))return[...o,b.value]},[])}function st(l){return l===null?!1:typeof l=="object"}function it(l){return n=>o=>{if(!n&&o===void 0)return{succeeded:!1,value:void 0};if(n&&o===void 0)return{succeeded:!0,value:void 0};let u=l(o);return u!==void 0?{succeeded:!0,value:u}:{succeeded:!1,value:void 0}}}function bt(l){return{custom:n=>it(n)(l),boolean:it(n=>typeof n=="boolean"?n:void 0)(l),number:it(n=>typeof n=="number"?n:void 0)(l),string:it(n=>typeof n=="string"?n:void 0)(l),function:it(n=>typeof n=="function"?n:void 0)(l),constant:n=>it(o=>o===n?n:void 0)(l),raw:it(n=>n)(l),object:n=>it(o=>{if(st(o))return Q(o,n)})(l),array:n=>it(o=>{if(Array.isArray(o))return nt(o,n)})(l)}}let B={optional:bt(!0),required:bt(!1)};function et(l,n){let o=B.required.object(n)(l);return o.succeeded?o.value:void 0}function rt(l){console.warn([`Missing '${l.key}' of ${l.target} in ${l.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function vt(l){return l&&l.parentElement&&l.parentElement.removeChild(l),null}class _t{constructor(n){this.value_=n}static create(n){return[new _t(n),(o,u)=>{n.setRawValue(o,u)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}let Rt=A("");function Bt(l,n){return H(l,Rt(void 0,n))}class Ct extends Y{constructor(n){var o;super(n),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=_t.create(W(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(o=this.get("parent"))===null||o===void 0||o.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(n){var o,u,b;let P=n!=null?n:{};return new Ct(Y.createCore({disabled:(o=P.disabled)!==null&&o!==void 0?o:!1,disposed:!1,hidden:(u=P.hidden)!==null&&u!==void 0?u:!1,parent:(b=P.parent)!==null&&b!==void 0?b:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(n){R(this.globalDisabled_,Bt(n,"disabled")),N(this,"hidden",Bt(n,"hidden"))}bindDisabled(n){R(this.globalDisabled_,o=>{n.disabled=o})}bindTabIndex(n){R(this.globalDisabled_,o=>{n.tabIndex=o?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",o=>{o&&n()})}getGlobalDisabled_(){let n=this.get("parent");return(n?n.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(n){var o;let u=n.previousRawValue;u==null||u.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(o=this.get("parent"))===null||o===void 0||o.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function we(){return["veryfirst","first","last","verylast"]}let qt=A(""),z={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class pe{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;let o=this.view.element;this.blade.value("positions").emitter.on("change",()=>{we().forEach(u=>{o.classList.remove(qt(void 0,z[u]))}),this.blade.get("positions").forEach(u=>{o.classList.add(qt(void 0,z[u]))})}),this.viewProps.handleDispose(()=>{vt(o)})}get parent(){return this.parent_}set parent(n){if(this.parent_=n,!("parent"in this.viewProps.valMap_)){rt({key:"parent",target:Ct.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}let wt="http://www.w3.org/2000/svg";function Ot(l){l.offsetHeight}function Nt(l,n){let o=l.style.transition;l.style.transition="none",n(),l.style.transition=o}function oe(l){return l.ontouchstart!==void 0}function Xt(){return globalThis}function Ft(){return Xt().document}function ae(l){let n=l.ownerDocument.defaultView;return n&&"document"in n?l.getContext("2d",{willReadFrequently:!0}):null}let Se={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function _e(l,n){let o=l.createElementNS(wt,"svg");return o.innerHTML=Se[n],o}function C(l,n,o){l.insertBefore(n,l.children[o])}function E(l){l.parentElement&&l.parentElement.removeChild(l)}function Z(l){for(;l.children.length>0;)l.removeChild(l.children[0])}function lt(l){for(;l.childNodes.length>0;)l.removeChild(l.childNodes[0])}function at(l){return l.relatedTarget?l.relatedTarget:"explicitOriginalTarget"in l?l.explicitOriginalTarget:null}let ut=A("lbl");function St(l,n){let o=l.createDocumentFragment();return n.split(`
`).map(b=>l.createTextNode(b)).forEach((b,P)=>{P>0&&o.appendChild(l.createElement("br")),o.appendChild(b)}),o}class ft{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(ut()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("div");u.classList.add(ut("l")),N(o.props,"label",P=>{p(P)?this.element.classList.add(ut(void 0,"nol")):(this.element.classList.remove(ut(void 0,"nol")),lt(u),u.appendChild(St(n,P)))}),this.element.appendChild(u),this.labelElement=u;let b=n.createElement("div");b.classList.add(ut("v")),this.element.appendChild(b),this.valueElement=b}}class j extends pe{constructor(n,o){let u=o.valueController.viewProps;super(Object.assign(Object.assign({},o),{view:new ft(n,{props:o.props,viewProps:u}),viewProps:u})),this.props=o.props,this.valueController=o.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}let Pt={id:"button",type:"blade",accept(l){let n=B,o=et(l,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return o?{params:o}:null},controller(l){return new j(l.document,{blade:l.blade,props:Y.fromObject({label:l.params.label}),valueController:new ct(l.document,{props:Y.fromObject({title:l.params.title}),viewProps:l.viewProps})})},api(l){return!(l.controller instanceof j)||!(l.controller.valueController instanceof ct)?null:new M(l.controller)}};class Mt extends pe{constructor(n){super(n),this.value=n.value}}function At(){return new Y({positions:W([],{equals:f})})}class gt extends Y{constructor(n){super(n)}static create(n){let o={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},u=Y.createCore(o);return new gt(u)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";let n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!p(n)?`${n}px`:"auto"}bindExpandedClass(n,o){let u=()=>{this.styleExpanded?n.classList.add(o):n.classList.remove(o)};N(this,"expanded",u),N(this,"temporaryExpanded",u)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function yt(l,n){let o=0;return Nt(n,()=>{l.set("expandedHeight",null),l.set("temporaryExpanded",!0),Ot(n),o=n.clientHeight,l.set("temporaryExpanded",null),Ot(n)}),o}function Vt(l,n){n.style.height=l.styleHeight}function se(l,n){l.value("expanded").emitter.on("beforechange",()=>{if(l.set("completed",!1),p(l.get("expandedHeight"))){let o=yt(l,n);o>0&&l.set("expandedHeight",o)}l.set("shouldFixHeight",!0),Ot(n)}),l.emitter.on("change",()=>{Vt(l,n)}),Vt(l,n),n.addEventListener("transitionend",o=>{o.propertyName==="height"&&l.cleanUpTransition()})}class U extends e{constructor(n,o){super(n),this.rackApi_=o}}function pt(l,n){return l.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function X(l,n){return l.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function ht(l,n){let o=n!=null?n:{};return l.addBlade(Object.assign(Object.assign({},o),{view:"separator"}))}function mt(l,n){return l.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class $t{constructor(n){this.emitter=new _,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(let o of this.allItems())if(n(o))return o;return null}includes(n){return this.cache_.has(n)}add(n,o){if(this.includes(n))throw x.shouldNeverHappen();let u=o!==void 0?o:this.items_.length;this.items_.splice(u,0,n),this.cache_.add(n);let b=this.extract_(n);b&&(b.emitter.on("add",this.onSubListAdd_),b.emitter.on("remove",this.onSubListRemove_),b.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:u,item:n,root:this,target:this})}remove(n){let o=this.items_.indexOf(n);if(o<0)return;this.items_.splice(o,1),this.cache_.delete(n);let u=this.extract_(n);u&&(u.emitter.off("add",this.onSubListAdd_),u.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:o,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class he extends e{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new _,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){let o=n.sender.target.read();this.emitter_.emit("change",{event:new r(this,o,this.controller_.binding.target.presetKey,n.options.last)})}}class Qt extends j{constructor(n,o){super(n,o),this.binding=o.binding}}class un extends e{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new _,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){let o=n.sender.target.read();this.emitter_.emit("update",{event:new a(this,o,this.controller_.binding.target.presetKey)})}}class te extends j{constructor(n,o){super(n,o),this.binding=o.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function nn(l){return l instanceof gi?l.apiSet_:l instanceof U?l.rackApi_.apiSet_:null}function xe(l,n){let o=l.find(u=>u.controller_===n);if(!o)throw x.shouldNeverHappen();return o}function ks(l,n,o){if(!y.isBindable(l))throw x.notBindable();return new y(l,n,o)}class gi extends e{constructor(n,o){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new _,this.apiSet_=new $t(nn),this.pool_=o;let u=this.controller_.rack;u.emitter.on("add",this.onRackAdd_),u.emitter.on("remove",this.onRackRemove_),u.emitter.on("inputchange",this.onRackInputChange_),u.emitter.on("monitorupdate",this.onRackMonitorUpdate_),u.children.forEach(b=>{this.setUpApi_(b)})}get children(){return this.controller_.rack.children.map(n=>xe(this.apiSet_,n))}addInput(n,o,u){let b=u!=null?u:{},P=this.controller_.view.element.ownerDocument,F=this.pool_.createInput(P,ks(n,o,b.presetKey),b),ot=new he(F);return this.add(ot,b.index)}addMonitor(n,o,u){let b=u!=null?u:{},P=this.controller_.view.element.ownerDocument,F=this.pool_.createMonitor(P,ks(n,o),b),ot=new un(F);return this.add(ot,b.index)}addFolder(n){return X(this,n)}addButton(n){return pt(this,n)}addSeparator(n){return ht(this,n)}addTab(n){return mt(this,n)}add(n,o){this.controller_.rack.add(n.controller_,o);let u=this.apiSet_.find(b=>b.controller_===n.controller_);return u&&this.apiSet_.remove(u),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){let o=this.controller_.view.element.ownerDocument,u=this.pool_.createBlade(o,n),b=this.pool_.createBladeApi(u);return this.add(b,n.index)}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}setUpApi_(n){this.apiSet_.find(u=>u.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){let o=xe(this.apiSet_,n.bladeController);this.apiSet_.remove(o)}}onRackInputChange_(n){let o=n.bladeController;if(o instanceof Qt){let u=xe(this.apiSet_,o),b=o.binding;this.emitter_.emit("change",{event:new r(u,b.target.read(),b.target.presetKey,n.options.last)})}else if(o instanceof Mt){let u=xe(this.apiSet_,o);this.emitter_.emit("change",{event:new r(u,o.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof te))throw x.shouldNeverHappen();let o=xe(this.apiSet_,n.bladeController),u=n.bladeController.binding;this.emitter_.emit("update",{event:new a(o,u.target.read(),u.target.presetKey)})}}class Bs extends U{constructor(n,o){super(n,new gi(n.rackController,o)),this.emitter_=new _,this.controller_.foldable.value("expanded").emitter.on("change",u=>{this.emitter_.emit("fold",{event:new h(this,u.sender.rawValue)})}),this.rackApi_.on("change",u=>{this.emitter_.emit("change",{event:u})}),this.rackApi_.on("update",u=>{this.emitter_.emit("update",{event:u})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,o,u){return this.rackApi_.addInput(n,o,u)}addMonitor(n,o,u){return this.rackApi_.addMonitor(n,o,u)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,o){return this.rackApi_.add(n,o)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}}class Kn extends pe{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class wr{constructor(n,o){let u=A(o.viewName);this.element=n.createElement("div"),this.element.classList.add(u()),o.viewProps.bindClassModifiers(this.element)}}function zi(l,n){for(let o=0;o<l.length;o++){let u=l[o];if(u instanceof Qt&&u.binding===n)return u}return null}function Mr(l,n){for(let o=0;o<l.length;o++){let u=l[o];if(u instanceof te&&u.binding===n)return u}return null}function Uo(l,n){for(let o=0;o<l.length;o++){let u=l[o];if(u instanceof Mt&&u.value===n)return u}return null}function Vs(l){return l instanceof V?l.rack:l instanceof Kn?l.rackController.rack:null}function Oo(l){let n=Vs(l);return n?n.bcSet_:null}class T{constructor(n){var o,u;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new _,this.blade_=(o=n.blade)!==null&&o!==void 0?o:null,(u=this.blade_)===null||u===void 0||u.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=n.viewProps,this.bcSet_=new $t(Oo),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,o){var u;(u=n.parent)===null||u===void 0||u.remove(n),g(n,"parent")?n.parent=this:(n.parent_=this,rt({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(n,o)}remove(n){g(n,"parent")?n.parent=null:(n.parent_=null,rt({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(o=>o instanceof n)}onSetAdd_(n){this.updatePositions_();let o=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:o,sender:this}),!o)return;let u=n.item;if(u.viewProps.emitter.on("change",this.onChildViewPropsChange_),u.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),u.viewProps.handleDispose(this.onChildDispose_),u instanceof Qt)u.binding.emitter.on("change",this.onChildInputChange_);else if(u instanceof te)u.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(u instanceof Mt)u.value.emitter.on("change",this.onChildValueChange_);else{let b=Vs(u);if(b){let P=b.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();let o=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:o,sender:this}),!o)return;let u=n.item;if(u instanceof Qt)u.binding.emitter.off("change",this.onChildInputChange_);else if(u instanceof te)u.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(u instanceof Mt)u.value.emitter.off("change",this.onChildValueChange_);else{let b=Vs(u);if(b){let P=b.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){let n=this.bcSet_.items.filter(b=>!b.viewProps.get("hidden")),o=n[0],u=n[n.length-1];this.bcSet_.items.forEach(b=>{let P=[];b===o&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),b===u&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),b.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(o=>o.viewProps.get("disposed")).forEach(o=>{this.bcSet_.remove(o)})}onChildInputChange_(n){let o=zi(this.find(Qt),n.sender);if(!o)throw x.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:o,options:n.options,sender:this})}onChildMonitorUpdate_(n){let o=Mr(this.find(te),n.sender);if(!o)throw x.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:o,sender:this})}onChildValueChange_(n){let o=Uo(this.find(Mt),n.sender);if(!o)throw x.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:o,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class V extends pe{constructor(n,o){super(Object.assign(Object.assign({},o),{view:new wr(n,{viewName:"brk",viewProps:o.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);let u=new T({blade:o.root?void 0:o.blade,viewProps:o.viewProps});u.emitter.on("add",this.onRackAdd_),u.emitter.on("remove",this.onRackRemove_),this.rack=u,this.viewProps.handleDispose(()=>{for(let b=this.rack.children.length-1;b>=0;b--)this.rack.children[b].viewProps.set("disposed",!0)})}onRackAdd_(n){n.isRoot&&C(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){n.isRoot&&E(n.bladeController.view.element)}}let K=A("cnt");class k{constructor(n,o){var u;this.className_=A((u=o.viewName)!==null&&u!==void 0?u:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),K()),o.viewProps.bindClassModifiers(this.element),this.foldable_=o.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),N(this.foldable_,"completed",H(this.element,this.className_(void 0,"cpl")));let b=n.createElement("button");b.classList.add(this.className_("b")),N(o.props,"title",It=>{p(It)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),o.viewProps.bindDisabled(b),this.element.appendChild(b),this.buttonElement=b;let P=n.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);let F=n.createElement("div");F.classList.add(this.className_("t")),S(o.props.value("title"),F),this.buttonElement.appendChild(F),this.titleElement=F;let ot=n.createElement("div");ot.classList.add(this.className_("m")),this.buttonElement.appendChild(ot);let Tt=o.containerElement;Tt.classList.add(this.className_("c")),this.element.appendChild(Tt),this.containerElement=Tt}}class J extends Kn{constructor(n,o){var u;let b=gt.create((u=o.expanded)!==null&&u!==void 0?u:!0),P=new V(n,{blade:o.blade,root:o.root,viewProps:o.viewProps});super(Object.assign(Object.assign({},o),{rackController:P,view:new k(n,{containerElement:P.view.element,foldable:b,props:o.props,viewName:o.root?"rot":void 0,viewProps:o.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=o.props,this.foldable=b,se(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}let xt={id:"folder",type:"blade",accept(l){let n=B,o=et(l,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return o?{params:o}:null},controller(l){return new J(l.document,{blade:l.blade,expanded:l.params.expanded,props:Y.fromObject({title:l.params.title}),viewProps:l.viewProps})},api(l){return l.controller instanceof J?new Bs(l.controller,l.pool):null}};class Et extends Mt{constructor(n,o){let u=o.valueController.viewProps;super(Object.assign(Object.assign({},o),{value:o.valueController.value,view:new ft(n,{props:o.props,viewProps:u}),viewProps:u})),this.props=o.props,this.valueController=o.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Lt extends e{}let Dt=A("spr");class Gt{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(Dt()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("hr");u.classList.add(Dt("r")),this.element.appendChild(u)}}class Ut extends pe{constructor(n,o){super(Object.assign(Object.assign({},o),{view:new Gt(n,{viewProps:o.viewProps})}))}}let kt={id:"separator",type:"blade",accept(l){let o=et(l,{view:B.required.constant("separator")});return o?{params:o}:null},controller(l){return new Ut(l.document,{blade:l.blade,viewProps:l.viewProps})},api(l){return l.controller instanceof Ut?new Lt(l.controller):null}},ee=A("tbi");class fe{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(ee()),o.viewProps.bindClassModifiers(this.element),N(o.props,"selected",P=>{P?this.element.classList.add(ee(void 0,"sel")):this.element.classList.remove(ee(void 0,"sel"))});let u=n.createElement("button");u.classList.add(ee("b")),o.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;let b=n.createElement("div");b.classList.add(ee("t")),S(o.props.value("title"),b),this.buttonElement.appendChild(b),this.titleElement=b}}class Ze{constructor(n,o){this.emitter=new _,this.onClick_=this.onClick_.bind(this),this.props=o.props,this.viewProps=o.viewProps,this.view=new fe(n,{props:o.props,viewProps:o.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class sn{constructor(n,o){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Ze(n,{props:o.itemProps,viewProps:Ct.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new V(n,{blade:At(),viewProps:Ct.create()}),this.props=o.props,N(this.props,"selected",u=>{this.itemController.props.set("selected",u),this.contentController.viewProps.set("hidden",!u)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class me{constructor(n,o){this.controller_=n,this.rackApi_=o}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,o){this.rackApi_.add(n,o)}remove(n){this.rackApi_.remove(n)}addInput(n,o,u){return this.rackApi_.addInput(n,o,u)}addMonitor(n,o,u){return this.rackApi_.addMonitor(n,o,u)}addBlade(n){return this.rackApi_.addBlade(n)}}class Yt extends U{constructor(n,o){super(n,new gi(n.rackController,o)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new _,this.pageApiMap_=new Map,this.rackApi_.on("change",u=>{this.emitter_.emit("change",{event:u})}),this.rackApi_.on("update",u=>{this.emitter_.emit("update",{event:u})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(u=>{this.setUpPageApi_(u)})}get pages(){return this.controller_.pageSet.items.map(n=>{let o=this.pageApiMap_.get(n);if(!o)throw x.shouldNeverHappen();return o})}addPage(n){let o=this.controller_.view.element.ownerDocument,u=new sn(o,{itemProps:Y.fromObject({selected:!1,title:n.title}),props:Y.fromObject({selected:!1})});this.controller_.add(u,n.index);let b=this.pageApiMap_.get(u);if(!b)throw x.shouldNeverHappen();return b}removePage(n){this.controller_.remove(n)}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}setUpPageApi_(n){let o=this.rackApi_.apiSet_.find(b=>b.controller_===n.contentController);if(!o)throw x.shouldNeverHappen();let u=new me(n,o);this.pageApiMap_.set(n,u)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw x.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new c(this,n.rawValue)})}}let Hi=-1;class Me{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=W(!0),this.selectedIndex=W(Hi),this.items_=[]}add(n,o){let u=o!=null?o:this.items_.length;this.items_.splice(u,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){let o=this.items_.indexOf(n);o<0||(this.items_.splice(o,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Hi,this.empty.rawValue=!0;return}let n=this.items_.findIndex(o=>o.rawValue);n<0?(this.items_.forEach((o,u)=>{o.rawValue=u===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((o,u)=>{o.rawValue=u===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){let o=this.items_.findIndex(u=>u===n.sender);this.items_.forEach((u,b)=>{u.rawValue=b===o}),this.selectedIndex.rawValue=o}else this.keepSelection_()}}let Je=A("tab");class Er{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(Je(),K()),o.viewProps.bindClassModifiers(this.element),R(o.empty,H(this.element,Je(void 0,"nop")));let u=n.createElement("div");u.classList.add(Je("t")),this.element.appendChild(u),this.itemsElement=u;let b=n.createElement("div");b.classList.add(Je("i")),this.element.appendChild(b);let P=o.contentsElement;P.classList.add(Je("c")),this.element.appendChild(P),this.contentsElement=P}}class $n extends Kn{constructor(n,o){let u=new V(n,{blade:o.blade,viewProps:o.viewProps}),b=new Me;super({blade:o.blade,rackController:u,view:new Er(n,{contentsElement:u.view.element,empty:b.empty,viewProps:o.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new $t(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=b}get pageSet(){return this.pageSet_}add(n,o){this.pageSet_.add(n,o)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){let o=n.item;C(this.view.itemsElement,o.itemController.view.element,n.index),o.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(o.contentController,n.index),this.tab.add(o.props.value("selected"))}onPageRemove_(n){let o=n.item;E(o.itemController.view.element),o.itemController.viewProps.set("parent",null),this.rackController.rack.remove(o.contentController),this.tab.remove(o.props.value("selected"))}}let Gi={id:"tab",type:"blade",accept(l){let n=B,o=et(l,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!o||o.pages.length===0?null:{params:o}},controller(l){let n=new $n(l.document,{blade:l.blade,viewProps:l.viewProps});return l.params.pages.forEach(o=>{let u=new sn(l.document,{itemProps:Y.fromObject({selected:!1,title:o.title}),props:Y.fromObject({selected:!1})});n.add(u)}),n},api(l){return l.controller instanceof $n?new Yt(l.controller,l.pool):null}};function Re(l,n){let o=l.accept(n.params);if(!o)return null;let u=B.optional.boolean(n.params.disabled).value,b=B.optional.boolean(n.params.hidden).value;return l.controller({blade:At(),document:n.document,params:Object.assign(Object.assign({},o.params),{disabled:u,hidden:b}),viewProps:Ct.create({disabled:u,hidden:b})})}class Mn{constructor(){this.disabled=!1,this.emitter=new _}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class zs{constructor(n,o){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new _,this.interval_=o,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;let n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;let n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class ke{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new _,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){let n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function Wi(l,n){for(;l.length<n;)l.push(void 0)}function Fo(l){let n=[];return Wi(n,l),W(n)}function Sr(l){let n=l.indexOf(void 0);return n<0?l:l.slice(0,n)}function Td(l,n){let o=[...Sr(l),n];return o.length>l.length?o.splice(0,o.length-l.length):Wi(o,l.length),o}class Ad{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new _,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){let n=this.target.read();if(n===void 0)return;let o=this.value.rawValue,u=this.reader_(n);this.value.rawValue=Td(o,u),this.emitter.emit("update",{rawValue:u,sender:this})}onTick_(n){this.read()}}class Hs{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((o,u)=>u.constrain(o),n)}}function En(l,n){if(l instanceof n)return l;if(l instanceof Hs){let o=l.constraints.reduce((u,b)=>u||(b instanceof n?b:null),null);if(o)return o}return null}class Xi{constructor(n){this.values=Y.fromObject({max:n.max,min:n.min})}constrain(n){let o=this.values.get("max"),u=this.values.get("min");return Math.min(Math.max(n,u),o)}}class Gs{constructor(n){this.values=Y.fromObject({options:n})}get options(){return this.values.get("options")}constrain(n){let o=this.values.get("options");return o.length===0||o.filter(b=>b.value===n).length>0?n:o[0].value}}class Gl{constructor(n){this.values=Y.fromObject({max:n.max,min:n.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(n){let o=this.values.get("max"),u=this.values.get("min"),b=n;return p(u)||(b=Math.max(b,u)),p(o)||(b=Math.min(b,o)),b}}class Tr{constructor(n,o=0){this.step=n,this.origin=o}constrain(n){let o=this.origin%this.step,u=Math.round((n-o)/this.step);return o+u*this.step}}let ko=A("lst");class Cd{constructor(n,o){this.onValueChange_=this.onValueChange_.bind(this),this.props_=o.props,this.element=n.createElement("div"),this.element.classList.add(ko()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("select");u.classList.add(ko("s")),N(this.props_,"options",P=>{Z(u),P.forEach((F,ot)=>{let Tt=n.createElement("option");Tt.dataset.index=String(ot),Tt.textContent=F.text,Tt.value=String(F.value),u.appendChild(Tt)})}),o.viewProps.bindDisabled(u),this.element.appendChild(u),this.selectElement=u;let b=n.createElement("div");b.classList.add(ko("m")),b.appendChild(_e(n,"dropdown")),this.element.appendChild(b),o.value.emitter.on("change",this.onValueChange_),this.value_=o.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Ws{constructor(n,o){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=o.props,this.value=o.value,this.viewProps=o.viewProps,this.view=new Cd(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){let u=n.currentTarget.selectedOptions.item(0);if(!u)return;let b=Number(u.dataset.index);this.value.rawValue=this.props.get("options")[b].value}}let Wl=A("pop");class Pd{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(Wl()),o.viewProps.bindClassModifiers(this.element),R(o.shows,H(this.element,Wl(void 0,"v")))}}class Xl{constructor(n,o){this.shows=W(!1),this.viewProps=o.viewProps,this.view=new Pd(n,{shows:this.shows,viewProps:this.viewProps})}}let ql=A("txt");class Rd{constructor(n,o){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(ql()),o.viewProps.bindClassModifiers(this.element),this.props_=o.props,this.props_.emitter.on("change",this.onChange_);let u=n.createElement("input");u.classList.add(ql("i")),u.type="text",o.viewProps.bindDisabled(u),this.element.appendChild(u),this.inputElement=u,o.value.emitter.on("change",this.onChange_),this.value_=o.value,this.refresh()}refresh(){let n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class Ar{constructor(n,o){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=o.parser,this.props=o.props,this.value=o.value,this.viewProps=o.viewProps,this.view=new Rd(n,{props:o.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){let u=n.currentTarget.value,b=this.parser_(u);p(b)||(this.value.rawValue=b),this.view.refresh()}}function Ld(l){return String(l)}function Yl(l){return l==="false"?!1:!!l}function Kl(l){return Ld(l)}class Id{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}let Dd={"**":(l,n)=>Math.pow(l,n),"*":(l,n)=>l*n,"/":(l,n)=>l/n,"%":(l,n)=>l%n,"+":(l,n)=>l+n,"-":(l,n)=>l-n,"<<":(l,n)=>l<<n,">>":(l,n)=>l>>n,">>>":(l,n)=>l>>>n,"&":(l,n)=>l&n,"^":(l,n)=>l^n,"|":(l,n)=>l|n};class Nd{constructor(n,o,u){this.left=o,this.operator=n,this.right=u}evaluate(){let n=Dd[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}let Ud={"+":l=>l,"-":l=>-l,"~":l=>~l};class Od{constructor(n,o){this.operator=n,this.expression=o}evaluate(){let n=Ud[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Bo(l){return(n,o)=>{for(let u=0;u<l.length;u++){let b=l[u](n,o);if(b!=="")return b}return""}}function Xs(l,n){var o;let u=l.substr(n).match(/^\s+/);return(o=u&&u[0])!==null&&o!==void 0?o:""}function Fd(l,n){let o=l.substr(n,1);return o.match(/^[1-9]$/)?o:""}function qs(l,n){var o;let u=l.substr(n).match(/^[0-9]+/);return(o=u&&u[0])!==null&&o!==void 0?o:""}function kd(l,n){let o=qs(l,n);if(o!=="")return o;let u=l.substr(n,1);if(n+=1,u!=="-"&&u!=="+")return"";let b=qs(l,n);return b===""?"":u+b}function Vo(l,n){let o=l.substr(n,1);if(n+=1,o.toLowerCase()!=="e")return"";let u=kd(l,n);return u===""?"":o+u}function $l(l,n){let o=l.substr(n,1);if(o==="0")return o;let u=Fd(l,n);return n+=u.length,u===""?"":u+qs(l,n)}function Bd(l,n){let o=$l(l,n);if(n+=o.length,o==="")return"";let u=l.substr(n,1);if(n+=u.length,u!==".")return"";let b=qs(l,n);return n+=b.length,o+u+b+Vo(l,n)}function Vd(l,n){let o=l.substr(n,1);if(n+=o.length,o!==".")return"";let u=qs(l,n);return n+=u.length,u===""?"":o+u+Vo(l,n)}function zd(l,n){let o=$l(l,n);return n+=o.length,o===""?"":o+Vo(l,n)}let Hd=Bo([Bd,Vd,zd]);function Gd(l,n){var o;let u=l.substr(n).match(/^[01]+/);return(o=u&&u[0])!==null&&o!==void 0?o:""}function Wd(l,n){let o=l.substr(n,2);if(n+=o.length,o.toLowerCase()!=="0b")return"";let u=Gd(l,n);return u===""?"":o+u}function Xd(l,n){var o;let u=l.substr(n).match(/^[0-7]+/);return(o=u&&u[0])!==null&&o!==void 0?o:""}function qd(l,n){let o=l.substr(n,2);if(n+=o.length,o.toLowerCase()!=="0o")return"";let u=Xd(l,n);return u===""?"":o+u}function Yd(l,n){var o;let u=l.substr(n).match(/^[0-9a-f]+/i);return(o=u&&u[0])!==null&&o!==void 0?o:""}function Kd(l,n){let o=l.substr(n,2);if(n+=o.length,o.toLowerCase()!=="0x")return"";let u=Yd(l,n);return u===""?"":o+u}let $d=Bo([Wd,qd,Kd]),Zd=Bo([$d,Hd]);function Jd(l,n){let o=Zd(l,n);return n+=o.length,o===""?null:{evaluable:new Id(o),cursor:n}}function jd(l,n){let o=l.substr(n,1);if(n+=o.length,o!=="(")return null;let u=Jl(l,n);if(!u)return null;n=u.cursor,n+=Xs(l,n).length;let b=l.substr(n,1);return n+=b.length,b!==")"?null:{evaluable:u.evaluable,cursor:n}}function Qd(l,n){var o;return(o=Jd(l,n))!==null&&o!==void 0?o:jd(l,n)}function Zl(l,n){let o=Qd(l,n);if(o)return o;let u=l.substr(n,1);if(n+=u.length,u!=="+"&&u!=="-"&&u!=="~")return null;let b=Zl(l,n);return b?(n=b.cursor,{cursor:n,evaluable:new Od(u,b.evaluable)}):null}function tp(l,n,o){o+=Xs(n,o).length;let u=l.filter(b=>n.startsWith(b,o))[0];return u?(o+=u.length,o+=Xs(n,o).length,{cursor:o,operator:u}):null}function ep(l,n){return(o,u)=>{let b=l(o,u);if(!b)return null;u=b.cursor;let P=b.evaluable;for(;;){let F=tp(n,o,u);if(!F)break;u=F.cursor;let ot=l(o,u);if(!ot)return null;u=ot.cursor,P=new Nd(F.operator,P,ot.evaluable)}return P?{cursor:u,evaluable:P}:null}}let np=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((l,n)=>ep(l,n),Zl);function Jl(l,n){return n+=Xs(l,n).length,np(l,n)}function ip(l){let n=Jl(l,0);return!n||n.cursor+Xs(l,n.cursor).length!==l.length?null:n.evaluable}function Sn(l){var n;let o=ip(l);return(n=o==null?void 0:o.evaluate())!==null&&n!==void 0?n:null}function jl(l){if(typeof l=="number")return l;if(typeof l=="string"){let n=Sn(l);if(!p(n))return n}return 0}function sp(l){return String(l)}function Le(l){return n=>n.toFixed(Math.max(Math.min(l,20),0))}let rp=Le(0);function Cr(l){return rp(l)+"%"}function Ql(l){return String(l)}function zo(l){return l}function Ys({primary:l,secondary:n,forward:o,backward:u}){let b=!1;function P(F){b||(b=!0,F(),b=!1)}l.emitter.on("change",F=>{P(()=>{n.setRawValue(o(l,n),F.options)})}),n.emitter.on("change",F=>{P(()=>{l.setRawValue(u(l,n),F.options)}),P(()=>{n.setRawValue(o(l,n),F.options)})}),P(()=>{n.setRawValue(o(l,n),{forceEmit:!1,last:!0})})}function qe(l,n){let o=l*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+o:n.downKey?-o:0}function Ks(l){return{altKey:l.altKey,downKey:l.key==="ArrowDown",shiftKey:l.shiftKey,upKey:l.key==="ArrowUp"}}function Tn(l){return{altKey:l.altKey,downKey:l.key==="ArrowLeft",shiftKey:l.shiftKey,upKey:l.key==="ArrowRight"}}function op(l){return l==="ArrowUp"||l==="ArrowDown"}function tc(l){return op(l)||l==="ArrowLeft"||l==="ArrowRight"}function Ho(l,n){var o,u;let b=n.ownerDocument.defaultView,P=n.getBoundingClientRect();return{x:l.pageX-(((o=b&&b.scrollX)!==null&&o!==void 0?o:0)+P.left),y:l.pageY-(((u=b&&b.scrollY)!==null&&u!==void 0?u:0)+P.top)}}class vi{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new _,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){let o=this.elem_.getBoundingClientRect();return{bounds:{width:o.width,height:o.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var o;n.preventDefault(),(o=n.currentTarget)===null||o===void 0||o.focus();let u=this.elem_.ownerDocument;u.addEventListener("mousemove",this.onDocumentMouseMove_),u.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(Ho(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(Ho(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){let o=this.elem_.ownerDocument;o.removeEventListener("mousemove",this.onDocumentMouseMove_),o.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(Ho(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();let o=n.targetTouches.item(0),u=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(o?{x:o.clientX-u.left,y:o.clientY-u.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=o}onTouchMove_(n){let o=n.targetTouches.item(0),u=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(o?{x:o.clientX-u.left,y:o.clientY-u.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=o}onTouchEnd_(n){var o;let u=(o=n.targetTouches.item(0))!==null&&o!==void 0?o:this.lastTouch_,b=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(u?{x:u.clientX-b.left,y:u.clientY-b.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function de(l,n,o,u,b){let P=(l-n)/(o-n);return u+P*(b-u)}function ec(l){return String(l.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Te(l,n,o){return Math.min(Math.max(l,n),o)}function nc(l,n){return(l%n+n)%n}let rn=A("txt");class ap{constructor(n,o){this.onChange_=this.onChange_.bind(this),this.props_=o.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(rn(),rn(void 0,"num")),o.arrayPosition&&this.element.classList.add(rn(void 0,o.arrayPosition)),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("input");u.classList.add(rn("i")),u.type="text",o.viewProps.bindDisabled(u),this.element.appendChild(u),this.inputElement=u,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=o.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(rn()),this.inputElement.classList.add(rn("i"));let b=n.createElement("div");b.classList.add(rn("k")),this.element.appendChild(b),this.knobElement=b;let P=n.createElementNS(wt,"svg");P.classList.add(rn("g")),this.knobElement.appendChild(P);let F=n.createElementNS(wt,"path");F.classList.add(rn("gb")),P.appendChild(F),this.guideBodyElem_=F;let ot=n.createElementNS(wt,"path");ot.classList.add(rn("gh")),P.appendChild(ot),this.guideHeadElem_=ot;let Tt=n.createElement("div");Tt.classList.add(A("tt")()),this.knobElement.appendChild(Tt),this.tooltipElem_=Tt,o.value.emitter.on("change",this.onChange_),this.value=o.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove(rn(void 0,"drg"));return}this.element.classList.add(rn(void 0,"drg"));let o=n.rawValue/this.props_.get("draggingScale"),u=o+(o>0?-1:o<0?1:0),b=Te(-u,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${u+b},0 L${u},4 L${u+b},8`,`M ${o},-1 L${o},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${o},4`);let P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${o}px`}refresh(){let n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class $s{constructor(n,o){var u;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=o.baseStep,this.parser_=o.parser,this.props=o.props,this.sliderProps_=(u=o.sliderProps)!==null&&u!==void 0?u:null,this.value=o.value,this.viewProps=o.viewProps,this.dragging_=W(null),this.view=new ap(n,{arrayPosition:o.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);let b=new vi(this.view.knobElement);b.emitter.on("down",this.onPointerDown_),b.emitter.on("move",this.onPointerMove_),b.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var o,u;let b=(o=this.sliderProps_)===null||o===void 0?void 0:o.get("minValue"),P=(u=this.sliderProps_)===null||u===void 0?void 0:u.get("maxValue"),F=n;return b!==void 0&&(F=Math.max(F,b)),P!==void 0&&(F=Math.min(F,P)),F}onInputChange_(n){let u=n.currentTarget.value,b=this.parser_(u);p(b)||(this.value.rawValue=this.constrainValue_(b)),this.view.refresh()}onInputKeyDown_(n){let o=qe(this.baseStep_,Ks(n));o!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+o),{forceEmit:!1,last:!1})}onInputKeyUp_(n){qe(this.baseStep_,Ks(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;let o=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+o*this.props.get("draggingScale"))}onPointerMove_(n){let o=this.computeDraggingValue_(n.data);o!==null&&(this.value.setRawValue(o,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){let o=this.computeDraggingValue_(n.data);o!==null&&(this.value.setRawValue(o,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}let Go=A("sld");class lp{constructor(n,o){this.onChange_=this.onChange_.bind(this),this.props_=o.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(Go()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("div");u.classList.add(Go("t")),o.viewProps.bindTabIndex(u),this.element.appendChild(u),this.trackElement=u;let b=n.createElement("div");b.classList.add(Go("k")),this.trackElement.appendChild(b),this.knobElement=b,o.value.emitter.on("change",this.onChange_),this.value=o.value,this.update_()}update_(){let n=Te(de(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class cp{constructor(n,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=o.baseStep,this.value=o.value,this.viewProps=o.viewProps,this.props=o.props,this.view=new lp(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,o){n.point&&this.value.setRawValue(de(Te(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),o)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){let o=qe(this.baseStep_,Tn(n));o!==0&&this.value.setRawValue(this.value.rawValue+o,{forceEmit:!1,last:!1})}onKeyUp_(n){qe(this.baseStep_,Tn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}let Wo=A("sldtxt");class hp{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(Wo());let u=n.createElement("div");u.classList.add(Wo("s")),this.sliderView_=o.sliderView,u.appendChild(this.sliderView_.element),this.element.appendChild(u);let b=n.createElement("div");b.classList.add(Wo("t")),this.textView_=o.textView,b.appendChild(this.textView_.element),this.element.appendChild(b)}}class Xo{constructor(n,o){this.value=o.value,this.viewProps=o.viewProps,this.sliderC_=new cp(n,{baseStep:o.baseStep,props:o.sliderProps,value:o.value,viewProps:this.viewProps}),this.textC_=new $s(n,{baseStep:o.baseStep,parser:o.parser,props:o.textProps,sliderProps:o.sliderProps,value:o.value,viewProps:o.viewProps}),this.view=new hp(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Zs(l,n){l.write(n)}function Pr(l){let n=B;if(Array.isArray(l))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(l).value;if(typeof l=="object")return n.required.raw(l).value}function ic(l){if(l==="inline"||l==="popup")return l}function Zn(l){let n=B;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(l).value}function sc(l){if(Array.isArray(l))return l;let n=[];return Object.keys(l).forEach(o=>{n.push({text:o,value:l[o]})}),n}function qo(l){return p(l)?null:new Gs(sc(l))}function up(l){let n=l?En(l,Tr):null;return n?n.step:null}function Rr(l,n){let o=l&&En(l,Tr);return o?ec(o.step):Math.max(ec(n),2)}function qi(l){let n=up(l);return n!=null?n:1}function Yi(l,n){var o;let u=l&&En(l,Tr),b=Math.abs((o=u==null?void 0:u.step)!==null&&o!==void 0?o:n);return b===0?.1:Math.pow(10,Math.floor(Math.log10(b))-1)}let Lr=A("ckb");class dp{constructor(n,o){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Lr()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("label");u.classList.add(Lr("l")),this.element.appendChild(u);let b=n.createElement("input");b.classList.add(Lr("i")),b.type="checkbox",u.appendChild(b),this.inputElement=b,o.viewProps.bindDisabled(this.inputElement);let P=n.createElement("div");P.classList.add(Lr("w")),u.appendChild(P);let F=_e(n,"check");P.appendChild(F),o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class pp{constructor(n,o){this.onInputChange_=this.onInputChange_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new dp(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){let o=n.currentTarget;this.value.rawValue=o.checked}}function fp(l){let n=[],o=qo(l.options);return o&&n.push(o),new Hs(n)}let mp={id:"input-bool",type:"input",accept:(l,n)=>{if(typeof l!="boolean")return null;let u=et(n,{options:B.optional.custom(Pr)});return u?{initialValue:l,params:u}:null},binding:{reader:l=>Yl,constraint:l=>fp(l.params),writer:l=>Zs},controller:l=>{let n=l.document,o=l.value,u=l.constraint,b=u&&En(u,Gs);return b?new Ws(n,{props:new Y({options:b.values.value("options")}),value:o,viewProps:l.viewProps}):new pp(n,{value:o,viewProps:l.viewProps})}},_i=A("col");class gp{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(_i()),o.foldable.bindExpandedClass(this.element,_i(void 0,"expanded")),N(o.foldable,"completed",H(this.element,_i(void 0,"cpl")));let u=n.createElement("div");u.classList.add(_i("h")),this.element.appendChild(u);let b=n.createElement("div");b.classList.add(_i("s")),u.appendChild(b),this.swatchElement=b;let P=n.createElement("div");if(P.classList.add(_i("t")),u.appendChild(P),this.textElement=P,o.pickerLayout==="inline"){let F=n.createElement("div");F.classList.add(_i("p")),this.element.appendChild(F),this.pickerElement=F}else this.pickerElement=null}}function vp(l,n,o){let u=Te(l/255,0,1),b=Te(n/255,0,1),P=Te(o/255,0,1),F=Math.max(u,b,P),ot=Math.min(u,b,P),Tt=F-ot,It=0,jt=0,ne=(ot+F)/2;return Tt!==0&&(jt=Tt/(1-Math.abs(F+ot-1)),u===F?It=(b-P)/Tt:b===F?It=2+(P-u)/Tt:It=4+(u-b)/Tt,It=It/6+(It<0?1:0)),[It*360,jt*100,ne*100]}function _p(l,n,o){let u=(l%360+360)%360,b=Te(n/100,0,1),P=Te(o/100,0,1),F=(1-Math.abs(2*P-1))*b,ot=F*(1-Math.abs(u/60%2-1)),Tt=P-F/2,It,jt,ne;return u>=0&&u<60?[It,jt,ne]=[F,ot,0]:u>=60&&u<120?[It,jt,ne]=[ot,F,0]:u>=120&&u<180?[It,jt,ne]=[0,F,ot]:u>=180&&u<240?[It,jt,ne]=[0,ot,F]:u>=240&&u<300?[It,jt,ne]=[ot,0,F]:[It,jt,ne]=[F,0,ot],[(It+Tt)*255,(jt+Tt)*255,(ne+Tt)*255]}function xp(l,n,o){let u=Te(l/255,0,1),b=Te(n/255,0,1),P=Te(o/255,0,1),F=Math.max(u,b,P),ot=Math.min(u,b,P),Tt=F-ot,It;Tt===0?It=0:F===u?It=60*(((b-P)/Tt%6+6)%6):F===b?It=60*((P-u)/Tt+2):It=60*((u-b)/Tt+4);let jt=F===0?0:Tt/F,ne=F;return[It,jt*100,ne*100]}function rc(l,n,o){let u=nc(l,360),b=Te(n/100,0,1),P=Te(o/100,0,1),F=P*b,ot=F*(1-Math.abs(u/60%2-1)),Tt=P-F,It,jt,ne;return u>=0&&u<60?[It,jt,ne]=[F,ot,0]:u>=60&&u<120?[It,jt,ne]=[ot,F,0]:u>=120&&u<180?[It,jt,ne]=[0,F,ot]:u>=180&&u<240?[It,jt,ne]=[0,ot,F]:u>=240&&u<300?[It,jt,ne]=[ot,0,F]:[It,jt,ne]=[F,0,ot],[(It+Tt)*255,(jt+Tt)*255,(ne+Tt)*255]}function bp(l,n,o){let u=o+n*(100-Math.abs(2*o-100))/200;return[l,u!==0?n*(100-Math.abs(2*o-100))/u:0,o+n*(100-Math.abs(2*o-100))/(2*100)]}function yp(l,n,o){let u=100-Math.abs(o*(200-n)/100-100);return[l,u!==0?n*o/u:0,o*(200-n)/(2*100)]}function xi(l){return[l[0],l[1],l[2]]}function oc(l,n){return[l[0],l[1],l[2],n]}let wp={hsl:{hsl:(l,n,o)=>[l,n,o],hsv:bp,rgb:_p},hsv:{hsl:yp,hsv:(l,n,o)=>[l,n,o],rgb:rc},rgb:{hsl:vp,hsv:xp,rgb:(l,n,o)=>[l,n,o]}};function Ir(l,n){return[n==="float"?1:l==="rgb"?255:360,n==="float"?1:l==="rgb"?255:100,n==="float"?1:l==="rgb"?255:100]}function Mp(l,n){return l===n?n:nc(l,n)}function Ep(l,n,o){var u;let b=Ir(n,o);return[n==="rgb"?Te(l[0],0,b[0]):Mp(l[0],b[0]),Te(l[1],0,b[1]),Te(l[2],0,b[2]),Te((u=l[3])!==null&&u!==void 0?u:1,0,1)]}function ac(l,n,o,u){let b=Ir(n,o),P=Ir(n,u);return l.map((F,ot)=>F/b[ot]*P[ot])}function Sp(l,n,o){let u=ac(l,n.mode,n.type,"int"),b=wp[n.mode][o.mode](...u);return ac(b,o.mode,"int",o.type)}function Dr(l,n){return typeof l!="object"||p(l)?!1:n in l&&typeof l[n]=="number"}class Kt{static black(n="int"){return new Kt([0,0,0],"rgb",n)}static fromObject(n,o="int"){let u="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new Kt(u,"rgb",o)}static toRgbaObject(n,o="int"){return n.toRgbaObject(o)}static isRgbColorObject(n){return Dr(n,"r")&&Dr(n,"g")&&Dr(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&Dr(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,o){if(n.mode!==o.mode)return!1;let u=n.comps_,b=o.comps_;for(let P=0;P<u.length;P++)if(u[P]!==b[P])return!1;return!0}constructor(n,o,u="int"){this.mode=o,this.type=u,this.comps_=Ep(n,o,u)}getComponents(n,o="int"){return oc(Sp(xi(this.comps_),{mode:this.mode,type:this.type},{mode:n!=null?n:this.mode,type:o}),this.comps_[3])}toRgbaObject(n="int"){let o=this.getComponents("rgb",n);return{r:o[0],g:o[1],b:o[2],a:o[3]}}}let Jn=A("colp");class Tp{constructor(n,o){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(Jn()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("div");u.classList.add(Jn("hsv"));let b=n.createElement("div");b.classList.add(Jn("sv")),this.svPaletteView_=o.svPaletteView,b.appendChild(this.svPaletteView_.element),u.appendChild(b);let P=n.createElement("div");P.classList.add(Jn("h")),this.hPaletteView_=o.hPaletteView,P.appendChild(this.hPaletteView_.element),u.appendChild(P),this.element.appendChild(u);let F=n.createElement("div");if(F.classList.add(Jn("rgb")),this.textView_=o.textView,F.appendChild(this.textView_.element),this.element.appendChild(F),o.alphaViews){this.alphaViews_={palette:o.alphaViews.palette,text:o.alphaViews.text};let ot=n.createElement("div");ot.classList.add(Jn("a"));let Tt=n.createElement("div");Tt.classList.add(Jn("ap")),Tt.appendChild(this.alphaViews_.palette.element),ot.appendChild(Tt);let It=n.createElement("div");It.classList.add(Jn("at")),It.appendChild(this.alphaViews_.text.element),ot.appendChild(It),this.element.appendChild(ot)}}get allFocusableElements(){let n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(o=>o.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function Ap(l){return l==="int"?"int":l==="float"?"float":void 0}function Yo(l){let n=B;return et(l,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(Ap)}),expanded:n.optional.boolean,picker:n.optional.custom(ic)})}function bi(l){return l?.1:1}function yi(l){var n;return(n=l.color)===null||n===void 0?void 0:n.type}function Cp(l,n){return l.alpha===n.alpha&&l.mode===n.mode&&l.notation===n.notation&&l.type===n.type}function on(l,n){let o=l.match(/^(.+)%$/);return Math.min(o?parseFloat(o[1])*.01*n:parseFloat(l),n)}let Pp={deg:l=>l,grad:l=>l*360/400,rad:l=>l*360/(2*Math.PI),turn:l=>l*360};function lc(l){let n=l.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(l);let o=parseFloat(n[1]),u=n[2];return Pp[u](o)}function cc(l){let n=l.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;let o=[on(n[1],255),on(n[2],255),on(n[3],255)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function hc(l){return n=>{let o=cc(n);return o?new Kt(o,"rgb",l):null}}function uc(l){let n=l.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;let o=[on(n[1],255),on(n[2],255),on(n[3],255),on(n[4],1)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function dc(l){return n=>{let o=uc(n);return o?new Kt(o,"rgb",l):null}}function pc(l){let n=l.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;let o=[lc(n[1]),on(n[2],100),on(n[3],100)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function fc(l){return n=>{let o=pc(n);return o?new Kt(o,"hsl",l):null}}function mc(l){let n=l.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;let o=[lc(n[1]),on(n[2],100),on(n[3],100),on(n[4],1)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function gc(l){return n=>{let o=mc(n);return o?new Kt(o,"hsl",l):null}}function vc(l){let n=l.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];let o=l.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return o?[parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16)]:null}function Rp(l){let n=vc(l);return n?new Kt(n,"rgb","int"):null}function _c(l){let n=l.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),de(parseInt(n[4]+n[4],16),0,255,0,1)];let o=l.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return o?[parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16),de(parseInt(o[4],16),0,255,0,1)]:null}function Lp(l){let n=_c(l);return n?new Kt(n,"rgb","int"):null}function xc(l){let n=l.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;let o=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function bc(l){return n=>{let o=xc(n);return o?new Kt(o,"rgb",l):null}}function yc(l){let n=l.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;let o=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function wc(l){return n=>{let o=yc(n);return o?new Kt(o,"rgb",l):null}}let Ip=[{parser:vc,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:_c,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:cc,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:uc,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:pc,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:mc,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:xc,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:yc,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Dp(l){return Ip.reduce((n,{parser:o,result:u})=>n||(o(l)?u:null),null)}function Ko(l,n="int"){let o=Dp(l);return o?o.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},o),{type:"int"}):o.notation==="func"?Object.assign(Object.assign({},o),{type:n}):null:null}let Mc={int:[Rp,Lp,hc("int"),dc("int"),fc("int"),gc("int"),bc("int"),wc("int")],float:[hc("float"),dc("float"),fc("float"),gc("float"),bc("float"),wc("float")]};function Np(l){let n=Mc[l];return o=>{if(typeof o!="string")return Kt.black(l);let u=n.reduce((b,P)=>b||P(o),null);return u!=null?u:Kt.black(l)}}function $o(l){let n=Mc[l];return o=>n.reduce((u,b)=>u||b(o),null)}function Ec(l){let n=Te(Math.floor(l),0,255).toString(16);return n.length===1?`0${n}`:n}function Sc(l,n="#"){let o=xi(l.getComponents("rgb")).map(Ec).join("");return`${n}${o}`}function Zo(l,n="#"){let o=l.getComponents("rgb"),u=[o[0],o[1],o[2],o[3]*255].map(Ec).join("");return`${n}${u}`}function Tc(l,n){let o=Le(n==="float"?2:0);return`rgb(${xi(l.getComponents("rgb",n)).map(b=>o(b)).join(", ")})`}function Up(l){return n=>Tc(n,l)}function Nr(l,n){let o=Le(2),u=Le(n==="float"?2:0);return`rgba(${l.getComponents("rgb",n).map((P,F)=>(F===3?o:u)(P)).join(", ")})`}function Op(l){return n=>Nr(n,l)}function Fp(l){let n=[Le(0),Cr,Cr];return`hsl(${xi(l.getComponents("hsl")).map((u,b)=>n[b](u)).join(", ")})`}function kp(l){let n=[Le(0),Cr,Cr,Le(2)];return`hsla(${l.getComponents("hsl").map((u,b)=>n[b](u)).join(", ")})`}function Ac(l,n){let o=Le(n==="float"?2:0),u=["r","g","b"];return`{${xi(l.getComponents("rgb",n)).map((P,F)=>`${u[F]}: ${o(P)}`).join(", ")}}`}function Bp(l){return n=>Ac(n,l)}function Cc(l,n){let o=Le(2),u=Le(n==="float"?2:0),b=["r","g","b","a"];return`{${l.getComponents("rgb",n).map((F,ot)=>{let Tt=ot===3?o:u;return`${b[ot]}: ${Tt(F)}`}).join(", ")}}`}function Vp(l){return n=>Cc(n,l)}let zp=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Sc},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Zo},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Fp},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:kp},...["int","float"].reduce((l,n)=>[...l,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:Up(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:Op(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:Bp(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:Vp(n)}],[])];function Jo(l){return zp.reduce((n,o)=>n||(Cp(o.format,l)?o.stringifier:null),null)}let Js=A("apl");class Hp{constructor(n,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Js()),o.viewProps.bindClassModifiers(this.element),o.viewProps.bindTabIndex(this.element);let u=n.createElement("div");u.classList.add(Js("b")),this.element.appendChild(u);let b=n.createElement("div");b.classList.add(Js("c")),u.appendChild(b),this.colorElem_=b;let P=n.createElement("div");P.classList.add(Js("m")),this.element.appendChild(P),this.markerElem_=P;let F=n.createElement("div");F.classList.add(Js("p")),this.markerElem_.appendChild(F),this.previewElem_=F,this.update_()}update_(){let n=this.value.rawValue,o=n.getComponents("rgb"),u=new Kt([o[0],o[1],o[2],0],"rgb"),b=new Kt([o[0],o[1],o[2],255],"rgb"),P=["to right",Nr(u),Nr(b)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Nr(n);let F=de(o[3],0,1,0,100);this.markerElem_.style.left=`${F}%`}onValueChange_(){this.update_()}}class Gp{constructor(n,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new Hp(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,o){if(!n.point)return;let u=n.point.x/n.bounds.width,b=this.value.rawValue,[P,F,ot]=b.getComponents("hsv");this.value.setRawValue(new Kt([P,F,ot,u],"hsv"),o)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){let o=qe(bi(!0),Tn(n));if(o===0)return;let u=this.value.rawValue,[b,P,F,ot]=u.getComponents("hsv");this.value.setRawValue(new Kt([b,P,F,ot+o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){qe(bi(!0),Tn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}let Ki=A("coltxt");function Wp(l){let n=l.createElement("select"),o=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(o.reduce((u,b)=>{let P=l.createElement("option");return P.textContent=b.text,P.value=b.value,u.appendChild(P),u},l.createDocumentFragment())),n}class Xp{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add(Ki()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("div");u.classList.add(Ki("m")),this.modeElem_=Wp(n),this.modeElem_.classList.add(Ki("ms")),u.appendChild(this.modeSelectElement),o.viewProps.bindDisabled(this.modeElem_);let b=n.createElement("div");b.classList.add(Ki("mm")),b.appendChild(_e(n,"dropdown")),u.appendChild(b),this.element.appendChild(u);let P=n.createElement("div");P.classList.add(Ki("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=o.textViews,this.applyTextViews_(),R(o.colorMode,F=>{this.modeElem_.value=F})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){Z(this.textsElem_);let n=this.element.ownerDocument;this.textViews_.forEach(o=>{let u=n.createElement("div");u.classList.add(Ki("c")),u.appendChild(o.element),this.textsElem_.appendChild(u)})}}function qp(l){return Le(l==="float"?2:0)}function Yp(l,n,o){let u=Ir(l,n)[o];return new Xi({min:0,max:u})}function jo(l,n,o){return new $s(l,{arrayPosition:o===0?"fst":o===3-1?"lst":"mid",baseStep:bi(!1),parser:n.parser,props:Y.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:qp(n.colorType)}),value:W(0,{constraint:Yp(n.colorMode,n.colorType,o)}),viewProps:n.viewProps})}class Kp{constructor(n,o){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=o.colorType,this.parser_=o.parser,this.value=o.value,this.viewProps=o.viewProps,this.colorMode=W(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new Xp(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){let o={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},u=[jo(n,o,0),jo(n,o,1),jo(n,o,2)];return u.forEach((b,P)=>{Ys({primary:this.value,secondary:b.value,forward:F=>F.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(F,ot)=>{let Tt=this.colorMode.rawValue,It=F.rawValue.getComponents(Tt,this.colorType_);return It[P]=ot.rawValue,new Kt(oc(xi(It),It[3]),Tt,this.colorType_)}})}),u}onModeSelectChange_(n){let o=n.currentTarget;this.colorMode.rawValue=o.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}let Qo=A("hpl");class $p{constructor(n,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Qo()),o.viewProps.bindClassModifiers(this.element),o.viewProps.bindTabIndex(this.element);let u=n.createElement("div");u.classList.add(Qo("c")),this.element.appendChild(u);let b=n.createElement("div");b.classList.add(Qo("m")),this.element.appendChild(b),this.markerElem_=b,this.update_()}update_(){let n=this.value.rawValue,[o]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=Tc(new Kt([o,100,100],"hsv"));let u=de(o,0,360,0,100);this.markerElem_.style.left=`${u}%`}onValueChange_(){this.update_()}}class Zp{constructor(n,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new $p(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,o){if(!n.point)return;let u=de(Te(n.point.x,0,n.bounds.width),0,n.bounds.width,0,360),b=this.value.rawValue,[,P,F,ot]=b.getComponents("hsv");this.value.setRawValue(new Kt([u,P,F,ot],"hsv"),o)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){let o=qe(bi(!1),Tn(n));if(o===0)return;let u=this.value.rawValue,[b,P,F,ot]=u.getComponents("hsv");this.value.setRawValue(new Kt([b+o,P,F,ot],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){qe(bi(!1),Tn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}let ta=A("svp"),Pc=64;class Jp{constructor(n,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(ta()),o.viewProps.bindClassModifiers(this.element),o.viewProps.bindTabIndex(this.element);let u=n.createElement("canvas");u.height=Pc,u.width=Pc,u.classList.add(ta("c")),this.element.appendChild(u),this.canvasElement=u;let b=n.createElement("div");b.classList.add(ta("m")),this.element.appendChild(b),this.markerElem_=b,this.update_()}update_(){let n=ae(this.canvasElement);if(!n)return;let u=this.value.rawValue.getComponents("hsv"),b=this.canvasElement.width,P=this.canvasElement.height,F=n.getImageData(0,0,b,P),ot=F.data;for(let jt=0;jt<P;jt++)for(let ne=0;ne<b;ne++){let wi=de(ne,0,b,0,100),Qs=de(jt,0,P,100,0),tr=rc(u[0],wi,Qs),Ur=(jt*b+ne)*4;ot[Ur]=tr[0],ot[Ur+1]=tr[1],ot[Ur+2]=tr[2],ot[Ur+3]=255}n.putImageData(F,0,0);let Tt=de(u[1],0,100,0,100);this.markerElem_.style.left=`${Tt}%`;let It=de(u[2],0,100,100,0);this.markerElem_.style.top=`${It}%`}onValueChange_(){this.update_()}}class jp{constructor(n,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new Jp(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,o){if(!n.point)return;let u=de(n.point.x,0,n.bounds.width,0,100),b=de(n.point.y,0,n.bounds.height,100,0),[P,,,F]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Kt([P,u,b,F],"hsv"),o)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){tc(n.key)&&n.preventDefault();let[o,u,b,P]=this.value.rawValue.getComponents("hsv"),F=bi(!1),ot=qe(F,Tn(n)),Tt=qe(F,Ks(n));ot===0&&Tt===0||this.value.setRawValue(new Kt([o,u+ot,b+Tt,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){let o=bi(!1),u=qe(o,Tn(n)),b=qe(o,Ks(n));u===0&&b===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Qp{constructor(n,o){this.value=o.value,this.viewProps=o.viewProps,this.hPaletteC_=new Zp(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new jp(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=o.supportsAlpha?{palette:new Gp(n,{value:this.value,viewProps:this.viewProps}),text:new $s(n,{parser:Sn,baseStep:.1,props:Y.fromObject({draggingScale:.01,formatter:Le(2)}),value:W(0,{constraint:new Xi({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Ys({primary:this.value,secondary:this.alphaIcs_.text.value,forward:u=>u.rawValue.getComponents()[3],backward:(u,b)=>{let P=u.rawValue.getComponents();return P[3]=b.rawValue,new Kt(P,u.rawValue.mode)}}),this.textC_=new Kp(n,{colorType:o.colorType,parser:Sn,value:this.value,viewProps:this.viewProps}),this.view=new Tp(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:o.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}let ea=A("colsw");class tf{constructor(n,o){this.onValueChange_=this.onValueChange_.bind(this),o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.element=n.createElement("div"),this.element.classList.add(ea()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("div");u.classList.add(ea("sw")),this.element.appendChild(u),this.swatchElem_=u;let b=n.createElement("button");b.classList.add(ea("b")),o.viewProps.bindDisabled(b),this.element.appendChild(b),this.buttonElement=b,this.update_()}update_(){let n=this.value.rawValue;this.swatchElem_.style.backgroundColor=Zo(n)}onValueChange_(){this.update_()}}class ef{constructor(n,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new tf(n,{value:this.value,viewProps:this.viewProps})}}class na{constructor(n,o){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.foldable_=gt.create(o.expanded),this.swatchC_=new ef(n,{value:this.value,viewProps:this.viewProps});let u=this.swatchC_.view.buttonElement;u.addEventListener("blur",this.onButtonBlur_),u.addEventListener("click",this.onButtonClick_),this.textC_=new Ar(n,{parser:o.parser,props:Y.fromObject({formatter:o.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new gp(n,{foldable:this.foldable_,pickerLayout:o.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=o.pickerLayout==="popup"?new Xl(n,{viewProps:this.viewProps}):null;let b=new Qp(n,{colorType:o.colorType,supportsAlpha:o.supportsAlpha,value:this.value,viewProps:this.viewProps});b.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=b,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(b.view.element),Ys({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,F)=>F.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),se(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;let o=this.view.element,u=n.relatedTarget;(!u||!o.contains(u))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;let o=this.popC_.view.element,u=at(n);u&&o.contains(u)||u&&u===this.swatchC_.view.buttonElement&&!oe(o.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function nf(l,n){return Kt.isColorObject(l)?Kt.fromObject(l,n):Kt.black(n)}function sf(l){return xi(l.getComponents("rgb")).reduce((n,o)=>n<<8|Math.floor(o)&255,0)}function rf(l){return l.getComponents("rgb").reduce((n,o,u)=>{let b=Math.floor(u===3?o*255:o)&255;return n<<8|b},0)>>>0}function of(l){return new Kt([l>>16&255,l>>8&255,l&255],"rgb")}function af(l){return new Kt([l>>24&255,l>>16&255,l>>8&255,de(l&255,0,255,0,1)],"rgb")}function lf(l){return typeof l!="number"?Kt.black():of(l)}function cf(l){return typeof l!="number"?Kt.black():af(l)}function hf(l){let n=Jo(l);return n?(o,u)=>{Zs(o,n(u))}:null}function uf(l){let n=l?rf:sf;return(o,u)=>{Zs(o,n(u))}}function df(l,n,o){let u=n.toRgbaObject(o);l.writeProperty("r",u.r),l.writeProperty("g",u.g),l.writeProperty("b",u.b),l.writeProperty("a",u.a)}function pf(l,n,o){let u=n.toRgbaObject(o);l.writeProperty("r",u.r),l.writeProperty("g",u.g),l.writeProperty("b",u.b)}function ff(l,n){return(o,u)=>{l?df(o,u,n):pf(o,u,n)}}function ia(l){var n;return!!(l!=null&&l.alpha||!((n=l==null?void 0:l.color)===null||n===void 0)&&n.alpha)}function mf(l){return l?n=>Zo(n,"0x"):n=>Sc(n,"0x")}function gf(l){return"color"in l||"view"in l&&l.view==="color"}let vf={id:"input-color-number",type:"input",accept:(l,n)=>{if(typeof l!="number"||!gf(n))return null;let o=Yo(n);return o?{initialValue:l,params:o}:null},binding:{reader:l=>ia(l.params)?cf:lf,equals:Kt.equals,writer:l=>uf(ia(l.params))},controller:l=>{let n=ia(l.params),o="expanded"in l.params?l.params.expanded:void 0,u="picker"in l.params?l.params.picker:void 0;return new na(l.document,{colorType:"int",expanded:o!=null?o:!1,formatter:mf(n),parser:$o("int"),pickerLayout:u!=null?u:"popup",supportsAlpha:n,value:l.value,viewProps:l.viewProps})}};function _f(l){return Kt.isRgbaColorObject(l)}function xf(l){return n=>nf(n,l)}function bf(l,n){return o=>l?Cc(o,n):Ac(o,n)}let yf={id:"input-color-object",type:"input",accept:(l,n)=>{if(!Kt.isColorObject(l))return null;let o=Yo(n);return o?{initialValue:l,params:o}:null},binding:{reader:l=>xf(yi(l.params)),equals:Kt.equals,writer:l=>ff(_f(l.initialValue),yi(l.params))},controller:l=>{var n;let o=Kt.isRgbaColorObject(l.initialValue),u="expanded"in l.params?l.params.expanded:void 0,b="picker"in l.params?l.params.picker:void 0,P=(n=yi(l.params))!==null&&n!==void 0?n:"int";return new na(l.document,{colorType:P,expanded:u!=null?u:!1,formatter:bf(o,P),parser:$o(P),pickerLayout:b!=null?b:"popup",supportsAlpha:o,value:l.value,viewProps:l.viewProps})}},wf={id:"input-color-string",type:"input",accept:(l,n)=>{if(typeof l!="string"||"view"in n&&n.view==="text")return null;let o=Ko(l,yi(n));if(!o||!Jo(o))return null;let b=Yo(n);return b?{initialValue:l,params:b}:null},binding:{reader:l=>{var n;return Np((n=yi(l.params))!==null&&n!==void 0?n:"int")},equals:Kt.equals,writer:l=>{let n=Ko(l.initialValue,yi(l.params));if(!n)throw x.shouldNeverHappen();let o=hf(n);if(!o)throw x.notBindable();return o}},controller:l=>{let n=Ko(l.initialValue,yi(l.params));if(!n)throw x.shouldNeverHappen();let o=Jo(n);if(!o)throw x.shouldNeverHappen();let u="expanded"in l.params?l.params.expanded:void 0,b="picker"in l.params?l.params.picker:void 0;return new na(l.document,{colorType:n.type,expanded:u!=null?u:!1,formatter:o,parser:$o(n.type),pickerLayout:b!=null?b:"popup",supportsAlpha:n.alpha,value:l.value,viewProps:l.viewProps})}};class jn{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){let o=this.asm_.toComponents(n).map((u,b)=>{var P,F;return(F=(P=this.components[b])===null||P===void 0?void 0:P.constrain(u))!==null&&F!==void 0?F:u});return this.asm_.fromComponents(o)}}let Rc=A("pndtxt");class Mf{constructor(n,o){this.textViews=o.textViews,this.element=n.createElement("div"),this.element.classList.add(Rc()),this.textViews.forEach(u=>{let b=n.createElement("div");b.classList.add(Rc("a")),b.appendChild(u.element),this.element.appendChild(b)})}}function Ef(l,n,o){return new $s(l,{arrayPosition:o===0?"fst":o===n.axes.length-1?"lst":"mid",baseStep:n.axes[o].baseStep,parser:n.parser,props:n.axes[o].textProps,value:W(0,{constraint:n.axes[o].constraint}),viewProps:n.viewProps})}class sa{constructor(n,o){this.value=o.value,this.viewProps=o.viewProps,this.acs_=o.axes.map((u,b)=>Ef(n,o,b)),this.acs_.forEach((u,b)=>{Ys({primary:this.value,secondary:u.value,forward:P=>o.assembly.toComponents(P.rawValue)[b],backward:(P,F)=>{let ot=o.assembly.toComponents(P.rawValue);return ot[b]=F.rawValue,o.assembly.fromComponents(ot)}})}),this.view=new Mf(n,{textViews:this.acs_.map(u=>u.view)})}}function Lc(l,n){return"step"in l&&!p(l.step)?new Tr(l.step,n):null}function Ic(l){return!p(l.max)&&!p(l.min)?new Xi({max:l.max,min:l.min}):!p(l.max)||!p(l.min)?new Gl({max:l.max,min:l.min}):null}function Sf(l){let n=En(l,Xi);if(n)return[n.values.get("min"),n.values.get("max")];let o=En(l,Gl);return o?[o.minValue,o.maxValue]:[void 0,void 0]}function Tf(l,n){let o=[],u=Lc(l,n);u&&o.push(u);let b=Ic(l);b&&o.push(b);let P=qo(l.options);return P&&o.push(P),new Hs(o)}let Af={id:"input-number",type:"input",accept:(l,n)=>{if(typeof l!="number")return null;let o=B,u=et(n,{format:o.optional.function,max:o.optional.number,min:o.optional.number,options:o.optional.custom(Pr),step:o.optional.number});return u?{initialValue:l,params:u}:null},binding:{reader:l=>jl,constraint:l=>Tf(l.params,l.initialValue),writer:l=>Zs},controller:l=>{var n;let o=l.value,u=l.constraint,b=u&&En(u,Gs);if(b)return new Ws(l.document,{props:new Y({options:b.values.value("options")}),value:o,viewProps:l.viewProps});let P=(n="format"in l.params?l.params.format:void 0)!==null&&n!==void 0?n:Le(Rr(u,o.rawValue)),F=u&&En(u,Xi);return F?new Xo(l.document,{baseStep:qi(u),parser:Sn,sliderProps:new Y({maxValue:F.values.value("max"),minValue:F.values.value("min")}),textProps:Y.fromObject({draggingScale:Yi(u,o.rawValue),formatter:P}),value:o,viewProps:l.viewProps}):new $s(l.document,{baseStep:qi(u),parser:Sn,props:Y.fromObject({draggingScale:Yi(u,o.rawValue),formatter:P}),value:o,viewProps:l.viewProps})}};class Qn{constructor(n=0,o=0){this.x=n,this.y=o}getComponents(){return[this.x,this.y]}static isObject(n){if(p(n))return!1;let o=n.x,u=n.y;return!(typeof o!="number"||typeof u!="number")}static equals(n,o){return n.x===o.x&&n.y===o.y}toObject(){return{x:this.x,y:this.y}}}let Dc={toComponents:l=>l.getComponents(),fromComponents:l=>new Qn(...l)},$i=A("p2d");class Cf{constructor(n,o){this.element=n.createElement("div"),this.element.classList.add($i()),o.viewProps.bindClassModifiers(this.element),R(o.expanded,H(this.element,$i(void 0,"expanded")));let u=n.createElement("div");u.classList.add($i("h")),this.element.appendChild(u);let b=n.createElement("button");b.classList.add($i("b")),b.appendChild(_e(n,"p2dpad")),o.viewProps.bindDisabled(b),u.appendChild(b),this.buttonElement=b;let P=n.createElement("div");if(P.classList.add($i("t")),u.appendChild(P),this.textElement=P,o.pickerLayout==="inline"){let F=n.createElement("div");F.classList.add($i("p")),this.element.appendChild(F),this.pickerElement=F}else this.pickerElement=null}}let ti=A("p2dp");class Pf{constructor(n,o){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=o.invertsY,this.maxValue_=o.maxValue,this.element=n.createElement("div"),this.element.classList.add(ti()),o.layout==="popup"&&this.element.classList.add(ti(void 0,"p")),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("div");u.classList.add(ti("p")),o.viewProps.bindTabIndex(u),this.element.appendChild(u),this.padElement=u;let b=n.createElementNS(wt,"svg");b.classList.add(ti("g")),this.padElement.appendChild(b),this.svgElem_=b;let P=n.createElementNS(wt,"line");P.classList.add(ti("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);let F=n.createElementNS(wt,"line");F.classList.add(ti("ax")),F.setAttributeNS(null,"x1","50%"),F.setAttributeNS(null,"y1","0"),F.setAttributeNS(null,"x2","50%"),F.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(F);let ot=n.createElementNS(wt,"line");ot.classList.add(ti("l")),ot.setAttributeNS(null,"x1","50%"),ot.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ot),this.lineElem_=ot;let Tt=n.createElement("div");Tt.classList.add(ti("m")),this.padElement.appendChild(Tt),this.markerElem_=Tt,o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){let[n,o]=this.value.rawValue.getComponents(),u=this.maxValue_,b=de(n,-u,+u,0,100),P=de(o,-u,+u,0,100),F=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${b}%`),this.lineElem_.setAttributeNS(null,"y2",`${F}%`),this.markerElem_.style.left=`${b}%`,this.markerElem_.style.top=`${F}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Nc(l,n,o){return[qe(n[0],Tn(l)),qe(n[1],Ks(l))*(o?1:-1)]}class Rf{constructor(n,o){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.baseSteps_=o.baseSteps,this.maxValue_=o.maxValue,this.invertsY_=o.invertsY,this.view=new Pf(n,{invertsY:this.invertsY_,layout:o.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new vi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,o){if(!n.point)return;let u=this.maxValue_,b=de(n.point.x,0,n.bounds.width,-u,+u),P=de(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-u,+u);this.value.setRawValue(new Qn(b,P),o)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){tc(n.key)&&n.preventDefault();let[o,u]=Nc(n,this.baseSteps_,this.invertsY_);o===0&&u===0||this.value.setRawValue(new Qn(this.value.rawValue.x+o,this.value.rawValue.y+u),{forceEmit:!1,last:!1})}onPadKeyUp_(n){let[o,u]=Nc(n,this.baseSteps_,this.invertsY_);o===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Lf{constructor(n,o){var u,b;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.foldable_=gt.create(o.expanded),this.popC_=o.pickerLayout==="popup"?new Xl(n,{viewProps:this.viewProps}):null;let P=new Rf(n,{baseSteps:[o.axes[0].baseStep,o.axes[1].baseStep],invertsY:o.invertsY,layout:o.pickerLayout,maxValue:o.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(F=>{F.addEventListener("blur",this.onPopupChildBlur_),F.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new sa(n,{assembly:Dc,axes:o.axes,parser:o.parser,value:this.value,viewProps:this.viewProps}),this.view=new Cf(n,{expanded:this.foldable_.value("expanded"),pickerLayout:o.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("blur",this.onPadButtonBlur_),(b=this.view.buttonElement)===null||b===void 0||b.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Ys({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:F=>F.rawValue,backward:(F,ot)=>ot.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),se(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;let o=this.view.element,u=n.relatedTarget;(!u||!o.contains(u))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;let o=this.popC_.view.element,u=at(n);u&&o.contains(u)||u&&u===this.view.buttonElement&&!oe(o.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}class Zi{constructor(n=0,o=0,u=0){this.x=n,this.y=o,this.z=u}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(p(n))return!1;let o=n.x,u=n.y,b=n.z;return!(typeof o!="number"||typeof u!="number"||typeof b!="number")}static equals(n,o){return n.x===o.x&&n.y===o.y&&n.z===o.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}let Uc={toComponents:l=>l.getComponents(),fromComponents:l=>new Zi(...l)};function If(l){return Zi.isObject(l)?new Zi(l.x,l.y,l.z):new Zi}function Df(l,n){l.writeProperty("x",n.x),l.writeProperty("y",n.y),l.writeProperty("z",n.z)}function Nf(l,n){return new jn({assembly:Uc,components:[An("x"in l?l.x:void 0,n.x),An("y"in l?l.y:void 0,n.y),An("z"in l?l.z:void 0,n.z)]})}function ra(l,n){return{baseStep:qi(n),constraint:n,textProps:Y.fromObject({draggingScale:Yi(n,l),formatter:Le(Rr(n,l))})}}let Uf={id:"input-point3d",type:"input",accept:(l,n)=>{if(!Zi.isObject(l))return null;let o=B,u=et(n,{x:o.optional.custom(Zn),y:o.optional.custom(Zn),z:o.optional.custom(Zn)});return u?{initialValue:l,params:u}:null},binding:{reader:l=>If,constraint:l=>Nf(l.params,l.initialValue),equals:Zi.equals,writer:l=>Df},controller:l=>{let n=l.value,o=l.constraint;if(!(o instanceof jn))throw x.shouldNeverHappen();return new sa(l.document,{assembly:Uc,axes:[ra(n.rawValue.x,o.components[0]),ra(n.rawValue.y,o.components[1]),ra(n.rawValue.z,o.components[2])],parser:Sn,value:n,viewProps:l.viewProps})}};class Ji{constructor(n=0,o=0,u=0,b=0){this.x=n,this.y=o,this.z=u,this.w=b}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(p(n))return!1;let o=n.x,u=n.y,b=n.z,P=n.w;return!(typeof o!="number"||typeof u!="number"||typeof b!="number"||typeof P!="number")}static equals(n,o){return n.x===o.x&&n.y===o.y&&n.z===o.z&&n.w===o.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}let Oc={toComponents:l=>l.getComponents(),fromComponents:l=>new Ji(...l)};function Of(l){return Ji.isObject(l)?new Ji(l.x,l.y,l.z,l.w):new Ji}function Ff(l,n){l.writeProperty("x",n.x),l.writeProperty("y",n.y),l.writeProperty("z",n.z),l.writeProperty("w",n.w)}function kf(l,n){return new jn({assembly:Oc,components:[An("x"in l?l.x:void 0,n.x),An("y"in l?l.y:void 0,n.y),An("z"in l?l.z:void 0,n.z),An("w"in l?l.w:void 0,n.w)]})}function Bf(l,n){return{baseStep:qi(n),constraint:n,textProps:Y.fromObject({draggingScale:Yi(n,l),formatter:Le(Rr(n,l))})}}let Vf={id:"input-point4d",type:"input",accept:(l,n)=>{if(!Ji.isObject(l))return null;let o=B,u=et(n,{x:o.optional.custom(Zn),y:o.optional.custom(Zn),z:o.optional.custom(Zn),w:o.optional.custom(Zn)});return u?{initialValue:l,params:u}:null},binding:{reader:l=>Of,constraint:l=>kf(l.params,l.initialValue),equals:Ji.equals,writer:l=>Ff},controller:l=>{let n=l.value,o=l.constraint;if(!(o instanceof jn))throw x.shouldNeverHappen();return new sa(l.document,{assembly:Oc,axes:n.rawValue.getComponents().map((u,b)=>Bf(u,o.components[b])),parser:Sn,value:n,viewProps:l.viewProps})}};function zf(l){let n=[],o=qo(l.options);return o&&n.push(o),new Hs(n)}let Hf={id:"input-string",type:"input",accept:(l,n)=>{if(typeof l!="string")return null;let u=et(n,{options:B.optional.custom(Pr)});return u?{initialValue:l,params:u}:null},binding:{reader:l=>Ql,constraint:l=>zf(l.params),writer:l=>Zs},controller:l=>{let n=l.document,o=l.value,u=l.constraint,b=u&&En(u,Gs);return b?new Ws(n,{props:new Y({options:b.values.value("options")}),value:o,viewProps:l.viewProps}):new Ar(n,{parser:P=>P,props:Y.fromObject({formatter:zo}),value:o,viewProps:l.viewProps})}},js={monitor:{defaultInterval:200,defaultLineCount:3}},Fc=A("mll");class Gf{constructor(n,o){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=o.formatter,this.element=n.createElement("div"),this.element.classList.add(Fc()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("textarea");u.classList.add(Fc("i")),u.style.height=`calc(var(--bld-us) * ${o.lineCount})`,u.readOnly=!0,o.viewProps.bindDisabled(u),this.element.appendChild(u),this.textareaElem_=u,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}update_(){let n=this.textareaElem_,o=n.scrollTop===n.scrollHeight-n.clientHeight,u=[];this.value.rawValue.forEach(b=>{b!==void 0&&u.push(this.formatter_(b))}),n.textContent=u.join(`
`),o&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class oa{constructor(n,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new Gf(n,{formatter:o.formatter,lineCount:o.lineCount,value:this.value,viewProps:this.viewProps})}}let kc=A("sgl");class Wf{constructor(n,o){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=o.formatter,this.element=n.createElement("div"),this.element.classList.add(kc()),o.viewProps.bindClassModifiers(this.element);let u=n.createElement("input");u.classList.add(kc("i")),u.readOnly=!0,u.type="text",o.viewProps.bindDisabled(u),this.element.appendChild(u),this.inputElement=u,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}update_(){let n=this.value.rawValue,o=n[n.length-1];this.inputElement.value=o!==void 0?this.formatter_(o):""}onValueUpdate_(){this.update_()}}class aa{constructor(n,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new Wf(n,{formatter:o.formatter,value:this.value,viewProps:this.viewProps})}}let Xf={id:"monitor-bool",type:"monitor",accept:(l,n)=>{if(typeof l!="boolean")return null;let u=et(n,{lineCount:B.optional.number});return u?{initialValue:l,params:u}:null},binding:{reader:l=>Yl},controller:l=>{var n;return l.value.rawValue.length===1?new aa(l.document,{formatter:Kl,value:l.value,viewProps:l.viewProps}):new oa(l.document,{formatter:Kl,lineCount:(n=l.params.lineCount)!==null&&n!==void 0?n:js.monitor.defaultLineCount,value:l.value,viewProps:l.viewProps})}},ei=A("grl");class qf{constructor(n,o){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(ei()),o.viewProps.bindClassModifiers(this.element),this.formatter_=o.formatter,this.props_=o.props,this.cursor_=o.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);let u=n.createElementNS(wt,"svg");u.classList.add(ei("g")),u.style.height=`calc(var(--bld-us) * ${o.lineCount})`,this.element.appendChild(u),this.svgElem_=u;let b=n.createElementNS(wt,"polyline");this.svgElem_.appendChild(b),this.lineElem_=b;let P=n.createElement("div");P.classList.add(ei("t"),A("tt")()),this.element.appendChild(P),this.tooltipElem_=P,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}get graphElement(){return this.svgElem_}update_(){let n=this.svgElem_.getBoundingClientRect(),o=this.value.rawValue.length-1,u=this.props_.get("minValue"),b=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((jt,ne)=>{if(jt===void 0)return;let wi=de(ne,0,o,0,n.width),Qs=de(jt,u,b,n.height,0);P.push([wi,Qs].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));let F=this.tooltipElem_,ot=this.value.rawValue[this.cursor_.rawValue];if(ot===void 0){F.classList.remove(ei("t","a"));return}let Tt=de(this.cursor_.rawValue,0,o,0,n.width),It=de(ot,u,b,n.height,0);F.style.left=`${Tt}px`,F.style.top=`${It}px`,F.textContent=`${this.formatter_(ot)}`,F.classList.contains(ei("t","a"))||(F.classList.add(ei("t","a"),ei("t","in")),Ot(F),F.classList.remove(ei("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Yf{constructor(n,o){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=o.props,this.value=o.value,this.viewProps=o.viewProps,this.cursor_=W(-1),this.view=new qf(n,{cursor:this.cursor_,formatter:o.formatter,lineCount:o.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!oe(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{let u=new vi(this.view.element);u.emitter.on("down",this.onGraphPointerDown_),u.emitter.on("move",this.onGraphPointerMove_),u.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){let o=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(de(n.offsetX,0,o.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(de(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function la(l){return"format"in l&&!p(l.format)?l.format:Le(2)}function Kf(l){var n;return l.value.rawValue.length===1?new aa(l.document,{formatter:la(l.params),value:l.value,viewProps:l.viewProps}):new oa(l.document,{formatter:la(l.params),lineCount:(n=l.params.lineCount)!==null&&n!==void 0?n:js.monitor.defaultLineCount,value:l.value,viewProps:l.viewProps})}function $f(l){var n,o,u;return new Yf(l.document,{formatter:la(l.params),lineCount:(n=l.params.lineCount)!==null&&n!==void 0?n:js.monitor.defaultLineCount,props:Y.fromObject({maxValue:(o="max"in l.params?l.params.max:null)!==null&&o!==void 0?o:100,minValue:(u="min"in l.params?l.params.min:null)!==null&&u!==void 0?u:0}),value:l.value,viewProps:l.viewProps})}function Bc(l){return"view"in l&&l.view==="graph"}let Zf={id:"monitor-number",type:"monitor",accept:(l,n)=>{if(typeof l!="number")return null;let o=B,u=et(n,{format:o.optional.function,lineCount:o.optional.number,max:o.optional.number,min:o.optional.number,view:o.optional.string});return u?{initialValue:l,params:u}:null},binding:{defaultBufferSize:l=>Bc(l)?64:1,reader:l=>jl},controller:l=>Bc(l.params)?$f(l):Kf(l)},Jf={id:"monitor-string",type:"monitor",accept:(l,n)=>{if(typeof l!="string")return null;let o=B,u=et(n,{lineCount:o.optional.number,multiline:o.optional.boolean});return u?{initialValue:l,params:u}:null},binding:{reader:l=>Ql},controller:l=>{var n;let o=l.value;return o.rawValue.length>1||"multiline"in l.params&&l.params.multiline?new oa(l.document,{formatter:zo,lineCount:(n=l.params.lineCount)!==null&&n!==void 0?n:js.monitor.defaultLineCount,value:o,viewProps:l.viewProps}):new aa(l.document,{formatter:zo,value:o,viewProps:l.viewProps})}};function jf(l,n){var o;let u=l.accept(n.target.read(),n.params);if(p(u))return null;let b=B,P={target:n.target,initialValue:u.initialValue,params:u.params},F=l.binding.reader(P),ot=l.binding.constraint?l.binding.constraint(P):void 0,Tt=W(F(u.initialValue),{constraint:ot,equals:l.binding.equals}),It=new ke({reader:F,target:n.target,value:Tt,writer:l.binding.writer(P)}),jt=b.optional.boolean(n.params.disabled).value,ne=b.optional.boolean(n.params.hidden).value,wi=l.controller({constraint:ot,document:n.document,initialValue:u.initialValue,params:u.params,value:It.value,viewProps:Ct.create({disabled:jt,hidden:ne})});return new Qt(n.document,{binding:It,blade:At(),props:Y.fromObject({label:"label"in n.params?(o=b.optional.string(n.params.label).value)!==null&&o!==void 0?o:null:n.target.key}),valueController:wi})}function Qf(l,n){return n===0?new Mn:new zs(l,n!=null?n:js.monitor.defaultInterval)}function tm(l,n){var o,u,b;let P=B,F=l.accept(n.target.read(),n.params);if(p(F))return null;let ot={target:n.target,initialValue:F.initialValue,params:F.params},Tt=l.binding.reader(ot),It=(u=(o=P.optional.number(n.params.bufferSize).value)!==null&&o!==void 0?o:l.binding.defaultBufferSize&&l.binding.defaultBufferSize(F.params))!==null&&u!==void 0?u:1,jt=P.optional.number(n.params.interval).value,ne=new Ad({reader:Tt,target:n.target,ticker:Qf(n.document,jt),value:Fo(It)}),wi=P.optional.boolean(n.params.disabled).value,Qs=P.optional.boolean(n.params.hidden).value,tr=l.controller({document:n.document,params:F.params,value:ne.value,viewProps:Ct.create({disabled:wi,hidden:Qs})});return new te(n.document,{binding:ne,blade:At(),props:Y.fromObject({label:"label"in n.params?(b=P.optional.string(n.params.label).value)!==null&&b!==void 0?b:null:n.target.key}),valueController:tr})}class em{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,o,u){let b=o.read();if(p(b))throw new x({context:{key:o.key},type:"nomatchingcontroller"});let P=this.pluginsMap_.inputs.reduce((F,ot)=>F!=null?F:jf(ot,{document:n,target:o,params:u}),null);if(P)return P;throw new x({context:{key:o.key},type:"nomatchingcontroller"})}createMonitor(n,o,u){let b=this.pluginsMap_.monitors.reduce((P,F)=>P!=null?P:tm(F,{document:n,params:u,target:o}),null);if(b)return b;throw new x({context:{key:o.key},type:"nomatchingcontroller"})}createBlade(n,o){let u=this.pluginsMap_.blades.reduce((b,P)=>b!=null?b:Re(P,{document:n,params:o}),null);if(!u)throw new x({type:"nomatchingview",context:{params:o}});return u}createBladeApi(n){if(n instanceof Qt)return new he(n);if(n instanceof te)return new un(n);if(n instanceof V)return new gi(n,this);let o=this.pluginsMap_.blades.reduce((u,b)=>u!=null?u:b.api({controller:n,pool:this}),null);if(!o)throw x.shouldNeverHappen();return o}}function nm(){let l=new em;return[lm,Uf,Vf,Hf,Af,wf,yf,vf,mp,Xf,Jf,Zf,Pt,xt,kt,Gi].forEach(n=>{l.register(n)}),l}function im(l){return Qn.isObject(l)?new Qn(l.x,l.y):new Qn}function sm(l,n){l.writeProperty("x",n.x),l.writeProperty("y",n.y)}function An(l,n){if(!l)return;let o=[],u=Lc(l,n);u&&o.push(u);let b=Ic(l);return b&&o.push(b),new Hs(o)}function rm(l,n){return new jn({assembly:Dc,components:[An("x"in l?l.x:void 0,n.x),An("y"in l?l.y:void 0,n.y)]})}function Vc(l,n){let[o,u]=l?Sf(l):[];if(!p(o)||!p(u))return Math.max(Math.abs(o!=null?o:0),Math.abs(u!=null?u:0));let b=qi(l);return Math.max(Math.abs(b)*10,Math.abs(n)*10)}function om(l,n){let o=n instanceof jn?n.components[0]:void 0,u=n instanceof jn?n.components[1]:void 0,b=Vc(o,l.x),P=Vc(u,l.y);return Math.max(b,P)}function zc(l,n){return{baseStep:qi(n),constraint:n,textProps:Y.fromObject({draggingScale:Yi(n,l),formatter:Le(Rr(n,l))})}}function am(l){if(!("y"in l))return!1;let n=l.y;return n&&"inverted"in n?!!n.inverted:!1}let lm={id:"input-point2d",type:"input",accept:(l,n)=>{if(!Qn.isObject(l))return null;let o=B,u=et(n,{expanded:o.optional.boolean,picker:o.optional.custom(ic),x:o.optional.custom(Zn),y:o.optional.object({inverted:o.optional.boolean,max:o.optional.number,min:o.optional.number,step:o.optional.number})});return u?{initialValue:l,params:u}:null},binding:{reader:l=>im,constraint:l=>rm(l.params,l.initialValue),equals:Qn.equals,writer:l=>sm},controller:l=>{let n=l.document,o=l.value,u=l.constraint;if(!(u instanceof jn))throw x.shouldNeverHappen();let b="expanded"in l.params?l.params.expanded:void 0,P="picker"in l.params?l.params.picker:void 0;return new Lf(n,{axes:[zc(o.rawValue.x,u.components[0]),zc(o.rawValue.y,u.components[1])],expanded:b!=null?b:!1,invertsY:am(l.params),maxValue:om(o.rawValue,u),parser:Sn,pickerLayout:P!=null?P:"popup",value:o,viewProps:l.viewProps})}};class Hc extends e{constructor(n){super(n),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new r(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}}class Gc extends e{constructor(n){super(n),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new r(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}}class Wc extends e{constructor(n){super(n),this.emitter_=new _,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new r(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,o){let u=o.bind(this);return this.emitter_.on(n,b=>{u(b.event)}),this}}let cm=function(){return{id:"list",type:"blade",accept(l){let n=B,o=et(l,{options:n.required.custom(Pr),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return o?{params:o}:null},controller(l){let n=new Gs(sc(l.params.options)),o=W(l.params.value,{constraint:n}),u=new Ws(l.document,{props:new Y({options:n.values.value("options")}),value:o,viewProps:l.viewProps});return new Et(l.document,{blade:l.blade,props:Y.fromObject({label:l.params.label}),valueController:u})},api(l){return!(l.controller instanceof Et)||!(l.controller.valueController instanceof Ws)?null:new Hc(l.controller)}}}();function hm(l){return l.reduce((n,o)=>Object.assign(n,{[o.presetKey]:o.read()}),{})}function um(l,n){l.forEach(o=>{let u=n[o.target.presetKey];u!==void 0&&o.writer(o.target,o.reader(u))})}class dm extends Bs{constructor(n,o){super(n,o)}get element(){return this.controller_.view.element}importPreset(n){let o=this.controller_.rackController.rack.find(Qt).map(u=>u.binding);um(o,n),this.refresh()}exportPreset(){let n=this.controller_.rackController.rack.find(Qt).map(o=>o.binding.target);return hm(n)}refresh(){this.controller_.rackController.rack.find(Qt).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(te).forEach(n=>{n.binding.read()})}}class pm extends J{constructor(n,o){super(n,{expanded:o.expanded,blade:o.blade,props:o.props,root:!0,viewProps:o.viewProps})}}let fm={id:"slider",type:"blade",accept(l){let n=B,o=et(l,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return o?{params:o}:null},controller(l){var n,o;let u=(n=l.params.value)!==null&&n!==void 0?n:0,b=new Xi({max:l.params.max,min:l.params.min}),P=new Xo(l.document,{baseStep:1,parser:Sn,sliderProps:new Y({maxValue:b.values.value("max"),minValue:b.values.value("min")}),textProps:Y.fromObject({draggingScale:Yi(void 0,u),formatter:(o=l.params.format)!==null&&o!==void 0?o:sp}),value:W(u,{constraint:b}),viewProps:l.viewProps});return new Et(l.document,{blade:l.blade,props:Y.fromObject({label:l.params.label}),valueController:P})},api(l){return!(l.controller instanceof Et)||!(l.controller.valueController instanceof Xo)?null:new Gc(l.controller)}},mm=function(){return{id:"text",type:"blade",accept(l){let n=B,o=et(l,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return o?{params:o}:null},controller(l){var n;let o=new Ar(l.document,{parser:l.params.parse,props:Y.fromObject({formatter:(n=l.params.format)!==null&&n!==void 0?n:u=>String(u)}),value:W(l.params.value),viewProps:l.viewProps});return new Et(l.document,{blade:l.blade,props:Y.fromObject({label:l.params.label}),valueController:o})},api(l){return!(l.controller instanceof Et)||!(l.controller.valueController instanceof Ar)?null:new Wc(l.controller)}}}();function gm(l){let n=l.createElement("div");return n.classList.add(A("dfw")()),l.body&&l.body.appendChild(n),n}function Xc(l,n,o){if(l.querySelector(`style[data-tp-style=${n}]`))return;let u=l.createElement("style");u.dataset.tpStyle=n,u.textContent=o,l.head.appendChild(u)}class vm extends dm{constructor(n){var o,u;let b=n!=null?n:{},P=(o=b.document)!==null&&o!==void 0?o:Ft(),F=nm(),ot=new pm(P,{expanded:b.expanded,blade:At(),props:Y.fromObject({title:b.title}),viewProps:Ct.create()});super(ot,F),this.pool_=F,this.containerElem_=(u=b.container)!==null&&u!==void 0?u:gm(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!b.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw x.alreadyDisposed();return this.doc_}dispose(){let n=this.containerElem_;if(!n)throw x.alreadyDisposed();if(this.usesDefaultWrapper_){let o=n.parentElement;o&&o.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(u=>{this.pool_.register(u),this.embedPluginStyle_(u)})}embedPluginStyle_(n){n.css&&Xc(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){Xc(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[fm,cm,Gi,mm]})}}let _m=new t("3.1.9");s.BladeApi=e,s.ButtonApi=M,s.FolderApi=Bs,s.InputBindingApi=he,s.ListApi=Hc,s.MonitorBindingApi=un,s.Pane=vm,s.SeparatorApi=Lt,s.SliderApi=Gc,s.TabApi=Yt,s.TabPageApi=me,s.TextApi=Wc,s.TpChangeEvent=r,s.VERSION=_m,Object.defineProperty(s,"__esModule",{value:!0})})});var yl="153";var Cm=0,Yc=1,Pm=2;var xu=1,Rm=2,Nn=3,di=0,Ye=1,On=2;var hi=0,vs=1,Kc=2,$c=3,Zc=4,Lm=5,ms=100,Im=101,Dm=102,Jc=103,jc=104,Nm=200,Um=201,Om=202,Fm=203,bu=204,yu=205,km=206,Bm=207,Vm=208,zm=209,Hm=210,Gm=0,Wm=1,Xm=2,za=3,qm=4,Ym=5,Km=6,$m=7,wu=0,Zm=1,Jm=2,Bn=0,jm=1,Qm=2,tg=3,eg=4,ng=5,Mu=300,bs=301,ys=302,Ha=303,Ga=304,Eo=306,Wa=1e3,gn=1001,Xa=1002,Ve=1003,Qc=1004;var ha=1005;var ln=1006,ig=1007;var hr=1008;var ui=1009,sg=1010,rg=1011,wl=1012,Eu=1013,li=1014,ci=1015,ur=1016,Su=1017,Tu=1018,Pi=1020,og=1021,vn=1023,ag=1024,lg=1025,Ri=1026,ws=1027,cg=1028,Au=1029,hg=1030,Cu=1031,Pu=1033,ua=33776,da=33777,pa=33778,fa=33779,th=35840,eh=35841,nh=35842,ih=35843,ug=36196,sh=37492,rh=37496,oh=37808,ah=37809,lh=37810,ch=37811,hh=37812,uh=37813,dh=37814,ph=37815,fh=37816,mh=37817,gh=37818,vh=37819,_h=37820,xh=37821,ma=36492,dg=36283,bh=36284,yh=36285,wh=36286;var ao=2300,lo=2301,ga=2302,Mh=2400,Eh=2401,Sh=2402;var Ru=3e3,Li=3001,pg=3200,fg=3201,mg=0,gg=1,Ii="",zt="srgb",wn="srgb-linear",Lu="display-p3";var va=7680;var vg=519,_g=512,xg=513,bg=514,yg=515,wg=516,Mg=517,Eg=518,Sg=519,Th=35044;var Ah="300 es",qa=1035,Fn=2e3,co=2001,ue=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let a=0,h=r.length;a<h;a++)r[a].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _a=Math.PI/180,Ya=180/Math.PI;function vr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function ze(s,t,e){return Math.max(t,Math.min(e,s))}function Tg(s,t){return(s%t+t)%t}function xa(s,t,e){return(1-e)*s+e*t}function Ch(s){return(s&s-1)===0&&s!==0}function Ka(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Or(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ie=class{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),a=this.x-t.x,h=this.y-t.y;return this.x=a*i-h*r+t.x,this.y=a*r+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class{constructor(t,e,i,r,a,h,c,d,p){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,h,c,d,p)}set(t,e,i,r,a,h,c,d,p){let f=this.elements;return f[0]=t,f[1]=r,f[2]=c,f[3]=e,f[4]=a,f[5]=d,f[6]=i,f[7]=h,f[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,h=i[0],c=i[3],d=i[6],p=i[1],f=i[4],g=i[7],v=i[2],x=i[5],y=i[8],M=r[0],_=r[3],m=r[6],A=r[1],w=r[4],I=r[7],R=r[2],N=r[5],O=r[8];return a[0]=h*M+c*A+d*R,a[3]=h*_+c*w+d*N,a[6]=h*m+c*I+d*O,a[1]=p*M+f*A+g*R,a[4]=p*_+f*w+g*N,a[7]=p*m+f*I+g*O,a[2]=v*M+x*A+y*R,a[5]=v*_+x*w+y*N,a[8]=v*m+x*I+y*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],h=t[4],c=t[5],d=t[6],p=t[7],f=t[8];return e*h*f-e*c*p-i*a*f+i*c*d+r*a*p-r*h*d}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],h=t[4],c=t[5],d=t[6],p=t[7],f=t[8],g=f*h-c*p,v=c*d-f*a,x=p*a-h*d,y=e*g+i*v+r*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return t[0]=g*M,t[1]=(r*p-f*i)*M,t[2]=(c*i-r*h)*M,t[3]=v*M,t[4]=(f*e-r*d)*M,t[5]=(r*a-c*e)*M,t[6]=x*M,t[7]=(i*d-p*e)*M,t[8]=(h*e-i*a)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,a,h,c){let d=Math.cos(a),p=Math.sin(a);return this.set(i*d,i*p,-i*(d*h+p*c)+h+t,-r*p,r*d,-r*(-p*h+d*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ba=new Ht;function Iu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var Ph={};function lr(s){s in Ph||(Ph[s]=!0,console.warn(s))}function _s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ya(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ag=new Ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Cg=new Ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Pg(s){return s.convertSRGBToLinear().applyMatrix3(Cg)}function Rg(s){return s.applyMatrix3(Ag).convertLinearToSRGB()}var Lg={[wn]:s=>s,[zt]:s=>s.convertSRGBToLinear(),[Lu]:Pg},Ig={[wn]:s=>s,[zt]:s=>s.convertLinearToSRGB(),[Lu]:Rg},dn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return wn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=Lg[t],r=Ig[e];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},ji,uo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=ho("canvas")),ji.width=t.width,ji.height=t.height;let i=ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let h=0;h<a.length;h++)a[h]=_s(a[h]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_s(e[i]/255)*255):e[i]=_s(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dg=0,po=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=vr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let h=0,c=r.length;h<c;h++)r[h].isDataTexture?a.push(wa(r[h].image)):a.push(wa(r[h]))}else a=wa(r);i.url=a}return e||(t.images[this.uuid]=i),i}};function wa(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?uo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ng=0,He=class extends ue{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,i=gn,r=gn,a=ln,h=hr,c=vn,d=ui,p=He.DEFAULT_ANISOTROPY,f=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=vr(),this.name="",this.source=new po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=h,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=d,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Li?zt:Ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?Li:Ru}set encoding(t){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?zt:Ii}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Mu;He.DEFAULT_ANISOTROPY=1;var ye=class{constructor(t=0,e=0,i=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*r+h[12]*a,this.y=h[1]*e+h[5]*i+h[9]*r+h[13]*a,this.z=h[2]*e+h[6]*i+h[10]*r+h[14]*a,this.w=h[3]*e+h[7]*i+h[11]*r+h[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,a,d=t.elements,p=d[0],f=d[4],g=d[8],v=d[1],x=d[5],y=d[9],M=d[2],_=d[6],m=d[10];if(Math.abs(f-v)<.01&&Math.abs(g-M)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+v)<.1&&Math.abs(g+M)<.1&&Math.abs(y+_)<.1&&Math.abs(p+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(p+1)/2,I=(x+1)/2,R=(m+1)/2,N=(f+v)/4,O=(g+M)/4,H=(y+_)/4;return w>I&&w>R?w<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(w),r=N/i,a=O/i):I>R?I<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(I),i=N/r,a=H/r):R<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),i=O/a,r=H/a),this.set(i,r,a,e),this}let A=Math.sqrt((_-y)*(_-y)+(g-M)*(g-M)+(v-f)*(v-f));return Math.abs(A)<.001&&(A=1),this.x=(_-y)/A,this.y=(g-M)/A,this.z=(v-f)/A,this.w=Math.acos((p+x+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vn=class extends ue{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let r={width:t,height:e,depth:1};i.encoding!==void 0&&(lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?zt:Ii),this.texture=new He(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ln,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new po(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fo=class extends He{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $a=class extends He{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,h,c){let d=i[r+0],p=i[r+1],f=i[r+2],g=i[r+3],v=a[h+0],x=a[h+1],y=a[h+2],M=a[h+3];if(c===0){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=g;return}if(c===1){t[e+0]=v,t[e+1]=x,t[e+2]=y,t[e+3]=M;return}if(g!==M||d!==v||p!==x||f!==y){let _=1-c,m=d*v+p*x+f*y+g*M,A=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let R=Math.sqrt(w),N=Math.atan2(R,m*A);_=Math.sin(_*N)/R,c=Math.sin(c*N)/R}let I=c*A;if(d=d*_+v*I,p=p*_+x*I,f=f*_+y*I,g=g*_+M*I,_===1-c){let R=1/Math.sqrt(d*d+p*p+f*f+g*g);d*=R,p*=R,f*=R,g*=R}}t[e]=d,t[e+1]=p,t[e+2]=f,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,r,a,h){let c=i[r],d=i[r+1],p=i[r+2],f=i[r+3],g=a[h],v=a[h+1],x=a[h+2],y=a[h+3];return t[e]=c*y+f*g+d*x-p*v,t[e+1]=d*y+f*v+p*g-c*x,t[e+2]=p*y+f*x+c*v-d*g,t[e+3]=f*y-c*g-d*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let i=t._x,r=t._y,a=t._z,h=t._order,c=Math.cos,d=Math.sin,p=c(i/2),f=c(r/2),g=c(a/2),v=d(i/2),x=d(r/2),y=d(a/2);switch(h){case"XYZ":this._x=v*f*g+p*x*y,this._y=p*x*g-v*f*y,this._z=p*f*y+v*x*g,this._w=p*f*g-v*x*y;break;case"YXZ":this._x=v*f*g+p*x*y,this._y=p*x*g-v*f*y,this._z=p*f*y-v*x*g,this._w=p*f*g+v*x*y;break;case"ZXY":this._x=v*f*g-p*x*y,this._y=p*x*g+v*f*y,this._z=p*f*y+v*x*g,this._w=p*f*g-v*x*y;break;case"ZYX":this._x=v*f*g-p*x*y,this._y=p*x*g+v*f*y,this._z=p*f*y-v*x*g,this._w=p*f*g+v*x*y;break;case"YZX":this._x=v*f*g+p*x*y,this._y=p*x*g+v*f*y,this._z=p*f*y-v*x*g,this._w=p*f*g-v*x*y;break;case"XZY":this._x=v*f*g-p*x*y,this._y=p*x*g-v*f*y,this._z=p*f*y+v*x*g,this._w=p*f*g+v*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],a=e[8],h=e[1],c=e[5],d=e[9],p=e[2],f=e[6],g=e[10],v=i+c+g;if(v>0){let x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(f-d)*x,this._y=(a-p)*x,this._z=(h-r)*x}else if(i>c&&i>g){let x=2*Math.sqrt(1+i-c-g);this._w=(f-d)/x,this._x=.25*x,this._y=(r+h)/x,this._z=(a+p)/x}else if(c>g){let x=2*Math.sqrt(1+c-i-g);this._w=(a-p)/x,this._x=(r+h)/x,this._y=.25*x,this._z=(d+f)/x}else{let x=2*Math.sqrt(1+g-i-c);this._w=(h-r)/x,this._x=(a+p)/x,this._y=(d+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,a=t._z,h=t._w,c=e._x,d=e._y,p=e._z,f=e._w;return this._x=i*f+h*c+r*p-a*d,this._y=r*f+h*d+a*c-i*p,this._z=a*f+h*p+i*d-r*c,this._w=h*f-i*c-r*d-a*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,a=this._z,h=this._w,c=h*t._w+i*t._x+r*t._y+a*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=h,this._x=i,this._y=r,this._z=a,this;let d=1-c*c;if(d<=Number.EPSILON){let x=1-e;return this._w=x*h+e*this._w,this._x=x*i+e*this._x,this._y=x*r+e*this._y,this._z=x*a+e*this._z,this.normalize(),this._onChangeCallback(),this}let p=Math.sqrt(d),f=Math.atan2(p,c),g=Math.sin((1-e)*f)/p,v=Math.sin(e*f)/p;return this._w=h*g+this._w*v,this._x=i*g+this._x*v,this._y=r*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(a),i*Math.cos(a),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*r,this.y=a[1]*e+a[4]*i+a[7]*r,this.z=a[2]*e+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,a=t.elements,h=1/(a[3]*e+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*r+a[12])*h,this.y=(a[1]*e+a[5]*i+a[9]*r+a[13])*h,this.z=(a[2]*e+a[6]*i+a[10]*r+a[14])*h,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,a=t.x,h=t.y,c=t.z,d=t.w,p=d*e+h*r-c*i,f=d*i+c*e-a*r,g=d*r+a*i-h*e,v=-a*e-h*i-c*r;return this.x=p*d+v*-a+f*-c-g*-h,this.y=f*d+v*-h+g*-a-p*-c,this.z=g*d+v*-c+p*-h-f*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r,this.y=a[1]*e+a[5]*i+a[9]*r,this.z=a[2]*e+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,a=t.z,h=e.x,c=e.y,d=e.z;return this.x=r*d-a*c,this.y=a*h-i*d,this.z=i*c-r*h,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-ni(t,2));return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ma=new D,Rh=new Ge,ge=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox),Qi.applyMatrix4(t.matrixWorld),this.union(Qi);else{let r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){let a=r.attributes.position;for(let h=0,c=a.count;h<c;h++)Pn.fromBufferAttribute(a,h).applyMatrix4(t.matrixWorld),this.expandByPoint(Pn)}else r.boundingBox===null&&r.computeBoundingBox(),Qi.copy(r.boundingBox),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Fr.subVectors(this.max,er),ts.subVectors(t.a,er),es.subVectors(t.b,er),ns.subVectors(t.c,er),ii.subVectors(es,ts),si.subVectors(ns,es),Mi.subVectors(ts,ns);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ii.z,0,-ii.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ii.y,ii.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!Ea(e,ts,es,ns,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,ts,es,ns,Fr))?!1:(kr.crossVectors(ii,si),e=[kr.x,kr.y,kr.z],Ea(e,ts,es,ns,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,Qi=new ge,ts=new D,es=new D,ns=new D,ii=new D,si=new D,Mi=new D,er=new D,Fr=new D,kr=new D,Ei=new D;function Ea(s,t,e,i,r){for(let a=0,h=s.length-3;a<=h;a+=3){Ei.fromArray(s,a);let c=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),d=t.dot(Ei),p=e.dot(Ei),f=i.dot(Ei);if(Math.max(-Math.max(d,p,f),Math.min(d,p,f))>c)return!1}return!0}var Ug=new ge,nr=new D,Sa=new D,pi=class{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ug.setFromPoints(t).getCenter(i);let r=0;for(let a=0,h=t.length;a<h;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(nr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Sa)),this.expandByPoint(nr.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new D,Ta=new D,Br=new D,ri=new D,Aa=new D,Vr=new D,Ca=new D,Di=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ta.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Ta);let a=t.distanceTo(e)*.5,h=-this.direction.dot(Br),c=ri.dot(this.direction),d=-ri.dot(Br),p=ri.lengthSq(),f=Math.abs(1-h*h),g,v,x,y;if(f>0)if(g=h*d-c,v=h*c-d,y=a*f,g>=0)if(v>=-y)if(v<=y){let M=1/f;g*=M,v*=M,x=g*(g+h*v+2*c)+v*(h*g+v+2*d)+p}else v=a,g=Math.max(0,-(h*v+c)),x=-g*g+v*(v+2*d)+p;else v=-a,g=Math.max(0,-(h*v+c)),x=-g*g+v*(v+2*d)+p;else v<=-y?(g=Math.max(0,-(-h*a+c)),v=g>0?-a:Math.min(Math.max(-a,-d),a),x=-g*g+v*(v+2*d)+p):v<=y?(g=0,v=Math.min(Math.max(-a,-d),a),x=v*(v+2*d)+p):(g=Math.max(0,-(h*a+c)),v=g>0?a:Math.min(Math.max(-a,-d),a),x=-g*g+v*(v+2*d)+p);else v=h>0?-a:a,g=Math.max(0,-(h*v+c)),x=-g*g+v*(v+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Ta).addScaledVector(Br,v),x}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let i=Rn.dot(this.direction),r=Rn.dot(Rn)-i*i,a=t.radius*t.radius;if(r>a)return null;let h=Math.sqrt(a-r),c=i-h,d=i+h;return d<0?null:c<0?this.at(d,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,h,c,d,p=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(i=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(i=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),f>=0?(a=(t.min.y-v.y)*f,h=(t.max.y-v.y)*f):(a=(t.max.y-v.y)*f,h=(t.min.y-v.y)*f),i>h||a>r||((a>i||isNaN(i))&&(i=a),(h<r||isNaN(r))&&(r=h),g>=0?(c=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(c=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),i>d||c>r)||((c>i||i!==i)&&(i=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,r,a){Aa.subVectors(e,t),Vr.subVectors(i,t),Ca.crossVectors(Aa,Vr);let h=this.direction.dot(Ca),c;if(h>0){if(r)return null;c=1}else if(h<0)c=-1,h=-h;else return null;ri.subVectors(this.origin,t);let d=c*this.direction.dot(Vr.crossVectors(ri,Vr));if(d<0)return null;let p=c*this.direction.dot(Aa.cross(ri));if(p<0||d+p>h)return null;let f=-c*ri.dot(Ca);return f<0?null:this.at(f/h,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class{constructor(t,e,i,r,a,h,c,d,p,f,g,v,x,y,M,_){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,h,c,d,p,f,g,v,x,y,M,_)}set(t,e,i,r,a,h,c,d,p,f,g,v,x,y,M,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=a,m[5]=h,m[9]=c,m[13]=d,m[2]=p,m[6]=f,m[10]=g,m[14]=v,m[3]=x,m[7]=y,m[11]=M,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/is.setFromMatrixColumn(t,0).length(),a=1/is.setFromMatrixColumn(t,1).length(),h=1/is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,a=t.z,h=Math.cos(i),c=Math.sin(i),d=Math.cos(r),p=Math.sin(r),f=Math.cos(a),g=Math.sin(a);if(t.order==="XYZ"){let v=h*f,x=h*g,y=c*f,M=c*g;e[0]=d*f,e[4]=-d*g,e[8]=p,e[1]=x+y*p,e[5]=v-M*p,e[9]=-c*d,e[2]=M-v*p,e[6]=y+x*p,e[10]=h*d}else if(t.order==="YXZ"){let v=d*f,x=d*g,y=p*f,M=p*g;e[0]=v+M*c,e[4]=y*c-x,e[8]=h*p,e[1]=h*g,e[5]=h*f,e[9]=-c,e[2]=x*c-y,e[6]=M+v*c,e[10]=h*d}else if(t.order==="ZXY"){let v=d*f,x=d*g,y=p*f,M=p*g;e[0]=v-M*c,e[4]=-h*g,e[8]=y+x*c,e[1]=x+y*c,e[5]=h*f,e[9]=M-v*c,e[2]=-h*p,e[6]=c,e[10]=h*d}else if(t.order==="ZYX"){let v=h*f,x=h*g,y=c*f,M=c*g;e[0]=d*f,e[4]=y*p-x,e[8]=v*p+M,e[1]=d*g,e[5]=M*p+v,e[9]=x*p-y,e[2]=-p,e[6]=c*d,e[10]=h*d}else if(t.order==="YZX"){let v=h*d,x=h*p,y=c*d,M=c*p;e[0]=d*f,e[4]=M-v*g,e[8]=y*g+x,e[1]=g,e[5]=h*f,e[9]=-c*f,e[2]=-p*f,e[6]=x*g+y,e[10]=v-M*g}else if(t.order==="XZY"){let v=h*d,x=h*p,y=c*d,M=c*p;e[0]=d*f,e[4]=-g,e[8]=p*f,e[1]=v*g+M,e[5]=h*f,e[9]=x*g-y,e[2]=y*g-x,e[6]=c*f,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Og,t,Fg)}lookAt(t,e,i){let r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),oi.crossVectors(i,Qe),oi.lengthSq()===0&&(Math.abs(i.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),oi.crossVectors(i,Qe)),oi.normalize(),zr.crossVectors(Qe,oi),r[0]=oi.x,r[4]=zr.x,r[8]=Qe.x,r[1]=oi.y,r[5]=zr.y,r[9]=Qe.y,r[2]=oi.z,r[6]=zr.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,a=this.elements,h=i[0],c=i[4],d=i[8],p=i[12],f=i[1],g=i[5],v=i[9],x=i[13],y=i[2],M=i[6],_=i[10],m=i[14],A=i[3],w=i[7],I=i[11],R=i[15],N=r[0],O=r[4],H=r[8],S=r[12],L=r[1],tt=r[5],ct=r[9],q=r[13],$=r[2],W=r[6],Y=r[10],Q=r[14],nt=r[3],st=r[7],it=r[11],bt=r[15];return a[0]=h*N+c*L+d*$+p*nt,a[4]=h*O+c*tt+d*W+p*st,a[8]=h*H+c*ct+d*Y+p*it,a[12]=h*S+c*q+d*Q+p*bt,a[1]=f*N+g*L+v*$+x*nt,a[5]=f*O+g*tt+v*W+x*st,a[9]=f*H+g*ct+v*Y+x*it,a[13]=f*S+g*q+v*Q+x*bt,a[2]=y*N+M*L+_*$+m*nt,a[6]=y*O+M*tt+_*W+m*st,a[10]=y*H+M*ct+_*Y+m*it,a[14]=y*S+M*q+_*Q+m*bt,a[3]=A*N+w*L+I*$+R*nt,a[7]=A*O+w*tt+I*W+R*st,a[11]=A*H+w*ct+I*Y+R*it,a[15]=A*S+w*q+I*Q+R*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],a=t[12],h=t[1],c=t[5],d=t[9],p=t[13],f=t[2],g=t[6],v=t[10],x=t[14],y=t[3],M=t[7],_=t[11],m=t[15];return y*(+a*d*g-r*p*g-a*c*v+i*p*v+r*c*x-i*d*x)+M*(+e*d*x-e*p*v+a*h*v-r*h*x+r*p*f-a*d*f)+_*(+e*p*g-e*c*x-a*h*g+i*h*x+a*c*f-i*p*f)+m*(-r*c*f-e*d*g+e*c*v+r*h*g-i*h*v+i*d*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],h=t[4],c=t[5],d=t[6],p=t[7],f=t[8],g=t[9],v=t[10],x=t[11],y=t[12],M=t[13],_=t[14],m=t[15],A=g*_*p-M*v*p+M*d*x-c*_*x-g*d*m+c*v*m,w=y*v*p-f*_*p-y*d*x+h*_*x+f*d*m-h*v*m,I=f*M*p-y*g*p+y*c*x-h*M*x-f*c*m+h*g*m,R=y*g*d-f*M*d-y*c*v+h*M*v+f*c*_-h*g*_,N=e*A+i*w+r*I+a*R;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=A*O,t[1]=(M*v*a-g*_*a-M*r*x+i*_*x+g*r*m-i*v*m)*O,t[2]=(c*_*a-M*d*a+M*r*p-i*_*p-c*r*m+i*d*m)*O,t[3]=(g*d*a-c*v*a-g*r*p+i*v*p+c*r*x-i*d*x)*O,t[4]=w*O,t[5]=(f*_*a-y*v*a+y*r*x-e*_*x-f*r*m+e*v*m)*O,t[6]=(y*d*a-h*_*a-y*r*p+e*_*p+h*r*m-e*d*m)*O,t[7]=(h*v*a-f*d*a+f*r*p-e*v*p-h*r*x+e*d*x)*O,t[8]=I*O,t[9]=(y*g*a-f*M*a-y*i*x+e*M*x+f*i*m-e*g*m)*O,t[10]=(h*M*a-y*c*a+y*i*p-e*M*p-h*i*m+e*c*m)*O,t[11]=(f*c*a-h*g*a-f*i*p+e*g*p+h*i*x-e*c*x)*O,t[12]=R*O,t[13]=(f*M*r-y*g*r+y*i*v-e*M*v-f*i*_+e*g*_)*O,t[14]=(y*c*r-h*M*r-y*i*d+e*M*d+h*i*_-e*c*_)*O,t[15]=(h*g*r-f*c*r+f*i*d-e*g*d-h*i*v+e*c*v)*O,this}scale(t){let e=this.elements,i=t.x,r=t.y,a=t.z;return e[0]*=i,e[4]*=r,e[8]*=a,e[1]*=i,e[5]*=r,e[9]*=a,e[2]*=i,e[6]*=r,e[10]*=a,e[3]*=i,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),a=1-i,h=t.x,c=t.y,d=t.z,p=a*h,f=a*c;return this.set(p*h+i,p*c-r*d,p*d+r*c,0,p*c+r*d,f*c+i,f*d-r*h,0,p*d-r*c,f*d+r*h,a*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,a,h){return this.set(1,i,a,0,t,1,h,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,a=e._x,h=e._y,c=e._z,d=e._w,p=a+a,f=h+h,g=c+c,v=a*p,x=a*f,y=a*g,M=h*f,_=h*g,m=c*g,A=d*p,w=d*f,I=d*g,R=i.x,N=i.y,O=i.z;return r[0]=(1-(M+m))*R,r[1]=(x+I)*R,r[2]=(y-w)*R,r[3]=0,r[4]=(x-I)*N,r[5]=(1-(v+m))*N,r[6]=(_+A)*N,r[7]=0,r[8]=(y+w)*O,r[9]=(_-A)*O,r[10]=(1-(v+M))*O,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,a=is.set(r[0],r[1],r[2]).length(),h=is.set(r[4],r[5],r[6]).length(),c=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);let p=1/a,f=1/h,g=1/c;return pn.elements[0]*=p,pn.elements[1]*=p,pn.elements[2]*=p,pn.elements[4]*=f,pn.elements[5]*=f,pn.elements[6]*=f,pn.elements[8]*=g,pn.elements[9]*=g,pn.elements[10]*=g,e.setFromRotationMatrix(pn),i.x=a,i.y=h,i.z=c,this}makePerspective(t,e,i,r,a,h,c=Fn){let d=this.elements,p=2*a/(e-t),f=2*a/(i-r),g=(e+t)/(e-t),v=(i+r)/(i-r),x,y;if(c===Fn)x=-(h+a)/(h-a),y=-2*h*a/(h-a);else if(c===co)x=-h/(h-a),y=-h*a/(h-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=f,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,a,h,c=Fn){let d=this.elements,p=1/(e-t),f=1/(i-r),g=1/(h-a),v=(e+t)*p,x=(i+r)*f,y,M;if(c===Fn)y=(h+a)*g,M=-2*g;else if(c===co)y=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*f,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=M,d[14]=-y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},is=new D,pn=new le,Og=new D(0,0,0),Fg=new D(1,1,1),oi=new D,zr=new D,Qe=new D,Lh=new le,Ih=new Ge,Ms=class{constructor(t=0,e=0,i=0,r=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,a=r[0],h=r[4],c=r[8],d=r[1],p=r[5],f=r[9],g=r[2],v=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(ze(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-ze(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,p),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-f,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ms.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kg=0,Dh=new D,ss=new Ge,Ln=new le,Hr=new D,ir=new D,Bg=new D,Vg=new Ge,Nh=new D(1,0,0),Uh=new D(0,1,0),Oh=new D(0,0,1),zg={type:"added"},Fh={type:"removed"},Fe=class extends ue{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();let t=new D,e=new Ms,i=new Ge,r=new D(1,1,1);function a(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Ht}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hr.copy(t):Hr.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ir,Hr,this.up):Ln.lookAt(Hr,ir,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(Ln),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(Fh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){let h=this.children[r].getObjectsByProperty(t,e);h.length>0&&(i=i.concat(h))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Vg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++){let a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let r=this.children;for(let a=0,h=r.length;a<h;a++){let c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let d=c.shapes;if(Array.isArray(d))for(let p=0,f=d.length;p<f;p++){let g=d[p];a(t.shapes,g)}else a(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let d=0,p=this.material.length;d<p;d++)c.push(a(t.materials,this.material[d]));r.material=c}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){let d=this.animations[c];r.animations.push(a(t.animations,d))}}if(e){let c=h(t.geometries),d=h(t.materials),p=h(t.textures),f=h(t.images),g=h(t.shapes),v=h(t.skeletons),x=h(t.animations),y=h(t.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),f.length>0&&(i.images=f),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=r,i;function h(c){let d=[];for(let p in c){let f=c[p];delete f.metadata,d.push(f)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};Fe.DEFAULT_UP=new D(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new D,In=new D,Pa=new D,Dn=new D,rs=new D,os=new D,kh=new D,Ra=new D,La=new D,Ia=new D,Gr=!1,en=class{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),fn.subVectors(t,e),r.cross(fn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,i,r,a){fn.subVectors(r,e),In.subVectors(i,e),Pa.subVectors(t,e);let h=fn.dot(fn),c=fn.dot(In),d=fn.dot(Pa),p=In.dot(In),f=In.dot(Pa),g=h*p-c*c;if(g===0)return a.set(-2,-1,-1);let v=1/g,x=(p*d-c*f)*v,y=(h*f-c*d)*v;return a.set(1-x-y,y,x)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,i,r,a,h,c,d){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),this.getInterpolation(t,e,i,r,a,h,c,d)}static getInterpolation(t,e,i,r,a,h,c,d){return this.getBarycoord(t,e,i,r,Dn),d.setScalar(0),d.addScaledVector(a,Dn.x),d.addScaledVector(h,Dn.y),d.addScaledVector(c,Dn.z),d}static isFrontFacing(t,e,i,r){return fn.subVectors(i,e),In.subVectors(t,e),fn.cross(In).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),fn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,a){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),en.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}getInterpolation(t,e,i,r,a){return en.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,a=this.c,h,c;rs.subVectors(r,i),os.subVectors(a,i),Ra.subVectors(t,i);let d=rs.dot(Ra),p=os.dot(Ra);if(d<=0&&p<=0)return e.copy(i);La.subVectors(t,r);let f=rs.dot(La),g=os.dot(La);if(f>=0&&g<=f)return e.copy(r);let v=d*g-f*p;if(v<=0&&d>=0&&f<=0)return h=d/(d-f),e.copy(i).addScaledVector(rs,h);Ia.subVectors(t,a);let x=rs.dot(Ia),y=os.dot(Ia);if(y>=0&&x<=y)return e.copy(a);let M=x*p-d*y;if(M<=0&&p>=0&&y<=0)return c=p/(p-y),e.copy(i).addScaledVector(os,c);let _=f*y-x*g;if(_<=0&&g-f>=0&&x-y>=0)return kh.subVectors(a,r),c=(g-f)/(g-f+(x-y)),e.copy(r).addScaledVector(kh,c);let m=1/(_+M+v);return h=M*m,c=v*m,e.copy(i).addScaledVector(rs,h).addScaledVector(os,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hg=0,Ni=class extends ue{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=vs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bu,this.blendDst=yu,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let h=[];for(let c in a){let d=a[c];delete d.metadata,h.push(d)}return h}if(e){let a=r(t.textures),h=r(t.images);a.length>0&&(i.textures=a),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Da(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,dn.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=dn.workingColorSpace){return this.r=t,this.g=e,this.b=i,dn.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=dn.workingColorSpace){if(t=Tg(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+e):i+e-i*e,h=2*i-a;this.r=Da(h,a,t+1/3),this.g=Da(h,a,t),this.b=Da(h,a,t-1/3)}return dn.toWorkingColorSpace(this,r),this}setStyle(t,e=zt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,h=r[1],c=r[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=r[1],h=a.length;if(h===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zt){let i=Du[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zt){return dn.fromWorkingColorSpace(Oe.copy(this),t),Math.round(ze(Oe.r*255,0,255))*65536+Math.round(ze(Oe.g*255,0,255))*256+Math.round(ze(Oe.b*255,0,255))}getHexString(t=zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=dn.workingColorSpace){dn.fromWorkingColorSpace(Oe.copy(this),e);let i=Oe.r,r=Oe.g,a=Oe.b,h=Math.max(i,r,a),c=Math.min(i,r,a),d,p,f=(c+h)/2;if(c===h)d=0,p=0;else{let g=h-c;switch(p=f<=.5?g/(h+c):g/(2-h-c),h){case i:d=(r-a)/g+(r<a?6:0);break;case r:d=(a-i)/g+2;break;case a:d=(i-r)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=f,t}getRGB(t,e=dn.workingColorSpace){return dn.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=zt){dn.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,i=Oe.g,r=Oe.b;return t!==zt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(mn),mn.h+=t,mn.s+=e,mn.l+=i,this.setHSL(mn.h,mn.s,mn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Wr);let i=xa(mn.h,Wr.h,e),r=xa(mn.s,Wr.s,e),a=xa(mn.l,Wr.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Zt;Zt.NAMES=Du;var fi=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new D,Xr=new ie,De=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Th,this.updateRange={offset:0,count:-1},this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Or(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Or(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Or(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array),a=je(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var mo=class extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var go=class extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ke=class extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Gg=0,an=new le,Na=new Fe,as=new D,tn=new ge,sr=new ge,Pe=new D,$e=class extends ue{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?go:mo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ht().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ge);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let a=e[i];tn.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let a=0,h=e.length;a<h;a++){let c=e[a];sr.setFromBufferAttribute(c),this.morphTargetsRelative?(Pe.addVectors(tn.min,sr.min),tn.expandByPoint(Pe),Pe.addVectors(tn.max,sr.max),tn.expandByPoint(Pe)):(tn.expandByPoint(sr.min),tn.expandByPoint(sr.max))}tn.getCenter(i);let r=0;for(let a=0,h=t.count;a<h;a++)Pe.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let a=0,h=e.length;a<h;a++){let c=e[a],d=this.morphTargetsRelative;for(let p=0,f=c.count;p<f;p++)Pe.fromBufferAttribute(c,p),d&&(as.fromBufferAttribute(t,p),Pe.add(as)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,r=e.position.array,a=e.normal.array,h=e.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*c),4));let d=this.getAttribute("tangent").array,p=[],f=[];for(let L=0;L<c;L++)p[L]=new D,f[L]=new D;let g=new D,v=new D,x=new D,y=new ie,M=new ie,_=new ie,m=new D,A=new D;function w(L,tt,ct){g.fromArray(r,L*3),v.fromArray(r,tt*3),x.fromArray(r,ct*3),y.fromArray(h,L*2),M.fromArray(h,tt*2),_.fromArray(h,ct*2),v.sub(g),x.sub(g),M.sub(y),_.sub(y);let q=1/(M.x*_.y-_.x*M.y);isFinite(q)&&(m.copy(v).multiplyScalar(_.y).addScaledVector(x,-M.y).multiplyScalar(q),A.copy(x).multiplyScalar(M.x).addScaledVector(v,-_.x).multiplyScalar(q),p[L].add(m),p[tt].add(m),p[ct].add(m),f[L].add(A),f[tt].add(A),f[ct].add(A))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let L=0,tt=I.length;L<tt;++L){let ct=I[L],q=ct.start,$=ct.count;for(let W=q,Y=q+$;W<Y;W+=3)w(i[W+0],i[W+1],i[W+2])}let R=new D,N=new D,O=new D,H=new D;function S(L){O.fromArray(a,L*3),H.copy(O);let tt=p[L];R.copy(tt),R.sub(O.multiplyScalar(O.dot(tt))).normalize(),N.crossVectors(H,tt);let q=N.dot(f[L])<0?-1:1;d[L*4]=R.x,d[L*4+1]=R.y,d[L*4+2]=R.z,d[L*4+3]=q}for(let L=0,tt=I.length;L<tt;++L){let ct=I[L],q=ct.start,$=ct.count;for(let W=q,Y=q+$;W<Y;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);let r=new D,a=new D,h=new D,c=new D,d=new D,p=new D,f=new D,g=new D;if(t)for(let v=0,x=t.count;v<x;v+=3){let y=t.getX(v+0),M=t.getX(v+1),_=t.getX(v+2);r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,M),h.fromBufferAttribute(e,_),f.subVectors(h,a),g.subVectors(r,a),f.cross(g),c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),p.fromBufferAttribute(i,_),c.add(f),d.add(f),p.add(f),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(_,p.x,p.y,p.z)}else for(let v=0,x=e.count;v<x;v+=3)r.fromBufferAttribute(e,v+0),a.fromBufferAttribute(e,v+1),h.fromBufferAttribute(e,v+2),f.subVectors(h,a),g.subVectors(r,a),f.cross(g),i.setXYZ(v+0,f.x,f.y,f.z),i.setXYZ(v+1,f.x,f.y,f.z),i.setXYZ(v+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(c,d){let p=c.array,f=c.itemSize,g=c.normalized,v=new p.constructor(d.length*f),x=0,y=0;for(let M=0,_=d.length;M<_;M++){c.isInterleavedBufferAttribute?x=d[M]*c.data.stride+c.offset:x=d[M]*f;for(let m=0;m<f;m++)v[y++]=p[x++]}return new De(v,f,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new $e,i=this.index.array,r=this.attributes;for(let c in r){let d=r[c],p=t(d,i);e.setAttribute(c,p)}let a=this.morphAttributes;for(let c in a){let d=[],p=a[c];for(let f=0,g=p.length;f<g;f++){let v=p[f],x=t(v,i);d.push(x)}e.morphAttributes[c]=d}e.morphTargetsRelative=this.morphTargetsRelative;let h=this.groups;for(let c=0,d=h.length;c<d;c++){let p=h[c];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let d=this.parameters;for(let p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let d in i){let p=i[d];t.data.attributes[d]=p.toJSON(t.data)}let r={},a=!1;for(let d in this.morphAttributes){let p=this.morphAttributes[d],f=[];for(let g=0,v=p.length;g<v;g++){let x=p[g];f.push(x.toJSON(t.data))}f.length>0&&(r[d]=f,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let p in r){let f=r[p];this.setAttribute(p,f.clone(e))}let a=t.morphAttributes;for(let p in a){let f=[],g=a[p];for(let v=0,x=g.length;v<x;v++)f.push(g[v].clone(e));this.morphAttributes[p]=f}this.morphTargetsRelative=t.morphTargetsRelative;let h=t.groups;for(let p=0,f=h.length;p<f;p++){let g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bh=new le,Si=new Di,qr=new pi,Vh=new D,ls=new D,cs=new D,hs=new D,Ua=new D,Yr=new D,Kr=new ie,$r=new ie,Zr=new ie,zh=new D,Hh=new D,Gh=new D,Jr=new D,jr=new D,cn=class extends Fe{constructor(t=new $e,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=r.length;a<h;a++){let c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,h=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let c=this.morphTargetInfluences;if(a&&c){Yr.set(0,0,0);for(let d=0,p=a.length;d<p;d++){let f=c[d],g=a[d];f!==0&&(Ua.fromBufferAttribute(g,t),h?Yr.addScaledVector(Ua,f):Yr.addScaledVector(Ua.sub(e),f))}e.add(Yr)}return e}raycast(t,e){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(a),Si.copy(t.ray).recast(t.near),!(qr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(qr,Vh)===null||Si.origin.distanceToSquared(Vh)>ni(t.far-t.near,2)))&&(Bh.copy(a).invert(),Si.copy(t.ray).applyMatrix4(Bh),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let r,a=this.geometry,h=this.material,c=a.index,d=a.attributes.position,p=a.attributes.uv,f=a.attributes.uv1,g=a.attributes.normal,v=a.groups,x=a.drawRange;if(c!==null)if(Array.isArray(h))for(let y=0,M=v.length;y<M;y++){let _=v[y],m=h[_.materialIndex],A=Math.max(_.start,x.start),w=Math.min(c.count,Math.min(_.start+_.count,x.start+x.count));for(let I=A,R=w;I<R;I+=3){let N=c.getX(I),O=c.getX(I+1),H=c.getX(I+2);r=Qr(this,m,t,i,p,f,g,N,O,H),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let y=Math.max(0,x.start),M=Math.min(c.count,x.start+x.count);for(let _=y,m=M;_<m;_+=3){let A=c.getX(_),w=c.getX(_+1),I=c.getX(_+2);r=Qr(this,h,t,i,p,f,g,A,w,I),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(h))for(let y=0,M=v.length;y<M;y++){let _=v[y],m=h[_.materialIndex],A=Math.max(_.start,x.start),w=Math.min(d.count,Math.min(_.start+_.count,x.start+x.count));for(let I=A,R=w;I<R;I+=3){let N=I,O=I+1,H=I+2;r=Qr(this,m,t,i,p,f,g,N,O,H),r&&(r.faceIndex=Math.floor(I/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let y=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let _=y,m=M;_<m;_+=3){let A=_,w=_+1,I=_+2;r=Qr(this,h,t,i,p,f,g,A,w,I),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}};function Wg(s,t,e,i,r,a,h,c){let d;if(t.side===Ye?d=i.intersectTriangle(h,a,r,!0,c):d=i.intersectTriangle(r,a,h,t.side===di,c),d===null)return null;jr.copy(c),jr.applyMatrix4(s.matrixWorld);let p=e.ray.origin.distanceTo(jr);return p<e.near||p>e.far?null:{distance:p,point:jr.clone(),object:s}}function Qr(s,t,e,i,r,a,h,c,d,p){s.getVertexPosition(c,ls),s.getVertexPosition(d,cs),s.getVertexPosition(p,hs);let f=Wg(s,t,e,i,ls,cs,hs,Jr);if(f){r&&(Kr.fromBufferAttribute(r,c),$r.fromBufferAttribute(r,d),Zr.fromBufferAttribute(r,p),f.uv=en.getInterpolation(Jr,ls,cs,hs,Kr,$r,Zr,new ie)),a&&(Kr.fromBufferAttribute(a,c),$r.fromBufferAttribute(a,d),Zr.fromBufferAttribute(a,p),f.uv1=en.getInterpolation(Jr,ls,cs,hs,Kr,$r,Zr,new ie),f.uv2=f.uv1),h&&(zh.fromBufferAttribute(h,c),Hh.fromBufferAttribute(h,d),Gh.fromBufferAttribute(h,p),f.normal=en.getInterpolation(Jr,ls,cs,hs,zh,Hh,Gh,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let g={a:c,b:d,c:p,normal:new D,materialIndex:0};en.getNormal(ls,cs,hs,g.normal),f.face=g}return f}var _n=class extends $e{constructor(t=1,e=1,i=1,r=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:a,depthSegments:h};let c=this;r=Math.floor(r),a=Math.floor(a),h=Math.floor(h);let d=[],p=[],f=[],g=[],v=0,x=0;y("z","y","x",-1,-1,i,e,t,h,a,0),y("z","y","x",1,-1,i,e,-t,h,a,1),y("x","z","y",1,1,t,i,e,r,h,2),y("x","z","y",1,-1,t,i,-e,r,h,3),y("x","y","z",1,-1,t,e,i,r,a,4),y("x","y","z",-1,-1,t,e,-i,r,a,5),this.setIndex(d),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(g,2));function y(M,_,m,A,w,I,R,N,O,H,S){let L=I/O,tt=R/H,ct=I/2,q=R/2,$=N/2,W=O+1,Y=H+1,Q=0,nt=0,st=new D;for(let it=0;it<Y;it++){let bt=it*tt-q;for(let B=0;B<W;B++){let et=B*L-ct;st[M]=et*A,st[_]=bt*w,st[m]=$,p.push(st.x,st.y,st.z),st[M]=0,st[_]=0,st[m]=N>0?1:-1,f.push(st.x,st.y,st.z),g.push(B/O),g.push(1-it/H),Q+=1}}for(let it=0;it<H;it++)for(let bt=0;bt<O;bt++){let B=v+bt+W*it,et=v+bt+W*(it+1),rt=v+(bt+1)+W*(it+1),vt=v+(bt+1)+W*it;d.push(B,et,vt),d.push(et,rt,vt),nt+=6}c.addGroup(x,nt,S),x+=nt,v+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Es(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let r=s[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let i=Es(s[e]);for(let r in i)t[r]=i[r]}return t}function Xg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nu(s){return s.getRenderTarget()===null?s.outputColorSpace:wn}var qg={clone:Es,merge:Be},Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=Kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let h=this.uniforms[r].value;h&&h.isTexture?e.uniforms[r]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[r]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[r]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[r]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[r]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[r]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[r]={type:"m4",value:h.toArray()}:e.uniforms[r]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},pr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ie=class extends pr{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,a,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_a*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r,h=this.view;if(this.view!==null&&this.view.enabled){let d=h.fullWidth,p=h.fullHeight;a+=h.offsetX*r/d,e-=h.offsetY*i/p,r*=h.width/d,i*=h.height/p}let c=this.filmOffset;c!==0&&(a+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,Za=class extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;let r=new Ie(us,ds,t,e);r.layers=this.layers,this.add(r);let a=new Ie(us,ds,t,e);a.layers=this.layers,this.add(a);let h=new Ie(us,ds,t,e);h.layers=this.layers,this.add(h);let c=new Ie(us,ds,t,e);c.layers=this.layers,this.add(c);let d=new Ie(us,ds,t,e);d.layers=this.layers,this.add(d);let p=new Ie(us,ds,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,a,h,c,d]=e;for(let p of e)this.remove(p);if(t===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,h,c,d,p]=this.children,f=t.getRenderTarget(),g=t.toneMapping,v=t.xr.enabled;t.toneMapping=Bn,t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,a),t.setRenderTarget(i,2),t.render(e,h),t.setRenderTarget(i,3),t.render(e,c),t.setRenderTarget(i,4),t.render(e,d),i.texture.generateMipmaps=x,t.setRenderTarget(i,5),t.render(e,p),t.setRenderTarget(f),t.toneMapping=g,t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},vo=class extends He{constructor(t,e,i,r,a,h,c,d,p,f){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,i,r,a,h,c,d,p,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ja=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?zt:Ii),this.texture=new vo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _n(5,5,5),a=new zn({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:hi});a.uniforms.tEquirect.value=e;let h=new cn(r,a),c=e.minFilter;return e.minFilter===hr&&(e.minFilter=ln),new Za(1,10,this).update(t,h),e.minFilter=c,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,r){let a=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,r);t.setRenderTarget(a)}},Oa=new D,$g=new D,Zg=new Ht,Un=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Oa.subVectors(i,e).cross($g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zg.getNormalMatrix(t),r=this.coplanarPoint(Oa).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new pi,to=new D,Ss=class{constructor(t=new Un,e=new Un,i=new Un,r=new Un,a=new Un,h=new Un){this.planes=[t,e,i,r,a,h]}set(t,e,i,r,a,h){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(r),c[4].copy(a),c[5].copy(h),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fn){let i=this.planes,r=t.elements,a=r[0],h=r[1],c=r[2],d=r[3],p=r[4],f=r[5],g=r[6],v=r[7],x=r[8],y=r[9],M=r[10],_=r[11],m=r[12],A=r[13],w=r[14],I=r[15];if(i[0].setComponents(d-a,v-p,_-x,I-m).normalize(),i[1].setComponents(d+a,v+p,_+x,I+m).normalize(),i[2].setComponents(d+h,v+f,_+y,I+A).normalize(),i[3].setComponents(d-h,v-f,_-y,I-A).normalize(),i[4].setComponents(d-c,v-g,_-M,I-w).normalize(),e===Fn)i[5].setComponents(d+c,v+g,_+M,I+w).normalize();else if(e===co)i[5].setComponents(c,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(to.x=r.normal.x>0?t.max.x:t.min.x,to.y=r.normal.y>0?t.max.y:t.min.y,to.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uu(){let s=null,t=!1,e=null,i=null;function r(a,h){e(a,h),i=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Jg(s,t){let e=t.isWebGL2,i=new WeakMap;function r(p,f){let g=p.array,v=p.usage,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,g,v),p.onUploadCallback();let y;if(g instanceof Float32Array)y=s.FLOAT;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(e)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)y=s.SHORT;else if(g instanceof Uint32Array)y=s.UNSIGNED_INT;else if(g instanceof Int32Array)y=s.INT;else if(g instanceof Int8Array)y=s.BYTE;else if(g instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:y,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version}}function a(p,f,g){let v=f.array,x=f.updateRange;s.bindBuffer(g,p),x.count===-1?s.bufferSubData(g,0,v):(e?s.bufferSubData(g,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):s.bufferSubData(g,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),f.onUploadCallback()}function h(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);let f=i.get(p);f&&(s.deleteBuffer(f.buffer),i.delete(p))}function d(p,f){if(p.isGLBufferAttribute){let v=i.get(p);(!v||v.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);let g=i.get(p);g===void 0?i.set(p,r(p,f)):g.version<p.version&&(a(g.buffer,p,f),g.version=p.version)}return{get:h,remove:c,update:d}}var fr=class extends $e{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let a=t/2,h=e/2,c=Math.floor(i),d=Math.floor(r),p=c+1,f=d+1,g=t/c,v=e/d,x=[],y=[],M=[],_=[];for(let m=0;m<f;m++){let A=m*v-h;for(let w=0;w<p;w++){let I=w*g-a;y.push(I,-A,0),M.push(0,0,1),_.push(w/c),_.push(1-m/d)}}for(let m=0;m<d;m++)for(let A=0;A<c;A++){let w=A+p*m,I=A+p*(m+1),R=A+1+p*(m+1),N=A+1+p*m;x.push(w,I,N),x.push(I,R,N)}this.setIndex(x),this.setAttribute("position",new Ke(y,3)),this.setAttribute("normal",new Ke(M,3)),this.setAttribute("uv",new Ke(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.widthSegments,t.heightSegments)}},jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv="vec3 transformed = vec3( position );",rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ov=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,av=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ov=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,c_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,h_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,u_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,d_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Q_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,e0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,S0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wt={alphamap_fragment:jg,alphamap_pars_fragment:Qg,alphatest_fragment:tv,alphatest_pars_fragment:ev,aomap_fragment:nv,aomap_pars_fragment:iv,begin_vertex:sv,beginnormal_vertex:rv,bsdfs:ov,iridescence_fragment:av,bumpmap_pars_fragment:lv,clipping_planes_fragment:cv,clipping_planes_pars_fragment:hv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:dv,color_fragment:pv,color_pars_fragment:fv,color_pars_vertex:mv,color_vertex:gv,common:vv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:xv,displacementmap_pars_vertex:bv,displacementmap_vertex:yv,emissivemap_fragment:wv,emissivemap_pars_fragment:Mv,encodings_fragment:Ev,encodings_pars_fragment:Sv,envmap_fragment:Tv,envmap_common_pars_fragment:Av,envmap_pars_fragment:Cv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:zv,envmap_vertex:Rv,fog_vertex:Lv,fog_pars_vertex:Iv,fog_fragment:Dv,fog_pars_fragment:Nv,gradientmap_pars_fragment:Uv,lightmap_fragment:Ov,lightmap_pars_fragment:Fv,lights_lambert_fragment:kv,lights_lambert_pars_fragment:Bv,lights_pars_begin:Vv,lights_toon_fragment:Hv,lights_toon_pars_fragment:Gv,lights_phong_fragment:Wv,lights_phong_pars_fragment:Xv,lights_physical_fragment:qv,lights_physical_pars_fragment:Yv,lights_fragment_begin:Kv,lights_fragment_maps:$v,lights_fragment_end:Zv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:t_,map_fragment:e_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:o_,morphcolor_vertex:a_,morphnormal_vertex:l_,morphtarget_pars_vertex:c_,morphtarget_vertex:h_,normal_fragment_begin:u_,normal_fragment_maps:d_,normal_pars_fragment:p_,normal_pars_vertex:f_,normal_vertex:m_,normalmap_pars_fragment:g_,clearcoat_normal_fragment_begin:v_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:x_,iridescence_pars_fragment:b_,output_fragment:y_,packing:w_,premultiplied_alpha_fragment:M_,project_vertex:E_,dithering_fragment:S_,dithering_pars_fragment:T_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:C_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:R_,shadowmap_vertex:L_,shadowmask_pars_fragment:I_,skinbase_vertex:D_,skinning_pars_vertex:N_,skinning_vertex:U_,skinnormal_vertex:O_,specularmap_fragment:F_,specularmap_pars_fragment:k_,tonemapping_fragment:B_,tonemapping_pars_fragment:V_,transmission_fragment:z_,transmission_pars_fragment:H_,uv_pars_fragment:G_,uv_pars_vertex:W_,uv_vertex:X_,worldpos_vertex:q_,background_vert:Y_,background_frag:K_,backgroundCube_vert:$_,backgroundCube_frag:Z_,cube_vert:J_,cube_frag:j_,depth_vert:Q_,depth_frag:t0,distanceRGBA_vert:e0,distanceRGBA_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:o0,meshbasic_vert:a0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:p0,meshnormal_frag:f0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:v0,meshphysical_frag:_0,meshtoon_vert:x0,meshtoon_frag:b0,points_vert:y0,points_frag:w0,shadow_vert:M0,shadow_frag:E0,sprite_vert:S0,sprite_frag:T0},dt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},yn={basic:{uniforms:Be([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Be([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Be([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Be([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Be([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Be([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Be([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Be([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Be([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Be([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Be([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Be([dt.common,dt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Be([dt.lights,dt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};yn.physical={uniforms:Be([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var eo={r:0,b:0,g:0};function A0(s,t,e,i,r,a,h){let c=new Zt(0),d=a===!0?0:1,p,f,g=null,v=0,x=null;function y(_,m){let A=!1,w=m.isScene===!0?m.background:null;switch(w&&w.isTexture&&(w=(m.backgroundBlurriness>0?e:t).get(w)),w===null?M(c,d):w&&w.isColor&&(M(w,1),A=!0),s.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,h),A=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,h),A=!0;break}(s.autoClear||A)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Eo)?(f===void 0&&(f=new cn(new _n(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Es(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,O,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=w.colorSpace!==zt,(g!==w||v!==w.version||x!==s.toneMapping)&&(f.material.needsUpdate=!0,g=w,v=w.version,x=s.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new cn(new fr(2,2),new zn({name:"BackgroundMaterial",uniforms:Es(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.toneMapped=w.colorSpace!==zt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,g=w,v=w.version,x=s.toneMapping),p.layers.enableAll(),_.unshift(p,p.geometry,p.material,0,0,null))}function M(_,m){_.getRGB(eo,Nu(s)),i.buffers.color.setClear(eo.r,eo.g,eo.b,m,h)}return{getClearColor:function(){return c},setClearColor:function(_,m=1){c.set(_),d=m,M(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(_){d=_,M(c,d)},render:y}}function C0(s,t,e,i){let r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||a!==null,c={},d=_(null),p=d,f=!1;function g($,W,Y,Q,nt){let st=!1;if(h){let it=M(Q,Y,W);p!==it&&(p=it,x(p.object)),st=m($,Q,Y,nt),st&&A($,Q,Y,nt)}else{let it=W.wireframe===!0;(p.geometry!==Q.id||p.program!==Y.id||p.wireframe!==it)&&(p.geometry=Q.id,p.program=Y.id,p.wireframe=it,st=!0)}nt!==null&&e.update(nt,s.ELEMENT_ARRAY_BUFFER),(st||f)&&(f=!1,H($,W,Y,Q),nt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function v(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function x($){return i.isWebGL2?s.bindVertexArray($):a.bindVertexArrayOES($)}function y($){return i.isWebGL2?s.deleteVertexArray($):a.deleteVertexArrayOES($)}function M($,W,Y){let Q=Y.wireframe===!0,nt=c[$.id];nt===void 0&&(nt={},c[$.id]=nt);let st=nt[W.id];st===void 0&&(st={},nt[W.id]=st);let it=st[Q];return it===void 0&&(it=_(v()),st[Q]=it),it}function _($){let W=[],Y=[],Q=[];for(let nt=0;nt<r;nt++)W[nt]=0,Y[nt]=0,Q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:Q,object:$,attributes:{},index:null}}function m($,W,Y,Q){let nt=p.attributes,st=W.attributes,it=0,bt=Y.getAttributes();for(let B in bt)if(bt[B].location>=0){let rt=nt[B],vt=st[B];if(vt===void 0&&(B==="instanceMatrix"&&$.instanceMatrix&&(vt=$.instanceMatrix),B==="instanceColor"&&$.instanceColor&&(vt=$.instanceColor)),rt===void 0||rt.attribute!==vt||vt&&rt.data!==vt.data)return!0;it++}return p.attributesNum!==it||p.index!==Q}function A($,W,Y,Q){let nt={},st=W.attributes,it=0,bt=Y.getAttributes();for(let B in bt)if(bt[B].location>=0){let rt=st[B];rt===void 0&&(B==="instanceMatrix"&&$.instanceMatrix&&(rt=$.instanceMatrix),B==="instanceColor"&&$.instanceColor&&(rt=$.instanceColor));let vt={};vt.attribute=rt,rt&&rt.data&&(vt.data=rt.data),nt[B]=vt,it++}p.attributes=nt,p.attributesNum=it,p.index=Q}function w(){let $=p.newAttributes;for(let W=0,Y=$.length;W<Y;W++)$[W]=0}function I($){R($,0)}function R($,W){let Y=p.newAttributes,Q=p.enabledAttributes,nt=p.attributeDivisors;Y[$]=1,Q[$]===0&&(s.enableVertexAttribArray($),Q[$]=1),nt[$]!==W&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,W),nt[$]=W)}function N(){let $=p.newAttributes,W=p.enabledAttributes;for(let Y=0,Q=W.length;Y<Q;Y++)W[Y]!==$[Y]&&(s.disableVertexAttribArray(Y),W[Y]=0)}function O($,W,Y,Q,nt,st,it){it===!0?s.vertexAttribIPointer($,W,Y,nt,st):s.vertexAttribPointer($,W,Y,Q,nt,st)}function H($,W,Y,Q){if(i.isWebGL2===!1&&($.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();let nt=Q.attributes,st=Y.getAttributes(),it=W.defaultAttributeValues;for(let bt in st){let B=st[bt];if(B.location>=0){let et=nt[bt];if(et===void 0&&(bt==="instanceMatrix"&&$.instanceMatrix&&(et=$.instanceMatrix),bt==="instanceColor"&&$.instanceColor&&(et=$.instanceColor)),et!==void 0){let rt=et.normalized,vt=et.itemSize,_t=e.get(et);if(_t===void 0)continue;let Rt=_t.buffer,Bt=_t.type,Ct=_t.bytesPerElement,we=i.isWebGL2===!0&&(Bt===s.INT||Bt===s.UNSIGNED_INT||et.gpuType===Eu);if(et.isInterleavedBufferAttribute){let qt=et.data,z=qt.stride,pe=et.offset;if(qt.isInstancedInterleavedBuffer){for(let wt=0;wt<B.locationSize;wt++)R(B.location+wt,qt.meshPerAttribute);$.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let wt=0;wt<B.locationSize;wt++)I(B.location+wt);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let wt=0;wt<B.locationSize;wt++)O(B.location+wt,vt/B.locationSize,Bt,rt,z*Ct,(pe+vt/B.locationSize*wt)*Ct,we)}else{if(et.isInstancedBufferAttribute){for(let qt=0;qt<B.locationSize;qt++)R(B.location+qt,et.meshPerAttribute);$.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let qt=0;qt<B.locationSize;qt++)I(B.location+qt);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let qt=0;qt<B.locationSize;qt++)O(B.location+qt,vt/B.locationSize,Bt,rt,vt*Ct,vt/B.locationSize*qt*Ct,we)}}else if(it!==void 0){let rt=it[bt];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(B.location,rt);break;case 3:s.vertexAttrib3fv(B.location,rt);break;case 4:s.vertexAttrib4fv(B.location,rt);break;default:s.vertexAttrib1fv(B.location,rt)}}}}N()}function S(){ct();for(let $ in c){let W=c[$];for(let Y in W){let Q=W[Y];for(let nt in Q)y(Q[nt].object),delete Q[nt];delete W[Y]}delete c[$]}}function L($){if(c[$.id]===void 0)return;let W=c[$.id];for(let Y in W){let Q=W[Y];for(let nt in Q)y(Q[nt].object),delete Q[nt];delete W[Y]}delete c[$.id]}function tt($){for(let W in c){let Y=c[W];if(Y[$.id]===void 0)continue;let Q=Y[$.id];for(let nt in Q)y(Q[nt].object),delete Q[nt];delete Y[$.id]}}function ct(){q(),f=!0,p!==d&&(p=d,x(p.object))}function q(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:g,reset:ct,resetDefaultState:q,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:tt,initAttributes:w,enableAttribute:I,disableUnusedAttributes:N}}function P0(s,t,e,i){let r=i.isWebGL2,a;function h(p){a=p}function c(p,f){s.drawArrays(a,p,f),e.update(f,a,1)}function d(p,f,g){if(g===0)return;let v,x;if(r)v=s,x="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](a,p,f,g),e.update(f,a,g)}this.setMode=h,this.render=c,this.renderInstances=d}function R0(s,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",c=e.precision!==void 0?e.precision:"highp",d=a(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let p=h||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,I=h||t.has("OES_texture_float"),R=w&&I,N=h?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:f,maxTextures:g,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:A,vertexTextures:w,floatFragmentTextures:I,floatVertexTextures:R,maxSamples:N}}function L0(s){let t=this,e=null,i=0,r=!1,a=!1,h=new Un,c=new Ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){let x=g.length!==0||v||i!==0||r;return r=v,i=g.length,x},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){e=f(g,v,0)},this.setState=function(g,v,x){let y=g.clippingPlanes,M=g.clipIntersection,_=g.clipShadows,m=s.get(g);if(!r||y===null||y.length===0||a&&!_)a?f(null):p();else{let A=a?0:i,w=A*4,I=m.clippingState||null;d.value=I,I=f(y,v,w,x);for(let R=0;R!==w;++R)I[R]=e[R];m.clippingState=I,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(g,v,x,y){let M=g!==null?g.length:0,_=null;if(M!==0){if(_=d.value,y!==!0||_===null){let m=x+M*4,A=v.matrixWorldInverse;c.getNormalMatrix(A),(_===null||_.length<m)&&(_=new Float32Array(m));for(let w=0,I=x;w!==M;++w,I+=4)h.copy(g[w]).applyMatrix4(A,c),h.normal.toArray(_,I),_[I+3]=h.constant}d.value=_,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}function I0(s){let t=new WeakMap;function e(h,c){return c===Ha?h.mapping=bs:c===Ga&&(h.mapping=ys),h}function i(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){let c=h.mapping;if(c===Ha||c===Ga)if(t.has(h)){let d=t.get(h).texture;return e(d,h.mapping)}else{let d=h.image;if(d&&d.height>0){let p=new Ja(d.height/2);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",r),e(p.texture,h.mapping)}else return null}}return h}function r(h){let c=h.target;c.removeEventListener("dispose",r);let d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var ja=class extends pr{constructor(t=-1,e=1,i=1,r=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-t,h=i+t,c=r+e,d=r-e;if(this.view!==null&&this.view.enabled){let p=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,h=a+p*this.view.width,c-=f*this.view.offsetY,d=c-f*this.view.height}this.projectionMatrix.makeOrthographic(a,h,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gs=4,Wh=[.125,.215,.35,.446,.526,.582],Ci=20,Fa=new ja,Xh=new Zt,ka=null,Ai=(1+Math.sqrt(5))/2,ps=1/Ai,qh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ai,ps),new D(0,Ai,-ps),new D(ps,0,Ai),new D(-ps,0,Ai),new D(Ai,ps,0),new D(-Ai,ps,0)],_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ka=this._renderer.getRenderTarget(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka),t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ur,format:vn,colorSpace:wn,depthBuffer:!1},r=Yh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(t,e,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(a)),this._blurMaterial=N0(a,t,e)}return r}_compileMaterial(t){let e=new cn(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,i,r){let c=new Ie(90,1,e,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,v=f.toneMapping;f.getClearColor(Xh),f.toneMapping=Bn,f.autoClear=!1;let x=new fi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),y=new cn(new _n,x),M=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,M=!0):(x.color.copy(Xh),M=!0);for(let m=0;m<6;m++){let A=m%3;A===0?(c.up.set(0,d[m],0),c.lookAt(p[m],0,0)):A===1?(c.up.set(0,0,d[m]),c.lookAt(0,p[m],0)):(c.up.set(0,d[m],0),c.lookAt(0,0,p[m]));let w=this._cubeSize;no(r,A*w,m>2?w:0,w,w),f.setRenderTarget(r),M&&f.render(y,c),f.render(t,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=v,f.autoClear=g,t.background=_}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===bs||t.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let a=r?this._cubemapMaterial:this._equirectMaterial,h=new cn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=t;let d=this._cubeSize;no(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(h,Fa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),h=qh[(r-1)%qh.length];this._blur(t,r-1,r,a,h)}e.autoClear=i}_blur(t,e,i,r,a){let h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,r,"latitudinal",a),this._halfBlur(h,t,i,i,r,"longitudinal",a)}_halfBlur(t,e,i,r,a,h,c){let d=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,g=new cn(this._lodPlanes[r],p),v=p.uniforms,x=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ci-1),M=a/y,_=isFinite(a)?1+Math.floor(f*M):Ci;_>Ci&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ci}`);let m=[],A=0;for(let O=0;O<Ci;++O){let H=O/M,S=Math.exp(-H*H/2);m.push(S),O===0?A+=S:O<_&&(A+=2*S)}for(let O=0;O<m.length;O++)m[O]=m[O]/A;v.envMap.value=t.texture,v.samples.value=_,v.weights.value=m,v.latitudinal.value=h==="latitudinal",c&&(v.poleAxis.value=c);let{_lodMax:w}=this;v.dTheta.value=y,v.mipInt.value=w-i;let I=this._sizeLods[r],R=3*I*(r>w-gs?r-w+gs:0),N=4*(this._cubeSize-I);no(e,R,N,3*I,2*I),d.setRenderTarget(e),d.render(g,Fa)}};function D0(s){let t=[],e=[],i=[],r=s,a=s-gs+1+Wh.length;for(let h=0;h<a;h++){let c=Math.pow(2,r);e.push(c);let d=1/c;h>s-gs?d=Wh[h-s+gs-1]:h===0&&(d=0),i.push(d);let p=1/(c-2),f=-p,g=1+p,v=[f,f,g,f,g,g,f,f,g,g,f,g],x=6,y=6,M=3,_=2,m=1,A=new Float32Array(M*y*x),w=new Float32Array(_*y*x),I=new Float32Array(m*y*x);for(let N=0;N<x;N++){let O=N%3*2/3-1,H=N>2?0:-1,S=[O,H,0,O+2/3,H,0,O+2/3,H+1,0,O,H,0,O+2/3,H+1,0,O,H+1,0];A.set(S,M*y*N),w.set(v,_*y*N);let L=[N,N,N,N,N,N];I.set(L,m*y*N)}let R=new $e;R.setAttribute("position",new De(A,M)),R.setAttribute("uv",new De(w,_)),R.setAttribute("faceIndex",new De(I,m)),t.push(R),r>gs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yh(s,t,e){let i=new Vn(s,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(s,t,e,i,r){s.viewport.set(t,e,i,r),s.scissor.set(t,e,i,r)}function N0(s,t,e){let i=new Float32Array(Ci),r=new D(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Kh(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function $h(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U0(s){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){let d=c.mapping,p=d===Ha||d===Ga,f=d===bs||d===ys;if(p||f)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=t.get(c);return e===null&&(e=new _o(s)),g=p?e.fromEquirectangular(c,g):e.fromCubemap(c,g),t.set(c,g),g.texture}else{if(t.has(c))return t.get(c).texture;{let g=c.image;if(p&&g&&g.height>0||f&&g&&r(g)){e===null&&(e=new _o(s));let v=p?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function r(c){let d=0,p=6;for(let f=0;f<p;f++)c[f]!==void 0&&d++;return d===p}function a(c){let d=c.target;d.removeEventListener("dispose",a);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function O0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function F0(s,t,e,i){let r={},a=new WeakMap;function h(g){let v=g.target;v.index!==null&&t.remove(v.index);for(let y in v.attributes)t.remove(v.attributes[y]);for(let y in v.morphAttributes){let M=v.morphAttributes[y];for(let _=0,m=M.length;_<m;_++)t.remove(M[_])}v.removeEventListener("dispose",h),delete r[v.id];let x=a.get(v);x&&(t.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(g,v){return r[v.id]===!0||(v.addEventListener("dispose",h),r[v.id]=!0,e.memory.geometries++),v}function d(g){let v=g.attributes;for(let y in v)t.update(v[y],s.ARRAY_BUFFER);let x=g.morphAttributes;for(let y in x){let M=x[y];for(let _=0,m=M.length;_<m;_++)t.update(M[_],s.ARRAY_BUFFER)}}function p(g){let v=[],x=g.index,y=g.attributes.position,M=0;if(x!==null){let A=x.array;M=x.version;for(let w=0,I=A.length;w<I;w+=3){let R=A[w+0],N=A[w+1],O=A[w+2];v.push(R,N,N,O,O,R)}}else{let A=y.array;M=y.version;for(let w=0,I=A.length/3-1;w<I;w+=3){let R=w+0,N=w+1,O=w+2;v.push(R,N,N,O,O,R)}}let _=new(Iu(v)?go:mo)(v,1);_.version=M;let m=a.get(g);m&&t.remove(m),a.set(g,_)}function f(g){let v=a.get(g);if(v){let x=g.index;x!==null&&v.version<x.version&&p(g)}else p(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:f}}function k0(s,t,e,i){let r=i.isWebGL2,a;function h(v){a=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function f(v,x){s.drawElements(a,x,c,v*d),e.update(x,a,1)}function g(v,x,y){if(y===0)return;let M,_;if(r)M=s,_="drawElementsInstanced";else if(M=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[_](a,x,c,v*d,y),e.update(x,a,y)}this.setMode=h,this.setIndex=p,this.render=f,this.renderInstances=g}function B0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,h,c){switch(e.calls++,h){case s.TRIANGLES:e.triangles+=c*(a/3);break;case s.LINES:e.lines+=c*(a/2);break;case s.LINE_STRIP:e.lines+=c*(a-1);break;case s.LINE_LOOP:e.lines+=c*a;break;case s.POINTS:e.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function V0(s,t){return s[0]-t[0]}function z0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function H0(s,t,e){let i={},r=new Float32Array(8),a=new WeakMap,h=new ye,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function d(p,f,g){let v=p.morphTargetInfluences;if(t.isWebGL2===!0){let x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=x!==void 0?x.length:0,M=a.get(f);if(M===void 0||M.count!==y){let $=function(){ct.dispose(),a.delete(f),f.removeEventListener("dispose",$)};M!==void 0&&M.texture.dispose();let A=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,I=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],O=f.morphAttributes.color||[],H=0;A===!0&&(H=1),w===!0&&(H=2),I===!0&&(H=3);let S=f.attributes.position.count*H,L=1;S>t.maxTextureSize&&(L=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let tt=new Float32Array(S*L*4*y),ct=new fo(tt,S,L,y);ct.type=ci,ct.needsUpdate=!0;let q=H*4;for(let W=0;W<y;W++){let Y=R[W],Q=N[W],nt=O[W],st=S*L*4*W;for(let it=0;it<Y.count;it++){let bt=it*q;A===!0&&(h.fromBufferAttribute(Y,it),tt[st+bt+0]=h.x,tt[st+bt+1]=h.y,tt[st+bt+2]=h.z,tt[st+bt+3]=0),w===!0&&(h.fromBufferAttribute(Q,it),tt[st+bt+4]=h.x,tt[st+bt+5]=h.y,tt[st+bt+6]=h.z,tt[st+bt+7]=0),I===!0&&(h.fromBufferAttribute(nt,it),tt[st+bt+8]=h.x,tt[st+bt+9]=h.y,tt[st+bt+10]=h.z,tt[st+bt+11]=nt.itemSize===4?h.w:1)}}M={count:y,texture:ct,size:new ie(S,L)},a.set(f,M),f.addEventListener("dispose",$)}let _=0;for(let A=0;A<v.length;A++)_+=v[A];let m=f.morphTargetsRelative?1:1-_;g.getUniforms().setValue(s,"morphTargetBaseInfluence",m),g.getUniforms().setValue(s,"morphTargetInfluences",v),g.getUniforms().setValue(s,"morphTargetsTexture",M.texture,e),g.getUniforms().setValue(s,"morphTargetsTextureSize",M.size)}else{let x=v===void 0?0:v.length,y=i[f.id];if(y===void 0||y.length!==x){y=[];for(let w=0;w<x;w++)y[w]=[w,0];i[f.id]=y}for(let w=0;w<x;w++){let I=y[w];I[0]=w,I[1]=v[w]}y.sort(z0);for(let w=0;w<8;w++)w<x&&y[w][1]?(c[w][0]=y[w][0],c[w][1]=y[w][1]):(c[w][0]=Number.MAX_SAFE_INTEGER,c[w][1]=0);c.sort(V0);let M=f.morphAttributes.position,_=f.morphAttributes.normal,m=0;for(let w=0;w<8;w++){let I=c[w],R=I[0],N=I[1];R!==Number.MAX_SAFE_INTEGER&&N?(M&&f.getAttribute("morphTarget"+w)!==M[R]&&f.setAttribute("morphTarget"+w,M[R]),_&&f.getAttribute("morphNormal"+w)!==_[R]&&f.setAttribute("morphNormal"+w,_[R]),r[w]=N,m+=N):(M&&f.hasAttribute("morphTarget"+w)===!0&&f.deleteAttribute("morphTarget"+w),_&&f.hasAttribute("morphNormal"+w)===!0&&f.deleteAttribute("morphNormal"+w),r[w]=0)}let A=f.morphTargetsRelative?1:1-m;g.getUniforms().setValue(s,"morphTargetBaseInfluence",A),g.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:d}}function G0(s,t,e,i){let r=new WeakMap;function a(d){let p=i.render.frame,f=d.geometry,g=t.get(d,f);return r.get(g)!==p&&(t.update(g),r.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),e.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,s.ARRAY_BUFFER)),g}function h(){r=new WeakMap}function c(d){let p=d.target;p.removeEventListener("dispose",c),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:a,dispose:h}}var Ou=new He,Fu=new fo,ku=new $a,Bu=new vo,Zh=[],Jh=[],jh=new Float32Array(16),Qh=new Float32Array(9),tu=new Float32Array(4);function Rs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let r=t*e,a=Zh[r];if(a===void 0&&(a=new Float32Array(r),Zh[r]=a),t!==0){i.toArray(a,0);for(let h=1,c=0;h!==t;++h)c+=e,s[h].toArray(a,c)}return a}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function So(s,t){let e=Jh[t];e===void 0&&(e=new Int32Array(t),Jh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function W0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function X0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function K0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;tu.set(i),s.uniformMatrix2fv(this.addr,!1,tu),Ce(e,i)}}function $0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;Qh.set(i),s.uniformMatrix3fv(this.addr,!1,Qh),Ce(e,i)}}function Z0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;jh.set(i),s.uniformMatrix4fv(this.addr,!1,jh),Ce(e,i)}}function J0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function Q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function ex(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function ix(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function rx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||Ou,r)}function ox(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ku,r)}function ax(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Bu,r)}function lx(s,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Fu,r)}function cx(s){switch(s){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return K0;case 35675:return $0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function hx(s,t){s.uniform1fv(this.addr,t)}function ux(s,t){let e=Rs(t,this.size,2);s.uniform2fv(this.addr,e)}function dx(s,t){let e=Rs(t,this.size,3);s.uniform3fv(this.addr,e)}function px(s,t){let e=Rs(t,this.size,4);s.uniform4fv(this.addr,e)}function fx(s,t){let e=Rs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mx(s,t){let e=Rs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gx(s,t){let e=Rs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vx(s,t){s.uniform1iv(this.addr,t)}function _x(s,t){s.uniform2iv(this.addr,t)}function xx(s,t){s.uniform3iv(this.addr,t)}function bx(s,t){s.uniform4iv(this.addr,t)}function yx(s,t){s.uniform1uiv(this.addr,t)}function wx(s,t){s.uniform2uiv(this.addr,t)}function Mx(s,t){s.uniform3uiv(this.addr,t)}function Ex(s,t){s.uniform4uiv(this.addr,t)}function Sx(s,t,e){let i=this.cache,r=t.length,a=So(e,r);Ae(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let h=0;h!==r;++h)e.setTexture2D(t[h]||Ou,a[h])}function Tx(s,t,e){let i=this.cache,r=t.length,a=So(e,r);Ae(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let h=0;h!==r;++h)e.setTexture3D(t[h]||ku,a[h])}function Ax(s,t,e){let i=this.cache,r=t.length,a=So(e,r);Ae(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let h=0;h!==r;++h)e.setTextureCube(t[h]||Bu,a[h])}function Cx(s,t,e){let i=this.cache,r=t.length,a=So(e,r);Ae(i,a)||(s.uniform1iv(this.addr,a),Ce(i,a));for(let h=0;h!==r;++h)e.setTexture2DArray(t[h]||Fu,a[h])}function Px(s){switch(s){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return px;case 35674:return fx;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return vx;case 35667:case 35671:return _x;case 35668:case 35672:return xx;case 35669:case 35673:return bx;case 5125:return yx;case 36294:return wx;case 36295:return Mx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Cx}}var Qa=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=cx(e.type)}},tl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Px(e.type)}},el=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let a=0,h=r.length;a!==h;++a){let c=r[a];c.setValue(t,e[c.id],i)}}},Ba=/(\w+)(\])?(\[|\.)?/g;function eu(s,t){s.seq.push(t),s.map[t.id]=t}function Rx(s,t,e){let i=s.name,r=i.length;for(Ba.lastIndex=0;;){let a=Ba.exec(i),h=Ba.lastIndex,c=a[1],d=a[2]==="]",p=a[3];if(d&&(c=c|0),p===void 0||p==="["&&h+2===r){eu(e,p===void 0?new Qa(c,s,t):new tl(c,s,t));break}else{let g=e.map[c];g===void 0&&(g=new el(c),eu(e,g)),e=g}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=t.getActiveUniform(e,r),h=t.getUniformLocation(e,a.name);Rx(a,h,this)}}setValue(t,e,i,r){let a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,h=e.length;a!==h;++a){let c=e[a],d=i[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,a=t.length;r!==a;++r){let h=t[r];h.id in e&&i.push(h)}return i}};function nu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Lx=0;function Ix(s,t){let e=s.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let h=r;h<a;h++){let c=h+1;i.push(`${c===t?">":" "} ${c}: ${e[h]}`)}return i.join(`
`)}function Dx(s){switch(s){case wn:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function iu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let h=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ix(s.getShaderSource(t),h)}else return r}function Nx(s,t){let e=Dx(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ux(s,t){let e;switch(t){case jm:e="Linear";break;case Qm:e="Reinhard";break;case tg:e="OptimizedCineon";break;case eg:e="ACESFilmic";break;case ng:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ox(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ar).join(`
`)}function Fx(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kx(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let a=s.getActiveAttrib(t,r),h=a.name,c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),e[h]={type:a.type,location:s.getAttribLocation(t,h),locationSize:c}}return e}function ar(s){return s!==""}function su(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ru(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(s){return s.replace(Bx,Vx)}function Vx(s,t){let e=Wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return nl(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(s){return s.replace(zx,Hx)}function Hx(s,t,e,i){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function au(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case ys:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wu:t="ENVMAP_BLENDING_MULTIPLY";break;case Zm:t="ENVMAP_BLENDING_MIX";break;case Jm:t="ENVMAP_BLENDING_ADD";break}return t}function Yx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Kx(s,t,e,i){let r=s.getContext(),a=e.defines,h=e.vertexShader,c=e.fragmentShader,d=Gx(e),p=Wx(e),f=Xx(e),g=qx(e),v=Yx(e),x=e.isWebGL2?"":Ox(e),y=Fx(a),M=r.createProgram(),_,m,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ar).join(`
`),_.length>0&&(_+=`
`),m=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ar).join(`
`),m.length>0&&(m+=`
`)):(_=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),m=[x,au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.encodings_pars_fragment,Nx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),h=nl(h),h=su(h,e),h=ru(h,e),c=nl(c),c=su(c,e),c=ru(c,e),h=ou(h),c=ou(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=A+_+h,I=A+m+c,R=nu(r,r.VERTEX_SHADER,w),N=nu(r,r.FRAGMENT_SHADER,I);if(r.attachShader(M,R),r.attachShader(M,N),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M),s.debug.checkShaderErrors){let S=r.getProgramInfoLog(M).trim(),L=r.getShaderInfoLog(R).trim(),tt=r.getShaderInfoLog(N).trim(),ct=!0,q=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ct=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,M,R,N);else{let $=iu(r,R,"vertex"),W=iu(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+$+`
`+W)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||tt==="")&&(q=!1);q&&(this.diagnostics={runnable:ct,programLog:S,vertexShader:{log:L,prefix:_},fragmentShader:{log:tt,prefix:m}})}r.deleteShader(R),r.deleteShader(N);let O;this.getUniforms=function(){return O===void 0&&(O=new xs(r,M)),O};let H;return this.getAttributes=function(){return H===void 0&&(H=kx(r,M)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=N,this}var $x=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(r)===!1&&(h.add(r),r.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new sl(t),e.set(t,i)),i}},sl=class{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}};function Zx(s,t,e,i,r,a,h){let c=new dr,d=new il,p=[],f=r.isWebGL2,g=r.logarithmicDepthBuffer,v=r.vertexTextures,x=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return S===0?"uv":`uv${S}`}function _(S,L,tt,ct,q){let $=ct.fog,W=q.geometry,Y=S.isMeshStandardMaterial?ct.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),nt=Q&&Q.mapping===Eo?Q.image.height:null,st=y[S.type];S.precision!==null&&(x=r.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));let it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,bt=it!==void 0?it.length:0,B=0;W.morphAttributes.position!==void 0&&(B=1),W.morphAttributes.normal!==void 0&&(B=2),W.morphAttributes.color!==void 0&&(B=3);let et,rt,vt,_t;if(st){let Qt=yn[st];et=Qt.vertexShader,rt=Qt.fragmentShader}else et=S.vertexShader,rt=S.fragmentShader,d.update(S),vt=d.getVertexShaderID(S),_t=d.getFragmentShaderID(S);let Rt=s.getRenderTarget(),Bt=q.isInstancedMesh===!0,Ct=!!S.map,we=!!S.matcap,qt=!!Q,z=!!S.aoMap,pe=!!S.lightMap,wt=!!S.bumpMap,Ot=!!S.normalMap,Nt=!!S.displacementMap,oe=!!S.emissiveMap,Xt=!!S.metalnessMap,Ft=!!S.roughnessMap,ae=S.anisotropy>0,Se=S.clearcoat>0,_e=S.iridescence>0,C=S.sheen>0,E=S.transmission>0,Z=ae&&!!S.anisotropyMap,lt=Se&&!!S.clearcoatMap,at=Se&&!!S.clearcoatNormalMap,ut=Se&&!!S.clearcoatRoughnessMap,St=_e&&!!S.iridescenceMap,ft=_e&&!!S.iridescenceThicknessMap,j=C&&!!S.sheenColorMap,Pt=C&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,At=!!S.specularColorMap,gt=!!S.specularIntensityMap,yt=E&&!!S.transmissionMap,Vt=E&&!!S.thicknessMap,se=!!S.gradientMap,U=!!S.alphaMap,pt=S.alphaTest>0,X=!!S.extensions,ht=!!W.attributes.uv1,mt=!!W.attributes.uv2,$t=!!W.attributes.uv3;return{isWebGL2:f,shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:rt,defines:S.defines,customVertexShaderID:vt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,instancing:Bt,instancingColor:Bt&&q.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:wn,map:Ct,matcap:we,envMap:qt,envMapMode:qt&&Q.mapping,envMapCubeUVHeight:nt,aoMap:z,lightMap:pe,bumpMap:wt,normalMap:Ot,displacementMap:v&&Nt,emissiveMap:oe,normalMapObjectSpace:Ot&&S.normalMapType===gg,normalMapTangentSpace:Ot&&S.normalMapType===mg,metalnessMap:Xt,roughnessMap:Ft,anisotropy:ae,anisotropyMap:Z,clearcoat:Se,clearcoatMap:lt,clearcoatNormalMap:at,clearcoatRoughnessMap:ut,iridescence:_e,iridescenceMap:St,iridescenceThicknessMap:ft,sheen:C,sheenColorMap:j,sheenRoughnessMap:Pt,specularMap:Mt,specularColorMap:At,specularIntensityMap:gt,transmission:E,transmissionMap:yt,thicknessMap:Vt,gradientMap:se,opaque:S.transparent===!1&&S.blending===vs,alphaMap:U,alphaTest:pt,combine:S.combine,mapUv:Ct&&M(S.map.channel),aoMapUv:z&&M(S.aoMap.channel),lightMapUv:pe&&M(S.lightMap.channel),bumpMapUv:wt&&M(S.bumpMap.channel),normalMapUv:Ot&&M(S.normalMap.channel),displacementMapUv:Nt&&M(S.displacementMap.channel),emissiveMapUv:oe&&M(S.emissiveMap.channel),metalnessMapUv:Xt&&M(S.metalnessMap.channel),roughnessMapUv:Ft&&M(S.roughnessMap.channel),anisotropyMapUv:Z&&M(S.anisotropyMap.channel),clearcoatMapUv:lt&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:j&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&M(S.sheenRoughnessMap.channel),specularMapUv:Mt&&M(S.specularMap.channel),specularColorMapUv:At&&M(S.specularColorMap.channel),specularIntensityMapUv:gt&&M(S.specularIntensityMap.channel),transmissionMapUv:yt&&M(S.transmissionMap.channel),thicknessMapUv:Vt&&M(S.thicknessMap.channel),alphaMapUv:U&&M(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ot||ae),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ht,vertexUv2s:mt,vertexUv3s:$t,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(Ct||U),fog:!!$,useFog:S.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:B,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&tt.length>0,shadowMapType:s.shadowMap.type,toneMapping:S.toneMapped?s.toneMapping:Bn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===On,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:X&&S.extensions.derivatives===!0,extensionFragDepth:X&&S.extensions.fragDepth===!0,extensionDrawBuffers:X&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){let L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(let tt in S.defines)L.push(tt),L.push(S.defines[tt]);return S.isRawShaderMaterial===!1&&(A(L,S),w(L,S),L.push(s.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function A(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function w(S,L){c.disableAll(),L.isWebGL2&&c.enable(0),L.supportsVertexTextures&&c.enable(1),L.instancing&&c.enable(2),L.instancingColor&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),S.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.skinning&&c.enable(4),L.morphTargets&&c.enable(5),L.morphNormals&&c.enable(6),L.morphColors&&c.enable(7),L.premultipliedAlpha&&c.enable(8),L.shadowMapEnabled&&c.enable(9),L.useLegacyLights&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),S.push(c.mask)}function I(S){let L=y[S.type],tt;if(L){let ct=yn[L];tt=qg.clone(ct.uniforms)}else tt=S.uniforms;return tt}function R(S,L){let tt;for(let ct=0,q=p.length;ct<q;ct++){let $=p[ct];if($.cacheKey===L){tt=$,++tt.usedTimes;break}}return tt===void 0&&(tt=new Kx(s,L,S,a),p.push(tt)),tt}function N(S){if(--S.usedTimes===0){let L=p.indexOf(S);p[L]=p[p.length-1],p.pop(),S.destroy()}}function O(S){d.remove(S)}function H(){d.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:I,acquireProgram:R,releaseProgram:N,releaseShaderCache:O,programs:p,dispose:H}}function Jx(){let s=new WeakMap;function t(a){let h=s.get(a);return h===void 0&&(h={},s.set(a,h)),h}function e(a){s.delete(a)}function i(a,h,c){s.get(a)[h]=c}function r(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function jx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function lu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cu(){let s=[],t=0,e=[],i=[],r=[];function a(){t=0,e.length=0,i.length=0,r.length=0}function h(g,v,x,y,M,_){let m=s[t];return m===void 0?(m={id:g.id,object:g,geometry:v,material:x,groupOrder:y,renderOrder:g.renderOrder,z:M,group:_},s[t]=m):(m.id=g.id,m.object=g,m.geometry=v,m.material=x,m.groupOrder=y,m.renderOrder=g.renderOrder,m.z=M,m.group=_),t++,m}function c(g,v,x,y,M,_){let m=h(g,v,x,y,M,_);x.transmission>0?i.push(m):x.transparent===!0?r.push(m):e.push(m)}function d(g,v,x,y,M,_){let m=h(g,v,x,y,M,_);x.transmission>0?i.unshift(m):x.transparent===!0?r.unshift(m):e.unshift(m)}function p(g,v){e.length>1&&e.sort(g||jx),i.length>1&&i.sort(v||lu),r.length>1&&r.sort(v||lu)}function f(){for(let g=t,v=s.length;g<v;g++){let x=s[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:r,init:a,push:c,unshift:d,finish:f,sort:p}}function Qx(){let s=new WeakMap;function t(i,r){let a=s.get(i),h;return a===void 0?(h=new cu,s.set(i,[h])):r>=a.length?(h=new cu,a.push(h)):h=a[r],h}function e(){s=new WeakMap}return{get:t,dispose:e}}function tb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Zt};break;case"SpotLight":e={position:new D,direction:new D,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function eb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var nb=0;function ib(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sb(s,t){let e=new tb,i=eb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new D);let a=new D,h=new le,c=new le;function d(f,g){let v=0,x=0,y=0;for(let tt=0;tt<9;tt++)r.probe[tt].set(0,0,0);let M=0,_=0,m=0,A=0,w=0,I=0,R=0,N=0,O=0,H=0;f.sort(ib);let S=g===!0?Math.PI:1;for(let tt=0,ct=f.length;tt<ct;tt++){let q=f[tt],$=q.color,W=q.intensity,Y=q.distance,Q=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)v+=$.r*W*S,x+=$.g*W*S,y+=$.b*W*S;else if(q.isLightProbe)for(let nt=0;nt<9;nt++)r.probe[nt].addScaledVector(q.sh.coefficients[nt],W);else if(q.isDirectionalLight){let nt=e.get(q);if(nt.color.copy(q.color).multiplyScalar(q.intensity*S),q.castShadow){let st=q.shadow,it=i.get(q);it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,r.directionalShadow[M]=it,r.directionalShadowMap[M]=Q,r.directionalShadowMatrix[M]=q.shadow.matrix,I++}r.directional[M]=nt,M++}else if(q.isSpotLight){let nt=e.get(q);nt.position.setFromMatrixPosition(q.matrixWorld),nt.color.copy($).multiplyScalar(W*S),nt.distance=Y,nt.coneCos=Math.cos(q.angle),nt.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),nt.decay=q.decay,r.spot[m]=nt;let st=q.shadow;if(q.map&&(r.spotLightMap[O]=q.map,O++,st.updateMatrices(q),q.castShadow&&H++),r.spotLightMatrix[m]=st.matrix,q.castShadow){let it=i.get(q);it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,r.spotShadow[m]=it,r.spotShadowMap[m]=Q,N++}m++}else if(q.isRectAreaLight){let nt=e.get(q);nt.color.copy($).multiplyScalar(W),nt.halfWidth.set(q.width*.5,0,0),nt.halfHeight.set(0,q.height*.5,0),r.rectArea[A]=nt,A++}else if(q.isPointLight){let nt=e.get(q);if(nt.color.copy(q.color).multiplyScalar(q.intensity*S),nt.distance=q.distance,nt.decay=q.decay,q.castShadow){let st=q.shadow,it=i.get(q);it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,it.shadowCameraNear=st.camera.near,it.shadowCameraFar=st.camera.far,r.pointShadow[_]=it,r.pointShadowMap[_]=Q,r.pointShadowMatrix[_]=q.shadow.matrix,R++}r.point[_]=nt,_++}else if(q.isHemisphereLight){let nt=e.get(q);nt.skyColor.copy(q.color).multiplyScalar(W*S),nt.groundColor.copy(q.groundColor).multiplyScalar(W*S),r.hemi[w]=nt,w++}}A>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=dt.LTC_FLOAT_1,r.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=dt.LTC_HALF_1,r.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=y;let L=r.hash;(L.directionalLength!==M||L.pointLength!==_||L.spotLength!==m||L.rectAreaLength!==A||L.hemiLength!==w||L.numDirectionalShadows!==I||L.numPointShadows!==R||L.numSpotShadows!==N||L.numSpotMaps!==O)&&(r.directional.length=M,r.spot.length=m,r.rectArea.length=A,r.point.length=_,r.hemi.length=w,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+O-H,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=H,L.directionalLength=M,L.pointLength=_,L.spotLength=m,L.rectAreaLength=A,L.hemiLength=w,L.numDirectionalShadows=I,L.numPointShadows=R,L.numSpotShadows=N,L.numSpotMaps=O,r.version=nb++)}function p(f,g){let v=0,x=0,y=0,M=0,_=0,m=g.matrixWorldInverse;for(let A=0,w=f.length;A<w;A++){let I=f[A];if(I.isDirectionalLight){let R=r.directional[v];R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(m),v++}else if(I.isSpotLight){let R=r.spot[y];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(m),y++}else if(I.isRectAreaLight){let R=r.rectArea[M];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(m),c.identity(),h.copy(I.matrixWorld),h.premultiply(m),c.extractRotation(h),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(I.isPointLight){let R=r.point[x];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(m),x++}else if(I.isHemisphereLight){let R=r.hemi[_];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(m),_++}}}return{setup:d,setupView:p,state:r}}function hu(s,t){let e=new sb(s,t),i=[],r=[];function a(){i.length=0,r.length=0}function h(g){i.push(g)}function c(g){r.push(g)}function d(g){e.setup(i,g)}function p(g){e.setupView(i,g)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:d,setupLightsView:p,pushLight:h,pushShadow:c}}function rb(s,t){let e=new WeakMap;function i(a,h=0){let c=e.get(a),d;return c===void 0?(d=new hu(s,t),e.set(a,[d])):h>=c.length?(d=new hu(s,t),c.push(d)):d=c[h],d}function r(){e=new WeakMap}return{get:i,dispose:r}}var rl=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lb(s,t,e){let i=new Ss,r=new ie,a=new ie,h=new ye,c=new rl({depthPacking:fg}),d=new ol,p={},f=e.maxTextureSize,g={[di]:Ye,[Ye]:di,[On]:On},v=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),x=v.clone();x.defines.HORIZONTAL_PASS=1;let y=new $e;y.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new cn(y,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let m=this.type;this.render=function(R,N,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;let H=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),tt=s.state;tt.setBlending(hi),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let ct=m!==Nn&&this.type===Nn,q=m===Nn&&this.type!==Nn;for(let $=0,W=R.length;$<W;$++){let Y=R[$],Q=Y.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);let nt=Q.getFrameExtents();if(r.multiply(nt),a.copy(Q.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/nt.x),r.x=a.x*nt.x,Q.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/nt.y),r.y=a.y*nt.y,Q.mapSize.y=a.y)),Q.map===null||ct===!0||q===!0){let it=this.type!==Nn?{minFilter:Ve,magFilter:Ve}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Vn(r.x,r.y,it),Q.map.texture.name=Y.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();let st=Q.getViewportCount();for(let it=0;it<st;it++){let bt=Q.getViewport(it);h.set(a.x*bt.x,a.y*bt.y,a.x*bt.z,a.y*bt.w),tt.viewport(h),Q.updateMatrices(Y,it),i=Q.getFrustum(),I(N,O,Q.camera,Y,this.type)}Q.isPointLightShadow!==!0&&this.type===Nn&&A(Q,O),Q.needsUpdate=!1}m=this.type,_.needsUpdate=!1,s.setRenderTarget(H,S,L)};function A(R,N){let O=t.update(M);v.defines.VSM_SAMPLES!==R.blurSamples&&(v.defines.VSM_SAMPLES=R.blurSamples,x.defines.VSM_SAMPLES=R.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vn(r.x,r.y)),v.uniforms.shadow_pass.value=R.map.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(N,null,O,v,M,null),x.uniforms.shadow_pass.value=R.mapPass.texture,x.uniforms.resolution.value=R.mapSize,x.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(N,null,O,x,M,null)}function w(R,N,O,H){let S=null,L=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=O.isPointLight===!0?d:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let tt=S.uuid,ct=N.uuid,q=p[tt];q===void 0&&(q={},p[tt]=q);let $=q[ct];$===void 0&&($=S.clone(),q[ct]=$),S=$}if(S.visible=N.visible,S.wireframe=N.wireframe,H===Nn?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:g[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let tt=s.properties.get(S);tt.light=O}return S}function I(R,N,O,H,S){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Nn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let ct=t.update(R),q=R.material;if(Array.isArray(q)){let $=ct.groups;for(let W=0,Y=$.length;W<Y;W++){let Q=$[W],nt=q[Q.materialIndex];if(nt&&nt.visible){let st=w(R,nt,H,S);s.renderBufferDirect(O,null,ct,st,R,Q)}}}else if(q.visible){let $=w(R,q,H,S);s.renderBufferDirect(O,null,ct,$,R,null)}}let tt=R.children;for(let ct=0,q=tt.length;ct<q;ct++)I(tt[ct],N,O,H,S)}}function cb(s,t,e){let i=e.isWebGL2;function r(){let U=!1,pt=new ye,X=null,ht=new ye(0,0,0,0);return{setMask:function(mt){X!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),X=mt)},setLocked:function(mt){U=mt},setClear:function(mt,$t,he,Qt,un){un===!0&&(mt*=Qt,$t*=Qt,he*=Qt),pt.set(mt,$t,he,Qt),ht.equals(pt)===!1&&(s.clearColor(mt,$t,he,Qt),ht.copy(pt))},reset:function(){U=!1,X=null,ht.set(-1,0,0,0)}}}function a(){let U=!1,pt=null,X=null,ht=null;return{setTest:function(mt){mt?Rt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(mt){pt!==mt&&!U&&(s.depthMask(mt),pt=mt)},setFunc:function(mt){if(X!==mt){switch(mt){case Gm:s.depthFunc(s.NEVER);break;case Wm:s.depthFunc(s.ALWAYS);break;case Xm:s.depthFunc(s.LESS);break;case za:s.depthFunc(s.LEQUAL);break;case qm:s.depthFunc(s.EQUAL);break;case Ym:s.depthFunc(s.GEQUAL);break;case Km:s.depthFunc(s.GREATER);break;case $m:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=mt}},setLocked:function(mt){U=mt},setClear:function(mt){ht!==mt&&(s.clearDepth(mt),ht=mt)},reset:function(){U=!1,pt=null,X=null,ht=null}}}function h(){let U=!1,pt=null,X=null,ht=null,mt=null,$t=null,he=null,Qt=null,un=null;return{setTest:function(te){U||(te?Rt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(te){pt!==te&&!U&&(s.stencilMask(te),pt=te)},setFunc:function(te,nn,xe){(X!==te||ht!==nn||mt!==xe)&&(s.stencilFunc(te,nn,xe),X=te,ht=nn,mt=xe)},setOp:function(te,nn,xe){($t!==te||he!==nn||Qt!==xe)&&(s.stencilOp(te,nn,xe),$t=te,he=nn,Qt=xe)},setLocked:function(te){U=te},setClear:function(te){un!==te&&(s.clearStencil(te),un=te)},reset:function(){U=!1,pt=null,X=null,ht=null,mt=null,$t=null,he=null,Qt=null,un=null}}}let c=new r,d=new a,p=new h,f=new WeakMap,g=new WeakMap,v={},x={},y=new WeakMap,M=[],_=null,m=!1,A=null,w=null,I=null,R=null,N=null,O=null,H=null,S=!1,L=null,tt=null,ct=null,q=null,$=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,Q=0,nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Y=Q>=1):nt.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Y=Q>=2);let st=null,it={},bt=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),et=new ye().fromArray(bt),rt=new ye().fromArray(B);function vt(U,pt,X,ht){let mt=new Uint8Array(4),$t=s.createTexture();s.bindTexture(U,$t),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let he=0;he<X;he++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(pt,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(pt+he,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return $t}let _t={};_t[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_t[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Rt(s.DEPTH_TEST),d.setFunc(za),Nt(!1),oe(Yc),Rt(s.CULL_FACE),wt(hi);function Rt(U){v[U]!==!0&&(s.enable(U),v[U]=!0)}function Bt(U){v[U]!==!1&&(s.disable(U),v[U]=!1)}function Ct(U,pt){return x[U]!==pt?(s.bindFramebuffer(U,pt),x[U]=pt,i&&(U===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=pt),U===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=pt)),!0):!1}function we(U,pt){let X=M,ht=!1;if(U)if(X=y.get(pt),X===void 0&&(X=[],y.set(pt,X)),U.isWebGLMultipleRenderTargets){let mt=U.texture;if(X.length!==mt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let $t=0,he=mt.length;$t<he;$t++)X[$t]=s.COLOR_ATTACHMENT0+$t;X.length=mt.length,ht=!0}}else X[0]!==s.COLOR_ATTACHMENT0&&(X[0]=s.COLOR_ATTACHMENT0,ht=!0);else X[0]!==s.BACK&&(X[0]=s.BACK,ht=!0);ht&&(e.isWebGL2?s.drawBuffers(X):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function qt(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let z={[ms]:s.FUNC_ADD,[Im]:s.FUNC_SUBTRACT,[Dm]:s.FUNC_REVERSE_SUBTRACT};if(i)z[Jc]=s.MIN,z[jc]=s.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(z[Jc]=U.MIN_EXT,z[jc]=U.MAX_EXT)}let pe={[Nm]:s.ZERO,[Um]:s.ONE,[Om]:s.SRC_COLOR,[bu]:s.SRC_ALPHA,[Hm]:s.SRC_ALPHA_SATURATE,[Vm]:s.DST_COLOR,[km]:s.DST_ALPHA,[Fm]:s.ONE_MINUS_SRC_COLOR,[yu]:s.ONE_MINUS_SRC_ALPHA,[zm]:s.ONE_MINUS_DST_COLOR,[Bm]:s.ONE_MINUS_DST_ALPHA};function wt(U,pt,X,ht,mt,$t,he,Qt){if(U===hi){m===!0&&(Bt(s.BLEND),m=!1);return}if(m===!1&&(Rt(s.BLEND),m=!0),U!==Lm){if(U!==A||Qt!==S){if((w!==ms||N!==ms)&&(s.blendEquation(s.FUNC_ADD),w=ms,N=ms),Qt)switch(U){case vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kc:s.blendFunc(s.ONE,s.ONE);break;case $c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}I=null,R=null,O=null,H=null,A=U,S=Qt}return}mt=mt||pt,$t=$t||X,he=he||ht,(pt!==w||mt!==N)&&(s.blendEquationSeparate(z[pt],z[mt]),w=pt,N=mt),(X!==I||ht!==R||$t!==O||he!==H)&&(s.blendFuncSeparate(pe[X],pe[ht],pe[$t],pe[he]),I=X,R=ht,O=$t,H=he),A=U,S=!1}function Ot(U,pt){U.side===On?Bt(s.CULL_FACE):Rt(s.CULL_FACE);let X=U.side===Ye;pt&&(X=!X),Nt(X),U.blending===vs&&U.transparent===!1?wt(hi):wt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),d.setFunc(U.depthFunc),d.setTest(U.depthTest),d.setMask(U.depthWrite),c.setMask(U.colorWrite);let ht=U.stencilWrite;p.setTest(ht),ht&&(p.setMask(U.stencilWriteMask),p.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),p.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){L!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),L=U)}function oe(U){U!==Cm?(Rt(s.CULL_FACE),U!==tt&&(U===Yc?s.cullFace(s.BACK):U===Pm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),tt=U}function Xt(U){U!==ct&&(Y&&s.lineWidth(U),ct=U)}function Ft(U,pt,X){U?(Rt(s.POLYGON_OFFSET_FILL),(q!==pt||$!==X)&&(s.polygonOffset(pt,X),q=pt,$=X)):Bt(s.POLYGON_OFFSET_FILL)}function ae(U){U?Rt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function Se(U){U===void 0&&(U=s.TEXTURE0+W-1),st!==U&&(s.activeTexture(U),st=U)}function _e(U,pt,X){X===void 0&&(st===null?X=s.TEXTURE0+W-1:X=st);let ht=it[X];ht===void 0&&(ht={type:void 0,texture:void 0},it[X]=ht),(ht.type!==U||ht.texture!==pt)&&(st!==X&&(s.activeTexture(X),st=X),s.bindTexture(U,pt||_t[U]),ht.type=U,ht.texture=pt)}function C(){let U=it[st];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(U){et.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function gt(U){rt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),rt.copy(U))}function yt(U,pt){let X=g.get(pt);X===void 0&&(X=new WeakMap,g.set(pt,X));let ht=X.get(U);ht===void 0&&(ht=s.getUniformBlockIndex(pt,U.name),X.set(U,ht))}function Vt(U,pt){let ht=g.get(pt).get(U);f.get(pt)!==ht&&(s.uniformBlockBinding(pt,ht,U.__bindingPointIndex),f.set(pt,ht))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},st=null,it={},x={},y=new WeakMap,M=[],_=null,m=!1,A=null,w=null,I=null,R=null,N=null,O=null,H=null,S=!1,L=null,tt=null,ct=null,q=null,$=null,et.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Rt,disable:Bt,bindFramebuffer:Ct,drawBuffers:we,useProgram:qt,setBlending:wt,setMaterial:Ot,setFlipSided:Nt,setCullFace:oe,setLineWidth:Xt,setPolygonOffset:Ft,setScissorTest:ae,activeTexture:Se,bindTexture:_e,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:Pt,texImage3D:Mt,updateUBOMapping:yt,uniformBlockBinding:Vt,texStorage2D:ft,texStorage3D:j,texSubImage2D:lt,texSubImage3D:at,compressedTexSubImage2D:ut,compressedTexSubImage3D:St,scissor:At,viewport:gt,reset:se}}function hb(s,t,e,i,r,a,h){let c=r.isWebGL2,d=r.maxTextures,p=r.maxCubemapSize,f=r.maxTextureSize,g=r.maxSamples,v=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap,M,_=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function A(C,E){return m?new OffscreenCanvas(C,E):ho("canvas")}function w(C,E,Z,lt){let at=1;if((C.width>lt||C.height>lt)&&(at=lt/Math.max(C.width,C.height)),at<1||E===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let ut=E?Ka:Math.floor,St=ut(at*C.width),ft=ut(at*C.height);M===void 0&&(M=A(St,ft));let j=Z?A(St,ft):M;return j.width=St,j.height=ft,j.getContext("2d").drawImage(C,0,0,St,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+St+"x"+ft+")."),j}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function I(C){return Ch(C.width)&&Ch(C.height)}function R(C){return c?!1:C.wrapS!==gn||C.wrapT!==gn||C.minFilter!==Ve&&C.minFilter!==ln}function N(C,E){return C.generateMipmaps&&E&&C.minFilter!==Ve&&C.minFilter!==ln}function O(C){s.generateMipmap(C)}function H(C,E,Z,lt,at=!1){if(c===!1)return E;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut=E;return E===s.RED&&(Z===s.FLOAT&&(ut=s.R32F),Z===s.HALF_FLOAT&&(ut=s.R16F),Z===s.UNSIGNED_BYTE&&(ut=s.R8)),E===s.RG&&(Z===s.FLOAT&&(ut=s.RG32F),Z===s.HALF_FLOAT&&(ut=s.RG16F),Z===s.UNSIGNED_BYTE&&(ut=s.RG8)),E===s.RGBA&&(Z===s.FLOAT&&(ut=s.RGBA32F),Z===s.HALF_FLOAT&&(ut=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ut=lt===zt&&at===!1?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)),(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function S(C,E,Z){return N(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==ln?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function L(C){return C===Ve||C===Qc||C===ha?s.NEAREST:s.LINEAR}function tt(C){let E=C.target;E.removeEventListener("dispose",tt),q(E),E.isVideoTexture&&y.delete(E)}function ct(C){let E=C.target;E.removeEventListener("dispose",ct),W(E)}function q(C){let E=i.get(C);if(E.__webglInit===void 0)return;let Z=C.source,lt=_.get(Z);if(lt){let at=lt[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&$(C),Object.keys(lt).length===0&&_.delete(Z)}i.remove(C)}function $(C){let E=i.get(C);s.deleteTexture(E.__webglTexture);let Z=C.source,lt=_.get(Z);delete lt[E.__cacheKey],h.memory.textures--}function W(C){let E=C.texture,Z=i.get(C),lt=i.get(E);if(lt.__webglTexture!==void 0&&(s.deleteTexture(lt.__webglTexture),h.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let at=0;at<6;at++)s.deleteFramebuffer(Z.__webglFramebuffer[at]),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[at]);else{if(s.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let at=0;at<Z.__webglColorRenderbuffer.length;at++)Z.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[at]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let at=0,ut=E.length;at<ut;at++){let St=i.get(E[at]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),h.memory.textures--),i.remove(E[at])}i.remove(E),i.remove(C)}let Y=0;function Q(){Y=0}function nt(){let C=Y;return C>=d&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+d),Y+=1,C}function st(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function it(C,E){let Z=i.get(C);if(C.isVideoTexture&&Se(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){let lt=C.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(Z,C,E);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function bt(C,E){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){Ct(Z,C,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function B(C,E){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){Ct(Z,C,E);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function et(C,E){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){we(Z,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}let rt={[Wa]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Xa]:s.MIRRORED_REPEAT},vt={[Ve]:s.NEAREST,[Qc]:s.NEAREST_MIPMAP_NEAREST,[ha]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[ig]:s.LINEAR_MIPMAP_NEAREST,[hr]:s.LINEAR_MIPMAP_LINEAR},_t={[_g]:s.NEVER,[Sg]:s.ALWAYS,[xg]:s.LESS,[yg]:s.LEQUAL,[bg]:s.EQUAL,[Eg]:s.GEQUAL,[wg]:s.GREATER,[Mg]:s.NOTEQUAL};function Rt(C,E,Z){if(Z?(s.texParameteri(C,s.TEXTURE_WRAP_S,rt[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,rt[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,rt[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,vt[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,vt[E.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==gn||E.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,L(E.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Ve&&E.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,_t[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ve||E.minFilter!==ha&&E.minFilter!==hr||E.type===ci&&t.has("OES_texture_float_linear")===!1||c===!1&&E.type===ur&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(s.texParameterf(C,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Bt(C,E){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",tt));let lt=E.source,at=_.get(lt);at===void 0&&(at={},_.set(lt,at));let ut=st(E);if(ut!==C.__cacheKey){at[ut]===void 0&&(at[ut]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),at[ut].usedTimes++;let St=at[C.__cacheKey];St!==void 0&&(at[C.__cacheKey].usedTimes--,St.usedTimes===0&&$(E)),C.__cacheKey=ut,C.__webglTexture=at[ut].texture}return Z}function Ct(C,E,Z){let lt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=s.TEXTURE_3D);let at=Bt(C,E),ut=E.source;e.bindTexture(lt,C.__webglTexture,s.TEXTURE0+Z);let St=i.get(ut);if(ut.version!==St.__version||at===!0){e.activeTexture(s.TEXTURE0+Z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);let ft=R(E)&&I(E.image)===!1,j=w(E.image,ft,!1,f);j=_e(E,j);let Pt=I(j)||c,Mt=a.convert(E.format,E.colorSpace),At=a.convert(E.type),gt=H(E.internalFormat,Mt,At,E.colorSpace);Rt(lt,E,Pt);let yt,Vt=E.mipmaps,se=c&&E.isVideoTexture!==!0,U=St.__version===void 0||at===!0,pt=S(E,j,Pt);if(E.isDepthTexture)gt=s.DEPTH_COMPONENT,c?E.type===ci?gt=s.DEPTH_COMPONENT32F:E.type===li?gt=s.DEPTH_COMPONENT24:E.type===Pi?gt=s.DEPTH24_STENCIL8:gt=s.DEPTH_COMPONENT16:E.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ri&&gt===s.DEPTH_COMPONENT&&E.type!==wl&&E.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=li,At=a.convert(E.type)),E.format===ws&&gt===s.DEPTH_COMPONENT&&(gt=s.DEPTH_STENCIL,E.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Pi,At=a.convert(E.type))),U&&(se?e.texStorage2D(s.TEXTURE_2D,1,gt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,gt,j.width,j.height,0,Mt,At,null));else if(E.isDataTexture)if(Vt.length>0&&Pt){se&&U&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Vt[0].width,Vt[0].height);for(let X=0,ht=Vt.length;X<ht;X++)yt=Vt[X],se?e.texSubImage2D(s.TEXTURE_2D,X,0,0,yt.width,yt.height,Mt,At,yt.data):e.texImage2D(s.TEXTURE_2D,X,gt,yt.width,yt.height,0,Mt,At,yt.data);E.generateMipmaps=!1}else se?(U&&e.texStorage2D(s.TEXTURE_2D,pt,gt,j.width,j.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,Mt,At,j.data)):e.texImage2D(s.TEXTURE_2D,0,gt,j.width,j.height,0,Mt,At,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&U&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,Vt[0].width,Vt[0].height,j.depth);for(let X=0,ht=Vt.length;X<ht;X++)yt=Vt[X],E.format!==vn?Mt!==null?se?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,j.depth,Mt,yt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,gt,yt.width,yt.height,j.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,j.depth,Mt,At,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,gt,yt.width,yt.height,j.depth,0,Mt,At,yt.data)}else{se&&U&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Vt[0].width,Vt[0].height);for(let X=0,ht=Vt.length;X<ht;X++)yt=Vt[X],E.format!==vn?Mt!==null?se?e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,gt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?e.texSubImage2D(s.TEXTURE_2D,X,0,0,yt.width,yt.height,Mt,At,yt.data):e.texImage2D(s.TEXTURE_2D,X,gt,yt.width,yt.height,0,Mt,At,yt.data)}else if(E.isDataArrayTexture)se?(U&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,gt,j.width,j.height,j.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Mt,At,j.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,j.width,j.height,j.depth,0,Mt,At,j.data);else if(E.isData3DTexture)se?(U&&e.texStorage3D(s.TEXTURE_3D,pt,gt,j.width,j.height,j.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Mt,At,j.data)):e.texImage3D(s.TEXTURE_3D,0,gt,j.width,j.height,j.depth,0,Mt,At,j.data);else if(E.isFramebufferTexture){if(U)if(se)e.texStorage2D(s.TEXTURE_2D,pt,gt,j.width,j.height);else{let X=j.width,ht=j.height;for(let mt=0;mt<pt;mt++)e.texImage2D(s.TEXTURE_2D,mt,gt,X,ht,0,Mt,At,null),X>>=1,ht>>=1}}else if(Vt.length>0&&Pt){se&&U&&e.texStorage2D(s.TEXTURE_2D,pt,gt,Vt[0].width,Vt[0].height);for(let X=0,ht=Vt.length;X<ht;X++)yt=Vt[X],se?e.texSubImage2D(s.TEXTURE_2D,X,0,0,Mt,At,yt):e.texImage2D(s.TEXTURE_2D,X,gt,Mt,At,yt);E.generateMipmaps=!1}else se?(U&&e.texStorage2D(s.TEXTURE_2D,pt,gt,j.width,j.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,At,j)):e.texImage2D(s.TEXTURE_2D,0,gt,Mt,At,j);N(E,Pt)&&O(lt),St.__version=ut.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function we(C,E,Z){if(E.image.length!==6)return;let lt=Bt(C,E),at=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Z);let ut=i.get(at);if(at.version!==ut.__version||lt===!0){e.activeTexture(s.TEXTURE0+Z),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);let St=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,j=[];for(let X=0;X<6;X++)!St&&!ft?j[X]=w(E.image[X],!1,!0,p):j[X]=ft?E.image[X].image:E.image[X],j[X]=_e(E,j[X]);let Pt=j[0],Mt=I(Pt)||c,At=a.convert(E.format,E.colorSpace),gt=a.convert(E.type),yt=H(E.internalFormat,At,gt,E.colorSpace),Vt=c&&E.isVideoTexture!==!0,se=ut.__version===void 0||lt===!0,U=S(E,Pt,Mt);Rt(s.TEXTURE_CUBE_MAP,E,Mt);let pt;if(St){Vt&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,U,yt,Pt.width,Pt.height);for(let X=0;X<6;X++){pt=j[X].mipmaps;for(let ht=0;ht<pt.length;ht++){let mt=pt[ht];E.format!==vn?At!==null?Vt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,0,0,mt.width,mt.height,At,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,yt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,0,0,mt.width,mt.height,At,gt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht,yt,mt.width,mt.height,0,At,gt,mt.data)}}}else{pt=E.mipmaps,Vt&&se&&(pt.length>0&&U++,e.texStorage2D(s.TEXTURE_CUBE_MAP,U,yt,j[0].width,j[0].height));for(let X=0;X<6;X++)if(ft){Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,j[X].width,j[X].height,At,gt,j[X].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,yt,j[X].width,j[X].height,0,At,gt,j[X].data);for(let ht=0;ht<pt.length;ht++){let $t=pt[ht].image[X].image;Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,0,0,$t.width,$t.height,At,gt,$t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,yt,$t.width,$t.height,0,At,gt,$t.data)}}else{Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,At,gt,j[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,yt,At,gt,j[X]);for(let ht=0;ht<pt.length;ht++){let mt=pt[ht];Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,0,0,At,gt,mt.image[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ht+1,yt,At,gt,mt.image[X])}}}N(E,Mt)&&O(s.TEXTURE_CUBE_MAP),ut.__version=at.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function qt(C,E,Z,lt,at){let ut=a.convert(Z.format,Z.colorSpace),St=a.convert(Z.type),ft=H(Z.internalFormat,ut,St,Z.colorSpace);i.get(E).__hasExternalTextures||(at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,0,ft,E.width,E.height,E.depth,0,ut,St,null):e.texImage2D(at,0,ft,E.width,E.height,0,ut,St,null)),e.bindFramebuffer(s.FRAMEBUFFER,C),ae(E)?v.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,at,i.get(Z).__webglTexture,0,Ft(E)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,at,i.get(Z).__webglTexture,0),e.bindFramebuffer(s.FRAMEBUFFER,null)}function z(C,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let lt=s.DEPTH_COMPONENT16;if(Z||ae(E)){let at=E.depthTexture;at&&at.isDepthTexture&&(at.type===ci?lt=s.DEPTH_COMPONENT32F:at.type===li&&(lt=s.DEPTH_COMPONENT24));let ut=Ft(E);ae(E)?v.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,lt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,lt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,lt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){let lt=Ft(E);Z&&ae(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,s.DEPTH24_STENCIL8,E.width,E.height):ae(E)?v.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let lt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let at=0;at<lt.length;at++){let ut=lt[at],St=a.convert(ut.format,ut.colorSpace),ft=a.convert(ut.type),j=H(ut.internalFormat,St,ft,ut.colorSpace),Pt=Ft(E);Z&&ae(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,j,E.width,E.height):ae(E)?v.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,j,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,j,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),it(E.depthTexture,0);let lt=i.get(E.depthTexture).__webglTexture,at=Ft(E);if(E.depthTexture.format===Ri)ae(E)?v.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0);else if(E.depthTexture.format===ws)ae(E)?v.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function wt(C){let E=i.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,C)}else if(Z){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]=s.createRenderbuffer(),z(E.__webglDepthbuffer[lt],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),z(E.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,E,Z){let lt=i.get(C);E!==void 0&&qt(lt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),Z!==void 0&&wt(C)}function Nt(C){let E=C.texture,Z=i.get(C),lt=i.get(E);C.addEventListener("dispose",ct),C.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=E.version,h.memory.textures++);let at=C.isWebGLCubeRenderTarget===!0,ut=C.isWebGLMultipleRenderTargets===!0,St=I(C)||c;if(at){Z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)Z.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(Z.__webglFramebuffer=s.createFramebuffer(),ut)if(r.drawBuffers){let ft=C.texture;for(let j=0,Pt=ft.length;j<Pt;j++){let Mt=i.get(ft[j]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&ae(C)===!1){let ft=ut?E:[E];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let j=0;j<ft.length;j++){let Pt=ft[j];Z.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[j]);let Mt=a.convert(Pt.format,Pt.colorSpace),At=a.convert(Pt.type),gt=H(Pt.internalFormat,Mt,At,Pt.colorSpace,C.isXRRenderTarget===!0),yt=Ft(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,gt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,Z.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),z(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,E,St);for(let ft=0;ft<6;ft++)qt(Z.__webglFramebuffer[ft],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft);N(E,St)&&O(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){let ft=C.texture;for(let j=0,Pt=ft.length;j<Pt;j++){let Mt=ft[j],At=i.get(Mt);e.bindTexture(s.TEXTURE_2D,At.__webglTexture),Rt(s.TEXTURE_2D,Mt,St),qt(Z.__webglFramebuffer,C,Mt,s.COLOR_ATTACHMENT0+j,s.TEXTURE_2D),N(Mt,St)&&O(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?ft=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,lt.__webglTexture),Rt(ft,E,St),qt(Z.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,ft),N(E,St)&&O(ft),e.unbindTexture()}C.depthBuffer&&wt(C)}function oe(C){let E=I(C)||c,Z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let lt=0,at=Z.length;lt<at;lt++){let ut=Z[lt];if(N(ut,E)){let St=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ft=i.get(ut).__webglTexture;e.bindTexture(St,ft),O(St),e.unbindTexture()}}}function Xt(C){if(c&&C.samples>0&&ae(C)===!1){let E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Z=C.width,lt=C.height,at=s.COLOR_BUFFER_BIT,ut=[],St=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=i.get(C),j=C.isWebGLMultipleRenderTargets===!0;if(j)for(let Pt=0;Pt<E.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){ut.push(s.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&ut.push(St);let Mt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(Mt===!1&&(C.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),j&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Pt]),Mt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[St]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[St])),j){let At=i.get(E[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,Z,lt,0,0,Z,lt,at,s.NEAREST),x&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let Pt=0;Pt<E.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Pt]);let Mt=i.get(E[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,Mt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function Ft(C){return Math.min(g,C.samples)}function ae(C){let E=i.get(C);return c&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(C){let E=h.render.frame;y.get(C)!==E&&(y.set(C,E),C.update())}function _e(C,E){let Z=C.colorSpace,lt=C.format,at=C.type;return C.isCompressedTexture===!0||C.format===qa||Z!==wn&&Z!==Ii&&(Z===zt?c===!1?t.has("EXT_sRGB")===!0&&lt===vn?(C.format=qa,C.minFilter=ln,C.generateMipmaps=!1):E=uo.sRGBToLinear(E):(lt!==vn||at!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}this.allocateTextureUnit=nt,this.resetTextureUnits=Q,this.setTexture2D=it,this.setTexture2DArray=bt,this.setTexture3D=B,this.setTextureCube=et,this.rebindTextures=Ot,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=qt,this.useMultisampledRTT=ae}function ub(s,t,e){let i=e.isWebGL2;function r(a,h=Ii){let c;if(a===ui)return s.UNSIGNED_BYTE;if(a===Su)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Tu)return s.UNSIGNED_SHORT_5_5_5_1;if(a===sg)return s.BYTE;if(a===rg)return s.SHORT;if(a===wl)return s.UNSIGNED_SHORT;if(a===Eu)return s.INT;if(a===li)return s.UNSIGNED_INT;if(a===ci)return s.FLOAT;if(a===ur)return i?s.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===og)return s.ALPHA;if(a===vn)return s.RGBA;if(a===ag)return s.LUMINANCE;if(a===lg)return s.LUMINANCE_ALPHA;if(a===Ri)return s.DEPTH_COMPONENT;if(a===ws)return s.DEPTH_STENCIL;if(a===qa)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===cg)return s.RED;if(a===Au)return s.RED_INTEGER;if(a===hg)return s.RG;if(a===Cu)return s.RG_INTEGER;if(a===Pu)return s.RGBA_INTEGER;if(a===ua||a===da||a===pa||a===fa)if(h===zt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ua)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===da)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===pa)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===fa)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ua)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===da)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===pa)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===fa)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===th||a===eh||a===nh||a===ih)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ih)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ug)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===sh||a===rh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===sh)return h===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===rh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===oh||a===ah||a===lh||a===ch||a===hh||a===uh||a===dh||a===ph||a===fh||a===mh||a===gh||a===vh||a===_h||a===xh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===oh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ah)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ch)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===hh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===uh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===dh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ph)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===fh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===mh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===gh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_h)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xh)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ma)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===ma)return h===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===dg||a===bh||a===yh||a===wh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===ma)return c.COMPRESSED_RED_RGTC1_EXT;if(a===bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===yh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pi?i?s.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}var al=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},kn=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},db={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,h=null,c=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(let M of t.hand.values()){let _=e.getJointPose(M,i),m=this._getHandJoint(p,M);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let f=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=f.position.distanceTo(g.position),x=.02,y=.005;p.inputState.pinching&&v>x+y?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-y&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(db)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ll=class extends He{constructor(t,e,i,r,a,h,c,d,p,f){if(f=f!==void 0?f:Ri,f!==Ri&&f!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ri&&(i=li),i===void 0&&f===ws&&(i=Pi),super(null,r,a,h,c,d,f,i,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:Ve,this.minFilter=d!==void 0?d:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cl=class extends ue{constructor(t,e){super();let i=this,r=null,a=1,h=null,c="local-floor",d=1,p=null,f=null,g=null,v=null,x=null,y=null,M=e.getContextAttributes(),_=null,m=null,A=[],w=[],I=null,R=new Ie;R.layers.enable(1),R.viewport=new ye;let N=new Ie;N.layers.enable(2),N.viewport=new ye;let O=[R,N],H=new al;H.layers.enable(1),H.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(B){I=B},this.getController=function(B){let et=A[B];return et===void 0&&(et=new cr,A[B]=et),et.getTargetRaySpace()},this.getControllerGrip=function(B){let et=A[B];return et===void 0&&(et=new cr,A[B]=et),et.getGripSpace()},this.getHand=function(B){let et=A[B];return et===void 0&&(et=new cr,A[B]=et),et.getHandSpace()};function tt(B){let et=w.indexOf(B.inputSource);if(et===-1)return;let rt=A[et];rt!==void 0&&(rt.update(B.inputSource,B.frame,p||h),rt.dispatchEvent({type:B.type,data:B.inputSource}))}function ct(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",ct),r.removeEventListener("inputsourceschange",q);for(let B=0;B<A.length;B++){let et=w[B];et!==null&&(w[B]=null,A[B].disconnect(et))}S=null,L=null,t.setRenderTarget(_),x=null,v=null,g=null,r=null,m=null,bt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){c=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(B){p=B},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=function(B){return qc(this,null,function*(){if(r=B,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",ct),r.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&(yield e.makeXRCompatible()),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:x}),m=new Vn(x.framebufferWidth,x.framebufferHeight,{format:vn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let et=null,rt=null,vt=null;M.depth&&(vt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=M.stencil?ws:Ri,rt=M.stencil?Pi:li);let _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:a};g=new XRWebGLBinding(r,e),v=g.createProjectionLayer(_t),r.updateRenderState({layers:[v]}),m=new Vn(v.textureWidth,v.textureHeight,{format:vn,type:ui,depthTexture:new ll(v.textureWidth,v.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});let Rt=t.properties.get(m);Rt.__ignoreDepthValues=v.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(d),p=null,h=yield r.requestReferenceSpace(c),bt.setContext(r),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(B){for(let et=0;et<B.removed.length;et++){let rt=B.removed[et],vt=w.indexOf(rt);vt>=0&&(w[vt]=null,A[vt].disconnect(rt))}for(let et=0;et<B.added.length;et++){let rt=B.added[et],vt=w.indexOf(rt);if(vt===-1){for(let Rt=0;Rt<A.length;Rt++)if(Rt>=w.length){w.push(rt),vt=Rt;break}else if(w[Rt]===null){w[Rt]=rt,vt=Rt;break}if(vt===-1)break}let _t=A[vt];_t&&_t.connect(rt)}}let $=new D,W=new D;function Y(B,et,rt){$.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(rt.matrixWorld);let vt=$.distanceTo(W),_t=et.projectionMatrix.elements,Rt=rt.projectionMatrix.elements,Bt=_t[14]/(_t[10]-1),Ct=_t[14]/(_t[10]+1),we=(_t[9]+1)/_t[5],qt=(_t[9]-1)/_t[5],z=(_t[8]-1)/_t[0],pe=(Rt[8]+1)/Rt[0],wt=Bt*z,Ot=Bt*pe,Nt=vt/(-z+pe),oe=Nt*-z;et.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(oe),B.translateZ(Nt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let Xt=Bt+Nt,Ft=Ct+Nt,ae=wt-oe,Se=Ot+(vt-oe),_e=we*Ct/Ft*Xt,C=qt*Ct/Ft*Xt;B.projectionMatrix.makePerspective(ae,Se,_e,C,Xt,Ft),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function Q(B,et){et===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(et.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCameraXR=function(B){if(r===null)return B;I&&(B=I),H.near=N.near=R.near=B.near,H.far=N.far=R.far=B.far,(S!==H.near||L!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),S=H.near,L=H.far);let et=B.parent,rt=H.cameras;Q(H,et);for(let vt=0;vt<rt.length;vt++)Q(rt[vt],et);return rt.length===2?Y(H,R,N):H.projectionMatrix.copy(R.projectionMatrix),I&&nt(H,et),H};function nt(B,et){let rt=I;et===null?rt.matrix.copy(B.matrixWorld):(rt.matrix.copy(et.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(B.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0);let vt=rt.children;for(let _t=0,Rt=vt.length;_t<Rt;_t++)vt[_t].updateMatrixWorld(!0);rt.projectionMatrix.copy(B.projectionMatrix),rt.projectionMatrixInverse.copy(B.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Ya*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(B){d=B,v!==null&&(v.fixedFoveation=B),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=B)};let st=null;function it(B,et){if(f=et.getViewerPose(p||h),y=et,f!==null){let rt=f.views;x!==null&&(t.setRenderTargetFramebuffer(m,x.framebuffer),t.setRenderTarget(m));let vt=!1;rt.length!==H.cameras.length&&(H.cameras.length=0,vt=!0);for(let _t=0;_t<rt.length;_t++){let Rt=rt[_t],Bt=null;if(x!==null)Bt=x.getViewport(Rt);else{let we=g.getViewSubImage(v,Rt);Bt=we.viewport,_t===0&&(t.setRenderTargetTextures(m,we.colorTexture,v.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(m))}let Ct=O[_t];Ct===void 0&&(Ct=new Ie,Ct.layers.enable(_t),Ct.viewport=new ye,O[_t]=Ct),Ct.matrix.fromArray(Rt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Rt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),_t===0&&(H.matrix.copy(Ct.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),vt===!0&&H.cameras.push(Ct)}}for(let rt=0;rt<A.length;rt++){let vt=w[rt],_t=A[rt];vt!==null&&_t!==void 0&&_t.update(vt,et,p||h)}st&&st(B,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),y=null}let bt=new Uu;bt.setAnimationLoop(it),this.setAnimationLoop=function(B){st=B},this.dispose=function(){}}};function pb(s,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,Nu(s)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,A,w,I){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(_,m):m.isMeshToonMaterial?(a(_,m),g(_,m)):m.isMeshPhongMaterial?(a(_,m),f(_,m)):m.isMeshStandardMaterial?(a(_,m),v(_,m),m.isMeshPhysicalMaterial&&x(_,m,I)):m.isMeshMatcapMaterial?(a(_,m),y(_,m)):m.isMeshDepthMaterial?a(_,m):m.isMeshDistanceMaterial?(a(_,m),M(_,m)):m.isMeshNormalMaterial?a(_,m):m.isLineBasicMaterial?(h(_,m),m.isLineDashedMaterial&&c(_,m)):m.isPointsMaterial?d(_,m,A,w):m.isSpriteMaterial?p(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Ye&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Ye&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let A=t.get(m).envMap;if(A&&(_.envMap.value=A,_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;let w=s.useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*w,e(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function h(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function c(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function d(_,m,A,w){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*A,_.scale.value=w*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function p(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function f(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function g(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function v(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),t.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function x(_,m,A){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,m){m.matcap&&(_.matcap.value=m.matcap)}function M(_,m){let A=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fb(s,t,e,i){let r={},a={},h=[],c=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(A,w){let I=w.program;i.uniformBlockBinding(A,I)}function p(A,w){let I=r[A.id];I===void 0&&(y(A),I=f(A),r[A.id]=I,A.addEventListener("dispose",_));let R=w.program;i.updateUBOMapping(A,R);let N=t.render.frame;a[A.id]!==N&&(v(A),a[A.id]=N)}function f(A){let w=g();A.__bindingPointIndex=w;let I=s.createBuffer(),R=A.__size,N=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,R,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,I),I}function g(){for(let A=0;A<c;A++)if(h.indexOf(A)===-1)return h.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){let w=r[A.id],I=A.uniforms,R=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let N=0,O=I.length;N<O;N++){let H=I[N];if(x(H,N,R)===!0){let S=H.__offset,L=Array.isArray(H.value)?H.value:[H.value],tt=0;for(let ct=0;ct<L.length;ct++){let q=L[ct],$=M(q);typeof q=="number"?(H.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,S+tt,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=q.elements[0],H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=q.elements[0],H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=q.elements[0]):(q.toArray(H.__data,tt),tt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,H.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,w,I){let R=A.value;if(I[w]===void 0){if(typeof R=="number")I[w]=R;else{let N=Array.isArray(R)?R:[R],O=[];for(let H=0;H<N.length;H++)O.push(N[H].clone());I[w]=O}return!0}else if(typeof R=="number"){if(I[w]!==R)return I[w]=R,!0}else{let N=Array.isArray(I[w])?I[w]:[I[w]],O=Array.isArray(R)?R:[R];for(let H=0;H<N.length;H++){let S=N[H];if(S.equals(O[H])===!1)return S.copy(O[H]),!0}}return!1}function y(A){let w=A.uniforms,I=0,R=16,N=0;for(let O=0,H=w.length;O<H;O++){let S=w[O],L={boundary:0,storage:0},tt=Array.isArray(S.value)?S.value:[S.value];for(let ct=0,q=tt.length;ct<q;ct++){let $=tt[ct],W=M($);L.boundary+=W.boundary,L.storage+=W.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=I,O>0){N=I%R;let ct=R-N;N!==0&&ct-L.boundary<0&&(I+=R-N,S.__offset=I)}I+=L.storage}return N=I%R,N>0&&(I+=R-N),A.__size=I,A.__cache={},this}function M(A){let w={boundary:0,storage:0};return typeof A=="number"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function _(A){let w=A.target;w.removeEventListener("dispose",_);let I=h.indexOf(w.__bindingPointIndex);h.splice(I,1),s.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function m(){for(let A in r)s.deleteBuffer(r[A]);h=[],r={},a={}}return{bind:d,update:p,dispose:m}}function mb(){let s=ho("canvas");return s.style.display="block",s}var mr=class{constructor(t={}){let{canvas:e=mb(),context:i=null,depth:r=!0,stencil:a=!0,alpha:h=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=h;let x=new Uint32Array(4),y=new Int32Array(4),M=null,_=null,m=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=zt,this.useLegacyLights=!0,this.toneMapping=Bn,this.toneMappingExposure=1;let w=this,I=!1,R=0,N=0,O=null,H=-1,S=null,L=new ye,tt=new ye,ct=null,q=new Zt(0),$=0,W=e.width,Y=e.height,Q=1,nt=null,st=null,it=new ye(0,0,W,Y),bt=new ye(0,0,W,Y),B=!1,et=new Ss,rt=!1,vt=!1,_t=null,Rt=new le,Bt=new ie,Ct=new D,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qt(){return O===null?Q:1}let z=i;function pe(T,V){for(let K=0;K<T.length;K++){let k=T[K],J=e.getContext(k,V);if(J!==null)return J}return null}try{let T={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yl}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){let V=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&V.shift(),z=pe(V,T),z===null)throw pe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let wt,Ot,Nt,oe,Xt,Ft,ae,Se,_e,C,E,Z,lt,at,ut,St,ft,j,Pt,Mt,At,gt,yt,Vt;function se(){wt=new O0(z),Ot=new R0(z,wt,t),wt.init(Ot),gt=new ub(z,wt,Ot),Nt=new cb(z,wt,Ot),oe=new B0(z),Xt=new Jx,Ft=new hb(z,wt,Nt,Xt,Ot,gt,oe),ae=new I0(w),Se=new U0(w),_e=new Jg(z,Ot),yt=new C0(z,wt,_e,Ot),C=new F0(z,_e,oe,yt),E=new G0(z,C,_e,oe),Pt=new H0(z,Ot,Ft),St=new L0(Xt),Z=new Zx(w,ae,Se,wt,Ot,yt,St),lt=new pb(w,Xt),at=new Qx,ut=new rb(wt,Ot),j=new A0(w,ae,Se,Nt,E,v,d),ft=new lb(w,E,Ot),Vt=new fb(z,oe,Ot,Nt),Mt=new P0(z,wt,oe,Ot),At=new k0(z,wt,oe,Ot),oe.programs=Z.programs,w.capabilities=Ot,w.extensions=wt,w.properties=Xt,w.renderLists=at,w.shadowMap=ft,w.state=Nt,w.info=oe}se();let U=new cl(w,z);this.xr=U,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=wt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=wt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(W,Y,!1))},this.getSize=function(T){return T.set(W,Y)},this.setSize=function(T,V,K=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Y=V,e.width=Math.floor(T*Q),e.height=Math.floor(V*Q),K===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(W*Q,Y*Q).floor()},this.setDrawingBufferSize=function(T,V,K){W=T,Y=V,Q=K,e.width=Math.floor(T*K),e.height=Math.floor(V*K),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,V,K,k){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,V,K,k),Nt.viewport(L.copy(it).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(bt)},this.setScissor=function(T,V,K,k){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,V,K,k),Nt.scissor(tt.copy(bt).multiplyScalar(Q).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(T){Nt.setScissorTest(B=T)},this.setOpaqueSort=function(T){nt=T},this.setTransparentSort=function(T){st=T},this.getClearColor=function(T){return T.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(T=!0,V=!0,K=!0){let k=0;if(T){let J=!1;if(O!==null){let xt=O.texture.format;J=xt===Pu||xt===Cu||xt===Au}if(J){let xt=O.texture.type,Et=xt===ui||xt===li||xt===wl||xt===Pi||xt===Su||xt===Tu,Lt=j.getClearColor(),Dt=j.getClearAlpha(),Gt=Lt.r,Ut=Lt.g,kt=Lt.b,ee=Xt.get(O).__webglFramebuffer;Et?(x[0]=Gt,x[1]=Ut,x[2]=kt,x[3]=Dt,z.clearBufferuiv(z.COLOR,ee,x)):(y[0]=Gt,y[1]=Ut,y[2]=kt,y[3]=Dt,z.clearBufferiv(z.COLOR,ee,y))}else k|=z.COLOR_BUFFER_BIT}V&&(k|=z.DEPTH_BUFFER_BIT),K&&(k|=z.STENCIL_BUFFER_BIT),z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),at.dispose(),ut.dispose(),Xt.dispose(),ae.dispose(),Se.dispose(),E.dispose(),yt.dispose(),Vt.dispose(),Z.dispose(),U.dispose(),U.removeEventListener("sessionstart",te),U.removeEventListener("sessionend",nn),_t&&(_t.dispose(),_t=null),xe.stop()};function pt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let T=oe.autoReset,V=ft.enabled,K=ft.autoUpdate,k=ft.needsUpdate,J=ft.type;se(),oe.autoReset=T,ft.enabled=V,ft.autoUpdate=K,ft.needsUpdate=k,ft.type=J}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mt(T){let V=T.target;V.removeEventListener("dispose",mt),$t(V)}function $t(T){he(T),Xt.remove(T)}function he(T){let V=Xt.get(T).programs;V!==void 0&&(V.forEach(function(K){Z.releaseProgram(K)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,K,k,J,xt){V===null&&(V=we);let Et=J.isMesh&&J.matrixWorld.determinant()<0,Lt=Uo(T,V,K,k,J);Nt.setMaterial(k,Et);let Dt=K.index,Gt=1;k.wireframe===!0&&(Dt=C.getWireframeAttribute(K),Gt=2);let Ut=K.drawRange,kt=K.attributes.position,ee=Ut.start*Gt,fe=(Ut.start+Ut.count)*Gt;xt!==null&&(ee=Math.max(ee,xt.start*Gt),fe=Math.min(fe,(xt.start+xt.count)*Gt)),Dt!==null?(ee=Math.max(ee,0),fe=Math.min(fe,Dt.count)):kt!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,kt.count));let Ze=fe-ee;if(Ze<0||Ze===1/0)return;yt.setup(J,k,Lt,K,Dt);let sn,me=Mt;if(Dt!==null&&(sn=_e.get(Dt),me=At,me.setIndex(sn)),J.isMesh)k.wireframe===!0?(Nt.setLineWidth(k.wireframeLinewidth*qt()),me.setMode(z.LINES)):me.setMode(z.TRIANGLES);else if(J.isLine){let Yt=k.linewidth;Yt===void 0&&(Yt=1),Nt.setLineWidth(Yt*qt()),J.isLineSegments?me.setMode(z.LINES):J.isLineLoop?me.setMode(z.LINE_LOOP):me.setMode(z.LINE_STRIP)}else J.isPoints?me.setMode(z.POINTS):J.isSprite&&me.setMode(z.TRIANGLES);if(J.isInstancedMesh)me.renderInstances(ee,Ze,J.count);else if(K.isInstancedBufferGeometry){let Yt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Hi=Math.min(K.instanceCount,Yt);me.renderInstances(ee,Ze,Hi)}else me.render(ee,Ze)},this.compile=function(T,V){function K(k,J,xt){k.transparent===!0&&k.side===On&&k.forceSinglePass===!1?(k.side=Ye,k.needsUpdate=!0,zi(k,J,xt),k.side=di,k.needsUpdate=!0,zi(k,J,xt),k.side=On):zi(k,J,xt)}_=ut.get(T),_.init(),A.push(_),T.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights(w.useLegacyLights),T.traverse(function(k){let J=k.material;if(J)if(Array.isArray(J))for(let xt=0;xt<J.length;xt++){let Et=J[xt];K(Et,T,k)}else K(J,T,k)}),A.pop(),_=null};let Qt=null;function un(T){Qt&&Qt(T)}function te(){xe.stop()}function nn(){xe.start()}let xe=new Uu;xe.setAnimationLoop(un),typeof self!="undefined"&&xe.setContext(self),this.setAnimationLoop=function(T){Qt=T,U.setAnimationLoop(T),T===null?xe.stop():xe.start()},U.addEventListener("sessionstart",te),U.addEventListener("sessionend",nn),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(V=U.updateCameraXR(V)),T.isScene===!0&&T.onBeforeRender(w,T,V,O),_=ut.get(T,A.length),_.init(),A.push(_),Rt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),et.setFromProjectionMatrix(Rt),vt=this.localClippingEnabled,rt=St.init(this.clippingPlanes,vt),M=at.get(T,m.length),M.init(),m.push(M),ks(T,V,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(nt,st),rt===!0&&St.beginShadows();let K=_.state.shadowsArray;if(ft.render(K,T,V),rt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,j.render(M,T),_.setupLights(w.useLegacyLights),V.isArrayCamera){let k=V.cameras;for(let J=0,xt=k.length;J<xt;J++){let Et=k[J];gi(M,T,Et,Et.viewport)}}else gi(M,T,V);O!==null&&(Ft.updateMultisampleRenderTarget(O),Ft.updateRenderTargetMipmap(O)),T.isScene===!0&&T.onAfterRender(w,T,V),yt.resetDefaultState(),H=-1,S=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function ks(T,V,K,k){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){k&&Ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Rt);let Et=E.update(T),Lt=T.material;Lt.visible&&M.push(T,Et,Lt,K,Ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==oe.render.frame&&(T.skeleton.update(),T.skeleton.frame=oe.render.frame);let Et=E.update(T),Lt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ct.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ct.copy(Et.boundingSphere.center)),Ct.applyMatrix4(T.matrixWorld).applyMatrix4(Rt)),Array.isArray(Lt)){let Dt=Et.groups;for(let Gt=0,Ut=Dt.length;Gt<Ut;Gt++){let kt=Dt[Gt],ee=Lt[kt.materialIndex];ee&&ee.visible&&M.push(T,Et,ee,K,Ct.z,kt)}}else Lt.visible&&M.push(T,Et,Lt,K,Ct.z,null)}}let xt=T.children;for(let Et=0,Lt=xt.length;Et<Lt;Et++)ks(xt[Et],V,K,k)}function gi(T,V,K,k){let J=T.opaque,xt=T.transmissive,Et=T.transparent;_.setupLightsView(K),rt===!0&&St.setGlobalState(w.clippingPlanes,K),xt.length>0&&Bs(J,xt,V,K),k&&Nt.viewport(L.copy(k)),J.length>0&&Kn(J,V,K),xt.length>0&&Kn(xt,V,K),Et.length>0&&Kn(Et,V,K),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Bs(T,V,K,k){let J=Ot.isWebGL2;_t===null&&(_t=new Vn(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?ur:ui,minFilter:hr,samples:J&&c===!0?4:0})),w.getDrawingBufferSize(Bt),J?_t.setSize(Bt.x,Bt.y):_t.setSize(Ka(Bt.x),Ka(Bt.y));let xt=w.getRenderTarget();w.setRenderTarget(_t),w.getClearColor(q),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear();let Et=w.toneMapping;w.toneMapping=Bn,Kn(T,K,k),Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t);let Lt=!1;for(let Dt=0,Gt=V.length;Dt<Gt;Dt++){let Ut=V[Dt],kt=Ut.object,ee=Ut.geometry,fe=Ut.material,Ze=Ut.group;if(fe.side===On&&kt.layers.test(k.layers)){let sn=fe.side;fe.side=Ye,fe.needsUpdate=!0,wr(kt,K,k,ee,fe,Ze),fe.side=sn,fe.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ft.updateMultisampleRenderTarget(_t),Ft.updateRenderTargetMipmap(_t)),w.setRenderTarget(xt),w.setClearColor(q,$),w.toneMapping=Et}function Kn(T,V,K){let k=V.isScene===!0?V.overrideMaterial:null;for(let J=0,xt=T.length;J<xt;J++){let Et=T[J],Lt=Et.object,Dt=Et.geometry,Gt=k===null?Et.material:k,Ut=Et.group;Lt.layers.test(K.layers)&&wr(Lt,V,K,Dt,Gt,Ut)}}function wr(T,V,K,k,J,xt){T.onBeforeRender(w,V,K,k,J,xt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(w,V,K,k,T,xt),J.transparent===!0&&J.side===On&&J.forceSinglePass===!1?(J.side=Ye,J.needsUpdate=!0,w.renderBufferDirect(K,V,k,J,T,xt),J.side=di,J.needsUpdate=!0,w.renderBufferDirect(K,V,k,J,T,xt),J.side=On):w.renderBufferDirect(K,V,k,J,T,xt),T.onAfterRender(w,V,K,k,J,xt)}function zi(T,V,K){V.isScene!==!0&&(V=we);let k=Xt.get(T),J=_.state.lights,xt=_.state.shadowsArray,Et=J.state.version,Lt=Z.getParameters(T,J.state,xt,V,K),Dt=Z.getProgramCacheKey(Lt),Gt=k.programs;k.environment=T.isMeshStandardMaterial?V.environment:null,k.fog=V.fog,k.envMap=(T.isMeshStandardMaterial?Se:ae).get(T.envMap||k.environment),Gt===void 0&&(T.addEventListener("dispose",mt),Gt=new Map,k.programs=Gt);let Ut=Gt.get(Dt);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===Et)return Mr(T,Lt),Ut}else Lt.uniforms=Z.getUniforms(T),T.onBuild(K,Lt,w),T.onBeforeCompile(Lt,w),Ut=Z.acquireProgram(Lt,Dt),Gt.set(Dt,Ut),k.uniforms=Lt.uniforms;let kt=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=St.uniform),Mr(T,Lt),k.needsLights=Oo(T),k.lightsStateVersion=Et,k.needsLights&&(kt.ambientLightColor.value=J.state.ambient,kt.lightProbe.value=J.state.probe,kt.directionalLights.value=J.state.directional,kt.directionalLightShadows.value=J.state.directionalShadow,kt.spotLights.value=J.state.spot,kt.spotLightShadows.value=J.state.spotShadow,kt.rectAreaLights.value=J.state.rectArea,kt.ltc_1.value=J.state.rectAreaLTC1,kt.ltc_2.value=J.state.rectAreaLTC2,kt.pointLights.value=J.state.point,kt.pointLightShadows.value=J.state.pointShadow,kt.hemisphereLights.value=J.state.hemi,kt.directionalShadowMap.value=J.state.directionalShadowMap,kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,kt.spotShadowMap.value=J.state.spotShadowMap,kt.spotLightMatrix.value=J.state.spotLightMatrix,kt.spotLightMap.value=J.state.spotLightMap,kt.pointShadowMap.value=J.state.pointShadowMap,kt.pointShadowMatrix.value=J.state.pointShadowMatrix);let ee=Ut.getUniforms(),fe=xs.seqWithValue(ee.seq,kt);return k.currentProgram=Ut,k.uniformsList=fe,Ut}function Mr(T,V){let K=Xt.get(T);K.outputColorSpace=V.outputColorSpace,K.instancing=V.instancing,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Uo(T,V,K,k,J){V.isScene!==!0&&(V=we),Ft.resetTextureUnits();let xt=V.fog,Et=k.isMeshStandardMaterial?V.environment:null,Lt=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wn,Dt=(k.isMeshStandardMaterial?Se:ae).get(k.envMap||Et),Gt=k.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ut=!!K.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),kt=!!K.morphAttributes.position,ee=!!K.morphAttributes.normal,fe=!!K.morphAttributes.color,Ze=k.toneMapped?w.toneMapping:Bn,sn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,me=sn!==void 0?sn.length:0,Yt=Xt.get(k),Hi=_.state.lights;if(rt===!0&&(vt===!0||T!==S)){let ke=T===S&&k.id===H;St.setState(k,T,ke)}let Me=!1;k.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Hi.state.version||Yt.outputColorSpace!==Lt||J.isInstancedMesh&&Yt.instancing===!1||!J.isInstancedMesh&&Yt.instancing===!0||J.isSkinnedMesh&&Yt.skinning===!1||!J.isSkinnedMesh&&Yt.skinning===!0||Yt.envMap!==Dt||k.fog===!0&&Yt.fog!==xt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==St.numPlanes||Yt.numIntersection!==St.numIntersection)||Yt.vertexAlphas!==Gt||Yt.vertexTangents!==Ut||Yt.morphTargets!==kt||Yt.morphNormals!==ee||Yt.morphColors!==fe||Yt.toneMapping!==Ze||Ot.isWebGL2===!0&&Yt.morphTargetsCount!==me)&&(Me=!0):(Me=!0,Yt.__version=k.version);let Je=Yt.currentProgram;Me===!0&&(Je=zi(k,V,J));let Er=!1,$n=!1,Gi=!1,Re=Je.getUniforms(),Mn=Yt.uniforms;if(Nt.useProgram(Je.program)&&(Er=!0,$n=!0,Gi=!0),k.id!==H&&(H=k.id,$n=!0),Er||S!==T){if(Re.setValue(z,"projectionMatrix",T.projectionMatrix),Ot.logarithmicDepthBuffer&&Re.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,$n=!0,Gi=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){let ke=Re.map.cameraPosition;ke!==void 0&&ke.setValue(z,Ct.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Re.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||J.isSkinnedMesh)&&Re.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(J.isSkinnedMesh){Re.setOptional(z,J,"bindMatrix"),Re.setOptional(z,J,"bindMatrixInverse");let ke=J.skeleton;ke&&(Ot.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),Re.setValue(z,"boneTexture",ke.boneTexture,Ft),Re.setValue(z,"boneTextureSize",ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let zs=K.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&Ot.isWebGL2===!0)&&Pt.update(J,K,Je),($n||Yt.receiveShadow!==J.receiveShadow)&&(Yt.receiveShadow=J.receiveShadow,Re.setValue(z,"receiveShadow",J.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mn.envMap.value=Dt,Mn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),$n&&(Re.setValue(z,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&Vs(Mn,Gi),xt&&k.fog===!0&&lt.refreshFogUniforms(Mn,xt),lt.refreshMaterialUniforms(Mn,k,Q,Y,_t),xs.upload(z,Yt.uniformsList,Mn,Ft)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xs.upload(z,Yt.uniformsList,Mn,Ft),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Re.setValue(z,"center",J.center),Re.setValue(z,"modelViewMatrix",J.modelViewMatrix),Re.setValue(z,"normalMatrix",J.normalMatrix),Re.setValue(z,"modelMatrix",J.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let ke=k.uniformsGroups;for(let Wi=0,Fo=ke.length;Wi<Fo;Wi++)if(Ot.isWebGL2){let Sr=ke[Wi];Vt.update(Sr,Je),Vt.bind(Sr,Je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Je}function Vs(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Oo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,V,K){Xt.get(T.texture).__webglTexture=V,Xt.get(T.depthTexture).__webglTexture=K;let k=Xt.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=K===void 0,k.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){let K=Xt.get(T);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,K=0){O=T,R=V,N=K;let k=!0,J=null,xt=!1,Et=!1;if(T){let Dt=Xt.get(T);Dt.__useDefaultFramebuffer!==void 0?(Nt.bindFramebuffer(z.FRAMEBUFFER,null),k=!1):Dt.__webglFramebuffer===void 0?Ft.setupRenderTarget(T):Dt.__hasExternalTextures&&Ft.rebindTextures(T,Xt.get(T.texture).__webglTexture,Xt.get(T.depthTexture).__webglTexture);let Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);let Ut=Xt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(J=Ut[V],xt=!0):Ot.isWebGL2&&T.samples>0&&Ft.useMultisampledRTT(T)===!1?J=Xt.get(T).__webglMultisampledFramebuffer:J=Ut,L.copy(T.viewport),tt.copy(T.scissor),ct=T.scissorTest}else L.copy(it).multiplyScalar(Q).floor(),tt.copy(bt).multiplyScalar(Q).floor(),ct=B;if(Nt.bindFramebuffer(z.FRAMEBUFFER,J)&&Ot.drawBuffers&&k&&Nt.drawBuffers(T,J),Nt.viewport(L),Nt.scissor(tt),Nt.setScissorTest(ct),xt){let Dt=Xt.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Dt.__webglTexture,K)}else if(Et){let Dt=Xt.get(T.texture),Gt=V||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.__webglTexture,K||0,Gt)}H=-1},this.readRenderTargetPixels=function(T,V,K,k,J,xt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){Nt.bindFramebuffer(z.FRAMEBUFFER,Lt);try{let Dt=T.texture,Gt=Dt.format,Ut=Dt.type;if(Gt!==vn&&gt.convert(Gt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let kt=Ut===ur&&(wt.has("EXT_color_buffer_half_float")||Ot.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Ut!==ui&&gt.convert(Ut)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===ci&&(Ot.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-k&&K>=0&&K<=T.height-J&&z.readPixels(V,K,k,J,gt.convert(Gt),gt.convert(Ut),xt)}finally{let Dt=O!==null?Xt.get(O).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(T,V,K=0){let k=Math.pow(2,-K),J=Math.floor(V.image.width*k),xt=Math.floor(V.image.height*k);Ft.setTexture2D(V,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,T.x,T.y,J,xt),Nt.unbindTexture()},this.copyTextureToTexture=function(T,V,K,k=0){let J=V.image.width,xt=V.image.height,Et=gt.convert(K.format),Lt=gt.convert(K.type);Ft.setTexture2D(K,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,T.x,T.y,J,xt,Et,Lt,V.image.data):V.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Et,V.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,k,T.x,T.y,Et,Lt,V.image),k===0&&K.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(T,V,K,k,J=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=T.max.x-T.min.x+1,Et=T.max.y-T.min.y+1,Lt=T.max.z-T.min.z+1,Dt=gt.convert(k.format),Gt=gt.convert(k.type),Ut;if(k.isData3DTexture)Ft.setTexture3D(k,0),Ut=z.TEXTURE_3D;else if(k.isDataArrayTexture)Ft.setTexture2DArray(k,0),Ut=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let kt=z.getParameter(z.UNPACK_ROW_LENGTH),ee=z.getParameter(z.UNPACK_IMAGE_HEIGHT),fe=z.getParameter(z.UNPACK_SKIP_PIXELS),Ze=z.getParameter(z.UNPACK_SKIP_ROWS),sn=z.getParameter(z.UNPACK_SKIP_IMAGES),me=K.isCompressedTexture?K.mipmaps[0]:K.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,me.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,me.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),K.isDataTexture||K.isData3DTexture?z.texSubImage3D(Ut,J,V.x,V.y,V.z,xt,Et,Lt,Dt,Gt,me.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ut,J,V.x,V.y,V.z,xt,Et,Lt,Dt,me.data)):z.texSubImage3D(Ut,J,V.x,V.y,V.z,xt,Et,Lt,Dt,Gt,me),z.pixelStorei(z.UNPACK_ROW_LENGTH,kt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee),z.pixelStorei(z.UNPACK_SKIP_PIXELS,fe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ze),z.pixelStorei(z.UNPACK_SKIP_IMAGES,sn),J===0&&k.generateMipmaps&&z.generateMipmap(Ut),Nt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ft.setTextureCube(T,0):T.isData3DTexture?Ft.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ft.setTexture2DArray(T,0):Ft.setTexture2D(T,0),Nt.unbindTexture()},this.resetState=function(){R=0,N=0,O=null,Nt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?Li:Ru}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?zt:wn}},hl=class extends mr{};hl.prototype.isWebGL1Renderer=!0;var Ts=class{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new Ts(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};var xo=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var bo=class extends De{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new le,uu=new le,io=[],du=new ge,gb=new le,rr=new cn,or=new pi,As=class extends cn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,gb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ge),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),du.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),or.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,r=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(i),t.ray.intersectsSphere(or)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,fs),uu.multiplyMatrices(i,fs),rr.matrixWorld=uu,rr.raycast(t,io);for(let h=0,c=io.length;h<c;h++){let d=io[h];d.instanceId=a,d.object=this,e.push(d)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends Ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pu=new D,fu=new D,mu=new le,Va=new Di,so=new pi,ul=class extends Fe{constructor(t=new $e,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,a=e.count;r<a;r++)pu.fromBufferAttribute(e,r-1),fu.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=pu.distanceTo(fu);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),so.radius+=a,t.ray.intersectsSphere(so)===!1)return;mu.copy(r).invert(),Va.copy(t.ray).applyMatrix4(mu);let c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,p=new D,f=new D,g=new D,v=new D,x=this.isLineSegments?2:1,y=i.index,_=i.attributes.position;if(y!==null){let m=Math.max(0,h.start),A=Math.min(y.count,h.start+h.count);for(let w=m,I=A-1;w<I;w+=x){let R=y.getX(w),N=y.getX(w+1);if(p.fromBufferAttribute(_,R),f.fromBufferAttribute(_,N),Va.distanceSqToSegment(p,f,v,g)>d)continue;v.applyMatrix4(this.matrixWorld);let H=t.ray.origin.distanceTo(v);H<t.near||H>t.far||e.push({distance:H,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,h.start),A=Math.min(_.count,h.start+h.count);for(let w=m,I=A-1;w<I;w+=x){if(p.fromBufferAttribute(_,w),f.fromBufferAttribute(_,w+1),Va.distanceSqToSegment(p,f,v,g)>d)continue;v.applyMatrix4(this.matrixWorld);let N=t.ray.origin.distanceTo(v);N<t.near||N>t.far||e.push({distance:N,point:g.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=r.length;a<h;a++){let c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}},gu=new D,vu=new D,Cs=class extends ul{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,a=e.count;r<a;r+=2)gu.fromBufferAttribute(e,r),vu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gu.distanceTo(vu);t.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};function ai(s,t,e){return Vu(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)}function ro(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Vu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ps=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],a=e[i-1];n:{t:{let h;e:{i:if(!(t<r)){for(let c=i+2;;){if(r===void 0){if(t<a)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=r,r=e[++i],t<r)break t}h=e.length;break e}if(!(t>=a)){let c=e[1];t<c&&(i=2,a=c);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(r=a,a=e[--i-1],t>=a)break t}h=i,i=0;break e}break n}for(;i<h;){let c=i+h>>>1;t<e[c]?h=c:i=c+1}if(r=e[i],a=e[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=t*r;for(let h=0;h!==r;++h)e[h]=i[a+h];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dl=class extends Ps{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(t,e,i){let r=this.parameterPositions,a=t-2,h=t+1,c=r[a],d=r[h];if(c===void 0)switch(this.getSettings_().endingStart){case Eh:a=t,c=2*e-i;break;case Sh:a=r.length-2,c=e+r[a]-r[a+1];break;default:a=t,c=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Eh:h=t,d=2*i-e;break;case Sh:h=1,d=i+r[1]-r[0];break;default:h=t-1,d=e}let p=(i-e)*.5,f=this.valueSize;this._weightPrev=p/(e-c),this._weightNext=p/(d-i),this._offsetPrev=a*f,this._offsetNext=h*f}interpolate_(t,e,i,r){let a=this.resultBuffer,h=this.sampleValues,c=this.valueSize,d=t*c,p=d-c,f=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,x=this._weightNext,y=(i-e)/(r-e),M=y*y,_=M*y,m=-v*_+2*v*M-v*y,A=(1+v)*_+(-1.5-2*v)*M+(-.5+v)*y+1,w=(-1-x)*_+(1.5+x)*M+.5*y,I=x*_-x*M;for(let R=0;R!==c;++R)a[R]=m*h[f+R]+A*h[p+R]+w*h[d+R]+I*h[g+R];return a}},pl=class extends Ps{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,h=this.sampleValues,c=this.valueSize,d=t*c,p=d-c,f=(i-e)/(r-e),g=1-f;for(let v=0;v!==c;++v)a[v]=h[p+v]*g+h[d+v]*f;return a}},fl=class extends Ps{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ro(e,this.TimeBufferType),this.values=ro(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ro(t.times,Array),values:ro(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case ga:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,a=0,h=r-1;for(;a!==r&&i[a]<t;)++a;for(;h!==-1&&i[h]>e;)--h;if(++h,a!==0||h!==r){a>=h&&(h=Math.max(h,1),a=h-1);let c=this.getValueSize();this.times=ai(i,a,h),this.values=ai(this.values,a*c,h*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let h=null;for(let c=0;c!==a;c++){let d=i[c];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,d),t=!1;break}if(h!==null&&h>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,d,h),t=!1;break}h=d}if(r!==void 0&&Vu(r))for(let c=0,d=r.length;c!==d;++c){let p=r[c];if(isNaN(p)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,p),t=!1;break}}return t}optimize(){let t=ai(this.times),e=ai(this.values),i=this.getValueSize(),r=this.getInterpolation()===ga,a=t.length-1,h=1;for(let c=1;c<a;++c){let d=!1,p=t[c],f=t[c+1];if(p!==f&&(c!==1||p!==t[0]))if(r)d=!0;else{let g=c*i,v=g-i,x=g+i;for(let y=0;y!==i;++y){let M=e[g+y];if(M!==e[v+y]||M!==e[x+y]){d=!0;break}}}if(d){if(c!==h){t[h]=t[c];let g=c*i,v=h*i;for(let x=0;x!==i;++x)e[v+x]=e[g+x]}++h}}if(a>0){t[h]=t[a];for(let c=a*i,d=h*i,p=0;p!==i;++p)e[d+p]=e[c+p];++h}return h!==t.length?(this.times=ai(t,0,h),this.values=ai(e,0,h*i)):(this.times=t,this.values=e),this}clone(){let t=ai(this.times,0),e=ai(this.values,0),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=lo;var Oi=class extends xn{};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ao;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends xn{};ml.prototype.ValueTypeName="color";var gl=class extends xn{};gl.prototype.ValueTypeName="number";var vl=class extends Ps{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let a=this.resultBuffer,h=this.sampleValues,c=this.valueSize,d=(i-e)/(r-e),p=t*c;for(let f=p+c;p!==f;p+=4)Ge.slerpFlat(a,0,h,p-c,h,p,d);return a}},gr=class extends xn{InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.DefaultInterpolation=lo;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends xn{};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=ao;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends xn{};_l.prototype.ValueTypeName="vector";var El="\\[\\]\\.:\\/",vb=new RegExp("["+El+"]","g"),Sl="[^"+El+"]",_b="[^"+El.replace("\\.","")+"]",xb=/((?:WC+[\/:])*)/.source.replace("WC",Sl),bb=/(WCOD+)?/.source.replace("WCOD",_b),yb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),wb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),Mb=new RegExp("^"+xb+bb+yb+wb+"$"),Eb=["material","materials","bones","map"],xl=class{constructor(t,e,i){let r=i||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},re=class{constructor(t,e,i){this.path=e,this.parsedPath=i||re.parseTrackName(e),this.node=re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new re.Composite(t,e,i):new re(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vb,"")}static parseTrackName(t){let e=Mb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);Eb.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(a){for(let h=0;h<a.length;h++){let c=a[h];if(c.name===e||c.uuid===e)return c;let d=i(c.children);if(d)return d}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,a=e.propertyIndex;if(t||(t=re.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let p=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===p){p=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(p!==void 0){if(t[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[p]}}let h=t[r];if(h===void 0){let p=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+r+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=h,this.propertyIndex=a}else h.fromArray!==void 0&&h.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=h):Array.isArray(h)?(d=this.BindingType.EntireArray,this.resolvedProperty=h):this.propertyName=r;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=xl;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wb=new Float32Array(1);var yo=class{constructor(t,e,i=0,r=1/0){this.ray=new Di(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return bl(t,this,i,e),i.sort(_u),i}intersectObjects(t,e=!0,i=[]){for(let r=0,a=t.length;r<a;r++)bl(t[r],this,i,e);return i.sort(_u),i}};function _u(s,t){return s.distance-t.distance}function bl(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){let r=s.children;for(let a=0,h=r.length;a<h;a++)bl(r[a],t,e,!0)}}var ki=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var oo=new D,ve=new pr,wo=class extends Cs{constructor(t){let e=new $e,i=new Ui({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],a=[],h={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,M){d(y),d(M)}function d(y){r.push(0,0,0),a.push(0,0,0),h[y]===void 0&&(h[y]=[]),h[y].push(r.length/3-1)}e.setAttribute("position",new Ke(r,3)),e.setAttribute("color",new Ke(a,3)),super(e,i),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=h,this.update();let p=new Zt(16755200),f=new Zt(16711680),g=new Zt(43775),v=new Zt(16777215),x=new Zt(3355443);this.setColors(p,f,g,v,x)}setColors(t,e,i,r,a){let c=this.geometry.getAttribute("color");c.setXYZ(0,t.r,t.g,t.b),c.setXYZ(1,t.r,t.g,t.b),c.setXYZ(2,t.r,t.g,t.b),c.setXYZ(3,t.r,t.g,t.b),c.setXYZ(4,t.r,t.g,t.b),c.setXYZ(5,t.r,t.g,t.b),c.setXYZ(6,t.r,t.g,t.b),c.setXYZ(7,t.r,t.g,t.b),c.setXYZ(8,t.r,t.g,t.b),c.setXYZ(9,t.r,t.g,t.b),c.setXYZ(10,t.r,t.g,t.b),c.setXYZ(11,t.r,t.g,t.b),c.setXYZ(12,t.r,t.g,t.b),c.setXYZ(13,t.r,t.g,t.b),c.setXYZ(14,t.r,t.g,t.b),c.setXYZ(15,t.r,t.g,t.b),c.setXYZ(16,t.r,t.g,t.b),c.setXYZ(17,t.r,t.g,t.b),c.setXYZ(18,t.r,t.g,t.b),c.setXYZ(19,t.r,t.g,t.b),c.setXYZ(20,t.r,t.g,t.b),c.setXYZ(21,t.r,t.g,t.b),c.setXYZ(22,t.r,t.g,t.b),c.setXYZ(23,t.r,t.g,t.b),c.setXYZ(24,e.r,e.g,e.b),c.setXYZ(25,e.r,e.g,e.b),c.setXYZ(26,e.r,e.g,e.b),c.setXYZ(27,e.r,e.g,e.b),c.setXYZ(28,e.r,e.g,e.b),c.setXYZ(29,e.r,e.g,e.b),c.setXYZ(30,e.r,e.g,e.b),c.setXYZ(31,e.r,e.g,e.b),c.setXYZ(32,i.r,i.g,i.b),c.setXYZ(33,i.r,i.g,i.b),c.setXYZ(34,i.r,i.g,i.b),c.setXYZ(35,i.r,i.g,i.b),c.setXYZ(36,i.r,i.g,i.b),c.setXYZ(37,i.r,i.g,i.b),c.setXYZ(38,r.r,r.g,r.b),c.setXYZ(39,r.r,r.g,r.b),c.setXYZ(40,a.r,a.g,a.b),c.setXYZ(41,a.r,a.g,a.b),c.setXYZ(42,a.r,a.g,a.b),c.setXYZ(43,a.r,a.g,a.b),c.setXYZ(44,a.r,a.g,a.b),c.setXYZ(45,a.r,a.g,a.b),c.setXYZ(46,a.r,a.g,a.b),c.setXYZ(47,a.r,a.g,a.b),c.setXYZ(48,a.r,a.g,a.b),c.setXYZ(49,a.r,a.g,a.b),c.needsUpdate=!0}update(){let t=this.geometry,e=this.pointMap,i=1,r=1;ve.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),be("c",e,t,ve,0,0,-1),be("t",e,t,ve,0,0,1),be("n1",e,t,ve,-i,-r,-1),be("n2",e,t,ve,i,-r,-1),be("n3",e,t,ve,-i,r,-1),be("n4",e,t,ve,i,r,-1),be("f1",e,t,ve,-i,-r,1),be("f2",e,t,ve,i,-r,1),be("f3",e,t,ve,-i,r,1),be("f4",e,t,ve,i,r,1),be("u1",e,t,ve,i*.7,r*1.1,-1),be("u2",e,t,ve,-i*.7,r*1.1,-1),be("u3",e,t,ve,0,r*2,-1),be("cf1",e,t,ve,-i,0,1),be("cf2",e,t,ve,i,0,1),be("cf3",e,t,ve,0,-r,1),be("cf4",e,t,ve,0,r,1),be("cn1",e,t,ve,-i,0,-1),be("cn2",e,t,ve,i,0,-1),be("cn3",e,t,ve,0,-r,-1),be("cn4",e,t,ve,0,r,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function be(s,t,e,i,r,a,h){oo.set(r,a,h).unproject(i);let c=t[s];if(c!==void 0){let d=e.getAttribute("position");for(let p=0,f=c.length;p<f;p++)d.setXYZ(c[p],oo.x,oo.y,oo.z)}}var Mo=class extends Cs{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],a=new $e;a.setIndex(new De(i,1)),a.setAttribute("position",new Ke(r,3)),super(a,new Ui({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);var Sd=Am(Hu(),1);var Sb=[new Uint8Array([0,4]),new Uint8Array([1,5]),new Uint8Array([2,6]),new Uint8Array([3,7]),new Uint8Array([0,2]),new Uint8Array([1,3]),new Uint8Array([4,6]),new Uint8Array([5,7]),new Uint8Array([0,1]),new Uint8Array([2,3]),new Uint8Array([4,5]),new Uint8Array([6,7])],Is=[new Uint8Array([0,0,0]),new Uint8Array([0,0,1]),new Uint8Array([0,1,0]),new Uint8Array([0,1,1]),new Uint8Array([1,0,0]),new Uint8Array([1,0,1]),new Uint8Array([1,1,0]),new Uint8Array([1,1,1])],Kb=new D;var Zb=new D;var Al=class{constructor(){G(this,"value");this.value=0}};function Cl(s,t,e,i,r,a){let h=0;return s>t&&s>e?(r<s&&(h|=2),a<s&&(h|=1)):t>e?(i<t&&(h|=4),a<t&&(h|=1)):(i<e&&(h|=4),r<e&&(h|=2)),h}var Tb=[new Uint8Array([4,2,1]),new Uint8Array([5,3,8]),new Uint8Array([6,8,3]),new Uint8Array([7,8,8]),new Uint8Array([8,6,5]),new Uint8Array([8,7,8]),new Uint8Array([8,8,7]),new Uint8Array([8,8,8])];function We(s,t,e,i){let r,a;return t<e?(r=t,a=0):(r=e,a=1),i<r&&(a=2),Tb[s][a]}var Ab=new D,Gu=new ge,Wu=new ge,Xu=new Di;function Pl(s,t,e){let i=Gu.min.set(0,0,0),r=Gu.max.subVectors(s.max,s.min),a=s.getDimensions(Wu.min),h=Wu.max.copy(a).multiplyScalar(.5),c=Xu.origin.copy(t.origin),d=Xu.direction.copy(t.direction);c.sub(s.getCenter(Ab)).add(h),e.value=0,d.x<0?(c.x=a.x-c.x,d.x=-d.x,e.value|=4):d.x===0&&(d.x=Number.EPSILON),d.y<0?(c.y=a.y-c.y,d.y=-d.y,e.value|=2):d.y===0&&(d.y=Number.EPSILON),d.z<0?(c.z=a.z-c.z,d.z=-d.z,e.value|=1):d.z===0&&(d.z=Number.EPSILON);let p=1/d.x,f=1/d.y,g=1/d.z,v=(i.x-c.x)*p,x=(r.x-c.x)*p,y=(i.y-c.y)*f,M=(r.y-c.y)*f,_=(i.z-c.z)*g,m=(r.z-c.z)*g;return Math.max(v,y,_)<Math.min(x,M,m)?[v,y,_,x,M,m]:null}var Yu=new Al;function Hn(s,t,e,i,r,a,h,c){if(r>=0&&a>=0&&h>=0){let d=s.children;if(d==null)c.push(s);else{let p=.5*(t+r),f=.5*(e+a),g=.5*(i+h),v=Yu.value,x=Cl(t,e,i,p,f,g);for(;x<8;)switch(x){case 0:Hn(d[v],t,e,i,p,f,g,c),x=We(x,p,f,g);break;case 1:Hn(d[v^1],t,e,g,p,f,h,c),x=We(x,p,f,h);break;case 2:Hn(d[v^2],t,f,i,p,a,g,c),x=We(x,p,a,g);break;case 3:Hn(d[v^3],t,f,g,p,a,h,c),x=We(x,p,a,h);break;case 4:Hn(d[v^4],p,e,i,r,f,g,c),x=We(x,r,f,g);break;case 5:Hn(d[v^5],p,e,g,r,f,h,c),x=We(x,r,f,h);break;case 6:Hn(d[v^6],p,f,i,r,a,g,c),x=We(x,r,a,g);break;case 7:Hn(d[v^7],p,f,g,r,a,h,c),x=8;break}}}}var Cb=class{static intersectOctree(s,t){let e=[],i=Pl(s,t,Yu);return i!==null&&Hn(s,i[0],i[1],i[2],i[3],i[4],i[5],e),e}},Ls=new ge,qu=class{constructor(s,t=null){G(this,"root");G(this,"region");G(this,"result");G(this,"trace");G(this,"indices");this.root=s,this.region=t,this.reset()}reset(){let s=this.root;return this.trace=[],this.indices=[],s!==null&&(Ls.min=s.min,Ls.max=s.max,(this.region===null||this.region.intersectsBox(Ls))&&(this.trace.push(s),this.indices.push(0))),this.result={done:!1},this}next(){let s=this.region,t=this.indices,e=this.trace,i=null,r=e.length-1;for(;i===null&&r>=0;){let a=t[r]++,h=e[r].children;if(a<8)if(h!=null){let c=h[a];if(s!==null&&(Ls.min=c.min,Ls.max=c.max,!s.intersectsBox(Ls)))continue;e.push(c),t.push(0),++r}else i=e.pop(),t.pop();else e.pop(),t.pop(),--r}return this.result.value=i,this.result.done=i===null,this.result}[Symbol.iterator](){return this}},Tl=new ge;function Ku(s){let t=s.children,e=0;if(t!=null)for(let i=0,r=t.length;i<r;++i){let a=1+Ku(t[i]);a>e&&(e=a)}return e}function $u(s,t,e){let i=s.children;if(Tl.min=s.min,Tl.max=s.max,t.intersectsBox(Tl))if(i!=null)for(let r=0,a=i.length;r<a;++r)$u(i[r],t,e);else e.push(s)}function Zu(s,t,e,i){let r=s.children;if(e===t)i.push(s);else if(r!=null){++e;for(let a=0,h=r.length;a<h;++a)Zu(r[a],t,e,i)}}var ty=class{constructor(s){G(this,"root");this.root=s}get min(){return this.root.min}get max(){return this.root.max}get children(){return this.root.children||null}getCenter(s){return this.root.getCenter(s)}getDimensions(s){return this.root.getDimensions(s)}cull(s){let t=[];return $u(this.root,s,t),t}getDepth(){return Ku(this.root)}findNodesByLevel(s){let t=[];return Zu(this.root,s,0,t),t}getIntersectingNodes(s){return Cb.intersectOctree(this.root,s.ray)}leaves(s=null){return new qu(this.root,s)}[Symbol.iterator](){return new qu(this.root)}},Ju=class extends kn{constructor(t=null){super();G(this,"octree");this.name="OctreeHelper",this.octree=t,this.update()}createLineSegments(t,e){let i=t[Symbol.iterator](),r=Math.pow(2,16)/8-1,a=new kn,h=new Ui({color:16777215*Math.random()});for(let c=0,d=0,p=Math.ceil(e/r);p>0;--p){d+=e<r?e:r,e-=r;let f=d*8,g=new Uint16Array(f*3),v=new Float32Array(f*3);for(let y=0,M=0,_=i.next();_.done!==void 0&&!_.done&&c<d;){let m=_.value,A=m.min,w=m.max;for(let I=0;I<12;++I){let R=Sb[I];g[M++]=y+R[0],g[M++]=y+R[1]}for(let I=0;I<8;++I,++y){let R=Is[I];v[y*3]=R[0]===0?A.x:w.x,v[y*3+1]=R[1]===0?A.y:w.y,v[y*3+2]=R[2]===0?A.z:w.z}++c<d&&(_=i.next())}let x=new $e;x.setIndex(new De(g,1)),x.setAttribute("position",new De(v,3)),a.add(new Cs(x,h))}this.add(a)}update(){var e;this.dispose();let t=this.octree!==null?this.octree.getDepth():-1;for(let i=0;i<=t;++i){let r=((e=this.octree)==null?void 0:e.findNodesByLevel(i))||[];this.createLineSegments(r,r.length)}}dispose(){let t=this.children;for(let e=0,i=t.length;e<i;++e){let r=t[e],a=r.children;for(let h=0,c=a.length;h<c;++h){let d=a[h];if(d.geometry.dispose(),Array.isArray(d.material))for(let p of d.material)p.dispose();else d.material.dispose()}for(;a.length>0;)r.remove(a[0])}for(;t.length>0;)this.remove(t[0])}};var iy=new D;var Pb=Object.defineProperty,Rb=(s,t,e)=>t in s?Pb(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,Xn=(s,t,e)=>(Rb(s,typeof t!="symbol"?t+"":t,e),e);var Ul=(s=>(s.FIRST_PERSON="first-person",s.THIRD_PERSON="third-person",s))(Ul||{});var Lb=class{constructor(s){G(this,"movementState");this.movementState=s}execute(s){this.movementState.boost=s}},Ds=class{constructor(s,t){G(this,"movementState");G(this,"direction");this.movementState=s,this.direction=t}execute(s){let t=this.movementState;switch(this.direction){case 2:t.backward=s,t.backwardBeforeForward=s;break;case 0:t.forward=s,t.backwardBeforeForward=!s;break;case 3:t.right=s,t.rightBeforeLeft=s;break;case 1:t.left=s,t.rightBeforeLeft=!s;break;case 5:t.up=s,t.upBeforeDown=s;break;case 4:t.down=s,t.upBeforeDown=!s;break}}};var Ib=class{constructor(s){G(this,"controls");this.controls=s}execute(s,t){let e=this.controls.settings.pointer.behaviour;(t.type==="mousedown"||t.type==="mouseup")&&e!=="default"?this.controls.setPointerLocked():this.controls.setRotationEnabled(s)}},ju=class{constructor(s,t){G(this,"rotationManager");G(this,"zoomIn");this.rotationManager=s,this.zoomIn=t}execute(s){s&&this.rotationManager.zoom(this.zoomIn?-1:1)}};var Db=new Map([[8,"Backspace"],[9,"Tab"],[13,"Enter"],[16,"ShiftLeft"],[17,"ControlLeft"],[18,"AltLeft"],[19,"Pause"],[20,"CapsLock"],[27,"Escape"],[32,"Space"],[33,"PageUp"],[34,"PageDown"],[35,"End"],[36,"Home"],[37,"ArrowLeft"],[38,"ArrowUp"],[39,"ArrowRight"],[40,"ArrowDown"],[45,"Insert"],[46,"Delete"],[48,"Digit0"],[49,"Digit1"],[50,"Digit2"],[51,"Digit3"],[52,"Digit4"],[53,"Digit5"],[54,"Digit6"],[55,"Digit7"],[56,"Digit8"],[57,"Digit9"],[65,"KeyA"],[66,"KeyB"],[67,"KeyC"],[68,"KeyD"],[69,"KeyE"],[70,"KeyF"],[71,"KeyG"],[72,"KeyH"],[73,"KeyI"],[74,"KeyJ"],[75,"KeyK"],[76,"KeyL"],[77,"KeyM"],[78,"KeyN"],[79,"KeyO"],[80,"KeyP"],[81,"KeyQ"],[82,"KeyR"],[83,"KeyS"],[84,"KeyT"],[85,"KeyU"],[86,"KeyV"],[87,"KeyW"],[88,"KeyX"],[89,"KeyY"],[90,"KeyZ"],[91,"MetaLeft"],[92,"MetaRight"],[93,"MediaSelect"],[96,"Numpad0"],[97,"Numpad1"],[98,"Numpad2"],[99,"Numpad3"],[100,"Numpad4"],[101,"Numpad5"],[102,"Numpad6"],[103,"Numpad7"],[104,"Numpad8"],[105,"Numpad9"],[106,"NumpadMultiply"],[107,"NumpadAdd"],[109,"NumpadSubtract"],[110,"NumpadDecimal"],[111,"NumpadDivide"],[112,"F1"],[113,"F2"],[114,"F3"],[115,"F4"],[116,"F5"],[117,"F6"],[118,"F7"],[119,"F8"],[120,"F9"],[121,"F10"],[122,"F11"],[123,"F12"],[144,"NumLock"],[145,"ScrollLock"],[186,"Semicolon"],[187,"Equal"],[188,"Comma"],[189,"Minus"],[190,"Period"],[191,"Slash"],[192,"Backquote"],[219,"BracketLeft"],[221,"BracketRight"],[220,"Backslash"]]),td=1/1e3,hn=class{constructor(s=Number.POSITIVE_INFINITY){G(this,"maxSpeed");G(this,"velocity");this.maxSpeed=s,this.velocity=0}resetVelocity(){this.velocity=0}interpolate(s,t,e,i,r,a){let h=this.maxSpeed*Math.max(e,1e-4),c=Math.min(Math.max(s-t,-h),h),d=s-c,p=this.velocity,f=(p+i*c)*a;this.velocity=(p-i*f)*r;let g=d+(c+f)*r;return Math.abs(c)<1e-6?(g=t,this.velocity=0):t-s>0==g>t&&(this.velocity=(g-t)/a,g=t),g}static calculateOmega(s){return 2/Math.max(s,1e-4)}static calculateExp(s,t){let e=s*t,i=e*e;return 1/(1+e+.48*i+.235*e*i)}},mi=Math.PI*2,Qu=new D,Ao=new D,Rl=new le,ed=class extends ue{constructor(t,e,i,r){super();G(this,"_position");G(this,"_quaternion");G(this,"_target");G(this,"settings");G(this,"spherical0");G(this,"spherical1");G(this,"scalarDampers");G(this,"timestamp");G(this,"updateEvent");this._position=t,this._quaternion=e,this._target=i,this.settings=r,this.spherical0=new ki,this.spherical1=new ki,this.timestamp=0,this.updateEvent={type:ed.EVENT_UPDATE},this.scalarDampers=[new hn,new hn,new hn]}get position(){return this._position}set position(t){this._position=t}get quaternion(){return this._quaternion}set quaternion(t){this._quaternion=t}get target(){return this._target}set target(t){this._target=t}get radius(){return this.spherical0.radius}resetVelocity(){this.spherical1.copy(this.spherical0);for(let t of this.scalarDampers)t.resetVelocity()}restrictAngles(){let t=this.spherical1,e=this.settings.rotation,i=e.minAzimuthalAngle,r=e.maxAzimuthalAngle,a=e.minPolarAngle,h=e.maxPolarAngle;return t.theta=Math.min(Math.max(t.theta,i),r),t.phi=Math.min(Math.max(t.phi,a),h),(t.phi===0||t.phi===Math.PI)&&t.makeSafe(),this}restrictRadius(){let t=this.spherical1,e=this.settings.zoom,i=e.minDistance,r=e.maxDistance;return t.radius=Math.min(Math.max(t.radius,i),r),this}restrictSpherical(){return this.restrictRadius().restrictAngles()}updateSpherical(){if(this.settings.general.mode==="third-person"){let t=this.settings.rotation.pivotOffset;Ao.subVectors(Qu.subVectors(this.position,t),this.target),this.spherical1.setFromVector3(Ao)}else this.spherical1.setFromVector3(this.target);return this.restrictSpherical(),this.spherical0.copy(this.spherical1),this}updatePosition(){if(this.settings.general.mode==="third-person"){let t=this.settings.rotation.pivotOffset;this.position.setFromSpherical(this.spherical0).add(this.target).add(t)}return this}updateQuaternion(){let t=this.settings,e=t.rotation,i=this.target,r=Qu.copy(e.up),a=this.spherical0.phi%mi;return(a<0&&a>-Math.PI||a>Math.PI&&a<mi)&&r.negate(),t.general.mode==="third-person"?Rl.lookAt(Ao.subVectors(this.position,i),e.pivotOffset,r):Rl.lookAt(Ao.set(0,0,0),i.setFromSpherical(this.spherical0),r),this.quaternion.setFromRotationMatrix(Rl),this.dispatchEvent(this.updateEvent),this}adjustSpherical(t,e){let i=this.spherical1,r=this.settings,a=r.rotation,h=a.invertedY,c=r.general.mode==="third-person",d=(c||h)&&!(c&&h);return i.theta=a.invertedX?i.theta+t:i.theta-t,i.phi=d?i.phi-e:i.phi+e,this.restrictAngles()}zoom(t){let e=this.spherical1,i=this.settings,r=i.zoom;if(r.enabled&&i.general.mode==="third-person"){let a=t*r.sensitivity;e.radius=r.inverted?e.radius-a:e.radius+a,this.restrictRadius()}return this}lookAt(t){return this.settings.general.mode==="third-person"?this.target.copy(t).sub(this.settings.rotation.pivotOffset):this.target.subVectors(t,this.position).normalize(),this}getViewDirection(t){let i=this.settings.general.mode==="third-person";return t.setFromSpherical(this.spherical0).normalize(),i?t.negate():t}update(t){let e=this.spherical0,i=this.spherical1;if(e.radius===i.radius&&e.theta===i.theta&&e.phi===i.phi)Math.abs(e.theta)>=mi&&(e.theta%=mi,i.theta%=mi),Math.abs(e.phi)>=mi&&(e.phi%=mi,i.phi%=mi);else{let a=this.settings,h=this.scalarDampers,c=(t-this.timestamp)*td;if(a.rotation.damping>0){let d=a.rotation.damping,p=hn.calculateOmega(d),f=hn.calculateExp(p,c);e.theta=h[0].interpolate(e.theta,i.theta,d,p,f,c),e.phi=h[1].interpolate(e.phi,i.phi,d,p,f,c)}else e.theta=i.theta,e.phi=i.phi;if(a.zoom.damping>0){let d=a.zoom.damping,p=hn.calculateOmega(d),f=hn.calculateExp(p,c);e.radius=h[2].interpolate(e.radius,i.radius,d,p,f,c)}else e.radius=i.radius;this.updatePosition().updateQuaternion()}this.timestamp=t}},nd=ed;Xn(nd,"EVENT_UPDATE","update");var Nb=class{constructor(){G(this,"left");G(this,"right");G(this,"forward");G(this,"backward");G(this,"up");G(this,"down");G(this,"backwardBeforeForward");G(this,"rightBeforeLeft");G(this,"upBeforeDown");G(this,"boost");this.reset()}get active(){return this.forward||this.backward||this.left||this.right||this.up||this.down}reset(){return this.left=!1,this.right=!1,this.forward=!1,this.backward=!1,this.up=!1,this.down=!1,this.backwardBeforeForward=!1,this.rightBeforeLeft=!1,this.upBeforeDown=!1,this.boost=!1,this}},Ub=new D(1,0,0),id=new D(0,1,0),Ob=new D(0,0,1),Ll=new D,sd=class extends ue{constructor(t,e,i,r){super();G(this,"_position");G(this,"_quaternion");G(this,"_target");G(this,"settings");G(this,"movementState");G(this,"velocity0");G(this,"velocity1");G(this,"scalarDampers");G(this,"timestamp");G(this,"updateEvent");this._position=t,this._quaternion=e,this._target=i,this.settings=r,this.movementState=new Nb,this.velocity0=new D,this.velocity1=new D,this.timestamp=0,this.updateEvent={type:sd.EVENT_UPDATE},this.scalarDampers=[new hn,new hn,new hn]}get position(){return this._position}set position(t){this._position=t}get quaternion(){return this._quaternion}set quaternion(t){this._quaternion=t}get target(){return this._target}set target(t){this._target=t}resetVelocity(){this.velocity0.set(0,0,0),this.velocity1.set(0,0,0);for(let t of this.scalarDampers)t.resetVelocity()}translateOnAxis(t,e){Ll.copy(t).applyQuaternion(this.quaternion).multiplyScalar(e),this.position.add(Ll),this.settings.general.mode==="third-person"&&this.target.add(Ll)}translate(t){let e=this.velocity0;e.x!==0&&this.translateOnAxis(Ub,e.x*t),e.y!==0&&this.translateOnAxis(id,e.y*t),e.z!==0&&this.translateOnAxis(Ob,e.z*t),this.dispatchEvent(this.updateEvent)}update(t){if(!this.settings.translation.enabled){this.timestamp=t;return}let i=this.movementState,r=this.settings.translation,a=i.boost?r.boostMultiplier:1,h=r.sensitivity,c=this.scalarDampers,d=this.velocity0,p=this.velocity1,f=h*a;p.setScalar(0),i.active&&(i.backward&&i.forward?p.z=i.backwardBeforeForward?f:-f:i.backward?p.z=f:i.forward&&(p.z=-f),i.right&&i.left?p.x=i.rightBeforeLeft?f:-f:i.right?p.x=f:i.left&&(p.x=-f),i.up&&i.down?p.y=i.upBeforeDown?f:-f:i.up?p.y=f:i.down&&(p.y=-f));let g=(t-this.timestamp)*td;if(this.timestamp=t,!d.equals(p))if(r.damping>0){let v=r.damping,x=hn.calculateOmega(v),y=hn.calculateExp(x,g);d.x=c[0].interpolate(d.x,p.x,v,x,y,g),d.y=c[1].interpolate(d.y,p.y,v,x,y,g),d.z=c[2].interpolate(d.z,p.z,v,x,y,g)}else d.copy(p);(d.x!==0||d.y!==0||d.z!==0)&&this.translate(g)}},rd=sd;Xn(rd,"EVENT_UPDATE","update");var Dl=class extends ue{constructor(){super();G(this,"_mode");G(this,"_previousMode");this._mode="first-person",this._previousMode=this._mode}get previousMode(){return this._previousMode}get mode(){return this._mode}set mode(t){this._mode!==t&&(this._mode=t,this.dispatchEvent({type:Dl.EVENT_CHANGE}),this._previousMode=t)}copy(t){return this.mode=t.mode,this}clone(){return new Dl().copy(this)}fromJSON(t){return this.mode=t.mode,this}toJSON(){return{mode:this.mode}}},od=Dl;Xn(od,"EVENT_CHANGE","change");var Nl=class{constructor(){G(this,"defaultActions");G(this,"actions");this.defaultActions=new Map,this.actions=new Map}reset(){return this.actions=new Map(this.defaultActions),this}setDefault(s){return this.defaultActions=s,this.reset()}clearDefault(){return this.defaultActions.clear(),this}clear(){return this.actions.clear(),this}copy(s){return this.defaultActions=new Map(s.defaultActions),this.actions=new Map(s.actions),this}clone(){return new Nl().copy(this)}fromJSON(s){return s!==void 0&&(this.defaultActions=new Map(s.defaultActions),this.actions=new Map(s.actions)),this}has(s){return this.actions.has(s)}get(s){return this.actions.get(s)}set(s,t){return this.actions.set(s,t),this}delete(s){return this.actions.delete(s)}toJSON(){return{defaultActions:[...this.defaultActions],actions:[...this.actions]}}},Co=class extends ue{constructor(){super();G(this,"_behaviour");G(this,"_sensitivity");this._behaviour="default",this._sensitivity=.001}get behaviour(){return this._behaviour}set behaviour(t){this._behaviour=t,this.dispatchEvent({type:Co.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(t){this._sensitivity=t,this.dispatchEvent({type:Co.EVENT_CHANGE})}copy(t){return this.behaviour=t.behaviour,this.sensitivity=t.sensitivity,this}clone(){return new Co().copy(this)}fromJSON(t){return this.behaviour=t.behaviour,this.sensitivity=t.sensitivity,this}toJSON(){return{behaviour:this.behaviour,sensitivity:this.sensitivity}}},ad=Co;Xn(ad,"EVENT_CHANGE","change");var Xe=class extends ue{constructor(){super();G(this,"_enabled");G(this,"_up");G(this,"_pivotOffset");G(this,"_minAzimuthalAngle");G(this,"_maxAzimuthalAngle");G(this,"_minPolarAngle");G(this,"_maxPolarAngle");G(this,"_invertedX");G(this,"_invertedY");G(this,"_sensitivityX");G(this,"_sensitivityY");G(this,"_damping");this._enabled=!0,this._up=new D,this._up.copy(id),this._pivotOffset=new D,this._minAzimuthalAngle=Number.NEGATIVE_INFINITY,this._maxAzimuthalAngle=Number.POSITIVE_INFINITY,this._minPolarAngle=0,this._maxPolarAngle=Math.PI,this._invertedX=!1,this._invertedY=!1,this._sensitivityX=1,this._sensitivityY=1,this._damping=0}get enabled(){return this._enabled}set enabled(t){this._enabled=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get up(){return this._up}set up(t){this._up=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get pivotOffset(){return this._pivotOffset}set pivotOffset(t){this._pivotOffset=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get minAzimuthalAngle(){return this._minAzimuthalAngle}set minAzimuthalAngle(t){this._minAzimuthalAngle=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get maxAzimuthalAngle(){return this._maxAzimuthalAngle}set maxAzimuthalAngle(t){this._maxAzimuthalAngle=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get minPolarAngle(){return this._minPolarAngle}set minPolarAngle(t){this._minPolarAngle=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get maxPolarAngle(){return this._maxPolarAngle}set maxPolarAngle(t){this._maxPolarAngle=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get invertedX(){return this._invertedX}set invertedX(t){this._invertedX=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get invertedY(){return this._invertedY}set invertedY(t){this._invertedY=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get sensitivityX(){return this._sensitivityX}set sensitivityX(t){this._sensitivityX=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get sensitivityY(){return this._sensitivityY}set sensitivityY(t){this._sensitivityY=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}set sensitivity(t){this._sensitivityX=this._sensitivityY=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}get damping(){return this._damping}set damping(t){this._damping=t,this.dispatchEvent({type:Xe.EVENT_CHANGE})}copy(t){return this.up.copy(t.up),this.pivotOffset.copy(t.pivotOffset),this.minAzimuthalAngle=t.minAzimuthalAngle,this.maxAzimuthalAngle=t.maxAzimuthalAngle,this.minPolarAngle=t.minPolarAngle,this.maxPolarAngle=t.maxPolarAngle,this.invertedX=t.invertedX,this.invertedY=t.invertedY,this.sensitivityX=t.sensitivityX,this.sensitivityY=t.sensitivityY,this.damping=t.damping,this}clone(){return new Xe().copy(this)}fromJSON(t){return this.enabled=t.enabled,this.up.copy(t.up),this.pivotOffset.copy(t.pivotOffset),this.minAzimuthalAngle=t.minAzimuthalAngle!==null?t.minAzimuthalAngle:Number.NEGATIVE_INFINITY,this.maxAzimuthalAngle=t.maxAzimuthalAngle!==null?t.maxAzimuthalAngle:Number.POSITIVE_INFINITY,this.minPolarAngle=t.minPolarAngle!==null?t.minPolarAngle:Number.NEGATIVE_INFINITY,this.maxPolarAngle=t.maxPolarAngle!==null?t.maxPolarAngle:Number.POSITIVE_INFINITY,this.invertedX=t.invertedX,this.invertedY=t.invertedY,this.sensitivityX=t.sensitivityX,this.sensitivityY=t.sensitivityY,this.damping=t.damping,this}toJSON(){return{enabled:this.enabled,up:this.up,pivotOffset:this.pivotOffset,minAzimuthalAngle:this.minAzimuthalAngle,maxAzimuthalAngle:this.maxAzimuthalAngle,minPolarAngle:this.minPolarAngle,maxPolarAngle:this.maxPolarAngle,invertedX:this.invertedX,invertedY:this.invertedY,sensitivityX:this.sensitivityX,sensitivityY:this.sensitivityY,damping:this.damping}}},ld=Xe;Xn(ld,"EVENT_CHANGE","change");var Ns=class extends ue{constructor(){super();G(this,"_enabled");G(this,"_sensitivity");G(this,"_boostMultiplier");G(this,"_damping");this._enabled=!0,this._sensitivity=1,this._boostMultiplier=2,this._damping=0}get enabled(){return this._enabled}set enabled(t){this._enabled=t,this.dispatchEvent({type:Ns.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(t){this._sensitivity=t,this.dispatchEvent({type:Ns.EVENT_CHANGE})}get boostMultiplier(){return this._boostMultiplier}set boostMultiplier(t){this._boostMultiplier=Math.max(t,1),this.dispatchEvent({type:Ns.EVENT_CHANGE})}get damping(){return this._damping}set damping(t){this._damping=t,this.dispatchEvent({type:Ns.EVENT_CHANGE})}copy(t){return this.enabled=t.enabled,this.sensitivity=t.sensitivity,this.boostMultiplier=t.boostMultiplier,this.damping=t.damping,this}clone(){return new Ns().copy(this)}fromJSON(t){return this.enabled=t.enabled,this.sensitivity=t.sensitivity,this.boostMultiplier=t.boostMultiplier,this.damping=t.damping,this}toJSON(){return{enabled:this.enabled,sensitivity:this.sensitivity,boostMultiplier:this.boostMultiplier,damping:this.damping}}},cd=Ns;Xn(cd,"EVENT_CHANGE","change");var Gn=class extends ue{constructor(){super();G(this,"_enabled");G(this,"_inverted");G(this,"_minDistance");G(this,"_maxDistance");G(this,"_sensitivity");G(this,"_damping");this._enabled=!0,this._inverted=!1,this._minDistance=1e-6,this._maxDistance=Number.POSITIVE_INFINITY,this._sensitivity=1,this._damping=0}get enabled(){return this._enabled}set enabled(t){this._enabled=t,this.dispatchEvent({type:Gn.EVENT_CHANGE})}get inverted(){return this._inverted}set inverted(t){this._inverted=t,this.dispatchEvent({type:Gn.EVENT_CHANGE})}get minDistance(){return this._minDistance}set minDistance(t){this._minDistance=Math.min(Math.max(t,1e-6),Number.POSITIVE_INFINITY),this.dispatchEvent({type:Gn.EVENT_CHANGE})}get maxDistance(){return this._maxDistance}set maxDistance(t){this._maxDistance=Math.min(Math.max(t,this._minDistance),Number.POSITIVE_INFINITY),this.dispatchEvent({type:Gn.EVENT_CHANGE})}setRange(t,e){this._minDistance=t,this._maxDistance=e,this.dispatchEvent({type:Gn.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(t){this._sensitivity=t,this.dispatchEvent({type:Gn.EVENT_CHANGE})}get damping(){return this._damping}set damping(t){this._damping=t,this.dispatchEvent({type:Gn.EVENT_CHANGE})}copy(t){return this.enabled=t.enabled,this.inverted=t.inverted,this.minDistance=t.minDistance,this.maxDistance=t.maxDistance,this.sensitivity=t.sensitivity,this.damping=t.damping,this}clone(){return new Gn().copy(this)}fromJSON(t){return this.enabled=t.enabled,this.inverted=t.inverted,this.minDistance=t.minDistance,this.maxDistance=t.maxDistance||Number.POSITIVE_INFINITY,this.sensitivity=t.sensitivity,this.damping=t.damping,this}toJSON(){return{enabled:this.enabled,inverted:this.inverted,minDistance:this.minDistance,maxDistance:this.maxDistance,sensitivity:this.sensitivity,damping:this.damping}}},hd=Gn;Xn(hd,"EVENT_CHANGE","change");var Wn=class extends ue{constructor(){super();G(this,"keyBindings");G(this,"pointerBindings");G(this,"general");G(this,"pointer");G(this,"rotation");G(this,"translation");G(this,"zoom");this.keyBindings=new Nl,this.keyBindings.setDefault(new Map([["KeyW",0],["ArrowUp",0],["KeyA",1],["ArrowLeft",1],["KeyS",2],["ArrowDown",2],["KeyD",3],["ArrowRight",3],["KeyX",4],["Space",5],["PageDown",6],["PageUp",7],["ShiftLeft",8]])),this.pointerBindings=new Nl,this.pointerBindings.setDefault(new Map([[0,9]])),this.general=new od,this.pointer=new ad,this.rotation=new ld,this.translation=new cd,this.zoom=new hd,this.general.addEventListener(Wn.EVENT_CHANGE,t=>this.dispatchEvent(t)),this.pointer.addEventListener(Wn.EVENT_CHANGE,t=>this.dispatchEvent(t)),this.rotation.addEventListener(Wn.EVENT_CHANGE,t=>this.dispatchEvent(t)),this.translation.addEventListener(Wn.EVENT_CHANGE,t=>this.dispatchEvent(t)),this.zoom.addEventListener(Wn.EVENT_CHANGE,t=>this.dispatchEvent(t))}copy(t){return this.keyBindings.copy(t.keyBindings),this.pointerBindings.copy(t.pointerBindings),this.general.copy(t.general),this.pointer.copy(t.pointer),this.rotation.copy(t.rotation),this.translation.copy(t.translation),this.zoom.copy(t.zoom),this.dispatchEvent({type:Wn.EVENT_CHANGE}),this}clone(){return new Wn().copy(this)}fromJSON(t){let e=JSON.parse(t);return this.keyBindings.fromJSON(e.keyBindings),this.pointerBindings.fromJSON(e.pointerBindings),this.general.fromJSON(e.general),this.pointer.fromJSON(e.pointer),this.rotation.fromJSON(e.rotation),this.translation.fromJSON(e.translation),this.zoom.fromJSON(e.zoom),this.dispatchEvent({type:Wn.EVENT_CHANGE}),this}toBlob(){return new Blob([JSON.stringify(this)],{type:"text/json"})}toJSON(){return{keyBindings:this.keyBindings,pointerBindings:this.pointerBindings,general:this.general,pointer:this.pointer,rotation:this.rotation,translation:this.translation,zoom:this.zoom}}},ud=Wn;Xn(ud,"EVENT_CHANGE","change");var Il=new D,Po=class extends ue{constructor(t=new D,e=new Ge,i=null){super();G(this,"_domElement");G(this,"_position");G(this,"_quaternion");G(this,"_target");G(this,"previousPosition");G(this,"previousQuaternion");G(this,"previousTarget");G(this,"rotationManager");G(this,"translationManager");G(this,"strategies");G(this,"dragging");G(this,"_enabled");G(this,"settings");i===null&&typeof document!="undefined"?this._domElement=document.body:this._domElement=i,this._position=t,this._quaternion=e,this._target=new D,this.previousPosition=new D,this.previousQuaternion=new Ge,this.previousTarget=new D;let r=this.settings=new ud;r.addEventListener("change",h=>this.handleEvent(h)),this.rotationManager=new nd(t,e,this._target,r),this.translationManager=new rd(t,e,this._target,r),this.rotationManager.addEventListener(Po.EVENT_UPDATE,h=>this.dispatchEvent(h)),this.translationManager.addEventListener(Po.EVENT_UPDATE,h=>this.dispatchEvent(h));let a=this.translationManager.movementState;this.strategies=new Map([[0,new Ds(a,0)],[1,new Ds(a,1)],[2,new Ds(a,2)],[3,new Ds(a,3)],[4,new Ds(a,4)],[5,new Ds(a,5)],[6,new ju(this.rotationManager,!1)],[7,new ju(this.rotationManager,!0)],[8,new Lb(a)],[9,new Ib(this)]]),this.dragging=!1,this._enabled=!1,t!==null&&e!==null&&(this._target.set(0,0,-1).applyQuaternion(this._quaternion),this.lookAt(this._target),i!==null&&(this.enabled=!0),this.previousPosition.copy(this._position),this.previousQuaternion.copy(this._quaternion),this.previousTarget.copy(this._target))}get domElement(){return this._domElement}set domElement(t){let e=this.enabled;t!==null&&(e&&(this.enabled=!1),this._domElement=t,this.enabled=e)}get position(){return this._position}set position(t){this._position=t,this.rotationManager.position=t,this.translationManager.position=t}get quaternion(){return this._quaternion}set quaternion(t){this._quaternion=t,this.rotationManager.quaternion=t,this.translationManager.quaternion=t}get target(){return this._target}set target(t){this._target=t,this.rotationManager.target=t,this.translationManager.target=t}lookAt(t,e,i){return t instanceof D?this.rotationManager.lookAt(t):this.rotationManager.lookAt(Il.set(t,e,i)),this}getViewDirection(t){return this.rotationManager.getViewDirection(t)}get enabled(){return this._enabled}set enabled(t){if(this.domElement===null)return;let e=this.domElement;this.translationManager.movementState.reset(),t&&!this._enabled?(e.style.touchAction="none",document.addEventListener("pointerlockchange",this),document.addEventListener("pointerlockerror",this),document.addEventListener("visibilitychange",this),document.body.addEventListener("keyup",this),document.body.addEventListener("keydown",this),e.addEventListener("mousedown",this),e.addEventListener("mouseup",this),e.addEventListener("pointerdown",this),e.addEventListener("pointerup",this),e.addEventListener("pointercancel",this),e.addEventListener("wheel",this,{passive:!0})):!t&&this._enabled&&(e.style.touchAction="",document.removeEventListener("pointerlockchange",this),document.removeEventListener("pointerlockerror",this),document.removeEventListener("visibilitychange",this),document.body.removeEventListener("keyup",this),document.body.removeEventListener("keydown",this),e.removeEventListener("mousedown",this),e.removeEventListener("mouseup",this),e.removeEventListener("pointerdown",this),e.removeEventListener("pointerup",this),e.removeEventListener("pointercancel",this),e.removeEventListener("wheel",this),e.removeEventListener("pointermove",this)),this.translationManager.resetVelocity(),this.rotationManager.resetVelocity(),this.setPointerLocked(!1),this._enabled=t}copy(t){let e=this.position=t.position,i=this.quaternion=t.quaternion,r=this.target=t.target;return this.domElement=t.domElement,this.settings.copy(t.settings),this.rotationManager.position=e,this.rotationManager.quaternion=i,this.rotationManager.target=r,this.translationManager.position=e,this.translationManager.quaternion=i,this.translationManager.target=r,this.lookAt(r)}clone(){return new Po().copy(this)}setPointerLocked(t=!0){var e;t?document.pointerLockElement!==this.domElement&&((e=this.domElement)==null?void 0:e.requestPointerLock)!==void 0&&this.domElement.requestPointerLock():document.exitPointerLock!==void 0&&document.exitPointerLock()}setRotationEnabled(t){var e,i;this.settings.rotation.enabled&&t?(e=this.domElement)==null||e.addEventListener("pointermove",this,{passive:!0}):(i=this.domElement)==null||i.removeEventListener("pointermove",this)}handlePointerMoveEvent(t){let e=this.settings,i=e.rotation,r=e.pointer.behaviour,a=e.pointer.sensitivity,h=this.rotationManager;(r!=="lock-hold"||this.dragging)&&h.adjustSpherical(t.movementX*a*i.sensitivityX,t.movementY*a*i.sensitivityY)}handlePointerButtonEvent(t,e){var a;let i=this.settings.pointerBindings,r=this.settings.pointer.behaviour;if(i.has(t.button)){let h=i.get(t.button);if(!(t instanceof PointerEvent&&t.pointerType==="mouse")){let c=this.strategies.get(h);c==null||c.execute(e,t),h===9&&(this.dragging=e)}t instanceof PointerEvent&&e&&r==="default"&&((a=this.domElement)==null||a.setPointerCapture(t.pointerId))}}handlePointerCancelEvent(t){var e;(e=this.domElement)==null||e.removeEventListener("pointermove",this)}handleWheelEvent(t){this.rotationManager.zoom(Math.sign(t.deltaY))}handleKeyboardEvent(t,e){let i=this.settings.keyBindings,r=t.code!==void 0?t.code:Db.get(t.keyCode);if(i.has(r)){t.preventDefault();let a=this.strategies.get(i.get(r));a==null||a.execute(e)}}handlePointerLockEvent(){var t,e;document.pointerLockElement===this.domElement?(t=this.domElement)==null||t.addEventListener("pointermove",this,{passive:!0}):(e=this.domElement)==null||e.removeEventListener("pointermove",this)}handleVisibilityChangeEvent(){var t;document.hidden&&(this.translationManager.movementState.reset(),(t=this.domElement)==null||t.removeEventListener("pointermove",this))}onSettingsChanged(t){let e=this.rotationManager,i=this.settings,r=i.general;i.translation.enabled||this.translationManager.resetVelocity(),i.rotation.enabled||this.rotationManager.resetVelocity(),r.mode!==r.previousMode?(r.mode==="third-person"?(Il.copy(this.target),this.target.copy(this.position),this.position.sub(Il)):(this.position.copy(this.target),this.target.set(0,0,-1).applyQuaternion(this.quaternion)),e.updateSpherical()):e.restrictSpherical(),e.updatePosition().updateQuaternion(),this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target)}synchronize(){let t=this.settings.general.mode,e=this.rotationManager,i=this.previousPosition,r=this.previousQuaternion,a=this.previousTarget,h=this.position,c=this.quaternion,d=this.target;r.equals(c)?a.equals(d)?i.equals(h)||t==="third-person"&&e.updateSpherical().updateQuaternion():i.equals(h)&&t==="third-person"?e.updatePosition():e.updateSpherical().updateQuaternion():(t==="third-person"?(d.set(0,0,-1).applyQuaternion(c),d.multiplyScalar(e.radius),d.add(h)):d.set(0,0,-1).applyQuaternion(c),e.updateSpherical())}handleEvent(t){switch(t.type){case"pointermove":this.handlePointerMoveEvent(t);break;case"pointerdown":case"mousedown":this.handlePointerButtonEvent(t,!0);break;case"pointerup":case"mouseup":this.handlePointerButtonEvent(t,!1);break;case"pointercancel":this.handlePointerCancelEvent(t);break;case"keydown":this.handleKeyboardEvent(t,!0);break;case"keyup":this.handleKeyboardEvent(t,!1);break;case"wheel":this.handleWheelEvent(t);break;case"pointerlockchange":this.handlePointerLockEvent();break;case"visibilitychange":this.handleVisibilityChangeEvent();break;case"change":this.onSettingsChanged(t);break}}update(t){this.synchronize(),this.rotationManager.update(t),this.translationManager.update(t),this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target)}dispose(){this.enabled=!1}},Ol=Po;Xn(Ol,"EVENT_UPDATE","update");var Fb=Math.PI/180,kb=180/Math.PI;function dd(s,t=16/9){return Math.atan(Math.tan(s*Fb*.5)/t)*kb*2}var pd=new Ss,fd=new le,md=new D,Fl=new D,Bb=new Ge,_r=class{constructor(t){G(this,"octree");G(this,"cullCamera");G(this,"s");G(this,"cameraHelper");G(this,"mesh");G(this,"enabled");G(this,"time");this.octree=t,this.cullCamera=new Ie(20,1.77,.2,2),this.s=new ki(2,Math.PI/3,Math.PI*1.75),this.cameraHelper=new wo(this.cullCamera),this.mesh=new As(new _n(1,1,1),new fi({transparent:!0,color:13434624,opacity:.75}),1e3),this.mesh.visible=!1,this.cameraHelper.visible=!1,this.enabled=!1,this.time=""}getMesh(){return this.mesh}getCameraHelper(){return this.cameraHelper}updateCamera(){let t=this.cullCamera;t.position.setFromSpherical(this.s.makeSafe()),t.lookAt(Fl.set(0,0,0)),t.updateMatrixWorld(!0),pd.setFromProjectionMatrix(fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse))}cull(){if(!this.enabled)return;this.updateCamera();let t=performance.now(),e=this.octree.cull(pd);this.time=(performance.now()-t).toFixed(2)+" ms";let i=this.mesh;if(i.count=e.length,e.length>0){for(let r=0,a=e.length;r<a;++r){let h=e[r];h.getCenter(Fl),h.getDimensions(md),i.setMatrixAt(r,fd.compose(Fl,Bb,md))}i.instanceMatrix.needsUpdate=!0}}registerOptions(t){let e=t.addFolder({title:"Frustum Culling"});e.addInput(this,"enabled").on("change",r=>{this.cameraHelper.visible=r.value,this.mesh.visible=r.value,this.cull()}),e.addMonitor(this,"time");let i=e.addFolder({title:"Camera Adjustment"});i.addInput(this.s,"radius",{min:.01,max:4,step:.01}).on("change",r=>this.cull()),i.addInput(this.s,"phi",{min:1e-6,max:Math.PI-1e-6,step:1e-4}).on("change",r=>this.cull()),i.addInput(this.s,"theta",{min:0,max:Math.PI*2,step:1e-4}).on("change",r=>this.cull())}dispose(){let t=this.mesh.geometry,e=this.mesh.material;t.dispose(),e.dispose()}};var kl=new ie,Vb=new le,gd=new D,vd=new D,zb=new Ge,xr=class extends yo{constructor(e,i,r){super();G(this,"octree");G(this,"domElement");G(this,"mesh");G(this,"enabled");G(this,"time");this.params.Points!==void 0&&(this.params.Points.threshold=.1),this.octree=e,this.camera=i,this.domElement=r,this.enabled=!0,this.time="",this.mesh=new As(new _n(1,1,1),new fi({transparent:!0,color:52479,opacity:.75}),100),this.mesh.count=0,document.addEventListener("keyup",this,{passive:!0}),r.addEventListener("pointermove",this,{passive:!0})}getMesh(){return this.mesh}raycast(e){if(!this.enabled)return;kl.x=e.clientX/window.innerWidth*2-1,kl.y=-(e.clientY/window.innerHeight)*2+1,this.setFromCamera(kl,this.camera);let i=performance.now(),r=this.octree.getIntersectingNodes(this);this.time=(performance.now()-i).toFixed(2)+" ms";let a=this.mesh;if(a.count=r.length,r.length>0){for(let h=0,c=r.length;h<c;++h){let d=r[h];d.getCenter(vd),d.getDimensions(gd),a.setMatrixAt(h,Vb.compose(vd,zb,gd))}a.instanceMatrix.needsUpdate=!0}}registerOptions(e){let i=e.addFolder({title:"Rayasting"});i.addInput(this,"enabled",{label:"freeze (press E)"}),i.addMonitor(this,"time")}handleKeyboardEvent(e){e.key==="e"&&(this.enabled=!this.enabled)}handleEvent(e){switch(e.type){case"keyup":this.handleKeyboardEvent(e);break;case"pointermove":this.raycast(e);break}}dispose(){let e=this.domElement;document.removeEventListener("keyup",this),e.removeEventListener("pointermove",this);let i=this.mesh.geometry,r=this.mesh.material;i.dispose(),r.dispose()}};var Us=class{constructor(){G(this,"data");this.data=null}};var Os=class extends Us{constructor(){super();G(this,"children");this.children=0}};var qn=class{static parseBin(t){return parseInt(t,2)}static toString(t,e=64){return(t<0?"-":"")+Math.abs(t).toString(2).padStart(e,"0")}};var Ro=class{constructor(t,e,i){G(this,"keyDesign");G(this,"min");G(this,"max");G(this,"keyBase");G(this,"key");G(this,"limit");G(this,"result");this.keyDesign=t,this.min=e,this.max=i,this.keyBase=new D,this.key=new D,this.limit=new D,this.reset()}reset(){let t=this.keyDesign,e=this.keyBase,i=this.limit,r=this.key,a=this.min,h=this.max;if(a.x>=0&&a.y>=0&&a.z>=0&&a.x<=h.x&&a.y<=h.y&&a.z<=h.z)e.set(a.x,a.y*t.rangeX,a.z*t.rangeXY),i.set(h.x,h.y*t.rangeX,h.z*t.rangeXY),r.copy(e);else throw e.set(1,1,1),i.set(0,0,0),r.copy(e),new Error("Invalid key range");return this.result={done:!1},this}next(){let t=this.result,e=this.keyDesign,i=this.keyBase,r=this.limit,a=this.key;return a.z<=r.z?(t.value=a.z+a.y+a.x,++a.x,a.x>r.x&&(a.x=i.x,a.y+=e.rangeX,a.y>r.y&&(a.y=i.y,a.z+=e.rangeXY))):(t.value=null,t.done=!0),t}return(t){return this.result.value=t,this.result.done=!0,this.result}[Symbol.iterator](){return this}};var Ne=32,br=Math.pow(2,Ne),Bl=53,Hb=21,Bi=32,Vi=class{constructor(t=8,e=t,i=t){G(this,"bits");G(this,"range");G(this,"maskX");G(this,"maskY");G(this,"maskZ");this.bits=new D,this.range=new ye,this.maskX=[0,0],this.maskY=[0,0],this.maskZ=[0,0],this.set(t,e,i)}get x(){return this.bits.x}get y(){return this.bits.y}get z(){return this.bits.z}get rangeX(){return this.range.x}get rangeY(){return this.range.y}get rangeZ(){return this.range.z}get rangeXY(){return this.range.w}getMinKeyCoordinates(t){return t.set(0,0,0)}getMaxKeyCoordinates(t){let e=this.range;return t.set(Math.max(e.x-1,0),Math.max(e.y-1,0),Math.max(e.z-1,0))}updateBitMasks(){let t=this.x,e=this.y,i=this.z,r=this.maskX,a=this.maskY,h=this.maskZ,c=Ne-Math.max(0,t-Bi),d=Ne-Math.max(0,e+t-Bi),p=Ne-Math.max(0,i+e+t-Bi);r[1]=c<Ne?-1>>>c:0,r[0]=-1>>>Math.max(0,Bi-t),a[1]=((d<Ne?-1>>>d:0)&~r[1])>>>0,a[0]=(-1>>>Math.max(0,Bi-(t+e))&~r[0])>>>0,h[1]=((p<Ne?-1>>>p:0)&~a[1]&~r[1])>>>0,h[0]=(-1>>>Math.max(0,Bi-(t+e+i))&~a[0]&~r[0])>>>0}set(t,e,i){if(t=Math.max(t,0),e=Math.max(e,0),i=Math.max(i,0),t===0)throw new Error("X must be greater than 0");if(t+e+i>Bl)throw new Error(`Cannot use more than ${Bl} bits total`);if(t>Ne||e>Ne||i>Ne)throw new Error(`Cannot use more than ${Ne} bits per coordinate`);this.bits.set(t,e,i),this.range.set(ni(2,t),ni(2,e),ni(2,i),ni(2,t+e)),this.updateBitMasks()}unpackKey(t,e){let i=this.maskX,r=this.maskY,a=this.maskZ,h=Math.trunc(t/br),c=t%br;return e.set((h&i[1])*br+((c&i[0])>>>0),((h&r[1])*br+((c&r[0])>>>0))/this.rangeX,((h&a[1])*br+((c&a[0])>>>0))/this.rangeXY)}packKey(t,e,i){return i*this.rangeXY+e*this.rangeX+t}calculateBounds(t,e){let i=this.range,r=e;return r.max.set(i.x,i.y,i.z),r.max.divideScalar(2).multiply(t),r.min.copy(r.max).negate(),r}keyRange(t,e){return new Ro(this,t,e)}equals(t){return this===t||this.x===t.x&&this.y===t.y&&this.z===t.z}toString(){let t=this.maskX,e=this.maskY,i=this.maskZ;return`Key Design

X-Bits: ${this.x}
Y-Bits: ${this.y}
Z-Bits: ${this.z}

`+qn.toString(t[1],Ne)+` ${t[1]} (HI-Mask X)
`+qn.toString(t[0],Ne)+` ${t[0]} (LO-Mask X)

`+qn.toString(e[1],Ne)+` ${e[1]} (HI-Mask Y)
`+qn.toString(e[0],Ne)+` ${e[0]} (LO-Mask Y)

`+qn.toString(i[1],Ne)+` ${i[1]} (HI-Mask Z)
`+qn.toString(i[0],Ne)+` ${i[0]} (LO-Mask Z)
`}static get BITS(){return Bl}static get HI_BITS(){return Hb}static get LO_BITS(){return Bi}};var Lo=class{constructor(t=0,e=0){G(this,"key");G(this,"level");this.key=t,this.level=e}set(t,e){return this.key=t,this.level=e,this}copy(t){return this.key=t.key,this.level=t.level,this}clone(){return new this.constructor().copy(this)}};var _d=new D,bn=class{constructor(t=null){G(this,"min");G(this,"max");G(this,"octant");G(this,"id");this.min=new D,this.max=new D,this.octant=t,this.id=new Lo}copy(t){return this.octant=t.octant,this.id.copy(t.id),this.min.copy(t.min),this.max.copy(t.max),this}getCenter(t){return t.addVectors(this.min,this.max).multiplyScalar(.5)}getDimensions(t){return t.subVectors(this.max,this.min)}clone(){return new this.constructor().copy(this)}distanceToSquared(t){return _d.copy(t).clamp(this.min,this.max).sub(t).lengthSq()}distanceToCenterSquared(t){let e=this.getCenter(_d),i=t.x-e.x,r=t.y-e.x,a=t.z-e.z;return i*i+r*r+a*a}containsPoint(t){let e=this.min,i=this.max;return t.x>=e.x&&t.y>=e.y&&t.z>=e.z&&t.x<=i.x&&t.y<=i.y&&t.z<=i.z}};var Io=class{constructor(t,e=0){G(this,"octree");G(this,"cellSize");G(this,"level");G(this,"iterator");G(this,"result");this.octree=t,this.cellSize=new D,this.level=e,this.reset()}reset(){let t=this.level,e=this.octree.getGrid(t);return this.octree.getCellSize(t,this.cellSize),this.iterator=e.entries(),this.result={done:!1},this}next(){let t=this.result,e=this.iterator.next(),i=e.value;if(e.done===void 0||!e.done){let r=new bn;this.octree.keyDesign.unpackKey(i[0],r.min),r.min.multiply(this.cellSize).add(this.octree.min),r.max.copy(r.min).add(this.cellSize),r.id.key=i[0],r.octant=i[1],t.value=r}else t.value=null,t.done=!0;return t}return(t){return this.result.value=t,this.result.done=!0,this.result}[Symbol.iterator](){return this}};var Do=new bn,xd=new Al,Vl=new ge,bd=new D,ce=new D;function Yn(s,t,e,i,r,a,h,c,d,p,f,g,v){if(p>=0&&f>=0&&g>=0){let x=s.keyDesign;if(t.data!==null){let y=s.getCellSize(a,bd),M=new bn(t);M.id.set(x.packKey(e,i,r),a),M.min.set(e,i,r).multiply(y).add(s.min),M.max.copy(M.min).add(y),v.push(M)}if(a>0&&t.children>0){let y=s.getGrid(--a),M=t.children,_=.5*(h+p),m=.5*(c+f),A=.5*(d+g),w=Cl(h,c,d,_,m,A);for(e*=2,i*=2,r*=2;w<8;){let I=xd.value^w,R=(M&(1<<I|0))!==0,N=Is[I];ce.set(e+N[0],i+N[1],r+N[2]);let O=null;switch(R&&(O=y.get(x.packKey(ce.x,ce.y,ce.z))),w){case 0:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,h,c,d,_,m,A,v),w=We(w,_,m,A);break}case 1:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,h,c,A,_,m,g,v),w=We(w,_,m,g);break}case 2:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,h,m,d,_,f,A,v),w=We(w,_,f,A);break}case 3:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,h,m,A,_,f,g,v),w=We(w,_,f,g);break}case 4:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,_,c,d,p,m,A,v),w=We(w,p,m,A);break}case 5:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,_,c,A,p,m,g,v),w=We(w,p,m,g);break}case 6:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,_,m,d,p,f,A,v),w=We(w,p,f,A);break}case 7:{O!==null&&Yn(s,O,ce.x,ce.y,ce.z,a,_,m,A,p,f,g,v),w=8;break}}}}}}var No=class{static intersectOctree(t,e){let i=[];if(Vl.min.copy(t.min),Vl.max.copy(t.max),e.intersectsBox(Vl)){let r=t.getLevels(),a=t.root.octant,h=t.keyDesign,c=t.getDimensions(bd),d=Math.max(h.x,h.y,h.z),p=ce.set(d-h.x,d-h.y,d-h.z);if(c.set(c.x*(1<<p.x>>>0),c.y*(1<<p.y>>>0),c.z*(1<<p.z>>>0)),Do.copy(t.root),Do.max.copy(Do.min).add(c),a.children>0){let f=Pl(Do,e,xd);f!==null&&Yn(t,a,0,0,0,r,f[0],f[1],f[2],f[3],f[4],f[5],i)}a.data!==null&&i.push(t.root.clone())}return i}};function zl(s,t,e){let i=s&1,r=t&1,a=e&1;return(i<<2)+(r<<1)+a}var Hl=new D,Jt=new D,Fs=new ge;function yd(s,t,e,i,r,a){if(a>0){--a;let h=s.getGrid(a),c=s.keyDesign,d=t.children;e*=2,i*=2,r*=2;for(let p=0;p<8;++p)if(d&(1<<p|0)){let f=Is[p];Jt.set(e+f[0],i+f[1],r+f[2]);let g=c.packKey(Jt.x,Jt.y,Jt.z),v=h.get(g);h.delete(g),yd(s,v,Jt.x,Jt.y,Jt.z,a)}t.children=0}}function wd(s,t,e,i,r){++r;let a=zl(t,e,i);if(r<s.getLevels()){let h=s.getGrid(r);Jt.set(t>>>1,e>>>1,i>>>1);let c=s.keyDesign.packKey(Jt.x,Jt.y,Jt.z);if(h.has(c)){let d=h.get(c);d.children|=1<<a|0}else{let d=new Os;h.set(c,d),d.children|=1<<a|0,wd(s,Jt.x,Jt.y,Jt.z,r)}}else{let h=s.root.octant;h.children|=1<<a|0}}function Md(s,t,e,i,r){++r;let a=zl(t,e,i);if(r<s.getLevels()){let h=s.getGrid(r);Jt.set(t>>>1,e>>>1,i>>>1);let c=s.keyDesign.packKey(Jt.x,Jt.y,Jt.z),d=h.get(c);d.children&=~(1<<a|0),d.children===0&&(h.delete(c),Md(s,Jt.x,Jt.y,Jt.z,r))}else{let h=s.root.octant;h.children&=~(1<<a|0)}}function Ed(s,t,e,i,r,a,h,c){let d=s.getCellSize(a,Hl);if(Fs.min.copy(Jt.set(e,i,r)).multiply(d).add(s.min),Fs.max.copy(Fs.min).add(d),h.intersectsBox(Fs)){let p=s.keyDesign;if(t.data!==null){let f=new bn(t);f.id.set(p.packKey(Jt.x,Jt.y,Jt.z),a),f.min.copy(Fs.min),f.max.copy(Fs.max),c.push(f)}if(a>0){--a;let f=s.getGrid(a),g=t.children;e*=2,i*=2,r*=2;for(let v=0;v<8;++v)if(g&(1<<v|0)){let x=Is[v];Jt.set(e+x[0],i+x[1],r+x[2]);let y=p.packKey(Jt.x,Jt.y,Jt.z),M=f.get(y);Ed(s,M,Jt.x,Jt.y,Jt.z,a,h,c)}}}}var yr=class{constructor(t,e=new Vi){G(this,"cellSize");G(this,"_keyDesign");G(this,"grids");G(this,"root");let i=Math.max(e.x,e.y,e.z);for(this._keyDesign=e,this.grids=[];this.grids.length<i;)this.grids.push(new Map);let r=new bn(new Os);r.min.copy(t.min),r.max.copy(t.max),Object.freeze(r.min),Object.freeze(r.max),Object.freeze(r),this.root=r;let a=r.getDimensions(new D);this.cellSize=a.set(a.x/e.rangeX,a.y/e.rangeY,a.z/e.rangeZ)}get min(){return this.root.min}get max(){return this.root.max}getCenter(t){return this.root.getCenter(t)}getDimensions(t){return this.root.getDimensions(t)}getDepth(){return this.grids.length-1}findNodesByLevel(t){return Array.from(this.octants(t))}getLevels(){return this.grids.length}get keyDesign(){return this._keyDesign}getCellSize(t,e){let i=this.cellSize,r=this.keyDesign;return e.set(i.x*(1<<Math.min(t,r.x)>>>0),i.y*(1<<Math.min(t,r.y)>>>0),i.z*(1<<Math.min(t,r.z)>>>0))}getGrid(t){if(t<0||t>=this.grids.length)throw new Error(`Level ${t} is out of bounds [0, ${this.grids.length-1}]`);return this.grids[t]}clear(){for(let e of this.grids)e.clear();let t=this.root.octant;t.children=0}containsPoint(t){return this.root.containsPoint(t)}calculateKeyCoordinates(t,e,i){if(!this.containsPoint(t))throw new Error("Position out of bounds");let r=this.getCellSize(e,Hl);return i.subVectors(t,this.min),i.set(Math.trunc(i.x/r.x),Math.trunc(i.y/r.y),Math.trunc(i.z/r.z)),i.min(this.keyDesign.getMaxKeyCoordinates(Hl))}getOctantByPoint(t,e=0){let i=this.keyDesign,r=this.getGrid(e);return this.calculateKeyCoordinates(t,e,Jt),r.get(i.packKey(Jt.x,Jt.y,Jt.z))}delete(t,e=0){let i=this.keyDesign,r=this.getGrid(e),{x:a,y:h,z:c}=t,d=i.packKey(a,h,c);if(r.has(d)){let p=r.get(d);yd(this,p,a,h,c,e),r.delete(d),Md(this,a,h,c,e)}}get(t,e){var p;let i=this.keyDesign,r=this.getGrid(e),{x:a,y:h,z:c}=t,d=i.packKey(a,h,c);return(p=r.get(d))==null?void 0:p.data}set(t,e,i){let r=this.keyDesign,a=this.getGrid(e),{x:h,y:c,z:d}=t,p=r.packKey(h,c,d);if(a.has(p)){let f=a.get(p);f!==void 0&&(f.data=i)}else{let f=e===0?new Us:new Os;f.data=i,a.set(p,f),wd(this,h,c,d,e)}}cull(t){let e=[],i=this.root.octant;return Ed(this,i,0,0,0,this.getDepth()+1,t,e),e}getIntersectingNodes(t){return No.intersectOctree(this,t.ray)}octants(t=0){return new Io(this,t)}[Symbol.iterator](){return this.octants()}};window.addEventListener("load",()=>{var R;(R=document.querySelector(".loading"))==null||R.classList.add("hidden");let s=new mr({powerPreference:"high-performance",antialias:!0,stencil:!1,depth:!0});s.debug.checkShaderErrors=window.location.hostname==="localhost",s.setClearColor(0,0);let t=document.querySelector(".viewport");t.append(s.domElement);let e=new xo;e.fog=new Ts(855309,.025),s.setClearColor(e.fog.color);let i=new Ie,{position:r,quaternion:a}=i,h=new Ol(r,a,s.domElement),c=h.settings;c.general.mode=Ul.THIRD_PERSON,c.zoom.setRange(1e-6,60),c.rotation.sensitivity=2.2,c.rotation.damping=.05,c.translation.sensitivity=.25,c.translation.damping=.1,c.zoom.sensitivity=1,c.zoom.damping=.1,h.position.set(5,2,3),i.updateMatrixWorld();let d=new Vi(3,3,3),p=new ge;p.min.set(-1,-1,-1),p.max.set(1,1,1);let f=new yr(p,d);console.log(f);let g=new ge,v=new D;d.getMinKeyCoordinates(g.min),d.getMaxKeyCoordinates(g.max),console.time("Octree creation");for(let N of d.keyRange(g.min,g.max))f.set(d.unpackKey(N,v),0,Math.random());console.timeEnd("Octree creation"),console.time("Octree helper");let x=new Ju(f);x.visible=!0,console.timeEnd("Octree helper"),console.log(x),e.add(x);let y=new Mo(p,new Zt(16777215));y.visible=x.visible,e.add(y);let M=new xr(f,i,s.domElement);e.add(M.getMesh());let _=new _r(f);e.add(_.getCameraHelper()),e.add(_.getMesh());let m=new Sd.Pane({container:t.querySelector(".tp")});M.registerOptions(m),_.registerOptions(m);let A={"level mask":x.children.length+1},w=m.addFolder({title:"Octree Helper"});w.addInput(x,"visible").on("change",N=>{y.visible=A["level mask"]>=x.children.length&&x.visible}),w.addInput(A,"level mask",{min:0,max:x.children.length+1,step:1}).on("change",N=>{let O=A["level mask"];for(let H=0,S=x.children.length;H<S;++H)x.children[H].visible=O>x.children.length||O===H;y.visible=O>=x.children.length&&x.visible});function I(){let N=t.clientWidth,O=t.clientHeight;i.aspect=N/O,i.fov=dd(90,Math.max(i.aspect,16/9)),i.updateProjectionMatrix(),s.setSize(N,O)}window.addEventListener("resize",I),I(),requestAnimationFrame(function N(O){h.update(O),s.render(e,i),requestAnimationFrame(N)})});})();
/*! Bundled license information:

tweakpane/dist/tweakpane.js:
  (*! Tweakpane 3.1.9 (c) 2016 cocopon, licensed under the MIT license. *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

sparse-octree/dist/index.js:
  (**
   * sparse-octree v7.1.8 build Sun Jun 04 2023
   * https://github.com/vanruesc/sparse-octree
   * Copyright 2016 Raoul van Rüschen
   * @license Zlib
   *)

spatial-controls/dist/spatial-controls.js:
  (**
   * spatial-controls v6.0.2 build Sun Jun 04 2023
   * https://github.com/vanruesc/spatial-controls
   * Copyright 2017 Raoul van Rüschen
   * @license Zlib
   *)
*/
