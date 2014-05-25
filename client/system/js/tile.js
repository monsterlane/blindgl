
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: cell
	 */

	var Cell = Class.extend({
		friction: [ 1, 1 ],
		interactions: [ ],

		/**
		 * Method: isReachable
		 * @param {Object} aPosition
		 * @return {Bool}
		 */

		isReachable: function( aPosition ) {
			return true;
		},

		/**
		 * Method: touch
		 */

		touch: function( ) {

		},

		/**
		 * Method: init
		 */

		init: function( ) {
			//
		}
	});

	/**
	 * Class: World
	 */

	var Tile = Class.extend({
		system: null,
		game: null,
		grid: [ ],
		background: null,
		foreground: null,
		entities: [ ],

		/**
		 * Method: init
	 	 * @param {Object} aSystem
	 	 * @param {Object} aGame
	 	 * @param {Object} aView
		 */

		init: function( aSystem, aGame, aView ) {
			this.system = aSystem;
			this.game = aGame;

			this.load( aView );
		},

		/**
		 * Method: load
		 * @param {Object} aTile
		 */

		load: function( aTile ) {
			var tile = aTile || { };

			if ( tile.hasOwnProperty( 'grid' ) ) {
				this.grid = tile.grid;
			}

			if ( tile.hasOwnProperty( 'background' ) ) {
				this.background = tile.background;
			}

			if ( tile.hasOwnProperty( 'foreground' ) ) {
				this.foreground = tile.foreground;
			}

			if ( tile.hasOwnProperty( 'entities' ) ) {
				this.entities = tile.entities;
			}
		}
	});

	return Tile;
});
