(this["webpackJsonpredux-learn"]=this["webpackJsonpredux-learn"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n.n(i),o=n(11),c=n.n(o),s=(n(145),n(146),n(27)),l=n(10),u=n(14),d=n(13),j=n(4),b=n(231),p=n(12),O=n(22),g=n(267),h=n(259),m=n(260),f=n(243),x=n(246),y=n(37),v=n(241),w=n(117),S=n.n(w),_=n(187),C=n(257),k=n(242),N=n(124),q=n(118),T=n.n(q),E=n(119),I=n.n(E),L=n(247),B=n(15),R=n(66),A=n.n(R),P=n(268),D=(new P.a).get("token"),M=A.a.create({baseURL:"".concat("http://3.142.32.45:8000/admin")});M.interceptors.request.use((function(e){return D&&(e.headers.authorization=D),e}));var z=n(21),V=n(248),F=n(239),W=n(240),G=n(237),Q=n(238),U=n(234),H=n(236),J=n(269),K=n(127),X=n(270),Y=Object(b.a)((function(e){return{cell:{color:"white",fontSize:"16px",fontFamily:"auto"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function Z(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function $(e,t){return"desc"===e?function(e,n){return Z(e,n,t)}:function(e,n){return-Z(e,n,t)}}function ee(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var te=[{id:"srno",numeric:"true",label:"SrNo"},{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"gender",label:"Gender"},{id:"about_me",label:"About"}];function ne(e){var t=e.classes,n=(e.onSelectAllClick,e.order),i=e.orderBy,r=(e.numSelected,e.rowCount,e.onRequestSort);return Object(a.jsx)(U.a,{style:{background:"#f3698e"},children:Object(a.jsx)(H.a,{children:te.map((function(e){return Object(a.jsx)(G.a,{align:"center",sortDirection:i===e.id&&n,className:t.cell,children:Object(a.jsxs)(X.a,{active:i===e.id,direction:i===e.id?n:"asc",onClick:(o=e.id,function(e){r(e,o)}),children:[e.label,i===e.id?Object(a.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var o}))})})}var ae=function(e){var t=e.user_list,n=Y(),o=Object(i.useState)([]),c=Object(l.a)(o,2),s=(c[0],c[1],r.a.useState("desc")),u=Object(l.a)(s,2),d=u[0],j=u[1],b=r.a.useState("name"),p=Object(l.a)(b,2),O=p[0],g=p[1],h=r.a.useState([]),m=Object(l.a)(h,2),f=m[0],x=(m[1],r.a.useState(0)),y=Object(l.a)(x,2),v=y[0],w=y[1],S=r.a.useState(!1),_=Object(l.a)(S,2),C=(_[0],_[1],r.a.useState(10)),k=Object(l.a)(C,2),N=k[0],q=k[1],T=Object(i.useState)(!1),E=Object(l.a)(T,2);E[0],E[1];return Object(a.jsxs)(Q.a,{component:K.a,style:{background:"#fdac5d"},children:[Object(a.jsxs)(F.a,{children:[Object(a.jsx)(ne,{classes:n,numSelected:f.length,order:d,orderBy:O,onRequestSort:function(e,t){j(O===t&&"asc"===d?"desc":"asc"),g(t)},rowCount:t.length}),Object(a.jsx)(W.a,{style:{color:"white"},children:ee(t,$(d,O)).slice(v*N,v*N+N).map((function(e,t){return e.SrNo=t+1,Object(a.jsxs)(H.a,{children:[Object(a.jsx)(G.a,{align:"center",className:n.cell,children:e.SrNo}),Object(a.jsx)(G.a,{align:"center",className:n.cell,children:e.name}),Object(a.jsx)(G.a,{align:"center",className:n.cell,children:e.email}),Object(a.jsx)(G.a,{align:"center",className:n.cell,children:e.gender}),Object(a.jsx)(G.a,{align:"center",className:n.cell,children:e.about_me})]},e._id)}))})]}),Object(a.jsx)(J.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:N,page:v,onChangePage:function(e,t){w(t)},onChangeRowsPerPage:function(e){q(parseInt(e.target.value,10)),w(0)},style:{float:"left"}})]})},ie=Object(b.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var re=Object(s.b)((function(e){return{user_detail:e.user_detail}}))(Object(B.i)((function(e){var t=ie(),n=Object(i.useState)([]),r=Object(l.a)(n,2),o=r[0],c=r[1],s=Object(i.useState)(!1),u=Object(l.a)(s,2),d=u[0],j=u[1];Object(i.useEffect)((function(){b()}),[]);var b=function(){j(!0),M.get("/get-list").then((function(e){var t=e.data,n=t.status,a=t.data;200===n&&(c(a),j(!1))})).catch((function(e){j(!1),Object(z.b)("Something went wrong",{type:"error"})}))};return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(L.a,{container:!0,spacing:2,children:d?Object(a.jsx)(L.a,{justify:"center",children:Object(a.jsx)(V.a,{})}):Object(a.jsx)(L.a,{item:!0,xs:12,children:Object(a.jsx)(ae,{user_list:o})})})})}))),oe=n(39),ce=n(74),se=n(250),le=n(251),ue=n(252),de=n(249),je=n(272),be=n(266),pe=n(255),Oe=n(256),ge=n(20),he=n(253),me=n(254),fe=Object(b.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},input:{marginBottom:16},formControl:{width:"100%",paddingLeft:"10px"}}}));var xe=function(e){var t=fe(),n=Object(i.useState)(""),r=Object(l.a)(n,2),o=r[0],c=r[1],s=Object(i.useState)([{option_type:"",option_title:""}]),u=Object(l.a)(s,2),d=u[0],j=u[1],b=Object(B.g)(),p=Object(i.useState)(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]),O=Object(l.a)(p,2),g=O[0],h=(O[1],Object(i.useRef)(null)),m=function(){j([].concat(Object(ce.a)(d),[{option_type:"",option_title:""}]))},f=function(e,t){var n=e.target,a=n.name,i=n.value,r=Object(ce.a)(d);r[t][a]=i,j(r)};return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(L.a,{container:!0,spacing:2,children:Object(a.jsx)(L.a,{item:!0,xs:12,children:Object(a.jsxs)(se.a,{children:[Object(a.jsx)(le.a,{title:"Add Questions",subheader:"All fields is mandatory"}),Object(a.jsxs)(ge.ValidatorForm,{ref:h,onSubmit:function(e){e.preventDefault(),M.post("/add-questions",{question:o,option_list:d}).then((function(e){200===e.status&&(Object(z.b)("Question add successfully",{type:"success"}),c(""),j([{option_type:"",option_title:""}]),b.push("/dashboard/questions"))})).catch((function(e){return Object(z.b)("Something went wrong",{type:"error"})}))},onError:function(e){return console.log(e)},children:[Object(a.jsx)(ue.a,{children:Object(a.jsxs)(L.a,{container:!0,children:[Object(a.jsx)(L.a,{xs:12,children:Object(a.jsx)(ge.TextValidator,{label:"Question",fullWidth:!0,className:t.input,variant:"outlined",onChange:function(e){return c(e.target.value)},type:"text",value:o,validators:["required"],errorMessages:["Question field is required"]})}),d.map((function(e,n){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L.a,{item:!0,xs:"3",children:Object(a.jsxs)(de.a,{variant:"outlined",className:t.formControl,children:[Object(a.jsx)(je.a,{id:"option_type",children:"Option Type"}),Object(a.jsx)(be.a,{id:"option_type",labelId:"option_type",value:e.option_type,name:"option_type",onChange:function(e){return f(e,n)},children:g.map((function(e){return Object(a.jsx)(k.a,{value:e,children:e})}))})]})}),Object(a.jsx)(L.a,{item:!0,xs:"8",style:{paddingLeft:"10px"},children:Object(a.jsx)(ge.TextValidator,{label:"Option Title",className:t.input,variant:"outlined",fullWidth:!0,name:"option_title",value:e.option_title,validators:["required"],errorMessages:["Option Title field is required"],onChange:function(e){return f(e,n)}})}),Object(a.jsxs)(L.a,{item:!0,xs:1,style:{paddingLeft:"8px"},children:[d.length-1===n&&Object(a.jsx)(he.a,{style:{fontSize:"30px",marginTop:"5px",color:"Blue",cursor:"pointer"},onClick:m}),1!==d.length&&Object(a.jsx)(me.a,{style:{fontSize:"30px",color:"Red",marginTop:"5px",cursor:"pointer"},onClick:function(){return function(e){var t=Object(ce.a)(d);t.splice(e,1),j(t)}(n)}})]})]})}))]})}),Object(a.jsx)(pe.a,{children:Object(a.jsx)(Oe.a,{type:"submit",color:"secondary",size:"large",variant:"contained",children:"Submit"})})]})]})})})})},ye=n(258),ve="QUESTIONLIST",we="ISLOADING",Se=Object(b.a)((function(e){return{root:{padding:e.spacing(3),flex:1},inline:{display:"inline",paddingLeft:e.spacing(2)},nested:{paddingLeft:e.spacing(4)}}})),_e=[{component:re,path:"/dashboard",name:"Users",icon:"supervised_user_circle"},{component:xe,path:"/dashboard/add-questions",name:"Add Questions",icon:"question_answer"},{component:Object(s.b)((function(e){return{adminDetail:e.admin}}),(function(e){return console.log(e),{getQuestions:function(){return e((function(e){e({type:we,payload:!0}),M.get("/get-questions").then((function(t){var n=t.data,a=n.status,i=n.data;200===a?(e({type:ve,payload:i[0].question_list.reverse()}),e({type:we,payload:!1})):(Object(z.b)("Something went wrong",{type:"error"}),e({type:we,payload:!1}))})).catch((function(t){Object(z.b)(t.message||"Something Went Wrong",{type:"error"}),e({type:we,payload:!1})}))}))}}}))((function(e){var t=e.adminDetail,n=e.getQuestions,o=t.question_list;console.log(o);var c=Se(),s=r.a.useState(!1),u=Object(l.a)(s,2),d=(u[0],u[1],Object(i.useState)([])),j=Object(l.a)(d,2),b=(j[0],j[1],Object(i.useState)(!1)),p=Object(l.a)(b,2),O=p[0];p[1];Object(i.useEffect)((function(){n()}),[]);return Object(a.jsx)(L.a,{container:!0,spacing:2,className:c.root,children:O?Object(a.jsx)(L.a,{justify:"center",children:Object(a.jsx)(V.a,{})}):Object(a.jsx)(L.a,{item:!0,xs:12,children:Object(a.jsx)(x.a,{children:o.map((function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_.a,{alignItems:"flex-start",children:Object(a.jsx)(C.a,{primary:e.question,secondary:Object(a.jsx)(a.Fragment,{children:e.options.map((function(e){return Object(a.jsxs)(y.a,{component:"span",variant:"body2",className:c.inline,color:"textPrimary",children:[e.option_type," : ",e.option_title,Object(a.jsx)("br",{})]})}))})})}),Object(a.jsx)(ye.a,{component:"li"})]})}))})})})})),path:"/dashboard/questions",name:"Questions",icon:"list"}],Ce=n(261),ke=240,Ne=Object(b.a)((function(e){var t,n,a;return a={root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(ke,"px)"),marginLeft:ke,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ke,flexShrink:0},drawerPaper:{width:ke,background:"#f3698e"},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},listroot:{width:"100%",backgroundColor:e.palette.background.paper,marginTop:"10px"},inline:{display:"inline"},title:{paddingLeft:"20px",textDecoration:"none"},titleAnchor:{textDecoration:"none"},grow:{flexGrow:1}},Object(u.a)(a,"menuButton",{marginRight:e.spacing(2)}),Object(u.a)(a,"title",(t={display:"none"},Object(u.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(u.a)(t,"fontWeight","bold"),t)),Object(u.a)(a,"search",Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"})),Object(u.a)(a,"searchIcon",{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}),Object(u.a)(a,"inputRoot",{color:"inherit"}),Object(u.a)(a,"inputInput",Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})),Object(u.a)(a,"sectionDesktop",(n={display:"none"},Object(u.a)(n,e.breakpoints.up("md"),{display:"flex"}),Object(u.a)(n,"marginRight","100px"),n)),Object(u.a)(a,"sectionMobile",Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})),a})),qe=Object(s.b)((function(e){return console.log(e),{user_detail:e.user.user_detail}}))((function(e){console.log(e);Object(B.h)();var t=Object(B.g)(),n=Ne(),i=(Object(O.a)(),r.a.useState(!0)),o=Object(l.a)(i,2),c=o[0],s=o[1],d=r.a.useState(null),b=Object(l.a)(d,2),p=b[0],w=b[1],q=r.a.useState(null),E=Object(l.a)(q,2),L=E[0],R=E[1],A=Boolean(p),P=Boolean(L),D=function(){R(null)},M=function(){w(null),D()},z="primary-search-account-menu",V=Object(a.jsxs)(N.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:z,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:A,onClose:M,children:[Object(a.jsx)(k.a,{onClick:M,children:"Profile"}),Object(a.jsx)(k.a,{onClick:function(){t.push("/")},children:"Logout"})]}),F="primary-search-account-menu-mobile",W=Object(a.jsxs)(N.a,{anchorEl:L,anchorOrigin:{vertical:"top",horizontal:"right"},id:F,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:P,onClose:D,children:[Object(a.jsx)(k.a,{onClick:M,children:"Profile"}),Object(a.jsx)(k.a,{onClick:M,children:"Logout"})]});return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(h.a,{}),Object(a.jsx)(m.a,{position:"fixed",className:Object(j.a)(n.appBar,Object(u.a)({},n.appBarShift,c)),style:{background:"#f3698e"},children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(v.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(j.a)(n.menuButton,c&&n.hide),children:Object(a.jsx)(S.a,{})}),Object(a.jsx)(y.a,{className:n.title,variant:"h6",noWrap:!0,children:"LOVEU"}),Object(a.jsx)("div",{className:n.grow}),Object(a.jsxs)("div",{className:n.sectionDesktop,children:[Object(a.jsxs)(y.a,{style:{marginTop:"12px"},children:["Hi,",e.user_detail.name]}),Object(a.jsx)(v.a,{edge:"end","aria-label":"account of current user","aria-controls":z,"aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},color:"inherit",children:Object(a.jsx)(T.a,{})})]}),Object(a.jsx)("div",{className:n.sectionMobile,children:Object(a.jsx)(v.a,{"aria-label":"show more","aria-controls":F,"aria-haspopup":"true",onClick:function(e){R(e.currentTarget)},color:"inherit",children:Object(a.jsx)(I.a,{})})})]})}),W,V,Object(a.jsx)(g.a,{className:n.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:n.drawerPaper},children:Object(a.jsx)(x.a,{children:_e.map((function(e,t){return Object(a.jsx)(oe.b,{activeClassName:"is-active",to:e.path,style:{textDecoration:"none",color:"white"},children:Object(a.jsxs)(_.a,{button:!0,children:[Object(a.jsx)(Ce.a,{style:{color:"white"},children:e.icon}),Object(a.jsx)(C.a,{primary:e.name,style:{paddingLeft:"10px"}})]},e.name)})}))})}),Object(a.jsxs)("main",{className:Object(j.a)(n.content,Object(u.a)({},n.contentShift,c)),children:[Object(a.jsx)("div",{className:n.drawerHeader}),_e.map((function(e){return Object(a.jsx)(B.b,{exact:!0,isAuth:"true",path:e.path,component:e.component})}))]})]})})),Te=n(35),Ee="USER_LIST",Ie="IS_LOADING",Le="IS_SUCCESS",Be="USER_DETAIL",Re="IS_AUTH",Ae={loading:!1,user_list:[],is_success:!1,is_auth:!1},Pe={is_Loading:!1,question_list:[]},De=n(88),Me=n(120),ze=n.n(Me),Ve=[n(121).a],Fe={key:"root",storage:ze.a,whitelist:["user"]},We={user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(d.a)(Object(d.a)({},e),{},{user_list:t.payload});case Be:return Object(d.a)(Object(d.a)({},e),{},{user_detail:t.payload});case Ie:return Object(d.a)(Object(d.a)({},e),{},{loading:t.payload});case Le:return Object(d.a)(Object(d.a)({},e),{},{is_success:t.payload});case Re:return Object(d.a)(Object(d.a)({},e),{},{is_auth:!0});default:return e}},admin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(d.a)(Object(d.a)({},e),{},{question_list:t.payload});case we:return Object(d.a)(Object(d.a)({},e),{},{is_Loading:t.payload});default:return e}}},Ge=Object(Te.c)(We),Qe=Object(Te.d)(Object(De.a)(Fe,Ge),Te.a.apply(void 0,Ve)),Ue=Object(De.b)(Qe),He=n(122),Je=n.p+"static/media/logo.3e8db16f.jpeg",Ke=n(73),Xe=n.n(Ke),Ye=n(123),Ze=n(265),$e=n(262),et=n(263),tt=new P.a,nt=Object(b.a)((function(e){return{root:{flexGrow:1,justify:"center",padding:e.spacing(2),position:"relative"},rootContainer:{position:"absolute",left:"0",right:"0",top:"0",bottom:0,margin:"auto",width:"500px"},input:{marginBottom:16,backgroundColor:"#fcfcfb"}}}));var at=Object(s.b)((function(e){return{is_success:e.is_success}}),(function(e){return{signup:function(t,n){return e(function(e,t){return function(n){e.gender="Male",e.date_of_birth="10/20/1996",e.your_status="test",e.device_token="",e.device_type="",M.post("standard_signup",e).then((function(e){var a=e.data,i=a.data,r=a.status;console.log(i),200===r?(n({type:Le,payload:!0}),n({type:Be,payload:i[0]}),n({type:Re,payload:!0}),t.push("/dashboard")):n({type:Le,payload:!1})})).catch((function(e){n({type:Le,payload:!1})}))}}(t,n))}}}))((function(e){var t,n=nt(),r=Object(B.g)(),o=Object(i.useState)({name:"",email:"",password:"",business:""}),c=Object(l.a)(o,2),s=c[0],j=c[1],b=function(e){return j(Object(d.a)(Object(d.a)({},s),{},Object(u.a)({},e.target.name,e.target.value)))},p=Object(i.useRef)(null),O=function(){var t=Object(Ye.a)(Xe.a.mark((function t(n){return Xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.signup(s,r),console.log(e.is_success);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(L.a,{item:!0,xs:12,style:{marginTop:"40px"},children:Object(a.jsxs)(ge.ValidatorForm,{ref:p,onSubmit:O,onError:function(e){return console.log(e)},children:[Object(a.jsx)(ge.TextValidator,{label:"Full Name",fullWidth:!0,className:n.input,variant:"outlined",onChange:b,name:"name",value:s.name,validators:["required"],errorMessages:["Name field is required"]}),Object(a.jsx)(ge.TextValidator,{label:"Email",fullWidth:!0,className:n.input,variant:"outlined",onChange:b,name:"email",value:s.email,validators:["required","isEmail"],errorMessages:["Email field is required","email is not valid"]}),Object(a.jsx)(ge.TextValidator,{label:"Password",className:n.input,variant:"outlined",fullWidth:!0,onChange:b,name:"password",value:s.password,validators:["required"],errorMessages:["Password field is required"]}),Object(a.jsx)(ge.TextValidator,{label:"Business Name",className:n.input,variant:"outlined",fullWidth:!0,onChange:b,name:"business",value:s.business,validators:["required"],errorMessages:["Business field is required"]}),Object(a.jsx)($e.a,{children:Object(a.jsx)(et.a,{control:Object(a.jsx)(Ze.a,{name:"checkedA"}),label:"I agree the terms & conditions"})}),Object(a.jsxs)(L.a,(t={justify:"center",alignItems:"center",container:!0},Object(u.a)(t,"justify","space-evenly"),Object(u.a)(t,"style",{marginTop:"20px"}),Object(u.a)(t,"children",[Object(a.jsx)(Oe.a,{type:"submit",color:"primary",size:"large",variant:"contained",children:"Sign Up"}),Object(a.jsx)(Oe.a,{type:"button",color:"primary",size:"large",variant:"contained",onClick:function(){return e.handler("login")},children:" Cancel"})]),t))]})})})),it=Object(b.a)((function(e){return{root:{flexGrow:1,justify:"center",padding:e.spacing(2),position:"relative"},rootContainer:{position:"absolute",left:"0",right:"0",top:"0",bottom:0,margin:"auto",width:"500px"},input:{marginBottom:16,backgroundColor:"#fcfcfb"}}}));var rt=function(e){var t=it(),n=Object(i.useState)(""),r=Object(l.a)(n,2),o=r[0],c=r[1],s=Object(i.useRef)(null);return Object(a.jsx)(L.a,{item:!0,xs:12,style:{marginTop:"40px"},children:Object(a.jsxs)(ge.ValidatorForm,{ref:s,onSubmit:function(){},onError:function(e){return console.log(e)},children:[Object(a.jsx)(ge.TextValidator,{label:"Email",fullWidth:!0,className:t.input,variant:"outlined",onChange:function(e){return c(e.target.value)},name:"email",value:o,validators:["required","isEmail"],errorMessages:["Email field is required","email is not valid"]}),Object(a.jsxs)(L.a,{alignItems:"center",container:!0,justify:"space-evenly",style:{marginTop:"20px"},children:[Object(a.jsx)(Oe.a,{type:"submit",color:"primary",size:"large",variant:"contained",children:"Request"}),Object(a.jsx)(Oe.a,{type:"button",color:"primary",size:"large",variant:"contained",onClick:function(){return e.handler("login")},children:"Cancel"})]})]})})},ot=Object(b.a)((function(e){return{root:{flexGrow:1,justify:"center",padding:e.spacing(2),position:"relative"},rootContainer:{position:"absolute",left:"0",right:"0",top:"0",bottom:0,margin:"auto",width:"500px"},input:{marginBottom:16,backgroundColor:"#fcfcfb"}}}));var ct=Object(s.b)((function(e){return{isLoading:e.loading,isSuccess:e.is_success}}),(function(e){return{user_login:function(t,n){return e(function(e,t){return console.log(e),function(n){M.post("login",e).then((function(e){var a=e.data,i=a.status,r=a.data,o=a.message;200===i?(n({type:Be,payload:r[0]}),console.log(r[0].token),localStorage.setItem("token",r[0].token),tt.set("token",r[0].token),M.defaults.headers.authorization="".concat(r[0].token),t.push("/dashboard")):Object(z.b)(o,{type:"error"})})).catch((function(e){n({type:Ie,payload:!1}),Object(z.b)("Invalid Credentials",{type:"error"})}))}}(t,n))}}}))((function(e){var t=Object(B.g)(),n=ot(),r=Object(i.useState)({email:"",password:""}),o=Object(l.a)(r,2),c=o[0],s=o[1],j=Object(i.useState)(!0),b=Object(l.a)(j,2),p=b[0],O=b[1],g=Object(i.useState)("login"),h=Object(l.a)(g,2),m=h[0],f=h[1],x=function(e){return s(Object(d.a)(Object(d.a)({},c),{},Object(u.a)({},e.target.name,e.target.value)))},v=Object(i.useRef)(null);Object(i.useEffect)((function(){}),[p]);var w=function(e){return f(e)};return Object(a.jsx)("div",{className:n.root,children:Object(a.jsxs)(L.a,{container:!0,spacing:2,className:n.rootContainer,children:[Object(a.jsxs)(L.a,{justify:"center",alignItems:"center",direction:"column",container:!0,children:[Object(a.jsx)("img",{src:Je,width:"300px",style:{marginBottom:"10px",marginTop:"20px"}}),Object(a.jsx)(y.a,{variant:"h6",children:"Sign In To Admin"}),Object(a.jsx)(y.a,{children:"Enter your details to login to your account:"})]}),"login"===m?Object(a.jsx)(L.a,{item:!0,xs:12,style:{marginTop:"40px"},children:Object(a.jsxs)(ge.ValidatorForm,{ref:v,onSubmit:function(n){n.preventDefault(),O(!1),e.user_login(c,t)},onError:function(e){return console.log(e)},children:[Object(a.jsx)(ge.TextValidator,{label:"Email",fullWidth:!0,className:n.input,variant:"outlined",onChange:x,name:"email",value:c.email,validators:["required","isEmail"],errorMessages:["Email field is required","email is not valid"]}),Object(a.jsx)(ge.TextValidator,{label:"Password",className:n.input,variant:"outlined",fullWidth:!0,onChange:x,name:"password",value:c.password,validators:["required"],errorMessages:["Password field is required"],type:"password"}),Object(a.jsx)(L.a,{alignItems:"center",container:!0,justify:"center",children:Object(a.jsx)(Oe.a,{type:"submit",color:"primary",size:"large",variant:"contained",children:"Sign in"})})]})}):"forget"===m?Object(a.jsx)(rt,{handler:w}):Object(a.jsx)(at,{handler:w})]})})})),st=(n(184),n(125));var lt=function(e){var t=e.isAuth,n=e.component,i=Object(st.a)(e,["isAuth","component"]);return Object(a.jsx)(B.b,Object(d.a)(Object(d.a)({},i),{},{render:function(e){return t?Object(a.jsx)(n,{}):Object(a.jsx)(B.a,{to:{pathname:"/",state:{from:e.location}}})}}))};var ut=function(){return Object(a.jsxs)(s.a,{store:Qe,children:[Object(a.jsx)(z.a,{}),Object(a.jsx)(He.a,{persistor:Ue,children:Object(a.jsx)(oe.a,{children:Object(a.jsxs)(B.d,{children:[Object(a.jsx)(B.b,{exact:!0,path:"/",component:ct}),Object(a.jsx)(lt,{path:"/dashboard",component:qe,isAuth:!0})]})})})]})},dt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,274)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ut,{})}),document.getElementById("root")),dt()}},[[185,1,2]]]);
//# sourceMappingURL=main.599f48ba.chunk.js.map