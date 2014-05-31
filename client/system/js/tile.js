
define( [ 'global', 'image', 'class' ], function( aGlobal, aImage ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Constants
	 */

	var ANGLE_TOP_LEFT = [
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ]
	];

	var ANGLE_TOP_RIGHT = [
		[ false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ]
	];

	var ANGLE_BOTTOM_LEFT = [
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false ]
	];

	var ANGLE_BOTTOM_RIGHT = [
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ]
	];

	function collideNone( aPosition ) {
		return true;
	}

	function collideWall( aPosition ) {
		return false;
	}

	function collideAngleTopLeft( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return ANGLE_TOP_LEFT[ y ][ x ];
	}

	function collideAngleTopRight( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return ANGLE_TOP_RIGHT[ y ][ x ];
	}

	function collideAngleBottomLeft( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return ANGLE_BOTTOM_LEFT[ y ][ x ];
	}

	function collideAngleBottomRight( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return ANGLE_BOTTOM_RIGHT[ y ][ x ];
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
			var options = aOptions || { collide: 'none' };

			this.friction = [ 1, 1 ];
			this.interactions = [ ];

			if ( options.collide === 'none' ) {
				this.isReachable = collideNone;
			}
			else if ( options.collide === 'topRight' ) {
				this.isReachable = collideAngleTopRight;
			}
			else if ( options.collide === 'topLeft' ) {
				this.isReachable = collideAngleTopLeft;
			}
			else if ( options.collide === 'bottomRight' ) {
				this.isReachable = collideAngleBottomRight;
			}
			else if ( options.collide === 'bottomLeft' ) {
				this.isReachable = collideAngleBottomLeft;
			}
			else if ( options.collide === 'top' ) {
				this.isReachable = collideWall;
			}
			else if ( options.collide === 'right' ) {
				this.isReachable = collideWall;
			}
			else if ( options.collide === 'bottom' ) {
				this.isReachable = collideWall;
			}
			else if ( options.collide === 'left' ) {
				this.isReachable = collideWall;
			}
			else {
				this.isReachable = collideWall;
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
			var i, len1, j, len2;

			this.grid = aGrid;

			for ( i = 0, len1 = this.grid.length; i < len1; i++ ) {
				for ( j = 0, len2 = this.grid[ i ].length; j < len2; j++ ) {
					this.grid[ i ][ j ] = new Cell( this.grid[ i ][ j ] );
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
