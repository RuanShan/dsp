! function(a) {
    function b(a) {
        return String(null === a || void 0 === a ? "" : a)
    }

    function c(a) {
        return b(a).replace(i, function(a) {
            return h[a]
        })
    }
    var d = {
            method: "GET",
            queryParam: "q",
            searchDelay: 300,
            minChars: 1,
            propertyToSearch: "name",
            propertyToDisplay: "name",
            jsonContainer: null,
            contentType: "json",
            excludeCurrent: !1,
            excludeCurrentParameter: "x",
            prePopulate: null,
            processPrePopulate: !1,
            hintText: "Type in a search term",
            noResultsText: "无搜索结果",
            searchingText: "Searching...",
            deleteText: "&#215;",
            animateDropdown: !0,
            placeholder: null,
            theme: null,
            zindex: 9999,
            resultsLimit: null,
            enableHTML: !1,
            resultsFormatter: function(a) {
                var b = a[this.propertyToDisplay];
                return "<li>" + (this.enableHTML ? b : c(b)) + "</li>"
            },
            tokenFormatter: function(a) {
                var b = a[this.propertyToDisplay];
                return "<li><p class='group_item_name'>" + (this.enableHTML ? b : c(b)) + "</p></li>"
            },
            tokenLimit: null,
            tokenDelimiter: ",",
            preventDuplicates: !1,
            tokenValue: "id",
            allowFreeTagging: !1,
            allowTabOut: !1,
            autoSelectFirstResult: !1,
            onResult: null,
            onCachedResult: null,
            onAdd: null,
            onFreeTaggingAdd: null,
            onDelete: null,
            onReady: null,
            idPrefix: "token-input-",
            disabled: !1
        },
        e = {
            tokenList: "token-input-list input_text",
            token: "token-input-token group_item",
            tokenReadOnly: "token-input-token-readonly",
            tokenDelete: "token-input-delete-token  group_item_close",
            selectedToken: "token-input-selected-token",
            highlightedToken: "token-input-highlighted-token",
            dropdown: "token-input-dropdown",
            dropdownItem: "token-input-dropdown-item",
            dropdownItem2: "token-input-dropdown-item2",
            selectedDropdownItem: "token-input-selected-dropdown-item",
            inputToken: "token-input-input-token",
            focused: "token-input-focused",
            disabled: "token-input-disabled"
        },
        f = {
            BEFORE: 0,
            AFTER: 1,
            END: 2
        },
        g = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            NUMPAD_ENTER: 108,
            COMMA: 188
        },
        h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        },
        i = /[&<>"'\/]/g,
        j = {
            init: function(b, c) {
                var e = a.extend({}, d, c || {});
                return this.each(function() {
                    a(this).data("settings", e), a(this).data("tokenInputObject", new a.TokenList(this, b, e))
                })
            },
            clear: function() {
                return this.data("tokenInputObject").clear(), this
            },
            add: function(a) {
                return this.data("tokenInputObject").add(a), this
            },
            remove: function(a) {
                return this.data("tokenInputObject").remove(a), this
            },
            get: function() {
                return this.data("tokenInputObject").getTokens()
            },
            toggleDisabled: function(a) {
                return this.data("tokenInputObject").toggleDisabled(a), this
            },
            setOptions: function(b) {
                return a(this).data("settings", a.extend({}, a(this).data("settings"), b || {})), this
            },
            destroy: function() {
                if (this.data("tokenInputObject")) {
                    this.data("tokenInputObject").destroy();
                    var a = this,
                        b = this.parent();
                    return b.empty(), a.show(), b.append(a), a
                }
            }
        };
    a.fn.tokenInput = function(a) {
        return j[a] ? j[a].apply(this, Array.prototype.slice.call(arguments, 1)) : j.init.apply(this, arguments)
    }, a.TokenList = function(b, d, h) {
        function i(d) {
            return a(b).data("settings").enableHTML ? d : c(d)
        }

        function j(c) {
            a(b).data("settings").disabled = "boolean" == typeof c ? c : !a(b).data("settings").disabled, R.attr("disabled", a(b).data("settings").disabled), W.toggleClass(a(b).data("settings").classes.disabled, a(b).data("settings").disabled), T && q(a(T), f.END), S.attr("disabled", a(b).data("settings").disabled)
        }

        function k() {
            return null !== a(b).data("settings").tokenLimit && P >= a(b).data("settings").tokenLimit ? (R.hide(), void u()) : void 0
        }

        function l() {
            if (N !== (N = R.val())) {
                var a = W.width() - R.offset().left - W.offset().left;
                bb.html(c(N) || c(h.placeholder)), R.width(Math.min(W.width(), Math.max(a, bb.width() + 30)))
            }
        }

        function m() {
            var c = a.trim(R.val()),
                d = c.split(a(b).data("settings").tokenDelimiter);
            a.each(d, function(c, d) {
                if (d) {
                    a.isFunction(a(b).data("settings").onFreeTaggingAdd) && (d = a(b).data("settings").onFreeTaggingAdd.call(S, d));
                    var e = {};
                    e[a(b).data("settings").tokenValue] = e[a(b).data("settings").propertyToDisplay] = d, o(e)
                }
            })
        }

        function n(c) {
            var d = a(a(b).data("settings").tokenFormatter(c)),
                e = c.readonly === !0 ? !0 : !1;
            e && d.addClass(a(b).data("settings").classes.tokenReadOnly), d.addClass(a(b).data("settings").classes.token).insertBefore(X), e || a("<span>").addClass(a(b).data("settings").classes.tokenDelete+" js_close").appendTo(d).click(function() {
                if (!a(b).data("settings").disabled) {
                    s(a(this).parent());
                    S.change();
                    if(S.data("submit")){
                        S.closest('form').submit();
                    }
                    return false;
                }
            });
            var f = c;
            return a.data(d.get(0), "tokeninput", c), O = O.slice(0, U).concat([f]).concat(O.slice(U)), U++, t(O, S), P += 1, null !== a(b).data("settings").tokenLimit && P >= a(b).data("settings").tokenLimit && (R.hide(), u()), d
        }

        function o(c) {
            var d = a(b).data("settings").onAdd;
            if (P > 0 && a(b).data("settings").preventDuplicates) {
                var e = null;
                if (W.children().each(function() {
                    var b = a(this),
                        d = a.data(b.get(0), "tokeninput");
                    return d && d[h.tokenValue] === c[h.tokenValue] ? (e = b, !1) : void 0
                }), e) return
            }
            R.width(1), (null == a(b).data("settings").tokenLimit || P < a(b).data("settings").tokenLimit) && (n(c), R.attr("placeholder", null), k()), R.val(""), u(), a.isFunction(d) && d.call(S, c)
        }

        function p(c) {
            a(b).data("settings").disabled || (c.addClass(a(b).data("settings").classes.selectedToken), T = c.get(0), R.val(""), u())
        }

        function q(c, d) {
            c.removeClass(a(b).data("settings").classes.selectedToken), T = null, d === f.BEFORE ? (X.insertBefore(c), U--) : d === f.AFTER ? (X.insertAfter(c), U++) : (X.appendTo(W), U = P), K(R)
        }

        function r(b) {
            var c = T;
            T && q(a(T), f.END), c === b.get(0) ? q(b, f.END) : p(b)
        }

        function s(c) {
            var d = a.data(c.get(0), "tokeninput"),
                e = a(b).data("settings").onDelete,
                f = c.prevAll().length;
            f > U && f--, c.remove(), T = null, K(R), O = O.slice(0, f).concat(O.slice(f + 1)), 0 == O.length && (R.attr("placeholder", h.placeholder), R.css("width", "auto")), U > f && U--, t(O, S), P -= 1, null !== a(b).data("settings").tokenLimit && (R.show().val(""), K(R)), a.isFunction(e) && e.call(S, d)
        
        }

        function t(c, d) {
            var e = a.map(c, function(c) {
                return "function" == typeof a(b).data("settings").tokenValue ? a(b).data("settings").tokenValue.call(this, c) : c[a(b).data("settings").tokenValue]
            });
            d.val(e.join(a(b).data("settings").tokenDelimiter))
        }

        function u() {
            Z.hide(), V = null
        }

        function v() {
            Z.css({
                position: "absolute",
                top: W.offset().top + W.outerHeight(!0) - 1,
                left: W.offset().left,
                width: W.innerWidth(),
                "z-index": a(b).data("settings").zindex
            }).show()
        }

        function w(b) {
            Z.children("div").each(function(c, d) {
                b.get(0) == d && a(this).show() || a(this).hide()
            })
        }

        function x() { 
            a(b).data("settings").hintText && ("string" === a.type(a(b).data("settings").hintText) ? $.html("<p>" + i(a(b).data("settings").hintText) + "</p>") : "function" === a.type(a(b).data("settings").hintText) && a(b).data("settings").hintText($), w($), v())
        }

        function y() {
            a(b).data("settings").searchingText && (_.html("<p>" + i(a(b).data("settings").searchingText) + "</p>"), w(_))
        }

        function z() {
            w(ab)
        }

        function A(a) {
            return a.replace(db, "\\$&")
        }

        function B(a, b) {
            return a.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + A(b) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), function(a, b) {
                return "<b>" + i(b) + "</b>"
            })
        }

        function C(a, b, c) {
            return a.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + A(b) + ")(?![^<>]*>)(?![^&;]+;)", "g"), B(b, c))
        }

        function D(c) {
            if (a(b).data("settings").excludeCurrent) {
                var d = a(b).data("tokenInputObject").getTokens(),
                    e = [];
                d.length && (a.each(c, function(c, f) {
                    var g = !0;
                    a.each(d, function(c, d) {
                        return f[a(b).data("settings").propertyToDisplay] == d[a(b).data("settings").propertyToDisplay] ? (g = !1, !1) : void 0
                    }), g && e.push(f)
                }), c = e)
            }
            return c
        }

        function E(c, d) {
            if (d = D(d), d && d.length) {
                ab.empty();
                var e = a("<ul/>").appendTo(ab).mouseover(function(b) {
                    F(a(b.target).closest("li"))
                }).mousedown(function(b) {
                    o(a(b.target).closest("li").data("tokeninput"));
                    S.change();
                    if(S.data("submit")){
                        S.closest('form').submit();
                    }
                    return false;
                }).hide();
                a(b).data("settings").resultsLimit && d.length > a(b).data("settings").resultsLimit && (d = d.slice(0, a(b).data("settings").resultsLimit)), a.each(d, function(d, f) {
                    var g = a(b).data("settings").resultsFormatter(f);
                    g = C(g, f[a(b).data("settings").propertyToDisplay], c), g = a(g).appendTo(e), g.addClass(d % 2 ? a(b).data("settings").classes.dropdownItem : a(b).data("settings").classes.dropdownItem2), 0 === d && a(b).data("settings").autoSelectFirstResult && F(g), a.data(g.get(0), "tokeninput", f)
                }), z(), a(b).data("settings").animateDropdown ? e.slideDown("fast") : e.show()
            } else a(b).data("settings").noResultsText && (ab.html("<p>" + i(a(b).data("settings").noResultsText) + "</p>"), z())
        }

        function F(c) {
            c && (V && G(a(V)), c.addClass(a(b).data("settings").classes.selectedDropdownItem), V = c.get(0))
        }

        function G(c) {
            c.removeClass(a(b).data("settings").classes.selectedDropdownItem), V = null
        }

        function H() {
            var c = R.val();
            c && c.length && (T && q(a(T), f.AFTER), c.length >= a(b).data("settings").minChars ? (y(), clearTimeout(M), M = setTimeout(function() {
                I(c)
            }, a(b).data("settings").searchDelay)) : u())
        }

        function I(c) {
            var d = c + J(),
                e = Q.get(d);
            if (e) a.isFunction(a(b).data("settings").onCachedResult) && (e = a(b).data("settings").onCachedResult.call(S, e)), E(c, e);
            else if (a(b).data("settings").url) {
                var f = J(),
                    g = {};
                if (g.data = {}, f.indexOf("?") > -1) {
                    var i = f.split("?");
                    g.url = i[0];
                    var j = i[1].split("&");
                    a.each(j, function(a, b) {
                        var c = b.split("=");
                        g.data[c[0]] = c[1]
                    })
                } else g.url = f; if (g.data[a(b).data("settings").queryParam] = c, g.type = a(b).data("settings").method, g.dataType = a(b).data("settings").contentType, a(b).data("settings").crossDomain && (g.dataType = "jsonp"), a(b).data("settings").excludeCurrent) {
                    var k = a(b).data("tokenInputObject").getTokens(),
                        l = a.map(k, function(c) {
                            return "function" == typeof a(b).data("settings").tokenValue ? a(b).data("settings").tokenValue.call(this, c) : c[a(b).data("settings").tokenValue]
                        });
                    g.data[a(b).data("settings").excludeCurrentParameter] = l.join(a(b).data("settings").tokenDelimiter)
                }
                g.success = function(e) {
                    Q.add(d, a(b).data("settings").jsonContainer ? e[a(b).data("settings").jsonContainer] : e), a.isFunction(a(b).data("settings").onResult) && (e = a(b).data("settings").onResult.call(S, e)), R.val() === c && E(c, a(b).data("settings").jsonContainer ? e[a(b).data("settings").jsonContainer] : e)
                }, h.onSend && h.onSend(g), a.ajax(g)
            } else if (a(b).data("settings").local_data) {
                var m = a.grep(a(b).data("settings").local_data, function(d) {
                    var e = d[a(b).data("settings").propertyToSearch];
                    if (a.isArray(e)) {
                        var f = !1;
                        return a.each(e, function(a, b) {
                            return b.toLowerCase().indexOf(c.toLowerCase()) > -1 ? (f = !0, !1) : void 0
                        }), f
                    }
                    return e.toLowerCase().indexOf(c.toLowerCase()) > -1
                });
                Q.add(d, m), a.isFunction(a(b).data("settings").onResult) && (m = a(b).data("settings").onResult.call(S, m)), E(c, m)
            }
        }

        function J() {
            var c = a(b).data("settings").url;
            return "function" == typeof a(b).data("settings").url && (c = a(b).data("settings").url.call(a(b).data("settings"))), c
        }

        function K(a) {
            setTimeout(function() {
                a.focus()
            }, 50)
        }
        if ("string" == typeof d || "function" == typeof d) {
            a(b).data("settings").url = d;
            var L = J();
            void 0 === a(b).data("settings").crossDomain && "string" == typeof L && (a(b).data("settings").crossDomain = -1 === L.indexOf("://") ? !1 : location.href.split(/\/+/g)[1] !== L.split(/\/+/g)[1])
        } else "object" == typeof d && (a(b).data("settings").local_data = d);
        a(b).data("settings").classes ? a(b).data("settings").classes = a.extend({}, e, a(b).data("settings").classes) : a(b).data("settings").theme ? (a(b).data("settings").classes = {}, a.each(e, function(c, d) {
            a(b).data("settings").classes[c] = d + "-" + a(b).data("settings").theme
        })) : a(b).data("settings").classes = e;
        var M, N, O = [],
            P = 0,
            Q = new a.TokenList.Cache,
            R = a('<input type="text" class="input_group_add" autocomplete="off" autocapitalize="off"/>').css({
                outline: "none"
            }).attr("id", a(b).data("settings").idPrefix + b.id).focus(function() {
                return a(b).data("settings").disabled ? !1 : ((null === a(b).data("settings").tokenLimit || a(b).data("settings").tokenLimit !== P) && x(), void W.addClass(a(b).data("settings").classes.focused))
            }).blur(function() {
                Y ? K(R) : u(), a(b).data("settings").allowFreeTagging && m(), a(this).val(""), W.removeClass(a(b).data("settings").classes.focused)
            }).bind("keyup keydown blur update", l).keydown(function(c) {
                var d, e;
                switch (c.keyCode) {
                    case g.LEFT:
                    case g.RIGHT:
                    case g.UP:
                    case g.DOWN:
                        if (0 === this.value.length) d = X.prev(), e = X.next(), d.length && d.get(0) === T || e.length && e.get(0) === T ? c.keyCode === g.LEFT || c.keyCode === g.UP ? q(a(T), f.BEFORE) : q(a(T), f.AFTER) : c.keyCode !== g.LEFT && c.keyCode !== g.UP || !d.length ? c.keyCode !== g.RIGHT && c.keyCode !== g.DOWN || !e.length || p(a(e.get(0))) : p(a(d.get(0)));
                        else {
                            var h = null;
                            c.keyCode === g.DOWN || c.keyCode === g.RIGHT ? (h = a(ab).find("li").first(), V && (h = a(V).next())) : (h = a(ab).find("li").last(), V && (h = a(V).prev())), F(h)
                        }
                        break;
                    case g.BACKSPACE:
                        if (d = X.prev(), 0 === this.value.length) return T ? a(T).hasClass(a(b).data("settings").classes.tokenReadOnly) || (s(a(T)), S.change(),(S.data("submit")&&S.closest('form').submit())) : d.length ? p(a(d.get(0))) : (u(), x()),!1;
                        1 === this.value.length ? (u(), x()) : setTimeout(function() {
                            H()
                        }, 5);
                        break;
                    case g.TAB:
                    case g.ENTER:
                    case g.NUMPAD_ENTER:
                    case g.COMMA:
                        if (V) o(a(V).data("tokeninput")), S.change(), x();
                        else {
                            if (a(b).data("settings").allowFreeTagging) {
                                if (a(b).data("settings").allowTabOut && "" === a(this).val()) return !0;
                                m()
                            } else if (a(this).val(""), a(b).data("settings").allowTabOut) return !0;
                            c.stopPropagation(), c.preventDefault()
                        }
                        return !1;
                    case g.ESCAPE:
                        return u(), !0;
                    default:
                        0 === this.value.length && (u(), x()), String.fromCharCode(c.which) && setTimeout(function() {
                            H()
                        }, 5)
                }
            });
        h.placeholder && R.attr("placeholder", h.placeholder);
        var S = a(b).hide().val("").focus(function() {
                K(R)
            }).blur(function() {
                return R.blur(), S
            }),
            T = null,
            U = 0,
            V = null,
            W = a("<ul />").addClass(a(b).data("settings").classes.tokenList).click(function(b) {
                var c = a(b.target).closest("li");
                c && c.get(0) && a.data(c.get(0), "tokeninput") ? r(c) : (T && q(a(T), f.END), K(R))
            }).mouseover(function(c) {
                var d = a(c.target).closest("li");
                d && T !== this && d.addClass(a(b).data("settings").classes.highlightedToken)
            }).mouseout(function(c) {
                var d = a(c.target).closest("li");
                d && T !== this && d.removeClass(a(b).data("settings").classes.highlightedToken)
            }).insertBefore(S),
            X = a("<li />").addClass(a(b).data("settings").classes.inputToken).appendTo(W).append(R),
            Y = !1,
            Z = a("<div/>").addClass(a(b).data("settings").classes.dropdown).appendTo("body").hide().mousemove(function() {
                Y = !0
            }).mouseout(function() {
                Y = !1
            }),
            $ = a("<div id='token-input-dropdown-hint'/>").appendTo(Z).hide(),
            _ = a("<div id='token-input-dropdown-searching'/>").appendTo(Z).hide(),
            ab = a("<div id='token-input-dropdown-result'/>").appendTo(Z).hide(),
            bb = a("<tester/>").insertAfter(R).css({
                position: "absolute",
                top: -9999,
                left: -9999,
                width: "auto",
                fontSize: R.css("fontSize"),
                fontFamily: R.css("fontFamily"),
                fontWeight: R.css("fontWeight"),
                letterSpacing: R.css("letterSpacing"),
                whiteSpace: "nowrap"
            });
        S.val("");
        var cb = a(b).data("settings").prePopulate || S.data("pre");
        a(b).data("settings").processPrePopulate && a.isFunction(a(b).data("settings").onResult) && (cb = a(b).data("settings").onResult.call(S, cb)), cb && cb.length && a.each(cb, function(a, b) {
            n(b), k(), R.attr("placeholder", null)
        }), a(b).data("settings").disabled && j(!0), "function" == typeof a(b).data("settings").onReady && a(b).data("settings").onReady.call(), this.clear = function() {
            W.children("li").each(function() {
                0 === a(this).children("input").length && s(a(this))
            })
        }, this.add = function(a) {
            o(a)
        }, this.remove = function(b) {
            W.children("li").each(function() {
                if (0 === a(this).children("input").length) {
                    var c = a(this).data("tokeninput"),
                        d = !0;
                    for (var e in b)
                        if (b[e] !== c[e]) {
                            d = !1;
                            break
                        }
                    d && s(a(this))
                }
            })
        }, this.getTokens = function() {
            return O
        }, this.toggleDisabled = function(a) {
            j(a)
        }, this.destroy = function() {
            this.clear(), Z.remove()
        }, l();
        var db = new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g")
    }, a.TokenList.Cache = function(b) {
        var c, d, e = {},
            f = 0;
        c = a.extend({
            max_size: 500
        }, b), d = function() {
            e = {}, f = 0
        }, this.add = function(a, b) {
            f > c.max_size && d(), e[a] || (f += 1), e[a] = b
        }, this.get = function(a) {
            return e[a]
        }
    }
}(jQuery)
