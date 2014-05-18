
define( [ 'global', 'entity', 'class' ], function( aGlobal, aEntity ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Sprite
	 */

	var Sprite = aEntity.extend({
		animation: null,
		animations: { },
		currentImage: null,
		currentFrame: -1,
		lastTick: Date.now( ),
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
		 * Method: setState
		 * @param {Int} aState
		 * @param {Object} aOptions
		 */

		setState: function( aState, aOptions ) {
			this._super( aState, aOptions );

			if ( this.animations[ this.state ] ) {
				this.setAnimation( );
			}
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
			var animation = aAnimation || this.animations[ this.state ][ this.direction ];

			if ( this.animation != animation ) {
				this.animation = animation;
				this.timeSinceLastFrame = this.animation.timeBetweenFrames;
				this.currentFrame = -1;

				this.currentImage = new Image( );
				this.currentImage.setAttribute( 'src', this.animation.file_url );
			}
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
			var i, j, len,
				el;

			for ( i in this.animations ) {
				for ( j in this.animations[ i ] ) {
					el = new Image( );
					el.setAttribute( 'src', this.animations[ i ][ j ].file_url );
				}
			}

			for ( i = 0, len = this.sounds.length; i < len; i++ ) {
				el = new Audio( );
				el.setAttribute( 'src', this.sounds[ i ].file_url );
			}
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var now = Date.now( ),
				elapsed = now - this.lastTick;

			if ( elapsed >= this.animation.timeBetweenFrames ) {
				this.lastTick = now - ( elapsed % this.animation.timeBetweenFrames );

				++this.currentFrame;
				this.currentFrame %= this.animation.frameCount;

				this.layer.bufferContext.clearRect( this.position.x, this.position.y, this.animation.frameWidth, this.animation.frameHeight );
				this.layer.bufferContext.drawImage( this.currentImage, this.animation.frameWidth * this.currentFrame, 0, this.animation.frameWidth, this.animation.frameHeight, this.position.x, this.position.y, this.animation.frameWidth, this.animation.frameHeight );
			}
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			this._super( );

			if ( this.animation != null ) {
				this.draw( );
			}
		}
	});

	return Sprite;
});
