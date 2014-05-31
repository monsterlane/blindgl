
define( [ 'global', 'class' ], function( aGlobal ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Class: Layer
	 */

	var Layer = Class.extend({
		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			var options = aOptions || { };

			this.width = options.width;
			this.height = options.height;

			this.display = document.createElement( 'canvas' );
			this.display.id = 'bglLayer' + options.index;
			this.display.className = 'bglLayer';
			this.display.width = options.width;
			this.display.height = options.height;
			this.display.style.zIndex = 10 + ( options.index * 10 );
			this.displayContext = this.display.getContext( '2d' );

			this.displayContext.scale( 1, 1 );
			this.displayContext.mozImageSmoothingEnabled = false;
			this.displayContext.webkitImageSmoothingEnabled = false;

			this.buffer = document.createElement( 'canvas' );
			this.buffer.width = options.width;
			this.buffer.height = options.height;
			this.bufferContext = this.buffer.getContext( '2d' );

			this.bufferContext.scale( 1, 1 );
			this.bufferContext.mozImageSmoothingEnabled = false;
			this.bufferContext.webkitImageSmoothingEnabled = false;
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			this.displayContext.clearRect( 0, 0, this.width, this.height );
			this.displayContext.drawImage( this.buffer, 0, 0 );
		}
	});

	/**
	 * Class: Canvas
	 */

	var Canvas = Class.extend({
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
			this.resolution = null;
			this.layers = [ ];

			this.setResolution( );

			for ( i in GLOBAL.video.layers ) {
				if ( GLOBAL.video.layers.hasOwnProperty( i ) === true ) {
					layer = new Layer({
						width: this.resolution[ 0 ],
						height: this.resolution[ 1 ],
						index: GLOBAL.video.layers[ i ]
					});

					frag.appendChild( layer.display );

					this.layers[ GLOBAL.video.layers[ i ] ] = layer;
				}
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
			var i, len;

			for ( i = 0, len = this.layers.length; i < len; i++ ) {
				this.layers[ i ].draw( );
			}
		}
	});

	return Canvas;
});
