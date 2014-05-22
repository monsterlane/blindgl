
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
			y: 0
		},
		velocity: {
			x: 0,
			y: 0
		},
		moving: false,
		state: GLOBAL.ai.idle,
		lastState: GLOBAL.ai.idle,
		direction: GLOBAL.direction.down,
		solid: GLOBAL.solid.none,
		bbox: [ 0, 0 ],
		moveType: GLOBAL.moveType.none,

		/**
		 * Method: init
		 * @param {Object} aSystem
		 * @param {Object} aGame
		 */

		init: function( aSystem, aGame ) {
			this.system = aSystem;
			this.game = aGame;

			this.system.verbose( 'entity->init' );
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
		 * Method: setPosition
		 * @param {Int} aX
		 * @param {Int} aY
		 */

		setPosition: function( aX, aY ) {
			this.position.x = aX;
			this.position.y = aY;
		},

		/**
		 * Method: setState
		 * @param {Int} aState
		 * @param {Object} aOptions
		 */

		setState: function( aState, aOptions ) {
			var options = aOptions || { };

			if ( this.lastState != this.state ) {
				this.lastState = this.state;
			}

			if ( this.state != aState ) {
				this.state = aState;
			}
		},

		/**
		 * Method: updateState
		 */

		updateState: function( ) {
			this.moving = !( this.velocity.x == 0 && this.velocity.y == 0 );
		},

		/**
		 * Method: setDirection
		 * @param {Int} aDirection
		 */

		setDirection: function( aDirection ) {
			this.direction = aDirection;
		},

		/**
		 * Method: spawn
		 */

		spawn: function( ) {

		},

		/**
		 * Method: think
		 */

		think: function( ) {

		}
	});

	return Entity;
});
