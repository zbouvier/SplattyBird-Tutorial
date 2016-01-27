"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function run(entity, elapsed) { // eslint-disable-line no-unused-vars
		var animation = game.entities.get(entity, "animation");

		if (game.input.button("left")) {
			animation.name = "player-run-left";
		} else if (game.input.button("right")) {
			animation.name = "player-run-right";
		} else {
			animation.name = "player-idle";
		}

	}, "player");
};
