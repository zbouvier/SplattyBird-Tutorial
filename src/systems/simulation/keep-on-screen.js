"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function keepOnScreen(entity, elapsed) { // eslint-disable-line no-unused-vars
		var size = game.entities.get(entity, "size");
		var position = game.entities.get(entity, "position");

		var screenSize = game.entities.get(3, "size");
		var screenPosition = game.entities.get(3, "position");

		if (position.x < screenPosition.x) {
			position.x = screenPosition.x;
		}
		if (position.x + size.width > screenSize.width) {
			position.x = screenSize.width - size.width;
		}
		if (position.y < screenPosition.y) {
			position.y = screenPosition.y;
		}
		if (position.y + size.height > screenSize.height) {
			position.y = screenSize.height - size.height;
		}
	}, "player");
};
