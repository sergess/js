'use strict';
let canvasElement = $("<canvas width='" + Game.CANWASWIDTH + "' height='" + Game.CANWASHEIGHT + "'></canvas>");
let ctx = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');
let image = new Image();
image.src = 'images/sprite_bomber.png';
let playerOne = {
	pos:  [[Game.CANWASWIDTH / 2, Game.CANWASHEIGHT / 2]],
	size: [18, 21],
	move: {
		iddle:  [[0, 0], [0, 0], [0, 0]],
		left:   [[30, 0], [30, 30], [30, 60]],
		right:  [[90, 0], [90, 30], [90, 60]],
		bottom: [[0, 0], [0, 30], [0, 60]],
		top:    [[60, 0], [60, 30], [60, 60]],
		dead:   [[150, 0], [150, 0], [150, 0]]
	}
};
let computerObj = {
	pos:  [],
	size: [18, 21],
	move: {
		iddle:  [[0, 120], [30, 120], [60, 120]],
		left:   [[0, 120], [30, 120], [60, 120]],
		right:  [[0, 120], [30, 120], [60, 120]],
		bottom: [[0, 120], [30, 120], [60, 120]],
		top:    [[0, 120], [30, 120], [60, 120]],
		dead:   [[90, 120], [90, 120], [90, 120]]
	}
}
let computer = new UnitsEnemy(computerObj);
let player = new UnitsPlayers(playerOne);
let game = new Game();
/*setInterval(function () {
	computer.draw();
	player.draw();
}, 1000 / Game.FPS);*/