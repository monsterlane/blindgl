
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
		visible: false,
		lastPosition: {
			x: 0,
			y: 0
		},
		lastSize: {
			width: 0,
			height: 0
		},

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
		 * Method: setPosition
		 * @param {Object} aPosition
		 */

		setPosition: function( aPosition ) {
			this.lastPosition = {
				x: this.position.x,
				y: this.position.y
			};

			this._super( aPosition );
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
		 * Method: setDirection
		 * @param {Int} aDirection
		 */

		setDirection: function( aDirection ) {
			this._super( aDirection );

			this.setAnimation( );
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
			var animation = aAnimation || { },
				i, len1, j, len2;

			if ( !( aAnimation.state instanceof Array ) ) {
				animation.state = [ animation.state ];
			}

			if ( !( aAnimation.direction instanceof Array ) ) {
				animation.direction = [ animation.direction ];
			}

			for ( i = 0, len1 = animation.state.length; i < len1; i++ ) {
				for ( j = 0, len2 = animation.direction.length; j < len2; j++ ) {
					if ( !this.animations[ animation.state[ i ] ] ) {
						this.animations[ animation.state[ i ] ] = { };
					}

					this.animations[ animation.state[ i ] ][ animation.direction[ j ] ] = {
						state: animation.state[ i ],
						direction: animation.direction[ j ],
						fileUrl: animation.fileUrl,
						frameWidth: animation.frameWidth,
						frameHeight: animation.frameHeight,
						frameCount: animation.frameCount,
						framePosition: {
							x: animation.framePosition.x,
							y: animation.framePosition.y
						},
						timeBetweenFrames: animation.timeBetweenFrames,
						complete: ( animation.complete ) ? animation.complete : function( ) { }
					};
				}
			}
		},

		/**
		 * Method: setAnimation
		 * @param {Object} aAnimation
		 */

		setAnimation: function( aAnimation ) {
			var animation = aAnimation || this.animations[ this.state ][ this.direction ];

			if ( this.animation != animation ) {
				this.currentImage = new Image( );
				this.currentImage.setAttribute( 'src', animation.fileUrl );

				this.animation = animation;
				this.timeSinceLastFrame = animation.timeBetweenFrames;
				this.currentFrame = -1;
			}
		},

		/**
		 * Method: cache
		 */

		cache: function( ) {
			var i, j, el;

			this._super( );

			for ( i in this.animations ) {
				for ( j in this.animations[ i ] ) {
					el = new Image( );
					el.setAttribute( 'src', this.animations[ i ][ j ].fileUrl );
				}
			}
		},

		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			this._super( aPosition );

			this.setLayer( GLOBAL.video.layers.sprite );
			this.setAnimation( );
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var now = Date.now( ),
				elapsed = now - this.lastTick,
				draw = false,
				posX, posY;

			this._super( );

			if ( this.visible == true && this.animation != null ) {
				if ( this.animation.frameCount == 1 ) {
					if ( this.currentFrame < 0 ) {
						this.currentFrame = 0;

						draw = true;
					}
				}
				else if ( elapsed >= this.animation.timeBetweenFrames ) {
					this.lastTick = now - ( elapsed % this.animation.timeBetweenFrames );

					this.currentFrame += 1;

					if ( this.currentFrame == this.animation.frameCount ) {
						this.animation.complete( );
						this.currentFrame = 0;
					}
					else {
						this.currentFrame %= this.animation.frameCount;
					}

					draw = true;
				}

				if ( draw == true ) {
					posX = this.position.x + this.animation.framePosition.x;
					posY = this.position.y + this.animation.framePosition.y;

					this.layer.bufferContext.clearRect( this.lastPosition.x, this.lastPosition.y, this.lastSize.width, this.lastSize.height );
					this.layer.bufferContext.drawImage( this.currentImage, this.animation.frameWidth * this.currentFrame, 0, this.animation.frameWidth, this.animation.frameHeight, posX, posY, this.animation.frameWidth, this.animation.frameHeight );

					this.lastPosition.x = posX;
					this.lastPosition.y = posY;

					this.lastSize.width = this.animation.frameWidth;
					this.lastSize.height = this.animation.frameHeight;
				}
			}
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			this._super( );

			this.updateState( );
			this.updatePosition( );
		}
	});

	return Sprite;
});
