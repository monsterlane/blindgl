
define( [ 'global', 'sprite', 'class' ], function( aGlobal, aSprite ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Player
	 */

	var Player = aSprite.extend({
		/**
		 * Method: walk
		 */

		idle: function( ) {
			this.setState( GLOBAL.ai.idle );
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			var layer = this.system.canvas.layers[ 1 ],
				x = parseInt( layer.width / 2, 10 ) - parseInt( this.bbox[ 0 ] / 2, 10 ),
				y = parseInt( layer.height / 2, 10 ) - parseInt( this.bbox[ 1 ] / 2, 10 );

			this.setLayer( layer );
			this.setPosition( x, y );

			this.idle( );
		}
	});

	return Player;
});
