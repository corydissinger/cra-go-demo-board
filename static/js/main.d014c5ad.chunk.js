(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,n,t){e.exports=t(36)},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(14),i=t.n(a),c=t(4),u=t(11),s=t(22),l=t(23),d=function(e){return function(n){return function(t){console.group(t.type),console.info("dispatching",t);var o=n(t);return console.log("next state",e.getState()),console.groupEnd(),o}}},h=t(10),f=t(2),m=t(1),p=function(e,n){for(var t=[],o=e.charCodeAt(0),r=n.charCodeAt(0);o<=r;++o)t.push(String.fromCharCode(o));if(0===t.length)throw new Error("Unexpected begin [".concat(e,"] and end [").concat(n,"] characters"));return t},w=Number(1.071428571428571),T=Number(.933333333333333),v=Number(.949367088607595),E="".concat("a").concat("1"),_="".concat("i").concat("1"),g="".concat("i").concat("9"),O="".concat("a").concat("9"),b="".concat("m").concat("1"),S="".concat("m").concat("13"),C="".concat("a").concat("13"),N="".concat("s").concat("1"),x="".concat("s").concat("19"),y="".concat("a").concat("19"),M=[E,_,g,O],A=["".concat("a").concat("1"),"".concat("a").concat("13"),"".concat("m").concat("1"),"".concat("m").concat("13")],j=["".concat("a").concat("1"),"".concat("a").concat("19"),"".concat("s").concat("1"),"".concat("s").concat("19")],H=[].concat(Object(f.a)(m.map(m.range(2,9),function(e){return"".concat("a").concat(e)})),Object(f.a)(m.map(m.range(2,9),function(e){return"".concat("i").concat(e)})),Object(f.a)(m.map(p("b","h"),function(e){return"".concat(e,"9")})),Object(f.a)(m.map(p("b","h"),function(e){return"".concat(e,"1")}))),k=[].concat(Object(f.a)(m.map(m.range(2,13),function(e){return"".concat("a").concat(e)})),Object(f.a)(m.map(m.range(2,13),function(e){return"".concat("m").concat(e)})),Object(f.a)(m.map(p("b","l"),function(e){return"".concat(e,"13")})),Object(f.a)(m.map(p("b","l"),function(e){return"".concat(e,"1")}))),W=[].concat(Object(f.a)(m.map(m.range(2,19),function(e){return"".concat("a").concat(e)})),Object(f.a)(m.map(m.range(2,19),function(e){return"".concat("s").concat(e)})),Object(f.a)(m.map(p("b","r"),function(e){return"".concat(e,"19")})),Object(f.a)(m.map(p("b","r"),function(e){return"".concat(e,"1")}))),R=m.map(m.range(1,10),function(e){return m.map(p("a","i"),function(n){return"".concat(n).concat(e)})}),G=m.map(m.range(1,14),function(e){return m.map(p("a","m"),function(n){return"".concat(n).concat(e)})}),I=m.map(m.range(1,20),function(e){return m.map(p("a","s"),function(n){return"".concat(n).concat(e)})}),D=(m.map(m.range(1,10),function(){return m.map(p("a","i"),function(){return"STONE_NONE"})}),m.map(m.range(1,14),function(){return m.map(p("a","m"),function(){return"STONE_NONE"})}),m.map(m.range(1,20),function(){return m.map(p("a","s"),function(){return"STONE_NONE"})}),t(15)),U=function(e,n){if(E===n)return"NORTH_WEST";if("GAME_9_x_9"===e){if(O===n)return"SOUTH_WEST";if(_===n)return"NORTH_EAST";if(g===n)return"SOUTH_EAST";if("a"===n[0])return"WEST";if("1"===n.substring(1))return"NORTH";if("i"===n[0])return"EAST";if("9"===n.substring(1))return"SOUTH";throw new Error('Avast ye matey, shouldn"nt be branching to this island in 9 x 9')}if("GAME_13_x_13"===e){if(C===n)return"SOUTH_WEST";if(b===n)return"NORTH_EAST";if(S===n)return"SOUTH_EAST";if("a"===n[0])return"WEST";if("1"===n.substring(1))return"NORTH";if("m"===n[0])return"EAST";if("13"===n.substring(1))return"SOUTH";throw new Error('Avast ye matey, shouldn"nt be branching to this island in 13 x 13')}if("GAME_19_x_19"===e){if(y===n)return"SOUTH_WEST";if(N===n)return"NORTH_EAST";if(x===n)return"SOUTH_EAST";if("a"===n[0])return"WEST";if("1"===n.substring(1))return"NORTH";if("s"===n[0])return"EAST";if("19"===n.substring(1))return"SOUTH";throw new Error('Avast ye matey, shouldn"nt be branching to this island in 19 x 19')}},P=function(e){var n,t=e.mode,o=e.colCoordinate,r=e.rowCoordinate;"GAME_9_x_9"===t?n=R:"GAME_13_x_13"===t?n=G:"GAME_19_x_19"===t&&(n=I);var a=n.length-1,i=parseInt(o.charCodeAt(0)-97),c=parseInt(r)-1,u={};return c>=1&&(u.north=n[c-1][i]),i<a&&(u.east=n[c][i+1]),c<a&&(u.south=n[c+1][i]),i>=1&&(u.west=n[c][i-1]),u},B=function(e){var n=e.mode,t=e.colCoordinate,o=e.rowCoordinate;return m.values(P({mode:n,colCoordinate:t,rowCoordinate:o}))},L={mode:"GAME_9_x_9"},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_MODE":var t=n.payload.mode;return Object(h.a)({},L,{mode:t});case"SET_STONE":var o=n.payload,r=o.colCoordinate,a=o.rowCoordinate,i=o.color,c=function(e){for(var n=e.existingStones,t=e.mode,o=e.newStoneColor,r=e.newStoneColCoordinate,a=e.newStoneRowCoordinate,i="STONE_BLACK"===o?"STONE_WHITE":"STONE_BLACK",c=m.assign({},n,Object(D.a)({},"".concat(r).concat(a),o)),u=P({mode:t,colCoordinate:r,rowCoordinate:a}),s=m.filter(m.values(u),function(e){return c[e]===i}),l=s.length===m.keys(u).length,d=[];0!==s.length;)d.push.apply(d,s),s=m.flatMap(s,function(e){return m.filter(B({mode:t,colCoordinate:e[0],rowCoordinate:e.substring(1)}),function(e){return!m.includes(d,e)&&c[e]===i})});for(var h=[],f=0,p=d;f<p.length;f++){var w=p[f];s=m.filter(B({mode:t,colCoordinate:w[0],rowCoordinate:w.substring(1)}),function(e){return!m.includes(d,e)&&(!c[e]||"STONE_NONE"===c[e])}),h.push.apply(h,s)}return h.length>0?l?n:c:m.omit(c,d)}({existingStones:e,mode:e.mode,newStoneColor:i,newStoneColCoordinate:r,newStoneRowCoordinate:a});return Object(h.a)({mode:e.mode},c);default:return e}},J={canRender:!1,mode:"GAME_9_x_9",turnColor:"TURN_BLACK",turnNumber:1,windowHeight:null,windowWidth:null,configurationHeight:null,blackCaptures:0,whiteCaptures:0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_MODE":return Object(h.a)({},e,{mode:n.payload.mode,turnNumber:1,blackCaptures:0,whiteCaptures:0});case"SET_STONE":return Object(h.a)({},e,{turnColor:"TURN_BLACK"===e.turnColor?"TURN_WHITE":"TURN_BLACK",turnNumber:e.turnNumber+1});case"SET_WINDOW_DIMENSIONS":var t=n.payload,o=t.windowHeight,r=t.windowWidth;return Object(h.a)({},e,{canRender:!0,windowHeight:o,windowWidth:r});case"SET_CONFIGURATION_HEIGHT":var a=n.payload.configurationHeight;return Object(h.a)({},e,{configurationHeight:a});default:return e}};var F=t(5),q=t(6),Q=t(8),V=t(7),X=t(3),Y=t(9),Z=t(24),$=Object(Z.a)(function(e,n){return e.board["".concat(n.colCoordinate).concat(n.rowCoordinate)]},function(e){return e||"STONE_NONE"}),ee=function(e){function n(e){var t;return Object(F.a)(this,n),(t=Object(Q.a)(this,Object(V.a)(n).call(this,e))).showPreviewStone=t.showPreviewStone.bind(Object(X.a)(t)),t.clearCanvas=t.clearCanvas.bind(Object(X.a)(t)),t.drawTile=t.drawTile.bind(Object(X.a)(t)),t.onClick=t.onClick.bind(Object(X.a)(t)),t.onMouseOver=t.onMouseOver.bind(Object(X.a)(t)),t.onMouseOut=t.onMouseOut.bind(Object(X.a)(t)),t}return Object(Y.a)(n,e),Object(q.a)(n,[{key:"componentDidMount",value:function(){this.drawTile()}},{key:"componentDidUpdate",value:function(){this.drawTile()}},{key:"drawTile",value:function(){var e=this.props,n=e.mode,t=e.rowCoordinate,o=e.colCoordinate;"STONE_NONE"===e.stonePlaced?this.clearCanvas():this.drawStone(),!function(e){return"GAME_9_x_9"===e?M:"GAME_13_x_13"===e?A:"GAME_19_x_19"===e?j:void 0}(n).includes("".concat(o).concat(t))?!function(e){return"GAME_9_x_9"===e?H:"GAME_13_x_13"===e?k:"GAME_19_x_19"===e?W:void 0}(n).includes("".concat(o).concat(t))?this.drawIntersection():this.drawSide():this.drawCorner()}},{key:"drawSide",value:function(){var e=this.props,n=e.height,t=e.mode,o=e.width,r=e.rowCoordinate,a=e.colCoordinate,i=this.refs.canvas.getContext("2d"),c=U(t,"".concat(a).concat(r)),u=o/2,s=n/2;i.beginPath(),i.font="18px monospace","WEST"===c?(i.moveTo(u,0),i.lineTo(u,n),i.moveTo(u,s),i.lineTo(o,s),i.fillText(r,0,s)):"NORTH"===c?(i.moveTo(0,s),i.lineTo(o,s),i.moveTo(u,s),i.lineTo(u,n),i.fillText(a,u,18)):"EAST"===c?(i.moveTo(u,0),i.lineTo(u,n),i.moveTo(0,s),i.lineTo(u,s),i.fillText(r,o-20,s)):"SOUTH"===c&&(i.moveTo(0,s),i.lineTo(o,s),i.moveTo(u,0),i.lineTo(u,s),i.fillText(a,u,n-20)),i.stroke()}},{key:"drawCorner",value:function(){var e=this.props,n=e.height,t=e.mode,o=e.width,r=e.rowCoordinate,a=e.colCoordinate,i=this.refs.canvas.getContext("2d"),c=U(t,"".concat(a).concat(r)),u=o/2,s=n/2;i.beginPath(),i.font="18px monospace","NORTH_EAST"===c?(i.moveTo(0,s),i.lineTo(u,s),i.lineTo(u,n),i.fillText(a,u,18),i.fillText(r,o-20,s)):"SOUTH_EAST"===c?(i.moveTo(u,0),i.lineTo(u,s),i.lineTo(0,s),i.fillText(a,u,n-20),i.fillText(r,o-20,s)):"SOUTH_WEST"===c?(i.moveTo(o,s),i.lineTo(u,s),i.lineTo(u,0),i.fillText(a,u,n-20),i.fillText(r,0,s)):"NORTH_WEST"===c&&(i.moveTo(u,n),i.lineTo(u,s),i.lineTo(o,s),i.fillText(a,u,18),i.fillText(r,0,s)),i.stroke()}},{key:"drawIntersection",value:function(){var e=this.props,n=e.height,t=e.width,o=this.refs.canvas.getContext("2d"),r=t/2,a=n/2;o.beginPath(),o.moveTo(0,a),o.lineTo(t,a),o.moveTo(r,0),o.lineTo(r,n),o.stroke()}},{key:"drawStone",value:function(){var e=this.props.stonePlaced;this.drawStoneInternal("STONE_BLACK"===e)}},{key:"drawStoneInternal",value:function(e){var n=this.props,t=n.height,o=n.stoneRadius,r=n.width,a=this.refs.canvas.getContext("2d"),i=r/2,c=t/2;a.beginPath(),a.arc(i,c,o,0,2*Math.PI),e&&(a.fillStyle="#000000",a.fill()),a.stroke()}},{key:"showPreviewStone",value:function(){var e=this.props.turnColor;this.drawStoneInternal("TURN_BLACK"===e)}},{key:"clearCanvas",value:function(){var e=this.props,n=e.height,t=e.width;this.refs.canvas.getContext("2d").clearRect(0,0,t,n)}},{key:"onMouseOver",value:function(){"STONE_NONE"===this.props.stonePlaced&&this.showPreviewStone()}},{key:"onMouseOut",value:function(){"STONE_NONE"===this.props.stonePlaced&&(this.clearCanvas(),this.drawTile())}},{key:"onClick",value:function(){"STONE_NONE"===this.props.stonePlaced&&this.props.setStone()}},{key:"render",value:function(){var e=this.props,n=e.height,t=e.width;return r.a.createElement("canvas",{height:n,width:t,ref:"canvas",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onClick:this.onClick})}}]),n}(o.Component),ne=Object(c.b)(function(e,n){return{stonePlaced:$(e,n),turnColor:e.game.turnColor}},function(e,n){var t=n.colCoordinate,o=n.rowCoordinate;return{setStone:function(){e(function(e,n){return function(t,o){var r=o().game.turnColor;t(function(e,n,t){return{type:"SET_STONE",payload:{colCoordinate:e,rowCoordinate:n,color:t}}}(e,n,"TURN_BLACK"===r?"STONE_BLACK":"STONE_WHITE"))}}(t,o))}}})(ee),te=function(e){function n(){return Object(F.a)(this,n),Object(Q.a)(this,Object(V.a)(n).apply(this,arguments))}return Object(Y.a)(n,e),Object(q.a)(n,[{key:"getCoordinates",value:function(){var e=this.props.mode;if("GAME_9_x_9"===e)return R;if("GAME_13_x_13"===e)return G;if("GAME_19_x_19"===e)return I;throw new Error("No known mode selected")}},{key:"renderRow",value:function(e){var n=this.props,t=n.mode,o=n.stoneRadius,a=n.tileDimensions,i=e[0].substring(1);return r.a.createElement("div",{key:"".concat(t).concat(i),className:"flex-container"},m.map(e,function(e){var n=e[0];return r.a.createElement(ne,{key:"".concat(t).concat(n).concat(i),colCoordinate:n,rowCoordinate:i,height:a.height,stoneRadius:o,width:a.width,mode:t})}))}},{key:"render",value:function(){var e=this,n=this.getCoordinates();return r.a.createElement("div",{id:"board"},m.map(n,function(n){return e.renderRow(n)}))}}]),n}(o.Component),oe=Object(c.b)(function(e){var n,t=e.game,o=t.mode,r=t.windowHeight,a=t.windowWidth,i=t.configurationHeight,c=function(e){var n=e.configurationHeight,t=e.windowHeight,o=e.windowWidth,r=(t-n)*T,a=(r=o>r?r:o-10)*w;return{height:Math.floor(a),width:Math.floor(r)}}({configurationHeight:i,windowHeight:r,windowWidth:a}),u=function(e){var n=e.mode,t=e.boardHeight,o=e.boardWidth,r=0;if("GAME_9_x_9"===n)r=Number(1/9);else if("GAME_13_x_13"===n)r=Number(1/13);else{if("GAME_19_x_19"!==n)throw new Error("No known mode");r=Number(1/19)}var a=Math.floor(t*r),i=Math.floor(o*r);return{height:a%2===0?a:a-1,width:i%2===0?i:i-1}}({mode:o,boardHeight:c.height,boardWidth:c.width}),s=(n=u.height,Math.floor(n*v/2));return console.log("Configuration height: ".concat(i,", Window width: ").concat(a,", window height: ").concat(r,", calculated tile dims: ").concat(JSON.stringify(u))),{mode:o,stoneRadius:s,tileDimensions:u}})(te),re=function(e){function n(){return Object(F.a)(this,n),Object(Q.a)(this,Object(V.a)(n).apply(this,arguments))}return Object(Y.a)(n,e),Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.configurationHeight,t=e.setConfigurationHeight;n||t(document.getElementById("configuration").clientHeight)}},{key:"getHumanReadableMode",value:function(){var e=this.props.mode;if("GAME_9_x_9"===e)return"9 x 9";if("GAME_13_x_13"===e)return"13 x 13";if("GAME_19_x_19"===e)return"19 x 19";throw new Error("No known mode selected")}},{key:"render",value:function(){var e=this.props,n=e.mode,t=e.setMode;return r.a.createElement("div",{id:"configuration"},r.a.createElement("h1",null,"Go Demo Board"),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Mode: ",this.getHumanReadableMode()),r.a.createElement("h4",null,"Turn Number: ",this.props.turnNumber)),r.a.createElement("form",null,r.a.createElement("select",{onChange:function(e){return t(e.target.value)},value:n},r.a.createElement("option",{value:"GAME_9_x_9"},"9 x 9"),r.a.createElement("option",{value:"GAME_13_x_13"},"13 x 13"),r.a.createElement("option",{value:"GAME_19_x_19"},"19 x 19")))))}}]),n}(o.Component),ae=Object(c.b)(function(e){return{mode:e.game.mode,turnNumber:e.game.turnNumber,configurationHeight:e.game.configurationHeight}},function(e){return{setMode:function(n){e(function(e){return{type:"SET_MODE",payload:{mode:e}}}(n))},setConfigurationHeight:function(n){e({type:"SET_CONFIGURATION_HEIGHT",payload:{configurationHeight:n}})}}})(re),ie=(t(35),function(e){function n(e){var t;return Object(F.a)(this,n),(t=Object(Q.a)(this,Object(V.a)(n).call(this,e))).updateWindowDimensions=t.updateWindowDimensions.bind(Object(X.a)(t)),t}return Object(Y.a)(n,e),Object(q.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.props.setWindowDimensions(window.innerWidth,window.innerHeight)}},{key:"render",value:function(){var e=this.props.canRender;return r.a.createElement("div",{className:"App"},r.a.createElement(ae,null),e&&r.a.createElement(oe,null),!e&&r.a.createElement("h1",null,"Please wait..."))}}]),n}(o.Component)),ce=Object(c.b)(function(e){var n=e.game,t=n.canRender;return{mode:n.mode,canRender:t}},function(e){return{setWindowDimensions:function(n,t){e(function(e,n){return{type:"SET_WINDOW_DIMENSIONS",payload:{windowWidth:e,windowHeight:n}}}(n,t))}}})(ie),ue=function(e){var n=[Object(u.applyMiddleware)(s.a,d)],t=l.composeWithDevTools.apply(void 0,n),o=Object(u.combineReducers)({board:K,game:z});return Object(u.createStore)(o,e,t)}(),se=document.getElementById("root");i.a.render(r.a.createElement(c.a,{store:ue},r.a.createElement(ce,null)),se)}},[[25,1,2]]]);
//# sourceMappingURL=main.d014c5ad.chunk.js.map