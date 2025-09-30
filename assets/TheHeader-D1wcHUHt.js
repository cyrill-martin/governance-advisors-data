import{o as He,a as V,r as $,b as Oe,w as le,c as Fe,s as Me,d as _e,e as q,f as Y,h as a,F as Pe,T as de,m as Ie,S as ce,v as J,i as ue,g as K,j as z,u as he,k as De,l as We,n as Ne,p as W,q as Ae,t as je,x as Le,y as i,z as N,A as w,B as x,C as T,D as Ue,E as Xe,L as Ye,G as Ve,H as fe,I as Q,J as Z,K as ee,M as qe,N as Ke,O as H,P as Ge,Q as Je,_ as Qe,R as Ze,U as et,V as U,W as X,X as M,Y as D,Z as tt,$ as ot,a0 as rt,a1 as nt}from"./index-BnaeOixg.js";const it=typeof document<"u"&&typeof window<"u",G=$(!1);function te(){G.value=!0}function oe(){G.value=!1}let _=0;function st(){return it&&(He(()=>{_||(window.addEventListener("compositionstart",te),window.addEventListener("compositionend",oe)),_++}),V(()=>{_<=1?(window.removeEventListener("compositionstart",te),window.removeEventListener("compositionend",oe),_=0):_--})),G}let O=0,re="",ne="",ie="",se="";const ae=$("0px");function at(e){if(typeof document>"u")return;const t=document.documentElement;let o,l=!1;const s=()=>{t.style.marginRight=re,t.style.overflow=ne,t.style.overflowX=ie,t.style.overflowY=se,ae.value="0px"};Oe(()=>{o=le(e,h=>{if(h){if(!O){const d=window.innerWidth-t.offsetWidth;d>0&&(re=t.style.marginRight,t.style.marginRight=`${d}px`,ae.value=`${d}px`),ne=t.style.overflow,ie=t.style.overflowX,se=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}l=!0,O++}else O--,O||s(),l=!1},{immediate:!0})}),V(()=>{o?.(),l&&(O--,O||s(),l=!1)})}function lt(e){const{modalColor:t,textColor1:o,textColor2:l,boxShadow3:s,lineHeight:h,fontWeightStrong:d,dividerColor:m,closeColorHover:v,closeColorPressed:C,closeIconColor:B,closeIconColorHover:k,closeIconColorPressed:R,borderRadius:y,primaryColorHover:b}=e;return{bodyPadding:"16px 24px",borderRadius:y,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:l,titleTextColor:o,titleFontSize:"18px",titleFontWeight:d,boxShadow:s,lineHeight:h,headerBorderBottom:`1px solid ${m}`,footerBorderTop:`1px solid ${m}`,closeIconColor:B,closeIconColorHover:k,closeIconColorPressed:R,closeSize:"22px",closeIconSize:"18px",closeColorHover:v,closeColorPressed:C,closeBorderRadius:y,resizableTriggerColorHover:b}}const dt=Fe({name:"Drawer",common:_e,peers:{Scrollbar:Me},self:lt}),ct=q({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=$(!!e.show),o=$(null),l=ue(K);let s=0,h="",d=null;const m=$(!1),v=$(!1),C=z(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:B,mergedRtlRef:k}=he(e),R=De("Drawer",k,B),y=r,b=n=>{v.value=!0,s=C.value?n.clientY:n.clientX,h=document.body.style.cursor,document.body.style.cursor=C.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",S),document.body.addEventListener("mouseleave",y),document.body.addEventListener("mouseup",r)},P=()=>{d!==null&&(window.clearTimeout(d),d=null),v.value?m.value=!0:d=window.setTimeout(()=>{m.value=!0},300)},A=()=>{d!==null&&(window.clearTimeout(d),d=null),m.value=!1},{doUpdateHeight:j,doUpdateWidth:L}=l,F=n=>{const{maxWidth:u}=e;if(u&&n>u)return u;const{minWidth:g}=e;return g&&n<g?g:n},I=n=>{const{maxHeight:u}=e;if(u&&n>u)return u;const{minHeight:g}=e;return g&&n<g?g:n};function S(n){var u,g;if(v.value)if(C.value){let p=((u=o.value)===null||u===void 0?void 0:u.offsetHeight)||0;const E=s-n.clientY;p+=e.placement==="bottom"?E:-E,p=I(p),j(p),s=n.clientY}else{let p=((g=o.value)===null||g===void 0?void 0:g.offsetWidth)||0;const E=s-n.clientX;p+=e.placement==="right"?E:-E,p=F(p),L(p),s=n.clientX}}function r(){v.value&&(s=0,v.value=!1,document.body.style.cursor=h,document.body.removeEventListener("mousemove",S),document.body.removeEventListener("mouseup",r),document.body.removeEventListener("mouseleave",y))}We(()=>{e.show&&(t.value=!0)}),le(()=>e.show,n=>{n||r()}),V(()=>{r()});const c=z(()=>{const{show:n}=e,u=[[J,n]];return e.showMask||u.push([Ne,e.onClickoutside,void 0,{capture:!0}]),u});function f(){var n;t.value=!1,(n=e.onAfterLeave)===null||n===void 0||n.call(e)}return at(z(()=>e.blockScroll&&t.value)),W(Ae,o),W(je,null),W(Le,null),{bodyRef:o,rtlEnabled:R,mergedClsPrefix:l.mergedClsPrefixRef,isMounted:l.isMountedRef,mergedTheme:l.mergedThemeRef,displayed:t,transitionName:z(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:f,bodyDirectives:c,handleMousedownResizeTrigger:b,handleMouseenterResizeTrigger:P,handleMouseleaveResizeTrigger:A,isDragging:v,isHoverOnResizeTrigger:m}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?Y(a("div",{role:"none"},a(Pe,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>a(de,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>Y(a("div",Ie(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?a("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?a("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):a(ce,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[J,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:ut,cubicBezierEaseOut:ht}=N;function ft({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-bottom"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${ut}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${ht}`}),i(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:mt,cubicBezierEaseOut:bt}=N;function gt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-left"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${mt}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${bt}`}),i(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:vt,cubicBezierEaseOut:wt}=N;function pt({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-right"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${vt}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${wt}`}),i(`&.${o}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:yt,cubicBezierEaseOut:Ct}=N;function St({duration:e="0.3s",leaveDuration:t="0.2s",name:o="slide-in-from-top"}={}){return[i(`&.${o}-transition-leave-active`,{transition:`transform ${t} ${yt}`}),i(`&.${o}-transition-enter-active`,{transition:`transform ${e} ${Ct}`}),i(`&.${o}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${o}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${o}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${o}-transition-leave-to`,{transform:"translateY(-100%)"})]}const xt=i([w("drawer",`
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
 `,[pt(),gt(),St(),ft(),x("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),x("native-scrollbar",[w("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),T("resize-trigger",`
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
 `,[T("main",`
 flex: 1;
 `),T("close",`
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
 `,[T("resize-trigger",`
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
 `,[T("resize-trigger",`
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
 `,[T("resize-trigger",`
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
 `,[T("resize-trigger",`
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
 `),Ue({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),$t=Object.assign(Object.assign({},fe.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),zt=q({name:"Drawer",inheritAttrs:!1,props:$t,setup(e){const{mergedClsPrefixRef:t,namespaceRef:o,inlineThemeDisabled:l}=he(e),s=Ve(),h=fe("Drawer","-drawer",xt,dt,e,t),d=$(e.defaultWidth),m=$(e.defaultHeight),v=Q(Z(e,"width"),d),C=Q(Z(e,"height"),m),B=z(()=>{const{placement:r}=e;return r==="top"||r==="bottom"?"":ee(v.value)}),k=z(()=>{const{placement:r}=e;return r==="left"||r==="right"?"":ee(C.value)}),R=r=>{const{onUpdateWidth:c,"onUpdate:width":f}=e;c&&H(c,r),f&&H(f,r),d.value=r},y=r=>{const{onUpdateHeight:c,"onUpdate:width":f}=e;c&&H(c,r),f&&H(f,r),m.value=r},b=z(()=>[{width:B.value,height:k.value},e.drawerStyle||""]);function P(r){const{onMaskClick:c,maskClosable:f}=e;f&&F(!1),c&&c(r)}function A(r){P(r)}const j=st();function L(r){var c;(c=e.onEsc)===null||c===void 0||c.call(e),e.show&&e.closeOnEsc&&Ke(r)&&(j.value||F(!1))}function F(r){const{onHide:c,onUpdateShow:f,"onUpdate:show":n}=e;f&&H(f,r),n&&H(n,r),c&&!r&&H(c,r)}W(K,{isMountedRef:s,mergedThemeRef:h,mergedClsPrefixRef:t,doUpdateShow:F,doUpdateHeight:y,doUpdateWidth:R});const I=z(()=>{const{common:{cubicBezierEaseInOut:r,cubicBezierEaseIn:c,cubicBezierEaseOut:f},self:{color:n,textColor:u,boxShadow:g,lineHeight:p,headerPadding:E,footerPadding:me,borderRadius:be,bodyPadding:ge,titleFontSize:ve,titleTextColor:we,titleFontWeight:pe,headerBorderBottom:ye,footerBorderTop:Ce,closeIconColor:Se,closeIconColorHover:xe,closeIconColorPressed:$e,closeColorHover:ze,closeColorPressed:Be,closeIconSize:ke,closeSize:Re,closeBorderRadius:Ee,resizableTriggerColorHover:Te}}=h.value;return{"--n-line-height":p,"--n-color":n,"--n-border-radius":be,"--n-text-color":u,"--n-box-shadow":g,"--n-bezier":r,"--n-bezier-out":f,"--n-bezier-in":c,"--n-header-padding":E,"--n-body-padding":ge,"--n-footer-padding":me,"--n-title-text-color":we,"--n-title-font-size":ve,"--n-title-font-weight":pe,"--n-header-border-bottom":ye,"--n-footer-border-top":Ce,"--n-close-icon-color":Se,"--n-close-icon-color-hover":xe,"--n-close-icon-color-pressed":$e,"--n-close-size":Re,"--n-close-color-hover":ze,"--n-close-color-pressed":Be,"--n-close-icon-size":ke,"--n-close-border-radius":Ee,"--n-resize-trigger-color-hover":Te}}),S=l?qe("drawer",void 0,I,e):void 0;return{mergedClsPrefix:t,namespace:o,mergedBodyStyle:b,handleOutsideClick:A,handleMaskClick:P,handleEsc:L,mergedTheme:h,cssVars:l?void 0:I,themeClass:S?.themeClass,onRender:S?.onRender,isMounted:s}},render(){const{mergedClsPrefix:e}=this;return a(Ye,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),Y(a("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?a(de,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?a("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,a(ct,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[Xe,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Bt={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},kt=q({name:"DrawerContent",props:Bt,slots:Object,setup(){const e=ue(K,null);e||Je("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function o(){t(!1)}return{handleCloseClick:o,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:o,mergedTheme:l,bodyClass:s,bodyStyle:h,bodyContentClass:d,bodyContentStyle:m,headerClass:v,headerStyle:C,footerClass:B,footerStyle:k,scrollbarProps:R,closable:y,$slots:b}=this;return a("div",{role:"none",class:[`${t}-drawer-content`,o&&`${t}-drawer-content--native-scrollbar`]},b.header||e||y?a("div",{class:[`${t}-drawer-header`,v],style:C,role:"none"},a("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},b.header!==void 0?b.header():e),y&&a(Ge,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,o?a("div",{class:[`${t}-drawer-body`,s],style:h,role:"none"},a("div",{class:[`${t}-drawer-body-content-wrapper`,d],style:m,role:"none"},b)):a(ce,Object.assign({themeOverrides:l.peerOverrides.Scrollbar,theme:l.peers.Scrollbar},R,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,d],contentStyle:m}),b),b.footer?a("div",{class:[`${t}-drawer-footer`,B],style:k,role:"none"},b.footer()):null)}}),Rt="/assets/ga_logo-C6b09pTq.png",Et={class:"home-link"},Tt={href:"https://governance-advisors.ch/daten/#",target:"_blank"},Ht=["src"],Ot={class:"navigation"},Ft={__name:"TheHeader",setup(e){const t=$(!1);function o(){t.value=!0}return(l,s)=>(et(),Ze(nt,null,[U(D(ot),{align:"center"},{default:X(()=>[M("div",Et,[M("a",Tt,[M("img",{src:D(Rt),alt:"The Governance Advisors logo"},null,8,Ht)])]),M("div",Ot,[M("nav",{onClick:o},tt(l.$t("header.navigation.about")),1)])]),_:1}),U(D(zt),{show:t.value,"onUpdate:show":s[0]||(s[0]=h=>t.value=h),width:"75%"},{default:X(()=>[U(D(kt),{closable:""},{default:X(()=>[...s[1]||(s[1]=[rt(" Some basic text about the data and the website, etc.",-1)])]),_:1})]),_:1},8,["show"])],64))}},_t=Qe(Ft,[["__scopeId","data-v-21eb5397"]]);export{_t as default};
