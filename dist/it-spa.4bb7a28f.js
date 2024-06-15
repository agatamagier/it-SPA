// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/bootstrap/dist/css/bootstrap.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/it-spa.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/views/Registration.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registration = Registration;
var _RegisterButton = require("../registration/RegisterButton");
var _RegistrationManager = require("../registration/RegistrationManager.js");
function Registration() {
  var section = document.createElement("section");
  section.classList.add("form-container");
  section.innerHTML = "\n  <div class=\"wrapper\">\n        <h1 class=\"header\">Registration</h1>\n        <form action=\"#\">\n            <div clss=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\">\n            </div>\n            <div clss=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\">\n            </div>\n            <div clss=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\">\n            </div>\n            <div class=\"text-center\">\n            </div>\n        </form>\n    </div>\n    ";
  var registerButton = (0, _RegisterButton.RegisterButton)(function () {
    return _RegistrationManager.registrationManager.registerUser();
  });
  section.querySelector('form').append(registerButton);
  return section;
}
},{"../registration/RegisterButton":"src/registration/RegisterButton.js","../registration/RegistrationManager.js":"src/registration/RegistrationManager.js"}],"src/registration/RegistrationManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationManager = void 0;
var _Registration = require("../views/Registration");
var key = "it_spa_user";
var registrationManager = exports.registrationManager = {
  registerUser: function registerUser() {
    var main = document.querySelector("main");
    var name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    var registeredUsers = new Array();
    registeredUsers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    if (registeredUsers.some(function (user) {
      return user.email == email;
    })) {
      alert("Niepoprawne dane.");
    } else {
      registeredUsers.push({
        name: name,
        email: email,
        password: password
      });
      localStorage.setItem("users", JSON.stringify(registeredUsers));
    }
  },
  loginUser: function loginUser() {
    var email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    var registeredUsers = new Array();
    registeredUsers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    if (registeredUsers.some(function (user) {
      return user.email === email && user.password === password;
    })) {
      alert("Login successfull");
      var currentUser = registeredUsers.filter(function (user) {
        return user.email == email && password == password;
      })[0];
      localStorage.setItem("name", currentUser.name);
    } else {
      alert("Niewłaściwy login, zarejestruj się.");
    }
  },
  logOut: function logOut() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
};
},{"../views/Registration":"src/views/Registration.js"}],"src/views/Login.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = Login;
var _RegisterButton = require("../registration/RegisterButton");
var _RegistrationManager = require("../registration/RegistrationManager.js");
function Login() {
  var section = document.createElement("section");
  section.classList.add("form-container");
  section.innerHTML = "\n  <div class=\"wrapper\">\n        <h1 class=\"header\">Login</h1>\n        <form action=\"#\">\n            <div clss=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\">\n            </div>\n            <div clss=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\">\n            </div>\n            <div class=\"text-center\">\n            </div>\n        </form>\n    </div>\n    ";

  //   const btn = document.querySelector("button#save.btn.btn-primary");
  //   btn.addEventListener("click", alert("click"));
  var registerButton = (0, _RegisterButton.RegisterButton)(function () {
    return _RegistrationManager.registrationManager.loginUser();
  });
  registerButton.textContent = "Login";
  section.querySelector("form").append(registerButton);
  return section;
}
},{"../registration/RegisterButton":"src/registration/RegisterButton.js","../registration/RegistrationManager.js":"src/registration/RegistrationManager.js"}],"src/registration/RegisterButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterButton = RegisterButton;
var _Login = require("../views/Login");
function RegisterButton(callback) {
  var registerButton = document.createElement("button");
  registerButton.textContent = "Register";
  registerButton.classList.add("btn", "btn-primary", "btn-register");
  registerButton.addEventListener("click", callback);
  return registerButton;
}
},{"../views/Login":"src/views/Login.js"}],"src/assets/elephant.jpg":[function(require,module,exports) {
module.exports = "/elephant.39e2730d.jpg";
},{}],"src/assets/3cats.jpg":[function(require,module,exports) {
module.exports = "/3cats.b3532005.jpg";
},{}],"src/assets/dogmasage.jpg":[function(require,module,exports) {
module.exports = "/dogmasage.bb8331c7.jpg";
},{}],"src/assets/capybaras.jpg":[function(require,module,exports) {
module.exports = "/capybaras.dfe91e70.jpg";
},{}],"src/views/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = Home;
var _RegisterButton = require("../registration/RegisterButton");
var _RegistrationManager = require("../registration/RegistrationManager.js");
function Home() {
  var section = document.createElement("section");
  var user = localStorage.getItem("name");
  section.innerHTML = "\n    <h1 class=\"header\">SPA dla IT</h1>\n    <div class=\"home\">\n      <div class=\"home-text\">\n      <h3>Witaj w hotelu IT SPA ".concat(user || "", "</h3>\n      <p>Wszyscy programi\u015Bci i programistki lubi\u0105 do nas przyje\u017Cd\u017Ca\u0107.</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. </p>\n      </div>\n      <div class=\"home-img\">\n        <img src=\"").concat(require("../assets/elephant.jpg"), "\"/>\n        <img src=\"").concat(require("../assets/3cats.jpg"), "\"/>\n        <img src=\"").concat(require("../assets/dogmasage.jpg"), "\"/>\n        <img src=\"").concat(require("../assets/capybaras.jpg"), "\"/>\n      </div>\n    </div>\n    \n\n    ");
  var logOutButton = (0, _RegisterButton.RegisterButton)(function () {
    _RegistrationManager.registrationManager.logOut();
    location.reload();
  });
  logOutButton.innerText = "Log out";
  logOutButton.classList.remove("btn-register", "btn-primary");
  logOutButton.classList.add("btn", "btn-outline-danger");
  section.querySelector(".home-text").append(logOutButton);
  return section;
}
},{"../registration/RegisterButton":"src/registration/RegisterButton.js","../registration/RegistrationManager.js":"src/registration/RegistrationManager.js","../assets/elephant.jpg":"src/assets/elephant.jpg","../assets/3cats.jpg":"src/assets/3cats.jpg","../assets/dogmasage.jpg":"src/assets/dogmasage.jpg","../assets/capybaras.jpg":"src/assets/capybaras.jpg"}],"src/cart/AddToCartButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddToCartButton = AddToCartButton;
function AddToCartButton(callback) {
  var addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to cart";
  addToCartButton.classList.add("btn-add");
  addToCartButton.addEventListener("click", callback);
  return addToCartButton;
}
},{}],"src/navigation/NavButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavButton = NavButton;
function NavButton(text, componentFunction) {
  var navButton = document.createElement("button");
  navButton.classList.add("btn-nav");
  navButton.textContent = text;
  navButton.addEventListener("click", function () {
    var navigateEvent = new CustomEvent("navigate", {
      detail: componentFunction
    });
    document.body.dispatchEvent(navigateEvent);
  });
  return navButton;
}
},{}],"src/assets/1cat.jpg":[function(require,module,exports) {
module.exports = "/1cat.d997f989.jpg";
},{}],"src/views/RoomDetails.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomDetails = RoomDetails;
function RoomDetails(room) {
  var section = document.createElement("section");
  section.classList.add("detail", "room", "flip-card");
  section.innerHTML = "\n  <div class=\"flip-card-inner\">\n  <div class=\"flip-card-front\">\n  <h2 class=\"header\">".concat(room.name, "</h2>\n <p>").concat(room.price.toFixed(2), " PLN</p>\n <p>Ilo\u015B\u0107 \u0142\xF3\u017Cek: ").concat(room.beds, " </p>\n <p>Maxymalna ilo\u015B\u0107 go\u015Bci: ").concat(room.guests, " </p>\n  </div>\n  <div class=\"flip-card-back\">\n  <ul>\n    <li>Lorem ipsum dolor sit amet. </li>\n    <li>Sed eiusmod tempor incidunt. </li>\n    <li>Ut enim ad minim veniam. </li>\n    <li>Corporis suscipit laboriosam.</li>\n    </ul>\n </div>\n </div>\n ");
  var img = document.createElement("img");
  img.src = require("../assets/1cat.jpg");
  img.width = "500";
  section.querySelector('.flip-card-front').append(img);
  return section;
}
},{"../assets/1cat.jpg":"src/assets/1cat.jpg"}],"src/cart/cart-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartManager = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var key = "it_spa_cart";
var cartManager = exports.cartManager = {
  add: function add(item, date) {
    var cart = localStorage.getItem(key);
    var content;
    if (cart === null) {
      var start = document.querySelector(".date input#start").value;
      var end = document.querySelector(".date input#start").value;
      content = _defineProperty({}, item.name, {
        price: item.price,
        quantity: 1,
        img: item.img,
        start: date.start,
        end: date.end
      });
    } else {
      content = JSON.parse(cart);
      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        Object.assign(content, _defineProperty({}, item.name, {
          price: item.price,
          quantity: 1,
          start: item.start,
          end: item.end
        }));
      }
    }
    localStorage.setItem(key, JSON.stringify(content));
    //location.reload();
  },
  remove: function remove(item) {
    var cart = localStorage.getItem(key);
    if (cart !== null) {
      var content = JSON.parse(cart);
      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }
      localStorage.setItem(key, JSON.stringify(content));
      //location.reload();
    }
  },
  getAll: function getAll() {
    var cart = localStorage.getItem(key);
    if (cart === null) {
      return [];
    } else {
      var content = JSON.parse(cart);
      return Object.entries(content).map(function (entry) {
        var _entry = _slicedToArray(entry, 2),
          name = _entry[0],
          value = _entry[1];
        return _objectSpread({
          name: name
        }, value);
      });
    }
  },
  getTotalPrice: function getTotalPrice() {
    var cart = localStorage.getItem(key);
    if (cart === null) {
      return "0.00";
    } else {
      var content = JSON.parse(cart);
      return Object.values(content).reduce(function (totalPrice, item) {
        return totalPrice + item.quantity * item.price;
      }, 0).toFixed(2);
    }
  }
};
},{}],"src/views/RoomList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomList = RoomList;
var _AddToCartButton = require("../cart/AddToCartButton");
var _NavButton = require("../navigation/NavButton");
var _RoomDetails = require("./RoomDetails");
var _cartManager = require("../cart/cart-manager");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function RoomList() {
  var section = document.createElement("section");
  var main = document.querySelector("main");
  section.innerHTML = "\n        <h1 class=\"header\">Room List</h2>\n        <p class=\"loading text-danger\">Ladowanie pokoi...</p>\n    ";
  var ul = document.createElement("ul");
  ul.classList.add("rooms-container");
  //http://localhost:3000/rooms
  // Pobieramy pokoje (surowe dane)
  fetch("http://localhost:3000/rooms").then(function (response) {
    return response.json();
  }).then(function (rooms) {
    // Wytwarzamy elementy listy
    var list = rooms.map(function (room) {
      var li = document.createElement("li");
      li.classList.add("room-item");
      li.innerHTML = "\n        <img src=\"".concat(require("../assets/capybaras.jpg"), "\"/>\n                    <h4 class=\"name\">").concat(room.name, "</h4>\n                    \n                    \n                    <p class=\"price\">\n                        ").concat(room.price.toFixed(2), " PLN\n                    </p>\n                    <div class='date'>\n                    <label for=\"start\">Start date:\n                    <input type=\"date\" id=\"start\" name=\"trip-start\" value=\"").concat(new Date(), "\" min=\"").concat(new Date().toJSON().slice(0, 10), "\" max=\"2050-12-31\" required />\n                    <span class=\"validity\"></span>\n                    </label>\n                    <label for=\"end\">End date:\n                    <input type=\"date\" id=\"end\" name=\"trip-start\" value=\"").concat(new Date().toJSON().slice(0, 10), "\" min=\"").concat(new Date(), "\" min=\"").concat(new Date().toJSON().slice(0, 10), "\" max=\"2050-12-31\" required />\n                    <span class=\"validity\"></span>\n                    </label>\n                    </div>\n                 \n                ");

      // let start = document.querySelector(".date input#start").value;
      // let end = document.querySelector(".date input#start").value;
      // let date = { start: start, end: end };

      var readMoreButton = (0, _NavButton.NavButton)("Read more", function () {
        return (0, _RoomDetails.RoomDetails)(room);
      });
      var addToCartButton = (0, _AddToCartButton.AddToCartButton)(function () {
        alert("".concat(room.name, " dodany do koszyka"));
        _cartManager.cartManager.add(room);
      });
      readMoreButton.classList.add("read-more");
      li.append(readMoreButton, addToCartButton);
      return li;
    });

    // ul.append(lis[0]. list[1], ...);
    ul.append.apply(ul, _toConsumableArray(list));
    section.append(ul);
    section.querySelector(".loading").remove();
  });
  return section;
}
},{"../cart/AddToCartButton":"src/cart/AddToCartButton.js","../navigation/NavButton":"src/navigation/NavButton.js","./RoomDetails":"src/views/RoomDetails.js","../cart/cart-manager":"src/cart/cart-manager.js","../assets/capybaras.jpg":"src/assets/capybaras.jpg"}],"src/cart/RemoveFromCartButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveFromCartButton = RemoveFromCartButton;
var _Cart = require("../views/Cart");
function RemoveFromCartButton(callback) {
  var removeFromCartButton = document.createElement("button");
  removeFromCartButton.classList.add("btn", "btn-secondary");
  removeFromCartButton.textContent = "Remove";
  removeFromCartButton.addEventListener("click", function () {
    callback();

    // Wymuszamy odswiezenie widoku koszyka
    var navigateEvent = new CustomEvent("navigate", {
      detail: _Cart.Cart
    });
    document.body.dispatchEvent(navigateEvent);
  });
  return removeFromCartButton;
}
},{"../views/Cart":"src/views/Cart.js"}],"src/views/Cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = Cart;
var _cartManager = require("../cart/cart-manager");
var _RemoveFromCartButton = require("../cart/RemoveFromCartButton");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Cart() {
  var _section$querySelecto;
  var section = document.createElement("section");
  section.classList.add("cart", "wrapper");
  section.innerHTML = "\n        <h1 class=\"header\">Koszyk</h1>\n        <p>Przegladaj zawartosc swojego koszyka.</p>\n        <table class=\"table\">\n            <tr>\n                <th>Name</th>\n                <th>Quantity</th>\n                <th>Price</th>\n                <th>Date</th>\n                <th>Remove</th>\n            </tr>\n        </table>\n\n    ";
  var tableRows = _cartManager.cartManager.getAll().map(function (item) {
    var tr = document.createElement("tr");
    tr.innerHTML = "\n            <td>".concat(item.name, "</td>\n            <td>").concat(item.quantity, "</td>\n            <td>").concat((item.quantity * item.price).toFixed(2), "</td>\n            <td>xx-xx-xxxx</td>\n            <td></td>\n        ");
    var removeFromCartButton = (0, _RemoveFromCartButton.RemoveFromCartButton)(function () {
      _cartManager.cartManager.remove(item);
    });
    tr.lastElementChild.append(removeFromCartButton);
    return tr;
  });
  var tableFooter = document.createElement("tr");
  tableFooter.innerHTML = "\n        <td></td>\n        <td></td>\n        <td>\n            <strong>".concat(_cartManager.cartManager.getTotalPrice(), " PLN</strong>\n        </td>\n        <td></td>\n    ");
  (_section$querySelecto = section.querySelector("table")).append.apply(_section$querySelecto, _toConsumableArray(tableRows).concat([tableFooter]));
  return section;
}
},{"../cart/cart-manager":"src/cart/cart-manager.js","../cart/RemoveFromCartButton":"src/cart/RemoveFromCartButton.js"}],"src/navigation/MiniCartBtn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniCartBtn = MiniCartBtn;
var _Cart = require("../views/Cart");
function MiniCartBtn() {
  var miniCartBtn = document.createElement("div");
  var body = document.querySelector("body");
  var main = document.querySelector("main");
  var closeBtn = document.querySelector(".action-btn.close");
  var checkOutBtn = document.querySelector(".action-btn.check-out");
  miniCartBtn.classList.add("icon-cart");
  miniCartBtn.innerHTML = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"cart\"><path d=\"M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z\"></path></svg>\n  \n  ";
  miniCartBtn.addEventListener("click", function () {
    return body.classList.toggle("showCartTab");
  });
  closeBtn.addEventListener("click", function () {
    return body.classList.toggle("showCartTab");
  });
  checkOutBtn.addEventListener("click", function () {
    main.innerHTML = "";
    main.append((0, _Cart.Cart)());
    body.classList.toggle("showCartTab");
  });
  return miniCartBtn;
}
},{"../views/Cart":"src/views/Cart.js"}],"src/views/TreatmentDetails.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreatmentDetails = TreatmentDetails;
function TreatmentDetails(treatmentId) {
  var section = document.createElement("section");
  section.classList.add('detail', 'treatment');
  fetch("http://localhost:3000/treatments/".concat(treatmentId)).then(function (response) {
    return response.json();
  }).then(function (treatment) {
    section.innerHTML = "\n   <h2 class=\"header\">".concat(treatment.name, "</h2>\n   <p>Cena: ").concat(treatment.price.toFixed(2), " PLN</p>\n   <p>Obszar zabiegu: ").concat(treatment.area, " \uD83D\uDC86\u200D\u2640\uFE0F </p>\n   <p>Czas zabiegu: ").concat(treatment.time, " miunutes </p>\n   ");
  });
  return section;
}
},{}],"src/views/TreatmentList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreatmentList = TreatmentList;
var _NavButton = require("../navigation/NavButton");
var _TreatmentDetails = require("./TreatmentDetails");
var _cartManager = require("../cart/cart-manager");
var _AddToCartButton = require("../cart/AddToCartButton");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TreatmentList() {
  var section = document.createElement("section");
  section.innerHTML = "\n        <h1 class=\"header\">Treatment List</h1>\n        <p class=\"loading text-danger\">Ladowanie zabieg\xF3w...</p>\n    ";
  var ul = document.createElement("ul");
  ul.classList.add('treatments-wrapper');
  fetch("http://localhost:3000/treatments").then(function (response) {
    return response.json();
  }).then(function (treatments) {
    var list = treatments.map(function (treatment) {
      var li = document.createElement("li");
      li.classList.add("treatment-item");
      li.innerHTML = "\n        <h4 class=\"name\">".concat(treatment.name, "</h4>\n        <img class=\"treatment-img\" src=\"").concat(require("../assets/capybaras.jpg"), "\"/>\n        <p class=\"price\">\n                        <span>").concat(treatment.price.toFixed(2), " PLN</span>\n                    </p>\n                    \n                ");
      var readMoreButton = (0, _NavButton.NavButton)("Read more", function () {
        return (0, _TreatmentDetails.TreatmentDetails)(treatment.id);
      });
      readMoreButton.classList.add("read-more");
      var addToCartButton = (0, _AddToCartButton.AddToCartButton)(function () {
        alert("".concat(treatment.name, " dodany do koszyka"));
        _cartManager.cartManager.add(treatment);
      });
      li.lastElementChild.append(readMoreButton, addToCartButton);
      return li;
    });
    ul.append.apply(ul, _toConsumableArray(list));
    section.append(ul);
    section.querySelector(".loading").remove();
  });
  return section;
}
},{"../navigation/NavButton":"src/navigation/NavButton.js","./TreatmentDetails":"src/views/TreatmentDetails.js","../cart/cart-manager":"src/cart/cart-manager.js","../cart/AddToCartButton":"src/cart/AddToCartButton.js","../assets/capybaras.jpg":"src/assets/capybaras.jpg"}],"src/navigation/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = Nav;
var _Home = require("../views/Home");
var _RoomList = require("../views/RoomList");
var _Registration = require("../views/Registration");
var _Login = require("../views/Login");
var _NavButton = require("./NavButton");
var _MiniCartBtn = require("./MiniCartBtn");
var _TreatmentList = require("../views/TreatmentList");
var _Cart = require("../views/Cart");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var navItems = [{
  text: "Home",
  component: _Home.Home
}, {
  text: "Rooms",
  component: _RoomList.RoomList
}, {
  text: "Treatments",
  component: _TreatmentList.TreatmentList
}, {
  text: "Cart",
  component: _Cart.Cart
}, {
  text: "Registration",
  component: _Registration.Registration
}, {
  text: "Login",
  component: _Login.Login
}];
function Nav() {
  var nav = document.createElement("nav");
  var navButtons = navItems.map(function (navItem) {
    return (0, _NavButton.NavButton)(navItem.text, navItem.component);
  });
  nav.append.apply(nav, _toConsumableArray(navButtons).concat([(0, _MiniCartBtn.MiniCartBtn)()]));
  return nav;
}
},{"../views/Home":"src/views/Home.js","../views/RoomList":"src/views/RoomList.js","../views/Registration":"src/views/Registration.js","../views/Login":"src/views/Login.js","./NavButton":"src/navigation/NavButton.js","./MiniCartBtn":"src/navigation/MiniCartBtn.js","../views/TreatmentList":"src/views/TreatmentList.js","../views/Cart":"src/views/Cart.js"}],"src/views/MiniCart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniCart = MiniCart;
var _cartManager = require("../cart/cart-manager");
var _RemoveFromCartButton = require("../cart/RemoveFromCartButton");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function MiniCart() {
  var _miniCart$querySelect;
  var miniCart = document.createElement("div");
  miniCart.classList.add("mini-cart");
  miniCart.innerHTML = "\n        <h3 class=\"mini-cart--title\">Koszyk</h3>\n        <div class=\"mini-cart--list\">\n            <ul></ul>\n        </div>\n        <div class=\"actions\">\n        <button class=\"action-btn close\">Zamknij</button>\n        <button class=\"action-btn check-out\">Do kasy</button>\n        </div>\n    \n  ";
  var cart = localStorage.getItem("it_spa_cart");
  console.log("cart", cart);
  var cartItems = _cartManager.cartManager.getAll().map(function (item) {
    var li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = "\n            <div class=\"item-image\">\n            <img src=\"".concat(require("../assets/1cat.jpg"), "\"/>\n            </div>\n            <p class=\"item-name\">").concat(item.name, "</p>\n            <p class=\"item-price\">").concat((item.quantity * item.price).toFixed(2), "</p>\n            <div class=\"item-quantity\">\n            <span class=\"minus\"><</span>\n            <span>").concat(item.quantity, "</span>\n            <span class=\"plus\">></span>\n            </div>\n            \n        ");
    var removeFromCartButton = (0, _RemoveFromCartButton.RemoveFromCartButton)(function () {
      _cartManager.cartManager.remove(item);
    });
    removeFromCartButton.innerHTML = "<i class=\"fa fa-trash-o\" style=\"font-size:24px;color:red\"></i>\n    ";
    li.append(removeFromCartButton);
    return li;
  });
  (_miniCart$querySelect = miniCart.querySelector(".mini-cart--list")).append.apply(_miniCart$querySelect, _toConsumableArray(cartItems));
  return miniCart;
}
},{"../cart/cart-manager":"src/cart/cart-manager.js","../cart/RemoveFromCartButton":"src/cart/RemoveFromCartButton.js","../assets/1cat.jpg":"src/assets/1cat.jpg"}],"src/it-spa.js":[function(require,module,exports) {
"use strict";

require("bootstrap/dist/css/bootstrap.css");
require("./it-spa.css");
var _Nav = require("./navigation/Nav");
var _Home = require("./views/Home");
var _MiniCart = require("./views/MiniCart");
var main = document.querySelector("main");
main.classList.add("main-container");
var body = document.querySelector("body");
body.append((0, _MiniCart.MiniCart)());
main.before((0, _Nav.Nav)());
main.append((0, _Home.Home)());
document.body.addEventListener("navigate", function (event) {
  var Component = event.detail;
  main.innerHTML = "";
  main.append(Component());
});
},{"bootstrap/dist/css/bootstrap.css":"node_modules/bootstrap/dist/css/bootstrap.css","./it-spa.css":"src/it-spa.css","./navigation/Nav":"src/navigation/Nav.js","./views/Home":"src/views/Home.js","./views/MiniCart":"src/views/MiniCart.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58051" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/it-spa.js"], null)
//# sourceMappingURL=/it-spa.4bb7a28f.js.map