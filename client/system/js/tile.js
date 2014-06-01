
define( [ 'global', 'image', 'class' ], function( aGlobal, aImage ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Constants
	 */

	var TOP_HALF_OPEN = [
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ]
	];

	var BOTTOM_HALF_OPEN = [
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ],
		[ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ]
	];

	var RIGHT_HALF_OPEN = [
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ],
		[ false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true ]
	];

	var LEFT_HALF_OPEN = [
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ],
		[ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false ]
	];

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

	function collideTopHalfOpen( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return TOP_HALF_OPEN[ y ][ x ];
	}

	function collideBottomHalfOpen( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return BOTTOM_HALF_OPEN[ y ][ x ];
	}

	function collideRightHalfOpen( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return RIGHT_HALF_OPEN[ y ][ x ];
	}

	function collideLeftHalfOpen( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x !== 0 ) { x = Math.abs( x ) - 1; }
		if ( y !== 0 ) { y = Math.abs( y ) - 1; }

		return LEFT_HALF_OPEN[ y ][ x ];
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
			var options = aOptions || { collide: 'none', effect: null };

			this.friction = [ 1, 1 ];
			this.interactions = [ ];

			if ( options.collide === 'none' ) {
				this.isReachable = collideNone;
			}
			else if ( options.collide === 'angleTopRight' ) {
				this.isReachable = collideAngleTopRight;
			}
			else if ( options.collide === 'angleTopLeft' ) {
				this.isReachable = collideAngleTopLeft;
			}
			else if ( options.collide === 'angleBottomRight' ) {
				this.isReachable = collideAngleBottomRight;
			}
			else if ( options.collide === 'angleBottomLeft' ) {
				this.isReachable = collideAngleBottomLeft;
			}
			else if ( options.collide === 'topHalfOpen' ) {
				this.isReachable = collideTopHalfOpen;
			}
			else if ( options.collide === 'bottomHalfOpen' ) {
				this.isReachable = collideBottomHalfOpen;
			}
			else if ( options.collide === 'rightHalfOpen' ) {
				this.isReachable = collideRightHalfOpen;
			}
			else if ( options.collide === 'leftHalfOpen' ) {
				this.isReachable = collideLeftHalfOpen;
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

			this.spawn = {
				x: 0,
				y: 0
			};
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
