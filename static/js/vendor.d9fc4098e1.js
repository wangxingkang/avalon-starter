webpackJsonp([ 1 ], [ function(e, t, n) {
    (function(t) {
        /*!
built in 2017-7-11:11:27 version 2.2.9 by 司徒正美
https://github.com/RubyLouvre/avalon/tree/2.2.9
修复ms-for循环生成option与ms-deplex的联动问题
解决 IE8 html 属性中的中文被转成 unicode 字符串问题 
修复多个计算属性不更新的问题

*/
        !function(t, n) {
            e.exports = n();
        }(0, function() {
            "use strict";
            function e(e) {
                this.size = 0, this.limit = e, this.head = this.tail = void 0, this._keymap = {};
            }
            function n(e, t) {
                return rr[e] && i.warn(e, "directive have defined! "), rr[e] = t, t.update || (t.update = function() {}), 
                t.delay && (nr[e] = 1), t;
            }
            function r(e) {
                for (var t in nr) if ("ms-" + t in e) return !0;
            }
            function i(e) {
                return new i.init(e);
            }
            function o(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
            }
            function a(e, t) {
                "string" == typeof e && (e = e.match(or) || []);
                for (var n = {}, r = void 0 !== t ? t : 1, i = 0, o = e.length; i < o; i++) n[e[i]] = r;
                return n;
            }
            function s(e) {
                return i._quote(e);
            }
            function c() {
                dr && i.config.debug && Function.apply.call(console.log, console, arguments);
            }
            function u() {
                if (dr && i.config.debug) {
                    var e = console.warn || console.log;
                    Function.apply.call(e, console, arguments);
                }
            }
            function l(e, t) {
                throw (t || Error)(e);
            }
            function f() {}
            function d(e) {
                return null !== e && "object" == typeof e;
            }
            function h(e, t, n) {
                n || (n = 1), null == t && (t = e || 0, e = 0);
                for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)), o = new Array(i); ++r < i; ) o[r] = e, 
                e += n;
                return o;
            }
            function p(e) {
                return e.replace(hr, "$1-$2").toLowerCase();
            }
            function v(e) {
                return !e || e.indexOf("-") < 0 && e.indexOf("_") < 0 ? e : e.replace(pr, function(e) {
                    return e.charAt(1).toUpperCase();
                });
            }
            function m(e, t, n) {
                return vr.call(e, t, n);
            }
            function g(e) {
                return e = e || "avalon", String(Math.random() + Math.random()).replace(mr, e);
            }
            function y(e) {
                return e.uuid || (e.uuid = g("e"));
            }
            function b(e) {
                return e.uuid || (e.uuid = "_" + ++gr);
            }
            function w(e) {
                return (e + "").replace(yr, "\\$&");
            }
            function x() {
                return Xn.createDocumentFragment();
            }
            function _(e) {
                for (var t in e) {
                    var n = e[t];
                    "function" == typeof _.plugins[t] ? _.plugins[t](n) : _[t] = n;
                }
                return this;
            }
            function A(e) {
                return Xn.createComment(e);
            }
            function k(e) {
                return /\[native code\]/.test(e);
            }
            function C(e, t, n) {
                var r = "for(var " + e + "i=0,n = this.length; i < n; i++){" + t.replace("_", "((i in this) && fn.call(scope,this[i],i,this))") + "}" + n;
                return Function("fn,scope", r);
            }
            function T(e) {
                return !!e && (e == e.document && e.document != e);
            }
            function E(e) {
                return Vr.test(ur.call(e));
            }
            function N(e, t) {
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !lr.call(e, "constructor") && !lr.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                    e.$vbthis;
                } catch (n) {
                    return !1;
                }
                if (Lr) for (t in e) return lr.call(e, t);
                for (t in e) ;
                return t === Pr || lr.call(e, t);
            }
            function $(e) {
                return "[object Object]" === ur.call(e) && Object.getPrototypeOf(e) === Object.prototype;
            }
            function S(e, t) {
                for (var n, r, o, a = t[0], s = 1, c = t.length; s < c; s++) {
                    var u = t[s], l = Array.isArray(u);
                    for (o in u) if (!l || u.hasOwnProperty(o)) {
                        try {
                            var f = a[o], d = u[o];
                        } catch (h) {
                            continue;
                        }
                        a !== d && (e && d && (i.isPlainObject(d) || (n = Array.isArray(d))) ? (n ? (n = !1, 
                        r = f && Array.isArray(f) ? f : []) : r = f && i.isPlainObject(f) ? f : {}, a[o] = S(e, [ r, d ])) : d !== Pr && (a[o] = d));
                    }
                }
                return a;
            }
            function O(e) {
                if (!e) return !1;
                var t = e.length;
                if (t === t >>> 0) {
                    var n = ur.call(e);
                    if (Fr.test(n)) return !0;
                    if ("[object Object]" !== n) return !1;
                    try {
                        return !1 !== {}.propertyIsEnumerable.call(e, "length") || jr.test(e.item || e.callee);
                    } catch (r) {
                        return !e.window;
                    }
                }
                return !1;
            }
            function M(e, t) {
                var n = Math.pow(10, t);
                return "" + (Math.round(e * n) / n).toFixed(t);
            }
            function j(e, t, n, r) {
                e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
                var i = isFinite(+e) ? +e : 0, o = isFinite(+t) ? Math.abs(t) : 3, a = "string" == typeof r ? r : ",", s = n || ".", c = "";
                return c = (o ? M(i, o) : "" + Math.round(i)).split("."), c[0].length > 3 && (c[0] = c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)), 
                c.join(s);
            }
            function V(e) {
                return e.replace(Rr, "").replace(Br, function(e, t) {
                    var n = e.toLowerCase().match(/<(\w+)\s/);
                    if (n) {
                        var r = Ur[n[1]];
                        r && (e = e.replace(r, function(e, t, n) {
                            var r = n.charAt(0);
                            return t + "=" + r + "javascript:void(0)" + r;
                        }));
                    }
                    return e.replace(Hr, " ").replace(/\s+/g, " ");
                });
            }
            function D(e) {
                return parseInt(e, 10) || 0;
            }
            function L(e, t, n) {
                var r = "";
                for (e < 0 && (r = "-", e = -e), e = "" + e; e.length < t; ) e = "0" + e;
                return n && (e = e.substr(e.length - t)), r + e;
            }
            function I(e, t, n, r) {
                return function(i) {
                    var o = i["get" + e]();
                    return (n > 0 || o > -n) && (o += n), 0 === o && -12 === n && (o = 12), L(o, t, r);
                };
            }
            function P(e, t) {
                return function(n, r) {
                    var i = n["get" + e]();
                    return r[(t ? "SHORT" + e : e).toUpperCase()][i];
                };
            }
            function F(e) {
                var t = -1 * e.getTimezoneOffset(), n = t >= 0 ? "+" : "";
                return n += L(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + L(Math.abs(t % 60), 2);
            }
            function R(e, t) {
                return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1];
            }
            function H(e, t) {
                var n, r, i = H.locate, o = "", a = [];
                if (t = t || "mediumDate", t = i[t] || t, "string" == typeof e) if (/^\d+$/.test(e)) e = D(e); else if (Wr.test(e)) e = +RegExp.$1; else {
                    var s = e.trim(), c = [ 0, 0, 0, 0, 0, 0, 0 ], u = new Date(0);
                    s = s.replace(/^(\d+)\D(\d+)\D(\d+)/, function(e, t, n, r) {
                        var i = 4 === r.length ? [ r, t, n ] : [ t, n, r ];
                        return c[0] = D(i[0]), c[1] = D(i[1]) - 1, c[2] = D(i[2]), "";
                    });
                    var l = u.setFullYear, f = u.setHours;
                    s = s.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function(e, t, n, r, i) {
                        return c[3] = D(t), c[4] = D(n), c[5] = D(r), i && (c[6] = Math.round(1e3 * parseFloat("0." + i))), 
                        "";
                    });
                    var d = 0, h = 0;
                    s = s.replace(/Z|([+-])(\d\d):?(\d\d)/, function(e, t, n, r) {
                        return l = u.setUTCFullYear, f = u.setUTCHours, t && (d = D(t + n), h = D(t + r)), 
                        "";
                    }), c[3] -= d, c[4] -= h, l.apply(u, c.slice(0, 3)), f.apply(u, c.slice(3)), e = u;
                }
                for ("number" == typeof e && (e = new Date(e)); t; ) r = zr.exec(t), r ? (a = a.concat(r.slice(1)), 
                t = a.pop()) : (a.push(t), t = null);
                return a.forEach(function(t) {
                    n = qr[t], o += n ? n(e, i) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                }), o;
            }
            function B(e, t, n) {
                var r = i.type(e);
                if ("array" !== r && "object" !== r) throw "orderBy只能处理对象或数组";
                var o = "string" == typeof t ? function(e) {
                    return e && e[t];
                } : "function" == typeof t ? t : function(e) {
                    return e;
                }, a = {}, s = [];
                U(e, Array.isArray(e), function(t) {
                    var n = e[t], r = o(n, t);
                    r in a ? a[r].push(t) : a[r] = [ t ], s.push(r);
                }), s.sort(), n < 0 && s.reverse();
                var c = "array" === r, u = c ? [] : {};
                return Y(u, s, function(t) {
                    var n = a[t].shift();
                    c ? u.push(e[n]) : u[n] = e[n];
                });
            }
            function U(e, t, n) {
                if (t) e.forEach(function(e, t) {
                    n(t);
                }); else if ("string" == typeof e.$track) e.$track.replace(/[^☥]+/g, function(e) {
                    n(e);
                }); else for (var r in e) e.hasOwnProperty(r) && n(r);
            }
            function q(e, t) {
                var n = i.type(e);
                if ("array" !== n && "object" !== n) throw "filterBy只能处理对象或数组";
                var r = i.slice(arguments, 2), o = i.type(t);
                if ("function" === o) var a = t._orig || t; else {
                    if ("string" !== o && "number" !== o) return e;
                    if ("" === t) return e;
                    var s = new RegExp(i.escapeRegExp(t), "i");
                    a = function(e) {
                        return s.test(e);
                    };
                }
                var c = "array" === n, u = c ? [] : {};
                return U(e, c, function(t) {
                    var n = e[t];
                    a.apply({
                        "key": t
                    }, [ n, t ].concat(r)) && (c ? u.push(n) : u[t] = n);
                }), u;
            }
            function z(e, t, n) {
                if (i.isObject(e) && !Array.isArray(e)) {
                    var r = [];
                    return Y(r, t, function(t) {
                        r.push(e.hasOwnProperty(t) ? e[t] : n ? n[t] : "");
                    });
                }
                return e;
            }
            function W(e, t, n) {
                var r = i.type(e);
                if ("array" !== r && "object" !== r) throw "limitBy只能处理对象或数组";
                if ("number" != typeof t) return e;
                if (t !== t) return e;
                "object" === r && (e = J(e, !1));
                var o = e.length;
                t = Math.floor(Math.min(o, t)), (n = "number" == typeof n ? n : 0) < 0 && (n = Math.max(0, o + n));
                for (var a = [], s = n; s < o && a.length !== t; s++) a.push(e[s]);
                if ("array" === r) return a;
                var c = {};
                return Y(c, a, function(e) {
                    c[e.key] = e.value;
                });
            }
            function Y(e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) n(t[r]);
                return e;
            }
            function J(e, t) {
                var n = [], r = 0;
                return U(e, t, function(t) {
                    n[r] = {
                        "oldIndex": r,
                        "value": e[t],
                        "key": t
                    }, r++;
                }), n;
            }
            function G(e) {
                return null == e ? "" : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
            }
            function K(e, t) {
                if (1 === e.nodeType) {
                    var n = e.nodeName.toLowerCase();
                    if ("script" === n) e.text !== t.text && (e.type = "noexec", e.text = t.text, e.type = t.type || ""); else if ("object" === n) {
                        var r = t.childNodes;
                        if (e.childNodes.length !== r.length) {
                            i.clearHTML(e);
                            for (var o, a = 0; o = r[a++]; ) e.appendChild(o.cloneNode(!0));
                        }
                    } else "input" === n && Qr.test(t.nodeName) ? (e.defaultChecked = e.checked = t.checked, 
                    e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
                }
            }
            function X(e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName("*") : void 0 !== e.querySelectorAll ? e.querySelectorAll("*") : [];
            }
            function Z(e) {
                for (var t = e.cloneNode(!0), n = X(t), r = X(e), i = 0; i < r.length; i++) K(n[i], r[i]);
                return t;
            }
            function Q(e, t) {
                try {
                    for (;t = t.parentNode; ) if (t === e) return !0;
                } catch (n) {}
                return !1;
            }
            function ee(e) {
                this.node = e;
            }
            function te(e) {
                return "classList" in e || (e.classList = new ee(e)), e.classList;
            }
            function ne(e) {
                var t = e.nodeName;
                return t.toLowerCase() === t && !!e.scopeName && "" === e.outerText;
            }
            function re(e) {
                if ("string" == typeof e) {
                    if ((e = e.trim()) && ti.test(e.replace(ri, "@").replace(ii, "]").replace(ni, ""))) return new Function("return " + e)();
                    throw TypeError("Invalid JSON: [" + e + "]");
                }
                return e;
            }
            function ie(e, t) {
                for (var n in t) try {
                    var r = t[n];
                    if (0 === n.indexOf("data-") || oi.test(e)) e.setAttribute(n, r); else {
                        var o = ei[n] || n;
                        if ("boolean" == typeof e[o] && ("checked" === o && (e.defaultChecked = !!r), e[o] = !!r), 
                        !1 === r) {
                            e.removeAttribute(o);
                            continue;
                        }
                        if (i.msie < 8 && /[A-Z]/.test(o)) {
                            e[o] = r + "";
                            continue;
                        }
                        !(i.modern || !ne(e)) || oe(e.nodeName, n) ? ("href" !== n && "src" !== n || i.msie < 8 && (r = String(r).replace(ai, "&")), 
                        e[o] = r + "") : e.setAttribute(n, r);
                    }
                } catch (a) {
                    i.log(String(a.message).trim(), n, r);
                }
            }
            function oe(e, t) {
                var n = e + ":" + t;
                return n in si ? si[n] : si[n] = t in Xn.createElement(e);
            }
            function ae(e, t) {
                if (e.offsetWidth <= 0) {
                    if (fi.test(_r["@:get"](e, "display"))) {
                        var n = {
                            "node": e
                        };
                        for (var r in li) n[r] = e.style[r], e.style[r] = li[r];
                        t.push(n);
                    }
                    var i = e.parentNode;
                    i && 1 === i.nodeType && ae(i, t);
                }
            }
            function se(e) {
                return e.window || e.defaultView || e.parentWindow || !1;
            }
            function ce(e) {
                var t = e.tagName.toLowerCase();
                return "input" === t ? Qr.test(e.type) ? "checked" : e.type : t;
            }
            function ue(e) {
                if (e.hasAttribute && e.hasAttribute("value")) return e.getAttribute("value");
                var t = e.getAttributeNode("value");
                return t && t.specified ? t.value : e.innerHTML.trim();
            }
            function le(e) {
                return a(e + ",template,#document-fragment,#comment");
            }
            function fe(e) {
                return de(e);
            }
            function de(e) {
                var t = e, n = Ti.get(t);
                if (n) return i.mix(!0, [], n);
                var r = he(e, !1);
                return Ti.put(t, i.mix(!0, [], r)), r;
            }
            function he(e, t) {
                t = void 0 === t || !0 === t;
                var n = pe(e, t);
                return t ? "string" == typeof n[0] ? n[1] : n[0] : n;
            }
            function pe(e, t) {
                function n(e) {
                    var t = i.last();
                    t && t.children ? t.children.push(e) : c.push(e);
                }
                var r = 9990, i = [], o = e, a = e.length;
                i.last = function() {
                    return i[i.length - 1];
                };
                var s, c = [];
                do {
                    if (0 == --r) break;
                    var u = ye(e);
                    if (u) {
                        e = e.replace(u[0], "");
                        var l = i.pop();
                        if (!l) throw "是不是有属性值没有用引号括起";
                        if ("option" === l.nodeName ? l.children = [ {
                            "nodeName": "#text",
                            "nodeValue": we(l)
                        } ] : "table" === l.nodeName && ge(l.children), s = null, t && 1 === c.length && !i.length) return [ o.slice(0, a - e.length), c[0] ];
                    } else {
                        var u = be(e);
                        if (u) {
                            e = e.replace(u[0], "");
                            var f = u[1];
                            n(f);
                            var d = !(!f.isVoidTag && !_i[f.nodeName]);
                            if (d || i.push(f), t && d && !i.length) return [ o.slice(0, a - e.length), f ];
                            s = f;
                        } else {
                            var h = "";
                            do {
                                if (0 !== e.indexOf("<")) break;
                                h += e.slice(0, 1), e = e.slice(1);
                            } while (e.length);
                            var p = e.indexOf("<");
                            if (-1 === p) h = e, e = ""; else {
                                var v = e.indexOf(_.openTag);
                                if (-1 !== v && v < p) {
                                    0 !== v && (h += e.slice(0, v));
                                    var m = e.slice(v), g = me(m);
                                    h += g, e = m.slice(g.length);
                                } else h += e.slice(0, p), e = e.slice(p);
                            }
                            var y = ve(s, h, n);
                            y && (s = y);
                        }
                    }
                } while (e.length);
                return c;
            }
            function ve(e, t, n) {
                if (ki.test(t)) return e && "#text" === e.nodeName ? (e.nodeValue += t, e) : (e = {
                    "nodeName": "#text",
                    "nodeValue": t
                }, n(e), e);
            }
            function me(e) {
                for (var t, n, r = _.closeTag, i = _.openTag, o = r.charAt(0), a = r.length, s = "code", c = i.length, u = e.length; c < u; c++) {
                    var l = e.charAt(c);
                    switch (s) {
                      case "code":
                        if ('"' === l || "'" === l) s = "string", t = l; else if (l === o && e.substr(c, a) === r) return e.slice(0, c + a);
                        break;

                      case "string":
                        "\\" === l && /"'/.test(e.charAt(c + 1)) && (n = !n), l !== t || n || (s = "code");
                    }
                }
                throw "找不到界定符" + r;
            }
            function ge(e) {
                for (var t = !1, n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    Ei.test(i.nodeName) ? t = !1 : "tr" === i.nodeName ? t ? (e.splice(n, 1), t.children.push(i), 
                    r--, n--) : (t = {
                        "nodeName": "tbody",
                        "props": {},
                        "children": [ i ]
                    }, e.splice(n, 1, t)) : t && (e.splice(n, 1), t.children.push(i), r--, n--);
                }
            }
            function ye(e) {
                if (0 === e.indexOf("</")) {
                    var t = e.match(/\<\/(\w+[^\s\/\>]*)>/);
                    if (t) {
                        var n = t[1];
                        return e = e.slice(3 + n.length), [ t[0], {
                            "nodeName": n
                        } ];
                    }
                }
                return null;
            }
            function be(e) {
                if (0 === e.indexOf("<")) {
                    if (0 === e.indexOf("\x3c!--")) {
                        var t = e.indexOf("--\x3e");
                        -1 === t && thow("注释节点没有闭合 " + e.slice(0, 100));
                        var n = {
                            "nodeName": "#comment",
                            "nodeValue": e.slice(4, t)
                        };
                        return [ e.slice(0, t + 3), n ];
                    }
                    var r = e.match(Ni);
                    if (r) {
                        var i = r[0], o = r[1], n = {
                            "nodeName": o,
                            "props": {},
                            "children": []
                        };
                        e = e.replace(i, "");
                        try {
                            var a = xe(e);
                        } catch (l) {}
                        if (a && (n.props = a[1], e = e.replace(a[0], ""), i += a[0]), ">" === e.charAt(0) ? (i += ">", 
                        e = e.slice(1), bi[n.nodeName] && (n.isVoidTag = !0)) : "/>" === e.slice(0, 2) && (i += "/>", 
                        e = e.slice(2), n.isVoidTag = !0), !n.isVoidTag && _i[o]) {
                            var s = "</" + o + ">", c = e.indexOf(s), u = e.slice(0, c);
                            i += u + s, n.children.push({
                                "nodeName": "#text",
                                "nodeValue": u
                            }), "textarea" === o && (n.props.type = o, n.props.value = u);
                        }
                        return [ i, n ];
                    }
                }
            }
            function we(e) {
                var t = "";
                return e.children.forEach(function(e) {
                    "#text" === e.nodeName ? t += e.nodeValue : e.children && !Ai[e.nodeName] && (t += we(e));
                }), t;
            }
            function xe(e) {
                for (var t, n, r = "AttrName", i = "", o = "", a = {}, s = 0, c = e.length; s < c; s++) {
                    var u = e.charAt(s);
                    switch (r) {
                      case "AttrName":
                        if ("/" === u && ">" === e.charAt(s + 1) || ">" === u) return i && (a[i] = i), [ e.slice(0, s), a ];
                        if (Ci.test(u)) i && (r = "AttrEqual"); else if ("=" === u) {
                            if (!i) throw "必须指定属性名";
                            r = "AttrQuote";
                        } else i += u;
                        break;

                      case "AttrEqual":
                        "=" === u ? r = "AttrQuote" : ki.test(u) && (a[i] = i, i = u, r = "AttrName");
                        break;

                      case "AttrQuote":
                        '"' !== u && "'" !== u || (t = u, r = "AttrValue", n = !1);
                        break;

                      case "AttrValue":
                        if ("\\" === u && /"'/.test(e.charAt(s + 1)) && (n = !n), "\n" === u) break;
                        u !== t ? o += u : u !== t || n || (a[i] = o, i = o = "", r = "AttrName");
                    }
                }
                throw "必须关闭标签";
            }
            function _e(e, t) {
                e.setAttribute("avalon-events", t);
            }
            function Ae(e, t, n) {
                var r = e.getAttribute("avalon-events");
                if (r && (!0 !== e.disabled || "click" !== t)) {
                    var o = [], a = Vi[t] || (Vi[t] = new RegExp("\\b" + t + "\\:([^,\\s]+)", "g"));
                    r.replace(a, function(e, t) {
                        return o.push(t), e;
                    }), o.length && n.push({
                        "elem": e,
                        "uuids": o
                    });
                }
                e = e.parentNode;
                var s = i.gestureEvents || {};
                e && e.getAttribute && (Mi[t] || s[t]) && Ae(e, t, n);
            }
            function ke(e) {
                e = new Te(e);
                var t = e.type, n = e.target, r = [];
                Ae(n, t, r);
                for (var o, a, s, c = 0; (s = r[c++]) && !e.cancelBubble; ) {
                    e.currentTarget = s.elem;
                    for (o = 0; (a = s.uuids[o++]) && !e.stopImmediate; ) {
                        var u = i.eventListeners[a];
                        if (u) {
                            var l = Di.test(a) ? s.elem._ms_context_ : 0;
                            if (l && !1 === l.$hashcode) return i.unbind(n, t, u);
                            !1 === u.call(l || n, e) && (e.preventDefault(), e.stopPropagation());
                        }
                    }
                }
            }
            function Ce(e) {
                var t = Zn.getAttribute("delegate-events") || "";
                if (-1 === t.indexOf(e)) {
                    var n = t.match(i.rword) || [];
                    n.push(e), Zn.setAttribute("delegate-events", n.join(",")), i._nativeBind(Zn, e, ke, !!Li[e]);
                }
            }
            function Te(e) {
                if (e.originalEvent) return e;
                for (var t in e) Ii[t] || (this[t] = e[t]);
                this.target || (this.target = e.srcElement);
                this.target;
                this.fixEvent(), this.timeStamp = new Date() - 0, this.originalEvent = e;
            }
            function Ee(e) {
                for (i.isReady = !0; e = Hi.shift(); ) e(i);
            }
            function Ne(e, t, n) {
                switch (t) {
                  case "style":
                  case "script":
                  case "noscript":
                  case "template":
                  case "xmp":
                    e.children = [ {
                        "nodeName": "#text",
                        "nodeValue": n
                    } ];
                    break;

                  case "textarea":
                    var r = e.props;
                    r.type = t, r.value = n, e.children = [ {
                        "nodeName": "#text",
                        "nodeValue": n
                    } ];
                    break;

                  case "option":
                    e.children = [ {
                        "nodeName": "#text",
                        "nodeValue": $e(n)
                    } ];
                }
            }
            function $e(e) {
                return String(e).replace(Ui, "").trim();
            }
            function Se(e) {
                return [ Oe(e) ];
            }
            function Oe(e) {
                var t = e.nodeName.toLowerCase();
                switch (t) {
                  case "#text":
                  case "#comment":
                    return {
                        "nodeName": t,
                        "dom": e,
                        "nodeValue": e.nodeValue
                    };

                  default:
                    var n = Me(e, e.attributes || []), r = {
                        "nodeName": t,
                        "dom": e,
                        "isVoidTag": !!bi[t],
                        "props": n
                    };
                    if ("option" === t && (n.selected = e.selected), Bi[t] || "option" === t) Ne(r, t, e.text || e.innerHTML), 
                    1 === e.childNodes.length && (r.children[0].dom = e.firstChild); else if (!r.isVoidTag) {
                        r.children = [];
                        for (var i, o = 0; i = e.childNodes[o++]; ) {
                            var a = Oe(i);
                            /\S/.test(a.nodeValue) && r.children.push(a);
                        }
                    }
                    return r;
                }
            }
            function Me(e, t) {
                for (var n = {}, r = 0, i = t.length; r < i; r++) {
                    var o = t[r];
                    o.specified && (n[o.name.toLowerCase()] = o.value);
                }
                if (qi.test(e.nodeName)) {
                    n.type = e.type;
                    var a = e.getAttributeNode("value");
                    a && /\S/.test(a.value) && (n.value = a.value);
                }
                var s = e.style.cssText;
                return s && (n.style = s), "select-one" === n.type && (n.selectedIndex = e.selectedIndex), 
                n;
            }
            function je(e) {
                this.nodeName = "#text", this.nodeValue = e;
            }
            function Ve(e) {
                this.nodeName = "#comment", this.nodeValue = e;
            }
            function De(e, t, n, r) {
                this.nodeName = e, this.props = t, this.children = n, this.isVoidTag = r;
            }
            function Le(e, t, n) {
                switch (t) {
                  case "style":
                    e.setAttribute("type", "text/css"), e.styleSheet.cssText = n;
                    break;

                  case "xmp":
                  case "noscript":
                    e.textContent = n;
                }
            }
            function Ie(e) {
                return !1 !== e && Object(e) !== e;
            }
            function Pe(e) {
                return Xn.createElementNS("http://www.w3.org/2000/svg", e);
            }
            function Fe(e) {
                Xn.styleSheets.length < 31 ? Xn.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : Xn.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                var t = e.split(":");
                1 === t.length && t.unshift("v");
                var n = t[1], r = t[0];
                return Xn.namespaces[r] || Xn.namespaces.add(r, "urn:schemas-microsoft-com:vml"), 
                Xn.createElement("<" + r + ":" + n + ' class="rvml">');
            }
            function Re(e, t, n, r) {
                this.nodeName = "#document-fragment", this.children = e, this.key = t, this.val = n, 
                this.index = r, this.props = {};
            }
            function He() {
                if (!(!0 === i.isRunningActions || i.inTransaction > 0)) {
                    i.isRunningActions = !0;
                    for (var e, t = i.pendingActions.splice(0, i.pendingActions.length), n = 0; e = t[n++]; ) e.update(), 
                    delete i.uniqActions[e.uuid];
                    i.isRunningActions = !1;
                }
            }
            function Be(e) {
                for (var t, n = e.observers, r = 0; t = n[r++]; ) t.schedule();
            }
            function Ue(e) {
                var t = i.trackingAction || null;
                null !== t && (i.track("征收到", e.expr), t.mapIDs[e.uuid] = e);
            }
            function qe(e, t) {
                if (e.observers) {
                    var n = i.trackingAction;
                    n && Ki.push(n), i.trackingAction = e, i.track("【action】", e.type, e.expr, "开始征收依赖项"), 
                    e.mapIDs = {};
                    var r, o = !0;
                    try {
                        r = t.call(e), o = !1;
                    } finally {
                        if (o) i.warn("collectDeps fail", t + ""), e.mapIDs = {}, i.trackingAction = n; else {
                            i.trackingAction = Ki.pop();
                            try {
                                ze(e);
                            } catch (a) {
                                i.warn(a);
                            }
                        }
                        return r;
                    }
                }
            }
            function ze(e) {
                var t = e.observers, n = [], r = {}, o = [];
                for (var a in e.mapIDs) {
                    var s = e.mapIDs[a];
                    if (!s.isAction) {
                        if (!s.observers) {
                            delete e.mapIDs[a];
                            continue;
                        }
                        if (o.push(s.uuid), n.push(s), r[s.uuid] = 1, s.lastAccessedBy === e.uuid) continue;
                        s.lastAccessedBy = e.uuid, i.Array.ensure(s.observers, e);
                    }
                }
                var o = o.sort().join(",");
                if (o !== e.ids) {
                    if (e.ids = o, e.isComputed) {
                        e.depsCount = n.length, e.deps = i.mix({}, e.mapIDs), e.depsVersion = {};
                        for (var c in e.mapIDs) {
                            var u = e.mapIDs[c];
                            e.depsVersion[u.uuid] = u.version;
                        }
                    } else e.observers = n;
                    for (var l, f = 0; l = t[f++]; ) r[l.uuid] || i.Array.remove(l.observers, e);
                }
            }
            function We(e, t, n) {
                n = n || [];
                var r = "transaction " + (e.name || e.displayName || "noop");
                Ye(r);
                var i = e.apply(t, n);
                return Je(r), i;
            }
            function Ye(e) {
                i.inTransaction += 1;
            }
            function Je(e) {
                0 == --i.inTransaction && (i.isRunningActions = !1, He());
            }
            function Ge(e) {
                var t = "??" + Xi++;
                return Zi.map[t] = e, t + " ";
            }
            function Ke(e) {
                return Zi.map[e];
            }
            function Xe(e) {
                for (var t = Ze(e), n = 0, r = t.length; n < r; n++) e = e.replace(t[n], Ge);
                return e;
            }
            function Ze(e, t, n) {
                var r = !1, i = 0, t = t || 0;
                n = n || [];
                for (var o = e.length; t < o; t++) {
                    var a = e.charAt(t);
                    r ? a === r && (n.push(e.slice(i, t + 1)), r = !1) : "'" === a ? (r = "'", i = t) : '"' === a && (r = '"', 
                    i = t);
                }
                return !1 !== r ? Ze(e, i + 1, n) : n;
            }
            function Qe(e) {
                return e.replace(co, Ge).replace(fo, function(e) {
                    return to[e] ? e : "__vmodel__." + e;
                });
            }
            function et(e, t) {
                var n = e + ":" + t, r = ho.get(n);
                if (r) return r.slice(0);
                Zi.map = {};
                var o = e.replace(so, function(e, t) {
                    return t + Ge(e.slice(t.length));
                });
                o = Xe(o), o = o.replace(io, Ge).replace(ro, "$1").replace(uo, function(e, t, n) {
                    return t + Ge(n) + ":";
                }).replace(no, "$1__vmodel__.").replace(lo, function(e, t) {
                    return "|" + Ge(t);
                }), o = Qe(o);
                var a = o.split(ao), s = a.shift().replace(Qi, Ke).trim();
                return /\?\?\d/.test(s) && (s = s.replace(Qi, Ke)), a.length ? (a = a.map(function(e) {
                    var t = "";
                    return e = e.replace(oo, function(e, n) {
                        return /\S/.test(n) && (t += "," + n), "";
                    }), "[" + i.quote(e.trim()) + t + "]";
                }), a = "avalon.composeFilters(" + a + ")(__value__)", a = a.replace(Qi, Ke)) : a = "", 
                ho.put(n, [ s, a ]);
            }
            function tt(e) {
                return po.test(e) && (e += "($event)"), er < 9 && (e = e.replace(vo, function(e, t, n) {
                    return "__vmodel__." + t + ".call(__vmodel__" + (/\S/.test(n) ? "," + n : "") + ")";
                })), e;
            }
            function nt(e, t) {
                var n, r = et(e, t);
                n = r[1] ? r[1].replace(/__value__\)$/, r[0] + ")") : r[0];
                try {
                    return new Function("__vmodel__", "return " + n + ";");
                } catch (o) {
                    return i.log("parse getter: [", e, n, "]error"), i.noop;
                }
            }
            function rt(e, t) {
                var n = et(e, t), r = "try{ " + n[0] + ' = __value__}catch(e){avalon.log(e, "in on dir")}';
                try {
                    return new Function("__vmodel__", "__value__", r + ";");
                } catch (o) {
                    return i.log("parse setter: ", e, " error"), i.noop;
                }
            }
            function it(e, t, n) {
                for (var r in t) 1 !== go[r] && (this[r] = t[r]);
                this.vm = e, this.observers = [], this.callback = n, this.uuid = ++mo, this.ids = "", 
                this.mapIDs = {}, this.isAction = !0;
                var i = this.expr;
                "function" != typeof this.getter && (this.getter = nt(i, this.type)), "duplex" === this.type && (this.setter = rt(i, this.type)), 
                this.value = NaN, this.node || (this.value = this.get());
            }
            function ot(e) {
                if (e && "object" == typeof e) {
                    if (e && e.$events) return e.$model;
                    if (Array.isArray(e)) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) t.push(ot(e[n]));
                        return t;
                    }
                    var i = {};
                    for (var o in e) i[o] = ot(e[o]);
                    return i;
                }
                return e;
            }
            function at(e, t, n) {
                if (this.expr = e, t) {
                    var r = sr.createProxy(t, this);
                    r && (t = r);
                }
                this.value = t, this.vm = n;
                try {
                    n.$mutations[e] = this;
                } catch (i) {}
                this.uuid = ++yo, this.updateVersion(), this.mapIDs = {}, this.observers = [];
            }
            function st(e) {
                var t = e.toString();
                return t.substring(t.indexOf("{}") + 1, t.lastIndexOf("}"));
            }
            function ct(e) {
                var t = function() {};
                return t.prototype = e, new t();
            }
            function ut(e, t) {
                if ("function" == typeof t) {
                    (e.prototype = ct(t.prototype)).constructor = e;
                }
            }
            function lt(e, t) {
                i.mix(this, e), i.mix(this, Jr), this.$hashcode = i.makeHashCode("$"), this.$id = this.$id || this.$hashcode, 
                this.$events = {
                    "__dep__": t || new at(this.$id)
                }, i.config.inProxyMode ? (delete this.$mutations, this.$accessors = {}, this.$computed = {}, 
                this.$track = "") : this.$accessors = {
                    "$model": _o
                }, void 0 === t ? (this.$watch = sr.watchFactory(this.$events), this.$fire = sr.fireFactory(this.$events)) : (delete this.$watch, 
                delete this.$fire);
            }
            function ft(e, t, n) {
                return !(e in Jr) && ("$" === e.charAt(0) ? !!n && (xo[e] || (xo[e] = 1, i.warn("ms-for中的变量" + e + "不再建议以$为前缀")), 
                !0) : null == t ? (i.warn("定义vmodel时" + e + "的属性值不能为null undefine"), !0) : !/error|date|function|regexp/.test(i.type(t)) && !(t && t.nodeName && t.nodeType));
            }
            function dt(e, t) {
                if (e && e.$events) return e;
                var n;
                return Array.isArray(e) ? n = sr.listFactory(e, !1, t) : d(e) && (n = sr.modelFactory(e, t)), 
                n;
            }
            function ht(e, t, n) {
                var r = null, i = n ? wo : at;
                return {
                    "get": function() {
                        return r || (r = new i(e, t, this)), r.get();
                    },
                    "set": function(n) {
                        r || (r = new i(e, t, this)), r.set(n);
                    },
                    "enumerable": !0,
                    "configurable": !0
                };
            }
            function pt(e) {
                var t = i.type(e);
                if ("array" === t) {
                    for (var n = [], r = 0; r < e.length; r++) n[r] = pt(e[r]);
                    return n;
                }
                if ("object" === t && "string" == typeof e.$track) {
                    var o = {};
                    return (e.$track.match(/[^☥]+/g) || []).forEach(function(t) {
                        var n = e[t];
                        o[t] = n && n.$events ? pt(n) : n;
                    }), o;
                }
                return e;
            }
            function vt(e) {
                for (var t in ko) sr.hideProperty(e, t, ko[t]);
            }
            function mt(e, t, n) {
                t || (vt(e), tr && Object.defineProperty(e, "$model", sr.modelAccessor), sr.hideProperty(e, "$hashcode", i.makeHashCode("$")), 
                sr.hideProperty(e, "$events", {
                    "__dep__": n || new at()
                }));
                for (var r = e.$events && e.$events.__dep__, o = 0, a = e.length; o < a; o++) {
                    var s = e[o];
                    d(s) && (e[o] = sr.createProxy(s, r));
                }
                return e;
            }
            function gt(e, t, n) {
                Co ? Object.defineProperty(e, t, {
                    "value": n,
                    "writable": !0,
                    "enumerable": !1,
                    "configurable": !0
                }) : To[t] || (e[t] = n);
            }
            function yt(e) {
                return function(t, n, r) {
                    var o = new it(e.__proxy__, {
                        "deep": r,
                        "type": "user",
                        "expr": t
                    }, n);
                    return e[t] ? e[t].push(o) : e[t] = [ o ], function() {
                        o.dispose(), i.Array.remove(e[t], o), 0 === e[t].length && delete e[t];
                    };
                };
            }
            function bt(e) {
                return function(t, n) {
                    var r = e[t];
                    if (Array.isArray(r)) for (var i, o = 0; i = r[o++]; ) i.callback.call(i.vm, n, i.value, i.expr);
                };
            }
            function wt(e) {
                return "☥" + e + "☥";
            }
            function xt(e, t, n, r) {
                function o(t) {
                    return wt(e.$track).indexOf(wt(t)) > -1;
                }
                var a = e.$accessors;
                for (var s in Jr) i.msie < 9 && void 0 === t[s] || gt(e, s, t[s]);
                for (var c = 0; c < n.length; c++) {
                    var u = n[c];
                    if (!(u in a)) {
                        var l = t[u];
                        if (r && "function" == typeof l) {
                            e[u] = l.bind(e), e[u]._orig = l;
                            continue;
                        }
                        e[u] = l;
                    }
                }
                e.$track = n.join("☥"), i.msie < 9 && (e.hasOwnProperty = o), e.$events.__proxy__ = e;
            }
            function _t(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t;
            }
            function At(e, t, n) {
                if (0 === n) return e === t;
                if (null === e && null === t) return !0;
                if (void 0 === e && void 0 === t) return !0;
                var r = Array.isArray(e);
                return r === Array.isArray(t) && (r ? kt(e, t, n) : "object" == typeof e && "object" == typeof t ? Ct(e, t, n) : e === t);
            }
            function kt(e, t, n) {
                if (e.length !== t.length) return !1;
                for (var r = e.length - 1; r >= 0; r--) try {
                    if (!At(e[r], t[r], n - 1)) return !1;
                } catch (i) {
                    return !1;
                }
                return !0;
            }
            function Ct(e, t, n) {
                if (null === e || null === t) return !1;
                if (_t(e).length !== _t(t).length) return !1;
                for (var r in e) {
                    if (!(r in t)) return !1;
                    try {
                        if (!At(e[r], t[r], n - 1)) return !1;
                    } catch (i) {
                        return !1;
                    }
                }
                return !0;
            }
            function Tt() {
                var e = Wo[0];
                e && e();
            }
            function Et(e, t, n) {
                e[t] || (e[t] = n);
            }
            function Nt(e, t, n) {
                for (var r, i = [].concat(e[t]), o = 0; r = i[o++]; ) "function" == typeof r && r(n);
            }
            function $t(e) {
                var t = e.toLowerCase();
                return function(n) {
                    var r = this.dom, o = i(r), a = isFinite(n.stagger) ? 1e3 * n.stagger : 0;
                    if (a && n.staggerKey) {
                        var s = Jo.get(n.staggerKey) || Jo.put(n.staggerKey, {
                            "count": 0,
                            "items": 0
                        });
                        s.count++, s.items++;
                    }
                    var c, u = s && s.count || 0, l = function(t) {
                        var o = !1 !== t;
                        0 == --r.__ms_effect_ && (i.unbind(r, Uo), i.unbind(r, Bo)), clearTimeout(c), Nt(n, "on" + e + (o ? "Done" : "Abort"), r), 
                        s && 0 == --s.items && (s.count = 0), n.queue && (Wo.shift(), Tt());
                    };
                    Nt(n, "onBefore" + e, r), n[t] ? n[t](r, function(e) {
                        l(!1 !== e);
                    }) : Po && (o.addClass(n[t + "Class"]), o.removeClass(Ot(n, t)), r.__ms_effect_ ? r.__ms_effect_++ : (o.bind(Uo, l), 
                    o.bind(Bo, l), r.__ms_effect_ = 1), setTimeout(function() {
                        var e = NaN === i.root.offsetWidth;
                        o.addClass(n[t + "ActiveClass"]), e = jt(r), 0 === !e ? l(!1) : a || (c = setTimeout(function() {
                            l(!1);
                        }, e + 32));
                    }, 17 + a * u));
                };
            }
            function St(e) {
                if (!e.action) return e.action = e.hook.replace(/^on/, "").replace(/Done$/, "").toLowerCase();
            }
            function Ot(e, t) {
                var t = "leave" === t ? "enter" : "leave";
                return Array(t + "Class", t + "ActiveClass").map(function(t) {
                    return e[t];
                }).join(" ");
            }
            function Mt(e) {
                var t = Xo.test(e) ? 1e3 : 1;
                return parseFloat(e) * t;
            }
            function jt(e) {
                var t = ir.getComputedStyle(e, null), n = t[Go], r = t[Ko];
                return Mt(n) || Mt(r);
            }
            function Vt(e, t) {
                var n = e.ownerDocument, r = e.nodeName, o = "_" + r;
                if (!Vt[o]) {
                    var a = n.body.appendChild(n.createElement(r));
                    t = i.css(a, "display"), n.body.removeChild(a), t === Zo && (t = "block"), Vt[o] = t;
                }
                return Vt[o];
            }
            function Dt(e, t) {
                var n = e.innerRender = i.scan(e.fragment, e.vm);
                i.shadowCopy(t, n.root), delete t.nodeValue;
            }
            function Lt(e, t) {
                e.children && e.children.forEach(function(e) {
                    "option" === e.nodeName ? It(e, t) : Lt(e, t);
                });
            }
            function It(e, t) {
                var n = e.props;
                if (!("disabled" in n)) {
                    var r = Pt(e, n);
                    if (r = String(r || "").trim(), n.selected = "string" == typeof t ? r === t : -1 !== t.indexOf(r), 
                    e.dom) {
                        e.dom.selected = n.selected;
                        e.dom.selected;
                    }
                }
            }
            function Pt(e, t) {
                if (t && "value" in t) return t.value + "";
                var n = [];
                return e.children.forEach(function(e) {
                    "#text" === e.nodeName ? n.push(e.nodeValue) : "#document-fragment" === e.nodeName && n.push(Pt(e));
                }), n.join("");
            }
            function Ft(e, t) {
                return e.children.forEach(function(e) {
                    "option" === e.nodeName ? !0 === e.props.selected && t.push(Pt(e, e.props)) : e.children && Ft(e, t);
                }), t;
            }
            function Rt(e) {
                e.userCb && e.userCb.call(e.vm, {
                    "type": "changed",
                    "target": e.dom
                });
            }
            function Ht(e) {
                var t = this, n = t._ms_duplex_;
                if (!t.composing && t.value !== n.value) {
                    if (t.caret) try {
                        var r = n.getCaret(t);
                        n.pos = r;
                    } catch (a) {}
                    if (n.debounceTime > 4) {
                        var i = new Date(), o = i - n.time || 0;
                        n.time = i, o >= n.debounceTime ? Qo[n.dtype].call(n) : (clearTimeout(n.debounceID), 
                        n.debounceID = setTimeout(function() {
                            Qo[n.dtype].call(n);
                        }, o));
                    } else n.isChanged ? setTimeout(function() {
                        Qo[n.dtype].call(n);
                    }, 4) : Qo[n.dtype].call(n);
                }
            }
            function Bt() {
                var e = this.expr;
                ea.test(e) && (this.isChanged = !0, e = e.replace(ea, ""));
                var t = e.match(ta);
                t && (e = e.replace(ta, ""), this.isChanged || (this.debounceTime = parseInt(t[1], 10) || 300)), 
                this.expr = e;
            }
            function Ut() {
                var e = (this.expr, this.node), t = e.props.type;
                this.parseValue = Wt;
                var n, r = this.param, i = !1;
                r = r ? r.split("-").map(function(e) {
                    return "checked" === e && (i = !0), e;
                }) : [], e.duplex = this, Qr.test(t) && i && (r = [], n = "radio", this.isChecked = i), 
                this.parsers = r, /input|textarea|select/.test(e.nodeName) ? n || (n = "select" === e.nodeName ? "select" : "checkbox" === t ? "checkbox" : "radio" === t ? "radio" : "input") : "contenteditable" in e.props && (n = "contenteditable"), 
                this.dtype = n, "input" !== n && "contenteditable" !== n ? (delete this.isChanged, 
                delete this.debounceTime) : this.isChecked || (this.isString = !0);
                var o = e.props["data-duplex-changed"];
                if (o) {
                    var a = et(o, "xx"), s = tt(a[0]);
                    this.userCb = new Function("$event", "var __vmodel__ = this\nreturn " + s);
                }
            }
            function qt(e, t) {
                if (Array.isArray(e)) {
                    if (e + "" !== this.compareVal) return this.compareVal = e + "", !0;
                } else if (e = this.parseValue(e), this.isChecked || (this.value = e += ""), e !== this.compareVal) return this.compareVal = e, 
                !0;
            }
            function zt(e, t) {
                var n = e.dom;
                this.dom = n, this.vdom = e, this.duplexCb = Ht, n._ms_duplex_ = this, t(n, this);
            }
            function Wt(e) {
                for (var t, n = 0; t = this.parsers[n++]; ) {
                    var r = i.parsers[t];
                    r && (e = r.call(this, e));
                }
                return e;
            }
            function Yt(e) {
                var t = typeof e;
                return e && "object" === t ? e.$hashcode : t + ":" + e;
            }
            function Jt(e, t) {
                if (d(t)) {
                    var n = Array.isArray(t), r = [], o = [], a = 0;
                    return e.isArray = n, e.fragments ? (e.preFragments = e.fragments, i.each(t, function(e, t) {
                        var i = n ? Yt(t) : e;
                        o.push({
                            "key": i,
                            "val": t,
                            "index": a++
                        }), r.push(i);
                    }), e.fragments = o) : (i.each(t, function(e, t) {
                        if (!(e in Jr)) {
                            var i = n ? Yt(t) : e;
                            o.push(new Re([], i, t, a++)), r.push(i);
                        }
                    }), e.fragments = o), r.join(";;");
                }
                return NaN;
            }
            function Gt(e) {
                var t = e.fragments.map(function(t, n) {
                    return Qt(t, e, n), tn(e.cache, t), t;
                }), n = e.parentChildren, r = n.indexOf(e.begin);
                n.splice.apply(n, [ r + 1, 0 ].concat(t));
            }
            function Kt(e) {
                var t = e.cache, n = {}, r = [], i = e.preFragments;
                i.forEach(function(e) {
                    e._dispose = !0;
                }), e.fragments.forEach(function(i, o) {
                    var a = en(t, i.key);
                    a ? (delete a._dispose, a.oldIndex = a.index, a.index = o, Xt(a.vm, e.keyName), 
                    a.vm[e.valName] = i.val, a.vm[e.keyName] = e.isArray ? o : a.key, tn(n, a)) : r.push(i);
                }), r.forEach(function(r) {
                    var o = nn(t, r.key);
                    if (o) {
                        o.oldIndex = o.index, o.key = r.key;
                        var a = o.val = r.val, s = o.index = r.index;
                        o.vm[e.valName] = a, o.vm[e.keyName] = e.isArray ? s : o.key, delete o._dispose;
                    } else r = new Re([], r.key, r.val, r.index), o = Qt(r, e, r.index), i.push(o);
                    tn(n, o);
                }), e.fragments = i, i.sort(function(e, t) {
                    return e.index - t.index;
                }), e.cache = n;
            }
            function Xt(e, t, n) {
                i.config.inProxyMode ? e.$accessors[t].value = NaN : e.$accessors[t].set(NaN);
            }
            function Zt(e) {
                for (var t, n = e.begin.dom, r = n.parentNode, i = e.fragments, o = e.end.dom, a = 0; t = i[a]; a++) if (t._dispose) i.splice(a, 1), 
                a--, t.dispose(); else {
                    if (t.oldIndex !== t.index) {
                        var s = t.toFragment(), c = null === n.nextSibling;
                        r.insertBefore(s, n.nextSibling), c && !r.contains(o) && r.insertBefore(o, n.nextSibling);
                    }
                    n = t.split;
                }
                var u = e.parentChildren, l = u.indexOf(e.begin), f = u.indexOf(e.end);
                i.splice.apply(u, [ l + 1, f - l ].concat(i)), "SELECT" === r.nodeName && r._ms_duplex_ && ca["select"].call(r._ms_duplex_);
            }
            function Qt(e, t, n) {
                var r = {};
                r[t.keyName] = t.isArray ? n : e.key, r[t.valName] = e.val, t.asName && (r[t.asName] = t.value);
                var o = e.vm = sr.itemFactory(t.vm, {
                    "data": r
                });
                return t.isArray ? o.$watch(t.valName, function(e) {
                    t.value && t.value.set && t.value.set(o[t.keyName], e);
                }) : o.$watch(t.valName, function(n) {
                    t.value[e.key] = n;
                }), e.index = n, e.innerRender = i.scan(t.fragment, o, function() {
                    var t = this.root;
                    fr.push.apply(e.children, t.children), this.root = e;
                }), e;
            }
            function en(e, t) {
                var n = e[t];
                if (n) {
                    var r = n.arr;
                    if (r) {
                        var i = r.pop();
                        return r.length || (n.arr = 0), i;
                    }
                    return delete e[t], n;
                }
            }
            function tn(e, t) {
                var n = t.key;
                if (e[n]) {
                    var r = e[n];
                    (r.arr || (r.arr = [])).push(t);
                } else e[n] = t;
            }
            function nn(e) {
                var t;
                for (var n in e) {
                    var t = n;
                    break;
                }
                if (t) return en(e, t);
            }
            function rn() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t], r = typeof n;
                    if ("string" === r || "number" === r || !0 === n) e.push(n); else if (Array.isArray(n)) e.push(rn.apply(null, n)); else if ("object" === r) for (var i in n) n.hasOwnProperty(i) && n[i] && e.push(i);
                }
                return e.join(" ");
            }
            function on(e) {
                var t = e.target;
                i(t).addClass(t.getAttribute(ha[e.type]) || "");
            }
            function an(e) {
                var t = e.target, n = ha[e.type];
                i(t).removeClass(t.getAttribute(n) || ""), "change-active" !== n && i(t).removeClass(t.getAttribute("change-active") || "");
            }
            function sn(e, t) {
                var n = e.getAttribute("change-class");
                n !== t && (i(e).removeClass(n).addClass(t), e.setAttribute("change-class", t));
            }
            function cn(e, t) {
                var n = {};
                switch (t.dtype) {
                  case "radio":
                  case "checkbox":
                    n.click = Ht;
                    break;

                  case "select":
                    n.change = Ht;
                    break;

                  case "contenteditable":
                    t.isChanged ? n.blur = Ht : i.modern ? (ir.webkitURL ? n.webkitEditableContentChanged = Ht : ir.MutationEvent && (n.DOMCharacterDataModified = Ht), 
                    n.input = Ht) : (n.keydown = vn, n.paste = ln, n.cut = ln, n.focus = pn, n.blur = hn);
                    break;

                  case "input":
                    t.isChanged ? n.change = Ht : er < 10 ? (n.propertychange = un, n.paste = ln, n.cut = ln, 
                    n.keyup = vn) : (n.input = Ht, n.compositionstart = hn, n.compositionend = pn, /\[native code\]/.test(ir.Int8Array) || (n.keydown = vn, 
                    n.paste = ln, n.cut = ln, ir.netscape && (n.DOMAutoComplete = Ht)));
                }
                /password|text/.test(e.type) && (n.focus = fn, n.blur = dn, t.getCaret = gn, t.setCaret = mn);
                for (var r in n) i.bind(e, r, n[r]);
            }
            function un(e) {
                "value" === e.propertyName && Ht.call(this, e);
            }
            function ln(e) {
                var t = this;
                setTimeout(function() {
                    Ht.call(t, e);
                }, 0);
            }
            function fn() {
                this.caret = !0;
            }
            function dn() {
                this.caret = !1;
            }
            function hn() {
                this.composing = !0;
            }
            function pn(e) {
                this.composing = !1, ln.call(this, e);
            }
            function vn(e) {
                var t = e.keyCode;
                91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || Ht.call(this, e);
            }
            function mn(e, t) {
                var n;
                e.createTextRange ? pa(function() {
                    e.focus(), n = e.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), 
                    n.select();
                }) : (e.focus(), void 0 !== e.selectionStart && e.setSelectionRange(t, t));
            }
            function gn(e) {
                var t, n, r, i, o, a = 0;
                return e.selectionStart + e.selectionEnd > -1 ? a = e.selectionStart : (n = Xn.selection.createRange()) && n.parentElement() === e && (i = e.value.length, 
                t = e.value.replace(/\r\n/g, "\n"), r = e.createTextRange(), r.moveToBookmark(n.getBookmark()), 
                o = e.createTextRange(), o.collapse(!1), r.compareEndPoints("StartToEnd", o) > -1 ? a = i : (a = -r.moveStart("character", -i), 
                a += t.slice(0, a).split("\n").length - 1)), a;
            }
            function yn(e, t) {
                var n = this.dom;
                if (this.isString && t && !e && !n.valueHijack) {
                    n.valueHijack = Ht;
                    var r = setInterval(function() {
                        i.contains(i.root, n) ? n.valueHijack({
                            "type": "poll"
                        }) : clearInterval(r);
                    }, 30);
                    return r;
                }
            }
            function bn(e) {
                return "regexp" === i.type(e);
            }
            function wn(e) {
                if ("string" == typeof e && e) {
                    var t = e.split("-");
                    if (3 === t.length && 4 === t[0].length) {
                        var n = ~~t[0], r = ~~t[1] - 1, i = ~~t[2], o = new Date(n, r, i);
                        return o.getFullYear() === n && o.getMonth() === r && o.getDate() === i;
                    }
                }
                return !1;
            }
            function xn(e) {
                for (;"FORM" !== e.tagName; ) e = e.parentNode;
                return e._ms_validate_;
            }
            function _n(e) {
                e.preventDefault();
                var t = xn(e.target);
                t && t.onManual && t.onManual();
            }
            function An(e, t, n) {
                for (var r, i = 0; r = e[i++]; ) {
                    var o = r.rules && r.duplex;
                    o ? (t.push(o), Tn(o, n)) : r.children ? An(r.children, t, n) : Array.isArray(r) && An(r, t, n);
                }
            }
            function kn(e) {
                var t = e.target, n = t._ms_duplex_, r = (n || {}).vdom;
                if (n && r.rules && !n.validator) {
                    var o = xn(t);
                    o && i.Array.ensure(o.fields, n) && Tn(n, o);
                }
            }
            function Cn(e) {
                var t = e.target, n = t._ms_duplex_, r = xn(e.target);
                r && r.validate(n, 0, e);
            }
            function Tn(e, t) {
                var n = e.dom;
                e.validator || (e.validator = t, !t.validateInKeyup || e.isChanged || e.debounceTime || i.bind(n, "keyup", Cn), 
                t.validateInBlur && i.bind(n, "blur", Cn), t.resetInFocus && i.bind(n, "focus", function(e) {
                    var t = e.target, n = t._ms_duplex_, r = xn(e.target);
                    r && r.onReset.call(t, e, n);
                }));
            }
            function En() {
                var e = this.data || {};
                return this.message.replace(ba, function(t, n) {
                    return null == e[n] ? "" : e[n];
                });
            }
            function Nn(e, t, n, r) {
                var o = t.type, a = i.directives[o];
                if (Kn) {
                    var s = i.vdom(n, "toDOM");
                    1 === s.nodeType && s.removeAttribute(t.attrName), n.dom = s;
                }
                var c = a.update ? function(e) {
                    !r.mount && /css|visible|duplex/.test(o) ? r.callbacks.push(function() {
                        a.update.call(l, l.node, e);
                    }) : a.update.call(l, l.node, e);
                } : i.noop;
                for (var u in a) t[u] = a[u];
                t.node = n;
                var l = new it(e, t, c);
                return l.init && l.init(), l.update(), l;
            }
            function $n(e, t) {
                var n = t[0], r = {}, o = [], a = !1;
                for (var s in e) {
                    var c = e[s], u = s.split("-");
                    if (s in n.props) var l = s; else l = ":" + s.slice(3);
                    wa[u[1]] && u.splice(1, 0, "on"), "on" === u[1] && (u[3] = parseFloat(u[3]) || 0);
                    var f = u[1];
                    if ("controller" !== f && "important" !== f && rr[f]) {
                        var d = {
                            "type": f,
                            "param": u[2],
                            "attrName": l,
                            "name": u.join("-"),
                            "expr": c,
                            "priority": rr[f].priority || 100 * f.charCodeAt(0)
                        };
                        if ("if" === f && (a = !0), "on" === f && (d.priority += u[3]), !r[d.name] && (r[d.name] = c, 
                        o.push(d), "for" === f)) return [ i.mix(d, t[3]) ];
                    }
                }
                if (o.sort(Sn), a) for (var h, p = [], v = 0; h = o[v++]; ) if (p.push(h), "if" === h.type) return p;
                return o;
            }
            function Sn(e, t) {
                return e.priority - t.priority;
            }
            function On(e) {
                var t = /\n\r?/g, n = e.nodeValue.trim().replace(t, ""), r = [];
                do {
                    var o = n.indexOf(_.openTag);
                    o = -1 === o ? n.length : o;
                    var a = n.slice(0, o);
                    if (/\S/.test(a) && r.push(i.quote(i._decode(a))), n = n.slice(o + _.openTag.length)) {
                        o = n.indexOf(_.closeTag);
                        var a = n.slice(0, o), s = i.unescapeHTML(a);
                        if (/\|\s*\w/.test(s)) {
                            var c = et(s, "expr");
                            c[1] && (s = c[1].replace(_a, c[0] + ")"));
                        }
                        xa && (s = "(" + s + ")"), r.push(s), n = n.slice(o + _.closeTag.length);
                    }
                } while (n.length);
                return [ {
                    "expr": r.join("+"),
                    "name": "expr",
                    "type": "expr"
                } ];
            }
            function Mn(e) {
                for (var t, n = 0, r = 0; t = e[r++]; ) "#document-fragment" === t.nodeName ? n += Mn(t.children) : n += 1;
                return n;
            }
            function jn(e, t) {
                t && t.forEach(function(t) {
                    if (t) {
                        var n = t.children && Mn(t.children);
                        if ("#document-fragment" === t.nodeName) var r = x(); else {
                            r = i.vdom(t, "toDOM");
                            var o = r.childNodes && r.childNodes.length;
                            o && n && o > n && (Aa[r.nodeName] || i.clearHTML(r));
                        }
                        if (n && (jn(r, t.children), "select" === t.nodeName)) {
                            var a = [];
                            Ft(t, a), Lt(t, a);
                        }
                        try {
                            Aa[e.nodeName] || e.appendChild(r);
                        } catch (s) {}
                    }
                });
            }
            function Vn(e) {
                for (var t; t = e.firstChild; ) 1 === t.nodeType && Vn(t), e.removeChild(t);
            }
            function Dn(e, t) {
                var n, r = e.indexOf(t) + 1, i = 1, o = [];
                for (o.start = r; t = e[r++]; ) if (o.push(t), "#comment" === t.nodeName) if (Ln(t.nodeValue, "ms-for:")) i++; else if ("ms-for-end:" === t.nodeValue && 0 === --i) {
                    n = t, o.pop();
                    break;
                }
                return o.end = n, o;
            }
            function Ln(e, t) {
                return 0 === e.indexOf(t);
            }
            function In(e, t, n) {
                this.root = e, this.vm = t, this.beforeReady = n, this.bindings = [], this.callbacks = [], 
                this.directives = [], this.init();
            }
            function Pn() {
                var e = this.beforeUpdate(), t = this.value = this.get();
                if (this.callback && this.diff(t, e)) {
                    this.callback(this.node, this.value);
                    var n = this.vm, r = n.$render, o = n.$events["onViewChange"];
                    o && r && r.root && !i.viewChanging && (ka && (clearTimeout(ka), ka = null), ka = setTimeout(function() {
                        o.forEach(function(e) {
                            e.callback.call(n, {
                                "type": "viewchange",
                                "target": r.root,
                                "vmodel": n
                            });
                        });
                    }));
                }
                this._isScheduled = !1;
            }
            function Fn(e) {
                var e = sr.toJson(e);
                if (Array.isArray(e)) {
                    var t = {};
                    return e.forEach(function(e) {
                        e && i.shadowCopy(t, e);
                    }), t;
                }
                return e;
            }
            function Rn(e, t) {
                e.innerRender = t;
                var n = t.root, r = e.node, i = r.props.slot;
                for (var o in n) r[o] = n[o];
                r.props && i && (r.props.slot = i), t.root = r, t.vnodes[0] = r;
            }
            function Hn(e, t, n) {
                var r = e.$events["on" + n];
                r && r.forEach(function(r) {
                    setTimeout(function() {
                        r.callback.call(e, {
                            "type": n.toLowerCase(),
                            "target": t.dom,
                            "vmodel": e
                        });
                    }, 0);
                });
            }
            function Bn(e, t, n) {
                var r = [], o = e.defaults;
                Un(o, r), Un(t, r);
                var a = {};
                for (var s in o) {
                    var c = t[s];
                    a[s] = null == c ? o[s] : c;
                }
                a.$id = t.id || t.$id || i.makeHashCode(n), delete a.id;
                var u = i.mix(!0, {}, a), l = i.define(u);
                return r.forEach(function(e) {
                    l.$watch(e.type, e.cb);
                }), l;
            }
            function Un(e, t) {
                for (var n in e) Ca[n] && "function" == typeof e[n] && 0 === n.indexOf("on") && t.unshift({
                    "type": n,
                    "cb": e[n]
                });
            }
            function qn(e, t) {
                var n = t && t[0] && t[0].forDir;
                n && (n.parentChildren = e);
            }
            function zn(e, t) {
                for (var n, r = 0; n = e[r]; r++) {
                    if ("slot" === n.nodeName) {
                        qn(e, t), e.splice.apply(e, [ r, 1 ].concat(t));
                        break;
                    }
                    n.children && zn(n.children, t);
                }
            }
            function Wn(e, t) {
                for (var n, r = 0; n = e[r]; r++) if ("slot" !== n.nodeName) n.children && Wn(n.children, t); else {
                    var i = n.props.name;
                    qn(e, t[i]), e.splice.apply(e, [ r, 1 ].concat(t[i]));
                }
            }
            function Yn(e, t) {
                i.components[e] = t;
                for (var n, r = 0; n = Ta[r]; r++) n.is === e && (Ta.splice(r, 1), n.reInit = !0, 
                delete n.value, n.update(), r--);
                return t;
            }
            function Jn(e) {
                var t = e.displayName;
                delete e.displayName;
                var n = {
                    "defaults": i.mix(!0, {}, this.defaults, e.defaults)
                };
                return e.soleSlot && (n.soleSlot = e.soleSlot), n.template = e.template || this.template, 
                i.component(t, n);
            }
            var Gn = "object" == typeof window ? window : "object" == typeof t ? t : {}, Kn = !!Gn.location && Gn.navigator, Xn = Kn ? Gn.document : {
                "createElement": Object,
                "createElementNS": Object,
                "documentElement": "xx",
                "contains": Boolean
            }, Zn = Kn ? Xn.documentElement : {
                "outerHTML": "x"
            }, Qn = {
                "objectobject": 7,
                "objectundefined": 6,
                "undefinedfunction": NaN,
                "undefinedobject": NaN
            }, er = Xn.documentMode || Qn[typeof Xn.all + typeof XMLHttpRequest], tr = /NaN|undefined/.test(er) || er > 8;
            e.prototype = {
                "put": function(e, t) {
                    var n = {
                        "key": e,
                        "value": t
                    };
                    return this._keymap[e] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, 
                    this.tail = n, this.size === this.limit ? this.shift() : this.size++, t;
                },
                "shift": function() {
                    var e = this.head;
                    e && (this.head = this.head.newer, this.head.older = e.newer = e.older = this._keymap[e.key] = void 0, 
                    delete this._keymap[e.key], this.size--);
                },
                "get": function(e) {
                    var t = this._keymap[e];
                    if (void 0 !== t) return t === this.tail ? t.value : (t.newer && (t === this.head && (this.head = t.newer), 
                    t.newer.older = t.older), t.older && (t.older.newer = t.newer), t.newer = void 0, 
                    t.older = this.tail, this.tail && (this.tail.newer = t), this.tail = t, t.value);
                }
            };
            var nr = {}, rr = {}, ir = Gn;
            i.init = function(e) {
                this[0] = this.element = e;
            }, i.fn = i.prototype = i.init.prototype;
            var or = /[^, ]+/g, ar = /\S+/g, sr = {}, cr = Object.prototype, ur = cr.toString, lr = cr.hasOwnProperty, fr = Array.prototype, dr = "object" == typeof console;
            i.config = {
                "debug": !0
            };
            var hr = /([a-z\d])([A-Z]+)/g, pr = /[-_][^-_]/g, vr = fr.slice, mr = /\d\.\d{4}/, gr = 1, yr = /[-.*+?^${}()|[\]\/\\]/g, br = {}, wr = {}, xr = {}, _r = {};
            ir.avalon = i;
            var Ar = /&[a-z0-9#]{2,10};/, kr = Xn.createElement("div");
            o(i, {
                "Array": {
                    "merge": function(e, t) {
                        e.push.apply(e, t);
                    },
                    "ensure": function(e, t) {
                        if (-1 === e.indexOf(t)) return e.push(t);
                    },
                    "removeAt": function(e, t) {
                        return !!e.splice(t, 1).length;
                    },
                    "remove": function(e, t) {
                        var n = e.indexOf(t);
                        return !!~n && i.Array.removeAt(e, n);
                    }
                },
                "evaluatorPool": new e(888),
                "parsers": {
                    "number": function(e) {
                        return "" === e ? "" : parseFloat(e) || 0;
                    },
                    "string": function(e) {
                        return null === e || void 0 === e ? "" : e + "";
                    },
                    "boolean": function(e) {
                        return "" === e ? e : "true" === e || "1" === e;
                    }
                },
                "_decode": function(e) {
                    return Ar.test(e) ? (kr.innerHTML = e, kr.innerText || kr.textContent) : e;
                }
            });
            var Cr = {
                "interpolate": function(e) {
                    var t = e[0], n = e[1];
                    if (t === n) throw new SyntaxError("interpolate openTag cannot equal to closeTag");
                    if (/[<>]/.test(t + "test" + n)) throw new SyntaxError('interpolate cannot contains "<" or ">"');
                    _.openTag = t, _.closeTag = n;
                    var r = w(t), i = w(n);
                    _.rtext = new RegExp(r + "(.+?)" + i, "g"), _.rexpr = new RegExp(r + "([\\s\\S]*)" + i);
                }
            };
            if (_.plugins = Cr, _({
                "interpolate": [ "{{", "}}" ],
                "debug": !0
            }), o(i, {
                "shadowCopy": o,
                "oneObject": a,
                "inspect": ur,
                "ohasOwn": lr,
                "rword": or,
                "version": "2.2.9",
                "vmodels": {},
                "directives": rr,
                "directive": n,
                "eventHooks": br,
                "eventListeners": wr,
                "validators": xr,
                "cssHooks": _r,
                "log": c,
                "noop": f,
                "warn": u,
                "error": l,
                "config": _,
                "modern": tr,
                "msie": er,
                "root": Zn,
                "document": Xn,
                "window": ir,
                "inBrowser": Kn,
                "isObject": d,
                "range": h,
                "slice": m,
                "hyphen": p,
                "camelize": v,
                "escapeRegExp": w,
                "quote": s,
                "makeHashCode": g
            }), !k("司徒正美".trim)) {
                var Tr = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(Tr, "");
                };
            }
            Object.create || (Object.create = function() {
                function e() {}
                return function(t) {
                    if (1 != arguments.length) throw new Error("Object.create implementation only accepts one parameter.");
                    return e.prototype = t, new e();
                };
            }());
            var Er = !{
                "toString": null
            }.propertyIsEnumerable("toString"), Nr = function() {}.propertyIsEnumerable("prototype"), $r = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], Sr = $r.length;
            k(Object.keys) || (Object.keys = function(e) {
                var t = [], n = Nr && "function" == typeof e;
                if ("string" == typeof e || e && e.callee) for (var r = 0; r < e.length; ++r) t.push(String(r)); else for (var i in e) n && "prototype" === i || !lr.call(e, i) || t.push(String(i));
                if (Er) for (var o = e.constructor, a = o && o.prototype === e, s = 0; s < Sr; s++) {
                    var c = $r[s];
                    a && "constructor" === c || !lr.call(e, c) || t.push(c);
                }
                return t;
            }), k(Array.isArray) || (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            }), k(k.bind) || (Function.prototype.bind = function(e) {
                if (arguments.length < 2 && void 0 === e) return this;
                var t = this, n = arguments;
                return function() {
                    var r, i = [];
                    for (r = 1; r < n.length; r++) i.push(n[r]);
                    for (r = 0; r < arguments.length; r++) i.push(arguments[r]);
                    return t.apply(e, i);
                };
            });
            try {
                vr.call(i.document.documentElement);
            } catch (Ea) {
                fr.slice = function(e, t) {
                    if (t = void 0 !== t ? t : this.length, Array.isArray(this)) return vr.call(this, e, t);
                    var n, r, i = [], o = this.length, a = e || 0;
                    a = a >= 0 ? a : o + a;
                    var s = t || o;
                    if (t < 0 && (s = o + t), (r = s - a) > 0) if (i = new Array(r), this.charAt) for (n = 0; n < r; n++) i[n] = this.charAt(a + n); else for (n = 0; n < r; n++) i[n] = this[a + n];
                    return i;
                };
            }
            k(fr.map) || i.shadowCopy(fr, {
                "indexOf": function(e, t) {
                    var n = this.length, r = ~~t;
                    for (r < 0 && (r += n); r < n; r++) if (this[r] === e) return r;
                    return -1;
                },
                "lastIndexOf": function(e, t) {
                    var n = this.length, r = null == t ? n - 1 : t;
                    for (r < 0 && (r = Math.max(0, n + r)); r >= 0; r--) if (this[r] === e) return r;
                    return -1;
                },
                "forEach": C("", "_", ""),
                "filter": C("r=[],j=0,", "if(_)r[j++]=this[i]", "return r"),
                "map": C("r=[],", "r[i]=_", "return r"),
                "some": C("", "if(_)return true", "return false"),
                "every": C("", "if(!_)return false", "return true")
            });
            var Or = function() {
                var e = {
                    "92": "\\\\",
                    "34": '\\"',
                    "8": "\\b",
                    "12": "\\f",
                    "10": "\\n",
                    "13": "\\r",
                    "9": "\\t"
                }, t = function(e, t) {
                    return ("000000" + (t || 0)).slice(-e);
                }, n = function(n) {
                    var r = n.charCodeAt(0), i = e[r];
                    return i || "\\u00" + t(2, r.toString(16));
                }, r = /[\x00-\x1f\x22\x5c]/g;
                return function(e) {
                    return r.lastIndex = 0, '"' + (r.test(e) ? String(e).replace(r, n) : e) + '"';
                };
            }();
            try {
                i._quote = msie <= 8 ? Or : JSON.stringify;
            } catch (Ea) {
                i._quote = Or;
            }
            var Mr = {};
            "Boolean Number String Function Array Date RegExp Object Error".replace(i.rword, function(e) {
                Mr["[object " + e + "]"] = e.toLowerCase();
            }), i.type = function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Mr[ur.call(e)] || "object" : typeof e;
            };
            var jr = /^\s*\bfunction\b/;
            i.isFunction = "object" == typeof alert ? function(e) {
                try {
                    return jr.test(e + "");
                } catch (Ea) {
                    return !1;
                }
            } : function(e) {
                return "[object Function]" === ur.call(e);
            };
            var Vr = /^\[object (?:Window|DOMWindow|global)\]$/;
            i.isWindow = E(i.window) ? E : T;
            var Dr, Lr;
            for (Dr in i({})) break;
            Lr = "0" !== Dr, i.isPlainObject = /\[native code\]/.test(Object.getPrototypeOf) ? $ : N;
            var Ir = /object|function/;
            i.mix = i.fn.mix = function() {
                var e = arguments.length, t = !1, n = 0, r = [];
                for (!0 === arguments[0] && (t = !0, n = 1); n < e; n++) {
                    var i = arguments[n];
                    i = i && Ir.test(typeof i) ? i : {}, r.push(i);
                }
                return 1 === r.length && r.unshift(this), S(t, r);
            };
            var Pr, Fr = /(Array|List|Collection|Map|Arguments)\]$/;
            i.each = function(e, t) {
                if (e) {
                    var n = 0;
                    if (O(e)) for (var r = e.length; n < r && !1 !== t(n, e[n]); n++) ; else for (n in e) if (e.hasOwnProperty(n) && !1 === t(n, e[n])) break;
                }
            }, function() {
                var e = [ "%cavalon.js %c" + i.version + " %cin debug mode, %cmore...", "color: rgb(114, 157, 52); font-weight: normal;", "color: rgb(85, 85, 85); font-weight: normal;", "color: rgb(85, 85, 85); font-weight: normal;", "color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;" ];
                if ("object" == typeof console) {
                    var t = console, n = t.groupCollapsed || t.log;
                    Function.apply.call(n, t, e), t.log("You're running avalon in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\nTo disable debug mode, add this line at the start of your app:\n\n  avalon.config({debug: false});\n\nDebug mode also automatically shut down amicably when your app is minified.\n\nGet help and support:\n  https://segmentfault.com/t/avalon\n  http://avalonjs.coding.me/\n  http://www.baidu-x.com/?q=avalonjs\n  http://www.avalon.org.cn/\n\nFound a bug? Raise an issue:\n  https://github.com/RubyLouvre/avalon/issues\n\n"), 
                    n !== console.log && t.groupEnd(e);
                }
            }();
            var Rr = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim, Hr = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g, Br = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/gi, Ur = {
                "a": /\b(href)\=("javascript[^"]*"|'javascript[^']*')/gi,
                "img": /\b(src)\=("javascript[^"]*"|'javascript[^']*')/gi,
                "form": /\b(action)\=("javascript[^"]*"|'javascript[^']*')/gi
            }, qr = {
                "yyyy": I("FullYear", 4),
                "yy": I("FullYear", 2, 0, !0),
                "y": I("FullYear", 1),
                "MMMM": P("Month"),
                "MMM": P("Month", !0),
                "MM": I("Month", 2, 1),
                "M": I("Month", 1, 1),
                "dd": I("Date", 2),
                "d": I("Date", 1),
                "HH": I("Hours", 2),
                "H": I("Hours", 1),
                "hh": I("Hours", 2, -12),
                "h": I("Hours", 1, -12),
                "mm": I("Minutes", 2),
                "m": I("Minutes", 1),
                "ss": I("Seconds", 2),
                "s": I("Seconds", 1),
                "sss": I("Milliseconds", 3),
                "EEEE": P("Day"),
                "EEE": P("Day", !0),
                "a": R,
                "Z": F
            }, zr = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Wr = /^\/Date\((\d+)\)\/$/, Yr = {
                "AMPMS": {
                    "0": "上午",
                    "1": "下午"
                },
                "DAY": {
                    "0": "星期日",
                    "1": "星期一",
                    "2": "星期二",
                    "3": "星期三",
                    "4": "星期四",
                    "5": "星期五",
                    "6": "星期六"
                },
                "MONTH": {
                    "0": "1月",
                    "1": "2月",
                    "2": "3月",
                    "3": "4月",
                    "4": "5月",
                    "5": "6月",
                    "6": "7月",
                    "7": "8月",
                    "8": "9月",
                    "9": "10月",
                    "10": "11月",
                    "11": "12月"
                },
                "SHORTDAY": {
                    "0": "周日",
                    "1": "周一",
                    "2": "周二",
                    "3": "周三",
                    "4": "周四",
                    "5": "周五",
                    "6": "周六"
                },
                "fullDate": "y年M月d日EEEE",
                "longDate": "y年M月d日",
                "medium": "yyyy-M-d H:mm:ss",
                "mediumDate": "yyyy-M-d",
                "mediumTime": "H:mm:ss",
                "short": "yy-M-d ah:mm",
                "shortDate": "yy-M-d",
                "shortTime": "ah:mm"
            };
            Yr.SHORTMONTH = Yr.MONTH, H.locate = Yr;
            var Jr = {
                "$id": void 0,
                "$render": void 0,
                "$track": void 0,
                "$element": void 0,
                "$computed": void 0,
                "$watch": void 0,
                "$fire": void 0,
                "$events": void 0,
                "$accessors": void 0,
                "$hashcode": void 0,
                "$mutations": void 0,
                "$vbthis": void 0,
                "$vbsetter": void 0
            }, Gr = {
                "stop": function(e) {
                    return e.stopPropagation(), e;
                },
                "prevent": function(e) {
                    return e.preventDefault(), e;
                }
            }, Kr = {
                "esc": 27,
                "tab": 9,
                "enter": 13,
                "space": 32,
                "del": 46,
                "up": 38,
                "left": 37,
                "right": 39,
                "down": 40
            };
            for (var Xr in Kr) !function(e, t) {
                Gr[e] = function(e) {
                    return e.which !== t && (e.$return = !0), e;
                };
            }(Xr, Kr[Xr]);
            var Zr = i.filters = {};
            i.composeFilters = function() {
                var e = arguments;
                return function(t) {
                    for (var n, r = 0; n = e[r++]; ) {
                        var o = n[0], a = i.filters[o];
                        if ("function" == typeof a) {
                            n[0] = t;
                            try {
                                t = a.apply(0, n);
                            } catch (Ea) {}
                        }
                    }
                    return t;
                };
            }, i.escapeHtml = G, i.mix(Zr, {
                "uppercase": function(e) {
                    return String(e).toUpperCase();
                },
                "lowercase": function(e) {
                    return String(e).toLowerCase();
                },
                "truncate": function(e, t, n) {
                    return e ? (e = String(e), isNaN(t) && (t = 30), n = "string" == typeof n ? n : "...", 
                    e.length > t ? e.slice(0, t - n.length) + n : e) : "";
                },
                "camelize": i.camelize,
                "date": H,
                "escape": G,
                "sanitize": V,
                "number": j,
                "currency": function(e, t, n) {
                    return (t || "¥") + j(e, isFinite(n) ? n : 2);
                }
            }, {
                "filterBy": q,
                "orderBy": B,
                "selectBy": z,
                "limitBy": W
            }, Gr);
            var Qr = /^(?:checkbox|radio)$/;
            i.contains = Q, i.cloneNode = function(e) {
                return e.cloneNode(!0);
            }, Kn && function() {
                function e(e, t) {
                    e in Zn || !HTMLElement.prototype.__defineGetter__ || HTMLElement.prototype.__defineGetter__(e, t);
                }
                er < 10 && (i.cloneNode = Z), Xn.contains || (Xn.contains = function(e) {
                    return Q(Xn, e);
                }), i.modern && (Xn.createTextNode("x").contains || (Node.prototype.contains = function(e) {
                    return Q(this, e);
                })), e("outerHTML", function() {
                    var e = Xn.createElement("div");
                    return e.appendChild(this), e.innerHTML;
                }), e("children", function() {
                    for (var e, t = [], n = 0; e = this.childNodes[n++]; ) 1 === e.nodeType && t.push(e);
                    return t;
                }), e("innerText", function() {
                    return this.textContent;
                });
            }(), ee.prototype = {
                "toString": function() {
                    var e = this.node, t = e.className, n = "string" == typeof t ? t : t.baseVal, r = n.match(ar);
                    return r ? r.join(" ") : "";
                },
                "contains": function(e) {
                    return (" " + this + " ").indexOf(" " + e + " ") > -1;
                },
                "add": function(e) {
                    this.contains(e) || this.set(this + " " + e);
                },
                "remove": function(e) {
                    this.set((" " + this + " ").replace(" " + e + " ", " "));
                },
                "set": function(e) {
                    e = e.trim();
                    var t = this.node;
                    "object" == typeof t.className ? t.setAttribute("class", e) : t.className = e, e || t.removeAttribute("class");
                }
            }, "add,remove".replace(or, function(e) {
                i.fn[e + "Class"] = function(t) {
                    var n = this[0] || {};
                    return t && "string" == typeof t && 1 === n.nodeType && t.replace(ar, function(t) {
                        te(n)[e](t);
                    }), this;
                };
            }), i.shadowCopy(i.fn, {
                "hasClass": function(e) {
                    var t = this[0] || {};
                    return 1 === t.nodeType && te(t).contains(e);
                },
                "toggleClass": function(e, t) {
                    var n = "boolean" == typeof t, r = this;
                    return String(e).replace(ar, function(e) {
                        var i = n ? t : !r.hasClass(e);
                        r[i ? "addClass" : "removeClass"](e);
                    }), this;
                }
            });
            var ei = {};
            "accept-charset,acceptCharset|char,ch|charoff,chOff|class,className|for,htmlFor|http-equiv,httpEquiv".replace(/[^\|]+/g, function(e) {
                var t = e.split(",");
                ei[t[0]] = t[1];
            }), [ "autofocus,autoplay,async,allowTransparency,checked,controls", "declare,disabled,defer,defaultChecked,defaultSelected,", "isMap,loop,multiple,noHref,noResize,noShade", "open,readOnly,selected" ].join(",").replace(/\w+/g, function(e) {
                ei[e.toLowerCase()] = e;
            }), [ "accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan", "dateTime,defaultValue,contentEditable,frameBorder,longDesc,maxLength,marginWidth,marginHeight,rowSpan,tabIndex,useMap,vSpace,valueType,vAlign" ].join(",").replace(/\w+/g, function(e) {
                ei[e.toLowerCase()] = e;
            });
            var ti = /^[\],:{}\s]*$/, ni = /(?:^|:|,)(?:\s*\[)+/g, ri = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ii = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, oi = /^\[object SVG\w*Element\]$/, ai = /&amp;/g, si = {};
            try {
                i.parseJSON = JSON.parse;
            } catch (Ea) {
                i.parseJSON = re;
            }
            i.fn.attr = function(e, t) {
                return 2 === arguments.length ? (this[0].setAttribute(e, t), this) : this[0].getAttribute(e);
            };
            var ci = a("float", "cssFloat");
            i.cssNumber = a("animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");
            var ui = [ "", "-webkit-", "-o-", "-moz-", "-ms-" ];
            i.cssName = function(e, t, n) {
                if (ci[e]) return ci[e];
                t = t || i.root.style || {};
                for (var r = 0, o = ui.length; r < o; r++) if ((n = i.camelize(ui[r] + e)) in t) return ci[e] = n;
                return null;
            }, i.css = function(e, t, n, r) {
                if (e instanceof i && (e = e[0]), 1 === e.nodeType) {
                    var o = i.camelize(t);
                    if (t = i.cssName(o) || o, void 0 === n || "boolean" == typeof n) {
                        r = _r[o + ":get"] || _r["@:get"], "background" === t && (t = "backgroundColor");
                        var a = r(e, t);
                        return !0 === n ? parseFloat(a) || 0 : a;
                    }
                    if ("" === n) e.style[t] = ""; else {
                        if (null == n || n !== n) return;
                        isFinite(n) && !i.cssNumber[o] && (n += "px"), r = _r[o + ":set"] || _r["@:set"], 
                        r(e, t, n);
                    }
                }
            }, i.fn.css = function(e, t) {
                if (i.isPlainObject(e)) for (var n in e) i.css(this, n, e[n]); else var r = i.css(this, e, t);
                return void 0 !== r ? r : this;
            }, i.fn.position = function() {
                var e, t, n = this[0], r = {
                    "top": 0,
                    "left": 0
                };
                return n ? ("fixed" === this.css("position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), "HTML" !== e[0].tagName && (r = e.offset()), r.top += i.css(e[0], "borderTopWidth", !0), 
                r.left += i.css(e[0], "borderLeftWidth", !0), r.top -= e.scrollTop(), r.left -= e.scrollLeft()), 
                {
                    "top": t.top - r.top - i.css(n, "marginTop", !0),
                    "left": t.left - r.left - i.css(n, "marginLeft", !0)
                }) : r;
            }, i.fn.offsetParent = function() {
                for (var e = this[0].offsetParent; e && "static" === i.css(e, "position"); ) e = e.offsetParent;
                return i(e || i.root);
            }, _r["@:set"] = function(e, t, n) {
                try {
                    e.style[t] = n;
                } catch (Ea) {}
            }, _r["@:get"] = function(e, t) {
                if (!e || !e.style) throw new Error("getComputedStyle要求传入一个节点 " + e);
                var n, r = ir.getComputedStyle(e, null);
                return r && "" === (n = "filter" === t ? r.getPropertyValue(t) : r[t]) && (n = e.style[t]), 
                n;
            }, _r["opacity:get"] = function(e) {
                var t = _r["@:get"](e, "opacity");
                return "" === t ? "1" : t;
            }, "top,left".replace(i.rword, function(e) {
                _r[e + ":get"] = function(t) {
                    var n = _r["@:get"](t, e);
                    return /px$/.test(n) ? n : i(t).position()[e] + "px";
                };
            });
            var li = {
                "position": "absolute",
                "visibility": "hidden",
                "display": "block"
            }, fi = /^(none|table(?!-c[ea]).+)/;
            if (i.each({
                "Width": "width",
                "Height": "height"
            }, function(e, t) {
                var n = "client" + e, r = "scroll" + e, o = "offset" + e;
                _r[t + ":get"] = function(t, n, r) {
                    var a = -4;
                    "number" == typeof r && (a = r), n = "Width" === e ? [ "Left", "Right" ] : [ "Top", "Bottom" ];
                    var s = t[o];
                    return 2 === a ? s + i.css(t, "margin" + n[0], !0) + i.css(t, "margin" + n[1], !0) : (a < 0 && (s = s - i.css(t, "border" + n[0] + "Width", !0) - i.css(t, "border" + n[1] + "Width", !0)), 
                    -4 === a && (s = s - i.css(t, "padding" + n[0], !0) - i.css(t, "padding" + n[1], !0)), 
                    s);
                }, _r[t + "&get"] = function(e) {
                    var n = [];
                    ae(e, n);
                    for (var r, i = _r[t + ":get"](e), o = 0; r = n[o++]; ) {
                        e = r.node;
                        for (var a in r) "string" == typeof r[a] && (e.style[a] = r[a]);
                    }
                    return i;
                }, i.fn[t] = function(i) {
                    var a = this[0];
                    if (0 === arguments.length) {
                        if (a.setTimeout) return a["inner" + e] || a.document.documentElement[n] || a.document.body[n];
                        if (9 === a.nodeType) {
                            var s = a.documentElement;
                            return Math.max(a.body[r], s[r], a.body[o], s[o], s[n]);
                        }
                        return _r[t + "&get"](a);
                    }
                    return this.css(t, i);
                }, i.fn["inner" + e] = function() {
                    return _r[t + ":get"](this[0], void 0, -2);
                }, i.fn["outer" + e] = function(e) {
                    return _r[t + ":get"](this[0], void 0, !0 === e ? 2 : 0);
                };
            }), er < 9) {
                i.shadowCopy(ci, a("float", "styleFloat"));
                var di = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, hi = /^(top|right|bottom|left)$/, pi = /alpha\([^)]+\)/i, vi = /(opacity|\d(\d|\.)*)/g, mi = 8 === er, gi = {
                    "thin": mi ? "1px" : "2px",
                    "medium": mi ? "3px" : "4px",
                    "thick": mi ? "5px" : "6px"
                };
                _r["@:get"] = function(e, t) {
                    var n = e.currentStyle, r = n[t];
                    if (di.test(r) && !hi.test(r)) {
                        var i = e.style, o = i.left, a = e.runtimeStyle.left;
                        e.runtimeStyle.left = n.left, i.left = "fontSize" === t ? "1em" : r || 0, r = i.pixelLeft + "px", 
                        i.left = o, e.runtimeStyle.left = a;
                    }
                    return "medium" === r && (t = t.replace("Width", "Style"), "none" === n[t] && (r = "0px")), 
                    "" === r ? "auto" : gi[r] || r;
                }, _r["opacity:set"] = function(e, t, n) {
                    var r = e.style, i = Number(n) <= 1 ? "alpha(opacity=" + 100 * n + ")" : "", o = r.filter || "";
                    r.zoom = 1, r.filter = (pi.test(o) ? o.replace(pi, i) : o + " " + i).trim(), r.filter || r.removeAttribute("filter");
                }, _r["opacity:get"] = function(e) {
                    for (var t, n = e.style.filter.match(vi) || [], r = !1, i = 0; t = n[i++]; ) if ("opacity" === t) r = !0; else if (r) return t / 100 + "";
                    return "1";
                };
            }
            i.fn.offset = function() {
                var e = this[0], t = {
                    "left": 0,
                    "top": 0
                };
                if (!e || !e.tagName || !e.ownerDocument) return t;
                var n = e.ownerDocument, r = n.body, o = n.documentElement, a = n.defaultView || n.parentWindow;
                if (!i.contains(o, e)) return t;
                e.getBoundingClientRect && (t = e.getBoundingClientRect());
                var s = o.clientTop || r.clientTop, c = o.clientLeft || r.clientLeft, u = Math.max(a.pageYOffset || 0, o.scrollTop, r.scrollTop), l = Math.max(a.pageXOffset || 0, o.scrollLeft, r.scrollLeft);
                return {
                    "top": t.top + u - s,
                    "left": t.left + l - c
                };
            }, i.each({
                "scrollLeft": "pageXOffset",
                "scrollTop": "pageYOffset"
            }, function(e, t) {
                i.fn[e] = function(n) {
                    var r = this[0] || {}, o = se(r), a = i.root, s = "scrollTop" === e;
                    if (!arguments.length) return o ? t in o ? o[t] : a[e] : r[e];
                    o ? o.scrollTo(s ? i(o).scrollLeft() : n, s ? n : i(o).scrollTop()) : r[e] = n;
                };
            });
            var yi = {
                "option:get": er ? ue : function(e) {
                    return e.value;
                },
                "select:get": function(e, t) {
                    for (var n, r = e.options, i = e.selectedIndex, o = yi["option:get"], a = "select-one" === e.type || i < 0, s = a ? null : [], c = a ? i + 1 : r.length, u = i < 0 ? c : a ? i : 0; u < c; u++) if (n = r[u], 
                    (n.selected || u === i) && !n.disabled && (!n.parentNode.disabled || "OPTGROUP" !== n.parentNode.tagName)) {
                        if (t = o(n), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                "select:set": function(e, t, n) {
                    t = [].concat(t);
                    for (var r, i = yi["option:get"], o = 0; r = e.options[o++]; ) (r.selected = t.indexOf(i(r)) > -1) && (n = !0);
                    n || (e.selectedIndex = -1);
                }
            };
            i.fn.val = function(e) {
                var t = this[0];
                if (t && 1 === t.nodeType) {
                    var n = 0 === arguments.length, r = n ? ":get" : ":set", i = yi[ce(t) + r];
                    if (i) var o = i(t, e); else {
                        if (n) return (t.value || "").replace(/\r/g, "");
                        t.value = e;
                    }
                }
                return n ? o : this;
            };
            var bi = {
                "area": 1,
                "base": 1,
                "basefont": 1,
                "bgsound": 1,
                "br": 1,
                "col": 1,
                "command": 1,
                "embed": 1,
                "frame": 1,
                "hr": 1,
                "img": 1,
                "input": 1,
                "keygen": 1,
                "link": 1,
                "meta": 1,
                "param": 1,
                "source": 1,
                "track": 1,
                "wbr": 1
            }, wi = a("div,ul,ol,dl,table,h1,h2,h3,h4,h5,h6,form,fieldset"), xi = le("tr,style,script"), _i = (le("option,optgroup,#text"), 
            le("option,#text"), le("#text"), le("th,td,style,script"), le("col"), le("base,basefont,bgsound,link,style,script,meta,title,noscript,noframes"), 
            a("head,body"), {
                "xmp": 1,
                "style": 1,
                "script": 1,
                "noscript": 1,
                "textarea": 1,
                "#comment": 1,
                "template": 1
            }), Ai = {
                "style": 1,
                "script": 1,
                "noscript": 1,
                "template": 1
            }, ki = /\S/, Ci = /\s/;
            i.lexer = fe;
            var Ti = new e(100), Ei = /^(tbody|thead|tfoot)$/, Ni = /\<(\w[^\s\/\>]*)/, $i = /<|&#?\w+;/, Si = new e(128), Oi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
            i.parseHTML = function(e) {
                var t = x();
                if ("string" != typeof e) return t;
                if (!$i.test(e)) return Xn.createTextNode(e);
                e = e.replace(Oi, "<$1></$2>").trim();
                var n = Si.get(e);
                if (n) return i.cloneNode(n);
                for (var r, o = fe(e), a = 0; r = o[a++]; ) {
                    var s = i.vdom(r, "toDOM");
                    t.appendChild(s);
                }
                return e.length < 1024 && Si.put(e, t), t;
            }, i.innerHTML = function(e, t) {
                var n = i.parseHTML(t);
                this.clearHTML(e), e.appendChild(n);
            }, i.unescapeHTML = function(e) {
                return String(e).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            }, i.clearHTML = function(e) {
                for (;e.lastChild; ) e.removeChild(e.lastChild);
                return e;
            };
            var Mi = {
                "click": !0,
                "dblclick": !0,
                "keydown": !0,
                "keypress": !0,
                "keyup": !0,
                "mousedown": !0,
                "mousemove": !0,
                "mouseup": !0,
                "mouseover": !0,
                "mouseout": !0,
                "wheel": !0,
                "mousewheel": !0,
                "input": !0,
                "change": !0,
                "beforeinput": !0,
                "compositionstart": !0,
                "compositionupdate": !0,
                "compositionend": !0,
                "select": !0,
                "cut": !0,
                "copy": !0,
                "paste": !0,
                "beforecut": !0,
                "beforecopy": !0,
                "beforepaste": !0,
                "focusin": !0,
                "focusout": !0,
                "DOMFocusIn": !0,
                "DOMFocusOut": !0,
                "DOMActivate": !0,
                "dragend": !0,
                "datasetchanged": !0
            }, ji = i.modern && Xn.ontouchstart;
            i.fn.bind = function(e, t, n) {
                if (this[0]) return i.bind(this[0], e, t, n);
            }, i.fn.unbind = function(e, t, n) {
                if (this[0]) {
                    var r = vr.call(arguments);
                    r.unshift(this[0]), i.unbind.apply(0, r);
                }
                return this;
            }, i.bind = function(e, t, n) {
                if (1 === e.nodeType) {
                    var r = e.getAttribute("avalon-events") || "", o = b(n), a = br[t];
                    "click" === t && ji && e.addEventListener("click", i.noop), a && (t = a.type || t, 
                    a.fix && (n = a.fix(e, n), n.uuid = o));
                    var s = t + ":" + o;
                    i.eventListeners[n.uuid] = n, -1 === r.indexOf(t + ":") && (Mi[t] || i.modern && Li[t] ? Ce(t) : i._nativeBind(e, t, ke));
                    var c = r.split(",");
                    return "" === c[0] && c.shift(), -1 === c.indexOf(s) && (c.push(s), _e(e, c.join(","))), 
                    n;
                }
                var u = function(t) {
                    n.call(e, new Te(t));
                };
                return i._nativeBind(e, t, u), u;
            }, i.unbind = function(e, t, n) {
                if (1 === e.nodeType) {
                    var r = e.getAttribute("avalon-events") || "";
                    switch (arguments.length) {
                      case 1:
                        i._nativeUnBind(e, t, ke), e.removeAttribute("avalon-events");
                        break;

                      case 2:
                        r = r.split(",").filter(function(e) {
                            return -1 === e.indexOf(t + ":");
                        }).join(","), _e(e, r);
                        break;

                      default:
                        var o = t + ":" + n.uuid;
                        r = r.split(",").filter(function(e) {
                            return e !== o;
                        }).join(","), _e(e, r), delete i.eventListeners[n.uuid];
                    }
                } else i._nativeUnBind(e, t, n);
            };
            var Vi = {}, Di = /^e/, Li = {
                "focus": !0,
                "blur": !0
            }, Ii = {
                "webkitMovementY": 1,
                "webkitMovementX": 1,
                "keyLocation": 1,
                "fixEvent": function() {},
                "preventDefault": function() {
                    var e = this.originalEvent || {};
                    e.returnValue = this.returnValue = !1, tr && e.preventDefault && e.preventDefault();
                },
                "stopPropagation": function() {
                    var e = this.originalEvent || {};
                    e.cancelBubble = this.cancelBubble = !0, tr && e.stopPropagation && e.stopPropagation();
                },
                "stopImmediatePropagation": function() {
                    this.stopPropagation(), this.stopImmediate = !0;
                },
                "toString": function() {
                    return "[object Event]";
                }
            };
            if (Te.prototype = Ii, "onmouseenter" in Zn || i.each({
                "mouseenter": "mouseover",
                "mouseleave": "mouseout"
            }, function(e, t) {
                br[e] = {
                    "type": t,
                    "fix": function(t, n) {
                        return function(r) {
                            var i = r.relatedTarget;
                            if (!i || i !== t && !(16 & t.compareDocumentPosition(i))) return delete r.type, 
                            r.type = e, n.apply(this, arguments);
                        };
                    }
                };
            }), i.each({
                "AnimationEvent": "animationend",
                "WebKitAnimationEvent": "webkitAnimationEnd"
            }, function(e, t) {
                ir[e] && !br.animationend && (br.animationend = {
                    "type": t
                });
            }), !("onmousewheel" in Xn)) {
                var Pi = void 0 !== Xn.onwheel ? "wheel" : "DOMMouseScroll", Fi = "wheel" === Pi ? "deltaY" : "detail";
                br.mousewheel = {
                    "type": Pi,
                    "fix": function(e, t) {
                        return function(n) {
                            var r = n[Fi] > 0 ? -120 : 120;
                            return n.wheelDelta = ~~e._ms_wheel_ + r, e._ms_wheel_ = n.wheelDeltaY = n.wheelDelta, 
                            n.wheelDeltaX = 0, Object.defineProperty && Object.defineProperty(n, "type", {
                                "value": "mousewheel"
                            }), t.apply(this, arguments);
                        };
                    }
                };
            }
            tr || (delete Mi.change, delete Mi.select), i._nativeBind = tr ? function(e, t, n, r) {
                e.addEventListener(t, n, !!r);
            } : function(e, t, n) {
                e.attachEvent("on" + t, n);
            }, i._nativeUnBind = tr ? function(e, t, n, r) {
                e.removeEventListener(t, n, !!r);
            } : function(e, t, n) {
                e.detachEvent("on" + t, n);
            }, i.fireDom = function(e, t, n) {
                if (Xn.createEvent) {
                    var r = Xn.createEvent("Events");
                    r.initEvent(t, !0, !0, n), i.shadowCopy(r, n), e.dispatchEvent(r);
                } else if (Zn.contains(e)) {
                    r = Xn.createEventObject(), n && i.shadowCopy(r, n);
                    try {
                        e.fireEvent("on" + t, r);
                    } catch (Ea) {
                        i.log("fireDom", t, "args error");
                    }
                }
            };
            var Ri = /^(?:mouse|contextmenu|drag)|click/;
            Te.prototype.fixEvent = function() {
                var e = this;
                if (null == e.which && 0 === e.type.indexOf("key") && (e.which = null != e.charCode ? e.charCode : e.keyCode), 
                Ri.test(e.type) && !("pageX" in e)) {
                    var t = e.target.ownerDocument || Xn, n = "BackCompat" === t.compatMode ? t.body : t.documentElement;
                    e.pageX = e.clientX + (n.scrollLeft >> 0) - (n.clientLeft >> 0), e.pageY = e.clientY + (n.scrollTop >> 0) - (n.clientTop >> 0), 
                    e.wheelDeltaY = ~~e.wheelDelta, e.wheelDeltaX = 0;
                }
            }, "oninput" in Xn.createElement("input") || (br.input = {
                "type": "propertychange",
                "fix": function(e, t) {
                    return function(e) {
                        if ("value" === e.propertyName) return e.type = "input", t.apply(this, arguments);
                    };
                }
            });
            var Hi = [];
            i.ready = function(e) {
                Hi.push(e), i.isReady && Ee();
            }, i.ready(function() {
                i.scan && i.scan(Xn.body);
            }), Kn && function() {
                function e() {
                    try {
                        Zn.doScroll("left"), Ee();
                    } catch (Ea) {
                        setTimeout(e);
                    }
                }
                if ("complete" === Xn.readyState) setTimeout(Ee); else if (Xn.addEventListener) Xn.addEventListener("DOMContentLoaded", Ee, !1); else if (Xn.attachEvent) {
                    Xn.attachEvent("onreadystatechange", function() {
                        "complete" === Xn.readyState && Ee();
                    });
                    try {
                        var t = null === ir.frameElement;
                    } catch (Ea) {}
                    Zn.doScroll && t && ir.external && e();
                }
                i.bind(ir, "load", Ee);
            }();
            var Bi = {
                "script": 1,
                "style": 1,
                "textarea": 1,
                "xmp": 1,
                "noscript": 1,
                "template": 1
            }, Ui = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, qi = /input|textarea|select/i;
            je.prototype = {
                "constructor": je,
                "toDOM": function() {
                    if (this.dom) return this.dom;
                    var e = i._decode(this.nodeValue);
                    return this.dom = Xn.createTextNode(e);
                },
                "toHTML": function() {
                    return this.nodeValue;
                }
            }, Ve.prototype = {
                "constructor": Ve,
                "toDOM": function() {
                    return this.dom ? this.dom : this.dom = Xn.createComment(this.nodeValue);
                },
                "toHTML": function() {
                    return "\x3c!--" + this.nodeValue + "--\x3e";
                }
            }, De.prototype = {
                "constructor": De,
                "toDOM": function() {
                    if (this.dom) return this.dom;
                    var e, t = this.nodeName;
                    e = i.modern && Wi[t] ? Pe(t) : i.modern || !Ji[t] && !Yi.test(t) ? Xn.createElement(t) : Fe(t);
                    var n = this.props || {};
                    for (var r in n) {
                        var o = n[r];
                        Ie(o) && (zi[r] && i.msie < 8 ? zi[r](e, o) : e.setAttribute(r, o + ""));
                    }
                    var a = this.children || [], s = a[0] ? a[0].nodeValue : "";
                    switch (this.nodeName) {
                      case "script":
                        e.type = "noexec", e.text = s;
                        try {
                            e.innerHTML = s;
                        } catch (Ea) {}
                        e.type = n.type || "";
                        break;

                      case "noscript":
                        e.textContent = s;

                      case "style":
                      case "xmp":
                      case "template":
                        try {
                            e.innerHTML = s;
                        } catch (Ea) {
                            Le(e, this.nodeName, s);
                        }
                        break;

                      case "option":
                        er < 9 && (e.text = s);

                      default:
                        !this.isVoidTag && this.children && this.children.forEach(function(t) {
                            return a && e.appendChild(i.vdom(a, "toDOM"));
                        });
                    }
                    return this.dom = e;
                },
                "toHTML": function() {
                    var e = [], t = this.props || {};
                    for (var n in t) {
                        Ie(t[n]) && e.push(n + "=" + i.quote(t[n] + ""));
                    }
                    e = e.length ? " " + e.join(" ") : "";
                    var r = "<" + this.nodeName + e;
                    return this.isVoidTag ? r + "/>" : (r += ">", this.children && (r += this.children.map(function(e) {
                        return e ? i.vdom(e, "toHTML") : "";
                    }).join("")), r + "</" + this.nodeName + ">");
                }
            };
            var zi = {
                "class": function(e, t) {
                    e.className = t;
                },
                "style": function(e, t) {
                    e.style.cssText = t;
                },
                "type": function(e, t) {
                    try {
                        e.type = t;
                    } catch (Ea) {}
                },
                "for": function(e, t) {
                    e.setAttribute("for", t), e.htmlFor = t;
                }
            }, Wi = i.oneObject("circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use,g,svg"), Yi = /^\w+\:\w+/, Ji = i.oneObject("shape,line,polyline,rect,roundrect,oval,arc,curve,background,image,shapetype,group,fill,stroke,shadow, extrusion, textbox, imagedata, textpath");
            Re.prototype = {
                "constructor": Re,
                "toDOM": function() {
                    if (this.dom) return this.dom;
                    var e = this.toFragment();
                    return this.split = e.lastChild, this.dom = e;
                },
                "dispose": function() {
                    this.toFragment(), this.innerRender && this.innerRender.dispose();
                    for (var e in this) this[e] = null;
                },
                "toFragment": function() {
                    var e = x();
                    return this.children.forEach(function(t) {
                        return e.appendChild(i.vdom(t, "toDOM"));
                    }), e;
                },
                "toHTML": function() {
                    return this.children.map(function(e) {
                        return i.vdom(e, "toHTML");
                    }).join("");
                }
            }, i.mix(i, {
                "VText": je,
                "VComment": Ve,
                "VElement": De,
                "VFragment": Re
            });
            var Gi = {
                "#text": "VText",
                "#document-fragment": "VFragment",
                "#comment": "VComment"
            };
            i.vdomAdaptor = i.vdom = function(e, t) {
                if (!e) return "toHTML" === t ? "" : x();
                var n = e.nodeName;
                return n ? i[Gi[n] || "VElement"].prototype[t].call(e) : new i.VFragment(e)[t]();
            };
            i.domize = function(e) {
                return i.vdom(e, "toDOM");
            }, i.pendingActions = [], i.uniqActions = {}, i.inTransaction = 0, _.trackDeps = !1, 
            i.track = function() {
                _.trackDeps && i.log.apply(i, arguments);
            };
            var Ki = [];
            i.transaction = We;
            var Xi = 0, Zi = {
                "map": {}
            }, Qi = /\?\?\d+/g, eo = i.oneObject("break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments"), to = i.mix({
                "Math": 1,
                "Date": 1,
                "$event": 1,
                "window": 1,
                "__vmodel__": 1,
                "avalon": 1
            }, eo), no = /(^|[^\w\u00c0-\uFFFF_])(@|##)(?=[$\w])/g, ro = /\s*(\.|\|)\s*/g, io = /\|\|/g, oo = /\(([^)]*)\)/, ao = /\|(?=\?\?)/, so = /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g, co = /\.[\w\.\$]+/g, uo = /(\{|\,)\s*([\$\w]+)\s*:/g, lo = /\|(\w+)/g, fo = /[$a-zA-Z_][$a-zA-Z0-9_]*/g, ho = new e(300), po = /^__vmodel__\.[$\w\.]+$/, vo = /__vmodel__\.([^(]+)\(([^)]*)\)/, mo = 1;
            it.prototype = {
                "getValue": function() {
                    var e = this.vm;
                    try {
                        return this.getter.call(e, e);
                    } catch (Ea) {
                        i.log(this.getter + " exec error");
                    }
                },
                "setValue": function(e) {
                    var t = this.vm;
                    this.setter && this.setter.call(t, t, e);
                },
                "get": function(e) {
                    this.type;
                    this.deep && (i.deepCollect = !0);
                    var t = qe(this, this.getValue);
                    return this.deep && i.deepCollect && (i.deepCollect = !1), t;
                },
                "beforeUpdate": function() {
                    return this.oldValue = ot(this.value);
                },
                "update": function(e, t) {
                    var n = this.beforeUpdate(), r = this.value = this.get(), i = this.callback;
                    i && this.diff(r, n, e) && i.call(this.vm, this.value, n, this.expr), this._isScheduled = !1;
                },
                "schedule": function() {
                    this._isScheduled || (this._isScheduled = !0, i.uniqActions[this.uuid] || (i.uniqActions[this.uuid] = 1, 
                    i.pendingActions.push(this)), He());
                },
                "removeDepends": function() {
                    var e = this;
                    this.observers.forEach(function(t) {
                        i.Array.remove(t.observers, e);
                    });
                },
                "diff": function(e, t) {
                    return e !== t;
                },
                "dispose": function() {
                    this.value = null, this.removeDepends(), this.beforeDispose && this.beforeDispose();
                    for (var e in this) delete this[e];
                }
            };
            var go = {
                "vm": 1,
                "callback": 1,
                "observers": 1,
                "oldValue": 1,
                "value": 1,
                "getValue": 1,
                "setValue": 1,
                "get": 1,
                "removeDepends": 1,
                "beforeUpdate": 1,
                "update": 1,
                "dispose": 1
            }, yo = 1;
            at.prototype = {
                "get": function() {
                    if (i.trackingAction) {
                        this.collect();
                        var e = this.value;
                        if (e && e.$events) if (Array.isArray(e)) e.forEach(function(e) {
                            e && e.$events && e.$events.__dep__.collect();
                        }); else if (i.deepCollect) for (var t in e) if (e.hasOwnProperty(t)) {
                            e[t];
                        }
                    }
                    return this.value;
                },
                "collect": function() {
                    i.track(name, "被收集"), Ue(this);
                },
                "updateVersion": function() {
                    this.version = Math.random() + Math.random();
                },
                "notify": function() {
                    Ye(), Be(this), Je();
                },
                "set": function(e) {
                    var t = this.value;
                    if (e !== t) {
                        if (i.isObject(e)) {
                            var n = t && t.$hashcode, r = sr.createProxy(e, this);
                            r && (n && (r.$hashcode = n), e = r);
                        }
                        this.value = e, this.updateVersion(), this.notify();
                    }
                }
            };
            var bo = /(\?|if\b|\(.+\))/, wo = function(e) {
                function t(t, n, r) {
                    e.call(this, t, void 0, r), delete n.get, delete n.set, i.mix(this, n), this.deps = {}, 
                    this.type = "computed", this.depsVersion = {}, this.isComputed = !0, this.trackAndCompute(), 
                    "isStable" in this || (this.isStable = !bo.test(st(this.getter)));
                }
                ut(t, e);
                var n = t.prototype;
                return n.trackAndCompute = function() {
                    this.isStable && this.depsCount > 0 ? this.getValue() : qe(this, this.getValue.bind(this));
                }, n.getValue = function() {
                    return this.value = this.getter.call(this.vm);
                }, n.schedule = function() {
                    for (var e = this.observers, t = e.length; t--; ) {
                        var n = e[t];
                        n.schedule && n.schedule();
                    }
                }, n.shouldCompute = function() {
                    if (this.isStable) {
                        var e = !1;
                        for (var t in this.deps) this.deps[t].version !== this.depsVersion[t] && (e = !0, 
                        this.depsVersion[t] = this.deps[t].version);
                        return e;
                    }
                    return !0;
                }, n.set = function() {
                    this.setter && i.transaction(this.setter, this.vm, arguments);
                }, n.get = function() {
                    return this.collect(), this.shouldCompute() && (this.trackAndCompute(), this.updateVersion()), 
                    this.value;
                }, t;
            }(at);
            i.define = function(e) {
                var t = e.$id;
                t || i.error("vm.$id must be specified"), i.vmodels[t] && i.warn("error:[" + t + "] had defined!");
                var n = sr.modelFactory(e);
                return i.vmodels[t] = n;
            }, sr.modelFactory = function(e, t) {
                var n = e.$computed || {};
                delete e.$computed;
                var r = new lt(e, t), o = r.$accessors, a = [];
                sr.hideProperty(r, "$mutations", {});
                for (var s in e) if (!(s in Jr)) {
                    var c = e[s];
                    a.push(s), ft(s, c) && (o[s] = ht(s, c));
                }
                for (var u in n) if (!(u in Jr)) {
                    var c = n[u];
                    "function" == typeof c && (c = {
                        "get": c
                    }), c && c.get && (c.getter = c.get, c.setter = c.set, i.Array.ensure(a, u), o[u] = ht(u, c, !0));
                }
                var l = sr.createViewModel(r, o, r);
                return sr.afterCreate(l, r, a, !t), l;
            };
            var xo = {};
            sr.createProxy = dt, sr.itemFactory = function(e, t) {
                var n = e.$model, r = new lt(n), o = i.shadowCopy(r.$accessors, e.$accessors), a = t.data;
                for (var s in a) {
                    var c = n[s] = r[s] = a[s];
                    o[s] = ht(s, c);
                }
                var u = Object.keys(n), l = sr.createViewModel(r, o, r);
                return sr.afterCreate(l, r, u), l;
            }, sr.fuseFactory = function(e, t) {
                var n = i.mix(e.$model, t.$model), r = new lt(i.mix(n, {
                    "$id": e.$id + t.$id
                })), o = i.mix(r.$accessors, e.$accessors, t.$accessors), a = Object.keys(n), s = sr.createViewModel(r, o, r);
                return sr.afterCreate(s, r, a, !1), s;
            };
            var _o = {
                "get": function() {
                    return pt(this);
                },
                "set": i.noop,
                "enumerable": !1,
                "configurable": !0
            };
            sr.toJson = pt, sr.modelAccessor = _o;
            var Ao = fr.splice, ko = {
                "set": function(e, t) {
                    if (e >>> 0 === e && this[e] !== t) {
                        if (e > this.length) throw Error(e + "set方法的第一个参数不能大于原数组长度");
                        this.splice(e, 1, t);
                    }
                },
                "toJSON": function() {
                    return this.$model = sr.toJson(this);
                },
                "contains": function(e) {
                    return -1 !== this.indexOf(e);
                },
                "ensure": function(e) {
                    return !this.contains(e) && (this.push(e), !0);
                },
                "pushArray": function(e) {
                    return this.push.apply(this, e);
                },
                "remove": function(e) {
                    return this.removeAt(this.indexOf(e));
                },
                "removeAt": function(e) {
                    return e >>> 0 === e ? this.splice(e, 1) : [];
                },
                "clear": function() {
                    return this.removeAll(), this;
                },
                "removeAll": function(e) {
                    var t = (this.length, Array.isArray(e) ? function(t) {
                        return -1 !== e.indexOf(t);
                    } : "function" == typeof e && e);
                    if (t) for (var n = this.length - 1; n >= 0; n--) t(this[n], n) && Ao.call(this, n, 1); else Ao.call(this, 0, this.length);
                    this.toJSON(), this.$events.__dep__.notify();
                }
            };
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
                var t = fr[e];
                ko[e] = function() {
                    var n = this.$events, r = sr.listFactory(arguments, !0, n.__dep__), i = t.apply(this, r);
                    return this.toJSON(), n.__dep__.notify(e), i;
                };
            }), sr.listFactory = mt;
            var Co = !0;
            try {
                Object.defineProperty({}, "_", {
                    "value": "x"
                }), delete Jr.$vbsetter, delete Jr.$vbthis;
            } catch (Ea) {
                Co = !1;
            }
            var To = {
                "$vbthis": 1,
                "$vbsetter": 1
            };
            sr.hideProperty = gt, sr.fireFactory = bt, sr.watchFactory = yt, sr.afterCreate = xt;
            var Eo, No = Object.defineProperties, $o = new Date() - 0;
            if (!Co && ("__defineGetter__" in i && (Eo = function(e, t, n) {
                return "value" in n && (e[t] = n.value), "get" in n && e.__defineGetter__(t, n.get), 
                "set" in n && e.__defineSetter__(t, n.set), e;
            }, No = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && Eo(e, n, t[n]);
                return e;
            }), er < 9)) {
                var So = {};
                window.execScript([ "Function parseVB(code)", "\tExecuteGlobal(code)", "End Function" ].join("\n"), "VBScript");
                var Oo = function(e, t, n, r) {
                    var i = t[n];
                    if (4 !== arguments.length) return i.get.call(e);
                    i.set.call(e, r);
                };
                No = function(e, t, n) {
                    var r = [];
                    r.push("\tPrivate [$vbsetter]", "\tPublic  [$accessors]", "\tPublic Default Function [$vbthis](ac" + $o + ", s" + $o + ")", "\t\tSet  [$accessors] = ac" + $o + ": set [$vbsetter] = s" + $o, "\t\tSet  [$vbthis]    = Me", "\tEnd Function");
                    var o = {
                        "$vbthis": !0,
                        "$vbsetter": !0,
                        "$accessors": !0
                    };
                    for (e in Jr) o[e] || (r.push("\tPublic [" + e + "]"), o[e] = !0);
                    for (e in t) o[e] || (o[e] = !0, r.push("\tPublic Property Let [" + e + "](val" + $o + ")", '\t\tCall [$vbsetter](Me, [$accessors], "' + e + '", val' + $o + ")", "\tEnd Property", "\tPublic Property Set [" + e + "](val" + $o + ")", '\t\tCall [$vbsetter](Me, [$accessors], "' + e + '", val' + $o + ")", "\tEnd Property", "\tPublic Property Get [" + e + "]", "\tOn Error Resume Next", "\t\tSet[" + e + '] = [$vbsetter](Me, [$accessors],"' + e + '")', "\tIf Err.Number <> 0 Then", "\t\t[" + e + '] = [$vbsetter](Me, [$accessors],"' + e + '")', "\tEnd If", "\tOn Error Goto 0", "\tEnd Property"));
                    for (e in n) o[e] || (o[e] = !0, r.push("\tPublic [" + e + "]"));
                    r.push("\tPublic [hasOwnProperty]"), r.push("End Class");
                    var a = r.join("\r\n"), s = So[a];
                    return s || (s = i.makeHashCode("VBClass"), window.parseVB("Class " + s + a), window.parseVB([ "Function " + s + "Factory(acc, vbm)", "\tDim o", "\tSet o = (New " + s + ")(acc, vbm)", "\tSet " + s + "Factory = o", "End Function" ].join("\r\n")), 
                    So[a] = s), window[s + "Factory"](t, Oo);
                };
            }
            sr.createViewModel = No;
            var Mo = i.directive("important", {
                "priority": 1,
                "getScope": function(e, t) {
                    var n = i.vmodels[e];
                    if (n) return n;
                    throw "error! no vmodel called " + e;
                },
                "update": function(e, t, n) {
                    if (i.inBrowser) {
                        var r = i.vdom(e, "toDOM");
                        1 === r.nodeType && (r.removeAttribute(t), i(r).removeClass("ms-controller"));
                        var o = i.vmodels[n];
                        o && (o.$element = r, o.$render = this, o.$fire("onReady"), delete o.$events.onReady);
                    }
                }
            }), jo = Mo.update;
            i.directive("controller", {
                "priority": 2,
                "getScope": function(e, t) {
                    var n = i.vmodels[e];
                    return n ? (n.$render = this, t && t !== n ? sr.fuseFactory(t, n) : n) : t;
                },
                "update": jo
            }), i.directive("skip", {
                "delay": !0
            });
            var Vo = {}, Do = i.directive("css", {
                "diff": function(e, t) {
                    if (Object(e) === e) {
                        if (e = sr.toJson(e), Array.isArray(e)) {
                            var n = {};
                            e.forEach(function(e) {
                                e && i.shadowCopy(n, e);
                            }), e = n, Vo[this.type] || (i.warn("ms-" + this.type + "指令的值不建议使用数组形式了！"), Vo[this.type] = 1);
                        }
                        var r = !1, o = {};
                        if (t) {
                            if (this.deep) {
                                "number" == typeof this.deep && this.deep;
                                for (var a in e) {
                                    if (!At(e[a], t[a], 4)) return this.value = e, !0;
                                    o[a] = e[a];
                                }
                            } else for (var s in e) e[s] !== t[s] && (r = !0), o[s] = e[s];
                            for (var c in t) c in o || (r = !0, o[c] = "");
                        } else o = e, r = !0;
                        if (r) return this.value = o, !0;
                    }
                    return !1;
                },
                "update": function(e, t) {
                    var n = e.dom;
                    if (n && 1 === n.nodeType) {
                        var r = i(n);
                        for (var o in t) r.css(o, t[o]);
                    }
                }
            }), Lo = Do.diff, Io = {
                "TransitionEvent": "transitionend",
                "WebKitTransitionEvent": "webkitTransitionEnd",
                "OTransitionEvent": "oTransitionEnd",
                "otransitionEvent": "otransitionEnd"
            }, Po = void 0, Fo = void 0, Ro = void 0, Ho = void 0, Bo = void 0, Uo = void 0;
            for (Ho in Io) {
                if (ir[Ho]) {
                    Fo = Io[Ho];
                    break;
                }
                try {
                    document.createEvent(Ho);
                    Fo = Io[Ho];
                    break;
                } catch (Ea) {}
            }
            "string" == typeof Fo && (Po = !0, Uo = Fo), Io = {
                "AnimationEvent": "animationend",
                "WebKitAnimationEvent": "webkitAnimationEnd"
            };
            for (Ho in Io) if (ir[Ho]) {
                Ro = Io[Ho];
                break;
            }
            "string" == typeof Ro && (Po = !0, Bo = Ro);
            var qo = i.directive("effect", {
                "priority": 5,
                "diff": function(e) {
                    var t = this.node;
                    "string" == typeof e && (this.value = e = {
                        "is": e
                    }, i.warn("ms-effect的指令值不再支持字符串,必须是一个对象")), this.value = t.effect = e;
                    var n = this;
                    return !!Lo.call(this, e, this.oldValue) && (setTimeout(function() {
                        t.animating = !0, qo.update.call(n, t, t.effect);
                    }), t.animating = !1, !0);
                },
                "update": function(e, t, n) {
                    var r = e.dom;
                    if (r && 1 === r.nodeType) {
                        var o = t || n, a = o.is, s = i.effects[a];
                        if (!s) return void i.warn(a + " effect is undefined");
                        var c = {}, u = zo[o.action];
                        if ("function" != typeof Yo.prototype[u]) return void i.warn("action is undefined");
                        var l = new i.Effect(r);
                        return i.mix(c, s, o, {
                            "action": u
                        }), c.queue ? (Wo.push(function() {
                            l[u](c);
                        }), Tt()) : l[u](c), !0;
                    }
                }
            }), zo = {
                "true": "enter",
                "false": "leave",
                "enter": "enter",
                "leave": "leave",
                "move": "move",
                "undefined": "enter"
            }, Wo = [];
            i.effects = {}, i.effect = function(e, t) {
                var n = i.effects[e] = t || {};
                return Po && !1 !== n.css && (Et(n, "enterClass", e + "-enter"), Et(n, "enterActiveClass", n.enterClass + "-active"), 
                Et(n, "leaveClass", e + "-leave"), Et(n, "leaveActiveClass", n.leaveClass + "-active")), 
                n;
            };
            var Yo = function(e) {
                this.dom = e;
            };
            i.Effect = Yo, Yo.prototype = {
                "enter": $t("Enter"),
                "leave": $t("Leave"),
                "move": $t("Move")
            };
            var Jo = new e(128);
            i.applyEffect = function(e, t, n) {
                var r = n.cb, o = t.effect;
                if (o && e && 1 === e.nodeType) {
                    var a = n.hook, s = o[a];
                    r && (Array.isArray(s) ? s.push(r) : o[a] = s ? [ s, r ] : [ r ]), St(n), i.directives.effect.update(t, o, i.shadowCopy({}, n));
                } else r && r(e);
            };
            var Go = i.cssName("transition-duration"), Ko = i.cssName("animation-duration"), Xo = /\d+s$/, Zo = "none";
            i.parseDisplay = Vt, i.directive("visible", {
                "diff": function(e, t) {
                    var n = !!e;
                    if (void 0 === t || n !== t) return this.value = n, !0;
                },
                "ready": !0,
                "update": function(e, t) {
                    var n = e.dom;
                    if (n && 1 === n.nodeType) {
                        var r, o = n.style.display;
                        t ? (o === Zo && ((r = e.displayValue) || (n.style.display = "", "" === n.style.cssText && n.removeAttribute("style"))), 
                        "" === n.style.display && i(n).css("display") === Zo && i.contains(n.ownerDocument, n) && (r = Vt(n))) : o !== Zo && (r = Zo, 
                        e.displayValue = o);
                        var a = function() {
                            void 0 !== r && (n.style.display = r);
                        };
                        i.applyEffect(n, e, {
                            "hook": t ? "onEnterDone" : "onLeaveDone",
                            "cb": a
                        });
                    }
                }
            }), i.directive("text", {
                "delay": !0,
                "init": function() {
                    var e = this.node;
                    e.isVoidTag && i.error("自闭合元素不能使用ms-text");
                    var t = {
                        "nodeName": "#text",
                        "nodeValue": this.getValue()
                    };
                    e.children.splice(0, e.children.length, t), Kn && (i.clearHTML(e.dom), e.dom.appendChild(i.vdom(t, "toDOM"))), 
                    this.node = t;
                    this.type = this.name = "expr";
                    var n = i.directives["expr"], r = this;
                    this.callback = function(e) {
                        n.update.call(r, r.node, e);
                    };
                }
            }), i.directive("expr", {
                "update": function(e, t) {
                    t = null == t || "" === t ? "​" : t, e.nodeValue = t, e.dom && (e.dom.data = t);
                }
            }), i.directive("attr", {
                "diff": Lo,
                "update": function(e, t) {
                    var n = e.props;
                    for (var r in t) !1 == !!t[r] ? delete n[r] : n[r] = t[r];
                    var i = e.dom;
                    i && 1 === i.nodeType && ie(i, t);
                }
            }), i.directive("html", {
                "update": function(e, t) {
                    this.beforeDispose(), this.innerRender = i.scan('<div class="ms-html-container">' + t + "</div>", this.vm, function() {
                        var t = this.root;
                        e.children && (e.children.length = 0), e.children = t.children, this.root = e, e.dom && i.clearHTML(e.dom);
                    });
                },
                "beforeDispose": function() {
                    this.innerRender && this.innerRender.dispose();
                },
                "delay": !0
            }), i.directive("if", {
                "delay": !0,
                "priority": 5,
                "init": function() {
                    this.placeholder = A("if");
                    var e = this.node.props;
                    delete e["ms-if"], delete e[":if"], this.fragment = i.vdom(this.node, "toHTML");
                },
                "diff": function(e, t) {
                    var n = !!e;
                    if (void 0 === t || n !== t) return this.value = n, !0;
                },
                "update": function(e, t) {
                    if (void 0 === this.isShow && t) return void Dt(this, e);
                    this.isShow = t;
                    var n = this.placeholder;
                    if (t) {
                        var r = n.parentNode;
                        Dt(this, e), r && r.replaceChild(e.dom, n);
                    } else {
                        this.beforeDispose(), e.nodeValue = "if", e.nodeName = "#comment", delete e.children;
                        var i = e.dom, r = i && i.parentNode;
                        e.dom = n, r && r.replaceChild(n, i);
                    }
                },
                "beforeDispose": function() {
                    this.innerRender && this.innerRender.dispose();
                }
            }), i.directive("on", {
                "beforeInit": function() {
                    this.getter = i.noop;
                },
                "init": function() {
                    var e = this.node, t = this.name.replace("ms-on-", "e").replace("-", "_"), n = t + "_" + this.expr.replace(/\s/g, "").replace(/[^$a-z]/gi, function(e) {
                        return e.charCodeAt(0);
                    }), r = i.eventListeners[n];
                    if (!r) {
                        var o = et(this.expr), a = o[0], s = o[1];
                        a = tt(a), s && (s = s.replace(/__value__/g, "$event"), s += "\nif($event.$return){\n\treturn;\n}");
                        var c = [ "try{", "\tvar __vmodel__ = this;", "\t" + s, "\treturn " + a, '}catch(e){avalon.log(e, "in on dir")}' ].filter(function(e) {
                            return /\S/.test(e);
                        });
                        r = new Function("$event", c.join("\n")), r.uuid = n, i.eventListeners[n] = r;
                    }
                    var u = i.vdom(e, "toDOM");
                    u._ms_context_ = this.vm, this.eventType = this.param.replace(/\-(\d)$/, ""), delete this.param, 
                    i(u).bind(this.eventType, r);
                },
                "beforeDispose": function() {
                    i(this.node.dom).unbind(this.eventType);
                }
            });
            var Qo = {
                "input": function(e) {
                    var t = this;
                    e = e || "value";
                    var n = t.dom, r = n[e], i = t.parseValue(r);
                    t.value = r, t.setValue(i), Rt(t);
                    var o = t.pos;
                    n.caret && t.setCaret(n, o);
                },
                "radio": function() {
                    var e = this;
                    if (e.isChecked) {
                        var t = !e.value;
                        e.setValue(t), Rt(e);
                    } else Qo.input.call(e), e.value = NaN;
                },
                "checkbox": function() {
                    var e = this, t = e.value;
                    Array.isArray(t) || (i.warn("ms-duplex应用于checkbox上要对应一个数组"), t = [ t ]);
                    var n = e.dom.checked ? "ensure" : "remove";
                    if (t[n]) {
                        var r = e.parseValue(e.dom.value);
                        t[n](r), Rt(e);
                    }
                    this.__test__ = t;
                },
                "select": function() {
                    var e = this, t = i(e.dom).val();
                    t + "" != this.value + "" && (t = Array.isArray(t) ? t.map(function(t) {
                        return e.parseValue(t);
                    }) : e.parseValue(t), e.setValue(t), Rt(e));
                },
                "contenteditable": function() {
                    Qo.input.call(this, "innerHTML");
                }
            }, ea = /\|\s*change\b/, ta = /\|\s*debounce(?:\(([^)]+)\))?/, na = !0;
            try {
                var ra = {}, ia = HTMLInputElement.prototype, oa = HTMLTextAreaElement.prototype, aa = function(e) {
                    ra[this.tagName].call(this, e);
                    var t = this._ms_duplex_;
                    !this.caret && t && t.isString && t.duplexCb.call(this, {
                        "type": "setter"
                    });
                }, sa = HTMLInputElement.prototype;
                Object.getOwnPropertyNames(sa), ra["INPUT"] = Object.getOwnPropertyDescriptor(ia, "value").set, 
                Object.defineProperty(ia, "value", {
                    "set": aa
                }), ra["TEXTAREA"] = Object.getOwnPropertyDescriptor(oa, "value").set, Object.defineProperty(oa, "value", {
                    "set": aa
                }), na = !1;
            } catch (Ea) {}
            var ca = {
                "input": function() {
                    var e = this.node, t = this.value + "";
                    e.dom.value = e.props.value = t;
                },
                "updateChecked": function(e, t) {
                    e.dom && (e.dom.defaultChecked = e.dom.checked = t);
                },
                "radio": function() {
                    var e, t = this.node, n = t.props.value;
                    e = this.isChecked ? !!this.value : this.value + "" === n, t.props.checked = e, 
                    ca.updateChecked(t, e);
                },
                "checkbox": function() {
                    var e = this.node, t = e.props, n = t.value + "", r = [].concat(this.value), i = r.some(function(e) {
                        return e + "" === n;
                    });
                    t.defaultChecked = t.checked = i, ca.updateChecked(e, i);
                },
                "select": function() {
                    var e = Array.isArray(this.value) ? this.value.map(String) : this.value + "";
                    Lt(this.node, e);
                },
                "contenteditable": function() {
                    for (var e, t = fe(this.value), n = x(), r = 0; e = t[r++]; ) {
                        var o = i.vdom(e, "toDOM");
                        n.appendChild(o);
                    }
                    i.clearHTML(this.dom).appendChild(n);
                    var a = this.node.children;
                    a.length = 0, Array.prototype.push.apply(a, t), this.duplexCb.call(this.dom);
                }
            }, ua = /\s+as\s+([$\w]+)/, la = /^[$a-zA-Z_][$a-zA-Z0-9_]*$/, fa = /^(null|undefined|NaN|window|this|\$index|\$id)$/, da = /[$\w_]+/g;
            i.directive("for", {
                "delay": !0,
                "priority": 3,
                "beforeInit": function() {
                    var e, t = this.expr;
                    t = t.replace(ua, function(t, n) {
                        return !la.test(n) || fa.test(n) ? i.error("alias " + n + " is invalid --- must be a valid JS identifier which is not a reserved name.") : e = n, 
                        "";
                    });
                    var n = t.split(" in "), r = n[0].match(da);
                    1 === r.length && r.unshift("$key"), this.expr = n[1], this.keyName = r[0], this.valName = r[1], 
                    this.signature = i.makeHashCode("for"), e && (this.asName = e), delete this.param;
                },
                "init": function() {
                    var e = this.userCb;
                    if ("string" == typeof e && e) {
                        var t = et(e, "for"), n = tt(t[0]);
                        this.userCb = new Function("$event", "var __vmodel__ = this\nreturn " + n);
                    }
                    this.node.forDir = this, this.fragment = [ "<div>", this.fragment, "\x3c!--", this.signature, "--\x3e</div>" ].join(""), 
                    this.cache = {};
                },
                "diff": function(e, t) {
                    if (!this.updating) {
                        this.updating = !0;
                        var n = Jt(this, e);
                        return void 0 === this.oldTrackIds || (this.oldTrackIds !== n ? (this.oldTrackIds = n, 
                        !0) : void 0);
                    }
                },
                "update": function() {
                    if (this.preFragments ? (Kt(this), Zt(this)) : (this.fragments = this.fragments || [], 
                    Gt(this)), this.userCb) {
                        var e = this;
                        setTimeout(function() {
                            e.userCb.call(e.vm, {
                                "type": "rendered",
                                "target": e.begin.dom,
                                "signature": e.signature
                            });
                        }, 0);
                    }
                    delete this.updating;
                },
                "beforeDispose": function() {
                    this.fragments.forEach(function(e) {
                        e.dispose();
                    });
                }
            }), i.directive("class", {
                "diff": function(e, t) {
                    var n = this.type, r = this.node, i = r.classEvent || {};
                    "hover" === n ? (i.mouseenter = on, i.mouseleave = an) : "active" === n && (i.tabIndex = r.props.tabindex || -1, 
                    i.mousedown = on, i.mouseup = an, i.mouseleave = an), r.classEvent = i;
                    var o = rn(e);
                    if (void 0 === typeof t || t !== o) return this.value = o, r["change-" + n] = o, 
                    !0;
                },
                "update": function(e, t) {
                    var n = e.dom;
                    if (n && 1 == n.nodeType) {
                        var r = this.type, o = "change-" + r, a = e.classEvent;
                        if (a) {
                            for (var s in a) "tabIndex" === s ? n[s] = a[s] : i.bind(n, s, a[s]);
                            e.classEvent = {};
                        }
                        [ "class", "hover", "active" ].forEach(function(e) {
                            if (r === e) if ("class" === e) n && sn(n, t); else {
                                var a = n.getAttribute(o);
                                a && i(n).removeClass(a);
                                var s = "change-" + e;
                                n.setAttribute(s, t);
                            }
                        });
                    }
                }
            }), rr.active = rr.hover = rr["class"];
            var ha = {
                "mouseenter": "change-hover",
                "mouseleave": "change-hover",
                "mousedown": "change-active",
                "mouseup": "change-active"
            };
            y(on), y(an), b(fn), b(dn), b(hn), b(pn), b(Ht), b(un), b(ln), b(vn);
            var pa = function(e) {
                setTimeout(e, 0);
            };
            if (i.directive("duplex", {
                "priority": 9999999,
                "beforeInit": Bt,
                "init": Ut,
                "diff": qt,
                "update": function(e, t) {
                    this.dom || zt.call(this, e, cn), yn.call(this, i.msie, na), ca[this.dtype].call(this);
                }
            }), i.__pollValue = yn, i.msie < 8) {
                var va = ca.updateChecked;
                ca.updateChecked = function(e, t) {
                    var n = e.dom;
                    n && setTimeout(function() {
                        va(e, t), n.firstCheckedIt = 1;
                    }, n.firstCheckedIt ? 31 : 16);
                };
            }
            i.directive("rules", {
                "diff": function(e) {
                    if (d(e)) {
                        return this.node.rules = sr.toJson(e), !0;
                    }
                }
            });
            var ma = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i, ga = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
            i.shadowCopy(i.validators, {
                "pattern": {
                    "message": "必须匹配{{pattern}}这样的格式",
                    "get": function(e, t, n) {
                        var r = t.dom, i = t.data;
                        if (!bn(i.pattern)) {
                            var o = r.getAttribute("pattern");
                            i.pattern = new RegExp("^(?:" + o + ")$");
                        }
                        return n(i.pattern.test(e)), e;
                    }
                },
                "digits": {
                    "message": "必须整数",
                    "get": function(e, t, n) {
                        return n(/^\-?\d+$/.test(e)), e;
                    }
                },
                "number": {
                    "message": "必须数字",
                    "get": function(e, t, n) {
                        return n(!!e && isFinite(e)), e;
                    }
                },
                "norequired": {
                    "message": "",
                    "get": function(e, t, n) {
                        return n(!0), e;
                    }
                },
                "required": {
                    "message": "必须填写",
                    "get": function(e, t, n) {
                        return n("" !== e), e;
                    }
                },
                "equalto": {
                    "message": "密码输入不一致",
                    "get": function(e, t, n) {
                        var r = String(t.data.equalto);
                        return n(e === (i(document.getElementById(r)).val() || "")), e;
                    }
                },
                "date": {
                    "message": "日期格式不正确",
                    "get": function(e, t, n) {
                        var r = t.data;
                        return n(bn(r.date) ? r.date.test(e) : wn(e)), e;
                    }
                },
                "url": {
                    "message": "URL格式不正确",
                    "get": function(e, t, n) {
                        return n(ga.test(e)), e;
                    }
                },
                "email": {
                    "message": "email格式不正确",
                    "get": function(e, t, n) {
                        return n(ma.test(e)), e;
                    }
                },
                "minlength": {
                    "message": "最少输入{{minlength}}个字",
                    "get": function(e, t, n) {
                        var r = parseInt(t.data.minlength, 10);
                        return n(e.length >= r), e;
                    }
                },
                "maxlength": {
                    "message": "最多输入{{maxlength}}个字",
                    "get": function(e, t, n) {
                        var r = parseInt(t.data.maxlength, 10);
                        return n(e.length <= r), e;
                    }
                },
                "min": {
                    "message": "输入值不能小于{{min}}",
                    "get": function(e, t, n) {
                        var r = parseInt(t.data.min, 10);
                        return n(parseFloat(e) >= r), e;
                    }
                },
                "max": {
                    "message": "输入值不能大于{{max}}",
                    "get": function(e, t, n) {
                        var r = parseInt(t.data.max, 10);
                        return n(parseFloat(e) <= r), e;
                    }
                },
                "chs": {
                    "message": "必须是中文字符",
                    "get": function(e, t, n) {
                        return n(/^[\u4e00-\u9fa5]+$/.test(e)), e;
                    }
                }
            });
            var ya = i.directive("validate", {
                "diff": function(e) {
                    var t = this.node;
                    if (!t.validator && d(e)) {
                        t.validator = e, e = sr.toJson(e), e.vdom = t, e.dom = t.dom;
                        for (var n in ya.defaults) e.hasOwnProperty(n) || (e[n] = ya.defaults[n]);
                        return e.fields = e.fields || [], t.vmValidator = e, !0;
                    }
                },
                "update": function(e) {
                    function t() {
                        var e = this;
                        e && ya.validateAll.call(e, e.onValidateAll);
                    }
                    var n = e.vmValidator, r = e.validator, o = e.dom;
                    o._ms_validate_ = n, An(e.children, n.fields, n);
                    var a = window.netscape ? "keypress" : "focusin";
                    i.bind(document, a, kn);
                    try {
                        var s = n.onManual = t.bind(n);
                        r.onManual = s;
                    } catch (Ea) {
                        i.warn("要想使用onManual方法，必须在validate对象预定义一个空的onManual函数");
                    }
                    delete e.vmValidator, o.setAttribute("novalidate", "novalidate"), n.validateAllInSubmit && i.bind(o, "submit", _n);
                },
                "validateAll": function(e) {
                    var t = this, n = this.vdom, r = t.fields = [];
                    An(n.children, r, t);
                    var i = "function" == typeof e ? e : t.onValidateAll, o = t.fields.filter(function(e) {
                        var n = e.dom;
                        return n && !n.disabled && t.dom.contains(n);
                    }).map(function(e) {
                        return ya.validate(e, !0);
                    }), a = {};
                    return Promise.all(o).then(function(e) {
                        var r = e.concat.apply([], e);
                        t.deduplicateInValidateAll && (r = r.filter(function(e) {
                            var t = e.element, n = t.uniqueID || (t.uniqueID = setTimeout("1"));
                            return !a[n] && (a[n] = !0);
                        })), i.call(n.dom, r);
                    });
                },
                "validate": function(e, t, n) {
                    var r = [], o = e.value, a = e.dom;
                    if ("function" != typeof Promise && i.warn("浏览器不支持原生Promise,请下载并<script src=url>引入\nhttps://github.com/RubyLouvre/avalon/blob/master/test/promise.js"), 
                    !a.disabled) {
                        var s = e.vdom.rules, c = [], u = !0;
                        if (!s.norequired || "" !== o) for (var l in s) {
                            var f = s[l];
                            if (!1 !== f) {
                                var d, h = i.validators[l];
                                r.push(new Promise(function(e, t) {
                                    d = e;
                                }));
                                var p = function(t) {
                                    var n = {
                                        "element": a,
                                        "data": e.data,
                                        "message": a.getAttribute("data-" + l + "-message") || a.getAttribute("data-message") || h.message,
                                        "validateRule": l,
                                        "getMessage": En
                                    };
                                    t ? d(!0) : (u = !1, c.push(n), d(!1));
                                };
                                e.data = {}, e.data[l] = f, h.get(o, e, p);
                            }
                        }
                        return Promise.all(r).then(function(r) {
                            if (!t) {
                                var i = e.validator;
                                u ? i.onSuccess.call(a, [ {
                                    "data": e.data,
                                    "element": a
                                } ], n) : i.onError.call(a, c, n), i.onComplete.call(a, c, n);
                            }
                            return c;
                        });
                    }
                }
            }), ba = /\\?{{([^{}]+)\}}/gm;
            ya.defaults = {
                "validate": ya.validate,
                "onError": i.noop,
                "onSuccess": i.noop,
                "onComplete": i.noop,
                "onManual": i.noop,
                "onReset": i.noop,
                "onValidateAll": i.noop,
                "validateInBlur": !0,
                "validateInKeyup": !0,
                "validateAllInSubmit": !0,
                "resetInFocus": !0,
                "deduplicateInValidateAll": !1
            };
            var wa = i.oneObject("animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit", "on"), xa = /[+-\?]/, _a = /__value__\)$/, Aa = {
                "#text": 1,
                "#comment": 1,
                "script": 1,
                "style": 1,
                "noscript": 1
            };
            i.scan = function(e, t, n) {
                return new In(e, t, n || i.noop);
            }, In.prototype = {
                "init": function() {
                    var e;
                    if (this.root && this.root.nodeType > 0) e = Se(this.root), Vn(this.root); else {
                        if ("string" != typeof this.root) return i.warn("avalon.scan first argument must element or HTML string");
                        e = fe(this.root);
                    }
                    this.root = e[0], this.vnodes = e, this.scanChildren(e, this.vm, !0);
                },
                "scanChildren": function(e, t, n) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        switch (i.nodeName) {
                          case "#text":
                            t && this.scanText(i, t);
                            break;

                          case "#comment":
                            t && this.scanComment(i, t, e);
                            break;

                          case "#document-fragment":
                            this.scanChildren(i.children, t, !1);
                            break;

                          default:
                            this.scanTag(i, t, e, !1);
                        }
                    }
                    n && this.complete();
                },
                "scanText": function(e, t) {
                    _.rexpr.test(e.nodeValue) && this.bindings.push([ e, t, {
                        "nodeValue": e.nodeValue
                    } ]);
                },
                "scanComment": function(e, t, n) {
                    Ln(e.nodeValue, "ms-for:") && this.getForBinding(e, t, n);
                },
                "scanTag": function(e, t, n, o) {
                    var a, s, c = {}, u = e.props;
                    for (var l in u) {
                        var f = u[l], d = l;
                        if (":" === l.charAt(0) && (l = "ms-" + l.slice(1)), Ln(l, "ms-")) {
                            c[l] = f;
                            var h = l.match(/\w+/g)[1];
                            h = wa[h] || h, rr[h] || i.warn(l + " has not registered!"), a = !0;
                        }
                        "ms-for" === l && (s = f, delete u[d]);
                    }
                    var p = c["ms-important"] || c["ms-controller"];
                    if (p) {
                        var v = i.serverTemplates, m = v && v[p];
                        if (m) {
                            i.log("前端再次渲染后端传过来的模板");
                            var g = fe(m)[0];
                            for (var y in g) e[y] = g[y];
                            return delete v[p], void this.scanTag(e, t, n, o);
                        }
                        var h = c["ms-important"] === p ? "important" : "controller", b = "ms-" + h in u ? "ms-" + h : ":" + h;
                        Kn && delete u[b];
                        var w = rr[h];
                        if (!(t = w.getScope.call(this, p, t))) return;
                        var x = u["class"];
                        x && (u["class"] = (" " + x + " ").replace(" ms-controller ", "").trim());
                        var _ = this;
                        t.$render = _, this.callbacks.push(function() {
                            w.update.call(_, e, b, p);
                        });
                    }
                    if (s) return e.dom && e.dom.removeAttribute(d), this.getForBindingByElement(e, t, n, s);
                    /^ms\-/.test(e.nodeName) && (u.is = e.nodeName), u["is"] && (c["ms-widget"] || (c["ms-widget"] = "{}"), 
                    a = !0), a && this.bindings.push([ e, t, c ]);
                    var A = e.children;
                    !Bi[e.nodeName] && A && A.length && !r(c) && this.scanChildren(A, t, !1);
                },
                "complete": function() {
                    if (this.yieldDirectives(), this.beforeReady(), Kn) {
                        var e = this.root;
                        if (Kn) {
                            jn(i.vdom(e, "toDOM"), e.children);
                        }
                    }
                    this.mount = !0;
                    for (var t; t = this.callbacks.pop(); ) t();
                    this.optimizeDirectives();
                },
                "yieldDirectives": function() {
                    for (var e; e = this.bindings.shift(); ) {
                        var t = e[0], n = e[1], r = e[2], i = [];
                        "nodeValue" in r ? i = On(r) : "ms-skip" in r || (i = $n(r, e));
                        for (var o, a = 0; o = i[a++]; ) {
                            var s = rr[o.type];
                            if (Kn || !/on|duplex|active|hover/.test(o.type)) {
                                s.beforeInit && s.beforeInit.call(o);
                                var c = new Nn(n, o, t, this);
                                this.directives.push(c);
                            }
                        }
                    }
                },
                "optimizeDirectives": function() {
                    for (var e, t = 0; e = this.directives[t++]; ) e.callback = rr[e.type].update, e.update = Pn, 
                    e._isScheduled = !1;
                },
                "update": function() {
                    for (var e, t = 0; e = this.directives[t++]; ) e.update();
                },
                "dispose": function() {
                    for (var e, t = this.directives || [], n = 0; e = t[n++]; ) e.dispose();
                    for (var r in this) "dispose" !== r && delete this[r];
                },
                "getForBinding": function(e, t, n, r) {
                    var o = e.nodeValue.replace("ms-for:", "").trim();
                    e.nodeValue = "ms-for:" + o;
                    var a = Dn(n, e), s = a.end, c = i.vdom(a, "toHTML");
                    n.splice(a.start, a.length), e.props = {}, this.bindings.push([ e, t, {
                        "ms-for": o
                    }, {
                        "begin": e,
                        "end": s,
                        "expr": o,
                        "userCb": r,
                        "fragment": c,
                        "parentChildren": n
                    } ]);
                },
                "getForBindingByElement": function(e, t, n, r) {
                    var i = n.indexOf(e), o = e.props, a = {
                        "nodeName": "#comment",
                        "nodeValue": "ms-for:" + r
                    };
                    o.slot && (a.slot = o.slot, delete o.slot);
                    var s = {
                        "nodeName": "#comment",
                        "nodeValue": "ms-for-end:"
                    };
                    n.splice(i, 1, a, e, s), this.getForBinding(a, t, n, o["data-for-rendered"]);
                }
            };
            var ka, Ca = i.oneObject("onInit,onReady,onViewChange,onDispose,onEnter,onLeave"), Ta = [];
            return i.directive("widget", {
                "delay": !0,
                "priority": 4,
                "deep": !0,
                "init": function() {
                    var e = this.node;
                    if (this.cacheVm = !!e.props.cached, e.dom && "#comment" === e.nodeName) var t = e.dom;
                    var n = this.getValue(), r = Fn(n), o = e.props.is || r.is;
                    this.is = o;
                    var a = i.components[o];
                    if (!("fragment" in this)) if (e.isVoidTag) this.fragment = !1; else {
                        var s = e.children[0];
                        s && s.nodeValue ? this.fragment = s.nodeValue : this.fragment = i.vdom(e.children, "toHTML");
                    }
                    if (!a) return this.readyState = 0, e.nodeName = "#comment", e.nodeValue = "unresolved component placeholder", 
                    delete e.dom, void i.Array.ensure(Ta, this);
                    var c = r.id || r.$id, u = i.vmodels[c], l = !1;
                    if (u) f = u, this.comVm = f, Rn(this, f.$render), l = !0; else {
                        "function" == typeof a && (a = new a(r));
                        var f = Bn(a, r, o);
                        this.readyState = 1, Hn(f, e, "Init"), this.comVm = f;
                        var d = i.scan(a.template, f);
                        f.$render = d, Rn(this, d);
                        var h = [], p = [];
                        if (this.fragment || a.soleSlot) {
                            var v = this.fragment ? this.vm : f, m = this.fragment || "{{##" + a.soleSlot + "}}", g = i.scan("<div>" + m + "</div>", v, function() {
                                h = this.root.children;
                            });
                            p = g.directives, this.childBoss = g;
                            for (var y in g) delete g[y];
                        }
                        Array.prototype.push.apply(d.directives, p);
                        var b = [], w = {};
                        a.soleSlot ? b = h : h.forEach(function(e, t) {
                            if (e.slot) {
                                var n = Dn(h, e);
                                n.push(n.end), n.unshift(e), w[e.slot] = n;
                            } else if (e.props) {
                                var r = e.props.slot;
                                r && (delete e.props.slot, Array.isArray(w[r]) ? w[r].push(e) : w[r] = [ e ]);
                            }
                        }), a.soleSlot ? zn(d.vnodes, b) : Wn(d.vnodes, w);
                    }
                    if (t) {
                        var x = i.vdom(e, "toDOM");
                        t.parentNode.replaceChild(x, t), f.$element = d.root.dom = x, delete this.reInit;
                    }
                    Vn(e.dom), f.$element = e.dom, jn(e.dom, e.children), l ? Hn(f, e, "Enter") : Hn(f, e, "Ready");
                },
                "diff": function(e, t) {
                    if (Lo.call(this, e, t)) return !0;
                },
                "update": function(e, t) {
                    switch (this.readyState) {
                      case 0:
                        this.reInit && (this.init(), this.readyState++);
                        break;

                      case 1:
                        this.readyState++;
                        break;

                      default:
                        this.readyState++;
                        var n = this.comVm;
                        i.viewChanging = !0, i.transaction(function() {
                            for (var e in t) n.hasOwnProperty(e) && (Array.isArray(t[e]) ? n[e] = t[e].concat() : n[e] = t[e]);
                        }), Hn(n, e, "ViewChange"), delete i.viewChanging;
                    }
                    this.value = i.mix(!0, {}, t);
                },
                "beforeDispose": function() {
                    var e = this.comVm;
                    this.cacheVm ? Hn(e, this.node, "Leave") : (Hn(e, this.node, "Dispose"), e.$hashcode = !1, 
                    delete i.vmodels[e.$id], this.innerRender && this.innerRender.dispose());
                }
            }), i.components = {}, i.component = function(e, t) {
                return t.extend = Jn, Yn(e, t);
            }, i;
        });
    }).call(t, n(1));
}, function(e, t) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this");
    } catch (r) {
        "object" == typeof window && (n = window);
    }
    e.exports = n;
}, , function(e, t, n) {
    (function(t, r) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
        !function(t, n) {
            e.exports = n();
        }(0, function() {
            "use strict";
            function e(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t);
            }
            function i(e) {
                return "function" == typeof e;
            }
            function o(e) {
                z = e;
            }
            function a(e) {
                W = e;
            }
            function s() {
                return void 0 !== q ? function() {
                    q(u);
                } : c();
            }
            function c() {
                var e = setTimeout;
                return function() {
                    return e(u, 1);
                };
            }
            function u() {
                for (var e = 0; e < U; e += 2) {
                    (0, Z[e])(Z[e + 1]), Z[e] = void 0, Z[e + 1] = void 0;
                }
                U = 0;
            }
            function l(e, t) {
                var n = arguments, r = this, i = new this.constructor(d);
                void 0 === i[ee] && O(i);
                var o = r._state;
                return o ? function() {
                    var e = n[o - 1];
                    W(function() {
                        return N(o, i, e, r._result);
                    });
                }() : k(r, i, e, t), i;
            }
            function f(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t) return e;
                var n = new t(d);
                return w(n, e), n;
            }
            function d() {}
            function h() {
                return new TypeError("You cannot resolve a promise with itself");
            }
            function p() {
                return new TypeError("A promises callback cannot return that same promise.");
            }
            function v(e) {
                try {
                    return e.then;
                } catch (t) {
                    return ie.error = t, ie;
                }
            }
            function m(e, t, n, r) {
                try {
                    e.call(t, n, r);
                } catch (i) {
                    return i;
                }
            }
            function g(e, t, n) {
                W(function(e) {
                    var r = !1, i = m(n, t, function(n) {
                        r || (r = !0, t !== n ? w(e, n) : _(e, n));
                    }, function(t) {
                        r || (r = !0, A(e, t));
                    }, "Settle: " + (e._label || " unknown promise"));
                    !r && i && (r = !0, A(e, i));
                }, e);
            }
            function y(e, t) {
                t._state === ne ? _(e, t._result) : t._state === re ? A(e, t._result) : k(t, void 0, function(t) {
                    return w(e, t);
                }, function(t) {
                    return A(e, t);
                });
            }
            function b(e, t, n) {
                t.constructor === e.constructor && n === l && t.constructor.resolve === f ? y(e, t) : n === ie ? (A(e, ie.error), 
                ie.error = null) : void 0 === n ? _(e, t) : i(n) ? g(e, t, n) : _(e, t);
            }
            function w(t, n) {
                t === n ? A(t, h()) : e(n) ? b(t, n, v(n)) : _(t, n);
            }
            function x(e) {
                e._onerror && e._onerror(e._result), C(e);
            }
            function _(e, t) {
                e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && W(C, e));
            }
            function A(e, t) {
                e._state === te && (e._state = re, e._result = t, W(x, e));
            }
            function k(e, t, n, r) {
                var i = e._subscribers, o = i.length;
                e._onerror = null, i[o] = t, i[o + ne] = n, i[o + re] = r, 0 === o && e._state && W(C, e);
            }
            function C(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, i = void 0, o = e._result, a = 0; a < t.length; a += 3) r = t[a], 
                    i = t[a + n], r ? N(n, r, i, o) : i(o);
                    e._subscribers.length = 0;
                }
            }
            function T() {
                this.error = null;
            }
            function E(e, t) {
                try {
                    return e(t);
                } catch (n) {
                    return oe.error = n, oe;
                }
            }
            function N(e, t, n, r) {
                var o = i(n), a = void 0, s = void 0, c = void 0, u = void 0;
                if (o) {
                    if (a = E(n, r), a === oe ? (u = !0, s = a.error, a.error = null) : c = !0, t === a) return void A(t, p());
                } else a = r, c = !0;
                t._state !== te || (o && c ? w(t, a) : u ? A(t, s) : e === ne ? _(t, a) : e === re && A(t, a));
            }
            function $(e, t) {
                try {
                    t(function(t) {
                        w(e, t);
                    }, function(t) {
                        A(e, t);
                    });
                } catch (n) {
                    A(e, n);
                }
            }
            function S() {
                return ae++;
            }
            function O(e) {
                e[ee] = ae++, e._state = void 0, e._result = void 0, e._subscribers = [];
            }
            function M(e, t) {
                this._instanceConstructor = e, this.promise = new e(d), this.promise[ee] || O(this.promise), 
                B(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 
                0 === this.length ? _(this.promise, this._result) : (this.length = this.length || 0, 
                this._enumerate(t), 0 === this._remaining && _(this.promise, this._result))) : A(this.promise, j());
            }
            function j() {
                return new Error("Array Methods must be provided an Array");
            }
            function V(e) {
                return new M(this, e).promise;
            }
            function D(e) {
                var t = this;
                return new t(B(e) ? function(n, r) {
                    for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r);
                } : function(e, t) {
                    return t(new TypeError("You must pass an array to race."));
                });
            }
            function L(e) {
                var t = this, n = new t(d);
                return A(n, e), n;
            }
            function I() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }
            function P() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }
            function F(e) {
                this[ee] = S(), this._result = this._state = void 0, this._subscribers = [], d !== e && ("function" != typeof e && I(), 
                this instanceof F ? $(this, e) : P());
            }
            function R() {
                var e = void 0;
                if (void 0 !== r) e = r; else if ("undefined" != typeof self) e = self; else try {
                    e = Function("return this")();
                } catch (i) {
                    throw new Error("polyfill failed because global object is unavailable in this environment");
                }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve());
                    } catch (i) {}
                    if ("[object Promise]" === n && !t.cast) return;
                }
                e.Promise = F;
            }
            var H = void 0;
            H = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            };
            var B = H, U = 0, q = void 0, z = void 0, W = function(e, t) {
                Z[U] = e, Z[U + 1] = t, 2 === (U += 2) && (z ? z(u) : Q());
            }, Y = "undefined" != typeof window ? window : void 0, J = Y || {}, G = J.MutationObserver || J.WebKitMutationObserver, K = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t), X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, Z = new Array(1e3), Q = void 0;
            Q = K ? function() {
                return function() {
                    return t.nextTick(u);
                };
            }() : G ? function() {
                var e = 0, t = new G(u), n = document.createTextNode("");
                return t.observe(n, {
                    "characterData": !0
                }), function() {
                    n.data = e = ++e % 2;
                };
            }() : X ? function() {
                var e = new MessageChannel();
                return e.port1.onmessage = u, function() {
                    return e.port2.postMessage(0);
                };
            }() : void 0 === Y ? function() {
                try {
                    var e = n(24);
                    return q = e.runOnLoop || e.runOnContext, s();
                } catch (t) {
                    return c();
                }
            }() : c();
            var ee = Math.random().toString(36).substring(16), te = void 0, ne = 1, re = 2, ie = new T(), oe = new T(), ae = 0;
            return M.prototype._enumerate = function(e) {
                for (var t = 0; this._state === te && t < e.length; t++) this._eachEntry(e[t], t);
            }, M.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor, r = n.resolve;
                if (r === f) {
                    var i = v(e);
                    if (i === l && e._state !== te) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, 
                    this._result[t] = e; else if (n === F) {
                        var o = new n(d);
                        b(o, e, i), this._willSettleAt(o, t);
                    } else this._willSettleAt(new n(function(t) {
                        return t(e);
                    }), t);
                } else this._willSettleAt(r(e), t);
            }, M.prototype._settledAt = function(e, t, n) {
                var r = this.promise;
                r._state === te && (this._remaining--, e === re ? A(r, n) : this._result[t] = n), 
                0 === this._remaining && _(r, this._result);
            }, M.prototype._willSettleAt = function(e, t) {
                var n = this;
                k(e, void 0, function(e) {
                    return n._settledAt(ne, t, e);
                }, function(e) {
                    return n._settledAt(re, t, e);
                });
            }, F.all = V, F.race = D, F.resolve = f, F.reject = L, F._setScheduler = o, F._setAsap = a, 
            F._asap = W, F.prototype = {
                "constructor": F,
                "then": l,
                "catch": function(e) {
                    return this.then(null, e);
                }
            }, F.polyfill = R, F.Promise = F, F.polyfill(), F;
        });
    }).call(t, n(22), n(1));
}, , , function(e, t) {
    !function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                "exports": {},
                "id": r,
                "loaded": !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }
        var n = {};
        t.m = e, t.c = n, t.p = "", t(0);
    }([ function(e, t, n) {
        function r() {
            this.rules = [];
        }
        function i(e) {
            var t = e.split("?"), n = {}, r = t[0], i = t[1];
            if (i) for (var o, a = i.split("&"), s = a.length, c = 0; c < s; c++) a[c] && (o = a[c].split("="), 
            n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
            return {
                "path": r,
                "query": n
            };
        }
        function o(e) {
            return "/" === e || ("string" == typeof e && e.length > 1 && "/" === e.charAt(0) || void 0);
        }
        function a(e) {
            if ("string" == typeof e) return e;
            var t = [];
            for (var n in e) "query" !== n && t.push(n + "=" + encodeURIComponent(e[n]));
            return t.length ? "?" + t.join("&") : "";
        }
        function s(e, t, n) {
            var r = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!t) return r;
            var i = n ? "?" : "";
            return r + i + "(" + t + ")" + i;
        }
        var c = (n(6), n(7)), u = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
        r.prototype = c, avalon.mix(c, {
            "error": function(e) {
                this.errorback = e;
            },
            "_pathToRegExp": function(e, t) {
                for (var n, r, i, o, a = t.keys = [], c = "^", l = 0; n = u.exec(e); ) {
                    r = n[2] || n[3], i = n[4] || ("*" == n[1] ? ".*" : "string"), o = e.substring(l, n.index);
                    var f = this.$types[i], d = {
                        "name": r
                    };
                    f && (i = f.pattern, d.decode = f.decode), a.push(d), c += s(o, i, !1), l = u.lastIndex;
                }
                o = e.substring(l), c += s(o) + (t.strict ? t.last : "/?") + "$";
                var h = "boolean" != typeof t.caseInsensitive || t.caseInsensitive;
                return t.regexp = new RegExp(c, h ? "i" : void 0), t;
            },
            "add": function(e, t, n) {
                var r = this.rules;
                "/" !== e.charAt(0) && avalon.error("avalon.router.add的第一个参数必须以/开头"), n = n || {}, 
                n.callback = t, e.length > 2 && "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1), 
                n.last = "/"), avalon.Array.ensure(r, this._pathToRegExp(e, n));
            },
            "route": function(e, t) {
                e = e.trim();
                for (var n, r = this.rules, i = 0; n = r[i++]; ) {
                    var o = e.match(n.regexp);
                    if (o) {
                        n.query = t || {}, n.path = e, n.params = {};
                        var a = n.keys;
                        return o.shift(), a.length && this._parseArgs(o, n), n.callback.apply(n, o);
                    }
                }
                this.errorback && this.errorback();
            },
            "_parseArgs": function(e, t) {
                for (var n = t.keys, r = 0, i = n.length; r < i; r++) {
                    var o = n[r], a = e[r] || "";
                    if ("function" == typeof o.decode) var s = o.decode(a); else try {
                        s = JSON.parse(a);
                    } catch (c) {
                        s = a;
                    }
                    e[r] = t.params[o.name] = s;
                }
            },
            "navigate": function(e, t) {
                var n = i(e), r = this.route(n.path, n.query);
                return o(r) && (e = r), avalon.router.setLastPath(e), 1 === t ? avalon.history.setHash(e, !0) : 2 === t && avalon.history.setHash(e), 
                e;
            },
            "when": function(e, t) {
                var n = this, e = e instanceof Array ? e : [ e ];
                return avalon.each(e, function(e, r) {
                    n.add(r, function() {
                        var e = n.urlFormate(t, this.params, this.query);
                        n.navigate(e.path + e.query);
                    });
                }), this;
            },
            "urlFormate": function(e, t, n) {
                var n = n ? a(n) : "";
                return {
                    "path": e.replace(u, function(e) {
                        var n = e.replace(/[\{\}]/g, "").split(":");
                        return n = n[0] ? n[0] : n[1], void 0 !== t[n] ? t[n] : "";
                    }).replace(/^\//g, ""),
                    "query": n
                };
            },
            "$types": {
                "date": {
                    "pattern": "[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])",
                    "decode": function(e) {
                        return new Date(e.replace(/\-/g, "/"));
                    }
                },
                "string": {
                    "pattern": "[^\\/]*",
                    "decode": function(e) {
                        return e;
                    }
                },
                "bool": {
                    "decode": function(e) {
                        return 0 !== parseInt(e, 10);
                    },
                    "pattern": "0|1"
                },
                "int": {
                    "decode": function(e) {
                        return parseInt(e, 10);
                    },
                    "pattern": "\\d+"
                }
            }
        }), e.exports = avalon.router = new r();
    }, , , , , , function(e, t) {
        function n(e) {
            var t = e.indexOf("#");
            return -1 === t ? "" : decodeURI(e.slice(t));
        }
        function r(e) {
            for (var t, n = document.getElementsByTagName("A"), r = 0; t = n[r++]; ) if (t.name === e) return t;
        }
        function i(e) {
            var t = avalon(e).css("position");
            return "fixed" !== t ? 0 : e.getBoundingClientRect().bottom;
        }
        function o(e) {
            var t = document.getElementById(e);
            if (t || (t = r(e)), t) {
                t.scrollIntoView();
                var n = i(t);
                if (n) {
                    var o = t.getBoundingClientRect().top;
                    window.scrollBy(0, o - n.top);
                }
            } else window.scrollTo(0, 0);
        }
        /*!
	 * mmHistory
	 * 用于监听地址栏的变化
	 * https://github.com/flatiron/director/blob/master/lib/director/browser.js
	 * https://github.com/visionmedia/page.js/blob/master/page.js
	 */
        var a = document.location, s = avalon.msie <= 7, c = !!window.history.pushState, u = !(!("onhashchange" in window) || window.VBArray && s), l = {
            "root": "/",
            "html5": !1,
            "hashPrefix": "!",
            "iframeID": null,
            "interval": 50,
            "autoScroll": !1
        }, f = {
            "hash": n(a.href),
            "check": function() {
                var e = n(a.href);
                e !== this.hash && (this.hash = e, this.onHashChanged());
            },
            "start": function(e) {
                if (this.started) throw new Error("avalon.history has already been started");
                this.started = !0, "boolean" == typeof e && (e = {
                    "html5": e
                }), e = avalon.mix({}, l, e || {}), e.fireAnchor && (e.autoScroll = !0);
                var t = e.root;
                /^\//.test(t) || avalon.error("root配置项必须以/字符开始, 以非/字符结束"), t.length > 1 && (e.root = t.replace(/\/$/, ""));
                var n = e.html5;
                switch (this.options = e, this.mode = n ? "popstate" : "hashchange", c || (n && avalon.warn("浏览器不支持HTML5 pushState，平稳退化到onhashchange!"), 
                this.mode = "hashchange"), u || (this.mode = "iframepoll"), avalon.log("avalon run mmHistory in the ", this.mode, "mode"), 
                this.mode) {
                  case "popstate":
                    setTimeout(function() {
                        window.onpopstate = f.onHashChanged;
                    }, 500);
                    break;

                  case "hashchange":
                    window.onhashchange = f.onHashChanged;
                    break;

                  case "iframepoll":
                    avalon.ready(function() {
                        function t() {
                            "location" === event.propertyName && f.check();
                        }
                        var n = document.createElement("iframe");
                        n.id = e.iframeID, n.style.display = "none", document.body.appendChild(n), f.iframe = n, 
                        f.writeFrame(""), avalon.msie && (document.attachEvent("onpropertychange", t), f.onPropertyChange = t), 
                        f.intervalID = window.setInterval(function() {
                            f.check();
                        }, e.interval);
                    });
                }
                this.onHashChanged();
            },
            "stop": function() {
                switch (this.mode) {
                  case "popstate":
                    window.onpopstate = avalon.noop;
                    break;

                  case "hashchange":
                    window.onhashchange = avalon.noop;
                    break;

                  case "iframepoll":
                    this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this.onPropertyChange && document.detachEvent("onpropertychange", this.onPropertyChange), 
                    clearInterval(this.intervalID);
                }
                this.started = !1;
            },
            "setHash": function(e, t) {
                switch (this.mode) {
                  case "iframepoll":
                    if (t) {
                        var n = this.iframe;
                        n && (n.contentWindow._hash = e);
                    } else this.writeFrame(e);
                    break;

                  case "popstate":
                    var r = (this.options.root + "/" + e).replace(/\/+/g, "/"), i = t ? "replaceState" : "pushState";
                    history[i]({}, document.title, r), this.onHashChanged();
                    break;

                  default:
                    var o = this.options.hashPrefix + e;
                    t && a.hash !== o && history.back(), a.hash = o;
                }
            },
            "writeFrame": function(e) {
                var t = f.iframe, n = t.contentDocument || t.contentWindow.document;
                n.open();
                n.write("<script>_hash = '" + e + "'; onload = parent.avalon.history.syncHash;<\/script>"), 
                n.close();
            },
            "syncHash": function() {
                var e = this._hash;
                return e !== n(a.href) && (a.hash = e), this;
            },
            "getPath": function() {
                var e = a.pathname.replace(this.options.root, "");
                return "/" !== e.charAt(0) && (e = "/" + e), e;
            },
            "onHashChanged": function(e, t) {
                t || (e = "popstate" === f.mode ? f.getPath() : a.href.replace(/.*#!?/, "")), e = decodeURIComponent(e), 
                (e = "/" === e.charAt(0) ? e : "/" + e) !== f.hash && (f.hash = e, avalon.router && (e = avalon.router.navigate(e, 0)), 
                t && f.setHash(e), t && f.options.autoScroll && o(e.slice(1)));
            }
        };
        avalon.bind(document, "click", function(e) {
            if (f.started && !(e.ctrlKey || e.metaKey || e.shiftKey || 2 === e.which) && !1 !== e.returnValue) {
                for (var t = e.path ? e.path[0] : e.target || e.srcElement || {}; "A" !== t.nodeName; ) if (!(t = t.parentNode) || "BODY" === t.tagName) return;
                var n = t.getAttribute("href", 2) || t.getAttribute("xlink:href") || "";
                "#!" === n.slice(0, 2) && null == t.getAttribute("download") && "external" !== t.getAttribute("rel") && (n.indexOf("mailto:") > -1 || t.target && "_self" !== t.target || (e.preventDefault(), 
                f.onHashChanged(n.replace("#!", ""), !0)));
            }
        }), e.exports = avalon.history = f;
    }, function(e, t) {
        function n(e) {
            return String(e).replace(/[,;"\\=\s%]/g, function(e) {
                return encodeURIComponent(e);
            });
        }
        function r(e, t) {
            var r = new Date();
            r.setTime(r.getTime() + 864e5), document.cookie = n(e) + "=" + n(t) + ";expires=" + r.toGMTString();
        }
        function i(e) {
            var t = String(document.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)")) || [ "", "" ];
            return decodeURIComponent(t[1]);
        }
        var o = {};
        if (function() {
            try {
                return localStorage.setItem("avalon", 1), localStorage.removeItem("avalon"), !0;
            } catch (e) {
                return !1;
            }
        }()) {
            o.getLastPath = function() {
                return localStorage.getItem("msLastPath");
            };
            var a;
            o.setLastPath = function(e) {
                a && (clearTimeout(a), a = null), localStorage.setItem("msLastPath", e), a = setTimeout(function() {
                    localStorage.removItem("msLastPath");
                }, 864e5);
            };
        } else o.getLastPath = function() {
            return i.getItem("msLastPath");
        }, o.setLastPath = function(e) {
            r("msLastPath", e);
        };
        e.exports = o;
    } ]);
}, , , , , , , , , , , , , , , , function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined");
    }
    function r() {
        throw new Error("clearTimeout has not been defined");
    }
    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0);
        } catch (t) {
            try {
                return l.call(null, e, 0);
            } catch (t) {
                return l.call(this, e, 0);
            }
        }
    }
    function o(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e);
        } catch (t) {
            try {
                return f.call(null, e);
            } catch (t) {
                return f.call(this, e);
            }
        }
    }
    function a() {
        v && h && (v = !1, h.length ? p = h.concat(p) : m = -1, p.length && s());
    }
    function s() {
        if (!v) {
            var e = i(a);
            v = !0;
            for (var t = p.length; t; ) {
                for (h = p, p = []; ++m < t; ) h && h[m].run();
                m = -1, t = p.length;
            }
            h = null, v = !1, o(e);
        }
    }
    function c(e, t) {
        this.fun = e, this.array = t;
    }
    function u() {}
    var l, f, d = e.exports = {};
    !function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
            l = n;
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
            f = r;
        }
    }();
    var h, p = [], v = !1, m = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new c(e, t)), 1 !== p.length || v || i(s);
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", 
    d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, 
    d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, 
    d.listeners = function(e) {
        return [];
    }, d.binding = function(e) {
        throw new Error("process.binding is not supported");
    }, d.cwd = function() {
        return "/";
    }, d.chdir = function(e) {
        throw new Error("process.chdir is not supported");
    }, d.umask = function() {
        return 0;
    };
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t;
            }).replace(/^'(.*)'$/, function(e, t) {
                return t;
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
            var o;
            return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(o) + ")";
        });
    };
}, , function(e, t) {
    function n(e, t) {
        var n = e[1] || "", i = e[3];
        if (!i) return n;
        if (t && "function" == typeof btoa) {
            var o = r(i);
            return [ n ].concat(i.sources.map(function(e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */";
            })).concat([ o ]).join("\n");
        }
        return [ n ].join("\n");
    }
    function r(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */";
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var r = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
            }).join("");
        }, t.i = function(e, n) {
            "string" == typeof e && (e = [ [ null, e, "" ] ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0);
            }
            for (i = 0; i < e.length; i++) {
                var a = e[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), 
                t.push(a));
            }
        }, t;
    };
}, function(e, t, n) {
    function r(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n], i = p[r.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                for (;o < r.parts.length; o++) i.parts.push(l(r.parts[o], t));
            } else {
                for (var a = [], o = 0; o < r.parts.length; o++) a.push(l(r.parts[o], t));
                p[r.id] = {
                    "id": r.id,
                    "refs": 1,
                    "parts": a
                };
            }
        }
    }
    function i(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i], a = t.base ? o[0] + t.base : o[0], s = o[1], c = o[2], u = o[3], l = {
                "css": s,
                "media": c,
                "sourceMap": u
            };
            r[a] ? r[a].parts.push(l) : n.push(r[a] = {
                "id": a,
                "parts": [ l ]
            });
        }
        return n;
    }
    function o(e, t) {
        var n = m(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = b[b.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), 
        b.push(t); else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t);
        }
    }
    function a(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = b.indexOf(e);
        t >= 0 && b.splice(t, 1);
    }
    function s(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", u(t, e.attrs), o(e, t), t;
    }
    function c(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", u(t, e.attrs), o(e, t), 
        t;
    }
    function u(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n]);
        });
    }
    function l(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function() {};
            e.css = o;
        }
        if (t.singleton) {
            var u = y++;
            n = g || (g = s(t)), r = f.bind(null, n, u, !1), i = f.bind(null, n, u, !0);
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), 
        r = h.bind(null, n, t), i = function() {
            a(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = s(t), r = d.bind(null, n), i = function() {
            a(n);
        });
        return r(e), function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t);
            } else i();
        };
    }
    function f(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, i); else {
            var o = document.createTextNode(i), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
        }
    }
    function d(e, t) {
        var n = t.css, r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n; else {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
        }
    }
    function h(e, t, n) {
        var r = n.css, i = n.sourceMap, o = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || o) && (r = w(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var a = new Blob([ r ], {
            "type": "text/css"
        }), s = e.href;
        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
    }
    var p = {}, v = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t;
        };
    }(function() {
        return window && document && document.all && !window.atob;
    }), m = function(e) {
        var t = {};
        return function(n) {
            return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
        };
    }(function(e) {
        return document.querySelector(e);
    }), g = null, y = 0, b = [], w = n(23);
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = v()), 
        t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = i(e, t);
        return r(n, t), function(e) {
            for (var o = [], a = 0; a < n.length; a++) {
                var s = n[a], c = p[s.id];
                c.refs--, o.push(c);
            }
            if (e) {
                r(i(e, t), t);
            }
            for (var a = 0; a < o.length; a++) {
                var c = o[a];
                if (0 === c.refs) {
                    for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                    delete p[c.id];
                }
            }
        };
    };
    var x = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n");
        };
    }();
} ]);
//# sourceMappingURL=vendor.d9fc4098e1.js.map