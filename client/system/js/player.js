
define( [ 'global', 'sprite', 'class' ], function( Global, Sprite ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Player
	 */

	var Player = Sprite.extend({
		solid: GLOBAL.solid.bbox,
		bbox: [ null, null ],

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
