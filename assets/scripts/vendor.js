/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {}, i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {}, m = "1.11.0",
        n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return n.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === n.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (l.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && n.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: k && !k.call("\ufeff\xa0") ? function (a) {
            return null == a ? "" : k.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        },
        now: function () {
            return +new Date
        },
        support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function (a, b) {
                return a === b && (j = !0), 0
            }, A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            }, W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) return d;
                            if (g.id === h) return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
                    } else {
                        if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
                    }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {} finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function (b) {
                return b = +b, fb(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                k()
            })), c.attributes = gb(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function (a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ab, bb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, z = b ? function (a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function (a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return db(b, l, null, [a]).length > 0
        }, db.contains = function (a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function (a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function (a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function (a) {
                    return function (b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function (a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                    function (b) {
                        var c;
                        do
                            if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === m
                },
                focus: function (a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return X.test(a.nodeName)
                },
                input: function (a) {
                    return W.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function () {
                    return [0]
                }),
                last: lb(function (a, b) {
                    return [b - 1]
                }),
                eq: lb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: lb(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: lb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: lb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = jb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = kb(b);

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function rb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) {
                    return a === b
                }, i, !0), l = qb(function (a) {
                    return I.call(b, a) > -1
                }, i, !0), m = [
                    function (a, c, d) {
                        return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                    }
                ]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++])
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !! j, k(), c.sortDetached = gb(function (a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function (a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return y.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function (a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function (a) {
            return E(a, "nextSibling")
        },
        prev: function (a) {
            return E(a, "previousSibling")
        },
        nextAll: function (a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return n.sibling(a.firstChild)
        },
        contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g,
        G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function (a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            }, k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function () {
                    return h && n.each(arguments, function (a, c) {
                        var d;
                        while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], e = 0, this
                },
                disable: function () {
                    return h = i = c = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, c || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                ["notify", "progress", n.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function (b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
        else {
            z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    };
    var L = "undefined",
        M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function () {
        var a, b, c = z.getElementsByTagName("body")[0];
        c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
    }),
    function () {
        var a = z.createElement("div");
        if (null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
        }
        a = null
    }(), n.acceptData = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !! a && !Q(a)
        },
        data: function (a, b, c) {
            return R(a, b, c)
        },
        removeData: function (a, b) {
            return S(a, b)
        },
        _data: function (a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function () {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        }, W = n.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }, X = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !! b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            l.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function () {
        var b, c, d = z.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function () {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
                else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
                    else if (mb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                    f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                n.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                    e = 0;
                    while (f = h[e++]) pb.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), n.fn.extend({
        text: function (a) {
            return W(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        },
        html: function (a) {
            return W(this, function (a) {
                var b = this[0] || {}, c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }! function () {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !! a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function () {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function (a) {
        return a.currentStyle
    }, Kb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Mb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function () {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !! b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
            reliableHiddenOffsets: function () {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"),
                    f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
            },
            boxSizing: function () {
                return null == d && k(), d
            },
            boxSizingReliable: function () {
                return null == e && k(), e
            },
            pixelPosition: function () {
                return null == f && k(), f
            },
            reliableMarginRight: function () {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }
        });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
                zoom: 1
            } : {}, function () {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), h.removeChild(b), c = h = null)
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Tb = {
            letterSpacing: 0,
            fontWeight: 400
        }, Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ub.length;
        while (e--)
            if (b = Ub[e] + c, b in a) return b;
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function () {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function (a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, Kb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function (a, b) {
            return W(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Wb(this, !0)
        },
        hide: function () {
            return Wb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b, $b.prototype = {
        constructor: $b,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = cc.exec(b),
                        f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                        g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };

    function gc() {
        return setTimeout(function () {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {
                height: a
            }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {}, p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, m.always(function () {
            m.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
                n(a).hide()
            }), m.done(function () {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _b || gc(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? ec.unshift(a) : ec.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function () {
                    var b = lc(this, n.extend({}, a), f);
                    (e || n._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = n._data(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = n._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: hc("show"),
        slideUp: hc("hide"),
        slideToggle: hc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = n.timers,
            c = 0;
        for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(), _b = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        ac || (ac = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(ac), ac = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    },
    function () {
        var a, b, c, d, e = z.createElement("div");
        e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !! b.value, l.optSelected = d.selected, l.enctype = !! z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
    }();
    var mc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function (a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function (a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function (a, b) {
        n.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = n.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
        n.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {}, Jc = {}, Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nc(a, b, c, d) {
        var e = {}, f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {}, r = {}, s = {}, t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function (a) {
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0,
        Yc = {}, Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function () {
        for (var a in Yc) Yc[a](void 0, !0)
    }), l.cors = !! Zc && "withCredentials" in Zc, Zc = l.ajax = !! Zc, Zc && n.ajaxTransport(function (a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function (d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                }, e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function (d) {
            return W(this, function (a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function (a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var fd = a.jQuery,
        gd = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});
//# sourceMappingURL=jquery.min.map
;
/*
 AngularJS v1.2.15-build.2399+sha.ca4ddfa
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (D, U, s) {
    'use strict';

    function F(b) {
        return function () {
            var a = arguments[0],
                c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.15-build.2399+sha.ca4ddfa/" + (b ? b + "/" : "") + a;
            for (c = 1; c < arguments.length; c++) a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(a)
        }
    }

    function xb(b) {
        if (null ==
            b || za(b)) return !1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : y(b) || I(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function r(b, a, c) {
        var d;
        if (b)
            if (O(b))
                for (d in b) "prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
            else if (b.forEach && b.forEach !== r) b.forEach(a, c);
        else if (xb(b))
            for (d = 0; d < b.length; d++) a.call(c, b[d], d);
        else
            for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function Sb(b) {
        var a = [],
            c;
        for (c in b) b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function Zc(b, a, c) {
        for (var d = Sb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d
    }

    function Tb(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function ab() {
        for (var b = ia.length, a; b;) {
            b--;
            a = ia[b].charCodeAt(0);
            if (57 == a) return ia[b] = "A", ia.join("");
            if (90 == a) ia[b] = "0";
            else return ia[b] = String.fromCharCode(a + 1), ia.join("")
        }
        ia.unshift("0");
        return ia.join("")
    }

    function Ub(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function t(b) {
        var a = b.$$hashKey;
        r(arguments, function (a) {
            a !== b && r(a, function (a, c) {
                b[c] = a
            })
        });
        Ub(b, a);
        return b
    }

    function R(b) {
        return parseInt(b, 10)
    }

    function Vb(b, a) {
        return t(new(t(function () {}, {
            prototype: b
        })), a)
    }

    function x() {}

    function Aa(b) {
        return b
    }

    function $(b) {
        return function () {
            return b
        }
    }

    function C(b) {
        return "undefined" === typeof b
    }

    function v(b) {
        return "undefined" !== typeof b
    }

    function X(b) {
        return null != b && "object" === typeof b
    }

    function y(b) {
        return "string" === typeof b
    }

    function yb(b) {
        return "number" === typeof b
    }

    function na(b) {
        return "[object Date]" === Ba.call(b)
    }

    function I(b) {
        return "[object Array]" === Ba.call(b)
    }

    function O(b) {
        return "function" ===
            typeof b
    }

    function bb(b) {
        return "[object RegExp]" === Ba.call(b)
    }

    function za(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function $c(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function ad(b, a, c) {
        var d = [];
        r(b, function (b, f, h) {
            d.push(a.call(c, b, f, h))
        });
        return d
    }

    function cb(b, a) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0; c < b.length; c++)
            if (a === b[c]) return c;
        return -1
    }

    function Ma(b, a) {
        var c = cb(b, a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function ba(b, a) {
        if (za(b) || b && b.$evalAsync && b.$watch) throw Na("cpws");
        if (a) {
            if (b === a) throw Na("cpi");
            if (I(b))
                for (var c = a.length = 0; c < b.length; c++) a.push(ba(b[c]));
            else {
                c = a.$$hashKey;
                r(a, function (b, c) {
                    delete a[c]
                });
                for (var d in b) a[d] = ba(b[d]);
                Ub(a, c)
            }
        } else(a = b) && (I(b) ? a = ba(b, []) : na(b) ? a = new Date(b.getTime()) : bb(b) ? a = RegExp(b.source) : X(b) && (a = ba(b, {})));
        return a
    }

    function Wb(b, a) {
        a = a || {};
        for (var c in b)!b.hasOwnProperty(c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
        return a
    }

    function ta(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b,
            d;
        if (c == typeof a && "object" == c)
            if (I(b)) {
                if (!I(a)) return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!ta(b[d], a[d])) return !1;
                    return !0
                }
            } else {
                if (na(b)) return na(a) && b.getTime() == a.getTime();
                if (bb(b) && bb(a)) return b.toString() == a.toString();
                if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || za(b) || za(a) || I(a)) return !1;
                c = {};
                for (d in b)
                    if ("$" !== d.charAt(0) && !O(b[d])) {
                        if (!ta(b[d], a[d])) return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== s && !O(a[d])) return !1;
                return !0
            }
        return !1
    }

    function Xb() {
        return U.securityPolicy && U.securityPolicy.isActive || U.querySelector && !(!U.querySelector("[ng-csp]") && !U.querySelector("[data-ng-csp]"))
    }

    function db(b, a) {
        var c = 2 < arguments.length ? ua.call(arguments, 2) : [];
        return !O(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, c.concat(ua.call(arguments, 0))) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function bd(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c =
            s : za(a) ? c = "$WINDOW" : a && U === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
        return c
    }

    function oa(b, a) {
        return "undefined" === typeof b ? s : JSON.stringify(b, bd, a ? "  " : null)
    }

    function Yb(b) {
        return y(b) ? JSON.parse(b) : b
    }

    function Oa(b) {
        "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = P("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b
    }

    function fa(b) {
        b = z(b).clone();
        try {
            b.empty()
        } catch (a) {}
        var c = z("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? P(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
                function (a, b) {
                    return "<" + P(b)
                })
        } catch (d) {
            return P(c)
        }
    }

    function Zb(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {}
    }

    function $b(b) {
        var a = {}, c, d;
        r((b || "").split("&"), function (b) {
            b && (c = b.split("="), d = Zb(c[0]), v(d) && (b = v(c[1]) ? Zb(c[1]) : !0, a[d] ? I(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function ac(b) {
        var a = [];
        r(b, function (b, d) {
            I(b) ? r(b, function (b) {
                a.push(va(d, !0) + (!0 === b ? "" : "=" + va(b, !0)))
            }) : a.push(va(d, !0) + (!0 === b ? "" : "=" + va(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function zb(b) {
        return va(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function va(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }

    function cd(b, a) {
        function c(a) {
            a && d.push(a)
        }
        var d = [b],
            e, f, h = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
            g = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        r(h, function (a) {
            h[a] = !0;
            c(U.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." +
                a + "\\:"), c), r(b.querySelectorAll("[" + a + "]"), c))
        });
        r(d, function (a) {
            if (!e) {
                var b = g.exec(" " + a.className + " ");
                b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function (b) {
                    !e && h[b.name] && (e = a, f = b.value)
                })
            }
        });
        e && a(e, f ? [f] : [])
    }

    function bc(b, a) {
        var c = function () {
            b = z(b);
            if (b.injector()) {
                var c = b[0] === U ? "document" : fa(b);
                throw Na("btstrpd", c);
            }
            a = a || [];
            a.unshift(["$provide",
                function (a) {
                    a.value("$rootElement", b)
                }
            ]);
            a.unshift("ng");
            c = cc(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
                function (a, b, c, d, e) {
                    a.$apply(function () {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }
            ]);
            return c
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (D && !d.test(D.name)) return c();
        D.name = D.name.replace(d, "");
        Ca.resumeBootstrap = function (b) {
            r(b, function (b) {
                a.push(b)
            });
            c()
        }
    }

    function eb(b, a) {
        a = a || "_";
        return b.replace(dd, function (b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Ab(b, a, c) {
        if (!b) throw Na("areq", a || "?", c || "required");
        return b
    }

    function Pa(b, a, c) {
        c && I(b) && (b = b[b.length - 1]);
        Ab(O(b), a, "not a function, got " + (b && "object" == typeof b ?
            b.constructor.name || "Object" : typeof b));
        return b
    }

    function wa(b, a) {
        if ("hasOwnProperty" === b) throw Na("badname", a);
    }

    function dc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, h = 0; h < f; h++) d = a[h], b && (b = (e = b)[d]);
        return !c && O(b) ? db(e, b) : b
    }

    function Bb(b) {
        var a = b[0];
        b = b[b.length - 1];
        if (a === b) return z(a);
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a)
        } while (a !== b);
        return z(c)
    }

    function ed(b) {
        var a = F("$injector"),
            c = F("ng");
        b = b.angular || (b.angular = {});
        b.$$minErr = b.$$minErr || F;
        return b.module ||
            (b.module = function () {
            var b = {};
            return function (e, f, h) {
                if ("hasOwnProperty" === e) throw c("badname", "module");
                f && b.hasOwnProperty(e) && (b[e] = null);
                return b[e] || (b[e] = function () {
                    function b(a, d, e) {
                        return function () {
                            c[e || "push"]([a, d, arguments]);
                            return n
                        }
                    }
                    if (!f) throw a("nomod", e);
                    var c = [],
                        d = [],
                        l = b("$injector", "invoke"),
                        n = {
                            _invokeQueue: c,
                            _runBlocks: d,
                            requires: f,
                            name: e,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: b("$provide", "value"),
                            constant: b("$provide",
                                "constant", "unshift"),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            config: l,
                            run: function (a) {
                                d.push(a);
                                return this
                            }
                        };
                    h && l(h);
                    return n
                }())
            }
        }())
    }

    function Qa(b) {
        return b.replace(fd, function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(gd, "Moz$1")
    }

    function Cb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [this.filter(b)] : [this],
                m = a,
                k, l, n, q, p, A;
            if (!d || null != b)
                for (; e.length;)
                    for (k = e.shift(),
                        l = 0, n = k.length; l < n; l++)
                        for (q = z(k[l]), m ? q.triggerHandler("$destroy") : m = !m, p = 0, q = (A = q.children()).length; p < q; p++) e.push(Da(A[p]));
            return f.apply(this, arguments)
        }
        var f = Da.fn[b],
            f = f.$original || f;
        e.$original = f;
        Da.fn[b] = e
    }

    function S(b) {
        if (b instanceof S) return b;
        y(b) && (b = ca(b));
        if (!(this instanceof S)) {
            if (y(b) && "<" != b.charAt(0)) throw Db("nosel");
            return new S(b)
        }
        if (y(b)) {
            var a = U.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            Eb(this, a.childNodes);
            z(U.createDocumentFragment()).append(this)
        } else Eb(this,
            b)
    }

    function Fb(b) {
        return b.cloneNode(!0)
    }

    function Ea(b) {
        ec(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++) Ea(b[a])
    }

    function fc(b, a, c, d) {
        if (v(d)) throw Db("offargs");
        var e = ja(b, "events");
        ja(b, "handle") && (C(a) ? r(e, function (a, c) {
            Gb(b, c, a);
            delete e[c]
        }) : r(a.split(" "), function (a) {
            C(c) ? (Gb(b, a, e[a]), delete e[a]) : Ma(e[a] || [], c)
        }))
    }

    function ec(b, a) {
        var c = b[fb],
            d = Ra[c];
        d && (a ? delete Ra[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), fc(b)), delete Ra[c], b[fb] = s))
    }

    function ja(b, a, c) {
        var d =
            b[fb],
            d = Ra[d || -1];
        if (v(c)) d || (b[fb] = d = ++hd, d = Ra[d] = {}), d[a] = c;
        else return d && d[a]
    }

    function gc(b, a, c) {
        var d = ja(b, "data"),
            e = v(c),
            f = !e && v(a),
            h = f && !X(a);
        d || h || ja(b, "data", d = {});
        if (e) d[a] = c;
        else if (f) {
            if (h) return d && d[a];
            t(d, a)
        } else return d
    }

    function Hb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function gb(b, a) {
        a && b.setAttribute && r(a.split(" "), function (a) {
            b.setAttribute("class", ca((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g,
                " ").replace(" " + ca(a) + " ", " ")))
        })
    }

    function hb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function (a) {
                a = ca(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", ca(c))
        }
    }

    function Eb(b, a) {
        if (a) {
            a = a.nodeName || !v(a.length) || za(a) ? [a] : a;
            for (var c = 0; c < a.length; c++) b.push(a[c])
        }
    }

    function hc(b, a) {
        return ib(b, "$" + (a || "ngController") + "Controller")
    }

    function ib(b, a, c) {
        b = z(b);
        9 == b[0].nodeType && (b = b.find("html"));
        for (a = I(a) ? a : [a]; b.length;) {
            for (var d =
                0, e = a.length; d < e; d++)
                if ((c = b.data(a[d])) !== s) return c;
            b = b.parent()
        }
    }

    function ic(b) {
        for (var a = 0, c = b.childNodes; a < c.length; a++) Ea(c[a]);
        for (; b.firstChild;) b.removeChild(b.firstChild)
    }

    function jc(b, a) {
        var c = jb[a.toLowerCase()];
        return c && kc[b.nodeName] && c
    }

    function id(b, a) {
        var c = function (c, e) {
            c.preventDefault || (c.preventDefault = function () {
                c.returnValue = !1
            });
            c.stopPropagation || (c.stopPropagation = function () {
                c.cancelBubble = !0
            });
            c.target || (c.target = c.srcElement || U);
            if (C(c.defaultPrevented)) {
                var f = c.preventDefault;
                c.preventDefault = function () {
                    c.defaultPrevented = !0;
                    f.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function () {
                return c.defaultPrevented || !1 === c.returnValue
            };
            var h = Wb(a[e || c.type] || []);
            r(h, function (a) {
                a.call(b, c)
            });
            8 >= Q ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function Fa(b) {
        var a = typeof b,
            c;
        "object" == a && null !== b ? "function" == typeof (c = b.$$hashKey) ? c = b.$$hashKey() : c ===
            s && (c = b.$$hashKey = ab()) : c = b;
        return a + ":" + c
    }

    function Sa(b) {
        r(b, this.put, this)
    }

    function lc(b) {
        var a, c;
        "function" == typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(jd, ""), c = c.match(kd), r(c[1].split(ld), function (b) {
            b.replace(md, function (b, c, d) {
                a.push(d)
            })
        })), b.$inject = a) : I(b) ? (c = b.length - 1, Pa(b[c], "fn"), a = b.slice(0, c)) : Pa(b, "fn", !0);
        return a
    }

    function cc(b) {
        function a(a) {
            return function (b, c) {
                if (X(b)) r(b, Tb(a));
                else return a(b, c)
            }
        }

        function c(a, b) {
            wa(a, "service");
            if (O(b) || I(b)) b = n.instantiate(b);
            if (!b.$get) throw Ta("pget", a);
            return l[a + g] = b
        }

        function d(a, b) {
            return c(a, {
                $get: b
            })
        }

        function e(a) {
            var b = [],
                c, d, f, g;
            r(a, function (a) {
                if (!k.get(a)) {
                    k.put(a, !0);
                    try {
                        if (y(a))
                            for (c = Ua(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, f = 0, g = d.length; f < g; f++) {
                                var h = d[f],
                                    m = n.get(h[0]);
                                m[h[1]].apply(m, h[2])
                            } else O(a) ? b.push(n.invoke(a)) : I(a) ? b.push(n.invoke(a)) : Pa(a, "module")
                    } catch (l) {
                        throw I(a) && (a = a[a.length - 1]), l.message && (l.stack && -1 == l.stack.indexOf(l.message)) && (l = l.message + "\n" + l.stack),
                        Ta("modulerr", a, l.stack || l.message || l);
                    }
                }
            });
            return b
        }

        function f(a, b) {
            function c(d) {
                if (a.hasOwnProperty(d)) {
                    if (a[d] === h) throw Ta("cdep", m.join(" <- "));
                    return a[d]
                }
                try {
                    return m.unshift(d), a[d] = h, a[d] = b(d)
                } catch (e) {
                    throw a[d] === h && delete a[d], e;
                } finally {
                    m.shift()
                }
            }

            function d(a, b, e) {
                var f = [],
                    g = lc(a),
                    h, k, m;
                k = 0;
                for (h = g.length; k < h; k++) {
                    m = g[k];
                    if ("string" !== typeof m) throw Ta("itkn", m);
                    f.push(e && e.hasOwnProperty(m) ? e[m] : c(m))
                }
                a.$inject || (a = a[h]);
                return a.apply(b, f)
            }
            return {
                invoke: d,
                instantiate: function (a,
                    b) {
                    var c = function () {}, e;
                    c.prototype = (I(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return X(e) || O(e) ? e : c
                },
                get: c,
                annotate: lc,
                has: function (b) {
                    return l.hasOwnProperty(b + g) || a.hasOwnProperty(b)
                }
            }
        }
        var h = {}, g = "Provider",
            m = [],
            k = new Sa,
            l = {
                $provide: {
                    provider: a(c),
                    factory: a(d),
                    service: a(function (a, b) {
                        return d(a, ["$injector",
                            function (a) {
                                return a.instantiate(b)
                            }
                        ])
                    }),
                    value: a(function (a, b) {
                        return d(a, $(b))
                    }),
                    constant: a(function (a, b) {
                        wa(a, "constant");
                        l[a] = b;
                        q[a] = b
                    }),
                    decorator: function (a, b) {
                        var c = n.get(a + g),
                            d = c.$get;
                        c.$get = function () {
                            var a = p.invoke(d, c);
                            return p.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            }, n = l.$injector = f(l, function () {
                throw Ta("unpr", m.join(" <- "));
            }),
            q = {}, p = q.$injector = f(q, function (a) {
                a = n.get(a + g);
                return p.invoke(a.$get, a)
            });
        r(e(b), function (a) {
            p.invoke(a || x)
        });
        return p
    }

    function nd() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope",
            function (a, c, d) {
                function e(a) {
                    var b = null;
                    r(a, function (a) {
                        b || "a" !== P(a.nodeName) || (b = a)
                    });
                    return b
                }

                function f() {
                    var b =
                        c.hash(),
                        d;
                    b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
                }
                var h = a.document;
                b && d.$watch(function () {
                    return c.hash()
                }, function () {
                    d.$evalAsync(f)
                });
                return f
            }
        ]
    }

    function od() {
        this.$get = ["$$rAF", "$timeout",
            function (b, a) {
                return b.supported ? function (a) {
                    return b(a)
                } : function (b) {
                    return a(b, 0, !1)
                }
            }
        ]
    }

    function pd(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ua.call(arguments, 1))
            } finally {
                if (A--, 0 === A)
                    for (; E.length;) try {
                        E.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function f(a, b) {
            (function lb() {
                r(B, function (a) {
                    a()
                });
                u = b(lb, a)
            })()
        }

        function h() {
            w = null;
            H != g.url() && (H = g.url(), r(Y, function (a) {
                a(g.url())
            }))
        }
        var g = this,
            m = a[0],
            k = b.location,
            l = b.history,
            n = b.setTimeout,
            q = b.clearTimeout,
            p = {};
        g.isMock = !1;
        var A = 0,
            E = [];
        g.$$completeOutstandingRequest = e;
        g.$$incOutstandingRequestCount = function () {
            A++
        };
        g.notifyWhenNoOutstandingRequests = function (a) {
            r(B, function (a) {
                a()
            });
            0 === A ? a() : E.push(a)
        };
        var B = [],
            u;
        g.addPollFn = function (a) {
            C(u) && f(100, n);
            B.push(a);
            return a
        };
        var H = k.href,
            J = a.find("base"),
            w = null;
        g.url = function (a, c) {
            k !== b.location && (k = b.location);
            l !== b.history && (l = b.history);
            if (a) {
                if (H != a) return H = a, d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), J.attr("href", J.attr("href"))) : (w = a, c ? k.replace(a) : k.href = a), g
            } else return w || k.href.replace(/%27/g, "'")
        };
        var Y = [],
            T = !1;
        g.onUrlChange = function (a) {
            if (!T) {
                if (d.history) z(b).on("popstate", h);
                if (d.hashchange) z(b).on("hashchange", h);
                else g.addPollFn(h);
                T = !0
            }
            Y.push(a);
            return a
        };
        g.baseHref = function () {
            var a = J.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/,
                "") : ""
        };
        var M = {}, aa = "",
            V = g.baseHref();
        g.cookies = function (a, b) {
            var d, e, f, g;
            if (a) b === s ? m.cookie = escape(a) + "=;path=" + V + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : y(b) && (d = (m.cookie = escape(a) + "=" + escape(b) + ";path=" + V).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
            else {
                if (m.cookie !== aa)
                    for (aa = m.cookie, d = aa.split("; "), M = {}, f = 0; f < d.length; f++) e = d[f], g = e.indexOf("="), 0 < g && (a = unescape(e.substring(0, g)), M[a] === s && (M[a] = unescape(e.substring(g +
                        1))));
                return M
            }
        };
        g.defer = function (a, b) {
            var c;
            A++;
            c = n(function () {
                delete p[c];
                e(a)
            }, b || 0);
            p[c] = !0;
            return c
        };
        g.defer.cancel = function (a) {
            return p[a] ? (delete p[a], q(a), e(x), !0) : !1
        }
    }

    function qd() {
        this.$get = ["$window", "$log", "$sniffer", "$document",
            function (b, a, c, d) {
                return new pd(b, d, a, c)
            }
        ]
    }

    function rd() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (b in a) throw F("$cacheFactory")("iid", b);
                var h =
                    0,
                    g = t({}, d, {
                        id: b
                    }),
                    m = {}, k = d && d.capacity || Number.MAX_VALUE,
                    l = {}, n = null,
                    q = null;
                return a[b] = {
                    put: function (a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = l[a] || (l[a] = {
                                key: a
                            });
                            e(c)
                        }
                        if (!C(b)) return a in m || h++, m[a] = b, h > k && this.remove(q.key), b
                    },
                    get: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            e(b)
                        }
                        return m[a]
                    },
                    remove: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            b == n && (n = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete l[a]
                        }
                        delete m[a];
                        h--
                    },
                    removeAll: function () {
                        m = {};
                        h = 0;
                        l = {};
                        n = q = null
                    },
                    destroy: function () {
                        l =
                            g = m = null;
                        delete a[b]
                    },
                    info: function () {
                        return t({}, g, {
                            size: h
                        })
                    }
                }
            }
            var a = {};
            b.info = function () {
                var b = {};
                r(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function sd() {
        this.$get = ["$cacheFactory",
            function (b) {
                return b("templates")
            }
        ]
    }

    function mc(b, a) {
        var c = {}, d = "Directive",
            e = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            f = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            h = /^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i,
            g = /^(on[a-z]+|formaction)$/;
        this.directive = function k(a, e) {
            wa(a, "directive");
            y(a) ? (Ab(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, ["$injector", "$exceptionHandler",
                function (b, d) {
                    var e = [];
                    r(c[a], function (c, f) {
                        try {
                            var g = b.invoke(c);
                            O(g) ? g = {
                                compile: $(g)
                            } : !g.compile && g.link && (g.compile = $(g.link));
                            g.priority = g.priority || 0;
                            g.index = f;
                            g.name = g.name || a;
                            g.require = g.require || g.controller && g.name;
                            g.restrict = g.restrict || "A";
                            e.push(g)
                        } catch (h) {
                            d(h)
                        }
                    });
                    return e
                }
            ])), c[a].push(e)) : r(a, Tb(k));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return v(b) ? (a.aHrefSanitizationWhitelist(b),
                this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return v(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
            function (a, b, n, q, p, A, E, B, u, H, J, w) {
                function Y(a, b, c, d, e) {
                    a instanceof z || (a = z(a));
                    r(a, function (b, c) {
                        3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = z(b).wrap("<span></span>").parent()[0])
                    });
                    var f = M(a, b, a, c, d, e);
                    T(a, "ng-scope");
                    return function (b, c, d) {
                        Ab(b, "scope");
                        var e = c ? Ga.clone.call(a) : a;
                        r(d, function (a, b) {
                            e.data("$" + b + "Controller", a)
                        });
                        d = 0;
                        for (var g = e.length; d < g; d++) {
                            var h = e[d].nodeType;
                            1 !== h && 9 !== h || e.eq(d).data("$scope", b)
                        }
                        c && c(e, b);
                        f && f(b, e, e);
                        return e
                    }
                }

                function T(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function M(a, b, c, d, e, f) {
                    function g(a, c, d, e) {
                        var f, k, l, n, p, q, A;
                        f = c.length;
                        var L = Array(f);
                        for (p = 0; p < f; p++) L[p] = c[p];
                        A = p = 0;
                        for (q = h.length; p < q; A++) k = L[A], c = h[p++], f = h[p++], l = z(k), c ? (c.scope ?
                            (n = a.$new(), l.data("$scope", n)) : n = a, (l = c.transclude) || !e && b ? c(f, n, k, d, aa(a, l || b)) : c(f, n, k, d, e)) : f && f(a, k.childNodes, s, e)
                    }
                    for (var h = [], k, l, n, p, q = 0; q < a.length; q++) k = new Ib, l = V(a[q], [], k, 0 === q ? d : s, e), (f = l.length ? Va(l, a[q], k, b, c, null, [], [], f) : null) && f.scope && T(z(a[q]), "ng-scope"), k = f && f.terminal || !(n = a[q].childNodes) || !n.length ? null : M(n, f ? f.transclude : b), h.push(f, k), p = p || f || k, f = null;
                    return p ? g : null
                }

                function aa(a, b) {
                    return function (c, d, e) {
                        var f = !1;
                        c || (c = a.$new(), f = c.$$transcluded = !0);
                        d = b(c, d, e);
                        if (f) d.on("$destroy",
                            db(c, c.$destroy));
                        return d
                    }
                }

                function V(a, b, c, d, g) {
                    var h = c.$attr,
                        k;
                    switch (a.nodeType) {
                    case 1:
                        v(b, ka(Ha(a).toLowerCase()), "E", d, g);
                        var l, n, p;
                        k = a.attributes;
                        for (var q = 0, A = k && k.length; q < A; q++) {
                            var E = !1,
                                H = !1;
                            l = k[q];
                            if (!Q || 8 <= Q || l.specified) {
                                n = l.name;
                                p = ka(n);
                                pa.test(p) && (n = eb(p.substr(6), "-"));
                                var B = p.replace(/(Start|End)$/, "");
                                p === B + "Start" && (E = n, H = n.substr(0, n.length - 5) + "end", n = n.substr(0, n.length - 6));
                                p = ka(n.toLowerCase());
                                h[p] = n;
                                c[p] = l = ca(l.value);
                                jc(a, p) && (c[p] = !0);
                                ga(a, b, l, p);
                                v(b, p, "A", d, g, E, H)
                            }
                        }
                        a =
                            a.className;
                        if (y(a) && "" !== a)
                            for (; k = f.exec(a);) p = ka(k[2]), v(b, p, "C", d, g) && (c[p] = ca(k[3])), a = a.substr(k.index + k[0].length);
                        break;
                    case 3:
                        D(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (k = e.exec(a.nodeValue)) p = ka(k[1]), v(b, p, "M", d, g) && (c[p] = ca(k[2]))
                        } catch (w) {}
                    }
                    b.sort(F);
                    return b
                }

                function N(a, b, c) {
                    var d = [],
                        e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a) throw ha("uterdir", b, c);
                            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                            d.push(a);
                            a = a.nextSibling
                        } while (0 < e)
                    } else d.push(a);
                    return z(d)
                }

                function kb(a,
                    b, c) {
                    return function (d, e, f, g, h) {
                        e = N(e[0], b, c);
                        return a(d, e, f, g, h)
                    }
                }

                function Va(a, c, d, e, f, g, h, k, p) {
                    function q(a, b, c, d) {
                        if (a) {
                            c && (a = kb(a, c, d));
                            a.require = G.require;
                            if (M === G || G.$$isolateScope) a = nc(a, {
                                isolateScope: !0
                            });
                            h.push(a)
                        }
                        if (b) {
                            c && (b = kb(b, c, d));
                            b.require = G.require;
                            if (M === G || G.$$isolateScope) b = nc(b, {
                                isolateScope: !0
                            });
                            k.push(b)
                        }
                    }

                    function H(a, b, c) {
                        var d, e = "data",
                            f = !1;
                        if (y(a)) {
                            for (;
                                "^" == (d = a.charAt(0)) || "?" == d;) a = a.substr(1), "^" == d && (e = "inheritedData"), f = f || "?" == d;
                            d = null;
                            c && "data" === e && (d = c[a]);
                            d = d ||
                                b[e]("$" + a + "Controller");
                            if (!d && !f) throw ha("ctreq", a, ga);
                        } else I(a) && (d = [], r(a, function (a) {
                            d.push(H(a, b, c))
                        }));
                        return d
                    }

                    function B(a, e, f, g, p) {
                        function q(a, b) {
                            var c;
                            2 > arguments.length && (b = a, a = s);
                            Ia && (c = v);
                            return p(a, b, c)
                        }
                        var L, w, u, Y, N, V, v = {}, mb;
                        L = c === f ? d : Wb(d, new Ib(z(f), d.$attr));
                        w = L.$$element;
                        if (M) {
                            var t = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                            g = z(f);
                            V = e.$new(!0);
                            aa && aa === M.$$originalDirective ? g.data("$isolateScope", V) : g.data("$isolateScopeNoTemplate", V);
                            T(g, "ng-isolate-scope");
                            r(M.scope, function (a, c) {
                                var d =
                                    a.match(t) || [],
                                    f = d[3] || c,
                                    g = "?" == d[2],
                                    d = d[1],
                                    h, k, p, n;
                                V.$$isolateBindings[c] = d + f;
                                switch (d) {
                                case "@":
                                    L.$observe(f, function (a) {
                                        V[c] = a
                                    });
                                    L.$$observers[f].$$scope = e;
                                    L[f] && (V[c] = b(L[f])(e));
                                    break;
                                case "=":
                                    if (g && !L[f]) break;
                                    k = A(L[f]);
                                    n = k.literal ? ta : function (a, b) {
                                        return a === b
                                    };
                                    p = k.assign || function () {
                                        h = V[c] = k(e);
                                        throw ha("nonassign", L[f], M.name);
                                    };
                                    h = V[c] = k(e);
                                    V.$watch(function () {
                                        var a = k(e);
                                        n(a, V[c]) || (n(a, h) ? p(e, a = V[c]) : V[c] = a);
                                        return h = a
                                    }, null, k.literal);
                                    break;
                                case "&":
                                    k = A(L[f]);
                                    V[c] = function (a) {
                                        return k(e,
                                            a)
                                    };
                                    break;
                                default:
                                    throw ha("iscp", M.name, c, a);
                                }
                            })
                        }
                        mb = p && q;
                        J && r(J, function (a) {
                            var b = {
                                $scope: a === M || a.$$isolateScope ? V : e,
                                $element: w,
                                $attrs: L,
                                $transclude: mb
                            }, c;
                            N = a.controller;
                            "@" == N && (N = L[a.name]);
                            c = E(N, b);
                            v[a.name] = c;
                            Ia || w.data("$" + a.name + "Controller", c);
                            a.controllerAs && (b.$scope[a.controllerAs] = c)
                        });
                        g = 0;
                        for (u = h.length; g < u; g++) try {
                            Y = h[g], Y(Y.isolateScope ? V : e, w, L, Y.require && H(Y.require, w, v), mb)
                        } catch (K) {
                            n(K, fa(w))
                        }
                        g = e;
                        M && (M.template || null === M.templateUrl) && (g = V);
                        a && a(g, f.childNodes, s, p);
                        for (g = k.length -
                            1; 0 <= g; g--) try {
                            Y = k[g], Y(Y.isolateScope ? V : e, w, L, Y.require && H(Y.require, w, v), mb)
                        } catch (kb) {
                            n(kb, fa(w))
                        }
                    }
                    p = p || {};
                    for (var w = -Number.MAX_VALUE, u, J = p.controllerDirectives, M = p.newIsolateScopeDirective, aa = p.templateDirective, v = p.nonTlbTranscludeDirective, Va = !1, Ia = p.hasElementTranscludeDirective, K = d.$$element = z(c), G, ga, t, F = e, pa, D = 0, Q = a.length; D < Q; D++) {
                        G = a[D];
                        var R = G.$$start,
                            W = G.$$end;
                        R && (K = N(c, R, W));
                        t = s;
                        if (w > G.priority) break;
                        if (t = G.scope) u = u || G, G.templateUrl || (S("new/isolated scope", M, G, K), X(t) && (M = G));
                        ga =
                            G.name;
                        !G.templateUrl && G.controller && (t = G.controller, J = J || {}, S("'" + ga + "' controller", J[ga], G, K), J[ga] = G);
                        if (t = G.transclude) Va = !0, G.$$tlb || (S("transclusion", v, G, K), v = G), "element" == t ? (Ia = !0, w = G.priority, t = N(c, R, W), K = d.$$element = z(U.createComment(" " + ga + ": " + d[ga] + " ")), c = K[0], nb(f, z(ua.call(t, 0)), c), F = Y(t, e, w, g && g.name, {
                            nonTlbTranscludeDirective: v
                        })) : (t = z(Fb(c)).contents(), K.empty(), F = Y(t, e));
                        if (G.template)
                            if (S("template", aa, G, K), aa = G, t = O(G.template) ? G.template(K, d) : G.template, t = oc(t), G.replace) {
                                g =
                                    G;
                                t = C(t);
                                c = t[0];
                                if (1 != t.length || 1 !== c.nodeType) throw ha("tplrt", ga, "");
                                nb(f, K, c);
                                Q = {
                                    $attr: {}
                                };
                                t = V(c, [], Q);
                                var Z = a.splice(D + 1, a.length - (D + 1));
                                M && lb(t);
                                a = a.concat(t).concat(Z);
                                x(d, Q);
                                Q = a.length
                            } else K.html(t);
                        if (G.templateUrl) S("template", aa, G, K), aa = G, G.replace && (g = G), B = P(a.splice(D, a.length - D), K, d, f, F, h, k, {
                            controllerDirectives: J,
                            newIsolateScopeDirective: M,
                            templateDirective: aa,
                            nonTlbTranscludeDirective: v
                        }), Q = a.length;
                        else if (G.compile) try {
                            pa = G.compile(K, d, F), O(pa) ? q(null, pa, R, W) : pa && q(pa.pre, pa.post,
                                R, W)
                        } catch ($) {
                            n($, fa(K))
                        }
                        G.terminal && (B.terminal = !0, w = Math.max(w, G.priority))
                    }
                    B.scope = u && !0 === u.scope;
                    B.transclude = Va && F;
                    p.hasElementTranscludeDirective = Ia;
                    return B
                }

                function lb(a) {
                    for (var b = 0, c = a.length; b < c; b++) a[b] = Vb(a[b], {
                        $$isolateScope: !0
                    })
                }

                function v(b, e, f, g, h, l, p) {
                    if (e === h) return null;
                    h = null;
                    if (c.hasOwnProperty(e)) {
                        var q;
                        e = a.get(e + d);
                        for (var A = 0, E = e.length; A < E; A++) try {
                            q = e[A], (g === s || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Vb(q, {
                                $$start: l,
                                $$end: p
                            })), b.push(q), h = q)
                        } catch (H) {
                            n(H)
                        }
                    }
                    return h
                }

                function x(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    r(a, function (d, e) {
                        "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    });
                    r(b, function (b, f) {
                        "class" == f ? (T(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function C(a) {
                    var b;
                    a = ca(a);
                    if (b = h.exec(a)) {
                        b = b[1].toLowerCase();
                        a = z("<table>" + a + "</table>");
                        if (/(thead|tbody|tfoot)/.test(b)) return a.children(b);
                        a = a.children("tbody");
                        return "tr" === b ? a.children("tr") : a.children("tr").contents()
                    }
                    return z("<div>" + a + "</div>").contents()
                }

                function P(a, b, c, d, e, f, g, h) {
                    var k = [],
                        l, n, A = b[0],
                        E = a.shift(),
                        w = t({}, E, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: E
                        }),
                        B = O(E.templateUrl) ? E.templateUrl(b, c) : E.templateUrl;
                    b.empty();
                    q.get(H.getTrustedResourceUrl(B), {
                        cache: p
                    }).success(function (p) {
                        var q, H;
                        p = oc(p);
                        if (E.replace) {
                            p = C(p);
                            q = p[0];
                            if (1 != p.length || 1 !== q.nodeType) throw ha("tplrt", E.name, B);
                            p = {
                                $attr: {}
                            };
                            nb(d, b, q);
                            var u = V(q, [], p);
                            X(E.scope) && lb(u);
                            a = u.concat(a);
                            x(c, p)
                        } else q = A, b.html(p);
                        a.unshift(w);
                        l = Va(a, q, c, e, b, E, f, g, h);
                        r(d, function (a, c) {
                            a == q && (d[c] = b[0])
                        });
                        for (n = M(b[0].childNodes, e); k.length;) {
                            p = k.shift();
                            H = k.shift();
                            var J = k.shift(),
                                Y = k.shift(),
                                u = b[0];
                            if (H !== A) {
                                var N = H.className;
                                h.hasElementTranscludeDirective && E.replace || (u = Fb(q));
                                nb(J, z(H), u);
                                T(z(u), N)
                            }
                            H = l.transclude ? aa(p, l.transclude) : Y;
                            l(n, p, u, d, H)
                        }
                        k = null
                    }).error(function (a, b, c, d) {
                        throw ha("tpload", d.url);
                    });
                    return function (a, b, c, d, e) {
                        k ? (k.push(b),
                            k.push(c), k.push(d), k.push(e)) : l(n, b, c, d, e)
                    }
                }

                function F(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function S(a, b, c, d) {
                    if (b) throw ha("multidir", b.name, c.name, a, fa(d));
                }

                function D(a, c) {
                    var d = b(c, !0);
                    d && a.push({
                        priority: 0,
                        compile: $(function (a, b) {
                            var c = b.parent(),
                                e = c.data("$binding") || [];
                            e.push(d);
                            T(c.data("$binding", e), "ng-binding");
                            a.$watch(d, function (a) {
                                b[0].nodeValue = a
                            })
                        })
                    })
                }

                function Ia(a, b) {
                    if ("srcdoc" == b) return H.HTML;
                    var c = Ha(a);
                    if ("xlinkHref" ==
                        b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b)) return H.RESOURCE_URL
                }

                function ga(a, c, d, e) {
                    var f = b(d, !0);
                    if (f) {
                        if ("multiple" === e && "SELECT" === Ha(a)) throw ha("selmulti", fa(a));
                        c.push({
                            priority: 100,
                            compile: function () {
                                return {
                                    pre: function (c, d, h) {
                                        d = h.$$observers || (h.$$observers = {});
                                        if (g.test(e)) throw ha("nodomevents");
                                        if (f = b(h[e], !0, Ia(a, e))) h[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || c).$watch(f, function (a, b) {
                                            "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e,
                                                a)
                                        })
                                    }
                                }
                            }
                        })
                    }
                }

                function nb(a, b, c) {
                    var d = b[0],
                        e = b.length,
                        f = d.parentNode,
                        g, h;
                    if (a)
                        for (g = 0, h = a.length; g < h; g++)
                            if (a[g] == d) {
                                a[g++] = c;
                                h = g + e - 1;
                                for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
                                a.length -= e - 1;
                                break
                            }
                    f && f.replaceChild(c, d);
                    a = U.createDocumentFragment();
                    a.appendChild(d);
                    c[z.expando] = d[z.expando];
                    d = 1;
                    for (e = b.length; d < e; d++) f = b[d], z(f).remove(), a.appendChild(f), delete b[d];
                    b[0] = c;
                    b.length = 1
                }

                function nc(a, b) {
                    return t(function () {
                        return a.apply(null, arguments)
                    }, a, b)
                }
                var Ib = function (a, b) {
                    this.$$element =
                        a;
                    this.$attr = b || {}
                };
                Ib.prototype = {
                    $normalize: ka,
                    $addClass: function (a) {
                        a && 0 < a.length && J.addClass(this.$$element, a)
                    },
                    $removeClass: function (a) {
                        a && 0 < a.length && J.removeClass(this.$$element, a)
                    },
                    $updateClass: function (a, b) {
                        var c = pc(a, b),
                            d = pc(b, a);
                        0 === c.length ? J.removeClass(this.$$element, d) : 0 === d.length ? J.addClass(this.$$element, c) : J.setClass(this.$$element, c, d)
                    },
                    $set: function (a, b, c, d) {
                        var e = jc(this.$$element[0], a);
                        e && (this.$$element.prop(a, b), d = e);
                        this[a] = b;
                        d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] =
                            d = eb(a, "-"));
                        e = Ha(this.$$element);
                        if ("A" === e && "href" === a || "IMG" === e && "src" === a) this[a] = b = w(b, "src" === a);
                        !1 !== c && (null === b || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                        (c = this.$$observers) && r(c[a], function (a) {
                            try {
                                a(b)
                            } catch (c) {
                                n(c)
                            }
                        })
                    },
                    $observe: function (a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []);
                        e.push(b);
                        B.$evalAsync(function () {
                            e.$$inter || b(c[a])
                        });
                        return b
                    }
                };
                var R = b.startSymbol(),
                    W = b.endSymbol(),
                    oc = "{{" == R || "}}" == W ? Aa : function (a) {
                        return a.replace(/\{\{/g,
                            R).replace(/}}/g, W)
                    }, pa = /^ngAttr[A-Z]/;
                return Y
            }
        ]
    }

    function ka(b) {
        return Qa(b.replace(td, ""))
    }

    function pc(b, a) {
        var c = "",
            d = b.split(/\s+/),
            e = a.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
            for (var h = d[f], g = 0; g < e.length; g++)
                if (h == e[g]) continue a;
            c += (0 < c.length ? " " : "") + h
        }
        return c
    }

    function ud() {
        var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, d) {
            wa(a, "controller");
            X(a) ? t(b, a) : b[a] = d
        };
        this.$get = ["$injector", "$window",
            function (c, d) {
                return function (e, f) {
                    var h, g, m;
                    y(e) && (h = e.match(a), g = h[1], m = h[3], e =
                        b.hasOwnProperty(g) ? b[g] : dc(f.$scope, g, !0) || dc(d, g, !0), Pa(e, g, !0));
                    h = c.instantiate(e, f);
                    if (m) {
                        if (!f || "object" != typeof f.$scope) throw F("$controller")("noscp", g || e.name, m);
                        f.$scope[m] = h
                    }
                    return h
                }
            }
        ]
    }

    function vd() {
        this.$get = ["$window",
            function (b) {
                return z(b.document)
            }
        ]
    }

    function wd() {
        this.$get = ["$log",
            function (b) {
                return function (a, c) {
                    b.error.apply(b, arguments)
                }
            }
        ]
    }

    function qc(b) {
        var a = {}, c, d, e;
        if (!b) return a;
        r(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = P(ca(b.substr(0, e)));
            d = ca(b.substr(e + 1));
            c && (a[c] =
                a[c] ? a[c] + (", " + d) : d)
        });
        return a
    }

    function rc(b) {
        var a = X(b) ? b : s;
        return function (c) {
            a || (a = qc(b));
            return c ? a[P(c)] || null : a
        }
    }

    function sc(b, a, c) {
        if (O(c)) return c(b, a);
        r(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function xd() {
        var b = /^\s*(\[|\{[^\{])/,
            a = /[\}\]]\s*$/,
            c = /^\)\]\}',?\n/,
            d = {
                "Content-Type": "application/json;charset=utf-8"
            }, e = this.defaults = {
                transformResponse: [
                    function (d) {
                        y(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = Yb(d)));
                        return d
                    }
                ],
                transformRequest: [
                    function (a) {
                        return X(a) && "[object File]" !== Ba.call(a) ?
                            oa(a) : a
                    }
                ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: ba(d),
                    put: ba(d),
                    patch: ba(d)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            }, f = this.interceptors = [],
            h = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
            function (a, b, c, d, n, q) {
                function p(a) {
                    function c(a) {
                        var b = t({}, a, {
                            data: sc(a.data, a.headers, d.transformResponse)
                        });
                        return 200 <= a.status && 300 > a.status ? b : n.reject(b)
                    }
                    var d = {
                        method: "get",
                        transformRequest: e.transformRequest,
                        transformResponse: e.transformResponse
                    }, f = function (a) {
                            function b(a) {
                                var c;
                                r(a, function (b, d) {
                                    O(b) && (c = b(), null != c ? a[d] = c : delete a[d])
                                })
                            }
                            var c = e.headers,
                                d = t({}, a.headers),
                                f, g, c = t({}, c.common, c[P(a.method)]);
                            b(c);
                            b(d);
                            a: for (f in c) {
                                a = P(f);
                                for (g in d)
                                    if (P(g) === a) continue a;
                                d[f] = c[f]
                            }
                            return d
                        }(a);
                    t(d, a);
                    d.headers = f;
                    d.method = Ja(d.method);
                    (a = Jb(d.url) ? b.cookies()[d.xsrfCookieName || e.xsrfCookieName] : s) && (f[d.xsrfHeaderName || e.xsrfHeaderName] = a);
                    var g = [
                        function (a) {
                            f = a.headers;
                            var b = sc(a.data, rc(f), a.transformRequest);
                            C(a.data) && r(f, function (a, b) {
                                "content-type" === P(b) && delete f[b]
                            });
                            C(a.withCredentials) && !C(e.withCredentials) && (a.withCredentials = e.withCredentials);
                            return A(a, b, f).then(c, c)
                        },
                        s
                    ],
                        h = n.when(d);
                    for (r(u, function (a) {
                        (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                        (a.response || a.responseError) && g.push(a.response, a.responseError)
                    }); g.length;) {
                        a = g.shift();
                        var k = g.shift(),
                            h = h.then(a, k)
                    }
                    h.success = function (a) {
                        h.then(function (b) {
                            a(b.data, b.status, b.headers, d)
                        });
                        return h
                    };
                    h.error = function (a) {
                        h.then(null,
                            function (b) {
                                a(b.data, b.status, b.headers, d)
                            });
                        return h
                    };
                    return h
                }

                function A(b, c, f) {
                    function h(a, b, c) {
                        u && (200 <= a && 300 > a ? u.put(s, [a, b, qc(c)]) : u.remove(s));
                        k(b, a, c);
                        d.$$phase || d.$apply()
                    }

                    function k(a, c, d) {
                        c = Math.max(c, 0);
                        (200 <= c && 300 > c ? q.resolve : q.reject)({
                            data: a,
                            status: c,
                            headers: rc(d),
                            config: b
                        })
                    }

                    function m() {
                        var a = cb(p.pendingRequests, b); - 1 !== a && p.pendingRequests.splice(a, 1)
                    }
                    var q = n.defer(),
                        A = q.promise,
                        u, r, s = E(b.url, b.params);
                    p.pendingRequests.push(b);
                    A.then(m, m);
                    (b.cache || e.cache) && (!1 !== b.cache && "GET" ==
                        b.method) && (u = X(b.cache) ? b.cache : X(e.cache) ? e.cache : B);
                    if (u)
                        if (r = u.get(s), v(r)) {
                            if (r.then) return r.then(m, m), r;
                            I(r) ? k(r[1], r[0], ba(r[2])) : k(r, 200, {})
                        } else u.put(s, A);
                    C(r) && a(b.method, s, c, h, f, b.timeout, b.withCredentials, b.responseType);
                    return A
                }

                function E(a, b) {
                    if (!b) return a;
                    var c = [];
                    Zc(b, function (a, b) {
                        null === a || C(a) || (I(a) || (a = [a]), r(a, function (a) {
                            X(a) && (a = oa(a));
                            c.push(va(b) + "=" + va(a))
                        }))
                    });
                    0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                    return a
                }
                var B = c("$http"),
                    u = [];
                r(f, function (a) {
                    u.unshift(y(a) ?
                        q.get(a) : q.invoke(a))
                });
                r(h, function (a, b) {
                    var c = y(a) ? q.get(a) : q.invoke(a);
                    u.splice(b, 0, {
                        response: function (a) {
                            return c(n.when(a))
                        },
                        responseError: function (a) {
                            return c(n.reject(a))
                        }
                    })
                });
                p.pendingRequests = [];
                (function (a) {
                    r(arguments, function (a) {
                        p[a] = function (b, c) {
                            return p(t(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function (a) {
                    r(arguments, function (a) {
                        p[a] = function (b, c, d) {
                            return p(t(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                })("post", "put");
                p.defaults = e;
                return p
            }
        ]
    }

    function yd(b) {
        if (8 >= Q && (!b.match(/^(get|post|head|put|delete|options)$/i) || !D.XMLHttpRequest)) return new D.ActiveXObject("Microsoft.XMLHTTP");
        if (D.XMLHttpRequest) return new D.XMLHttpRequest;
        throw F("$httpBackend")("noxhr");
    }

    function zd() {
        this.$get = ["$browser", "$window", "$document",
            function (b, a, c) {
                return Ad(b, yd, b.defer, a.angular.callbacks, c[0])
            }
        ]
    }

    function Ad(b, a, c, d, e) {
        function f(a, b) {
            var c = e.createElement("script"),
                d = function () {
                    c.onreadystatechange = c.onload = c.onerror = null;
                    e.body.removeChild(c);
                    b && b()
                };
            c.type = "text/javascript";
            c.src = a;
            Q && 8 >= Q ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) &&
                    d()
            } : c.onload = c.onerror = function () {
                d()
            };
            e.body.appendChild(c);
            return d
        }
        var h = -1;
        return function (e, m, k, l, n, q, p, A) {
            function E() {
                u = h;
                J && J();
                w && w.abort()
            }

            function B(a, d, e, f) {
                T && c.cancel(T);
                J = w = null;
                d = 0 === d ? e ? 200 : 404 : d;
                a(1223 == d ? 204 : d, e, f);
                b.$$completeOutstandingRequest(x)
            }
            var u;
            b.$$incOutstandingRequestCount();
            m = m || b.url();
            if ("jsonp" == P(e)) {
                var H = "_" + (d.counter++).toString(36);
                d[H] = function (a) {
                    d[H].data = a
                };
                var J = f(m.replace("JSON_CALLBACK", "angular.callbacks." + H), function () {
                    d[H].data ? B(l, 200, d[H].data) :
                        B(l, u || -2);
                    d[H] = Ca.noop
                })
            } else {
                var w = a(e);
                w.open(e, m, !0);
                r(n, function (a, b) {
                    v(a) && w.setRequestHeader(b, a)
                });
                w.onreadystatechange = function () {
                    if (w && 4 == w.readyState) {
                        var a = null,
                            b = null;
                        u !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText);
                        B(l, u || w.status, b, a)
                    }
                };
                p && (w.withCredentials = !0);
                if (A) try {
                    w.responseType = A
                } catch (s) {
                    if ("json" !== A) throw s;
                }
                w.send(k || null)
            } if (0 < q) var T = c(E, q);
            else q && q.then && q.then(E)
        }
    }

    function Bd() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function (a) {
            return a ? (b =
                a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce",
            function (c, d, e) {
                function f(f, k, l) {
                    for (var n, q, p = 0, A = [], E = f.length, B = !1, u = []; p < E;) - 1 != (n = f.indexOf(b, p)) && -1 != (q = f.indexOf(a, n + h)) ? (p != n && A.push(f.substring(p, n)), A.push(p = c(B = f.substring(n + h, q))), p.exp = B, p = q + g, B = !0) : (p != E && A.push(f.substring(p)), p = E);
                    (E = A.length) || (A.push(""), E = 1);
                    if (l && 1 < A.length) throw tc("noconcat", f);
                    if (!k || B) return u.length = E, p = function (a) {
                        try {
                            for (var b = 0, c = E, g; b < c; b++) "function" ==
                                typeof (g = A[b]) && (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), null === g || C(g) ? g = "" : "string" != typeof g && (g = oa(g))), u[b] = g;
                            return u.join("")
                        } catch (h) {
                            a = tc("interr", f, h.toString()), d(a)
                        }
                    }, p.exp = f, p.parts = A, p
                }
                var h = b.length,
                    g = a.length;
                f.startSymbol = function () {
                    return b
                };
                f.endSymbol = function () {
                    return a
                };
                return f
            }
        ]
    }

    function Cd() {
        this.$get = ["$rootScope", "$window", "$q",
            function (b, a, c) {
                function d(d, h, g, m) {
                    var k = a.setInterval,
                        l = a.clearInterval,
                        n = c.defer(),
                        q = n.promise,
                        p = 0,
                        A = v(m) && !m;
                    g = v(g) ? g : 0;
                    q.then(null, null, d);
                    q.$$intervalId = k(function () {
                        n.notify(p++);
                        0 < g && p >= g && (n.resolve(p), l(q.$$intervalId), delete e[q.$$intervalId]);
                        A || b.$apply()
                    }, h);
                    e[q.$$intervalId] = n;
                    return q
                }
                var e = {};
                d.cancel = function (a) {
                    return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
                };
                return d
            }
        ]
    }

    function Dd() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function uc(b) {
        b = b.split("/");
        for (var a = b.length; a--;) b[a] = zb(b[a]);
        return b.join("/")
    }

    function vc(b, a, c) {
        b = xa(b, c);
        a.$$protocol = b.protocol;
        a.$$host = b.hostname;
        a.$$port = R(b.port) || Ed[b.protocol] || null
    }

    function wc(b, a, c) {
        var d = "/" !== b.charAt(0);
        d && (b = "/" + b);
        b = xa(b, c);
        a.$$path = decodeURIComponent(d &&
            "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
        a.$$search = $b(b.search);
        a.$$hash = decodeURIComponent(b.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function la(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length)
    }

    function Wa(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function Kb(b) {
        return b.substr(0, Wa(b).lastIndexOf("/") + 1)
    }

    function xc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = Kb(b);
        vc(b, this, b);
        this.$$parse = function (a) {
            var e = la(c, a);
            if (!y(e)) throw Lb("ipthprfx",
                a, c);
            wc(e, this, b);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = ac(this.$$search),
                b = this.$$hash ? "#" + zb(this.$$hash) : "";
            this.$$url = uc(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$rewrite = function (d) {
            var e;
            if ((e = la(b, d)) !== s) return d = e, (e = la(a, e)) !== s ? c + (la("/", e) || e) : b + d;
            if ((e = la(c, d)) !== s) return c + e;
            if (c == d + "/") return c
        }
    }

    function Mb(b, a) {
        var c = Kb(b);
        vc(b, this, b);
        this.$$parse = function (d) {
            var e = la(b, d) || la(c, d),
                e = "#" == e.charAt(0) ? la(a, e) :
                    this.$$html5 ? e : "";
            if (!y(e)) throw Lb("ihshprfx", d, a);
            wc(e, this, b);
            d = this.$$path;
            var f = /^\/?.*?:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = ac(this.$$search),
                e = this.$$hash ? "#" + zb(this.$$hash) : "";
            this.$$url = uc(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$rewrite = function (a) {
            if (Wa(b) == Wa(a)) return a
        }
    }

    function yc(b, a) {
        this.$$html5 = !0;
        Mb.apply(this, arguments);
        var c = Kb(b);
        this.$$rewrite = function (d) {
            var e;
            if (b == Wa(d)) return d;
            if (e = la(c, d)) return b + a + e;
            if (c === d + "/") return c
        }
    }

    function ob(b) {
        return function () {
            return this[b]
        }
    }

    function zc(b, a) {
        return function (c) {
            if (C(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Fd() {
        var b = "",
            a = !1;
        this.hashPrefix = function (a) {
            return v(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return v(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
            function (c, d, e, f) {
                function h(a) {
                    c.$broadcast("$locationChangeSuccess",
                        g.absUrl(), a)
                }
                var g, m = d.baseHref(),
                    k = d.url();
                a ? (m = k.substring(0, k.indexOf("/", k.indexOf("//") + 2)) + (m || "/"), e = e.history ? xc : yc) : (m = Wa(k), e = Mb);
                g = new e(m, "#" + b);
                g.$$parse(g.$$rewrite(k));
                f.on("click", function (a) {
                    if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                        for (var b = z(a.target);
                            "a" !== P(b[0].nodeName);)
                            if (b[0] === f[0] || !(b = b.parent())[0]) return;
                        var e = b.prop("href");
                        X(e) && "[object SVGAnimatedString]" === e.toString() && (e = xa(e.animVal).href);
                        var h = g.$$rewrite(e);
                        e && (!b.attr("target") && h && !a.isDefaultPrevented()) &&
                            (a.preventDefault(), h != d.url() && (g.$$parse(h), c.$apply(), D.angular["ff-684208-preventDefault"] = !0))
                    }
                });
                g.absUrl() != k && d.url(g.absUrl(), !0);
                d.onUrlChange(function (a) {
                    g.absUrl() != a && (c.$evalAsync(function () {
                        var b = g.absUrl();
                        g.$$parse(a);
                        c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (g.$$parse(b), d.url(b)) : h(b)
                    }), c.$$phase || c.$digest())
                });
                var l = 0;
                c.$watch(function () {
                    var a = d.url(),
                        b = g.$$replace;
                    l && a == g.absUrl() || (l++, c.$evalAsync(function () {
                        c.$broadcast("$locationChangeStart", g.absUrl(), a).defaultPrevented ?
                            g.$$parse(a) : (d.url(g.absUrl(), b), h(a))
                    }));
                    g.$$replace = !1;
                    return l
                });
                return g
            }
        ]
    }

    function Gd() {
        var b = !0,
            a = this;
        this.debugEnabled = function (a) {
            return v(a) ? (b = a, this) : b
        };
        this.$get = ["$window",
            function (c) {
                function d(a) {
                    a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                    return a
                }

                function e(a) {
                    var b = c.console || {}, e = b[a] || b.log || x;
                    a = !1;
                    try {
                        a = !! e.apply
                    } catch (m) {}
                    return a ? function () {
                        var a = [];
                        r(arguments, function (b) {
                            a.push(d(b))
                        });
                        return e.apply(b, a)
                    } : function (a, b) {
                        e(a, null == b ? "" : b)
                    }
                }
                return {
                    log: e("log"),
                    info: e("info"),
                    warn: e("warn"),
                    error: e("error"),
                    debug: function () {
                        var c = e("debug");
                        return function () {
                            b && c.apply(a, arguments)
                        }
                    }()
                }
            }
        ]
    }

    function da(b, a) {
        if ("constructor" === b) throw ya("isecfld", a);
        return b
    }

    function Xa(b, a) {
        if (b) {
            if (b.constructor === b) throw ya("isecfn", a);
            if (b.document && b.location && b.alert && b.setInterval) throw ya("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ya("isecdom",
                a);
        }
        return b
    }

    function pb(b, a, c, d, e) {
        e = e || {};
        a = a.split(".");
        for (var f, h = 0; 1 < a.length; h++) {
            f = da(a.shift(), d);
            var g = b[f];
            g || (g = {}, b[f] = g);
            b = g;
            b.then && e.unwrapPromises && (qa(d), "$$v" in b || function (a) {
                a.then(function (b) {
                    a.$$v = b
                })
            }(b), b.$$v === s && (b.$$v = {}), b = b.$$v)
        }
        f = da(a.shift(), d);
        return b[f] = c
    }

    function Ac(b, a, c, d, e, f, h) {
        da(b, f);
        da(a, f);
        da(c, f);
        da(d, f);
        da(e, f);
        return h.unwrapPromises ? function (g, h) {
            var k = h && h.hasOwnProperty(b) ? h : g,
                l;
            if (null == k) return k;
            (k = k[b]) && k.then && (qa(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v =
                    a
            })), k = k.$$v);
            if (!a) return k;
            if (null == k) return s;
            (k = k[a]) && k.then && (qa(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            if (!c) return k;
            if (null == k) return s;
            (k = k[c]) && k.then && (qa(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            if (!d) return k;
            if (null == k) return s;
            (k = k[d]) && k.then && (qa(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            if (!e) return k;
            if (null == k) return s;
            (k = k[e]) && k.then && (qa(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            return k
        } : function (f, h) {
            var k = h && h.hasOwnProperty(b) ? h : f;
            if (null == k) return k;
            k = k[b];
            if (!a) return k;
            if (null == k) return s;
            k = k[a];
            if (!c) return k;
            if (null == k) return s;
            k = k[c];
            if (!d) return k;
            if (null == k) return s;
            k = k[d];
            return e ? null == k ? s : k = k[e] : k
        }
    }

    function Hd(b, a) {
        da(b, a);
        return function (a, d) {
            return null == a ? s : (d && d.hasOwnProperty(b) ? d : a)[b]
        }
    }

    function Id(b, a, c) {
        da(b, c);
        da(a, c);
        return function (c, e) {
            if (null == c) return s;
            c = (e && e.hasOwnProperty(b) ? e : c)[b];
            return null == c ? s : c[a]
        }
    }

    function Bc(b, a, c) {
        if (Nb.hasOwnProperty(b)) return Nb[b];
        var d = b.split("."),
            e = d.length,
            f;
        if (a.unwrapPromises || 1 !== e)
            if (a.unwrapPromises || 2 !== e)
                if (a.csp) f = 6 > e ? Ac(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, f) {
                    var g = 0,
                        h;
                    do h = Ac(d[g++], d[g++], d[g++], d[g++], d[g++], c, a)(b, f), f = s, b = h; while (g < e);
                    return h
                };
                else {
                    var h = "var p;\n";
                    r(d, function (b, d) {
                        da(b, c);
                        h += "if(s == null) return undefined;\ns=" + (d ? "s" : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' :
                            "")
                    });
                    var h = h + "return s;",
                        g = new Function("s", "k", "pw", h);
                    g.toString = $(h);
                    f = a.unwrapPromises ? function (a, b) {
                        return g(a, b, qa)
                    } : g
                } else f = Id(d[0], d[1], c);
                else f = Hd(d[0], c);
                "hasOwnProperty" !== b && (Nb[b] = f);
        return f
    }

    function Jd() {
        var b = {}, a = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0
            };
        this.unwrapPromises = function (b) {
            return v(b) ? (a.unwrapPromises = !! b, this) : a.unwrapPromises
        };
        this.logPromiseWarnings = function (b) {
            return v(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings
        };
        this.$get = ["$filter", "$sniffer",
            "$log",
            function (c, d, e) {
                a.csp = d.csp;
                qa = function (b) {
                    a.logPromiseWarnings && !Cc.hasOwnProperty(b) && (Cc[b] = !0, e.warn("[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                };
                return function (d) {
                    var e;
                    switch (typeof d) {
                    case "string":
                        if (b.hasOwnProperty(d)) return b[d];
                        e = new Ob(a);
                        e = (new Ya(e, c, a)).parse(d, !1);
                        "hasOwnProperty" !== d && (b[d] = e);
                        return e;
                    case "function":
                        return d;
                    default:
                        return x
                    }
                }
            }
        ]
    }

    function Kd() {
        this.$get = ["$rootScope", "$exceptionHandler",
            function (b, a) {
                return Ld(function (a) {
                    b.$evalAsync(a)
                }, a)
            }
        ]
    }

    function Ld(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return h(a)
        }
        var e = function () {
            var h = [],
                k, l;
            return l = {
                resolve: function (a) {
                    if (h) {
                        var c = h;
                        h = s;
                        k = f(a);
                        c.length && b(function () {
                            for (var a, b = 0, d = c.length; b < d; b++) a = c[b], k.then(a[0], a[1], a[2])
                        })
                    }
                },
                reject: function (a) {
                    l.resolve(g(a))
                },
                notify: function (a) {
                    if (h) {
                        var c = h;
                        h.length && b(function () {
                            for (var b, d = 0, e = c.length; d < e; d++) b = c[d], b[2](a)
                        })
                    }
                },
                promise: {
                    then: function (b, f, g) {
                        var l = e(),
                            E = function (d) {
                                try {
                                    l.resolve((O(b) ?
                                        b : c)(d))
                                } catch (e) {
                                    l.reject(e), a(e)
                                }
                            }, B = function (b) {
                                try {
                                    l.resolve((O(f) ? f : d)(b))
                                } catch (c) {
                                    l.reject(c), a(c)
                                }
                            }, u = function (b) {
                                try {
                                    l.notify((O(g) ? g : c)(b))
                                } catch (d) {
                                    a(d)
                                }
                            };
                        h ? h.push([E, B, u]) : k.then(E, B, u);
                        return l.promise
                    },
                    "catch": function (a) {
                        return this.then(null, a)
                    },
                    "finally": function (a) {
                        function b(a, c) {
                            var d = e();
                            c ? d.resolve(a) : d.reject(a);
                            return d.promise
                        }

                        function d(e, f) {
                            var g = null;
                            try {
                                g = (a || c)()
                            } catch (h) {
                                return b(h, !1)
                            }
                            return g && O(g.then) ? g.then(function () {
                                return b(e, f)
                            }, function (a) {
                                return b(a, !1)
                            }) :
                                b(e, f)
                        }
                        return this.then(function (a) {
                            return d(a, !0)
                        }, function (a) {
                            return d(a, !1)
                        })
                    }
                }
            }
        }, f = function (a) {
                return a && O(a.then) ? a : {
                    then: function (c) {
                        var d = e();
                        b(function () {
                            d.resolve(c(a))
                        });
                        return d.promise
                    }
                }
            }, h = function (a) {
                var b = e();
                b.reject(a);
                return b.promise
            }, g = function (c) {
                return {
                    then: function (f, g) {
                        var h = e();
                        b(function () {
                            try {
                                h.resolve((O(g) ? g : d)(c))
                            } catch (b) {
                                h.reject(b), a(b)
                            }
                        });
                        return h.promise
                    }
                }
            };
        return {
            defer: e,
            reject: h,
            when: function (g, k, l, n) {
                var q = e(),
                    p, A = function (b) {
                        try {
                            return (O(k) ? k : c)(b)
                        } catch (d) {
                            return a(d),
                            h(d)
                        }
                    }, E = function (b) {
                        try {
                            return (O(l) ? l : d)(b)
                        } catch (c) {
                            return a(c), h(c)
                        }
                    }, B = function (b) {
                        try {
                            return (O(n) ? n : c)(b)
                        } catch (d) {
                            a(d)
                        }
                    };
                b(function () {
                    f(g).then(function (a) {
                        p || (p = !0, q.resolve(f(a).then(A, E, B)))
                    }, function (a) {
                        p || (p = !0, q.resolve(E(a)))
                    }, function (a) {
                        p || q.notify(B(a))
                    })
                });
                return q.promise
            },
            all: function (a) {
                var b = e(),
                    c = 0,
                    d = I(a) ? [] : {};
                r(a, function (a, e) {
                    c++;
                    f(a).then(function (a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                    }, function (a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                });
                0 === c && b.resolve(d);
                return b.promise
            }
        }
    }

    function Md() {
        this.$get = ["$window",
            function (b) {
                var a = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
                    c = b.cancelAnimationFrame || b.webkitCancelAnimationFrame;
                b = function (b) {
                    var e = a(b);
                    return function () {
                        c(e)
                    }
                };
                b.supported = !! a;
                return b
            }
        ]
    }

    function Nd() {
        var b = 10,
            a = F("$rootScope"),
            c = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
            function (d, e, f, h) {
                function g() {
                    this.$id = ab();
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling =
                        this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this["this"] = this.$root = this;
                    this.$$destroyed = !1;
                    this.$$asyncQueue = [];
                    this.$$postDigestQueue = [];
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$isolateBindings = {}
                }

                function m(b) {
                    if (q.$$phase) throw a("inprog", q.$$phase);
                    q.$$phase = b
                }

                function k(a, b) {
                    var c = f(a);
                    Pa(c, b);
                    return c
                }

                function l(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
                }

                function n() {}
                g.prototype = {
                    constructor: g,
                    $new: function (a) {
                        a ?
                            (a = new g, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function () {}, a.prototype = this, a = new a, a.$id = ab());
                        a["this"] = a;
                        a.$$listeners = {};
                        a.$$listenerCount = {};
                        a.$parent = this;
                        a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                        a.$$prevSibling = this.$$childTail;
                        this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                        return a
                    },
                    $watch: function (a, b, d) {
                        var e = k(a, "watch"),
                            f = this.$$watchers,
                            g = {
                                fn: b,
                                last: n,
                                get: e,
                                exp: a,
                                eq: !! d
                            };
                        c = null;
                        if (!O(b)) {
                            var h = k(b || x, "listener");
                            g.fn = function (a, b, c) {
                                h(c)
                            }
                        }
                        if ("string" == typeof a && e.constant) {
                            var l = g.fn;
                            g.fn = function (a, b, c) {
                                l.call(this, a, b, c);
                                Ma(f, g)
                            }
                        }
                        f || (f = this.$$watchers = []);
                        f.unshift(g);
                        return function () {
                            Ma(f, g);
                            c = null
                        }
                    },
                    $watchCollection: function (a, b) {
                        var c = this,
                            d, e, g = 0,
                            h = f(a),
                            k = [],
                            l = {}, m = 0;
                        return this.$watch(function () {
                            e = h(c);
                            var a, b;
                            if (X(e))
                                if (xb(e))
                                    for (d !== k && (d = k, m = d.length = 0, g++), a = e.length, m !== a && (g++, d.length = m = a), b = 0; b < a; b++) d[b] !== e[b] && (g++, d[b] = e[b]);
                                else {
                                    d !== l && (d = l = {}, m = 0, g++);
                                    a = 0;
                                    for (b in e) e.hasOwnProperty(b) && (a++, d.hasOwnProperty(b) ? d[b] !== e[b] && (g++, d[b] = e[b]) : (m++, d[b] = e[b], g++));
                                    if (m > a)
                                        for (b in g++, d) d.hasOwnProperty(b) && !e.hasOwnProperty(b) && (m--, delete d[b])
                                } else d !== e && (d = e, g++);
                            return g
                        }, function () {
                            b(e, d, c)
                        })
                    },
                    $digest: function () {
                        var d, f, g, h, k = this.$$asyncQueue,
                            l = this.$$postDigestQueue,
                            r, w, s = b,
                            T, M = [],
                            v, t, N;
                        m("$digest");
                        c = null;
                        do {
                            w = !1;
                            for (T = this; k.length;) {
                                try {
                                    N = k.shift(), N.scope.$eval(N.expression)
                                } catch (z) {
                                    q.$$phase = null, e(z)
                                }
                                c = null
                            }
                            a: do {
                                if (h =
                                    T.$$watchers)
                                    for (r = h.length; r--;) try {
                                        if (d = h[r])
                                            if ((f = d.get(T)) !== (g = d.last) && !(d.eq ? ta(f, g) : "number" == typeof f && "number" == typeof g && isNaN(f) && isNaN(g))) w = !0, c = d, d.last = d.eq ? ba(f) : f, d.fn(f, g === n ? f : g, T), 5 > s && (v = 4 - s, M[v] || (M[v] = []), t = O(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, t += "; newVal: " + oa(f) + "; oldVal: " + oa(g), M[v].push(t));
                                            else if (d === c) {
                                            w = !1;
                                            break a
                                        }
                                    } catch (y) {
                                        q.$$phase = null, e(y)
                                    }
                                if (!(h = T.$$childHead || T !== this && T.$$nextSibling))
                                    for (; T !== this && !(h = T.$$nextSibling);) T = T.$parent
                            } while (T =
                                h);
                            if ((w || k.length) && !s--) throw q.$$phase = null, a("infdig", b, oa(M));
                        } while (w || k.length);
                        for (q.$$phase = null; l.length;) try {
                            l.shift()()
                        } catch (x) {
                            e(x)
                        }
                    },
                    $destroy: function () {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            this !== q && (r(this.$$listenerCount, db(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling &&
                                (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
                        }
                    },
                    $eval: function (a, b) {
                        return f(a)(this, b)
                    },
                    $evalAsync: function (a) {
                        q.$$phase || q.$$asyncQueue.length || h.defer(function () {
                            q.$$asyncQueue.length && q.$digest()
                        });
                        this.$$asyncQueue.push({
                            scope: this,
                            expression: a
                        })
                    },
                    $$postDigest: function (a) {
                        this.$$postDigestQueue.push(a)
                    },
                    $apply: function (a) {
                        try {
                            return m("$apply"), this.$eval(a)
                        } catch (b) {
                            e(b)
                        } finally {
                            q.$$phase = null;
                            try {
                                q.$digest()
                            } catch (c) {
                                throw e(c), c;
                            }
                        }
                    },
                    $on: function (a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []);
                        c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function () {
                            c[cb(c, b)] = null;
                            l(e, 1, a)
                        }
                    },
                    $emit: function (a, b) {
                        var c = [],
                            d, f = this,
                            g = !1,
                            h = {
                                name: a,
                                targetScope: f,
                                stopPropagation: function () {
                                    g = !0
                                },
                                preventDefault: function () {
                                    h.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, k = [h].concat(ua.call(arguments, 1)),
                            l, m;
                        do {
                            d = f.$$listeners[a] ||
                                c;
                            h.currentScope = f;
                            l = 0;
                            for (m = d.length; l < m; l++)
                                if (d[l]) try {
                                    d[l].apply(null, k)
                                } catch (n) {
                                    e(n)
                                } else d.splice(l, 1), l--, m--;
                            if (g) break;
                            f = f.$parent
                        } while (f);
                        return h
                    },
                    $broadcast: function (a, b) {
                        for (var c = this, d = this, f = {
                                name: a,
                                targetScope: this,
                                preventDefault: function () {
                                    f.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, g = [f].concat(ua.call(arguments, 1)), h, k; c = d;) {
                            f.currentScope = c;
                            d = c.$$listeners[a] || [];
                            h = 0;
                            for (k = d.length; h < k; h++)
                                if (d[h]) try {
                                    d[h].apply(null, g)
                                } catch (l) {
                                    e(l)
                                } else d.splice(h, 1), h--, k--;
                            if (!(d = c.$$listenerCount[a] &&
                                c.$$childHead || c !== this && c.$$nextSibling))
                                for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                        }
                        return f
                    }
                };
                var q = new g;
                return q
            }
        ]
    }

    function Od() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            a = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function (a) {
            return v(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return v(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b,
                    f;
                if (!Q || 8 <= Q)
                    if (f = xa(c).href, "" !== f && !f.match(e)) return "unsafe:" + f;
                return c
            }
        }
    }

    function Pd(b) {
        if ("self" ===
            b) return b;
        if (y(b)) {
            if (-1 < b.indexOf("***")) throw ra("iwcard", b);
            b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$")
        }
        if (bb(b)) return RegExp("^" + b.source + "$");
        throw ra("imatcher");
    }

    function Dc(b) {
        var a = [];
        v(b) && r(b, function (b) {
            a.push(Pd(b))
        });
        return a
    }

    function Qd() {
        this.SCE_CONTEXTS = ea;
        var b = ["self"],
            a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = Dc(a));
            return b
        };
        this.resourceUrlBlacklist =
            function (b) {
                arguments.length && (a = Dc(b));
                return a
        };
        this.$get = ["$injector",
            function (c) {
                function d(a) {
                    var b = function (a) {
                        this.$$unwrapTrustedValue = function () {
                            return a
                        }
                    };
                    a && (b.prototype = new a);
                    b.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    };
                    b.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    };
                    return b
                }
                var e = function (a) {
                    throw ra("unsafe");
                };
                c.has("$sanitize") && (e = c.get("$sanitize"));
                var f = d(),
                    h = {};
                h[ea.HTML] = d(f);
                h[ea.CSS] = d(f);
                h[ea.URL] = d(f);
                h[ea.JS] = d(f);
                h[ea.RESOURCE_URL] =
                    d(h[ea.URL]);
                return {
                    trustAs: function (a, b) {
                        var c = h.hasOwnProperty(a) ? h[a] : null;
                        if (!c) throw ra("icontext", a, b);
                        if (null === b || b === s || "" === b) return b;
                        if ("string" !== typeof b) throw ra("itype", a);
                        return new c(b)
                    },
                    getTrusted: function (c, d) {
                        if (null === d || d === s || "" === d) return d;
                        var f = h.hasOwnProperty(c) ? h[c] : null;
                        if (f && d instanceof f) return d.$$unwrapTrustedValue();
                        if (c === ea.RESOURCE_URL) {
                            var f = xa(d.toString()),
                                l, n, q = !1;
                            l = 0;
                            for (n = b.length; l < n; l++)
                                if ("self" === b[l] ? Jb(f) : b[l].exec(f.href)) {
                                    q = !0;
                                    break
                                }
                            if (q)
                                for (l =
                                    0, n = a.length; l < n; l++)
                                    if ("self" === a[l] ? Jb(f) : a[l].exec(f.href)) {
                                        q = !1;
                                        break
                                    }
                            if (q) return d;
                            throw ra("insecurl", d.toString());
                        }
                        if (c === ea.HTML) return e(d);
                        throw ra("unsafe");
                    },
                    valueOf: function (a) {
                        return a instanceof f ? a.$$unwrapTrustedValue() : a
                    }
                }
            }
        ]
    }

    function Rd() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !! a);
            return b
        };
        this.$get = ["$parse", "$sniffer", "$sceDelegate",
            function (a, c, d) {
                if (b && c.msie && 8 > c.msieDocumentMode) throw ra("iequirks");
                var e = ba(ea);
                e.isEnabled = function () {
                    return b
                };
                e.trustAs =
                    d.trustAs;
                e.getTrusted = d.getTrusted;
                e.valueOf = d.valueOf;
                b || (e.trustAs = e.getTrusted = function (a, b) {
                    return b
                }, e.valueOf = Aa);
                e.parseAs = function (b, c) {
                    var d = a(c);
                    return d.literal && d.constant ? d : function (a, c) {
                        return e.getTrusted(b, d(a, c))
                    }
                };
                var f = e.parseAs,
                    h = e.getTrusted,
                    g = e.trustAs;
                r(ea, function (a, b) {
                    var c = P(b);
                    e[Qa("parse_as_" + c)] = function (b) {
                        return f(a, b)
                    };
                    e[Qa("get_trusted_" + c)] = function (b) {
                        return h(a, b)
                    };
                    e[Qa("trust_as_" + c)] = function (b) {
                        return g(a, b)
                    }
                });
                return e
            }
        ]
    }

    function Sd() {
        this.$get = ["$window",
            "$document",
            function (b, a) {
                var c = {}, d = R((/android (\d+)/.exec(P((b.navigator || {}).userAgent)) || [])[1]),
                    e = /Boxee/i.test((b.navigator || {}).userAgent),
                    f = a[0] || {}, h = f.documentMode,
                    g, m = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                    k = f.body && f.body.style,
                    l = !1,
                    n = !1;
                if (k) {
                    for (var q in k)
                        if (l = m.exec(q)) {
                            g = l[0];
                            g = g.substr(0, 1).toUpperCase() + g.substr(1);
                            break
                        }
                    g || (g = "WebkitOpacity" in k && "webkit");
                    l = !! ("transition" in k || g + "Transition" in k);
                    n = !! ("animation" in k || g + "Animation" in k);
                    !d || l && n || (l = y(f.body.style.webkitTransition),
                        n = y(f.body.style.webkitAnimation))
                }
                return {
                    history: !(!b.history || !b.history.pushState || 4 > d || e),
                    hashchange: "onhashchange" in b && (!h || 7 < h),
                    hasEvent: function (a) {
                        if ("input" == a && 9 == Q) return !1;
                        if (C(c[a])) {
                            var b = f.createElement("div");
                            c[a] = "on" + a in b
                        }
                        return c[a]
                    },
                    csp: Xb(),
                    vendorPrefix: g,
                    transitions: l,
                    animations: n,
                    android: d,
                    msie: Q,
                    msieDocumentMode: h
                }
            }
        ]
    }

    function Td() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
            function (b, a, c, d) {
                function e(e, g, m) {
                    var k = c.defer(),
                        l = k.promise,
                        n = v(m) && !m;
                    g = a.defer(function () {
                        try {
                            k.resolve(e())
                        } catch (a) {
                            k.reject(a),
                            d(a)
                        } finally {
                            delete f[l.$$timeoutId]
                        }
                        n || b.$apply()
                    }, g);
                    l.$$timeoutId = g;
                    f[g] = k;
                    return l
                }
                var f = {};
                e.cancel = function (b) {
                    return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return e
            }
        ]
    }

    function xa(b, a) {
        var c = b;
        Q && (W.setAttribute("href", c), c = W.href);
        W.setAttribute("href", c);
        return {
            href: W.href,
            protocol: W.protocol ? W.protocol.replace(/:$/, "") : "",
            host: W.host,
            search: W.search ? W.search.replace(/^\?/, "") : "",
            hash: W.hash ? W.hash.replace(/^#/,
                "") : "",
            hostname: W.hostname,
            port: W.port,
            pathname: "/" === W.pathname.charAt(0) ? W.pathname : "/" + W.pathname
        }
    }

    function Jb(b) {
        b = y(b) ? xa(b) : b;
        return b.protocol === Ec.protocol && b.host === Ec.host
    }

    function Ud() {
        this.$get = $(D)
    }

    function Fc(b) {
        function a(d, e) {
            if (X(d)) {
                var f = {};
                r(d, function (b, c) {
                    f[c] = a(c, b)
                });
                return f
            }
            return b.factory(d + c, e)
        }
        var c = "Filter";
        this.register = a;
        this.$get = ["$injector",
            function (a) {
                return function (b) {
                    return a.get(b + c)
                }
            }
        ];
        a("currency", Gc);
        a("date", Hc);
        a("filter", Vd);
        a("json", Wd);
        a("limitTo",
            Xd);
        a("lowercase", Yd);
        a("number", Ic);
        a("orderBy", Jc);
        a("uppercase", Zd)
    }

    function Vd() {
        return function (b, a, c) {
            if (!I(b)) return b;
            var d = typeof c,
                e = [];
            e.check = function (a) {
                for (var b = 0; b < e.length; b++)
                    if (!e[b](a)) return !1;
                return !0
            };
            "function" !== d && (c = "boolean" === d && c ? function (a, b) {
                return Ca.equals(a, b)
            } : function (a, b) {
                if (a && b && "object" === typeof a && "object" === typeof b) {
                    for (var d in a)
                        if ("$" !== d.charAt(0) && $d.call(a, d) && c(a[d], b[d])) return !0;
                    return !1
                }
                b = ("" + b).toLowerCase();
                return -1 < ("" + a).toLowerCase().indexOf(b)
            });
            var f = function (a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    return c(a, b);
                case "object":
                    switch (typeof b) {
                    case "object":
                        return c(a, b);
                    default:
                        for (var d in a)
                            if ("$" !== d.charAt(0) && f(a[d], b)) return !0
                    }
                    return !1;
                case "array":
                    for (d = 0; d < a.length; d++)
                        if (f(a[d], b)) return !0;
                    return !1;
                default:
                    return !1
                }
            };
            switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
                a = {
                    $: a
                };
            case "object":
                for (var h in a)(function (b) {
                    "undefined" != typeof a[b] &&
                        e.push(function (c) {
                            return f("$" == b ? c : c && c[b], a[b])
                        })
                })(h);
                break;
            case "function":
                e.push(a);
                break;
            default:
                return b
            }
            d = [];
            for (h = 0; h < b.length; h++) {
                var g = b[h];
                e.check(g) && d.push(g)
            }
            return d
        }
    }

    function Gc(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            C(d) && (d = a.CURRENCY_SYM);
            return Kc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Ic(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return Kc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Kc(b, a, c, d, e) {
        if (null == b || !isFinite(b) ||
            X(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var h = b + "",
            g = "",
            m = [],
            k = !1;
        if (-1 !== h.indexOf("e")) {
            var l = h.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? h = "0" : (g = h, k = !0)
        }
        if (k) 0 < e && (-1 < b && 1 > b) && (g = b.toFixed(e));
        else {
            h = (h.split(Lc)[1] || "").length;
            C(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
            h = Math.pow(10, e);
            b = Math.round(b * h) / h;
            b = ("" + b).split(Lc);
            h = b[0];
            b = b[1] || "";
            var l = 0,
                n = a.lgSize,
                q = a.gSize;
            if (h.length >= n + q)
                for (l = h.length - n, k = 0; k < l; k++) 0 === (l - k) % q && 0 !== k && (g += c), g += h.charAt(k);
            for (k = l; k < h.length; k++) 0 ===
                (h.length - k) % n && 0 !== k && (g += c), g += h.charAt(k);
            for (; b.length < e;) b += "0";
            e && "0" !== e && (g += d + b.substr(0, e))
        }
        m.push(f ? a.negPre : a.posPre);
        m.push(g);
        m.push(f ? a.negSuf : a.posSuf);
        return m.join("")
    }

    function qb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function Z(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return qb(e, a, d)
        }
    }

    function rb(b, a) {
        return function (c, d) {
            var e = c["get" + b](),
                f = Ja(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function Mc(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function Nc(b) {
        return function (a) {
            var c = Mc(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return qb(a, b)
        }
    }

    function Hc(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0,
                    h = 0,
                    g = b[8] ? a.setUTCFullYear : a.setFullYear,
                    m = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = R(b[9] + b[10]), h = R(b[9] + b[11]));
                g.call(a, R(b[1]), R(b[2]) - 1, R(b[3]));
                f = R(b[4] || 0) - f;
                h = R(b[5] ||
                    0) - h;
                g = R(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                m.call(a, f, h, g, b)
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e) {
            var f = "",
                h = [],
                g, m;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            y(c) && (c = ae.test(c) ? R(c) : a(c));
            yb(c) && (c = new Date(c));
            if (!na(c)) return c;
            for (; e;)(m = be.exec(e)) ? (h = h.concat(ua.call(m, 1)), e = h.pop()) : (h.push(e), e = null);
            r(h, function (a) {
                g = ce[a];
                f += g ? g(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g,
                    "").replace(/''/g, "'")
            });
            return f
        }
    }

    function Wd() {
        return function (b) {
            return oa(b, !0)
        }
    }

    function Xd() {
        return function (b, a) {
            if (!I(b) && !y(b)) return b;
            a = R(a);
            if (y(b)) return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [],
                d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++) c.push(b[d]);
            return c
        }
    }

    function Jc(b) {
        return function (a, c, d) {
            function e(a, b) {
                return Oa(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }
            if (!I(a) || !c) return a;
            c = I(c) ? c : [c];
            c = ad(c, function (a) {
                var c = !1,
                    d = a || Aa;
                if (y(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    d = b(a)
                }
                return e(function (a, b) {
                    var c;
                    c = d(a);
                    var e = d(b),
                        f = typeof c,
                        g = typeof e;
                    f == g ? ("string" == f && (c = c.toLowerCase(), e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            });
            for (var f = [], h = 0; h < a.length; h++) f.push(a[h]);
            return f.sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }, d))
        }
    }

    function sa(b) {
        O(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return $(b)
    }

    function Oc(b,
        a, c, d) {
        function e(a, c) {
            c = c ? "-" + eb(c, "-") : "";
            d.removeClass(b, (a ? sb : tb) + c);
            d.addClass(b, (a ? tb : sb) + c)
        }
        var f = this,
            h = b.parent().controller("form") || ub,
            g = 0,
            m = f.$error = {}, k = [];
        f.$name = a.name || a.ngForm;
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        h.$addControl(f);
        b.addClass(Ka);
        e(!0);
        f.$addControl = function (a) {
            wa(a.$name, "input");
            k.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(m, function (b, c) {
                f.$setValidity(c, !0, a)
            });
            Ma(k, a)
        };
        f.$setValidity =
            function (a, b, c) {
                var d = m[a];
                if (b) d && (Ma(d, c), d.length || (g--, g || (e(b), f.$valid = !0, f.$invalid = !1), m[a] = !1, e(!0, a), h.$setValidity(a, !0, f)));
                else {
                    g || e(b);
                    if (d) {
                        if (-1 != cb(d, c)) return
                    } else m[a] = d = [], g++, e(!1, a), h.$setValidity(a, !1, f);
                    d.push(c);
                    f.$valid = !1;
                    f.$invalid = !0
                }
        };
        f.$setDirty = function () {
            d.removeClass(b, Ka);
            d.addClass(b, vb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function () {
            d.removeClass(b, vb);
            d.addClass(b, Ka);
            f.$dirty = !1;
            f.$pristine = !0;
            r(k, function (a) {
                a.$setPristine()
            })
        }
    }

    function ma(b,
        a, c, d) {
        b.$setValidity(a, c);
        return c ? d : s
    }

    function de(b, a, c) {
        var d = c.prop("validity");
        X(d) && (c = function (c) {
            if (b.$error[a] || !(d.badInput || d.customError || d.typeMismatch) || d.valueMissing) return c;
            b.$setValidity(a, !1)
        }, b.$parsers.push(c), b.$formatters.push(c))
    }

    function Za(b, a, c, d, e, f) {
        var h = a.prop("validity");
        if (!e.android) {
            var g = !1;
            a.on("compositionstart", function (a) {
                g = !0
            });
            a.on("compositionend", function () {
                g = !1;
                m()
            })
        }
        var m = function () {
            if (!g) {
                var e = a.val();
                Oa(c.ngTrim || "T") && (e = ca(e));
                if (d.$viewValue !==
                    e || h && "" === e && !h.valueMissing) b.$$phase ? d.$setViewValue(e) : b.$apply(function () {
                    d.$setViewValue(e)
                })
            }
        };
        if (e.hasEvent("input")) a.on("input", m);
        else {
            var k, l = function () {
                    k || (k = f.defer(function () {
                        m();
                        k = null
                    }))
                };
            a.on("keydown", function (a) {
                a = a.keyCode;
                91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || l()
            });
            if (e.hasEvent("paste")) a.on("paste cut", l)
        }
        a.on("change", m);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        };
        var n = c.ngPattern;
        n && ((e = n.match(/^\/(.*)\/([gim]*)$/)) ? (n = RegExp(e[1], e[2]), e = function (a) {
            return ma(d,
                "pattern", d.$isEmpty(a) || n.test(a), a)
        }) : e = function (c) {
            var e = b.$eval(n);
            if (!e || !e.test) throw F("ngPattern")("noregexp", n, e, fa(a));
            return ma(d, "pattern", d.$isEmpty(c) || e.test(c), c)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var q = R(c.ngMinlength);
            e = function (a) {
                return ma(d, "minlength", d.$isEmpty(a) || a.length >= q, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var p = R(c.ngMaxlength);
            e = function (a) {
                return ma(d, "maxlength", d.$isEmpty(a) || a.length <= p, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
    }

    function wb(b, a) {
        return function (c) {
            var d;
            return na(c) ? c : y(c) && (b.lastIndex = 0, c = b.exec(c)) ? (c.shift(), d = {
                yyyy: 0,
                MM: 1,
                dd: 1,
                HH: 0,
                mm: 0
            }, r(c, function (b, c) {
                c < a.length && (d[a[c]] = +b)
            }), new Date(d.yyyy, d.MM - 1, d.dd, d.HH, d.mm)) : NaN
        }
    }

    function $a(b, a, c, d) {
        return function (e, f, h, g, m, k, l) {
            Za(e, f, h, g, m, k);
            g.$parsers.push(function (d) {
                if (g.$isEmpty(d)) return g.$setValidity(b, !0), null;
                if (a.test(d)) return g.$setValidity(b, !0), c(d);
                g.$setValidity(b, !1);
                return s
            });
            g.$formatters.push(function (a) {
                return na(a) ?
                    l("date")(a, d) : ""
            });
            h.min && (e = function (a) {
                var b = g.$isEmpty(a) || c(a) >= c(h.min);
                g.$setValidity("min", b);
                return b ? a : s
            }, g.$parsers.push(e), g.$formatters.push(e));
            h.max && (e = function (a) {
                var b = g.$isEmpty(a) || c(a) <= c(h.max);
                g.$setValidity("max", b);
                return b ? a : s
            }, g.$parsers.push(e), g.$formatters.push(e))
        }
    }

    function Pb(b, a) {
        b = "ngClass" + b;
        return function () {
            return {
                restrict: "AC",
                link: function (c, d, e) {
                    function f(b) {
                        if (!0 === a || c.$index % 2 === a) {
                            var d = h(b || "");
                            g ? ta(b, g) || e.$updateClass(d, h(g)) : e.$addClass(d)
                        }
                        g = ba(b)
                    }

                    function h(a) {
                        if (I(a)) return a.join(" ");
                        if (X(a)) {
                            var b = [];
                            r(a, function (a, c) {
                                a && b.push(c)
                            });
                            return b.join(" ")
                        }
                        return a
                    }
                    var g;
                    c.$watch(e[b], f, !0);
                    e.$observe("class", function (a) {
                        f(c.$eval(e[b]))
                    });
                    "ngClass" !== b && c.$watch("$index", function (d, f) {
                        var g = d & 1;
                        if (g !== f & 1) {
                            var n = h(c.$eval(e[b]));
                            g === a ? e.$addClass(n) : e.$removeClass(n)
                        }
                    })
                }
            }
        }
    }
    var P = function (b) {
        return y(b) ? b.toLowerCase() : b
    }, $d = Object.prototype.hasOwnProperty,
        Ja = function (b) {
            return y(b) ? b.toUpperCase() : b
        }, Q, z, Da, ua = [].slice,
        ee = [].push,
        Ba = Object.prototype.toString,
        Na = F("ng"),
        Ca = D.angular || (D.angular = {}),
        Ua, Ha, ia = ["0", "0", "0"];
    Q = R((/msie (\d+)/.exec(P(navigator.userAgent)) || [])[1]);
    isNaN(Q) && (Q = R((/trident\/.*; rv:(\d+)/.exec(P(navigator.userAgent)) || [])[1]));
    x.$inject = [];
    Aa.$inject = [];
    var ca = function () {
        return String.prototype.trim ? function (b) {
            return y(b) ? b.trim() : b
        } : function (b) {
            return y(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b
        }
    }();
    Ha = 9 > Q ? function (b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? Ja(b.scopeName + ":" + b.nodeName) : b.nodeName
    } :
        function (b) {
            return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var dd = /[A-Z]/g,
        fe = {
            full: "1.2.15-build.2399+sha.ca4ddfa",
            major: 1,
            minor: 2,
            dot: 15,
            codeName: "snapshot"
        }, Ra = S.cache = {}, fb = S.expando = "ng-" + (new Date).getTime(),
        hd = 1,
        Pc = D.document.addEventListener ? function (b, a, c) {
            b.addEventListener(a, c, !1)
        } : function (b, a, c) {
            b.attachEvent("on" + a, c)
        }, Gb = D.document.removeEventListener ? function (b, a, c) {
            b.removeEventListener(a, c, !1)
        } : function (b, a, c) {
            b.detachEvent("on" + a, c)
        };
    S._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var fd = /([\:\-\_]+(.))/g,
        gd = /^moz([A-Z])/,
        Db = F("jqLite"),
        Ga = S.prototype = {
            ready: function (b) {
                function a() {
                    c || (c = !0, b())
                }
                var c = !1;
                "complete" === U.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(D).on("load", a))
            },
            toString: function () {
                var b = [];
                r(this, function (a) {
                    b.push("" + a)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function (b) {
                return 0 <= b ? z(this[b]) : z(this[this.length + b])
            },
            length: 0,
            push: ee,
            sort: [].sort,
            splice: [].splice
        }, jb = {};
    r("multiple selected checked disabled readOnly required open".split(" "),
        function (b) {
            jb[P(b)] = b
        });
    var kc = {};
    r("input select option textarea button form details".split(" "), function (b) {
        kc[Ja(b)] = !0
    });
    r({
        data: gc,
        inheritedData: ib,
        scope: function (b) {
            return z(b).data("$scope") || ib(b.parentNode || b, ["$isolateScope", "$scope"])
        },
        isolateScope: function (b) {
            return z(b).data("$isolateScope") || z(b).data("$isolateScopeNoTemplate")
        },
        controller: hc,
        injector: function (b) {
            return ib(b, "$injector")
        },
        removeAttr: function (b, a) {
            b.removeAttribute(a)
        },
        hasClass: Hb,
        css: function (b, a, c) {
            a = Qa(a);
            if (v(c)) b.style[a] =
                c;
            else {
                var d;
                8 >= Q && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
                d = d || b.style[a];
                8 >= Q && (d = "" === d ? s : d);
                return d
            }
        },
        attr: function (b, a, c) {
            var d = P(a);
            if (jb[d])
                if (v(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                else return b[a] || (b.attributes.getNamedItem(a) || x).specified ? d : s;
                else if (v(c)) b.setAttribute(a, c);
            else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? s : b
        },
        prop: function (b, a, c) {
            if (v(c)) b[a] = c;
            else return b[a]
        },
        text: function () {
            function b(b, d) {
                var e = a[b.nodeType];
                if (C(d)) return e ? b[e] : "";
                b[e] = d
            }
            var a = [];
            9 > Q ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
            b.$dv = "";
            return b
        }(),
        val: function (b, a) {
            if (C(a)) {
                if ("SELECT" === Ha(b) && b.multiple) {
                    var c = [];
                    r(b.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function (b, a) {
            if (C(a)) return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++) Ea(d[c]);
            b.innerHTML = a
        },
        empty: ic
    }, function (b, a) {
        S.prototype[a] = function (a, d) {
            var e, f;
            if (b !== ic && (2 == b.length &&
                b !== Hb && b !== hc ? a : d) === s) {
                if (X(a)) {
                    for (e = 0; e < this.length; e++)
                        if (b === gc) b(this[e], a);
                        else
                            for (f in a) b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                f = e === s ? Math.min(this.length, 1) : this.length;
                for (var h = 0; h < f; h++) {
                    var g = b(this[h], a, d);
                    e = e ? e + g : g
                }
                return e
            }
            for (e = 0; e < this.length; e++) b(this[e], a, d);
            return this
        }
    });
    r({
        removeData: ec,
        dealoc: Ea,
        on: function a(c, d, e, f) {
            if (v(f)) throw Db("onargs");
            var h = ja(c, "events"),
                g = ja(c, "handle");
            h || ja(c, "events", h = {});
            g || ja(c, "handle", g = id(c, h));
            r(d.split(" "), function (d) {
                var f = h[d];
                if (!f) {
                    if ("mouseenter" == d || "mouseleave" == d) {
                        var l = U.body.contains || U.body.compareDocumentPosition ? function (a, c) {
                                var d = 9 === a.nodeType ? a.documentElement : a,
                                    e = c && c.parentNode;
                                return a === e || !! (e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                            } : function (a, c) {
                                if (c)
                                    for (; c = c.parentNode;)
                                        if (c === a) return !0;
                                return !1
                            };
                        h[d] = [];
                        a(c, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[d], function (a) {
                            var c = a.relatedTarget;
                            c && (c === this || l(this, c)) || g(a, d)
                        })
                    } else Pc(c,
                        d, g), h[d] = [];
                    f = h[d]
                }
                f.push(e)
            })
        },
        off: fc,
        one: function (a, c, d) {
            a = z(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        },
        replaceWith: function (a, c) {
            var d, e = a.parentNode;
            Ea(a);
            r(new S(c), function (c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function (a) {
            var c = [];
            r(a.childNodes, function (a) {
                1 === a.nodeType && c.push(a)
            });
            return c
        },
        contents: function (a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function (a, c) {
            r(new S(c), function (c) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
            })
        },
        prepend: function (a, c) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                r(new S(c), function (c) {
                    a.insertBefore(c, d)
                })
            }
        },
        wrap: function (a, c) {
            c = z(c)[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: function (a) {
            Ea(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        },
        after: function (a, c) {
            var d = a,
                e = a.parentNode;
            r(new S(c), function (a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        },
        addClass: hb,
        removeClass: gb,
        toggleClass: function (a, c, d) {
            c && r(c.split(" "), function (c) {
                var f = d;
                C(f) && (f = !Hb(a, c));
                (f ? hb : gb)(a, c)
            })
        },
        parent: function (a) {
            return (a =
                a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function (a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType;) a = a.nextSibling;
            return a
        },
        find: function (a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        },
        clone: Fb,
        triggerHandler: function (a, c, d) {
            c = (ja(a, "events") || {})[c];
            d = d || [];
            var e = [{
                preventDefault: x,
                stopPropagation: x
            }];
            r(c, function (c) {
                c.apply(a, e.concat(d))
            })
        }
    }, function (a, c) {
        S.prototype[c] = function (c, e, f) {
            for (var h, g = 0; g < this.length; g++) C(h) ?
                (h = a(this[g], c, e, f), v(h) && (h = z(h))) : Eb(h, a(this[g], c, e, f));
            return v(h) ? h : this
        };
        S.prototype.bind = S.prototype.on;
        S.prototype.unbind = S.prototype.off
    });
    Sa.prototype = {
        put: function (a, c) {
            this[Fa(a)] = c
        },
        get: function (a) {
            return this[Fa(a)]
        },
        remove: function (a) {
            var c = this[a = Fa(a)];
            delete this[a];
            return c
        }
    };
    var kd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        ld = /,/,
        md = /^\s*(_?)(\S+?)\1\s*$/,
        jd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        Ta = F("$injector"),
        ge = F("$animate"),
        he = ["$provide",
            function (a) {
                this.$$selectors = {};
                this.register =
                    function (c, d) {
                        var e = c + "-animation";
                        if (c && "." != c.charAt(0)) throw ge("notcsel", c);
                        this.$$selectors[c.substr(1)] = e;
                        a.factory(e, d)
                };
                this.classNameFilter = function (a) {
                    1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
                    return this.$$classNameFilter
                };
                this.$get = ["$timeout", "$$asyncCallback",
                    function (a, d) {
                        return {
                            enter: function (a, c, h, g) {
                                h ? h.after(a) : (c && c[0] || (c = h.parent()), c.append(a));
                                g && d(g)
                            },
                            leave: function (a, c) {
                                a.remove();
                                c && d(c)
                            },
                            move: function (a, c, d, g) {
                                this.enter(a, c, d, g)
                            },
                            addClass: function (a,
                                c, h) {
                                c = y(c) ? c : I(c) ? c.join(" ") : "";
                                r(a, function (a) {
                                    hb(a, c)
                                });
                                h && d(h)
                            },
                            removeClass: function (a, c, h) {
                                c = y(c) ? c : I(c) ? c.join(" ") : "";
                                r(a, function (a) {
                                    gb(a, c)
                                });
                                h && d(h)
                            },
                            setClass: function (a, c, h, g) {
                                r(a, function (a) {
                                    hb(a, c);
                                    gb(a, h)
                                });
                                g && d(g)
                            },
                            enabled: x
                        }
                    }
                ]
            }
        ],
        ha = F("$compile");
    mc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var td = /^(x[\:\-_]|data[\:\-_])/i,
        tc = F("$interpolate"),
        ie = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        Ed = {
            http: 80,
            https: 443,
            ftp: 21
        }, Lb = F("$location");
    yc.prototype = Mb.prototype = xc.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: ob("$$absUrl"),
        url: function (a, c) {
            if (C(a)) return this.$$url;
            var d = ie.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            (d[2] || d[1]) && this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this
        },
        protocol: ob("$$protocol"),
        host: ob("$$host"),
        port: ob("$$port"),
        path: zc("$$path", function (a) {
            return "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function (a, c) {
            switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (y(a)) this.$$search = $b(a);
                else if (X(a)) this.$$search = a;
                else throw Lb("isrcharg");
                break;
            default:
                C(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
            }
            this.$$compose();
            return this
        },
        hash: zc("$$hash", Aa),
        replace: function () {
            this.$$replace = !0;
            return this
        }
    };
    var ya = F("$parse"),
        Cc = {}, qa, La = {
            "null": function () {
                return null
            },
            "true": function () {
                return !0
            },
            "false": function () {
                return !1
            },
            undefined: x,
            "+": function (a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return v(d) ? v(e) ? d + e : d : v(e) ? e : s
            },
            "-": function (a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return (v(d) ? d : 0) - (v(e) ? e : 0)
            },
            "*": function (a, c, d, e) {
                return d(a, c) * e(a, c)
            },
            "/": function (a,
                c, d, e) {
                return d(a, c) / e(a, c)
            },
            "%": function (a, c, d, e) {
                return d(a, c) % e(a, c)
            },
            "^": function (a, c, d, e) {
                return d(a, c) ^ e(a, c)
            },
            "=": x,
            "===": function (a, c, d, e) {
                return d(a, c) === e(a, c)
            },
            "!==": function (a, c, d, e) {
                return d(a, c) !== e(a, c)
            },
            "==": function (a, c, d, e) {
                return d(a, c) == e(a, c)
            },
            "!=": function (a, c, d, e) {
                return d(a, c) != e(a, c)
            },
            "<": function (a, c, d, e) {
                return d(a, c) < e(a, c)
            },
            ">": function (a, c, d, e) {
                return d(a, c) > e(a, c)
            },
            "<=": function (a, c, d, e) {
                return d(a, c) <= e(a, c)
            },
            ">=": function (a, c, d, e) {
                return d(a, c) >= e(a, c)
            },
            "&&": function (a,
                c, d, e) {
                return d(a, c) && e(a, c)
            },
            "||": function (a, c, d, e) {
                return d(a, c) || e(a, c)
            },
            "&": function (a, c, d, e) {
                return d(a, c) & e(a, c)
            },
            "|": function (a, c, d, e) {
                return e(a, c)(a, c, d(a, c))
            },
            "!": function (a, c, d) {
                return !d(a, c)
            }
        }, je = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        }, Ob = function (a) {
            this.options = a
        };
    Ob.prototype = {
        constructor: Ob,
        lex: function (a) {
            this.text = a;
            this.index = 0;
            this.ch = s;
            this.lastCh = ":";
            this.tokens = [];
            var c;
            for (a = []; this.index < this.text.length;) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && ("{" === a[0] && (c = this.tokens[this.tokens.length - 1])) && (c.json = -1 === c.text.indexOf("."));
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && a.unshift(this.ch), this.is("}]") && a.shift(), this.index++;
                else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue
                } else {
                    var d =
                        this.ch + this.peek(),
                        e = d + this.peek(2),
                        f = La[this.ch],
                        h = La[d],
                        g = La[e];
                    g ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: g
                    }), this.index += 3) : h ? (this.tokens.push({
                        index: this.index,
                        text: d,
                        fn: h
                    }), this.index += 2) : f ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: f,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function (a) {
            return -1 !== a.indexOf(this.ch)
        },
        was: function (a) {
            return -1 !== a.indexOf(this.lastCh)
        },
        peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function (a) {
            return "0" <= a && "9" >= a
        },
        isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function (a, c, d) {
            d = d || this.index;
            c = v(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw ya("lexerr",
                a, c, this.text);
        },
        readNumber: function () {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = P(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d;
                else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d;
                    else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;
                    else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            a *= 1;
            this.tokens.push({
                index: c,
                text: a,
                json: !0,
                fn: function () {
                    return a
                }
            })
        },
        readIdent: function () {
            for (var a = this, c = "", d = this.index, e, f, h, g; this.index < this.text.length;) {
                g = this.text.charAt(this.index);
                if ("." === g || this.isIdent(g) || this.isNumber(g)) "." === g && (e = this.index), c += g;
                else break;
                this.index++
            }
            if (e)
                for (f = this.index; f < this.text.length;) {
                    g = this.text.charAt(f);
                    if ("(" === g) {
                        h = c.substr(e - d + 1);
                        c = c.substr(0, e - d);
                        this.index = f;
                        break
                    }
                    if (this.isWhitespace(g)) f++;
                    else break
                }
            d = {
                index: d,
                text: c
            };
            if (La.hasOwnProperty(c)) d.fn = La[c], d.json = La[c];
            else {
                var m = Bc(c, this.options, this.text);
                d.fn =
                    t(function (a, c) {
                        return m(a, c)
                    }, {
                        assign: function (d, e) {
                            return pb(d, c, e, a.text, a.options)
                        }
                    })
            }
            this.tokens.push(d);
            h && (this.tokens.push({
                index: e,
                text: ".",
                json: !1
            }), this.tokens.push({
                index: e + 1,
                text: h,
                json: !1
            }))
        },
        readString: function (a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var h = this.text.charAt(this.index),
                    e = e + h;
                if (f) "u" === h ? (h = this.text.substring(this.index + 1, this.index + 5), h.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + h + "]"), this.index +=
                    4, d += String.fromCharCode(parseInt(h, 16))) : d = (f = je[h]) ? d + f : d + h, f = !1;
                else if ("\\" === h) f = !0;
                else {
                    if (h === a) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            string: d,
                            json: !0,
                            fn: function () {
                                return d
                            }
                        });
                        return
                    }
                    d += h
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var Ya = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    Ya.ZERO = function () {
        return 0
    };
    Ya.prototype = {
        constructor: Ya,
        parse: function (a, c) {
            this.text = a;
            this.json = c;
            this.tokens = this.lexer.lex(a);
            c && (this.assignment = this.logicalOR, this.functionCall =
                this.fieldAccess = this.objectIndex = this.filterChain = function () {
                    this.throwError("is not valid json", {
                        text: a,
                        index: 0
                    })
                });
            var d = c ? this.primary() : this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            d.literal = !! d.literal;
            d.constant = !! d.constant;
            return d
        },
        primary: function () {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")");
            else if (this.expect("[")) a = this.arrayDeclaration();
            else if (this.expect("{")) a = this.object();
            else {
                var c = this.expect();
                (a = c.fn) ||
                    this.throwError("not a primary expression", c);
                c.json && (a.constant = !0, a.literal = !0)
            }
            for (var d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function (a, c) {
            throw ya("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw ya("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function (a,
            c, d, e) {
            if (0 < this.tokens.length) {
                var f = this.tokens[0],
                    h = f.text;
                if (h === a || h === c || h === d || h === e || !(a || c || d || e)) return f
            }
            return !1
        },
        expect: function (a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.json && !a.json && this.throwError("is not valid json", a), this.tokens.shift(), a) : !1
        },
        consume: function (a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
        },
        unaryFn: function (a, c) {
            return t(function (d, e) {
                return a(d, e, c)
            }, {
                constant: c.constant
            })
        },
        ternaryFn: function (a, c, d) {
            return t(function (e, f) {
                return a(e,
                    f) ? c(e, f) : d(e, f)
            }, {
                constant: a.constant && c.constant && d.constant
            })
        },
        binaryFn: function (a, c, d) {
            return t(function (e, f) {
                return c(e, f, a, d)
            }, {
                constant: a.constant && d.constant
            })
        },
        statements: function () {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function (c, d) {
                    for (var e, f = 0; f < a.length; f++) {
                        var h = a[f];
                        h && (e = h(c, d))
                    }
                    return e
                }
        },
        filterChain: function () {
            for (var a = this.expression(), c;;)
                if (c = this.expect("|")) a = this.binaryFn(a,
                    c.fn, this.filter());
                else return a
        },
        filter: function () {
            for (var a = this.expect(), c = this.$filter(a.text), d = [];;)
                if (a = this.expect(":")) d.push(this.expression());
                else {
                    var e = function (a, e, g) {
                        g = [g];
                        for (var m = 0; m < d.length; m++) g.push(d[m](a, e));
                        return c.apply(a, g)
                    };
                    return function () {
                        return e
                    }
                }
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary(),
                c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to",
                d), c = this.ternary(), function (d, f) {
                return a.assign(d, c(d, f), f)
            }) : a
        },
        ternary: function () {
            var a = this.logicalOR(),
                c, d;
            if (this.expect("?")) {
                c = this.ternary();
                if (d = this.expect(":")) return this.ternaryFn(a, c, this.ternary());
                this.throwError("expected :", d)
            } else return a
        },
        logicalOR: function () {
            for (var a = this.logicalAND(), c;;)
                if (c = this.expect("||")) a = this.binaryFn(a, c.fn, this.logicalAND());
                else return a
        },
        logicalAND: function () {
            var a = this.equality(),
                c;
            if (c = this.expect("&&")) a = this.binaryFn(a, c.fn, this.logicalAND());
            return a
        },
        equality: function () {
            var a = this.relational(),
                c;
            if (c = this.expect("==", "!=", "===", "!==")) a = this.binaryFn(a, c.fn, this.equality());
            return a
        },
        relational: function () {
            var a = this.additive(),
                c;
            if (c = this.expect("<", ">", "<=", ">=")) a = this.binaryFn(a, c.fn, this.relational());
            return a
        },
        additive: function () {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.fn, this.multiplicative());
            return a
        },
        multiplicative: function () {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a,
                c.fn, this.unary());
            return a
        },
        unary: function () {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Ya.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
        },
        fieldAccess: function (a) {
            var c = this,
                d = this.expect().text,
                e = Bc(d, this.options, this.text);
            return t(function (c, d, g) {
                return e(g || a(c, d))
            }, {
                assign: function (e, h, g) {
                    return pb(a(e, g), d, h, c.text, c.options)
                }
            })
        },
        objectIndex: function (a) {
            var c = this,
                d = this.expression();
            this.consume("]");
            return t(function (e,
                f) {
                var h = a(e, f),
                    g = d(e, f),
                    m;
                if (!h) return s;
                (h = Xa(h[g], c.text)) && (h.then && c.options.unwrapPromises) && (m = h, "$$v" in h || (m.$$v = s, m.then(function (a) {
                    m.$$v = a
                })), h = h.$$v);
                return h
            }, {
                assign: function (e, f, h) {
                    var g = d(e, h);
                    return Xa(a(e, h), c.text)[g] = f
                }
            })
        },
        functionCall: function (a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","))
            }
            this.consume(")");
            var e = this;
            return function (f, h) {
                for (var g = [], m = c ? c(f, h) : f, k = 0; k < d.length; k++) g.push(d[k](f, h));
                k = a(f, h, m) || x;
                Xa(m, e.text);
                Xa(k, e.text);
                g = k.apply ? k.apply(m, g) : k(g[0], g[1], g[2], g[3], g[4]);
                return Xa(g, e.text)
            }
        },
        arrayDeclaration: function () {
            var a = [],
                c = !0;
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    var d = this.expression();
                    a.push(d);
                    d.constant || (c = !1)
                } while (this.expect(","))
            }
            this.consume("]");
            return t(function (c, d) {
                for (var h = [], g = 0; g < a.length; g++) h.push(a[g](c, d));
                return h
            }, {
                literal: !0,
                constant: c
            })
        },
        object: function () {
            var a = [],
                c = !0;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.expect(),
                        d = d.string || d.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({
                        key: d,
                        value: e
                    });
                    e.constant || (c = !1)
                } while (this.expect(","))
            }
            this.consume("}");
            return t(function (c, d) {
                for (var e = {}, m = 0; m < a.length; m++) {
                    var k = a[m];
                    e[k.key] = k.value(c, d)
                }
                return e
            }, {
                literal: !0,
                constant: c
            })
        }
    };
    var Nb = {}, ra = F("$sce"),
        ea = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }, W = U.createElement("a"),
        Ec = xa(D.location.href, !0);
    Fc.$inject = ["$provide"];
    Gc.$inject = ["$locale"];
    Ic.$inject = ["$locale"];
    var Lc = ".",
        ce = {
            yyyy: Z("FullYear",
                4),
            yy: Z("FullYear", 2, 0, !0),
            y: Z("FullYear", 1),
            MMMM: rb("Month"),
            MMM: rb("Month", !0),
            MM: Z("Month", 2, 1),
            M: Z("Month", 1, 1),
            dd: Z("Date", 2),
            d: Z("Date", 1),
            HH: Z("Hours", 2),
            H: Z("Hours", 1),
            hh: Z("Hours", 2, -12),
            h: Z("Hours", 1, -12),
            mm: Z("Minutes", 2),
            m: Z("Minutes", 1),
            ss: Z("Seconds", 2),
            s: Z("Seconds", 1),
            sss: Z("Milliseconds", 3),
            EEEE: rb("Day"),
            EEE: rb("Day", !0),
            a: function (a, c) {
                return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function (a) {
                a = -1 * a.getTimezoneOffset();
                return a = (0 <= a ? "+" : "") + (qb(Math[0 < a ? "floor" : "ceil"](a / 60),
                    2) + qb(Math.abs(a % 60), 2))
            },
            ww: Nc(2),
            w: Nc(1)
        }, be = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
        ae = /^\-?\d+$/;
    Hc.$inject = ["$locale"];
    var Yd = $(P),
        Zd = $(Ja);
    Jc.$inject = ["$parse"];
    var ke = $({
        restrict: "E",
        compile: function (a, c) {
            8 >= Q && (c.href || c.name || c.$set("href", ""), a.append(U.createComment("IE fix")));
            if (!c.href && !c.xlinkHref && !c.name) return function (a, c) {
                var f = "[object SVGAnimatedString]" === Ba.call(c.prop("href")) ? "xlink:href" : "href";
                c.on("click", function (a) {
                    c.attr(f) ||
                        a.preventDefault()
                })
            }
        }
    }),
        Qb = {};
    r(jb, function (a, c) {
        if ("multiple" != a) {
            var d = ka("ng-" + c);
            Qb[d] = function () {
                return {
                    priority: 100,
                    link: function (a, f, h) {
                        a.$watch(h[d], function (a) {
                            h.$set(c, !! a)
                        })
                    }
                }
            }
        }
    });
    r(["src", "srcset", "href"], function (a) {
        var c = ka("ng-" + a);
        Qb[c] = function () {
            return {
                priority: 99,
                link: function (d, e, f) {
                    var h = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === Ba.call(e.prop("href")) && (g = "xlinkHref", f.$attr[g] = "xlink:href", h = null);
                    f.$observe(c, function (a) {
                        a && (f.$set(g, a), Q && h && e.prop(h, f[g]))
                    })
                }
            }
        }
    });
    var ub = {
        $addControl: x,
        $removeControl: x,
        $setValidity: x,
        $setDirty: x,
        $setPristine: x
    };
    Oc.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Qc = function (a) {
        return ["$timeout", function (c) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Oc,
                compile: function () {
                    return {
                        pre: function (a, e, f, h) {
                            if (!f.action) {
                                var g = function (a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                Pc(e[0], "submit", g);
                                e.on("$destroy", function () {
                                    c(function () {
                                        Gb(e[0], "submit", g)
                                    }, 0, !1)
                                })
                            }
                            var m = e.parent().controller("form"),
                                k = f.name ||
                                    f.ngForm;
                            k && pb(a, k, h, k);
                            if (m) e.on("$destroy", function () {
                                m.$removeControl(h);
                                k && pb(a, k, s, k);
                                t(h, ub)
                            })
                        }
                    }
                }
            }
        }]
    }, le = Qc(),
        me = Qc(!0),
        ne = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        oe = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
        pe = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Rc = /^(\d{4})-(\d{2})-(\d{2})$/,
        Sc = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,
        Rb = /^(\d{4})-W(\d\d)$/,
        Tc = /^(\d{4})-(\d\d)$/,
        Uc = /^(\d\d):(\d\d)$/,
        Vc = {
            text: Za,
            date: $a("date", Rc, wb(Rc, ["yyyy",
                "MM", "dd"
            ]), "yyyy-MM-dd"),
            "datetime-local": $a("datetimelocal", Sc, wb(Sc, ["yyyy", "MM", "dd", "HH", "mm"]), "yyyy-MM-ddTHH:mm"),
            time: $a("time", Uc, wb(Uc, ["HH", "mm"]), "HH:mm"),
            week: $a("week", Rb, function (a) {
                if (na(a)) return a;
                if (y(a)) {
                    Rb.lastIndex = 0;
                    var c = Rb.exec(a);
                    if (c) {
                        a = +c[1];
                        var d = +c[2],
                            c = Mc(a),
                            d = 7 * (d - 1);
                        return new Date(a, 0, c.getDate() + d)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: $a("month", Tc, wb(Tc, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (a, c, d, e, f, h) {
                Za(a, c, d, e, f, h);
                e.$parsers.push(function (a) {
                    var c = e.$isEmpty(a);
                    if (c || pe.test(a)) return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a);
                    e.$setValidity("number", !1);
                    return s
                });
                de(e, "number", c);
                e.$formatters.push(function (a) {
                    return e.$isEmpty(a) ? "" : "" + a
                });
                d.min && (a = function (a) {
                    var c = parseFloat(d.min);
                    return ma(e, "min", e.$isEmpty(a) || a >= c, a)
                }, e.$parsers.push(a), e.$formatters.push(a));
                d.max && (a = function (a) {
                    var c = parseFloat(d.max);
                    return ma(e, "max", e.$isEmpty(a) || a <= c, a)
                }, e.$parsers.push(a), e.$formatters.push(a));
                e.$formatters.push(function (a) {
                    return ma(e,
                        "number", e.$isEmpty(a) || yb(a), a)
                })
            },
            url: function (a, c, d, e, f, h) {
                Za(a, c, d, e, f, h);
                a = function (a) {
                    return ma(e, "url", e.$isEmpty(a) || ne.test(a), a)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            email: function (a, c, d, e, f, h) {
                Za(a, c, d, e, f, h);
                a = function (a) {
                    return ma(e, "email", e.$isEmpty(a) || oe.test(a), a)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            radio: function (a, c, d, e) {
                C(d.name) && c.attr("name", ab());
                c.on("click", function () {
                    c[0].checked && a.$apply(function () {
                        e.$setViewValue(d.value)
                    })
                });
                e.$render = function () {
                    c[0].checked =
                        d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function (a, c, d, e) {
                var f = d.ngTrueValue,
                    h = d.ngFalseValue;
                y(f) || (f = !0);
                y(h) || (h = !1);
                c.on("click", function () {
                    a.$apply(function () {
                        e.$setViewValue(c[0].checked)
                    })
                });
                e.$render = function () {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function (a) {
                    return a !== f
                };
                e.$formatters.push(function (a) {
                    return a === f
                });
                e.$parsers.push(function (a) {
                    return a ? f : h
                })
            },
            hidden: x,
            button: x,
            submit: x,
            reset: x,
            file: x
        }, Wc = ["$browser", "$sniffer", "$filter",
            function (a, c, d) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function (e, f, h, g) {
                        g && (Vc[P(h.type)] || Vc.text)(e, f, h, g, c, a, d)
                    }
                }
            }
        ],
        tb = "ng-valid",
        sb = "ng-invalid",
        Ka = "ng-pristine",
        vb = "ng-dirty",
        qe = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate",
            function (a, c, d, e, f, h) {
                function g(a, c) {
                    c = c ? "-" + eb(c, "-") : "";
                    h.removeClass(e, (a ? sb : tb) + c);
                    h.addClass(e, (a ? tb : sb) + c)
                }
                this.$modelValue = this.$viewValue = Number.NaN;
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$name = d.name;
                var m = f(d.ngModel),
                    k = m.assign;
                if (!k) throw F("ngModel")("nonassign", d.ngModel, fa(e));
                this.$render = x;
                this.$isEmpty = function (a) {
                    return C(a) || "" === a || null === a || a !== a
                };
                var l = e.inheritedData("$formController") || ub,
                    n = 0,
                    q = this.$error = {};
                e.addClass(Ka);
                g(!0);
                this.$setValidity = function (a, c) {
                    q[a] !== !c && (c ? (q[a] && n--, n || (g(!0), this.$valid = !0, this.$invalid = !1)) : (g(!1), this.$invalid = !0, this.$valid = !1, n++), q[a] = !c, g(c, a), l.$setValidity(a, c, this))
                };
                this.$setPristine = function () {
                    this.$dirty = !1;
                    this.$pristine = !0;
                    h.removeClass(e, vb);
                    h.addClass(e, Ka)
                };
                this.$setViewValue = function (d) {
                    this.$viewValue = d;
                    this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, Ka), h.addClass(e, vb), l.$setDirty());
                    r(this.$parsers, function (a) {
                        d = a(d)
                    });
                    this.$modelValue !== d && (this.$modelValue = d, k(a, d), r(this.$viewChangeListeners, function (a) {
                        try {
                            a()
                        } catch (d) {
                            c(d)
                        }
                    }))
                };
                var p = this;
                a.$watch(function () {
                    var c = m(a);
                    if (p.$modelValue !== c) {
                        var d = p.$formatters,
                            e = d.length;
                        for (p.$modelValue = c; e--;) c = d[e](c);
                        p.$viewValue !==
                            c && (p.$viewValue = c, p.$render())
                    }
                    return c
                })
            }
        ],
        re = function () {
            return {
                require: ["ngModel", "^?form"],
                controller: qe,
                link: function (a, c, d, e) {
                    var f = e[0],
                        h = e[1] || ub;
                    h.$addControl(f);
                    a.$on("$destroy", function () {
                        h.$removeControl(f)
                    })
                }
            }
        }, se = $({
            require: "ngModel",
            link: function (a, c, d, e) {
                e.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        }),
        Xc = function () {
            return {
                require: "?ngModel",
                link: function (a, c, d, e) {
                    if (e) {
                        d.required = !0;
                        var f = function (a) {
                            if (d.required && e.$isEmpty(a)) e.$setValidity("required", !1);
                            else return e.$setValidity("required", !0), a
                        };
                        e.$formatters.push(f);
                        e.$parsers.unshift(f);
                        d.$observe("required", function () {
                            f(e.$viewValue)
                        })
                    }
                }
            }
        }, te = function () {
            return {
                require: "ngModel",
                link: function (a, c, d, e) {
                    var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                    e.$parsers.push(function (a) {
                        if (!C(a)) {
                            var c = [];
                            a && r(a.split(f), function (a) {
                                a && c.push(ca(a))
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function (a) {
                        return I(a) ? a.join(", ") : s
                    });
                    e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, ue = /^(true|false|\d+)$/,
        ve = function () {
            return {
                priority: 100,
                compile: function (a, c) {
                    return ue.test(c.ngValue) ? function (a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function (a, c, f) {
                        a.$watch(f.ngValue, function (a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        }, we = sa(function (a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBind);
            a.$watch(d.ngBind, function (a) {
                c.text(a == s ? "" : a)
            })
        }),
        xe = ["$interpolate",
            function (a) {
                return function (c, d, e) {
                    c = a(d.attr(e.$attr.ngBindTemplate));
                    d.addClass("ng-binding").data("$binding", c);
                    e.$observe("ngBindTemplate", function (a) {
                        d.text(a)
                    })
                }
            }
        ],
        ye = ["$sce", "$parse",
            function (a, c) {
                return function (d, e, f) {
                    e.addClass("ng-binding").data("$binding", f.ngBindHtml);
                    var h = c(f.ngBindHtml);
                    d.$watch(function () {
                        return (h(d) || "").toString()
                    }, function (c) {
                        e.html(a.getTrustedHtml(h(d)) || "")
                    })
                }
            }
        ],
        ze = Pb("", !0),
        Ae = Pb("Odd", 0),
        Be = Pb("Even", 1),
        Ce = sa({
            compile: function (a, c) {
                c.$set("ngCloak", s);
                a.removeClass("ng-cloak")
            }
        }),
        De = [
            function () {
                return {
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }
        ],
        Yc = {};
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function (a) {
            var c = ka("ng-" + a);
            Yc[c] = ["$parse",
                function (d) {
                    return {
                        compile: function (e, f) {
                            var h = d(f[c]);
                            return function (c, d, e) {
                                d.on(P(a), function (a) {
                                    c.$apply(function () {
                                        h(c, {
                                            $event: a
                                        })
                                    })
                                })
                            }
                        }
                    }
                }
            ]
        });
    var Ee = ["$animate",
        function (a) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (c, d, e, f, h) {
                    var g, m, k;
                    c.$watch(e.ngIf, function (f) {
                        Oa(f) ? m || (m = c.$new(), h(m, function (c) {
                            c[c.length++] = U.createComment(" end ngIf: " + e.ngIf + " ");
                            g = {
                                clone: c
                            };
                            a.enter(c, d.parent(), d)
                        })) : (k && (k.remove(),
                            k = null), m && (m.$destroy(), m = null), g && (k = Bb(g.clone), a.leave(k, function () {
                            k = null
                        }), g = null))
                    })
                }
            }
        }
    ],
        Fe = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
            function (a, c, d, e, f) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: Ca.noop,
                    compile: function (h, g) {
                        var m = g.ngInclude || g.src,
                            k = g.onload || "",
                            l = g.autoscroll;
                        return function (g, h, p, r, s) {
                            var t = 0,
                                u, z, J, w = function () {
                                    z && (z.remove(), z = null);
                                    u && (u.$destroy(), u = null);
                                    J && (e.leave(J, function () {
                                        z = null
                                    }), z = J, J = null)
                                };
                            g.$watch(f.parseAsResourceUrl(m),
                                function (f) {
                                    var m = function () {
                                        !v(l) || l && !g.$eval(l) || d()
                                    }, p = ++t;
                                    f ? (a.get(f, {
                                        cache: c
                                    }).success(function (a) {
                                        if (p === t) {
                                            var c = g.$new();
                                            r.template = a;
                                            a = s(c, function (a) {
                                                w();
                                                e.enter(a, null, h, m)
                                            });
                                            u = c;
                                            J = a;
                                            u.$emit("$includeContentLoaded");
                                            g.$eval(k)
                                        }
                                    }).error(function () {
                                        p === t && w()
                                    }), g.$emit("$includeContentRequested")) : (w(), r.template = null)
                                })
                        }
                    }
                }
            }
        ],
        Ge = ["$compile",
            function (a) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function (c, d, e, f) {
                        d.html(f.template);
                        a(d.contents())(c)
                    }
                }
            }
        ],
        He = sa({
            priority: 450,
            compile: function () {
                return {
                    pre: function (a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        Ie = sa({
            terminal: !0,
            priority: 1E3
        }),
        Je = ["$locale", "$interpolate",
            function (a, c) {
                var d = /{}/g;
                return {
                    restrict: "EA",
                    link: function (e, f, h) {
                        var g = h.count,
                            m = h.$attr.when && f.attr(h.$attr.when),
                            k = h.offset || 0,
                            l = e.$eval(m) || {}, n = {}, q = c.startSymbol(),
                            p = c.endSymbol(),
                            s = /^when(Minus)?(.+)$/;
                        r(h, function (a, c) {
                            s.test(c) && (l[P(c.replace("when", "").replace("Minus", "-"))] = f.attr(h.$attr[c]))
                        });
                        r(l, function (a, e) {
                            n[e] = c(a.replace(d, q + g + "-" + k + p))
                        });
                        e.$watch(function () {
                            var c =
                                parseFloat(e.$eval(g));
                            if (isNaN(c)) return "";
                            c in l || (c = a.pluralCat(c - k));
                            return n[c](e, f, !0)
                        }, function (a) {
                            f.text(a)
                        })
                    }
                }
            }
        ],
        Ke = ["$parse", "$animate",
            function (a, c) {
                var d = F("ngRepeat");
                return {
                    transclude: "element",
                    priority: 1E3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function (e, f, h, g, m) {
                        var k = h.ngRepeat,
                            l = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                            n, q, p, s, t, v, u = {
                                $id: Fa
                            };
                        if (!l) throw d("iexp", k);
                        h = l[1];
                        g = l[2];
                        (l = l[3]) ? (n = a(l), q = function (a, c, d) {
                            v && (u[v] = a);
                            u[t] = c;
                            u.$index = d;
                            return n(e,
                                u)
                        }) : (p = function (a, c) {
                            return Fa(c)
                        }, s = function (a) {
                            return a
                        });
                        l = h.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                        if (!l) throw d("iidexp", h);
                        t = l[3] || l[1];
                        v = l[2];
                        var H = {};
                        e.$watchCollection(g, function (a) {
                            var g, h, l = f[0],
                                n, u = {}, y, N, x, C, F, K, I = [];
                            if (xb(a)) F = a, n = q || p;
                            else {
                                n = q || s;
                                F = [];
                                for (x in a) a.hasOwnProperty(x) && "$" != x.charAt(0) && F.push(x);
                                F.sort()
                            }
                            y = F.length;
                            h = I.length = F.length;
                            for (g = 0; g < h; g++)
                                if (x = a === F ? g : F[g], C = a[x], C = n(x, C, g), wa(C, "`track by` id"), H.hasOwnProperty(C)) K = H[C], delete H[C], u[C] =
                                    K, I[g] = K;
                                else {
                                    if (u.hasOwnProperty(C)) throw r(I, function (a) {
                                        a && a.scope && (H[a.id] = a)
                                    }), d("dupes", k, C);
                                    I[g] = {
                                        id: C
                                    };
                                    u[C] = !1
                                }
                            for (x in H) H.hasOwnProperty(x) && (K = H[x], g = Bb(K.clone), c.leave(g), r(g, function (a) {
                                a.$$NG_REMOVED = !0
                            }), K.scope.$destroy());
                            g = 0;
                            for (h = F.length; g < h; g++) {
                                x = a === F ? g : F[g];
                                C = a[x];
                                K = I[g];
                                I[g - 1] && (l = I[g - 1].clone[I[g - 1].clone.length - 1]);
                                if (K.scope) {
                                    N = K.scope;
                                    n = l;
                                    do n = n.nextSibling; while (n && n.$$NG_REMOVED);
                                    K.clone[0] != n && c.move(Bb(K.clone), null, z(l));
                                    l = K.clone[K.clone.length - 1]
                                } else N = e.$new();
                                N[t] = C;
                                v && (N[v] = x);
                                N.$index = g;
                                N.$first = 0 === g;
                                N.$last = g === y - 1;
                                N.$middle = !(N.$first || N.$last);
                                N.$odd = !(N.$even = 0 === (g & 1));
                                K.scope || m(N, function (a) {
                                    a[a.length++] = U.createComment(" end ngRepeat: " + k + " ");
                                    c.enter(a, null, z(l));
                                    l = a;
                                    K.scope = N;
                                    K.clone = a;
                                    u[K.id] = K
                                })
                            }
                            H = u
                        })
                    }
                }
            }
        ],
        Le = ["$animate",
            function (a) {
                return function (c, d, e) {
                    c.$watch(e.ngShow, function (c) {
                        a[Oa(c) ? "removeClass" : "addClass"](d, "ng-hide")
                    })
                }
            }
        ],
        Me = ["$animate",
            function (a) {
                return function (c, d, e) {
                    c.$watch(e.ngHide, function (c) {
                        a[Oa(c) ? "addClass" : "removeClass"](d,
                            "ng-hide")
                    })
                }
            }
        ],
        Ne = sa(function (a, c, d) {
            a.$watch(d.ngStyle, function (a, d) {
                d && a !== d && r(d, function (a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            }, !0)
        }),
        Oe = ["$animate",
            function (a) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope",
                        function () {
                            this.cases = {}
                        }
                    ],
                    link: function (c, d, e, f) {
                        var h, g, m, k = [];
                        c.$watch(e.ngSwitch || e.on, function (d) {
                            var n, q = k.length;
                            if (0 < q) {
                                if (m) {
                                    for (n = 0; n < q; n++) m[n].remove();
                                    m = null
                                }
                                m = [];
                                for (n = 0; n < q; n++) {
                                    var p = g[n];
                                    k[n].$destroy();
                                    m[n] = p;
                                    a.leave(p, function () {
                                        m.splice(n, 1);
                                        0 === m.length && (m = null)
                                    })
                                }
                            }
                            g = [];
                            k = [];
                            if (h = f.cases["!" + d] || f.cases["?"]) c.$eval(e.change), r(h, function (d) {
                                var e = c.$new();
                                k.push(e);
                                d.transclude(e, function (c) {
                                    var e = d.element;
                                    g.push(c);
                                    a.enter(c, e.parent(), e)
                                })
                            })
                        })
                    }
                }
            }
        ],
        Pe = sa({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function (a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        Qe = sa({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function (a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        Re = sa({
            link: function (a, c, d, e, f) {
                if (!f) throw F("ngTransclude")("orphan", fa(c));
                f(function (a) {
                    c.empty();
                    c.append(a)
                })
            }
        }),
        Se = ["$templateCache",
            function (a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function (c, d) {
                        "text/ng-template" == d.type && a.put(d.id, c[0].text)
                    }
                }
            }
        ],
        Te = F("ngOptions"),
        Ue = $({
            terminal: !0
        }),
        Ve = ["$compile", "$parse",
            function (a, c) {
                var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                    e = {
                        $setViewValue: x
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs",
                        function (a, c, d) {
                            var m = this,
                                k = {}, l = e,
                                n;
                            m.databound = d.ngModel;
                            m.init = function (a, c, d) {
                                l = a;
                                n = d
                            };
                            m.addOption = function (c) {
                                wa(c, '"option value"');
                                k[c] = !0;
                                l.$viewValue == c && (a.val(c), n.parent() && n.remove())
                            };
                            m.removeOption = function (a) {
                                this.hasOption(a) && (delete k[a], l.$viewValue == a && this.renderUnknownOption(a))
                            };
                            m.renderUnknownOption = function (c) {
                                c = "? " + Fa(c) + " ?";
                                n.val(c);
                                a.prepend(n);
                                a.val(c);
                                n.prop("selected", !0)
                            };
                            m.hasOption = function (a) {
                                return k.hasOwnProperty(a)
                            };
                            c.$on("$destroy", function () {
                                m.renderUnknownOption = x
                            })
                        }
                    ],
                    link: function (e, h, g, m) {
                        function k(a, c, d, e) {
                            d.$render = function () {
                                var a = d.$viewValue;
                                e.hasOption(a) ? (y.parent() && y.remove(), c.val(a), "" === a && x.prop("selected", !0)) : C(a) && x ? c.val("") : e.renderUnknownOption(a)
                            };
                            c.on("change", function () {
                                a.$apply(function () {
                                    y.parent() && y.remove();
                                    d.$setViewValue(c.val())
                                })
                            })
                        }

                        function l(a, c, d) {
                            var e;
                            d.$render = function () {
                                var a = new Sa(d.$viewValue);
                                r(c.find("option"),
                                    function (c) {
                                        c.selected = v(a.get(c.value))
                                    })
                            };
                            a.$watch(function () {
                                ta(e, d.$viewValue) || (e = ba(d.$viewValue), d.$render())
                            });
                            c.on("change", function () {
                                a.$apply(function () {
                                    var a = [];
                                    r(c.find("option"), function (c) {
                                        c.selected && a.push(c.value)
                                    });
                                    d.$setViewValue(a)
                                })
                            })
                        }

                        function n(e, f, g) {
                            function h() {
                                var a = {
                                    "": []
                                }, c = [""],
                                    d, k, s, t, y;
                                t = g.$modelValue;
                                y = z(e) || [];
                                var A = n ? Sb(y) : y,
                                    C, B, D;
                                B = {};
                                s = !1;
                                var L, J;
                                if (p)
                                    if (w && I(t))
                                        for (s = new Sa([]), D = 0; D < t.length; D++) B[m] = t[D], s.put(w(e, B), t[D]);
                                    else s = new Sa(t);
                                for (D = 0; C = A.length,
                                    D < C; D++) {
                                    k = D;
                                    if (n) {
                                        k = A[D];
                                        if ("$" === k.charAt(0)) continue;
                                        B[n] = k
                                    }
                                    B[m] = y[k];
                                    d = q(e, B) || "";
                                    (k = a[d]) || (k = a[d] = [], c.push(d));
                                    p ? d = v(s.remove(w ? w(e, B) : r(e, B))) : (w ? (d = {}, d[m] = t, d = w(e, d) === w(e, B)) : d = t === r(e, B), s = s || d);
                                    L = l(e, B);
                                    L = v(L) ? L : "";
                                    k.push({
                                        id: w ? w(e, B) : n ? A[D] : D,
                                        label: L,
                                        selected: d
                                    })
                                }
                                p || (E || null === t ? a[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !s
                                }) : s || a[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                }));
                                B = 0;
                                for (A = c.length; B < A; B++) {
                                    d = c[B];
                                    k = a[d];
                                    x.length <= B ? (t = {
                                            element: F.clone().attr("label", d),
                                            label: k.label
                                        }, y = [t], x.push(y),
                                        f.append(t.element)) : (y = x[B], t = y[0], t.label != d && t.element.attr("label", t.label = d));
                                    L = null;
                                    D = 0;
                                    for (C = k.length; D < C; D++) s = k[D], (d = y[D + 1]) ? (L = d.element, d.label !== s.label && L.text(d.label = s.label), d.id !== s.id && L.val(d.id = s.id), L[0].selected !== s.selected && L.prop("selected", d.selected = s.selected)) : ("" === s.id && E ? J = E : (J = u.clone()).val(s.id).attr("selected", s.selected).text(s.label), y.push({
                                        element: J,
                                        label: s.label,
                                        id: s.id,
                                        selected: s.selected
                                    }), L ? L.after(J) : t.element.append(J), L = J);
                                    for (D++; y.length > D;) y.pop().element.remove()
                                }
                                for (; x.length >
                                    B;) x.pop()[0].element.remove()
                            }
                            var k;
                            if (!(k = t.match(d))) throw Te("iexp", t, fa(f));
                            var l = c(k[2] || k[1]),
                                m = k[4] || k[6],
                                n = k[5],
                                q = c(k[3] || ""),
                                r = c(k[2] ? k[1] : m),
                                z = c(k[7]),
                                w = k[8] ? c(k[8]) : null,
                                x = [
                                    [{
                                        element: f,
                                        label: ""
                                    }]
                                ];
                            E && (a(E)(e), E.removeClass("ng-scope"), E.remove());
                            f.empty();
                            f.on("change", function () {
                                e.$apply(function () {
                                    var a, c = z(e) || [],
                                        d = {}, h, k, l, q, t, v, u;
                                    if (p)
                                        for (k = [], q = 0, v = x.length; q < v; q++)
                                            for (a = x[q], l = 1, t = a.length; l < t; l++) {
                                                if ((h = a[l].element)[0].selected) {
                                                    h = h.val();
                                                    n && (d[n] = h);
                                                    if (w)
                                                        for (u = 0; u < c.length &&
                                                            (d[m] = c[u], w(e, d) != h); u++);
                                                    else d[m] = c[h];
                                                    k.push(r(e, d))
                                                }
                                            } else if (h = f.val(), "?" == h) k = s;
                                            else if ("" === h) k = null;
                                    else if (w)
                                        for (u = 0; u < c.length; u++) {
                                            if (d[m] = c[u], w(e, d) == h) {
                                                k = r(e, d);
                                                break
                                            }
                                        } else d[m] = c[h], n && (d[n] = h), k = r(e, d);
                                    g.$setViewValue(k)
                                })
                            });
                            g.$render = h;
                            e.$watch(h)
                        }
                        if (m[1]) {
                            var q = m[0];
                            m = m[1];
                            var p = g.multiple,
                                t = g.ngOptions,
                                E = !1,
                                x, u = z(U.createElement("option")),
                                F = z(U.createElement("optgroup")),
                                y = u.clone();
                            g = 0;
                            for (var w = h.children(), D = w.length; g < D; g++)
                                if ("" === w[g].value) {
                                    x = E = w.eq(g);
                                    break
                                }
                            q.init(m, E,
                                y);
                            p && (m.$isEmpty = function (a) {
                                return !a || 0 === a.length
                            });
                            t ? n(e, h, m) : p ? l(e, h, m) : k(e, h, m, q)
                        }
                    }
                }
            }
        ],
        We = ["$interpolate",
            function (a) {
                var c = {
                    addOption: x,
                    removeOption: x
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function (d, e) {
                        if (C(e.value)) {
                            var f = a(d.text(), !0);
                            f || e.$set("value", d.text())
                        }
                        return function (a, d, e) {
                            var k = d.parent(),
                                l = k.data("$selectController") || k.parent().data("$selectController");
                            l && l.databound ? d.prop("selected", !1) : l = c;
                            f ? a.$watch(f, function (a, c) {
                                e.$set("value", a);
                                a !== c && l.removeOption(c);
                                l.addOption(a)
                            }) :
                                l.addOption(e.value);
                            d.on("$destroy", function () {
                                l.removeOption(e.value)
                            })
                        }
                    }
                }
            }
        ],
        Xe = $({
            restrict: "E",
            terminal: !1
        });
    (Da = D.jQuery) ? (z = Da, t(Da.fn, {
            scope: Ga.scope,
            isolateScope: Ga.isolateScope,
            controller: Ga.controller,
            injector: Ga.injector,
            inheritedData: Ga.inheritedData
        }), Cb("remove", !0, !0, !1), Cb("empty", !1, !1, !1), Cb("html", !1, !1, !0)) : z = S;
    Ca.element = z;
    (function (a) {
        t(a, {
            bootstrap: bc,
            copy: ba,
            extend: t,
            equals: ta,
            element: z,
            forEach: r,
            injector: cc,
            noop: x,
            bind: db,
            toJson: oa,
            fromJson: Yb,
            identity: Aa,
            isUndefined: C,
            isDefined: v,
            isString: y,
            isFunction: O,
            isObject: X,
            isNumber: yb,
            isElement: $c,
            isArray: I,
            version: fe,
            isDate: na,
            lowercase: P,
            uppercase: Ja,
            callbacks: {
                counter: 0
            },
            $$minErr: F,
            $$csp: Xb
        });
        Ua = ed(D);
        try {
            Ua("ngLocale")
        } catch (c) {
            Ua("ngLocale", []).provider("$locale", Dd)
        }
        Ua("ng", ["ngLocale"], ["$provide",
            function (a) {
                a.provider({
                    $$sanitizeUri: Od
                });
                a.provider("$compile", mc).directive({
                    a: ke,
                    input: Wc,
                    textarea: Wc,
                    form: le,
                    script: Se,
                    select: Ve,
                    style: Xe,
                    option: We,
                    ngBind: we,
                    ngBindHtml: ye,
                    ngBindTemplate: xe,
                    ngClass: ze,
                    ngClassEven: Be,
                    ngClassOdd: Ae,
                    ngCloak: Ce,
                    ngController: De,
                    ngForm: me,
                    ngHide: Me,
                    ngIf: Ee,
                    ngInclude: Fe,
                    ngInit: He,
                    ngNonBindable: Ie,
                    ngPluralize: Je,
                    ngRepeat: Ke,
                    ngShow: Le,
                    ngStyle: Ne,
                    ngSwitch: Oe,
                    ngSwitchWhen: Pe,
                    ngSwitchDefault: Qe,
                    ngOptions: Ue,
                    ngTransclude: Re,
                    ngModel: re,
                    ngList: te,
                    ngChange: se,
                    required: Xc,
                    ngRequired: Xc,
                    ngValue: ve
                }).directive({
                    ngInclude: Ge
                }).directive(Qb).directive(Yc);
                a.provider({
                    $anchorScroll: nd,
                    $animate: he,
                    $browser: qd,
                    $cacheFactory: rd,
                    $controller: ud,
                    $document: vd,
                    $exceptionHandler: wd,
                    $filter: Fc,
                    $interpolate: Bd,
                    $interval: Cd,
                    $http: xd,
                    $httpBackend: zd,
                    $location: Fd,
                    $log: Gd,
                    $parse: Jd,
                    $rootScope: Nd,
                    $q: Kd,
                    $sce: Rd,
                    $sceDelegate: Qd,
                    $sniffer: Sd,
                    $templateCache: sd,
                    $timeout: Td,
                    $window: Ud,
                    $$rAF: Md,
                    $$asyncCallback: od
                })
            }
        ])
    })(Ca);
    z(U).ready(function () {
        cd(U, bc)
    })
})(window, document);
!angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map

;
/*
 AngularJS v1.2.15-build.2399+sha.ca4ddfa
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (n, e, A) {
    'use strict';

    function x(s, g, k) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function (a, c, b, f, w) {
                function y() {
                    p && (p.remove(), p = null);
                    h && (h.$destroy(), h = null);
                    l && (k.leave(l, function () {
                        p = null
                    }), p = l, l = null)
                }

                function v() {
                    var b = s.current && s.current.locals;
                    if (e.isDefined(b && b.$template)) {
                        var b = a.$new(),
                            d = s.current;
                        l = w(b, function (d) {
                            k.enter(d, null, l || c, function () {
                                !e.isDefined(t) || t && !a.$eval(t) || g()
                            });
                            y()
                        });
                        h = d.scope = b;
                        h.$emit("$viewContentLoaded");
                        h.$eval(u)
                    } else y()
                }
                var h, l, p, t = b.autoscroll,
                    u = b.onload || "";
                a.$on("$routeChangeSuccess", v);
                v()
            }
        }
    }

    function z(e, g, k) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function (a, c) {
                var b = k.current,
                    f = b.locals;
                c.html(f.$template);
                var w = e(c.contents());
                b.controller && (f.$scope = a, f = g(b.controller, f), b.controllerAs && (a[b.controllerAs] = f), c.data("$ngControllerController", f), c.children().data("$ngControllerController", f));
                w(a)
            }
        }
    }
    n = e.module("ngRoute", ["ng"]).provider("$route", function () {
        function s(a, c) {
            return e.extend(new(e.extend(function () {}, {
                prototype: a
            })), c)
        }

        function g(a, e) {
            var b = e.caseInsensitiveMatch,
                f = {
                    originalPath: a,
                    regexp: a
                }, k = f.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, e, b, c) {
                a = "?" === c ? c : null;
                c = "*" === c ? c : null;
                k.push({
                    name: b,
                    optional: !! a
                });
                e = e || "";
                return "" + (a ? "" : e) + "(?:" + (a ? e : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
            }).replace(/([\/$\*])/g, "\\$1");
            f.regexp = RegExp("^" + a + "$", b ? "i" : "");
            return f
        }
        var k = {};
        this.when = function (a, c) {
            k[a] = e.extend({
                reloadOnSearch: !0
            }, c, a && g(a, c));
            if (a) {
                var b =
                    "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                k[b] = e.extend({
                    redirectTo: a
                }, g(b, c))
            }
            return this
        };
        this.otherwise = function (a) {
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce",
            function (a, c, b, f, g, n, v, h) {
                function l() {
                    var d = p(),
                        m = r.current;
                    if (d && m && d.$$route === m.$$route && e.equals(d.pathParams, m.pathParams) && !d.reloadOnSearch && !u) m.params = d.params, e.copy(m.params, b), a.$broadcast("$routeUpdate", m);
                    else if (d || m) u = !1, a.$broadcast("$routeChangeStart",
                        d, m), (r.current = d) && d.redirectTo && (e.isString(d.redirectTo) ? c.path(t(d.redirectTo, d.params)).search(d.params).replace() : c.url(d.redirectTo(d.pathParams, c.path(), c.search())).replace()), f.when(d).then(function () {
                        if (d) {
                            var a = e.extend({}, d.resolve),
                                c, b;
                            e.forEach(a, function (d, c) {
                                a[c] = e.isString(d) ? g.get(d) : g.invoke(d)
                            });
                            e.isDefined(c = d.template) ? e.isFunction(c) && (c = c(d.params)) : e.isDefined(b = d.templateUrl) && (e.isFunction(b) && (b = b(d.params)), b = h.getTrustedResourceUrl(b), e.isDefined(b) && (d.loadedTemplateUrl =
                                b, c = n.get(b, {
                                    cache: v
                                }).then(function (a) {
                                    return a.data
                                })));
                            e.isDefined(c) && (a.$template = c);
                            return f.all(a)
                        }
                    }).then(function (c) {
                        d == r.current && (d && (d.locals = c, e.copy(d.params, b)), a.$broadcast("$routeChangeSuccess", d, m))
                    }, function (c) {
                        d == r.current && a.$broadcast("$routeChangeError", d, m, c)
                    })
                }

                function p() {
                    var a, b;
                    e.forEach(k, function (f, k) {
                        var q;
                        if (q = !b) {
                            var g = c.path();
                            q = f.keys;
                            var l = {};
                            if (f.regexp)
                                if (g = f.regexp.exec(g)) {
                                    for (var h = 1, p = g.length; h < p; ++h) {
                                        var n = q[h - 1],
                                            r = "string" == typeof g[h] ? decodeURIComponent(g[h]) :
                                                g[h];
                                        n && r && (l[n.name] = r)
                                    }
                                    q = l
                                } else q = null;
                                else q = null;
                            q = a = q
                        }
                        q && (b = s(f, {
                            params: e.extend({}, c.search(), a),
                            pathParams: a
                        }), b.$$route = f)
                    });
                    return b || k[null] && s(k[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function t(a, c) {
                    var b = [];
                    e.forEach((a || "").split(":"), function (a, d) {
                        if (0 === d) b.push(a);
                        else {
                            var e = a.match(/(\w+)(.*)/),
                                f = e[1];
                            b.push(c[f]);
                            b.push(e[2] || "");
                            delete c[f]
                        }
                    });
                    return b.join("")
                }
                var u = !1,
                    r = {
                        routes: k,
                        reload: function () {
                            u = !0;
                            a.$evalAsync(l)
                        }
                    };
                a.$on("$locationChangeSuccess", l);
                return r
            }
        ]
    });
    n.provider("$routeParams",
        function () {
            this.$get = function () {
                return {}
            }
        });
    n.directive("ngView", x);
    n.directive("ngView", z);
    x.$inject = ["$route", "$anchorScroll", "$animate"];
    z.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map

;
/*
 AngularJS v1.2.15-build.2399+sha.ca4ddfa
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (G, g, Q) {
    'use strict';
    g.module("ngAnimate", ["ng"]).factory("$$animateReflow", ["$$rAF", "$document",
        function (g, G) {
            return function (e) {
                return g(function () {
                    e()
                })
            }
        }
    ]).config(["$provide", "$animateProvider",
        function (W, H) {
            function e(e) {
                for (var m = 0; m < e.length; m++) {
                    var g = e[m];
                    if (g.nodeType == ba) return g
                }
            }

            function B(m) {
                return g.element(e(m))
            }
            var r = g.noop,
                m = g.forEach,
                ga = H.$$selectors,
                ba = 1,
                h = "$$ngAnimateState",
                K = "ng-animate",
                q = {
                    running: !0
                };
            W.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement",
                "$$asyncCallback", "$rootScope", "$document",
                function (x, G, aa, L, F, I, Q) {
                    function R(a) {
                        if (a) {
                            var b = [],
                                c = {};
                            a = a.substr(1).split(".");
                            (aa.transitions || aa.animations) && a.push("");
                            for (var d = 0; d < a.length; d++) {
                                var f = a[d],
                                    e = ga[f];
                                e && !c[f] && (b.push(G.get(e)), c[f] = !0)
                            }
                            return b
                        }
                    }

                    function M(a, b, c) {
                        function d(a, b) {
                            var c = a[b],
                                d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                            if (c || d) return "leave" == b && (d = c, c = null), u.push({
                                event: b,
                                fn: c
                            }), p.push({
                                event: b,
                                fn: d
                            }), !0
                        }

                        function f(b, d, e) {
                            var f = [];
                            m(b, function (a) {
                                a.fn && f.push(a)
                            });
                            var l = 0;
                            m(f, function (b, m) {
                                var C = function () {
                                    a: {
                                        if (d) {
                                            (d[m] || r)();
                                            if (++l < f.length) break a;
                                            d = null
                                        }
                                        e()
                                    }
                                };
                                switch (b.event) {
                                case "setClass":
                                    d.push(b.fn(a, n, A, C));
                                    break;
                                case "addClass":
                                    d.push(b.fn(a, n || c, C));
                                    break;
                                case "removeClass":
                                    d.push(b.fn(a, A || c, C));
                                    break;
                                default:
                                    d.push(b.fn(a, C))
                                }
                            });
                            d && 0 === d.length && e()
                        }
                        var e = a[0];
                        if (e) {
                            var h = "setClass" == b,
                                q = h || "addClass" == b || "removeClass" == b,
                                n, A;
                            g.isArray(c) && (n = c[0], A = c[1], c = n + " " + A);
                            var y = a.attr("class") + " " + c;
                            if (T(y)) {
                                var v = r,
                                    z = [],
                                    p = [],
                                    w = r,
                                    l = [],
                                    u = [],
                                    y = (" " + y).replace(/\s+/g,
                                        ".");
                                m(R(y), function (a) {
                                    !d(a, b) && h && (d(a, "addClass"), d(a, "removeClass"))
                                });
                                return {
                                    node: e,
                                    event: b,
                                    className: c,
                                    isClassBased: q,
                                    isSetClassOperation: h,
                                    before: function (a) {
                                        v = a;
                                        f(p, z, function () {
                                            v = r;
                                            a()
                                        })
                                    },
                                    after: function (a) {
                                        w = a;
                                        f(u, l, function () {
                                            w = r;
                                            a()
                                        })
                                    },
                                    cancel: function () {
                                        z && (m(z, function (a) {
                                            (a || r)(!0)
                                        }), v(!0));
                                        l && (m(l, function (a) {
                                            (a || r)(!0)
                                        }), w(!0))
                                    }
                                }
                            }
                        }
                    }

                    function s(a, b, c, d, f, e, q) {
                        function r(d) {
                            var e = "$animate:" + d;
                            w && (w[e] && 0 < w[e].length) && F(function () {
                                c.triggerHandler(e, {
                                    event: a,
                                    className: b
                                })
                            })
                        }

                        function n() {
                            r("before")
                        }

                        function A() {
                            r("after")
                        }

                        function y() {
                            r("close");
                            q && F(function () {
                                q()
                            })
                        }

                        function v() {
                            v.hasBeenRun || (v.hasBeenRun = !0, e())
                        }

                        function z() {
                            if (!z.hasBeenRun) {
                                z.hasBeenRun = !0;
                                var d = c.data(h);
                                d && (p.isClassBased ? E(c, b) : (F(function () {
                                    var d = c.data(h) || {};
                                    s == d.index && E(c, b, a)
                                }), c.data(h, d)));
                                y()
                            }
                        }
                        var p = M(c, a, b);
                        if (p) {
                            b = p.className;
                            var w = g.element._data(p.node),
                                w = w && w.events;
                            d || (d = f ? f.parent() : c.parent());
                            var l = c.data(h) || {};
                            f = l.active || {};
                            var u = l.totalActive || 0,
                                C = l.last;
                            if (p.isClassBased && (l.disabled || C && !C.isClassBased) ||
                                O(c, d)) v(), n(), A(), z();
                            else {
                                d = !1;
                                if (0 < u) {
                                    l = [];
                                    if (p.isClassBased) "setClass" == C.event ? (l.push(C), E(c, b)) : f[b] && (x = f[b], x.event == a ? d = !0 : (l.push(x), E(c, b)));
                                    else if ("leave" == a && f["ng-leave"]) d = !0;
                                    else {
                                        for (var x in f) l.push(f[x]), E(c, x);
                                        f = {};
                                        u = 0
                                    }
                                    0 < l.length && m(l, function (a) {
                                        a.cancel()
                                    })
                                }!p.isClassBased || (p.isSetClassOperation || d) || (d = "addClass" == a == c.hasClass(b));
                                if (d) n(), A(), y();
                                else {
                                    if ("leave" == a) c.one("$destroy", function (a) {
                                        a = g.element(this);
                                        var b = a.data(h);
                                        b && (b = b.active["ng-leave"]) && (b.cancel(), E(a,
                                            "ng-leave"))
                                    });
                                    c.addClass(K);
                                    var s = P++;
                                    u++;
                                    f[b] = p;
                                    c.data(h, {
                                        last: p,
                                        active: f,
                                        index: s,
                                        totalActive: u
                                    });
                                    n();
                                    p.before(function (d) {
                                        var e = c.data(h);
                                        d = d || !e || !e.active[b] || p.isClassBased && e.active[b].event != a;
                                        v();
                                        !0 === d ? z() : (A(), p.after(z))
                                    })
                                }
                            }
                        } else v(), n(), A(), y()
                    }

                    function U(a) {
                        if (a = e(a)) a = g.isFunction(a.getElementsByClassName) ? a.getElementsByClassName(K) : a.querySelectorAll("." + K), m(a, function (a) {
                            a = g.element(a);
                            (a = a.data(h)) && a.active && m(a.active, function (a) {
                                a.cancel()
                            })
                        })
                    }

                    function E(a, b) {
                        if (e(a) == e(L)) q.disabled ||
                            (q.running = !1, q.structural = !1);
                        else if (b) {
                            var c = a.data(h) || {}, d = !0 === b;
                            !d && (c.active && c.active[b]) && (c.totalActive--, delete c.active[b]);
                            if (d || !c.totalActive) a.removeClass(K), a.removeData(h)
                        }
                    }

                    function O(a, b) {
                        if (q.disabled) return !0;
                        if (e(a) == e(L)) return q.disabled || q.running;
                        do {
                            if (0 === b.length) break;
                            var c = e(b) == e(L),
                                d = c ? q : b.data(h),
                                d = d && ( !! d.disabled || d.running || 0 < d.totalActive);
                            if (c || d) return d;
                            if (c) break
                        } while (b = b.parent());
                        return !0
                    }
                    var P = 0;
                    L.data(h, q);
                    I.$$postDigest(function () {
                        I.$$postDigest(function () {
                            q.running = !1
                        })
                    });
                    var V = H.classNameFilter(),
                        T = V ? function (a) {
                            return V.test(a)
                        } : function () {
                            return !0
                        };
                    return {
                        enter: function (a, b, c, d) {
                            this.enabled(!1, a);
                            x.enter(a, b, c);
                            I.$$postDigest(function () {
                                a = B(a);
                                s("enter", "ng-enter", a, b, c, r, d)
                            })
                        },
                        leave: function (a, b) {
                            U(a);
                            this.enabled(!1, a);
                            I.$$postDigest(function () {
                                s("leave", "ng-leave", B(a), null, null, function () {
                                    x.leave(a)
                                }, b)
                            })
                        },
                        move: function (a, b, c, d) {
                            U(a);
                            this.enabled(!1, a);
                            x.move(a, b, c);
                            I.$$postDigest(function () {
                                a = B(a);
                                s("move", "ng-move", a, b, c, r, d)
                            })
                        },
                        addClass: function (a,
                            b, c) {
                            a = B(a);
                            s("addClass", b, a, null, null, function () {
                                x.addClass(a, b)
                            }, c)
                        },
                        removeClass: function (a, b, c) {
                            a = B(a);
                            s("removeClass", b, a, null, null, function () {
                                x.removeClass(a, b)
                            }, c)
                        },
                        setClass: function (a, b, c, d) {
                            a = B(a);
                            s("setClass", [b, c], a, null, null, function () {
                                x.setClass(a, b, c)
                            }, d)
                        },
                        enabled: function (a, b) {
                            switch (arguments.length) {
                            case 2:
                                if (a) E(b);
                                else {
                                    var c = b.data(h) || {};
                                    c.disabled = !0;
                                    b.data(h, c)
                                }
                                break;
                            case 1:
                                q.disabled = !a;
                                break;
                            default:
                                a = !q.disabled
                            }
                            return !!a
                        }
                    }
                }
            ]);
            H.register("", ["$window", "$sniffer", "$timeout",
                "$$animateReflow",
                function (h, q, B, L) {
                    function F(a, k) {
                        S && S();
                        X.push(k);
                        S = L(function () {
                            m(X, function (a) {
                                a()
                            });
                            X = [];
                            S = null;
                            N = {}
                        })
                    }

                    function I(a, k) {
                        var b = e(a);
                        a = g.element(b);
                        Z.push(a);
                        b = Date.now() + 1E3 * k;
                        b <= fa || (B.cancel(ea), fa = b, ea = B(function () {
                            K(Z);
                            Z = []
                        }, k, !1))
                    }

                    function K(a) {
                        m(a, function (a) {
                            (a = a.data(l)) && (a.closeAnimationFn || r)()
                        })
                    }

                    function R(a, k) {
                        var b = k ? N[k] : null;
                        if (!b) {
                            var c = 0,
                                d = 0,
                                e = 0,
                                f = 0,
                                l, $, t, g;
                            m(a, function (a) {
                                if (a.nodeType == ba) {
                                    a = h.getComputedStyle(a) || {};
                                    t = a[J + y];
                                    c = Math.max(M(t), c);
                                    g = a[J + v];
                                    l = a[J +
                                        z];
                                    d = Math.max(M(l), d);
                                    $ = a[n + z];
                                    f = Math.max(M($), f);
                                    var k = M(a[n + y]);
                                    0 < k && (k *= parseInt(a[n + p], 10) || 1);
                                    e = Math.max(k, e)
                                }
                            });
                            b = {
                                total: 0,
                                transitionPropertyStyle: g,
                                transitionDurationStyle: t,
                                transitionDelayStyle: l,
                                transitionDelay: d,
                                transitionDuration: c,
                                animationDelayStyle: $,
                                animationDelay: f,
                                animationDuration: e
                            };
                            k && (N[k] = b)
                        }
                        return b
                    }

                    function M(a) {
                        var k = 0;
                        a = g.isString(a) ? a.split(/\s*,\s*/) : [];
                        m(a, function (a) {
                            k = Math.max(parseFloat(a) || 0, k)
                        });
                        return k
                    }

                    function s(a) {
                        var k = a.parent(),
                            b = k.data(w);
                        b || (k.data(w, ++da),
                            b = da);
                        return b + "-" + e(a).className
                    }

                    function U(a, k, b, c) {
                        var d = s(k),
                            f = d + " " + b,
                            m = N[f] ? ++N[f].total : 0,
                            g = {};
                        if (0 < m) {
                            var h = b + "-stagger",
                                g = d + " " + h;
                            (d = !N[g]) && k.addClass(h);
                            g = R(k, g);
                            d && k.removeClass(h)
                        }
                        c = c || function (a) {
                            return a()
                        };
                        k.addClass(b);
                        var h = k.data(l) || {}, t = c(function () {
                                return R(k, f)
                            });
                        c = t.transitionDuration;
                        d = t.animationDuration;
                        if (0 === c && 0 === d) return k.removeClass(b), !1;
                        k.data(l, {
                            running: h.running || 0,
                            itemIndex: m,
                            stagger: g,
                            timings: t,
                            closeAnimationFn: r
                        });
                        a = 0 < h.running || "setClass" == a;
                        0 < c && E(k, b, a);
                        0 < d && (0 < g.animationDelay && 0 === g.animationDuration) && (e(k).style[n] = "none 0s");
                        return !0
                    }

                    function E(a, b, c) {
                        "ng-enter" != b && ("ng-move" != b && "ng-leave" != b) && c ? a.addClass(u) : e(a).style[J + v] = "none"
                    }

                    function O(a, b) {
                        var c = J + v,
                            d = e(a);
                        d.style[c] && 0 < d.style[c].length && (d.style[c] = "");
                        a.removeClass(u)
                    }

                    function P(a) {
                        var b = n;
                        a = e(a);
                        a.style[b] && 0 < a.style[b].length && (a.style[b] = "")
                    }

                    function V(a, b, c, f) {
                        function g(a) {
                            b.off(y, h);
                            b.removeClass(q);
                            d(b, c);
                            a = e(b);
                            for (var Y in u) a.style.removeProperty(u[Y])
                        }

                        function h(a) {
                            a.stopPropagation();
                            var b = a.originalEvent || a;
                            a = b.$manualTimeStamp || b.timeStamp || Date.now();
                            b = parseFloat(b.elapsedTime.toFixed(C));
                            Math.max(a - z, 0) >= x && b >= v && f()
                        }
                        var p = e(b);
                        a = b.data(l);
                        if (-1 != p.className.indexOf(c) && a) {
                            var q = "";
                            m(c.split(" "), function (a, b) {
                                q += (0 < b ? " " : "") + a + "-active"
                            });
                            var n = a.stagger,
                                t = a.timings,
                                r = a.itemIndex,
                                v = Math.max(t.transitionDuration, t.animationDuration),
                                w = Math.max(t.transitionDelay, t.animationDelay),
                                x = w * ca,
                                z = Date.now(),
                                y = A + " " + H,
                                s = "",
                                u = [];
                            if (0 < t.transitionDuration) {
                                var B = t.transitionPropertyStyle; - 1 == B.indexOf("all") && (s += D + "transition-property: " + B + ";", s += D + "transition-duration: " + t.transitionDurationStyle + ";", u.push(D + "transition-property"), u.push(D + "transition-duration"))
                            }
                            0 < r && (0 < n.transitionDelay && 0 === n.transitionDuration && (s += D + "transition-delay: " + T(t.transitionDelayStyle, n.transitionDelay, r) + "; ", u.push(D + "transition-delay")), 0 < n.animationDelay && 0 === n.animationDuration && (s += D + "animation-delay: " + T(t.animationDelayStyle, n.animationDelay, r) + "; ", u.push(D + "animation-delay")));
                            0 < u.length &&
                                (t = p.getAttribute("style") || "", p.setAttribute("style", t + " " + s));
                            b.on(y, h);
                            b.addClass(q);
                            a.closeAnimationFn = function () {
                                g();
                                f()
                            };
                            p = (r * (Math.max(n.animationDelay, n.transitionDelay) || 0) + (w + v) * W) * ca;
                            a.running++;
                            I(b, p);
                            return g
                        }
                        f()
                    }

                    function T(a, b, c) {
                        var d = "";
                        m(a.split(","), function (a, Y) {
                            d += (0 < Y ? "," : "") + (c * b + parseInt(a, 10)) + "s"
                        });
                        return d
                    }

                    function a(a, b, c, e) {
                        if (U(a, b, c, e)) return function (a) {
                            a && d(b, c)
                        }
                    }

                    function b(a, b, c, e) {
                        if (b.data(l)) return V(a, b, c, e);
                        d(b, c);
                        e()
                    }

                    function c(c, d, e, f) {
                        var g = a(c, d, e);
                        if (g) {
                            var h =
                                g;
                            F(d, function () {
                                O(d, e);
                                P(d);
                                h = b(c, d, e, f)
                            });
                            return function (a) {
                                (h || r)(a)
                            }
                        }
                        f()
                    }

                    function d(a, b) {
                        a.removeClass(b);
                        var c = a.data(l);
                        c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(l))
                    }

                    function f(a, b) {
                        var c = "";
                        a = g.isArray(a) ? a : a.split(/\s+/);
                        m(a, function (a, d) {
                            a && 0 < a.length && (c += (0 < d ? " " : "") + a + b)
                        });
                        return c
                    }
                    var D = "",
                        J, H, n, A;
                    G.ontransitionend === Q && G.onwebkittransitionend !== Q ? (D = "-webkit-", J = "WebkitTransition", H = "webkitTransitionEnd transitionend") : (J = "transition", H = "transitionend");
                    G.onanimationend ===
                        Q && G.onwebkitanimationend !== Q ? (D = "-webkit-", n = "WebkitAnimation", A = "webkitAnimationEnd animationend") : (n = "animation", A = "animationend");
                    var y = "Duration",
                        v = "Property",
                        z = "Delay",
                        p = "IterationCount",
                        w = "$$ngAnimateKey",
                        l = "$$ngAnimateCSS3Data",
                        u = "ng-animate-block-transitions",
                        C = 3,
                        W = 1.5,
                        ca = 1E3,
                        N = {}, da = 0,
                        X = [],
                        S, ea = null,
                        fa = 0,
                        Z = [];
                    return {
                        enter: function (a, b) {
                            return c("enter", a, "ng-enter", b)
                        },
                        leave: function (a, b) {
                            return c("leave", a, "ng-leave", b)
                        },
                        move: function (a, b) {
                            return c("move", a, "ng-move", b)
                        },
                        beforeSetClass: function (b,
                            c, d, e) {
                            var g = f(d, "-remove") + " " + f(c, "-add"),
                                h = a("setClass", b, g, function (a) {
                                    var e = b.attr("class");
                                    b.removeClass(d);
                                    b.addClass(c);
                                    a = a();
                                    b.attr("class", e);
                                    return a
                                });
                            if (h) return F(b, function () {
                                O(b, g);
                                P(b);
                                e()
                            }), h;
                            e()
                        },
                        beforeAddClass: function (b, c, d) {
                            var e = a("addClass", b, f(c, "-add"), function (a) {
                                b.addClass(c);
                                a = a();
                                b.removeClass(c);
                                return a
                            });
                            if (e) return F(b, function () {
                                O(b, c);
                                P(b);
                                d()
                            }), e;
                            d()
                        },
                        setClass: function (a, c, d, e) {
                            d = f(d, "-remove");
                            c = f(c, "-add");
                            return b("setClass", a, d + " " + c, e)
                        },
                        addClass: function (a,
                            c, d) {
                            return b("addClass", a, f(c, "-add"), d)
                        },
                        beforeRemoveClass: function (b, c, d) {
                            var e = a("removeClass", b, f(c, "-remove"), function (a) {
                                var d = b.attr("class");
                                b.removeClass(c);
                                a = a();
                                b.attr("class", d);
                                return a
                            });
                            if (e) return F(b, function () {
                                O(b, c);
                                P(b);
                                d()
                            }), e;
                            d()
                        },
                        removeClass: function (a, c, d) {
                            return b("removeClass", a, f(c, "-remove"), d)
                        }
                    }
                }
            ])
        }
    ])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

;
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () {
    var n = this,
        t = n._,
        r = {}, e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        g = e.filter,
        d = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        w = Object.keys,
        _ = i.bind,
        j = function (n) {
            return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.2";
    var A = j.each = j.forEach = function (n, t, e) {
        if (null != n)
            if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
                if (t.call(e, n[u], u, n) === r) return
        } else
            for (var a = j.keys(n), u = 0, i = a.length; i > u; u++)
                if (t.call(e, n[a[u]], a[u], n) === r) return
    };
    j.map = j.collect = function (n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function (n, u, i) {
            e.push(t.call(r, n, u, i))
        }), e)
    };
    var E = "Reduce of empty array with no initial value";
    j.reduce = j.foldl = j.inject = function (n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function (n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(E);
        return r
    }, j.reduceRight = j.foldr = function (n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = j.keys(n);
            i = a.length
        }
        if (A(n, function (o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(E);
        return r
    }, j.find = j.detect = function (n, t, r) {
        var e;
        return O(n, function (n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, j.filter = j.select = function (n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function (n, u, i) {
            t.call(r, n, u, i) && e.push(n)
        }), e)
    }, j.reject = function (n, t, r) {
        return j.filter(n, function (n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, j.every = j.all = function (n, t, e) {
        t || (t = j.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function (n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !! u)
    };
    var O = j.some = j.any = function (n, t, e) {
        t || (t = j.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function (n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !! u)
    };
    j.contains = j.include = function (n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function (n) {
            return n === t
        })
    }, j.invoke = function (n, t) {
        var r = o.call(arguments, 2),
            e = j.isFunction(t);
        return j.map(n, function (n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, j.pluck = function (n, t) {
        return j.map(n, function (n) {
            return n[t]
        })
    }, j.where = function (n, t, r) {
        return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function (n) {
            for (var r in t)
                if (t[r] !== n[r]) return !1;
            return !0
        })
    }, j.findWhere = function (n, t) {
        return j.where(n, t, !0)
    }, j.max = function (n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
        if (!t && j.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function (n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a > e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.min = function (n, t, r) {
        if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
        if (!t && j.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function (n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a < e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, j.shuffle = function (n) {
        var t, r = 0,
            e = [];
        return A(n, function (n) {
            t = j.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    }, j.sample = function (n, t, r) {
        return arguments.length < 2 || r ? n[j.random(n.length - 1)] : j.shuffle(n).slice(0, Math.max(0, t))
    };
    var k = function (n) {
        return j.isFunction(n) ? n : function (t) {
            return t[n]
        }
    };
    j.sortBy = function (n, t, r) {
        var e = k(t);
        return j.pluck(j.map(n, function (n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function (n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function (n) {
        return function (t, r, e) {
            var u = {}, i = null == r ? j.identity : k(r);
            return A(t, function (r, a) {
                var o = i.call(e, r, a, t);
                n(u, o, r)
            }), u
        }
    };
    j.groupBy = F(function (n, t, r) {
        (j.has(n, t) ? n[t] : n[t] = []).push(r)
    }), j.indexBy = F(function (n, t, r) {
        n[t] = r
    }), j.countBy = F(function (n, t) {
        j.has(n, t) ? n[t]++ : n[t] = 1
    }), j.sortedIndex = function (n, t, r, e) {
        r = null == r ? j.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r.call(e, n[o]) < u ? i = o + 1 : a = o
        }
        return i
    }, j.toArray = function (n) {
        return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : []
    }, j.size = function (n) {
        return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length
    }, j.first = j.head = j.take = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, j.initial = function (n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, j.last = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, j.rest = j.tail = j.drop = function (n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, j.compact = function (n) {
        return j.filter(n, j.identity)
    };
    var M = function (n, t, r) {
        return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function (n) {
            j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n)
        }), r)
    };
    j.flatten = function (n, t) {
        return M(n, t, [])
    }, j.without = function (n) {
        return j.difference(n, o.call(arguments, 1))
    }, j.uniq = j.unique = function (n, t, r, e) {
        j.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? j.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function (r, e) {
            (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, j.union = function () {
        return j.uniq(j.flatten(arguments, !0))
    }, j.intersection = function (n) {
        var t = o.call(arguments, 1);
        return j.filter(j.uniq(n), function (n) {
            return j.every(t, function (t) {
                return j.indexOf(t, n) >= 0
            })
        })
    }, j.difference = function (n) {
        var t = c.apply(e, o.call(arguments, 1));
        return j.filter(n, function (n) {
            return !j.contains(t, n)
        })
    }, j.zip = function () {
        for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r);
        return t
    }, j.object = function (n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, j.indexOf = function (n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1
    }, j.lastIndexOf = function (n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t) return u;
        return -1
    }, j.range = function (n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
        return i
    };
    var R = function () {};
    j.bind = function (n, t) {
        var r, e;
        if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1));
        if (!j.isFunction(n)) throw new TypeError;
        return r = o.call(arguments, 2), e = function () {
            if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments)));
            R.prototype = n.prototype;
            var u = new R;
            R.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, j.partial = function (n) {
        var t = o.call(arguments, 1);
        return function () {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, j.bindAll = function (n) {
        var t = o.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return A(t, function (t) {
            n[t] = j.bind(n[t], n)
        }), n
    }, j.memoize = function (n, t) {
        var r = {};
        return t || (t = j.identity),
        function () {
            var e = t.apply(this, arguments);
            return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, j.delay = function (n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, r)
        }, t)
    }, j.defer = function (n) {
        return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1)))
    }, j.throttle = function (n, t, r) {
        var e, u, i, a = null,
            o = 0;
        r || (r = {});
        var c = function () {
            o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u)
        };
        return function () {
            var l = new Date;
            o || r.leading !== !1 || (o = l);
            var f = t - (l - o);
            return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i
        }
    }, j.debounce = function (n, t, r) {
        var e, u, i, a, o;
        return function () {
            i = this, u = arguments, a = new Date;
            var c = function () {
                var l = new Date - a;
                t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u)))
            }, l = r && !e;
            return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o
        }
    }, j.once = function (n) {
        var t, r = !1;
        return function () {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, j.wrap = function (n, t) {
        return function () {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, j.compose = function () {
        var n = arguments;
        return function () {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, j.after = function (n, t) {
        return function () {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, j.keys = w || function (n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) j.has(n, r) && t.push(r);
        return t
    }, j.values = function (n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e
    }, j.pairs = function (n) {
        for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
        return e
    }, j.invert = function (n) {
        for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t
    }, j.functions = j.methods = function (n) {
        var t = [];
        for (var r in n) j.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, j.extend = function (n) {
        return A(o.call(arguments, 1), function (t) {
            if (t)
                for (var r in t) n[r] = t[r]
        }), n
    }, j.pick = function (n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function (r) {
            r in n && (t[r] = n[r])
        }), t
    }, j.omit = function (n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n) j.contains(r, u) || (t[u] = n[u]);
        return t
    }, j.defaults = function (n) {
        return A(o.call(arguments, 1), function (t) {
            if (t)
                for (var r in t) n[r] === void 0 && (n[r] = t[r])
        }), n
    }, j.clone = function (n) {
        return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n
    }, j.tap = function (n, t) {
        return t(n), n
    };
    var S = function (n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
        case "[object String]":
            return n == String(t);
        case "[object Number]":
            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +n == +t;
        case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--;)
            if (r[i] == n) return e[i] == t;
        var a = n.constructor,
            o = t.constructor;
        if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o)) return !1;
        r.push(n), e.push(t);
        var c = 0,
            f = !0;
        if ("[object Array]" == u) {
            if (c = n.length, f = c == t.length)
                for (; c-- && (f = S(n[c], t[c], r, e)););
        } else {
            for (var s in n)
                if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break;
            if (f) {
                for (s in t)
                    if (j.has(t, s) && !c--) break;
                f = !c
            }
        }
        return r.pop(), e.pop(), f
    };
    j.isEqual = function (n, t) {
        return S(n, t, [], [])
    }, j.isEmpty = function (n) {
        if (null == n) return !0;
        if (j.isArray(n) || j.isString(n)) return 0 === n.length;
        for (var t in n)
            if (j.has(n, t)) return !1;
        return !0
    }, j.isElement = function (n) {
        return !(!n || 1 !== n.nodeType)
    }, j.isArray = x || function (n) {
        return "[object Array]" == l.call(n)
    }, j.isObject = function (n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (n) {
        j["is" + n] = function (t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), j.isArguments(arguments) || (j.isArguments = function (n) {
        return !(!n || !j.has(n, "callee"))
    }), "function" != typeof / . / && (j.isFunction = function (n) {
        return "function" == typeof n
    }), j.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, j.isNaN = function (n) {
        return j.isNumber(n) && n != +n
    }, j.isBoolean = function (n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, j.isNull = function (n) {
        return null === n
    }, j.isUndefined = function (n) {
        return n === void 0
    }, j.has = function (n, t) {
        return f.call(n, t)
    }, j.noConflict = function () {
        return n._ = t, this
    }, j.identity = function (n) {
        return n
    }, j.times = function (n, t, r) {
        for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, j.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    I.unescape = j.invert(I.escape);
    var T = {
        escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g")
    };
    j.each(["escape", "unescape"], function (n) {
        j[n] = function (t) {
            return null == t ? "" : ("" + t).replace(T[n], function (t) {
                return I[n][t]
            })
        }
    }), j.result = function (n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return j.isFunction(r) ? r.call(n) : r
    }, j.mixin = function (n) {
        A(j.functions(n), function (t) {
            var r = j[t] = n[t];
            j.prototype[t] = function () {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(j, n))
            }
        })
    };
    var N = 0;
    j.uniqueId = function (n) {
        var t = ++N + "";
        return n ? n + t : t
    }, j.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            " ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    j.template = function (n, t, r) {
        var e;
        r = j.defaults({}, r, j.templateSettings);
        var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function (t, r, e, u, o) {
            return a += n.slice(i, o).replace(D, function (n) {
                return "\\" + B[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = new Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, j);
        var c = function (n) {
            return e.call(this, n, j)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, j.chain = function (n) {
        return j(n).chain()
    };
    var z = function (n) {
        return this._chain ? j(n).chain() : n
    };
    j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
        var t = e[n];
        j.prototype[n] = function () {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function (n) {
        var t = e[n];
        j.prototype[n] = function () {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), j.extend(j.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}).call(this);
//# sourceMappingURL=underscore-min.map
