
define( [ 'global', '../../game/js/player', 'class' ], function( aGlobal, aPlayer ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Client
	 */

	var Client = aPlayer.extend({
		/**
		 * Method: bindKeyboardBindings
		 */

		bindKeyboardBindings: function( ) {
			var self = this;

			this.system.input.bindKey( GLOBAL.input.keyboard.up, {
				onUp: function( ) {
					document.getElementById( 'bglKeyUp' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyUp' ).className = 'selected';
				}
			});

			this.system.input.bindKey( GLOBAL.input.keyboard.down, {
				onUp: function( ) {
					document.getElementById( 'bglKeyDown' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyDown' ).className = 'selected';
				}
			});

			this.system.input.bindKey( GLOBAL.input.keyboard.left, {
				onUp: function( ) {
					document.getElementById( 'bglKeyLeft' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyLeft' ).className = 'selected';
				}
			});

			this.system.input.bindKey( GLOBAL.input.keyboard.right, {
				onUp: function( ) {
					document.getElementById( 'bglKeyRight' ).className = '';
				},
				onDown: function( ) {
					document.getElementById( 'bglKeyRight' ).className = 'selected';
				}
			});
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this._super( );

			this.bindKeyboardBindings( );

			this.system.verbose( 'client->spawn' );
		}
	});

	return Client;
});
