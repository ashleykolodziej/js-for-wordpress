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
})({"node_modules/wpapi/lib/util/object-reduce.js":[function(require,module,exports) {
'use strict';
/**
 * Utility method to permit Array#reduce-like operations over objects
 *
 * This is likely to be slightly more inefficient than using lodash.reduce,
 * but results in ~50kb less size in the resulting bundled code before
 * minification and ~12kb of savings with minification.
 *
 * Unlike lodash.reduce(), the iterator and initial value properties are NOT
 * optional: this is done to simplify the code, this module is not intended to
 * be a full replacement for lodash.reduce and instead prioritizes simplicity
 * for a specific common case.
 *
 * @module util/object-reduce
 * @private
 * @param {Object} obj An object of key-value pairs
 * @param {Function} iterator A function to use to reduce the object
 * @param {*} initialState The initial value to pass to the reducer function
 * @returns The result of the reduction operation
 */

module.exports = (obj, iterator, initialState) => Object.keys(obj).reduce((memo, key) => iterator(memo, obj[key], key), initialState);
},{}],"node_modules/wpapi/lib/data/default-routes.json":[function(require,module,exports) {
module.exports = {
  "/": {
    "namespace": "",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {}
      }
    }]
  },
  "/oembed/1.0": {
    "namespace": "oembed/1.0",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "namespace": {},
        "context": {}
      }
    }]
  },
  "/oembed/1.0/embed": {
    "namespace": "oembed/1.0",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "url": {},
        "format": {},
        "maxwidth": {}
      }
    }]
  },
  "/oembed/1.0/proxy": {
    "namespace": "oembed/1.0",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "url": {},
        "format": {},
        "maxwidth": {},
        "maxheight": {},
        "discover": {}
      }
    }]
  },
  "/wp/v2": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "namespace": {},
        "context": {}
      }
    }]
  },
  "/wp/v2/posts": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "after": {},
        "author": {},
        "author_exclude": {},
        "before": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {},
        "slug": {},
        "status": {},
        "categories": {},
        "categories_exclude": {},
        "tags": {},
        "tags_exclude": {},
        "sticky": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/posts/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {},
        "password": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/posts/(?P<parent>[\\d]+)/revisions": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {}
      }
    }]
  },
  "/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "id": {},
        "context": {}
      }
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/posts/(?P<id>[\\d]+)/autosaves": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "context": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/posts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "id": {},
        "context": {}
      }
    }]
  },
  "/wp/v2/pages": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "after": {},
        "author": {},
        "author_exclude": {},
        "before": {},
        "exclude": {},
        "include": {},
        "menu_order": {},
        "offset": {},
        "order": {},
        "orderby": {},
        "parent": {},
        "parent_exclude": {},
        "slug": {},
        "status": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/pages/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {},
        "password": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/pages/(?P<parent>[\\d]+)/revisions": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {}
      }
    }]
  },
  "/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "id": {},
        "context": {}
      }
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/pages/(?P<id>[\\d]+)/autosaves": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "context": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/pages/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "id": {},
        "context": {}
      }
    }]
  },
  "/wp/v2/media": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "after": {},
        "author": {},
        "author_exclude": {},
        "before": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {},
        "parent": {},
        "parent_exclude": {},
        "slug": {},
        "status": {},
        "media_type": {},
        "mime_type": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/media/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/blocks": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "after": {},
        "before": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {},
        "slug": {},
        "status": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/blocks/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {},
        "password": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/blocks/(?P<id>[\\d]+)/autosaves": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "context": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/blocks/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "parent": {},
        "id": {},
        "context": {}
      }
    }]
  },
  "/wp/v2/types": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {}
      }
    }]
  },
  "/wp/v2/types/(?P<type>[\\w-]+)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "type": {},
        "context": {}
      }
    }]
  },
  "/wp/v2/statuses": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {}
      }
    }]
  },
  "/wp/v2/statuses/(?P<status>[\\w-]+)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "status": {},
        "context": {}
      }
    }]
  },
  "/wp/v2/taxonomies": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "type": {}
      }
    }]
  },
  "/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "taxonomy": {},
        "context": {}
      }
    }]
  },
  "/wp/v2/categories": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "exclude": {},
        "include": {},
        "order": {},
        "orderby": {},
        "hide_empty": {},
        "parent": {},
        "post": {},
        "slug": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/categories/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/tags": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {},
        "hide_empty": {},
        "post": {},
        "slug": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/tags/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/users": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {},
        "slug": {},
        "roles": {},
        "who": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/users/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/users/me": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/comments": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "after": {},
        "author": {},
        "author_exclude": {},
        "author_email": {},
        "before": {},
        "exclude": {},
        "include": {},
        "offset": {},
        "order": {},
        "orderby": {},
        "parent": {},
        "parent_exclude": {},
        "post": {},
        "status": {},
        "type": {},
        "password": {}
      }
    }, {
      "methods": ["POST"],
      "args": {}
    }]
  },
  "/wp/v2/comments/(?P<id>[\\d]+)": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "id": {},
        "context": {},
        "password": {}
      }
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }, {
      "methods": ["DELETE"],
      "args": {}
    }]
  },
  "/wp/v2/search": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "type": {},
        "subtype": {}
      }
    }]
  },
  "/wp/v2/block-renderer/(?P<name>core/block)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "name": {},
        "context": {},
        "attributes": {},
        "post_id": {}
      }
    }]
  },
  "/wp/v2/block-renderer/(?P<name>core/latest-comments)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "name": {},
        "context": {},
        "attributes": {},
        "post_id": {}
      }
    }]
  },
  "/wp/v2/block-renderer/(?P<name>core/archives)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "name": {},
        "context": {},
        "attributes": {},
        "post_id": {}
      }
    }]
  },
  "/wp/v2/block-renderer/(?P<name>core/categories)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "name": {},
        "context": {},
        "attributes": {},
        "post_id": {}
      }
    }]
  },
  "/wp/v2/block-renderer/(?P<name>core/latest-posts)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "name": {},
        "context": {},
        "attributes": {},
        "post_id": {}
      }
    }]
  },
  "/wp/v2/block-renderer/(?P<name>core/shortcode)": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "name": {},
        "context": {},
        "attributes": {},
        "post_id": {}
      }
    }]
  },
  "/wp/v2/settings": {
    "namespace": "wp/v2",
    "methods": ["GET", "POST", "PUT", "PATCH"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {}
    }, {
      "methods": ["POST", "PUT", "PATCH"],
      "args": {}
    }]
  },
  "/wp/v2/themes": {
    "namespace": "wp/v2",
    "methods": ["GET"],
    "endpoints": [{
      "methods": ["GET"],
      "args": {
        "context": {},
        "page": {},
        "per_page": {},
        "search": {},
        "status": {}
      }
    }]
  }
};
},{}],"node_modules/wpapi/lib/util/named-group-regexp.js":[function(require,module,exports) {
/**
 * @module util/named-group-regexp
 */
'use strict';

const pattern = [// Capture group start
'\\(\\?', // Capture group name begins either `P<`, `<` or `'`
'(?:P<|<|\')', // Everything up to the next `>`` or `'` (depending) will be the capture group name
'([^>\']+)', // Capture group end
'[>\']', // Get everything up to the end of the capture group: this is the RegExp used
// when matching URLs to this route, which we can use for validation purposes.
'([^\\)]*)', // Capture group end
'\\)'].join('');
module.exports = {
  /**
   * String representation of the exported Regular Expression; we construct this
   * RegExp from a string to enable more detailed annotation and permutation
   *
   * @prop {String} pattern
   */
  pattern: pattern,

  /**
   * Regular Expression to identify a capture group in PCRE formats
   * `(?<name>regex)`, `(?'name'regex)` or `(?P<name>regex)` (see
   * regular-expressions.info/refext.html)
   *
   * @prop {RegExp} namedGroupRE
   */
  namedGroupRE: new RegExp(pattern)
};
},{}],"node_modules/wpapi/lib/util/split-path.js":[function(require,module,exports) {
/**
 * @module util/split-path
 */
'use strict';

const namedGroupPattern = require('./named-group-regexp').pattern; // Convert capture groups to non-matching groups, because all capture groups
// are included in the resulting array when an RE is passed to `.split()`
// (We re-use the existing named group's capture pattern instead of creating
// a new RegExp just for this purpose)


const patternWithoutSubgroups = namedGroupPattern.replace(/([^\\])\(([^?])/g, '$1(?:$2'); // Make a new RegExp using the same pattern as one single unified capture group,
// so the match as a whole will be preserved after `.split()`. Permit non-slash
// characters before or after the named capture group, although those components
// will not yield functioning setters.

const namedGroupRE = new RegExp('([^/]*' + patternWithoutSubgroups + '[^/]*)');
/**
 * Divide a route string up into hierarchical components by breaking it apart
 * on forward slash characters.
 *
 * There are plugins (including Jetpack) that register routes with regex capture
 * groups which also contain forward slashes, so those groups have to be pulled
 * out first before the remainder of the string can be .split() as normal.
 *
 * @param {String} pathStr A route path string to break into components
 * @returns {String[]} An array of route component strings
 */

module.exports = pathStr => pathStr // Divide a string like "/some/path/(?P<with_named_groups>)/etc" into an
// array `[ "/some/path/", "(?P<with_named_groups>)", "/etc" ]`.
.split(namedGroupRE) // Then, reduce through the array of parts, splitting any non-capture-group
// parts on forward slashes and discarding empty strings to create the final
// array of path components.
.reduce((components, part) => {
  if (!part) {
    // Ignore empty strings parts
    return components;
  }

  if (namedGroupRE.test(part)) {
    // Include named capture groups as-is
    return components.concat(part);
  } // Split the part on / and filter out empty strings


  return components.concat(part.split('/').filter(Boolean));
}, []);
},{"./named-group-regexp":"node_modules/wpapi/lib/util/named-group-regexp.js"}],"node_modules/wpapi/lib/util/ensure.js":[function(require,module,exports) {
'use strict';
/**
 * Ensure that a property is present in an object, initializing it to a default
 * value if it is not already defined. Modifies the provided object by reference.
 *
 * @module util/ensure
 * @param {object} obj              The object in which to ensure a property exists
 * @param {string} prop             The property key to ensure
 * @param {}       propDefaultValue The default value for the property
 * @returns {void}
 */

module.exports = (obj, prop, propDefaultValue) => {
  if (obj && obj[prop] === undefined) {
    obj[prop] = propDefaultValue;
  }
};
},{}],"node_modules/wpapi/lib/route-tree.js":[function(require,module,exports) {
/**
 * @module route-tree
 */
'use strict';

const namedGroupRE = require('./util/named-group-regexp').namedGroupRE;

const splitPath = require('./util/split-path');

const ensure = require('./util/ensure');

const objectReduce = require('./util/object-reduce');
/**
 * Method to use when reducing route components array.
 *
 * @private
 * @param {object} routeObj     A route definition object (set via .bind partial application)
 * @param {object} topLevel     The top-level route tree object for this set of routes (set
 *                              via .bind partial application)
 * @param {object} parentLevel  The memo object, which is mutated as the reducer adds
 *                              a new level handler for each level in the route
 * @param {string} component    The string defining this route component
 * @param {number} idx          The index of this component within the components array
 * @param {string[]} components The array of all components
 * @returns {object} The child object of the level being reduced
 */


function reduceRouteComponents(routeObj, topLevel, parentLevel, component, idx, components) {
  // Check to see if this component is a dynamic URL segment (i.e. defined by
  // a named capture group regular expression). namedGroup will be `null` if
  // the regexp does not match, or else an array defining the RegExp match, e.g.
  // [
  //   'P<id>[\\d]+)',
  //   'id', // Name of the group
  //   '[\\d]+', // regular expression for this URL segment's contents
  //   index: 15,
  //   input: '/wp/v2/posts/(?P<id>[\\d]+)'
  // ]
  const namedGroup = component.match(namedGroupRE); // Pull out references to the relevant indices of the match, for utility:
  // `null` checking is necessary in case the component did not match the RE,
  // hence the `namedGroup &&`.

  const groupName = namedGroup && namedGroup[1];
  const groupPattern = namedGroup && namedGroup[2]; // When branching based on a dynamic capture group we used the group's RE
  // pattern as the unique identifier: this is done because the same group
  // could be assigned different names in different endpoint handlers, e.g.
  // "id" for posts/:id vs "parent_id" for posts/:parent_id/revisions.
  //
  // There is an edge case where groupPattern will be "" if we are registering
  // a custom route via `.registerRoute` that does not include parameter
  // validation. In this case we assume the groupName is sufficiently unique,
  // and fall back to `|| groupName` for the levelKey string.

  const levelKey = namedGroup ? groupPattern || groupName : component; // Level name on the other hand takes its value from the group's name, if
  // defined, and falls back to the component string to handle situations where
  // `component` is a collection (e.g. "revisions")

  const levelName = namedGroup ? groupName : component; // Check whether we have a preexisting node at this level of the tree, and
  // create a new level object if not. The component string is included so that
  // validators can throw meaningful errors as appropriate.

  const currentLevel = parentLevel[levelKey] || {
    component: component,
    namedGroup: namedGroup ? true : false,
    level: idx,
    names: []
  }; // A level's "names" correspond to the list of strings which could describe
  // an endpoint's component setter functions: "id", "revisions", etc.

  if (currentLevel.names.indexOf(levelName) < 0) {
    currentLevel.names.push(levelName);
  } // A level's validate method is called to check whether a value being set
  // on the request URL is of the proper type for the location in which it
  // is specified. If a group pattern was found, the validator checks whether
  // the input string exactly matches the group pattern.


  const groupPatternRE = groupPattern === '' ? // If groupPattern is an empty string, accept any input without validation
  /.*/ : // Otherwise, validate against the group pattern or the component string
  new RegExp(groupPattern ? '^' + groupPattern + '$' : component, 'i'); // Only one validate function is maintained for each node, because each node
  // is defined either by a string literal or by a specific regular expression.

  currentLevel.validate = input => groupPatternRE.test(input); // Check to see whether to expect more nodes within this branch of the tree,


  if (components[idx + 1]) {
    // and create a "children" object to hold those nodes if necessary
    currentLevel.children = currentLevel.children || {};
  } else {
    // At leaf nodes, specify the method capabilities of this endpoint
    currentLevel.methods = (routeObj.methods || []).map(str => str.toLowerCase()); // Ensure HEAD is included whenever GET is supported: the API automatically
    // adds support for HEAD if you have GET

    if (currentLevel.methods.indexOf('get') > -1 && currentLevel.methods.indexOf('head') === -1) {
      currentLevel.methods.push('head');
    } // At leaf nodes also flag (at the top level) what arguments are
    // available to GET requests, so that we may automatically apply the
    // appropriate parameter mixins


    if (routeObj.endpoints) {
      topLevel._getArgs = topLevel._getArgs || {};
      routeObj.endpoints.forEach(endpoint => {
        // `endpoint.methods` will be an array of methods like `[ 'GET' ]`: we
        // only care about GET for this exercise. Validating POST and PUT args
        // could be useful but is currently deemed to be out-of-scope.
        endpoint.methods.forEach(method => {
          if (method.toLowerCase() === 'get') {
            Object.keys(endpoint.args).forEach(argKey => {
              // Reference param definition objects in the top _getArgs dictionary
              topLevel._getArgs[argKey] = endpoint.args[argKey];
            });
          }
        });
      });
    }
  } // Return the child node object as the new "level"


  parentLevel[levelKey] = currentLevel;
  return currentLevel.children;
}
/**
 *
 * @private
 * @param {object}   namespaces The memo object that becomes a dictionary mapping API
 *                              namespaces to an object of the namespace's routes
 * @param {object}   routeObj   A route definition object
 * @param {string}   route      The string key of the `routeObj` route object
 * @returns {object} The namespaces dictionary memo object
 */


function reduceRouteTree(namespaces, routeObj, route) {
  const nsForRoute = routeObj.namespace;
  const routeString = route // Strip the namespace from the route string (all routes should have the
  // format `/namespace/other/stuff`) @TODO: Validate this assumption
  .replace('/' + nsForRoute + '/', '') // Also strip any trailing "/?": the slash is already optional and a single
  // question mark would break the regex parser
  .replace(/\/\?$/, ''); // Split the routes up into hierarchical route components

  const routeComponents = splitPath(routeString); // Do not make a namespace group for the API root
  // Do not add the namespace root to its own group
  // Do not take any action if routeString is empty

  if (!nsForRoute || '/' + nsForRoute === route || !routeString) {
    return namespaces;
  } // Ensure that the namespace object for this namespace exists


  ensure(namespaces, nsForRoute, {}); // Get a local reference to namespace object

  const ns = namespaces[nsForRoute]; // The first element of the route tells us what type of resource this route
  // is for, e.g. "posts" or "comments": we build one handler per resource
  // type, so we group like resource paths together.

  const resource = routeComponents[0]; // @TODO: This code above currently precludes baseless routes, e.g.
  // myplugin/v2/(?P<resource>\w+) -- should those be supported?
  // Create an array to represent this resource, and ensure it is assigned
  // to the namespace object. The array will structure the "levels" (path
  // components and subresource types) of this resource's endpoint handler.

  ensure(ns, resource, {});
  const levels = ns[resource]; // Recurse through the route components, mutating levels with information about
  // each child node encountered while walking through the routes tree and what
  // arguments (parameters) are available for GET requests to this endpoint.

  routeComponents.reduce(reduceRouteComponents.bind(null, routeObj, levels), levels);
  return namespaces;
}
/**
 * Build a route tree by reducing over a routes definition object from the API
 * root endpoint response object
 *
 * @method build
 * @param {object} routes A dictionary of routes keyed by route regex strings
 * @returns {object} A dictionary, keyed by namespace, of resource handler
 * factory methods for each namespace's resources
 */


function buildRouteTree(routes) {
  return objectReduce(routes, reduceRouteTree, {});
}

module.exports = {
  build: buildRouteTree
};
},{"./util/named-group-regexp":"node_modules/wpapi/lib/util/named-group-regexp.js","./util/split-path":"node_modules/wpapi/lib/util/split-path.js","./util/ensure":"node_modules/wpapi/lib/util/ensure.js","./util/object-reduce":"node_modules/wpapi/lib/util/object-reduce.js"}],"node_modules/wpapi/lib/path-part-setter.js":[function(require,module,exports) {
/**
 * @module path-part-setter
 */
'use strict';
/**
 * Return a function to set part of the request URL path.
 *
 * Path part setter methods may be either dynamic (*i.e.* may represent a
 * "named group") or non-dynamic (representing a static part of the URL, which
 * is usually a collection endpoint of some sort). Which type of function is
 * returned depends on whether a given route has one or many sub-resources.
 *
 * @alias module:lib/path-part-setter.create
 * @param {Object} node An object representing a level of an endpoint path hierarchy
 * @returns {Function} A path part setter function
 */

function createPathPartSetter(node) {
  // Local references to `node` properties used by returned functions
  const nodeLevel = node.level;
  const nodeName = node.names[0];
  const supportedMethods = node.methods || [];
  const dynamicChildren = node.children ? Object.keys(node.children).map(key => node.children[key]).filter(childNode => childNode.namedGroup === true) : [];
  const dynamicChild = dynamicChildren.length === 1 && dynamicChildren[0];
  const dynamicChildLevel = dynamicChild && dynamicChild.level;

  if (node.namedGroup) {
    /**
     * Set a dymanic (named-group) path part of a query URL.
     *
     * @example
     *
     *     // id() is a dynamic path part setter:
     *     wp.posts().id( 7 ); // Get posts/7
     *
     * @chainable
     * @param  {String|Number} val The path part value to set
     * @returns {Object} The handler instance (for chaining)
     */
    return function (val) {
      this.setPathPart(nodeLevel, val);

      if (supportedMethods.length) {
        this._supportedMethods = supportedMethods;
      }

      return this;
    };
  } else {
    /**
     * Set a non-dymanic (non-named-group) path part of a query URL, and
     * set the value of a subresource if an input value is provided and
     * exactly one named-group child node exists.
     *
     * @example
     *
     *     // revisions() is a non-dynamic path part setter:
     *     wp.posts().id( 4 ).revisions();       // Get posts/4/revisions
     *     wp.posts().id( 4 ).revisions( 1372 ); // Get posts/4/revisions/1372
     *
     * @chainable
     * @param  {String|Number} [val] The path part value to set (if provided)
     *                               for a subresource within this resource
     * @returns {Object} The handler instance (for chaining)
     */
    return function (val) {
      // If the path part is not a namedGroup, it should have exactly one
      // entry in the names array: use that as the value for this setter,
      // as it will usually correspond to a collection endpoint.
      this.setPathPart(nodeLevel, nodeName); // If this node has exactly one dynamic child, this method may act as
      // a setter for that child node. `dynamicChildLevel` will be falsy if the
      // node does not have a child or has multiple children.

      if (val !== undefined && dynamicChildLevel) {
        this.setPathPart(dynamicChildLevel, val);
      }

      return this;
    };
  }
}

module.exports = {
  create: createPathPartSetter
};
},{}],"node_modules/wpapi/lib/resource-handler-spec.js":[function(require,module,exports) {
/**
 * @module resource-handler-spec
 */
'use strict';

const createPathPartSetter = require('./path-part-setter').create;
/** @private */


function addLevelOption(levelsObj, level, obj) {
  levelsObj[level] = levelsObj[level] || [];
  levelsObj[level].push(obj);
}
/**
 * Assign a setter function for the provided node to the provided route
 * handler object setters dictionary (mutates handler by reference).
 *
 * @private
 * @param {Object} handler A route handler definition object
 * @param {Object} node    A route hierarchy level node object
 */


function assignSetterFnForNode(handler, node) {
  let setterFn; // For each node, add its handler to the relevant "level" representation

  addLevelOption(handler._levels, node.level, {
    component: node.component,
    validate: node.validate,
    methods: node.methods
  }); // First level is set implicitly, no dedicated setter needed

  if (node.level > 0) {
    setterFn = createPathPartSetter(node);
    node.names.forEach(name => {
      // Convert from snake_case to camelCase
      const setterFnName = name.replace(/[_-]+\w/g, match => match.replace(/[_-]+/, '').toUpperCase()); // Don't overwrite previously-set methods

      if (!handler._setters[setterFnName]) {
        handler._setters[setterFnName] = setterFn;
      }
    });
  }
}
/**
 * Walk the tree of a specific resource node to create the setter methods
 *
 * The API we want to produce from the node tree looks like this:
 *
 *     wp.posts();                        /wp/v2/posts
 *     wp.posts().id( 7 );                /wp/v2/posts/7
 *     wp.posts().id( 7 ).revisions();    /wp/v2/posts/7/revisions
 *     wp.posts().id( 7 ).revisions( 8 ); /wp/v2/posts/7/revisions/8
 *
 * ^ That last one's the tricky one: we can deduce that this parameter is "id", but
 * that param will already be taken by the post ID, so sub-collections have to be
 * set up as `.revisions()` to get the collection, and `.revisions( id )` to get a
 * specific resource.
 *
 * @private
 * @param  {Object} node            A node object
 * @param  {Object} [node.children] An object of child nodes
 * // @returns {isLeaf} A boolean indicating whether the processed node is a leaf
 */


function extractSetterFromNode(handler, node) {
  assignSetterFnForNode(handler, node);

  if (node.children) {
    // Recurse down to this node's children
    Object.keys(node.children).forEach(key => {
      extractSetterFromNode(handler, node.children[key]);
    });
  }
}
/**
 * Create a node handler specification object from a route definition object
 *
 * @name create
 * @param {object} routeDefinition A route definition object
 * @param {string} resource The string key of the resource for which to create a handler
 * @returns {object} A handler spec object with _path, _levels and _setters properties
 */


function createNodeHandlerSpec(routeDefinition, resource) {
  const handler = {
    // A "path" is an ordered (by key) set of values composed into the final URL
    _path: {
      '0': resource
    },
    // A "level" is a level-keyed object representing the valid options for
    // one level of the resource URL
    _levels: {},
    // Objects that hold methods and properties which will be copied to
    // instances of this endpoint's handler
    _setters: {},
    // Arguments (query parameters) that may be set in GET requests to endpoints
    // nested within this resource route tree, used to determine the mixins to
    // add to the request handler
    _getArgs: routeDefinition._getArgs
  }; // Walk the tree

  Object.keys(routeDefinition).forEach(routeDefProp => {
    if (routeDefProp !== '_getArgs') {
      extractSetterFromNode(handler, routeDefinition[routeDefProp]);
    }
  });
  return handler;
}

module.exports = {
  create: createNodeHandlerSpec
};
},{"./path-part-setter":"node_modules/wpapi/lib/path-part-setter.js"}],"node_modules/wpapi/node_modules/qs/lib/utils.js":[function(require,module,exports) {
'use strict';

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = function () {
  var array = [];

  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }

  return array;
}();

var compactQueue = function compactQueue(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];

    if (isArray(obj)) {
      var compacted = [];

      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== 'undefined') {
          compacted.push(obj[j]);
        }
      }

      item.obj[item.prop] = compacted;
    }
  }
};

