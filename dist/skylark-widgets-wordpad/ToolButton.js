/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","skylark-widgets-base/Widget","./i18n"],function(t,e,n,i){return n.inherit({options:{template:'<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',menu:{menuWrapper:'<div class="toolbar-menu"></div>',menuItem:'<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',separator:'<li><span class="separator"></span></li>'}},_construct:function(t){this.action=t.action,this.toolbar=t.toolbar,this.editor=t.toolbar.editor,n.prototype._construct.call(this,t)},_init:function(){this.render();var t=this;this.el.on("mousedown",function(e){var n,i;return e.preventDefault(),n=t.needFocus&&!t.editor.editable.inputManager.focused,!t.el.hasClass("disabled")&&(n&&t.editor.focus(),t.menu?(t.wrapper.toggleClass("menu-on").siblings("li").removeClass("menu-on"),t.wrapper.is(".menu-on")&&(t.menuWrapper.offset().left+t.menuWrapper.outerWidth()+5-t.editor.wrapper.offset().left-t.editor.wrapper.outerWidth()>0&&t.menuWrapper.css({left:"auto",right:0}),t.trigger("menuexpand")),!1):(i=t.el.data("param"),t.command(i),!1))}),this.wrapper.on("click","a.menu-item",function(n){var i,a,s;return n.preventDefault(),i=e(n.currentTarget),t.wrapper.removeClass("menu-on"),a=t.needFocus&&!t.editor.editable.inputManager.focused,!i.hasClass("disabled")&&!a&&(t.toolbar.wrapper.removeClass("menu-on"),s=i.data("param"),t.command(s),!1)}),this.wrapper.on("mousedown","a.menu-item",function(t){return!1}),this.action.state.on("changed",function(e,n){var i=n.data;void 0!==i.active&&t._doActive(i.active.value),void 0!==i.disabled&&t._doDisabled(i.disabled.value)})},_doActive:function(t){return this.el.toggleClass("active",this.active)},_doDisabled:function(t){return this.el.toggleClass("disabled",this.disabled)},iconClassOf:function(t){return t?"wordpad-icon wordpad-icon-"+t:""},setIcon:function(t){return this.el.find("span").removeClass().addClass(this.iconClassOf(t)).text(this.text)},render:function(){if(this.toolbar.addToolItem(this),this.wrapper=e(this._elm),this.el=this.wrapper.find("a.toolbar-item"),this.el.attr("title",this.title).addClass("toolbar-item-"+this.name).data("button",this),this.setIcon(this.icon),this.menu)return this.menuWrapper=e(this.options.menu.menuWrapper).appendTo(this.wrapper),this.menuWrapper.addClass("toolbar-menu-"+this.name),this.renderMenu()},renderMenu:function(){var n,i,a,s,r,o,u;if(t.isArray(this.menu)){for(this.menuEl=e("<ul/>").appendTo(this.menuWrapper),u=[],i=0,a=(r=this.menu).length;i<a;i++)"|"!==(s=r[i])?(n=e(this.options.menu.menuItem).appendTo(this.menuEl).find("a.menu-item").attr({title:null!=(o=s.title)?o:s.text,"data-param":s.param}).addClass("menu-item-"+s.name),s.icon?u.push(n.find("span").addClass(this.iconClassOf(s.icon))):u.push(n.find("span").text(s.text))):e(this.options.menu.separator).appendTo(this.menuEl);return u}},command:function(t){this.action.execute(t)},name:{get:function(){return this.action.name}},icon:{get:function(){return this.action.icon}},title:{get:function(){return this.action.tooltip}},text:{get:function(){return this.action.text}},htmlTag:{get:function(){return this.action.htmlTag}},disableTag:{get:function(){return this.action.disableTag}},menu:{get:function(){return this.action.menu}},editable:{get:function(){return this._options.editable}},active:{get:function(){return this.action.active}},disabled:{get:function(){return this.action.disabled}},needFocus:{get:function(){return this.action.needFocus}},shortcut:{get:function(){return this.action.shortcut}}})});
//# sourceMappingURL=sourcemaps/ToolButton.js.map
