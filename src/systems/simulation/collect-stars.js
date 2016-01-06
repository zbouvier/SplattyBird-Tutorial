"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function collectStars(entity, elapsed) { // eslint-disable-line no-unused-vars
		var entityCollisions = game.entities.get(entity, "collisions");
		var score = game.entities.get(entity, "score");

		for (var i = 0; i < entityCollisions.length; i++) {
			var other = entityCollisions[i];
			if (game.entities.get(other, "star")) {
				game.entities.destroy(other);
				game.entities.set(entity, "score", score + 10);
			}
		}
	}, "player");
};
