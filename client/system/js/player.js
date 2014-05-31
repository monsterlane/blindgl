
define( [ 'global', 'sprite', 'class' ], function( aGlobal, aSprite ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Class: Player
	 */

	var Player = aSprite.extend({
		/**
		 * Method: walk
		 */

		idle: function( ) {
			this.setState( GLOBAL.ai.idle );
		},

		/**
		 * Method: move
		 * @param {Int} aX
		 * @param {Int} aY
		 */

		move: function( aX, aY ) {
			if ( this.goal !== null ) {
				this.reachedGoal( );
			}

			this._super( aX, aY );
		},

		/**
		 * Method: updatePosition
		 */

		updatePosition: function( ) {
			var posX, posY;

			this._super( );

			if ( this.goal === null ) {
				posX = this.position.x + this.velocity.x;
				posY = this.position.y + this.velocity.y;

				this.position = this.isReachable({
					x: posX,
					y: posY
				});
			}
		}
	});

	return Player;
});
