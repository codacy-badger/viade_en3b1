(this.webpackJsonpviade_en3b1=this.webpackJsonpviade_en3b1||[]).push([[0],{154:function(e,t,a){e.exports=a(183)},159:function(e,t,a){},178:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=(a(159),a(20)),c=a.n(l),s=a(35),u=a(84),m=a(51),p=a(230),d=a(231),h=a(227),f=a(233),g=a(13),E=a(14),v=a(19),b=a(17),y=a(18),k=a(258),w=a(259),x=a(48),O=function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(E.a)(t,[{key:"popupLogin",value:function(){var e=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.currentSession();case 2:if(a=e.sent,"https://solid.community/common/popup.html",a){e.next=8;break}return e.next=7,t.popupLogin({popupUri:"https://solid.community/common/popup.html"});case 7:a=e.sent;case 8:return e.abrupt("return","".concat(a.webId));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"logout",value:function(e){e.logout()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(k.a,null,r.a.createElement(h.a,{variant:"outlined",color:"inherit",onClick:function(){return e.popupLogin(x)}},"Sign in")),r.a.createElement(w.a,null,r.a.createElement(h.a,{variant:"outlined",color:"inherit",onClick:function(){return e.logout(x)}},"Sign out")))}}]),t}(r.a.Component),j=a(232),C=(a(82),a(77)),N=a(187),S=a(135),L=a(87),D=a(254),R=a(255),T=a(229),F=a(189),P=a(116),M=a.n(P),B=a(117),I=a.n(B),z=function(){var e=r.a.useState(!1),t=Object(C.a)(e,2),a=t[0],n=t[1],i=r.a.useRef(null);return r.a.createElement("div",null,r.a.createElement(h.a,{ref:i,"aria-controls":a?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){n((function(e){return!e}))},color:"inherit"},"My Routes"),r.a.createElement(N.a,{open:a,anchorEl:i.current,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return r.a.createElement(S.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(L.a,null,r.a.createElement(D.a,null,r.a.createElement(R.a,{onClick:function(){return window.location.href="#/myroutes"}},r.a.createElement(T.a,null,r.a.createElement(M.a,null)),r.a.createElement(F.a,null,"See routes")),r.a.createElement(R.a,{onClick:function(){return window.location.href="#/newRoute"}},r.a.createElement(T.a,null,r.a.createElement(I.a,null)),r.a.createElement(F.a,null,"Create new")))))})))},W=a(70),V=a.n(W),A=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontSize:20,letterSpacing:1},paper:{marginRight:e.spacing(2)},menu:{width:150}}})),J=function(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(j.a,{underline:"none",color:"inherit",href:"#/welcome",className:e.title},r.a.createElement("img",{src:V.a,alt:"Viade Logo",style:{height:"3vh",width:"3vh"}})," Viade"),r.a.createElement(w.a,null,r.a.createElement(z,null)),r.a.createElement(k.a,null,r.a.createElement(h.a,{className:e.menuButton,href:"#/register",color:"inherit"},"Sign up")),r.a.createElement(O,null))))},U=a(234),G=a(235),Y=function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(U.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{marginTop:"30vh"}},r.a.createElement(U.a,{item:!0,xs:3,style:{marginBottom:"2vh"}},r.a.createElement("img",{src:V.a,alt:"Viade Logo",style:{height:"10vh",width:"10vh"}})),r.a.createElement(U.a,{item:!0,xs:3},r.a.createElement(F.a,{style:{marginBottom:"10px"},variant:"h4",color:"inherit",align:"center"},"Welcome to Viade."),r.a.createElement(G.a,null),r.a.createElement(F.a,{style:{marginTop:"10px"},variant:"body1",color:"inherit",align:"center"},"The first routes management system based on SOLID technology."))))},H=function(){return r.a.createElement("div",{style:{marginLeft:"5vh",marginTop:"5vh"}},r.a.createElement(F.a,{variant:"h4"},"Sorry, there's nothing to see here"),r.a.createElement("p",null,"Go back to ",r.a.createElement(j.a,{href:"#/"},"Home")))},_=a(256),q=a(238),Z=a(118),K=a.n(Z),X=a(236),Q=a(237),$=a(120),ee=a.n($),te=a(121),ae=a.n(te),ne=a(119),re=a.n(ne),ie=Object(f.a)((function(e){return{root:{minWidth:275,margin:50},paper:{marginTop:e.spacing(5),marginBottom:e.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.warning.main},form:{width:"80%",marginTop:e.spacing(1),alignItems:"center",justifyContent:"center"},submit:{margin:e.spacing(1,0,2)},link:{margin:e.spacing(1,0,2)}}}));function oe(){var e=ie();return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(X.a,{component:"main",maxWidth:"sm"},r.a.createElement(Q.a,{className:e.root,elevation:4},r.a.createElement(q.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(_.a,{className:e.avatar},r.a.createElement(K.a,null)),r.a.createElement(F.a,{component:"h1",variant:"h5"},"Hi! Welcome to Solid."),r.a.createElement("div",{className:e.form},r.a.createElement(h.a,{fullWidth:!0,color:"primary",className:e.link,startIcon:r.a.createElement(re.a,null),onClick:function(){return window.open("https://solid.inrupt.com/how-it-works")}},"How to choose a Provider?"),r.a.createElement(h.a,{fullWidth:!0,variant:"outlined",color:"primary",className:e.submit,startIcon:r.a.createElement(ee.a,null),onClick:function(){return window.open("https://inrupt.net/register")}},"Inrupt"),r.a.createElement(h.a,{fullWidth:!0,variant:"outlined",color:"primary",className:e.submit,startIcon:r.a.createElement(ae.a,null),onClick:function(){return window.open("https://solid.community/register")}},"Solid Community"))))))}var le=a(239),ce=a(260),se=a(261),ue=a(253),me=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).points=a.props.route.getRouteElements().map((function(e){return[e.getLatitude(),e.getLongitude()]})),a.setPopup=function(){},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(ce.a,{bounds:this.points,doubleClickZoom:!1,dragging:!1,keyboard:!1,scrollWheelZoom:!1,tap:!1,touchZoom:!1,zoomControl:!1,boxZoom:!1},r.a.createElement(se.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(ue.a,{positions:this.points,color:"blue"}),"))}")}}]),t}(n.Component),pe=Object(f.a)({root:{maxWidth:290,marginBottom:"2vh",marginTop:"2vh",background:"#f7f7f7"},pos:{color:"black"},link:{}});function de(e){var t=pe();return r.a.createElement(Q.a,{elevation:5,className:t.root},r.a.createElement(le.a,null,r.a.createElement(U.a,{container:!0,spacing:2},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(me,{route:e.route})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(j.a,{underline:"none",href:"#/RouteDetails/"+e.route.getId()},r.a.createElement(F.a,{className:t.link,variant:"h5",component:"h2"},e.route.getName()))),r.a.createElement(U.a,{item:!0,xs:12,sm:5},r.a.createElement(F.a,{className:t.pos,color:"textSecondary"},function(){var e=["2/4/2020","12/3/2020","1/4/2020","6/3/2020","22/2/2020"];return e[Math.floor(Math.random()*e.length)]}())),r.a.createElement(U.a,{item:!0,xs:12,sm:5},r.a.createElement(F.a,{className:t.pos,color:"textSecondary"},function(){var e=["3.63km","6.3km","25.4km","7.96km","5.42km"];return e[Math.floor(Math.random()*e.length)]}())),r.a.createElement(h.a,{variant:"outlined",href:"#/RouteDetails/"+e.route.getId(),color:"inherit",style:{marginLeft:"auto",marginRight:"auto"}},"Details"))))}var he=a(48),fe=a.n(he),ge=a(252),Ee=function(){function e(t,a,n,r){Object(g.a)(this,e),this.latitude=t,this.longitude=a,this.elevation=r,this.name=void 0===n?"":n}return Object(E.a)(e,[{key:"getName",value:function(){return this.name}},{key:"getLatitude",value:function(){return this.latitude}},{key:"getElevation",value:function(){return this.elevation}},{key:"getLongitude",value:function(){return this.longitude}},{key:"toJsonLatLng",value:function(){return{latitude:this.latitude,longitude:this.longitude}}}]),e}();var ve=function(){function e(t,a,n,r,i,o){Object(g.a)(this,e),this.id=Object(ge.a)().toString(),this.name=t,this.date=o,this.description=a,this.media=i,this.totalDistance=null,this.comments=null===r?[]:r,n[0]instanceof Ee?this.routeElements=n:this.routeElements=function(e){var t=[];return e.forEach((function(e){return t.push(new Ee(e.lat,e.lng))})),t}(n)}return Object(E.a)(e,[{key:"getId",value:function(){return this.id}},{key:"getName",value:function(){return this.name}},{key:"getDate",value:function(){return this.date}},{key:"getTime",value:function(){return this.time}},{key:"getDescription",value:function(){return this.description}},{key:"getRouteElements",value:function(){return this.routeElements}},{key:"getTotalDistance",value:function(){for(var e=0,t=0,a=1;a<this.routeElements.length;a++)t=this.routeElements[a].getLatitude()-this.routeElements[a-1].getLatitude(),e+=this.addDistance(t),t=this.routeElements[a].getLongitude()-this.routeElements[a-1].getLongitude(),e+=this.addDistance(t),t=this.routeElements[a].getElevation()-this.routeElements[a-1].getElevation(),e+=this.addDistance(t);return e}},{key:"addDistance",value:function(e){return e<0?-e:e}},{key:"getComments",value:function(){return this.comments}},{key:"getMedia",value:function(){return this.media}},{key:"addMedia",value:function(e){this.media.push(e)}},{key:"addRouteElement",value:function(e){this.routeElements.push(e)}},{key:"getJsonLD",value:function(){var e=[];return this.routeElements.forEach((function(t){return e.push(t.toJsonLatLng())})),JSON.stringify({"@context":{"@version":1.1,comments:{"@container":"@list","@id":"viade:comments"},description:{"@id":"schema:description","@type":"xs:string"},media:{"@container":"@list","@id":"viade:media"},name:{"@id":"schema:name","@type":"xs:string"},points:{"@container":"@list","@id":"viade:points"},latitude:{"@id":"schema:latitude","@type":"xs:double"},longitude:{"@id":"schema:longitude","@type":"xs:double"},elevation:{"@id":"schema:elevation","@type":"xsd:double"},author:{"@id":"schema:author","@type":"@id"},rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",schema:"http://schema.org/",viade:"http://arquisoft.github.io/viadeSpec/",xsd:"http://www.w3.org/2001/XMLSchema#"},name:this.name,author:this.author,description:this.description,comments:this.comments,media:this.media,points:e})}}]),e}(),be=function(){function e(){Object(g.a)(this,e)}return Object(E.a)(e,[{key:"parse",value:function(e){var t=JSON.parse(e),a=t.name,n=t.description,r=t.points,i=this.parsePoints(r);return new ve(a,n,i,[],[])}},{key:"parsePoints",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(new Ee(e[a].latitude,e[a].longitude));return t}}]),e}(),ye=a(48),ke=new(a(176))(ye),we=new be,xe=function(){function e(t){Object(g.a)(this,e),this.session=t,this.pod=t.webId.split("profile")[0],this.viadeFolder="viade/",this.defaultFolder=this.pod+this.viadeFolder,this.routesFolder="routes/",this.resourcesFolder="resources/",this.commentsFolder="comments/"}return Object(E.a)(e,[{key:"storeRoute",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=this.defaultFolder+this.routesFolder+e;this.storeFile(n,t,a)}},{key:"storeFile",value:function(e,t,a){ke.createFile(e,t).then((function(e){a(0)}),(function(e){a(-1)}))}},{key:"storeMedia",value:function(e,t,a,n){ke.putFile(e,t,a).then((function(e){n(e.url,e)}),(function(e){n(null,e)}))}},{key:"findAllRoutes",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.defaultFolder+this.routesFolder,a=[],e.next=4,ke.itemExists(t);case 4:if(!e.sent){e.next=25;break}return e.prev=5,e.next=8,ke.readFolder(t);case 8:n=e.sent,r=n.files,i=0;case 11:if(!(i<r.length)){e.next=19;break}return e.next=14,ke.readFile(r[i].url);case 14:o=e.sent,a.push(we.parse(o));case 16:i++,e.next=11;break;case 19:e.next=23;break;case 21:e.prev=21,e.t0=e.catch(5);case 23:e.next=26;break;case 25:console.log("There is no routes directory");case 26:return e.abrupt("return",a);case 27:case"end":return e.stop()}}),e,this,[[5,21]])})));return function(){return e.apply(this,arguments)}}()}]),e}();function Oe(){return(Oe=Object(s.a)(c.a.mark((function e(t,a){var n,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.a.currentSession();case 2:n=e.sent,r=new xe(n),i=t.getName()+"@"+t.getId()+".jsonld",r.storeRoute(i,t.getJsonLD(),(function(e){a(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(s.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.a.currentSession();case 2:return t=e.sent,a=new xe(t),n=a.findAllRoutes(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ne={routes:[],selected:"",addRouteToCache:function(e){e&&!this.routes.find((function(t){return e.name===t.name}))?this.routes.push(e):alert("ERROR TRYING TO ADDROUTE TO CACHE")},getRoutesFromPod:function(){var e=this;return Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.routes.length){t.next=4;break}return t.next=3,je();case 3:e.routes=t.sent;case 4:return t.abrupt("return",e.routes);case 5:case"end":return t.stop()}}),t)})))()},getRoutesFromCache:function(){return this.routes},clear:function(){this.routes=[],this.selected=null}},Se=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(v.a)(this,Object(b.a)(t).call(this))).state={routes:Ne.getRoutesFromCache()},e}return Object(y.a)(t,e),Object(E.a)(t,[{key:"sizeFunction",value:function(){for(var e=[],t=0;t<5;t++)e.push(1)}},{key:"render",value:function(){var e=this.state.routes;return r.a.createElement(U.a,{container:!0,style:{flexGrow:1},spacing:2},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(U.a,{container:!0,justify:"center",spacing:2},e.map((function(e){return r.a.createElement(U.a,{item:!0},r.a.createElement(w.a,null,r.a.createElement(de,{route:e})))})))))}}]),t}(n.Component),Le=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(J,null)),r.a.createElement("div",null,r.a.createElement(Se,null)))},De=a(240),Re=a(262),Te=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).points=a.props.route.getRouteElements().map((function(e){return[e.getLatitude(),e.getLongitude()]})),a.setPopup=function(){},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(ce.a,{id:"map",bounds:this.points,zoom:16,height:5},r.a.createElement(se.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(ue.a,{positions:this.points,color:"blue"}),this.props.route.getRouteElements().map((function(e){return r.a.createElement(De.a,{position:[e.getLatitude(),e.getLongitude()]},r.a.createElement(Re.a,null,r.a.createElement("p",null,e.getName()),r.a.createElement("p",null,"Latitude: ",e.getLatitude()),r.a.createElement("p",null,"Longitude: ",e.getLongitude()),r.a.createElement("p",null,"Elevation: ",e.getElevation())))})))}}]),t}(n.Component),Fe=Object(f.a)((function(e){return{root:{flexGrow:1}}}));function Pe(e){var t=Fe();return r.a.createElement(U.a,{container:!0,className:t.root,spacing:1},r.a.createElement(U.a,{item:!0,xs:6},r.a.createElement(Q.a,{elevation:5,className:t.root},r.a.createElement(le.a,null,r.a.createElement(F.a,{variant:"h5",component:"h2"},e.route.getName()),r.a.createElement(Te,{route:e.route})))),r.a.createElement(U.a,{item:!0,xs:6},r.a.createElement(U.a,{container:!0,direction:"column",spacing:1,alignItems:"stretch",justify:"flex-start"},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Q.a,{elevation:5,className:t.root},r.a.createElement(le.a,null,r.a.createElement(F.a,{className:t.pos},"Date: 22/3/2020")))),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Q.a,{elevation:5,className:t.root},r.a.createElement(le.a,null,r.a.createElement(F.a,{className:t.pos},"Distance: 3.63km")))),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Q.a,{elevation:5,className:t.root},r.a.createElement(le.a,null,r.a.createElement(F.a,{className:t.pos},"Time: 42 min")))),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Q.a,{elevation:5,className:t.root},r.a.createElement(le.a,null,r.a.createElement(F.a,{className:t.pos},"Description:"),r.a.createElement(F.a,{className:t.pos},e.route.getDescription())))))))}var Me=function(){var e=Object(m.g)().id,t=Ne.getRoutesFromCache().filter((function(t){return t.getId()===e}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(J,null)),r.a.createElement("div",null,r.a.createElement(Pe,{route:t[0]})))},Be=a(78),Ie=a(245),ze=a(257),We=a(246),Ve=a(250),Ae=a(248),Je=a(133),Ue=a(242),Ge=a(23),Ye=a(247),He=a(127),_e=a.n(He),qe=a(126),Ze=a.n(qe),Ke=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleDateChange=function(e){a.props.handleDateChange(e)},a.next=function(e){e.preventDefault(),a.props.handleNext()},a.handleMediaChange=function(e,t){a.props.handleMediaChange(e,t)},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.values,n=t.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{variant:"h6",gutterBottom:!0},"Please, introduce the following data for your new route"),r.a.createElement("form",{onSubmit:this.next},r.a.createElement(U.a,{container:!0,spacing:3},r.a.createElement(U.a,{item:!0,xs:12,sm:6,style:{marginTop:16}},r.a.createElement(Ae.a,{required:!0,id:"name",name:"name",label:"Name",fullWidth:!0,defaultValue:a.name,autoComplete:"routename",onChange:n("name")})),r.a.createElement(U.a,{item:!0,xs:12,sm:6},r.a.createElement(Ge.a,{utils:Je.a},r.a.createElement(Ye.a,{disableToolbar:!0,required:!0,variant:"inline",id:"date",name:"date",format:"MM/dd/yyyy",margin:"normal",label:"Date",value:a.date,onChange:this.handleDateChange,KeyboardButtonProps:{"aria-label":"date"}}))),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Ae.a,{required:!0,id:"description",name:"description",label:"Description",multiline:!0,fullWidth:!0,defaultValue:a.description,rows:"4",variant:"outlined",onChange:n("description")})),r.a.createElement(U.a,{item:!0,xs:12,sm:3},r.a.createElement("input",{disabled:!0,accept:"image/*",style:{display:"none"},id:"media-photo",multiple:!0,defaultValue:a.photos,type:"file",onChange:function(t){return e.handleMediaChange(t.target.files,0)}}),r.a.createElement("label",{htmlFor:"media-photo"},r.a.createElement(h.a,{disabled:!0,variant:"contained",color:"default",component:"span",startIcon:r.a.createElement(Ze.a,null)},"Photos"))),r.a.createElement(U.a,{item:!0,xs:12,sm:6},r.a.createElement("input",{disabled:!0,accept:"video/*",style:{display:"none"},id:"media-video",multiple:!0,defaultValue:a.videos,type:"file",onChange:function(t){return e.handleMediaChange(t.target.files,1)}}),r.a.createElement("label",{htmlFor:"media-video"},r.a.createElement(h.a,{disabled:!0,variant:"contained",color:"default",component:"span",startIcon:r.a.createElement(_e.a,null)},"Videos"))),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Ue.a,{id:"my-helper-text"},"Fields marked with (*) are mandatory.")),r.a.createElement(h.a,{variant:"contained",color:"primary",style:{marginTop:12,marginLeft:"auto"},type:"submit"},"Next"))))}}]),t}(n.Component),Xe=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).next=function(e){e.preventDefault(),a.props.createRoute(),a.props.handleNext()},a.back=function(e){e.preventDefault(),a.props.handleBack()},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"getPointsText",value:function(e){var t="";return e.forEach((function(e){return t+="Lat: "+e.lat+"\tLong: "+e.lng+"\n"})),t}},{key:"render",value:function(){var e=this.props.values,t=e.date.getUTCMonth()+1+"/"+e.date.getUTCDate()+"/"+e.date.getUTCFullYear();return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{variant:"h6",gutterBottom:!0},"Please, review all the data"),r.a.createElement(U.a,{container:!0,spacing:3},r.a.createElement(U.a,{item:!0,xs:12,sm:6,style:{marginTop:16}},r.a.createElement(Ae.a,{disabled:!0,id:"name",name:"name",label:"Name",fullWidth:!0,defaultValue:e.name,variant:"filled"})),r.a.createElement(U.a,{item:!0,xs:12,sm:6,style:{marginTop:16}},r.a.createElement(Ae.a,{disabled:!0,id:"date",name:"date",label:"Date",fullWidth:!0,defaultValue:t,variant:"filled"})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Ae.a,{disabled:!0,id:"description",name:"description",label:"Description",multiline:!0,fullWidth:!0,defaultValue:e.description,rows:"4",variant:"filled"})),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(Ae.a,{disabled:!0,id:"mapPoint",name:"mapPoint",label:"Track Points",multiline:!0,fullWidth:!0,defaultValue:this.getPointsText(e.points),rows:"4",variant:"filled"}))),r.a.createElement(U.a,{container:!0,spacing:3,style:{marginTop:12}},r.a.createElement(h.a,{variant:"contained",color:"default",style:{marginTop:12,marginLeft:"1vh"},onClick:this.back},"Back"),r.a.createElement(h.a,{variant:"contained",color:"primary",style:{marginTop:12,marginLeft:"auto"},onClick:this.next},"Next"))))}}]),t}(n.Component),Qe=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(v.a)(this,Object(b.a)(t).call(this))).addPoint=function(t){e.state.points.push(t.latlng),e.setState({points:e.state.points.slice()}),!0===e.firstPoint&&(e.props.openNotif("You can move a point by dragging it and delete it just clicking on it","info"),e.firstPoint=!1)},e.updatePoint=function(t){var a=t.target.options.marker_index,n=t.target.getLatLng(),r=e.state.points;r[a]=n,e.setState({points:r.slice()})},e.removePoint=function(t){var a=t.target.options.marker_index,n=e.state.points;n.splice(a,1),e.setState({points:n.slice()})},e.state={points:[]},e.firstPoint=!0,e}return Object(y.a)(t,e),Object(E.a)(t,[{key:"getTrackPoints",value:function(){return this.state.points.slice()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{center:[43.3619145,-5.8493887],zoom:12,style:{width:"52vh",height:"40vh"},onClick:this.addPoint},r.a.createElement(se.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(ue.a,{positions:this.state.points,color:"orange"}),this.state.points.map((function(t,a){return r.a.createElement(De.a,{marker_index:a,position:t,draggable:!0,ondrag:e.updatePoint,onclick:e.removePoint})}))))}}]),t}(n.Component),$e=a(251),et=a(243),tt=a(76),at=a.n(tt),nt=a(249);function rt(e){return r.a.createElement(nt.a,Object.assign({elevation:6,variant:"filled"},e))}var it=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(v.a)(this,Object(b.a)(t).call(this))).next=function(t){t.preventDefault(),"undefined"!==e.points.current.getTrackPoints()&&0!==e.points.current.getTrackPoints().length?(e.props.handleNext(),e.props.handleMapPoints(e.points.current.getTrackPoints())):e.openNotif("You must select at least one track point!!","warning")},e.back=function(t){t.preventDefault(),e.props.handleBack()},e.openNotif=function(t,a){e.setState({open:!0,message:t,severity:a})},e.closeNotif=function(){e.setState({open:!1})},e.points=r.a.createRef(),e.state={open:!1,message:"",severity:"",vertical:"top",horizontal:"center"},e}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.open,a=e.message,n=e.severity,i=this.state,o=i.vertical,l=i.horizontal;return r.a.createElement(r.a.Fragment,null,r.a.createElement($e.a,{anchorOrigin:{vertical:o,horizontal:l},open:t,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(et.a,{"aria-label":"close",color:"inherit",onClick:this.closeNotif},r.a.createElement(at.a,null)))},r.a.createElement(rt,{onClose:this.closeNotif,severity:n},a)),r.a.createElement(F.a,{variant:"h6",gutterBottom:!0},"Click on the map to add trackpoints to your route"),r.a.createElement("form",{onSubmit:this.next},r.a.createElement(Qe,{ref:this.points,openNotif:this.openNotif}),r.a.createElement(U.a,{container:!0,spacing:3,style:{marginTop:12}},r.a.createElement(h.a,{variant:"contained",color:"default",style:{marginTop:12,marginLeft:"1vh"},type:"submit",onClick:this.back},"Back"),r.a.createElement(h.a,{variant:"contained",color:"primary",style:{marginTop:12,marginLeft:"auto"},type:"submit"},"Next"))))}}]),t}(n.Component),ot=a(130),lt=a.n(ot),ct=a(244),st=a(128),ut=a.n(st),mt=a(129),pt=a.n(mt),dt=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).download=function(e){e.preventDefault(),a.props.handleDownload()},a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{container:!0},r.a.createElement(U.a,{item:!0,xs:12,sm:2},r.a.createElement(ut.a,{fontSize:"large",style:{fill:"orange",width:65,height:65}})),r.a.createElement(U.a,null,r.a.createElement(U.a,{item:!0,xs:12,sm:6},r.a.createElement(F.a,{variant:"h5",gutterBottom:!0},"Route created")),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(F.a,{variant:"subtitle1"},"Your new track was succesfully created and saved"))),r.a.createElement(ct.a,{title:"Download",arrow:!0},r.a.createElement(et.a,{variant:"contained",color:"primary",style:{marginLeft:"auto"},onClick:this.download},r.a.createElement(pt.a,{fontSize:"large",style:{fill:"orange"}})))))}}]),t}(n.Component),ht=a(184),ft=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(v.a)(this,Object(b.a)(t).call(this))).handleNext=function(){var t=e.state.activeStep;e.setState({activeStep:t+1})},e.handleBack=function(){var t=e.state.activeStep;e.setState({activeStep:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(Be.a)({},t,a.target.value))}},e.handleDateChange=function(t){e.setState({date:t})},e.handleMediaChange=function(t,a){switch(a){case 0:e.setState({photos:t});break;case 1:e.setState({videos:t});break;default:alert("Invalid media code!! "+a)}},e.handleMapPoints=function(t){e.setState({points:t})},e.openNotif=function(t,a){e.setState({open:!0,message:t,severity:a})},e.closeNotif=function(){e.setState({open:!1})},e.handleDownload=function(){var t=e.route.getJsonLD(),a=new Blob([t],{type:"text/plain"}),n=URL.createObjectURL(a),r=document.createElement("a");r.download=e.route.getName()+".json",r.href=n,r.click()},e.createRoute=function(){var t=e.state,a=t.name,n=t.description,r=t.date,i=t.photos,o=t.videos,l=t.points,c=[];Array.from(i).forEach((function(e){return c.push(e)})),Array.from(o).forEach((function(e){return c.push(e)})),e.route=new ve(a,n,l,null,c,r),e.upload(e.route).then((function(t){return e.checkSuccessCode(t)}))},e.route=null,e.state={open:!1,message:"",vertical:"top",horizontal:"center",severity:"",activeStep:0,name:"",description:"",date:new Date,photos:[],videos:[],points:[]},e}return Object(y.a)(t,e),Object(E.a)(t,[{key:"upload",value:function(e){return Ne.addRouteToCache(e),new Promise((function(t){!function(e,t){Oe.apply(this,arguments)}(e,(function(e){return t(e)}))}))}},{key:"checkSuccessCode",value:function(e){switch(e){case-1:this.openNotif("There was an error during this operation","error");break;case 0:this.openNotif("Your route was successfully saved","success");break;default:throw new Error("Unknown Success Code "+e)}}},{key:"render",value:function(){var e=this.state.activeStep,t=this.state,a={activeStep:e,name:t.name,description:t.description,date:t.date,photos:t.photos,videos:t.videos,points:t.points},n=this.props.classes,i=this.state,o=i.open,l=i.message,c=i.severity,s=this.state,u=s.vertical,m=s.horizontal;return r.a.createElement(Ie.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement($e.a,{anchorOrigin:{vertical:u,horizontal:m},open:o,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(et.a,{"aria-label":"close",color:"inherit",onClick:this.closeNotif},r.a.createElement(at.a,null)))},r.a.createElement(Et,{onClose:this.closeNotif,severity:c},l)),r.a.createElement("main",{className:n.layout},r.a.createElement(L.a,{className:n.paper},r.a.createElement(_.a,{className:n.avatar},r.a.createElement(lt.a,{fontSize:"large"})),r.a.createElement(F.a,{component:"h1",variant:"h4",align:"center"},"Create your own route"),r.a.createElement(ze.a,{activeStep:e,className:n.stepper},gt.map((function(e){return r.a.createElement(We.a,{key:e},r.a.createElement(Ve.a,null,e))}))),r.a.createElement(r.a.Fragment,null,function(e,t,a,n,i,o,l,c,s,u){switch(e){case 0:return r.a.createElement(Ke,{handleNext:a,handleChange:i,handleDateChange:o,handleMediaChange:l,values:t});case 1:return r.a.createElement(it,{handleNext:a,handleBack:n,handleMapPoints:c,values:t});case 2:return r.a.createElement(Xe,{handleNext:a,handleBack:n,values:t,createRoute:u});case 3:return r.a.createElement(dt,{handleDownload:s});default:throw new Error("Unknown step "+e)}}(e,a,this.handleNext,this.handleBack,this.handleChange,this.handleDateChange,this.handleMediaChange,this.handleMapPoints,this.handleDownload,this.createRoute))))))}}]),t}(n.Component),gt=["Basic data","Map","Review your route"];function Et(e){return r.a.createElement(nt.a,Object.assign({elevation:6,variant:"filled"},e))}var vt=Object(ht.a)((function(e){return{layout:Object(Be.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(Be.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},avatar:{marginLeft:"auto",marginRight:"auto",backgroundColor:e.palette.warning.main},icon:{width:65,height:65},grid:{marginLeft:e.spacing(2)}}}))(ft),bt=function(){return r.a.createElement(u.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/404",component:H}),r.a.createElement(m.a,{exact:!0,from:"/",to:"/welcome"}),r.a.createElement(m.b,{exact:!0,path:"/welcome",component:Y}),r.a.createElement(m.b,{exact:!0,path:"/myroutes",component:Le}),r.a.createElement(m.b,{exact:!0,path:"/register",component:oe}),r.a.createElement(m.b,{exact:!0,path:"/newRoute",component:vt}),r.a.createElement(m.b,{exact:!0,path:"/RouteDetails/:id",component:Me}),r.a.createElement(m.a,{to:"/404"}))))},yt=(a(178),a(131));function kt(){return(kt=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne.getRoutesFromPod();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var wt=function(){return function(){kt.apply(this,arguments)}(),r.a.createElement("div",null,r.a.createElement(yt.Helmet,null,r.a.createElement("title",null,"Viade")),r.a.createElement(bt,null))},xt=a(134),Ot=a(132),jt=a.n(Ot),Ct=Object(xt.a)({palette:{primary:{main:jt.a[700]}}});o.a.render(r.a.createElement(Ie.a,{theme:Ct},r.a.createElement(wt,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a.p+"static/media/logo1.fd8da136.svg"}},[[154,1,2]]]);
//# sourceMappingURL=main.a1469f57.chunk.js.map