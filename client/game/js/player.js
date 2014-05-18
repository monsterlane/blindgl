
define( [ '../../system/js/global', '../../system/js/player' ], function( aGlobal, aPlayer ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Game
	 */

	var Player = aPlayer.extend({
		bbox:[ 16, 24 ],

		/**
		 * Method: addAnimations
		 */

		addAnimations: function( ) {
			this._super( );

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.up,
				file_url: '/game/img/player/walk-up.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 7
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.down,
				file_url: '/game/img/player/walk-down.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 7
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.left,
				file_url: '/game/img/player/walk-left.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.right,
				file_url: '/game/img/player/walk-right.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8
			});
		}
	});

	return Player;
});
