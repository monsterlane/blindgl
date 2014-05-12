
define( [ 'sprite', 'class' ], function( Sprite ) {
	/**
	 * Class: Player
	 */

	var Player = Sprite.extend({
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
