
define( [ '../../system/js/world' ], function( World ) {
	/**
	 * Class: Game
	 */

	var Game = World.extend({
		/**
		 * Method: start
		 */

		start: function( ) {
			this._super( );

			this.system.verbose( 'game started' );

			this.addClient( );
		}
	});

	return Game;
});
