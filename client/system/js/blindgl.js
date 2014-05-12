
define( [ 'global', 'audio', 'canvas', '../../game/js/game', 'class' ], function( Global, Audio, Canvas, Game ) {
	var GLOBAL = new Global( );

	/**
	 * Class: blindGL
	 */

	var blindGL = Class.extend({
		engine: {
			fps: document.getElementById( 'bglFps' ),
			tickRate: Math.round( 1000 / GLOBAL.video.fps ),
			lastTick: new Date( ).getTime( ),
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
			if ( GLOBAL.settings.verbose == true ) {
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
			var now = new Date( ).getTime( ),
				self = this;

			this.engine.ticks++;

			if ( now - this.engine.lastTick >= 1000 ) {
				if ( GLOBAL.settings.showFps == true && this.engine.fps != null ) {
					this.engine.fps.innerHTML = this.engine.ticks;
				}

				this.engine.lastTick = now;
				this.engine.ticks = 0;
			}

			setTimeout( function( ) {
				window.requestAnimationFrame( function( ) {
					self.think( );
				});
			}, this.engine.tickRate );
		}
	});

	return blindGL;
});
