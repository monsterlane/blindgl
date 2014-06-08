
define( [ 'class' ], function( ) {
	'use strict';

	/**
	 * Class: Vector
	 */

	var Vector = Class.extend({
		/**
		 * Method: init
		 * @param {Mixed} aX
		 * @param {Int} aY
		 */

		init: function( aX, aY ) {
			if ( typeof aX === 'object' && aX.hasOwnProperty( 'x' ) === true && aX.hasOwnProperty( 'y' ) === true ) {
				this.x = aX.x;
				this.y = aX.y;
			}
			else {
				this.x = Number( aX ) || 0;
				this.y = Number( aY ) || 0;
			}
		},

		/**
		 * Method: set
		 * @param {Mixed} aX
		 * @param {Int} aY
		 */

		set: function( aX, aY ) {
			if ( typeof aX === 'object' && aX.hasOwnProperty( 'x' ) === true && aX.hasOwnProperty( 'y' ) === true ) {
				this.x = aX.x;
				this.y = aX.y;
			}
			else {
				this.x = Number( aX ) || this.x;
				this.y = Number( aY ) || this.y;
			}

			return this;
		},

		/**
		 * Method: setAngle
		 * @param {Int} aAngle
		 */

		setAngle: function( aAngle ) {
			var o = this.angle( ),
				a = Number( aAngle ) || 0;

			this.rotate( -o );
			this.rotate( a );

			return this;
		},

		/**
		 * Method: scale
		 * @param {Float} aScale
		 */

		scale: function( aScale ) {
			var r = Number( aScale ) || 1;

			this.x *= r;
			this.y *= r;

			return this;
		},

		/**
		 * Method: add
		 * @param {Object} aVector
		 * @param {Float} aScale
		 */

		add: function( aVector, aScale ) {
			var s = Number( aScale ) || 1;

			this.x += aVector.x * s;
			this.y += aVector.y * s;
		},

		/**
		 * Method: subtract
		 * @param {Object} aVector
		 * @param {Float} aScale
		 */

		subtract: function( aVector, aScale ) {
			var s = Number( aScale ) || 1;

			this.x -= aVector.x * s;
			this.y -= aVector.y * s;
		},

		/**
		 * Method: dot
		 * @param {Object} aVector
		 */

		dot: function( aVector ) {
			return ( this.x * aVector.x + this.y * aVector.y );
		},

		/**
		 * Method: magnitude
		 */

		magnitude: function( ) {
			return Math.sqrt( this.x * this.x + this.y * this.y );
		},

		/**
		 * Method: rotate
		 * @param {Int} aAngle
		 */

		rotate: function( aAngle ) {
			var a = Number( aAngle ) || 0,
				x = this.x * Math.cos( a ) + this.y * Math.sin( a ),
				y = this.x * Math.sin( a ) - this.y * Math.cos( a );

			this.x = x;
			this.y = -y;

			return this;
		},

		/**
		 * Method: angle
		 */

		angle: function( ) {
			return Math.atan2( -this.y, this.x );
		},

		/**
		 * Method: invert
		 */

		invert: function( ) {
			this.x = -this.x;
			this.y = -this.y;

			return this;
		},

		/**
		 * Method: isNear
		 * @param {Int} aX
		 * @param {Int} aY
		 * @param {Int} aRadius
		 */

		isNear: function( aX, aY, aRadius ) {
			var a = ( this.x - aX ),
				b = ( this.y - aY ),
				m = a * a + b * b;

			if ( m <= aRadius * aRadius ) {
				return true;
			}

			return false;
		}
	});

	return Vector;
});
