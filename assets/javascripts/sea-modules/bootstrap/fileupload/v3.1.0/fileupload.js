﻿define(function (require, exports, module) {
    var jQuery = require("jquery");
    + function (a) {
        "use strict";
        var b = window.navigator.appName == "Microsoft Internet Explorer",
            c = function (b, c) {
                this.$element = a(b), this.$input = this.$element.find(":file");
                if (this.$input.length === 0) return;
                this.name = this.$input.attr("name") || c.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), this.$hidden.length === 0 && (this.$hidden = a('<input type="hidden" />'), this.$element.prepend(this.$hidden)), this.$preview = this.$element.find(".fileinput-preview");
                var d = this.$preview.css("height");
                this.$preview.css("display") != "inline" && d != "0px" && d != "none" && this.$preview.css("line-height", d), this.original = {
                    exists: this.$element.hasClass("fileinput-exists"),
                    preview: this.$preview.html(),
                    hiddenVal: this.$hidden.val()
                }, this.listen()
            };
        c.prototype.listen = function () {
            this.$input.on("change.bs.fileinput", a.proxy(this.change, this)), a(this.$input[0].form).on("reset.bs.fileinput", a.proxy(this.reset, this)), this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput", a.proxy(this.trigger, this)), this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput", a.proxy(this.clear, this))
        }, c.prototype.change = function (b) {
            b.target.files === undefined && (b.target.files = b.target && b.target.value ? [{
                name: b.target.value.replace(/^.+\\/, "")
            }] : []);
            if (b.target.files.length === 0) return;
            this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
            var c = b.target.files[0];
            if (this.$preview.length > 0 && (typeof c.type != "undefined" ? c.type.match("image.*") : c.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader != "undefined") {
                var d = new FileReader,
                    e = this.$preview,
                    f = this.$element;
                d.onload = function (d) {
                    var g = a("<img>");
                    g[0].src = d.target.result, b.target.files[0].result = d.target.result, f.find(".fileinput-filename").text(c.name), e.css("max-height") != "none" && g.css("max-height", parseInt(e.css("max-height"), 10) - parseInt(e.css("padding-top"), 10) - parseInt(e.css("padding-bottom"), 10) - parseInt(e.css("border-top"), 10) - parseInt(e.css("border-bottom"), 10)), e.html(g), f.addClass("fileinput-exists").removeClass("fileinput-new"), f.trigger("change.bs.fileinput", b.target.files)
                }, d.readAsDataURL(c)
            } else this.$element.find(".fileinput-filename").text(c.name), this.$preview.text(c.name), this.$element.addClass("fileinput-exists").removeClass("fileinput-new"), this.$element.trigger("change.bs.fileinput")
        }, c.prototype.clear = function (a) {
            a && a.preventDefault(), this.$hidden.val(""), this.$hidden.attr("name", this.name), this.$input.attr("name", "");
            if (b) {
                var c = this.$input.clone(!0);
                this.$input.after(c), this.$input.remove(), this.$input = c
            } else this.$input.val("");
            this.$preview.html(""), this.$element.find(".fileinput-filename").text(""), this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), a !== !1 && (this.$input.trigger("change"), this.$element.trigger("clear.bs.fileinput"))
        }, c.prototype.reset = function () {
            this.clear(!1), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.$element.find(".fileinput-filename").text(""), this.original.exists ? this.$element.addClass("fileinput-exists").removeClass("fileinput-new") : this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), this.$element.trigger("reset.bs.fileinput")
        }, c.prototype.trigger = function (a) {
            this.$input.trigger("click"), a.preventDefault()
        };
        var d = a.fn.fileinput;
        a.fn.fileinput = function (b) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("fileinput");
                e || d.data("fileinput", e = new c(this, b)), typeof b == "string" && e[b]()
            })
        }, a.fn.fileinput.Constructor = c, a.fn.fileinput.noConflict = function () {
            return a.fn.fileinput = d, this
        }, a(document).on("click.fileinput.data-api", '[data-provides="fileinput"]', function (b) {
            var c = a(this);
            if (c.data("fileinput")) return;
            c.fileinput(c.data());
            var d = a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
            d.length > 0 && (b.preventDefault(), d.trigger("click.bs.fileinput"))
        })
    }(window.jQuery)


})
