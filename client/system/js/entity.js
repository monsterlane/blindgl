
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Entity
	 */

	var Entity = Class.extend({
		system: null,
		game: null,
		layer: null,
		position: {
			x: 0,
			y: 0
		},
		velocity: {
			x: 0,
			y: 0
		},
		goal: null,
		state: GLOBAL.ai.idle,
		lastState: GLOBAL.ai.idle,
		moveType: GLOBAL.moveType.none,
		moving: false,
		direction: GLOBAL.direction.down,
		solid: GLOBAL.solid.none,
		bbox: [ 0, 0 ],
		sounds: { },
		sound: null,

		/**
		 * Method: init
		 * @param {Object} aSystem
		 * @param {Object} aGame
		 */

		init: function( aSystem, aGame ) {
			this.system = aSystem;
			this.game = aGame;

			this.system.verbose( 'entity->init' );
		},

		/**
		 * Method: setLayer
		 * @param {Object} aLayer
		 */

		setLayer: function( aLayer ) {
			this.layer = aLayer;
			this.game.entities.push( this );
		},

		/**
		 * Method: setPosition
		 * @param {Int} aX
		 * @param {Int} aY
		 */

		setPosition: function( aX, aY ) {
			this.position.x = aX;
			this.position.y = aY;
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
		 * Method: setGoal
		 * @param {Mixed} aGoal
		 */

		setGoal: function( aGoal ) {
			var goal = aGoal || null;

			if ( goal !== null && typeof goal === 'object' ) {
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
			if ( this.position.x == this.goal.x && this.position.y == this.goal.y ) {
				this.reachedGoal( );
			}
			else {
				this.faceGoal( );

				if ( this.position.x < this.goal.x ) {
					this.velocity.x = 1;
				}
				else if ( this.position.x > this.goal.x ) {
					this.velocity.x = -1;
				}
				else {
					this.velocity.x = 0;
				}

				if ( this.position.y < this.goal.y ) {
					this.velocity.y = 1;
				}
				else if ( this.position.y > this.goal.y ) {
					this.velocity.y = -1;
				}
				else {
					this.velocity.y = 0;
				}

				posX = this.position.x + Math.round( this.velocity.x );
				posY = this.position.y + Math.round( this.velocity.y );

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
		},

		/**
		 * Method: isReachable
		 * @param {Object} aPosition
		 */

		isReachable: function( aPosition ) {
			var maxX = this.layer.width;
				maxY = this.layer.height,
				posX = aPosition.x,
				posY = aPosition.y;

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

		cache: function( ) {
			var i, j, el;

			for ( i in this.sounds ) {
				for ( j in this.sounds[ i ] ) {
					el = new Audio( );
					el.setAttribute( 'src', this.sounds[ i ][ j ].fileUrl );
				}
			}
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {

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
