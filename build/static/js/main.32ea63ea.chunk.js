(this.webpackJsonpshagun=this.webpackJsonpshagun||[]).push([[0],{11:function(t,e,i){t.exports=i(19)},16:function(t,e,i){},17:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var a=i(1),s=i.n(a),o=i(5),n=i.n(o),c=(i(16),i(17),i(10)),r=i(6),h=i(7),u=i(3),l=i.n(u),p=function(){function t(e,i,a){Object(r.a)(this,t),this.sketch=a,this.position=this.sketch.createVector(this.sketch.random(this.sketch.width),this.sketch.random(this.sketch.height)),this.target=this.sketch.createVector(e,i),this.velocity=l.a.Vector.random2D(),this.acceleration=l.a.Vector.random2D(),this.zeroVector=this.sketch.createVector(0,0),this.radius=8,this.maxSpeed=12,this.maxForce=4,this.maxMagnitude=50}return Object(h.a)(t,[{key:"update",value:function(){this.position.add(this.velocity),this.velocity.add(this.acceleration),this.acceleration.mult(0)}},{key:"show",value:function(){this.sketch.stroke(255),this.sketch.fill(0),this.sketch.ellipse(this.position.x,this.position.y,this.radius,this.radius)}},{key:"applyAllForces",value:function(){this.applyMouseFleeForce(),this.applyArriveForce()}},{key:"applyMouseFleeForce",value:function(){var t=this.sketch.pmouseX,e=this.sketch.pmouseY,i=this.sketch.mouseX,a=this.sketch.mouseY;if(t!==i||e!==a){var s=this.sketch.createVector(i,a),o=this.flee(s);this.applyForce(o)}}},{key:"applyArriveForce",value:function(){var t=this.arrive(this.target);this.applyForce(t)}},{key:"applyForce",value:function(t){this.acceleration.add(t)}},{key:"flee",value:function(t){var e=l.a.Vector.sub(t,this.position);if(e.mag()<this.maxMagnitude){e.setMag(this.maxSpeed),e.mult(-1);var i=l.a.Vector.sub(e,this.velocity);return i.limit(this.maxForce),i.mult(7)}return this.zeroVector}},{key:"arrive",value:function(t){var e=l.a.Vector.sub(t,this.position),i=e.mag(),a=this.maxSpeed;i<this.maxMagnitude&&(a=this.sketch.map(i,0,100,0,this.maxSpeed)),e.setMag(a);var s=l.a.Vector.sub(e,this.velocity);return s.limit(this.maxForce),s}}]),t}(),f=i(8),m=i.n(f),d=function(t,e){return function(i){var a,s,o,n,r=[];i.preload=function(){a=i.loadFont(m.a)};i.setup=function(){var h=t.offsetWidth,u=t.offsetHeight;i.createCanvas(h,u),function(t,h){s=[];var u=e.split(" "),l=Object(c.a)(u,3),f=l[0],m=l[1],d=l[2];t>h?(o=a.textToPoints("".concat(f," ").concat(m),.04*t,.33*h,.12*t),n=a.textToPoints(d,.05*t,.83*h,.27*t)):(o=a.textToPoints(f,.01*t,.3*h,.3*t),n=a.textToPoints(m,.01*t,.5*h,.25*t),r=a.textToPoints(d,.01*t,.7*h,.27*t)),o.forEach((function(t){s.push(new p(t.x,t.y,i))})),n.forEach((function(t){s.push(new p(t.x,t.y,i))})),r.forEach((function(t){s.push(new p(t.x,t.y,i))}))}(h,u),i.frameRate(30)},i.draw=function(){i.clear(),s.forEach((function(t){t.update(),t.applyAllForces(),t.show()}))}}},v=i(9),y=function(){var t=s.a.useRef(null);return s.a.useEffect((function(){var e=t.current;new l.a(d(e,"Happy Birthday Shagun"),e)})),s.a.createElement("div",{className:"main"},s.a.createElement("div",{ref:t}),s.a.createElement(v.a,{color:"#000",num:200,type:"fountain",bg:!0}))};n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root"))},8:function(t,e,i){t.exports=i.p+"static/media/AvenirNextLTPro-Demi.de28f71e.otf"}},[[11,1,2]]]);
//# sourceMappingURL=main.32ea63ea.chunk.js.map