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
})({"src/components/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = header;

function header(text) {
  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "h2";
  return "<".concat(tag, ">").concat(text, "</").concat(tag, ">");
}
},{}],"src/components/tabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demoTabs = demoTabs;
exports.default = createTabs;
exports.destroyTabs = destroyTabs;
exports.init = init;

// Helper function for switching the tabs
function switchTabs() {
  var currentTab = this.dataset.tab,
      tabsContainer = this.parentElement.parentElement,
      currentlyActive = Array.from(tabsContainer.querySelectorAll(".active"));
  currentlyActive.map(function (active) {
    active.classList.remove("active");
  });
  this.classList.add("active");
  tabsContainer.querySelector(".tab-panel-".concat(currentTab)).classList.add("active");
} // Helper function for creating demo data for tabs


function demoTabs() {
  return [{
    tabname: "Demo tab 1",
    tabtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }, {
    tabname: "Potoo tab 2",
    tabtext: "Potoo ipsum dolor sit amet, consectetur adipiscing elit."
  }, {
    tabname: "Puppy tab 3",
    tabtext: "Puppy ipsum dolor sit amet, consectetur adipiscing elit."
  }];
} // Create a set of tabs


function createTabs(data) {
  // The extra joins below are required because templates use toString,
  // which joins using a comma by default. This tells it to join using nothing.
  // See https://stackoverflow.com/questions/45812160/unexpected-comma-using-map/45812277
  // Builds the tab controls
  var tabControls = data.map(function (tab, index) {
    var tabname = tab.tabname;
    var activeClass = '';

    if (0 === index) {
      activeClass = 'active';
    }

    return "<button class=\"tab-control-".concat(index, " tab-control ").concat(activeClass, "\" data-tab=\"").concat(index, "\">").concat(tabname, "</button>");
  }).join(''); // Builds the tab panels

  var tabPanels = data.map(function (tab, index) {
    var tabtext = tab.tabtext;
    var activeClass = '';

    if (0 === index) {
      activeClass = 'active';
    }

    return "<div class=\"tab-panel-".concat(index, " tab-panel ").concat(activeClass, "\">").concat(tabtext, "</div>");
  }).join(''); // Return controls, panels, and wrapper markup

  return "\n\t\t<section class=\"tab-container\">\n\t\t\t<div class=\"tab-controls\">\n\t\t\t\t".concat(tabControls, "\n\t\t\t</div>\n\t\t\t<div class=\"tab-panels\">\n\t\t\t\t").concat(tabPanels, "\n\t\t\t</div>\n\t\t</section>\n\t");
}

function destroyTabs(tabSet) {
  var tabs = tabSet.querySelectorAll(".tab-control");
  var tabsArray = Array.from(tabs);
  tabsArray.map(function (tab) {
    tab.removeEventListener("click", switchTabs());
  });
  tabSet.remove;
}

function init() {
  var tabs = document.querySelectorAll(".tab-control");
  var tabsArray = Array.from(tabs);
  tabsArray.map(function (tab) {
    tab.addEventListener("click", switchTabs);
  });
}
},{}],"src/components/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demoForm = demoForm;
exports.default = createForm;

// Helper function for switching the tabs
function formAction() {} // Helper function for creating demo data for tabs


function demoForm() {
  return [{
    label: "Demo Text",
    name: "name",
    type: "input"
  }, {
    label: "Demo Radio",
    name: "favorite-food",
    type: "radio",
    options: ["Hay", "Carrot", "Cake"]
  }, {
    label: "Demo Checkbox",
    name: "favorite-animal",
    type: "checkbox",
    options: ["Bunny", "Kitty", "Puppy"]
  }];
} // Create single field


function createField(fieldObject) {
  var fieldIdentifier = fieldObject.name;

  if (fieldObject.id) {
    fieldIdentifier = fieldObject.id;
  }

  return "\n\t\t<label class=\"form-field form-field-type-".concat(fieldObject.type, "\">\n\t\t\t<span class=\"form-label\">").concat(fieldObject.label, "</span>\n\t\t\t<input id=\"").concat(fieldIdentifier, "\" type=\"").concat(fieldObject.type, "\" value=\"").concat(fieldIdentifier, "\" name=\"").concat(fieldObject.name, "\" />\n\t\t</label>\n\t");
} // Create grouped field


function createGroupedField(fieldObject) {
  var groupedFields = '';
  fieldObject.options.map(function (option) {
    var optionObject = {
      label: option,
      name: fieldObject.name,
      id: option,
      type: fieldObject.type
    };
    groupedFields += createField(optionObject);
  });
  return "\n\t\t<fieldset class=\"form-fieldset form-field-type-".concat(fieldObject.type, "\">\n\t\t\t<legend class=\"form-legend\">").concat(fieldObject.label, "</legend>\n\t\t\t").concat(groupedFields, "\n\t\t</fieldset>\n\t");
} // Create fields
// Create a form


function createForm(data) {
  // The extra joins below are required because templates use toString,
  // which joins using a comma by default. This tells it to join using nothing.
  // See https://stackoverflow.com/questions/45812160/unexpected-comma-using-map/45812277
  var tabFields = '';
  data.map(function (data) {
    if ("radio" === data.type || "checkbox" === data.type) {
      tabFields += createGroupedField(data);
    } else {
      tabFields += createField(data);
    }
  }); // Return controls, panels, and wrapper markup

  return "\n\t\t<form class=\"form-container\">\n\t\t\t".concat(tabFields, "\n\t\t</form>\n\t");
}
/*export function destroyForm( form ) {
	const tabs = tabSet.querySelectorAll( `.tab-control` );
	const tabsArray = Array.from( tabs );

	tabsArray.map( tab => {
		tab.removeEventListener( `click`, switchTabs() );
	});

	tabSet.remove;
}

export function init() {
	const tabs = document.querySelectorAll( `.tab-control` );
	const tabsArray = Array.from( tabs );

	tabsArray.map( tab => {
		tab.addEventListener( `click`, switchTabs );
	});
}*/
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _header = _interopRequireDefault(require("./components/header"));

var _tabs = _interopRequireWildcard(require("./components/tabs"));

var _form = _interopRequireWildcard(require("./components/form"));

require("./styles.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UI = {
  render: function render(content) {
    var where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "beforeend";
    var container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};
UI.render((0, _header.default)("JS for WordPress Bootcamp UI Library"));
UI.render((0, _tabs.default)((0, _tabs.demoTabs)()));
UI.render((0, _form.default)((0, _form.demoForm)()));
(0, _tabs.init)();
},{"./components/header":"src/components/header.js","./components/tabs":"src/components/tabs.js","./components/form":"src/components/form.js","./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62112" + '/');

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
      }); // Enable HMR for CSS by default.

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
      } else {
        window.location.reload();
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map