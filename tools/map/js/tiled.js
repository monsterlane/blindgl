
define( [ 'class' ], function( ) {
	'use strict';

	/**
	 * Class: Tiled
	 */

	var Tiled = Class.extend({
		/**
		 * Method: init
		 */

		init: function( ) {
			var el = document.getElementById( 'bglWindow' ),
				frag = document.createDocumentFragment( ),
				table, tbody, tr, td, input,
				button, textarea,
				i, len1, j, len2,
				self = this;

			table = document.createElement( 'table' );
			table.setAttribute( 'width', 1024 );
			table.setAttribute( 'height', 768 );
			table.setAttribute( 'cellpadding', 0 );
			table.setAttribute( 'cellspacing', 0 );
			table.setAttribute( 'border', 0 );
			table.style.backgroundImage = "url('img/0-0.png')";
			frag.appendChild( table );

			tbody = document.createElement( 'tbody' );
			table.appendChild( tbody );

			for ( i = 0, len1 = ( 768 / 16 ); i < len1; i++ ) {
				tr = document.createElement( 'tr' );

				for ( j = 0, len2 = ( 1024 / 16 ); j < len2; j++ ) {
					td = document.createElement( 'td' );
					tr.appendChild( td );

					input = document.createElement( 'input' );
					input.setAttribute( 'type', 'text' );
					td.appendChild( input );
				}

				tbody.appendChild( tr );
			}

			textarea = document.createElement( 'textarea' );
			textarea.style.width = '1024px';
			textarea.style.height = '64px';

			frag.appendChild( textarea );

			button = document.createElement( 'button' );
			button.setAttribute( 'type', 'button' );
			button.innerHTML = 'Generate Collision Map';

			button.addEventListener( 'click', function( aEvent ) {
				aEvent.preventDefault( );
				self.generateGrid( table, textarea );
			}, true );

			frag.appendChild( button );

			el.appendChild( frag );
		},

		/**
		 * Method: generateGrid
		 * @param {DOMelement} aData
		 * @param {DOMelement} aOutput
		 */

		generateGrid: function( aData, aOutput ) {
			var data = aData.firstChild,
				output = aOutput,
				str = [ ], input, type,
				i, len1, j, len2;

			for ( i = 0, len1 = data.childNodes.length; i < len1; i++ ) {
				str.push( '[' );

				for ( j = 0, len2 = data.childNodes[ i ].childNodes.length; j < len2; j++ ) {
					input = data.childNodes[ i ].childNodes[ j ].childNodes[ 0 ].value;

					if ( input.value === 'O' ) {
						type = 'none';
					}
					else {
						type = 'wall';
					}

					str.push( '	{' );
					str.push( '	collide: \'' + type + '\',' );
					str.push( '	effect:null' );
					str.push( '},' );
				}

				str.push( ']' );
			}

			output.value = str.join( "\n" );
		}
	});

	return Tiled;
});
