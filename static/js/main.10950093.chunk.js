(this["webpackJsonpcontext-react"]=this["webpackJsonpcontext-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),r=c.n(i),s=(c(11),c(12),c(13),c(14),c(3)),j=c(4),o=c(2),l=c.p+"static/media/sasha.f07de0b3.jpg",d=c.p+"static/media/vincentiu.aee19ef0.jpg",u=c(0),b={inputs:{userName:"",photo:"",header:"",introduce:""},myProfile:{userName:"BORA",photo:l,header:d,introduce:"Hi I'm BORA"}},h=function(e,t){switch(t.type){case"CHANGE_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{inputs:Object(o.a)(Object(o.a)({},e.inputs),{},Object(j.a)({},t.name,t.value))});case"EDIT_PROFILE":return{inputs:b.inputs,myProfile:t.myProfile};case"CLEAR_INPUT":default:return b}},O=a.a.createContext(null),m=function(e){var t=Object(n.useReducer)(h,b),c=Object(s.a)(t,2),a=c[0],i=c[1];return Object(u.jsx)(O.Provider,{value:{state:a,myProfile:a.myProfile,dispatch:i},children:e.children})},p=function(e){var t=e.setPopup,c=a.a.useContext(O),i=c.state,r=c.dispatch,j=i.myProfile,o=i.inputs,l=o.userName,d=o.photo,b=o.header,h=o.introduce,m=Object(n.useState)(j.header),p=Object(s.a)(m,2),x=p[0],f=p[1],v=Object(n.useState)(j.photo),g=Object(s.a)(v,2),N=g[0],C=g[1],y=Object(n.useCallback)((function(e){e.preventDefault(),console.log(h,l),r({type:"EDIT_PROFILE",myProfile:{userName:l,photo:N,header:x,introduce:h}}),t(!1)}),[l,N,x,h]),P=Object(n.useCallback)((function(e){var t=e.target.name,c=e.target.files[0],n=new FileReader;n.onload="header"===t?function(){return f(n.result)}:function(){return C(n.result)},n.readAsDataURL(c),r({type:"CAHNGE_PROFILE",name:t,value:"header"===t?x:N})}),[]),E=Object(n.useCallback)((function(e){var t=e.target,c=t.name,n=t.value;r({type:"CHANGE_PROFILE",name:c,value:n})}),[]);return Object(u.jsxs)("section",{id:"editProfile",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"\ud504\ub85c\ud544 \uc218\uc815"}),Object(u.jsx)("button",{onClick:function(){return t(!1)},children:"\u2716"})]}),Object(u.jsxs)("form",{onSubmit:y,children:[Object(u.jsxs)("div",{className:"editImg header",id:"editProfile_header",children:[Object(u.jsx)("label",{for:"header_input",children:"+edit"}),Object(u.jsx)("input",{id:"header_input",name:"header",value:b,type:"file",accept:"image/*",onChange:P}),Object(u.jsx)("img",{src:x,alt:"profile_header"})]}),Object(u.jsxs)("div",{className:"editImg profilePhoto",id:"editProfile_photo",children:[Object(u.jsx)("label",{for:"photo_input",children:"+edit"}),Object(u.jsx)("input",{id:"photo_input",type:"file",accept:"image/*",name:"photo",value:d,onChange:P}),Object(u.jsx)("img",{src:N,alt:"profilePhoto"})]}),Object(u.jsxs)("div",{className:"userName",children:[Object(u.jsx)("div",{children:"\ub2c9\ub124\uc784"}),Object(u.jsx)("input",{type:"text",name:"userName",value:l,onChange:E,placeholder:j.userName})]}),Object(u.jsxs)("div",{className:"introduce",children:[Object(u.jsx)("div",{children:"\uc790\uae30 \uc18c\uac1c"}),Object(u.jsx)("input",{type:"text",name:"introduce",value:h,onChange:E,placeholder:j.introduce})]}),Object(u.jsx)("input",{id:"editBtn",type:"submit",value:"\uc218\uc815"})]})]})},x=a.a.memo(p),f=function(){var e=Object(n.useContext)(O).myProfile,t=e.userName,c=e.introduce,a=e.header,i=e.photo,r=Object(n.useState)(!1),j=Object(s.a)(r,2),o=j[0],l=j[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{id:"profile",children:!o&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{id:"profile_header",className:"header",children:Object(u.jsx)("img",{src:a,alt:"profile_header"})}),Object(u.jsx)("div",{id:"profile\r _photo",className:"profilePhoto",children:Object(u.jsx)("img",{src:i,alt:"profile_photo"})}),Object(u.jsx)("div",{className:"userName",children:t}),Object(u.jsx)("div",{className:"introduce",children:c}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{id:"profileEditBtn",onClick:function(){return l(!0)},children:"\uc218\uc815"})})]})}),o&&Object(u.jsx)(x,{setPopup:l})]})},v={inputs:{text:"",attachment:""},myNweets:[{createdAt:"2021-12-13-21:36",text:"\uaca8\uc6b8\uc5d0\ub294 \uade4! <br/> \ud83d\ude01\ud83c\udf4a",attachmentUrl:c.p+"static/media/tangerines.b3b737c8.jpg"}]};function g(e,t){switch(t.type){case"CLREAR_INPUT":return Object(o.a)(Object(o.a)({},e),{},{inputs:v.inputs});case"CHANGE":return Object(o.a)(Object(o.a)({},e),{},{inputs:Object(o.a)(Object(o.a)({},e.inputs),{},Object(j.a)({},t.name,t.value))});case"CREATE":return Object(o.a)(Object(o.a)({},e),{},{myNweets:e.myNweets.concat(t.nweet)});case"DELETE":return Object(o.a)(Object(o.a)({},e),{},{myNweets:e.myNweets.filter((function(e){return e.createdAt!==t.createdAt}))});default:return e}}var N=Object(n.createContext)(null),C=function(e){var t=Object(n.useReducer)(g,v),c=Object(s.a)(t,2),a=c[0],i=c[1];return Object(u.jsx)(N.Provider,{value:{state:a,dispatch:i},children:e.children})},y=function(){var e=Object(n.useContext)(O).myProfile.photo,t=Object(n.useContext)(N),c=t.state,a=t.dispatch,i=c.inputs,r=i.text,j=i.attachment,o=Object(n.useState)(""),l=Object(s.a)(o,2),d=l[0],b=l[1],h=new Date,m=h.getFullYear(),p=h.getMonth()+1,x=h.getDate(),f=h.getHours(),v=h.getMinutes(),g=Object(n.useCallback)((function(e){var t=e.target,c=t.name,n=t.value;if("attachment"===c){var i=e.target.files[0],r=new FileReader;r.onload=function(){return b(r.result)},r.readAsDataURL(i)}a({type:"CHANGE",name:c,value:"attachment"!==c?n:""})}),[]),C=Object(n.useCallback)((function(e){e.preventDefault(),a({type:"CREATE",nweet:{createdAt:"".concat(m,"-").concat(p,"-").concat(x,"-").concat(f,":").concat(v),text:r.replace(/(\r\n|\n)/g,"<br/>"),attachmentUrl:d}}),a({type:"CLREAR_INPUT"})}),[r,d]);return Object(u.jsx)("section",{id:"createNweet",children:Object(u.jsxs)("form",{onSubmit:C,children:[Object(u.jsx)("img",{className:"profilePhoto",alt:"profilePhoto",src:e}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"text_attachment",children:[Object(u.jsx)("textarea",{name:"text",value:r,maxLength:"144",minLength:"1",onChange:g,placeholder:"\ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\uace0 \uc788\ub098\uc694? "}),""!==d&&Object(u.jsx)("img",{src:d,alt:"attachment",width:"100px",height:"100px"})]}),Object(u.jsxs)("div",{id:"nweetFun",children:[Object(u.jsx)("label",{for:"input_attachment",children:"\ud83d\udcf7"}),Object(u.jsx)("input",{type:"file",accept:"image\\*",name:"attachment",id:"input_attachment",value:j,onChange:g}),Object(u.jsx)("input",{type:"submit",value:"\ub9cc\ub4e4\uae30"})]})]})]})})},P=function(){var e=Object(n.useContext)(O).myProfile,t=e.photo,c=Object(n.useContext)(N),a=c.state,i=c.dispatch,r=Object(n.useState)(!1),j=Object(s.a)(r,2),o=j[0],l=j[1],d=Object(n.useState)(null),b=Object(s.a)(d,2),h=b[0],m=b[1],p=a.myNweets;Object(n.useEffect)((function(){p.forEach((function(e){return function(e,t){var c=document.getElementById("".concat(e));console.log(c),c.innerHTML=t}(p.indexOf(e),e.text)}))}),[p]);var x=function(){l(!1)},f=Object(n.useCallback)((function(e){i({type:"DELETE",createdAt:e}),x()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{id:"nweetList",children:p&&p.map((function(c){return Object(u.jsxs)("div",{className:"nweet",children:[Object(u.jsx)("img",{className:"profilePhoto",alt:"profilePhoto",src:t}),Object(u.jsxs)("div",{className:"nweet_contents",children:[Object(u.jsxs)("div",{className:"nweet_inform",children:[Object(u.jsx)("div",{children:e.userName}),Object(u.jsx)("div",{children:c.createdAt}),Object(u.jsx)("button",{onClick:function(){return e=c.createdAt,m(e),void l(!0);var e},children:"X"})]}),Object(u.jsxs)("div",{className:"nweet_text_attachment",children:[Object(u.jsx)("div",{id:p.indexOf(c)}),""!==c.attachmentUrl&&Object(u.jsx)("img",{src:c.attachmentUrl,className:"attachment",alt:"Nweetattachment"})]})]})]})}))}),o&&Object(u.jsx)("div",{id:"alert",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"\ud574\ub2f9 \uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return f(h)},children:"\uc0ad\uc81c"}),Object(u.jsx)("button",{onClick:x,children:"\ucde8\uc18c"})]})]})})]})};var E=function(){return Object(u.jsxs)(m,{children:[Object(u.jsx)("div",{id:"side",children:Object(u.jsx)(f,{})}),Object(u.jsxs)("div",{id:"main",children:[Object(u.jsx)("div",{children:"\ud648"}),Object(u.jsxs)(C,{children:[Object(u.jsx)(y,{}),Object(u.jsx)(P,{})]})]})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),_()}],[[16,1,2]]]);
//# sourceMappingURL=main.10950093.chunk.js.map