
define( [ '../../system/js/global', '../../system/js/player' ], function( aGlobal, aPlayer ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Game
	 */

	var Player = aPlayer.extend({
		bbox:[ 16, 24 ],

		/**
		 * Method: bindKeyboardBindings
		 */

		bindKeyboardBindings: function( ) {
			var self = this;

			this.system.input.bindKey( GLOBAL.input.keyboard.up, {
				onUp: function( ) {
					document.getElementById( 'bglKeyUp' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyUp' ).className = 'selected';

					self.setDirection( GLOBAL.direction.up );
					self.setAnimation( );
				}
			});

			this.system.input.bindKey( GLOBAL.input.keyboard.down, {
				onUp: function( ) {
					document.getElementById( 'bglKeyDown' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyDown' ).className = 'selected';

					self.setDirection( GLOBAL.direction.down );
					self.setAnimation( );
				}
			});

			this.system.input.bindKey( GLOBAL.input.keyboard.left, {
				onUp: function( ) {
					document.getElementById( 'bglKeyLeft' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyLeft' ).className = 'selected';

					self.setDirection( GLOBAL.direction.left );
					self.setAnimation( );
				}
			});

			this.system.input.bindKey( GLOBAL.input.keyboard.right, {
				onUp: function( ) {
					document.getElementById( 'bglKeyRight' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyRight' ).className = 'selected';

					self.setDirection( GLOBAL.direction.right );
					self.setAnimation( );
				}
			});
		},

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
				frameCount: 7,
				timeBetweenFrames: 100
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.down,
				file_url: '/game/img/player/walk-down.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 7,
				timeBetweenFrames: 100
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.left,
				file_url: '/game/img/player/walk-left.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8,
				timeBetweenFrames: 100
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.right,
				file_url: '/game/img/player/walk-right.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8,
				timeBetweenFrames: 100
			});
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			this.bindKeyboardBindings( );

			this.system.verbose( 'player->spawn' );
		}
	});

	return Player;
});
