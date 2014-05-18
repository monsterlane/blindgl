
define( [ 'global', 'audio', 'canvas', '../../game/js/game', 'class' ], function( Global, Audio, Canvas, Game ) {
	var GLOBAL = new Global( );

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
		input: {
			keyDown: [ ],
			binding: [ ]
		},
		audio: null,
		canvas: null,
		game: null,

		/**
		 * Method: verbose
	 	 * @param {String} aMessage
		 */

		verbose: function( aMessage ) {
			if ( this.settings.verbose == true ) {
				console.log( 'blindGL: ' + aMessage );
			}
		},

		/**
		 * Method: bindEventListeners
		 */

		bindEventListeners: function( ) {
			var el = document.querySelectorAll( 'body' )[ 0 ],
				self = this;

			el.addEventListener( 'keydown', function( aEvent ) {
				if ( aEvent.repeat != true ) {
					self.handleKeypress( aEvent.keyCode );
				}
			});

			el.addEventListener( 'keyup', function( aEvent ) {
				if ( aEvent.repeat != true ) {
					self.handleKeypress( aEvent.keyCode );
				}
			});
		},

		/**
		 * Method: handleKeypress
	 	 * @param {Int} aKey
		 */

		handleKeypress: function( aKey ) {
			if ( this.input.keyDown[ aKey ] === true ) {
				this.input.keyDown[ aKey ] = false;

				if ( this.input.binding[ aKey ] ) {
					this.input.binding[ aKey ].keyUp( );
				}
			}
			else {
				this.input.keyDown[ aKey ] = true;

				if ( this.input.binding[ aKey ] ) {
					this.input.binding[ aKey ].keyDown( );
				}
			}
		},

		/**
		 * Method: bindKey
		 * @param {Int} aKey
		 * @param {Object} aBinding
		 */

		bindKey: function( aKey, aBinding ) {
			this.input.binding[ aKey ] = aBinding;
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
		 * Method: init
		 */

		init: function( ) {
			this.verbose( 'booting...' );

			this.bindEventListeners( );

			this.audio = new Audio( this );
			this.canvas = new Canvas( this );
			this.game = new Game( this );
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			var now = Date.now( ),
				elapsed = now - this.engine.lastTick,
				self = this;

			this.engine.ticks++;

			if ( elapsed > this.engine.tickRate ) {
				this.engine.lastTick = now - ( elapsed % this.engine.tickRate );

				this.canvas.think( );
			}

			if ( this.settings.showFps == true && now - this.engine.lastRate > 1000 ) {
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
