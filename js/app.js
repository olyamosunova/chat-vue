(function(t){function e(e){for(var a,o,r=e[0],i=e[1],u=e[2],h=0,m=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d91":function(t,e,n){},"41b7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main")],1)},c=[],o=(n("41b7"),n("a1a3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"main__container container"},[n("Contacts"),n("Chat")],1)])}),r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("ContactsList")],1)},u=[],l=(n("72e2"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"contacts__list"},t._l(t.contacts,(function(t){return n("ContactsItem",{key:t.id,attrs:{contact:t}})})),1)}),h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{contacts__item:!0,"contacts__item--active":t.contact===t.activeChat},on:{click:t.handlerOpenChat}},[n("div",{staticClass:"contacts__item-avatar"},[n("img",{attrs:{src:t.contact.avatar,alt:"Аватар"}})]),n("p",{staticClass:"contacts__item-name"},[t._v(t._s(t.contact.name))])])},f=[],p={name:"Contacts-item",props:{contact:Object},data:function(){return{}},computed:{activeChat:function(){return this.$store.getters.activeChat}},methods:{handlerOpenChat:function(){this.$store.dispatch("openChat",this.contact),this.$store.dispatch("getMessages",this.contact.id)}}},d=p,v=n("2877"),C=Object(v["a"])(d,m,f,!1,null,null,null),_=C.exports,g={name:"Contacts-list",mounted:function(){this.$store.dispatch("getContacts")},computed:{contacts:function(){return this.$store.getters.contacts}},components:{ContactsItem:_}},b=g,y=Object(v["a"])(b,l,h,!1,null,null,null),O=y.exports,j={name:"Contacts",components:{ContactsList:O}},x=j,M=Object(v["a"])(x,i,u,!1,null,null,null),$=M.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[t.isChatActive?n("div",{staticClass:"chat__user"},[n("div",{staticClass:"chat__user-avatar"},[n("img",{attrs:{src:t.activeChat.avatar,alt:"Аватар"}})]),n("p",{staticClass:"chat__user-name"},[t._v(t._s(t.activeChat.name))]),n("button",{staticClass:"chat__close",attrs:{type:"button","aria-label":"Закрыть чат"},on:{click:function(e){return e.preventDefault(),t.handlerCloseChat(e)}}})]):t._e(),t.isChatActive?n("ChatList"):t._e(),t.isChatActive?n("ChatForm"):n("div",{staticClass:"chat__nothing"},[n("p",[t._v("Выберите, кому хотели бы написать")])])],1)},S=[],A=(n("1d91"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"chat__list"},t._l(t.messages,(function(t){return n("ChatItem",{key:t.id,attrs:{message:t}})})),1)}),E=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{chat__item:!0,"chat__item--yours":"you"===t.message.author}},[n("p",{staticClass:"chat__item-message"},[t._v(t._s(t.message.text))]),n("p",{staticClass:"chat__item-time"},[t._v(t._s(t.formatDate(t.message.datetime)))])])},P=[],k=n("b166"),D={name:"Chat-item",props:{message:Object},methods:{formatDate:function(t){return Object(k["a"])(new Date(t),"dd.MM.yyyy HH:mm")}}},N=D,T=Object(v["a"])(N,I,P,!1,null,null,null),J=T.exports,K={name:"chat-list",data:function(){return{}},computed:{messages:function(){return this.$store.getters.messages}},components:{ChatItem:J}},L=K,F=Object(v["a"])(L,A,E,!1,null,null,null),H=F.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat__form"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handlerSubmitMessage(e)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"Написать сообщение..."},domProps:{value:t.message},on:{keydown:t.handlerKeydownSubmit,input:function(e){e.target.composing||(t.message=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("Отправить")])])])},q=[],z={name:"Chat-form",data:function(){return{message:""}},computed:{activeChat:function(){return this.$store.getters.activeChat}},methods:{handlerSubmitMessage:function(){var t=this,e={userId:this.activeChat.id,text:this.message};this.$store.dispatch("submitMessage",e).then((function(){t.message=""}))},handlerKeydownSubmit:function(t){var e="Enter"===t.code&&(t.ctrlKey||t.metaKey);e&&this.handlerSubmitMessage()}}},B=z,G=Object(v["a"])(B,U,q,!1,null,null,null),Q=G.exports,R={name:"Chat",data:function(){return{}},computed:{isChatActive:function(){return this.$store.getters.isChatActive},activeChat:function(){return this.$store.getters.activeChat}},methods:{handlerCloseChat:function(){this.$store.dispatch("closeChat")}},components:{ChatList:H,ChatForm:Q}},V=R,W=Object(v["a"])(V,w,S,!1,null,null,null),X=W.exports,Y={name:"Main",components:{Contacts:$,Chat:X}},Z=Y,tt=(n("5cbc"),Object(v["a"])(Z,o,r,!1,null,null,null)),et=tt.exports,nt={name:"App",components:{Main:et}},at=nt,st=Object(v["a"])(at,s,c,!1,null,null,null),ct=st.exports,ot=n("2f62"),rt=(n("d3b7"),!0),it=rt?"https://my-json-server.typicode.com/olyamosunova/JSONplaceholder":"http://localhost:3001",ut={state:{isChatActive:!1,activeChat:null,contacts:null,messages:null},mutations:{changeStateIsChatActive:function(t,e){t.isChatActive=e},changeStateActiveChat:function(t,e){t.activeChat=e},setContacts:function(t,e){t.contacts=e},setMessages:function(t,e){t.messages=e},setNewMessage:function(t,e){t.messages.push(e)}},actions:{closeChat:function(t){var e=t.commit;e("changeStateIsChatActive",!1),e("changeStateActiveChat",null),e("setMessages",null)},openChat:function(t,e){var n=t.commit;n("changeStateIsChatActive",!0),n("changeStateActiveChat",e)},getContacts:function(t){var e=t.commit;fetch("".concat(it,"/users")).then((function(t){return t.json()})).then((function(t){return e("setContacts",t)}))},getMessages:function(t,e){var n=t.commit;fetch("".concat(it,"/messages?user_id=").concat(e)).then((function(t){return t.json()})).then((function(t){return n("setMessages",t)}))},submitMessage:function(t,e){var n=t.commit;fetch("".concat(it,"/messages"),{method:"POST",body:JSON.stringify({datetime:new Date,text:e.text,author:"you",user_id:e.userId}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){console.log(t),n("setNewMessage",t)}))}},getters:{isChatActive:function(t){return t.isChatActive},activeChat:function(t){return t.activeChat},contacts:function(t){return t.contacts},messages:function(t){return t.messages}}};a["a"].use(ot["a"]);var lt=new ot["a"].Store({modules:{data:ut}});a["a"].config.productionTip=!1,new a["a"]({store:lt,render:function(t){return t(ct)}}).$mount("#app")},"5cbc":function(t,e,n){"use strict";n("7edb")},"72e2":function(t,e,n){},"7edb":function(t,e,n){},a1a3:function(t,e,n){}});
//# sourceMappingURL=app.js.map