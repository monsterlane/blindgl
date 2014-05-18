
define( [ 'global', 'class' ], function( Global ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Layer
	 */

	var Layer = Class.extend({
		display: null,
		displayContext: null,
		buffer: null,
		bufferContext: null,
		entities: [ ],

		/**
		 * Method: init
		 * @param {Int} aIndex
		 */

		init: function( aIndex ) {
			this.display = document.createElement( 'canvas' );
			this.display.setAttribute( 'id', 'bglLayer' + aIndex );
			this.display.setAttribute( 'class', 'bglLayer' );
			this.display.setAttribute( 'style', 'z-index:' + ( 10 + ( aIndex * 10 ) ) );
			this.displayContext = this.display.getContext( '2d' );

			this.buffer = document.createElement( 'canvas' );
			this.bufferContext = this.buffer.getContext( '2d' );
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var i, len;

			for ( i = 0, len = this.entities.length; i < len; i++ ) {
				this.entities[ i ].think( );
			}

			this.displayContext.drawImage( this.buffer, 0, 0 );
		}
	});

	/**
	 * Class: Canvas
	 */

	var Canvas = Class.extend({
		system: null,
		resolution: null,
		layers: [ ],

		/**
		 * Method: setResolution
		 */

		setResolution: function( ) {
			var el = document.getElementById( 'bglInterface' ),
				width = window.innerWidth,
				height = window.innerHeight,
				i = GLOBAL.video.resolutions.length,
				res = 0;

			while ( i-- ) {
				if ( GLOBAL.video.resolutions[ i ][ 0 ] < width && GLOBAL.video.resolutions[ i ][ 1 ] < height ) {
					res = i;
					break;
				}
			}

			this.resolution = GLOBAL.video.resolutions[ res ];

			el.style.width = GLOBAL.video.resolutions[ res ][ 0 ] + 'px';
			el.style.height = GLOBAL.video.resolutions[ res ][ 1 ] + 'px';
			el.style.margin = '-' + parseInt( GLOBAL.video.resolutions[ res ][ 1 ] / 2, 10 ) + 'px 0 0 -' + parseInt( GLOBAL.video.resolutions[ res ][ 0 ] / 2, 10 ) + 'px';
			el.style.display = 'inline-block';

			el.querySelectorAll( 'header' )[ 0 ].style.display = 'inline-block';
			el.querySelectorAll( 'footer' )[ 0 ].style.display = 'inline-block';
		},

		/**
		 * Method: init
		 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			var el = document.getElementById( 'bglCanvas' ),
				frag = document.createDocumentFragment( ),
				layer, i;

			this.system = aSystem;

			this.setResolution( );

			for ( i = 0; i < GLOBAL.video.numLayers; i++ ) {
				layer = new Layer( i );

				frag.appendChild( layer.display );

				this.layers.push( layer );
			}

			el.appendChild( frag );

			this.system.verbose( 'canvas renderer initialized' );
		},

		/**
		 * Method: clear
		 */

		clear: function( ) {
			var el = document.getElementById( 'bglCanvas' );

			el.style.backgroundImage = 'none';
			el.style.backgroundColor = '#fff';
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			for ( i = 0; i < GLOBAL.video.numLayers; i++ ) {
				this.layers[ i ].draw( );
			}
		}
	});

	return Canvas;
});
