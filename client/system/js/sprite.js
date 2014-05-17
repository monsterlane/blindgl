
define( [ 'global', 'entity', 'class' ], function( Global, Entity ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Entity
	 */

	var Sprite = Entity.extend({
		animation: null,
		animations: { },
		currentFrame: 0,
		timeBetweenFrames: 1 / GLOBAL.video.fps,
		timeSinceLastFrame: this.timeBetweenFrames,

		/**
		 * Method: draw
		 * @param {Int} aTime
		 */

		draw: function( aTime ) {
			this.layer.buffer.drawImage( this.animation.source, this.animation.frameWidth * this.currentFrame, 0, this.animation.frameWidth, this.animation.frameHeight, this.x, this.y );

			this.timeSinceLastFrame -= aTime;

			if ( this.timeSinceLastFrame <= 0 ) {
				this.timeSinceLastFrame = this.timeBetweenFrames;
				++this.currentFrame;
				this.currentFrame %= this.animation.frameCount;
			}
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			this._super( );

			this.draw( this.timeSinceLastFrame );
		}
	});

	return Entity;
});
