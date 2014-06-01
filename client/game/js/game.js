
define( [ '../../system/js/world' ], function( aWorld ) {
	'use strict';

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

			this.loadView({
				background: {
					fileUrl: 'game/img/world/map/0-0.png',
					width: 1024,
					height: 768
				},
				foreground: {
					fileUrl: 'game/img/world/weather/fog.png',
					width: 512,
					height: 512,
					effect: {
						name: 'bounce',
						offset: {
							x: 100,
							y: 100
						},
						velocity: {
							x: 0.1,
							y: 0.1
						}
					},
					opacity: 0.3
				},
				spawn: {
					x: 0,
					y: 0
				},
				grid: [

				]
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
