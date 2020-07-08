'use strict';

const wrap = document.querySelector('.wrap');
const DomElement = function(selector, height, width, bg, fontSize) {
	 this.selector = selector;
	 this.height = height;
	 this.width = width;
	 this.bg = bg;
	 this.fontSize = fontSize;
}
DomElement.prototype.createTag = function() {
	const addSelector = function(elem) {
		elem.style.cssText = `
			height: ${element.height};
			width: ${element.width};
			background: ${element.bg};
			font-size: ${element.fontSize};
		`;
	};
	if(this.selector[0] === '.') {
		const div = document.createElement('div');
		div.className = this.selector.slice(1);
		addSelector(div);
		return div;
	} else if(this.selector[0] === '#') {
		const p = document.createElement('p');
		p.id = this.selector.slice(1);
		addSelector(p);
		return p;
	}
};
const element = new DomElement('.class-name', '100px', '370px', 'red', '16px');
const tag = element.createTag();
tag.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in, maxime, exercitationem dolorum soluta incidunt quasi repudiandae ea eaque possimus veritatis voluptatum nostrum accusantium. Ea magnam corrupti sunt sapiente laudantium';
wrap.append(tag);