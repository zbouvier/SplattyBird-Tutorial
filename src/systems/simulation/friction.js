"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function friction(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = game.entities.get(entity, "velocity");
		var entityCollisions = game.entities.get(entity, "collisions");

		for (var i = 0; i < entityCollisions.length; i++) {
			var other = entityCollisions[i];
			if (game.entities.get(other, "platform")) {
				velocity.x *= 0.95;
			}
		}

	}, "player");
};
