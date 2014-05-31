
define( [ 'global', 'entity', 'class' ], function( aGlobal, aEntity ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Class: Sprite
	 */

	var Sprite = aEntity.extend({
		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			this._super( aOptions );

			this.animation = null;
			this.animations = { };
			this.currentImage = null;
			this.currentFrame = -1;
			this.lastTick = Date.now( );
			this.visible = false;

			this.lastPosition = {
				x: 0,
				y: 0
			};

			this.lastSize = {
				width: 0,
				height: 0
			};

			this.addAnimations( );
			this.addSounds( );
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
						complete: animation.complete || function( ) { }
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

			if ( this.animation !== animation ) {
				this.currentImage = document.createElement( 'img' );
				this.currentImage.setAttribute( 'src', animation.fileUrl );

				this.animation = animation;
				this.timeSinceLastFrame = animation.timeBetweenFrames;
				this.currentFrame = -1;
			}
		},

		/**
		 * Method: load
		 */

		load: function( ) {
			var i, j, el,
				self = this;

			if ( !this.loading ) {
				this._super( );

				for ( i in this.animations ) {
					if ( this.animations.hasOwnProperty( i ) === true ) {
						for ( j in this.animations[ i ] ) {
							if ( this.animations[ i ].hasOwnProperty( j ) === true ) {
								el = document.createElement( 'img' );
								el.setAttribute( 'src', this.animations[ i ][ j ].fileUrl );

								el.addEventListener( 'load', function( ) {
									self.loading -= 1;
									self.loaded( );
								}, true );

								this.loading += 1;
							}
						}
					}
				}
			}
		},

		/**
		 * Method: loaded
		 */

		loaded: function( ) {
			this._super( );

			if ( this.loading === 0 ) {
				this.setLayer( GLOBAL.video.layers.middleground );
				this.setAnimation( );
			}
		},

		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			this._super( aPosition );

			this.load( );
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

			if ( this.visible === true && this.animation !== null ) {
				if ( this.animation.frameCount === 1 ) {
					if ( this.currentFrame < 0 ) {
						this.currentFrame = 0;

						draw = true;
					}
				}
				else if ( elapsed >= this.animation.timeBetweenFrames ) {
					this.lastTick = now - ( elapsed % this.animation.timeBetweenFrames );

					this.currentFrame += 1;

					if ( this.currentFrame === this.animation.frameCount ) {
						this.animation.complete( );
						this.currentFrame = 0;
					}
					else {
						this.currentFrame %= this.animation.frameCount;
					}

					draw = true;
				}

				if ( draw === true ) {
					posX = Math.round( this.position.x + this.animation.framePosition.x );
					posY = Math.round( this.position.y + this.animation.framePosition.y );

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
