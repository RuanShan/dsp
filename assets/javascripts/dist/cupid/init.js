/*! weimob_vshop_admin
*author:<a.b.c@hd3p.com> */
define("dist/cupid/init",["$","dist/application/app","./ccharts","dist/charts/init"],function(a){"use strict";function b(a){var b=d("#js_generalize_message_text",a),e=b.val().length,g=d(".js_message_inner_url",a),h=b.data("urlLength"),i=b.data("division"),j=b.data("listNumber"),k=b.data("offset"),l=b.data("maxlength");(!g.val().length||g.hasClass("error"))&&(h=0);var m=c(e,i,k,l,j,h);return m.totle>l?f.msg.info("短信内容不能超过"+l+"字"):(d(".js_message_number",a).html(m.number),d(".js_message_totle",a).html(m.totle)),{totle:m.totle,number:m.number,flag:m.totle>l?!1:!0}}function c(a,b,c,d,e,f){var g=4,h=1,i=0,j=a+f+c;return j>e&&(i=Math.ceil((j-e)/(e-b)),g=j+i*b,h=i+1),{totle:g,number:h}}{var d=a("$"),e=a("dist/application/app"),f=e.config;e.method}d(document).on("click",".js_message_submit",function(){var a=!0,c=d(this),e=c.closest("form");if(e.valid()){var f=b(e);f.flag||(a=!1)}return a}),d(document).on("keyup","#js_generalize_message_text",function(){{var a=d(this),c=a.closest("form");b(c)}});var g=d("#js_generalize_message_text");g.length&&function(){{var a=g.closest("form");b(a)}}(),d(document).on("keyup",".js_message_inner_url",function(){var a=d(this),c=a.closest("form");if(!a.hasClass("error")){b(c)}}),d(document).on("click",".js_check_sensitive",function(){var a=d(this),b=a.closest("form"),c=d(".js_sensitive_word",b),e=a.data("path"),g=d("#js_generalize_message_text",b),h=g.val().length;h?(a.button("loading"),d.ajax(e,{type:"post",data:{val:g.val()},dataType:"json"}).done(function(b){c.html(b.message).removeClass("text-danger text-success").addClass(f.issucceed(b)?"text-success":"text-danger"),a.button("reset")}).fail(function(){a.button("reset"),f.msg.info(f.lang.attributeError)})):f.msg.info("请输入短信内容")}),a("./ccharts"),d(document).on("click",".mobselect",function(){d(".mobsbody").css("display","block"),d(".condsbody").css("display","none")}),d(document).on("click",".condselect",function(){d(".mobsbody").css("display","none"),d(".condsbody").css("display","block")}),d(document).on("click",".mark_btn-default",function(){window.location.href="roles_admin.html"}),d(document).on("click",".js_add_freetax",function(){if(d(this).closest(".input-group").find(".js_select_url_type").attr("checked")||d(this).hasClass("a_shangp")){var a=d(this),b=a.data("tempid"),c=a.data("sname"),e=a.closest(".addmaark"),f=a.closest(".addmaark").find(".form-group").length,g=template(b,{size:f,name:c});e.append(g)}}),d(document).on("click",".js_del_freetax",function(a){if(d(this).closest(".input-group").find(".js_select_url_type").attr("checked")||d(this).hasClass("a_shangp")){a.preventDefault();{var b=d(this),c=b.data("sname"),e=b.closest(".addmaark");e.find(".form-group").length}b.closest(".form-group").remove();var f=0;e.find(".form_sr").each(function(){d(this).attr("name",""+c+"["+f+"]"),f++})}}),d(document).on("click",".js_select_url_type",function(){var a=d(this),b=a.closest(".input-group"),c=a.closest(".form_sel");d(".js_select_url_type",c).each(function(){var a=d(this),b=a.closest(".input-group");d("input[type='text']",b).prop("disabled",!0).removeClass("error"),d("select",b).prop("disabled",!0),b.next("span.error").remove(),d(".js_add_freetax",b).css("display","none"),d(".js_del_freetax",b).css("display","none")}),d("input[type='text']",b).prop("disabled",!1),d("select",b).prop("disabled",!1),d(".js_add_freetax",b).css("display","inline-block"),d(".js_del_freetax",b).css("display","inline-block")}),d(document).on("mouseenter",".js_show_delTelBtn",function(){var a=d(this),b=a.find(".js_del_tel");b.removeClass("hide")}),d(document).on("mouseleave",".js_show_delTelBtn",function(){var a=d(this),b=a.find(".js_del_tel");b.addClass("hide")}),d(document).on("click",".js_del_tel",function(a){a.stopPropagation();var b=d(this),c=b.data("tel"),e=b.data("id"),g=b.data("url"),h=b.parent();d.post(g,{tel:c,id:e}).done(function(a){f.issucceed(a)?(f.msg.suc(a.message||f.lang.removeSuccess,a.url),h.remove()):f.msg.error(a.message||f.lang.removeError,a.url)}).fail(function(){f.msg.info(f.lang.exception)})}),d(document).on("click",".js_insert_tel",function(){var a=d(this),b=a.data("tel"),c=d(".js_mobile_number"),e=c.val();-1==e.indexOf(b)?(c.val(e?e+" "+b:b),c.focus().blur()):f.msg.suc("此电话号码已添加！")})}),define("dist/cupid/ccharts",["$","dist/application/app","dist/charts/init"],function(a){"use strict";var b=a("$"),c=a("dist/application/app"),d=c.config,e=c.method,f=a("dist/charts/init.js");b('[data-toggle="listCharts"]').each(function(){var a=b(this),c=a.data("path"),g=a.data("type"),h=a.attr("id"),i=a.data("unit");e.get(c,function(a){if(d.issucceed(a)){if("pie"==g)f.cpie(h,a.result,a.title);else if("mixture"==g)f.mixture(h,a.result,a.title);else if("columnr"==g){var c=Highcharts.getOptions().colors,e=b(a.result[0].data).map(function(a,b){return b.color=c[a],this.name});f.column(h,e,a.result,{chart:{inverted:!0},title:{text:a.title},yAxis:{labels:{formatter:function(){return this.value+a.result[0].unit}},endOnTick:!1},xAxis:{labels:{y:4}},plotOptions:{series:{pointWidth:30}},tooltip:{formatter:function(){return""+this.x+"<br/>"+this.series.name+": "+this.y+this.series.options.unit}}})}else if("polar"==g){var e=(a.result[0].data.length,b(a.result[0].data).map(function(){return this[0]}));a.result[0].pointPlacement="on",f.polar(h,a.result,a.title,{xAxis:{tickmarkPlacement:"on",categories:e},yAxis:{labels:{formatter:function(){return this.value+i}}},tooltip:{pointFormat:"<span>{series.name}: <b>{point.y:,.0f}"+i+"</b><br/>"}})}else if("columnarea"==g){var e=b(a.result[0].data).map(function(){return this[0]});f.column(h,e,a.result,{title:{text:a.title},yAxis:{min:0,stackLabels:{enabled:!0,style:{fontWeight:"bold",color:Highcharts.theme&&Highcharts.theme.textColor||""},formatter:function(){return this.total+a.unit}},labels:{formatter:function(){return this.value+a.unit}}},tooltip:{formatter:function(){return"<b>"+this.x+"</b><br/>"+this.series.name+": "+this.y+a.unit+"<br/>总计: "+this.point.stackTotal+a.unit}},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0,color:Highcharts.theme&&Highcharts.theme.dataLabelsColor||"",formatter:function(){return this.y+a.unit}}},series:{pointWidth:50}}})}else if("column"==g){var e=b(a.result[0].data).map(function(){return this.name});f.column(h,e,a.result,{title:{text:a.title},yAxis:{labels:{formatter:function(){return this.value+a.result[0].unit}},endOnTick:!1},plotOptions:{series:{pointWidth:30}},tooltip:{formatter:function(){return""+this.x+"<br/>"+this.series.name+": "+this.y+this.series.options.unit}}})}}else d.msg.error(a.message)})})});