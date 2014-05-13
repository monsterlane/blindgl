
define( [ 'global', 'class' ], function( Global ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Entity
	 */

	var Entity = Class.extend({
		system: null,
		game: null,
		position: {
			x: 0,
			y: 0,
			z: 0
		},
		velocity: {
			x: 0,
			y: 0,
			z: 0
		},
		solid: GLOBAL.solid.none,
		moveType: GLOBAL.moveType.none,
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
