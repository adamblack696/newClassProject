'use strict';

const wrap = document.querySelector('.wrap');
const DomElement = function(selector, height, width, bg, fontSize, content) {
	 this.selector = selector;
	 this.height = height;
	 this.width = width;
	 this.bg = bg;
	 this.fontSize = fontSize;
	 this.content = content;
}
DomElement.prototype.createTag = function() {
	const addSelector = function(elem) {
		const _this = this;
		console.log(_this);
		elem.style.cssText = `
			height: ${_this.height};
			width: ${_this.width};
			background: ${_this.bg};
			font-size: ${_this.fontSize};
		`;
		elem.textContent = _this.content;
	};
	if(this.selector[0] === '.') {
		const div = document.createElement('div');
		div.className = this.selector.slice(1);
		addSelector.call(this, div);
		return div;
	} else if(this.selector[0] === '#') {
		const p = document.createElement('p');
		p.id = this.selector.slice(1);
		addSelector.call(this, p);
		return p;
	}
};
const content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in, maxime, exercitationem dolorum soluta incidunt quasi repudiandae ea eaque possimus veritatis voluptatum nostrum accusantium. Ea magnam corrupti sunt sapiente laudantium';
const element = new DomElement('.class-name', '100px', '370px', 'red', '16px', content);
const tag = element.createTag();
wrap.append(tag);