import{o as Me,a as q,r as z,b as Fe,w as de,c as Ie,s as Oe,d as _e,e as G,f as V,h as a,F as Pe,T as ce,m as De,S as ue,v as J,i as he,g as K,j as B,u as fe,k as We,l as Ne,n as Ae,p as N,q as je,t as Le,x as Ue,y as s,z as A,A as w,B as $,C as H,D as Xe,E as Ye,L as Ve,G as qe,H as me,I as Q,J as ee,K as te,M as Ge,N as Ke,O as M,P as Ze,Q as Je,_ as Qe,R as et,U as tt,V as rt,W as X,X as Y,Y as u,Z as _,$ as ot,a0 as nt,a1 as F,a2 as it}from"./index-CEzGbxuB.js";const st=typeof document<"u"&&typeof window<"u",Z=z(!1);function re(){Z.value=!0}function oe(){Z.value=!1}let P=0;function at(){return st&&(Me(()=>{P||(window.addEventListener("compositionstart",re),window.addEventListener("compositionend",oe)),P++}),q(()=>{P<=1?(window.removeEventListener("compositionstart",re),window.removeEventListener("compositionend",oe),P=0):P--})),Z}let I=0,ne="",ie="",se="",ae="";const le=z("0px");function lt(e){if(typeof document>"u")return;const t=document.documentElement;let r,l=!1;const c=()=>{t.style.marginRight=ne,t.style.overflow=ie,t.style.overflowX=se,t.style.overflowY=ae,le.value="0px"};Fe(()=>{r=de(e,m=>{if(m){if(!I){const n=window.innerWidth-t.offsetWidth;n>0&&(ne=t.style.marginRight,t.style.marginRight=`${n}px`,le.value=`${n}px`),ie=t.style.overflow,se=t.style.overflowX,ae=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}l=!0,I++}else I--,I||c(),l=!1},{immediate:!0})}),q(()=>{r?.(),l&&(I--,I||c(),l=!1)})}function dt(e){const{modalColor:t,textColor1:r,textColor2:l,boxShadow3:c,lineHeight:m,fontWeightStrong:n,dividerColor:f,closeColorHover:p,closeColorPressed:C,closeIconColor:k,closeIconColorHover:R,closeIconColorPressed:E,borderRadius:S,primaryColorHover:g}=e;return{bodyPadding:"16px 24px",borderRadius:S,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:l,titleTextColor:r,titleFontSize:"18px",titleFontWeight:n,boxShadow:c,lineHeight:m,headerBorderBottom:`1px solid ${f}`,footerBorderTop:`1px solid ${f}`,closeIconColor:k,closeIconColorHover:R,closeIconColorPressed:E,closeSize:"22px",closeIconSize:"18px",closeColorHover:p,closeColorPressed:C,closeBorderRadius:S,resizableTriggerColorHover:g}}const ct=Ie({name:"Drawer",common:_e,peers:{Scrollbar:Oe},self:dt}),ut=G({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=z(!!e.show),r=z(null),l=he(K);let c=0,m="",n=null;const f=z(!1),p=z(!1),C=B(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:k,mergedRtlRef:R}=fe(e),E=We("Drawer",R,k),S=o,g=i=>{p.value=!0,c=C.value?i.clientY:i.clientX,m=document.body.style.cursor,document.body.style.cursor=C.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",x),document.body.addEventListener("mouseleave",S),document.body.addEventListener("mouseup",o)},D=()=>{n!==null&&(window.clearTimeout(n),n=null),p.value?f.value=!0:n=window.setTimeout(()=>{f.value=!0},300)},j=()=>{n!==null&&(window.clearTimeout(n),n=null),f.value=!1},{doUpdateHeight:L,doUpdateWidth:U}=l,O=i=>{const{maxWidth:h}=e;if(h&&i>h)return h;const{minWidth:v}=e;return v&&i<v?v:i},W=i=>{const{maxHeight:h}=e;if(h&&i>h)return h;const{minHeight:v}=e;return v&&i<v?v:i};function x(i){var h,v;if(p.value)if(C.value){let y=((h=r.value)===null||h===void 0?void 0:h.offsetHeight)||0;const T=c-i.clientY;y+=e.placement==="bottom"?T:-T,y=W(y),L(y),c=i.clientY}else{let y=((v=r.value)===null||v===void 0?void 0:v.offsetWidth)||0;const T=c-i.clientX;y+=e.placement==="right"?T:-T,y=O(y),U(y),c=i.clientX}}function o(){p.value&&(c=0,p.value=!1,document.body.style.cursor=m,document.body.removeEventListener("mousemove",x),document.body.removeEventListener("mouseup",o),document.body.removeEventListener("mouseleave",S))}Ne(()=>{e.show&&(t.value=!0)}),de(()=>e.show,i=>{i||o()}),q(()=>{o()});const d=B(()=>{const{show:i}=e,h=[[J,i]];return e.showMask||h.push([Ae,e.onClickoutside,void 0,{capture:!0}]),h});function b(){var i;t.value=!1,(i=e.onAfterLeave)===null||i===void 0||i.call(e)}return lt(B(()=>e.blockScroll&&t.value)),N(je,r),N(Le,null),N(Ue,null),{bodyRef:r,rtlEnabled:E,mergedClsPrefix:l.mergedClsPrefixRef,isMounted:l.isMountedRef,mergedTheme:l.mergedThemeRef,displayed:t,transitionName:B(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:b,bodyDirectives:d,handleMousedownResizeTrigger:g,handleMouseenterResizeTrigger:D,handleMouseleaveResizeTrigger:j,isDragging:p,isHoverOnResizeTrigger:f}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?V(a("div",{role:"none"},a(Pe,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>a(ce,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>V(a("div",De(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?a("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?a("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):a(ue,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[J,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:ht,cubicBezierEaseOut:ft}=A;function mt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[s(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${ht}`}),s(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${ft}`}),s(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),s(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),s(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),s(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:bt,cubicBezierEaseOut:gt}=A;function vt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[s(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${bt}`}),s(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${gt}`}),s(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),s(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),s(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),s(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:pt,cubicBezierEaseOut:wt}=A;function yt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[s(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${pt}`}),s(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${wt}`}),s(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),s(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),s(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),s(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:St,cubicBezierEaseOut:Ct}=A;function xt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[s(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${St}`}),s(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ct}`}),s(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),s(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),s(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),s(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const $t=s([w("drawer",`
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
 `,[yt(),vt(),xt(),mt(),$("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),$("native-scrollbar",[w("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),H("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[$("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),w("drawer-content-wrapper",`
 box-sizing: border-box;
 `),w("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[$("native-scrollbar",[w("drawer-body-content-wrapper",`
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
 `)]),$("right-placement",`
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
 `)]),$("left-placement",`
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
 `)]),$("top-placement",`
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
 `)]),$("bottom-placement",`
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
 `)])]),s("body",[s(">",[w("drawer-container",`
 position: fixed;
 `)])]),w("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[s("> *",`
 pointer-events: all;
 `)]),w("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[$("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Xe({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),zt=Object.assign(Object.assign({},me.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Bt=G({name:"Drawer",inheritAttrs:!1,props:zt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:l}=fe(e),c=qe(),m=me("Drawer","-drawer",$t,ct,e,t),n=z(e.defaultWidth),f=z(e.defaultHeight),p=Q(ee(e,"width"),n),C=Q(ee(e,"height"),f),k=B(()=>{const{placement:o}=e;return o==="top"||o==="bottom"?"":te(p.value)}),R=B(()=>{const{placement:o}=e;return o==="left"||o==="right"?"":te(C.value)}),E=o=>{const{onUpdateWidth:d,"onUpdate:width":b}=e;d&&M(d,o),b&&M(b,o),n.value=o},S=o=>{const{onUpdateHeight:d,"onUpdate:width":b}=e;d&&M(d,o),b&&M(b,o),f.value=o},g=B(()=>[{width:k.value,height:R.value},e.drawerStyle||""]);function D(o){const{onMaskClick:d,maskClosable:b}=e;b&&O(!1),d&&d(o)}function j(o){D(o)}const L=at();function U(o){var d;(d=e.onEsc)===null||d===void 0||d.call(e),e.show&&e.closeOnEsc&&Ke(o)&&(L.value||O(!1))}function O(o){const{onHide:d,onUpdateShow:b,"onUpdate:show":i}=e;b&&M(b,o),i&&M(i,o),d&&!o&&M(d,o)}N(K,{isMountedRef:c,mergedThemeRef:m,mergedClsPrefixRef:t,doUpdateShow:O,doUpdateHeight:S,doUpdateWidth:E});const W=B(()=>{const{common:{cubicBezierEaseInOut:o,cubicBezierEaseIn:d,cubicBezierEaseOut:b},self:{color:i,textColor:h,boxShadow:v,lineHeight:y,headerPadding:T,footerPadding:be,borderRadius:ge,bodyPadding:ve,titleFontSize:pe,titleTextColor:we,titleFontWeight:ye,headerBorderBottom:Se,footerBorderTop:Ce,closeIconColor:xe,closeIconColorHover:$e,closeIconColorPressed:ze,closeColorHover:Be,closeColorPressed:ke,closeIconSize:Re,closeSize:Ee,closeBorderRadius:Te,resizableTriggerColorHover:He}}=m.value;return{"--n-line-height":y,"--n-color":i,"--n-border-radius":ge,"--n-text-color":h,"--n-box-shadow":v,"--n-bezier":o,"--n-bezier-out":b,"--n-bezier-in":d,"--n-header-padding":T,"--n-body-padding":ve,"--n-footer-padding":be,"--n-title-text-color":we,"--n-title-font-size":pe,"--n-title-font-weight":ye,"--n-header-border-bottom":Se,"--n-footer-border-top":Ce,"--n-close-icon-color":xe,"--n-close-icon-color-hover":$e,"--n-close-icon-color-pressed":ze,"--n-close-size":Ee,"--n-close-color-hover":Be,"--n-close-color-pressed":ke,"--n-close-icon-size":Re,"--n-close-border-radius":Te,"--n-resize-trigger-color-hover":He}}),x=l?Ge("drawer",void 0,W,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:g,handleOutsideClick:j,handleMaskClick:D,handleEsc:U,mergedTheme:m,cssVars:l?void 0:W,themeClass:x?.themeClass,onRender:x?.onRender,isMounted:c}},render(){const{mergedClsPrefix:e}=this;return a(Ve,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),V(a("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?a(ce,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?a("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,a(ut,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[Ye,{zIndex:this.zIndex,enabled:this.show}]])}})}}),kt={title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Rt=G({name:"DrawerContent",props:kt,slots:Object,setup(){const e=he(K,null);e||Je("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:l,bodyClass:c,bodyStyle:m,bodyContentClass:n,bodyContentStyle:f,headerClass:p,headerStyle:C,footerClass:k,footerStyle:R,scrollbarProps:E,closable:S,$slots:g}=this;return a("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},g.header||e||S?a("div",{class:[`${t}-drawer-header`,p],style:C,role:"none"},a("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},g.header!==void 0?g.header():e),S&&a(Ze,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?a("div",{class:[`${t}-drawer-body`,c],style:m,role:"none"},a("div",{class:[`${t}-drawer-body-content-wrapper`,n],style:f,role:"none"},g)):a(ue,Object.assign({themeOverrides:l.peerOverrides.Scrollbar,theme:l.peers.Scrollbar},E,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,n],contentStyle:f}),g),g.footer?a("div",{class:[`${t}-drawer-footer`,k],style:R,role:"none"},g.footer()):null)}}),Et="/assets/ga_logo-C6b09pTq.png",Tt="/assets/smi_number_of_companies_until2024-D3S8BjZf.png",Ht={class:"home-link"},Mt={href:"https://governance-advisors.ch/daten/#",target:"_blank"},Ft=["src"],It={class:"navigation"},Ot=["src"],_t={__name:"TheHeader",setup(e){const t=et(),r=z(!1),l=B(()=>t.isMobile?"100%":"50%");function c(){r.value=!0}return(m,n)=>(rt(),tt(it,null,[X(_(nt),{align:"center"},{default:Y(()=>[u("div",Ht,[u("a",Mt,[u("img",{src:_(Et),alt:"The Governance Advisors logo"},null,8,Ft)])]),u("div",It,[u("nav",{onClick:c},ot(m.$t("header.navigation.about")),1)])]),_:1}),X(_(Bt),{show:r.value,"onUpdate:show":n[0]||(n[0]=f=>r.value=f),width:l.value},{default:Y(()=>[X(_(Rt),{closable:""},{default:Y(()=>[n[2]||(n[2]=u("div",null,[u("h3",null,"The Data"),F(" The data presented on this website is based on companies listed in the "),u("a",{href:"https://www.six-group.com/en/market-data/indices/switzerland/equity/smi.html",target:"_blank",rel:"noopener noreferrer"},"Swiss Market Index (SMI)"),F(", the main blue-chip index of the SIX Swiss Exchange. The index introduced in 1988 comprised 24 stocks, with four companies having two classes of shares in the index (Ciba Geigy, Nestlé, SBG, SBV). For the purposes of this analysis, the figure of 20 companies (or boards) in the SMI in 1988 is used. ")],-1)),u("div",null,[n[1]||(n[1]=u("h4",null,"Number of SMI Companies over the Years",-1)),u("img",{class:"chart",src:_(Tt),alt:"A chart about the number of companies in the Swiss Market Index (SMI) per year."},null,8,Ot)]),n[3]||(n[3]=u("div",null,[u("h4",null,"Further Information"),F(" See "),u("a",{href:"https://governance-advisors.ch/daten/#",target:"_blank"},"governance-advisors.ch/data"),F(" for further information about scope and source of the data. ")],-1)),n[4]||(n[4]=u("div",{class:"imprint"},[F(" © 2025 Governance Advisors AG"),u("br"),F(" Website by "),u("a",{href:"https://kmapper.com",target:"_blank",rel:"noopener noreferrer"},"kmapper GmbH")],-1))]),_:1})]),_:1},8,["show","width"])],64))}},Dt=Qe(_t,[["__scopeId","data-v-5930b712"]]);export{Dt as default};
