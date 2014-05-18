
define( [ 'global', 'sprite', 'class' ], function( aGlobal, aSprite ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Player
	 */

	var Player = aSprite.extend({
		solid: GLOBAL.solid.bbox,
		bbox: [ 0, 0 ],

		/**
		 * Method: walk
		 */

		walk: function( ) {
			this.setState( GLOBAL.ai.walk );
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			var layer = this.system.canvas.layers[ 1 ],
				x = parseInt( layer.width / 2, 10 ) - parseInt( this.bbox[ 0 ] / 2, 10 ),
				y = parseInt( layer.height / 2, 10 ) - parseInt( this.bbox[ 1 ] / 2, 10 ),
				z = 0;

			this.setLayer( layer );
			this.setPosition( x, y, z );

			this.walk( );
		}
	});

	return Player;
});
