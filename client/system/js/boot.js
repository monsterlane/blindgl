
require.config({
	urlArgs: new Date( ).getTime( ).toString( )
});

require( [ 'blindgl' ], function( blindGL ) {
	var engine = new blindGL( );
});
