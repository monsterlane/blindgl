
define( [ 'global', 'vector', 'image', 'class' ], function( aGlobal, aVector, aImage ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Constants
	 */

	function collideNone( aEntity ) {
		return true;
	}

	function collideWall( aEntity ) {
		return false;
	}

	/**
	 * Class: cell
	 */

	var Cell = Class.extend({
		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			var pi180 = Math.PI / 180,
				options = aOptions || {
				row: 0,
				index: 0,
				collide: 'none',
				effect: null
			};

			this.system = options.system;
			this.game = options.game;
			this.collide = options.collide;

			this.position = new aVector({
				x: ( options.index * 16 ) + 8,
				y: ( options.row * 16 ) + 8
			});

			this.angle = 0;
			this.axes = [ ];
			this.axes[ 0 ] = new aVector( 1, 0 );
			this.axes[ 1 ] = new aVector( 0, -1 );

			this.bbox = [ 16, 16 ];
			this.friction = [ 1, 1 ];
			this.interactions = [ ];
			this.dirty = true;

			if ( options.collide === 'none' ) {
				this.isReachable = collideNone;
			}
			else if ( options.collide === 'angleTopRight' ) {
				this.bbox = [ 23, 2 ];

				this.axes[ 0 ].setAngle( 45 * pi180 );
				this.axes[ 1 ].setAngle( 45 * pi180 );
			}
			else if ( options.collide === 'angleTopLeft' ) {
				this.bbox = [ 23, 2 ];

				this.axes[ 0 ].setAngle( 135 * pi180 );
				this.axes[ 1 ].setAngle( 135 * pi180 );
			}
			else if ( options.collide === 'angleBottomRight' ) {
				this.bbox = [ 23, 2 ];

				this.axes[ 0 ].setAngle( 135 * pi180 );
				this.axes[ 1 ].setAngle( 135 * pi180 );
			}
			else if ( options.collide === 'angleBottomLeft' ) {
				this.bbox = [ 23, 2 ];

				this.axes[ 0 ].setAngle( 45 * pi180 );
				this.axes[ 1 ].setAngle( 45 * pi180 );
			}
			else if ( options.collide === 'topHalfOpen' ) {
				this.bbox = [ 16, 8 ];

				this.position.add({ x: 0, y: 8 });
			}
			else if ( options.collide === 'bottomHalfOpen' ) {
				this.bbox = [ 16, 8 ];
			}
			else if ( options.collide === 'rightHalfOpen' ) {
				this.bbox = [ 8, 16 ];
			}
			else if ( options.collide === 'leftHalfOpen' ) {
				this.bbox = [ 8, 16 ];

				this.position.add({ x: 8, y: 0 });
			}
			else {
				this.isReachable = collideWall;
			}

			this.game.view.entities.push( this );
		},

		/**
		 * Method: isReachable
		 * @param {Object} aEntity
		 */

		isReachable: function( aEntity ) {
			var collision = aEntity.isColliding( this );

			if ( collision === false ) {
				this.touch( aEntity );

				return true;
			}

			return false;
		},

		/**
		 * Method: touch
		 * @param {Object} aEntity
		 */

		touch: function( aEntity ) {
			//
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			//
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var layer, boxX, boxY;

			if ( this.dirty === true ) {
				if ( this.collide !== 'none' ) {
					layer = this.system.canvas.layers[ GLOBAL.video.layers.middleground ];

					boxX = Math.floor( this.bbox[ 0 ] * 0.5 );
					boxY = Math.floor( this.bbox[ 1 ] * 0.5 );

					layer.bufferContext.save( );

					layer.bufferContext.translate( this.position.x, this.position.y );
					layer.bufferContext.rotate( this.axes[ 0 ].angle( ) );
					layer.bufferContext.clearRect( -( boxX ), -( boxY ), this.bbox[ 0 ], this.bbox[ 1 ] );

					layer.bufferContext.globalAlpha = 0.5;
					layer.bufferContext.fillStyle = 'yellow';
					layer.bufferContext.fillRect( -( boxX ), -( boxY ), this.bbox[ 0 ], this.bbox[ 1 ] );
					layer.bufferContext.globalAlpha = 1;

					layer.bufferContext.restore( );
				}

				this.dirty = false;
			}
		}
	});

	/**
	 * Class: World
	 */

	var Tile = Class.extend({
		/**
		 * Method: init
	 	 * @param {Object} aSystem
	 	 * @param {Object} aGame
	 	 * @param {Object} aView
		 */

		init: function( aSystem, aGame ) {
			this.system = aSystem;
			this.game = aGame;

			this.grid = [ ];
			this.background = null;
			this.foreground = null;
			this.entities = [ ];

			this.spawn = new aVector( );
		},

		/**
		 * Method: load
		 * @param {Object} aTile
		 */

		load: function( aTile ) {
			var tile = aTile || { };

			if ( tile.hasOwnProperty( 'background' ) === true ) {
				this.loadBackground( tile.background );
			}

			if ( tile.hasOwnProperty( 'foreground' ) === true ) {
				this.loadForeground( tile.foreground );
			}

			if ( tile.hasOwnProperty( 'grid' ) === true ) {
				this.loadGrid( tile.grid );
			}

			if ( tile.hasOwnProperty( 'entities' ) === true ) {
				this.loadEntities( tile.entities );
			}

			if ( tile.hasOwnProperty( 'spawn' ) === true ) {
				this.spawn = tile.spawn;
			}
		},

		/**
		 * Method: loadBackground
		 * @param {Object} aElement
		 */

		loadBackground: function( aElement ) {
			this.background = new aImage({
				system: this.system,
				game: this.game,
				element: aElement
			});

			this.background.setLayer( GLOBAL.video.layers.background );
			this.background.spawn( );
		},

		/**
		 * Method: loadForeground
		 * @param {Object} aElement
		 */

		loadForeground: function( aElement ) {
			this.foreground = new aImage({
				system: this.system,
				game: this.game,
				element: aElement
			});

			this.foreground.setLayer( GLOBAL.video.layers.foreground );
			this.foreground.spawn( );
		},

		/**
		 * Method: loadGrid
		 * @param {Object} aGrid
		 */

		loadGrid: function( aGrid ) {
			var cell, i, len1, j, len2;

			this.grid = aGrid;

			for ( i = 0, len1 = this.grid.length; i < len1; i++ ) {
				for ( j = 0, len2 = this.grid[ i ].length; j < len2; j++ ) {
					cell = this.grid[ i ][ j ];

					cell.system = this.system;
					cell.game = this.game;
					cell.row = i;
					cell.index = j;

					this.grid[ i ][ j ] = new Cell( cell );
				}
			}
		},

		/**
		 * Method: loadEntities
		 * @param {Array} aEntities
		 */

		loadEntities: function( aEntities ) {
			this.entities = aEntities;
		}
	});

	return Tile;
});
