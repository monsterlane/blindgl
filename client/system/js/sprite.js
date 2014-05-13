
define( [ 'global', 'entity', 'class' ], function( Global, Entity ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Entity
	 */

	var Sprite = Entity.extend({
		animations: { },
		currentFrame: 0,
		timeBetweenFrames: 1 / GLOBAL.video.fps,
		timeSinceLastFrame: this.timeBetweenFrames
	});

	return Entity;
});
