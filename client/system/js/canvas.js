
define(function( ) {
	const NUM_LAYERS = 3;

	var SCREEN_RESOLUTIONS = [
		[ 800, 600 ],
		[ 1024, 576 ],
		[ 1024, 768 ],
		[ 1280, 720 ],
		[ 1280, 1024 ],
		[ 1600, 1200 ],
		[ 1664, 936 ],
		[ 1920, 1080 ]
	];

	/**
	 * Class: Layer
	 */

	function Layer( ) {
		this.display = null;
		this.displayContext = null;
		this.buffer = null;
		this.bufferContext = null;
	}

	/**
	 * Method: init
	 * @param {Int} aIndex
	 */

	Layer.prototype.init = function( aIndex ) {
		this.display = document.createElement( 'canvas' );
		this.display.setAttribute( 'id', 'bglLayer' + aIndex );
		this.display.setAttribute( 'class', 'bglLayer' );
		this.display.setAttribute( 'style', 'z-index:' + ( 10 + ( aIndex * 10 ) ) );
		this.displayContext = this.display.getContext( '2d' );

		this.buffer = document.createElement( 'canvas' );
		this.bufferContext = this.buffer.getContext( '2d' );
	};

	/**
	 * Class: Canvas
	 */

	var Canvas = {
		system: null,
		resolution: null,
		layers: [ ]
	};

	/**
	 * Method: setResolution
	 */

	Canvas.setResolution = function( ) {
		var el = document.getElementById( 'bglInterface' ),
			width = window.innerWidth,
			height = window.innerHeight,
			i = SCREEN_RESOLUTIONS.length,
			res = 0;

		while ( i-- ) {
			if ( SCREEN_RESOLUTIONS[ i ][ 0 ] < width && SCREEN_RESOLUTIONS[ i ][ 1 ] < height ) {
				res = i;
				break;
			}
		}

		el.style.width = SCREEN_RESOLUTIONS[ res ][ 0 ] + 'px';
		el.style.height = SCREEN_RESOLUTIONS[ res ][ 1 ] + 'px';
		el.style.margin = '-' + parseInt( SCREEN_RESOLUTIONS[ res ][ 1 ] / 2, 10 ) + 'px 0 0 -' + parseInt( SCREEN_RESOLUTIONS[ res ][ 0 ] / 2, 10 ) + 'px';
		el.style.display = 'block';

		el.querySelectorAll( 'header' )[ 0 ].style.display = 'inline-block';
		el.querySelectorAll( 'footer' )[ 0 ].style.display = 'inline-block';
	};

	/**
	 * Method: init
	 * @param {Object} aSystem
	 */

	Canvas.init = function( aSystem ) {
		var el = document.getElementById( 'bglCanvas' ),
			frag = document.createDocumentFragment( ),
			layer, i;

		this.system = aSystem;

		this.setResolution( );

		for ( i = 0; i < NUM_LAYERS; i++ ) {
			layer = new Layer( );
			layer.init( i );

			frag.appendChild( layer.display );

			this.layers.push( layer );
		}

		el.appendChild( frag );

		this.system.verbose( 'canvas renderer initialized' );
	};

	return Canvas;
});
