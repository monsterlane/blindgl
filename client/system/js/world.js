
define( [ 'tile', 'client', 'class' ], function( aTile, aClient ) {
	'use strict';

	/**
	 * Class: World
	 */

	var World = Object.subClass({
		/**
		 * Method: init
	 	 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			this.system = aSystem;

			this.running = false;
			this.clients = [ ];
			this.view = null;

			this.start( );
		},

		/**
		 * Method: start
		 */

		start: function( ) {
			this.system.canvas.clear( );

			this.running = true;

			return this;
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

			return this;
		},

		/**
		 * Method: addClient
		 * @param {Object} aPosition
		 */

		addClient: function( aPosition ) {
			var position = aPosition || this.view.spawn,
				count = document.getElementById( 'bglClients' ),
				client;

			client = new aClient({
				system: this.system,
				game: this
			});

			client.spawn( position );

			this.clients.push( client );

			if ( count !== null ) {
				count.innerHTML = this.clients.length;
			}

			return this;
		},

		/**
		 * Method: loadView
		 * @param {Object} aView
		 */

		loadView: function( aView ) {
			this.view = new aTile( this.system, this );
			this.view.load( aView );

			return this;
		}
	});

	return World;
});
