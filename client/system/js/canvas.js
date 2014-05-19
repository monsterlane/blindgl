
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Layer
	 */

	var Layer = Class.extend({
		width: 0,
		height: 0,
		display: null,
		displayContext: null,
		buffer: null,
		bufferContext: null,
		entities: [ ],

		/**
		 * Method: init
		 * @param {Int} aWidth
		 * @param {Int} aHeight
		 * @param {Int} aIndex
		 */

		init: function( aWidth, aHeight, aIndex ) {
			this.width = aWidth;
			this.height = aHeight;

			this.display = document.createElement( 'canvas' );
			this.display.id = 'bglLayer' + aIndex;
			this.display.className = 'bglLayer';
			this.display.width = aWidth;
			this.display.height = aHeight;
			this.display.style.zIndex = 10 + ( aIndex * 10 );
			this.displayContext = this.display.getContext( '2d' );

			this.displayContext.scale( 1, 1 );
			this.displayContext.mozImageSmoothingEnabled = false;
			this.displayContext.webkitImageSmoothingEnabled = false;

			this.buffer = document.createElement( 'canvas' );
			this.buffer.width = aWidth;
			this.buffer.height = aHeight;
			this.bufferContext = this.buffer.getContext( '2d' );

			this.bufferContext.scale( 1, 1 );
			this.bufferContext.mozImageSmoothingEnabled = false;
			this.bufferContext.webkitImageSmoothingEnabled = false;
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var i, len;

			for ( i = 0, len = this.entities.length; i < len; i++ ) {
				this.entities[ i ].think( );
			}

			this.displayContext.clearRect( 0, 0, this.width, this.height );
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
				layer = new Layer( this.resolution[ 0 ], this.resolution[ 1 ], i );

				frag.appendChild( layer.display );

				this.layers.push( layer );
			}

			el.appendChild( frag );

			this.system.verbose( 'init->canvas' );
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
