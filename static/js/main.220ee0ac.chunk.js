(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(39),i=n(5),s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yoy"},{id:4,message:"Yoy"},{id:5,message:"Yoy"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody,o=Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});return o;default:return e}},a=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}},11:function(e,t,n){e.exports={nav:"Navbar_nav__2H6h1",item:"Navbar_item__1tYbL",activeLink:"Navbar_activeLink__EZMo7"}},112:function(e,t,n){"use strict";t.a=n.p+"static/media/user.dae3c84f.png"},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(127),i=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3ffd8bee-6a2a-4b2d-9367-b8070697f4c5"}}),s={getUsers:function(e,t){return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return i.post("follow/".concat(e))},unfollow:function(e){return i.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return i.get("profile/"+e)},getStatus:function(e){return i.get("profile/status/"+e)},updateStatus:function(e){return i.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),i.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return i.put("profile",e)}},a={me:function(){return i.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.post("auth/login",{email:e,password:t,rememberMe:n})},logOuth:function(){return i.delete("auth/login")}}},131:function(e,t,n){e.exports={photo:"Users_photo__2PEZu"}},132:function(e,t,n){e.exports={img:"Preloader_img__lQgch"}},246:function(e,t,n){},28:function(e,t,n){e.exports={formControl:"FormControls_formControl__2GvxM",error:"FormControls_error__Q-HQp",formSummaryError:"FormControls_formSummaryError__1sAFn"}},293:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(60),o=n.n(s),a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),s(e),o(e)}))},c=n(14),u=n(13),l=n(8),d=n(90),j=n(100),f={},h=n(39),b=n(5),g=n(12),p="FOLLOW",O="UNFOLLOW",m="SET_USERS",v="SET_CURRENT_PAGE",x="SET_TOTAL_USERS_COUNT",w="SET_FETCHING",C="TOGGLE_IS_FOLLOWING_PROGRESS",P={users:[],totalUsersCount:0,pageSize:5,currentPage:1,isFetching:!1,followingInProgress:[]},S=function(e){return{type:p,userId:e}},_=function(e){return{type:O,userId:e}},y=function(e){return{type:m,users:e}},k=function(e){return{type:v,currentPage:e}},T=function(e){return{type:w,isFetching:e}},N=function(e,t){return{type:C,isFetching:e,userId:t}},E=n(29),I="SAMURAI-NETWORK/AUTH/SET_USER_DATA",A={userId:null,email:null,login:null,isAuth:!1},F=function(e,t,n,r){return{type:I,userId:e,login:t,email:n,isAuth:r}},U=function(){return function(e){return g.a.me().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,i=n.login,s=n.email;e(F(r,i,s,!0))}}))}},L=n(129),z=n(125),M="SET_INITIALIZED",D={initialized:!1},R=Object(l.c)({profilePage:d.d,dialogsPage:j.a,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return t.type,e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case O:return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case m:return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case v:return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case x:return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.totalCount});case w:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case C:return Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.isAuth,userId:t.userId,email:t.email,login:t.login});default:return e}},form:z.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}}}),H=Object(l.e)(R,Object(l.a)(L.a));window.store=H;var G=n(31),B=n(32),V=n(34),Y=n(33),W=(n(246),n(11)),Q=n.n(W),Z=n(1),q=function(){return Object(Z.jsxs)("nav",{className:Q.a.nav,children:[Object(Z.jsx)("div",{className:Q.a.item,children:Object(Z.jsx)(c.b,{to:"/profile",activeClassName:Q.a.activeLink,children:"Profile"})}),Object(Z.jsx)("div",{className:Q.a.item,children:Object(Z.jsx)(c.b,{to:"/users",activeClassName:Q.a.activeLink,children:"Users"})}),Object(Z.jsx)("div",{className:Q.a.item,children:Object(Z.jsx)(c.b,{to:"/dialogs",activeClassName:Q.a.activeLink,children:"Messages"})}),Object(Z.jsx)("div",{className:Q.a.item,children:Object(Z.jsx)(c.b,{to:"/news",activeClassName:Q.a.activeLink,children:"News"})}),Object(Z.jsx)("div",{className:Q.a.item,children:Object(Z.jsx)(c.b,{to:"/music",activeClassName:Q.a.activeLink,children:"Music"})}),Object(Z.jsx)("div",{className:Q.a.item,children:Object(Z.jsx)(c.b,{to:"/settings",activeClassName:Q.a.activeLink,children:"Settings"})}),Object(Z.jsx)("div",{className:Q.a.item,children:Object(Z.jsx)(c.b,{to:"/login",activeClassName:Q.a.activeLink,children:"Login"})})]})},J=n(9),K=function(){return Object(Z.jsx)("div",{children:"News"})},X=function(){return Object(Z.jsx)("div",{children:"Music"})},$=function(){return Object(Z.jsx)("div",{children:"Settings"})},ee=n(85),te=n.n(ee),ne=function(e){return Object(Z.jsxs)("header",{className:te.a.header,children:[Object(Z.jsx)("img",{alt:"",src:"https://img2.freepng.ru/20180304/lpw/kisspng-airplane-flight-logo-clip-art-space-shuttle-5a9b9a1d9ee683.3404936215201469736509.jpg"}),Object(Z.jsx)("div",{className:te.a.loginBlock,children:e.isAuth&&Object(Z.jsxs)("div",{children:[e.login," - ",Object(Z.jsx)("button",{onClick:e.loginOuth,children:"Log out"})]})})]})},re=function(e){Object(V.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"render",value:function(){return Object(Z.jsx)(ne,{isAuth:this.props.isAuth,login:this.props.login,loginOuth:this.props.loginOuth})}}]),n}(i.a.Component),ie=Object(u.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{loginOuth:function(){return function(e){g.a.logOuth().then((function(t){0===t.data.resultCode&&e(F(null,null,null,!1))}))}}})(re),se=n(91),oe=n(65),ae=n.n(oe),ce=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],i=1;i<=t;i++)n.push(i);var s=Math.ceil(e.totalUsersCount/10),o=Object(r.useState)(1),a=Object(se.a)(o,2),c=a[0],u=a[1],l=10*(c-1)+1,d=10*c;return Object(Z.jsxs)("div",{className:ae.a.paginator,children:[c>1&&Object(Z.jsx)("button",{onClick:function(){return u(c-1)},children:"PREV"}),Object(Z.jsx)("span",{children:n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(Z.jsx)("span",{className:e.currentPage===t?ae.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)},children:Object(Z.jsx)("span",{className:ae.a.margin,children:t})},t)}))}),s>c&&Object(Z.jsx)("button",{onClick:function(){return u(c+1)},children:"PREV"})]})},ue=n(131),le=n.n(ue),de=n(112),je=function(e){return Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("span",{children:[Object(Z.jsx)("div",{children:Object(Z.jsx)(c.b,{to:"/profile/"+e.user.id,children:Object(Z.jsx)("img",{src:null!==e.user.photos.small?e.user.photos.small:de.a,alt:"",className:le.a.photo})})}),Object(Z.jsx)("div",{children:e.user.followed?Object(Z.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.followThunkCreator(e.user.id)},children:"Unfollow"}):Object(Z.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unFollowThunkCreator(e.user.id)},children:"Follow"})})]}),Object(Z.jsxs)("span",{children:[Object(Z.jsxs)("span",{children:[Object(Z.jsx)("div",{children:e.user.name}),Object(Z.jsx)("div",{children:e.user.status})]}),Object(Z.jsxs)("span",{children:[Object(Z.jsx)("div",{children:"m.location.country"}),Object(Z.jsx)("div",{children:"m.location.city"})]})]})]})},fe=function(e){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(ce,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),Object(Z.jsx)("div",{children:e.users.map((function(t){return Object(Z.jsx)(je,{user:t,follow:e.follow,followingInProgress:e.followingInProgress,followThunkCreator:e.followThunkCreator,unFollowThunkCreator:e.unFollowThunkCreator},t.id)}))})]})},he=n(62),be=function(e){return e.usersPage.users},ge=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},me=function(e){return e.usersPage.isFetching},ve=function(e){return e.usersPage.followingInProgress},xe=function(e){Object(V.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(G.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUsersPageChangedThunkCreator(t,e.props.pageSize)},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Z.jsxs)(Z.Fragment,{children:[this.props.isFetching?Object(Z.jsx)(he.a,{}):"",Object(Z.jsx)(fe,{onPageChanged:this.onPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,unfollow:this.props.unfollow,follow:this.props.follow,users:this.props.users,followingInProgress:this.props.followingInProgress,toggleFollowingProgress:this.props.toggleFollowingProgress,followThunkCreator:this.props.followThunkCreator,unFollowThunkCreator:this.props.unFollowThunkCreator})]})}}]),n}(i.a.Component);var we=Object(l.d)(Object(u.b)((function(e){return{users:be(e),pageSize:ge(e),totalUsersCount:pe(e),currentPage:Oe(e),isFetching:me(e),followingInProgress:ve(e)}}),{follow:S,unfollow:_,toggleFollowingProgress:N,getUsers:function(e,t){return function(n){n(T(!0)),n(k(e)),g.c.getUsers(e,t).then((function(e){var t;n(T(!1)),n(y(e.items)),n((t=e.totalCount,{type:x,totalCount:t}))}))}},getUsersPageChangedThunkCreator:function(e,t){return function(n){n(k(e)),n(T(!0)),g.c.getUsers(e,t).then((function(e){n(T(!1)),n(y(e.items))}))}},followThunkCreator:function(e){return function(t){t(N(!0,e)),g.c.unfollow(e).then((function(n){0===n.data.resultCode&&t(_(e)),t(N(!1,e))}))}},unFollowThunkCreator:function(e){return function(t){t(N(!0,e)),g.c.follow(e).then((function(n){0===n.data.resultCode&&t(S(e)),t(N(!1,e))}))}}}))(xe),Ce=n(123),Pe=n(124),Se=n(58),_e=n(67),ye=n(28),ke=n.n(ye),Te=Object(Pe.a)({form:"login"})((function(e){return Object(Z.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Z.jsx)("div",{children:Object(Z.jsx)(Ce.a,{placeholder:"Email",component:Se.a,name:"email",validate:_e.b})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(Ce.a,{placeholder:"Password",component:Se.a,name:"password",validate:_e.b,type:"password"})}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(Ce.a,{component:Se.a,type:"checkbox",name:"rememberMe"}),"remember me"]}),e.error&&Object(Z.jsx)("div",{className:ke.a.formSummaryError,children:e.error}),Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{children:"Login"})})]})})),Ne=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(r){g.a.login(e,t,n).then((function(e){if(0===e.data.resultCode)r(U());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";r(Object(E.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(Z.jsx)(J.a,{to:"/profile"}):Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h1",{children:"Login"}),Object(Z.jsx)(Te,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ee=i.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),Ie=i.a.lazy((function(){return n.e(3).then(n.bind(null,301))})),Ae=function(e){Object(V.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(Z.jsxs)("div",{className:"app-wrapper",children:[Object(Z.jsx)("div",{className:"header",children:Object(Z.jsx)(ie,{})}),Object(Z.jsxs)("div",{className:"navbarAndContent",children:[Object(Z.jsx)("div",{className:"navbar",children:Object(Z.jsx)(q,{})}),Object(Z.jsxs)("div",{className:"app-wrapper-content",children:[Object(Z.jsx)(J.b,{path:"/users",render:function(){return Object(Z.jsx)(we,{})}}),Object(Z.jsx)(J.b,{path:"/news",render:function(){return Object(Z.jsx)(K,{})}}),Object(Z.jsx)(J.b,{path:"/music",render:function(){return Object(Z.jsx)(X,{})}}),Object(Z.jsx)(J.b,{path:"/settings",render:function(){return Object(Z.jsx)($,{})}}),Object(Z.jsx)(J.b,{path:"/login",render:function(){return Object(Z.jsx)(Ne,{})}}),Object(Z.jsx)(J.b,{path:"/dialogs",render:function(){return Object(Z.jsx)(i.a.Suspense,{fallback:Object(Z.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(Z.jsx)(Ee,{})})}}),Object(Z.jsx)(J.b,{path:"/profile/:userId?",render:function(){return Object(Z.jsx)(i.a.Suspense,{fallback:Object(Z.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(Z.jsx)(Ie,{})})}})]})]})]}):Object(Z.jsx)(he.a,{})}}]),n}(r.Component),Fe=Object(l.d)(J.f,Object(u.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(U()).then((function(){e({type:M})}))}}}))(Ae);o.a.render(Object(Z.jsx)(c.a,{children:Object(Z.jsx)(u.a,{store:H,children:Object(Z.jsx)(Fe,{})})}),document.getElementById("root")),a()},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var r=n(5),i=n(89),s=n(28),o=n.n(s),a=(n(0),n(1)),c=function(e){var t=e.input,n=e.meta,s=Object(i.a)(e,["input","meta"]),c=n.touched&&n.error;return Object(a.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),s))}),c&&Object(a.jsx)("span",{children:n.error})]})},u=function(e){var t=e.input,n=e.meta,s=Object(i.a)(e,["input","meta"]),c=n.touched&&n.error;return Object(a.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),s))}),c&&Object(a.jsx)("span",{children:n.error})]})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n.p+"static/media/loading.6d98a7d4.gif",i=(n(0),n(132)),s=n.n(i),o=n(1),a=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:r,className:s.a.img,alt:""})})}},65:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__l5ley",margin:"Paginator_margin__ff5Uh"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r=function(e){if(!e)return"Field is required"},i=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},85:function(e,t,n){e.exports={header:"Header_header__nh3Y3",loginBlock:"Header_loginBlock__2qdgM"}},90:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return g}));var r=n(39),i=n(5),s=n(12),o=n(29),a="SET_USER_PROFILE",c={posts:[{id:1,message:"Hi, how are you?",like:15},{id:2,message:"It is my first post",like:20}],profile:null,status:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:(new Date).getTime(),message:t.newPostText,like:0},s=Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[n])});return s;case a:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}},l=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return{type:"ADD-POST",newPostText:e}},j=function(e){return function(t){s.c.getProfile(e).then((function(e){var n;t((n=e.data,{type:a,profile:n}))}))}},f=function(e){return function(t){s.b.getStatus(e).then((function(e){t(l(e.data))}))}},h=function(e){return function(t){s.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(l(e))}))}},b=function(e){return function(t){s.b.savePhoto(e).then((function(e){0===e.data.resultCode&&t({type:"SAVE_PHOTO_SUCCESS",photos:e.data.data.photos})}))}},g=function(e){return function(t,n){var r=n().auth.userId;s.b.saveProfile(e).then((function(e){if(0===e.data.resultCode)t(j(r));else{var n=e.data.messages.length>0?e.data.messages[0]:"Some error";t(Object(o.a)("edit-profile",{_error:n}))}}))}}}},[[293,1,2]]]);
//# sourceMappingURL=main.220ee0ac.chunk.js.map