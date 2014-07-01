
define( [ 'global', 'vector', 'polygon', 'image', 'class' ], function( aGlobal, aVector, aPolygon, aImage ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: cell
	 */

	var Cell = Object.subClass({
		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			var options = aOptions || {
					row: 0,
					index: 0
				};

			this.system = options.system;
			this.game = options.game;

			this.position = new aVector( ( options.index * 16 ) + 8, ( options.row * 16 ) + 8 );
			this.layer = this.system.canvas.layers[ GLOBAL.video.layers.middleground ];
			this.boundingBox = null;
			this.dirty = true;

			this.friction = [ 1, 1 ];
			this.interactions = [ ];

			if ( options.collide === 'none' ) {
				this.solid = GLOBAL.solid.not;
				this.dirty = false;
			}
			else if ( options.collide === 'angleTopRight' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.x -= 3;
				this.position.y += 3;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 0, 16 )
				]);

				this.boundingBox.rotate( 270 * GLOBAL.convert.degreesToRadians );
			}
			else if ( options.collide === 'angleTopLeft' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.x += 3;
				this.position.y += 3;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 0, 16 )
				]);

				this.boundingBox.rotate( 180 * GLOBAL.convert.degreesToRadians );
			}
			else if ( options.collide === 'angleBottomRight' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.x -= 3;
				this.position.y -= 3;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 0, 16 )
				]);
			}
			else if ( options.collide === 'angleBottomLeft' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.x += 3;
				this.position.y -= 3;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 0, 16 )
				]);

				this.boundingBox.rotate( 90 * GLOBAL.convert.degreesToRadians );
			}
			else if ( options.collide === 'topHalfOpen' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.x += 4;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 16, 8 ),
					new aVector( 0, 8 )
				]);
			}
			else if ( options.collide === 'bottomHalfOpen' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.y -= 4;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 16, 8 ),
					new aVector( 0, 8 )
				]);
			}
			else if ( options.collide === 'rightHalfOpen' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.x -= 4;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 8, 0 ),
					new aVector( 8, 16 ),
					new aVector( 0, 16 )
				]);
			}
			else if ( options.collide === 'leftHalfOpen' ) {
				this.solid = GLOBAL.solid.boundingBox;

				this.position.x += 4;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 16, 8 ),
					new aVector( 0, 8 )
				]);
			}
			else {
				this.solid = GLOBAL.solid.bsp;

				this.boundingBox = new aPolygon([
					new aVector( 0, 0 ),
					new aVector( 16, 0 ),
					new aVector( 16, 16 ),
					new aVector( 0, 16 )
				]);
			}

			this.game.view.entities.push( this );
		},

		/**
		 * Method: isReachable
		 * @param {Object} aEntity
		 */

		isReachable: function( aEntity ) {
			var reachable = false;

			if ( this.solid === GLOBAL.solid.not ) {
				reachable = true;
			}
			else if ( this.solid === GLOBAL.solid.boundingBox && aEntity.isColliding( this ) === true ) {
				reachable = false;
			}

			if ( reachable === true ) {
				this.touch( aEntity );
			}

			return reachable;
		},

		/**
		 * Method: flattenVerticesOn
		 * @param {Vector} aNormal
		 */

		flattenVerticesOn: function( aNormal ) {
			var min = Number.MAX_VALUE,
				max = -( Number.MAX_VALUE ),
				dot, result,
				i, len;

			for ( i = 0, len = this.boundingBox.vertices.length; i < len; i++ ) {
				dot = this.boundingBox.vertices[ i ].dot( aNormal );

				if ( dot < min ) { min = dot; }
				if ( dot > max ) { max = dot; }
			}

			result = [ min, max ];

			return result;
		},

		/**
		 * Method: touch
		 * @param {Object} aEntity
		 */

		touch: function( aEntity ) {
			return this;
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			return this;
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var position,
				i, len;

			if ( this.dirty === true ) {
				if ( this.solid === GLOBAL.solid.boundingBox || this.solid === GLOBAL.solid.bsp ) {
					position = this.boundingBox.getCenter( );
					position.x = this.position.x - position.x;
					position.y = this.position.y - position.y;

					this.layer.bufferContext.save( );
					this.layer.bufferContext.translate( position.x, position.y );

					this.layer.bufferContext.globalAlpha = 0.5;
					this.layer.bufferContext.fillStyle = 'yellow';
					this.layer.bufferContext.beginPath( );
					this.layer.bufferContext.moveTo( this.boundingBox.vertices[ 0 ].x, this.boundingBox.vertices[ 0 ].y );

					for ( i = 1, len = this.boundingBox.vertices.length; i < len; i++ ) {
						this.layer.bufferContext.lineTo( this.boundingBox.vertices[ i ].x, this.boundingBox.vertices[ i ].y );
					}

					this.layer.bufferContext.closePath( );
					this.layer.bufferContext.fill( );

					this.layer.bufferContext.globalAlpha = 1;
					this.layer.bufferContext.restore( );
				}

				this.dirty = false;
			}

			return this;
		}
	});

	/**
	 * Class: World
	 */

	var Tile = Object.subClass({
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

			return this;
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

			return this;
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

			return this;
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

			return this;
		},

		/**
		 * Method: loadEntities
		 * @param {Array} aEntities
		 */

		loadEntities: function( aEntities ) {
			this.entities = aEntities;

			return this;
		}
	});

	return Tile;
});
