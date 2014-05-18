
define( [ '../../system/js/world' ], function( aWorld ) {
	/**
	 * Class: Game
	 */

	var Game = aWorld.extend({
		/**
		 * Method: start
		 */

		start: function( ) {
			this._super( );

			this.system.verbose( 'game->start' );

			this.addClient( );
		}
	});

	return Game;
});
