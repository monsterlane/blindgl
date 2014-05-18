
define( [ 'client', 'class' ], function( aClient ) {
	/**
	 * Class: World
	 */

	var World = Class.extend({
		system: null,
		running: false,
		clients: [ ],

		/**
		 * Method: addClient
		 */

		addClient: function( ) {
			var client = new aClient( this.system, this ),
				count = document.getElementById( 'bglClients' );

			this.clients.push( client );

			client.spawn( );

			if ( count != null ) {
				count.innerHTML = parseInt( count.innerHTML, 10 ) + 1;
			}
		},

		/**
		 * Method: init
	 	 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			this.system = aSystem;

			this.start( );
		},

		/**
		 * Method: start
		 */

		start: function( ) {
			this.system.canvas.clear( );
			this.system.hideOverlay( );

			this.running = true;
			this.think( );
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			this.system.think( );
		}
	});

	return World;
});
