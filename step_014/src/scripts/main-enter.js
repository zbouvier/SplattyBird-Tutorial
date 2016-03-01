"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
	game.scaleCanvasToFitRectangle(800,800);

	for (var i = 0; i < 12; i++) {
		var goo = game.instantiatePrefab("goo");
		game.entities.set(goo, "position", {
			"x": i * 70,
			"y": -13
		});
	}
};
