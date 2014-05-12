
define( [ 'global', 'player', 'class' ], function( Global, Player ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Client
	 */

	var Client = Player.extend({
		/**
		 * Method: bindKeyboardBindings
		 */

		bindKeyboardBindings: function( ) {
			var self = this;

			this.system.bindKey( GLOBAL.input.keyboard.up, {
				button: document.getElementById( 'bglKeyUp' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( GLOBAL.input.keyboard.down, {
				button: document.getElementById( 'bglKeyDown' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( GLOBAL.input.keyboard.left, {
				button: document.getElementById( 'bglKeyLeft' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});

			this.system.bindKey( GLOBAL.input.keyboard.right, {
				button: document.getElementById( 'bglKeyRight' ),
				keyUp: function( ) {
					this.button.className = '';
				},
				keyDown: function( ) {
					this.button.className = 'selected';
				}
			});
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			this.bindKeyboardBindings( );

			this.system.verbose( 'spawned client' );
		}
	});

	return Client;
});