
define( [ 'entity', 'class' ], function( Entity ) {
	/**
	 * Class: Player
	 */

	var Player = Entity.extend({
		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			this.system.verbose( 'spawned player' );
		}
	});

	return Player;
});
