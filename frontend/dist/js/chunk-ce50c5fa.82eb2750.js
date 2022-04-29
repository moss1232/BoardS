(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-ce50c5fa"],
  {
    "0481": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        a = n("a2bf"),
        i = n("7b0b"),
        s = n("07fa"),
        o = n("5926"),
        l = n("65f0");
      r(
        { target: "Array", proto: !0 },
        {
          flat: function () {
            var t = arguments.length ? arguments[0] : void 0,
              e = i(this),
              n = s(e),
              r = l(e, 0);
            return (r.length = a(r, e, e, n, 0, void 0 === t ? 1 : o(t))), r;
          },
        }
      );
    },
    "0789": function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return u;
      }),
        n.d(e, "d", function () {
          return d;
        }),
        n.d(e, "a", function () {
          return f;
        }),
        n.d(e, "b", function () {
          return h;
        });
      n("99af");
      var r = n("d9f7");
      function a() {
        for (
          var t,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        return (t = Array()).concat.apply(t, [e].concat(r));
      }
      function i(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "top center 0",
          n = arguments.length > 2 ? arguments[2] : void 0;
        return {
          name: t,
          functional: !0,
          props: {
            group: { type: Boolean, default: !1 },
            hideOnLeave: { type: Boolean, default: !1 },
            leaveAbsolute: { type: Boolean, default: !1 },
            mode: { type: String, default: n },
            origin: { type: String, default: e },
          },
          render: function (e, n) {
            var i = "transition".concat(n.props.group ? "-group" : ""),
              s = {
                props: { name: t, mode: n.props.mode },
                on: {
                  beforeEnter: function (t) {
                    (t.style.transformOrigin = n.props.origin),
                      (t.style.webkitTransformOrigin = n.props.origin);
                  },
                },
              };
            return (
              n.props.leaveAbsolute &&
                ((s.on.leave = a(s.on.leave, function (t) {
                  var e = t.offsetTop,
                    n = t.offsetLeft,
                    r = t.offsetWidth,
                    a = t.offsetHeight;
                  (t._transitionInitialStyles = {
                    position: t.style.position,
                    top: t.style.top,
                    left: t.style.left,
                    width: t.style.width,
                    height: t.style.height,
                  }),
                    (t.style.position = "absolute"),
                    (t.style.top = e + "px"),
                    (t.style.left = n + "px"),
                    (t.style.width = r + "px"),
                    (t.style.height = a + "px");
                })),
                (s.on.afterLeave = a(s.on.afterLeave, function (t) {
                  if (t && t._transitionInitialStyles) {
                    var e = t._transitionInitialStyles,
                      n = e.position,
                      r = e.top,
                      a = e.left,
                      i = e.width,
                      s = e.height;
                    delete t._transitionInitialStyles,
                      (t.style.position = n || ""),
                      (t.style.top = r || ""),
                      (t.style.left = a || ""),
                      (t.style.width = i || ""),
                      (t.style.height = s || "");
                  }
                }))),
              n.props.hideOnLeave &&
                (s.on.leave = a(s.on.leave, function (t) {
                  t.style.setProperty("display", "none", "important");
                })),
              e(i, Object(r["a"])(n.data, s), n.children)
            );
          },
        };
      }
      function s(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "in-out";
        return {
          name: t,
          functional: !0,
          props: { mode: { type: String, default: n } },
          render: function (n, a) {
            return n(
              "transition",
              Object(r["a"])(a.data, { props: { name: t }, on: e }),
              a.children
            );
          },
        };
      }
      var o = n("ade3"),
        l = n("80d2"),
        c = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e ? "width" : "height",
            r = "offset".concat(Object(l["z"])(n));
          return {
            beforeEnter: function (t) {
              (t._parent = t.parentNode),
                (t._initialStyle = Object(o["a"])(
                  {
                    transition: t.style.transition,
                    overflow: t.style.overflow,
                  },
                  n,
                  t.style[n]
                ));
            },
            enter: function (e) {
              var a = e._initialStyle;
              e.style.setProperty("transition", "none", "important"),
                (e.style.overflow = "hidden");
              var i = "".concat(e[r], "px");
              (e.style[n] = "0"),
                e.offsetHeight,
                (e.style.transition = a.transition),
                t && e._parent && e._parent.classList.add(t),
                requestAnimationFrame(function () {
                  e.style[n] = i;
                });
            },
            afterEnter: i,
            enterCancelled: i,
            leave: function (t) {
              (t._initialStyle = Object(o["a"])(
                { transition: "", overflow: t.style.overflow },
                n,
                t.style[n]
              )),
                (t.style.overflow = "hidden"),
                (t.style[n] = "".concat(t[r], "px")),
                t.offsetHeight,
                requestAnimationFrame(function () {
                  return (t.style[n] = "0");
                });
            },
            afterLeave: a,
            leaveCancelled: a,
          };
          function a(e) {
            t && e._parent && e._parent.classList.remove(t), i(e);
          }
          function i(t) {
            var e = t._initialStyle[n];
            (t.style.overflow = t._initialStyle.overflow),
              null != e && (t.style[n] = e),
              delete t._initialStyle;
          }
        },
        u =
          (i("carousel-transition"),
          i("carousel-reverse-transition"),
          i("tab-transition"),
          i("tab-reverse-transition"),
          i("menu-transition"),
          i("fab-transition", "center center", "out-in"),
          i("dialog-transition"),
          i("dialog-bottom-transition"),
          i("dialog-top-transition"),
          i("fade-transition")),
        d =
          (i("scale-transition"),
          i("scroll-x-transition"),
          i("scroll-x-reverse-transition"),
          i("scroll-y-transition"),
          i("scroll-y-reverse-transition"),
          i("slide-x-transition")),
        f =
          (i("slide-x-reverse-transition"),
          i("slide-y-transition"),
          i("slide-y-reverse-transition"),
          s("expand-transition", c())),
        h = s("expand-x-transition", c("", !0));
    },
    "0fd9": function (t, e, n) {
      "use strict";
      var r = n("ade3"),
        a = n("5530"),
        i =
          (n("d3b7"),
          n("caad"),
          n("2532"),
          n("99af"),
          n("b64b"),
          n("ac1f"),
          n("5319"),
          n("4ec9"),
          n("3ca3"),
          n("ddb0"),
          n("159b"),
          n("4b85"),
          n("2b0e")),
        s = n("d9f7"),
        o = n("80d2"),
        l = ["sm", "md", "lg", "xl"],
        c = ["start", "end", "center"];
      function u(t, e) {
        return l.reduce(function (n, r) {
          return (n[t + Object(o["z"])(r)] = e()), n;
        }, {});
      }
      var d = function (t) {
          return [].concat(c, ["baseline", "stretch"]).includes(t);
        },
        f = u("align", function () {
          return { type: String, default: null, validator: d };
        }),
        h = function (t) {
          return [].concat(c, ["space-between", "space-around"]).includes(t);
        },
        v = u("justify", function () {
          return { type: String, default: null, validator: h };
        }),
        g = function (t) {
          return []
            .concat(c, ["space-between", "space-around", "stretch"])
            .includes(t);
        },
        p = u("alignContent", function () {
          return { type: String, default: null, validator: g };
        }),
        b = {
          align: Object.keys(f),
          justify: Object.keys(v),
          alignContent: Object.keys(p),
        },
        y = {
          align: "align",
          justify: "justify",
          alignContent: "align-content",
        };
      function m(t, e, n) {
        var r = y[t];
        if (null != n) {
          if (e) {
            var a = e.replace(t, "");
            r += "-".concat(a);
          }
          return (r += "-".concat(n)), r.toLowerCase();
        }
      }
      var _ = new Map();
      e["a"] = i["a"].extend({
        name: "v-row",
        functional: !0,
        props: Object(a["a"])(
          Object(a["a"])(
            Object(a["a"])(
              {
                tag: { type: String, default: "div" },
                dense: Boolean,
                noGutters: Boolean,
                align: { type: String, default: null, validator: d },
              },
              f
            ),
            {},
            { justify: { type: String, default: null, validator: h } },
            v
          ),
          {},
          { alignContent: { type: String, default: null, validator: g } },
          p
        ),
        render: function (t, e) {
          var n = e.props,
            a = e.data,
            i = e.children,
            o = "";
          for (var l in n) o += String(n[l]);
          var c = _.get(o);
          return (
            c ||
              (function () {
                var t, e;
                for (e in ((c = []), b))
                  b[e].forEach(function (t) {
                    var r = n[t],
                      a = m(e, t, r);
                    a && c.push(a);
                  });
                c.push(
                  ((t = { "no-gutters": n.noGutters, "row--dense": n.dense }),
                  Object(r["a"])(t, "align-".concat(n.align), n.align),
                  Object(r["a"])(t, "justify-".concat(n.justify), n.justify),
                  Object(r["a"])(
                    t,
                    "align-content-".concat(n.alignContent),
                    n.alignContent
                  ),
                  t)
                ),
                  _.set(o, c);
              })(),
            t(n.tag, Object(s["a"])(a, { staticClass: "row", class: c }), i)
          );
        },
      });
    },
    "20e3": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "v-container",
            { staticClass: "py-8 px-6" },
            [
              r(
                "v-row",
                [
                  r(
                    "v-col",
                    [
                      r(
                        "v-card",
                        [
                          r(
                            "v-card-title",
                            { staticClass: "text-h5" },
                            [
                              r("v-avatar", { staticClass: "mr-6" }, [
                                t.avatar
                                  ? r("img", {
                                      attrs: { alt: "Avatar", src: t.avatar },
                                    })
                                  : r("img", {
                                      attrs: { alt: "Avatar", src: n("c63b") },
                                    }),
                              ]),
                              r("span", [t._v(" " + t._s(t.title) + " ")]),
                            ],
                            1
                          ),
                          r("v-card-text", { staticClass: "text-h6" }, [
                            t._v(" " + t._s(t.content) + " "),
                          ]),
                          t.files
                            ? r("img", {
                                staticClass: "ml-4",
                                attrs: { src: t.files },
                              })
                            : t._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        i = n("1da1"),
        s = (n("96cf"), n("99af"), n("bc3a")),
        o = n.n(s),
        l = {
          data: function () {
            return { title: "", content: "", files: null, avatar: null };
          },
          methods: {
            fetchDetailMessage: function () {
              var t = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            o.a.get(
                              ""
                                .concat(
                                  "https://board-rails-backend.herokuapp.com",
                                  "/api/teams/"
                                )
                                .concat(t.$route.params.team_id, "/messages/")
                                .concat(t.$route.params.message_id),
                              {
                                headers: {
                                  uid: window.localStorage.getItem("uid"),
                                  "access-token":
                                    window.localStorage.getItem("access-token"),
                                  client: window.localStorage.getItem("client"),
                                },
                              }
                            )
                          );
                        case 2:
                          (n = e.sent),
                            (t.title = n.data.title),
                            (t.content = n.data.content),
                            (t.files = n.data.attached_file),
                            (t.avatar = n.data.user_avatar);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          created: function () {
            this.fetchDetailMessage();
          },
        },
        c = l,
        u = n("2877"),
        d = n("6544"),
        f = n.n(d),
        h = n("8212"),
        v = n("b0af"),
        g = n("99d9"),
        p = n("62ad"),
        b = n("a523"),
        y = n("0fd9"),
        m = Object(u["a"])(c, r, a, !1, null, null, null);
      e["default"] = m.exports;
      f()(m, {
        VAvatar: h["a"],
        VCard: v["a"],
        VCardText: g["b"],
        VCardTitle: g["c"],
        VCol: p["a"],
        VContainer: b["a"],
        VRow: y["a"],
      });
    },
    "297c": function (t, e, n) {
      "use strict";
      n("a9e3");
      var r = n("2b0e"),
        a = n("5530"),
        i = n("ade3"),
        s = (n("c7cd"), n("6ece"), n("0789")),
        o = n("90a2"),
        l = n("a9ad"),
        c = n("fe6c"),
        u = n("a452"),
        d = n("7560"),
        f = n("80d2"),
        h = n("58df"),
        v = Object(h["a"])(
          l["a"],
          Object(c["b"])(["absolute", "fixed", "top", "bottom"]),
          u["a"],
          d["a"]
        ),
        g = v.extend({
          name: "v-progress-linear",
          directives: { intersect: o["a"] },
          props: {
            active: { type: Boolean, default: !0 },
            backgroundColor: { type: String, default: null },
            backgroundOpacity: { type: [Number, String], default: null },
            bufferValue: { type: [Number, String], default: 100 },
            color: { type: String, default: "primary" },
            height: { type: [Number, String], default: 4 },
            indeterminate: Boolean,
            query: Boolean,
            reverse: Boolean,
            rounded: Boolean,
            stream: Boolean,
            striped: Boolean,
            value: { type: [Number, String], default: 0 },
          },
          data: function () {
            return { internalLazyValue: this.value || 0, isVisible: !0 };
          },
          computed: {
            __cachedBackground: function () {
              return this.$createElement(
                "div",
                this.setBackgroundColor(this.backgroundColor || this.color, {
                  staticClass: "v-progress-linear__background",
                  style: this.backgroundStyle,
                })
              );
            },
            __cachedBar: function () {
              return this.$createElement(this.computedTransition, [
                this.__cachedBarType,
              ]);
            },
            __cachedBarType: function () {
              return this.indeterminate
                ? this.__cachedIndeterminate
                : this.__cachedDeterminate;
            },
            __cachedBuffer: function () {
              return this.$createElement("div", {
                staticClass: "v-progress-linear__buffer",
                style: this.styles,
              });
            },
            __cachedDeterminate: function () {
              return this.$createElement(
                "div",
                this.setBackgroundColor(this.color, {
                  staticClass: "v-progress-linear__determinate",
                  style: { width: Object(f["g"])(this.normalizedValue, "%") },
                })
              );
            },
            __cachedIndeterminate: function () {
              return this.$createElement(
                "div",
                {
                  staticClass: "v-progress-linear__indeterminate",
                  class: {
                    "v-progress-linear__indeterminate--active": this.active,
                  },
                },
                [this.genProgressBar("long"), this.genProgressBar("short")]
              );
            },
            __cachedStream: function () {
              return this.stream
                ? this.$createElement(
                    "div",
                    this.setTextColor(this.color, {
                      staticClass: "v-progress-linear__stream",
                      style: {
                        width: Object(f["g"])(100 - this.normalizedBuffer, "%"),
                      },
                    })
                  )
                : null;
            },
            backgroundStyle: function () {
              var t,
                e =
                  null == this.backgroundOpacity
                    ? this.backgroundColor
                      ? 1
                      : 0.3
                    : parseFloat(this.backgroundOpacity);
              return (
                (t = { opacity: e }),
                Object(i["a"])(
                  t,
                  this.isReversed ? "right" : "left",
                  Object(f["g"])(this.normalizedValue, "%")
                ),
                Object(i["a"])(
                  t,
                  "width",
                  Object(f["g"])(
                    Math.max(0, this.normalizedBuffer - this.normalizedValue),
                    "%"
                  )
                ),
                t
              );
            },
            classes: function () {
              return Object(a["a"])(
                {
                  "v-progress-linear--absolute": this.absolute,
                  "v-progress-linear--fixed": this.fixed,
                  "v-progress-linear--query": this.query,
                  "v-progress-linear--reactive": this.reactive,
                  "v-progress-linear--reverse": this.isReversed,
                  "v-progress-linear--rounded": this.rounded,
                  "v-progress-linear--striped": this.striped,
                  "v-progress-linear--visible": this.isVisible,
                },
                this.themeClasses
              );
            },
            computedTransition: function () {
              return this.indeterminate ? s["c"] : s["d"];
            },
            isReversed: function () {
              return this.$vuetify.rtl !== this.reverse;
            },
            normalizedBuffer: function () {
              return this.normalize(this.bufferValue);
            },
            normalizedValue: function () {
              return this.normalize(this.internalLazyValue);
            },
            reactive: function () {
              return Boolean(this.$listeners.change);
            },
            styles: function () {
              var t = {};
              return (
                this.active || (t.height = 0),
                this.indeterminate ||
                  100 === parseFloat(this.normalizedBuffer) ||
                  (t.width = Object(f["g"])(this.normalizedBuffer, "%")),
                t
              );
            },
          },
          methods: {
            genContent: function () {
              var t = Object(f["o"])(this, "default", {
                value: this.internalLazyValue,
              });
              return t
                ? this.$createElement(
                    "div",
                    { staticClass: "v-progress-linear__content" },
                    t
                  )
                : null;
            },
            genListeners: function () {
              var t = this.$listeners;
              return this.reactive && (t.click = this.onClick), t;
            },
            genProgressBar: function (t) {
              return this.$createElement(
                "div",
                this.setBackgroundColor(this.color, {
                  staticClass: "v-progress-linear__indeterminate",
                  class: Object(i["a"])({}, t, !0),
                })
              );
            },
            onClick: function (t) {
              if (this.reactive) {
                var e = this.$el.getBoundingClientRect(),
                  n = e.width;
                this.internalValue = (t.offsetX / n) * 100;
              }
            },
            onObserve: function (t, e, n) {
              this.isVisible = n;
            },
            normalize: function (t) {
              return t < 0 ? 0 : t > 100 ? 100 : parseFloat(t);
            },
          },
          render: function (t) {
            var e = {
              staticClass: "v-progress-linear",
              attrs: {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": this.normalizedBuffer,
                "aria-valuenow": this.indeterminate
                  ? void 0
                  : this.normalizedValue,
              },
              class: this.classes,
              directives: [{ name: "intersect", value: this.onObserve }],
              style: {
                bottom: this.bottom ? 0 : void 0,
                height: this.active ? Object(f["g"])(this.height) : 0,
                top: this.top ? 0 : void 0,
              },
              on: this.genListeners(),
            };
            return t("div", e, [
              this.__cachedStream,
              this.__cachedBackground,
              this.__cachedBuffer,
              this.__cachedBar,
              this.genContent(),
            ]);
          },
        }),
        p = g;
      e["a"] = r["a"].extend().extend({
        name: "loadable",
        props: {
          loading: { type: [Boolean, String], default: !1 },
          loaderHeight: { type: [Number, String], default: 2 },
        },
        methods: {
          genProgress: function () {
            return !1 === this.loading
              ? null
              : this.$slots.progress ||
                  this.$createElement(p, {
                    props: {
                      absolute: !0,
                      color:
                        !0 === this.loading || "" === this.loading
                          ? this.color || "primary"
                          : this.loading,
                      height: this.loaderHeight,
                      indeterminate: !0,
                    },
                  });
          },
        },
      });
    },
    3408: function (t, e, n) {},
    4069: function (t, e, n) {
      var r = n("44d2");
      r("flat");
    },
    "4ec9": function (t, e, n) {
      "use strict";
      var r = n("6d61"),
        a = n("6566");
      r(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        a
      );
    },
    "615b": function (t, e, n) {},
    "62ad": function (t, e, n) {
      "use strict";
      var r = n("ade3"),
        a = n("5530"),
        i =
          (n("d3b7"),
          n("a9e3"),
          n("b64b"),
          n("ac1f"),
          n("5319"),
          n("4ec9"),
          n("3ca3"),
          n("ddb0"),
          n("caad"),
          n("159b"),
          n("2ca0"),
          n("4b85"),
          n("2b0e")),
        s = n("d9f7"),
        o = n("80d2"),
        l = ["sm", "md", "lg", "xl"],
        c = (function () {
          return l.reduce(function (t, e) {
            return (t[e] = { type: [Boolean, String, Number], default: !1 }), t;
          }, {});
        })(),
        u = (function () {
          return l.reduce(function (t, e) {
            return (
              (t["offset" + Object(o["z"])(e)] = {
                type: [String, Number],
                default: null,
              }),
              t
            );
          }, {});
        })(),
        d = (function () {
          return l.reduce(function (t, e) {
            return (
              (t["order" + Object(o["z"])(e)] = {
                type: [String, Number],
                default: null,
              }),
              t
            );
          }, {});
        })(),
        f = {
          col: Object.keys(c),
          offset: Object.keys(u),
          order: Object.keys(d),
        };
      function h(t, e, n) {
        var r = t;
        if (null != n && !1 !== n) {
          if (e) {
            var a = e.replace(t, "");
            r += "-".concat(a);
          }
          return "col" !== t || ("" !== n && !0 !== n)
            ? ((r += "-".concat(n)), r.toLowerCase())
            : r.toLowerCase();
        }
      }
      var v = new Map();
      e["a"] = i["a"].extend({
        name: "v-col",
        functional: !0,
        props: Object(a["a"])(
          Object(a["a"])(
            Object(a["a"])(
              Object(a["a"])(
                { cols: { type: [Boolean, String, Number], default: !1 } },
                c
              ),
              {},
              { offset: { type: [String, Number], default: null } },
              u
            ),
            {},
            { order: { type: [String, Number], default: null } },
            d
          ),
          {},
          {
            alignSelf: {
              type: String,
              default: null,
              validator: function (t) {
                return [
                  "auto",
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ].includes(t);
              },
            },
            tag: { type: String, default: "div" },
          }
        ),
        render: function (t, e) {
          var n = e.props,
            a = e.data,
            i = e.children,
            o = (e.parent, "");
          for (var l in n) o += String(n[l]);
          var c = v.get(o);
          return (
            c ||
              (function () {
                var t, e;
                for (e in ((c = []), f))
                  f[e].forEach(function (t) {
                    var r = n[t],
                      a = h(e, t, r);
                    a && c.push(a);
                  });
                var a = c.some(function (t) {
                  return t.startsWith("col-");
                });
                c.push(
                  ((t = { col: !a || !n.cols }),
                  Object(r["a"])(t, "col-".concat(n.cols), n.cols),
                  Object(r["a"])(t, "offset-".concat(n.offset), n.offset),
                  Object(r["a"])(t, "order-".concat(n.order), n.order),
                  Object(r["a"])(
                    t,
                    "align-self-".concat(n.alignSelf),
                    n.alignSelf
                  ),
                  t)
                ),
                  v.set(o, c);
              })(),
            t(n.tag, Object(s["a"])(a, { class: c }), i)
          );
        },
      });
    },
    6566: function (t, e, n) {
      "use strict";
      var r = n("9bf2").f,
        a = n("7c73"),
        i = n("e2cc"),
        s = n("0366"),
        o = n("19aa"),
        l = n("2266"),
        c = n("7dd0"),
        u = n("2626"),
        d = n("83ab"),
        f = n("f183").fastKey,
        h = n("69f3"),
        v = h.set,
        g = h.getterFor;
      t.exports = {
        getConstructor: function (t, e, n, c) {
          var u = t(function (t, r) {
              o(t, h),
                v(t, {
                  type: e,
                  index: a(null),
                  first: void 0,
                  last: void 0,
                  size: 0,
                }),
                d || (t.size = 0),
                void 0 != r && l(r, t[c], { that: t, AS_ENTRIES: n });
            }),
            h = u.prototype,
            p = g(e),
            b = function (t, e, n) {
              var r,
                a,
                i = p(t),
                s = y(t, e);
              return (
                s
                  ? (s.value = n)
                  : ((i.last = s =
                      {
                        index: (a = f(e, !0)),
                        key: e,
                        value: n,
                        previous: (r = i.last),
                        next: void 0,
                        removed: !1,
                      }),
                    i.first || (i.first = s),
                    r && (r.next = s),
                    d ? i.size++ : t.size++,
                    "F" !== a && (i.index[a] = s)),
                t
              );
            },
            y = function (t, e) {
              var n,
                r = p(t),
                a = f(e);
              if ("F" !== a) return r.index[a];
              for (n = r.first; n; n = n.next) if (n.key == e) return n;
            };
          return (
            i(h, {
              clear: function () {
                var t = this,
                  e = p(t),
                  n = e.index,
                  r = e.first;
                while (r)
                  (r.removed = !0),
                    r.previous && (r.previous = r.previous.next = void 0),
                    delete n[r.index],
                    (r = r.next);
                (e.first = e.last = void 0), d ? (e.size = 0) : (t.size = 0);
              },
              delete: function (t) {
                var e = this,
                  n = p(e),
                  r = y(e, t);
                if (r) {
                  var a = r.next,
                    i = r.previous;
                  delete n.index[r.index],
                    (r.removed = !0),
                    i && (i.next = a),
                    a && (a.previous = i),
                    n.first == r && (n.first = a),
                    n.last == r && (n.last = i),
                    d ? n.size-- : e.size--;
                }
                return !!r;
              },
              forEach: function (t) {
                var e,
                  n = p(this),
                  r = s(t, arguments.length > 1 ? arguments[1] : void 0);
                while ((e = e ? e.next : n.first)) {
                  r(e.value, e.key, this);
                  while (e && e.removed) e = e.previous;
                }
              },
              has: function (t) {
                return !!y(this, t);
              },
            }),
            i(
              h,
              n
                ? {
                    get: function (t) {
                      var e = y(this, t);
                      return e && e.value;
                    },
                    set: function (t, e) {
                      return b(this, 0 === t ? 0 : t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return b(this, (t = 0 === t ? 0 : t), t);
                    },
                  }
            ),
            d &&
              r(h, "size", {
                get: function () {
                  return p(this).size;
                },
              }),
            u
          );
        },
        setStrong: function (t, e, n) {
          var r = e + " Iterator",
            a = g(e),
            i = g(r);
          c(
            t,
            e,
            function (t, e) {
              v(this, {
                type: r,
                target: t,
                state: a(t),
                kind: e,
                last: void 0,
              });
            },
            function () {
              var t = i(this),
                e = t.kind,
                n = t.last;
              while (n && n.removed) n = n.previous;
              return t.target && (t.last = n = n ? n.next : t.state.first)
                ? "keys" == e
                  ? { value: n.key, done: !1 }
                  : "values" == e
                  ? { value: n.value, done: !1 }
                  : { value: [n.key, n.value], done: !1 }
                : ((t.target = void 0), { value: void 0, done: !0 });
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            u(e);
        },
      };
    },
    "6d61": function (t, e, n) {
      "use strict";
      var r = n("23e7"),
        a = n("da84"),
        i = n("e330"),
        s = n("94ca"),
        o = n("6eeb"),
        l = n("f183"),
        c = n("2266"),
        u = n("19aa"),
        d = n("1626"),
        f = n("861d"),
        h = n("d039"),
        v = n("1c7e"),
        g = n("d44e"),
        p = n("7156");
      t.exports = function (t, e, n) {
        var b = -1 !== t.indexOf("Map"),
          y = -1 !== t.indexOf("Weak"),
          m = b ? "set" : "add",
          _ = a[t],
          O = _ && _.prototype,
          j = _,
          x = {},
          w = function (t) {
            var e = i(O[t]);
            o(
              O,
              t,
              "add" == t
                ? function (t) {
                    return e(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(y && !f(t)) && e(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return y && !f(t) ? void 0 : e(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(y && !f(t)) && e(this, 0 === t ? 0 : t);
                  }
                : function (t, n) {
                    return e(this, 0 === t ? 0 : t, n), this;
                  }
            );
          },
          S = s(
            t,
            !d(_) ||
              !(
                y ||
                (O.forEach &&
                  !h(function () {
                    new _().entries().next();
                  }))
              )
          );
        if (S) (j = n.getConstructor(e, t, b, m)), l.enable();
        else if (s(t, !0)) {
          var C = new j(),
            k = C[m](y ? {} : -0, 1) != C,
            B = h(function () {
              C.has(1);
            }),
            z = v(function (t) {
              new _(t);
            }),
            V =
              !y &&
              h(function () {
                var t = new _(),
                  e = 5;
                while (e--) t[m](e, e);
                return !t.has(-0);
              });
          z ||
            ((j = e(function (t, e) {
              u(t, O);
              var n = p(new _(), t, j);
              return void 0 != e && c(e, n[m], { that: n, AS_ENTRIES: b }), n;
            })),
            (j.prototype = O),
            (O.constructor = j)),
            (B || V) && (w("delete"), w("has"), b && w("get")),
            (V || k) && w(m),
            y && O.clear && delete O.clear;
        }
        return (
          (x[t] = j),
          r({ global: !0, forced: j != _ }, x),
          g(j, t),
          y || n.setStrong(j, t, b),
          j
        );
      };
    },
    "6ece": function (t, e, n) {},
    8212: function (t, e, n) {
      "use strict";
      var r = n("5530"),
        a = (n("a9e3"), n("3408"), n("a9ad")),
        i = n("24b2"),
        s = n("a236"),
        o = n("80d2"),
        l = n("58df");
      e["a"] = Object(l["a"])(a["a"], i["a"], s["a"]).extend({
        name: "v-avatar",
        props: {
          left: Boolean,
          right: Boolean,
          size: { type: [Number, String], default: 48 },
        },
        computed: {
          classes: function () {
            return Object(r["a"])(
              { "v-avatar--left": this.left, "v-avatar--right": this.right },
              this.roundedClasses
            );
          },
          styles: function () {
            return Object(r["a"])(
              {
                height: Object(o["g"])(this.size),
                minWidth: Object(o["g"])(this.size),
                width: Object(o["g"])(this.size),
              },
              this.measurableStyles
            );
          },
        },
        render: function (t) {
          var e = {
            staticClass: "v-avatar",
            class: this.classes,
            style: this.styles,
            on: this.$listeners,
          };
          return t(
            "div",
            this.setBackgroundColor(this.color, e),
            this.$slots.default
          );
        },
      });
    },
    "99d9": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return l;
        });
      var r = n("b0af"),
        a = n("80d2"),
        i = Object(a["i"])("v-card__actions"),
        s = Object(a["i"])("v-card__subtitle"),
        o = Object(a["i"])("v-card__text"),
        l = Object(a["i"])("v-card__title");
      r["a"];
    },
    a2bf: function (t, e, n) {
      "use strict";
      var r = n("da84"),
        a = n("e8b5"),
        i = n("07fa"),
        s = n("0366"),
        o = r.TypeError,
        l = function (t, e, n, r, c, u, d, f) {
          var h,
            v,
            g = c,
            p = 0,
            b = !!d && s(d, f);
          while (p < r) {
            if (p in n) {
              if (((h = b ? b(n[p], p, e) : n[p]), u > 0 && a(h)))
                (v = i(h)), (g = l(t, e, h, v, g, u - 1) - 1);
              else {
                if (g >= 9007199254740991)
                  throw o("Exceed the acceptable array length");
                t[g] = h;
              }
              g++;
            }
            p++;
          }
          return g;
        };
      t.exports = l;
    },
    a452: function (t, e, n) {
      "use strict";
      var r = n("ade3"),
        a = n("2b0e");
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "value",
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "change";
        return a["a"].extend({
          name: "proxyable",
          model: { prop: t, event: e },
          props: Object(r["a"])({}, t, { required: !1 }),
          data: function () {
            return { internalLazyValue: this[t] };
          },
          computed: {
            internalValue: {
              get: function () {
                return this.internalLazyValue;
              },
              set: function (t) {
                t !== this.internalLazyValue &&
                  ((this.internalLazyValue = t), this.$emit(e, t));
              },
            },
          },
          watch: Object(r["a"])({}, t, function (t) {
            this.internalLazyValue = t;
          }),
        });
      }
      var s = i();
      e["a"] = s;
    },
    b0af: function (t, e, n) {
      "use strict";
      var r = n("5530"),
        a = (n("a9e3"), n("0481"), n("4069"), n("615b"), n("10d2")),
        i = n("297c"),
        s = n("1c87"),
        o = n("58df");
      e["a"] = Object(o["a"])(i["a"], s["a"], a["a"]).extend({
        name: "v-card",
        props: {
          flat: Boolean,
          hover: Boolean,
          img: String,
          link: Boolean,
          loaderHeight: { type: [Number, String], default: 4 },
          raised: Boolean,
        },
        computed: {
          classes: function () {
            return Object(r["a"])(
              Object(r["a"])(
                { "v-card": !0 },
                s["a"].options.computed.classes.call(this)
              ),
              {},
              {
                "v-card--flat": this.flat,
                "v-card--hover": this.hover,
                "v-card--link": this.isClickable,
                "v-card--loading": this.loading,
                "v-card--disabled": this.disabled,
                "v-card--raised": this.raised,
              },
              a["a"].options.computed.classes.call(this)
            );
          },
          styles: function () {
            var t = Object(r["a"])(
              {},
              a["a"].options.computed.styles.call(this)
            );
            return (
              this.img &&
                (t.background = 'url("'.concat(
                  this.img,
                  '") center center / cover no-repeat'
                )),
              t
            );
          },
        },
        methods: {
          genProgress: function () {
            var t = i["a"].options.methods.genProgress.call(this);
            return t
              ? this.$createElement(
                  "div",
                  { staticClass: "v-card__progress", key: "progress" },
                  [t]
                )
              : null;
          },
        },
        render: function (t) {
          var e = this.generateRouteLink(),
            n = e.tag,
            r = e.data;
          return (
            (r.style = this.styles),
            this.isClickable &&
              ((r.attrs = r.attrs || {}), (r.attrs.tabindex = 0)),
            t(n, this.setBackgroundColor(this.color, r), [
              this.genProgress(),
              this.$slots.default,
            ])
          );
        },
      });
    },
    c63b: function (t, e, n) {
      t.exports = n.p + "img/default.1dfe7b94.png";
    },
  },
]);
//# sourceMappingURL=chunk-ce50c5fa.82eb2750.js.map
