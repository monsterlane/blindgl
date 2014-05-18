
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Button
	 * @param {DOMelement} aElement
	 */

	var Button = Class.extend({
		down: false,

		/**
		 * Method: onUp
		 */

		onUp: function( ) {

		},

		/**
		 * Method: onDown
		 */

		onDown: function( ) {

		},

		/**
		 * Method: init
		 * @param {Object} aBinding
		 */

		init: function( aBinding ) {
			var binding = aBinding || { };

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
				this.binding[ GLOBAL.input.keyboard[ i ] ] = new Button( );
			}
		},

		/**
		 * Method: bindEventListeners
		 */

		bindEventListeners: function( ) {
			var self = this;

			document.body.addEventListener( 'keydown', function( aEvent ) {
				if ( aEvent.repeat != true ) {
					self.handleKeypress( aEvent.keyCode, true );
				}
			}, true );

			document.body.addEventListener( 'keyup', function( aEvent ) {
				if ( aEvent.repeat != true ) {
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
			if ( this.binding[ aKey ] ) {
				this.binding[ aKey ].down = aDown;

				if ( aDown == true ) {
					this.binding[ aKey ].onDown( );
				}
				else {
					this.binding[ aKey ].onUp( );
				}
			}
		},

		/**
		 * Method: bindKey
		 * @param {Int} aKey
		 * @param {Object} aBinding
		 */

		bindKey: function( aKey, aBinding ) {
			this.binding[ aKey ] = new Button( aBinding );
		},

		/**
		 * Method: init
		 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			this.system = aSystem;

			this.setDefaultBindings( );
			this.bindEventListeners( );

			this.system.verbose( 'init->input' );
		}
	});

	return Keyboard;
});
