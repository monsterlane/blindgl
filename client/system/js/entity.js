
define( [ 'class' ], function( ) {
	var Entity = Class.extend({
		system: null,
		game: null,
		init: function( aSystem, aGame ) {
			this.system = aSystem;
			this.game = aGame;
		},
		spawn: function( ) {
			console.log( 'blindGL: created entity' );
		}
	});

	return Entity;
});
