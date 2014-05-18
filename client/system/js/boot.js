
/**
 * config
 */

require.config({
	urlArgs: new Date( ).getTime( ).toString( )
});

/**
 * blindGL
 */

require( [ 'blindgl' ], function( blindGL ) {
	var engine = new blindGL( );
});
