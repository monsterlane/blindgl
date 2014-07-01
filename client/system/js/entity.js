
define( [ 'global', 'vector', 'class' ], function( aGlobal, aVector ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: Entity
	 */

	var Entity = Object.subClass({
		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			this.system = aOptions.system;
			this.game = aOptions.game;
			this.layer = null;
			this.loading = 0;

			this.position = new aVector( );
			this.velocity = new aVector( );
			this.maxVelocity = new aVector( 1, 1 );

			this.state = GLOBAL.ai.idle;
			this.lastState = GLOBAL.ai.idle;
			this.goal = null;

			this.moving = false;
			this.moveType = GLOBAL.moveType.none;
			this.direction = GLOBAL.direction.down;

			this.solid = GLOBAL.solid.none;
			this.boundingBox = null;

			this.sounds = { };
			this.sound = null;

			this.system.verbose( 'entity->init' );
		},

		/**
		 * Method: setLayer
		 * @param {Object} aLayer
		 */

		setLayer: function( aLayer ) {
			var layer = this.system.canvas.layers[ aLayer ] || this.system.canvas.layers[ GLOBAL.video.layers.middleground ];

			this.layer = layer;

			this.game.view.entities.push( this );

			return this;
		},

		/**
		 * Method: setPosition
		 * @param {Object} aPosition
		 */

		setPosition: function( aPosition ) {
			this.position = new aVector( aPosition.x, aPosition.y );

			return this;
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

			return this;
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

			return this;
		},

		/**
		 * Method: setDirection
		 * @param {Int} aDirection
		 */

		setDirection: function( aDirection ) {
			this.direction = aDirection;

			return this;
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

			return this;
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

			return this;
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

			return this;
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

				position = new aVector( this.position.x + this.velocity.x, this.position.y + this.velocity.y );

				this.position = this.isReachable( position );
			}

			return this;
		},

		/**
		 * Method: reachedGoal
		 */

		reachedGoal: function( ) {
			this.goal = null;

			this.velocity.set({
				x: 0,
				y: 0
			});

			this.setState( GLOBAL.ai.idle );

			return this;
		},

		/**
		 * Method: isReachable
		 * @param {Object} aPosition
		 * @return {Object}
		 */

		isReachable: function( aPosition ) {
			var position = aPosition,
				boxX, boxY, tileX, tileY, reachable,
				i, len;

			if ( this.layer !== null && this.solid === GLOBAL.solid.boundingBox ) {
				for ( i = 0, len = this.boundingBox.vertices.length; i < len; i++ ) {
					boxX = this.boundingBox.vertices[ i ].x - this.boundingBox.center.x;
					boxY = this.boundingBox.vertices[ i ].y - this.boundingBox.center.y;

					if ( position.x - boxX < 0 ) {
						position.x = boxX;
					}
					else if ( position.x + boxX > this.layer.width ) {
						position.x = this.layer.width - boxX;
					}

					if ( position.y - boxY < 0 ) {
						position.y = boxY;
					}
					else if ( position.y + boxY > this.layer.height ) {
						position.y = this.layer.height - boxY;
					}

					tileX = Math.floor( ( position.x - boxX ) / 16 );
					tileY = Math.floor( ( position.y - boxY ) / 16 );

					if ( this.game.view.grid[ tileY ][ tileX ].isReachable( this ) !== true ) {
						position.x = this.position.x;
						position.y = this.position.y;
					}
				}
			}

			return position;
		},

		/**
		 * Method: isColliding
		 */

		isColliding: function( aEntity ) {
			var i, len;

			if ( this.solid === GLOBAL.solid.not || aEntity.solid === GLOBAL.solid.not ) {
				return false;
			}

			for ( i = 0, len = this.boundingBox.vertices.length; i < len; i++ ) {
				if ( this.isSeparatingAxis( aEntity, this.boundingBox.normals[ i ] ) === true ) {
					return false;
				}
			}

			for ( i = 0, len = aEntity.boundingBox.vertices.length; i < len; i++ ) {
				if ( this.isSeparatingAxis( aEntity, aEntity.boundingBox.normals[ i ] ) === true ) {
					return false;
				}
			}

			return true;
		},

		/**
		 * Method: isSeparatingAxis
		 * @param {Object} aEntity
		 * @param {Vector} aAxis
		 */

		isSeparatingAxis: function( aEntity, aAxis ) {
			var offset, projected,
				rangeA, rangeB;

			offset = aEntity.position.clone( ).subtract( this.position );
			projected = offset.dot( aAxis );

			rangeA = this.boundingBox.flattenVerticesOn( aAxis );
			rangeB = aEntity.boundingBox.flattenVerticesOn( aAxis );

			rangeB[ 0 ] += projected;
			rangeB[ 1 ] += projected;

			if ( rangeA[ 0 ] > rangeB[ 1 ] || rangeB[ 0 ] > rangeA[ 1 ] ) {
				return true;
			}

			return false;
		},

		/**
		 * Method: addSounds
		 */

		addSounds: function( ) {
			return this;
		},

		/**
		 * Method: addSound
		 * @param {Object} aSound
		 */

		addSound: function( aSound ) {
			var len;

			if ( !this.sounds[ aSound.state ] ) {
				this.sounds[ aSound.state ] = [ ];
			}

			len = this.sounds[ aSound.state ].push( aSound );

			return this.sounds[ aSound.state ][ len - 1 ];
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

			return this;
		},

		/**
		 * Method: loaded
		 */

		loaded: function( ) {
			return this;
		},

		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			var position = aPosition || new aVector( );

			this.setPosition( position );
			this.load( );

			return this;
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			return this;
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			return this;
		},

		/**
		 * Method: updatePosition
		 */

		updatePosition: function( ) {
			if ( this.goal !== null ) {
				this.moveToGoal( );
			}

			return this;
		}
	});

	return Entity;
});
