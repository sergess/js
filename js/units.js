'use strict';
class Units {
	constructor(obj) {
		this.size = obj.size;
		this.pos = obj.pos;
		this.move = obj.move;
	}
	draw() {
		ctx.drawImage(image, this.move.dead[0][0], this.move.dead[0][1], this.size[0], this.size[1], this.pos[0][0], this.pos[0][1], this.size[0], this.size[1]);
	}
	static log(){
		console.log('1');
	}
}