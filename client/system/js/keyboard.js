
define( [ 'global', 'class' ], function( aGlobal ) {
	'use strict';

	var GLOBAL = aGlobal.get( );

	/**
	 * Class: Button
	 * @param {DOMelement} aElement
	 */

	var Button = Object.subClass({
		/**
		 * Method: init
		 * @param {Object} aBinding
		 */

		init: function( aBinding ) {
			var binding = aBinding || { key: null },
				self = this;

			this.element = document.getElementById( 'bglKeyboard' + binding.key );
			this.down = false;

			if ( this.element !== null ) {
				this.element.addEventListener( 'mousedown', function( aEvent ) {
					self.onDown( aEvent );
				}, true );

				this.element.addEventListener( 'mouseup', function( aEvent ) {
					self.onUp( aEvent );
				}, true );
			}

			if ( binding.hasOwnProperty( 'onUp' ) === true ) {
				this.onUp = binding.onUp;
			}

			if ( binding.hasOwnProperty( 'onDown' ) === true ) {
				this.onDown = binding.onDown;
			}
		},

		/**
		 * Method: onUp
		 * @param {DOMevent} aEvent
		 */

		onUp: function( aEvent ) {
			return this;
		},

		/**
		 * Method: onDown
		 * @param {DOMevent} aEvent
		 */

		onDown: function( aEvent ) {
			return this;
		}
	});

	/**
	 * Class: Input
	 */

	var Keyboard = Object.subClass({
		/**
		 * Method: init
		 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			this.system = aSystem;
			this.binding = { };

			this.setDefaultBindings( );
			this.bindEventListeners( );

			this.system.verbose( 'init->input->keyboard' );
		},

		/**
		 * Method: setDefaultBindings
		 */

		setDefaultBindings: function( ) {
			var i;

			for ( i in GLOBAL.input.keyboard ) {
				if ( GLOBAL.input.keyboard.hasOwnProperty( i ) === true ) {
					this.binding[ GLOBAL.input.keyboard[ i ] ] = new Button({
						key: GLOBAL.input.keyboard[ i ]
					});
				}
			}

			return this;
		},

		/**
		 * Method: bindEventListeners
		 */

		bindEventListeners: function( ) {
			var self = this;

			window.addEventListener( 'keydown', function( aEvent ) {
				if ( aEvent.repeat !== true && self.system.game.running === true ) {
					self.handleKeypress( aEvent.keyCode, true );
				}
			}, true );

			window.addEventListener( 'keyup', function( aEvent ) {
				if ( aEvent.repeat !== true && self.system.game.running === true ) {
					self.handleKeypress( aEvent.keyCode, false );
				}
			}, true );

			return this;
		},

		/**
		 * Method: handleKeypress
	 	 * @param {Int} aKey
	 	 * @param {Bool} aDown
		 */

		handleKeypress: function( aKey, aDown ) {
			var binding;

			if ( this.binding[ aKey ] ) {
				binding = this.binding[ aKey ];

				binding.down = aDown;

				if ( aDown === true ) {
					this.showKeyDown( binding.element );

					binding.onDown( );
				}
				else {
					this.showKeyUp( binding.element );

					binding.onUp( );
				}
			}

			return this;
		},

		/**
		 * Method: bindKey
		 * @param {Object} aBinding
		 */

		bindKey: function( aBinding ) {
			this.binding[ aBinding.key ] = new Button( aBinding );

			return this;
		},

		/**
		 * showKeyDown
		 * @param {DOMelement} aElement
		 */

		showKeyDown: function( aElement ) {
			if ( aElement !== null ) {
				aElement.className = 'selected';
			}

			return this;
		},

		/**
		 * Method: showKeyUp
		 * @param {DOMelement} aElement
		 */

		showKeyUp: function( aElement ) {
			if ( aElement !== null ) {
				aElement.className = '';
			}

			return this;
		}
	});

	return Keyboard;
});
