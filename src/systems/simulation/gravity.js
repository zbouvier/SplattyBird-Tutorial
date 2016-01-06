"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function gravity(entity, elapsed) { // eslint-disable-line no-unused-vars
		var position = game.entities.get(entity, "position");
		var gravity = game.entities.get(entity, "gravity");
		position.y += gravity;
	}, "gravity");
};
