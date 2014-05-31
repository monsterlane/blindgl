
define( [ 'global', 'class' ], function( aGlobal ) {
	'use strict';

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

			this.loading = 0;

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

			if ( this.lastState !== this.state ) {
				this.lastState = this.state;
			}

			if ( this.state !== aState ) {
				this.state = aState;
			}
		},

		/**
		 * Method: updateState
		 */

		updateState: function( ) {
			this.moving = !( this.velocity.x === 0 && this.velocity.y === 0 );

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
					x: ( aVelocity.hasOwnProperty( 'x' ) === true ) ? aVelocity.x : null,
					y: ( aVelocity.hasOwnProperty( 'y' ) === true ) ? aVelocity.y : null
				},
				vX, vY;

			if ( velocity.x !== null ) {
				vX = this.velocity.x + velocity.x;

				if ( vX > this.maxVelocity.x ) {
					vX = this.maxVelocity.x;
				}
				else if ( vX < -( this.maxVelocity.x ) ) {
					vX = -( this.maxVelocity.x );
				}

				this.velocity.x = vX;
			}

			if ( velocity.y !== null ) {
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

			if ( goal !== null && typeof goal === 'object' && goal !== this.goal ) {
				this.goal = goal;

				this.setState( GLOBAL.ai.walk );
				this.moveToGoal( );
			}
		},

		/**
		 * Method: faceGoal
		 */

		faceGoal: function( ) {
			if ( this.velocity.y < 0 ) {
				this.setDirection( GLOBAL.direction.up );
			}
			else if ( this.velocity.y > 0 ) {
				this.setDirection( GLOBAL.direction.down );
			}
			else if ( this.velocity.x < 0 ) {
				this.setDirection( GLOBAL.direction.left );
			}
			else if ( this.velocity.x > 0 ) {
				this.setDirection( GLOBAL.direction.right );
			}
			else {
				this.setDirection( GLOBAL.direction.down );
			}
		},

		/**
		 * Method: moveToGoal
		 */

		moveToGoal: function( ) {
			var position;

			if ( Math.round( this.position.x ) === this.goal.x && Math.round( this.position.y ) === this.goal.y ) {
				this.reachedGoal( );
			}
			else {
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

				this.faceGoal( );

				position = {
					x: this.position.x + this.velocity.x,
					y: this.position.y + this.velocity.y
				};

				this.position = this.isReachable( position );
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
			var position = aPosition,
				tileX, tileY,
				tilePosition;

			if ( this.layer !== null && this.solid === GLOBAL.solid.bbox ) {
				if ( position.x < 0 ) {
					position.x = 0;
				}
				else if ( position.x + this.bbox[ 0 ] > this.layer.width ) {
					position.x = this.layer.width - this.bbox[ 0 ];
				}

				if ( position.y < 0 ) {
					position.y = 0;
				}
				else if ( position.y + this.bbox[ 1 ] > this.layer.height ) {
					position.y = this.layer.height - this.bbox[ 1 ];
				}

				tilePosition = { };

				tileX = Math.floor( position.x / 16 );
				tileY = Math.floor( position.y / 16 );

				tilePosition.x = Math.round( position.x - ( tileX * 16 ) );
				tilePosition.y = Math.round( position.y - ( tileY * 16 ) );

				if ( !this.game.view.grid[ tileY ][ tileX ] || this.game.view.grid[ tileY ][ tileX ].isReachable( tilePosition ) === false ) {
					position = this.position;
				}

				tileX = Math.floor( ( position.x + this.bbox[ 0 ] ) / 16 );
				tileY = Math.floor( position.y / 16 );

				tilePosition.x = Math.round( position.x + this.bbox[ 0 ] - ( tileX * 16 ) );
				tilePosition.y = Math.round( position.y - ( tileY * 16 ) );

				if ( !this.game.view.grid[ tileY ][ tileX ] || this.game.view.grid[ tileY ][ tileX ].isReachable( tilePosition ) === false ) {
					position = this.position;
				}

				tileX = Math.floor( ( position.x + this.bbox[ 0 ] ) / 16 );
				tileY = Math.floor( ( position.y + this.bbox[ 1 ] ) / 16 );

				tilePosition.x = Math.round( position.x + this.bbox[ 0 ] - ( tileX * 16 ) );
				tilePosition.y = Math.round( position.y + this.bbox[ 1 ] - ( tileY * 16 ) );

				if ( !this.game.view.grid[ tileY ][ tileX ] || this.game.view.grid[ tileY ][ tileX ].isReachable( tilePosition ) === false ) {
					position = this.position;
				}

				tileX = Math.floor( position.x / 16 );
				tileY = Math.floor( ( position.y + this.bbox[ 1 ] ) / 16 );

				tilePosition.x = Math.round( position.x - ( tileX * 16 ) );
				tilePosition.y = Math.round( position.y + this.bbox[ 1 ] - ( tileY * 16 ) );

				if ( !this.game.view.grid[ tileY ][ tileX ] || this.game.view.grid[ tileY ][ tileX ].isReachable( tilePosition ) === false ) {
					position = this.position;
				}

				return position;
			}

			return position;
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
				if ( this.sounds.hasOwnProperty( i ) === true ) {
					for ( j in this.sounds[ i ] ) {
						if ( this.sounds[ i ].hasOwnProperty( j ) === true ) {
							el = new Audio( );
							el.setAttribute( 'src', this.sounds[ i ][ j ].fileUrl );

							el.addEventListener( 'loadedmetadata', function( ) {
								self.loading -= 1;
								self.loaded( );
							}, true );

							this.loading += 1;
						}
					}
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
			if ( this.goal !== null ) {
				this.moveToGoal( );
			}
		}
	});

	return Entity;
});
