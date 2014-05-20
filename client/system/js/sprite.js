
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
		moveTime: 25,
		lastMove: Date.now( ),
		lastPosition: null,
		lastSize: {
			width: 0,
			height: 0
		},
		sounds: { },

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
		 * @param {Int} aX
		 * @param {Int} aY
		 * @param {Int} aZ
		 */

		setPosition: function( aX, aY, aZ ) {
			this._super( aX, aY, aZ );

			this.lastPosition = {
				x: aX,
				y: aY,
				z: aZ
			};
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
				this.currentImage = new Image( );
				this.currentImage.setAttribute( 'src', animation.file_url );

				this.animation = animation;
				this.timeSinceLastFrame = animation.timeBetweenFrames;
				this.currentFrame = -1;
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
			if ( !this.sounds[ aSound.state ] ) {
				this.sounds[ aSound.state ] = [ ];
			}

			this.sounds[ aSound.state ].push( aSound );
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
			var i, j,
				el;

			for ( i in this.animations ) {
				for ( j in this.animations[ i ] ) {
					el = new Image( );
					el.setAttribute( 'src', this.animations[ i ][ j ].file_url );
				}
			}

			for ( i in this.sounds ) {
				for ( j in this.sounds[ i ] ) {
					el = new Audio( );
					el.setAttribute( 'src', this.sounds[ i ][ j ].file_url );
				}
			}
		},

		/**
		 * Method: move
		 * @param {Int} aX
		 * @param {Int} aY
		 * @param {Int} aZ
		 */

		move: function( aX, aY, aZ ) {
			var vX = this.velocity.x + aX,
				vY = this.velocity.y + aY,
				vZ = this.velocity.z + aZ,
				moving;

			if ( vX > 1 ) vX = 1;
			else if ( vX < -1 ) vX = -1;

			if ( vY > 1 ) vY = 1;
			else if ( vY < -1 ) vY = -1;

			if ( vZ > 1 ) vZ = 1;
			else if ( vZ < -1 ) vZ = -1;

			this.velocity.x = vX;
			this.velocity.y = vY;
			this.velocity.z = vZ;

			if ( aX < 0 && this.velocity.x != 0 && this.direction != GLOBAL.direction.left ) {
				this.setDirection( GLOBAL.direction.left );
			}
			else if ( aX > 0 && this.velocity.x != 0 && this.direction != GLOBAL.direction.right ) {
				this.setDirection( GLOBAL.direction.right );
			}
			else if ( aY < 0 && this.velocity.y != 0 && this.direction != GLOBAL.direction.up ) {
				this.setDirection( GLOBAL.direction.up );
			}
			else if ( aY > 0 && this.velocity.y != 0 && this.direction != GLOBAL.direction.down ) {
				this.setDirection( GLOBAL.direction.down );
			}
			else if ( this.velocity.x == 0 ) {
				if ( this.velocity.y > 0 && this.direction != GLOBAL.direction.down ) {
					this.setDirection( GLOBAL.direction.down );
				}
				else if ( this.velocity.y < 0 && this.direction != GLOBAL.direction.up ) {
					this.setDirection( GLOBAL.direction.up );
				}
			}
			else if ( this.velocity.y == 0 ) {
				if ( this.velocity.x > 0 && this.direction != GLOBAL.direction.right ) {
					this.setDirection( GLOBAL.direction.right );
				}
				else if ( this.velocity.x < 0 && this.direction != GLOBAL.direction.left ) {
					this.setDirection( GLOBAL.direction.left );
				}
			}
		},

		/**
		 * Method: update
		 */

		update: function( ) {
			var now = Date.now( ),
				elapsed = now - this.lastMove,
				moving = !( this.velocity.x == 0 && this.velocity.y == 0 && this.velocity.z == 0 ),
				posX, posY, posZ,
				maxX, maxY;

			if ( this.state > GLOBAL.ai.idle && elapsed >= this.moveTime ) {
				if ( moving == false ) {
					this.setState( GLOBAL.ai.idle );
				}
				else {
					this.lastMove = now - ( elapsed % this.moveTime );

					posX = this.position.x + this.velocity.x;
					posY = this.position.y + this.velocity.y;
					posZ = this.position.z + this.velocity.v;
					maxX = this.layer.width;
					maxY = this.layer.height;

					if ( this.solid == GLOBAL.solid.bbox ) {
						maxX -= this.bbox[ 0 ];
						maxY -= this.bbox[ 1 ];
					}

					if ( posX > 0 && posX < maxX ) {
						this.position.x = posX;
					}

					if ( posY > 0 && posY < maxY ) {
						this.position.y = posY;
					}

					this.position.z = posZ;
				}
			}
			else if ( this.state == GLOBAL.ai.idle && moving == true ) {
				this.setState( GLOBAL.ai.walk );
			}
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var now = Date.now( ),
				draw = false,
				elapsed;

			if ( this.animation != null ) {
				elapsed = now - this.lastTick;

				if ( this.animation.frameCount == 1 ) {
					if ( this.currentFrame == -1 ) {
						this.currentFrame = 0;

						draw = true;
					}
				}
				else if ( elapsed >= this.animation.timeBetweenFrames ) {
					this.lastTick = now - ( elapsed % this.animation.timeBetweenFrames );

					this.currentFrame += 1;
					this.currentFrame %= this.animation.frameCount;

					draw = true;
				}

				if ( draw == true ) {
					this.layer.bufferContext.clearRect( this.lastPosition.x, this.lastPosition.y, this.lastSize.width, this.lastSize.height );
					this.layer.bufferContext.drawImage( this.currentImage, this.animation.frameWidth * this.currentFrame, 0, this.animation.frameWidth, this.animation.frameHeight, this.position.x, this.position.y, this.animation.frameWidth, this.animation.frameHeight );

					this.lastPosition.x = this.position.x;
					this.lastPosition.y = this.position.y;
					this.lastPosition.z = this.position.z;

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
			this.update( );
			this.draw( );
		}
	});

	return Sprite;
});
