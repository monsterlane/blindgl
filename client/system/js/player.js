
define( [ 'global', 'vector', 'sprite', 'class' ], function( aGlobal, aVector, aSprite ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: Player
	 */

	var Player = aSprite.subClass({
		/**
		 * Method: walk
		 */

		idle: function( ) {
			this.setState( GLOBAL.ai.idle );

			return this;
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

			return this;
		},

		/**
		 * Method: updatePosition
		 */

		updatePosition: function( ) {
			var position;

			this._super( );

			if ( this.goal === null ) {
				position = new aVector( this.position.x + this.velocity.x, this.position.y + this.velocity.y );

				this.position = this.isReachable( position );
			}

			return this;
		}
	});

	return Player;
});
