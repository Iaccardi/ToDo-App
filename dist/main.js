(()=>{"use strict";var n={890:(n,r,t)=>{t.d(r,{Z:()=>d});var e=t(81),o=t.n(e),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap);"]),a.push([n.id,"*{\r\n    margin:0;\r\n    padding:0;\r\n    box-sizing:content-box;\r\n    font-family:'Roboto';\r\n    background-color:(var(--bg-color));\r\n\r\n}\r\n\r\n:root {\r\n    --bg-color: #FDF5DF;\r\n    --header-color: #0b1c5e;\r\n    --red-color:#F92C85;\r\n}\r\n\r\n\r\n\r\n.main-title {\r\n    \r\n        color: #bc2e1e;\r\n        text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4, 2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd, 3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4, 5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd, 6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4, 8px 7px 0px #5dabcd;\r\n        color: #bc2e1e;\r\n        font-size:80px;\r\n        \r\n}\r\n\r\nbody {\r\n    font-size:20px;\r\n    display:grid;\r\n    grid-template-columns: 1fr 3fr;\r\n    grid-template-rows:1fr 3fr;\r\n    height:100vh;\r\n    width: 100vw;\r\n    overflow:auto;\r\n\r\n}\r\n\r\n.header {\r\n    grid-column: 1 / 3;\r\n    grid-row:1/2;\r\n    display:flex;\r\n    flex-grow:0;\r\n    justify-content:center;\r\n    align-items:center;\r\n    width:100%;\r\n    background-color: var(--bg-color);\r\n    border-bottom: 6px solid black;\r\n    height:auto;\r\n    padding-bottom:15px;\r\n    \r\n}\r\n\r\n.sidebar {\r\n    grid-column: 1/2;\r\n    grid-row: 2/3;\r\n    width: 30vw;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    padding: 20px 0px;\r\n    gap:20px;\r\n    height:auto;\r\n    background-color: var(--header-color);\r\n    color: var(--bg-color);\r\n    border:3px solid var(--bg-color);\r\n}\r\n\r\n.sidebar h1 {\r\n    font-size:50px;\r\n    font-weight:900;\r\n    font-family:'Roboto';\r\n}\r\n\r\n.main-content {\r\n    padding-top:30px;\r\n    grid-column: 2/3;\r\n    grid-row: 2/3;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    background-color: var(--bg-color);\r\n}\r\n\r\n.main-content h1 {\r\n    font-size:35px;\r\n    font-weight:900;\r\n    color: var(--header-color);\r\n    padding-bottom:30px;\r\n    font-size:50px;\r\n}\r\n\r\n.project-list {\r\n    width:60%;\r\n    height:300px;\r\n    border:6px solid var(--bg-color);\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    padding:20px 0;\r\n}\r\n\r\nlabel {\r\n    font-weight:900;\r\n\r\n}\r\n\r\n.project {\r\n    width:100%;\r\n    height:20%;\r\n    border:5px solid white;\r\n    text-align:center;\r\n    display:flex;\r\n    justify-content:center;\r\n    align-items:center;\r\n    font-size:30px;\r\n    font-weight:800;\r\n}\r\n\r\n.project:hover {\r\n    background-color: black;\r\n}\r\n\r\n.todo-box {\r\n    height:fit-content;\r\n    width:100%;\r\n    display:flex;\r\n    justify-content:space-evenly;\r\n    flex-direction:column;\r\n    align-items:center;\r\n    border:1px solid white;\r\n    text-align: center;\r\n    gap:20px;\r\n    padding:20px 0px;\r\n    background-color: var(--header-color);\r\n    box-shadow:0px 6px 15px 5px rgba(0,0,0,0.55);\r\n    margin-bottom:5px;\r\n    \r\n\r\n\r\n}\r\n\r\n.todo-box p {\r\n    font-size:20px;\r\n    font-weight:400;\r\n    word-wrap: break-word;\r\n    overflow:hidden;\r\n    color:white;\r\n}\r\n\r\n.todo-box h1 {\r\n    font-size:30px;\r\n    font-weight:900;\r\n    color:var(--bg-color);\r\n}\r\n\r\n#todo-form {\r\n    visibility:hidden;\r\n    padding:0px 10px;\r\n    display:flex;\r\n    gap:10px;\r\n    align-items:center;\r\n    justify-content:center;\r\n    width:100%;\r\n}\r\n\r\n#notasks {\r\n    visibility: visible;\r\n}\r\n\r\n.titlebox {\r\n    display:flex;\r\n    justify-content:space-between;\r\n    width:55%;\r\n}\r\n\r\n.descriptionbox {\r\n    text-align:center;\r\n    gap:10px;\r\n\r\n}\r\n\r\n#main-content-box {\r\n    width:100%;\r\n    text-align:center;\r\n    font-weight: 900;\r\n}\r\n\r\n.priority-high {\r\n    border:1px solid red;\r\n}\r\n\r\n.priority-low {\r\n    border:1px solid yellow;\r\n}\r\n\r\n.icon {\r\n    width:30px;\r\n    height:30px;\r\n    padding:0px 10px;\r\n}\r\n\r\n.controls {\r\n    padding-top:10px;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n}\r\n\r\n.icon-small {\r\n    height:17px;\r\n    width:19px;\r\n    padding:6px;\r\n    border:3px solid red;\r\n    border-radius:10px;\r\n    position:relative;\r\n    left:10px;\r\n}\r\n\r\n#addProject {\r\n    border:3px solid white;\r\n    color:var(--bg-color);\r\n    left:10px;\r\n    position:relative;\r\n}\r\n\r\n#addProject::placeholder {\r\n    color:white;\r\n}\r\n\r\nform input {\r\n    height:30px;\r\n    border:1px solid black;\r\n    padding-left:10px;\r\n    font-size:16px;\r\n}\r\n\r\n#priority {\r\n    height:30px;\r\n    \r\n}\r\n\r\n#submitProject {\r\n    \r\nbox-shadow: 0px 1px 0px 0px #fff6af;\r\nbackground:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);\r\nbackground-color:#ffec64;\r\nborder-radius:6px;\r\nborder:1px solid #ffaa22;\r\ndisplay:inline-block;\r\ncursor:pointer;\r\ncolor:#333333;\r\nfont-family:Arial;\r\nfont-size:15px;\r\nfont-weight:bold;\r\npadding:6px 16px;\r\ntext-decoration:none;\r\ntext-shadow:0px 1px 0px #ffee66;\r\nposition:relative;\r\nleft:10px;\r\n    \r\n}\r\n\r\n#submitProject:hover {\r\nbackground:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);\r\nbackground-color:#ffab23;\r\n}\r\n#submitProject:active {\r\nposition:relative;\r\ntop:1px;\r\n}\r\n\r\n#add-task {\r\n    box-shadow:inset 0px 1px 0px 0px #cf866c;\r\n\tbackground:linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);\r\n\tbackground-color:#d0451b;\r\n\tborder-radius:3px;\r\n\tborder:1px solid #942911;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#ffffff;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tpadding:6px 19px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #854629;\r\n}\r\n\r\n#add-task:hover {\r\n\tbackground:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);\r\n\tbackground-color:#bc3315;\r\n}\r\n#add-task:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n\r\n}\r\n\r\n.swirl-out-bck {\r\n\t-webkit-animation: swirl-out-bck 1.2s ease-in both;\r\n\t        animation: swirl-out-bck 1.2s ease-in both;\r\n}\r\n\r\n.slide-in-fwd-center {\r\n\t-webkit-animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n\t        animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n@-webkit-keyframes slide-in-fwd-center {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px);\r\n              transform: translateZ(-1400px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0);\r\n              transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @keyframes slide-in-fwd-center {\r\n    0% {\r\n      -webkit-transform: translateZ(-1400px);\r\n              transform: translateZ(-1400px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateZ(0);\r\n              transform: translateZ(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @-webkit-keyframes swirl-out-bck {\r\n    0% {\r\n      -webkit-transform: rotate(0) scale(1);\r\n              transform: rotate(0) scale(1);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(-540deg) scale(0);\r\n              transform: rotate(-540deg) scale(0);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  @keyframes swirl-out-bck {\r\n    0% {\r\n      -webkit-transform: rotate(0) scale(1);\r\n              transform: rotate(0) scale(1);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(-540deg) scale(0);\r\n              transform: rotate(-540deg) scale(0);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  ",""]);const d=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);e&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],l=e.base?c[0]+e.base:c[0],p=i[l]||0,s="".concat(l," ").concat(p);i[l]=p+1;var f=t(s),x={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(x);else{var u=o(x,e);e.byIndex=d,r.splice(d,0,{identifier:s,updater:u,references:1})}a.push(s)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);r[d].references--}for(var c=e(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=c}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0,(()=>{function n(n,r,t,e){this.title=n,this.priority=r,this.description=t,this.dueDate=e}var r=t(379),e=t.n(r),o=t(795),i=t.n(o),a=t(569),d=t.n(a),c=t(565),l=t.n(c),p=t(216),s=t.n(p),f=t(589),x=t.n(f),u=t(890),m={};m.styleTagTransform=x(),m.setAttributes=l(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=s(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;let h,b=document.getElementById("project-display");document.getElementById("submitProject").addEventListener("click",(function(){if(""!=g.value){let n=g.value,r={name:n,arr:[],shiftedarr:[]};v.push(r);let t=document.createElement("div");b.appendChild(t),t.innerText=n,t.classList.add("project"),function(n){let r=document.createElement("img");r.src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png",r.classList.add("icon-small"),n.appendChild(r),r.addEventListener("click",(function(r){b.removeChild(n),Z()}))}(t),g.value="",function(){for(let n=0;n<y.length;n++)y[n].addEventListener("click",(function(n){let r=n.target.textContent;for(let n=0;n<v.length;n++)r===v[n].name&&(t=v[n],k.textContent=t.name,w.style.visibility="visible",h=t.name,function(n){Z(),P(n)}(t),function(n){if(n.shiftedarr.length>0)for(let r=0;r<n.shiftedarr.length;r++)B(n.shiftedarr[r].title,n.shiftedarr[r].priority,n.shiftedarr[r].description,n.shiftedarr[r].duedate)}(t));var t}))}()}}));let g=document.getElementById("addProject"),v=[],y=document.getElementsByClassName("project"),w=document.getElementById("todo-form"),k=document.getElementById("main-content-heading"),C=document.getElementById("main-content-box"),E=document.getElementById("add-task"),j=document.getElementById("todo-title"),I=document.getElementById("todo-description"),L=document.getElementById("priority"),z=document.getElementById("duedate");function B(n,r,t,e){let o=document.createElement("div");C.appendChild(o),o.classList.add("todo-box"),o.classList.add("slide-in-fwd-center");let i=document.createElement("h1"),a=document.createElement("h1"),d=document.createElement("h1"),c=document.createElement("h1");i.textContent="Title ",a.textContent="Description ",d.textContent="Priority ",c.textContent="Due Date ";let l=document.createElement("p"),p=document.createElement("p"),s=document.createElement("p"),f=document.createElement("p");l.textContent=n,p.textContent=t,s.textContent=r,f.textContent=e;let x=document.createElement("div");x.classList.add("titlebox");let u=document.createElement("div");u.classList.add("descriptionbox"),o.appendChild(x),x.appendChild(i),i.appendChild(l),x.appendChild(d),d.appendChild(p),x.appendChild(c),c.appendChild(f),c.appendChild(f),o.appendChild(u),u.appendChild(a),a.appendChild(s),function(n){let r=document.createElement("div");r.classList.add("controls");let t=document.createElement("img");t.src="https://cdn-icons.flaticon.com/png/512/4436/premium/4436481.png?token=exp=1655133087~hmac=698d000a02811e51708ada3cf8c6e395",t.classList.add("icon"),r.appendChild(t),n.appendChild(r),t.addEventListener("click",(function(){C.removeChild(n)})),function(n,r){let t=document.createElement("img");t.src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png",t.classList.add("icon"),r.appendChild(t),t.addEventListener("click",(function(){addSwirl(),C.removeChild(n)}))}(n,r)}(o)}function Z(){let n=document.getElementById("main-content-box");for(;n.firstChild;)n.removeChild(n.lastChild)}function P(n){if(n.arr.length>=0)for(let r=0;r<n.arr.length;r++){B(n.arr[r].title,n.arr[r].priority,n.arr[r].description,n.arr[r].dueDate);let t=n.arr.shift();n.shiftedarr.push(t)}}E.addEventListener("click",(function(){for(let r=0;r<v.length;r++)if(v[r].name==k.textContent){let t=new n(j.value,I.value,L.value,z.value);v[r].arr.push(t),P(v[r]),j.value=" ",I.value=""}}))})()})();