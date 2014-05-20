
define( [ '../../system/js/global', '../../system/js/player' ], function( aGlobal, aPlayer ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Game
	 */

	var Player = aPlayer.extend({
		solid: GLOBAL.solid.bbox,
		bbox:[ 16, 24 ],

		/**
		 * Method: addAnimations
		 */

		addAnimations: function( ) {
			this._super( );

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.up,
				file_url: 'game/img/player/idle-up.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: 0,
					y: 0
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.down,
				file_url: 'game/img/player/idle-down.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: 0,
					y: 0
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.left,
				file_url: 'game/img/player/idle-left.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: 0,
					y: 0
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.right,
				file_url: 'game/img/player/idle-right.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: 0,
					y: 0
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.up,
				file_url: 'game/img/player/walk-up.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 7,
				framePosition: {
					x: 0,
					y: 0
				},
				timeBetweenFrames: 150
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.down,
				file_url: 'game/img/player/walk-down.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 7,
				framePosition: {
					x: 0,
					y: 0
				},
				timeBetweenFrames: 150
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.left,
				file_url: 'game/img/player/walk-left.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8,
				framePosition: {
					x: 0,
					y: 0
				},
				timeBetweenFrames: 150
			});

			this.addAnimation({
				state: GLOBAL.ai.walk,
				direction: GLOBAL.direction.right,
				file_url: 'game/img/player/walk-right.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8,
				framePosition: {
					x: 0,
					y: 0
				},
				timeBetweenFrames: 150
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.up,
				file_url: 'game/img/player/attack-up.png',
				frameWidth: 32,
				frameHeight: 34,
				frameCount: 6,
				framePosition: {
					x: -10,
					y: -9
				},
				timeBetweenFrames: 100
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.down,
				file_url: 'game/img/player/attack-down.png',
				frameWidth: 32,
				frameHeight: 30,
				frameCount: 5,
				framePosition: {
					x: -4,
					y: 1
				},
				timeBetweenFrames: 100
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.left,
				file_url: 'game/img/player/attack-left.png',
				frameWidth: 31,
				frameHeight: 38,
				frameCount: 6,
				framePosition: {
					x: -12,
					y: -5
				},
				timeBetweenFrames: 100
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.right,
				file_url: 'game/img/player/attack-right.png',
				frameWidth: 31,
				frameHeight: 38,
				frameCount: 6,
				framePosition: {
					x: -2,
					y: -5
				},
				timeBetweenFrames: 100
			});
		},

		/**
		 * Method: addSounds
		 */

		addSounds: function( ) {
			this.addSound({
				state: GLOBAL.ai.walk,
				file_url: 'game/snd/player/walk.mp3',
				volume: 25
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				file_url: 'game/snd/player/sword1.mp3',
				volume: 75
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				file_url: 'game/snd/player/sword2.mp3',
				volume: 75
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				file_url: 'game/snd/player/sword3.mp3',
				volume: 75
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				file_url: 'game/snd/player/sword4.mp3',
				volume: 75
			});
		},

		/**
		 * Method: bindKeyboardBindings
		 */

		bindKeyboardBindings: function( ) {
			var self = this;

			this.system.input.bindKey({
				key: GLOBAL.input.keyboard.up,
				onUp: function( ) {
					self.move( 0, 1, 0 );
				},
				onDown: function( ) {
					self.move( 0, -1, 0 );
				}
			});

			this.system.input.bindKey({
				key: GLOBAL.input.keyboard.down,
				onUp: function( ) {
					self.move( 0, -1, 0 );
				},
				onDown: function( ) {
					self.move( 0, 1, 0 );
				}
			});

			this.system.input.bindKey({
				key: GLOBAL.input.keyboard.left,
				onUp: function( ) {
					self.move( 1, 0, 0 );
				},
				onDown: function( ) {
					self.move( -1, 0, 0 );
				}
			});

			this.system.input.bindKey({
				key: GLOBAL.input.keyboard.right,
				onUp: function( ) {
					self.move( -1, 0, 0 );
				},
				onDown: function( ) {
					self.move( 1, 0, 0 );
				}
			});

			this.system.input.bindKey({
				key: GLOBAL.input.keyboard.space,
				onDown: function( ) {
					self.attack( );
				}
			});
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			this.bindKeyboardBindings( );

			this.system.verbose( 'player->spawn' );
		},

		/**
		 * Method: attack
		 */

		attack: function( ) {
			this.setState( GLOBAL.ai.attack );
			this.system.audio.playRandomSound( this.sounds[ GLOBAL.ai.attack ] );
		}
	});

	return Player;
});
