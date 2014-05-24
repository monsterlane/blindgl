
define( [ '../../system/js/world' ], function( aWorld ) {
	/**
	 * Class: Game
	 */

	var Game = aWorld.extend({
		/**
		 * Method: start
		 */

		start: function( ) {
			this._super( );

			this.system.verbose( 'game->start' );

			/*
			this.system.audio.playMusic({
				fileUrl: 'game/snd/world/overworld.mp3',
				volume: 70,
				effectName: 'fadeIn',
				effectDuration: 10000
			});
			*/

			this.addClient( );
		}
	});

	return Game;
});
