
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

			this.system.verbose( 'game started' );

			this.addClient( );
		}
	});

	return Game;
});
