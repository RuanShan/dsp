/*! weimob_vshop_admin
*author:<a.b.c@hd3p.com> */
define("dist/aptitude/init",["$","dist/application/app"],function(a){"use strict";{var b=a("$"),c=a("dist/application/app");c.config,c.method}b(document).on("click",".js_add_aptitude",function(){var a=b(this),c=a.closest(".form-group"),d=b(".js_aptitude_list").length||0;b(template("js_js_aptitude_temp",{number:d+1})).insertBefore(c)}),b(document).on("click",".js_aptitude_del",function(){var a=b(this),c=a.closest(".js_aptitude_list");c.remove(),b(".js_number").each(function(a){b(this).html(a+1)})})});