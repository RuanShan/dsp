/*! weimob_vshop_admin
*author:<a.b.c@hd3p.com> */
define("dist/activity/init",["$","dist/application/app"],function(a){"use strict";function b(a,b){var c=a,d=c.closest(".modal"),f=c.closest("form"),g=d.data("setData"),h=(e("table"),e("input[type='text']",f)),i=e("select",f),j=(g.ids.split(","),e("div.table-responsive")),k=e('table tbody tr td:first-child [type="checkbox"]:checked',j);f.valid()&&(k.each(function(){var a=e(this).closest("tr");e(b,a).val(h.length?h.val():i.val())}),d.modal("hide"))}function c(a){var b=a.parent().children(".sytishi");0==b.length&&(b=a.parent().parent().children(".sytishi"));var c=a.attr("data-tx"),d=a.val();if(""==d)b.hide();else{var e=parseInt(100*parseInt(d)/parseInt(c));50>e?b.show():b.hide()}}function d(a){var b=a.parent().children(".sytishi");0==b.length&&(b=a.parent().parent().children(".sytishi"));var c=a.attr("data-tx"),d=a.val();""==d?b.hide():b.show();var e=parseInt(c)-parseInt(d);0>e&&(e=0),b.children(".nums").html(e)}var e=a("$"),f=a("dist/application/app"),g=f.config,h=f.method;e(document).on("click","table a",function(){var a=e(this).attr("data-path"),b={sort:e("#sort").val()};a&&h.postd(a,function(a){0==a.status?g.msg.msgbox.alert(a.message):(g.msg.info(a.message),setTimeout(function(){location.reload(!0)},500))},b)}),e(document).on("click",".js_set_info_save",function(){var a=!0,b=e(this),c=b.closest("form"),d=e("table",c),f=b.data("msg");return e('[data-toggle="selectimg"]',d).each(function(){e(this).prevAll("input[type=text]").val()||(g.msg.error(f||"请上传活动图片"),a=!1)}),a}),e(document).on("click",".js_set_goods_save_btn",function(){var a=!0,b=e(this),c=b.closest("form"),d=b.data("msg");return e("#goods_select_input",c).val()||(g.msg.error(d||"请选择商品"),a=!1),a}),e(document).on("click",".js_edit_stores_btn",function(){var a=e(this),b=a.data("set"),c=e(".js_stores_modal");e("input[type='text']",c).val(""),c.data("setData",b),c.modal("show")}),e(document).on("click",".js_edit_prices_btn",function(){var a=e(this),b=a.data("set"),c=e(".js_prices_modal");e("input[type='text']",c).val(""),c.data("setData",b),c.modal("show")}),e(document).on("click",".js_stores_save_btn",function(){b(e(this),".js_stores_input")}),e(document).on("click",".js_prices_save_btn",function(){b(e(this),".js_price_input")}),window.applyComplete=function(a){var b=e(".apply_complete_modal"),c=e(".js_tips_text",b);c.html(a),b.modal("show")},e(document).on("input propertychange",".hdkc",function(){d(e(this))}),e(document).on("input propertychange change",".js_commission_money_select,.js_commission_money_input",function(){c(e(this))}),e(document).on("focus",".js_fill",function(){var a=!0,b=e(this),c=b.parents("tr").siblings("tr").find(".js_fill");c.each(function(){""!=e(this).val()&&(a=!1,b.unbind("keyup"))}),a&&b.keyup(function(){var a=e(this).val();c.val(a),c.blur()})}),e(document).on("focus",".js_fill_money",function(){var a=!0,b=e(this),c=b.parents("tr").siblings("tr").find(".js_fill_money");c.each(function(){""!=e(this).val()&&(a=!1,b.unbind("keyup"))}),a&&b.keyup(function(){var a=e(this).val();c.val(a),c.blur()})}),e(document).on("click",".js_enter",function(a){a.preventDefault();var b=e(this),c=b.data("remote"),d=b.data("id");e.post(c,{id:d}).done(function(a){g.issucceed(a)?(g.msg.suc(a.message),window.location.reload()):g.msg.error(a.message)}).fail(function(){g.msg.info(g.lang.exception)})})});