var arrayToObject = function arrayToObject(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};

  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }

  return obj;
};

var merge = function merge(target, source, options) {
  if (!source) {
    return target;
  }

  if (typeof source !== 'object') {
    if (isArray(target)) {
      target.push(source);
    } else if (target && typeof target === 'object') {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }

    return target;
  }

  if (!target || typeof target !== 'object') {
    return [target].concat(source);
  }

  var mergeTarget = target;

  if (isArray(target) && !isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }

  if (isArray(target) && isArray(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        var targetItem = target[i];

        if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }

  return Object.keys(source).reduce(function (acc, key) {
    var value = source[key];

    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }

    return acc;
  }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};

var decode = function (str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, ' ');

  if (charset === 'iso-8859-1') {
    // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  } // utf-8


  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};

var encode = function encode(str, defaultEncoder, charset) {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }

  var string = str;

  if (typeof str === 'symbol') {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== 'string') {
    string = String(str);
  }

  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
  }

  var out = '';

  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);

    if (c === 0x2D // -
    || c === 0x2E // .
    || c === 0x5F // _
    || c === 0x7E // ~
    || c >= 0x30 && c <= 0x39 // 0-9
    || c >= 0x41 && c <= 0x5A // a-z
    || c >= 0x61 && c <= 0x7A // A-Z
    ) {
        out += string.charAt(i);
        continue;
      }

    if (c < 0x80) {
      out = out + hexTable[c];
      continue;
    }

    if (c < 0x800) {
      out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    if (c < 0xD800 || c >= 0xE000) {
      out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    i += 1;
    c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
    out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
  }

  return out;
};

var compact = function compact(value) {
  var queue = [{
    obj: {
      o: value
    },
    prop: 'o'
  }];
  var refs = [];

  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);

    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];

      if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj: obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }

  compactQueue(queue);
  return value;
};

var isRegExp = function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
  return [].concat(a, b);
};

module.exports = {
  arrayToObject: arrayToObject,
  assign: assign,
  combine: combine,
  compact: compact,
  decode: decode,
  encode: encode,
  isBuffer: isBuffer,
  isRegExp: isRegExp,
  merge: merge
};
},{}],"node_modules/wpapi/node_modules/qs/lib/formats.js":[function(require,module,exports) {
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = require('./utils');

var Format = {
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};
module.exports = util.assign({
  'default': Format.RFC3986,
  formatters: {
    RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function (value) {
      return String(value);
    }
  }
}, Format);
},{"./utils":"node_modules/wpapi/node_modules/qs/lib/utils.js"}],"node_modules/wpapi/node_modules/qs/lib/stringify.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');

var formats = require('./formats');

var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + '[]';
  },
  comma: 'comma',
  indices: function indices(prefix, key) {
    return prefix + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray = Array.isArray;
var push = Array.prototype.push;

var pushToArray = function (arr, valueOrArray) {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  charset: 'utf-8',
  charsetSentinel: false,
  delimiter: '&',
  encode: true,
  encoder: utils.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats.formatters[defaultFormat],
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
  return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};

var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
  var obj = object;

  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate(obj);
  } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
    obj = obj.join(',');
  }

  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
    }

    obj = '';
  }

  if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
      return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
    }

    return [formatter(prefix) + '=' + formatter(String(obj))];
  }

  var values = [];

  if (typeof obj === 'undefined') {
    return values;
  }

  var objKeys;

  if (isArray(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    if (isArray(obj)) {
      pushToArray(values, stringify(obj[key], typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    } else {
      pushToArray(values, stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    }
  }

  return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
  if (!opts) {
    return defaults;
  }

  if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }

  var charset = opts.charset || defaults.charset;

  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  var format = formats['default'];

  if (typeof opts.format !== 'undefined') {
    if (!has.call(formats.formatters, opts.format)) {
      throw new TypeError('Unknown format option provided.');
    }

    format = opts.format;
  }

  var formatter = formats.formatters[format];
  var filter = defaults.filter;

  if (typeof opts.filter === 'function' || isArray(opts.filter)) {
    filter = opts.filter;
  }

  return {
    addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
    allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
    encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
    encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
    filter: filter,
    formatter: formatter,
    serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
    skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
    sort: typeof opts.sort === 'function' ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
};

module.exports = function (object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;

  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (isArray(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }

  var keys = [];

  if (typeof obj !== 'object' || obj === null) {
    return '';
  }

  var arrayFormat;

  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && 'indices' in opts) {
    arrayFormat = opts.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = 'indices';
  }

  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

  if (!objKeys) {
    objKeys = Object.keys(obj);
  }

  if (options.sort) {
    objKeys.sort(options.sort);
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (options.skipNulls && obj[key] === null) {
      continue;
    }

    pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.formatter, options.encodeValuesOnly, options.charset));
  }

  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';

  if (options.charsetSentinel) {
    if (options.charset === 'iso-8859-1') {
      // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
      prefix += 'utf8=%26%2310003%3B&';
    } else {
      // encodeURIComponent('✓')
      prefix += 'utf8=%E2%9C%93&';
    }
  }

  return joined.length > 0 ? prefix + joined : '';
};
},{"./utils":"node_modules/wpapi/node_modules/qs/lib/utils.js","./formats":"node_modules/wpapi/node_modules/qs/lib/formats.js"}],"node_modules/wpapi/node_modules/qs/lib/parse.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  charset: 'utf-8',
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: '&',
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};

var interpretNumericEntities = function (str) {
  return str.replace(/&#(\d+);/g, function ($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
}; // This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.


var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.

var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
  var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1; // Keep track of where the utf8 sentinel was found

  var i;
  var charset = options.charset;

  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf('utf8=') === 0) {
        if (parts[i] === charsetSentinel) {
          charset = 'utf-8';
        } else if (parts[i] === isoSentinel) {
          charset = 'iso-8859-1';
        }

        skipIndex = i;
        i = parts.length; // The eslint settings do not allow break;
      }
    }
  }

  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }

    var part = parts[i];
    var bracketEqualsPos = part.indexOf(']=');
    var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
    var key, val;

    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset, 'key');
      val = options.strictNullHandling ? null : '';
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
      val = options.decoder(part.slice(pos + 1), defaults.decoder, charset, 'value');
    }

    if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
      val = interpretNumericEntities(val);
    }

    if (val && options.comma && val.indexOf(',') > -1) {
      val = val.split(',');
    }

    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }

  return obj;
};

