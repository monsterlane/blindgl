
define( [ 'global', 'entity', 'class' ], function( aGlobal, aEntity ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Sprite
	 */

	var Sprite = aEntity.extend({
		animation: null,
		animations: { },
		currentImage: null,
		currentFrame: 0,
		timeBetweenFrames: 1 / GLOBAL.video.fps,
		timeSinceLastFrame: 0,
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
			var s = aAnimation.state,
				d = aAnimation.direction;

			if ( !this.animations[ s ] ) {
				this.animations[ s ] = { };
			}

			this.animations[ s ][ d ] = aAnimation;
		},

		/**
		 * Method: setAnimation
		 * @param {Object} aAnimation
		 */

		setAnimation: function( aAnimation ) {
			this.animation = aAnimation;
			this.timeSinceLastFrame = this.timeBetweenFrames;

			this.currentImage = new Image( );
			this.currentImage.setAttribute( 'src', this.animation.file_url );
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
		 * Method: playSound
		 * @param {Object} aSound
		 */

		playSound: function( aSound ) {
			this.system.audio.playSound( aSound.file_url, aSound.volume );
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
			this.layer.bufferContext.clearRect( this.position.x, this.position.y, this.animation.frameWidth, this.animation.frameHeight );
			this.layer.bufferContext.drawImage( this.currentImage, this.animation.frameWidth * this.currentFrame, 0, this.animation.frameWidth, this.animation.frameHeight, this.position.x, this.position.y, this.animation.frameWidth, this.animation.frameHeight );

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
