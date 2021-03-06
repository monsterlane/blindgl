
define( [ 'global', 'entity', 'vector', 'class' ], function( aGlobal, aEntity, aVector ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: Sprite
	 */

	var Sprite = aEntity.subClass({
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

			this.lastPosition = new aVector( );

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
			this.lastPosition = this.position.clone( );

			this._super( aPosition );

			return this;
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

			return this;
		},

		/**
		 * Method: setDirection
		 * @param {Int} aDirection
		 */

		setDirection: function( aDirection ) {
			this._super( aDirection );

			this.setAnimation( );

			return this;
		},

		/**
		 * Method: addAnimations
		 */

		addAnimations: function( ) {
			return this;
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

			return this;
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

			return this;
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
								this.loading += 1;

								el = document.createElement( 'img' );
								el.setAttribute( 'src', this.animations[ i ][ j ].fileUrl );

								el.addEventListener( 'load', function( ) {
									self.loading -= 1;
									self.loaded( );
								}, true );
							}
						}
					}
				}
			}

			return this;
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

			return this;
		},

		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			this._super( aPosition );

			this.load( );

			return this;
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var now = Date.now( ),
				elapsed = now - this.lastTick,
				draw = false,
				posX, posY,
				i, len;

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
					this.layer.bufferContext.save( );
					this.layer.bufferContext.clearRect( this.lastPosition.x, this.lastPosition.y, this.lastSize.width, this.lastSize.height );

					posX = Math.round( this.position.x - this.boundingBox.center.x );
					posY = Math.round( this.position.y - this.boundingBox.center.y );

					this.layer.bufferContext.globalAlpha = 0.5;
					this.layer.bufferContext.fillStyle = 'yellow';
					this.layer.bufferContext.beginPath( );
					this.layer.bufferContext.moveTo( posX + this.boundingBox.vertices[ 0 ].x, posY + this.boundingBox.vertices[ 0 ].y );

					for ( i = 1, len = this.boundingBox.vertices.length; i < len; i++ ) {
						this.layer.bufferContext.lineTo( posX + this.boundingBox.vertices[ i ].x, posY + this.boundingBox.vertices[ i ].y );
					}

					this.layer.bufferContext.closePath( );
					this.layer.bufferContext.fill( );

					posX = Math.round( this.position.x - ( this.animation.frameWidth * 0.5 ) + this.animation.framePosition.x );
					posY = Math.round( this.position.y - this.animation.frameHeight + this.boundingBox.center.y + this.animation.framePosition.y );

					this.layer.bufferContext.globalAlpha = 1;
					this.layer.bufferContext.drawImage( this.currentImage, this.animation.frameWidth * this.currentFrame, 0, this.animation.frameWidth, this.animation.frameHeight, posX, posY, this.animation.frameWidth, this.animation.frameHeight );
					this.layer.bufferContext.restore( );

					this.lastPosition.x = posX;
					this.lastPosition.y = posY;

					this.lastSize.width = this.animation.frameWidth;
					this.lastSize.height = this.animation.frameHeight;
				}
			}

			return this;
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			this._super( );

			this.updateState( );
			this.updatePosition( );

			return this;
		}
	});

	return Sprite;
});
