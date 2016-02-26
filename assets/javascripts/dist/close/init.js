/*! weimob_vshop_admin
*author:<a.b.c@hd3p.com> */
define("dist/close/init",["$"],function(a){"use strict";var b=a("$");b(document).on("click",".js_other",function(){var a=b(this).prop("checked"),c=b(this).closest(".modal-body").find("textarea");console.log(a),console.log(c),a?c.removeAttr("disabled"):c.attr("disabled","disabled")})});