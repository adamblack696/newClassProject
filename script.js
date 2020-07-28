'use strict';

const DomElement = function(selector = '', height = '', width = '', bg = '', fontSize = '', content = '', wrap = '', position = '') {
	 this.selector = selector;
	 this.height = height;
	 this.width = width;
	 this.bg = bg;
	 this.fontSize = fontSize;
	 this.content = content;
	 this.position = position;
	 this.wrap = wrap;
	 this.left = 0;
	 this.top = 0;
}
DomElement.prototype.createTag = function() {
	const addSelector = function(elem) {
		const wrap = document.createElement('div');
		wrap.classList.add(this.wrap);
		document.body.append(wrap);
		elem.style.cssText = `
			height: ${this.height};
			width: ${this.width};
			background: ${this.bg};
			font-size: ${this.fontSize};
			position: ${this.position};
			left: ${this.left};
			right: ${this.right};
			top: ${this.top};
			bottom: ${this.bottom};
		`;
		elem.textContent = this.content;
		wrap.append(elem);
		this.elem = elem;
	};
	if(this.selector[0] === '.') {
		const div = document.createElement('div');
		div.className = this.selector.slice(1);
		addSelector.call(this, div);
	} else if(this.selector[0] === '#') {
		const p = document.createElement('p');
		p.id = this.selector.slice(1);
		addSelector.call(this, p);
	}
	this.handler();
};
DomElement.prototype.handler = function() {
	document.addEventListener('keydown', event => {
		if (event.keyCode === 37) {
			this.left -= 10;
			this.elem.style.left = this.left + 'px';
		}
		if (event.keyCode === 39) {
			this.left += 10;
			this.elem.style.left = this.left + 'px';
		}
		if (event.keyCode === 38) {
			this.top -= 10;
			this.elem.style.top = this.top + 'px';
		}
		if (event.keyCode === 40) {
			this.top += 10;
			this.elem.style.top = this.top + 'px';
		}
	});
};
const element = new DomElement('.class-name', '100px', '100px', 'green', '16px', '', 'wrap', 'absolute');
document.addEventListener('DOMContentLoaded', () => {
	element.createTag.call(element);
})