"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("jump",["player", "velocity"]);
	ecs.addEach(function jump(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = game.entities.get(entity, "velocity");
		if (game.inputs.buttonPressed("jump")) {
			velocity.y  = -0.7;
		}

	}, "jump");

};
