(this["webpackJsonptensorflowjs-object-detection"]=this["webpackJsonptensorflowjs-object-detection"]||[]).push([[0],{100:function(e,t){},132:function(e,t){},133:function(e,t){},175:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),o=n(87),i=n.n(o),r=n(14),s=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then((function(t){e.current.srcObject=t,e.current.onloadedmetadata=function(){o(!0)}}))}),[e]),a},u=n(88),f=function(e){var t=Object(c.useState)(),n=Object(r.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){u.a.load(e).then((function(e){o(e)}))}),[e]),a},l=n(11),d=n.n(l),b=function(e){var t=e.score.toFixed(4);return e.class+", score: "+t},v=function(e,t){var n=t.current.getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height);var c="16px sans-serif";n.font=c,n.textBaseline="top",e.forEach((function(e){var t=e.bbox[0],a=e.bbox[1],o=e.bbox[2],i=e.bbox[3];n.strokeStyle="#00FFFF",n.lineWidth=4,n.strokeRect(t,a,o,i),n.fillStyle="#00FFFF";var r=n.measureText(b(e)).width,s=parseInt(c,10);n.fillRect(t,a,r+4,s+4)})),e.forEach((function(e){var t=e.bbox[0],c=e.bbox[1];n.fillStyle="#000000",n.fillText(b(e),t,c)}))},h=function(e,t,n,a){Object(c.useEffect)((function(){e&&a&&function e(t,n,c){var a;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,d.a.awrap(t.detect(n.current));case 2:a=o.sent,v(a,c),requestAnimationFrame((function(){e(t,n,c)}));case 5:case"end":return o.stop()}}))}(e,t,n)}),[n,e,a,t])},x=n(46),m=n.n(x),j=document.getElementById("root");i.a.render(a.a.createElement((function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=s(e),o=f("/object-detect/model_web");return h(o,e,t,n),a.a.createElement(a.a.Fragment,null,a.a.createElement("video",{className:m.a.fixed,autoPlay:!0,playsInline:!0,muted:!0,ref:e,width:"600",height:"500"}),a.a.createElement("canvas",{className:m.a.fixed,ref:t,width:"600",height:"500"}))}),null),j)},46:function(e,t,n){e.exports={fixed:"styles_fixed__v-bnh"}},89:function(e,t,n){e.exports=n(178)},98:function(e,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.b4fdcf93.chunk.js.map