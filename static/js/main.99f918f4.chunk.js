(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(14),a=n.n(i),c=n(3),s=n(11),u=n(22),l=n(23),d=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var o=t(n);return console.log("next state",e.getState()),console.groupEnd(),o}}},h=n(2),f=n(4),p=n(1),m=function(e){if(e<1)throw new Error("Please expect more than one column for a standard board...");for(var t=[],n=65;t.length<e;++n){var o=String.fromCharCode(n);"I"!==o&&t.push(o)}return t},v=function(e){return e<8?String.fromCharCode(e+65):String.fromCharCode(e+66)},w=function(e){var t=e.charCodeAt(0);return t<74?t-65:t-66},g=Number(1.071428571428571),E=Number(.933333333333333),S=Number(.88),b="".concat("A").concat("1"),T="".concat("J").concat("1"),_="".concat("J").concat("9"),O="".concat("A").concat("9"),C="".concat("N").concat("1"),N="".concat("N").concat("13"),y="".concat("A").concat("13"),W="".concat("T").concat("1"),A="".concat("T").concat("19"),x="".concat("A").concat("19"),k=[b,T,_,O],M=["C3","G3","E5","C7","G7"],j=["".concat("A").concat("1"),"".concat("A").concat("13"),"".concat("N").concat("1"),"".concat("N").concat("13")],P=["D4","J4","G7","J10","D10"],H=["".concat("A").concat("1"),"".concat("A").concat("19"),"".concat("T").concat("1"),"".concat("T").concat("19")],D=["D4","D10","D16","J4","J10","J16","P4","P10","P16"],R=[].concat(Object(f.a)(p.map(p.range(2,9),function(e){return"".concat("A").concat(e)})),Object(f.a)(p.map(p.range(2,9),function(e){return"".concat("J").concat(e)})),Object(f.a)(p.map(m(8),function(e){return"".concat(e,"9")})),Object(f.a)(p.map(m(8),function(e){return"".concat(e,"1")}))),G=[].concat(Object(f.a)(p.map(p.range(2,13),function(e){return"".concat("A").concat(e)})),Object(f.a)(p.map(p.range(2,13),function(e){return"".concat("N").concat(e)})),Object(f.a)(p.map(m(12),function(e){return"".concat(e,"13")})),Object(f.a)(p.map(m(12),function(e){return"".concat(e,"1")}))),B=[].concat(Object(f.a)(p.map(p.range(2,19),function(e){return"".concat("A").concat(e)})),Object(f.a)(p.map(p.range(2,19),function(e){return"".concat("T").concat(e)})),Object(f.a)(p.map(m(18),function(e){return"".concat(e,"19")})),Object(f.a)(p.map(m(18),function(e){return"".concat(e,"1")}))),I=p.map(p.range(1,10),function(e){return p.map(m(9),function(t){return"".concat(t).concat(e)})}),U=p.map(p.range(1,14),function(e){return p.map(m(13),function(t){return"".concat(t).concat(e)})}),L=p.map(p.range(1,20),function(e){return p.map(m(19),function(t){return"".concat(t).concat(e)})}),K={alteredStones:new Set,mode:"GAME_9_x_9",currentBoardState:{},previousBoardState:{},previousStone:"",penultimateStone:""},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MODE":var n=t.payload.mode;return Object(h.a)({},K,{mode:n});case"UPDATE_STONES":var o=t.payload,r=o.alteredStones,i=o.nextBoardState,a=o.placedStone;return Object(h.a)({},e,{alteredStones:r,koViolation:"",currentBoardState:i,previousBoardState:e.currentBoardState,penultimateStone:e.previousStone,previousStone:a});default:return e}},F=n(15),q=function(e,t){if(b===t)return"NORTH_WEST";if("GAME_9_x_9"===e){if(O===t)return"SOUTH_WEST";if(T===t)return"NORTH_EAST";if(_===t)return"SOUTH_EAST";if("A"===t[0])return"WEST";if("1"===t.substring(1))return"NORTH";if("J"===t[0])return"EAST";if("9"===t.substring(1))return"SOUTH";throw new Error("Avast ye matey, shouldn'nt be branching to this island in mode [".concat(e,"], coordinate [").concat(t,"]"))}if("GAME_13_x_13"===e){if(y===t)return"SOUTH_WEST";if(C===t)return"NORTH_EAST";if(N===t)return"SOUTH_EAST";if("A"===t[0])return"WEST";if("1"===t.substring(1))return"NORTH";if("N"===t[0])return"EAST";if("13"===t.substring(1))return"SOUTH";throw new Error("Avast ye matey, shouldn'nt be branching to this island in mode [".concat(e,"], coordinate [").concat(t,"]"))}if("GAME_19_x_19"===e){if(x===t)return"SOUTH_WEST";if(W===t)return"NORTH_EAST";if(A===t)return"SOUTH_EAST";if("A"===t[0])return"WEST";if("1"===t.substring(1))return"NORTH";if("T"===t[0])return"EAST";if("19"===t.substring(1))return"SOUTH";throw new Error("Avast ye matey, shouldn'nt be branching to this island in mode [".concat(e,"], coordinate [").concat(t,"]"))}},z=function(e){var t,n=e.mode,o=e.colCoordinate,r=e.rowCoordinate;"GAME_9_x_9"===n?t=I:"GAME_13_x_13"===n?t=U:"GAME_19_x_19"===n&&(t=L);var i=t.length-1,a=w(o),c=parseInt(r)-1,s={};return c>=1&&(s.north=t[c-1][a]),a<i&&(s.east=t[c][a+1]),c<i&&(s.south=t[c+1][a]),a>=1&&(s.west=t[c][a-1]),s},V=function(e){var t=e.mode,n=e.colCoordinate,o=e.rowCoordinate;return p.values(z({mode:t,colCoordinate:n,rowCoordinate:o}))},X={boardDimensions:{height:0,width:0},canRender:!1,capturesPanelHeight:null,koWarning:!1,suicideWarning:!1,maxOffsets:{col:8,row:8},mode:"GAME_9_x_9",tileDimensions:{height:0,width:0},turnColor:"TURN_BLACK",turnNumber:1,windowHeight:null,windowWidth:null,blackCaptures:0,whiteCaptures:0,lastPreviewStone:""},Y=function(e){var t=e.capturesPanelHeight,n=e.mode,o=function(e){var t=e.workingHeight,n=e.workingWidth,o=t*E,r=(o=n>o?o:n-10)*g;return{height:Math.floor(r),width:Math.floor(o)}}({workingHeight:e.windowHeight-t,workingWidth:e.windowWidth});return{boardDimensions:o,tileDimensions:function(e){var t=e.mode,n=e.boardHeight,o=e.boardWidth,r=0;if("GAME_9_x_9"===t)r=Number(1/9);else if("GAME_13_x_13"===t)r=Number(1/13);else{if("GAME_19_x_19"!==t)throw new Error("No known mode");r=Number(1/19)}var i=Math.floor(n*r),a=Math.floor(o*r);return{height:i%2===0?i:i-1,width:a%2===0?a:a-1}}({mode:n,boardHeight:o.height,boardWidth:o.width})}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LAST_PREVIEW_STONE":return Object(h.a)({},e,{lastPreviewStone:t.payload.coordinate});case"SET_MODE":var n=t.payload.mode,o=e.capturesPanelHeight,r=e.windowHeight,i=e.windowWidth,a=Y({capturesPanelHeight:o,mode:n,windowHeight:r,windowWidth:i}),c=a.boardDimensions,s=a.tileDimensions,u={col:8,row:8};return"GAME_13_x_13"===n?(u.col=12,u.row=12):"GAME_19_x_19"===n&&(u.col=18,u.row=18),Object(h.a)({},e,{maxOffsets:u,mode:n,boardDimensions:c,tileDimensions:s,turnNumber:1,blackCaptures:0,whiteCaptures:0});case"UPDATE_STONES":return Object(h.a)({},e,{turnColor:"TURN_BLACK"===e.turnColor?"TURN_WHITE":"TURN_BLACK",turnNumber:e.turnNumber+1});case"SET_WINDOW_DIMENSIONS":var l=t.payload,d=l.windowHeight,f=l.windowWidth,p=e.capturesPanelHeight,m=e.mode;if(e.capturesPanelHeight){var v=Y({capturesPanelHeight:p,mode:m,windowHeight:d,windowWidth:f}),w=v.boardDimensions,g=v.tileDimensions;return Object(h.a)({},e,{boardDimensions:w,tileDimensions:g,canRender:!0,windowHeight:d,windowWidth:f})}return Object(h.a)({},e,{windowHeight:d,windowWidth:f});case"SET_CAPTURE_PANEL_HEIGHT":var E=e.mode,S=e.windowHeight,b=e.windowWidth,T=t.payload.capturesPanelHeight;if(S&&b){var _=Y({capturesPanelHeight:T,mode:E,windowHeight:S,windowWidth:b}),O=_.boardDimensions,C=_.tileDimensions;return Object(h.a)({},e,{boardDimensions:O,capturesPanelHeight:T,tileDimensions:C,canRender:!0})}return Object(h.a)({},e,{capturesPanelHeight:T});case"INCREMENT_CAPTURES":var N=t.payload,y=N.blackCaptures,W=N.whiteCaptures;return Object(h.a)({},e,{blackCaptures:e.blackCaptures+y,whiteCaptures:e.whiteCaptures+W});case"KO_WARNING":return Object(h.a)({},e,{koWarning:!0});case"SUICIDE_WARNING":return Object(h.a)({},e,{suicideWarning:!0});case"RESET_WARNINGS":return Object(h.a)({},e,{koWarning:!1,suicideWarning:!1});default:return e}};var Z=n(5),$=n(6),ee=n(8),te=n(7),ne=n(10),oe=n(9),re=function(e){var t=e.colCoordinate,n=e.rowCoordinate;return function(e,o){var r,i=o().game,a=i.mode,c=i.turnColor,s=o().board,u=s.currentBoardState,l=s.previousBoardState,d="TURN_BLACK"===c?"STONE_BLACK":"STONE_WHITE",h=function(e){var t=e.existingStones,n=e.mode,o=e.newStoneColor,r=e.newStoneColCoordinate,i=e.newStoneRowCoordinate,a="STONE_BLACK"===o?"STONE_WHITE":"STONE_BLACK",c=p.assign({},t,Object(F.a)({},"".concat(r).concat(i),o)),s=z({mode:n,colCoordinate:r,rowCoordinate:i}),u=[],l=p.reduce(s,function(e,t,n){return c[t]&&"STONE_NONE"!==c[t]?e:e+1},0),d={north:{stones:[],liberties:[]},east:{stones:[],liberties:[]},south:{stones:[],liberties:[]},west:{stones:[],liberties:[]}},h=function(e){for(var t in d)if(p.includes(d[t].stones,e))return!0;return!1},f=function(e){return!h(e)&&c[e]===a};for(var m in s){var v=s[m],w=d[m];f(v)&&(u.push(v),w.stones.push(v));do{u=p.flatMap(u,function(e){return p.filter(V({mode:n,colCoordinate:e[0],rowCoordinate:e.substring(1)}),f)}),w.stones.push.apply(w.stones,u)}while(0!==u.length)}for(var g in d){var E=d[g],S=!0,b=!1,T=void 0;try{for(var _,O=E.stones[Symbol.iterator]();!(S=(_=O.next()).done);S=!0){var C=_.value;u=p.filter(V({mode:n,colCoordinate:C[0],rowCoordinate:C.substring(1)}),function(e){return!h(e)&&(!c[e]||"STONE_NONE"===c[e])}),E.liberties.push.apply(E.liberties,u)}}catch(P){b=!0,T=P}finally{try{S||null==O.return||O.return()}finally{if(b)throw T}}}var N=[],y=0,W=0;for(var A in d){var x=d[A];x.stones.length>0&&W++,0===x.liberties.length?N.push.apply(N,x.stones):x.stones.length>0&&y++}if(0===l&&y>0&&y===W)return t;for(var k=0,M=N;k<M.length;k++){var j=M[k];c[j]="STONE_NONE"}return c}({existingStones:u,mode:a,newStoneColor:d,newStoneColCoordinate:t,newStoneRowCoordinate:n}),f=p.isEqual(l,h);if(p.isEqual(u,h))e({type:"SUICIDE_WARNING"});else if(f)e({type:"KO_WARNING"});else{var m=function(e){var t=e.nextBoardState,n=e.currentBoardState,o=new Set;for(var r in t)t[r]!==n[r]&&o.add(r);return o}({currentBoardState:u,nextBoardState:h}),v="".concat(t).concat(n);e({type:"UPDATE_STONES",payload:{alteredStones:(r={alteredStones:m,nextBoardState:h,placedStone:v}).alteredStones,nextBoardState:r.nextBoardState,placedStone:r.placedStone}}),m.delete(v),e(function(e){return{type:"INCREMENT_CAPTURES",payload:{blackCaptures:e.blackCaptures,whiteCaptures:e.whiteCaptures}}}({blackCaptures:"STONE_BLACK"===d?m.size:0,whiteCaptures:"STONE_WHITE"===d?m.size:0}))}}},ie=function(e){function t(e){var n;return Object(Z.a)(this,t),(n=Object(ee.a)(this,Object(te.a)(t).call(this,e))).onMouseMove=n.onMouseMove.bind(Object(ne.a)(n)),n.onMouseOut=n.onMouseOut.bind(Object(ne.a)(n)),n.onClick=n.onClick.bind(Object(ne.a)(n)),n.calculatePreviewStone=n.calculatePreviewStone.bind(Object(ne.a)(n)),n}return Object(oe.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.renderWholeBoard()}},{key:"componentDidUpdate",value:function(e){if(this.props.mode===e.mode&&p.isEqual(this.props.tileDimensions,e.tileDimensions)){if(!p.isEqual(this.props.alteredStones,e.alteredStones)){var t=!0,n=!1,o=void 0;try{for(var r,i=this.props.alteredStones[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var a=r.value,c=a[0],s=Number.parseInt(a.substring(1)),u=w(c),l=s-1,d=this.getCanvasContextPresets();this.drawTile(c,s,d,u,l)}}catch(f){n=!0,o=f}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}}}else{var h=this.props.boardDimensions;this.getCanvasContextPresets().clearRect(0,0,h.width,h.height),this.renderWholeBoard()}(this.props.koWarning||this.props.suicideWarning)&&this.resetLastPreviewStone(this.getCanvasContextPresets())}},{key:"getCoordinates",value:function(){var e=this.props.mode;if(console.log("Current mode ".concat(e,", tile dims: ").concat(JSON.stringify(this.props.tileDimensions))),"GAME_9_x_9"===e)return I;if("GAME_13_x_13"===e)return U;if("GAME_19_x_19"===e)return L;throw new Error("No known mode selected")}},{key:"getCanvasContextPresets",value:function(){var e=this.refs.canvas.getContext("2d");return e.lineWidth=4,e}},{key:"drawTile",value:function(e,t,n,o,r){var i=this.props,a=i.currentBoardState,c=i.mode,s=a["".concat(e).concat(t)];"STONE_NONE"===s&&this.clearCanvas(n,o,r),!function(e){return"GAME_9_x_9"===e?k:"GAME_13_x_13"===e?j:"GAME_19_x_19"===e?H:void 0}(c).includes("".concat(e).concat(t))?!function(e){return"GAME_9_x_9"===e?R:"GAME_13_x_13"===e?G:"GAME_19_x_19"===e?B:void 0}(c).includes("".concat(e).concat(t))?!function(e){return"GAME_9_x_9"===e?M:"GAME_13_x_13"===e?P:"GAME_19_x_19"===e?D:void 0}(c).includes("".concat(e).concat(t))?this.drawIntersection(n,o,r):this.drawStarPoint(n,o,r):this.drawSide(e,t,n,o,r):this.drawCorner(e,t,n,o,r),s&&"STONE_NONE"!==s&&this.drawStone(n,o,r,s)}},{key:"drawSide",value:function(e,t,n,o,r){var i=this.props,a=i.mode,c=i.tileDimensions,s=q(a,"".concat(e).concat(t)),u=c.width*o,l=c.height*r,d=u+c.width/2,h=l+c.height/2,f=u+c.width,p=l+c.height;n.beginPath(),n.font="18px monospace","WEST"===s?(n.moveTo(d,l),n.lineTo(d,p),n.moveTo(d,h),n.lineTo(f,h),n.fillText(t,u,h+4)):"NORTH"===s?(n.moveTo(u,h),n.lineTo(f,h),n.moveTo(d,h),n.lineTo(d,p),n.fillText(e,d,18)):"EAST"===s?(n.moveTo(d,l),n.lineTo(d,p),n.moveTo(u,h),n.lineTo(d,h),n.fillText(t,f-20,h+4)):"SOUTH"===s&&(n.moveTo(u,h),n.lineTo(f,h),n.moveTo(d,l),n.lineTo(d,h),n.fillText(e,d,p-10)),n.stroke()}},{key:"drawCorner",value:function(e,t,n,o,r){var i=this.props,a=i.mode,c=i.tileDimensions,s=q(a,"".concat(e).concat(t)),u=c.width*o,l=c.height*r,d=u+c.width/2,h=l+c.height/2,f=u+c.width,p=l+c.height;n.beginPath(),n.font="18px monospace","NORTH_EAST"===s?(n.moveTo(u,h),n.lineTo(d,h),n.lineTo(d,p),n.fillText(e,d-4,18),n.fillText(t,f-20,h+4)):"SOUTH_EAST"===s?(n.moveTo(d,l),n.lineTo(d,h),n.lineTo(u,h),n.fillText(e,d-4,p-10),n.fillText(t,f-20,h)):"SOUTH_WEST"===s?(n.moveTo(f,h),n.lineTo(d,h),n.lineTo(d,l),n.fillText(e,d,p-10),n.fillText(t,u,h)):"NORTH_WEST"===s&&(n.moveTo(d,p),n.lineTo(d,h),n.lineTo(f,h),n.fillText(e,d,18),n.fillText(t,u,h)),n.stroke()}},{key:"drawIntersection",value:function(e,t,n){var o=this.props.tileDimensions,r=o.width*t,i=o.height*n,a=r+o.width/2,c=i+o.height/2,s=r+o.width,u=i+o.height;e.beginPath(),e.moveTo(r,c),e.lineTo(s,c),e.moveTo(a,i),e.lineTo(a,u),e.stroke()}},{key:"drawStarPoint",value:function(e,t,n){var o=this.props.tileDimensions,r=o.width*t,i=o.height*n,a=r+o.width/2,c=i+o.height/2,s=r+o.width,u=i+o.height;e.beginPath(),e.arc(a,c,5,0,2*Math.PI),e.fillStyle="#000000",e.fill(),e.moveTo(r,c),e.lineTo(s,c),e.moveTo(a,i),e.lineTo(a,u),e.stroke()}},{key:"drawStone",value:function(e,t,n,o){this.drawStoneInternal("STONE_BLACK"===o,e,t,n)}},{key:"drawStoneInternal",value:function(e,t,n,o){var r=this.props,i=r.stoneRadius,a=r.tileDimensions,c=a.width*n,s=a.height*o,u=c+a.width/2,l=s+a.height/2;t.lineWidth=1,t.beginPath(),t.arc(u,l,i,0,2*Math.PI),e?(t.fillStyle="#000000",t.fill()):(t.fillStyle="#FFFFFF",t.fill()),t.stroke()}},{key:"resetLastPreviewStone",value:function(e){var t=this.props.lastPreviewStone;if(t){var n=w(t[0]),o=Number.parseInt(t.substring(1))-1;this.clearCanvas(e,n,o),this.drawTile(t[0],t.substring(1),e,n,o)}}},{key:"showPreviewStone",value:function(e,t){var n=this.props,o=n.currentBoardState,r=n.lastPreviewStone,i=n.setLastPreviewStone,a=n.turnColor,c=this.getCanvasContextPresets(),s=v(e),u=t+1,l="".concat(s).concat(u);l!==r&&(this.resetLastPreviewStone(c),o[l]&&"STONE_NONE"!==o[l]||(i(l),this.drawStoneInternal("TURN_BLACK"===a,c,e,t)))}},{key:"clearCanvas",value:function(e,t,n){var o=this.props.tileDimensions,r=o.width*t,i=o.height*n;e.clearRect(r,i,o.width,o.height)}},{key:"renderRow",value:function(e,t,n){var o=this,r=e[0].substring(1);p.forEach(e,function(e,i){var a=e[0];o.drawTile(a,r,n,i,t)})}},{key:"renderWholeBoard",value:function(){var e=this,t=this.getCoordinates(),n=this.getCanvasContextPresets();p.forEach(t,function(t,o){e.renderRow(t,o,n)})}},{key:"getOffsetsWithinBounds",value:function(e){var t=e.x,n=e.y,o=this.props,r=o.tileDimensions,i=o.maxOffsets,a=function(e){var t=e.x,n=e.y,o=e.tileDimensions;return{col:Math.floor(t/o.width),row:Math.floor(n/o.height)}}({x:t,y:n,tileDimensions:r});if(a.col>i.col||a.row>i.row)throw new Error("Offsets out of bounds: ".concat(JSON.stringify(a),", bounds: ").concat(JSON.stringify(i)));return a}},{key:"calculatePreviewStone",value:function(e,t){var n;try{n=this.getOffsetsWithinBounds({x:e,y:t})}catch(o){return void console.log(o)}this.showPreviewStone(n.col,n.row)}},{key:"onClick",value:function(e){var t=this.props,n=t.currentBoardState,o=t.setStone,r=t.koWarning,i=t.suicideWarning;if(!r&&!i){var a;try{a=this.getOffsetsWithinBounds({x:e.clientX,y:e.clientY-this.props.capturesPanelHeight})}catch(e){return void console.log(e)}var c=function(e){return{colCoordinate:v(e.col),rowCoordinate:e.row+1}}(a),s="".concat(c.colCoordinate).concat(c.rowCoordinate);n[s]&&"STONE_NONE"!==n[s]||o(Object(h.a)({},c))}}},{key:"onMouseOut",value:function(){var e=this.getCanvasContextPresets();this.resetLastPreviewStone(e),this.props.setLastPreviewStone("")}},{key:"onMouseMove",value:function(e){var t=this.props,n=t.koWarning,o=t.suicideWarning;if(!n&&!o){var r=e.clientX,i=e.clientY;this.calculatePreviewStone(r,i-this.props.capturesPanelHeight)}}},{key:"render",value:function(){var e=this.props.boardDimensions;return r.a.createElement("canvas",{height:e.height,width:e.width,onMouseMove:this.onMouseMove,onMouseOut:this.onMouseOut,onClick:this.onClick,ref:"canvas"})}}]),t}(o.Component),ae=Object(c.b)(function(e){var t,n=e.game,o=n.boardDimensions,r=n.capturesPanelHeight,i=n.lastPreviewStone,a=n.maxOffsets,c=n.mode,s=n.tileDimensions,u=n.turnColor,l=n.koWarning,d=n.suicideWarning,h=e.board;return{alteredStones:h.alteredStones,capturesPanelHeight:r,currentBoardState:h.currentBoardState,lastPreviewStone:i,maxOffsets:a,mode:c,stoneRadius:(t=s.height,Math.floor(t*S/2)),tileDimensions:s,boardDimensions:o,turnColor:u,koWarning:l,suicideWarning:d}},function(e){return{setStone:function(t){var n=t.colCoordinate,o=t.rowCoordinate;e(re({colCoordinate:n,rowCoordinate:o}))},setLastPreviewStone:function(t){e(function(e){return{type:"SET_LAST_PREVIEW_STONE",payload:{coordinate:e}}}(t))}}})(ie),ce=function(e){function t(){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object($.a)(t,[{key:"getHumanReadableMode",value:function(){var e=this.props.mode;if("GAME_9_x_9"===e)return"9 x 9";if("GAME_13_x_13"===e)return"13 x 13";if("GAME_19_x_19"===e)return"19 x 19";throw new Error("No known mode selected")}},{key:"render",value:function(){var e=this.props,t=e.mode,n=e.setMode;return r.a.createElement("div",{id:"configuration"},r.a.createElement("h1",null,"Go Demo Board"),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Mode: ",this.getHumanReadableMode()),r.a.createElement("h4",null,"Turn Number: ",this.props.turnNumber)),r.a.createElement("form",null,r.a.createElement("select",{onChange:function(e){return n(e.target.value)},value:t},r.a.createElement("option",{value:"GAME_9_x_9"},"9 x 9"),r.a.createElement("option",{value:"GAME_13_x_13"},"13 x 13"),r.a.createElement("option",{value:"GAME_19_x_19"},"19 x 19")))))}}]),t}(o.Component),se=Object(c.b)(function(e){return{mode:e.game.mode,turnNumber:e.game.turnNumber}},function(e){return{setMode:function(t){e(function(e){return{type:"SET_MODE",payload:{mode:e}}}(t))}}})(ce),ue=(n(34),function(e){function t(){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object($.a)(t,[{key:"render",value:function(){var e=this.props,t=e.captures,n=e.displayColor;return r.a.createElement("div",{className:"captures-status"},r.a.createElement("h1",null,n," captures - ",t))}}]),t}(o.Component)),le=Object(c.b)(function(e,t){var n=e.game,o=n.blackCaptures,r=n.whiteCaptures,i="STONE_BLACK"===t.color;return{captures:i?o:r,displayColor:i?"Black":"White"}})(ue),de=function(e){function t(){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("captures-panel").clientHeight;this.props.setCapturePanelHeight(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"flex-container",id:"captures-panel"},r.a.createElement(le,{color:"STONE_BLACK"}),r.a.createElement(le,{color:"STONE_WHITE"}))}}]),t}(o.Component),he=Object(c.b)(null,function(e){return{setCapturePanelHeight:function(t){e(function(e){return{type:"SET_CAPTURE_PANEL_HEIGHT",payload:{capturesPanelHeight:e}}}(t))}}})(de),fe=function(e){function t(){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object($.a)(t,[{key:"getWarningClass",value:function(){var e=this.props,t=e.koWarning,n=e.suicideWarning;return t||n?"game-warning":""}},{key:"getWarningText",value:function(){var e=this.props,t=e.koWarning,n=e.suicideWarning;return t?"Move violates Ko rule!":n?"Move is suicidal!":""}},{key:"render",value:function(){return r.a.createElement("div",{className:this.getWarningClass()},r.a.createElement("h1",null,this.getWarningText()))}}]),t}(o.Component),pe=Object(c.b)(function(e){var t=e.game;return{koWarning:t.koWarning,suicideWarning:t.suicideWarning}})(fe),me=function(e){function t(e){var n;return Object(Z.a)(this,t),(n=Object(ee.a)(this,Object(te.a)(t).call(this,e))).updateWindowDimensions=n.updateWindowDimensions.bind(Object(ne.a)(n)),n.onClick=n.onClick.bind(Object(ne.a)(n)),n}return Object(oe.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.props.setWindowDimensions(window.innerWidth,window.innerHeight)}},{key:"onClick",value:function(){var e=this.props,t=e.koWarning,n=e.suicideWarning,o=e.resetWarnings;(t||n)&&o()}},{key:"render",value:function(){var e=this.props.canRender;return r.a.createElement("main",{onClick:this.onClick},r.a.createElement(he,null),r.a.createElement(pe,null),r.a.createElement("div",{className:"App flex-wrap-container"},r.a.createElement("div",{className:"board-container"},e&&r.a.createElement(ae,null),!e&&r.a.createElement("h1",null,"Please wait...")),r.a.createElement("div",{className:"configuration-container"},r.a.createElement(se,null))))}}]),t}(o.Component),ve=Object(c.b)(function(e){var t=e.game,n=t.canRender;return{mode:t.mode,canRender:n,koWarning:t.koWarning,suicideWarning:t.suicideWarning}},function(e){return{resetWarnings:function(){e({type:"RESET_WARNINGS"})},setWindowDimensions:function(t,n){e(function(e,t){return{type:"SET_WINDOW_DIMENSIONS",payload:{windowWidth:e,windowHeight:t}}}(t,n))}}})(me),we=function(e){var t=[Object(s.applyMiddleware)(u.a,d)],n=l.composeWithDevTools.apply(void 0,t),o=Object(s.combineReducers)({board:J,game:Q});return Object(s.createStore)(o,e,n)}(),ge=document.getElementById("root");a.a.render(r.a.createElement(c.a,{store:we},r.a.createElement(ve,null)),ge)}},[[24,1,2]]]);
//# sourceMappingURL=main.99f918f4.chunk.js.map