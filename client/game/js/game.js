
define( function( ) {
	return {
		system: null,
		bindPlayerBindings: function( ) {
			var self = this;

			this.system.bindKey( 38, {
				button: document.getElementById( 'bglKeyUp' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( 40, {
				button: document.getElementById( 'bglKeyDown' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( 37, {
				button: document.getElementById( 'bglKeyLeft' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( 39, {
				button: document.getElementById( 'bglKeyRight' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});
		},
		start: function( ) {
			this.bindPlayerBindings( );

			this.system.verbose( 'blindGL: game started' );
		},
		init: function( aSystem ) {
			this.system = aSystem;

			this.start( );

			this.system.think( );
		}
	};
});
