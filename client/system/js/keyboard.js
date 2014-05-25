
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Button
	 * @param {DOMelement} aElement
	 */

	var Button = Class.extend({
		element: null,
		down: false,

		/**
		 * Method: onUp
		 * @param {DOMevent} aEvent
		 */

		onUp: function( aEvent ) {

		},

		/**
		 * Method: onDown
		 * @param {DOMevent} aEvent
		 */

		onDown: function( aEvent ) {

		},

		/**
		 * Method: init
		 * @param {Object} aBinding
		 */

		init: function( aBinding ) {
			var binding = aBinding || { key: null },
				self = this;

			this.element = document.getElementById( 'bglKeyboard' + binding.key );

			if ( this.element != null ) {
				this.element.addEventListener( 'mousedown', function( aEvent ) {
					self.onDown( aEvent );
				}, true );

				this.element.addEventListener( 'mouseup', function( aEvent ) {
					self.onUp( aEvent );
				}, true );
			}

			if ( binding.hasOwnProperty( 'onUp' ) ) {
				this.onUp = binding.onUp;
			}

			if ( binding.hasOwnProperty( 'onDown' ) ) {
				this.onDown = binding.onDown;
			}
		}
	});

	/**
	 * Class: Input
	 */

	var Keyboard = Class.extend({
		system: null,
		binding: { },

		/**
		 * Method: setDefaultBindings
		 */

		setDefaultBindings: function( ) {
			var i;

			for ( i in GLOBAL.input.keyboard ) {
				this.binding[ GLOBAL.input.keyboard[ i ] ] = new Button({
					key: GLOBAL.input.keyboard[ i ]
				});
			}
		},

		/**
		 * Method: bindEventListeners
		 */

		bindEventListeners: function( ) {
			var self = this;

			window.addEventListener( 'keydown', function( aEvent ) {
				if ( aEvent.repeat != true && self.system.game.running == true ) {
					self.handleKeypress( aEvent.keyCode, true );
				}
			}, true );

			window.addEventListener( 'keyup', function( aEvent ) {
				if ( aEvent.repeat != true && self.system.game.running == true ) {
					self.handleKeypress( aEvent.keyCode, false );
				}
			}, true );
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

				if ( aDown == true ) {
					this.showKeyDown( binding.element );

					binding.onDown( );
				}
				else {
					this.showKeyUp( binding.element );

					binding.onUp( );
				}
			}
		},

		/**
		 * Method: bindKey
		 * @param {Object} aBinding
		 */

		bindKey: function( aBinding ) {
			this.binding[ aBinding.key ] = new Button( aBinding );
		},

		/**
		 * showKeyDown
		 * @param {DOMelement} aElement
		 */

		showKeyDown: function( aElement ) {
			if ( aElement != null ) {
				aElement.className = 'selected';
			}
		},

		/**
		 * Method: showKeyUp
		 * @param {DOMelement} aElement
		 */

		showKeyUp: function( aElement ) {
			if ( aElement != null ) {
				aElement.className = '';
			}
		},

		/**
		 * Method: init
		 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			this.system = aSystem;

			this.setDefaultBindings( );
			this.bindEventListeners( );

			this.system.verbose( 'init->input->keyboard' );
		}
	});

	return Keyboard;
});
