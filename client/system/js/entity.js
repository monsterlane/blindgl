
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Entity
	 */

	var Entity = Class.extend({
		system: null,
		game: null,
		layer: null,
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
		 * Method: setLayer
		 * @param {Object} aLayer
		 */

		setLayer: function( aLayer ) {
			this.layer = aLayer;
			this.layer.entities.push( this );
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {
			this.system.verbose( 'created entity' );
		},

		/**
		 * Method: think
		 */

		think: function( ) {

		}
	});

	return Entity;
});
