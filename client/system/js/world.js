
define( [ 'client', 'class' ], function( Client ) {
	/**
	 * Class: World
	 */

	var World = Class.extend({
		system: null,
		clients: [ ],

		/**
		 * Method: addClient
		 */

		addClient: function( ) {
			var client = new Client( ),
				count;

			this.clients.push( client );

			client.init( this.system, this );
			client.spawn( );

			if ( ( count = document.getElementById( 'bglClients' ) ) != null ) {
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

			this.system.think( );
		},

		/**
		 * Method: start
		 */

		start: function( ) {

		}
	});

	return World;
});
