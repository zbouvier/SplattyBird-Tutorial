"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function jump(entity, elapsed) { // eslint-disable-line no-unused-vars
		var velocity = game.entities.get(entity, "velocity");

		if (game.input.buttonPressed("jump")) {
			var entityCollisions = game.entities.get(entity, "collisions");

			for (var i = 0; i < entityCollisions.length; i++) {
				var other = entityCollisions[i];
				if (game.entities.get(other, "platform")) {
					var otherPosition = game.entities.get(other, "position");
					var position = game.entities.get(entity, "position");
					var size = game.entities.get(entity, "size");
					if ((position.y + size.height) <= otherPosition.y) {
						velocity.y  = -1.2;
					}
				}
			}
		}

	}, "player");
};
