
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

			this.setLayer( this.system.canvas.layers[ 1 ] );

			this.system.verbose( 'spawned player' );
		}
	});

	return Player;
});
