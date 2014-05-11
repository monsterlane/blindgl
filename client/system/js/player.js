
define( [ 'entity' ], function( Entity ) {
	const KEYBOARD_UP = 38;
	const KEYBOARD_DOWN = 40;
	const KEYBOARD_LEFT = 37;
	const KEYBOARD_RIGHT = 39;

	var Player = Entity.extend({
		bindKeyBindings: function( ) {
			var self = this;

			this.system.bindKey( KEYBOARD_UP, {
				button: document.getElementById( 'bglKeyUp' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( KEYBOARD_DOWN, {
				button: document.getElementById( 'bglKeyDown' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( KEYBOARD_LEFT, {
				button: document.getElementById( 'bglKeyLeft' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( KEYBOARD_RIGHT, {
				button: document.getElementById( 'bglKeyRight' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});
		},
		spawn: function( ) {
			this._super( );
			this.bindKeyBindings( );

			console.log( 'blindGL: spawned player' );
		}
	});

	return Player;
});
