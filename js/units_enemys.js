'use strict';
class UnitsEnemy extends Units {
	moveenemy() {
		switch (Utils.getRandomInt(0, 4)) {
			case 0:
				computer.pos.push([0, Math.random() * (Game.CANWASHEIGHT - 21)]);
				break;
			case 1:
				computer.pos.push([Math.random() * Game.CANWASWIDTH, 0]);
				break;
			case 2:
				computer.pos.push([Math.random() * Game.CANWASWIDTH, Game.CANWASHEIGHT - 21]);
				break;
			default:
				computer.pos.push([(Game.CANWASWIDTH - 18), Math.random() * (Game.CANWASHEIGHT - 21)]);
				break;
		}
		for (let n = 0; n < computer.pos.length; n++) {
			let x0 = computer.pos[n][0];
			let y0 = computer.pos[n][1];
			let x1 = player.pos[0][0];
			let y1 = player.pos[0][1];
			let l = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
			computer.pos[n][0] += (x1 - x0) * 1/l;
			computer.pos[n][1] += (y1 - y0) * 1/l;
		}
		console.log(computer.pos);
	}
}