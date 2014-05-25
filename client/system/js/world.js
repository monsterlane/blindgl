
define( [ 'tile', 'client', 'class' ], function( aTile, aClient ) {
	/**
	 * Class: World
	 */

	var World = Class.extend({
		system: null,
		running: false,
		clients: [ ],
		view: null,

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

			this.running = true;
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			var i, len;

			for ( i = 0, len = this.view.entities.length; i < len; i++ ) {
				this.view.entities[ i ].think( );
				this.view.entities[ i ].draw( );
			}
		},

		/**
		 * Method: addClient
		 * @param {Object} aPosition
		 */

		addClient: function( aPosition ) {
			var position = aPosition || this.view.spawn,
				client = new aClient( this.system, this ),
				count = document.getElementById( 'bglClients' );

			this.clients.push( client );

			client.spawn( position );

			if ( count != null ) {
				count.innerHTML = this.clients.length;
			}
		},

		/**
		 * Method: loadView
		 * @param {Object} aView
		 */

		loadView: function( aView ) {
			this.view = new aTile( this.system, this, aView );
		}
	});

	return World;
});
