(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=(n(24),n(1)),s=n(2),l=n(4),u=n(3),h=n(5);var d=function(e){return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.id,"?size=200x200;set=set3"),alt:"robo profile pic"}),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.email)))};var p=function(e){var t=e.robos,n=t.map(function(e,n){return r.a.createElement(d,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})});return r.a.createElement("div",null,n)},f=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search for robots...",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px",border:"1px solid black"}},e.children)},m=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Whoops. Something went wrong with this component."):this.props.children}}]),t}(o.Component),g=(n(25),n(10)),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"Robotronic Friends"),r.a.createElement("h4",null,"Where Friends Are Made"),r.a.createElement(E,{color:"red"}))}}]),t}(o.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robos,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Loading"),r.a.createElement("span",null,"...")):r.a.createElement("div",{className:"tc"},r.a.createElement(v,null),r.a.createElement(f,{searchChange:n}),r.a.createElement(b,null,r.a.createElement(m,null,r.a.createElement(p,{robos:c}))))}}]),t}(o.Component),w=Object(g.b)(function(e){return{searchField:e.searchRobots.searchField,robos:e.requestRobots.robos,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(O),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(32);var C=n(7),R={searchField:""},S={isPending:!1,robos:[],error:""},k=n(17),_=n(18),N=Object(k.createLogger)(),T=Object(C.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robos:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),A=Object(C.d)(T,Object(C.a)(_.a,N));c.a.render(r.a.createElement(g.a,{store:A},r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robotronic-friends-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robotronic-friends-app","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.e78a9e93.chunk.js.map