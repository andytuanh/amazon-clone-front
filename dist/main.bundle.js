!function(e){function t(t){for(var n,l,i=t[0],u=t[1],c=t[2],f=0,d=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={0:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;o.push([20,1]),r()}([,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStateValue=t.StateProvider=t.StateContext=void 0;var n,a=r(1),o=(n=a)&&n.__esModule?n:{default:n};var l=t.StateContext=(0,a.createContext)();t.StateProvider=function(e){var t=e.reducer,r=e.initialState,n=e.children;return o.default.createElement(l.Provider,{value:(0,a.useReducer)(t,r)},n)},t.useStateValue=function(){return(0,a.useContext)(l)}},,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var n=r(42);function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.initialState={basket:[],user:null};t.default=function(e,t){switch(t.type){case n.ADD_TO_BASKET:return i(i({},e),{},{basket:[].concat(a(e.basket),[t.item])});case n.REMOVE_FROM_BASKET:break;case"REMOVE_ALL":return{basket:[]};default:return e}}},,,,function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=d(r(1)),o=d(r(22));r(26);var l=d(r(28)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(56)),u=r(9),c=r(16),s=d(c);function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}var m=document.getElementById("root");o.default.render(a.default.createElement(a.default.StrictMode,null,a.default.createElement(u.StateProvider,{initialState:c.initialState,reducer:s.default},a.default.createElement(l.default,null))),m),i.unregister()},,,,,,function(e,t,r){var n=r(7),a=r(27);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},function(e,t,r){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(1));r(29);var a=r(18),o=c(r(36)),l=c(r(43)),i=c(r(49));r(53);var u=c(r(55));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(a.BrowserRouter,null,n.default.createElement("div",{className:"App"},n.default.createElement(a.Switch,null,n.default.createElement(a.Route,{path:"/checkout"},n.default.createElement(o.default,null),n.default.createElement("h1",null,"Checkout")),n.default.createElement(a.Route,{path:"/login"},n.default.createElement(o.default,null),n.default.createElement(i.default,null)),n.default.createElement(a.Route,{path:"/img"},n.default.createElement(o.default,null),n.default.createElement("div",{className:"bgImage"},n.default.createElement("img",{src:u.default,alt:""}))),n.default.createElement(a.Route,{path:"/"},n.default.createElement(o.default,null),n.default.createElement(l.default,null)))))}},function(e,t,r){var n=r(7),a=r(30);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},function(e,t,r){},,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(1));r(37);var a=r(18),o=u(r(39)),l=u(r(41)),i=r(9);r(16);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=c((0,i.useStateValue)(),1)[0].basket;return console.log(e),n.default.createElement("nav",{className:"header"},n.default.createElement(a.Link,{to:"/"},n.default.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),n.default.createElement("div",{className:"header__search"},n.default.createElement("input",{type:"text",className:"header__searchInput"}),n.default.createElement(o.default,{className:"header__searchIcon"})),n.default.createElement("div",{className:"header__nav"},n.default.createElement(a.Link,{to:"/login",className:"header__link"},n.default.createElement("div",{className:"header__option"},n.default.createElement("span",{className:"header__optionLineOne"},"Hello"),n.default.createElement("span",{className:"header__optionLineTwo"},"Sign In"))),n.default.createElement(a.Link,{to:"/",className:"header__link"},n.default.createElement("div",{className:"header__option"},n.default.createElement("span",{className:"header__optionLineOne"},"Orders"),n.default.createElement("span",{className:"header__optionLineTwo"},"& Returns"))),n.default.createElement(a.Link,{to:"/",className:"header__link"},n.default.createElement("div",{className:"header__option"},n.default.createElement("span",{className:"header__optionLineOne"},"Your"),n.default.createElement("span",{className:"header__optionLineTwo"},"Prime"))),n.default.createElement(a.Link,{to:"/checkout",className:"header__link"},n.default.createElement("div",{className:"header__optionBasket"},n.default.createElement(l.default,null),n.default.createElement("span",{className:"header__optionLineTwo header__basketCount"},e.length)))))}},function(e,t,r){var n=r(7),a=r(38);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},function(e,t,r){},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PRODUCT_LIST_REQUEST="PRODUCT_LIST_REQUEST",t.PRODUCT_LIST_SUCCESS="PRODUCT_LIST_SUCCESS",t.PRODUCT_LIST_FAIL="PRODUCT_LIST_FAIL",t.ADD_TO_BASKET="ADD_TO_BASKET",t.REMOVE_FROM_BASKET="REMOVE_FROM_BASKET"},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(1));r(44);var a=o(r(46));function o(e){return e&&e.__esModule?e:{default:e}}e.env.PUBLIC_URL;t.default=function(){return n.default.createElement("div",{className:"home"},n.default.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),n.default.createElement("div",{className:"home__row"},n.default.createElement(a.default,{id:"123",title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),n.default.createElement(a.default,{id:"124",title:"New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)",price:769,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._AC_SX342_.jpg"})),n.default.createElement("div",{className:"home__row"},n.default.createElement(a.default,{id:"125",title:'All New Kindle Paperwhite | Waterproof, 6" High-Resolution Display, 8 GB—with Special Offers—Plum',price:119.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81ceTxaisrL._AC_SL1500_.jpg"}),n.default.createElement(a.default,{id:"126",title:"Kalorik TKG M 3014 BS Vintage Style Polkadot Stand Mixer with 5L Bowl, Whisk, Dough Hook and Flat Beater Attachments, 6 Speeds, Stainless Steel, 1000 W, 5 liters, Red & White",price:69.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81ImEcaXGkL._AC_SX355_.jpg"}),n.default.createElement(a.default,{id:"127",title:"Introducing Blink Mini | Compact indoor plug-in smart security camera, 1080p HD video, motion detection, Works with Alexa | 1 Camera",price:34.99,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71VEryDkYKL._SX522_.jpg"})),n.default.createElement("div",{className:"home__row"},n.default.createElement(a.default,{id:"128",title:"Fire TV Stick 4K Ultra HD with Alexa Voice Remote | streaming media player",price:49.9,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51ea0oGhZUL._AC_SX679_.jpg"})))}}).call(this,r(17))},function(e,t,r){var n=r(7),a=r(45);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},function(e,t,r){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(1),o=(n=a)&&n.__esModule?n:{default:n};r(47);var l=r(9);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t=e.id,r=e.title,n=e.price,a=e.rating,u=e.image,c=i((0,l.useStateValue)(),2),s=(c[0].basket,c[1]);return o.default.createElement("div",{className:"product"},o.default.createElement("div",{className:"product__info"},o.default.createElement("p",null,r),o.default.createElement("p",{className:"product__price"},o.default.createElement("small",null,"£"),o.default.createElement("strong",null,n)),o.default.createElement("div",{className:"product__rating"},Array(a).fill().map((function(e,t){return o.default.createElement("p",{key:t},"🌟")})))),o.default.createElement("p",null),o.default.createElement("img",{src:u,alt:""}),o.default.createElement("button",{onClick:function(){console.log("Add item"),s({type:"ADD_TO_BASKET",item:{id:t,title:r,price:n,rating:a,image:u}})}},"Add to basket"))}},function(e,t,r){var n=r(7),a=r(48);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},function(e,t,r){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(1)),a=l(r(50));r(51);var o=r(9);function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=i((0,o.useStateValue)(),2),t=(e[0].basket,e[1]);return n.default.createElement("div",{className:"login"},n.default.createElement("p",null,"Click the button below to clear the basket ",n.default.createElement(a.default,{onClick:function(){t({type:"REMOVE_ALL"})},className:"deleteIcon"})))}},,function(e,t,r){var n=r(7),a=r(52);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},function(e,t,r){},function(e,t,r){var n=r(7),a=r(54);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},function(e,t,r){},function(e,t,r){"use strict";r.r(t),t.default=r.p+"783e20bc63109526f0ce44a3aa32c2d3.jpg"},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.register=function(t){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(e.env.PUBLIC_URL,"/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var a=r.headers.get("content-type");404===r.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):n(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):n(a,t)}))}},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))};var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}}).call(this,r(17))}]);
//# sourceMappingURL=main.bundle.js.map