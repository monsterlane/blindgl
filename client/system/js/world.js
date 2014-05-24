
define( [ 'client', 'class' ], function( aClient ) {
	/**
	 * Class: World
	 */

	var World = Class.extend({
		system: null,
		running: false,
		clients: [ ],
		entities: [ ],

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
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			var i, len;

			for ( i = 0, len = this.entities.length; i < len; i++ ) {
				this.entities[ i ].think( );
				this.entities[ i ].draw( );
			}
		}
	});

	return World;
});
