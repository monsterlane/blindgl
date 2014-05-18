
define( [ 'global', '../../game/js/player', 'class' ], function( aGlobal, aPlayer ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Client
	 */

	var Client = aPlayer.extend({
		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			this.system.verbose( 'client->spawn' );
		}
	});

	return Client;
});
