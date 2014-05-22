
define( [ 'global', 'keyboard', 'audio', 'canvas', '../../game/js/game', 'class' ], function( aGlobal, aKeyboard, aAudio, aCanvas, aGame ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: blindGL
	 */

	var blindGL = Class.extend({
		settings: GLOBAL.settings,
		engine: {
			fps: document.getElementById( 'bglFps' ),
			tickRate: 1000 / GLOBAL.video.fps,
			lastRate: Date.now( ),
			lastTick: Date.now( ),
			ticks: 0
		},
		input: null,
		audio: null,
		canvas: null,
		game: null,
		paused: false,
		pauseTime: null,

		/**
		 * Method: verbose
	 	 * @param {String} aMessage
		 */

		verbose: function( aMessage ) {
			if ( this.settings.verbose == true ) {
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
			var now = Date( ).time;

			this.paused = true;
			this.pauseTime = now;

			this.verbose( 'paused' );
		},

		/**
		 * Method: unpause
		 */

		unpause: function( ) {
			var now = Date( ).time;

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
				if ( self.paused == true ) {
					self.unpause( );
				}
			}, true );

			window.addEventListener( 'blur', function( ) {
				if ( self.paused == false ) {
					self.pause( );
				}
			}, true );
		},

		/**
		 * Method: init
		 */

		init: function( ) {
			var self = this;

			if ( this.settings.verbose == false ) {
				document.getElementById( 'bglWindow' ).className = 'boot';

				setTimeout(function( ) {
					self.boot( );
				}, 2000 );
			}
			else {
				this.boot( );
			}
		},

		/**
		 * Method: boot
		 */

		boot: function( ) {
			document.getElementById( 'bglWindow' ).className = 'running';

			this.verbose( 'boot' );

			this.input = new aKeyboard( this );
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
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			var now = Date.now( ),
				elapsed = now - this.engine.lastTick,
				self = this;

			this.engine.ticks++;

			if ( elapsed >= this.engine.tickRate ) {
				this.engine.lastTick = now - ( elapsed % this.engine.tickRate );

				this.canvas.think( );
			}

			if ( this.settings.showFps == true && now - this.engine.lastRate >= 1000 ) {
				this.engine.fps.innerHTML = this.engine.ticks;
				this.engine.lastRate = now;
				this.engine.ticks = 0;
			}

			window.requestAnimationFrame(function( ) {
				if ( self.paused == false ) {
					self.think( );
				}
			});
		}
	});

	return blindGL;
});
