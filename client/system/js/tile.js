
define( [ 'global', 'image', 'class' ], function( aGlobal, aImage ) {
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

		if ( x != 0 ) x = Math.abs( x ) - 1;
		if ( y != 0 ) y = Math.abs( y ) - 1;

		return ANGLE_TOP_LEFT[ y ][ x ];
	}

	function collideAngleTopRight( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x != 0 ) x = Math.abs( x ) - 1;
		if ( y != 0 ) y = Math.abs( y ) - 1;

		return ANGLE_TOP_RIGHT[ y ][ x ];
	}

	function collideAngleBottomLeft( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x != 0 ) x = Math.abs( x ) - 1;
		if ( y != 0 ) y = Math.abs( y ) - 1;

		return ANGLE_BOTTOM_LEFT[ y ][ x ];
	}

	function collideAngleBottomRight( aPosition ) {
		var x = Math.round( aPosition.x ),
			y = Math.round( aPosition.y );

		if ( x != 0 ) x = Math.abs( x ) - 1;
		if ( y != 0 ) y = Math.abs( y ) - 1;

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
			var options = aOptions || { type: 'N' };

			this.friction = [ 1, 1 ];
			this.interactions = [ ];

			if ( options.type == 'N' ) {
				this.isReachable = collideNone;
			}
			else if ( options.type == 'TR' ) {
				this.isReachable = collideAngleTopRight;
			}
			else if ( options.type == 'TL' ) {
				this.isReachable = collideAngleTopLeft;
			}
			else if ( options.type == 'BR' ) {
				this.isReachable = collideAngleBottomRight;
			}
			else if ( options.type == 'BL' ) {
				this.isReachable = collideAngleBottomLeft;
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

			if ( tile.hasOwnProperty( 'background' ) ) {
				this.loadBackground( tile.background );
			}

			if ( tile.hasOwnProperty( 'foreground' ) ) {
				this.loadForeground( tile.foreground );
			}

			if ( tile.hasOwnProperty( 'grid' ) ) {
				this.loadGrid( tile.grid );
			}

			if ( tile.hasOwnProperty( 'entities' ) ) {
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
			this.grid = aGrid;
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