var parseObject = function (chain, val, options) {
  var leaf = val;

  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];

    if (root === '[]' && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);

      if (!options.parseArrays && cleanRoot === '') {
        obj = {
          0: leaf
        };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
        obj = [];
        obj[index] = leaf;
      } else {
        obj[cleanRoot] = leaf;
      }
    }

    leaf = obj;
  }

  return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
  if (!givenKey) {
    return;
  } // Transform dot notation to bracket notation


  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey; // The regex chunks

  var brackets = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g; // Get the parent

  var segment = options.depth > 0 && brackets.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key; // Stash the parent if it exists

  var keys = [];

  if (parent) {
    // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(parent);
  } // Loop through children appending to the array until we hit depth


  var i = 0;

  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;

    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(segment[1]);
  } // If there's a remainder, just add whatever is left


  if (segment) {
    keys.push('[' + key.slice(segment.index) + ']');
  }

  return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
  if (!opts) {
    return defaults;
  }

  if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
    throw new TypeError('Decoder has to be a function.');
  }

  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
    arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
    decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
};

module.exports = function (str, opts) {
  var options = normalizeParseOptions(opts);

  if (str === '' || str === null || typeof str === 'undefined') {
    return options.plainObjects ? Object.create(null) : {};
  }

  var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {}; // Iterate over the keys and setup the new object

  var keys = Object.keys(tempObj);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }

  return utils.compact(obj);
};
},{"./utils":"node_modules/wpapi/node_modules/qs/lib/utils.js"}],"node_modules/wpapi/node_modules/qs/lib/index.js":[function(require,module,exports) {
'use strict';

var stringify = require('./stringify');

var parse = require('./parse');

var formats = require('./formats');

module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify
};
},{"./stringify":"node_modules/wpapi/node_modules/qs/lib/stringify.js","./parse":"node_modules/wpapi/node_modules/qs/lib/parse.js","./formats":"node_modules/wpapi/node_modules/qs/lib/formats.js"}],"node_modules/wpapi/lib/util/alphanumeric-sort.js":[function(require,module,exports) {
'use strict';
/**
 * Utility function for sorting arrays of numbers or strings.
 *
 * @module util/alphanumeric-sort
 * @param {String|Number} a The first comparator operand
 * @param {String|Number} a The second comparator operand
 * @returns -1 if the values are backwards, 1 if they're ordered, and 0 if they're the same
 */

module.exports = (a, b) => {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};
},{}],"node_modules/wpapi/lib/util/key-val-to-obj.js":[function(require,module,exports) {
'use strict';
/**
 * Convert a (key, value) pair to a { key: value } object
 *
 * @module util/key-val-to-obj
 * @param {string} key   The key to use in the returned object
 * @param {}       value The value to assign to the provided key
 * @returns {object} A dictionary object containing the key-value pair
 */

module.exports = (key, value) => {
  const obj = {};
  obj[key] = value;
  return obj;
};
},{}],"node_modules/wpapi/lib/util/parameter-setter.js":[function(require,module,exports) {
'use strict';
/**
 * Helper to create a simple parameter setter convenience method
 *
 * @module util/parameter-setter
 * @param {String} param The string key of the parameter this method will set
 * @returns {Function} A setter method that can be assigned to a request instance
 */

module.exports = param => {
  /**
   * A setter for a specific parameter
   *
   * @chainable
   * @param {*} val The value to set for the the parameter
   * @returns The request instance on which this method was called (for chaining)
   */
  return function (val) {
    return this.param(param, val);
  };
};
},{}],"node_modules/wpapi/lib/util/unique.js":[function(require,module,exports) {
/**
 * Return an array with all duplicate items removed.
 *
 * This functionality was previously provided by lodash.uniq, but this
 * modern JS solution yields a smaller bundle size.
 *
 * @param {Array} arr An array to de-duplicate
 * @returns {Array} A de-duplicated array
 */
module.exports = arr => Array.from(new Set(arr));
},{}],"node_modules/wpapi/lib/constructors/wp-request.js":[function(require,module,exports) {
'use strict';

const qs = require('qs');

const alphaNumericSort = require('../util/alphanumeric-sort');

const keyValToObj = require('../util/key-val-to-obj');

const paramSetter = require('../util/parameter-setter');

const objectReduce = require('../util/object-reduce');

const unique = require('../util/unique');
/**
 * WPRequest is the base API request object constructor
 *
 * @constructor WPRequest
 * @param {Object} options A hash of options for the WPRequest instance
 * @param {String} options.endpoint The endpoint URI for the invoking WPAPI instance
 * @param {Object} options.transport An object of http transport methods (get, post, etc)
 * @param {String} [options.username] A username for authenticating API requests
 * @param {String} [options.password] A password for authenticating API requests
 * @param {String} [options.nonce] A WP nonce for use with cookie authentication
 */


function WPRequest(options) {
  /**
   * Configuration options for the request
   *
   * @property _options
   * @type Object
   * @private
   * @default {}
   */
  this._options = [// Whitelisted options keys
  'auth', 'endpoint', 'headers', 'username', 'password', 'nonce'].reduce((localOptions, key) => {
    if (options && options[key]) {
      localOptions[key] = options[key];
    }

    return localOptions;
  }, {});
  /**
   * The HTTP transport methods (.get, .post, .put, .delete, .head) to use for this request
   *
   * @property transport
   * @type {Object}
   * @private
   */

  this.transport = options && options.transport;
  /**
   * A hash of query parameters
   * This is used to store the values for supported query parameters like ?_embed
   *
   * @property _params
   * @type Object
   * @private
   * @default {}
   */

  this._params = {};
  /**
   * Methods supported by this API request instance:
   * Individual endpoint handlers specify their own subset of supported methods
   *
   * @property _supportedMethods
   * @type Array
   * @private
   * @default [ 'head', 'get', 'put', 'post', 'delete' ]
   */

  this._supportedMethods = ['head', 'get', 'put', 'post', 'delete'];
  /**
   * A hash of values to assemble into the API request path
   * (This will be overwritten by each specific endpoint handler constructor)
   *
   * @property _path
   * @type Object
   * @private
   * @default {}
   */

  this._path = {};
} // Private helper methods
// ======================

/**
 * Identity function for use within invokeAndPromisify()
 * @private
 */


const identity = value => value;
/**
 * Process arrays of taxonomy terms into query parameters.
 * All terms listed in the arrays will be required (AND behavior).
 *
 * This method will not be called with any values unless we are handling
 * an endpoint with the filter mixin; however, since parameter handling
 * (and therefore `_renderQuery()`) are part of WPRequest itself, this
 * helper method lives here alongside the code where it is used.
 *
 * @example
 *     prepareTaxonomies({
 *         tag: [ 'tag1 ', 'tag2' ], // by term slug
 *         cat: [ 7 ] // by term ID
 *     }) === {
 *         tag: 'tag1+tag2',
 *         cat: '7'
 *     }
 *
 * @private
 * @param {Object} taxonomyFilters An object of taxonomy term arrays, keyed by taxonomy name
 * @returns {Object} An object of prepareFilters-ready query arg and query param value pairs
 */


function prepareTaxonomies(taxonomyFilters) {
  if (!taxonomyFilters) {
    return {};
  }

  return objectReduce(taxonomyFilters, (result, terms, key) => {
    // Trim whitespace and concatenate multiple terms with +
    result[key] = terms // Coerce term into a string so that trim() won't fail
    .map(term => (term + '').trim().toLowerCase()).join('+');
    return result;
  }, {});
}
/**
 * Return an object with any properties with undefined, null or empty string
 * values removed.
 *
 * @example
 *
 *     populated({
 *       a: 'a',
 *       b: '',
 *       c: null
 *     }); // { a: 'a' }
 *
 * @private
 * @param {Object} obj An object of key/value pairs
 * @returns {Object} That object with all empty values removed
 */


const populated = obj => {
  if (!obj) {
    return obj;
  }

  return objectReduce(obj, (values, val, key) => {
    if (val !== undefined && val !== null && val !== '') {
      values[key] = val;
    }

    return values;
  }, {});
};
/**
 * Assert whether a provided URL component is "valid" by checking it against
 * an array of registered path component validator methods for that level of
 * the URL path.
 *
 * @private
 * @param {object[]} levelDefinitions An array of Level Definition objects
 * @param {string}   levelContents    The URL path string that has been specified
 *                                    for use on the provided level
 * @returns {boolean} Whether the provided input matches any of the provided
 * level validation functions
 */


const validatePathLevel = (levelDefinitions, levelContents) => {
  // One "level" may have multiple options, as a route tree is a branching
  // structure. We consider a level "valid" if the provided levelContents
  // match any of the available validators.
  const valid = levelDefinitions.reduce((anyOptionValid, levelOption) => {
    if (!levelOption.validate) {
      // If there is no validator function, the level is implicitly valid
      return true;
    }

    return anyOptionValid || levelOption.validate(levelContents);
  }, false);

  if (!valid) {
    throw new Error(['Invalid path component:', levelContents, // awkward pluralization support:
    'does not match' + (levelDefinitions.length > 1 ? ' any of' : ''), levelDefinitions.reduce((components, levelOption) => components.concat(levelOption.component), []).join(', ')].join(' '));
  }
}; // (Semi-)Private Prototype Methods
// ================================

/**
 * Process the endpoint query's filter objects into a valid query string.
 * Nested objects and Array properties are rendered with indexed array syntax.
 *
 * @example
 *     _renderQuery({ p1: 'val1', p2: 'val2' });  // ?p1=val1&p2=val2
 *     _renderQuery({ obj: { prop: 'val' } });    // ?obj[prop]=val
 *     _renderQuery({ arr: [ 'val1', 'val2' ] }); // ?arr[0]=val1&arr[1]=val2
 *
 * @private
 *
 * @method _renderQuery
 * @returns {String} A query string representing the specified filter parameters
 */


WPRequest.prototype._renderQuery = function () {
  // Build the full query parameters object
  const queryParams = { ...populated(this._params)
  }; // Prepare any taxonomies and merge with other filter values

  const taxonomies = prepareTaxonomies(this._taxonomyFilters);
  queryParams.filter = { ...populated(this._filters),
    ...taxonomies
  }; // Parse query parameters object into a query string, sorting the object
  // properties by alphabetical order (consistent property ordering can make
  // for easier caching of request URIs)

  const queryString = qs.stringify(queryParams, {
    arrayFormat: 'brackets'
  }).split('&').sort().join('&'); // Check if the endpoint contains a previous query and set the query character accordingly.

  const queryCharacter = /\?/.test(this._options.endpoint) ? '&' : '?'; // Prepend a "?" (or a "&") if a query is present, and return.

  return queryString === '' ? '' : queryCharacter + queryString;
};
/**
 * Validate & assemble a path string from the request object's _path
 *
 * @private
 * @returns {String} The rendered path
 */


WPRequest.prototype._renderPath = function () {
  // Call validatePath: if the provided path components are not well-formed,
  // an error will be thrown
  this.validatePath();
  const pathParts = this._path;
  const orderedPathParts = Object.keys(pathParts).sort((a, b) => {
    const intA = parseInt(a, 10);
    const intB = parseInt(b, 10);
    return intA - intB;
  }).map(pathPartKey => pathParts[pathPartKey]); // Combine all parts of the path together, filtered to omit any components
  // that are unspecified or empty strings, to create the full path template

  const path = [this._namespace].concat(orderedPathParts).filter(identity).join('/');
  return path;
}; // Public Prototype Methods
// ========================

/**
 * Parse the request into a WordPress API request URI string
 *
 * @method
 * @returns {String} The URI for the HTTP request to be sent
 */


WPRequest.prototype.toString = function () {
  // Render the path to a string
  const path = this._renderPath(); // Render the query string


  const queryStr = this._renderQuery();

  return this._options.endpoint + path + queryStr;
};
/**
 * Set a component of the resource URL itself (as opposed to a query parameter)
 *
 * If a path component has already been set at this level, throw an error:
 * requests are meant to be transient, so any re-writing of a previously-set
 * path part value is likely to be a mistake.
 *
 * @method
 * @chainable
 * @param {Number|String} level A "level" of the path to set, e.g. "1" or "2"
 * @param {Number|String} val   The value to set at that path part level
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.setPathPart = function (level, val) {
  if (this._path[level]) {
    throw new Error('Cannot overwrite value ' + this._path[level]);
  }

  this._path[level] = val;
  return this;
};
/**
 * Validate whether the specified path parts are valid for this endpoint
 *
 * "Path parts" are non-query-string URL segments, like "some" "path" in the URL
 * `mydomain.com/some/path?and=a&query=string&too`. Because a well-formed path
 * is necessary to execute a successful API request, we throw an error if the
 * user has omitted a value (such as `/some/[missing component]/url`) or has
 * provided a path part value that does not match the regular expression the
 * API uses to goven that segment.
 *
 * @method
 * @chainable
 * @returns {WPRequest} The WPRequest instance (for chaining), if no errors were found
 */


WPRequest.prototype.validatePath = function () {
  // Iterate through all _specified_ levels of this endpoint
  const specifiedLevels = Object.keys(this._path).map(level => parseInt(level, 10)).filter(pathPartKey => !isNaN(pathPartKey));
  const maxLevel = Math.max.apply(null, specifiedLevels); // Ensure that all necessary levels are specified

  const path = [];
  let valid = true;

  for (let level = 0; level <= maxLevel; level++) {
    if (!this._levels || !this._levels[level]) {
      continue;
    }

    if (this._path[level]) {
      // Validate the provided path level against all available path validators
      validatePathLevel(this._levels[level], this._path[level]); // Add the path value to the array

      path.push(this._path[level]);
    } else {
      path.push(' ??? ');
      valid = false;
    }
  }

  if (!valid) {
    throw new Error('Incomplete URL! Missing component: /' + path.join('/'));
  }

  return this;
};
/**
 * Set a parameter to render into the final query URI.
 *
 * @method
 * @chainable
 * @param {String|Object} props The name of the parameter to set, or an object containing
 *                              parameter keys and their corresponding values
 * @param {String|Number|Array} [value] The value of the parameter being set
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.param = function (props, value) {
  if (!props || typeof props === 'string' && value === undefined) {
    // We have no property to set, or no value to set for that property
    return this;
  } // We can use the same iterator function below to handle explicit key-value
  // pairs if we convert them into to an object we can iterate over:


  if (typeof props === 'string') {
    props = keyValToObj(props, value);
  } // Iterate through the properties


  Object.keys(props).forEach(key => {
    let value = props[key]; // Arrays should be de-duped and sorted

    if (Array.isArray(value)) {
      value = unique(value).sort(alphaNumericSort);
    } // Set the value


    this._params[key] = value;
  });
  return this;
}; // Globally-applicable parameters that impact the shape of the request or response
// ===============================================================================

/**
 * Set the context of the request. Used primarily to expose private values on a
 * request object by setting the context to "edit".
 *
 * @method
 * @chainable
 * @param {String} context The context to set on the request
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.context = paramSetter('context');
/**
 * Convenience wrapper for `.context( 'edit' )`
 *
 * @method
 * @chainable
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */

WPRequest.prototype.edit = function () {
  return this.context('edit');
};
/**
 * Return embedded resources as part of the response payload.
 *
 * @method
 * @chainable
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.embed = function () {
  return this.param('_embed', true);
}; // Parameters supported by all/nearly all default collections
// ==========================================================

/**
 * Set the pagination of a request. Use in conjunction with `.perPage()` for explicit
 * pagination handling. (The number of pages in a response can be retrieved from the
 * response's `_paging.totalPages` property.)
 *
 * @method
 * @chainable
 * @param {Number} pageNumber The page number of results to retrieve
 * @returns The request instance (for chaining)
 */


WPRequest.prototype.page = paramSetter('page');
/**
 * Set the number of items to be returned in a page of responses.
 *
 * @method
 * @chainable
 * @param {Number} itemsPerPage The number of items to return in one page of results
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.perPage = paramSetter('per_page');
/**
 * Set an arbitrary offset to retrieve items from a specific point in a collection.
 *
 * @method
 * @chainable
 * @param {Number} offsetNumber The number of items by which to offset the response
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.offset = paramSetter('offset');
/**
 * Change the sort direction of a returned collection
 *
 * @example <caption>order comments chronologically (oldest first)</caption>
 *
 *     site.comments().order( 'asc' )...
 *
 * @method
 * @chainable
 * @param {String} direction The order to use when sorting the response
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.order = paramSetter('order');
/**
 * Order a collection by a specific field
 *
 * @method
 * @chainable
 * @param {String} field The field by which to order the response
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.orderby = paramSetter('orderby');
/**
 * Filter results to those matching the specified search terms.
 *
 * @method
 * @chainable
 * @param {String} searchString A string to search for within post content
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.search = paramSetter('search');
/**
 * Include specific resource IDs in the response collection.
 *
 * @method
 * @chainable
 * @param {Number|Number[]} ids An ID or array of IDs to include
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.include = paramSetter('include');
/**
 * Exclude specific resource IDs in the response collection.
 *
 * @method
 * @chainable
 * @param {Number|Number[]} ids An ID or array of IDs to exclude
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.exclude = paramSetter('exclude');
/**
 * Query a collection for members with a specific slug.
 *
 * @method
 * @chainable
 * @param {String} slug A post slug (slug), e.g. "hello-world"
 * @returns The request instance (for chaining)
 */

WPRequest.prototype.slug = paramSetter('slug'); // HTTP Transport Prototype Methods
// ================================
// Chaining methods
// ================

/**
 * Set the namespace of the request, e.g. to specify the API root for routes
 * registered by wp core v2 ("wp/v2") or by any given plugin. Any previously-
 * set namespace will be overwritten by subsequent calls to the method.
 *
 * @method
 * @chainable
 * @param {String} namespace A namespace string, e.g. "wp/v2"
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */

WPRequest.prototype.namespace = function (namespace) {
  this._namespace = namespace;
  return this;
};
/**
 * Set a request to use authentication, and optionally provide auth credentials
 *
 * If auth credentials were already specified when the WPAPI instance was created, calling
 * `.auth` on the request chain will set that request to use the existing credentials:
 *
 * @example <caption>use existing credentials</caption>
 *
 *     request.auth().get...
 *
 * Alternatively, a username & password (or nonce) can be explicitly passed into `.auth`:
 *
 * @example <caption>use explicit basic authentication credentials</caption>
 *
 *     request.auth({
 *       username: 'admin',
 *       password: 'super secure'
 *     }).get...
 *
 * @example <caption>use a nonce for cookie authentication</caption>
 *
 *     request.auth({
 *       nonce: 'somenonce'
 *     })...
 *
 * @method
 * @chainable
 * @param {Object} credentials            An object with 'username' and 'password' string
 *                                        properties, or else a 'nonce' property
 * @param {String} [credentials.username] A WP-API Basic HTTP Authentication username
 * @param {String} [credentials.password] A WP-API Basic HTTP Authentication password
 * @param {String} [credentials.nonce]    A WP nonce for use with cookie authentication
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.auth = function (credentials) {
  if (typeof credentials === 'object') {
    if (typeof credentials.username === 'string') {
      this._options.username = credentials.username;
    }

    if (typeof credentials.password === 'string') {
      this._options.password = credentials.password;
    }

    if (credentials.nonce) {
      this._options.nonce = credentials.nonce;
    }
  } // Set the "auth" options flag that will force authentication on this request


  this._options.auth = true;
  return this;
};
/**
 * Specify a file or a file buffer to attach to the request, for use when
 * creating a new Media item
 *
 * @example <caption>within a server context</caption>
 *
 *     wp.media()
 *       // Pass .file() the file system path to a file to upload
 *       .file( '/path/to/file.jpg' )
 *       .create({})...
 *
 * @example <caption>within a browser context</caption>
 *
 *     wp.media()
 *       // Pass .file() the file reference from an HTML file input
 *       .file( document.querySelector( 'input[type="file"]' ).files[0] )
 *       .create({})...
 *
 * @method
 * @chainable
 * @param {string|object} file   A path to a file (in Node) or an file object
 *                               (Node or Browser) to attach to the request
 * @param {string}        [name] An (optional) filename to use for the file
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.file = function (file, name) {
  this._attachment = file; // Explicitly set to undefined if not provided, to override any previously-
  // set attachment name property that might exist from a prior `.file()` call

  this._attachmentName = name ? name : undefined;
  return this;
}; // HTTP Methods: Public Interface
// ==============================

/**
 * Specify one or more headers to send with the dispatched HTTP request.
 *
 * @example <caption>Set a single header to be used on this request</caption>
 *
 *     request.setHeaders( 'Authorization', 'Bearer trustme' )...
 *
 * @example <caption>Set multiple headers to be used by this request</caption>
 *
 *     request.setHeaders({
 *       Authorization: 'Bearer comeonwereoldfriendsright',
 *       'Accept-Language': 'en-CA'
 *     })...
 *
 * @since 1.1.0
 * @method
 * @chainable
 * @param {String|Object} headers The name of the header to set, or an object of
 *                                header names and their associated string values
 * @param {String}        [value] The value of the header being set
 * @returns {WPRequest} The WPRequest instance (for chaining)
 */


WPRequest.prototype.setHeaders = function (headers, value) {
  // We can use the same iterator function below to handle explicit key-value
  // pairs if we convert them into to an object we can iterate over:
  if (typeof headers === 'string') {
    headers = keyValToObj(headers, value);
  }

  this._options.headers = { ...(this._options.headers || {}),
    ...headers
  };
  return this;
};
/**
 * Get (download the data for) the specified resource
 *
 * @method
 * @async
 * @param {Function} [callback] A callback to invoke with the results of the GET request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.get = function (callback) {
  return this.transport.get(this, callback);
};
/**
 * Get the headers for the specified resource
 *
 * @method
 * @async
 * @param {Function} [callback] A callback to invoke with the results of the HEAD request
 * @returns {Promise} A promise to the header results of the HTTP request
 */


WPRequest.prototype.headers = function (callback) {
  return this.transport.head(this, callback);
};
/**
 * Create the specified resource with the provided data
 *
 * This is the public interface for creating POST requests
 *
 * @method
 * @async
 * @param {Object} data The data for the POST request
 * @param {Function} [callback] A callback to invoke with the results of the POST request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.create = function (data, callback) {
  return this.transport.post(this, data, callback);
};
/**
 * Update the specified resource with the provided data
 *
 * This is the public interface for creating PUT requests
 *
 * @method
 * @async
 * @private
 * @param {Object} data The data for the PUT request
 * @param {Function} [callback] A callback to invoke with the results of the PUT request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.update = function (data, callback) {
  return this.transport.put(this, data, callback);
};
/**
 * Delete the specified resource
 *
 * @method
 * @async
 * @param {Object} [data] Data to send along with the DELETE request
 * @param {Function} [callback] A callback to invoke with the results of the DELETE request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.delete = function (data, callback) {
  return this.transport.delete(this, data, callback);
};
/**
 * Calling .then on a query chain will invoke the query as a GET and return a promise
 *
 * @method
 * @async
 * @param {Function} [successCallback] A callback to handle the data returned from the GET request
 * @param {Function} [failureCallback] A callback to handle any errors encountered by the request
 * @returns {Promise} A promise to the results of the HTTP request
 */


WPRequest.prototype.then = function (successCallback, failureCallback) {
  return this.transport.get(this).then(successCallback, failureCallback);
};

module.exports = WPRequest;
},{"qs":"node_modules/wpapi/node_modules/qs/lib/index.js","../util/alphanumeric-sort":"node_modules/wpapi/lib/util/alphanumeric-sort.js","../util/key-val-to-obj":"node_modules/wpapi/lib/util/key-val-to-obj.js","../util/parameter-setter":"node_modules/wpapi/lib/util/parameter-setter.js","../util/object-reduce":"node_modules/wpapi/lib/util/object-reduce.js","../util/unique":"node_modules/wpapi/lib/util/unique.js"}],"node_modules/wpapi/lib/mixins/filters.js":[function(require,module,exports) {
/**
 * @module mixins/filters
 */
'use strict';

const alphaNumericSort = require('../util/alphanumeric-sort');

const keyValToObj = require('../util/key-val-to-obj');

const unique = require('../util/unique');
/**
 * Filter methods that can be mixed in to a request constructor's prototype to
 * allow that request to take advantage of the `?filter[]=` aliases for WP_Query
 * parameters for collection endpoints, when available.
 *
 * @mixin filters
 */


const filterMixins = {}; // Filter Methods
// ==============

/**
 * Specify key-value pairs by which to filter the API results (commonly used
 * to retrieve only posts meeting certain criteria, such as posts within a
 * particular category or by a particular author).
 *
 * @example
 *
 *     // Set a single property:
 *     wp.filter( 'post_type', 'cpt_event' )...
 *
 *     // Set multiple properties at once:
 *     wp.filter({
 *         post_status: 'publish',
 *         category_name: 'news'
 *     })...
 *
 *     // Chain calls to .filter():
 *     wp.filter( 'post_status', 'publish' ).filter( 'category_name', 'news' )...
 *
 * @method filter
 * @chainable
 * @param {String|Object} props A filter property name string, or object of name/value pairs
 * @param {String|Number|Array} [value] The value(s) corresponding to the provided filter property
 * @returns The request instance (for chaining)
 */

filterMixins.filter = function (props, value) {
  if (!props || typeof props === 'string' && value === undefined) {
    // We have no filter to set, or no value to set for that filter
    return this;
  } // convert the property name string `props` and value `value` into an object


  if (typeof props === 'string') {
    props = keyValToObj(props, value);
  }

  this._filters = { ...this._filters,
    ...props
  };
  return this;
};
/**
 * Restrict the query results to posts matching one or more taxonomy terms.
 *
 * @method taxonomy
 * @chainable
 * @param {String} taxonomy The name of the taxonomy to filter by
 * @param {String|Number|Array} term A string or integer, or array thereof, representing terms
 * @returns The request instance (for chaining)
 */


filterMixins.taxonomy = function (taxonomy, term) {
  const termIsArray = Array.isArray(term);
  const termIsNumber = termIsArray ? term.reduce((allAreNumbers, term) => allAreNumbers && typeof term === 'number', true) : typeof term === 'number';
  const termIsString = termIsArray ? term.reduce((allAreStrings, term) => allAreStrings && typeof term === 'string', true) : typeof term === 'string';

  if (!termIsString && !termIsNumber) {
    throw new Error('term must be a number, string, or array of numbers or strings');
  }

  if (taxonomy === 'category') {
    if (termIsString) {
      // Query param for filtering by category slug is "category_name"
      taxonomy = 'category_name';
    } else {
      // The boolean check above ensures that if taxonomy === 'category' and
      // term is not a string, then term must be a number and therefore an ID:
      // Query param for filtering by category ID is "cat"
      taxonomy = 'cat';
    }
  } else if (taxonomy === 'post_tag') {
    // tag is used in place of post_tag in the public query variables
    taxonomy = 'tag';
  } // Ensure the taxonomy filters object is available


  this._taxonomyFilters = this._taxonomyFilters || {}; // Ensure there's an array of terms available for this taxonomy

  const taxonomyTerms = (this._taxonomyFilters[taxonomy] || []). // Insert the provided terms into the specified taxonomy's terms array
  concat(term) // Sort array
  .sort(alphaNumericSort); // De-dupe

  this._taxonomyFilters[taxonomy] = unique(taxonomyTerms, true);
  return this;
};
/**
 * Query for posts published in a given year.
 *
 * @method year
 * @chainable
 * @param {Number} year integer representation of year requested
 * @returns The request instance (for chaining)
 */


filterMixins.year = function (year) {
  return filterMixins.filter.call(this, 'year', year);
};
/**
 * Query for posts published in a given month, either by providing the number
 * of the requested month (e.g. 3), or the month's name as a string (e.g. "March")
 *
 * @method month
 * @chainable
 * @param {Number|String} month Integer for month (1) or month string ("January")
 * @returns The request instance (for chaining)
 */


filterMixins.month = function (month) {
  let monthDate;

  if (typeof month === 'string') {
    // Append a arbitrary day and year to the month to parse the string into a Date
    monthDate = new Date(Date.parse(month + ' 1, 2012')); // If the generated Date is NaN, then the passed string is not a valid month

    if (isNaN(monthDate)) {
      return this;
    } // JS Dates are 0 indexed, but the WP API requires a 1-indexed integer


    month = monthDate.getMonth() + 1;
  } // If month is a Number, add the monthnum filter to the request


  if (typeof month === 'number') {
    return filterMixins.filter.call(this, 'monthnum', month);
  }

  return this;
};
/**
 * Add the day filter into the request to retrieve posts for a given day
 *
 * @method day
 * @chainable
 * @param {Number} day Integer representation of the day requested
 * @returns The request instance (for chaining)
 */


filterMixins.day = function (day) {
  return filterMixins.filter.call(this, 'day', day);
};
/**
 * Specify that we are requesting a page by its path (specific to Page resources)
 *
 * @method path
 * @chainable
 * @param {String} path The root-relative URL path for a page
 * @returns The request instance (for chaining)
 */


filterMixins.path = function (path) {
  return filterMixins.filter.call(this, 'pagename', path);
};

module.exports = filterMixins;
},{"../util/alphanumeric-sort":"node_modules/wpapi/lib/util/alphanumeric-sort.js","../util/key-val-to-obj":"node_modules/wpapi/lib/util/key-val-to-obj.js","../util/unique":"node_modules/wpapi/lib/util/unique.js"}],"node_modules/wpapi/lib/util/argument-is-numeric.js":[function(require,module,exports) {
'use strict';
/**
 * Return true if the provided argument is a number, a numeric string, or an
 * array of numbers or numeric strings
 *
 * @module util/argument-is-numeric
 * @param {Number|String|Number[]|String[]} val The value to inspect
 * @param {String} key The property to which the mixin method should be assigned
 * @param {Function} mixin The mixin method
 * @returns {void}
 */

const argumentIsNumeric = val => {
  if (typeof val === 'number') {
    return true;
  }

  if (typeof val === 'string') {
    return /^\d+$/.test(val);
  }

  if (Array.isArray(val)) {
    for (let i = 0; i < val.length; i++) {
      // Fail early if any argument isn't determined to be numeric
      if (!argumentIsNumeric(val[i])) {
        return false;
      }
    }

    return true;
  } // If it's not an array, and not a string, and not a number, we don't
  // know what to do with it


  return false;
};

module.exports = argumentIsNumeric;
},{}],"node_modules/wpapi/lib/mixins/parameters.js":[function(require,module,exports) {
/**
 * Filter methods that can be mixed in to a request constructor's prototype to
 * allow that request to take advantage of top-level query parameters for
 * collection endpoints. These are most relevant to posts, pages and CPTs, but
 * pagination helpers are applicable to any collection.
 *
 * @module mixins/parameters
 */
'use strict';

const paramSetter = require('../util/parameter-setter');

const argumentIsNumeric = require('../util/argument-is-numeric');
/**
 * @mixin parameters
 */


const parameterMixins = {};

const filters = require('./filters'); // Needed for .author mixin, as author by ID is a parameter and by Name is a filter


const filter = filters.filter; // Needed for .tag and .category mixin, for deprecated query-by-slug support

const taxonomy = filters.taxonomy; // Parameter Methods
// =================

/**
 * Query for posts by a specific author.
 * This method will replace any previous 'author' query parameters that had been set.
 *
 * Note that this method will either set the "author" top-level query parameter,
 * or else the "author_name" filter parameter (when querying by nicename): this is
 * irregular as most parameter helper methods either set a top level parameter or a
 * filter, not both.
 *
 * _Usage with the author nicename string is deprecated._ Query by author ID instead.
 * If the "rest-filter" plugin is not installed, the name query will have no effect.
 *
 * @method author
 * @chainable
 * @param {String|Number} author The nicename or ID for a particular author
 * @returns The request instance (for chaining)
 */

parameterMixins.author = function (author) {
  if (author === undefined) {
    return this;
  }

  if (typeof author === 'string') {
    this.param('author', null);
    return filter.call(this, 'author_name', author);
  }

  if (typeof author === 'number') {
    filter.call(this, 'author_name', null);
    return this.param('author', author);
  }

  if (author === null) {
    filter.call(this, 'author_name', null);
    return this.param('author', null);
  }

  throw new Error('author must be either a nicename string or numeric ID');
};
/**
 * Search for hierarchical taxonomy terms that are children of the parent term
 * indicated by the provided term ID
 *
 * @example
 *
 *     wp.pages().parent( 3 ).then(function( pages ) {
 *       // console.log( 'all of these pages are nested below page ID#3:' );
 *       // console.log( pages );
 *     });
 *
 *     wp.categories().parent( 42 ).then(function( categories ) {
 *       console.log( 'all of these categories are sub-items of cat ID#42:' );
 *       console.log( categories );
 *     });
 *
 * @method parent
 * @chainable
 * @param {Number} parentId The ID of a (hierarchical) taxonomy term
 * @returns The request instance (for chaining)
 */


parameterMixins.parent = paramSetter('parent');
/**
 * Specify the post for which to retrieve terms (relevant for *e.g.* taxonomy
 * and comment collection endpoints).
 *
 * @method post
 * @chainable
 * @param {String|Number} post The ID of the post for which to retrieve terms
 * @returns The request instance (for chaining)
 */

parameterMixins.post = paramSetter('post');
/**
 * Specify the password to use to access the content of a password-protected post
 *
 * @method password
 * @chainable
 * @param {string} password A string password to access protected content within a post
 * @returns The request instance (for chaining)
 */

parameterMixins.password = paramSetter('password');
/**
 * Specify for which post statuses to return posts in a response collection
 *
 * See https://codex.wordpress.org/Post_Status -- the default post status
 * values in WordPress which are most relevant to the API are 'publish',
 * 'future', 'draft', 'pending', 'private', and 'trash'. This parameter also
 * supports passing the special value "any" to return all statuses.
 *
 * @method status
 * @chainable
 * @param {string|string[]} status A status name string or array of strings
 * @returns The request instance (for chaining)
 */

parameterMixins.status = paramSetter('status');
/**
 * Specify whether to return only, or to completely exclude, sticky posts
 *
 * @method sticky
 * @chainable
 * @param {boolean} sticky A boolean value for whether ONLY sticky posts (true) or
 *                         NO sticky posts (false) should be returned in the query
 * @returns The request instance (for chaining)
 */

parameterMixins.sticky = paramSetter('sticky'); // Taxonomy Term Filter Methods
// ============================

/**
 * Retrieve only records associated with one of the provided categories
 *
 * @method categories
 * @chainable
 * @param {String|Number|Array} categories A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */

parameterMixins.categories = paramSetter('categories');
/**
 * Legacy wrapper for `.categories()` that uses `?filter` to query by slug if available
 *
 * @method tag
 * @deprecated Use `.categories()` and query by category IDs
 * @chainable
 * @param {String|Number|Array} tag A category term slug string, numeric ID, or array of numeric IDs
 * @returns The request instance (for chaining)
 */

parameterMixins.category = function (category) {
  if (argumentIsNumeric(category)) {
    return parameterMixins.categories.call(this, category);
  }

  return taxonomy.call(this, 'category', category);
};
/**
 * Exclude records associated with any of the provided category IDs
 *
 * @method excludeCategories
 * @chainable
 * @param {String|Number|Array} category A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */


parameterMixins.excludeCategories = paramSetter('categories_exclude');
/**
 * Retrieve only records associated with one of the provided tag IDs
 *
 * @method tags
 * @chainable
 * @param {String|Number|Array} tags A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */

parameterMixins.tags = paramSetter('tags');
/**
 * Legacy wrapper for `.tags()` that uses `?filter` to query by slug if available
 *
 * @method tag
 * @deprecated Use `.tags()` and query by term IDs
 * @chainable
 * @param {String|Number|Array} tag A tag term slug string, numeric ID, or array of numeric IDs
 * @returns The request instance (for chaining)
 */

parameterMixins.tag = function (tag) {
  if (argumentIsNumeric(tag)) {
    return parameterMixins.tags.call(this, tag);
  }

  return taxonomy.call(this, 'tag', tag);
};
/**
 * Exclude records associated with any of the provided tag IDs
 *
 * @method excludeTags
 * @chainable
 * @param {String|Number|Array} category A term ID integer or numeric string, or array thereof
 * @returns The request instance (for chaining)
 */


parameterMixins.excludeTags = paramSetter('tags_exclude'); // Date Methods
// ============

/**
 * Retrieve only records published before a specified date
 *
 * @example <caption>Provide an ISO 8601-compliant date string</caption>
 *
 *     wp.posts().before('2016-03-22')...
 *
 * @example <caption>Provide a JavaScript Date object</caption>
 *
 *     wp.posts().before( new Date( 2016, 03, 22 ) )...
 *
 * @method before
 * @chainable
 * @param {String|Date} date An ISO 8601-compliant date string, or Date object
 * @returns The request instance (for chaining)
 */

parameterMixins.before = function (date) {
  return this.param('before', new Date(date).toISOString());
};
/**
 * Retrieve only records published after a specified date
 *
 * @example <caption>Provide an ISO 8601-compliant date string</caption>
 *
 *     wp.posts().after('1986-03-22')...
 *
 * @example <caption>Provide a JavaScript Date object</caption>
 *
 *     wp.posts().after( new Date( 1986, 03, 22 ) )...
 *
 * @method after
 * @chainable
 * @param {String|Date} date An ISO 8601-compliant date string, or Date object
 * @returns The request instance (for chaining)
 */


parameterMixins.after = function (date) {
  return this.param('after', new Date(date).toISOString());
};

module.exports = parameterMixins;
},{"../util/parameter-setter":"node_modules/wpapi/lib/util/parameter-setter.js","../util/argument-is-numeric":"node_modules/wpapi/lib/util/argument-is-numeric.js","./filters":"node_modules/wpapi/lib/mixins/filters.js"}],"node_modules/wpapi/lib/mixins/index.js":[function(require,module,exports) {
/**
 * This module defines a mapping between supported GET request query parameter
 * arguments and their corresponding mixin, if available.
 */
'use strict';

const filterMixins = require('./filters');

const parameterMixins = require('./parameters'); // `.context`, `.embed`, and `.edit` (a shortcut for `context(edit, true)`) are
// supported by default in WPRequest, as is the base `.param` method. Any GET
// argument parameters not covered here must be set directly by using `.param`.
// The initial mixins we define are the ones where either a single property
// accepted by the API endpoint corresponds to multiple individual mixin
// functions, or where the name we use for the function diverges from that
// of the query parameter that the mixin sets.


const mixins = {
  categories: {
    categories: parameterMixins.categories,

    /** @deprecated use .categories() */
    category: parameterMixins.category
  },
  categories_exclude: {
    excludeCategories: parameterMixins.excludeCategories
  },
  tags: {
    tags: parameterMixins.tags,

    /** @deprecated use .tags() */
    tag: parameterMixins.tag
  },
  tags_exclude: {
    excludeTags: parameterMixins.excludeTags
  },
  filter: filterMixins,
  post: {
    post: parameterMixins.post,

    /** @deprecated use .post() */
    forPost: parameterMixins.post
  }
}; // All of these parameter mixins use a setter function named identically to the
// property that the function sets, but they must still be provided in wrapper
// objects so that the mixin can be `.assign`ed correctly: wrap & assign each
// setter to the mixins dictionary object.

['after', 'author', 'before', 'parent', 'password', 'status', 'sticky'].forEach(mixinName => {
  mixins[mixinName] = {};
  mixins[mixinName][mixinName] = parameterMixins[mixinName];
});
module.exports = mixins;
},{"./filters":"node_modules/wpapi/lib/mixins/filters.js","./parameters":"node_modules/wpapi/lib/mixins/parameters.js"}],"node_modules/wpapi/lib/util/apply-mixin.js":[function(require,module,exports) {
'use strict';
/**
 * Augment an object (specifically a prototype) with a mixin method
 * (the provided object is mutated by reference)
 *
 * @module util/apply-mixin
 * @param {Object} obj The object (usually a prototype) to augment
 * @param {String} key The property to which the mixin method should be assigned
 * @param {Function} mixin The mixin method
 * @returns {void}
 */

module.exports = (obj, key, mixin) => {
  // Will not overwrite existing methods
  if (typeof mixin === 'function' && !obj[key]) {
    obj[key] = mixin;
  }
};
},{}],"node_modules/wpapi/lib/endpoint-request.js":[function(require,module,exports) {
/**
 * @module endpoint-request
 */
'use strict';

const WPRequest = require('./constructors/wp-request');

const mixins = require('./mixins');

const applyMixin = require('./util/apply-mixin');
/**
 * Create an endpoint request handler constructor for a specific resource tree
 *
 * @method create
 * @param {Object} handlerSpec A resource handler specification object
 * @param {String} resource    The root resource of requests created from the returned factory
 * @param {String} namespace   The namespace string for the returned factory's handlers
 * @returns {Function} A constructor inheriting from {@link WPRequest}
 */


function createEndpointRequest(handlerSpec, resource, namespace) {
  // Create the constructor function for this endpoint
  class EndpointRequest extends WPRequest {
    constructor(options) {
      super(options);
      /**
       * Semi-private instance property specifying the available URL path options
       * for this endpoint request handler, keyed by ascending whole numbers.
       *
       * @property _levels
       * @type {object}
       * @private
       */

      this._levels = handlerSpec._levels; // Configure handler for this endpoint's root URL path & set namespace

      this.setPathPart(0, resource).namespace(namespace);
    }

  } // Mix in all available shortcut methods for GET request query parameters that
  // are valid within this endpoint tree


  if (typeof handlerSpec._getArgs === 'object') {
    Object.keys(handlerSpec._getArgs).forEach(supportedQueryParam => {
      const mixinsForParam = mixins[supportedQueryParam]; // Only proceed if there is a mixin available AND the specified mixins will
      // not overwrite any previously-set prototype method

      if (typeof mixinsForParam === 'object') {
        Object.keys(mixinsForParam).forEach(methodName => {
          applyMixin(EndpointRequest.prototype, methodName, mixinsForParam[methodName]);
        });
      }
    });
  }

  Object.keys(handlerSpec._setters).forEach(setterFnName => {
    // Only assign setter functions if they do not overwrite preexisting methods
    if (!EndpointRequest.prototype[setterFnName]) {
      EndpointRequest.prototype[setterFnName] = handlerSpec._setters[setterFnName];
    }
  });
  return EndpointRequest;
}

module.exports = {
  create: createEndpointRequest
};
},{"./constructors/wp-request":"node_modules/wpapi/lib/constructors/wp-request.js","./mixins":"node_modules/wpapi/lib/mixins/index.js","./util/apply-mixin":"node_modules/wpapi/lib/util/apply-mixin.js"}],"node_modules/wpapi/lib/endpoint-factories.js":[function(require,module,exports) {
/**
 * Take a WP route string (with PCRE named capture groups), `such as /author/(?P<id>\d+)`,
 * and generate request handler factory methods for each represented endpoint.
 *
 * @module endpoint-factories
 */
'use strict';

const createResourceHandlerSpec = require('./resource-handler-spec').create;

const createEndpointRequest = require('./endpoint-request').create;

const objectReduce = require('./util/object-reduce');
/**
 * Given an array of route definitions and a specific namespace for those routes,
 * recurse through the node tree representing all possible routes within the
 * provided namespace to define path value setters (and corresponding property
 * validators) for all possible variants of each resource's API endpoints.
 *
 * @method generate
 * @param {string} namespace         The namespace string for these routes
 * @param {object} routesByNamespace A dictionary of namespace - route definition
 *                                   object pairs as generated from buildRouteTree,
 *                                   where each route definition object is a dictionary
 *                                   keyed by route definition strings
 * @returns {object} A dictionary of endpoint request handler factories
 */


function generateEndpointFactories(routesByNamespace) {
  return objectReduce(routesByNamespace, (namespaces, routeDefinitions, namespace) => {
    // Create
    namespaces[namespace] = objectReduce(routeDefinitions, (handlers, routeDef, resource) => {
      const handlerSpec = createResourceHandlerSpec(routeDef, resource);
      const EndpointRequest = createEndpointRequest(handlerSpec, resource, namespace); // "handler" object is now fully prepared; create the factory method that
      // will instantiate and return a handler instance

      handlers[resource] = function (options) {
        return new EndpointRequest({ ...this._options,
          ...options
        });
      }; // Expose the constructor as a property on the factory function, so that
      // auto-generated endpoint request constructors may be further customized
      // when needed


      handlers[resource].Ctor = EndpointRequest;
      return handlers;
    }, {});
    return namespaces;
  }, {});
}

module.exports = {
  generate: generateEndpointFactories
};
},{"./resource-handler-spec":"node_modules/wpapi/lib/resource-handler-spec.js","./endpoint-request":"node_modules/wpapi/lib/endpoint-request.js","./util/object-reduce":"node_modules/wpapi/lib/util/object-reduce.js"}],"node_modules/li/lib/index.js":[function(require,module,exports) {
var define;
(function (name, definition, context) {

  //try CommonJS, then AMD (require.js), then use global.

  if (typeof module != 'undefined' && module.exports) module.exports = definition();
  else if (typeof context['define'] == 'function' && context['define']['amd']) define(definition);
  else context[name] = definition();

})('li', function () {
  // compile regular expressions ahead of time for efficiency
  var relsRegExp = /^;\s*([^"=]+)=(?:"([^"]+)"|([^";,]+)(?:[;,]|$))/;
  var sourceRegExp = /^<([^>]*)>/;
  var delimiterRegExp = /^\s*,\s*/;

  return {
    parse: function (linksHeader, options) {
      var match;
      var source;
      var rels;
      var extended = options && options.extended || false;
      var links = [];

      while (linksHeader) {
        linksHeader = linksHeader.trim();

        // Parse `<link>`
        source = sourceRegExp.exec(linksHeader);
        if (!source) break;

        var current = {
          link: source[1]
        };

        // Move cursor
        linksHeader = linksHeader.slice(source[0].length);

        // Parse `; attr=relation` and `; attr="relation"`

        var nextDelimiter = linksHeader.match(delimiterRegExp);
        while(linksHeader && (!nextDelimiter || nextDelimiter.index > 0)) {
          match = relsRegExp.exec(linksHeader);
          if (!match) break;

          // Move cursor
          linksHeader = linksHeader.slice(match[0].length);
          nextDelimiter = linksHeader.match(delimiterRegExp);


          if (match[1] === 'rel' || match[1] === 'rev') {
            // Add either quoted rel or unquoted rel
            rels = (match[2] || match[3]).split(/\s+/);
            current[match[1]] = rels;
          } else {
            current[match[1]] = match[2] || match[3];
          }
        }

        links.push(current);
        // Move cursor
        linksHeader = linksHeader.replace(delimiterRegExp, '');
      }

      if (!extended) {
        return links.reduce(function(result, currentLink) {
          if (currentLink.rel) {
            currentLink.rel.forEach(function(rel) {
              result[rel] = currentLink.link;
            });
          }
          return result;
        }, {});
      }

      return links;
    },
    stringify: function (params) {
      var grouped = Object.keys(params).reduce(function(grouped, key) {
        grouped[params[key]] = grouped[params[key]] || [];
        grouped[params[key]].push(key);
        return grouped;
      }, {});

      var entries = Object.keys(grouped).reduce(function(result, link) {
        return result.concat('<' + link + '>; rel="' + grouped[link].join(' ') + '"');
      }, []);

      return entries.join(', ');
    }
  };

}, this);

},{}],"node_modules/wpapi/lib/autodiscovery.js":[function(require,module,exports) {
/**
 * Utility methods used when querying a site in order to discover its available
 * API endpoints
 *
 * @module autodiscovery
 */
'use strict';

const parseLinkHeader = require('li').parse;
/**
 * Attempt to locate a `rel="https://api.w.org"` link relation header
 *
 * @method locateAPIRootHeader
 * @param {Object} response A response object with a link or headers property
 * @returns {String} The URL of the located API root
 */


function locateAPIRootHeader(response) {
  // See https://developer.wordpress.org/rest-api/using-the-rest-api/discovery/
  const rel = 'https://api.w.org/'; // Extract & parse the response link headers

  const link = response.link || response.headers && response.headers.link;
  const headers = parseLinkHeader(link);
  const apiHeader = headers && headers[rel];

  if (apiHeader) {
    return apiHeader;
  }

  throw new Error(`No header link found with rel="${rel}"`);
}

module.exports = {
  locateAPIRootHeader: locateAPIRootHeader
};
},{"li":"node_modules/li/lib/index.js"}],"node_modules/component-emitter/index.js":[function(require,module,exports) {

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"node_modules/superagent/lib/is-object.js":[function(require,module,exports) {
'use strict';
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isObject(obj) {
  return null !== obj && 'object' === _typeof(obj);
}

module.exports = isObject;
},{}],"node_modules/superagent/lib/request-base.js":[function(require,module,exports) {
'use strict';
/**
 * Module of mixed-in functions shared between node and client code
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isObject = require('./is-object');
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }

  return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function _clearTimeout() {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function parse(fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function serialize(fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function timeout(options) {
  if (!options || 'object' !== _typeof(options)) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for (var option in options) {
    switch (option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;

      case 'response':
        this._responseTimeout = options.response;
        break;

      default:
        console.warn("Unknown timeout option", option);
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function retry(count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (e) {
      console.error(e);
    }
  }

  if (res && res.status && res.status >= 500 && res.status != 501) return true;

  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true; // Superagent timeout

    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function then(resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }

    this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
      self.on('error', innerReject);
      self.on('abort', function () {
        var err = new Error('Aborted');
        err.code = "ABORTED";
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        innerReject(err);
      });
      self.end(function (err, res) {
        if (err) innerReject(err);else innerResolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }

    return this;
  } // val should be defined now


  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if ('boolean' === typeof val) {
    val = '' + val;
  }

  this._getFormData().append(name, val);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser

  this.req && this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  } // merge


  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];

    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');

      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }

      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.trace("Unsupported");
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};
},{"./is-object":"node_modules/superagent/lib/is-object.js"}],"node_modules/superagent/lib/utils.js":[function(require,module,exports) {
'use strict';
/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();
    if (key && val) obj[key] = val;
    return obj;
  }, {});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host']; // secuirty

  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }

  return header;
};
},{}],"node_modules/superagent/lib/response-base.js":[function(require,module,exports) {
'use strict';
/**
 * Module dependencies.
 */

var utils = require('./utils');
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) {
    this[key] = params[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (err) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.status = this.statusCode = status;
  this.statusType = type; // basics

  this.info = 1 == type;
  this.ok = 2 == type;
  this.redirect = 3 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = 4 == type || 5 == type ? this.toError() : false; // sugar

  this.created = 201 == status;
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.forbidden = 403 == status;
  this.notFound = 404 == status;
  this.unprocessableEntity = 422 == status;
};
},{"./utils":"node_modules/superagent/lib/utils.js"}],"node_modules/superagent/lib/agent-base.js":[function(require,module,exports) {
function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, def.args);
  });
};

module.exports = Agent;
},{}],"node_modules/superagent/lib/client.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Root reference for iframes.
 */
var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self !== 'undefined') {
  // Web Worker
  root = self;
} else {
  // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = require('component-emitter');

var RequestBase = require('./request-base');

var isObject = require('./is-object');

var ResponseBase = require('./response-base');

var Agent = require('./agent-base');
/**
 * Noop.
 */


function noop() {}

;
/**
 * Expose `request`.
 */

var request = exports = module.exports = function (method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {}
  }

  throw Error("Browser-only version of superagent could not find XHR");
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */


var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function (v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for (var subkey in val) {
        pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}
/**
 * Expose serialization method.
 */


request.serializeObject = serialize;
/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */


request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};
/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders()); // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }
}

ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */


request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch (custom_err) {
      new_err = custom_err; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */


Emitter(Request.prototype);
RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (1 === arguments.length) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto'
    };
  }

  var encoder = function (string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (val) {
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
  console.warn("This is not supported in browser version of superagent");
  return this;
}; // This throws, because it can't send/receive data as expected


Request.prototype.pipe = Request.prototype.write = function () {
  throw Error("Streaming is not supported in browser version of superagent");
};
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */


Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === _typeof(obj) && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  this._end();
};

Request.prototype._end = function () {
  if (this._aborted) return this.callback(Error("The request has been aborted even before .end() was called"));
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (4 != readyState) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (e) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function (direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');

      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch (e) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (null == this.header[field]) continue;
    if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data !== 'undefined' ? data : null);
};

request.agent = function () {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype['delete'];
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.head = function (url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.post = function (url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.put = function (url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
},{"component-emitter":"node_modules/component-emitter/index.js","./request-base":"node_modules/superagent/lib/request-base.js","./is-object":"node_modules/superagent/lib/is-object.js","./response-base":"node_modules/superagent/lib/response-base.js","./agent-base":"node_modules/superagent/lib/agent-base.js"}],"node_modules/wpapi/lib/util/check-method-support.js":[function(require,module,exports) {
'use strict';
/**
 * Verify that a specific HTTP method is supported by the provided WPRequest
 *
 * @module util/check-method-support
 * @param {String} method An HTTP method to check ('get', 'post', etc)
 * @param {WPRequest} request A WPRequest object with a _supportedMethods array
 * @returns true iff the method is within request._supportedMethods
 */

module.exports = (method, request) => {
  if (request._supportedMethods.indexOf(method.toLowerCase()) === -1) {
    throw new Error('Unsupported method; supported methods are: ' + request._supportedMethods.join(', '));
  }

  return true;
};
},{}],"node_modules/wpapi/lib/util/is-empty-object.js":[function(require,module,exports) {
'use strict';
/**
 * Determine whether an provided value is an empty object
 *
 * @module util/is-empty-object
 * @param {} value A value to test for empty-object-ness
 * @returns {boolean} Whether the provided value is an empty object
 */

module.exports = value => {
  // If the value is not object-like, then it is certainly not an empty object
  if (typeof value !== 'object') {
    return false;
  } // For our purposes an empty array should not be treated as an empty object
  // (Since this is used to process invalid content-type responses, )


  if (Array.isArray(value)) {
    return false;
  }

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};
},{}],"node_modules/wpapi/lib/http-transport.js":[function(require,module,exports) {
/**
 * @module http-transport
 */
'use strict';

const agent = require('superagent');

const parseLinkHeader = require('li').parse;

const WPRequest = require('./constructors/wp-request');

const checkMethodSupport = require('./util/check-method-support');

const objectReduce = require('./util/object-reduce');

const isEmptyObject = require('./util/is-empty-object');
/**
 * Set any provided headers on the outgoing request object. Runs after _auth.
 *
 * @method _setHeaders
 * @private
 * @param {Object} request A superagent request object
 * @param {Object} options A WPRequest _options object
 * @param {Object} A superagent request object, with any available headers set
 */


function _setHeaders(request, options) {
  // If there's no headers, do nothing
  if (!options.headers) {
    return request;
  }

  return objectReduce(options.headers, (request, value, key) => request.set(key, value), request);
}
/**
 * Conditionally set basic authentication on a server request object.
 *
 * @method _auth
 * @private
 * @param {Object} request A superagent request object
 * @param {Object} options A WPRequest _options object
 * @param {Boolean} forceAuthentication whether to force authentication on the request
 * @param {Object} A superagent request object, conditionally configured to use basic auth
 */


function _auth(request, options, forceAuthentication) {
  // If we're not supposed to authenticate, don't even start
  if (!forceAuthentication && !options.auth && !options.nonce) {
    return request;
  } // Enable nonce in options for Cookie authentication http://wp-api.org/guides/authentication.html


  if (options.nonce) {
    request.set('X-WP-Nonce', options.nonce);
    return request;
  } // Retrieve the username & password from the request options if they weren't provided


  const username = options.username;
  const password = options.password; // If no username or no password, can't authenticate

  if (!username || !password) {
    return request;
  } // Can authenticate: set basic auth parameters on the request


  return request.auth(username, password);
} // Pagination-Related Helpers
// ==========================

/**
 * Extract the body property from the superagent response, or else try to parse
 * the response text to get a JSON object.
 *
 * @private
 * @param {Object} response      The response object from the HTTP request
 * @param {String} response.text The response content as text
 * @param {Object} response.body The response content as a JS object
 * @returns {Object} The response content as a JS object
 */


function extractResponseBody(response) {
  let responseBody = response.body;

  if (isEmptyObject(responseBody) && response.type === 'text/html') {
    // Response may have come back as HTML due to caching plugin; try to parse
    // the response text into JSON
    try {
      responseBody = JSON.parse(response.text);
    } catch (e) {// Swallow errors, it's OK to fall back to returning the body
    }
  }

  return responseBody;
}
/**
 * If the response is not paged, return the body as-is. If pagination
 * information is present in the response headers, parse those headers into
 * a custom `_paging` property on the response body. `_paging` contains links
 * to the previous and next pages in the collection, as well as metadata
 * about the size and number of pages in the collection.
 *
 * The structure of the `_paging` property is as follows:
 *
 * - `total` {Integer} The total number of records in the collection
 * - `totalPages` {Integer} The number of pages available
 * - `links` {Object} The parsed "links" headers, separated into individual URI strings
 * - `next` {WPRequest} A WPRequest object bound to the "next" page (if page exists)
 * - `prev` {WPRequest} A WPRequest object bound to the "previous" page (if page exists)
 *
 * @private
 * @param {Object} result           The response object from the HTTP request
 * @param {Object} options          The options hash from the original request
 * @param {String} options.endpoint The base URL of the requested API endpoint
 * @param {Object} httpTransport    The HTTP transport object used by the original request
 * @returns {Object} The pagination metadata object for this HTTP request, or else null
 */


function createPaginationObject(result, options, httpTransport) {
  let _paging = null;

  if (!result.headers) {
    // No headers: return as-is
    return _paging;
  } // Guard against capitalization inconsistencies in returned headers


  Object.keys(result.headers).forEach(header => {
    result.headers[header.toLowerCase()] = result.headers[header];
  });

  if (!result.headers['x-wp-totalpages']) {
    // No paging: return as-is
    return _paging;
  }

  const totalPages = +result.headers['x-wp-totalpages'];

  if (!totalPages || totalPages === 0) {
    // No paging: return as-is
    return _paging;
  } // Decode the link header object


  const links = result.headers.link ? parseLinkHeader(result.headers.link) : {}; // Store pagination data from response headers on the response collection

  _paging = {
    total: +result.headers['x-wp-total'],
    totalPages: totalPages,
    links: links
  }; // Create a WPRequest instance pre-bound to the "next" page, if available

  if (links.next) {
    _paging.next = new WPRequest({ ...options,
      transport: httpTransport,
      endpoint: links.next
    });
  } // Create a WPRequest instance pre-bound to the "prev" page, if available


  if (links.prev) {
    _paging.prev = new WPRequest({ ...options,
      transport: httpTransport,
      endpoint: links.prev
    });
  }

  return _paging;
} // HTTP-Related Helpers
// ====================

/**
 * Submit the provided superagent request object, invoke a callback (if it was
 * provided), and return a promise to the response from the HTTP request.
 *
 * @private
 * @param {Object} request A superagent request object
 * @param {Function} callback A callback function (optional)
 * @param {Function} transform A function to transform the result data
 * @returns {Promise} A promise to the superagent request
 */


function invokeAndPromisify(request, callback, transform) {
  return new Promise((resolve, reject) => {
    // Fire off the result
    request.end((err, result) => {
      // Return the results as a promise
      if (err || result.error) {
        reject(err || result.error);
      } else {
        resolve(result);
      }
    });
  }).then(transform).then(result => {
    // If a node-style callback was provided, call it, but also return the
    // result value for use via the returned Promise
    if (callback && typeof callback === 'function') {
      callback(null, result);
    }

    return result;
  }, err => {
    // If the API provided an error object, it will be available within the
    // superagent response object as response.body (containing the response
    // JSON). If that object exists, it will have a .code property if it is
    // truly an API error (non-API errors will not have a .code).
    if (err.response && err.response.body && err.response.body.code) {
      // Forward API error response JSON on to the calling method: omit
      // all transport-specific (superagent-specific) properties
      err = err.response.body;
    } // If a callback was provided, ensure it is called with the error; otherwise
    // re-throw the error so that it can be handled by a Promise .catch or .then


    if (callback && typeof callback === 'function') {
      callback(err);
    } else {
      throw err;
    }
  });
}
/**
 * Return the body of the request, augmented with pagination information if the
 * result is a paged collection.
 *
 * @private
 * @param {WPRequest} wpreq The WPRequest representing the returned HTTP response
 * @param {Object} result The results from the HTTP request
 * @returns {Object} The "body" property of the result, conditionally augmented with
 *                  pagination information if the result is a partial collection.
 */


function returnBody(wpreq, result) {
  const body = extractResponseBody(result);

  const _paging = createPaginationObject(result, wpreq._options, wpreq.transport);

  if (_paging) {
    body._paging = _paging;
  }

  return body;
}
/**
 * Extract and return the headers property from a superagent response object
 *
 * @private
 * @param {Object} result The results from the HTTP request
 * @returns {Object} The "headers" property of the result
 */


function returnHeaders(result) {
  return result.headers;
} // HTTP Methods: Private HTTP-verb versions
// ========================================

/**
 * @method get
 * @async
 * @param {WPRequest} wpreq A WPRequest query object
 * @param {Function} [callback] A callback to invoke with the results of the GET request
 * @returns {Promise} A promise to the results of the HTTP request
 */


function _httpGet(wpreq, callback) {
  checkMethodSupport('get', wpreq);
  const url = wpreq.toString();

  let request = _auth(agent.get(url), wpreq._options);

  request = _setHeaders(request, wpreq._options);
  return invokeAndPromisify(request, callback, returnBody.bind(null, wpreq));
}
/**
 * Invoke an HTTP "POST" request against the provided endpoint
 * @method post
 * @async
 * @param {WPRequest} wpreq A WPRequest query object
 * @param {Object} data The data for the POST request
 * @param {Function} [callback] A callback to invoke with the results of the POST request
 * @returns {Promise} A promise to the results of the HTTP request
 */


function _httpPost(wpreq, data, callback) {
  checkMethodSupport('post', wpreq);
  const url = wpreq.toString();
  data = data || {};

  let request = _auth(agent.post(url), wpreq._options, true);

  request = _setHeaders(request, wpreq._options);

  if (wpreq._attachment) {
    // Data must be form-encoded alongside image attachment
    request = objectReduce(data, (req, value, key) => req.field(key, value), request.attach('file', wpreq._attachment, wpreq._attachmentName));
  } else {
    request = request.send(data);
  }

  return invokeAndPromisify(request, callback, returnBody.bind(null, wpreq));
}
/**
 * @method put
 * @async
 * @param {WPRequest} wpreq A WPRequest query object
 * @param {Object} data The data for the PUT request
 * @param {Function} [callback] A callback to invoke with the results of the PUT request
 * @returns {Promise} A promise to the results of the HTTP request
 */


function _httpPut(wpreq, data, callback) {
  checkMethodSupport('put', wpreq);
  const url = wpreq.toString();
  data = data || {};

  let request = _auth(agent.put(url), wpreq._options, true).send(data);

  request = _setHeaders(request, wpreq._options);
  return invokeAndPromisify(request, callback, returnBody.bind(null, wpreq));
}
/**
 * @method delete
 * @async
 * @param {WPRequest} wpreq A WPRequest query object
 * @param {Object} [data] Data to send along with the DELETE request
 * @param {Function} [callback] A callback to invoke with the results of the DELETE request
 * @returns {Promise} A promise to the results of the HTTP request
 */


function _httpDelete(wpreq, data, callback) {
  if (!callback && typeof data === 'function') {
    callback = data;
    data = null;
  }

  checkMethodSupport('delete', wpreq);
  const url = wpreq.toString();

  let request = _auth(agent.del(url), wpreq._options, true).send(data);

  request = _setHeaders(request, wpreq._options);
  return invokeAndPromisify(request, callback, returnBody.bind(null, wpreq));
}
/**
 * @method head
 * @async
 * @param {WPRequest} wpreq A WPRequest query object
 * @param {Function} [callback] A callback to invoke with the results of the HEAD request
 * @returns {Promise} A promise to the header results of the HTTP request
 */


function _httpHead(wpreq, callback) {
  checkMethodSupport('head', wpreq);
  const url = wpreq.toString();

  let request = _auth(agent.head(url), wpreq._options);

  request = _setHeaders(request, wpreq._options);
  return invokeAndPromisify(request, callback, returnHeaders);
}

module.exports = {
  delete: _httpDelete,
  get: _httpGet,
  head: _httpHead,
  post: _httpPost,
  put: _httpPut
};
},{"superagent":"node_modules/superagent/lib/client.js","li":"node_modules/li/lib/index.js","./constructors/wp-request":"node_modules/wpapi/lib/constructors/wp-request.js","./util/check-method-support":"node_modules/wpapi/lib/util/check-method-support.js","./util/object-reduce":"node_modules/wpapi/lib/util/object-reduce.js","./util/is-empty-object":"node_modules/wpapi/lib/util/is-empty-object.js"}],"node_modules/wpapi/lib/wp-register-route.js":[function(require,module,exports) {
'use strict';

const buildRouteTree = require('./route-tree').build;

const generateEndpointFactories = require('./endpoint-factories').generate;

const paramSetter = require('./util/parameter-setter');

const applyMixin = require('./util/apply-mixin');

const mixins = require('./mixins');
/**
 * Create and return a handler for an arbitrary WP REST API endpoint.
 *
 * The first two parameters mirror `register_rest_route` in the REST API
 * codebase:
 *
 * @memberof! WPAPI#
 * @param {string}   namespace         A namespace string, e.g. 'myplugin/v1'
 * @param {string}   restBase          A REST route string, e.g. '/author/(?P<id>\d+)'
 * @param {object}   [options]         An (optional) options object
 * @param {object}   [options.mixins]  A hash of functions to apply as mixins
 * @param {string[]} [options.methods] An array of methods to whitelist (on the leaf node only)
 * @returns {Function} An endpoint handler factory function for the specified route
 */


function registerRoute(namespace, restBase, options = {}) {
  // Support all methods until requested to do otherwise
  let supportedMethods = ['head', 'get', 'patch', 'put', 'post', 'delete'];

  if (Array.isArray(options.methods)) {
    // Permit supported methods to be specified as an array
    supportedMethods = options.methods.map(method => method.trim().toLowerCase());
  } else if (typeof options.methods === 'string') {
    // Permit a supported method to be specified as a string
    supportedMethods = [options.methods.trim().toLowerCase()];
  } // Ensure that if GET is supported, then HEAD is as well, and vice-versa


  if (supportedMethods.indexOf('get') !== -1 && supportedMethods.indexOf('head') === -1) {
    supportedMethods.push('head');
  } else if (supportedMethods.indexOf('head') !== -1 && supportedMethods.indexOf('get') === -1) {
    supportedMethods.push('get');
  }

  const fullRoute = namespace // Route should always have preceding slash
  .replace(/^[\s/]*/, '/') // Route should always be joined to namespace with a single slash
  .replace(/[\s/]*$/, '/') + restBase.replace(/^[\s/]*/, '');
  const routeObj = {};
  routeObj[fullRoute] = {
    namespace: namespace,
    methods: supportedMethods
  }; // Go through the same steps used to bootstrap the client to parse the
  // provided route out into a handler request method

  const routeTree = buildRouteTree(routeObj); // Parse the mock route object into endpoint factories

  const endpointFactories = generateEndpointFactories(routeTree)[namespace];
  const EndpointRequest = endpointFactories[Object.keys(endpointFactories)[0]].Ctor;

  if (options && options.params) {
    options.params.forEach(param => {
      // Only accept string parameters
      if (typeof param !== 'string') {
        return;
      } // If the parameter can be mapped to a mixin, apply that mixin


      if (typeof mixins[param] === 'object') {
        Object.keys(mixins[param]).forEach(key => {
          applyMixin(EndpointRequest.prototype, key, mixins[param][key]);
        });
        return;
      } // Attempt to create a simple setter for any parameters for which
      // we do not already have a custom mixin


      applyMixin(EndpointRequest.prototype, param, paramSetter(param));
    });
  } // Set any explicitly-provided object mixins


  if (options && typeof options.mixins === 'object') {
    // Set any specified mixin functions on the response
    Object.keys(options.mixins).forEach(key => {
      applyMixin(EndpointRequest.prototype, key, options.mixins[key]);
    });
  }

  function endpointFactory(options = {}) {
    return new EndpointRequest({ ...options,
      ...(this ? this._options : {})
    });
  }

  endpointFactory.Ctor = EndpointRequest;
  return endpointFactory;
}

module.exports = registerRoute;
},{"./route-tree":"node_modules/wpapi/lib/route-tree.js","./endpoint-factories":"node_modules/wpapi/lib/endpoint-factories.js","./util/parameter-setter":"node_modules/wpapi/lib/util/parameter-setter.js","./util/apply-mixin":"node_modules/wpapi/lib/util/apply-mixin.js","./mixins":"node_modules/wpapi/lib/mixins/index.js"}],"node_modules/wpapi/wpapi.js":[function(require,module,exports) {
/**
 * A WP REST API client for Node.js
 *
 * @example
 *     var wp = new WPAPI({ endpoint: 'http://src.wordpress-develop.dev/wp-json' });
 *     wp.posts().then(function( posts ) {
 *         console.log( posts );
 *     }).catch(function( err ) {
 *         console.error( err );
 *     });
 *
 * @license MIT
 })
 */
'use strict';

const objectReduce = require('./lib/util/object-reduce'); // This JSON file provides enough data to create handler methods for all valid
// API routes in WordPress 4.7


const defaultRoutes = require('./lib/data/default-routes.json');

const buildRouteTree = require('./lib/route-tree').build;

const generateEndpointFactories = require('./lib/endpoint-factories').generate; // The default endpoint factories will be lazy-loaded by parsing the default
// route tree data if a default-mode WPAPI instance is created (i.e. one that
// is to be bootstrapped with the handlers for all of the built-in routes)


let defaultEndpointFactories; // Constant used to detect first-party WordPress REST API routes

const apiDefaultNamespace = 'wp/v2'; // Pull in autodiscovery methods

const autodiscovery = require('./lib/autodiscovery'); // Pull in base module constructors


const WPRequest = require('./lib/constructors/wp-request'); // Pull in default HTTP transport


const httpTransport = require('./lib/http-transport');
/**
 * Construct a REST API client instance object to create
 *
 * @constructor WPAPI
 * @param {Object} options             An options hash to configure the instance
 * @param {String} options.endpoint    The URI for a WP-API endpoint
 * @param {String} [options.username]  A WP-API Basic Auth username
 * @param {String} [options.password]  A WP-API Basic Auth password
 * @param {String} [options.nonce]     A WP nonce for use with cookie authentication
 * @param {Object} [options.routes]    A dictionary of API routes with which to
 *                                     bootstrap the WPAPI instance: the instance will
 *                                     be initialized with default routes only
 *                                     if this property is omitted
 * @param {String} [options.transport] An optional dictionary of HTTP transport
 *                                     methods (.get, .post, .put, .delete, .head)
 *                                     to use instead of the defaults, e.g. to use
 *                                     a different HTTP library than superagent
 */


function WPAPI(options) {
  // Enforce `new`
  if (this instanceof WPAPI === false) {
    return new WPAPI(options);
  }

  if (typeof options.endpoint !== 'string') {
    throw new Error('options hash must contain an API endpoint URL string');
  } // Dictionary to be filled by handlers for default namespaces


  this._ns = {};
  this._options = {
    // Ensure trailing slash on endpoint URI
    endpoint: options.endpoint.replace(/\/?$/, '/')
  }; // If any authentication credentials were provided, assign them now

  if (options && (options.username || options.password || options.nonce)) {
    this.auth(options);
  }

  return this // Configure custom HTTP transport methods, if provided
  .transport(options.transport) // Bootstrap with a specific routes object, if provided
  .bootstrap(options && options.routes);
}
/**
 * Set custom transport methods to use when making HTTP requests against the API
 *
 * Pass an object with a function for one or many of "get", "post", "put",
 * "delete" and "head" and that function will be called when making that type
 * of request. The provided transport functions should take a WPRequest handler
 * instance (_e.g._ the result of a `wp.posts()...` chain or any other chaining
 * request handler) as their first argument; a `data` object as their second
 * argument (for POST, PUT and DELETE requests); and an optional callback as
 * their final argument. Transport methods should invoke the callback with the
 * response data (or error, as appropriate), and should also return a Promise.
 *
 * @example <caption>showing how a cache hit (keyed by URI) could short-circuit a get request</caption>
 *
 *     var site = new WPAPI({
 *       endpoint: 'http://my-site.com/wp-json'
 *     });
 *
 *     // Overwrite the GET behavior to inject a caching layer
 *     site.transport({
 *       get: function( wpreq, cb ) {
 *         var result = cache[ wpreq ];
 *         // If a cache hit is found, return it via the same callback/promise
 *         // signature as the default transport method
 *         if ( result ) {
 *           if ( cb && typeof cb === 'function' ) {
 *             cb( null, result );
 *           }
 *           return Promise.resolve( result );
 *         }
 *
 *         // Delegate to default transport if no cached data was found
 *         return WPAPI.transport.get( wpreq, cb ).then(function( result ) {
 *           cache[ wpreq ] = result;
 *           return result;
 *         });
 *       }
 *     });
 *
 * This is advanced behavior; you will only need to utilize this functionality
 * if your application has very specific HTTP handling or caching requirements.
 * Refer to the "http-transport" module within this application for the code
 * implementing the built-in transport methods.
 *
 * @memberof! WPAPI
 * @method transport
 * @chainable
 * @param {Object}   transport          A dictionary of HTTP transport methods
 * @param {Function} [transport.get]    The function to use for GET requests
 * @param {Function} [transport.post]   The function to use for POST requests
 * @param {Function} [transport.put]    The function to use for PUT requests
 * @param {Function} [transport.delete] The function to use for DELETE requests
 * @param {Function} [transport.head]   The function to use for HEAD requests
 * @returns {WPAPI} The WPAPI instance, for chaining
 */


WPAPI.prototype.transport = function (transport) {
  // Local reference to avoid need to reference via `this` inside forEach
  const _options = this._options; // Create the default transport if it does not exist

  if (!_options.transport) {
    _options.transport = Object.create(WPAPI.transport);
  } // Whitelist the methods that may be applied


  ['get', 'head', 'post', 'put', 'delete'].forEach(key => {
    if (transport && transport[key]) {
      _options.transport[key] = transport[key];
    }
  });
  return this;
};
/**
 * Default HTTP transport methods object for all WPAPI instances
 *
 * These methods may be extended or replaced on an instance-by-instance basis
 *
 * @memberof! WPAPI
 * @static
 * @property transport
 * @type {Object}
 */


WPAPI.transport = Object.create(httpTransport);
Object.freeze(WPAPI.transport);
/**
 * Convenience method for making a new WPAPI instance
 *
 * @example
 * These are equivalent:
 *
 *     var wp = new WPAPI({ endpoint: 'http://my.blog.url/wp-json' });
 *     var wp = WPAPI.site( 'http://my.blog.url/wp-json' );
 *
 * `WPAPI.site` can take an optional API root response JSON object to use when
 * bootstrapping the client's endpoint handler methods: if no second parameter
 * is provided, the client instance is assumed to be using the default API
 * with no additional plugins and is initialized with handlers for only those
 * default API routes.
 *
 * @example
 * These are equivalent:
 *
 *     // {...} means the JSON output of http://my.blog.url/wp-json
 *     var wp = new WPAPI({
 *       endpoint: 'http://my.blog.url/wp-json',
 *       json: {...}
 *     });
 *     var wp = WPAPI.site( 'http://my.blog.url/wp-json', {...} );
 *
 * @memberof! WPAPI
 * @static
 * @param {String} endpoint The URI for a WP-API endpoint
 * @param {Object} routes   The "routes" object from the JSON object returned
 *                          from the root API endpoint of a WP site, which should
 *                          be a dictionary of route definition objects keyed by
 *                          the route's regex pattern
 * @returns {WPAPI} A new WPAPI instance, bound to the provided endpoint
 */

WPAPI.site = function (endpoint, routes) {
  return new WPAPI({
    endpoint: endpoint,
    routes: routes
  });
};
/**
 * Generate a request against a completely arbitrary endpoint, with no assumptions about
 * or mutation of path, filtering, or query parameters. This request is not restricted to
 * the endpoint specified during WPAPI object instantiation.
 *
 * @example
 * Generate a request to the explicit URL "http://your.website.com/wp-json/some/custom/path"
 *
 *     wp.url( 'http://your.website.com/wp-json/some/custom/path' ).get()...
 *
 * @memberof! WPAPI
 * @param {String} url The URL to request
 * @returns {WPRequest} A WPRequest object bound to the provided URL
 */


WPAPI.prototype.url = function (url) {
  return new WPRequest({ ...this._options,
    endpoint: url
  });
};
/**
 * Generate a query against an arbitrary path on the current endpoint. This is useful for
 * requesting resources at custom WP-API endpoints, such as WooCommerce's `/products`.
 *
 * @memberof! WPAPI
 * @param {String} [relativePath] An endpoint-relative path to which to bind the request
 * @returns {WPRequest} A request object
 */


WPAPI.prototype.root = function (relativePath) {
  relativePath = relativePath || '';
  const options = { ...this._options
  }; // Request should be

  const request = new WPRequest(options); // Set the path template to the string passed in

  request._path = {
    '0': relativePath
  };
  return request;
};
/**
 * Set the default headers to use for all HTTP requests created from this WPAPI
 * site instance. Accepts a header name and its associated value as two strings,
 * or multiple headers as an object of name-value pairs.
 *
 * @example <caption>Set a single header to be used by all requests to this site</caption>
 *
 *     site.setHeaders( 'Authorization', 'Bearer trustme' )...
 *
 * @example <caption>Set multiple headers to be used by all requests to this site</caption>
 *
 *     site.setHeaders({
 *       Authorization: 'Bearer comeonwereoldfriendsright',
 *       'Accept-Language': 'en-CA'
 *     })...
 *
 * @memberof! WPAPI
 * @since 1.1.0
 * @chainable
 * @param {String|Object} headers The name of the header to set, or an object of
 *                                header names and their associated string values
 * @param {String}        [value] The value of the header being set
 * @returns {WPAPI} The WPAPI site handler instance, for chaining
 */


WPAPI.prototype.setHeaders = WPRequest.prototype.setHeaders;
/**
 * Set the authentication to use for a WPAPI site handler instance. Accepts basic
 * HTTP authentication credentials (string username & password) or a Nonce (for
 * cookie authentication) by default; may be overloaded to accept OAuth credentials
 * in the future.
 *
 * @example <caption>Basic Authentication</caption>
 *
 *     site.auth({
 *       username: 'admin',
 *       password: 'securepass55'
 *     })...
 *
 * @example <caption>Cookie/Nonce Authentication</caption>
 *
 *     site.auth({
 *       nonce: 'somenonce'
 *     })...
 *
 * @memberof! WPAPI
 * @method
 * @chainable
 * @param {Object} credentials            An authentication credentials object
 * @param {String} [credentials.username] A WP-API Basic HTTP Authentication username
 * @param {String} [credentials.password] A WP-API Basic HTTP Authentication password
 * @param {String} [credentials.nonce]    A WP nonce for use with cookie authentication
 * @returns {WPAPI} The WPAPI site handler instance, for chaining
 */

WPAPI.prototype.auth = WPRequest.prototype.auth; // Apply the registerRoute method to the prototype

WPAPI.prototype.registerRoute = require('./lib/wp-register-route');
/**
 * Deduce request methods from a provided API root JSON response object's
 * routes dictionary, and assign those methods to the current instance. If
 * no routes dictionary is provided then the instance will be bootstrapped
 * with route handlers for the default API endpoints only.
 *
 * This method is called automatically during WPAPI instance creation.
 *
 * @memberof! WPAPI
 * @chainable
 * @param {Object} routes The "routes" object from the JSON object returned
 *                        from the root API endpoint of a WP site, which should
 *                        be a dictionary of route definition objects keyed by
 *                        the route's regex pattern
 * @returns {WPAPI} The bootstrapped WPAPI client instance (for chaining or assignment)
 */

WPAPI.prototype.bootstrap = function (routes) {
  let routesByNamespace;
  let endpointFactoriesByNamespace;

  if (!routes) {
    // Auto-generate default endpoint factories if they are not already available
    if (!defaultEndpointFactories) {
      routesByNamespace = buildRouteTree(defaultRoutes);
      defaultEndpointFactories = generateEndpointFactories(routesByNamespace);
    }

    endpointFactoriesByNamespace = defaultEndpointFactories;
  } else {
    routesByNamespace = buildRouteTree(routes);
    endpointFactoriesByNamespace = generateEndpointFactories(routesByNamespace);
  } // For each namespace for which routes were identified, store the generated
  // route handlers on the WPAPI instance's private _ns dictionary. These namespaced
  // handler methods can be accessed by calling `.namespace( str )` on the
  // client instance and passing a registered namespace string.
  // Handlers for default (wp/v2) routes will also be assigned to the WPAPI
  // client instance object itself, for brevity.


  return objectReduce(endpointFactoriesByNamespace, (wpInstance, endpointFactories, namespace) => {
    // Set (or augment) the route handler factories for this namespace.
    wpInstance._ns[namespace] = objectReduce(endpointFactories, (nsHandlers, handlerFn, methodName) => {
      nsHandlers[methodName] = handlerFn;
      return nsHandlers;
    }, wpInstance._ns[namespace] || {
      // Create all namespace dictionaries with a direct reference to the main WPAPI
      // instance's _options property so that things like auth propagate properly
      _options: wpInstance._options
    }); // For the default namespace, e.g. "wp/v2" at the time this comment was
    // written, ensure all methods are assigned to the root client object itself
    // in addition to the private _ns dictionary: this is done so that these
    // methods can be called with e.g. `wp.posts()` and not the more verbose
    // `wp.namespace( 'wp/v2' ).posts()`.

    if (namespace === apiDefaultNamespace) {
      Object.keys(wpInstance._ns[namespace]).forEach(methodName => {
        wpInstance[methodName] = wpInstance._ns[namespace][methodName];
      });
    }

    return wpInstance;
  }, this);
};
/**
 * Access API endpoint handlers from a particular API namespace object
 *
 * @example
 *
 *     wp.namespace( 'myplugin/v1' ).author()...
 *
 *     // Default WP endpoint handlers are assigned to the wp instance itself.
 *     // These are equivalent:
 *     wp.namespace( 'wp/v2' ).posts()...
 *     wp.posts()...
 *
 * @memberof! WPAPI
 * @param {string} namespace A namespace string
 * @returns {Object} An object of route endpoint handler methods for the
 * routes within the specified namespace
 */


WPAPI.prototype.namespace = function (namespace) {
  if (!this._ns[namespace]) {
    throw new Error('Error: namespace ' + namespace + ' is not recognized');
  }

  return this._ns[namespace];
};
/**
 * Take an arbitrary WordPress site, deduce the WP REST API root endpoint, query
 * that endpoint, and parse the response JSON. Use the returned JSON response
 * to instantiate a WPAPI instance bound to the provided site.
 *
 * @memberof! WPAPI
 * @static
 * @param {string} url A URL within a REST API-enabled WordPress website
 * @returns {Promise} A promise that resolves to a configured WPAPI instance bound
 * to the deduced endpoint, or rejected if an endpoint is not found or the
 * library is unable to parse the provided endpoint.
 */


WPAPI.discover = url => {
  // local placeholder for API root URL
  let endpoint; // Try HEAD request first, for smaller payload: use WPAPI.site to produce
  // a request that utilizes the defined HTTP transports

  const req = WPAPI.site(url).root();
  return req.headers().catch(() => {
    // On the hypothesis that any error here is related to the HEAD request
    // failing, provisionally try again using GET because that method is
    // more widely supported
    return req.get();
  }) // Inspect response to find API location header
  .then(autodiscovery.locateAPIRootHeader).then(apiRootURL => {
    // Set the function-scope variable that will be used to instantiate
    // the bound WPAPI instance,
    endpoint = apiRootURL; // then GET the API root JSON object

    return WPAPI.site(apiRootURL).root().get();
  }).then(apiRootJSON => {
    // Instantiate & bootstrap with the discovered methods
    return new WPAPI({
      endpoint: endpoint,
      routes: apiRootJSON.routes
    });
  }).catch(err => {
    /* eslint-disable no-console */
    console.error(err);

    if (endpoint) {
      console.warn('Endpoint detected, proceeding despite error...');
      console.warn('Binding to ' + endpoint + ' and assuming default routes');
      return new WPAPI.site(endpoint);
    }

    throw new Error('Autodiscovery failed');
  });
};

module.exports = WPAPI;
},{"./lib/util/object-reduce":"node_modules/wpapi/lib/util/object-reduce.js","./lib/data/default-routes.json":"node_modules/wpapi/lib/data/default-routes.json","./lib/route-tree":"node_modules/wpapi/lib/route-tree.js","./lib/endpoint-factories":"node_modules/wpapi/lib/endpoint-factories.js","./lib/autodiscovery":"node_modules/wpapi/lib/autodiscovery.js","./lib/constructors/wp-request":"node_modules/wpapi/lib/constructors/wp-request.js","./lib/http-transport":"node_modules/wpapi/lib/http-transport.js","./lib/wp-register-route":"node_modules/wpapi/lib/wp-register-route.js"}],"src/components/settings.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = exports.wp = void 0;

var WPAPI = require('wpapi');

var wp = new WPAPI({
  endpoint: 'http://bun.cms-devl.bu.edu/responsi/wp-json'
});
exports.wp = wp;
var container = document.querySelector("#app");
exports.container = container;
},{"wpapi":"node_modules/wpapi/wpapi.js"}],"src/components/header.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = header;

var _settings = require("./settings");

var siteData = _settings.wp.root().get(function (error, data) {
  if (error) {
    console.log("Error retrieving site data: ".concat(error));
  }

  return data;
});

function createSiteInfo(data) {
  // TODO: Only output tags if not blank
  var content = "\n\t\t<h1>".concat(data.name, "</h1>\n\t\t<p>").concat(data.description, "</p>\n\t");

  _settings.container.insertAdjacentHTML('beforeend', content);

  return;
}

function createNavigation() {
  var content = "\n\t\t<nav>\n\t\t\t<a href=\"#\">Blog</a>\n\t\t\t<a href=\"#\">Users</a>\n\t\t</nav>\n\t";

  _settings.container.insertAdjacentHTML('beforeend', content);

  return;
}

function header() {
  Promise.resolve(siteData).then(createSiteInfo).then(createNavigation);
}
},{"./settings":"src/components/settings.js"}],"src/components/users.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = users;
exports.userData = void 0;

