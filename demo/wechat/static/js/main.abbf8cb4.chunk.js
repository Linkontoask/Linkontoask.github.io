(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(t,e,n){t.exports=n(237)},117:function(t,e,n){},128:function(t,e,n){},136:function(t,e,n){},209:function(t,e,n){},213:function(t,e,n){},225:function(t,e,n){},230:function(t,e,n){},232:function(t,e,n){},234:function(t,e,n){},237:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(9),r=n.n(s),c=(n(117),n(11)),o=n(12),l=n(14),u=n(13),p=n(15),h=n(242),d=n(243),m=n(244),f=n(100),v=n.n(f),b=n(18),y=(n(128),n(130),n(103)),g=(n(133),n(105)),E=(n(48),n(10)),O=(n(136),function(t){return{type:"SCREEN_SHOW",value:t}}),j=function(t){return{type:"POS_CURRENT",currentIndex:t}},k=function(t){return{type:"CHAT_MAIN_POS",left:t}},T=function(t,e){return{type:"ROUTER_LEFT",leftSkewing:t,isTransit:e}},S=["/","/contacts","/friends","/setting"],C=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={nav:[{url:"/",icon:"aliwangwang",name:"\u5fae\u4fe1"},{url:"/contacts",icon:"team",name:"\u901a\u8baf\u5f55"},{url:"/friends",icon:"chrome",name:"\u670b\u53cb\u5708"},{url:"/setting",icon:"user",name:"\u8bbe\u7f6e"}]},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"NavTag",style:{zIndex:this.props.zIndex,opacity:this.props.opacity}},i.a.createElement(y.a,{gutter:8,justify:"space-between"},this.state.nav.map(function(e,n){return i.a.createElement(g.a,{key:n,span:6,onTouchEnd:t.swiper.bind(t,n,e.name,e.url),className:t.props.getIndex()===n?"focus":"burl"},i.a.createElement(E.a,{type:e.icon,style:{fontSize:"18px"}}),i.a.createElement("p",null,e.name))})))}},{key:"swiper",value:function(t,e,n){this.props.dispatch(function(t){return{type:"UPDATE_INDEX",index:t}}(t)),this.props.dispatch({type:"FETCH_NAME",text:e}),this.props.history.push(n)}},{key:"componentDidMount",value:function(){}}]),e}(a.Component);C.defaultProps={zIndex:2,opacity:1};var w=Object(b.b)(function(t){return{getIndex:function(){var e=0;return t||S.forEach(function(t,n){t===window.location.pathname&&(e=n)}),t?t.index:e}}})(C),x=(n(238),n(81)),N=(n(206),n(109)),I=(n(209),n(53),n(59)),D=I.a.Search,A=function(){return i.a.createElement(D,{placeholder:"\u641c\u7d22",onSearch:function(t){return console.log(t)},style:{width:"90%",margin:"0.6rem 0"}})},_=n(56),H=(n(213),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"delete-wechat",onTouchEnd:this.props.handlDelete},"\u5220\u9664")}}]),e}(a.Component)),M=n(44),R=n.n(M),W=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).clientWidth=0,n.state={right:[],data:[{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"},{title:"Ant Design Title 1",id:0,type:"normal"}]},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"ChatList"},i.a.createElement(A,null),0!==this.state.data.length&&i.a.createElement("div",{className:"swiper-box"},this.state.data.map(function(n,a){return i.a.createElement(_.a,{onPanEnd:t.onLeft.bind(t,a),options:{direction:["DIRECTION_LEFT","DIRECTION_RIGHT"]},key:a},i.a.createElement("div",{className:"swiper-item"},i.a.createElement(x.a.Item,{style:{left:t.state.right[a]}},i.a.createElement(x.a.Item.Meta,{avatar:i.a.createElement(N.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:n.title,description:"Ant Design, a design language for background applications, is refined by Ant UED Team",onClick:t.onTap.bind(t,n.id,n.type)}),i.a.createElement(H,{handlDelete:e.handlDelete.bind(t,a)}))))})),0===this.state.data.length&&i.a.createElement("div",{className:"info-content"},i.a.createElement(E.a,{type:"frown",style:{fontSize:32,display:"block",margin:"0 0 1rem"}}),"\u6682\u65f6\u6ca1\u6709\u65b0\u4fe1\u606f"))}},{key:"clearAll",value:function(){this.setState({data:[]})}},{key:"onLeft",value:function(t,e){this.Initialization();var n=Object.assign([],this.state.right);"panleft"===e.additionalEvent?-e.deltaX>=100||e.deltaTime<=150?n[t]=-100:n[t]=0:e.deltaX>=100||e.deltaTime<=150?n[t]=0:n[t]=-100,this.setState({right:n})}},{key:"Initialization",value:function(){var t=Object.assign([],this.state.right);t=t.map(function(){return 0}),this.setState({right:t})}},{key:"componentDidMount",value:function(){this.clientWidth=R()(".ChatList")[0].clientWidth}},{key:"onTap",value:function(t,e){this.Initialization(),this.props.dispatch(O(!0)),this.props.dispatch(j(1)),this.props.dispatch(k(0)),console.log(-(this.clientWidth-100)),this.props.dispatch(T(-(this.clientWidth-100),!0))}},{key:"removeHandle",value:function(t){var e=Object.assign([],this.state.right);e[t]="-140%",this.setState({right:e})}}],[{key:"enCode",value:function(t){return window.btoa(unescape(encodeURIComponent(t)))}},{key:"handlDelete",value:function(t){var e=this;this.removeHandle(t),setTimeout(function(){var n=Object.assign([],e.state.data),a=Object.assign([],e.state.right);n.splice(t,1),a.splice(t,1),e.setState({data:n,right:a})},400),console.log(t)}}]),e}(a.Component);var L=Object(b.b)(function(t){return{getState:function(){return t}}})(W),P=(n(225),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"NavState"},this.props.getState().value&&i.a.createElement("div",{className:"back",style:{opacity:this.props.getState().currentIndex},onTouchEnd:this.back.bind(this)},i.a.createElement(E.a,{type:"left",style:{fontSize:16}}),"\u8fd4\u56de"),i.a.createElement("h1",null,this.props.getState().text))}},{key:"back",value:function(){this.props.history.push("/"),this.props.dispatch(O(!1)),this.props.dispatch(j(1)),this.props.dispatch(k("110%")),this.props.dispatch(T(0,!0))}}]),e}(a.Component));var X=Object(b.b)(function(t){return{getState:function(){return t}}})(P),z=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"ContactsList"},"ContactsList")}}]),e}(a.Component),F=Object(b.b)()(z),U=(n(99),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Setting"},"Setting")}}]),e}(a.Component)),q=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Friends"},"Friends")}}]),e}(a.Component),B=n(27),V=n(46),G=n.n(V),J=n(80),Y=(n(230),n(232),function(t){var e=t.opting,n=t.message;return i.a.createElement("div",{className:"LineCose ".concat(e.type," ").concat(e.color),"data-type":e.target},i.a.createElement("img",{src:e.img,alt:"Not Found"}),i.a.createElement("p",{"data-type":e.target},n))});Y.defaultProps={opting:{target:1,type:"normal",color:"green",img:"http://newimg88.b0.upaiyun.com/newimg88/2009/05/feiwen8772qqcom_2da5419d.jpg"}};var $=n(0),K=n.n($),Q=(n(234),E.a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_836575_gxdpqhmux69.js"})),Z=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={value:""},t}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state.value;return i.a.createElement("div",{className:"EntryCommunication"},i.a.createElement(Q,{type:"icon-keyboard"}),i.a.createElement(I.a,{onPressEnter:this.props.keySend,onChange:this.onChangeValue.bind(this),ref:function(e){return t.input=e},value:e}),i.a.createElement(Q,{type:"icon-jiahao-fill"}))}},{key:"onChangeValue",value:function(t){this.setState({value:t.target.value})}},{key:"emitEmpty",value:function(){this.setState({value:""})}}]),e}(a.Component);Z.propsTypes={keySend:K.a.func.isRequired};var tt=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).scale=1,n.isHandelMove=!1,n.state={id:-1,list:[],left:0,isTransit:!1,isBack:!1,clientWidth:0},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handelStart",value:function(t){t.preventDefault(),t.center.x>this.state.clientWidth/2?this.isHandelMove=!1:this.isHandelMove=!0}},{key:"sign",value:function(t){var e=this;if(t.preventDefault(),!this.isHandelMove)return!1;(t.velocityX>=.1||t.deltaX>=0)&&this.setState({left:t.deltaX,isTransit:!1}),this.state.left>130?this.setState({isBack:!0}):this.setState({isBack:!1}),this.props.dispatch(T(Math.ceil(.7*this.state.left-230),!1)),setTimeout(function(){e.scale=1-(e.state.left/e.state.clientWidth).toFixed(1),e.props.dispatch(j(e.scale))},0)}},{key:"handelEnd",value:function(t){var e=this;if(t.preventDefault(),this.state.isBack)return this.setState({left:this.state.clientWidth,isTransit:!0}),this.props.dispatch(T(0,!0)),setTimeout(function(){e.props.dispatch(O(!1)),e.props.dispatch(j(1)),e.props.dispatch(k("110%")),e.setState({left:0,isTransit:!1})},100),!0;this.setState({left:0,isTransit:!0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"ChatMain ".concat(this.state.isTransit&&"transit"),style:{transform:"translateX(".concat(this.state.left,"px)"),left:this.props.getState().left}},i.a.createElement(_.a,{onPanStart:this.handelStart.bind(this),onPan:this.sign.bind(this),onPanEnd:this.handelEnd.bind(this),options:{direction:["DIRECTION_LEFT","DIRECTION_RIGHT"]}},i.a.createElement("div",{className:"ChatContent"},this.state.list.map(function(t,e){return i.a.createElement(Y,{key:e,opting:{target:t.target,type:t.type,color:"blue",img:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},message:t.content})}),i.a.createElement(Z,{keySend:this.getInfo.bind(this),ref:"message"}))))}},{key:"componentDidMount",value:function(){this.setState({clientWidth:R()(".ChatMain")[0].clientWidth})}},{key:"jsonLoad",value:function(){var t=Object(J.a)(G.a.mark(function t(e){return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getInfo",value:function(){var t=this;if(""===this.refs.message.state.value)return!1;this.sendMessage(this.refs.message.state.value.replace(/\s/g,"\xa0")),setTimeout(function(){t.refs.message.emitEmpty()},0)}},{key:"sendMessage",value:function(){var t=Object(J.a)(G.a.mark(function t(e){var n;return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:200==={ok:200}.ok&&((n=this.state.list.concat()).push({target:0,type:"normal",content:e}),this.setState(Object(B.a)({},this.state,{list:n})));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=R()(".ChatContent");t.animate({scrollTop:t[0].scrollHeight-t[0].clientHeight},200)}}]),e}(a.Component);var et=Object(b.b)(function(t){return{getState:function(){return t}}})(tt),nt=v()(),at=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(X,{history:nt}),i.a.createElement("div",{className:"MainContent  ".concat(this.props.isScreen().value?"hidden":"show"," ").concat(this.props.isScreen().isTransit&&"ContentTransit"),style:{transform:"translateX(".concat(this.props.isScreen().leftSkewing,"px)")}},i.a.createElement(h.a,{history:nt},i.a.createElement(d.a,null,i.a.createElement(m.a,{exact:!0,path:"/",component:L}),i.a.createElement(m.a,{path:"/contacts",component:F}),i.a.createElement(m.a,{path:"/friends",component:q}),i.a.createElement(m.a,{path:"/setting",component:U})))),i.a.createElement(et,null),i.a.createElement(w,{history:nt,zIndex:this.props.isScreen().value?1:2}))}}]),e}(a.Component),it=Object(b.b)(function(t){return{isScreen:function(){return t}}})(at);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var st=n(54),rt={index:0,text:"\u5fae\u4fe1",value:!1,currentIndex:1,left:"110%",leftSkewing:0,isTransit:!0},ct=["\u5fae\u4fe1","\u901a\u8baf\u5f55"],ot=Object(st.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_INDEX":return Object(B.a)({},t,{index:e.index});case"FETCH_NAME":return Object(B.a)({},t,{text:e.text});case"SCREEN_SHOW":return Object(B.a)({},t,{value:e.value,text:ct[t.index]});case"POS_CURRENT":return Object(B.a)({},t,{currentIndex:e.currentIndex});case"CHAT_MAIN_POS":return Object(B.a)({},t,{left:e.left});case"ROUTER_LEFT":return Object(B.a)({},t,{leftSkewing:e.leftSkewing,isTransit:e.isTransit});default:return t}});r.a.render(i.a.createElement(b.a,{store:ot},i.a.createElement(it,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},99:function(t,e,n){}},[[112,2,1]]]);
//# sourceMappingURL=main.abbf8cb4.chunk.js.map