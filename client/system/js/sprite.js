
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
		speed: {
			idle: 0,
			walk: 1,
			run: 2
		},
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
		 * @param {Int} aX
		 * @param {Int} aY
		 */

		setPosition: function( aX, aY ) {
			this._super( aX, aY );

			this.lastPosition = {
				x: aX,
				y: aY
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
						timeBetweenFrames: animation.timeBetweenFrames
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
		 * Method: move
		 * @param {Int} aX
		 * @param {Int} aY
		 */

		move: function( aX, aY ) {
			var vX = this.velocity.x + aX,
				vY = this.velocity.y + aY;

			if ( vX > 1 ) vX = 1;
			else if ( vX < -1 ) vX = -1;

			if ( vY > 1 ) vY = 1;
			else if ( vY < -1 ) vY = -1;

			this.velocity.x = vX;
			this.velocity.y = vY;

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
		 * Method: updateState
		 */

		updateState: function( ) {
			this._super( );

			if ( this.state > GLOBAL.ai.idle && this.state != GLOBAL.ai.attack && this.moving == false ) {
				this.setState( GLOBAL.ai.idle );
			}
			else if ( this.state == GLOBAL.ai.idle && this.moving == true ) {
				this.setState( GLOBAL.ai.walk );
			}
		},

		/**
		 * Method: updatePosition
		 */

		updatePosition: function( ) {
			var posX = this.position.x + parseInt( this.velocity.x * this.speed.walk, 10 ),
				posY = this.position.y + parseInt( this.velocity.y * this.speed.walk, 10 ),
				maxX = this.layer.width,
				maxY = this.layer.height;

			if ( this.solid == GLOBAL.solid.bbox ) {
				maxX -= this.bbox[ 0 ];
				maxY -= this.bbox[ 1 ];
			}

			if ( posX < 0 ) {
				this.position.x = 0;
			}
			else if ( this.position.x > maxX ) {
				this.position.x = maxX;
			}
			else {
				this.position.x = posX;
			}

			if ( posY < 0 ) {
				this.position.y = 0;
			}
			else if ( this.position.y > maxY ) {
				this.position.y = maxY;
			}
			else {
				this.position.y = posY;
			}

			if ( this.position.x < 0 || this.position.y < 0 || this.position.x > maxX || this.position.y > maxY ) {
				this.visible = false;
			}
			else {
				this.visible = true;
			}
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

					if ( this.currentFrame == this.animation.frameCount && this.state == GLOBAL.ai.attack ) {
						this.setState( this.lastState );
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
