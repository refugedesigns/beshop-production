(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{3136:function(e,t,r){"use strict";r.d(t,{W0:function(){return y},ko:function(){return eX},BR:function(){return eH},g4:function(){return eV}});var n,i,a,s,o,c,l,u,d,h,f,p=r(7294),g="#4fa94d",m={"aria-busy":!0,role:"status"},v=function(e){return{display:e?"flex":"none"}},b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},y=function(e){var t=e.height,r=e.width,n=e.radius,i=void 0===n?5:n,a=e.color,s=e.ariaLabel,o=e.wrapperClass,c=e.wrapperStyle,l=e.visible;return p.createElement("div",b({style:b(b({},v(void 0===l||l)),c),className:o,"data-testid":"ball-triangle-loading","aria-label":void 0===s?"ball-triangle-loading":s},m),p.createElement("svg",{height:void 0===t?100:t,width:void 0===r?100:r,stroke:void 0===a?g:a,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg","data-testid":"ball-triangle-svg"},p.createElement("g",{fill:"none",fillRule:"evenodd"},p.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},p.createElement("circle",{cx:"5",cy:"50",r:i},p.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;5;50;50",calcMode:"linear",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",values:"5;27;49;5",calcMode:"linear",repeatCount:"indefinite"})),p.createElement("circle",{cx:"27",cy:"5",r:i},p.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",from:"5",to:"5",values:"5;50;50;5",calcMode:"linear",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"cx",begin:"0s",dur:"2.2s",from:"27",to:"27",values:"27;49;5;27",calcMode:"linear",repeatCount:"indefinite"})),p.createElement("circle",{cx:"49",cy:"50",r:i},p.createElement("animate",{attributeName:"cy",begin:"0s",dur:"2.2s",values:"50;50;5;50",calcMode:"linear",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"cx",from:"49",to:"49",begin:"0s",dur:"2.2s",values:"49;5;27;49",calcMode:"linear",repeatCount:"indefinite"}))))))},k=r(9864),w=r(6774),C=r.n(w),S=function(e){function t(e,t,n){var i=t.trim().split(p);t=i;var a=i.length,s=e.length;switch(s){case 0:case 1:var o=0;for(e=0===s?"":e[0]+" ";o<a;++o)t[o]=r(e,t[o],n).trim();break;default:var c=o=0;for(t=[];o<a;++o)for(var l=0;l<s;++l)t[c++]=r(e[l]+" ",i[o],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,a){var s=e+";",o=2*t+3*r+4*a;if(944===o){e=s.indexOf(":",9)+1;var c=s.substring(e,s.length-1).trim();return c=s.substring(0,e).trim()+c+";",1===P||2===P&&i(c,1)?"-webkit-"+c+c:c}if(0===P||2===P&&!i(s,1))return s;switch(o){case 1015:return 97===s.charCodeAt(10)?"-webkit-"+s+s:s;case 951:return 116===s.charCodeAt(3)?"-webkit-"+s+s:s;case 963:return 110===s.charCodeAt(5)?"-webkit-"+s+s:s;case 1009:if(100!==s.charCodeAt(4))break;case 969:case 942:return"-webkit-"+s+s;case 978:return"-webkit-"+s+"-moz-"+s+s;case 1019:case 983:return"-webkit-"+s+"-moz-"+s+"-ms-"+s+s;case 883:if(45===s.charCodeAt(8))return"-webkit-"+s+s;if(0<s.indexOf("image-set(",11))return s.replace(A,"$1-webkit-$2")+s;break;case 932:if(45===s.charCodeAt(4))switch(s.charCodeAt(5)){case 103:return"-webkit-box-"+s.replace("-grow","")+"-webkit-"+s+"-ms-"+s.replace("grow","positive")+s;case 115:return"-webkit-"+s+"-ms-"+s.replace("shrink","negative")+s;case 98:return"-webkit-"+s+"-ms-"+s.replace("basis","preferred-size")+s}return"-webkit-"+s+"-ms-"+s+s;case 964:return"-webkit-"+s+"-ms-flex-"+s+s;case 1023:if(99!==s.charCodeAt(8))break;return"-webkit-box-pack"+(c=s.substring(s.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+s+"-ms-flex-pack"+c+s;case 1005:return h.test(s)?s.replace(d,":-webkit-")+s.replace(d,":-moz-")+s:s;case 1e3:switch(t=(c=s.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=s.replace(y,"tb");break;case 232:c=s.replace(y,"tb-rl");break;case 220:c=s.replace(y,"lr");break;default:return s}return"-webkit-"+s+"-ms-"+c+s;case 1017:if(-1===s.indexOf("sticky",9))break;case 975:switch(t=(s=e).length-10,o=(c=(33===s.charCodeAt(t)?s.substring(0,t):s).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:s=s.replace(c,"-webkit-"+c)+";"+s;break;case 207:case 102:s=s.replace(c,"-webkit-"+(102<o?"inline-":"")+"box")+";"+s.replace(c,"-webkit-"+c)+";"+s.replace(c,"-ms-"+c+"box")+";"+s}return s+";";case 938:if(45===s.charCodeAt(5))switch(s.charCodeAt(6)){case 105:return c=s.replace("-items",""),"-webkit-"+s+"-webkit-box-"+c+"-ms-flex-"+c+s;case 115:return"-webkit-"+s+"-ms-flex-item-"+s.replace(C,"")+s;default:return"-webkit-"+s+"-ms-flex-line-pack"+s.replace("align-content","").replace(C,"")+s}break;case 973:case 989:if(45!==s.charCodeAt(3)||122===s.charCodeAt(4))break;case 931:case 953:if(!0===x.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,a).replace(":fill-available",":stretch"):s.replace(c,"-webkit-"+c)+s.replace(c,"-moz-"+c.replace("fill-",""))+s;break;case 962:if(s="-webkit-"+s+(102===s.charCodeAt(5)?"-ms-"+s:"")+s,211===r+a&&105===s.charCodeAt(13)&&0<s.indexOf("transform",10))return s.substring(0,s.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+s}return s}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),_(2!==t?n:n.replace(S,"$1"),r,t)}function a(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,a,s,o,l,u){for(var d,h=0,f=t;h<R;++h)switch(d=j[h].call(c,e,f,r,n,i,a,s,o,l,u)){case void 0:case!1:case!0:case null:break;default:f=d}if(f!==t)return f}function o(e){return void 0!==(e=e.prefix)&&(_=null,e?"function"!=typeof e?P=1:(P=2,_=e):P=0),o}function c(e,r){var o=e;if(33>o.charCodeAt(0)&&(o=o.trim()),o=[o],0<R){var c=s(-1,r,o,o,O,E,0,0,0,0);void 0!==c&&"string"==typeof c&&(r=c)}var d=function e(r,o,c,d,h){for(var f,p,g,y,w,C=0,S=0,x=0,A=0,j=0,_=0,z=g=f=0,T=0,D=0,$=0,B=0,F=c.length,G=F-1,L="",W="",Y="",H="";T<F;){if(p=c.charCodeAt(T),T===G&&0!==S+A+x+C&&(0!==S&&(p=47===S?10:47),A=x=C=0,F++,G++),0===S+A+x+C){if(T===G&&(0<D&&(L=L.replace(u,"")),0<L.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:L+=c.charAt(T)}p=59}switch(p){case 123:for(f=(L=L.trim()).charCodeAt(0),g=1,B=++T;T<F;){switch(p=c.charCodeAt(T)){case 123:g++;break;case 125:g--;break;case 47:switch(p=c.charCodeAt(T+1)){case 42:case 47:e:{for(z=T+1;z<G;++z)switch(c.charCodeAt(z)){case 47:if(42===p&&42===c.charCodeAt(z-1)&&T+2!==z){T=z+1;break e}break;case 10:if(47===p){T=z+1;break e}}T=z}}break;case 91:p++;case 40:p++;case 34:case 39:for(;T++<G&&c.charCodeAt(T)!==p;);}if(0===g)break;T++}if(g=c.substring(B,T),0===f&&(f=(L=L.replace(l,"").trim()).charCodeAt(0)),64===f){switch(0<D&&(L=L.replace(u,"")),p=L.charCodeAt(1)){case 100:case 109:case 115:case 45:D=o;break;default:D=N}if(B=(g=e(o,D,g,p,h+1)).length,0<R&&(D=t(N,L,$),w=s(3,g,D,o,O,E,B,p,h,d),L=D.join(""),void 0!==w&&0===(B=(g=w.trim()).length)&&(p=0,g="")),0<B)switch(p){case 115:L=L.replace(k,a);case 100:case 109:case 45:g=L+"{"+g+"}";break;case 107:g=(L=L.replace(m,"$1 $2"))+"{"+g+"}",g=1===P||2===P&&i("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=L+g,112===d&&(W+=g,g="")}else g=""}else g=e(o,t(o,L,$),g,d,h+1);Y+=g,g=$=D=z=f=0,L="",p=c.charCodeAt(++T);break;case 125:case 59:if(1<(B=(L=(0<D?L.replace(u,""):L).trim()).length))switch(0===z&&(45===(f=L.charCodeAt(0))||96<f&&123>f)&&(B=(L=L.replace(" ",":")).length),0<R&&void 0!==(w=s(1,L,o,r,O,E,W.length,d,h,d))&&0===(B=(L=w.trim()).length)&&(L="\x00\x00"),f=L.charCodeAt(0),p=L.charCodeAt(1),f){case 0:break;case 64:if(105===p||99===p){H+=L+c.charAt(T);break}default:58!==L.charCodeAt(B-1)&&(W+=n(L,f,p,L.charCodeAt(2)))}$=D=z=f=0,L="",p=c.charCodeAt(++T)}}switch(p){case 13:case 10:47===S?S=0:0===1+f&&107!==d&&0<L.length&&(D=1,L+="\x00"),0<R*M&&s(0,L,o,r,O,E,W.length,d,h,d),E=1,O++;break;case 59:case 125:if(0===S+A+x+C){E++;break}default:switch(E++,y=c.charAt(T),p){case 9:case 32:if(0===A+C+S)switch(j){case 44:case 58:case 9:case 32:y="";break;default:32!==p&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===A+S+C&&(D=$=1,y="\f"+y);break;case 108:if(0===A+S+C+I&&0<z)switch(T-z){case 2:112===j&&58===c.charCodeAt(T-3)&&(I=j);case 8:111===_&&(I=_)}break;case 58:0===A+S+C&&(z=T);break;case 44:0===S+x+A+C&&(D=1,y+="\r");break;case 34:case 39:0===S&&(A=A===p?0:0===A?p:A);break;case 91:0===A+S+x&&C++;break;case 93:0===A+S+x&&C--;break;case 41:0===A+S+C&&x--;break;case 40:0===A+S+C&&(0===f&&(2*j+3*_==533||(f=1)),x++);break;case 64:0===S+x+A+C+z+g&&(g=1);break;case 42:case 47:if(!(0<A+C+x))switch(S){case 0:switch(2*p+3*c.charCodeAt(T+1)){case 235:S=47;break;case 220:B=T,S=42}break;case 42:47===p&&42===j&&B+2!==T&&(33===c.charCodeAt(B+2)&&(W+=c.substring(B,T+1)),y="",S=0)}}0===S&&(L+=y)}_=j,j=p,T++}if(0<(B=W.length)){if(D=o,0<R&&void 0!==(w=s(2,W,D,r,O,E,B,d,h,d))&&0===(W=w).length)return H+W+Y;if(W=D.join(",")+"{"+W+"}",0!=P*I){switch(2!==P||i(W,2)||(I=0),I){case 111:W=W.replace(b,":-moz-$1")+W;break;case 112:W=W.replace(v,"::-webkit-input-$1")+W.replace(v,"::-moz-$1")+W.replace(v,":-ms-input-$1")+W}I=0}}return H+W+Y}(N,o,r,0,0);return 0<R&&void 0!==(c=s(-2,d,o,o,O,E,d.length,0,0,0))&&(d=c),I=0,E=O=1,d}var l=/^\0+/g,u=/[\0\r\f]/g,d=/: */g,h=/zoo|gra/,f=/([,: ])(transform)/g,p=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,C=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,E=1,O=1,I=0,P=1,N=[],j=[],R=0,_=null,M=0;return c.use=function e(t){switch(t){case void 0:case null:R=j.length=0;break;default:if("function"==typeof t)j[R++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else M=0|!!t}return e},c.set=o,void 0!==e&&o(e),c},x={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},A=r(1068),E=r(8679),O=r.n(E),I=r(3454);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var N=function(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r},j=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,k.typeOf)(e)},R=Object.freeze([]),_=Object.freeze({});function M(e){return"function"==typeof e}function z(e){return e.displayName||e.name||"Component"}function T(e){return e&&"string"==typeof e.styledComponentId}var D=void 0!==I&&void 0!==I.env&&(I.env.REACT_APP_SC_ATTR||I.env.SC_ATTR)||"data-styled",$="undefined"!=typeof window&&"HTMLElement"in window,B=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==I&&void 0!==I.env&&(void 0!==I.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==I.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==I.env.REACT_APP_SC_DISABLE_SPEEDY&&I.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==I.env.SC_DISABLE_SPEEDY&&""!==I.env.SC_DISABLE_SPEEDY&&"false"!==I.env.SC_DISABLE_SPEEDY&&I.env.SC_DISABLE_SPEEDY));function F(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var G=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)(i<<=1)<0&&F(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=n;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),o=0,c=t.length;o<c;o++)this.tag.insertRule(s,t[o])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,a=n;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),L=new Map,W=new Map,Y=1,H=function(e){if(L.has(e))return L.get(e);for(;W.has(Y);)Y++;var t=Y++;return L.set(e,t),W.set(t,e),t},q=function(e,t){t>=Y&&(Y=t+1),L.set(e,t),W.set(t,e)},Z="style["+D+'][data-styled-version="5.3.11"]',U=RegExp("^"+D+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),V=function(e,t,r){for(var n,i=r.split(","),a=0,s=i.length;a<s;a++)(n=i[a])&&e.registerName(t,n)},J=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var o=s.match(U);if(o){var c=0|parseInt(o[1],10),l=o[2];0!==c&&(q(l,c),V(e,l,o[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(s)}}},K=function(){return r.nc},Q=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(D))return n}}(r),a=void 0!==i?i.nextSibling:null;n.setAttribute(D,"active"),n.setAttribute("data-styled-version","5.3.11");var s=K();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},X=function(){function e(e){var t=this.element=Q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var i=t[r];if(i.ownerNode===e)return i}F(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),ee=function(){function e(e){var t=this.element=Q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),et=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),er=$,en={isServer:!$,useCSSOMInjection:!B},ei=function(){function e(e,t,r){void 0===e&&(e=_),void 0===t&&(t={}),this.options=P({},en,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&$&&er&&(er=!1,function(e){for(var t=document.querySelectorAll(Z),r=0,n=t.length;r<n;r++){var i=t[r];i&&"active"!==i.getAttribute(D)&&(J(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return H(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(P({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){var e,t,r,n,i;return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,i=t.target,e=r?new et(i):n?new X(i):new ee(i),new G(e)))},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(H(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(H(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(H(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",i=0;i<r;i++){var a,s=(a=i,W.get(a));if(void 0!==s){var o=e.names.get(s),c=t.getGroup(i);if(o&&c&&o.size){var l=D+".g"+i+'[id="'+s+'"]',u="";void 0!==o&&o.forEach(function(e){e.length>0&&(u+=e+",")}),n+=""+c+l+'{content:"'+u+'"}/*!sc*/\n'}}}return n}(this)},e}(),ea=/(a)(d)/gi,es=function(e){return String.fromCharCode(e+(e>25?39:97))};function eo(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=es(t%52)+r;return(es(t%52)+r).replace(ea,"$1-$2")}var ec=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},el=function(e){return ec(5381,e)};function eu(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(M(r)&&!T(r))return!1}return!0}var ed=el("5.3.11"),eh=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&eu(e),this.componentId=t,this.baseHash=ec(ed,t),this.baseStyle=r,ei.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash){if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))i.push(this.staticRulesId);else{var a=eP(this.rules,e,t,r).join(""),s=eo(ec(this.baseHash,a)>>>0);if(!t.hasNameForId(n,s)){var o=r(a,"."+s,void 0,n);t.insertRules(n,s,o)}i.push(s),this.staticRulesId=s}}else{for(var c=this.rules.length,l=ec(this.baseHash,r.hash),u="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)u+=h;else if(h){var f=eP(h,e,t,r),p=Array.isArray(f)?f.join(""):f;l=ec(l,p+d),u+=p}}if(u){var g=eo(l>>>0);if(!t.hasNameForId(n,g)){var m=r(u,"."+g,void 0,n);t.insertRules(n,g,m)}i.push(g)}}return i.join(" ")},e}(),ef=/^\s*\/\/.*$/gm,ep=[":","[",".","#"];function eg(e){var t,r,n,i,a=void 0===e?_:e,s=a.options,o=a.plugins,c=void 0===o?R:o,l=new S(void 0===s?_:s),u=[],d=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,i,a,s,o,c,l,u,d){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(i[0]+n),"";default:return n+(0===d?"/*|*/":"")}case -2:n.split("/*|*/}").forEach(t)}}}(function(e){u.push(e)}),h=function(e,n,a){return 0===n&&-1!==ep.indexOf(a[r.length])||a.match(i)?e:"."+t};function f(e,a,s,o){void 0===o&&(o="&");var c=e.replace(ef,"");return t=o,n=RegExp("\\"+(r=a)+"\\b","g"),i=RegExp("(\\"+r+"\\b){2,}"),l(s||!a?"":a,a&&s?s+" "+a+" { "+c+" }":c)}return l.use([].concat(c,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(r)>0&&(i[0]=i[0].replace(n,h))},d,function(e){if(-2===e){var t=u;return u=[],t}}])),f.hash=c.length?c.reduce(function(e,t){return t.name||F(15),ec(e,t.name)},5381).toString():"",f}var em=p.createContext(),ev=(em.Consumer,p.createContext()),eb=(ev.Consumer,new ei),ey=eg();function ek(){return(0,p.useContext)(em)||eb}function ew(e){var t=(0,p.useState)(e.stylisPlugins),r=t[0],n=t[1],i=ek(),a=(0,p.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target]),s=(0,p.useMemo)(function(){return eg({options:{prefix:!e.disableVendorPrefixes},plugins:r})},[e.disableVendorPrefixes,r]);return(0,p.useEffect)(function(){C()(r,e.stylisPlugins)||n(e.stylisPlugins)},[e.stylisPlugins]),p.createElement(em.Provider,{value:a},p.createElement(ev.Provider,{value:s},e.children))}var eC=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=ey);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return F(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ey),this.name+e.hash},e}(),eS=/([A-Z])/,ex=/([A-Z])/g,eA=/^ms-/,eE=function(e){return"-"+e.toLowerCase()};function eO(e){return eS.test(e)?e.replace(ex,eE).replace(eA,"-ms-"):e}var eI=function(e){return null==e||!1===e||""===e};function eP(e,t,r,n){if(Array.isArray(e)){for(var i,a=[],s=0,o=e.length;s<o;s+=1)""!==(i=eP(e[s],t,r,n))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return eI(e)?"":T(e)?"."+e.styledComponentId:M(e)?"function"!=typeof e||e.prototype&&e.prototype.isReactComponent||!t?e:eP(e(t),t,r,n):e instanceof eC?r?(e.inject(r,n),e.getName(n)):e:j(e)?function e(t,r){var n,i,a=[];for(var s in t)t.hasOwnProperty(s)&&!eI(t[s])&&(Array.isArray(t[s])&&t[s].isCss||M(t[s])?a.push(eO(s)+":",t[s],";"):j(t[s])?a.push.apply(a,e(t[s],s)):a.push(eO(s)+": "+(n=s,null==(i=t[s])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||n in x||n.startsWith("--")?String(i).trim():i+"px")+";"));return r?[r+" {"].concat(a,["}"]):a}(e):e.toString()}var eN=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ej(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return M(e)||j(e)?eN(eP(N(R,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:eN(eP(N(e,r)))}var eR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,e_=/(^-|-$)/g;function eM(e){return e.replace(eR,"-").replace(e_,"")}var ez=function(e){return eo(el(e)>>>0)};function eT(e){return"string"==typeof e}var eD=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},e$=p.createContext();e$.Consumer;var eB={},eF=function(e){return function e(t,r,n){if(void 0===n&&(n=_),!(0,k.isValidElementType)(r))return F(1,String(r));var i=function(){return t(r,n,ej.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,r,P({},n,{},i))},i.attrs=function(i){return e(t,r,P({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},i}(function e(t,r,n){var i=T(t),a=!eT(t),s=r.attrs,o=void 0===s?R:s,c=r.componentId,l=void 0===c?(m=r.displayName,v=r.parentComponentId,eB[b="string"!=typeof m?"sc":eM(m)]=(eB[b]||0)+1,y=b+"-"+ez("5.3.11"+b+eB[b]),v?v+"-"+y:y):c,u=r.displayName,d=void 0===u?eT(t)?"styled."+t:"Styled("+z(t)+")":u,h=r.displayName&&r.componentId?eM(r.displayName)+"-"+r.componentId:r.componentId||l,f=i&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=r.shouldForwardProp;i&&t.shouldForwardProp&&(g=r.shouldForwardProp?function(e,n,i){return t.shouldForwardProp(e,n,i)&&r.shouldForwardProp(e,n,i)}:t.shouldForwardProp);var m,v,b,y,k,w=new eh(n,h,i?t.componentStyle:void 0),C=w.isStatic&&0===o.length,S=function(e,t){return function(e,t,r,n){var i,a,s,o,c,l,u,d=e.attrs,h=e.componentStyle,f=e.defaultProps,g=e.foldedComponentIds,m=e.shouldForwardProp,v=e.styledComponentId,b=e.target,y=(i=(0,p.useContext)(e$),void 0===(a=f)&&(a=_),void 0===(s=t.theme!==a.theme&&t.theme||i||a.theme||_)&&(s=_),o=P({},t,{theme:s}),c={},d.forEach(function(e){var t,r,n,i=e;for(t in M(i)&&(i=i(o)),i)o[t]=c[t]="className"===t?(r=c[t],n=i[t],r&&n?r+" "+n:r||n):i[t]}),[o,c]),k=y[0],w=y[1],C=(l=ek(),u=(0,p.useContext)(ev)||ey,n?h.generateAndInjectStyles(_,l,u):h.generateAndInjectStyles(k,l,u)),S=w.$as||t.$as||w.as||t.as||b,x=eT(S),E=w!==t?P({},t,{},w):t,O={};for(var I in E)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?O.as=E[I]:(m?m(I,A.Z,S):!x||(0,A.Z)(I))&&(O[I]=E[I]));return t.style&&w.style!==t.style&&(O.style=P({},t.style,{},w.style)),O.className=Array.prototype.concat(g,v,C!==v?C:null,t.className,w.className).filter(Boolean).join(" "),O.ref=r,(0,p.createElement)(S,O)}(k,e,t,C)};return S.displayName=d,(k=p.forwardRef(S)).attrs=f,k.componentStyle=w,k.displayName=d,k.shouldForwardProp=g,k.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):R,k.styledComponentId=h,k.target=i?t.target:t,k.withComponent=function(t){var i=r.componentId,a=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}(r,["componentId"]),s=i&&i+"-"+(eT(t)?t:eM(z(t)));return e(t,P({},a,{attrs:f,componentId:s}),n)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];for(var a=0;a<n.length;a++){var s,o=n[a];if(eD(o))for(var c in o)"__proto__"!==(s=c)&&"constructor"!==s&&"prototype"!==s&&function(t,r,n){var i=t[n];eD(r)&&eD(i)?e(i,r):t[n]=r}(t,o[c],c)}return t}({},t.defaultProps,e):e}}),Object.defineProperty(k,"toString",{value:function(){return"."+k.styledComponentId}}),a&&O()(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),k},e)};function eG(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=ej.apply(void 0,[e].concat(r)).join(""),a=ez(i);return new eC(a,i)}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){eF[e]=eF(e)}),(n=(function(e,t){this.rules=e,this.componentId=t,this.isStatic=eu(e),ei.registerId(this.componentId+1)}).prototype).createStyles=function(e,t,r,n){var i=n(eP(this.rules,t,r,n).join(""),""),a=this.componentId+e;r.insertRules(a,a,i)},n.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.renderStyles=function(e,t,r,n){e>2&&ei.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},(i=(function(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=K();return"<style "+[r&&'nonce="'+r+'"',D+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?F(2):e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)return F(2);var t,r=((t={})[D]="",t["data-styled-version"]="5.3.11",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=K();return n&&(r.nonce=n),[p.createElement("style",P({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ei({isServer:!0}),this.sealed=!1}).prototype).collectStyles=function(e){return this.sealed?F(2):p.createElement(ew,{sheet:this.instance},e)},i.interleaveWithNodeStream=function(e){return F(3)};var eL=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},eW=eG(s||(s=eL(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),33.98873199462888,242.776657104492,26.70543228149412,84.97182998657219,242.776657104492,84.97182998657219,2.42776657104492,242.776657104492,240.34889053344708);eF.path(o||(o=eL(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),2.42776657104492,242.776657104492,eW,1.6);var eY=function(){return(eY=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},eH=function(e){var t=e.height,r=e.width,n=e.radius,i=void 0===n?1:n,a=e.color,s=e.ariaLabel,o=e.wrapperStyle,c=e.wrapperClass,l=e.visible;return p.createElement("div",eY({style:eY(eY({},v(void 0===l||l)),o),className:c,"data-testid":"puff-loading","aria-label":void 0===s?"puff-loading":s},m),p.createElement("svg",{width:void 0===r?80:r,height:void 0===t?80:t,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",stroke:void 0===a?g:a,"data-testid":"puff-svg"},p.createElement("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2"},p.createElement("circle",{cx:"22",cy:"22",r:i},p.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"strokeOpacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),p.createElement("circle",{cx:"22",cy:"22",r:i},p.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"strokeOpacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})))))},eq=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},eZ=eG(c||(c=eq(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));eF.svg(l||(l=eq(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),eZ,(a="speed",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(void 0!==e[a])return e[a];if(a&&a.indexOf(".")>0){for(var t=a.split("."),r=t.length,n=e[t[0]],i=1;null!=n&&i<r;)n=n[t[i]],i+=1;if(void 0!==n)return n}return"0.75"})),eF.polyline(u||(u=eq(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),function(e){return e.width});var eU=function(){return(eU=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},eV=function(e){var t=e.height,r=e.width,n=e.radius,i=void 0===n?9:n,a=e.color,s=e.ariaLabel,o=e.wrapperStyle,c=e.wrapperClass,l=e.visible;return p.createElement("div",eU({style:eU(eU({},v(void 0===l||l)),o),className:c,"data-testid":"three-dots-loading","aria-label":void 0===s?"three-dots-loading":s},m),p.createElement("svg",{width:void 0===r?80:r,height:void 0===t?80:t,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:void 0===a?g:a,"data-testid":"three-dots-svg"},p.createElement("circle",{cx:"15",cy:"15",r:Number(i)+6},p.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),p.createElement("circle",{cx:"60",cy:"15",r:i,attributeName:"fill-opacity",from:"1",to:"0.3"},p.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),p.createElement("circle",{cx:"105",cy:"15",r:Number(i)+6},p.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},eJ=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},eK=eG(d||(d=eJ(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));eF.polygon(h||(h=eJ(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),eK),eF.svg(f||(f=eJ(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])));var eQ=function(){return(eQ=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function eX(e){var t=e.visible,r=e.height,n=e.width,i=e.wrapperClass,a=e.wrapperStyle,s=e.ariaLabel,o=e.borderColor,c=e.barColor;return void 0===t||t?p.createElement("svg",eQ({width:void 0===n?"80":n,height:void 0===r?"80":r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:void 0===i?"":i,style:void 0===a?{}:a,"aria-label":void 0===s?"progress-bar-loading":s,"data-testid":"progress-bar-svg"},m),p.createElement("defs",null,p.createElement("clipPath",{"ng-attr-id":"{{config.cpid}}",x:"0",y:"0",width:"100",height:"100",id:"lds-progress-cpid-5009611b8a418"},p.createElement("rect",{x:"0",y:"0",width:"66.6667",height:"100"},p.createElement("animate",{attributeName:"width",calcMode:"linear",values:"0;100;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"}),p.createElement("animate",{attributeName:"x",calcMode:"linear",values:"0;0;100",keyTimes:"0;0.5;1",dur:"1",begin:"0s",repeatCount:"indefinite"})))),p.createElement("path",{fill:"none","ng-attr-stroke":"{{config.c1}}",strokeWidth:"2.7928",d:"M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z",stroke:void 0===o?"#F4442E":o}),p.createElement("path",{"ng-attr-fill":"{{config.c2}}","ng-attr-clip-path":"url(#{{config.cpid}})",d:"M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z",fill:void 0===c?"#51E5FF":c,clipPath:"url(#lds-progress-cpid-5009611b8a418)"})):null}},6774:function(e){e.exports=function(e,t,r,n){var i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!o(l))return!1;var u=e[l],d=t[l];if(!1===(i=r?r.call(n,u,d,l):void 0)||void 0===i&&u!==d)return!1}return!0}}}]);