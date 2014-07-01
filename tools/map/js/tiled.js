
define( [ 'class' ], function( ) {
	'use strict';

	/**
	 * Class: Tiled
	 */

	var Tiled = Object.subClass({
		/**
		 * Method: init
		 */

		init: function( ) {
			var gui = document.getElementById( 'bglInterface' ),
				tbody = document.getElementById( 'bglTiledCells' ),
				frag = document.createDocumentFragment( ),
				tr, td, input,
				button, textarea,
				i, len1, j, len2,
				self = this;

			gui.style.width = '1024px';

			tbody.style.backgroundImage = "url('img/0-0.png')";

			for ( i = 0, len1 = ( 768 / 16 ); i < len1; i++ ) {
				tr = document.createElement( 'tr' );

				for ( j = 0, len2 = ( 1024 / 16 ); j < len2; j++ ) {
					td = document.createElement( 'td' );
					tr.appendChild( td );

					input = document.createElement( 'input' );
					input.setAttribute( 'type', 'text' );
					td.appendChild( input );

					input.addEventListener( 'focus', function( ) {
						this.select( );
					}, true );

					input.addEventListener( 'keyup', function( ) {
						if ( this.value !== '' ) {
							this.value = this.value.toUpperCase( );

							if ( this.parentNode.nextSibling != null ) {
								this.parentNode.nextSibling.firstChild.focus( );
							}
							else if ( this.parentNode.parentNode.nextSibling != null ) {
								this.parentNode.parentNode.nextSibling.firstChild.firstChild.focus( );
							}
						}
					}, true );
				}

				frag.appendChild( tr );
			}

			tbody.appendChild( frag );

			document.getElementById( 'bglTiledGenerateButton' ).addEventListener( 'click', function( aEvent ) {
				aEvent.preventDefault( );
				self.generateGrid( );
			}, true );

			document.getElementById( 'bglTiledLoadButton' ).addEventListener( 'click', function( aEvent ) {
				aEvent.preventDefault( );
				self.loadGrid( );
			}, true );

			document.getElementById( 'bglTiledOutput' ).addEventListener( 'click', function( aEvent ) {
				this.select( );
			}, true );
		},

		/**
		 * Method: generateGrid
		 */

		generateGrid: function( ) {
			var data = document.getElementById( 'bglTiledCells' ),
				output = document.getElementById( 'bglTiledOutput' ),
				str = [ ],
				input, type, effect,
				i, len1, j, len2;

			str.push( '[' );

			for ( i = 0, len1 = data.childNodes.length; i < len1; i++ ) {
				str.push( '	[' );

				for ( j = 0, len2 = data.childNodes[ i ].childNodes.length; j < len2; j++ ) {
					input = data.childNodes[ i ].childNodes[ j ].childNodes[ 0 ];
					effect = 'null';

					if ( input.value === 'O' ) {
						type = 'none';
					}
					else if ( input.value === 'X' ) {
						type = 'wall';
					}
					else if ( input.value === 'T' ) {
						type = 'topHalfOpen';
					}
					else if ( input.value === 'B' ) {
						type = 'bottomHalfOpen';
					}
					else if ( input.value === 'L' ) {
						type = 'leftHalfOpen';
					}
					else if ( input.value === 'R' ) {
						type = 'rightHalfOpen';
					}
					else if ( input.value === 'V' ) {
						type = 'angleTopRight';
					}
					else if ( input.value === 'C' ) {
						type = 'angleTopLeft';
					}
					else if ( input.value === 'M' ) {
						type = 'angleBottomRight';
					}
					else if ( input.value === 'N' ) {
						type = 'angleBottomLeft';
					}
					else if ( input.value === 'G' ) {
						type = 'none';

						effect = '\'grass\'';
					}
					else if ( input.value === 'W' ) {
						type = 'none';

						effect = '\'water\'';
					}
					else {
						input.focus( );
						return;
					}

					str.push( '		{' );
					str.push( '			collide: \'' + type + '\',' );
					str.push( '			effect: ' + effect );

					if ( j + 1 < len2 ) {
						str.push( '		},' );
					}
					else {
						str.push( '		}' );
					}
				}

				if ( i + 1 < len1 ) {
					str.push( '	],' );
				}
				else {
					str.push( '	]' );
				}
			}

			str.push( ']' );

			output.value = str.join( "\n" );

			return this;
		},

		/**
		 * Method: loadGrid
		 */

		loadGrid: function( ) {
			var data = document.getElementById( 'bglTiledCells' ),
				output = document.getElementById( 'bglTiledOutput' ),
				input = eval( output.value ),
				code, i, len1, j, len2;

			if ( input instanceof Array ) {
				if ( input[ 0 ] instanceof Array ) {
					for ( i = 0, len1 = input.length; i < len1; i++ ) {
						for ( j = 0, len2 = input[ i ].length; j < len2; j++ ) {
							if ( input[ i ][ j ].effect === 'grass' ) {
								code = 'G';
							}
							else if ( input[ i ][ j ].effect === 'water' ) {
								code = 'W';
							}
							else if ( input[ i ][ j ].collide === 'none' ) {
								code = 'O';
							}
							else if ( input[ i ][ j ].collide === 'wall' ) {
								code = 'X';
							}
							else if ( input[ i ][ j ].collide === 'topHalfOpen' ) {
								code = 'T';
							}
							else if ( input[ i ][ j ].collide === 'bottomHalfOpen' ) {
								code = 'B';
							}
							else if ( input[ i ][ j ].collide === 'leftHalfOpen' ) {
								code = 'L';
							}
							else if ( input[ i ][ j ].collide === 'rightHalfOpen' ) {
								code = 'R';
							}
							else if ( input[ i ][ j ].collide === 'angleTopRight' ) {
								code = 'V';
							}
							else if ( input[ i ][ j ].collide === 'angleTopLeft' ) {
								code = 'C';
							}
							else if ( input[ i ][ j ].collide === 'angleBottomRight' ) {
								code = 'M';
							}
							else if ( input[ i ][ j ].collide === 'angleBottomLeft' ) {
								code = 'N';
							}
							else {
								code = '';
							}

							data.childNodes[ i ].childNodes[ j ].childNodes[ 0 ].value = code;
						}
					}
				}
			}

			output.value = '';

			return this;
		}
	});

	return Tiled;
});

