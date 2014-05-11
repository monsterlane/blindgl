
define( [ '../../game/js/game' ], function( aGame ) {
	return {
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
		game: null,
		verbose: function( aMessage ) {
			if ( this.settings.debug == true ) {
				console.log( aMessage );
			}
		},
		bindInputEventListeners: function( ) {
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
		},
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
		bindKey: function( aKey, aBinding ) {
			this.input.binding[ aKey ] = aBinding;
		},
		init: function( ) {
			this.verbose( 'blindGL: booting...' );

			this.bindInputEventListeners( );

			if ( aGame && aGame.hasOwnProperty( 'init' ) ) {
				this.game = aGame;
				this.game.init( this );
			}
		},
		think: function( ) {
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
		}
	};
});
