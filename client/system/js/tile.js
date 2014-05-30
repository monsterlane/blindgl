
define( [ 'global', 'image', 'class' ], function( aGlobal, aImage ) {
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

		init: function( aSystem, aGame ) {
			this.system = aSystem;
			this.game = aGame;
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
				this.background = new aImage({
					system: this.system,
					game: this.game,
					element: tile.background
				});

				this.background.setLayer( GLOBAL.video.layers.background );
				this.background.spawn( );
			}

			if ( tile.hasOwnProperty( 'foreground' ) ) {
				this.foreground = new aImage({
					system: this.system,
					game: this.game,
					element: tile.foreground
				});

				this.foreground.setLayer( GLOBAL.video.layers.foreground );
				this.foreground.spawn( );
			}

			if ( tile.hasOwnProperty( 'entities' ) ) {
				this.entities = tile.entities;
			}
		}
	});

	return Tile;
});
