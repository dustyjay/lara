/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ({

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

(window.webpackJsonp = window.webpackJsonp || []).push([[4], { 100: function _(t, e, n) {
    t.exports = n.p + "img/1833233.svg";
  }, 128: function _(t, e, n) {
    "use strict";
    n.r(e), e.default = { namespaced: !0, actions: { ALIAS: function ALIAS(t, e) {
          var n = t.rootState;window.analytics.alias(n.user.id);
        }, TRACK: function TRACK(t, e) {
          var n = t.rootState;e.properties = e.properties ? e.properties : {}, window.analytics.track(e.event, e.properties), "OrderForm Submitted" === e.event && window.obApi && n.currentProduct && window.obApi("track", "".concat(n.currentProduct.name, " Sub"));
        }, IDENTIFY: function IDENTIFY(t) {
          var e = t.rootState;e.user && window.analytics.identify(e.user.id, { email: e.user.email, name: "".concat(e.user.first_name, " ").concat(e.user.last_name) });
        }, PAGE: function PAGE(t, e) {
          window.analytics.page(e.name, e.data);
        } } };
  }, 129: function _(t, e, n) {
    "use strict";
    n.r(e);var i = n(216),
        o = n.n(i),
        r = function r(t) {
      return t.reduce(function (t, e) {
        return t.some(function (t) {
          return e.id === t.id;
        }) ? t : o()(t).concat([e]);
      }, []);
    };e.default = { namespaced: !0, state: function state() {
        return { hub: null };
      }, mutations: { SET_STATE: function SET_STATE(t, e) {
          t.hub = e.hub;
        } }, getters: { sortedTopics: function sortedTopics(t, e) {
          var n = [],
              i = [],
              o = !0,
              r = !1,
              a = void 0;try {
            for (var s, c = t.hub.topics[Symbol.iterator](); !(o = (s = c.next()).done); o = !0) {
              var l = s.value;e.articlesByTopic(l.name).length > 0 ? n.push(l) : i.push(l);
            }
          } catch (t) {
            r = !0, a = t;
          } finally {
            try {
              o || null == c.return || c.return();
            } finally {
              if (r) throw a;
            }
          }return n.concat(i);
        }, topicByName: function topicByName(t) {
          return function (e) {
            return t.hub.topics.find(function (t) {
              return t.name.toLowerCase() === e;
            });
          };
        }, categoryByName: function categoryByName(t, e) {
          return function (t, n) {
            return e.topicByName(t).categories.find(function (t) {
              return t.name.toLowerCase() === n;
            });
          };
        }, articlesByTopic: function articlesByTopic(t, e) {
          return function (t) {
            var n = e.topicByName(t.toLowerCase()),
                i = [],
                o = !0,
                r = !1,
                a = void 0;try {
              for (var s, c = n.categories[Symbol.iterator](); !(o = (s = c.next()).done); o = !0) {
                var l = s.value;i = i.concat(l.articles);
              }
            } catch (t) {
              r = !0, a = t;
            } finally {
              try {
                o || null == c.return || c.return();
              } finally {
                if (r) throw a;
              }
            }return i;
          };
        }, articleBySlug: function articleBySlug(t, e) {
          return function (t, n, i) {
            return e.categoryByName(t, n).articles.find(function (t) {
              return t.slug === i;
            });
          };
        }, featuredArticles: function featuredArticles(t) {
          return function (t) {
            var e = t.articles.filter(function (t) {
              return t.sticky;
            });return e.length < 3 && (e = e.concat(t.articles.filter(function (t) {
              return !t.sticky;
            }))), e.slice(0, 3);
          };
        }, relatedArticles: function relatedArticles(t, e) {
          return function (t, n, i) {
            var o = e.categoryByName(t, n).articles.filter(function (t) {
              return t.slug !== i;
            });if (o.forEach(function (t) {
              return t.category = n;
            }), o.length < 3) {
              var r = e.topicByName(t),
                  a = !0,
                  s = !1,
                  c = void 0;try {
                for (var l, u = function u() {
                  var t = l.value;if (t.name.toLowerCase() !== n) {
                    var e = t.articles;e.forEach(function (e) {
                      return e.category = t.name.toLowerCase();
                    }), o = o.concat(e);
                  }if (o.length >= 3) return "break";
                }, d = r.categories[Symbol.iterator](); !(a = (l = d.next()).done); a = !0) {
                  if ("break" === u()) break;
                }
              } catch (t) {
                s = !0, c = t;
              } finally {
                try {
                  a || null == d.return || d.return();
                } finally {
                  if (s) throw c;
                }
              }
            }return o.slice(0, 3);
          };
        }, hubContentDetails: function hubContentDetails(t) {
          var e = [],
              n = [];return t.hub.topics.map(function (t) {
            t.categories.map(function (t) {
              t.articles.map(function (t) {
                e.push(t.author), n.push(t);
              });
            });
          }), { totalArticles: n.length, articles: n, authors: r(e) };
        }, topicContentDetails: function topicContentDetails() {
          return function (t) {
            var e = [],
                n = [];return t.categories.map(function (t) {
              t.articles.map(function (t) {
                e.push(t.author), n.push(t);
              });
            }), { totalArticles: n.length, articles: n, authors: r(e) };
          };
        }, categoryContentDetails: function categoryContentDetails() {
          return function (t) {
            var e = t.map(function (t) {
              return t.author;
            });return { totalArticles: t.length, authors: r(e) };
          };
        } } };
  }, 130: function _(t, e, n) {
    "use strict";
    n.r(e);var i = n(98),
        o = n(219),
        r = n.n(o),
        a = { data: null, validating: !1, applied: !1 };e.default = { namespaced: !0, state: function state() {
        return a;
      }, mutations: { SET_DATA: function SET_DATA(t, e) {
          t.data = e, t.applied = !0;
        }, SET_APPLIED: function SET_APPLIED(t, e) {
          t.applied = e;
        }, RESET: function RESET(t) {
          Object.assign(t, a);
        } }, actions: { SET: function SET(t, e) {
          var n = t.commit;n("SET_DATA", e), n("SET_BANNER", new i.a(e).fullDescription(), { root: !0 });
        }, REMOVE: function REMOVE(t) {
          var e = t.commit;t.state, t.dispatch;r.a.remove("discountCode", { path: "/" }), e("RESET");
        } }, getters: { validForCurrentProduct: function validForCurrentProduct(t, e, n) {
          if (!t.data || !n.currentProduct) return null;var i = t.data.valid_test_panels;return 0 === i.length || i.indexOf(n.currentProduct.testPanel.id) > -1;
        }, shortDescription: function shortDescription(t) {
          if (t.data) return new i.a(t.data).shortDescription();
        }, codeForPurchase: function codeForPurchase(t) {
          if (t.data) return t.data.code;
        } } };
  }, 133: function _(t, e) {
    "serviceWorker" in navigator ? navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function (t) {
      window.$sw = t;
    }).catch(function (t) {
      console.error("Service worker registration failed:", t);
    }) : console.warn("Service workers are not supported.");
  }, 134: function _(t, e, n) {
    "use strict";
    var i = { name: "Hero", props: { backgroundType: { type: String, validator: function validator(t) {
            return ["colour", "image", "specialist", "backgroundImage"].includes(t);
          }, required: !0 }, background: { type: String }, image: { type: String } }, computed: { pillColourModifier: function pillColourModifier() {
          return this.backgroundColour ? "pill--".concat(this.backgroundColour) : null;
        }, pillClass: function pillClass() {
          var t;return "colour" === this.backgroundType || "specialist" === this.backgroundType ? (t = "pill--colour", this.background && (t += " pill--".concat(this.background))) : t = "pill--image", t;
        }, inlineStyle: function inlineStyle() {
          return "image" === this.backgroundType ? "background-image: url('".concat(this.background, "')") : null;
        } } },
        o = (n(260), n(1)),
        r = Object(o.a)(i, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "hero", class: { "hero__padding-bottom": "backgroundImage" === t.backgroundType } }, [n("div", { staticClass: "grid-container" }, [n("div", { staticClass: "grid-x grid-margin-x" }, ["image" === t.backgroundType || "backgroundImage" === t.backgroundType ? n("div", { staticClass: "cell small-12 medium-6 large-5 large-offset-1" }, [n("div", { staticClass: "hero__content" }, [n("div", { staticClass: "hero__heading" }, [t._t("heading")], 2), n("div", { staticClass: "hero__text" }, [t._t("text")], 2), n("div", { staticClass: "hero__cta" }, [t._t("cta")], 2)])]) : t._e(), "colour" === t.backgroundType ? n("div", { staticClass: "cell small-12 medium-6 large-4 large-offset-1" }, [n("div", { staticClass: "hero__content" }, [n("div", { staticClass: "hero__heading" }, [t._t("heading")], 2), n("div", { staticClass: "hero__text" }, [t._t("text")], 2), n("div", { staticClass: "hero__cta" }, [t._t("cta")], 2)])]) : t._e(), "specialist" === t.backgroundType ? n("div", { staticClass: "cell small-12 medium-6 large-5" }, [n("div", { staticClass: "hero__content" }, [n("div", { staticClass: "hero__heading" }, [t._t("heading")], 2), n("div", { staticClass: "hero__text" }, [t._t("text")], 2), n("div", { staticClass: "hero__cta" }, [t._t("cta")], 2)])]) : t._e(), "image" === t.backgroundType ? n("div", { staticClass: "cell medium-6 large-6" }, [t.image ? n("div", { staticClass: "hero__image" }, [n("img", { attrs: { src: t.image } })]) : t._e(), n("div", { staticClass: "hero__background-image" }, [n("img", { attrs: { src: t.background } })])]) : t._e(), "backgroundImage" === t.backgroundType ? n("div", { staticClass: "cell small-12 medium-6 large-6" }, [n("div", { staticClass: "pill-image-container", class: t.pillClass }, [n("div", { staticClass: "pill-image", style: { backgroundImage: "url(" + t.image + ")" } }, [t._t("default")], 2)])]) : t._e(), "colour" === t.backgroundType || "specialist" === t.backgroundType ? n("div", { staticClass: "cell medium-6 large-7" }, [n("div", { staticClass: "pill", class: t.pillClass }), n("div", { staticClass: "hero__image" }, [t.image ? n("img", { attrs: { src: t.image } }) : t._e(), t._t("default")], 2)]) : t._e()])])]);
    }, [], !1, null, null, null);r.options.__file = "Hero.vue";e.a = r.exports;
  }, 135: function _(t, e, n) {
    "use strict";
    var i,
        o = n(2),
        r = n.n(o),
        a = n(5),
        s = n.n(a),
        c = n(7),
        l = n.n(c),
        u = ["email", "first_name"],
        d = { name: "LeadCaptureForm", data: function data() {
        return { error: !1, submitting: !1, submitted: !1, email: null, newsletter: !1 };
      }, props: { backgroundStyle: { type: String, default: "light" }, submitText: { type: String, default: "Submit" }, campaignId: { type: String, required: !0 }, feedback: { type: String, default: "Thank you, please check your email." } }, computed: { interpolatedFeeback: function interpolatedFeeback() {
          for (var t = this.feedback, e = 0; e < u.length; e++) {
            var n = u[e];t = t.replace("$".concat(n), this[n]);
          }return t;
        } }, methods: { handleSubmit: (i = s()(r.a.mark(function t() {
          var e = this;return r.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  this.$validator.validateAll().then(function (t) {
                    if (t) {
                      e.submitting = !0;var n = { subscribers: [{ email: e.email, reactivate_if_removed: !0, custom_fields: { newsletter: e.newsletter } }] };l.a.post("/drip/campaigns/".concat(e.campaignId, "/subscribers"), n).then(function (t) {
                        t.data;e.submitting = !1, e.submitted = !0;
                      }).catch(function (t) {
                        422 !== t.response.status ? (e.error = !0, e.submitting = !1) : (e.submitted = !0, e.submitting = !1);
                      });
                    }
                  });case 1:case "end":
                  return t.stop();}
            }
          }, t, this);
        })), function () {
          return i.apply(this, arguments);
        }) } },
        p = (n(464), n(1)),
        h = Object(p.a)(d, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "lead-capture-form", class: "lead-capture-form--" + t.backgroundStyle }, [n("div", { staticClass: "lead-capture-form__content" }, [n("div", { staticClass: "lead-capture-form__slot-content" }, [t._t("default")], 2), t.submitted ? n("div", { staticClass: "lead-capture-form__feedback" }, [n("p", [n("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "20", height: "20", viewBox: "0 0 20 20" } }, [n("defs", [n("path", { attrs: { id: "a", d: "M3.707 9.293c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414l5 5c.39.39 1.024.39 1.414 0l9-9c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L8 13.586 3.707 9.293z" } })]), n("use", { attrs: { fill: "#aeec73", "fill-rule": "nonzero", "xlink:href": "#a" } })]), n("span", [t._v(t._s(t.interpolatedFeeback))])])]) : n("form", { on: { submit: t.handleSubmit } }, [n("div", { staticClass: "lead-capture-form__fields", class: { ".lead-capture-form__fields--inline": !0 } }, [n("div", { staticClass: "lead-capture-form__group" }, [n("text-input", { directives: [{ name: "validate", rawName: "v-validate", value: "required|email", expression: '"required|email"' }], staticClass: "lead-capture-form__input", attrs: { type: "email", name: "email", placeholder: "Email address", error: t.errors.has("email"), feedback: t.errors.first("email") }, on: { keyup: function keyup(e) {
            return "button" in e || !t._k(e.keyCode, "enter", 13, e.key, "Enter") ? t.handleSubmit(e) : null;
          } }, model: { value: t.email, callback: function callback(e) {
            t.email = e;
          }, expression: "email" } }), n("checkbox", { staticClass: "lead-capture-form__input", attrs: { id: "lead-capture-form", name: "marketingConsent" }, model: { value: t.newsletter, callback: function callback(e) {
            t.newsletter = e;
          }, expression: "newsletter" } }, [n("span", { staticClass: "lead-capture-form__checkbox-label" }, [t._v("I'd also like to receive future updates")])])], 1), n("async-button", { staticClass: "lead-capture-form__input lead-capture-form__input--submit", attrs: { text: t.submitText, waiting: t.submitting, error: t.error }, on: { click: t.handleSubmit } })], 1)])])]);
    }, [], !1, null, null, null);h.options.__file = "LeadCaptureForm.vue";e.a = h.exports;
  }, 136: function _(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Y2xvc2UtaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIDkuODg3TDIuNTUuNDM3QzEuOTY4LS4xNDUgMS4wMi0uMTQ1LjQ0LjQzOGMtLjU4NC41ODQtLjU4NCAxLjUzIDAgMi4xMTRMOS44ODggMTJsLTkuNDUgOS40NWMtLjU4NC41ODMtLjU4NCAxLjUzIDAgMi4xMTIuNTgzLjU4NCAxLjUzLjU4NCAyLjExMyAwbDkuNDUtOS40NSA5LjQ1IDkuNDVjLjU4My41ODQgMS41My41ODQgMi4xMTIgMCAuNTg0LS41ODMuNTg0LTEuNTMgMC0yLjExM0wxNC4xMTIgMTJsOS40NS05LjQ1Yy41ODQtLjU4My41ODQtMS41MyAwLTIuMTEyLS41ODMtLjU4NC0xLjUzLS41ODQtMi4xMTMgMEwxMiA5Ljg4OHoiIGZpbGw9IiMzRDQyNTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";
  }, 143: function _(t, e, n) {
    t.exports = n.p + "img/288e309.svg";
  }, 144: function _(t, e, n) {
    t.exports = n.p + "img/5c34900.svg";
  }, 145: function _(t, e, n) {
    t.exports = n.p + "img/fec37bc.svg";
  }, 146: function _(t, e, n) {
    t.exports = n.p + "img/4ee994b.svg";
  }, 224: function _(t, e, n) {
    "use strict";
    var i = { name: "FullMenu", components: { ProductMenu: n(94).a }, data: function data() {
        return { menuItems: { About: "/about", Help: "/help", "Sample collection": "/sample-collection", accuracy: "/accuracy", "Our lab": "/lab", Contact: "/contact", Specialists: "/specialists" } };
      } },
        o = (n(271), n(1)),
        r = Object(o.a)(i, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "full-menu" }, [n("div", { staticClass: "full-menu__heading" }, [t._v("Products")]), n("product-menu"), n("div", { staticClass: "full-menu__heading" }, [t._v("Information")]), n("ul", t._l(this.menuItems, function (e, i) {
        return n("li", { staticClass: "full-menu__item" }, [n("nuxt-link", { attrs: { to: e } }, [t._v(t._s(i))])], 1);
      }))], 1);
    }, [], !1, null, null, null);r.options.__file = "FullMenu.vue";e.a = r.exports;
  }, 225: function _(t, e, n) {
    "use strict";
    var i = { name: "InformationMenu", props: { items: { type: Array, required: !0 } }, methods: { menuItemClicked: function menuItemClicked() {
          this.$emit("menuItemClicked");
        } } },
        o = (n(273), n(1)),
        r = Object(o.a)(i, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "information-menu" }, [n("ul", { staticClass: "information-menu__list" }, [n("li", { staticClass: "information-menu__item information-menu__item--title" }, [t._v("Information")]), t._l(t.items, function (e) {
        return n("li", { staticClass: "information-menu__item", on: { click: t.menuItemClicked } }, [e.external ? n("a", { attrs: { href: e.path } }, [t._v(t._s(e.name))]) : n("nuxt-link", { attrs: { to: e.path } }, [t._v(t._s(e.name))])], 1);
      })], 2)]);
    }, [], !1, null, null, null);r.options.__file = "InformationMenu.vue";e.a = r.exports;
  }, 233: function _(t, e, n) {
    t.exports = n(482);
  }, 238: function _(t, e, n) {
    var i = { "./authenticated.js": 239, "./redirects.js": 258 };function o(t) {
      var e = r(t);return n(e);
    }function r(t) {
      var e = i[t];if (!(e + 1)) {
        var n = new Error("Cannot find module '" + t + "'");throw n.code = "MODULE_NOT_FOUND", n;
      }return e;
    }o.keys = function () {
      return Object.keys(i);
    }, o.resolve = r, t.exports = o, o.id = 238;
  }, 239: function _(t, e, n) {
    "use strict";
    n.r(e);var i = n(2),
        o = n.n(i),
        r = n(5),
        a = n.n(r),
        s = n(7),
        c = n.n(s),
        l = n(13),
        u = n.n(l);function d(t) {
      return p.apply(this, arguments);
    }function p() {
      return (p = a()(o.a.mark(function t(e) {
        var n, i, r, a;return o.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                t.prev = 0, t.next = 10;break;case 5:
                return n = t.sent, i = n.data, t.abrupt("return", i.data.attributes);case 10:
                return t.next = 12, c.a.get("/api/v1/self");case 12:
                return r = t.sent, a = r.data, t.abrupt("return", a.data.attributes);case 15:
                t.next = 20;break;case 17:
                return t.prev = 17, t.t0 = t.catch(0), t.abrupt("return", null);case 20:case "end":
                return t.stop();}
          }
        }, t, this, [[0, 17]]);
      }))).apply(this, arguments);
    }e.default = function () {
      var t = a()(o.a.mark(function t(e) {
        var n, i;return o.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.next = 2, d(e);case 2:
                (n = t.sent) ? (e.store.commit("SET_USER", n), e.store.commit("SET_LOGGED_IN", !0)) : (i = u.a.serialize("redirectTo", e.route.fullPath, { path: "/", maxAge: 600 }), document.cookie = i, e.redirect("/login"));case 4:case "end":
                return t.stop();}
          }
        }, t, this);
      }));return function (e) {
        return t.apply(this, arguments);
      };
    }();
  }, 258: function _(t, e, n) {
    "use strict";
    n.r(e), e.default = function (t) {
      var e = t.isDev,
          n = t.req,
          i = t.route,
          o = t.redirect;t.store;if (!e && n) {
        var r = n.headers.host;"http" === (n.headers["x-forwarded-proto"] || (n.connection.encrypted ? "https" : "http")) ? o(301, "https://".concat(r.replace(/^www\./, "")).concat(n.url)) : null !== r.match(/^www/) && o(301, "https://".concat(r.replace(/^www\./, "")).concat(n.url));
      }"/dashboard" === i.path && o(301, "https://app.thriva.co"), "/join" === i.path && o(302, "".concat("https://app.thriva.co").concat(i.fullPath)), "/login" === i.path && o(302, "".concat("https://app.thriva.co").concat(i.fullPath)), "/forgot-password" === i.path && o(302, "".concat("https://app.thriva.co").concat(i.fullPath)), "/register-kit" === i.path && o(302, "".concat("https://app.thriva.co").concat(i.fullPath)), "/subscriptions" === i.path && o(302, "".concat("https://app.thriva.co").concat(i.fullPath)), "/personalise" === i.path && o(302, "".concat("https://app.thriva.co").concat(i.fullPath)), "/health-profile" === i.path && o(302, "".concat("https://app.thriva.co").concat(i.fullPath)), "/packages/advanced" !== i.path && "/tests/TPIQH3" !== i.path || o(301, "/products/advanced"), "/products" !== i.path && "/landing/baseline" !== i.path && "/packages" !== i.path && "/packages/baseline" !== i.path && "/tests/b12" !== i.path && "/tests/TPEHZG" !== i.path || o(301, "/products/baseline"), "/packages/essential" !== i.path && "/tests/lifestyle" !== i.path && "/tests/TPZ9487NVX" !== i.path || o(301, "/products/essential"), "/organisation/login" === i.path && o(301, "https://specialists.thriva.co/login"), "/hub/cholesterol/high-cholesterol-how-to-know-if-at-risk" === i.path && o(301, "/hub/cholesterol/know/high-cholesterol-how-to-know-if-you-are-at-risk"), "/hub/cholesterol/get-to-know-the-factors-that-cause-high-cholesterol" === i.path && o(301, "/hub/cholesterol"), "/hub/cholesterol/what-is-ldl-and-why-do-you-need-to-know-about-it" === i.path && o(301, "/hub/cholesterol/understand/what-is-ldl-and-why-do-you-need-to-know-about-it"), "/hub/cholesterol/what-are-the-best-foods-to-lower-your-cholesterol" === i.path && o(301, "/hub/cholesterol/improve/what-are-the-best-foods-to-lower-your-cholesterol"), "/hub/cholesterol/everything-you-need-to-know-about-hdl" === i.path && o(301, "/hub/cholesterol/understand/everything-you-need-to-know-about-hdl"), "/hub/cholesterol/fats-and-cholesterol-what-is-the-link" === i.path && o(301, "/hub/cholesterol/understand/fats-and-cholesterol-what-is-the-link"), "/hub/cholesterol/what-you-need-to-know-about-triglycerides" === i.path && o(301, "/hub/cholesterol/understand/what-you-need-to-know-about-triglycerides"), "/hub/cholesterol/how-bad-are-saturated-fats-for-your-cholesterol" === i.path && o(301, "/hub/cholesterol/understand/how-bad-are-saturated-fats-for-your-cholesterol"), "/hub/cholesterol/what-you-need-to-know-about-the-mediterranean-diet" === i.path && o(301, "/hub/cholesterol/improve/what-you-need-to-know-about-the-mediterranean-diet"), "/privacy-policy" === i.path && o(301, "/privacy"), "/gifts" === i.path && o(301, "https://try.thriva.co/gifting/"), "/fatberg" === i.path && o(301, "https://try.thriva.co/fatberg-london/?utm_source=pr&utm_medium=all&utm_campaign=fatberg"), "/checkup" === i.path && o(301, "https://try.thriva.co/checkup?discount_code=CHECKUP&utm_source=directmail&utm_campiagn=march_dm"), "/tests/TPTYNN" === i.path && o(301, "http://try.thriva.co/cortisol-test/"), "/thyroid" !== i.path && "/tests/thyroid" !== i.path && "/tests/thyroid-plus" !== i.path && "/tests/energy" !== i.path || o(301, "https://try.thriva.co/thyroid"), "/health-kit" === i.path && o(301, "/sample-collection"), "/tips" === i.path && o(301, "https://intercom.help/thrivahelpcenter/the-thriva-kit/how-to-collect-your-thriva-sample"), "/refer" === i.path && o(301, "".concat("https://app.thriva.co", "/dashboard/referrals")), "/cortisol" === i.path && o(301, "https://thriva.typeform.com/to/bqqeqD");
    };
  }, 260: function _(t, e, n) {
    "use strict";
    var i = n(72);n.n(i).a;
  }, 261: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\n.hero{position:relative;overflow:hidden\n}\n.hero__padding-bottom{padding-bottom:360px\n}\n@media (min-width:768px){\n.hero__padding-bottom{padding-bottom:inherit\n}\n}\n.hero .hero__content{max-width:500px;padding:30px 10px 40px;margin:auto\n}\n.hero .hero__content .hero__cta{margin-top:15px\n}\n.hero .hero__content .hero__cta .cta__secondary .button{margin-right:10px;margin-bottom:15px\n}\n.hero .hero__content .hero__cta .cta__secondary__details{margin:10px auto 30px;padding:13px 0 16px;border-top:1px solid #e5e7f1;border-bottom:1px solid #e5e7f1;font-size:14px;color:#99a2bf\n}\n.hero .hero__content .hero__price{margin-bottom:20px;color:#99a2bf\n}\n.hero .hero__content .hero__price-amount{color:#565b75;font-weight:400;font-size:1.625rem\n}\n@media (min-width:768px){\n.hero .hero__content{max-width:410px;padding:90px 0 110px;margin:0\n}\n.hero .hero__content .hero__cta{margin-top:40px\n}\n}\n.hero .pill{position:relative\n}\n.hero .pill:before{content:"";position:absolute;height:2000px;width:1000px;background-color:#fa476f;border-radius:1000px;z-index:-100;-webkit-transform:rotate(-60deg);transform:rotate(-60deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);left:-320px\n}\n@media (min-width:460px){\n.hero .pill:before{left:-200px\n}\n}\n@media (min-width:768px){\n.hero .pill:before{content:"";position:absolute;height:720px;width:1440px;background-color:#fa476f;border-radius:720px;z-index:-100;-webkit-transform:rotate(-60deg);transform:rotate(-60deg);left:inherit;right:-970px;top:-510px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:home-hero-pill 1.5s ease-out 1;animation:home-hero-pill 1.5s ease-out 1\n}\n@-webkit-keyframes home-hero-pill{\n0%{-webkit-transform:rotate(-30deg) translate3d(100px,100px,0);transform:rotate(-30deg) translate3d(100px,100px,0)\n}\n}\n@keyframes home-hero-pill{\n0%{-webkit-transform:rotate(-30deg) translate3d(100px,100px,0);transform:rotate(-30deg) translate3d(100px,100px,0)\n}\n}\n}\n@media (min-width:1024px){\n.hero .pill:before{content:"";position:absolute;height:780px;width:1560px;background-color:#fa476f;border-radius:780px;z-index:-100;-webkit-transform:rotate(-60deg);transform:rotate(-60deg);right:-800px;top:-620px\n}\n}\n.hero .pill--pink:before{background-color:#fa476f\n}\n.hero .pill--purple:before{background-color:#664277\n}\n.hero .pill--blue:before{background-color:#3ecadd\n}\n.hero .pill--light-purple:before{background-color:#99a2bf\n}\n.hero .pill--green:before{background-color:#aeec73\n}\n.hero .pill--sand:before{background-color:#f0dbcc\n}\n.hero .pill--orange:before{background-color:#ffc662\n}\n.hero .pill--red:before{background-color:#ff7987\n}\n.hero .pill--xx-light-grey:before{background-color:#f7f9fb\n}\n.hero .pill--x-light-grey:before{background-color:#eff4f7\n}\n.hero .pill--light-grey:before{background-color:#e5e7f1\n}\n.hero .pill--input-border-grey:before{background-color:#ced0d9\n}\n.hero .pill--grey:before{background-color:#99a2bf\n}\n.hero .pill--dark-grey:before{background-color:#6f749a\n}\n.hero .pill--x-dark-grey:before{background-color:#565b75\n}\n.hero .pill--xx-dark-grey:before{background-color:#3d4250\n}\n.hero .pill--white:before{background-color:#fff\n}\n.hero .pill--headings:before{background-color:#565b75\n}\n.hero .pill--body:before{background-color:#6f749a\n}\n.hero .pill-image-container{overflow:hidden;content:"";position:absolute;height:2000px;width:1000px;background-color:transparent;border-radius:1000px;z-index:-100;-webkit-transform:rotate(-60deg);transform:rotate(-60deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);left:-320px\n}\n@media (min-width:460px){\n.hero .pill-image-container{left:-200px\n}\n}\n@media (min-width:768px){\n.hero .pill-image-container{content:"";position:absolute;height:720px;width:1440px;background-color:transparent;border-radius:720px;z-index:-100;-webkit-transform:rotate(-60deg);transform:rotate(-60deg);left:inherit;right:-970px;top:-510px;-webkit-transform:rotate(-50deg);transform:rotate(-50deg)\n}\n}\n@media (min-width:1024px){\n.hero .pill-image-container{content:"";position:absolute;height:780px;width:1560px;background-color:transparent;border-radius:780px;z-index:-100;-webkit-transform:rotate(-60deg);transform:rotate(-60deg);right:-800px;top:-620px\n}\n}\n.hero .pill-image-container .pill-image{background-size:contain;background-repeat:no-repeat;width:100%;height:100%;position:absolute;top:-300px;left:0\n}\n@media (min-width:768px){\n.hero .pill-image-container .pill-image{-webkit-transform:rotate(50deg);transform:rotate(50deg);top:185px;left:-300px\n}\n}\n@media (min-width:1024px){\n.hero .pill-image-container .pill-image{-webkit-transform:rotate(60deg);transform:rotate(60deg);top:185px;left:-300px\n}\n}\n.hero .hero__image{padding:30px 0;max-width:670px;margin:auto;height:100%;display:flex;justify-content:center;align-items:center\n}\n.hero .hero__image img,.hero .hero__image svg{width:100%;height:auto\n}\n@media (min-width:768px){\n.hero .hero__image{max-width:inherit;margin:auto\n}\n}\n.hero .hero__background-image{position:relative;height:180px\n}\n.hero .hero__background-image img{position:absolute;width:140%;left:-60px\n}\n@media (min-width:520px){\n.hero .hero__background-image img{left:-140px\n}\n}\n@media (min-width:768px){\n.hero .hero__background-image img{width:700px;height:700px;top:-180px;left:0\n}\n}\n@media (min-width:1024px){\n.hero .hero__background-image img{width:800px;height:800px;top:-340px;left:60px\n}\n}\n@media (min-width:1024px){\n.product-page--essential .hero .hero__content{padding:90px 0 0\n}\n}\n@media (min-width:768px){\n.product-page--advanced .hero .hero__content,.product-page--baseline .hero .hero__content{padding:90px 0 120px\n}\n}\n@media (min-width:1024px){\n.product-page--advanced .hero .hero__content,.product-page--baseline .hero .hero__content{padding:90px 0 50px\n}\n}', ""]);
  }, 262: function _(t, e, n) {
    "use strict";
    var i = n(73);n.n(i).a;
  }, 263: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.error-page .hero{padding-bottom:100px\n}\n.error-page .button.primary{margin-right:15px\n}", ""]);
  }, 264: function _(t, e, n) {
    "use strict";
    var i = n(74);n.n(i).a;
  }, 265: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}", ""]);
  }, 268: function _(t, e, n) {
    t.exports = n.p + "img/bdf5d46.svg";
  }, 269: function _(t, e, n) {
    "use strict";
    var i = n(76);n.n(i).a;
  }, 270: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\n.product-menu{list-style:none;margin:0;padding:20px 0\n}\n.product-menu .product-menu__item a{display:flex;align-items:center;color:#3d4250;padding:10px 30px;text-decoration:none;width:100%;position:relative\n}\n.product-menu .product-menu__item a img{width:30px;height:30px\n}\n.product-menu .product-menu__item a.nuxt-link-active:before{content:"";width:5px;height:5px;border-radius:50%;position:absolute;background:#fa476f;left:15px;top:22px\n}\n.product-menu .product-menu__item--essential a.nuxt-link-active:before{background-color:#aeec73\n}\n.product-menu .product-menu__item--baseline a.nuxt-link-active:before{background-color:#ffc662\n}\n.product-menu .product-menu__item--advanced a.nuxt-link-active:before{background-color:#664277\n}\n.product-menu .product-menu__item:hover{background-color:#f7f9fb\n}\n.product-menu .product-menu__item-details{margin-left:15px\n}\n.product-menu .product-menu__item-description{display:none\n}\n.product-menu .product-menu__item-title{margin:0;line-height:.7em\n}\n.product-menu .product-menu__item--title{letter-spacing:2px;text-transform:uppercase;padding:10px 30px\n}\n.product-menu .product-menu__item--title:hover{background:none\n}\n.product-menu .product-menu__item-icon{width:30px;height:30px\n}\n.product-menu .divider{display:none\n}\n@media (min-width:768px){\n.product-menu .product-menu__item a{align-items:flex-start;padding:20px 30px\n}\n.product-menu .product-menu__item a img{width:40px;height:40px\n}\n.product-menu .product-menu__item a.nuxt-link-active:before{top:36px\n}\n.product-menu .product-menu__item-title{margin-bottom:10px\n}\n.product-menu .product-menu__item-description{display:block\n}\n.product-menu .product-menu__item--title{display:none\n}\n.product-menu .divider{display:block\n}\n}', ""]);
  }, 271: function _(t, e, n) {
    "use strict";
    var i = n(77);n.n(i).a;
  }, 272: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.full-menu{background:#fff;padding:30px;box-shadow:0 .375rem 1.25rem 0 rgba(61,66,80,.18);border-radius:.625rem\n}\n.full-menu__heading{letter-spacing:2px;text-transform:uppercase;color:#99a2bf;margin:20px 0\n}\n.full-menu ul{list-style:none;padding:0\n}\n.full-menu ul .full-menu__item{margin-top:20px\n}\n.full-menu ul .full-menu__item a{text-decoration:none;color:#3d4250;font-size:18px\n}", ""]);
  }, 273: function _(t, e, n) {
    "use strict";
    var i = n(78);n.n(i).a;
  }, 274: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\n.information-menu{padding:20px 0\n}\n.information-menu .information-menu__list{padding:0;margin:0\n}\n.information-menu .information-menu__list .information-menu__item{list-style:none\n}\n.information-menu .information-menu__list .information-menu__item a{text-decoration:none;color:#3d4250;padding:10px 30px;display:flex;align-items:center;position:relative;font-weight:400;font-size:1.125rem\n}\n.information-menu .information-menu__list .information-menu__item a.nuxt-link-active:before{content:"";position:absolute;width:5px;height:5px;border-radius:50%;left:15px;top:15px;background:#fa476f\n}\n.information-menu .information-menu__list .information-menu__item:hover{background-color:#f7f9fb\n}\n.information-menu .information-menu__list .information-menu__item--title{letter-spacing:2px;text-transform:uppercase;padding:10px 30px\n}\n.information-menu .information-menu__list .information-menu__item--title:hover{background:none\n}\n.information-menu .information-menu__list .information-menu__item.divider{display:none\n}\n@media (min-width:768px){\n.information-menu .information-menu__list .information-menu__item--title{display:none\n}\n.information-menu .information-menu__list .information-menu__item a{font-size:1rem\n}\n.information-menu .information-menu__item--divider{display:block;margin:10px 0;width:100%;height:2px;background:#eff4f7\n}\n}', ""]);
  }, 275: function _(t, e, n) {
    "use strict";
    var i = n(79);n.n(i).a;
  }, 276: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\nbody.navigation--dropdown-active{position:fixed\n}\nbody.navigation--dropdown-active,body.navigation--dropdown-active .dropdown-holder{overflow-x:hidden;overflow-y:scroll\n}\nbody.navigation--dropdown-active .header{position:fixed;left:0;top:0\n}\nbody.navigation--dropdown-active .content{margin-top:1000px\n}\n.navigation{z-index:999;display:flex;justify-content:flex-end;align-items:center\n}\n@media (min-width:768px){\n.navigation{overflow:hidden\n}\n}\n.navigation .navigation__toggle{position:relative;margin-left:20px;width:32px;height:32px;display:flex;flex-direction:column;justify-content:space-around;padding:4px 0\n}\n.navigation .navigation__toggle .bar{position:absolute;width:32px;height:3px;border-radius:3px;background-color:#3d4250;transition:all .25s ease-in-out\n}\n.navigation .navigation__toggle :first-child{-webkit-transform:translateY(-8px);transform:translateY(-8px)\n}\n.navigation .navigation__toggle :last-child{-webkit-transform:translateY(8px);transform:translateY(8px)\n}\n.navigation .navigation__toggle :nth-child(2){transition:all .15s ease-in-out\n}\n.navigation--dropdown-active .navigation__toggle :first-child{-webkit-transform:rotate(45deg);transform:rotate(45deg)\n}\n.navigation--dropdown-active .navigation__toggle :last-child{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)\n}\n.navigation--dropdown-active .navigation__toggle :nth-child(2){opacity:0\n}\n.navigation .navigation__cta{margin:0 3px 0 40px;width:140px;display:flex;justify-content:center;align-items:center\n}\n.navigation .menu{display:none\n}\n.navigation .mobile-menu-extension{border-top:1px solid #e5e7f1;padding:20px 30px\n}\n.navigation .mobile-menu-extension .menu__item{color:#3d4250;text-decoration:none;font-weight:400;font-size:1.125rem\n}\n.navigation .mobile-menu-extension .menu__item img{height:17px;width:17px;margin-left:10px\n}\n.navigation .dropdown-holder{display:none\n}\n.navigation--dropdown-active .dropdown-holder{display:block;width:100%;height:100%;padding-bottom:62px;position:fixed;top:0;left:0;top:62px;background-color:#eff4f7\n}\n.navigation--dropdown-active .dropdown__wrap{background-color:#fff;margin:20px;border-radius:.625rem;box-shadow:0 .375rem 1.25rem 0 rgba(61,66,80,.18)\n}\n.navigation--dropdown-active .dropdown__wrap .dropdown-menu{border-top:1px solid #e5e7f1\n}\n.navigation--dropdown-active .dropdown__wrap .dropdown-menu:first-of-type{border-top:none\n}\n@media (min-width:768px){\n.navigation .navigation__toggle{display:none\n}\n.navigation .menu{list-style:none;margin:0;padding-left:0;display:flex;justify-content:center\n}\n.navigation .menu__item{height:100%;padding:20px;display:block;text-decoration:none;color:#3d4250;font-weight:400;transition:all .1s ease-in;position:relative\n}\n.navigation .menu__item--dropdown{cursor:default\n}\n.navigation .menu__item--inactive{opacity:.35\n}\n.navigation .menu__item:hover{opacity:1\n}\n.navigation .menu__item--child-route-current:before{content:"";position:absolute;top:26px;left:6px;height:5px;width:5px;background:#fa476f;border-radius:50%\n}\n.navigation .menu__item--essential-active:before{background-color:#aeec73\n}\n.navigation .menu__item--baseline-active:before{background-color:#ffc662\n}\n.navigation .menu__item--advanced-active:before{background-color:#664277\n}\n.navigation .mobile-menu-extension{display:none\n}\n.navigation .dropdown-holder{display:block;left:0;top:100%;width:auto;height:auto;-webkit-transform-style:preserve3d;transform-style:preserve3d;-webkit-perspective:3000px;perspective:3000px;will-change:transform;-webkit-transform:translateZ(0) translateY(30px);transform:translateZ(0) translateY(30px);transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s\n}\n.navigation .dropdown__bg{z-index:-1;height:1px;width:1px;opacity:0;transition:opacity .25s;-webkit-transform-origin:0 0;transform-origin:0 0;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:.625rem\n}\n.navigation .dropdown__bg,.navigation .dropdown__wrap{background-color:#fff;position:absolute;top:0;left:0;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.navigation .dropdown__wrap{overflow-x:hidden;overflow-y:visible;margin:0;visibility:hidden;will-change:transform,width,height;transition:visibilty .5s\n}\n.navigation .dropdown__wrap:before{content:"";height:30px;width:100%;background:#00f;display:block;position:absolute;top:-30px;left:0\n}\n.navigation .dropdown__wrap .dropdown-menu{position:absolute;left:0;top:0;opacity:0;visibility:hidden;width:100%;transition:opacity .25s,visibility .25s;border-top:none\n}\n.navigation--dropdown-active .dropdown-holder{display:block;position:absolute;-webkit-transform:translateZ(0) translateY(10px);transform:translateZ(0) translateY(10px)\n}\n.navigation--dropdown-active .dropdown__wrap{visibility:visible;opacity:1;transition:all .25s;overflow:hidden\n}\n.navigation--dropdown-active .dropdown__bg{opacity:1\n}\n.navigation--dropdown-active .dropdown-menu.active{opacity:1;visibility:visible\n}\n.navigation #product .dropdown-menu__content{width:400px\n}\n.navigation #information .dropdown-menu__content{width:200px\n}\n}', ""]);
  }, 277: function _(t, e, n) {
    "use strict";
    var i = n(80);n.n(i).a;
  }, 278: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.header{border-bottom:1px solid #e5e7f1;width:100%;background:#fff;z-index:100;max-width:1680px\n}\n.header .header__container{max-width:1200px;margin:auto;padding:0 50px 0 20px;position:relative;height:62px;display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between\n}\n@media (min-width:768px){\n.header .header__container{padding:0 30px\n}\n}\n.header .header__container .header__logo{height:30px\n}\n.header .header__container .header__logo img{height:100%\n}\n.header .header__container .header__logo--full{display:none\n}\n@media (min-width:768px){\n.header{position:fixed;top:0\n}\n.header .header__logo.header__logo--logomark{display:none\n}\n.header .header__logo.header__logo--full{display:block\n}\n}", ""]);
  }, 279: function _(t, e, n) {
    "use strict";
    var i = n(81);n.n(i).a;
  }, 280: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.banner{min-height:40px;background:#3ecadd;width:100%;max-width:1680px;z-index:2;padding:10px 20px\n}\n.banner__text{max-width:100%;text-align:center;color:#fff;font-weight:400\n}\n@media (min-width:768px){\n.banner{position:fixed;top:62px\n}\n}", ""]);
  }, 281: function _(t, e, n) {
    "use strict";
    var i = n(82);n.n(i).a;
  }, 282: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\n.newsletter-signup__headline{display:flex;justify-content:center;align-items:flex-start;padding-top:10px\n}\n.newsletter-signup__headline b{color:#3d4250\n}\n.newsletter-signup__cta{margin-top:2px\n}\n.newsletter-signup__success{display:flex;font-weight:regular\n}\n.newsletter-signup__success p{margin-left:10px\n}\n.newsletter-signup__success img{height:16px;margin-top:2px\n}\n.newsletter-signup .spinner:before{position:absolute;content:"";top:10px;right:20px;height:20px;width:20px;z-index:1;border-color:#3ecadd transparent transparent #3ecadd;border-style:solid;border-width:3px;border-radius:50%;-webkit-animation:spinner .5s linear infinite;animation:spinner .5s linear infinite\n}', ""]);
  }, 283: function _(t, e, n) {
    "use strict";
    var i = n(83);n.n(i).a;
  }, 284: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\n.footer{padding:40px 0;z-index:1;background:#fff;overflow:hidden;position:relative\n}\n.footer .newsletter-signup>.grid-container{padding:0\n}\n.footer__newsletter-divider{margin:20px 0 40px\n}\n.footer__list{margin-bottom:40px;padding:0;list-style:none\n}\n.footer__list-title{color:#565b75;font-weight:400;margin-bottom:15px\n}\n.footer__list-item{display:flex;align-items:center\n}\n.footer__list-item a{display:block;padding:8px 0;color:#6f749a;text-decoration:none;font-weight:400\n}\n.footer__list-item a:hover{color:#565b75\n}\n.footer__list-item--social .footer_social-link{margin-right:20px\n}\n.footer__list-item--social .footer_social-link--twitter img{height:15px\n}\n.footer__list-item--social .footer_social-link--facebook img{height:19px\n}\n.footer__list-item--social .footer_social-link--instagram img{height:17px\n}\n.footer__copyright-divider{margin-bottom:20px\n}\n.footer__copyright{display:flex;align-items:center\n}\n.footer__copyright img{width:30px;margin-right:10px\n}\n.footer__copyright p{margin:0;font-weight:300;color:#99a2bf\n}\n@media (min-width:768px){\n.footer__copyright{justify-content:space-between\n}\n}\n@media (min-width:768px){\n.footer{padding:70px 0 40px\n}\n.footer .pill-container{position:relative\n}\n.footer .pill-container:before{background-color:#fa476f;-webkit-transform:rotate(31deg);transform:rotate(31deg);top:120px;left:-825px\n}\n.footer .pill-container:after,.footer .pill-container:before{content:"";position:absolute;height:450px;width:900px;border-radius:450px;z-index:-100\n}\n.footer .pill-container:after{background-color:#f0dbcc;-webkit-transform:rotate(-43deg);transform:rotate(-43deg);top:-300px;right:-800px\n}\n}\n@media (min-width:1024px){\n.footer .pill-container:before{top:100px;left:-735px\n}\n.footer .pill-container:after{top:-300px;right:-700px\n}\n}\n@media (min-width:1280px){\n.footer .pill-container:before{top:100px;left:-850px\n}\n.footer .pill-container:after{top:-300px;right:-800px\n}\n}', ""]);
  }, 285: function _(t, e, n) {
    "use strict";
    var i = n(84);n.n(i).a;
  }, 286: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\nbody{background-color:#eff4f7\n}\n.wrapper{position:relative;margin:auto;max-width:1680px;overflow:hidden;background-color:#fff;z-index:0;box-shadow:0 .0625rem .25rem 0 rgba(61,66,80,.18)\n}\n@media (min-width:768px){\n.content{margin-top:62px\n}\n.wrapper--banner-visible .content{margin-top:102px\n}\n}\n.page-enter-active{transition:opacity .3s\n}\n.page-enter,.page-leave-active,.page-leave-to{opacity:0\n}", ""]);
  }, 287: function _(t, e, n) {
    t.exports = n.p + "img/81c335c.svg";
  }, 288: function _(t, e, n) {
    "use strict";
    var i = n(85);n.n(i).a;
  }, 289: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\n.topic-menu{list-style:none;margin:0;padding:20px 0\n}\n.topic-menu .topic-menu__item a{display:flex;align-items:center;color:#3d4250;padding:10px 30px;text-decoration:none;width:100%;position:relative\n}\n.topic-menu .topic-menu__item a.nuxt-link-active:before{content:"";width:5px;height:5px;border-radius:50%;position:absolute;background:#fa476f;left:15px;top:18px\n}\n.topic-menu .topic-menu__item:hover{background-color:#f7f9fb\n}\n.topic-menu .topic-menu__item-description{display:none\n}\n.topic-menu .topic-menu__item-title{margin:0;line-height:.7em\n}\n.topic-menu .topic-menu__item--title{letter-spacing:2px;text-transform:uppercase;padding:15px 30px\n}\n.topic-menu .topic-menu__item--title:hover{background:none\n}\n.topic-menu .topic-menu__item .divider{display:none\n}\n@media (min-width:768px){\n.topic-menu .topic-menu__item a{align-items:flex-start;padding:20px\n}\n.topic-menu .topic-menu__item a.nuxt-link-active:before{top:28px\n}\n.topic-menu .topic-menu__item-title{margin-bottom:10px\n}\n.topic-menu .topic-menu__item-description{display:block\n}\n.topic-menu .topic-menu__item--title{display:none\n}\n.topic-menu .topic-menu__item-details{margin-left:15px\n}\n.topic-menu .topic-menu__item .divider{display:block\n}\n}', ""]);
  }, 290: function _(t, e, n) {
    "use strict";
    var i = n(86);n.n(i).a;
  }, 291: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '\nbody.navigation--dropdown-active{position:fixed\n}\nbody.navigation--dropdown-active,body.navigation--dropdown-active .dropdown-holder{overflow-x:hidden;overflow-y:scroll\n}\nbody.navigation--dropdown-active .header{position:fixed;left:0;top:0\n}\nbody.navigation--dropdown-active .content{margin-top:1000px\n}\n.navigation,.navigation-hub{z-index:999;display:flex;justify-content:flex-end;align-items:center\n}\n@media (min-width:768px){\n.navigation,.navigation-hub{overflow:hidden\n}\n}\n.navigation-hub .navigation__toggle,.navigation .navigation__toggle{position:relative;display:flex;flex-direction:column;justify-content:space-around;padding:4px 0;color:#3d4250;width:auto;height:auto\n}\n.navigation-hub .navigation__cta,.navigation .navigation__cta{margin:0 3px 0 40px;width:140px;display:flex;justify-content:center;align-items:center\n}\n.navigation-hub .menu,.navigation .menu{display:none\n}\n.navigation-hub .mobile-menu-extension,.navigation .mobile-menu-extension{border-top:1px solid #e5e7f1;padding:20px 30px\n}\n.navigation-hub .mobile-menu-extension .menu__item,.navigation .mobile-menu-extension .menu__item{color:#3d4250;text-decoration:none;font-weight:400;font-size:1.125rem\n}\n.navigation-hub .mobile-menu-extension .menu__item img,.navigation .mobile-menu-extension .menu__item img{height:17px;width:17px;margin-left:10px\n}\n.navigation-hub .dropdown-holder,.navigation .dropdown-holder{display:none\n}\n.navigation--dropdown-active .dropdown-holder,.navigation-hub--dropdown-active .dropdown-holder{display:block;width:100%;height:100%;padding-bottom:62px;position:fixed;top:0;left:0;top:62px;background-color:#eff4f7\n}\n.navigation--dropdown-active .dropdown__wrap,.navigation-hub--dropdown-active .dropdown__wrap{background-color:#fff;margin:20px;border-radius:.625rem;box-shadow:0 .375rem 1.25rem 0 rgba(61,66,80,.18)\n}\n.navigation--dropdown-active .dropdown__wrap .dropdown-menu,.navigation-hub--dropdown-active .dropdown__wrap .dropdown-menu{border-top:1px solid #e5e7f1\n}\n.navigation--dropdown-active .dropdown__wrap .dropdown-menu:first-of-type,.navigation-hub--dropdown-active .dropdown__wrap .dropdown-menu:first-of-type{border-top:none\n}\n@media (min-width:768px){\n.navigation-hub .navigation__toggle,.navigation .navigation__toggle{display:none\n}\n.navigation-hub .menu,.navigation .menu{list-style:none;margin:0;padding-left:0;display:flex;justify-content:center\n}\n.navigation-hub .menu__item,.navigation .menu__item{height:100%;padding:20px;display:block;text-decoration:none;color:#3d4250;font-weight:400;transition:all .1s ease-in;position:relative\n}\n.navigation-hub .menu__item--dropdown,.navigation .menu__item--dropdown{cursor:default\n}\n.navigation-hub .menu__item--inactive,.navigation .menu__item--inactive{opacity:.35\n}\n.navigation-hub .menu__item:hover,.navigation .menu__item:hover{opacity:1\n}\n.navigation-hub .menu__item--child-route-current:before,.navigation .menu__item--child-route-current:before{content:"";position:absolute;top:26px;left:6px;height:5px;width:5px;background:#fa476f;border-radius:50%\n}\n.navigation-hub .menu__item--essential-active:before,.navigation .menu__item--essential-active:before{background-color:#aeec73\n}\n.navigation-hub .menu__item--baseline-active:before,.navigation .menu__item--baseline-active:before{background-color:#ffc662\n}\n.navigation-hub .menu__item--advanced-active:before,.navigation .menu__item--advanced-active:before{background-color:#664277\n}\n.navigation-hub .mobile-menu-extension,.navigation .mobile-menu-extension{display:none\n}\n.navigation-hub .dropdown-holder,.navigation .dropdown-holder{display:block;left:0;top:100%;width:auto;height:auto;-webkit-transform-style:preserve3d;transform-style:preserve3d;-webkit-perspective:3000px;perspective:3000px;will-change:transform;-webkit-transform:translateZ(0) translateY(30px);transform:translateZ(0) translateY(30px);transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s\n}\n.navigation-hub .dropdown__bg,.navigation .dropdown__bg{background-color:#fff;position:absolute;z-index:-1;top:0;left:0;height:1px;width:1px;opacity:0;transition:opacity .25s;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:translateZ(0);transform:translateZ(0);will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:.625rem\n}\n.navigation-hub .dropdown__wrap,.navigation .dropdown__wrap{overflow-x:hidden;overflow-y:visible;margin:0;background-color:#fff;position:absolute;top:0;left:0;visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);will-change:transform,width,height;transition:visibilty .5s\n}\n.navigation-hub .dropdown__wrap:before,.navigation .dropdown__wrap:before{content:"";height:30px;width:100%;background:#00f;display:block;position:absolute;top:-30px;left:0\n}\n.navigation-hub .dropdown__wrap .dropdown-menu,.navigation .dropdown__wrap .dropdown-menu{position:absolute;left:0;top:0;opacity:0;visibility:hidden;width:100%;transition:opacity .25s,visibility .25s;border-top:none\n}\n.navigation--dropdown-active .dropdown-holder,.navigation-hub--dropdown-active .dropdown-holder{display:block;position:absolute;-webkit-transform:translateZ(0) translateY(10px);transform:translateZ(0) translateY(10px)\n}\n.navigation--dropdown-active .dropdown__wrap,.navigation-hub--dropdown-active .dropdown__wrap{visibility:visible;opacity:1;transition:all .25s;overflow:hidden\n}\n.navigation--dropdown-active .dropdown__bg,.navigation-hub--dropdown-active .dropdown__bg{opacity:1\n}\n.navigation--dropdown-active .dropdown-menu.active,.navigation-hub--dropdown-active .dropdown-menu.active{opacity:1;visibility:visible\n}\n.navigation #topic .dropdown-menu__content,.navigation-hub #topic .dropdown-menu__content{width:400px\n}\n}', ""]);
  }, 460: function _(t, e, n) {
    "use strict";
    var i = n(87);n.n(i).a;
  }, 461: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.search__input{display:none\n}\n.search__input input.ais-input{-webkit-appearance:none;outline-offset:-2px\n}\n.search__input input{height:40px;margin-top:0\n}\n.search__input input:active,.search__input input:focus,.search__input input:hover{border-radius:4px\n}\n@media (min-width:768px){\n.search__input input{margin-top:8px\n}\n}\n.search__input img{display:none;height:24px\n}\n.search__input img.close{height:17px;top:20px\n}\n.search__results{max-height:90vh;min-height:40vh;background:#fff;position:absolute;left:20px;right:20px;top:80px;box-shadow:0 .375rem 1.25rem 0 rgba(61,66,80,.18);border-radius:.625rem;z-index:20;overflow-y:scroll\n}\n.search__result{padding:20px;border-bottom:1px solid #e5e7f1\n}\n.search__result em{color:#fa476f;font-style:normal;font-weight:400\n}\n.search__no-results{height:400px;display:flex;justify-content:center;align-items:center;flex-direction:column\n}\n.search__no-results .body--large{font-weight:400;color:#3d4250;margin:15px 0 5px\n}\n.search__no-results img{width:32px;height:32px\n}\n.search--active .search__input{display:block\n}\n.search__toggle{position:absolute;top:16px;right:18px;z-index:2\n}\n.search__toggle img{height:32px\n}\n@media (min-width:768px){\n.search__input{display:block;position:relative;width:260px\n}\n.search__input img{display:block;position:absolute;right:12px;top:17px\n}\n.search__results{right:30px;left:auto;width:420px\n}\n.search__result{padding:30px\n}\n.search__result:hover{background:#f7f9fb\n}\n.search__toggle{display:none\n}\n}\n@media (min-width:1024px){\n.search__input{width:300px\n}\n}", ""]);
  }, 462: function _(t, e, n) {
    "use strict";
    var i = n(88);n.n(i).a;
  }, 463: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.header{border-bottom:1px solid #e5e7f1;width:100%;background:#fff;z-index:100;max-width:1680px\n}\n.header .header__container{max-width:1200px;margin:auto;padding:0 50px 0 20px;position:relative;height:62px;display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between\n}\n@media (min-width:768px){\n.header .header__container{padding:0 30px\n}\n}\n.header .header__container .header__brand .header__logo{height:30px\n}\n.header .header__container .header__brand .header__logo img{max-width:43px;height:100%\n}\n@media (min-width:768px){\n.header .header__container .header__brand .header__logo img{max-width:none\n}\n}\n.header .header__container .header__brand .header__logo--full{display:none\n}\n.header .header__container .header__nav{display:flex;flex-direction:row;margin-right:50px\n}\n@media (min-width:768px){\n.header .header__container .header__nav{margin-right:0\n}\n}\n.header .header__container .header__nav--search,.header .header__container .header__search--open{width:100%\n}\n@media (min-width:768px){\n.header .header__container .header__nav--search,.header .header__container .header__search--open{width:auto\n}\n}\n.hub-header .menu__item.menu__item--dropdown{padding-right:40px\n}\n@media (min-width:768px){\n.header{position:fixed;top:0\n}\n.header .header__brand .header__logo.header__logo--logomark{display:none\n}\n.header .header__brand .header__logo.header__logo--full{display:inline-block\n}\n}", ""]);
  }, 464: function _(t, e, n) {
    "use strict";
    var i = n(89);n.n(i).a;
  }, 465: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.lead-capture-form{border-radius:.625rem;box-shadow:0 .375rem 1.25rem 0 rgba(61,66,80,.18);padding:20px;text-align:center;background:#fff\n}\n@media (min-width:768px){\n.lead-capture-form{padding:30px\n}\n}\n.lead-capture-form__content{text-align:center;max-width:600px;margin:10px auto\n}\n@media (min-width:768px){\n.lead-capture-form__content{margin:30px auto\n}\n}\n@media (min-width:768px){\n.lead-capture-form__slot-content p{font-size:20px\n}\n}\n.lead-capture-form__fields{margin:30px auto 0;max-width:550px\n}\n@media (min-width:768px){\n.lead-capture-form__fields{display:flex\n}\n}\n.lead-capture-form__group,.lead-capture-form__input{text-align:left;flex-grow:1\n}\n.lead-capture-form__group input,.lead-capture-form__input input{margin-top:0\n}\n.lead-capture-form__group--submit,.lead-capture-form__input--submit{width:100%\n}\n@media (min-width:768px){\n.lead-capture-form__group--submit,.lead-capture-form__input--submit{width:auto\n}\n}\n@media (min-width:768px){\n.lead-capture-form__group,.lead-capture-form__input{margin-right:15px\n}\n}\n.lead-capture-form .lead-capture-form__input--submit{flex-grow:0\n}\n.lead-capture-form__feedback svg path{fill:#aeec73\n}\n.lead-capture-form__feedback p{margin:30px auto;display:flex;align-items:center;justify-content:center;font-weight:400;font-size:16px;color:#3d4250\n}\n.lead-capture-form__feedback p span{margin-left:10px\n}\n.lead-capture-form--dark{background:#fa476f\n}\n.lead-capture-form--dark .lead-capture-form__content h1,.lead-capture-form--dark .lead-capture-form__content h2,.lead-capture-form--dark .lead-capture-form__content h3,.lead-capture-form--dark .lead-capture-form__content h4,.lead-capture-form--dark .lead-capture-form__content h5,.lead-capture-form--dark .lead-capture-form__content p{color:#fff\n}\n.lead-capture-form--dark .lead-capture-form__input.lead-capture-form__input--submit,.lead-capture-form--dark .lead-capture-form__input.lead-capture-form__input--submit:active,.lead-capture-form--dark .lead-capture-form__input.lead-capture-form__input--submit:focus,.lead-capture-form--dark .lead-capture-form__input.lead-capture-form__input--submit:hover{background-color:#3d4250;border-color:#3d4250\n}\n.lead-capture-form--dark .input.error .input__feedback,.lead-capture-form--dark .input__feedback,.lead-capture-form--dark .lead-capture-form__checkbox-label,.lead-capture-form--dark .lead-capture-form__feedback{color:#fff\n}\n.lead-capture-form--dark .input__feedback svg path,.lead-capture-form--dark .lead-capture-form__feedback svg path{fill:#fff\n}\n.lead-capture-form--dark .input__feedback p,.lead-capture-form--dark .lead-capture-form__feedback p{color:#fff\n}\n.lead-capture-form--dark .lead-capture-form__input.error .input__feedback{color:#ffc662\n}\n.lead-capture-form--dark .lead-capture-form__input.error input{box-shadow:inset 0 0 0 2px #ffc662\n}", ""]);
  }, 466: function _(t, e, n) {
    "use strict";
    var i = n(90);n.n(i).a;
  }, 467: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.hub-footer{padding-bottom:40px;z-index:1;background:#fff;overflow:hidden\n}\n.hub-footer__lead-capture{background:#f7f9fb;margin:0;padding-bottom:60px\n}\n.hub-footer .lead-capture-form{margin-top:60px\n}\n.hub-footer__list{margin:40px 0 0;padding:0;list-style:none\n}\n.hub-footer__list-title{color:#565b75;font-weight:400;margin-bottom:15px\n}\n.hub-footer__list-item{display:flex;align-items:center\n}\n.hub-footer__list-item a{display:block;padding:8px 0;color:#6f749a;text-decoration:none;font-weight:400\n}\n.hub-footer__list-item a:hover{color:#565b75\n}\n.hub-footer__list-item--social .footer_social-link{margin-right:20px\n}\n.hub-footer__list-item--social .footer_social-link--twitter img{height:15px\n}\n.hub-footer__list-item--social .footer_social-link--facebook img{height:19px\n}\n.hub-footer__list-item--social .footer_social-link--instagram img{height:17px\n}\n.hub-footer__copyright{display:flex;align-items:flex-start;justify-content:center;flex-direction:column\n}\n.hub-footer__copyright img{height:30px;margin-bottom:10px\n}\n.hub-footer__copyright p{margin:0;font-weight:400\n}\n@media (min-width:768px){\n.hub-footer__copyright{flex-direction:row;justify-content:space-between\n}\n.hub-footer__copyright img{margin-bottom:0\n}\n}\n.hub-footer__divider{border-bottom-width:0;border-left-width:0;border-right-width:0;margin:30px 0\n}\n@media (min-width:768px){\n.hub-footer__divider{margin-top:0\n}\n}\n@media (min-width:768px){\n.hub-footer__list{margin:60px 0\n}\n}\n@media (min-width:1024px){\n.hub-footer__list{margin:80px 0 40px\n}\n}", ""]);
  }, 468: function _(t, e, n) {
    "use strict";
    var i = n(91);n.n(i).a;
  }, 469: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\nbody{background-color:#eff4f7;overflow:auto\n}\n.hub-wrapper{position:relative;margin:auto;max-width:1680px;min-height:100vh;overflow:hidden;background-color:#f7f9fb;z-index:0;box-shadow:0 .0625rem .25rem 0 rgba(61,66,80,.18);display:flex;flex-direction:column;align-items:stretch;justify-content:space-between\n}\n@media (min-width:768px){\n.hub-content{margin-top:62px\n}\n}\n.page-enter-active{transition:opacity .3s\n}\n.page-enter,.page-leave-active,.page-leave-to{opacity:0\n}", ""]);
  }, 470: function _(t, e, n) {
    "use strict";
    var i = n(92);n.n(i).a;
  }, 471: function _(t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\n.noNav.wrapper,body{background-color:#eff4f7\n}\n.noNav.wrapper{position:relative;margin:auto;max-width:1680px;overflow:hidden;z-index:0\n}\n@media (min-width:768px){\n.noNav.wrapper .content{margin-top:0\n}\n}\n.noNav .page-enter-active{transition:opacity .3s\n}\n.noNav .page-enter,.noNav .page-leave-active,.noNav .page-leave-to{opacity:0\n}", ""]);
  }, 472: function _(t, e, n) {
    var i = { "./analytics.js": 128, "./content.js": 129, "./discount.js": 130, "./index.js": 476 };function o(t) {
      var e = r(t);return n(e);
    }function r(t) {
      var e = i[t];if (!(e + 1)) {
        var n = new Error("Cannot find module '" + t + "'");throw n.code = "MODULE_NOT_FOUND", n;
      }return e;
    }o.keys = function () {
      return Object.keys(i);
    }, o.resolve = r, t.exports = o, o.id = 472;
  }, 476: function _(t, e, n) {
    "use strict";
    n.r(e);var i = n(15),
        o = n(7),
        r = n.n(o),
        a = n(13),
        s = n.n(a),
        c = n(128),
        l = n(129),
        u = n(130);r.a.defaults.headers = { Accept: "application/json" }, e.default = function () {
      return new i.a.Store({ state: { banner: "", redirectTo: null, loggedIn: !1, referralCode: null, user: null, testProfile: null }, mutations: { SET_BANNER: function SET_BANNER(t, e) {
            t.banner = e;
          }, SET_USER: function SET_USER(t, e) {
            t.user = e;
          }, SET_REFERRAL_CODE: function SET_REFERRAL_CODE(t, e) {
            t.referralCode = e;
          }, SET_REDIRECT: function SET_REDIRECT(t, e) {
            t.redirectTo = e;
          }, SET_LOGGED_IN: function SET_LOGGED_IN(t, e) {
            t.loggedIn = e;
          } }, actions: { nuxtServerInit: function nuxtServerInit(t, e) {
            var n = document.cookie;if (n) {
              var i = s.a.parse(n);i.resource_owner && (e.store.commit("SET_USER", JSON.parse(i.resource_owner)), e.store.commit("SET_LOGGED_IN", !0)), i.referral_code && e.store.commit("SET_REFERRAL_CODE", i.referral_code);
            }
          } }, modules: { analytics: c.default, content: l.default, discount: u.default } });
    };
  }, 482: function _(t, e, n) {
    "use strict";
    n.r(e);var i = n(38),
        o = n.n(i),
        r = n(2),
        a = n.n(r),
        s = n(5),
        c = n.n(s),
        l = n(0),
        u = n(238),
        d = u.keys();function p(t) {
      var e = u(t);return e.default ? e.default : e;
    }var h = {},
        f = !0,
        m = !1,
        _ = void 0;try {
      for (var g, v = d[Symbol.iterator](); !(f = (g = v.next()).done); f = !0) {
        var b = g.value;h[b.replace(/^\.\//, "").replace(/\.(mjs|js)$/, "")] = p(b);
      }
    } catch (t) {
      m = !0, _ = t;
    } finally {
      try {
        f || null == v.return || v.return();
      } finally {
        if (m) throw _;
      }
    }var x = h,
        w = n(26),
        y = n.n(w),
        k = n(213),
        C = n.n(k),
        E = n(131),
        T = function T() {
      return n.e(5).then(n.bind(null, 965)).then(function (t) {
        return t.default || t;
      });
    },
        M = function M() {
      return n.e(6).then(n.bind(null, 968)).then(function (t) {
        return t.default || t;
      });
    },
        S = function S() {
      return n.e(7).then(n.bind(null, 976)).then(function (t) {
        return t.default || t;
      });
    },
        $ = function $() {
      return n.e(8).then(n.bind(null, 971)).then(function (t) {
        return t.default || t;
      });
    },
        L = function L() {
      return n.e(9).then(n.bind(null, 975)).then(function (t) {
        return t.default || t;
      });
    },
        I = function I() {
      return n.e(10).then(n.bind(null, 978)).then(function (t) {
        return t.default || t;
      });
    },
        A = function A() {
      return n.e(11).then(n.bind(null, 974)).then(function (t) {
        return t.default || t;
      });
    },
        N = function N() {
      return n.e(12).then(n.bind(null, 979)).then(function (t) {
        return t.default || t;
      });
    },
        D = function D() {
      return n.e(13).then(n.bind(null, 964)).then(function (t) {
        return t.default || t;
      });
    },
        j = function j() {
      return Promise.all([n.e(1), n.e(3), n.e(14)]).then(n.bind(null, 977)).then(function (t) {
        return t.default || t;
      });
    },
        O = function O() {
      return n.e(15).then(n.bind(null, 970)).then(function (t) {
        return t.default || t;
      });
    },
        P = function P() {
      return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 966)).then(function (t) {
        return t.default || t;
      });
    },
        R = function R() {
      return n.e(17).then(n.bind(null, 973)).then(function (t) {
        return t.default || t;
      });
    },
        q = function q() {
      return n.e(18).then(n.bind(null, 972)).then(function (t) {
        return t.default || t;
      });
    },
        z = function z() {
      return Promise.all([n.e(1), n.e(3), n.e(19)]).then(n.bind(null, 969)).then(function (t) {
        return t.default || t;
      });
    },
        U = function U() {
      return Promise.all([n.e(25), n.e(0), n.e(2), n.e(20)]).then(n.bind(null, 980)).then(function (t) {
        return t.default || t;
      });
    },
        H = function H() {
      return Promise.all([n.e(2), n.e(21)]).then(n.bind(null, 967)).then(function (t) {
        return t.default || t;
      });
    },
        B = function B() {
      return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, 963)).then(function (t) {
        return t.default || t;
      });
    };l.a.use(E.a), window.history.scrollRestoration = "manual";var G = function G(t, e, n) {
      var i = !1;return t.matched.length < 2 ? i = { x: 0, y: 0 } : t.matched.some(function (t) {
        return t.components.default.options.scrollToTop;
      }) && (i = { x: 0, y: 0 }), n && (i = n), new Promise(function (e) {
        window.$nuxt.$once("triggerScroll", function () {
          if (t.hash) {
            var n = t.hash;void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));try {
              document.querySelector(n) && (i = { selector: n });
            } catch (t) {
              console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
            }
          }e(i);
        });
      });
    };var Y = n(214),
        F = n.n(Y).a,
        Z = { name: "nuxt-child", functional: !0, props: ["keepAlive"], render: function render(t, e) {
        var n = e.parent,
            i = e.data,
            o = e.props;i.nuxtChild = !0;for (var r = n, a = n.$nuxt.nuxt.transitions, s = n.$nuxt.nuxt.defaultTransition, c = 0; n;) {
          n.$vnode && n.$vnode.data.nuxtChild && c++, n = n.$parent;
        }i.nuxtChildDepth = c;var l = a[c] || s,
            u = {};W.forEach(function (t) {
          void 0 !== l[t] && (u[t] = l[t]);
        });var d = {};Q.forEach(function (t) {
          "function" == typeof l[t] && (d[t] = l[t].bind(r));
        });var p = d.beforeEnter;d.beforeEnter = function (t) {
          if (window.$nuxt.$nextTick(function () {
            window.$nuxt.$emit("triggerScroll");
          }), p) return p.call(r, t);
        };var h = [t("router-view", i)];return void 0 !== o.keepAlive && (h = [t("keep-alive", h)]), t("transition", { props: u, on: d }, h);
      } },
        W = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
        Q = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
        V = { name: "nuxt-link", functional: !0, render: function render(t, e) {
        return t("router-link", e.data, e.children);
      } },
        X = { name: "ErrorPage", components: { Hero: n(134).a }, props: ["error"] },
        J = (n(262), n(1)),
        K = Object(J.a)(X, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "error-page" }, [n("Hero", { staticClass: "sp__bottom--lg", attrs: { backgroundType: "colour", background: "x-light-grey" } }, [t._t("default", [404 === this.error.statusCode ? n("img", { attrs: { alt: "error", src: "https://s3-eu-west-1.amazonaws.com/thriva/images/not-found-scene-illustration.svg" } }) : t._e(), 500 === this.error.statusCode ? n("img", { attrs: { alt: "error", src: "https://s3-eu-west-1.amazonaws.com/thriva/images/error-scene-illustration.svg" } }) : t._e()]), 404 === this.error.statusCode ? n("h1", { attrs: { slot: "heading" }, slot: "heading" }, [t._v("404 error")]) : t._e(), 404 === this.error.statusCode ? n("p", { staticClass: "body--large", attrs: { slot: "text" }, slot: "text" }, [t._v("Oops! The page you were looking for doesn't exist. If you copied and pasted a link, please make sure you copied the whole thing.")]) : t._e(), 500 === this.error.statusCode ? n("h1", { attrs: { slot: "heading" }, slot: "heading" }, [t._v("500 error")]) : t._e(), 500 === this.error.statusCode ? n("p", { staticClass: "body--large", attrs: { slot: "text" }, slot: "text" }, [t._v("Oops! Something went wrong on our end. We're sorry about that, we've been notified and we're looking into it. Please contact at us at "), n("a", { attrs: { href: "mailto: hello@thriva.co" } }, [t._v("hello@thriva.co ")]), t._v("if the problem persists and we'll help out!")]) : t._e(), n("div", { attrs: { slot: "cta" }, slot: "cta" }, [n("thv-button", { attrs: { element: "a", link: "https://thriva.co", size: "large" } }, [t._v("Go home")]), n("thv-button", { attrs: { element: "a", link: "mailto: hello@thriva.co", size: "large", type: "transparent" } }, [t._v("Chat to us")])], 1)], 2), n("div", { staticClass: "divider" })], 1);
    }, [], !1, null, null, null);K.options.__file = "error.vue";var tt = K.exports,
        et = function et() {
      return {};
    };function nt(t, e) {
      var n = t.options.data || et;!e && t.options.hasAsyncData || (t.options.hasAsyncData = !0, t.options.data = function () {
        var i = n.call(this);return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), y()({}, i, e);
      }, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data));
    }function it(t) {
      return t.options && t._Ctor === t ? t : (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = l.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file), t);
    }function ot(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];return Array.prototype.concat.apply([], t.matched.map(function (t, n) {
        return Object.keys(t.components).map(function (i) {
          return e && e.push(n), t.components[i];
        });
      }));
    }function rt(t, e) {
      return Array.prototype.concat.apply([], t.matched.map(function (t, n) {
        return Object.keys(t.components).reduce(function (i, o) {
          return t.components[o] ? i.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], i;
        }, []);
      }));
    }function at(t) {
      return Promise.all(rt(t, function () {
        var t = c()(a.a.mark(function t(e, n, i, o) {
          return a.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  if ("function" != typeof e || e.options) {
                    t.next = 4;break;
                  }return t.next = 3, e();case 3:
                  e = t.sent;case 4:
                  return t.abrupt("return", i.components[o] = it(e));case 5:case "end":
                  return t.stop();}
            }
          }, t, this);
        }));return function (e, n, i, o) {
          return t.apply(this, arguments);
        };
      }()));
    }function st(t) {
      return ct.apply(this, arguments);
    }function ct() {
      return (ct = c()(a.a.mark(function t(e) {
        return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.next = 2, at(e);case 2:
                return t.abrupt("return", y()({}, e, { meta: ot(e).map(function (t) {
                    return t.options.meta || {};
                  }) }));case 3:case "end":
                return t.stop();}
          }
        }, t, this);
      }))).apply(this, arguments);
    }function lt(t, e) {
      return ut.apply(this, arguments);
    }function ut() {
      return (ut = c()(a.a.mark(function t(e, n) {
        return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                if (n.to ? n.to : n.route, e.context || (e.context = { isStatic: !1, isDev: !1, isHMR: !1, app: e, store: e.store, payload: n.payload, error: n.error, base: "/", env: { APP_URL: "https://api.thriva.co", API_URL: "https://api.thriva.co", HUB_API_URL: "https://content.thriva.co/wp-json/wp/v2", HUB_CONTENT_URL: "https://s3-eu-west-1.amazonaws.com/thriva/services/content/hub/index.json", SEGMENT_WRITE_KEY: "0UIeYs5tfoutTsf0xggo2qzWbbfIk1rz", INTERCOM_APP_ID: "lx3divi8", INTERCOM_SECRET_KEY: "dG9rOmZhZDY5MWZlXzUzNjBfNGRlYV9iYTViXzY4OTRjMDBkODlmNDoxOjA=", STRIPE_PUBLISHABLE_KEY: "pk_live_vS9HkkBwvX4FnhRTNNHvnYIS", ALGOLIA_APP_ID: "S6YE61DEEB", ALGOLIA_KEY: "65b5202fdb72308112c9bf88e56f00b0", SENTRY_URL: "https://34d9cecb35024c78952c501e621dfc21:3200fed943fa4bd9830efd1448c8fda1@sentry.io/255650", DASHBOARD_URL: "https://app.thriva.co", DRIP_LEAD_CAPTURE_CAMPAIGN_ID: "330555958", DRIP_NEWSLETTER_CAMPAIGN_ID: "824507337" } }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), e.context.redirect = function (t, n, i) {
                  if (t) {
                    e.context._redirected = !0;var r = o()(n);if ("number" == typeof t || "undefined" !== r && "object" !== r || (i = n || {}, n = t, r = o()(n), t = 302), "object" === r && (n = e.router.resolve(n).href), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n)) throw n = bt(n, i), window.location.replace(n), new Error("ERR_REDIRECT");e.context.next({ path: n, query: i, status: t });
                  }
                }, e.context.nuxtState = window.__NUXT__), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !!n.isHMR, !n.route) {
                  t.next = 10;break;
                }return t.next = 9, st(n.route);case 9:
                e.context.route = t.sent;case 10:
                if (e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {}, !n.from) {
                  t.next = 16;break;
                }return t.next = 15, st(n.from);case 15:
                e.context.from = t.sent;case 16:case "end":
                return t.stop();}
          }
        }, t, this);
      }))).apply(this, arguments);
    }function dt(t, e) {
      var n;return (n = 2 === t.length ? new Promise(function (n) {
        t(e, function (t, i) {
          t && e.error(t), n(i = i || {});
        });
      }) : t(e)) && (n instanceof Promise || "function" == typeof n.then) || (n = Promise.resolve(n)), n;
    }function pt(t, e) {
      var n = window.location.pathname;return "hash" === e ? window.location.hash.replace(/^#\//, "") : (t && 0 === n.indexOf(t) && (n = n.slice(t.length)), (n || "/") + window.location.search + window.location.hash);
    }function ht(t, e) {
      return function (t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) {
          "object" === o()(t[n]) && (e[n] = new RegExp("^(?:" + t[n].pattern + ")$"));
        }return function (n, i) {
          for (var o = "", r = n || {}, a = i || {}, s = a.pretty ? _t : encodeURIComponent, c = 0; c < t.length; c++) {
            var l = t[c];if ("string" != typeof l) {
              var u,
                  d = r[l.name];if (null == d) {
                if (l.optional) {
                  l.partial && (o += l.prefix);continue;
                }throw new TypeError('Expected "' + l.name + '" to be defined');
              }if (Array.isArray(d)) {
                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");if (0 === d.length) {
                  if (l.optional) continue;throw new TypeError('Expected "' + l.name + '" to not be empty');
                }for (var p = 0; p < d.length; p++) {
                  if (u = s(d[p]), !e[c].test(u)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(u) + "`");o += (0 === p ? l.prefix : l.delimiter) + u;
                }
              } else {
                if (u = l.asterisk ? encodeURI(d).replace(/[?#]/g, function (t) {
                  return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                }) : s(d), !e[c].test(u)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + u + '"');o += l.prefix + u;
              }
            } else o += l;
          }return o;
        };
      }(function (t, e) {
        var n,
            i = [],
            o = 0,
            r = 0,
            a = "",
            s = e && e.delimiter || "/";for (; null != (n = mt.exec(t));) {
          var c = n[0],
              l = n[1],
              u = n.index;if (a += t.slice(r, u), r = u + c.length, l) a += l[1];else {
            var d = t[r],
                p = n[2],
                h = n[3],
                f = n[4],
                m = n[5],
                _ = n[6],
                g = n[7];a && (i.push(a), a = "");var v = null != p && null != d && d !== p,
                b = "+" === _ || "*" === _,
                x = "?" === _ || "*" === _,
                w = n[2] || s,
                y = f || m;i.push({ name: h || o++, prefix: p || "", delimiter: w, optional: x, repeat: b, partial: v, asterisk: !!g, pattern: y ? vt(y) : g ? ".*" : "[^" + gt(w) + "]+?" });
          }
        }r < t.length && (a += t.substr(r));a && i.push(a);return i;
      }(t, e));
    }function ft(t, e) {
      var n = {},
          i = y()({}, t, e);for (var o in i) {
        String(t[o]) !== String(e[o]) && (n[o] = !0);
      }return n;
    }window._nuxtReadyCbs = [], window.onNuxtReady = function (t) {
      window._nuxtReadyCbs.push(t);
    };var mt = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");function _t(t) {
      return encodeURI(t).replace(/[\/?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
      });
    }function gt(t) {
      return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }function vt(t) {
      return t.replace(/([=!:$\/()])/g, "\\$1");
    }function bt(t, e) {
      var n,
          i = t.indexOf("://");-1 !== i ? (n = t.substring(0, i), t = t.substring(i + 3)) : 0 === t.indexOf("//") && (t = t.substring(2));var o,
          r = t.split("/"),
          a = (n ? n + "://" : "//") + r.shift(),
          s = r.filter(Boolean).join("/");return 2 === (r = s.split("#")).length && (s = r[0], o = r[1]), a += s ? "/" + s : "", e && "{}" !== JSON.stringify(e) && (a += (2 === t.split("?").length ? "&" : "?") + function (t) {
        return Object.keys(t).sort().map(function (e) {
          var n = t[e];return null == n ? "" : Array.isArray(n) ? n.slice().map(function (t) {
            return [e, "=", t].join("");
          }).join("&") : e + "=" + n;
        }).filter(Boolean).join("&");
      }(e)), a += o ? "#" + o : "";
    }var xt = { name: "nuxt", props: ["nuxtChildKey", "keepAlive"], render: function render(t) {
        return this.nuxt.err ? t("nuxt-error", { props: { error: this.nuxt.err } }) : t("nuxt-child", { key: this.routerViewKey, props: this.$props });
      }, beforeCreate: function beforeCreate() {
        l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
      }, computed: { routerViewKey: function routerViewKey() {
          if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || ht(this.$route.matched[0].path)(this.$route.params);var t = this.$route.matched[0] && this.$route.matched[0].components.default;return t && t.options && t.options.key ? "function" == typeof t.options.key ? t.options.key(this.$route) : t.options.key : this.$route.path;
        } }, components: { NuxtChild: Z, NuxtError: tt } },
        wt = { name: "nuxt-loading", data: function data() {
        return { percent: 0, show: !1, canSuccess: !0, throttle: 200, duration: 5e3, height: "2px", color: "#3ECADD", failedColor: "red" };
      }, methods: { start: function start() {
          var t = this;return this.canSuccess = !0, this._throttle && clearTimeout(this._throttle), this._timer && (clearInterval(this._timer), this._timer = null, this.percent = 0), this._throttle = setTimeout(function () {
            t.show = !0, t._cut = 1e4 / Math.floor(t.duration), t._timer = setInterval(function () {
              t.increase(t._cut * Math.random()), t.percent > 95 && t.finish();
            }, 100);
          }, this.throttle), this;
        }, set: function set(t) {
          return this.show = !0, this.canSuccess = !0, this.percent = Math.floor(t), this;
        }, get: function get() {
          return Math.floor(this.percent);
        }, increase: function increase(t) {
          return this.percent = this.percent + Math.floor(t), this;
        }, decrease: function decrease(t) {
          return this.percent = this.percent - Math.floor(t), this;
        }, finish: function finish() {
          return this.percent = 100, this.hide(), this;
        }, pause: function pause() {
          return clearInterval(this._timer), this;
        }, hide: function hide() {
          var t = this;return clearInterval(this._timer), this._timer = null, clearTimeout(this._throttle), this._throttle = null, setTimeout(function () {
            t.show = !1, l.a.nextTick(function () {
              setTimeout(function () {
                t.percent = 0;
              }, 200);
            });
          }, 500), this;
        }, fail: function fail() {
          return this.canSuccess = !1, this;
        } } },
        yt = (n(264), Object(J.a)(wt, function () {
      var t = this.$createElement;return (this._self._c || t)("div", { staticClass: "nuxt-progress", style: { width: this.percent + "%", height: this.height, "background-color": this.canSuccess ? this.color : this.failedColor, opacity: this.show ? 1 : 0 } });
    }, [], !1, null, null, null));yt.options.__file = "nuxt-loading.vue";var kt = yt.exports,
        Ct = (n(266), [function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("div", { staticClass: "mobile-menu-extension" }, [e("a", { staticClass: "menu__item menu__item--mobile", attrs: { href: "https://intercom.help/thrivahelpcenter", target: "_blank" } }, [e("span", [this._v("Help")]), e("img", { attrs: { src: n(268) } })])]);
    }]),
        Et = n(75).a,
        Tt = (n(275), Object(J.a)(Et, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("nav", { ref: "navigation", staticClass: "navigation" }, [n("div", { staticClass: "menu", on: { mouseleave: t.leaveMenu } }, t._l(t.menuItems, function (e) {
        return n("a", { staticClass: "menu__item", class: [{ "menu__item--dropdown": e.dropdownMenu, "menu__item--child-route-current": t.childRouteCurrent(e.dropdownMenu) }, t.activeProductClass], attrs: { href: e.href, "data-dropdown-menu-id": e.dropdownMenu, target: e.target, rel: e.rel }, on: { mouseover: t.enterMenuLink, mouseleave: t.leaveMenuLink, click: function click(t) {
              "Help" !== e.title && "Christmas Gifts" !== e.title && t.preventDefault();
            } } }, [t._v(t._s(e.title))]);
      })), n("div", { staticClass: "dropdown-holder", on: { mouseleave: t.leaveDropdownMenu } }, [n("div", { ref: "dropdownWrapper", staticClass: "dropdown__wrap" }, [n("div", { staticClass: "dropdown-menu", attrs: { id: "product", "data-menu": "product" } }, [n("div", { staticClass: "dropdown-menu__content" }, [n("product-menu", { on: { menuItemClicked: t.closeMenuOnClick } })], 1)]), n("div", { staticClass: "dropdown-menu", attrs: { id: "information", "data-menu": "information" } }, [n("div", { staticClass: "dropdown-menu__content" }, [n("information-menu", { attrs: { items: t.dropdownMenus.information }, on: { menuItemClicked: t.closeMenuOnClick } })], 1)]), n("div", { ref: "dropdownBg", staticClass: "dropdown__bg" }), t._m(0)])]), n("a", { staticClass: "navigation__cta button button--secondary", attrs: { href: t.accountActionUrl } }, [t._v("Login")]), n("div", { staticClass: "navigation__responsive-menu" }, [n("a", { staticClass: "navigation__toggle", on: { click: t.toggleMobileNav } }, [n("div", { staticClass: "bar" }), n("div", { staticClass: "bar" }), n("div", { staticClass: "bar" })])])]);
    }, Ct, !1, null, null, null));Tt.options.__file = "Navigation.vue";var Mt = { name: "Header", components: { Navigation: Tt.exports }, methods: { closeMobileNav: function closeMobileNav() {
          this.$children[2].closeMenuOnClick();
        } } },
        St = (n(277), Object(J.a)(Mt, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("header", { staticClass: "header" }, [e("div", { staticClass: "header__container" }, [e("nuxt-link", { staticClass: "header__logo header__logo--logomark", attrs: { to: "/" } }, [e("img", { attrs: { src: n(100) }, on: { click: this.closeMobileNav } })]), e("nuxt-link", { staticClass: "header__logo header__logo--full", attrs: { to: "/" } }, [e("img", { attrs: { src: n(143) } })]), e("navigation")], 1)]);
    }, [], !1, null, null, null));St.options.__file = "Header.vue";var $t = St.exports,
        Lt = { name: "Banner", props: { text: { type: String, default: "" } } },
        It = (n(279), Object(J.a)(Lt, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("div", { staticClass: "banner" }, [e("p", { staticClass: "banner__text" }, [this._v(this._s(this.text))])]);
    }, [], !1, null, null, null));It.options.__file = "Banner.vue";var At = It.exports,
        Nt = [function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item" }, [e("a", { attrs: { href: "/thyroid" } }, [this._v("Thyroid")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item" }, [e("a", { attrs: { href: "/specialists" } }, [this._v("Thriva for specialists")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item" }, [e("a", { attrs: { href: "https://s3-eu-west-1.amazonaws.com/thriva/legal/Website+Terms.pdf", target: "_blank", rel: "noopener" } }, [this._v("Website terms")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item" }, [e("a", { attrs: { href: "https://s3-eu-west-1.amazonaws.com/thriva/legal/Customer+Terms+and+Conditions.pdf", target: "_blank", rel: "noopener" } }, [this._v("Customer terms")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item" }, [e("a", { attrs: { href: "mailto:hello@thriva.co" } }, [this._v("hello@thriva.co")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item" }, [e("a", { attrs: { href: "https://blog.thriva.co", target: "_blank", rel: "noopener" } }, [this._v("Our blog")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item" }, [e("a", { attrs: { href: "https://thriva.workable.com" } }, [this._v("Careers")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "footer__list-item footer__list-item--social" }, [e("a", { staticClass: "footer_social-link footer_social-link--twitter", attrs: { href: "https://twitter.com/thrivahealth", target: "_blank", rel: "noopener" } }, [e("img", { attrs: { src: n(144) } })]), e("a", { staticClass: "footer_social-link footer_social-link--facebook", attrs: { href: "https://fb.com/thriva", target: "_blank", rel: "noopener" } }, [e("img", { attrs: { src: n(145) } })]), e("a", { staticClass: "footer_social-link footer_social-link--instagram", attrs: { href: "https://instagram.com/thrivahealth", target: "_blank", rel: "noopener" } }, [e("img", { attrs: { src: n(146) } })])]);
    }],
        Dt = n(7),
        jt = n.n(Dt),
        Ot = { name: "NewsletterSignup", props: { dripCampaignId: { type: String, required: !0 } }, data: function data() {
        return { submitting: !1, submitted: !1, requestError: !1, email: null };
      }, computed: { errorMessage: function errorMessage() {
          return this.requestError ? "Oops! An error occurred, please try again." : this.errors.has("email") ? "Oops! Looks like this email is invalid." : void 0;
        } }, methods: { subscribe: function subscribe() {
          var t = this;this.$validator.validateAll().then(function (e) {
            if (e) {
              t.submitting = !0;var n = { subscribers: [{ email: t.email }] };jt.a.post("/drip/campaigns/".concat(t.dripCampaignId, "/subscribers"), n).then(function (e) {
                e.data;t.requestError = !1, t.submitted = !0;
              }).catch(function () {
                t.submitted = !1, t.requestError = !0;
              }).finally(function () {
                t.submitting = !1;
              });
            }
          });
        } } },
        Pt = (n(281), Object(J.a)(Ot, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("div", { staticClass: "newsletter-signup" }, [n("div", { staticClass: "grid-container" }, [n("div", { staticClass: "grid-x grid-margin-x" }, [t._m(0), n("div", { staticClass: "cell small-12 medium-6" }, [t.submitted ? n("div", { staticClass: "newsletter-signup__success" }, [n("img", { attrs: { src: "/images/icons/tick.svg" } }), n("p", { staticClass: "body--small" }, [t._v("Thanks, you've been subscribed as " + t._s(this.email) + " and you'll hear from us soon!")])]) : n("text-input", { directives: [{ name: "validate", rawName: "v-validate", value: "required|email", expression: '"required|email"' }], staticClass: "newsletter-signup__input", attrs: { placeholder: "Email address", type: "text", name: "email", error: t.errors.has("email") || t.requestError, feedback: t.errorMessage }, on: { keyup: function keyup(e) {
            return "button" in e || !t._k(e.keyCode, "enter", 13, e.key, "Enter") ? t.subscribe(e) : null;
          } }, model: { value: t.email, callback: function callback(e) {
            t.email = e;
          }, expression: "email" } }, [t.submitting ? n("div", { staticClass: "spinner", attrs: { slot: "action" }, slot: "action" }) : t.submitted ? t._e() : n("a", { staticClass: "newsletter-signup__cta", attrs: { slot: "action" }, on: { click: t.subscribe }, slot: "action" }, [t._v("Sign up")])])], 1)])])]);
    }, [function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("div", { staticClass: "cell small-12 medium-6 newsletter-signup__headline" }, [e("p", { staticClass: "body--small" }, [e("b", [this._v("Get 30% off your first test.")]), this._v(" Plus get the inside scoop on our latest content and updates in our monthly newsletter.")])]);
    }], !1, null, null, null));Pt.options.__file = "NewsletterSignup.vue";var Rt = { name: "Footer", components: { NewsletterSignup: Pt.exports }, methods: { launchIntercom: function launchIntercom() {
          window.Intercom && window.Intercom("show");
        }, newsletterFormCampaignId: function newsletterFormCampaignId() {
          return "824507337";
        } } },
        qt = (n(283), Object(J.a)(Rt, function () {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;return i("footer", { staticClass: "footer" }, [i("div", { staticClass: "grid-container" }, [i("div", { staticClass: "pill-container" }), i("div", { staticClass: "grid-x" }, [i("div", { staticClass: "small-12 medium-10 medium-offset-1 large-8 large-offset-2 cell" }, [i("newsletter-signup", { attrs: { dripCampaignId: t.newsletterFormCampaignId() } }), i("div", { staticClass: "divider footer__newsletter-divider" }), i("div", { staticClass: "grid-x grid-margin-x" }, [i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "footer__list" }, [i("li", { staticClass: "footer__list-title" }, [t._v("Products")]), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/products/essential" } }, [t._v("Essential")])], 1), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/products/baseline" } }, [t._v("Baseline")])], 1), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/products/advanced" } }, [t._v("Advanced")])], 1), t._m(0)])]), i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "footer__list" }, [i("li", { staticClass: "footer__list-title" }, [t._v("Information")]), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/about" } }, [t._v("About")])], 1), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/sample-collection" } }, [t._v("The health kit")])], 1), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/accuracy" } }, [t._v("Accuracy")])], 1), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/labs" } }, [t._v("Labs")])], 1), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/hub" } }, [t._v("Health hub")])], 1), t._m(1)])]), i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "footer__list" }, [i("li", { staticClass: "footer__list-title" }, [t._v("Legal")]), t._m(2), t._m(3), i("li", { staticClass: "footer__list-item" }, [i("nuxt-link", { attrs: { to: "/privacy" } }, [t._v("Privacy Policy")])], 1)])]), i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "footer__list" }, [i("li", { staticClass: "footer__list-title" }, [t._v("Get in touch")]), i("li", { staticClass: "footer__list-item" }, [i("a", { attrs: { href: "#intercom" }, on: { click: function click(e) {
            return e.preventDefault(), t.launchIntercom(e);
          } } }, [t._v("Chat to us")])]), t._m(4), t._m(5), t._m(6), t._m(7)])])]), i("div", { staticClass: "divider footer__copyright-divider" }), i("div", { staticClass: "small-12 cell footer__copyright" }, [i("img", { attrs: { src: n(100) } }), i("p", { staticClass: "body--small" }, [t._v("Copyright © Thriva Ltd " + t._s(new Date().getFullYear()))])])], 1)])])]);
    }, Nt, !1, null, null, null));qt.options.__file = "Footer.vue";var zt = { transition: "page", components: { LayoutHeader: $t, Banner: At, LayoutFooter: qt.exports }, data: function data() {
        return { bannerVisible: this.$store.state.banner && "tests-slug" !== this.$route.name, bannerText: this.$store.state.banner };
      } },
        Ut = (n(285), Object(J.a)(zt, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("div", { staticClass: "wrapper", class: { "wrapper--banner-visible": this.bannerVisible } }, [e("layout-header"), e("banner", { directives: [{ name: "show", rawName: "v-show", value: this.bannerVisible, expression: "bannerVisible" }], attrs: { text: this.bannerText } }), e("div", { staticClass: "content" }, [e("nuxt")], 1), e("layout-footer")], 1);
    }, [], !1, null, null, null));Ut.options.__file = "default.vue";var Ht = Ut.exports,
        Bt = n(15),
        Gt = { name: "TopicMenu", computed: Object(Bt.b)("content", { sortedTopics: "sortedTopics" }), methods: { menuItemClicked: function menuItemClicked() {
          this.$emit("menuItemClicked");
        } } },
        Yt = (n(288), Object(J.a)(Gt, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("ul", { staticClass: "topic-menu" }, [n("li", { staticClass: "topic-menu__item topic-menu__item--title" }, [t._v("Health Topics")]), t._l(t.sortedTopics, function (e, i) {
        return n("li", { staticClass: "topic-menu__item", on: { click: t.menuItemClicked } }, [0 !== i ? n("div", { staticClass: "divider" }) : t._e(), n("nuxt-link", { attrs: { to: "/hub/" + e.slug, title: e.name } }, [n("div", { staticClass: "topic-menu__item-details" }, [n("h4", { staticClass: "topic-menu__item-title" }, [t._v(t._s(e.name))]), n("p", { staticClass: "body--small topic-menu__item-description" }, [t._v(t._s(e.description))])])])], 1);
      })], 2);
    }, [], !1, null, null, null));Yt.options.__file = "TopicMenu.vue";var Ft = Yt.exports,
        Zt = [{ name: "About", path: "/about" }, { name: "The health kit", path: "/health-kit" }, { name: "Labs", path: "/labs" }, { name: "Health hub", path: "/hub" }],
        Wt = { name: "HubNavigation", components: { TopicMenu: Ft }, data: function data() {
        return { navigationToggleActive: !1, loggedIn: this.$store.state.loggedIn, menuItems: [{ title: "Health topics", dropdownMenu: "topic", href: "#" }], dropdownMenus: { information: Zt } };
      }, mounted: function mounted() {
        window.addEventListener("resize", this.resetDropdownPosition);
      }, methods: { toggleMobileNav: function toggleMobileNav() {
          this.$refs.navigation.classList.contains("navigation--dropdown-active") ? (this.$refs.navigation.classList.remove("navigation--dropdown-active"), document.querySelector("body").classList.remove("navigation--dropdown-active")) : (this.$refs.navigation.classList.add("navigation--dropdown-active"), document.querySelector("body").classList.add("navigation--dropdown-active"));
        }, enterMenuLink: function enterMenuLink(t) {
          t.target.classList.contains("menu__item--dropdown") ? this.showDropdownMenu(t.target) : this.hideDropdownMenu();var e = !0,
              n = !1,
              i = void 0;try {
            for (var o, r = this.menuItemNodes()[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
              var a = o.value;t.target === a ? (a.classList.add("menu__item--active"), a.classList.remove("menu__item--inactive")) : (a.classList.remove("menu__item--active"), a.classList.add("menu__item--inactive"));
            }
          } catch (t) {
            n = !0, i = t;
          } finally {
            try {
              e || null == r.return || r.return();
            } finally {
              if (n) throw i;
            }
          }
        }, leaveMenuLink: function leaveMenuLink(t) {
          var e = this;setTimeout(function () {
            e.mayHideDropDownMenu() && e.hideDropdownMenu();
          }, 200);
        }, leaveDropdownMenu: function leaveDropdownMenu(t) {
          var e = this;setTimeout(function () {
            e.mayHideDropDownMenu() && (e.hideDropdownMenu(), e.resetMenuItems());
          }, 150);
        }, leaveMenu: function leaveMenu() {
          var t = this;setTimeout(function () {
            t.dropdownMenuVisible() || t.resetMenuItems();
          }, 300);
        }, resetDropdownPosition: function resetDropdownPosition() {
          var t = this.$refs.dropdownBg,
              e = this.$refs.dropdownWrapper;Object.assign(e.style, { transform: "translateX(0)", width: "auto", height: "auto" }), Object.assign(t.style, { transform: "scaleX(0) scaleY(0)", width: "auto", height: "auto" });
        }, showDropdownMenu: function showDropdownMenu(t) {
          var e = this;!function () {
            if ("function" == typeof NodeList.prototype.forEach) return !1;NodeList.prototype.forEach = Array.prototype.forEach;
          }();var n = this.$refs.dropdownBg,
              i = this.$refs.dropdownWrapper,
              o = this.$el.querySelector('.dropdown-menu[data-menu="'.concat(t.getAttribute("data-dropdown-menu-id"), '"]')),
              r = o.querySelector(".dropdown-menu__content"),
              a = t.getBoundingClientRect(),
              s = r.getBoundingClientRect();this.dropdownMenuNodes().forEach(function (t) {
            t !== o ? t.classList.remove("active") : t.classList.add("active");
          }), Object.assign(i.style, { transform: "translateX(".concat(t.offsetLeft + a.width / 2 - s.width / 2 + "px", ")"), width: s.width + "px", height: s.height + "px" }), Object.assign(n.style, { transform: "scaleX(".concat(s.width + "px", ") scaleY(").concat(s.height + "px", ")"), width: s.width + "px", height: s.height + "px" }), this.$refs.navigation.classList.contains("navigation--dropdown-active") || setTimeout(function () {
            e.$refs.navigation.classList.add("navigation--dropdown-active");
          }, 50);
        }, hideDropdownMenu: function hideDropdownMenu() {
          var t = !0,
              e = !1,
              n = void 0;try {
            for (var i, o = this.dropdownMenuNodes()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
              i.value.classList.remove("active");
            }
          } catch (t) {
            e = !0, n = t;
          } finally {
            try {
              t || null == o.return || o.return();
            } finally {
              if (e) throw n;
            }
          }this.$refs.navigation.classList.remove("navigation--dropdown-active");
        }, mayHideDropDownMenu: function mayHideDropDownMenu() {
          return !this.$el.querySelector(".dropdown__wrap:hover") && !this.$el.querySelector(".menu__item--dropdown:hover");
        }, dropdownMenuVisible: function dropdownMenuVisible() {
          return this.$refs.navigation.classList.contains("navigation--dropdown-active");
        }, resetMenuItems: function resetMenuItems() {
          var t = !0,
              e = !1,
              n = void 0;try {
            for (var i, o = this.menuItemNodes()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
              var r = i.value;r.classList.remove("menu__item--inactive"), r.classList.remove("menu__item--active");
            }
          } catch (t) {
            e = !0, n = t;
          } finally {
            try {
              t || null == o.return || o.return();
            } finally {
              if (e) throw n;
            }
          }
        }, menuItemNodes: function menuItemNodes() {
          return this.$el.querySelectorAll(".menu__item");
        }, dropdownMenuNodes: function dropdownMenuNodes() {
          return this.$el.querySelectorAll(".dropdown-menu");
        }, childRouteCurrent: function childRouteCurrent(t) {
          if ("product" === t) return 0 === this.$route.path.indexOf("/products");var e = this.dropdownMenus[t];if (e) {
            var n = !0,
                i = !1,
                o = void 0;try {
              for (var r, a = e[Symbol.iterator](); !(n = (r = a.next()).done); n = !0) {
                var s = r.value;if (this.$route.path === s.path) return !0;
              }
            } catch (t) {
              i = !0, o = t;
            } finally {
              try {
                n || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
          }return !1;
        }, closeMenuOnClick: function closeMenuOnClick() {
          window.matchMedia("(min-width: 768px)").matches ? this.hideDropdownMenu() : (this.$refs.navigation.classList.remove("navigation--dropdown-active"), document.querySelector("body").classList.remove("navigation--dropdown-active"));
        } }, computed: { activeProductClass: function activeProductClass() {
          if (this.$route.params.slug) return "menu__item--".concat(this.$route.params.slug, "-active");
        }, accountActionUrl: function accountActionUrl() {
          return this.$store.state.loggedIn ? "/dashboard" : "/login";
        } }, beforeDestroy: function beforeDestroy() {
        window.removeEventListener("resize", this.resetDropdownPosition);
      } },
        Qt = (n(290), Object(J.a)(Wt, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("nav", { ref: "navigation", staticClass: "navigation navigation-hub" }, [n("div", { staticClass: "menu", on: { mouseleave: t.leaveMenu } }, t._l(t.menuItems, function (e) {
        return n("a", { staticClass: "menu__item", class: [{ "menu__item--dropdown": e.dropdownMenu, "menu__item--child-route-current": t.childRouteCurrent(e.dropdownMenu) }, t.activeProductClass], attrs: { href: e.href, "data-dropdown-menu-id": e.dropdownMenu, target: e.target, rel: e.rel }, on: { mouseover: t.enterMenuLink, mouseleave: t.leaveMenuLink, click: function click(t) {
              "Help" !== e.title && t.preventDefault();
            } } }, [t._v(t._s(e.title))]);
      })), n("div", { staticClass: "dropdown-holder", on: { mouseleave: t.leaveDropdownMenu } }, [n("div", { ref: "dropdownWrapper", staticClass: "dropdown__wrap" }, [n("div", { staticClass: "dropdown-menu", attrs: { id: "topic", "data-menu": "topic" } }, [n("div", { staticClass: "dropdown-menu__content" }, [n("topic-menu", { on: { menuItemClicked: t.closeMenuOnClick } })], 1)]), n("div", { ref: "dropdownBg", staticClass: "dropdown__bg" })])]), n("div", { staticClass: "navigation__responsive-menu" }, [n("a", { staticClass: "navigation__toggle", on: { click: t.toggleMobileNav } }, [t._v("Health topics")])])]);
    }, [], !1, null, null, null));Qt.options.__file = "HubNavigation.vue";var Vt = Qt.exports,
        Xt = n(93),
        Jt = Object(Xt.a)("S6YE61DEEB", "65b5202fdb72308112c9bf88e56f00b0"),
        Kt = { name: "Search", props: { index: { type: String, required: !0 }, queryParameters: { type: Object, default: {} }, search: { type: Boolean, default: !1 }, searchMobile: { type: Boolean, default: !1 } }, data: function data() {
        return { searchStore: Jt, scrollResults: !1 };
      }, methods: { toggleActive: function toggleActive() {
          this.$emit("searchActive", !this.searchMobile), this.clear();var t = document.querySelectorAll("input[type=search]");this.$nextTick(function () {
            return t[0].focus();
          });
        }, articleLink: function articleLink(t) {
          var e = t.taxonomies_hierarchical.category.lvl1[0].split(">"),
              n = e[0].trim().toLowerCase(),
              i = e[1].trim().toLowerCase(),
              o = new URL(t.permalink).pathname.split("/").filter(function (t) {
            return t.length;
          });return { name: "hub-topic-category-article", params: { topic: n, category: i, article: o[o.length - 1] } };
        }, clear: function clear() {
          this.searchStore.query = "";
        }, resultFocus: function resultFocus() {
          this.scrollResults = !0, document.body.style.overflow = "hidden";
        }, bodyFocus: function bodyFocus() {
          this.scrollResults = !1, document.body.style.overflow = "auto";
        } }, watch: { $route: function $route() {
          this.clear(), this.searcMobile && this.$emit("searchActive", !1);
        }, "searchStore.query.length": function searchStoreQueryLength() {
          var t = Jt.query.length > 0;this.$emit("searching", t);
        } } },
        te = (n(460), Object(J.a)(Kt, function () {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;return i("div", { staticClass: "search", class: { "search--active": t.searchMobile }, on: { click: function click(t) {
            t.stopPropagation();
          } } }, [i("a", { staticClass: "search__toggle", attrs: { href: "#" }, on: { click: function click(e) {
            e.preventDefault(), t.toggleActive();
          } } }, [t.searchMobile ? i("img", { attrs: { src: n(136) } }) : i("img", { attrs: { src: "/images/icons/search.svg" } })]), i("ais-index", { attrs: { "index-name": t.index, searchStore: t.searchStore, "query-parameters": t.queryParameters } }, [i("div", { staticClass: "search__input" }, [i("ais-input", { attrs: { placeholder: "Search articles" } }), t.search ? i("img", { staticClass: "close", attrs: { src: n(136) }, on: { click: function click(e) {
            t.clear();
          } } }) : i("img", { attrs: { src: "/images/icons/search.svg" } })], 1), i("div", { directives: [{ name: "show", rawName: "v-show", value: t.search, expression: "search" }], staticClass: "search__results", on: { mouseover: t.resultFocus, mouseleave: t.bodyFocus } }, [i("ais-results", { scopedSlots: t._u([{ key: "default", fn: function fn(e) {
            var n = e.result;return [i("div", { staticClass: "search__result" }, [i("nuxt-link", { attrs: { to: t.articleLink(n) }, nativeOn: { click: function click(e) {
                  return t.clear(e);
                } } }, [i("h4", { staticClass: "search__result-title" }, [i("ais-highlight", { attrs: { result: n, "attribute-name": "post_title" } })], 1), i("p", { staticClass: "search__result-body", domProps: { innerHTML: t._s(n._snippetResult.content.value) } })])], 1)];
          } }]) }), i("ais-no-results", { staticClass: "search__no-results", scopedSlots: t._u([{ key: "default", fn: function fn(e) {
            return [i("img", { attrs: { src: "/images/icons/error.svg" } }), i("p", { staticClass: "body--large" }, [t._v("No results for '" + t._s(e.query) + "'")]), i("p", [t._v("Please try another search")])];
          } }]) })], 1)])], 1);
    }, [], !1, null, null, null));te.options.__file = "Search.vue";var ee = { name: "Header", components: { HubNavigation: Vt, Search: te.exports }, data: function data() {
        return { search: !1, searchMobile: !1 };
      }, methods: { closeMobileNav: function closeMobileNav() {
          this.$children[2].closeMenuOnClick();
        }, searchActive: function searchActive(t) {
          this.searchMobile = t;
        }, searching: function searching(t) {
          this.search = t, this.clickHandler();
        }, clickHandler: function clickHandler() {
          this.search ? document.addEventListener("click", this.clickEvents) : document.removeEventListener("click", this.clickEvents);
        }, clickEvents: function clickEvents() {
          this.search = !1, this.searchMobile = !1, this.clickHandler();
        } } },
        ne = (n(462), Object(J.a)(ee, function () {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;return i("header", { staticClass: "header hub-header" }, [i("div", { staticClass: "header__container" }, [t.searchMobile ? t._e() : i("div", { staticClass: "header__brand" }, [i("nuxt-link", { staticClass: "header__logo header__logo--logomark", attrs: { to: "/hub" } }, [i("img", { attrs: { src: n(100) }, on: { click: t.closeMobileNav } })]), i("nuxt-link", { staticClass: "header__logo header__logo--full", attrs: { to: "/hub" } }, [i("img", { attrs: { src: n(287) } })])], 1), i("div", { staticClass: "header__nav", class: { "header__nav--search": t.searchMobile } }, [t.searchMobile ? t._e() : i("hub-navigation"), i("div", { staticClass: "header__search", class: { "header__search--open": t.searchMobile } }, [i("search", { attrs: { index: "content_hub_searchable_posts", queryParameters: { filters: "post_type_label:Posts", attributesToSnippet: ["content:25"] }, search: t.search, searchMobile: t.searchMobile }, on: { searchActive: t.searchActive, searching: t.searching } })], 1)], 1)])]);
    }, [], !1, null, null, null));ne.options.__file = "HubHeader.vue";var ie = ne.exports,
        oe = [function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "hub-footer__list-item" }, [e("a", { attrs: { href: "/specialists" } }, [this._v("Thriva for specialists")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "hub-footer__list-item" }, [e("a", { attrs: { href: "mailto:hello@thriva.co" } }, [this._v("hello@thriva.co")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "hub-footer__list-item" }, [e("a", { attrs: { href: "https://blog.thriva.co", target: "_blank", rel: "noopener" } }, [this._v("Our blog")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "hub-footer__list-item" }, [e("a", { attrs: { href: "https://thriva.workable.com" } }, [this._v("Careers")])]);
    }, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("li", { staticClass: "hub-footer__list-item hub-footer__list-item--social" }, [e("a", { staticClass: "footer_social-link footer_social-link--twitter", attrs: { href: "https://twitter.com/thrivahealth", target: "_blank", rel: "noopener" } }, [e("img", { attrs: { src: n(144) } })]), e("a", { staticClass: "footer_social-link footer_social-link--facebook", attrs: { href: "https://fb.com/thriva", target: "_blank", rel: "noopener" } }, [e("img", { attrs: { src: n(145) } })]), e("a", { staticClass: "footer_social-link footer_social-link--instagram", attrs: { href: "https://instagram.com/thrivahealth", target: "_blank", rel: "noopener" } }, [e("img", { attrs: { src: n(146) } })])]);
    }],
        re = { name: "HubFooter", components: { LeadCaptureForm: n(135).a }, methods: { launchIntercom: function launchIntercom() {
          window.Intercom && window.Intercom("show");
        }, leadCaptureCampaignId: function leadCaptureCampaignId() {
          return "330555958";
        } }, computed: Object(Bt.c)("content", { topics: function topics(t) {
          return t.hub.topics;
        } }) },
        ae = (n(466), Object(J.a)(re, function () {
      var t = this,
          e = t.$createElement,
          i = t._self._c || e;return i("footer", { staticClass: "hub-footer" }, [i("div", { staticClass: "hub-footer__lead-capture" }, [i("div", { staticClass: "grid-container" }, [i("div", { staticClass: "divider" }), i("div", { staticClass: "grid-x" }, [i("div", { staticClass: "cell small-12" }, [i("lead-capture-form", { attrs: { submitText: "Get your copy", campaignId: t.leadCaptureCampaignId(), feedback: "Download link has been sent to $email", backgroundStyle: "dark" } }, [i("h2", [t._v("The results are in!")]), i("p", [t._v("See what our nation’s health is really like and how your health compares. We’ll also send you a code so you can get 50% off your first Baseline or Advanced test. Sign up to find out.")])])], 1)])])]), i("div", { staticClass: "divider" }), i("div", { staticClass: "grid-container" }, [i("div", { staticClass: "grid-x" }, [i("div", { staticClass: "small-12 medium-10 medium-offset-1 large-8 large-offset-2 cell" }, [i("div", { staticClass: "grid-x grid-margin-x" }, [i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "hub-footer__list" }, [i("li", { staticClass: "hub-footer__list-title" }, [t._v("Health topics")]), t._l(t.topics, function (e) {
        return i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/hub/" + e.slug } }, [t._v(t._s(e.name))])], 1);
      })], 2)]), i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "hub-footer__list" }, [i("li", { staticClass: "hub-footer__list-title" }, [t._v("Products")]), i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/products/essential" } }, [t._v("Essential")])], 1), i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/products/baseline" } }, [t._v("Baseline")])], 1), i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/products/advanced" } }, [t._v("Advanced")])], 1)])]), i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "hub-footer__list" }, [i("li", { staticClass: "hub-footer__list-title" }, [t._v("Information")]), i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/about" } }, [t._v("About")])], 1), i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/sample-collection" } }, [t._v("Sample collection")])], 1), i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/labs" } }, [t._v("Labs")])], 1), i("li", { staticClass: "hub-footer__list-item" }, [i("nuxt-link", { attrs: { to: "/hub" } }, [t._v("Health hub")])], 1), t._m(0)])]), i("div", { staticClass: "small-6 medium-3 cell" }, [i("ul", { staticClass: "hub-footer__list" }, [i("li", { staticClass: "hub-footer__list-title" }, [t._v("Get in touch")]), i("li", { staticClass: "hub-footer__list-item" }, [i("a", { attrs: { href: "#intercom" }, on: { click: function click(e) {
            return e.preventDefault(), t.launchIntercom(e);
          } } }, [t._v("Chat to us")])]), t._m(1), t._m(2), t._m(3), t._m(4)])])]), i("div", { staticClass: "divider hub-footer__divider" }), i("div", { staticClass: "small-12 cell hub-footer__copyright" }, [i("img", { attrs: { src: n(143) } }), i("p", [t._v("Copyright © Thriva Ltd " + t._s(new Date().getFullYear()))])])])])])]);
    }, oe, !1, null, null, null));ae.options.__file = "HubFooter.vue";var se = { transition: "page", components: { HubHeader: ie, HubFooter: ae.exports } },
        ce = (n(468), Object(J.a)(se, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("div", { staticClass: "hub-wrapper" }, [e("div", { staticClass: "hub-header-and-content" }, [e("hub-header"), e("div", { staticClass: "hub-content" }, [e("nuxt")], 1)], 1), e("hub-footer")], 1);
    }, [], !1, null, null, null));ce.options.__file = "hub.vue";var le = ce.exports,
        ue = { transition: "page" },
        de = (n(470), Object(J.a)(ue, function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("div", { staticClass: "noNav wrapper" }, [e("div", { staticClass: "content" }, [e("nuxt")], 1)]);
    }, [], !1, null, null, null));de.options.__file = "noNav.vue";var pe = { _default: Ht, _hub: le, _noNav: de.exports },
        he = { head: { meta: [{ hid: "og:image", name: "og:image", content: "https://s3-eu-west-1.amazonaws.com/thriva/images/opengraph-image.png" }, { hid: "og:locale", name: "og:locale", content: "en_GB" }, { hid: "google-site-verification", name: "google-site-verification", content: "aaif7C0_lpNVRTlYiFAG9qlt1T6ViWUDmxU5ZUHuKfY" }, { hid: "charset", charset: "utf-8" }, { hid: "viewport", name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "mobile-web-app-capable", name: "mobile-web-app-capable", content: "yes" }, { hid: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", content: "Thriva - Track and improve your health" }, { hid: "author", name: "author", content: "Thriva" }, { hid: "description", name: "description", content: "Understand what's really going on inside your body with smart finger-prick blood tests you take at home" }, { hid: "theme-color", name: "theme-color", content: "#3ECADD" }, { hid: "og:type", name: "og:type", property: "og:type", content: "website" }, { hid: "og:title", name: "og:title", property: "og:title", content: "Thriva - Track and improve your health" }, { hid: "og:site_name", name: "og:site_name", property: "og:site_name", content: "Thriva - Track and improve your health" }, { hid: "og:description", name: "og:description", property: "og:description", content: "Understand what's really going on inside your body with smart finger-prick blood tests you take at home" }], script: [{ src: "https://use.typekit.net/ouw8fll.js" }, { innerHTML: "try{Typekit.load({ async: true });}catch(e){}", type: "application/javascript" }, { src: "https://cdn.polyfill.io/v2/polyfill.min.js?features=String.prototype.includes,Array.prototype.includes,Array.prototype.find,Object.assign,Object.values,Promise.prototype.finally,Element.prototype.classList,URL", async: !0 }], __dangerouslyDisableSanitizers: ["script"], link: [{ rel: "manifest", href: "/_nuxt/manifest.7b37346d.json" }, { rel: "shortcut icon", href: "/_nuxt/icons/icon_64.c4$qc8LC0pL.png" }, { rel: "apple-touch-icon", href: "/_nuxt/icons/icon_512.c4$qc8LC0pL.png", sizes: "512x512" }], style: [], title: "Thriva - Track and improve your health", htmlAttrs: { lang: "en" } }, render: function render(t, e) {
        var n = t("nuxt-loading", { ref: "loading" }),
            i = t(this.layout || "nuxt"),
            o = t("div", { domProps: { id: "__layout" }, key: this.layoutName }, [i]),
            r = t("transition", { props: { name: "layout", mode: "out-in" } }, [o]);return t("div", { domProps: { id: "__nuxt" } }, [n, r]);
      }, data: function data() {
        return { layout: null, layoutName: "" };
      }, beforeCreate: function beforeCreate() {
        l.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
      }, created: function created() {
        l.a.prototype.$nuxt = this, "undefined" != typeof window && (window.$nuxt = this), this.error = this.nuxt.error;
      }, mounted: function mounted() {
        this.$loading = this.$refs.loading;
      }, watch: { "nuxt.err": "errorChanged" }, methods: { errorChanged: function errorChanged() {
          this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(), this.$loading.finish && this.$loading.finish());
        }, setLayout: function setLayout(t) {
          return t && pe["_" + t] || (t = "default"), this.layoutName = t, this.layout = pe["_" + t], this.layout;
        }, loadLayout: function loadLayout(t) {
          return t && pe["_" + t] || (t = "default"), Promise.resolve(pe["_" + t]);
        } }, components: { NuxtLoading: kt } };l.a.use(Bt.a);var fe = n(472),
        me = fe.keys(),
        _e = {},
        ge = me.find(function (t) {
      return t.includes("./index.");
    });if (ge && (_e = Pe(ge)), "function" != typeof _e) {
      _e.modules || (_e.modules = {});var ve = !0,
          be = !1,
          xe = void 0;try {
        for (var we, ye = me[Symbol.iterator](); !(ve = (we = ye.next()).done); ve = !0) {
          var ke = we.value,
              Ce = ke.replace(/^\.\//, "").replace(/\.(mjs|js)$/, "");if ("index" !== Ce) {
            var Ee = Ce.split(/\//);if (Ce = Ee[Ee.length - 1], ["state", "getters", "actions", "mutations"].includes(Ce)) {
              qe(Re(_e, Ee, !0), ke, Ce);
            } else {
              var Te = "index" === Ce;Te && Ee.pop();var Me = Re(_e, Ee),
                  Se = Pe(ke);if (Me[Ce = Ee.pop()] = Me[Ce] || {}, Te) {
                var $e = {};if (Me[Ce].appends) {
                  $e.appends = Me[Ce].appends;var Le = !0,
                      Ie = !1,
                      Ae = void 0;try {
                    for (var Ne, De = Me[Ce].appends[Symbol.iterator](); !(Le = (Ne = De.next()).done); Le = !0) {
                      var je = Ne.value;$e[je] = Me[Ce][je];
                    }
                  } catch (t) {
                    Ie = !0, Ae = t;
                  } finally {
                    try {
                      Le || null == De.return || De.return();
                    } finally {
                      if (Ie) throw Ae;
                    }
                  }
                }Me[Ce] = Object.assign({}, Me[Ce], Se, $e), Me[Ce].namespaced = !0;
              } else Me[Ce] = Object.assign({}, Se, Me[Ce]), Me[Ce].namespaced = !0;
            }
          }
        }
      } catch (t) {
        be = !0, xe = t;
      } finally {
        try {
          ve || null == ye.return || ye.return();
        } finally {
          if (be) throw xe;
        }
      }
    }var Oe = _e instanceof Function ? _e : function () {
      return new Bt.a.Store(Object.assign({ strict: !1 }, _e, { state: _e.state instanceof Function ? _e.state() : {} }));
    };function Pe(t) {
      var e = fe(t),
          n = e.default || e;if (n.commit) throw new Error("[nuxt] store/" + t.replace("./", "") + " should export a method which returns a Vuex instance.");if (n.state && "function" != typeof n.state) throw new Error("[nuxt] state should be a function in store/" + t.replace("./", ""));return n;
    }function Re(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];if (1 === e.length) return n ? t : t.modules;var i = e.shift();return t.modules[i] = t.modules[i] || {}, t.modules[i].namespaced = !0, t.modules[i].modules = t.modules[i].modules || {}, Re(t.modules[i], e, n);
    }function qe(t, e, n) {
      var i = fe(e);t.appends = t.appends || [], t.appends.push(n), t[n] = i.default || i;
    }var ze = n(133),
        Ue = n.n(ze),
        He = n(95),
        Be = n.n(He),
        Ge = n(220),
        Ye = n.n(Ge),
        Fe = function Fe(t, e) {
      t.$raven = Be.a, e("raven", Be.a), Be.a.config("https://34d9cecb35024c78952c501e621dfc21@sentry.io/255650", { environment: "production" }).addPlugin(Ye.a, l.a).install();
    },
        Ze = n(18),
        We = { install: function install(t, e) {
        t.component("ThvButton", Ze.Button), t.component("AsyncButton", Ze.AsyncButton), t.component("TextInput", Ze.TextInput), t.component("RadioInput", Ze.RadioInput), t.component("ThvToolTip", Ze.ToolTip), t.component("Checkbox", Ze.Checkbox), t.component("Stats", Ze.Stats), t.component("TestOrderCard", Ze.TestOrderCard);
      } };l.a.use(We);var Qe = We,
        Ve = n(221),
        Xe = n.n(Ve);l.a.use(Xe.a);var Je = n(222),
        Ke = n.n(Je);l.a.use(Ke.a);var tn = { "products-slug": function productsSlug(t) {
        return "products-".concat(t.params.slug);
      } },
        en = function en(t) {
      !function () {
        var e = window.analytics = window.analytics || [];if (!e.initialize) if (e.invoked) window.console && console.error && console.error("Segment snippet included twice.");else {
          e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"], e.factory = function (t) {
            return function () {
              var n = Array.prototype.slice.call(arguments);return n.unshift(t), e.push(n), e;
            };
          };for (var n = 0; n < e.methods.length; n++) {
            var i = e.methods[n];e[i] = e.factory(i);
          }e.load = function (t) {
            var e = document.createElement("script");e.type = "text/javascript", e.async = !0, e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";var n = document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e, n);
          }, e.SNIPPET_VERSION = "4.0.0", e.load("0UIeYs5tfoutTsf0xggo2qzWbbfIk1rz"), t.app.router.afterEach(function (e, n) {
            t.store.dispatch("analytics/IDENTIFY");var i = nn(e),
                o = { full_path: e.fullPath, path: e.path, params: e.params, query: e.query };t.store.dispatch("analytics/PAGE", { name: i, data: o });
          });
        }
      }();
    },
        nn = function nn(t) {
      return "function" == typeof tn[t.name] ? tn[t.name](t) : t.name;
    },
        on = n(13),
        rn = n.n(on),
        an = function an() {
      var t = rn.a.parse(document.cookie).resource_owner;if (t) {
        var e = JSON.parse(t),
            n = e.id,
            i = e.email;jt.a.get("/intercom/hash?id=".concat(n)).then(function (t) {
          window.Intercom("boot", { email: i, app_id: "lx3divi8", user_hash: t.data, user_id: n });
        });
      } else window.Intercom("boot", { app_id: "lx3divi8" });
    },
        sn = function sn() {
      window.Intercom ? an() : window.analytics.ready(function () {
        an();
      });
    };l.a.use(Xt.b);var cn = n(223);l.a.use(cn.a, { events: "blur", dictionary: { en: { custom: { email: { email: "Please enter a valid email address", required: "Please enter your email address" }, password: { required: "Please enter a password", min: function min(t, e) {
                return "Passwords must contain at least ".concat(e, " characters.");
              } }, acceptedTerms: { required: "You must agree to the terms and conditions and privacy policy" }, firstName: { required: "Please enter your first name" }, lastName: { required: "Please enter your last name" }, dob: { required: "Please enter your date of birth" }, sex: { required: "Please select your biological sex" } } } } }), jt.a.defaults.headers = { Accept: "application/vnd.api+json", "Content-Type": "application/vnd.api+json" }, l.a.prototype.$http = jt.a, l.a.filter("formatPrice", function (t) {
      if (!t) return "";var e = t % 100;return e < 10 && (e = "0" + e), ((t - t % 100) / 100).toString() + "." + e;
    }), l.a.filter("capitalize", function (t) {
      return t ? (t = t.toString()).charAt(0).toUpperCase() + t.slice(1) : "";
    }), l.a.filter("humanize", function (t) {
      return t ? t.toString().replace(/_/g, " ") : "";
    });var ln = function ln(t) {
      var e = document.cookie;if (e) {
        var n = rn.a.parse(e);n.redirectTo && t.store.commit("SET_REDIRECT", n.redirectTo);
      }if ("login" === t.route.name && t.route.query.redirectTo) {
        var i = rn.a.serialize("redirectTo", t.route.query.redirectTo, { path: "/", maxAge: 600 });document.cookie = i;
      }
    },
        un = function () {
      var t = c()(a.a.mark(function t(e) {
        var n, i, o, r, s;return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                if (i = document.cookie, o = e.query.discount_code, i && (n = rn.a.parse(i)), !o) {
                  t.next = 10;break;
                }if ((r = n ? n.discountCode : null) && JSON.parse(r).code === o) {
                  t.next = 10;break;
                }return t.next = 8, dn(o, e);case 8:
                (s = t.sent) && hn(s, e);case 10:
                n && n.discountCode && e.store.dispatch("discount/SET", JSON.parse(n.discountCode));case 11:case "end":
                return t.stop();}
          }
        }, t, this);
      }));return function (e) {
        return t.apply(this, arguments);
      };
    }();function dn(t, e) {
      return pn.apply(this, arguments);
    }function pn() {
      return (pn = c()(a.a.mark(function t(e, n) {
        var i, o, r, s, c, l;return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                t.prev = 0, t.next = 11;break;case 4:
                return i = t.sent, o = i.data, (r = o.data.attributes).code = o.data.id, t.abrupt("return", r);case 11:
                return t.next = 13, jt.a.get("/api/v1/discount_codes/".concat(e.toUpperCase()));case 13:
                return s = t.sent, c = s.data, (l = c.data.attributes).code = c.data.id, t.abrupt("return", l);case 18:
                t.next = 23;break;case 20:
                return t.prev = 20, t.t0 = t.catch(0), t.abrupt("return", null);case 23:case "end":
                return t.stop();}
          }
        }, t, this, [[0, 20]]);
      }))).apply(this, arguments);
    }var hn = function hn(t, e) {
      e.store.dispatch("discount/SET", t);var n = rn.a.serialize("discountCode", JSON.stringify(t), { maxAge: 604800 });document.cookie = n;
    };l.a.component(F.name, F), l.a.component(Z.name, Z), l.a.component(V.name, V), l.a.component(xt.name, xt), l.a.use(C.a, { keyName: "head", attribute: "data-n-head", ssrAttribute: "data-n-head-ssr", tagIDKeyName: "hid" });var fn = { name: "page", mode: "out-in", appear: !1, appearClass: "appear", appearActiveClass: "appear-active", appearToClass: "appear-to" };function mn() {
      return (mn = c()(a.a.mark(function t(e) {
        var n, i, o, r, s, c, u, d;return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.next = 2, new E.a({ mode: "history", base: "/", linkActiveClass: "nuxt-link-active", linkExactActiveClass: "nuxt-link-exact-active", scrollBehavior: G, routes: [{ path: "/forgot-password", component: T, name: "forgot-password" }, { path: "/specialists", component: M, name: "specialists" }, { path: "/sample-collection", component: S, name: "sample-collection" }, { path: "/privacy", component: $, name: "privacy" }, { path: "/labs", component: L, name: "labs" }, { path: "/about", component: I, name: "about" }, { path: "/accuracy", component: A, name: "accuracy" }, { path: "/hub", component: N, children: [{ path: "", component: D, name: "hub" }, { path: "preview", component: j, name: "hub-preview" }, { path: ":topic", component: O, children: [{ path: "", component: P, name: "hub-topic" }, { path: ":category", component: R, children: [{ path: "", component: q, name: "hub-topic-category" }, { path: ":article", component: z, name: "hub-topic-category-article" }] }] }] }, { path: "/tests/:slug?", component: U, name: "tests-slug" }, { path: "/products/:slug?", component: H, name: "products-slug" }, { path: "/", component: B, name: "index" }], fallback: !1 });case 2:
                return n = t.sent, (i = Oe(e)).$router = n, o = i.registerModule, i.registerModule = function (t, e, n) {
                  return o.call(i, t, e, Object.assign({ preserveState: !0 }, n));
                }, r = y()({ router: n, store: i, nuxt: { defaultTransition: fn, transitions: [fn], setTransitions: function setTransitions(t) {
                      return Array.isArray(t) || (t = [t]), t = t.map(function (t) {
                        return t = t ? "string" == typeof t ? Object.assign({}, fn, { name: t }) : Object.assign({}, fn, t) : fn;
                      }), this.$options.nuxt.transitions = t, t;
                    }, err: null, dateErr: null, error: function error(t) {
                      t = t || null, r.context._errored = !!t, "string" == typeof t && (t = { statusCode: 500, message: t });var n = this.nuxt || this.$options.nuxt;return n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t;
                    } } }, he), i.app = r, s = e ? e.next : function (t) {
                  return r.router.push(t);
                }, e ? c = n.resolve(e.url).route : (u = pt(n.options.base), c = n.resolve(u).route), t.next = 13, lt(r, { route: c, next: s, error: r.nuxt.error.bind(r), store: i, payload: e ? e.payload : void 0, req: e ? e.req : void 0, res: e ? e.res : void 0, beforeRenderFns: e ? e.beforeRenderFns : void 0 });case 13:
                if (d = function d(t, e) {
                  if (!t) throw new Error("inject(key, value) has no key provided");if (!e) throw new Error("inject(key, value) has no value provided");r[t = "$" + t] = e, i[t] = r[t];var n = "__nuxt_" + t + "_installed__";l.a[n] || (l.a[n] = !0, l.a.use(function () {
                    l.a.prototype.hasOwnProperty(t) || Object.defineProperty(l.a.prototype, t, { get: function get() {
                        return this.$root.$options[t];
                      } });
                  }));
                }, window.__NUXT__ && window.__NUXT__.state && i.replaceState(window.__NUXT__.state), "function" != typeof Qe) {
                  t.next = 18;break;
                }return t.next = 18, Qe(r.context, d);case 18:
                t.next = 21;break;case 21:
                t.next = 24;break;case 24:
                t.next = 27;break;case 27:
                t.next = 30;break;case 30:
                if ("function" != typeof ln) {
                  t.next = 33;break;
                }return t.next = 33, ln(r.context, d);case 33:
                if ("function" != typeof Ue.a) {
                  t.next = 37;break;
                }return t.next = 37, Ue()(r.context, d);case 37:
                if ("function" != typeof Fe) {
                  t.next = 40;break;
                }return t.next = 40, Fe(r.context, d);case 40:
                t.next = 43;break;case 43:
                t.next = 46;break;case 46:
                if ("function" != typeof en) {
                  t.next = 49;break;
                }return t.next = 49, en(r.context, d);case 49:
                if ("function" != typeof sn) {
                  t.next = 52;break;
                }return t.next = 52, sn(r.context, d);case 52:
                if ("function" != typeof un) {
                  t.next = 55;break;
                }return t.next = 55, un(r.context, d);case 55:
                t.next = 58;break;case 58:
                return t.abrupt("return", { app: r, router: n, store: i });case 59:case "end":
                return t.stop();}
          }
        }, t, this);
      }))).apply(this, arguments);
    }var _n,
        gn,
        vn = [],
        bn = window.__NUXT__ || {};function xn(t, e, n) {
      var i = function i(t) {
        var i = function (t, e) {
          if (!t || !t.options || !t.options[e]) return {};var n = t.options[e];if ("function" == typeof n) {
            for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) {
              o[r - 2] = arguments[r];
            }return n.apply(void 0, o);
          }return n;
        }(t, "transition", e, n) || {};return "string" == typeof i ? { name: i } : i;
      };return t.map(function (t) {
        var e = Object.assign({}, i(t));if (n && n.matched.length && n.matched[0].components.default) {
          var o = i(n.matched[0].components.default);Object.keys(o).filter(function (t) {
            return o[t] && -1 !== t.toLowerCase().indexOf("leave");
          }).forEach(function (t) {
            e[t] = o[t];
          });
        }return e;
      });
    }function wn(t, e, n) {
      return yn.apply(this, arguments);
    }function yn() {
      return (yn = c()(a.a.mark(function t(e, n, i) {
        var o,
            r,
            s = this;return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return this._pathChanged = !!_n.nuxt.err || n.path !== e.path, this._queryChanged = JSON.stringify(e.query) !== JSON.stringify(n.query), this._diffQuery = this._queryChanged ? ft(e.query, n.query) : [], this._pathChanged && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 4, t.next = 7, at(e);case 7:
                o = t.sent, !this._pathChanged && this._queryChanged && o.some(function (t) {
                  var e = t.options.watchQuery;return !0 === e || !!Array.isArray(e) && e.some(function (t) {
                    return s._diffQuery[t];
                  });
                }) && this.$loading.start && !this.$loading.manual && this.$loading.start(), i(), t.next = 19;break;case 12:
                t.prev = 12, t.t0 = t.catch(4), t.t0 = t.t0 || {}, r = t.t0.statusCode || t.t0.status || t.t0.response && t.t0.response.status || 500, this.error({ statusCode: r, message: t.t0.message }), this.$nuxt.$emit("routeChanged", e, n, t.t0), i(!1);case 19:case "end":
                return t.stop();}
          }
        }, t, this, [[4, 12]]);
      }))).apply(this, arguments);
    }function kn(t, e) {
      return bn.serverRendered && e && nt(t, e), t._Ctor = t, t;
    }function Cn(t, e, n) {
      var i = this,
          o = ["redirects"],
          r = !1;if (void 0 !== n && (o = [], n.middleware && (o = o.concat(n.middleware)), t.forEach(function (t) {
        t.options.middleware && (o = o.concat(t.options.middleware));
      })), o = o.map(function (t) {
        return "function" == typeof t ? t : ("function" != typeof x[t] && (r = !0, i.error({ statusCode: 500, message: "Unknown middleware " + t })), x[t]);
      }), !r) return function t(e, n) {
        return !e.length || n._redirected || n._errored ? Promise.resolve() : dt(e[0], n).then(function () {
          return t(e.slice(1), n);
        });
      }(o, e);
    }function En(t, e, n) {
      return Tn.apply(this, arguments);
    }function Tn() {
      return (Tn = c()(a.a.mark(function t(e, n, i) {
        var o,
            r,
            s,
            c,
            u,
            d,
            p,
            h,
            f,
            m,
            _,
            g,
            v,
            b,
            x,
            w,
            y = this;return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                  t.next = 2;break;
                }return t.abrupt("return", i());case 2:
                return vn = e === n ? [] : ot(n, o = []).map(function (t, e) {
                  return ht(n.matched[o[e]].path)(n.params);
                }), r = !1, s = function s(t) {
                  n.path === t.path && y.$loading.finish && y.$loading.finish(), n.path !== t.path && y.$loading.pause && y.$loading.pause(), r || (r = !0, i(t));
                }, t.next = 7, lt(_n, { route: e, from: n, next: s.bind(this) });case 7:
                if (this._dateLastError = _n.nuxt.dateErr, this._hadError = !!_n.nuxt.err, (u = ot(e, c = [])).length) {
                  t.next = 25;break;
                }return t.next = 14, Cn.call(this, u, _n.context);case 14:
                if (!r) {
                  t.next = 16;break;
                }return t.abrupt("return");case 16:
                return t.next = 18, this.loadLayout("function" == typeof tt.layout ? tt.layout(_n.context) : tt.layout);case 18:
                return d = t.sent, t.next = 21, Cn.call(this, u, _n.context, d);case 21:
                if (!r) {
                  t.next = 23;break;
                }return t.abrupt("return");case 23:
                return _n.context.error({ statusCode: 404, message: "This page could not be found" }), t.abrupt("return", i());case 25:
                return u.forEach(function (t) {
                  t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch);
                }), this.setTransitions(xn(u, e, n)), t.prev = 27, t.next = 30, Cn.call(this, u, _n.context);case 30:
                if (!r) {
                  t.next = 32;break;
                }return t.abrupt("return");case 32:
                if (!_n.context._errored) {
                  t.next = 34;break;
                }return t.abrupt("return", i());case 34:
                return "function" == typeof (p = u[0].options.layout) && (p = p(_n.context)), t.next = 38, this.loadLayout(p);case 38:
                return p = t.sent, t.next = 41, Cn.call(this, u, _n.context, p);case 41:
                if (!r) {
                  t.next = 43;break;
                }return t.abrupt("return");case 43:
                if (!_n.context._errored) {
                  t.next = 45;break;
                }return t.abrupt("return", i());case 45:
                h = !0, t.prev = 46, f = !0, m = !1, _ = void 0, t.prev = 50, g = u[Symbol.iterator]();case 52:
                if (f = (v = g.next()).done) {
                  t.next = 64;break;
                }if ("function" == typeof (b = v.value).options.validate) {
                  t.next = 56;break;
                }return t.abrupt("continue", 61);case 56:
                return t.next = 58, b.options.validate(_n.context);case 58:
                if (h = t.sent) {
                  t.next = 61;break;
                }return t.abrupt("break", 64);case 61:
                f = !0, t.next = 52;break;case 64:
                t.next = 70;break;case 66:
                t.prev = 66, t.t0 = t.catch(50), m = !0, _ = t.t0;case 70:
                t.prev = 70, t.prev = 71, f || null == g.return || g.return();case 73:
                if (t.prev = 73, !m) {
                  t.next = 76;break;
                }throw _;case 76:
                return t.finish(73);case 77:
                return t.finish(70);case 78:
                t.next = 84;break;case 80:
                return t.prev = 80, t.t1 = t.catch(46), this.error({ statusCode: t.t1.statusCode || "500", message: t.t1.message }), t.abrupt("return", i());case 84:
                if (h) {
                  t.next = 87;break;
                }return this.error({ statusCode: 404, message: "This page could not be found" }), t.abrupt("return", i());case 87:
                return t.next = 89, Promise.all(u.map(function (t, n) {
                  if (t._path = ht(e.matched[c[n]].path)(e.params), t._dataRefresh = !1, y._pathChanged && y._queryChanged || t._path !== vn[n]) t._dataRefresh = !0;else if (!y._pathChanged && y._queryChanged) {
                    var i = t.options.watchQuery;!0 === i ? t._dataRefresh = !0 : Array.isArray(i) && (t._dataRefresh = i.some(function (t) {
                      return y._diffQuery[t];
                    }));
                  }if (!y._hadError && y._isMounted && !t._dataRefresh) return Promise.resolve();var o = [],
                      r = t.options.asyncData && "function" == typeof t.options.asyncData,
                      a = !!t.options.fetch,
                      s = r && a ? 30 : 45;if (r) {
                    var l = dt(t.options.asyncData, _n.context).then(function (e) {
                      nt(t, e), y.$loading.increase && y.$loading.increase(s);
                    });o.push(l);
                  }if (y.$loading.manual = !1 === t.options.loading, a) {
                    var u = t.options.fetch(_n.context);u && (u instanceof Promise || "function" == typeof u.then) || (u = Promise.resolve(u)), u.then(function (t) {
                      y.$loading.increase && y.$loading.increase(s);
                    }), o.push(u);
                  }return Promise.all(o);
                }));case 89:
                r || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), i()), t.next = 111;break;case 92:
                if (t.prev = 92, t.t2 = t.catch(27), t.t2) {
                  t.next = 98;break;
                }t.t2 = {}, t.next = 100;break;case 98:
                if ("ERR_REDIRECT" !== t.t2.message) {
                  t.next = 100;break;
                }return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, t.t2));case 100:
                return vn = [], x = t.t2.response && t.t2.response.status, t.t2.statusCode = t.t2.statusCode || t.t2.status || x || 500, a = t.t2, l.a.config.errorHandler && l.a.config.errorHandler(a), "function" == typeof (w = tt.layout) && (w = w(_n.context)), t.next = 108, this.loadLayout(w);case 108:
                this.error(t.t2), this.$nuxt.$emit("routeChanged", e, n, t.t2), i(!1);case 111:case "end":
                return t.stop();}
          }var a;
        }, t, this, [[27, 92], [46, 80], [50, 66, 70, 78], [71,, 73, 77]]);
      }))).apply(this, arguments);
    }function Mn(t, e) {
      rt(t, function (t, e, n, i) {
        return "object" !== o()(t) || t.options || ((t = l.a.extend(t))._Ctor = t, n.components[i] = t), t;
      });
    }function Sn(t) {
      this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();var e = this.$options.nuxt.err ? tt.layout : t.matched[0].components.default.options.layout;"function" == typeof e && (e = e(_n.context)), this.setLayout(e);
    }function $n(t, e) {
      var n = this;!1 === this._pathChanged && !1 === this._queryChanged || l.a.nextTick(function () {
        var e = [],
            i = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];return Array.prototype.concat.apply([], t.matched.map(function (t, n) {
            return Object.keys(t.instances).map(function (i) {
              return e && e.push(n), t.instances[i];
            });
          }));
        }(t, e),
            o = ot(t, e);i.forEach(function (t, e) {
          if (t && t.constructor._dataRefresh && o[e] === t.constructor && "function" == typeof t.constructor.options.data) {
            var n = t.constructor.options.data.call(t);for (var i in n) {
              l.a.set(t.$data, i, n[i]);
            }
          }
        }), Sn.call(n, t);
      });
    }function Ln(t) {
      window._nuxtReadyCbs.forEach(function (e) {
        "function" == typeof e && e(t);
      }), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), gn.afterEach(function (e, n) {
        l.a.nextTick(function () {
          return t.$nuxt.$emit("routeChanged", e, n);
        });
      });
    }function In() {
      return (In = c()(a.a.mark(function t(e) {
        var n, i, o, r;return a.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return _n = e.app, gn = e.router, e.store, t.next = 5, Promise.all((void 0, u = pt((s = gn).options.base, s.options.mode), rt(s.match(u), function () {
                  var t = c()(a.a.mark(function t(e, n, i, o, r) {
                    var s;return a.a.wrap(function (t) {
                      for (;;) {
                        switch (t.prev = t.next) {case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;break;
                            }return t.next = 3, e();case 3:
                            e = t.sent;case 4:
                            return s = kn(it(e), bn.data ? bn.data[r] : null), i.components[o] = s, t.abrupt("return", s);case 7:case "end":
                            return t.stop();}
                      }
                    }, t, this);
                  }));return function (e, n, i, o, r) {
                    return t.apply(this, arguments);
                  };
                }())));case 5:
                return n = t.sent, i = new l.a(_n), o = bn.layout || "default", t.next = 10, i.loadLayout(o);case 10:
                if (i.setLayout(o), r = function r() {
                  i.$mount("#__nuxt"), l.a.nextTick(function () {
                    Ln(i);
                  });
                }, i.setTransitions = i.$options.nuxt.setTransitions.bind(i), n.length && (i.setTransitions(xn(n, gn.currentRoute)), vn = gn.currentRoute.matched.map(function (t) {
                  return ht(t.path)(gn.currentRoute.params);
                })), i.$loading = {}, bn.error && i.error(bn.error), gn.beforeEach(wn.bind(i)), gn.beforeEach(En.bind(i)), gn.afterEach(Mn), gn.afterEach($n.bind(i)), !bn.serverRendered) {
                  t.next = 23;break;
                }return r(), t.abrupt("return");case 23:
                En.call(i, gn.currentRoute, gn.currentRoute, function (t) {
                  if (!t) return Mn(gn.currentRoute, gn.currentRoute), Sn.call(i, gn.currentRoute), void r();gn.push(t, function () {
                    return r();
                  }, function (t) {
                    if (!t) return r();console.error(t);
                  });
                });case 24:case "end":
                return t.stop();}
          }var s, u;
        }, t, this);
      }))).apply(this, arguments);
    }Object.assign(l.a.config, { silent: !0, performance: !1 }), function (t) {
      return mn.apply(this, arguments);
    }().then(function (t) {
      return In.apply(this, arguments);
    }).catch(function (t) {
      console.error("[nuxt] Error while initializing app", t);
    });
  }, 72: function _(t, e, n) {
    var i = n(261);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("b7502606", i, !0, { sourceMap: !1 });
  }, 73: function _(t, e, n) {
    var i = n(263);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("5a0f4f85", i, !0, { sourceMap: !1 });
  }, 74: function _(t, e, n) {
    var i = n(265);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("fd547dac", i, !0, { sourceMap: !1 });
  }, 75: function _(t, e, n) {
    "use strict";
    (function (t) {
      var i = n(224),
          o = n(94),
          r = n(225),
          a = [{ name: "About", path: "/about" }, { name: "Sample collection", path: "/sample-collection" }, { name: "Accuracy", path: "/accuracy" }, { name: "Labs", path: "/labs" }, { name: "Health hub", path: "/hub" }];e.a = { name: "Navigation", components: { FullMenu: i.a, ProductMenu: o.a, InformationMenu: r.a }, data: function data() {
          return { navigationToggleActive: !1, loggedIn: this.$store.state.loggedIn, menuItems: [{ title: "Products", dropdownMenu: "product", href: "#" }, { title: "Information", dropdownMenu: "information", href: "#" }, { title: "Help", href: "https://intercom.help/thrivahelpcenter", target: "_blank", rel: "nooopener" }], dropdownMenus: { information: a } };
        }, mounted: function mounted() {
          window.addEventListener("resize", this.resetDropdownPosition);
        }, methods: { toggleMobileNav: function toggleMobileNav() {
            this.$refs.navigation.classList.contains("navigation--dropdown-active") ? (this.$refs.navigation.classList.remove("navigation--dropdown-active"), document.querySelector("body").classList.remove("navigation--dropdown-active")) : (this.$refs.navigation.classList.add("navigation--dropdown-active"), document.querySelector("body").classList.add("navigation--dropdown-active"));
          }, enterMenuLink: function enterMenuLink(t) {
            t.target.classList.contains("menu__item--dropdown") ? this.showDropdownMenu(t.target) : this.hideDropdownMenu();var e = !0,
                n = !1,
                i = void 0;try {
              for (var o, r = this.menuItemNodes()[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
                var a = o.value;t.target === a ? (a.classList.add("menu__item--active"), a.classList.remove("menu__item--inactive")) : (a.classList.remove("menu__item--active"), a.classList.add("menu__item--inactive"));
              }
            } catch (t) {
              n = !0, i = t;
            } finally {
              try {
                e || null == r.return || r.return();
              } finally {
                if (n) throw i;
              }
            }
          }, leaveMenuLink: function leaveMenuLink(t) {
            var e = this;setTimeout(function () {
              e.mayHideDropDownMenu() && e.hideDropdownMenu();
            }, 200);
          }, leaveDropdownMenu: function leaveDropdownMenu(t) {
            var e = this;setTimeout(function () {
              e.mayHideDropDownMenu() && (e.hideDropdownMenu(), e.resetMenuItems());
            }, 150);
          }, leaveMenu: function leaveMenu() {
            var t = this;setTimeout(function () {
              t.dropdownMenuVisible() || t.resetMenuItems();
            }, 300);
          }, resetDropdownPosition: function resetDropdownPosition() {
            var t = this.$refs.dropdownBg,
                e = this.$refs.dropdownWrapper;Object.assign(e.style, { transform: "translateX(0)", width: "auto", height: "auto" }), Object.assign(t.style, { transform: "scaleX(0) scaleY(0)", width: "auto", height: "auto" });
          }, showDropdownMenu: function showDropdownMenu(t) {
            var e = this;!function () {
              if ("function" == typeof NodeList.prototype.forEach) return !1;NodeList.prototype.forEach = Array.prototype.forEach;
            }();var n = this.$refs.dropdownBg,
                i = this.$refs.dropdownWrapper,
                o = this.$el.querySelector('.dropdown-menu[data-menu="'.concat(t.getAttribute("data-dropdown-menu-id"), '"]')),
                r = o.querySelector(".dropdown-menu__content"),
                a = t.getBoundingClientRect(),
                s = r.getBoundingClientRect();this.dropdownMenuNodes().forEach(function (t) {
              t !== o ? t.classList.remove("active") : t.classList.add("active");
            }), Object.assign(i.style, { transform: "translateX(".concat(t.offsetLeft + a.width / 2 - s.width / 2 + "px", ")"), width: s.width + "px", height: s.height + "px" }), Object.assign(n.style, { transform: "scaleX(".concat(s.width + "px", ") scaleY(").concat(s.height + "px", ")"), width: s.width + "px", height: s.height + "px" }), this.$refs.navigation.classList.contains("navigation--dropdown-active") || setTimeout(function () {
              e.$refs.navigation.classList.add("navigation--dropdown-active");
            }, 50);
          }, hideDropdownMenu: function hideDropdownMenu() {
            var t = !0,
                e = !1,
                n = void 0;try {
              for (var i, o = this.dropdownMenuNodes()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                i.value.classList.remove("active");
              }
            } catch (t) {
              e = !0, n = t;
            } finally {
              try {
                t || null == o.return || o.return();
              } finally {
                if (e) throw n;
              }
            }this.$refs.navigation.classList.remove("navigation--dropdown-active");
          }, mayHideDropDownMenu: function mayHideDropDownMenu() {
            return !this.$el.querySelector(".dropdown__wrap:hover") && !this.$el.querySelector(".menu__item--dropdown:hover");
          }, dropdownMenuVisible: function dropdownMenuVisible() {
            return this.$refs.navigation.classList.contains("navigation--dropdown-active");
          }, resetMenuItems: function resetMenuItems() {
            var t = !0,
                e = !1,
                n = void 0;try {
              for (var i, o = this.menuItemNodes()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                var r = i.value;r.classList.remove("menu__item--inactive"), r.classList.remove("menu__item--active");
              }
            } catch (t) {
              e = !0, n = t;
            } finally {
              try {
                t || null == o.return || o.return();
              } finally {
                if (e) throw n;
              }
            }
          }, menuItemNodes: function menuItemNodes() {
            return this.$el.querySelectorAll(".menu__item");
          }, dropdownMenuNodes: function dropdownMenuNodes() {
            return this.$el.querySelectorAll(".dropdown-menu");
          }, childRouteCurrent: function childRouteCurrent(t) {
            if ("product" === t) return 0 === this.$route.path.indexOf("/products");var e = this.dropdownMenus[t];if (e) {
              var n = !0,
                  i = !1,
                  o = void 0;try {
                for (var r, a = e[Symbol.iterator](); !(n = (r = a.next()).done); n = !0) {
                  var s = r.value;if (this.$route.path === s.path) return !0;
                }
              } catch (t) {
                i = !0, o = t;
              } finally {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (i) throw o;
                }
              }
            }return !1;
          }, closeMenuOnClick: function closeMenuOnClick() {
            window.matchMedia("(min-width: 768px)").matches ? this.hideDropdownMenu() : (this.$refs.navigation.classList.remove("navigation--dropdown-active"), document.querySelector("body").classList.remove("navigation--dropdown-active"));
          } }, computed: { activeProductClass: function activeProductClass() {
            if (this.$route.params.slug) return "menu__item--".concat(this.$route.params.slug, "-active");
          }, accountActionUrl: function accountActionUrl() {
            return "specialists" === this.$route.name ? "".concat(t.env.SPECIALISTS_URL) : "".concat("https://app.thriva.co", "/dashboard");
          } }, beforeDestroy: function beforeDestroy() {
          window.removeEventListener("resize", this.resetDropdownPosition);
        } };
    }).call(this, n(23));
  }, 76: function _(t, e, n) {
    var i = n(270);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("fa0707aa", i, !0, { sourceMap: !1 });
  }, 77: function _(t, e, n) {
    var i = n(272);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("ef0cc4b6", i, !0, { sourceMap: !1 });
  }, 78: function _(t, e, n) {
    var i = n(274);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("1ee5d28b", i, !0, { sourceMap: !1 });
  }, 79: function _(t, e, n) {
    var i = n(276);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("7a168c86", i, !0, { sourceMap: !1 });
  }, 80: function _(t, e, n) {
    var i = n(278);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("b2d416c6", i, !0, { sourceMap: !1 });
  }, 81: function _(t, e, n) {
    var i = n(280);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("e0978886", i, !0, { sourceMap: !1 });
  }, 82: function _(t, e, n) {
    var i = n(282);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("7650abdd", i, !0, { sourceMap: !1 });
  }, 83: function _(t, e, n) {
    var i = n(284);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("644458dd", i, !0, { sourceMap: !1 });
  }, 84: function _(t, e, n) {
    var i = n(286);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("51c32f12", i, !0, { sourceMap: !1 });
  }, 85: function _(t, e, n) {
    var i = n(289);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("fb18b42a", i, !0, { sourceMap: !1 });
  }, 86: function _(t, e, n) {
    var i = n(291);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("1c79b8c2", i, !0, { sourceMap: !1 });
  }, 87: function _(t, e, n) {
    var i = n(461);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("51aaff1c", i, !0, { sourceMap: !1 });
  }, 88: function _(t, e, n) {
    var i = n(463);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("f5f2f518", i, !0, { sourceMap: !1 });
  }, 89: function _(t, e, n) {
    var i = n(465);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("2cd55a3e", i, !0, { sourceMap: !1 });
  }, 90: function _(t, e, n) {
    var i = n(467);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("3dfd1d10", i, !0, { sourceMap: !1 });
  }, 91: function _(t, e, n) {
    var i = n(469);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("3caba242", i, !0, { sourceMap: !1 });
  }, 92: function _(t, e, n) {
    var i = n(471);"string" == typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);(0, n(4).default)("0eea048e", i, !0, { sourceMap: !1 });
  }, 94: function _(t, e, n) {
    "use strict";
    var i = { name: "ProductMenu", methods: { menuItemClicked: function menuItemClicked() {
          this.$emit("menuItemClicked");
        } } },
        o = (n(269), n(1)),
        r = Object(o.a)(i, function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("ul", { staticClass: "product-menu" }, [n("li", { staticClass: "product-menu__item product-menu__item--title" }, [t._v("Products")]), n("li", { staticClass: "product-menu__item product-menu__item--essential", on: { click: t.menuItemClicked } }, [n("nuxt-link", { attrs: { to: "/products/essential", title: "Essential package" } }, [n("img", { staticClass: "product-menu__item-icon", attrs: { src: "/images/products/icons/essential.svg" } }), n("div", { staticClass: "product-menu__item-details" }, [n("h4", { staticClass: "product-menu__item-title" }, [t._v("Essential")]), n("p", { staticClass: "body--small product-menu__item-description" }, [t._v("Check in on your heart and liver health. Take charge of these two key health indicators.")])])])], 1), n("li", { staticClass: "product-menu__item product-menu__item--baseline", on: { click: t.menuItemClicked } }, [n("nuxt-link", { attrs: { to: "/products/baseline", title: "Baseline package" } }, [n("img", { staticClass: "product-menu__item-icon", attrs: { src: "/images/products/icons/baseline.svg" } }), n("div", { staticClass: "product-menu__item-details" }, [n("h4", { staticClass: "product-menu__item-title" }, [t._v("Baseline")]), n("p", { staticClass: "body--small product-menu__item-description" }, [t._v("Everything in essential, plus a look at some nutrients required for optimal health.")])])])], 1), n("li", { staticClass: "product-menu__item product-menu__item--advanced", on: { click: t.menuItemClicked } }, [n("nuxt-link", { attrs: { to: "/products/advanced", title: "advanced package" } }, [n("img", { staticClass: "product-menu__item-icon", attrs: { src: "/images/products/icons/advanced.svg" } }), n("div", { staticClass: "product-menu__item-details" }, [n("h4", { staticClass: "product-menu__item-title" }, [t._v("Advanced")]), n("p", { staticClass: "body--small product-menu__item-description" }, [t._v("Our most comprehensive package. Get a detailed overview of exactly what’s happening in your body.")])])])], 1), n("div", { staticClass: "divider" }), n("li", { staticClass: "product-menu__item product-menu__item--thyroid", on: { click: t.menuItemClicked } }, [t._m(0)])]);
    }, [function () {
      var t = this.$createElement,
          e = this._self._c || t;return e("a", { attrs: { href: "/thyroid", title: "thyroid package" } }, [e("img", { staticClass: "product-menu__item-icon", attrs: { src: "/images/products/icons/generic-product.svg" } }), e("div", { staticClass: "product-menu__item-details" }, [e("h4", { staticClass: "product-menu__item-title" }, [this._v("Thyroid")]), e("p", { staticClass: "body--small product-menu__item-description" }, [this._v("Get a full overview of your thyroid function including antibodies and necessary vitamins.")])])]);
    }], !1, null, null, null);r.options.__file = "ProductMenu.vue";e.a = r.exports;
  }, 98: function _(t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return s;
    });var i = n(217),
        o = n.n(i),
        r = n(218),
        a = n.n(r),
        s = function () {
      function t(e) {
        o()(this, t), this.code = e.code, this.type = e.type, this.discountType = e.discount_type, this.discountAmount = e.discount_amount, this.description = e.description, this.validTestPanels = e.valid_test_panels, this.expiresAt = e.expires_at;
      }return a()(t, [{ key: "discountedPrice", value: function value(t) {
          return "percentage" === this.discountType ? t * (1 - this.discountAmount / 100) : "fixed" === this.discountType ? t - this.discountAmount : void 0;
        } }, { key: "formattedDiscountedPrice", value: function value(t) {
          return (this.discountedPrice(t) / 100).toLocaleString("GBP", { style: "currency", currency: "GBP" });
        } }, { key: "shortDescription", value: function value() {
          if ("percentage" === this.discountType) return "".concat(this.discountAmount, "% off your first test");var t = (this.discountAmount / 100).toLocaleString("GBP", { style: "currency", currency: "GBP" });return "".concat(t, " off your first test");
        } }, { key: "fullDescription", value: function value() {
          var t = "Discount code ".concat(this.code, " applied. Get ").concat(this.shortDescription());return t = this.validTestPanels.length > 0 ? "".concat(t, " on valid products.") : "".concat(t, ".");
        } }]), t;
    }();
  } }, [[233, 26, 23, 24]]]);

/***/ })

/******/ });