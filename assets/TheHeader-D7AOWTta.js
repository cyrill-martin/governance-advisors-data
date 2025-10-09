import{o as Pe,a as J,r as k,b as Ne,w as he,d as fe,c as w,e as x,f as i,g as W,h as We,i as c,m as me,u as Z,j as U,k as y,l as ge,n as Ae,p as G,T as be,v as te,q as ve,s as je,t as Le,x as L,y as X,z as H,A as Ue,B as oe,N as Xe,C as Ye,D as pe,E as we,F as f,_ as Ve,G as qe,H as O,I as P,J as R,K as re,L as Ge,M,O as Ke}from"./index-LnIg-O4v.js";import{f as K,s as Je,F as Ze,S as ye,d as Q,c as Qe,a as et,p as tt,m as ot,b as rt,z as nt,L as it,u as ne,e as st,g as I}from"./Scrollbar-CLM8H0gf.js";const at=typeof document<"u"&&typeof window<"u",ee=k(!1);function ie(){ee.value=!0}function se(){ee.value=!1}let N=0;function lt(){return at&&(Pe(()=>{N||(window.addEventListener("compositionstart",ie),window.addEventListener("compositionend",se)),N++}),J(()=>{N<=1?(window.removeEventListener("compositionstart",ie),window.removeEventListener("compositionend",se),N=0):N--})),ee}let F=0,ae="",le="",de="",ce="";const ue=k("0px");function dt(e){if(typeof document>"u")return;const t=document.documentElement;let o,a=!1;const d=()=>{t.style.marginRight=ae,t.style.overflow=le,t.style.overflowX=de,t.style.overflowY=ce,ue.value="0px"};Ne(()=>{o=he(e,l=>{if(l){if(!F){const r=window.innerWidth-t.offsetWidth;r>0&&(ae=t.style.marginRight,t.style.marginRight=`${r}px`,ue.value=`${r}px`),le=t.style.overflow,de=t.style.overflowX,ce=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}a=!0,F++}else F--,F||d(),a=!1},{immediate:!0})}),J(()=>{o?.(),a&&(F--,F||d(),a=!1)})}function ct(e){const{textColorBase:t,opacity1:o,opacity2:a,opacity3:d,opacity4:l,opacity5:r}=e;return{color:t,opacity1Depth:o,opacity2Depth:a,opacity3Depth:d,opacity4Depth:l,opacity5Depth:r}}const ut={common:fe,self:ct},ht=w("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[x("color-transition",{transition:"color .3s var(--n-bezier)"}),x("depth",{color:"var(--n-color)"},[i("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),i("svg",{height:"1em",width:"1em"})]),ft=Object.assign(Object.assign({},U.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),mt=W({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:ft,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=Z(e),a=U("Icon","-icon",ht,ut,e,t),d=y(()=>{const{depth:r}=e,{common:{cubicBezierEaseInOut:u},self:g}=a.value;if(r!==void 0){const{color:S,[`opacity${r}Depth`]:$}=g;return{"--n-bezier":u,"--n-color":S,"--n-opacity":$}}return{"--n-bezier":u,"--n-color":"","--n-opacity":""}}),l=o?ge("icon",y(()=>`${e.depth||"d"}`),d,e):void 0;return{mergedClsPrefix:t,mergedStyle:y(()=>{const{size:r,color:u}=e;return{fontSize:K(r),color:u}}),cssVars:o?void 0:d,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:a,component:d,onRender:l,themeClass:r}=this;return!((e=t?.$options)===null||e===void 0)&&e._n_icon__&&We("icon","don't wrap `n-icon` inside `n-icon`"),l?.(),c("i",me(this.$attrs,{role:"img",class:[`${a}-icon`,r,{[`${a}-icon--depth`]:o,[`${a}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),d?c(d):this.$slots)}});function gt(e){const{modalColor:t,textColor1:o,textColor2:a,boxShadow3:d,lineHeight:l,fontWeightStrong:r,dividerColor:u,closeColorHover:g,closeColorPressed:S,closeIconColor:$,closeIconColorHover:E,closeIconColorPressed:_,borderRadius:z,primaryColorHover:v}=e;return{bodyPadding:"16px 24px",borderRadius:z,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:a,titleTextColor:o,titleFontSize:"18px",titleFontWeight:r,boxShadow:d,lineHeight:l,headerBorderBottom:`1px solid ${u}`,footerBorderTop:`1px solid ${u}`,closeIconColor:$,closeIconColorHover:E,closeIconColorPressed:_,closeSize:"22px",closeIconSize:"18px",closeColorHover:g,closeColorPressed:S,closeBorderRadius:z,resizableTriggerColorHover:v}}const bt=Ae({name:"Drawer",common:fe,peers:{Scrollbar:Je},self:gt}),vt=W({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=k(!!e.show),o=k(null),a=ve(Q);let d=0,l="",r=null;const u=k(!1),g=k(!1),S=y(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:$,mergedRtlRef:E}=Z(e),_=je("Drawer",E,$),z=n,v=s=>{g.value=!0,d=S.value?s.clientY:s.clientX,l=document.body.style.cursor,document.body.style.cursor=S.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",B),document.body.addEventListener("mouseleave",z),document.body.addEventListener("mouseup",n)},A=()=>{r!==null&&(window.clearTimeout(r),r=null),g.value?u.value=!0:r=window.setTimeout(()=>{u.value=!0},300)},Y=()=>{r!==null&&(window.clearTimeout(r),r=null),u.value=!1},{doUpdateHeight:V,doUpdateWidth:q}=a,D=s=>{const{maxWidth:m}=e;if(m&&s>m)return m;const{minWidth:p}=e;return p&&s<p?p:s},j=s=>{const{maxHeight:m}=e;if(m&&s>m)return m;const{minHeight:p}=e;return p&&s<p?p:s};function B(s){var m,p;if(g.value)if(S.value){let C=((m=o.value)===null||m===void 0?void 0:m.offsetHeight)||0;const T=d-s.clientY;C+=e.placement==="bottom"?T:-T,C=j(C),V(C),d=s.clientY}else{let C=((p=o.value)===null||p===void 0?void 0:p.offsetWidth)||0;const T=d-s.clientX;C+=e.placement==="right"?T:-T,C=D(C),q(C),d=s.clientX}}function n(){g.value&&(d=0,g.value=!1,document.body.style.cursor=l,document.body.removeEventListener("mousemove",B),document.body.removeEventListener("mouseup",n),document.body.removeEventListener("mouseleave",z))}Le(()=>{e.show&&(t.value=!0)}),he(()=>e.show,s=>{s||n()}),J(()=>{n()});const h=y(()=>{const{show:s}=e,m=[[te,s]];return e.showMask||m.push([Qe,e.onClickoutside,void 0,{capture:!0}]),m});function b(){var s;t.value=!1,(s=e.onAfterLeave)===null||s===void 0||s.call(e)}return dt(y(()=>e.blockScroll&&t.value)),L(et,o),L(tt,null),L(ot,null),{bodyRef:o,rtlEnabled:_,mergedClsPrefix:a.mergedClsPrefixRef,isMounted:a.isMountedRef,mergedTheme:a.mergedThemeRef,displayed:t,transitionName:y(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:b,bodyDirectives:h,handleMousedownResizeTrigger:v,handleMouseenterResizeTrigger:A,handleMouseleaveResizeTrigger:Y,isDragging:g,isHoverOnResizeTrigger:u}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?G(c("div",{role:"none"},c(Ze,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>c(be,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>G(c("div",me(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?c("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?c("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):c(ye,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[te,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:pt,cubicBezierEaseOut:wt}=X;function yt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${pt}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${wt}`}),i(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:St,cubicBezierEaseOut:Ct}=X;function xt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${St}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Ct}`}),i(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:zt,cubicBezierEaseOut:$t}=X;function Bt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${zt}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${$t}`}),i(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:kt,cubicBezierEaseOut:Rt}=X;function Et({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${kt}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Rt}`}),i(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const _t=i([w("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Bt(),xt(),Et(),yt(),x("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),x("native-scrollbar",[w("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),H("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[x("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),w("drawer-content-wrapper",`
 box-sizing: border-box;
 `),w("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[x("native-scrollbar",[w("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),w("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),w("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),w("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[H("main",`
 flex: 1;
 `),H("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),w("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),x("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),x("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),x("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),x("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[H("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[w("drawer-container",`
 position: fixed;
 `)])]),w("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",`
 pointer-events: all;
 `)]),w("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[x("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),rt({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Tt=Object.assign(Object.assign({},U.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Ht=W({name:"Drawer",inheritAttrs:!1,props:Tt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:a}=Z(e),d=Ue(),l=U("Drawer","-drawer",_t,bt,e,t),r=k(e.defaultWidth),u=k(e.defaultHeight),g=ne(oe(e,"width"),r),S=ne(oe(e,"height"),u),$=y(()=>{const{placement:n}=e;return n==="top"||n==="bottom"?"":K(g.value)}),E=y(()=>{const{placement:n}=e;return n==="left"||n==="right"?"":K(S.value)}),_=n=>{const{onUpdateWidth:h,"onUpdate:width":b}=e;h&&I(h,n),b&&I(b,n),r.value=n},z=n=>{const{onUpdateHeight:h,"onUpdate:width":b}=e;h&&I(h,n),b&&I(b,n),u.value=n},v=y(()=>[{width:$.value,height:E.value},e.drawerStyle||""]);function A(n){const{onMaskClick:h,maskClosable:b}=e;b&&D(!1),h&&h(n)}function Y(n){A(n)}const V=lt();function q(n){var h;(h=e.onEsc)===null||h===void 0||h.call(e),e.show&&e.closeOnEsc&&st(n)&&(V.value||D(!1))}function D(n){const{onHide:h,onUpdateShow:b,"onUpdate:show":s}=e;b&&I(b,n),s&&I(s,n),h&&!n&&I(h,n)}L(Q,{isMountedRef:d,mergedThemeRef:l,mergedClsPrefixRef:t,doUpdateShow:D,doUpdateHeight:z,doUpdateWidth:_});const j=y(()=>{const{common:{cubicBezierEaseInOut:n,cubicBezierEaseIn:h,cubicBezierEaseOut:b},self:{color:s,textColor:m,boxShadow:p,lineHeight:C,headerPadding:T,footerPadding:Se,borderRadius:Ce,bodyPadding:xe,titleFontSize:ze,titleTextColor:$e,titleFontWeight:Be,headerBorderBottom:ke,footerBorderTop:Re,closeIconColor:Ee,closeIconColorHover:_e,closeIconColorPressed:Te,closeColorHover:He,closeColorPressed:Ie,closeIconSize:Oe,closeSize:Me,closeBorderRadius:Fe,resizableTriggerColorHover:De}}=l.value;return{"--n-line-height":C,"--n-color":s,"--n-border-radius":Ce,"--n-text-color":m,"--n-box-shadow":p,"--n-bezier":n,"--n-bezier-out":b,"--n-bezier-in":h,"--n-header-padding":T,"--n-body-padding":xe,"--n-footer-padding":Se,"--n-title-text-color":$e,"--n-title-font-size":ze,"--n-title-font-weight":Be,"--n-header-border-bottom":ke,"--n-footer-border-top":Re,"--n-close-icon-color":Ee,"--n-close-icon-color-hover":_e,"--n-close-icon-color-pressed":Te,"--n-close-size":Me,"--n-close-color-hover":He,"--n-close-color-pressed":Ie,"--n-close-icon-size":Oe,"--n-close-border-radius":Fe,"--n-resize-trigger-color-hover":De}}),B=a?ge("drawer",void 0,j,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:v,handleOutsideClick:Y,handleMaskClick:A,handleEsc:q,mergedTheme:l,cssVars:a?void 0:j,themeClass:B?.themeClass,onRender:B?.onRender,isMounted:d}},render(){const{mergedClsPrefix:e}=this;return c(it,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),G(c("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?c(be,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?c("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,c(vt,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[nt,{zIndex:this.zIndex,enabled:this.show}]])}})}}),It={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Ot=W({name:"DrawerContent",props:It,slots:Object,setup(){const e=ve(Q,null);e||Ye("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:a,bodyClass:d,bodyStyle:l,bodyContentClass:r,bodyContentStyle:u,headerClass:g,headerStyle:S,footerClass:$,footerStyle:E,scrollbarProps:_,closable:z,$slots:v}=this;return c("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},v.header||e||z?c("div",{class:[`${t}-drawer-header`,g],style:S,role:"none"},c("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},v.header!==void 0?v.header():e),z&&c(Xe,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?c("div",{class:[`${t}-drawer-body`,d],style:l,role:"none"},c("div",{class:[`${t}-drawer-body-content-wrapper`,r],style:u,role:"none"},v)):c(ye,Object.assign({themeOverrides:a.peerOverrides.Scrollbar,theme:a.peers.Scrollbar},_,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,r],contentStyle:u}),v),v.footer?c("div",{class:[`${t}-drawer-footer`,$],style:E,role:"none"},v.footer()):null)}}),Mt="/assets/ga_logo-C6b09pTq.png",Ft="/assets/smi_number_of_companies_until2024-D3S8BjZf.png",Dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Pt=W({name:"InfoOutlined",render:function(t,o){return we(),pe("svg",Dt,o[0]||(o[0]=[f("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z",fill:"currentColor"},null,-1)]))}}),Nt={class:"home-link"},Wt={href:"https://governance-advisors.ch",target:"_blank"},At=["src"],jt={class:"navigation"},Lt=["src"],Ut={__name:"TheHeader",setup(e){const t=qe(),o=k(!1),a=y(()=>t.isMobile?"100%":"50%");function d(){o.value=!0}return(l,r)=>(we(),pe(Ke,null,[O(R(re),{align:"center"},{default:P(()=>[f("div",Nt,[f("a",Wt,[f("img",{src:R(Mt),alt:"The Governance Advisors logo"},null,8,At)])]),f("div",jt,[f("nav",{onClick:d},[O(R(re),{align:"center",size:5},{default:P(()=>[O(R(mt),{size:22},{default:P(()=>[O(R(Pt))]),_:1}),f("span",null,Ge(l.$t("header.navigation.about")),1)]),_:1})])])]),_:1}),O(R(Ht),{show:o.value,"onUpdate:show":r[0]||(r[0]=u=>o.value=u),width:a.value},{default:P(()=>[O(R(Ot),{closable:""},{default:P(()=>[r[2]||(r[2]=f("div",null,[f("h3",null,"Data"),M(" The data presented on this website is based on companies listed in the "),f("a",{href:"https://www.six-group.com/en/market-data/indices/switzerland/equity/smi.html",target:"_blank",rel:"noopener noreferrer"},"Swiss Market Index (SMI)"),M(", the main blue-chip index of the SIX Swiss Exchange. The index introduced in 1988 comprised 24 stocks, with four companies having two classes of shares in the index (Ciba Geigy, Nestlé, SBG, SBV). For the purposes of this analysis, the figure of 20 companies (or boards) in the SMI in 1988 is used. ")],-1)),f("div",null,[r[1]||(r[1]=f("h4",null,"Number of SMI Companies per Year",-1)),f("img",{class:"chart",src:R(Ft),alt:"A chart about the number of companies in the Swiss Market Index (SMI) per year."},null,8,Lt)]),r[3]||(r[3]=f("div",null,[f("h4",null,"Further Information"),M(" See "),f("a",{href:"https://governance-advisors.ch/daten/#",target:"_blank"},"governance-advisors.ch/data"),M(" for further information about scope and source of the data. ")],-1)),r[4]||(r[4]=f("div",{class:"imprint"},[M(" © 2025 Governance Advisors AG"),f("br"),M(" Website by "),f("a",{href:"https://kmapper.com",target:"_blank",rel:"noopener noreferrer"},"kmapper GmbH")],-1))]),_:1})]),_:1},8,["show","width"])],64))}},Vt=Ve(Ut,[["__scopeId","data-v-34c8dfd5"]]);export{Vt as default};
