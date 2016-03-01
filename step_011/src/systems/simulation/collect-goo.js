"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collectGoo(entity, elapsed) { // eslint-disable-line no-unused-vars
		var entityCollisions = game.entities.get(entity, "collisions");

		for (var i = 0; i < entityCollisions.length; i++) {
			var other = entityCollisions[i];
			if (game.entities.get(other, "points")) {
				game.entities.destroy(other);
			}
		}
	}, "playerController2d");
};
