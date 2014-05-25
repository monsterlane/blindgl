
define( [ '../../system/js/world' ], function( aWorld ) {
	/**
	 * Class: Game
	 */

	var Game = aWorld.extend({
		/**
		 * Method: start
		 */

		start: function( ) {
			var self = this;

			this._super( );

			this.system.verbose( 'game->start' );

			this.loadView({
				background: {
					fileUrl: 'game/img/world/map/0-0.png',
					width: 1024,
					height: 768
				},
				spawn: {
					x: 0,
					y: 0
				}
			});

			/*
			this.system.audio.playMusic({
				fileUrl: 'game/snd/world/music/overworld.mp3',
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
