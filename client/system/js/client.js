
define( [ 'global', '../../game/js/player', 'class' ], function( aGlobal, aPlayer ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Client
	 */

	var Client = aPlayer.extend({
		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			this._super( aPosition );

			this.system.verbose( 'client->spawn' );
		}
	});

	return Client;
});
