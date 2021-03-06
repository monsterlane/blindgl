
define( [ 'global', 'keyboard', 'mouse', 'audio', 'canvas', '../../game/js/game', 'class' ], function( aGlobal, aKeyboard, aMouse, aAudio, aCanvas, aGame ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: blindGL
	 */

	var blindGL = Object.subClass({
		/**
		 * Method: verbose
	 	 * @param {String} aMessage
		 */

		verbose: function( aMessage ) {
			if ( this.settings.verbose === true ) {
				console.log( 'blindGL::' + aMessage );
			}
		},

		/**
		 * Method: showOverlay
		 */

		showOverlay: function( ) {
			var el = document.getElementById( 'bglOverlay' );

			el.style.display = 'block';
		},

		/**
		 * Method: hideOverlay
		 */

		hideOverlay: function( ) {
			var el = document.getElementById( 'bglOverlay' );

			el.style.display = 'none';
		},

		/**
		 * Method: pause
		 */

		pause: function( ) {
			var now = Date.now( );

			this.paused = true;
			this.pauseTime = now;

			this.verbose( 'paused' );
		},

		/**
		 * Method: unpause
		 */

		unpause: function( ) {
			var now = Date.now( );

			this.paused = false;
			this.lastTick += ( now - this.pauseTime );

			this.verbose( 'unpaused' );
		},

		/**
		 * Method: bindEventListeners
		 */

		bindEventListeners: function( ) {
			var self = this;

			window.addEventListener( 'focus', function( ) {
				if ( self.paused === true ) {
					self.unpause( );
				}
			}, true );

			window.addEventListener( 'blur', function( ) {
				if ( self.paused === false ) {
					self.pause( );
				}
			}, true );
		},

		/**
		 * Method: init
		 */

		init: function( ) {
			var win = document.getElementById( 'bglWindow' ),
				self = this;

			this.settings = GLOBAL.settings;

			this.engine = {
				fps: document.getElementById( 'bglFps' ),
				tickRate: 1000 / GLOBAL.video.fps,
				lastRate: Date.now( ),
				lastTick: Date.now( ),
				pauseRate: 200,
				ticks: 0
			};

			this.input = { };
			this.audio = null;
			this.canvas = null;
			this.game = null;
			this.paused = false;
			this.pauseTime = null;

			if ( this.settings.verbose === false ) {
				win.className = 'boot';

				setTimeout(function( ) {
					win.className = 'running';
					self.boot( );
				}, 2000 );
			}
			else {
				win.className = 'running';
				this.boot( );
			}
		},

		/**
		 * Method: boot
		 */

		boot: function( ) {
			this.verbose( 'boot' );

			this.input.keyboard = new aKeyboard( this );
			this.input.mouse = new aMouse( this );
			this.canvas = new aCanvas( this );
			this.audio = new aAudio( this );

			this.bindEventListeners( );
			this.loadGame( );
		},

		/**
		 * Method: loadGame
		 */

		loadGame: function( ) {
			this.game = new aGame( this );

			this.think( );
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			var now = Date.now( ),
				elapsed = now - this.engine.lastTick,
				self = this;

			if ( this.paused === false ) {
				this.engine.ticks += 1;

				if ( elapsed >= this.engine.tickRate ) {
					this.engine.lastTick = now - ( elapsed % this.engine.tickRate );

					this.game.think( );
					this.canvas.think( );
				}

				if ( this.settings.showFps === true && now - this.engine.lastRate >= 1000 ) {
					this.engine.fps.innerHTML = this.engine.ticks;
					this.engine.lastRate = now;
					this.engine.ticks = 0;
				}

				window.requestAnimationFrame(function( ) {
					self.think( );
				});
			}
			else {
				setTimeout(function( ) {
					window.requestAnimationFrame(function( ) {
						self.think( );
					});
				}, this.pauseRate );
			}

		}
	});

	return blindGL;
});
