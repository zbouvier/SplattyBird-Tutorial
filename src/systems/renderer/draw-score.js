"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function harvest(entity, context) { // eslint-disable-line no-unused-vars
		var score = game.entities.get(entity, "score");

		context.fillStyle = "#000";
		context.font = "bold 26px arial";
		context.fillText("score: " + score, 16, 35);

	} ,"player");
};
