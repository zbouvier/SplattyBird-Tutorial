"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function run(entity, elapsed) { // eslint-disable-line no-unused-vars
		var animation = game.entities.get(entity, "animation");

		if (game.inputs.button("left")) {
			animation.name = "player-run-left";
		} else if (game.inputs.button("right")) {
			animation.name = "player-run-right";
		} else {
			animation.name = "player-idle";
		}

	}, "playerController2d");
};
