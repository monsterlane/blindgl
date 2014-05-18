
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
		 * Method: loadGame
		 */

		loadGame: function( ) {
			this.game = new aGame( this );
		},

		/**
		 * Method: init
		 */

		init: function( ) {
			this.verbose( 'boot' );

			this.input = new aKeyboard( this );
			this.canvas = new aCanvas( this );
			this.audio = new aAudio( this );

			this.loadGame( );
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

			window.requestAnimationFrame( function( ) {
				self.think( );
			});
		}
	});

	return blindGL;
});
