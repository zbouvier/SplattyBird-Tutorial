"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("platforms", ["position", "size", "color"]);
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var position = game.entities.get(entity, "position");
		var size = game.entities.get(entity, "size");
		var color = game.entities.get(entity, "color");
		context.fillStyle = color;
		context.fillRect(position.x, position.y, size.width, size.height);
	}, "platforms");
};
