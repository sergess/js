'use strict';
class UnitsPlayers extends Units {
	moveplayer(){
		if(keydown.left) {
			return console.log('left');
		}else
		if(keydown.right) {
			return console.log('right');
		}else
		if (keydown.up){
			return console.log('up');
		}else
		if (keydown.down){
			return console.log('down');
		}
	}
}