
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Entity
	 */

	var Entity = Class.extend({
		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			this.system = aOptions.system;
			this.game = aOptions.game;
			this.layer = null;

			this.loading = 0,

			this.position = {
				x: 0,
				y: 0
			};

			this.velocity = {
				x: 0,
				y: 0
			};

			this.maxVelocity = {
				x: 1,
				y: 1
			};

			this.goal = null;
			this.state = GLOBAL.ai.idle;
			this.lastState = GLOBAL.ai.idle;
			this.moveType = GLOBAL.moveType.none;
			this.moving = false;
			this.direction = GLOBAL.direction.down;
			this.solid = GLOBAL.solid.none;
			this.bbox = [ 0, 0 ];
			this.sounds = { };
			this.sound = null;

			this.system.verbose( 'entity->init' );
		},

		/**
		 * Method: setLayer
		 * @param {Object} aLayer
		 */

		setLayer: function( aLayer ) {
			var layer = this.system.canvas.layers[ aLayer ] || this.system.canvas.layers[ GLOBAL.layer.middleground ];

			this.layer = layer;

			this.game.view.entities.push( this );
		},

		/**
		 * Method: setPosition
		 * @param {Object} aPosition
		 */

		setPosition: function( aPosition ) {
			var position = aPosition || { x: 0, y: 0 };

			this.position.x = position.x;
			this.position.y = position.y;
		},

		/**
		 * Method: setState
		 * @param {Int} aState
		 * @param {Object} aOptions
		 */

		setState: function( aState, aOptions ) {
			var options = aOptions || { };

			if ( this.lastState != this.state ) {
				this.lastState = this.state;
			}

			if ( this.state != aState ) {
				this.state = aState;
			}
		},

		/**
		 * Method: updateState
		 */

		updateState: function( ) {
			this.moving = !( this.velocity.x == 0 && this.velocity.y == 0 );

			if ( this.position.x < 0 || this.position.y < 0 || this.position.x > this.layer.width || this.position.y > this.layer.height ) {
				this.visible = false;
			}
			else {
				this.visible = true;
			}
		},

		/**
		 * Method: setDirection
		 * @param {Int} aDirection
		 */

		setDirection: function( aDirection ) {
			this.direction = aDirection;
		},

		/**
		 * Method: move
		 * @param {Object} aVelocity
		 */

		move: function( aVelocity ) {
			var velocity = {
					x: ( aVelocity.hasOwnProperty( 'x' ) ) ? aVelocity.x : null,
					y: ( aVelocity.hasOwnProperty( 'y' ) ) ? aVelocity.y : null
				},
				vX, vY;

			if ( velocity.x != null ) {
				vX = this.velocity.x + velocity.x;

				if ( vX > this.maxVelocity.x ) {
					vX = this.maxVelocity.x;
				}
				else if ( vX < -( this.maxVelocity.x ) ) {
					vX = -( this.maxVelocity.x );
				}

				this.velocity.x = vX;
			}

			if ( velocity.y != null ) {
				vY = this.velocity.y + velocity.y;

				if ( vY > this.maxVelocity.y ) {
					vY = this.maxVelocity.y;
				}
				else if ( vY < -( this.maxVelocity.y ) ) {
					vY = -( this.maxVelocity.y );
				}

				this.velocity.y = vY;
			}
		},

		/**
		 * Method: setGoal
		 * @param {Mixed} aGoal
		 */

		setGoal: function( aGoal ) {
			var goal = aGoal || null;

			if ( goal !== null && typeof goal === 'object' && goal != this.goal ) {
				this.goal = goal;

				this.setState( GLOBAL.ai.walk );
				this.moveToGoal( );
			}
		},

		/**
		 * Method: faceGoal
		 */

		faceGoal: function( ) {
			if ( this.goal.y < this.position.y ) {
				this.setDirection( GLOBAL.direction.up );
			}
			else if ( this.goal.y > this.position.y ) {
				this.setDirection( GLOBAL.direction.down );
			}
			else if ( this.goal.x < this.position.x ) {
				this.setDirection( GLOBAL.direction.left );
			}
			else {
				this.setDirection( GLOBAL.direction.right );
			}
		},

		/**
		 * Method: moveToGoal
		 */

		moveToGoal: function( ) {
			var posX, posY;

			if ( Math.round( this.position.x ) == this.goal.x && Math.round( this.position.y ) == this.goal.y ) {
				this.reachedGoal( );
			}
			else {
				this.faceGoal( );

				if ( this.position.x + this.maxVelocity.x < this.goal.x ) {
					this.velocity.x = this.maxVelocity.x;
				}
				else if ( this.position.x - this.maxVelocity.x > this.goal.x ) {
					this.velocity.x = -( this.maxVelocity.x );
				}
				else {
					this.velocity.x = 0;
				}

				if ( this.position.y + this.maxVelocity.y < this.goal.y ) {
					this.velocity.y = this.maxVelocity.y;
				}
				else if ( this.position.y - this.maxVelocity.y > this.goal.y ) {
					this.velocity.y = -( this.maxVelocity.y );
				}
				else {
					this.velocity.y = 0;
				}

				posX = this.position.x + this.velocity.x;
				posY = this.position.y + this.velocity.y;

				this.position = this.isReachable({
					x: posX,
					y: posY
				});
			}
		},

		/**
		 * Method: reachedGoal
		 */

		reachedGoal: function( ) {
			this.goal = null;

			this.velocity.x = 0;
			this.velocity.y = 0;

			this.setState( GLOBAL.ai.idle );
		},

		/**
		 * Method: isReachable
		 * @param {Object} aPosition
		 * @return {Object}
		 */

		isReachable: function( aPosition ) {
			var maxX = this.layer.width;
				maxY = this.layer.height,
				posX = aPosition.x,
				posY = aPosition.y;

			if ( this.solid == GLOBAL.solid.none ) {
				return {
					x: posX,
					y: posY
				};
			}

			if ( this.solid == GLOBAL.solid.bbox ) {
				maxX -= this.bbox[ 0 ];
				maxY -= this.bbox[ 1 ];
			}

			if ( posX < 0 ) {
				posX = 0;
			}
			else if ( posX > maxX ) {
				posX = maxX;
			}

			if ( posY < 0 ) {
				posY = 0;
			}
			else if ( posY > maxY ) {
				posY = maxY;
			}

			return {
				x: posX,
				y: posY
			};
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
		 * Method: load
		 */

		load: function( ) {
			var i, j, el,
				self = this;

			for ( i in this.sounds ) {
				for ( j in this.sounds[ i ] ) {
					el = new Audio( );
					el.setAttribute( 'src', this.sounds[ i ][ j ].fileUrl );

					el.addEventListener( 'loadedmetadata', function( ) {
						self.loading -= 1;
						self.loaded( );
					}, true );

					this.loading += 1;
				}
			}
		},

		/**
		 * Method: loaded
		 */

		loaded: function( ) {

		},

		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			var position = aPosition || { x: 0, y: 0 };

			this.setPosition( position );
			this.load( );
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {

		},

		/**
		 * Method: think
		 */

		think: function( ) {

		},

		/**
		 * Method: updatePosition
		 */

		updatePosition: function( ) {
			if ( this.goal != null ) {
				this.moveToGoal( );
			}
		}
	});

	return Entity;
});
