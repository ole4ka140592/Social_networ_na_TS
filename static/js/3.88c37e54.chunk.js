(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{294:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var n=s(5),r=s(84),i=s(9),c=(s(0),s(13)),u=s(1),a=function(t){return{isAuth:t.auth.isAuth}};function o(t){return Object(c.b)(a)((function(e){var s=e.isAuth,c=Object(r.a)(e,["isAuth"]);return!1===s?Object(u.jsx)(i.a,{to:"/login"}):Object(u.jsx)(t,Object(n.a)({},c))}))}},295:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__mBIGV"}},296:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__1m8zy",posts:"MyPosts_posts__Ntek1"}},297:function(t,e,s){t.exports={item:"Post_item__3b4_V"}},299:function(t,e,s){"use strict";s.r(e);var n=s(30),r=s(31),i=s(33),c=s(32),u=s(0),a=s.n(u),o=s(295),j=s.n(o),p=s(62),d=s(123),b=s(1),l=function(t){var e=Object(u.useState)(!1),s=Object(d.a)(e,2),n=s[0],r=s[1],i=Object(u.useState)(t.status),c=Object(d.a)(i,2),a=c[0],o=c[1];Object(u.useEffect)((function(){o(t.status)}),[t.status]);return Object(b.jsxs)("div",{children:[!n&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onClick:function(){r(!0)},children:t.status||"-----"})}),n&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{value:a,onBlur:function(){r(!1),t.updateStatus(a)},onChange:function(t){o(t.currentTarget.value)},autoFocus:!0})})]})},h=function(t){return t.profile?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(b.jsx)("div",{children:"ava + description"}),t.profile.aboutMe,Object(b.jsx)(l,{status:t.status,updateStatus:t.updateStatus})]})}):Object(b.jsx)(p.a,{})},f=s(90),O=s(296),x=s.n(O),m=s(297),v=s.n(m),k=function(t){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:v.a.item,children:[Object(b.jsx)("img",{src:"https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg",alt:""}),t.message,Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"like"}),t.like]})]})})},g=s(121),P=s(122),S=s(81),_=s(60),y=function(t){Object(i.a)(s,t);var e=Object(c.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var t=this,e=this.props.posts.map((function(t){return Object(b.jsx)(k,{message:t.message,like:t.like},t.id)}));return Object(b.jsxs)("div",{className:x.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)("div",{children:Object(b.jsx)(T,{onSubmit:function(e){t.props.addPost(e.newPostText)}})}),Object(b.jsx)("div",{className:x.a.posts,children:e})]})}}]),s}(u.PureComponent),C=Object(S.a)(10),T=Object(P.a)({form:"profileAddNewPosForm"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)(g.a,{component:_.b,name:"newPostText",validate:[S.b,C]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add post"})})]})})),A=s(13),B=Object(A.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(f.a)(e))}}}))(y),U=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(B,{})]})},N=s(9),I=s(294),w=s(8),M=function(t){Object(i.a)(s,t);var e=Object(c.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=Number(this.props.match.params.userId);t||(t=this.props.authorizedUserId)||t||this.props.history.push("/login"),this.props.getUserProfileThunkCreator(t),this.props.getUserStatusThunkCreator(t)}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(U,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatusThunkCreator})})}}]),s}(a.a.Component);e.default=Object(w.d)(Object(A.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfileThunkCreator:f.b,getUserStatusThunkCreator:f.c,updateUserStatusThunkCreator:f.e}),N.f,I.a)(M)}}]);
//# sourceMappingURL=3.88c37e54.chunk.js.map