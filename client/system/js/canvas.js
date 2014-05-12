
define(function( ) {
	/**
	 * Class: Layer
	 */

	function Layer( ) {

	}

	/**
	 * Class: Canvas
	 */

	var Canvas = {
		system: null
	};

	/**
	 * Method: init
	 * @param {Object} aSystem
	 */

	Canvas.init = function( aSystem ) {
		this.system = aSystem;

		this.system.verbose( 'canvas renderer initialized' );
	};

	return Canvas;
});
