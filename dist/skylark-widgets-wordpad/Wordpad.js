/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define([],function(){"use strict";var t={},e={};function r(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var e;for(e in t)return!1;return!0}(t)}return define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-query","skylark-domx-contents/Editable","skylark-widgets-base/Widget","./Toolbar","./uploader","./i18n","./addons"],function(t,e,r,o,i,a,s,d,n){var p=i.inherit({options:{srcNodeRef:null,placeholder:"",defaultImage:"images/image.png",params:{},upload:!1,template:'<div class="wordpad">\n  <div class="wordpad-wrapper">\n    <div class="wordpad-placeholder"></div>\n    <div class="wordpad-body" contenteditable="true">\n    </div>\n  </div>\n</div>'},_init:function(){var t,e;if(this._actions=[],this.opts=this.options,this.textarea=r(this.opts.srcNodeRef),this.opts.placeholder=this.opts.placeholder||this.textarea.attr("placeholder"),!this.textarea.length)throw new Error("Wordpad: param textarea is required.");null!=(t=this.textarea.data("wordpad"))&&t.destroy(),this.id=++p.count,this._render();var i=this;if(this.editable=new o(this._elm,{classPrefix:"wordpad-",textarea:this.textarea,body:this.body}),this.editable.on("all",function(t,e){return i.trigger(t.type,e)}),this.opts.upload&&s&&(e="object"==typeof this.opts.upload?this.opts.upload:{},this.uploader=s(e)),this.toolbar=new a(this,{toolbar:this.opts.toolbar,toolbarFloat:this.opts.toolbarFloat,toolbarHidden:this.opts.toolbarHidden,toolbarFloatOffset:this.opts.toolbarFloatOffset}),this.opts.placeholder&&this.on("valuechanged",function(){return i._placeholder()}),this.setValue(this.textarea.val().trim()||""),this.textarea.attr("autofocus"))return i.focus()}});return p.prototype.triggerHandler=p.prototype.trigger=function(t,r){var o;return o=[t],r&&(o=o.concat(r)),e.Evented.prototype.trigger.apply(this,o),this},p.count=0,p.prototype._render=function(){var t,e,o,i;if(this.el=r(this._elm).insertBefore(this.textarea),this.wrapper=this.el.find(".wordpad-wrapper"),this.body=this.wrapper.find(".wordpad-body"),this.placeholderEl=this.wrapper.find(".wordpad-placeholder").append(this.opts.placeholder),this.el.data("wordpad",this),this.wrapper.append(this.textarea),this.textarea.data("wordpad",this).blur(),this.body.attr("tabindex",this.textarea.attr("tabindex")),this.opts.params){for(t in o=[],e=this.opts.params)i=e[t],o.push(r("<input/>",{type:"hidden",name:t,value:i}).insertAfter(this.textarea));return o}},p.prototype._placeholder=function(){var t;return 0===(t=this.body.children()).length||1===t.length&&this.util.isEmptyNode(t)&&parseInt(t.css("margin-left")||0)<this.opts.indentWidth?this.placeholderEl.show():this.placeholderEl.hide()},p.prototype.setValue=function(t){return this.hidePopover(),this.editable.setValue(t),this.trigger("valuechanged")},p.prototype.getValue=function(){return this.editable.getValue()},p.prototype.focus=function(){return this.editable.focus()},p.prototype.blur=function(){return this.editable.blur()},p.prototype.findAction=function(t){if(!this._actions[t]){if(!this.constructor.addons.actions[t])throw new Error("Wordpad: invalid action "+t);this._actions[t]=new this.constructor.addons.actions[t]({editor:this})}return this._actions[t]},p.prototype.hidePopover=function(){return this.el.find(".wordpad-popover").each(function(t,e){if((e=r(e).data("popover")).active)return e.hide()})},p.prototype.destroy=function(){return this.trigger("destroy"),this.textarea.closest("form").off(".Wordpad .wordpad-"+this.id),this.selection.clear(),this.inputManager.focused=!1,this.textarea.insertBefore(this.el).hide().val("").removeData("wordpad"),this.el.remove(),r(document).off(".wordpad-"+this.id),r(window).off(".wordpad-"+this.id),this.off()},p.Toolbar=a,p.i18n=d,p.addons=n,t.attach("widgets.Wordpad",p)}),r(e)?e:r(t)?t:void 0});
//# sourceMappingURL=sourcemaps/Wordpad.js.map
