
define( [ 'global', 'vector', 'class' ], function( aGlobal, aVector ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: Polygon
	 */

	var Polygon = Object.subClass({
		/**
		 * Method: init
		 * @param {Array} aVertices
		 */

		init: function( aVertices ) {
			this.vertices = aVertices;

			this.center = this.getCenter( );
			this.angle = 0;
			this.edges = [ ];
			this.normals = [ ];

			this.update( );
		},

		/**
		 * Method: getCenter
		 * @return {Object} aVector
		 */

		getCenter: function( ) {
			var x = 0,
				y = 0,
				i, len;

			for ( i = 0, len = this.vertices.length; i < len; i++ ) {
				x += this.vertices[ i ].x;
				y += this.vertices[ i ].y;
			}

			x = parseInt( x / len, 10 );
			y = parseInt( y / len, 10 );

			return new aVector( x, y );
		},

		/**
		 * Method: update
		 */

		update: function( ) {
			var p1, p2, e, n,
				i, len;

			this.edges = [ ];
			this.normals = [ ];

			for ( i = 0, len = this.vertices.length; i < len; i++ ) {
				p1 = this.vertices[ i ];
				p2 = ( i < len - 1 ) ? this.vertices[ i + 1 ] : this.vertices[ 0 ];

				e = p2.clone( ).subtract( p1 );
				n = e.clone( ).perp( ).normalize( );

				this.edges.push( e );
				this.normals.push( n );
			}

			return this;
		},

		/**
		 * Method: flattenVerticesOn
		 * @param {Vector} aNormal
		 */

		flattenVerticesOn: function( aNormal ) {
			var min = Number.MAX_VALUE,
				max = -( Number.MAX_VALUE ),
				result, dot,
				i, len;

			for ( i = 0, len = this.vertices.length; i < len; i++ ) {
				dot = this.vertices[ i ].dot( aNormal );

				if ( dot < min ) { min = dot; }
				if ( dot > max ) { max = dot; }
			}

			result = [ min, max ];

			return result;
		},

		/**
		 * Method: rotate
		 * @param {Int} aAngle
		 */

		rotate: function( aAngle ) {
			var a = Number( aAngle ) || 0,
				i, len;

			this.angle += a;

			for ( i = 0, len = this.vertices.length; i < len; i++ ) {
				this.vertices[ i ].rotate( a );
			}

			this.update( );

			return this;
		},

		/**
		 * Method: setAngle
		 * @param {Int} aAngle
		 */

		setAngle: function( aAngle ) {
			var a = Number( aAngle ) || 0,
				i, len;

			this.angle = a;

			for ( i = 0, len = this.vertices.length; i < len; i++ ) {
				this.vertices[ i ].setAngle( a );
			}

			this.update( );

			return this;
		}
	});

	return Polygon;
});
