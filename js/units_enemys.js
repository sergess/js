'use strict';
class UnitsEnemy extends Units {

	moveenemy() {
		// computer.pos.push([10, Math.random() * (Game.CANWASHEIGHT - 21)]);12323
		console.log();
		switch (Utils.getRandomInt(0, 4)) {
			case 0:
				computerObj.pos.push([10, Math.floor(Math.random() * (Game.CANWASHEIGHT - 21))]);
				break;
			case 1:
				computerObj.pos.push([Math.floor(Math.random() * Game.CANWASWIDTH), 0]);
				break;
			case 2:
				computerObj.pos.push([Math.floor(Math.random() * Game.CANWASWIDTH), Game.CANWASHEIGHT - 21]);
				break;
			default:
				computerObj.pos.push([(Game.CANWASWIDTH - 18), Math.floor(Math.random() * (Game.CANWASHEIGHT - 21))]);
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
		 //console.log('rand: '+Utils.getRandomInt(0, 4)+'test: '+computerObj.pos[n][1]);
		}

	}
}