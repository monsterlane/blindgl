
define( [ 'class' ], function( ) {
	/**
	 * Class: Entity
	 */

	var Entity = Class.extend({
		system: null,
		game: null,
		init: function( aSystem, aGame ) {
			this.system = aSystem;
			this.game = aGame;
		},
		spawn: function( ) {
			this.system.verbose( 'created entity' );
		}
	});

	return Entity;
});
