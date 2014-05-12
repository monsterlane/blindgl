
define( [ 'audio', 'canvas', '../../game/js/game' ], function( Audio, Canvas, Game ) {
	/**
	 * Class: blindGL
	 */

	var blindGL = {
		settings: {
			debug: true,
			showFps: true
		},
		engine: {
			fps: document.getElementById( 'bglFps' ),
			tickRate: Math.round( 1000 / 60 ),
			lastTick: new Date( ).getTime( ),
			ticks: 0
		},
		input: {
			keyDown: [ ],
			binding: [ ]
		},
		audio: null,
		canvas: null,
		game: null
	};

	/**
	 * Method: verbose
 	 * @param {String} aMessage
	 */

	blindGL.verbose = function( aMessage ) {
		if ( this.settings.debug == true ) {
			console.log( 'blindGL: ' + aMessage );
		}
	};

	/**
	 * Method: bindEventListeners
	 */

	blindGL.bindEventListeners = function( ) {
		var el = document.getElementById( 'bglApplication' ),
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
	};

	/**
	 * Method: handleKeypress
 	 * @param {Int} aKey
	 */

	blindGL.handleKeypress = function( aKey ) {
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
	};

	/**
	 * Method: bindKey
	 * @param {Int} aKey
	 * @param {Object} aBinding
	 */

	blindGL.bindKey = function( aKey, aBinding ) {
		this.input.binding[ aKey ] = aBinding;
	};

	/**
	 * Method: init
	 */

	blindGL.init = function( ) {
		this.verbose( 'booting...' );

		this.audio = Audio;
		this.audio.init( this );

		this.canvas = Canvas;
		this.canvas.init( this );

		this.bindEventListeners( );

		if ( Game && Game.hasOwnProperty( 'init' ) ) {
			this.game = Game;
			this.game.init( this );
		}
	};

	/**
	 * Method: think
	 */

	blindGL.think = function( ) {
		var now = new Date( ).getTime( ),
			self = this;

		this.engine.ticks++;

		if ( now - this.engine.lastTick >= 1000 ) {
			if ( this.settings.showFps == true && this.engine.fps != null ) {
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
	};

	return blindGL;
});
