(this["webpackJsonpredux-learn"]=this["webpackJsonpredux-learn"]||[]).push([[0],{136:function(e,t,a){},137:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),c=a(10),o=a.n(c),s=(a(136),a(137),a(32)),l=a(19),u=a(11),d=a(13),j=a(4),b=a(222),p=a(12),h=a(24),g=a(256),O=a(245),m=a(246),x=a(247),f=a(236),v=a(35),y=a(248),w=a(110),C=a.n(w),_=a(176),S=a(250),k=a(240),N=a(115),T=a(111),E=a.n(T),q=a(112),I=a.n(q),L=a(225),B=a(228),R=a(232),M=a(231),z=a(227),A=a(229),V=a(230),D=a(118),F=a(15);function P(e,t,a,n,i){return{name:e,calories:t,fat:a,carbs:n,protein:i}}var W=[P("Frozen yoghurt",159,6,24,4),P("Ice cream sandwich",237,9,37,4.3),P("Eclair",262,16,24,6),P("Cupcake",305,3.7,67,4.3),P("Gingerbread",356,16,49,3.9)],G=Object(b.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cell:{color:"white",fontSize:"15px"}}}));var U=Object(s.b)((function(e){return{user_detail:e.user_detail}}))(Object(F.i)((function(e){var t=G();return console.log(e.user_detail),Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(L.a,{container:!0,spacing:2,children:Object(n.jsx)(L.a,{item:!0,xs:12,children:Object(n.jsx)(z.a,{component:D.a,style:{background:"#fdac5d"},children:Object(n.jsxs)(B.a,{className:t.table,"aria-label":"simple table",children:[Object(n.jsx)(A.a,{children:Object(n.jsxs)(V.a,{children:[Object(n.jsx)(M.a,{className:t.cell,children:"Dessert (100g serving)"}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:"Calories"}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:"Fat\xa0(g)"}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:"Carbs\xa0(g)"}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:"Protein\xa0(g)"})]})}),Object(n.jsx)(R.a,{style:{color:"white"},children:W.map((function(e){return Object(n.jsxs)(V.a,{children:[Object(n.jsx)(M.a,{component:"th",scope:"row",className:t.cell,children:e.name}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:e.calories}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:e.fat}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:e.carbs}),Object(n.jsx)(M.a,{align:"right",className:t.cell,children:e.protein})]},e.name)}))})]})})})})})}))),Q=a(36),H=a(72),J=a(237),K=a(238),X=a(239),Y=a(235),Z=a(259),$=a(255),ee=a(243),te=a(244),ae=a(18),ne=a(241),ie=a(242),re=a(80),ce=a.n(re),oe=a(257),se=new oe.a,le=ce.a.create({baseURL:"".concat("http://3.131.180.250:8000/admin")});le.defaults.headers.common.authorization=se.get("token")||"";var ue=a(40),de=Object(b.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},input:{marginBottom:16},formControl:{width:"100%",paddingLeft:"10px"}}}));var je=[{component:U,path:"/dashboard",name:"Users",icon:"supervised_user_circle"},{component:function(e){var t=de(),a=Object(i.useState)(""),r=Object(l.a)(a,2),c=r[0],o=r[1],s=Object(i.useState)([{option_type:"",option_title:""}]),u=Object(l.a)(s,2),d=u[0],j=u[1],b=Object(i.useState)(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]),p=Object(l.a)(b,2),h=p[0],g=(p[1],Object(i.useRef)(null)),O=function(){j([].concat(Object(H.a)(d),[{option_type:"",option_title:""}]))},m=function(e,t){var a=e.target,n=a.name,i=a.value,r=Object(H.a)(d);r[t][n]=i,j(r)};return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(L.a,{container:!0,spacing:2,children:Object(n.jsx)(L.a,{item:!0,xs:12,children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)(K.a,{title:"Add Questions",subheader:"All fields is mandatory"}),Object(n.jsxs)(ae.ValidatorForm,{ref:g,onSubmit:function(e){e.preventDefault(),le.post("/add-questions",{question:c,option_list:d}).then((function(e){200===e.status&&(Object(ue.b)("Question add successfully",{type:"success"}),o(""),j([{option_type:"",option_title:""}]))})).catch((function(e){return console.log(e)}))},onError:function(e){return console.log(e)},children:[Object(n.jsx)(X.a,{children:Object(n.jsxs)(L.a,{container:!0,children:[Object(n.jsx)(L.a,{xs:12,children:Object(n.jsx)(ae.TextValidator,{label:"Question",fullWidth:!0,className:t.input,variant:"outlined",onChange:function(e){return o(e.target.value)},type:"text",value:c,validators:["required"],errorMessages:["Question field is required"]})}),d.map((function(e,a){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(L.a,{item:!0,xs:"3",children:Object(n.jsxs)(Y.a,{variant:"outlined",className:t.formControl,children:[Object(n.jsx)(Z.a,{id:"option_type",children:"Option Type"}),Object(n.jsx)($.a,{id:"option_type",labelId:"option_type",value:e.option_type,name:"option_type",onChange:function(e){return m(e,a)},children:h.map((function(e){return Object(n.jsx)(k.a,{value:e,children:e})}))})]})}),Object(n.jsx)(L.a,{item:!0,xs:"8",style:{paddingLeft:"10px"},children:Object(n.jsx)(ae.TextValidator,{label:"Option Title",className:t.input,variant:"outlined",fullWidth:!0,name:"option_title",value:e.option_title,validators:["required"],errorMessages:["Option Title field is required"],onChange:function(e){return m(e,a)}})}),Object(n.jsxs)(L.a,{item:!0,xs:1,style:{paddingLeft:"8px"},children:[d.length-1===a&&Object(n.jsx)(ne.a,{style:{fontSize:"30px",marginTop:"5px",color:"Blue",cursor:"pointer"},onClick:O}),1!==d.length&&Object(n.jsx)(ie.a,{style:{fontSize:"30px",color:"Red",marginTop:"5px",cursor:"pointer"},onClick:function(){return function(e){var t=Object(H.a)(d);t.splice(e,1),j(t)}(a)}})]})]})}))]})}),Object(n.jsx)(ee.a,{children:Object(n.jsx)(te.a,{type:"submit",color:"secondary",size:"large",variant:"contained",children:"Submit"})})]})]})})})})},path:"/dashboard/add-questions",name:"Questions",icon:"question_answer"}],be=a(249),pe=240,he=Object(b.a)((function(e){var t,a,n;return n={root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(pe,"px)"),marginLeft:pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:pe,flexShrink:0},drawerPaper:{width:pe,background:"#f3698e"},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},listroot:{width:"100%",backgroundColor:e.palette.background.paper,marginTop:"10px"},inline:{display:"inline"},title:{paddingLeft:"20px",textDecoration:"none"},titleAnchor:{textDecoration:"none"},grow:{flexGrow:1}},Object(u.a)(n,"menuButton",{marginRight:e.spacing(2)}),Object(u.a)(n,"title",(t={display:"none"},Object(u.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(u.a)(t,"fontWeight","bold"),t)),Object(u.a)(n,"search",Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"})),Object(u.a)(n,"searchIcon",{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}),Object(u.a)(n,"inputRoot",{color:"inherit"}),Object(u.a)(n,"inputInput",Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})),Object(u.a)(n,"sectionDesktop",(a={display:"none"},Object(u.a)(a,e.breakpoints.up("md"),{display:"flex"}),Object(u.a)(a,"marginRight","100px"),a)),Object(u.a)(n,"sectionMobile",Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})),n})),ge=Object(s.b)((function(e){return{user_detail:e.user_detail}}))((function(e){Object(F.h)();var t=Object(F.g)(),a=he(),i=(Object(h.a)(),r.a.useState(!0)),c=Object(l.a)(i,2),o=c[0],s=c[1],d=r.a.useState(null),b=Object(l.a)(d,2),p=b[0],w=b[1],T=r.a.useState(null),q=Object(l.a)(T,2),L=q[0],B=q[1],R=Boolean(p),M=Boolean(L),z=function(){B(null)},A=function(){w(null),z()},V="primary-search-account-menu",D=Object(n.jsxs)(N.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:V,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:R,onClose:A,children:[Object(n.jsx)(k.a,{onClick:A,children:"Profile"}),Object(n.jsx)(k.a,{onClick:function(){t.push("/")},children:"Logout"})]}),P="primary-search-account-menu-mobile",W=Object(n.jsxs)(N.a,{anchorEl:L,anchorOrigin:{vertical:"top",horizontal:"right"},id:P,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:M,onClose:z,children:[Object(n.jsx)(k.a,{onClick:A,children:"Profile"}),Object(n.jsx)(k.a,{onClick:A,children:"Logout"})]});return Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(O.a,{}),Object(n.jsx)(m.a,{position:"fixed",className:Object(j.a)(a.appBar,Object(u.a)({},a.appBarShift,o)),style:{background:"#f3698e"},children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(j.a)(a.menuButton,o&&a.hide),children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(v.a,{className:a.title,variant:"h6",noWrap:!0,children:"LOVEU"}),Object(n.jsx)("div",{className:a.grow}),Object(n.jsxs)("div",{className:a.sectionDesktop,children:[Object(n.jsxs)(v.a,{style:{marginTop:"12px"},children:["Hi,",e.user_detail.name]}),Object(n.jsx)(y.a,{edge:"end","aria-label":"account of current user","aria-controls":V,"aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},color:"inherit",children:Object(n.jsx)(E.a,{})})]}),Object(n.jsx)("div",{className:a.sectionMobile,children:Object(n.jsx)(y.a,{"aria-label":"show more","aria-controls":P,"aria-haspopup":"true",onClick:function(e){B(e.currentTarget)},color:"inherit",children:Object(n.jsx)(I.a,{})})})]})}),W,D,Object(n.jsx)(g.a,{className:a.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:a.drawerPaper},children:Object(n.jsx)(f.a,{children:je.map((function(e,t){return Object(n.jsxs)(_.a,{button:!0,children:[Object(n.jsx)(be.a,{style:{color:"white"},children:e.icon}),Object(n.jsx)(Q.b,{to:e.path,style:{textDecoration:"none",color:"white",marginLeft:"10px"},children:Object(n.jsx)(S.a,{primary:e.name})})]},e.name)}))})}),Object(n.jsxs)("main",{className:Object(j.a)(a.content,Object(u.a)({},a.contentShift,o)),children:[Object(n.jsx)("div",{className:a.drawerHeader}),je.map((function(e){return Object(n.jsx)(F.b,{exact:!0,isAuth:"true",path:e.path,component:e.component})}))]})]})})),Oe=a(59),me="USER_LIST",xe="IS_LOADING",fe="IS_SUCCESS",ve="USER_DETAIL",ye="IS_AUTH",we={loading:!1,user_list:[],is_success:!1,user_detail:{},is_auth:!1},Ce=[a(113).a],_e=Object(Oe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(d.a)(Object(d.a)({},e),{},{user_list:t.payload});case ve:return Object(d.a)(Object(d.a)({},e),{},{user_detail:t.payload});case xe:return Object(d.a)(Object(d.a)({},e),{},{loading:t.payload});case fe:return Object(d.a)(Object(d.a)({},e),{},{is_success:t.payload});case ye:return Object(d.a)(Object(d.a)({},e),{},{is_auth:!0});default:return e}}),Oe.a.apply(void 0,Ce)),Se=a.p+"static/media/logo.3e8db16f.jpeg",ke=a(70),Ne=a.n(ke),Te=a(114),Ee=a(254),qe=a(251),Ie=a(252),Le=new oe.a,Be=Object(b.a)((function(e){return{root:{flexGrow:1,justify:"center",padding:e.spacing(2),position:"relative"},rootContainer:{position:"absolute",left:"0",right:"0",top:"0",bottom:0,margin:"auto",width:"500px"},input:{marginBottom:16,backgroundColor:"#fcfcfb"}}}));var Re=Object(s.b)((function(e){return{is_success:e.is_success}}),(function(e){return{signup:function(t,a){return e(function(e,t){return function(a){e.gender="Male",e.date_of_birth="10/20/1996",e.your_status="test",e.device_token="",e.device_type="",le.post("standard_signup",e).then((function(e){var n=e.data,i=n.data,r=n.status;console.log(i),200===r?(a({type:fe,payload:!0}),a({type:ve,payload:i[0]}),a({type:ye,payload:!0}),t.push("/dashboard")):a({type:fe,payload:!1})})).catch((function(e){a({type:fe,payload:!1})}))}}(t,a))}}}))((function(e){var t,a=Be(),r=Object(F.g)(),c=Object(i.useState)({name:"",email:"",password:"",business:""}),o=Object(l.a)(c,2),s=o[0],j=o[1],b=function(e){return j(Object(d.a)(Object(d.a)({},s),{},Object(u.a)({},e.target.name,e.target.value)))},p=Object(i.useRef)(null),h=function(){var t=Object(Te.a)(Ne.a.mark((function t(a){return Ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.signup(s,r),console.log(e.is_success);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)(L.a,{item:!0,xs:12,style:{marginTop:"40px"},children:Object(n.jsxs)(ae.ValidatorForm,{ref:p,onSubmit:h,onError:function(e){return console.log(e)},children:[Object(n.jsx)(ae.TextValidator,{label:"Full Name",fullWidth:!0,className:a.input,variant:"outlined",onChange:b,name:"name",value:s.name,validators:["required"],errorMessages:["Name field is required"]}),Object(n.jsx)(ae.TextValidator,{label:"Email",fullWidth:!0,className:a.input,variant:"outlined",onChange:b,name:"email",value:s.email,validators:["required","isEmail"],errorMessages:["Email field is required","email is not valid"]}),Object(n.jsx)(ae.TextValidator,{label:"Password",className:a.input,variant:"outlined",fullWidth:!0,onChange:b,name:"password",value:s.password,validators:["required"],errorMessages:["Password field is required"]}),Object(n.jsx)(ae.TextValidator,{label:"Business Name",className:a.input,variant:"outlined",fullWidth:!0,onChange:b,name:"business",value:s.business,validators:["required"],errorMessages:["Business field is required"]}),Object(n.jsx)(qe.a,{children:Object(n.jsx)(Ie.a,{control:Object(n.jsx)(Ee.a,{name:"checkedA"}),label:"I agree the terms & conditions"})}),Object(n.jsxs)(L.a,(t={justify:"center",alignItems:"center",container:!0},Object(u.a)(t,"justify","space-evenly"),Object(u.a)(t,"style",{marginTop:"20px"}),Object(u.a)(t,"children",[Object(n.jsx)(te.a,{type:"submit",color:"primary",size:"large",variant:"contained",children:"Sign Up"}),Object(n.jsx)(te.a,{type:"button",color:"primary",size:"large",variant:"contained",onClick:function(){return e.handler("login")},children:" Cancel"})]),t))]})})})),Me=Object(b.a)((function(e){return{root:{flexGrow:1,justify:"center",padding:e.spacing(2),position:"relative"},rootContainer:{position:"absolute",left:"0",right:"0",top:"0",bottom:0,margin:"auto",width:"500px"},input:{marginBottom:16,backgroundColor:"#fcfcfb"}}}));var ze=function(e){var t=Me(),a=Object(i.useState)(""),r=Object(l.a)(a,2),c=r[0],o=r[1],s=Object(i.useRef)(null);return Object(n.jsx)(L.a,{item:!0,xs:12,style:{marginTop:"40px"},children:Object(n.jsxs)(ae.ValidatorForm,{ref:s,onSubmit:function(){},onError:function(e){return console.log(e)},children:[Object(n.jsx)(ae.TextValidator,{label:"Email",fullWidth:!0,className:t.input,variant:"outlined",onChange:function(e){return o(e.target.value)},name:"email",value:c,validators:["required","isEmail"],errorMessages:["Email field is required","email is not valid"]}),Object(n.jsxs)(L.a,{alignItems:"center",container:!0,justify:"space-evenly",style:{marginTop:"20px"},children:[Object(n.jsx)(te.a,{type:"submit",color:"primary",size:"large",variant:"contained",children:"Request"}),Object(n.jsx)(te.a,{type:"button",color:"primary",size:"large",variant:"contained",onClick:function(){return e.handler("login")},children:"Cancel"})]})]})})},Ae=Object(b.a)((function(e){return{root:{flexGrow:1,justify:"center",padding:e.spacing(2),position:"relative"},rootContainer:{position:"absolute",left:"0",right:"0",top:"0",bottom:0,margin:"auto",width:"500px"},input:{marginBottom:16,backgroundColor:"#fcfcfb"}}}));var Ve=Object(s.b)((function(e){return{isLoading:e.loading,isSuccess:e.is_success}}),(function(e){return{user_login:function(t,a){return e(function(e,t){return console.log(e),function(a){le.post("login",e).then((function(e){var n=e.data,i=n.status,r=n.data,c=n.message;200===i?(a({type:ve,payload:r[0]}),Le.set("token",r[0].token),t.push("/dashboard")):Object(ue.b)(c,{type:"error"})})).catch((function(e){a({type:xe,payload:!1}),Object(ue.b)("Invalid Credentials",{type:"error"})}))}}(t,a))}}}))((function(e){var t=Object(F.g)(),a=Ae(),r=Object(i.useState)({email:"",password:""}),c=Object(l.a)(r,2),o=c[0],s=c[1],j=Object(i.useState)(!0),b=Object(l.a)(j,2),p=b[0],h=b[1],g=Object(i.useState)("login"),O=Object(l.a)(g,2),m=O[0],x=O[1],f=function(e){return s(Object(d.a)(Object(d.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))},y=Object(i.useRef)(null);Object(i.useEffect)((function(){}),[p]);var w=function(e){return x(e)};return Object(n.jsx)("div",{className:a.root,children:Object(n.jsxs)(L.a,{container:!0,spacing:2,className:a.rootContainer,children:[Object(n.jsxs)(L.a,{justify:"center",alignItems:"center",direction:"column",container:!0,children:[Object(n.jsx)("img",{src:Se,width:"300px",style:{marginBottom:"10px",marginTop:"20px"}}),Object(n.jsx)(v.a,{variant:"h6",children:"Sign In To Admin"}),Object(n.jsx)(v.a,{children:"Enter your details to login to your account:"})]}),"login"===m?Object(n.jsx)(L.a,{item:!0,xs:12,style:{marginTop:"40px"},children:Object(n.jsxs)(ae.ValidatorForm,{ref:y,onSubmit:function(a){a.preventDefault(),h(!1),e.user_login(o,t)},onError:function(e){return console.log(e)},children:[Object(n.jsx)(ae.TextValidator,{label:"Email",fullWidth:!0,className:a.input,variant:"outlined",onChange:f,name:"email",value:o.email,validators:["required","isEmail"],errorMessages:["Email field is required","email is not valid"]}),Object(n.jsx)(ae.TextValidator,{label:"Password",className:a.input,variant:"outlined",fullWidth:!0,onChange:f,name:"password",value:o.password,validators:["required"],errorMessages:["Password field is required"],type:"password"}),Object(n.jsx)(L.a,{alignItems:"center",container:!0,justify:"center",children:Object(n.jsx)(te.a,{type:"submit",color:"primary",size:"large",variant:"contained",children:"Sign in"})})]})}):"forget"===m?Object(n.jsx)(ze,{handler:w}):Object(n.jsx)(Re,{handler:w})]})})})),De=(a(173),a(116));var Fe=function(e){var t=e.isAuth,a=e.component,i=Object(De.a)(e,["isAuth","component"]);return Object(n.jsx)(F.b,Object(d.a)(Object(d.a)({},i),{},{render:function(e){return t?Object(n.jsx)(a,{}):Object(n.jsx)(F.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var Pe=function(){return Object(n.jsxs)(s.a,{store:_e,children:[Object(n.jsx)(ue.a,{}),Object(n.jsx)(Q.a,{children:Object(n.jsxs)(F.d,{children:[Object(n.jsx)(F.b,{exact:!0,path:"/",component:Ve}),Object(n.jsx)(Fe,{path:"/dashboard",component:ge,isAuth:!0})]})})]})},We=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,261)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Pe,{})}),document.getElementById("root")),We()}},[[174,1,2]]]);
//# sourceMappingURL=main.761b8704.chunk.js.map