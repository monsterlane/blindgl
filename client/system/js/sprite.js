
define( [ 'global', 'entity', 'class' ], function( aGlobal, aEntity ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Sprite
	 */

	var Sprite = aEntity.extend({
		animation: null,
		animations: { },
		currentFrame: 0,
		timeBetweenFrames: 1 / GLOBAL.video.fps,
		timeSinceLastFrame: this.timeBetweenFrames,

		/**
		 * Method: init
		 */

		init: function( aSystem, aGame ) {
			this._super( aSystem, aGame );

			this.addAnimations( );
		},

		/**
		 * Method: addAnimations
		 */

		addAnimations: function( ) {

		},

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

			if ( this.animation != null ) {
				this.draw( this.timeSinceLastFrame );
			}
		}
	});

	return Sprite;
});
