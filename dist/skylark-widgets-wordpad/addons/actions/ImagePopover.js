/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","../../addons","../../Popover"],function(t,e,i,a){var n=a.inherit({});return n.prototype.offset={top:6,left:-4},n.prototype.render=function(){var t,i;return t='<div class="link-settings">\n  <div class="settings-field">\n    <label>'+this._t("imageUrl")+'</label>\n    <input class="image-src" type="text" tabindex="1" />\n    <a class="btn-upload" href="javascript:;"\n      title="'+this._t("uploadImage")+'" tabindex="-1">\n      <span class="fa fa-upload"></span>\n    </a>\n  </div>\n  <div class=\'settings-field\'>\n    <label>'+this._t("imageAlt")+'</label>\n    <input class="image-alt" id="image-alt" type="text" tabindex="1" />\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("imageSize")+'</label>\n    <input class="image-size" id="image-width" type="text" tabindex="2" />\n    <span class="times">×</span>\n    <input class="image-size" id="image-height" type="text" tabindex="3" />\n    <a class="btn-restore" href="javascript:;"\n      title="'+this._t("restoreImageSize")+'" tabindex="-1">\n      <span class="fa fa-undo"></span>\n    </a>\n  </div>\n</div>',this.el.addClass("image-popover").append(t),this.srcEl=this.el.find(".image-src"),this.widthEl=this.el.find("#image-width"),this.heightEl=this.el.find("#image-height"),this.altEl=this.el.find("#image-alt"),this.srcEl.on("keydown",(i=this,function(t){var e;if(13===t.which&&!i.target.hasClass("uploading"))return t.preventDefault(),e=document.createRange(),i.action.editor.editable.selection.setRangeAfter(i.target,e),i.hide()})),this.srcEl.on("blur",function(t){return function(e){return t._loadImage(t.srcEl.val())}}(this)),this.el.find(".image-size").on("blur",function(t){return function(i){return t._resizeImg(e(i.currentTarget)),t.el.data("popover").refresh()}}(this)),this.el.find(".image-size").on("keyup",function(t){return function(i){var a;if(a=e(i.currentTarget),13!==i.which&&27!==i.which&&9!==i.which)return t._resizeImg(a,!0)}}(this)),this.el.find(".image-size").on("keydown",function(t){return function(i){var a,n,r;return n=e(i.currentTarget),13===i.which||27===i.which?(i.preventDefault(),13===i.which?t._resizeImg(n):t._restoreImg(),a=t.target,t.hide(),r=document.createRange(),t.action.editor.editable.selection.setRangeAfter(a,r)):9===i.which?t.el.data("popover").refresh():void 0}}(this)),this.altEl.on("keydown",function(t){return function(e){var i;if(13===e.which)return e.preventDefault(),i=document.createRange(),t.action.editor.editable.selection.setRangeAfter(t.target,i),t.hide()}}(this)),this.altEl.on("keyup",function(t){return function(e){if(13!==e.which&&27!==e.which&&9!==e.which)return t.alt=t.altEl.val(),t.target.attr("alt",t.alt)}}(this)),this.el.find(".btn-restore").on("click",function(t){return function(e){return t._restoreImg(),t.el.data("popover").refresh()}}(this)),this.editor.on("valuechanged",function(t){return function(e){if(t.active)return t.refresh()}}(this)),this._initUploader()},n.prototype._initUploader=function(){var t,i,a;if(t=this.el.find(".btn-upload"),null!=this.editor.uploader)return a=this,(i=function(){return a.input&&a.input.remove(),a.input=e("<input/>",{type:"file",title:a._t("uploadImage"),multiple:!0,accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"}).appendTo(t)})(),this.el.on("click mousedown","input[type=file]",function(t){return t.stopPropagation()}),this.el.on("change","input[type=file]",function(t){return function(e){return t.editor.uploader.upload(t.input,{inline:!0,img:t.target}),i()}}(this));t.remove()},n.prototype._resizeImg=function(e,i){var a,n,r;if(null==i&&(i=!1),n=1*e.val(),this.target&&(t.isNumber(n)||n<0))return e.is(this.widthEl)?(r=n,a=this.height*n/this.width,this.heightEl.val(a)):(a=n,r=this.width*n/this.height,this.widthEl.val(r)),i?void 0:(this.target.attr({width:r,height:a}),this.editor.trigger("valuechanged"))},n.prototype._restoreImg=function(){var t,e;return e=(null!=(t=this.target.data("image-size"))?t.split(","):void 0)||[this.width,this.height],this.target.attr({width:1*e[0],height:1*e[1]}),this.widthEl.val(e[0]),this.heightEl.val(e[1]),this.editor.trigger("valuechanged")},n.prototype._loadImage=function(t,e){var i;if(!/^data:image/.test(t)||this.editor.uploader){if(this.target.attr("src")!==t)return this.action.loadImage(this.target,t,(i=this,function(a){var n;if(a)return i.active&&(i.width=a.width,i.height=a.height,i.widthEl.val(i.width),i.heightEl.val(i.height)),/^data:image/.test(t)?((n=i.editor.editable.util.dataURLtoBlob(t)).name="Base64 Image.png",i.editor.uploader.upload(n,{inline:!0,img:i.target})):i.editor.trigger("valuechanged"),e?e(a):void 0}))}else e&&e(!1)},n.prototype.show=function(){var t,e;return e=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],a.prototype.show.apply(this,e),t=this.target,this.width=t.width(),this.height=t.height(),this.alt=t.attr("alt"),t.hasClass("uploading")?this.srcEl.val(this._t("uploading")).prop("disabled",!0):(this.srcEl.val(t.attr("src")).prop("disabled",!1),this.widthEl.val(this.width),this.heightEl.val(this.height),this.altEl.val(this.alt))},n});
//# sourceMappingURL=../../sourcemaps/addons/actions/ImagePopover.js.map