var _settings = require("./settings");

var _posts = require("./posts");

var userData = _settings.wp.users().get(function (error, data) {
  if (error) {
    console.log("Error retrieving posts data: ".concat(error));
  }

  return data;
});

exports.userData = userData;

function getPostsByAuthor(author) {
  var posts = _settings.wp.posts().author(author).get(function (error, data) {
    if (error) {
      console.log("Error retrieving posts data: ".concat(error));
    }

    return data;
  });

  return posts;
}

function listAuthors(data) {
  data.map(function (user) {
    var postsByAuthor = getPostsByAuthor(user.id);
    var content = "\n\t\t\t<h2>".concat(user.name, "</h2>\n\t\t\t<ul>\n\t\t");
    Promise.resolve(postsByAuthor).then(function (data) {
      data.map(function (post) {
        content += "<li><a href=\"#\">".concat(post.title.rendered, "</a></li>");
      });
    }).then(function () {
      content += "</ul>";

      _settings.container.insertAdjacentHTML('beforeend', content);
    });
  });
}

function users() {
  Promise.resolve(userData).then(listAuthors);
  return;
}
},{"./settings":"src/components/settings.js","./posts":"src/components/posts.js"}],"src/components/posts.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = posts;
exports.postsData = void 0;

var _settings = require("./settings");

