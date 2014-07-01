
define( [ 'global', '../../game/js/player', 'class' ], function( aGlobal, aPlayer ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: Client
	 */

	var Client = aPlayer.subClass({
		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			this._super( aPosition );

			this.system.verbose( 'client->spawn' );

			return this;
		}
	});

	return Client;
});
