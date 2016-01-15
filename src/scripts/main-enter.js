"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
	game.scaleCanvasToFitRectangle(800,600);
	for (var i = 0; i < 12; i++) {
		var star = game.instantiatePrefab("goo");
		game.entities.set(star, "position", {
			"x": i * 70,
			"y": 0
		});
	}

};
