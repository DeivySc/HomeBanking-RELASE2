(self.webpackChunkhome_banking_relase2=self.webpackChunkhome_banking_relase2||[]).push([[450],{8450:(e,t,s)=>{"use strict";s.r(t),s.d(t,{HomeModule:()=>W});var i=s(8583),r=s(1436),a=s(1552),n=s(5384),o=s(3738),h=s(2238),l=s(8295),c=s(9983),d=s(1095),m=s(3679),f=s(7716);const p=new f.OlP("config"),g=new f.OlP("NEW_CONFIG"),u=new f.OlP("INITIAL_CONFIG"),k={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:".",clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}};let _=(()=>{class e{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(e,t,s,i)=>{const r=e.split(s),a=r.length>1?`${s}${r[1]}`:"";let n=r[0];const o=this.separatorLimit.replace(/\s/g,"");o&&+o&&(n="-"===n[0]?`-${n.slice(1,n.length).slice(0,o.length)}`:n.slice(0,o.length));const h=/(\d+)(\d{3})/;for(;t&&h.test(n);)n=n.replace(h,"$1"+t+"$2");return void 0===i?n+a:0===i?n:n+a.substr(0,i+1)},this.percentage=e=>Number(e)>=0&&Number(e)<=100,this.getPrecision=e=>{const t=e.split(".");return t.length>1?Number(t[t.length-1]):1/0},this.checkAndRemoveSuffix=e=>{var t,s,i;for(let r=(null===(t=this.suffix)||void 0===t?void 0:t.length)-1;r>=0;r--){const t=this.suffix.substr(r,null===(s=this.suffix)||void 0===s?void 0:s.length);if(e.includes(t)&&(r-1<0||!e.includes(this.suffix.substr(r-1,null===(i=this.suffix)||void 0===i?void 0:i.length))))return e.replace(t,"")}return e},this.checkInputPrecision=(e,t,s)=>{if(t<1/0){const i=new RegExp(this._charToRegExpExpression(s)+`\\d{${t}}.*$`),r=e.match(i);r&&r[0].length-1>t&&(e=e.substring(0,e.length-(r[0].length-1-t))),0===t&&e.endsWith(s)&&(e=e.substring(0,e.length-1))}return e},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[s,i]=t;return this.customPattern=i,this.applyMask(e,s)}applyMask(e,t,s=0,i=!1,r=!1,a=(()=>{})){if(null==e||void 0===t)return"";let n=0,o="",h=!1,l=!1,c=1,d=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&(null==e?void 0:e.length)>0&&(e=this.checkAndRemoveSuffix(e));const m=e.toString().split("");"IP"===t&&(this.ipError=!!(m.filter(e=>"."===e).length<3&&m.length<7),t="099.099.099.099");const f=[];for(let _=0;_<e.length;_++)e[_].match("\\d")&&f.push(e[_]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=!(11===f.length||14===f.length),t=f.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const s=this.getPrecision(t);e=this.checkInputPrecision(e,s,this.decimalMarker)}if(e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))){const t=e.substring(0,e.indexOf(".")-1);e=`${t}${e.substring(e.indexOf("."),e.length)}`}o=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&e[1]!==this.decimalMarker&&!r?e.slice(1,e.length):e;const i=this._charToRegExpExpression(this.thousandSeparator),a=this._charToRegExpExpression(this.decimalMarker),n='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(i,"").replace(a,""),h=new RegExp("["+n+"]");e.match(h)&&(e=e.substring(0,e.length-1));const d=this.getPrecision(t),m=(e=this.checkInputPrecision(e,d,this.decimalMarker)).replace(new RegExp(i,"g"),"");o=this._formatWithSeparators(m,this.thousandSeparator,this.decimalMarker,d);const f=o.indexOf(",")-e.indexOf(","),p=o.length-e.length;if(p>0&&","!==o[s]){l=!0;let e=0;do{this._shift.add(s+e),e++}while(e<p)}else 0!==f&&s>0&&!(o.indexOf(",")>=s&&s>3)||!(o.indexOf(".")>=s&&s>3)&&p<=0?(this._shift.clear(),l=!0,c=p,this._shift.add(s+=p)):this._shift.clear()}else for(let _=0,x=m[0];_<m.length&&n!==t.length;_++,x=m[_])if(this._checkSymbolMask(x,t[n])&&"?"===t[n+1])o+=x,n+=2;else if("*"===t[n+1]&&h&&this._checkSymbolMask(x,t[n+2]))o+=x,n+=3,h=!1;else if(this._checkSymbolMask(x,t[n])&&"*"===t[n+1])o+=x,h=!0;else if("?"===t[n+1]&&this._checkSymbolMask(x,t[n+2]))o+=x,n+=3;else if(this._checkSymbolMask(x,t[n])){if("H"===t[n]&&Number(x)>2){n+=1,this._shiftStep(t,n,m.length),_--,this.leadZeroDateTime&&(o+="0");continue}if("h"===t[n]&&"2"===o&&Number(x)>3){n+=1,_--;continue}if("m"===t[n]&&Number(x)>5){n+=1,this._shiftStep(t,n,m.length),_--,this.leadZeroDateTime&&(o+="0");continue}if("s"===t[n]&&Number(x)>5){n+=1,this._shiftStep(t,n,m.length),_--,this.leadZeroDateTime&&(o+="0");continue}const s=31;if("d"===t[n]&&(Number(x)>3&&this.leadZeroDateTime||Number(e.slice(n,n+2))>s||"/"===e[n+1])){n+=1,this._shiftStep(t,n,m.length),_--,this.leadZeroDateTime&&(o+="0");continue}if("M"===t[n]){const i=12,r=0===n&&(Number(x)>2||Number(e.slice(n,n+2))>i||"/"===e[n+1]),a=e.slice(n-3,n-1).includes("/")&&("/"===e[n-2]&&Number(e.slice(n-1,n+1))>i&&"/"!==e[n]||"/"===e[n]||"/"===e[n-3]&&Number(e.slice(n-2,n))>i&&"/"!==e[n-1]||"/"===e[n-1]),h=Number(e.slice(n-3,n-1))<=s&&!e.slice(n-3,n-1).includes("/")&&"/"===e[n-1]&&(Number(e.slice(n,n+2))>i||"/"===e[n+1]),l=Number(e.slice(n-3,n-1))>s&&!e.slice(n-3,n-1).includes("/")&&!e.slice(n-2,n).includes("/")&&Number(e.slice(n-2,n))>i,c=Number(e.slice(n-3,n-1))<=s&&!e.slice(n-3,n-1).includes("/")&&"/"!==e[n-1]&&Number(e.slice(n-1,n+1))>i;if(Number(x)>1&&this.leadZeroDateTime||r||a||h||l||c){n+=1,this._shiftStep(t,n,m.length),_--,this.leadZeroDateTime&&(o+="0");continue}}o+=x,n++}else-1!==this.maskSpecialCharacters.indexOf(t[n])?(o+=t[n],n++,this._shiftStep(t,n,m.length),_--):this.maskSpecialCharacters.indexOf(x)>-1&&this.maskAvailablePatterns[t[n]]&&this.maskAvailablePatterns[t[n]].optional?(m[n]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&(o+=m[n]),n++,_--):"*"===this.maskExpression[n+1]&&this._findSpecialChar(this.maskExpression[n+2])&&this._findSpecialChar(x)===this.maskExpression[n+2]&&h||"?"===this.maskExpression[n+1]&&this._findSpecialChar(this.maskExpression[n+2])&&this._findSpecialChar(x)===this.maskExpression[n+2]&&h?(n+=3,o+=x):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(x)<0&&x!==this.placeHolderCharacter&&(d=!0);o.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(o+=t[t.length-1]);let p=s+1;for(;this._shift.has(p);)c++,p++;let g=i?n:this._shift.has(s)?c:0;d&&g--,a(g,l),c<0&&this._shift.clear();let u=!1;r&&(u=m.every(e=>this.maskSpecialCharacters.includes(e)));let k=`${this.prefix}${u?"":o}${this.suffix}`;return 0===o.length&&(k=`${this.prefix}${o}`),k}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((e,t)=>e.match("^-?\\d")||e.match("\\s")||"."===e||","===e||"-"===e&&0===t&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){if(e){const t="[\\^$.|?*+()";return" "===e?"\\s":t.indexOf(e)>=0?"\\"+e:e}return e}_shiftStep(e,t,s){const i=/[*?]/g.test(e.slice(0,t))?s:t;this._shift.add(i+this.prefix.length||0)}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(p))},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:g,useValue:t},{provide:u,useValue:k},{provide:p,useFactory:b,deps:[u,g]},_]}}static forChild(){return{ngModule:e}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({}),e})();function b(e,t){return Object.assign(Object.assign({},e),t instanceof Function?t():t)}const S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};S.KeyboardEvent||(S.KeyboardEvent=function(e,t){});var A=s(2458),E=s(7832),v=s(7441),w=s(2613),N=s(7539),T=s(4700),y=s(9581),C=s(9490),R=(s(9765),s(6782),s(9761),s(9238),s(8345),s(6461),s(1769));let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[A.uc,A.si,A.BQ,A.us,i.ez],A.uc,A.BQ,A.us,R.t]}),e})();var L=s(521),D=s(6237);function O(e,t){if(1&e&&(f.O4$(),f._UZ(0,"circle",3)),2&e){const e=f.oxw();f.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),f.uIk("r",e._getCircleRadius())}}function P(e,t){if(1&e&&(f.O4$(),f._UZ(0,"circle",3)),2&e){const e=f.oxw();f.Udp("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),f.uIk("r",e._getCircleRadius())}}const I=(0,A.pj)(class{constructor(e){this._elementRef=e}},"primary"),V=new f.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});class $ extends I{constructor(e,t,s,i,r){super(e),this._document=s,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const a=$._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),a.has(s.head)||a.set(s.head,new Set([100])),this._fallbackAnimation=t.EDGE||t.TRIDENT,this._noopAnimations="NoopAnimations"===i&&!!r&&!r._forceAnimations,r&&(r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}get diameter(){return this._diameter}set diameter(e){this._diameter=(0,C.su)(e),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(e){this._strokeWidth=(0,C.su)(e)}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,(0,C.su)(e)))}ngOnInit(){const e=this._elementRef.nativeElement;this._styleRoot=(0,L.kV)(e)||this._document.head,this._attachStyleNode(),e.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const e=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${e} ${e}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const e=this._styleRoot,t=this._diameter,s=$._diameters;let i=s.get(e);if(!i||!i.has(t)){const r=this._document.createElement("style");r.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),r.textContent=this._getAnimationText(),e.appendChild(r),i||(i=new Set,s.set(e,i)),i.add(t)}}_getAnimationText(){const e=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*e).replace(/END_VALUE/g,""+.2*e).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}$.\u0275fac=function(e){return new(e||$)(f.Y36(f.SBq),f.Y36(L.t4),f.Y36(i.K0,8),f.Y36(D.Qb,8),f.Y36(V))},$.\u0275cmp=f.Xpm({type:$,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(f.uIk("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),f.Udp("width",t.diameter,"px")("height",t.diameter,"px"),f.ekj("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[f.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(f.O4$(),f.TgZ(0,"svg",0),f.YNc(1,O,1,9,"circle",1),f.YNc(2,P,1,7,"circle",2),f.qZA()),2&e&&(f.Udp("width",t.diameter,"px")("height",t.diameter,"px"),f.Q6J("ngSwitch","indeterminate"===t.mode),f.uIk("viewBox",t._getViewBox()),f.xp6(1),f.Q6J("ngSwitchCase",!0),f.xp6(1),f.Q6J("ngSwitchCase",!1))},directives:[i.RF,i.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),$._diameters=new WeakMap;let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[A.BQ,i.ez],A.BQ]}),e})(),W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({providers:[i.H9],imports:[[i.ez,r.u,a.Ps,n.Tx,o.QW,h.Is,l.lN,c.c,d.ot,m.u5,x.forRoot(),A.si,E.T5,v.LD,A.Ng,w.Fk,N.p9,m.UX,T.AV,y.$9,M,U]]}),e})()}}]);