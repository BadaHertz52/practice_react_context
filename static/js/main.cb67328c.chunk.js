(this["webpackJsonpcontext-react"]=this["webpackJsonpcontext-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(6),r=c.n(a),s=(c(11),c(12),c(13),c(14),c(3)),l=c(4),o=c(2),d=c.p+"static/media/sasha.f07de0b3.jpg",j=c.p+"static/media/vincentiu.aee19ef0.jpg",u=c(0),b={inputs:{userName:"",photo:"",header:"",introduce:""},myProfile:{userName:"BORA",photo:d,header:j,introduce:"Hi I'm BORA"}},O=function(e,t){switch(t.type){case"CHANGE_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{inputs:Object(o.a)(Object(o.a)({},e.inputs),{},Object(l.a)({},t.name,t.value))});case"EDIT_PROFILE":return{inputs:b.inputs,myProfile:t.myProfile};case"CLEAR_INPUT":default:return b}},h=i.a.createContext(null),m=function(e){var t=Object(n.useReducer)(O,b),c=Object(s.a)(t,2),i=c[0],a=c[1];return Object(u.jsx)(h.Provider,{value:{state:i,myProfile:i.myProfile,dispatch:a},children:e.children})},x=function(e){var t=e.setPopup,c=i.a.useContext(h),a=c.state,r=c.dispatch,l=a.myProfile,o=a.inputs,d=o.userName,j=o.photo,b=o.header,O=o.introduce,m=Object(n.useState)(l.header),x=Object(s.a)(m,2),p=x[0],f=x[1],v=Object(n.useState)(l.photo),g=Object(s.a)(v,2),y=g[0],N=g[1],C=Object(n.useCallback)((function(e){e.preventDefault(),r({type:"EDIT_PROFILE",myProfile:{userName:""===d?l.userName:d,photo:y,header:p,introduce:""===O?l.introduce:O}}),t(!1)}),[d,y,p,O]),E=Object(n.useCallback)((function(e){var t=e.target.name,c=e.target.files[0],n=new FileReader;n.onload="header"===t?function(){return f(n.result)}:function(){return N(n.result)},n.readAsDataURL(c),r({type:"CAHNGE_PROFILE",name:t,value:"header"===t?p:y})}),[]),P=Object(n.useCallback)((function(e){var t=e.target,c=t.name,n=t.value;r({type:"CHANGE_PROFILE",name:c,value:n})}),[]);return Object(u.jsxs)("section",{id:"editProfile",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"\ud504\ub85c\ud544 \uc218\uc815"}),Object(u.jsx)("button",{onClick:function(){t(!1)},children:"\u2716"})]}),Object(u.jsxs)("form",{onSubmit:C,children:[Object(u.jsxs)("div",{className:"editImg header",id:"editProfile_header",children:[Object(u.jsx)("label",{for:"header_input",children:"+edit"}),Object(u.jsx)("input",{id:"header_input",name:"header",value:b,type:"file",accept:"image/*",onChange:E}),Object(u.jsx)("img",{src:p,alt:"profile_header"})]}),Object(u.jsxs)("div",{className:"editImg profilePhoto",id:"editProfile_photo",children:[Object(u.jsx)("label",{for:"photo_input",children:"+edit"}),Object(u.jsx)("input",{id:"photo_input",type:"file",accept:"image/*",name:"photo",value:j,onChange:E}),Object(u.jsx)("img",{src:y,alt:"profilePhoto"})]}),Object(u.jsxs)("div",{className:"userName",children:[Object(u.jsx)("div",{children:"\ub2c9\ub124\uc784"}),Object(u.jsx)("input",{type:"text",name:"userName",value:d,onChange:P,placeholder:l.userName})]}),Object(u.jsxs)("div",{className:"introduce",children:[Object(u.jsx)("div",{children:"\uc790\uae30 \uc18c\uac1c"}),Object(u.jsx)("input",{type:"text",name:"introduce",value:O,onChange:P,placeholder:l.introduce})]}),Object(u.jsx)("input",{id:"editBtn",type:"submit",value:"\uc218\uc815"})]})]})},p=i.a.memo(x),f=function(){var e=Object(n.useContext)(h).myProfile,t=e.userName,c=e.introduce,i=e.header,a=e.photo,r=Object(n.useState)(!1),l=Object(s.a)(r,2),o=l[0],d=l[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{id:"profile",children:!o&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{id:"profile_header",className:"header",children:Object(u.jsx)("img",{src:i,alt:"profile_header"})}),Object(u.jsx)("div",{id:"profile\r _photo",className:"profilePhoto",children:Object(u.jsx)("img",{src:a,alt:"profile_photo"})}),Object(u.jsx)("div",{className:"userName",children:t}),Object(u.jsx)("div",{className:"introduce",children:c}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{id:"profileEditBtn",onClick:function(){return d(!0)},children:"\uc218\uc815"})})]})}),o&&Object(u.jsx)(p,{setPopup:d})]})},v={inputs:{text:"",attachment:""},myNweets:[{createdAt:"2021-12-13-21:36",text:"\uaca8\uc6b8\uc5d0\ub294 \uade4! <br/> \ud83d\ude01\ud83c\udf4a",attachmentUrl:c.p+"static/media/tangerines.b3b737c8.jpg"}]};function g(e,t){switch(t.type){case"CLREAR_INPUT":return Object(o.a)(Object(o.a)({},e),{},{inputs:v.inputs});case"CHANGE":return Object(o.a)(Object(o.a)({},e),{},{inputs:Object(o.a)(Object(o.a)({},e.inputs),{},Object(l.a)({},t.name,t.value))});case"CREATE":return Object(o.a)(Object(o.a)({},e),{},{myNweets:e.myNweets.concat(t.nweet)});case"DELETE":return Object(o.a)(Object(o.a)({},e),{},{myNweets:e.myNweets.filter((function(e){return e.createdAt!==t.createdAt}))});default:return e}}var y=Object(n.createContext)(null),N=function(e){var t=Object(n.useReducer)(g,v),c=Object(s.a)(t,2),i=c[0],a=c[1];return Object(u.jsx)(y.Provider,{value:{state:i,dispatch:a},children:e.children})},C=function(){var e=Object(n.useContext)(h).myProfile.photo,t=Object(n.useContext)(y),c=t.state,i=t.dispatch,a=c.inputs,r=a.text,l=a.attachment,o=Object(n.useState)(""),d=Object(s.a)(o,2),j=d[0],b=d[1],O=new Date,m=O.getFullYear(),x=O.getMonth()+1,p=O.getDate(),f=O.getHours(),v=O.getMinutes(),g=Object(n.useCallback)((function(e){var t=e.target,c=t.name,n=t.value;if("attachment"===c){var a=e.target.files[0],r=new FileReader;r.onload=function(){return b(r.result)},r.readAsDataURL(a)}i({type:"CHANGE",name:c,value:"attachment"!==c?n:""})}),[]),N=Object(n.useCallback)((function(e){e.preventDefault(),i({type:"CREATE",nweet:{createdAt:"".concat(m,"-").concat(x,"-").concat(p,"-").concat(f,":").concat(v),text:r.replace(/(\r\n|\n)/g,"<br/>"),attachmentUrl:j}}),i({type:"CLREAR_INPUT"}),b("")}),[r,j]);return Object(u.jsx)("section",{id:"createNweet",children:Object(u.jsxs)("form",{onSubmit:N,children:[Object(u.jsx)("img",{className:"profilePhoto",alt:"profilePhoto",src:e}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{id:"text_attachment",children:[Object(u.jsx)("textarea",{name:"text",value:r,maxLength:"144",minLength:"1",onChange:g,placeholder:"\ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub098\uace0 \uc788\ub098\uc694? "}),""!==j&&Object(u.jsx)("img",{src:j,alt:"attachment"})]}),Object(u.jsxs)("div",{id:"nweetFun",children:[Object(u.jsx)("label",{for:"input_attachment",children:"\ud83d\udcf7"}),Object(u.jsx)("input",{type:"file",accept:"image\\*",name:"attachment",id:"input_attachment",value:l,onChange:g}),Object(u.jsx)("input",{type:"submit",value:"\ub9cc\ub4e4\uae30"})]})]})]})})},E=function(){var e=Object(n.useContext)(h).myProfile,t=e.photo,c=Object(n.useContext)(y),i=c.state,a=c.dispatch,r=Object(n.useState)(!1),l=Object(s.a)(r,2),o=l[0],d=l[1],j=Object(n.useState)(null),b=Object(s.a)(j,2),O=b[0],m=b[1],x=i.myNweets;Object(n.useEffect)((function(){x.forEach((function(e){return t=x.indexOf(e),c=e.text,void(document.getElementById("".concat(t)).innerHTML=c);var t,c}))}),[x]);var p=function(){d(!1)},f=Object(n.useCallback)((function(e){a({type:"DELETE",createdAt:e}),p()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{id:"nweetList",children:x&&x.map((function(c){return Object(u.jsxs)("div",{className:"nweet",children:[Object(u.jsx)("img",{className:"profilePhoto",alt:"profilePhoto",src:t}),Object(u.jsxs)("div",{className:"nweet_contents",children:[Object(u.jsxs)("div",{className:"nweet_inform",children:[Object(u.jsx)("div",{children:e.userName}),Object(u.jsx)("div",{children:c.createdAt}),Object(u.jsx)("button",{id:0===x.indexOf(c)&&"deleteBtn",onClick:function(){return e=c.createdAt,m(e),void d(!0);var e},children:"\uc0ad\uc81c"})]}),Object(u.jsxs)("div",{className:"nweet_text_attachment",children:[Object(u.jsx)("div",{id:x.indexOf(c)}),""!==c.attachmentUrl&&Object(u.jsx)("img",{src:c.attachmentUrl,className:"attachment",alt:"Nweetattachment"})]})]})]})}))}),o&&Object(u.jsx)("div",{id:"alert",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"\ud574\ub2f9 \uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return f(O)},children:"\uc0ad\uc81c"}),Object(u.jsx)("button",{onClick:p,children:"\ucde8\uc18c"})]})]})})]})};var P=function(){var e="3px solid black",t=function(){var t=document.getElementById("profileEditBtn");""===t.style.border?t.style.border=e:t.style.border=""},c=function(){var t=document.getElementById("createNweet");""===t.style.border?t.style.border=e:t.style.border=""},n=function(){var t=document.getElementById("deleteBtn");""===t.style.border?t.style.border=e:t.style.border=""};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(m,{children:[Object(u.jsx)("div",{id:"side",children:Object(u.jsx)(f,{})}),Object(u.jsxs)("div",{id:"main",children:[Object(u.jsx)("div",{children:"\ud648"}),Object(u.jsxs)(N,{children:[Object(u.jsx)(C,{}),Object(u.jsx)(E,{})]})]})]}),Object(u.jsx)("div",{id:"explain",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"\ud83d\ude00\uc0ac\uc6a9\ubc95"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{onMouseOver:t,onMouseOut:t,children:'\u25ab "\uc218\uc815" \ubc84\ud2bc\uc73c\ub85c \ud504\ub85c\ud544\uc744 \uc218\uc815\ud574\ubcf4\uc138\uc694.'})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{onMouseOver:c,onMouseOut:c,children:"\u25ab \uae00\uacfc \uc0ac\uc9c4\uc73c\ub85c \ub098\ub9cc\uc758 \uac8c\uc2dc\ubb3c\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694."})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{onMouseOver:n,onMouseOut:n,children:'\u25ab  "\uc0ad\uc81c" \ubc84\ud2bc\uc73c\ub85c \ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \uc9c0\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'})})]})]})})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),_()}],[[16,1,2]]]);
//# sourceMappingURL=main.cb67328c.chunk.js.map