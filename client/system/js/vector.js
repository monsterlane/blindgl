
define( [ 'class' ], function( ) {
	'use strict';

	/**
	 * Class: Vector
	 */

	var Vector = Object.subClass({
		/**
		 * Method: init
		 * @param {Mixed} aX
		 * @param {Int} aY
		 */

		init: function( aX, aY ) {
			this.x = Number( aX ) || 0;
			this.y = Number( aY ) || 0;
		},

		/**
		 * Method: set
		 * @param {Mixed} aX
		 * @param {Int} aY
		 */

		set: function( aX, aY ) {
			this.x = Number( aX ) || this.x;
			this.y = Number( aY ) || this.y;

			return this;
		},

		/**
		 * Method: setAngle
		 * @param {Int} aAngle
		 */

		setAngle: function( aAngle ) {
			var o = this.angle( ),
				a = Number( aAngle ) || 0;

			this.rotate( -( o ) );
			this.rotate( a );

			return this;
		},

		/**
		 * Method: add
		 * @param {Object} aVector
		 */

		add: function( aVector ) {
			this.x += aVector.x;
			this.y += aVector.y;

			return this;
		},

		/**
		 * Method: subtract
		 * @param {Object} aVector
		 */

		subtract: function( aVector ) {
			this.x -= aVector.x;
			this.y -= aVector.y;

			return this;
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
			return Math.sqrt( this.len2( ) );
		},

		/**
		 * Method: len2
		 */

		len2: function( ) {
			return this.dot( this );
		},

		/**
		 * Method: normalize
		 */

		normalize: function( ) {
			var m = this.magnitude( );

			if ( m > 0 ) {
				this.x = this.x / m;
				this.y = this.y / m;
			}

			return this;
		},

		/**
		 * Method: rotate
		 * @param {Int} aAngle
		 */

		rotate: function( aAngle ) {
			var a = Number( aAngle ) || 0,
				x = this.x,
				y = this.y;

			this.x = x * Math.cos( a ) - y * Math.sin( a ),
			this.y = x * Math.sin( a ) + y * Math.cos( a );

			return this;
		},

		/**
		 * Method: invert
		 */

		invert: function( ) {
			this.x = -( this.x );
			this.y = -( this.y );

			return this;
		},

		/**
		 * Method: perp
		 */

		perp: function( ) {
			var x = this.x;

			this.x = this.y;
			this.y = -( x );

			return this;
		},

		/**
		 * Method: clone
		 */

		clone: function( ) {
			return new Vector( this.x, this.y );
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