var _users = require("./users");

var postsData = _settings.wp.posts().get(function (error, data) {
  if (error) {
    console.log("Error retrieving posts data: ".concat(error));
  }

  return data;
});

exports.postsData = postsData;

function buildPosts(data) {
  data.map(function (post) {
    var content = "\n\t\t\t<h2>".concat(post.title.rendered, "</h2>\n\t\t\t<p>").concat(post.excerpt.rendered, "</p>\n\t\t\t<a data-id=\"").concat(post.id, "\" class=\"button js-post-detail\" href=\"#\">Read more</a>\n\t\t");

    _settings.container.insertAdjacentHTML('beforeend', content);

    return;
  });
}

function createSingleView(e) {
  e.preventDefault();
  console.log(this);
  var postID = this.getAttribute("data-id");
  postsData.find(function (value, index) {
    console.log("Value is ".concat(value));
    console.log("Index is ".concat(value));
  });
}

function attachPostEvents() {
  var postLinks = Array.from(document.querySelectorAll(".js-post-detail"));
  postLinks.map(function (link) {
    link.addEventListener('click', createSingleView);
  });
}

function posts() {
  Promise.resolve(postsData).then(buildPosts).then(attachPostEvents);
  return;
}
},{"./settings":"src/components/settings.js","./users":"src/components/users.js"}],"src/components/nutrition.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nutrition;

