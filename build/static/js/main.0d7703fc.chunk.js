(this.webpackJsonpplayer=this.webpackJsonpplayer||[]).push([[0],{10:function(e,t,n){e.exports={musicInfo:"musicInfo_musicInfo__ItmUm",img:"musicInfo_img__3L9Dw",name:"musicInfo_name__3lwxb",artist:"musicInfo_artist__2N_at"}},14:function(e,t,n){e.exports={sidenav:"sidenav_sidenav__1z6GE",open:"sidenav_open__1W2iU",title:"sidenav_title__qBSwp"}},15:function(e,t,n){e.exports={nav:"nav_nav__3vXMn",logo:"nav_logo__3Y6aH",button:"nav_button__31Fwe"}},29:function(e,t,n){e.exports={player:"player_player__2Dbpo"}},35:function(e,t,n){},5:function(e,t,n){e.exports={container:"musicPlayer_container__2ktK2",ranger:"musicPlayer_ranger__gHvWA",time:"musicPlayer_time__2hrcG",rangerContainer:"musicPlayer_rangerContainer__l6AUX",track:"musicPlayer_track__dauM1",player:"musicPlayer_player__3D6Mo",icon:"musicPlayer_icon__2cQwl"}},58:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),i=n.n(c),r=n(27),s=n.n(r),u=(n(35),n(6)),o=n(4),l=n.n(o),m=n(7),d=n(9),j=n(28),v=n.n(j),f=n(10),b=n.n(f),p=function(e){var t=e.img,n=e.name,c=e.artist;return Object(a.jsxs)("div",{className:b.a.musicInfo,children:[Object(a.jsx)("img",{src:t,alt:t,className:b.a.img}),Object(a.jsx)("h1",{className:b.a.name,children:n}),Object(a.jsx)("h2",{className:b.a.artist,children:c})]})};p.defaultProps={img:"",name:"",artist:""};var _=p,O=n(13),x=n(12),g=n(5),h=n.n(g),y=function(e){return"".concat(Math.floor(e/60),":").concat(e%60<10?"0".concat(Math.floor(e%60)):Math.floor(e%60))},I=function(e){var t=e.isPlaying,n=e.setIsPlaying,c=e.musicInfo,i=e.setMusicInfo,r=e.audioElm,s=e.musics,o=e.activeMusic,d=e.newProp,j=void 0===d?"init":d,v=e.setActiveMusic;console.log(j);var f=function(){var e=Object(m.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(Object(u.a)(Object(u.a)({},c),{},{trackPercentage:0})),a=s.findIndex((function(e){return e._id===o._id})),e.t0=n,e.next="prev"===e.t0?5:"next"===e.t0?8:11;break;case 5:return e.next=7,v(s[a-1>=0?a-1:s.length-1]);case 7:return e.abrupt("break",12);case 8:return e.next=10,v(s[(a+1)%s.length]);case 10:return e.abrupt("break",12);case 11:return e.abrupt("return");case 12:t?r.current.play():r.current.pause();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b={backgroundImage:"linear-gradient(to right,".concat(o&&o.colors[0]," 0%,").concat(o&&o.colors[1],"100%)"),transform:"scaleX(".concat(c.trackPercentage,")")};return Object(a.jsxs)("div",{className:h.a.container,children:[Object(a.jsxs)("div",{className:h.a.ranger,children:[Object(a.jsx)("p",{className:h.a.time,children:y(c.currentTime)}),Object(a.jsxs)("div",{className:h.a.rangerContainer,children:[Object(a.jsx)("input",{type:"range",min:0,max:c.duration||0,value:c.currentTime,onChange:function(e){return function(e){var t=e.target.value;i(Object(u.a)(Object(u.a)({},c),{},{currentTime:t})),r.current.currentTime=t}(e)}}),Object(a.jsx)("div",{className:h.a.track,style:b})]}),Object(a.jsx)("p",{className:h.a.time,children:y(c.duration||0)})]}),Object(a.jsxs)("div",{className:h.a.player,children:[Object(a.jsx)(O.a,{icon:x.a,size:"3x",className:h.a.icon,onClick:function(){return f("prev")}}),Object(a.jsx)(O.a,{icon:t?x.c:x.d,size:"6x",color:"crimson",className:h.a.icon,onClick:function(){return t?r.current.pause():r.current.play(),void n((function(e){return!e}))}}),Object(a.jsx)(O.a,{icon:x.b,size:"3x",className:h.a.icon,onClick:function(){return f("next")}})]})]})};I.defaultProps={audioElm:{},musics:[],activeMusic:{},newProp:"default"};var N=I,P=n(29),M=n.n(P),k=function(e){var t=e.music,n=e.isPlaying,c=e.setIsPlaying,i=e.musicInfo,r=e.setMusicInfo,s=e.audioElm,o=e.activeMusic,l=e.setActiveMusic,m=e.musics;return Object(a.jsxs)("div",{className:M.a.player,children:[Object(a.jsx)(_,Object(u.a)({},t)),Object(a.jsx)(N,{audioSrc:t&&t.audio,isPlaying:n,setIsPlaying:c,musicInfo:i,setMusicInfo:r,audioElm:s,activeMusic:o,setActiveMusic:l,musics:m})]})};k.defaultProps={music:{},audioElm:{},activeMusic:{},musics:[]};var w=k,E=n(8),A=n.n(E),C=function(e){var t=e.music,n=e.setActiveMusic,c=e.audioElm,i=e.isPlaying,r=e.isActive,s=function(){var e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:i?c.current.play():c.current.pause();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"".concat(A.a.item," ").concat(r&&A.a.active),onClick:function(){return s()},children:[Object(a.jsx)("img",{className:A.a.img,src:t.img,alt:t.img}),Object(a.jsxs)("div",{className:A.a.infoContainer,children:[Object(a.jsx)("h5",{className:A.a.name,children:t.name}),Object(a.jsx)("h6",{className:A.a.artist,children:t.artist})]})]})};C.defaultProps={music:{},audioElm:{}};var S=C,T=n(14),U=n.n(T),z=function(e){var t=e.musics,n=e.activeMusic,c=e.setActiveMusic,i=e.audioElm,r=e.isPlaying,s=e.isNavOpen;return Object(a.jsxs)("div",{className:"".concat(U.a.sidenav," ").concat(s&&U.a.open),children:[Object(a.jsx)("h5",{className:U.a.title,children:" library "}),t.map((function(e){return Object(a.jsx)(S,{music:e,setActiveMusic:c,audioElm:i,isPlaying:r,isActive:e._id===(n&&n._id)},e._id)}))]})};z.defaultProps={musics:[],activeMusic:{},audioElm:{}};var D=z,Y=n(15),G=n.n(Y),W=n.p+"static/media/logo.9b9d1f74.png",X=function(e){var t=e.setIsNavOpen;return Object(a.jsxs)("nav",{className:G.a.nav,children:[Object(a.jsx)("img",{className:G.a.logo,src:W,alt:W}),Object(a.jsx)("button",{type:"button",className:G.a.button,onClick:function(){return t((function(e){return!e}))},children:"library"})]})},B=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),s=Object(d.a)(r,2),o=s[0],j=s[1],f=Object(c.useState)(!1),b=Object(d.a)(f,2),p=b[0],_=b[1],O=Object(c.useState)({currentTime:0,duration:0,trackPercentage:0}),x=Object(d.a)(O,2),g=x[0],h=x[1],y=Object(c.useState)(window.innerWidth>600),I=Object(d.a)(y,2),N=I[0],P=I[1],M=Object(c.useRef)(null);Object(c.useEffect)((function(){(function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("","/data/musics.json"));case 2:t=e.sent,i(t.data),j(t.data[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(e){var t=e.target.currentTime,n=e.target.duration,a=t/n;h(Object(u.a)(Object(u.a)({},g),{},{currentTime:t,duration:n,trackPercentage:a}))},E=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.findIndex((function(e){return e._id===o._id})),e.next=3,j(n[(t+1)%n.length]);case 3:p?M.current.play():M.current.pause();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(X,{setIsNavOpen:P}),Object(a.jsx)(w,{music:o,isPlaying:p,setIsPlaying:_,musicInfo:g,setMusicInfo:h,audioElm:M,activeMusic:o,setActiveMusic:j,musics:n}),Object(a.jsx)(D,{musics:n,activeMusic:o,setActiveMusic:j,audioElm:M,isPlaying:p,isNavOpen:N}),Object(a.jsx)("audio",{src:o&&o.audio,ref:M,style:{display:"none"},onTimeUpdate:function(e){return k(e)},onLoadedMetadata:function(e){return k(e)},onEnded:function(){return E()}})]})};var F=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(B,{})})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={item:"sidenavItem_item__38Q_Y",active:"sidenavItem_active__2RYw7",img:"sidenavItem_img__34uY_",infoContainer:"sidenavItem_infoContainer__1DUxP",name:"sidenavItem_name__12yb4",artist:"sidenavItem_artist__2G-np"}}},[[58,1,2]]]);
//# sourceMappingURL=main.0d7703fc.chunk.js.map