
define( [ 'global', 'entity', 'class' ], function( aGlobal, aEntity ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Sprite
	 */

	var Sprite = aEntity.extend({
		animation: null,
		animations: [ ],
		currentFrame: 0,
		timeBetweenFrames: 1 / GLOBAL.video.fps,
		timeSinceLastFrame: this.timeBetweenFrames,
		sounds: [ ],

		/**
		 * Method: init
		 */

		init: function( aSystem, aGame ) {
			this._super( aSystem, aGame );

			this.addAnimations( );
			this.addSounds( );

			this.cache( );
		},

		/**
		 * Method: addAnimations
		 */

		addAnimations: function( ) {

		},

		/**
		 * Method: addAnimation
		 * @param {Object} aAnimation
		 */

		addAnimation: function( aAnimation ) {

		},

		/**
		 * Method: addSounds
		 */

		addSounds: function( ) {

		},

		/**
		 * Method: addSound
		 * @param {Object} aSound
		 */

		addSound: function( aSound ) {

		},

		/**
		 * Method: cache
		 */

		cache: function( ) {
			var i, len,
				el;

			for ( i = 0, len = this.animations.length; i < len; i++ ) {
				el = new Image( );
				el.setAttribute( 'src', this.animations[ i ].file_url );
			}

			for ( i = 0, len = this.sounds.length; i < len; i++ ) {
				el = new Audio( );
				el.setAttribute( 'src', this.sounds[ i ].file_url );
			}
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
