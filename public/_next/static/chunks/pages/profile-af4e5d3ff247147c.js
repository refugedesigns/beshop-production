(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return l(7798)}])},6453:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(9008),r=l.n(a);let i=e=>{let{title:t,description:l}=e;return(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:t}),l&&(0,s.jsx)("meta",{name:"description",content:l}),(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("meta",{name:"author",content:"Erasmus Antwi"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})};t.Z=i},7534:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(1664),r=l.n(a),i=l(1163),n=l(7357),o=l(5582),c=l(5861),d=l(2963);let u=e=>{let{pageTitle:t,breadcrumbs:l}=e,a=(0,i.useRouter)();return(0,s.jsx)(n.Z,{className:"bg-[url('/assets/img/detail-main-bg-sm.jpg')] bg-center bg-cover sm:bg-[url('/assets/img/detail-main-bg.jpg')] sm:bg-center min-h-[400px]",children:(0,s.jsxs)(o.Z,{maxWidth:"lg",className:"pt-40 flex flex-col items-center",children:[(0,s.jsx)(c.Z,{variant:"h2",className:"font-elegant",children:t}),(0,s.jsx)(d.Z,{className:"mt-6",separator:"-",children:null==l?void 0:l.map((e,t)=>e.link?(0,s.jsx)(r(),{className:"no-underline text-black hover:text-style-color",href:e.link,children:e.title},t):(0,s.jsx)(c.Z,{className:"".concat(a.pathname.split("/")[1].split(" ")[0]===e.title.toLowerCase()?"text-style-color":a.pathname.split("/")[1]===e.title.toLowerCase().split(" ")[1]?"text-style-color":""),component:"p",children:e.title},t))})]})})};t.Z=u},4845:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(3321);let r=e=>{let{title:t,classes:l,...r}=e;return(0,s.jsx)(a.Z,{disableElevation:!0,variant:"contained",className:"rounded-none bg-black flex justify-center w-[200px] z-20 ".concat(l),...r,children:t})};t.Z=r},6800:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(8385);let r=e=>{let{children:t}=e;return(0,s.jsx)(a.Z,{children:t})};t.Z=r},2415:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(1163),r=l(1233),i=l(3965),n=l(5861),o=l(5675),c=l.n(o);let d=e=>{let{imageUrl:t,title:l,price:o,link:d}=e,u=(0,a.useRouter)(),m=()=>{d&&u.push(d)};return(0,s.jsxs)(r.Z,{onClick:m,direction:"row",spacing:2,className:"hover:cursor-pointer",children:[(0,s.jsx)(i.Z,{className:"h-24 w-16",children:(0,s.jsx)(c(),{src:t,height:"0",width:"0",sizes:"100vw",className:"w-full h-auto object-contain",alt:"product image"})}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(n.Z,{variant:"h5",component:"h2",className:"text-[1rem] font-medium",children:l}),(0,s.jsx)(n.Z,{variant:"h6",component:"h2",className:"text-sm font-medium text-gray-400",children:o})]})]})};t.Z=d},8337:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(44);let r=e=>{let{label:t,...l}=e;return(0,s.jsx)(a.Z,{sx:{backgroundColor:"#faf9ff",border:"1px solid #eee",textTransform:"capitalize",fontSize:"1rem",color:"#808080",whiteSpace:"nowrap","&.Mui-selected":{backgroundColor:"#d05278",color:"white",textTransform:"capitalize",fontSize:"1rem",border:"none"},px:5,minWidth:{xs:"100%",md:"auto"}},label:t,...l})};t.Z=r},7410:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(5697),r=l.n(a),i=l(7357);let n=e=>{let{children:t,value:l,index:a,...r}=e;return(0,s.jsx)("div",{role:"tabpanel",hidden:l!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a),...r,children:l===a&&(0,s.jsx)(i.Z,{children:t})})};n.propTypes={children:r().node,index:r().number.isRequired,value:r().number.isRequired},t.Z=n},4499:function(e,t,l){"use strict";var s=l(5893);l(7294);var a=l(7357),r=l(5861),i=l(7720),n=l(1233),o=l(2415);let c=e=>{let{products:t}=e;return(0,s.jsxs)(a.Z,{className:"",children:[(0,s.jsx)(r.Z,{variant:"h5",className:"font-elegant",children:"You have viewed"}),(0,s.jsx)(i.Z,{className:"mt-2 bg-black h-[0.1rem]"}),(0,s.jsx)(n.Z,{className:"mt-6 space-y-4",children:null==t?void 0:t.slice(0,3).map(e=>(0,s.jsx)(o.Z,{title:e.name,price:e.price,imageUrl:e.image,link:"/shop/".concat(e._id)},e._id))})]})};t.Z=c},638:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=r.default,a={loading:e=>{let{error:t,isLoading:l,pastDelay:s}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=s({},a,e)),a=s({},a,t);let o=a.loader,c=()=>null!=o?o().then(i):Promise.resolve(i(()=>null));return(a.loadableGenerated&&delete(a=s({},a,a.loadableGenerated)).loadableGenerated,"boolean"!=typeof a.ssr||a.ssr)?l(s({},a,{loader:c})):(delete a.webpack,delete a.modules,n(l,a))},t.noSSR=n;var s=l(6495).Z,a=l(2648).Z,r=(a(l(7294)),a(l(4302)));function i(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=(0,l(2648).Z)(l(7294));let a=s.default.createContext(null);t.LoadableContext=a},4302:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(6495).Z,a=(0,l(2648).Z)(l(7294)),r=l(6319);let i=[],n=[],o=!1;function c(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),s=null;function i(){if(!s){let t=new d(e,l);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()}if(!o){let e=l.webpack?l.webpack():l.modules;e&&n.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return i()})}function c(e,t){!function(){i();let e=a.default.useContext(r.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let n=a.default.useSyncExternalStore(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:s.retry}),[]),a.default.useMemo(()=>{var t;return n.loading||n.error?a.default.createElement(l.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.default?t.default:t,e):null},[e,n])}return c.preload=()=>i(),c.displayName="LoadableComponent",a.default.forwardRef(c)}(c,e)}function m(e,t){let l=[];for(;e.length;){let s=e.pop();l.push(s(t))}return Promise.all(l).then(()=>{if(e.length)return m(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{m(i).then(e,t)}),u.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(o=!0,t());m(n,e).then(l,l)})},window.__NEXT_PRELOADREADY=u.preloadReady,t.default=u},7798:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return F}});var s=l(5893),a=l(7294),r=l(1248),i=l(1163),n=l(7534),o=l(5582),c=l(6886),d=l(3136),u=l(5675),m=l.n(u),h=l(1233),p=l(3965),f=l(5861),x=l(7357),b=l(8271),j=l(4845);let g=()=>(0,s.jsxs)(h.Z,{className:"bg-[#FCECEB] p-4  md:py-12 relative",children:[(0,s.jsx)(p.Z,{className:"absolute -bottom-[.5rem] right-0 overflow-hidden h-auto w-[60%] sm:w-[50%] object-bottom lg:h-auto lg:w-[90%] lg:-bottom-[.5rem]",children:(0,s.jsx)(m(),{src:"/assets/img/subscribe-img-decor-sm.png",width:"0",height:"0",sizes:"100vw",className:"w-full h-auto",alt:""})}),(0,s.jsx)(f.Z,{variant:"h2",className:"font-elegant text-center text-3xl md:text-5xl",children:"Stay In Touch"}),(0,s.jsxs)(x.Z,{className:"mt-8 space-y-4 md:w-[90%] mx-auto",children:[(0,s.jsx)(b.Z,{name:"subscribe",id:"subscribe",placeholder:"Enter your email",fullWidth:!0,variant:"outlined",className:"z-40",sx:{"& fieldset":{border:"none",borderRadius:0},"&.Mui-focused fieldset":{border:"1px solid black"}},inputProps:{sx:{bgcolor:"white"}}}),(0,s.jsx)(j.Z,{title:"Subscribe",classes:"w-full"})]})]});var y=l(4499);let v=()=>(0,s.jsx)(x.Z,{className:"bg-[url('/assets/img/discount-bg-sm.jpg')] bg-no-repeat bg-contain bg-[#FCECEB] flex flex-col justify-center h-[300px]  w-full",children:(0,s.jsxs)(x.Z,{className:"mx-8 md:mx-16 lg:mx-4 space-y-4 mt-8 md:flex md:flex-col",children:[(0,s.jsxs)(f.Z,{variant:"h3",className:"text-right font-elegant md:max-w-[18rem] md:self-end",children:["Get Your ",(0,s.jsx)("span",{className:"text-style-color",children:"50%"})," Off"]}),(0,s.jsx)(j.Z,{title:"Get Now!",classes:"w-full"})]})});var Z=l(1703),_=l(2734),w=l(8396),N=l(7410),k=l(8337),C=l(5152),P=l.n(C);let E=P()(()=>Promise.all([l.e(885),l.e(254),l.e(565),l.e(844)]).then(l.bind(l,9844)),{loadableGenerated:{webpack:()=>[9844]}}),S=P()(()=>Promise.all([l.e(254),l.e(607),l.e(612)]).then(l.bind(l,6612)),{loadableGenerated:{webpack:()=>[6612]}});function T(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}let O=()=>{let[e,t]=(0,a.useState)(0),l=(0,i.useRouter)(),r=(0,_.Z)(),n=(0,w.Z)(r.breakpoints.up("md")),o=(e,l)=>{t(l)};return(0,a.useEffect)(()=>{l.query.tab&&"orders"===l.query.tab&&t(1)},[l.query]),(0,s.jsxs)(x.Z,{sx:{width:"100%"},children:[(0,s.jsxs)(Z.Z,{value:e,onChange:o,"aria-label":"basic tabs example",TabIndicatorProps:{sx:{bgcolor:"transparent"}},orientation:n?"horizontal":"vertical",className:"",children:[(0,s.jsx)(k.Z,{label:"My Info",...T(0)}),(0,s.jsx)(k.Z,{label:"My Orders",className:"md:mx-2",...T(1)}),(0,s.jsx)(k.Z,{label:"Wishlist",...T(2)})]}),(0,s.jsx)(N.Z,{value:e,index:0,children:"Item One"}),(0,s.jsx)(N.Z,{className:"mt-10",value:e,index:1,children:(0,s.jsx)(E,{})}),(0,s.jsx)(N.Z,{value:e,index:2,children:(0,s.jsx)(S,{})})]})};var R=l(4150),M=l(6800);let G=e=>{let{open:t}=e,l=(0,i.useRouter)();return(0,s.jsx)(M.Z,{children:(0,s.jsx)(R.Z,{"aria-labelledby":"modal-modal-session-timeout","aria-describedby":"modal-modal-session-expired",open:t,className:"",children:(0,s.jsxs)(x.Z,{className:"absolute top-[50%] left-[50%] bg-white translate-x-[-50%] translate-y-[-50%] w-[90%] h-[90%] flex flex-col items-center justify-center space-y-6",children:[(0,s.jsx)(f.Z,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Session timeout, please log in to continue."}),(0,s.jsxs)(x.Z,{className:"space-x-3 w-full flex justify-center",children:[(0,s.jsx)(j.Z,{onClick:()=>l.push("/login?redirect=profile"),title:"Login to continue",classes:""}),(0,s.jsx)(j.Z,{onClick:()=>l.push("/shop"),title:"Go Shopping",classes:""})]})]})})})};var L=l(9074),z=l(6453);let D=()=>{let e;let[t,l]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!0),h=(0,r.v9)(L.HF),p=(0,i.useRouter)();return(0,a.useEffect)(()=>{h._id?m(!1):p.push("/shop")},[]),(0,a.useEffect)(()=>{l(!h._id)},[t,h._id]),u?e=(0,s.jsx)(o.Z,{maxWidth:"lg",className:"min-h-screen flex justify-center items-center",children:(0,s.jsx)(d.BR,{height:"80",width:"80",radius:1,color:"#d05278",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}):u||(e=(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(z.Z,{title:"GoShop - Profile",description:"GoShop Profile Page"}),t&&(0,s.jsx)(G,{open:t}),(0,s.jsx)(n.Z,{pageTitle:"My Profile",breadcrumbs:[{title:"Home",link:"/"},{title:"My Profile"}]}),(0,s.jsx)(o.Z,{className:"my-20",children:(0,s.jsxs)(c.ZP,{container:!0,spacing:{md:4},children:[(0,s.jsxs)(c.ZP,{item:!0,lg:3,className:"w-full order-2 lg:w-2/6 space-y-6 md:space-y-12 lg:space-y-16 mt-4 lg:mt-0",children:[(0,s.jsx)(g,{}),(0,s.jsx)(y.Z,{}),(0,s.jsx)(v,{})]}),(0,s.jsx)(c.ZP,{item:!0,lg:9,className:"w-full order-1 lg:order-2 lg:w-4/6",children:(0,s.jsx)(O,{})})]})})]})),e};var F=D},5152:function(e,t,l){e.exports=l(638)}},function(e){e.O(0,[330,271,136,886,613,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);