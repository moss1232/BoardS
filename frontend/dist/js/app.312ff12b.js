(function (e) {
  function n(n) {
    for (
      var a, c, o = n[0], i = n[1], s = n[2], d = 0, l = [];
      d < o.length;
      d++
    )
      (c = o[d]),
        Object.prototype.hasOwnProperty.call(r, c) && r[c] && l.push(r[c][0]),
        (r[c] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    f && f(n);
    while (l.length) l.shift()();
    return u.push.apply(u, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], a = !0, c = 1; c < t.length; c++) {
        var o = t[c];
        0 !== r[o] && (a = !1);
      }
      a && (u.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var a = {},
    c = { app: 0 },
    r = { app: 0 },
    u = [];
  function o(e) {
    return (
      i.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-1315b290": "b64dcb1f",
        "chunk-4671f6ee": "4f092507",
        "chunk-18e96228": "4b852004",
        "chunk-5fa645cf": "350a442b",
        "chunk-1439cc5a": "a447cef9",
        "chunk-36965991": "6f929e0a",
        "chunk-3b7bb8b2": "8d88bcc2",
        "chunk-3dc48410": "ec3af28d",
        "chunk-3dc6d49e": "3891dd32",
        "chunk-4b07dafc": "cec896b7",
        "chunk-4fbad1d8": "6f8675b6",
        "chunk-f367ae58": "f2f864bf",
        "chunk-ce50c5fa": "82eb2750",
        "chunk-0be3603c": "e9a221cb",
        "chunk-189d5027": "daeda5cd",
        "chunk-4af786e3": "116a878c",
        "chunk-4d39d112": "141ee385",
        "chunk-2d0bfee5": "1759c497",
        "chunk-42bdb859": "95f768f1",
      }[e] +
      ".js"
    );
  }
  function i(n) {
    if (a[n]) return a[n].exports;
    var t = (a[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.e = function (e) {
    var n = [],
      t = {
        "chunk-1315b290": 1,
        "chunk-4671f6ee": 1,
        "chunk-18e96228": 1,
        "chunk-5fa645cf": 1,
        "chunk-1439cc5a": 1,
        "chunk-36965991": 1,
        "chunk-3b7bb8b2": 1,
        "chunk-4b07dafc": 1,
        "chunk-4fbad1d8": 1,
        "chunk-f367ae58": 1,
        "chunk-ce50c5fa": 1,
        "chunk-0be3603c": 1,
        "chunk-189d5027": 1,
        "chunk-4af786e3": 1,
        "chunk-4d39d112": 1,
        "chunk-42bdb859": 1,
      };
    c[e]
      ? n.push(c[e])
      : 0 !== c[e] &&
        t[e] &&
        n.push(
          (c[e] = new Promise(function (n, t) {
            for (
              var a =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-1315b290": "9408ba20",
                    "chunk-4671f6ee": "fae4c610",
                    "chunk-18e96228": "b2383728",
                    "chunk-5fa645cf": "e3d1d712",
                    "chunk-1439cc5a": "5730b2e9",
                    "chunk-36965991": "028112d0",
                    "chunk-3b7bb8b2": "7c4b26c7",
                    "chunk-3dc48410": "31d6cfe0",
                    "chunk-3dc6d49e": "31d6cfe0",
                    "chunk-4b07dafc": "458093b3",
                    "chunk-4fbad1d8": "c0932e5f",
                    "chunk-f367ae58": "6e587b24",
                    "chunk-ce50c5fa": "0e08a166",
                    "chunk-0be3603c": "fb9037e9",
                    "chunk-189d5027": "f194ebd3",
                    "chunk-4af786e3": "a352661e",
                    "chunk-4d39d112": "e022f623",
                    "chunk-2d0bfee5": "31d6cfe0",
                    "chunk-42bdb859": "9d64df58",
                  }[e] +
                  ".css",
                r = i.p + a,
                u = document.getElementsByTagName("link"),
                o = 0;
              o < u.length;
              o++
            ) {
              var s = u[o],
                d = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === a || d === r)) return n();
            }
            var l = document.getElementsByTagName("style");
            for (o = 0; o < l.length; o++) {
              (s = l[o]), (d = s.getAttribute("data-href"));
              if (d === a || d === r) return n();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = n),
              (f.onerror = function (n) {
                var a = (n && n.target && n.target.src) || r,
                  u = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (u.code = "CSS_CHUNK_LOAD_FAILED"),
                  (u.request = a),
                  delete c[e],
                  f.parentNode.removeChild(f),
                  t(u);
              }),
              (f.href = r);
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f);
          }).then(function () {
            c[e] = 0;
          }))
        );
    var a = r[e];
    if (0 !== a)
      if (a) n.push(a[2]);
      else {
        var u = new Promise(function (n, t) {
          a = r[e] = [n, t];
        });
        n.push((a[2] = u));
        var s,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          i.nc && d.setAttribute("nonce", i.nc),
          (d.src = o(e));
        var l = new Error();
        s = function (n) {
          (d.onerror = d.onload = null), clearTimeout(f);
          var t = r[e];
          if (0 !== t) {
            if (t) {
              var a = n && ("load" === n.type ? "missing" : n.type),
                c = n && n.target && n.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + a + ": " + c + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = a),
                (l.request = c),
                t[1](l);
            }
            r[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          s({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = s), document.head.appendChild(d);
      }
    return Promise.all(n);
  }),
    (i.m = e),
    (i.c = a),
    (i.d = function (e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, n) {
      if ((1 & n && (e = i(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var a in e)
          i.d(
            t,
            a,
            function (n) {
              return e[n];
            }.bind(null, a)
          );
      return t;
    }),
    (i.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(n, "a", n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = "/"),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = s.push.bind(s);
  (s.push = n), (s = s.slice());
  for (var l = 0; l < s.length; l++) n(s[l]);
  var f = d;
  u.push([0, "chunk-vendors"]), t();
})({
  0: function (e, n, t) {
    e.exports = t("56d7");
  },
  "56d7": function (e, n, t) {
    "use strict";
    t.r(n);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var a = t("2b0e"),
      c = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t(
          "v-app",
          [
            t("router-view", { attrs: { name: "header" } }),
            t(
              "v-main",
              { staticClass: "grey lighten-3" },
              [t("router-view")],
              1
            ),
          ],
          1
        );
      },
      r = [],
      u = t("2877"),
      o = t("6544"),
      i = t.n(o),
      s = t("7496"),
      d = t("f6c4"),
      l = {},
      f = Object(u["a"])(l, c, r, !1, null, null, null),
      h = f.exports;
    i()(f, { VApp: s["a"], VMain: d["a"] });
    t("d3b7"), t("3ca3"), t("ddb0");
    var m = t("8c4f");
    a["a"].use(m["a"]);
    var k = [
        {
          path: "",
          name: "Top",
          components: {
            header: function () {
              return Promise.all([
                t.e("chunk-4671f6ee"),
                t.e("chunk-4af786e3"),
                t.e("chunk-42bdb859"),
              ]).then(t.bind(null, "c4d6"));
            },
            default: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-4671f6ee"),
                t.e("chunk-18e96228"),
              ]).then(t.bind(null, "a9c4"));
            },
          },
        },
        {
          path: "/home",
          name: "Home",
          components: {
            header: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-5fa645cf"),
                t.e("chunk-0be3603c"),
                t.e("chunk-4af786e3"),
                t.e("chunk-4d39d112"),
              ]).then(t.bind(null, "9cbd"));
            },
            meta: { requiresAuth: !0 },
          },
        },
        {
          path: "/login",
          name: "Login",
          components: {
            default: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-4671f6ee"),
                t.e("chunk-5fa645cf"),
                t.e("chunk-1439cc5a"),
                t.e("chunk-3dc48410"),
              ]).then(t.bind(null, "2ab8"));
            },
          },
        },
        {
          path: "/signup",
          name: "Signup",
          components: {
            default: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-4671f6ee"),
                t.e("chunk-5fa645cf"),
                t.e("chunk-1439cc5a"),
                t.e("chunk-3dc6d49e"),
              ]).then(t.bind(null, "11ca"));
            },
          },
        },
        {
          path: "/setting",
          name: "Setting",
          components: {
            header: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-5fa645cf"),
                t.e("chunk-0be3603c"),
                t.e("chunk-4af786e3"),
                t.e("chunk-4d39d112"),
              ]).then(t.bind(null, "9cbd"));
            },
            default: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-4671f6ee"),
                t.e("chunk-5fa645cf"),
                t.e("chunk-1439cc5a"),
                t.e("chunk-4b07dafc"),
              ]).then(t.bind(null, "a6ed"));
            },
          },
          meta: { requiresAuth: !0 },
        },
        {
          path: "/teamsetting",
          name: "TeamSetting",
          components: {
            header: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-5fa645cf"),
                t.e("chunk-0be3603c"),
                t.e("chunk-4af786e3"),
                t.e("chunk-4d39d112"),
              ]).then(t.bind(null, "9cbd"));
            },
            default: function () {
              return t.e("chunk-2d0bfee5").then(t.bind(null, "402e"));
            },
          },
          meta: { requiresAuth: !0 },
          children: [
            {
              path: "create",
              name: "TeamCreate",
              components: {
                default: function () {
                  return Promise.all([
                    t.e("chunk-1315b290"),
                    t.e("chunk-4671f6ee"),
                    t.e("chunk-5fa645cf"),
                    t.e("chunk-1439cc5a"),
                    t.e("chunk-3b7bb8b2"),
                  ]).then(t.bind(null, "ae98"));
                },
              },
              meta: { requiresAuth: !0 },
            },
            {
              path: "search",
              name: "TeamSearch",
              components: {
                default: function () {
                  return Promise.all([
                    t.e("chunk-1315b290"),
                    t.e("chunk-4671f6ee"),
                    t.e("chunk-5fa645cf"),
                    t.e("chunk-1439cc5a"),
                    t.e("chunk-4fbad1d8"),
                  ]).then(t.bind(null, "a4c5"));
                },
              },
              meta: { requiresAuth: !0 },
            },
            {
              path: "leave",
              name: "TeamLeave",
              components: {
                default: function () {
                  return Promise.all([
                    t.e("chunk-1315b290"),
                    t.e("chunk-5fa645cf"),
                    t.e("chunk-0be3603c"),
                    t.e("chunk-189d5027"),
                  ]).then(t.bind(null, "a883"));
                },
              },
              meta: { requiresAuth: !0 },
            },
          ],
        },
        {
          path: "/:team_id",
          components: {
            default: function () {
              return t.e("chunk-2d0bfee5").then(t.bind(null, "402e"));
            },
            header: function () {
              return Promise.all([
                t.e("chunk-1315b290"),
                t.e("chunk-5fa645cf"),
                t.e("chunk-0be3603c"),
                t.e("chunk-4af786e3"),
                t.e("chunk-4d39d112"),
              ]).then(t.bind(null, "9cbd"));
            },
          },
          children: [
            {
              path: "Message",
              components: {
                default: function () {
                  return t.e("chunk-2d0bfee5").then(t.bind(null, "402e"));
                },
              },
              children: [
                {
                  path: "",
                  name: "TeamMessages",
                  components: {
                    default: function () {
                      return Promise.all([
                        t.e("chunk-1315b290"),
                        t.e("chunk-4671f6ee"),
                        t.e("chunk-5fa645cf"),
                        t.e("chunk-1439cc5a"),
                        t.e("chunk-36965991"),
                      ]).then(t.bind(null, "8b06"));
                    },
                  },
                  meta: { requiresAuth: !0 },
                },
                {
                  path: ":message_id",
                  name: "TeamMessageDetail",
                  components: {
                    default: function () {
                      return Promise.all([
                        t.e("chunk-1315b290"),
                        t.e("chunk-4671f6ee"),
                        t.e("chunk-ce50c5fa"),
                      ]).then(t.bind(null, "20e3"));
                    },
                  },
                  meta: { requiresAuth: !0 },
                },
              ],
            },
            {
              path: "Calendar",
              components: {
                default: function () {
                  return t.e("chunk-2d0bfee5").then(t.bind(null, "402e"));
                },
              },
              children: [
                {
                  path: "",
                  name: "TeamCalendars",
                  components: {
                    default: function () {
                      return Promise.all([
                        t.e("chunk-1315b290"),
                        t.e("chunk-4671f6ee"),
                        t.e("chunk-5fa645cf"),
                        t.e("chunk-1439cc5a"),
                        t.e("chunk-f367ae58"),
                      ]).then(t.bind(null, "fafa"));
                    },
                  },
                  meta: { requiresAuth: !0 },
                },
                {
                  path: ":event_id",
                  name: "TeamCalendarDetail",
                  components: {
                    default: function () {
                      return Promise.all([
                        t.e("chunk-1315b290"),
                        t.e("chunk-4671f6ee"),
                        t.e("chunk-5fa645cf"),
                        t.e("chunk-1439cc5a"),
                        t.e("chunk-f367ae58"),
                      ]).then(t.bind(null, "fafa"));
                    },
                  },
                  meta: { requiresAuth: !0 },
                },
              ],
            },
          ],
        },
      ],
      p = new m["a"]({ mode: "history", routes: k });
    p.beforeEach(function (e, n, t) {
      var a = [
          window.localStorage.getItem("uid"),
          window.localStorage.getItem("access-token"),
          window.localStorage.getItem("client"),
        ],
        c = function (e) {
          return 1 == !!e;
        };
      e.meta.requiresAuth && !a.every(c) ? t({ name: "Login" }) : t();
    });
    var b = p,
      g = t("f309");
    t("5363");
    a["a"].use(g["a"]);
    var w = new g["a"]({ icons: { iconfont: "mdi" } }),
      v = t("2f62"),
      S = t("1da1"),
      y = t("2909"),
      j = (t("96cf"), t("d81d"), t("99af"), t("4de4"), t("bc3a")),
      O = t.n(j),
      E = t("5530"),
      I = (t("b0c0"), t("b166")),
      T = function (e) {
        if (null === e) return null;
        var n = e.title,
          t = e.content,
          a = new Date(e.start),
          c = new Date(e.end);
        return Object(E["a"])(
          Object(E["a"])({}, e),
          {},
          {
            title: n,
            content: t,
            start: a,
            end: c,
            startDate: Object(I["a"])(a, "yyyy/MM/dd"),
            startTime: Object(I["a"])(a, "HH:mm"),
            endDate: Object(I["a"])(c, "yyyy/MM/dd"),
            endTime: Object(I["a"])(c, "HH:mm"),
            color: e.color || "#2196F3",
          }
        );
      },
      P = function (e) {
        if (null === e) return null;
        var n = e.title,
          t = e.content,
          a = e.team_id,
          c = e.files,
          r = e.message_user_avatar;
        return Object(E["a"])(
          Object(E["a"])({}, e),
          {},
          { title: n, content: t, team_id: a, files: c, user_avatar: r }
        );
      },
      x = function (e) {
        if (null === e) return null;
        var n = e.name,
          t = e.team_avatar;
        return Object(E["a"])(
          Object(E["a"])({}, e),
          {},
          { name: n, avatar: t }
        );
      },
      _ = "".concat("https://board-rails-backend.herokuapp.com", "/api/teams"),
      M = { events: [], event: null, isEditMode: !1, clickedDate: null },
      R = {
        events: function (e) {
          return e.events.map(function (e) {
            return T(e);
          });
        },
        event: function (e) {
          return T(e.event);
        },
        isEditMode: function (e) {
          return e.isEditMode;
        },
        clickedDate: function (e) {
          return e.clickedDate;
        },
      },
      A = {
        setEvents: function (e, n) {
          return (e.events = n);
        },
        appendEvent: function (e, n) {
          return (e.events = [].concat(Object(y["a"])(e.events), [n]));
        },
        setEvent: function (e, n) {
          return (e.event = n);
        },
        removeEvent: function (e, n) {
          return (e.events = e.events.filter(function (e) {
            return e.id !== n.id;
          }));
        },
        resetEvent: function (e) {
          return (e.event = null);
        },
        updateEvent: function (e, n) {
          return (e.events = e.events.map(function (e) {
            return e.id === n.id ? n : e;
          }));
        },
        setEditMode: function (e, n) {
          return (e.isEditMode = n);
        },
        setClickedDate: function (e, n) {
          return (e.clickedDate = n);
        },
      },
      q = {
        fetchEvents: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (t.next = 3),
                        O.a.get("".concat(_, "/").concat(n, "/events"), {
                          headers: {
                            uid: window.localStorage.getItem("uid"),
                            "access-token":
                              window.localStorage.getItem("access-token"),
                            client: window.localStorage.getItem("client"),
                          },
                        })
                      );
                    case 3:
                      (c = t.sent), a("setEvents", c.data);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        createEvent: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (t.next = 3),
                        O.a.post(
                          "".concat(_, "/").concat(n.team_id, "/events"),
                          n,
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
                    case 3:
                      (c = t.sent), a("appendEvent", c.data);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        deleteEvent: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (t.next = 3),
                        O.a.delete(
                          ""
                            .concat(_, "/")
                            .concat(n.team_id, "/events/")
                            .concat(n.id),
                          {
                            headers: {
                              uid: window.localStorage.getItem("uid"),
                              "access-token":
                                window.localStorage.getItem("access-token"),
                              client: window.localStorage.getItem("client"),
                            },
                            params: { team_id: n.team_id, id: n.id },
                          }
                        )
                      );
                    case 3:
                      (c = t.sent), a("removeEvent", c.data), a("resetEvent");
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        updateEvent: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (t.next = 3),
                        O.a.put(
                          ""
                            .concat(_, "/")
                            .concat(n.team_id, "/events/")
                            .concat(n.id),
                          n,
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
                    case 3:
                      (c = t.sent), a("updateEvent", c.data);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        setEvent: function (e, n) {
          var t = e.commit;
          t("setEvent", n);
        },
        setEditMode: function (e, n) {
          var t = e.commit;
          t("setEditMode", n);
        },
      },
      C = { namespaced: !0, state: M, getters: R, mutations: A, actions: q },
      D = "".concat("https://board-rails-backend.herokuapp.com", "/api/teams"),
      L = { messages: [], message: null },
      H = {
        messages: function (e) {
          return e.messages.map(function (e) {
            return P(e);
          });
        },
        message: function (e) {
          return P(e.message);
        },
      },
      N = {
        setMessages: function (e, n) {
          return (e.messages = n);
        },
        appendMessage: function (e, n) {
          return (e.messages = [].concat(Object(y["a"])(e.messages), [n]));
        },
      },
      B = {
        fetchMessages: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (t.next = 3),
                        O.a.get("".concat(D, "/").concat(n, "/messages"), {
                          headers: {
                            uid: window.localStorage.getItem("uid"),
                            "access-token":
                              window.localStorage.getItem("access-token"),
                            client: window.localStorage.getItem("client"),
                          },
                        })
                      );
                    case 3:
                      (c = t.sent), a("setMessages", c.data);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        createMessage: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (t.next = 3),
                        O.a.post(
                          ""
                            .concat(D, "/")
                            .concat(n.get("team_id"), "/messages"),
                          n,
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
                    case 3:
                      (c = t.sent), a("appendMessage", c.data);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
      J = { namespaced: !0, state: L, getters: H, mutations: N, actions: B },
      F = "".concat("https://board-rails-backend.herokuapp.com", "/api"),
      V = { teams: [], team: null },
      $ = {
        teams: function (e) {
          return e.teams.map(function (e) {
            return x(e);
          });
        },
        team: function (e) {
          return x(e.team);
        },
      },
      K = {
        setTeams: function (e, n) {
          return (e.teams = n);
        },
        appendTeam: function (e, n) {
          return (e.teams = [].concat(Object(y["a"])(e.teams), [n]));
        },
        removeTeam: function (e, n) {
          return (e.teams = e.teams.filter(function (e) {
            return e.id !== n.id;
          }));
        },
      },
      U = {
        fetchTeams: function (e) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function n() {
              var t, a;
              return regeneratorRuntime.wrap(function (n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (t = e.commit),
                        (n.next = 3),
                        O.a.get("".concat(F, "/teams"), {
                          headers: {
                            uid: window.localStorage.getItem("uid"),
                            "access-token":
                              window.localStorage.getItem("access-token"),
                            client: window.localStorage.getItem("client"),
                          },
                        })
                      );
                    case 3:
                      (a = n.sent), t("setTeams", a.data);
                    case 5:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        createTeam: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (c = { data: "" }),
                        (t.next = 4),
                        new Promise(function (e, t) {
                          O.a
                            .post("".concat(F, "/teams"), n, {
                              headers: {
                                uid: window.localStorage.getItem("uid"),
                                "access-token":
                                  window.localStorage.getItem("access-token"),
                                client: window.localStorage.getItem("client"),
                              },
                            })
                            .then(function (n) {
                              (c.data = n.data), e(n), a("appendTeam", c.data);
                            })
                            .catch(function (e) {
                              (c.data = e), t(e);
                            });
                        })
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        JoinTeam: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (c = { data: "" }),
                        (t.next = 4),
                        new Promise(function (e, t) {
                          O.a
                            .post("".concat(F, "/teams/join"), n, {
                              headers: {
                                uid: window.localStorage.getItem("uid"),
                                "access-token":
                                  window.localStorage.getItem("access-token"),
                                client: window.localStorage.getItem("client"),
                              },
                            })
                            .then(function (n) {
                              (c.data = n.data), e(n), a("appendTeam", c.data);
                            })
                            .catch(function (e) {
                              (c.data = e), t(e);
                            });
                        })
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        leaveTeam: function (e, n) {
          return Object(S["a"])(
            regeneratorRuntime.mark(function t() {
              var a, c;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.commit),
                        (c = { data: "" }),
                        (t.next = 4),
                        new Promise(function (e, t) {
                          O.a
                            .delete("".concat(F, "/teams/leave"), {
                              headers: {
                                uid: window.localStorage.getItem("uid"),
                                "access-token":
                                  window.localStorage.getItem("access-token"),
                                client: window.localStorage.getItem("client"),
                              },
                              params: { name: n },
                            })
                            .then(function (n) {
                              (c.data = n.data), e(n), a("removeTeam", n.data);
                            })
                            .catch(function (e) {
                              (c.data = e), t(e);
                            });
                        })
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
      z = { namespaced: !0, state: V, getters: $, mutations: K, actions: U };
    a["a"].use(v["a"]);
    var G = new v["a"].Store({ modules: { events: C, messages: J, teams: z } }),
      Q = G;
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: b,
        vuetify: w,
        store: Q,
        render: function (e) {
          return e(h);
        },
      }).$mount("#app");
  },
});
//# sourceMappingURL=app.312ff12b.js.map
