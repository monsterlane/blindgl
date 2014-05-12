
define( [ 'global', 'entity', 'class' ], function( Global, Entity ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Entity
	 */

	var Sprite = Entity.extend({
		position: {
			x: 0,
			y: 0,
			z: 0
		},
		velocity: {
			x: 0,
			y: 0,
			z: 0
		},
		bbox: [ null, null ],
		solid: GLOBAL.solid.bbox,
		moveType: GLOBAL.moveType.none,
		animations: { },
		currentFrame: 0,
		timeBetweenFrames: 1 / GLOBAL.video.fps,
		timeSinceLastFrame: this.timeBetweenFrames
	});

	return Entity;
});
