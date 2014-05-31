
define( [ 'global', 'class' ], function( aGlobal ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Class: Button
	 * @param {DOMelement} aElement
	 */

	var Button = Class.extend({
		/**
		 * Method: click
		 * @param {DOMevent} aEvent
		 */

		click: function( aEvent ) {

		},

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
			var binding = aBinding || { element: null },
				self = this;

			this.element = binding.element;
			this.down = false;

			if ( this.element != null ) {
				this.element.addEventListener( 'click', function( aEvent ) {
					self.click( aEvent );
				}, true );

				this.element.addEventListener( 'mousedown', function( aEvent ) {
					self.onDown( aEvent );
				}, true );

				this.element.addEventListener( 'mouseup', function( aEvent ) {
					self.onUp( aEvent );
				}, true );
			}

			if ( binding.hasOwnProperty( 'click' ) ) {
				this.click = binding.click;
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

	var Mouse = Class.extend({
		/**
		 * Method: getClickOffset
		 * @param {DOMevent} aEvent
		 */

		getClickOffset: function( aEvent ) {
			var el = aEvent.target,
				x = 0,
				y = 0;

			while ( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
				x += el.offsetLeft - el.scrollLeft;
				y += el.offsetTop - el.scrollTop;
				el = el.offsetParent;
			}

			x = aEvent.clientX - x;
			y = aEvent.clientY - y;

			return {
				x: x,
				y: y
			};
		},
		/**
		 * Method: bindKey
		 * @param {Object} aBinding
		 */

		bindKey: function( aBinding ) {
			this.binding[ aBinding.element.id ] = new Button( aBinding );
		},

		/**
		 * Method: init
		 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			this.system = aSystem;
			this.binding = { };

			this.system.verbose( 'init->input->mouse' );
		}
	});

	return Mouse;
});
