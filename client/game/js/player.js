
define( [ '../../system/js/global', '../../system/js/vector', '../../system/js/player' ], function( aGlobal, aVector, aPlayer ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Class: Game
	 */

	var Player = aPlayer.extend({
		/**
		 * Method: addAnimations
		 */

		addAnimations: function( ) {
			var self = this;

			this._super( );

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.up,
				fileUrl: 'game/img/player/idle/up.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: -3,
					y: -22
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.down,
				fileUrl: 'game/img/player/idle/down.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: -3,
					y: -22
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.left,
				fileUrl: 'game/img/player/idle/left.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: -3,
					y: -22
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.idle,
				direction: GLOBAL.direction.right,
				fileUrl: 'game/img/player/idle/right.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 1,
				framePosition: {
					x: -3,
					y: -22
				}
			});

			this.addAnimation({
				state: [ GLOBAL.ai.walk, GLOBAL.ai.run ],
				direction: GLOBAL.direction.up,
				fileUrl: 'game/img/player/walk/up.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 7,
				framePosition: {
					x: -3,
					y: -22
				},
				timeBetweenFrames: 50
			});

			this.addAnimation({
				state: [ GLOBAL.ai.walk, GLOBAL.ai.run ],
				direction: GLOBAL.direction.down,
				fileUrl: 'game/img/player/walk/down.png',
				frameWidth: 16,
				frameHeight: 24,
				frameCount: 7,
				framePosition: {
					x: -3,
					y: -22
				},
				timeBetweenFrames: 50
			});

			this.addAnimation({
				state: [ GLOBAL.ai.walk, GLOBAL.ai.run ],
				direction: GLOBAL.direction.left,
				fileUrl: 'game/img/player/walk/left.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8,
				framePosition: {
					x: -3,
					y: -22
				},
				timeBetweenFrames: 50
			});

			this.addAnimation({
				state: [ GLOBAL.ai.walk, GLOBAL.ai.run ],
				direction: GLOBAL.direction.right,
				fileUrl: 'game/img/player/walk/right.png',
				frameWidth: 17,
				frameHeight: 24,
				frameCount: 8,
				framePosition: {
					x: -3,
					y: -22
				},
				timeBetweenFrames: 50
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.up,
				fileUrl: 'game/img/player/attack/up.png',
				frameWidth: 32,
				frameHeight: 34,
				frameCount: 6,
				framePosition: {
					x: -13,
					y: -32
				},
				timeBetweenFrames: 40,
				complete: function( ) {
					self.setState( self.lastState );
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.down,
				fileUrl: 'game/img/player/attack/down.png',
				frameWidth: 32,
				frameHeight: 30,
				frameCount: 5,
				framePosition: {
					x: -8,
					y: -23
				},
				timeBetweenFrames: 40,
				complete: function( ) {
					self.setState( self.lastState );
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.left,
				fileUrl: 'game/img/player/attack/left.png',
				frameWidth: 31,
				frameHeight: 38,
				frameCount: 6,
				framePosition: {
					x: -15,
					y: -27
				},
				timeBetweenFrames: 40,
				complete: function( ) {
					self.setState( self.lastState );
				}
			});

			this.addAnimation({
				state: GLOBAL.ai.attack,
				direction: GLOBAL.direction.right,
				fileUrl: 'game/img/player/attack/right.png',
				frameWidth: 31,
				frameHeight: 38,
				frameCount: 6,
				framePosition: {
					x: -3,
					y: -27
				},
				timeBetweenFrames: 40,
				complete: function( ) {
					self.setState( self.lastState );
				}
			});
		},

		/**
		 * Method: addSounds
		 */

		addSounds: function( ) {
			this.addSound({
				state: GLOBAL.ai.walk,
				fileUrl: 'game/snd/player/walk/grass.mp3',
				volume: 50
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				fileUrl: 'game/snd/player/attack/sword1.mp3',
				volume: 50
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				fileUrl: 'game/snd/player/attack/sword2.mp3',
				volume: 50
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				fileUrl: 'game/snd/player/attack/sword3.mp3',
				volume: 50
			});

			this.addSound({
				state: GLOBAL.ai.attack,
				fileUrl: 'game/snd/player/attack/sword4.mp3',
				volume: 50
			});
		},

		/**
		 * Method: bindKeyboardBindings
		 */

		bindKeyboardBindings: function( ) {
			var self = this;

			this.system.input.mouse.bindKey({
				element: document.getElementById( 'bglOverlay' ),
				click: function( aEvent ) {
					var pos = self.system.input.mouse.getClickOffset( aEvent );

					self.setGoal({
						x: pos.x,
						y: pos.y
					});
				}
			});

			this.system.input.keyboard.bindKey({
				key: GLOBAL.input.keyboard.up,
				onDown: function( ) {
					self.move({
						y: -1
					});
				}
			});

			this.system.input.keyboard.bindKey({
				key: GLOBAL.input.keyboard.down,
				onDown: function( ) {
					self.move({
						y: 1
					});
				}
			});

			this.system.input.keyboard.bindKey({
				key: GLOBAL.input.keyboard.left,
				onDown: function( ) {
					self.move({
						x: -1
					});
				}
			});

			this.system.input.keyboard.bindKey({
				key: GLOBAL.input.keyboard.right,
				onDown: function( ) {
					self.move({
						x: 1
					});
				}
			});

			this.system.input.keyboard.bindKey({
				key: GLOBAL.input.keyboard.space,
				onDown: function( ) {
					self.attack( );
				}
			});

			this.system.input.keyboard.bindKey({
				key: GLOBAL.input.keyboard.shift,
				onDown: function( ) {
					self.setState( GLOBAL.ai.run );
				},
				onUp: function( ) {
					self.setState( self.lastState );
				}
			});
		},

		/**
		 * Method: spawn
		 * @param {Object} aPosition
		 */

		spawn: function( aPosition ) {
			this._super( aPosition );

			this.bindKeyboardBindings( );

			this.system.verbose( 'player->spawn' );
		},

		/**
		 * Method: attack
		 */

		attack: function( ) {
			var sound;

			if ( this.state !== GLOBAL.ai.attack ) {
				this.setState( GLOBAL.ai.attack );

				sound = this.system.audio.playRandomSound({
					files: this.sounds[ GLOBAL.ai.attack ]
				});
			}
		},

		/**
		 * Method: setState
		 * @param {Int} aState
		 * @param {Object} aOptions
		 */

		setState: function( aState, aOptions ) {
			this._super( aState, aOptions );

			if ( this.state === GLOBAL.ai.walk ) {
				this.maxVelocity = new aVector({
					x: 0.75,
					y: 0.75,
				});
			}
			else if ( this.state === GLOBAL.ai.run ) {
				this.maxVelocity = new aVector({
					x: 1.25,
					y: 1.25
				});
			}
		},

		/**
		 * Method: updateState
		 */

		updateState: function( ) {
			this._super( );

			if ( this.state > GLOBAL.ai.idle && this.state !== GLOBAL.ai.attack && this.moving === false ) {
				this.setState( GLOBAL.ai.idle );
			}
			else if ( this.state === GLOBAL.ai.idle && this.moving === true ) {
				this.setState( GLOBAL.ai.walk );
			}

			/*
			if ( this.state > GLOBAL.ai.idle && this.sound === null ) {
				this.sound = { };
				this.sound = this.system.audio.playSound({
					fileUrl: this.sounds[ GLOBAL.ai.walk ][ 0 ].fileUrl,
					volume: this.sounds[ GLOBAL.ai.walk ][ 0 ].volume,
					loop: true
				});
			}
			else if ( this.state === GLOBAL.ai.idle && this.sound !== null ) {
				this.sound.stop( );
				this.sound = null;
			}
			*/
		},

		/**
		 * Method: updatePosition
		 */

		updatePosition: function( ) {
			this.velocity.x = 0;
			this.velocity.y = 0;

			if ( this.system.input.keyboard.binding[ GLOBAL.input.keyboard.up ].down === true ) {
				this.velocity.subtract({
					x: 0,
					y: this.maxVelocity.y
				});
			}
			else if ( this.system.input.keyboard.binding[ GLOBAL.input.keyboard.down ].down ) {
				this.velocity.add({
					x: 0,
					y: this.maxVelocity.y
				});
			}

			if ( this.system.input.keyboard.binding[ GLOBAL.input.keyboard.left ].down === true ) {
				this.velocity.subtract({
					x: this.maxVelocity.x,
					y: 0
				});
			}
			else if ( this.system.input.keyboard.binding[ GLOBAL.input.keyboard.right ].down ) {
				this.velocity.add({
					x: this.maxVelocity.x,
					y: 0
				});
			}

			if ( this.velocity.y < 0 ) {
				this.setDirection( GLOBAL.direction.up );
			}
			else if ( this.velocity.y > 0 ) {
				this.setDirection( GLOBAL.direction.down );
			}
			else if ( this.velocity.x < 0 ) {
				this.setDirection( GLOBAL.direction.left );
			}
			else if ( this.velocity.x > 0 ) {
				this.setDirection( GLOBAL.direction.right );
			}

			this._super( );
		},

		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			this._super( aOptions );

			this.solid = GLOBAL.solid.bbox;
			this.bbox = [ 16, 16 ];
		}
	});

	return Player;
});
