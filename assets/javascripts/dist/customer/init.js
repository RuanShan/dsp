/*! weimob_vshop_admin
*author:<a.b.c@hd3p.com> */
define("dist/customer/init",["$","dist/application/app","dist/charts/init"],function(a){"use strict";function b(a,b){a&&f.post(a,function(a){var b=[""],c={yAxis:{title:{text:""}},plotOptions:{series:{pointWidth:40}}};g.column("label_charts",b,a,c)},!1,!1,b)}var c=a("$"),d=a("dist/application/app"),e=d.config,f=d.method,g=a("dist/charts/init.js"),h=c("#label_charts");h.length&&function(){var a=h.data("path"),d=c("#date");b(a,{date:d.val()}),c("#date").change(function(){b(a,{date:d.val()})})}(),c(document).on("click",".js_get_code",function(){var a=c(this),b=a.data("path"),d=c(".js_phone_number_val").val(),g=a.data("msg")||"请正确填写手机号码";if(d&&!c(".js_phone_number_val").hasClass("error")){a.attr("disabled","disabled");var h=59e3;a.text("60秒后重新获取");var i=setInterval(function(){a.text("{0}秒后重新获取".format(h/1e3)),h-=1e3,0==h&&(a.text("获取验证码").removeAttr("disabled"),clearInterval(i))},1e3);f.postd(b,function(a){e.issucceed(a)?e.msg.info(a.message||e.lang.sendSuccess):e.msg.error(a.message||e.lang.sendError)},{phone:d})}else e.msg.error(g)}),window.bangdingPhone=function(a){var b=c(".js_phone_show_div").closest(".form-group");c(".js_phone_show_div",b).html(a.phone),c(".js_phone_number",b).val(a.phone),c(".js_phone_bangbtn",b).html("点击换绑"),c(".js_info_show_div").removeClass("hide")},c(".js_radio input").each(function(){var a=c(this);if(a.prop("checked")){var b=a.attr("value");"1"==b?c(".js_phone_number_val,.js_get_code,.js_txtcode").removeAttr("disabled"):c(".js_phone_number_val,.js_get_code,.js_txtcode").attr("disabled","disabled")}}),c(document).on("click",".js_radio input",function(){var a=c(this);"1"==a.attr("value")?c(".js_phone_number_val,.js_get_code,.js_txtcode").removeAttr("disabled"):c(".js_phone_number_val,.js_get_code,.js_txtcode").attr("disabled","disabled")})});