var _settings = require("./settings");

var _posts = require("./posts");

function listNutrition(data) {
  console.log(data);
  var foodsArray = Array.from(data.foods);
  var totalCals = 0;
  console.log(foodsArray);
  foodsArray.map(function (food) {
    console.log(food);
    var content = "\n\t\t\t<img src=\"".concat(food.photo.thumb, "\" />\n\t\t\t<h2>").concat(food.food_name, "</h2>\n\t\t\t<p>Calories: ").concat(food.nf_calories, " kcals</p>\n\t\t");
    totalCals += food.nf_calories;

    _settings.container.insertAdjacentHTML('beforeend', content);

    return;
  });

  _settings.container.insertAdjacentHTML('beforeend', "Total Calories: ".concat(totalCals));
}

var query = {
  "query": "1 cup spinach two cups flour five tortillas",
  "num_servings": 4
};
var options = {
  method: 'POST',
  body: JSON.stringify(query),
  headers: {
    'Content-Type': 'application/json',
    'x-app-id': '5e4cca08',
    'x-app-key': '73f342cf2c1b8b19a42e3ba12ce9e420',
    "x-remote-user-id": "0",
    "cache-control": "no-cache"
  }
};

function getNutritionData(url, options) {
  return fetch(url, options).then(function (response) {
    return response.json();
  });
}

