/*! weimob_vshop_admin
*author:<a.b.c@hd3p.com> */
define("dist/pluploadv/init",["./imagefile","$","dist/application/app","jquery_ui","./template/imageTemp.html","./template/progress.html"],function(a){"use strict";var b=a("./imagefile");return b}),define("dist/pluploadv/imagefile",["$","dist/application/app","jquery_ui"],function(require,exports,module){"use strict";function playUpload(){$(".js_new_upload").each(function(){console.log("ltttrwsd");var $el=$(this),$form=$el.closest(".js_upload_container"),sname=$el.data("submitname"),upload_path=$el.data("uploadpath"),deletepath=$el.data("delpath"),count=$el.data("count"),datas=eval("("+$el.data("data")+")")||null,max_count=count-($form.find("li.imgbox").length||0);(void 0==count||""==count)&&(max_count=null);var cc=$el.uploader({multi:!0,url:upload_path,delete_path:deletepath,max_count:max_count,max_count_tips:count,data:datas,FilesAdded:function(a,b){$.each(b,function(a,b){$(".js_file_upload_queue",$form).append(render_progress({id:b.id,filename:b.name,filesize:Math.ceil(b.size/1024)}))})},UploadProgress:function(a,b){var c="upload{0}".format(b.id);if(uploadimte=$("#{0}".format(c)),uploadimte.length){var d=b.percent+"%";$(".data",uploadimte).text(d),$(".uploadify-progress-bar",uploadimte).width(d)}},FileUploaded:function(a,b,c){$.isPlainObject(c)?(c.image.progressid=b.id,c.image.sname=sname,c.image.deletepath=deletepath,c.image.index=$form.find("li.imgbox").length,$(".js_fileList",$form).append(render_item(c.image)),uploadimte.remove(),window.fileUpCallback&&window.fileUpCallback(),changeImgNameIndex($form,sname)):(uploadimte.addClass("uploadify-error"),uploadimte.remove(),a.files.removeFile(b),config.msg.info(c||config.lang.uplodError))},UploadComplete:function(){$(".uploadify-progress-bar",uploadimte).remove()}},"picture");$("ul.ipost-list",$form).sortable({opacity:.8,stop:function(){window.fileUpCallback&&window.fileUpCallback(),changeImgNameIndex($form,sname)}});var $del=$("a.item_new_close",$form);$form.on("click","a.item_new_close",function(a){var b=$(this),c=b.data("progressid"),d=b.data("delpath");$.post(d,{id:b.data("post-id"),url:b.data("path")});var e=$(a.target).closest("li.imgbox");e.fadeOut(function(){e.remove(),$("#upload"+c).remove();var a=count-($form.find("li.imgbox").length||0),b=0;$form.find("li.imgbox").each(function(){$(this).find("a.item_new_close").data("progressid")&&b++}),count&&(c?$.data($el,"uploader").plupload.removeFile(c):$el.uploader("update",{max_count:a+b})),window.fileUpCallback&&window.fileUpCallback(),changeImgNameIndex($form,sname)})})})}function changeImgNameIndex(a,b){$(".js_fileList li",a).each(function(a){var c=$(this);$("input:first",c).prop("name",b+"["+a+"].id"),$("input:last",c).prop("name",b+"["+a+"].path")})}var $=require("$"),app=require("dist/application/app"),config=app.config,method=app.method;require("jquery_ui");var imageTemp=require("dist/pluploadv/template/imageTemp.html"),progressTemp=require("dist/pluploadv/template/progress.html"),render_item=template.compile(imageTemp),render_progress=template.compile(progressTemp),uploadimte=null;playUpload();var rww={};return rww.playUpload=playUpload,rww}),define("dist/pluploadv/template/imageTemp.html",[],'<li class="imgbox" data-post-id="{{id}}" data-path="{{thumbnail}}">\n	<a class="item_new_close item_close" href="javascript:void(0)" data-delpath="{{deletepath}}" data-progressid="{{progressid}}" title="删除"  data-path="{{thumbnail}}" data-post-id="{{id}}"></a>  \n	<input type="hidden" value="{{id}}" name="{{sname}}[{{index}}].id"> \n	<input type="hidden" value="{{thumbnail}}" name="{{sname}}[{{index}}].path"> \n	<span class="item_box"><img src="{{path}}"></span>\n</li>'),define("dist/pluploadv/template/progress.html",[],'<div id="upload{{id}}" class="uploadify-queue-item">  \n	<span class="fileName">{{filename}} ({{filesize}}KB)</span>\n	<span class="data"> -上传完成 正在加载.....</span>   \n	<div class="uploadify-progress">                        \n		<div class="uploadify-progress-bar" style="width: 1%;"><!--Progress Bar-->\n		</div>                    \n	</div>                \n</div>');