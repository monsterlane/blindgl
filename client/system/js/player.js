
define( [ 'global', 'sprite', 'class' ], function( aGlobal, aSprite ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Player
	 */

	var Player = aSprite.extend({
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