function nutrition() {
  getNutritionData('https://trackapi.nutritionix.com/v2/natural/nutrients', options).then(function (result) {
    return listNutrition(result);
  }).catch(function (error) {
    return console.log('error: ', error);
  }); //.then( response => listNutrition);

  return;
}
},{"./settings":"src/components/settings.js","./posts":"src/components/posts.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
'use strict';

var _header = _interopRequireDefault(require("./components/header"));

var _posts = _interopRequireDefault(require("./components/posts"));

var _users = _interopRequireDefault(require("./components/users"));

var _nutrition = _interopRequireDefault(require("./components/nutrition"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a blog listing page and single pages
// Create a user page that lists users and shows their blog posts
// Use event handlers instead of page refreshes for loading content
var UI = {
  render: function render(content) {
    var where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "beforeend";
    var container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
}; // Pull in the site title and description
// Create a menu of pages (can be hardcoded or use the WP REST API Menus Plugin)

(0, _header.default)(); //posts();
//users();

(0, _nutrition.default)(); // Application ID
// 5e4cca08
// Application key
// 73f342cf2c1b8b19a42e3ba12ce9e420

/*
https://trackapi.nutritionix.com/v2/search/instant?query=apple?x-app-id=5e4cca08&x-app-key=73f342cf2c1b8b19a42e3ba12ce9e420

axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=apple', {
 headers: {
   'x-app-id': 'your id',
   'x-app-key': 'your key',
 },
 ...
});

axios.get('https://trackapi.nutritionix.com/v2/natural/nutrients?query=apple', {
 headers: {
   'x-app-id': 'your id',
   'x-app-key': 'your key',
 },
 ...
});

*/
},{"./components/header":"src/components/header.js","./components/posts":"src/components/posts.js","./components/users":"src/components/users.js","./components/nutrition":"src/components/nutrition.js","./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61468" + '/');

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