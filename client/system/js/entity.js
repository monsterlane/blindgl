
define( [ 'class' ], function( ) {
	/**
	 * Class: Entity
	 */

	var Entity = Class.extend({
		system: null,
		game: null,

		/**
		 * Method: init
		 * @param {Object} aSystem
		 * @param {Object} aGame
		 */

		init: function( aSystem, aGame ) {
			this.system = aSystem;
			this.game = aGame;
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this.system.verbose( 'created entity' );
		}
	});

	return Entity;
});
