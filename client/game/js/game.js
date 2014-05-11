
define( [ '../../system/js/player' ], function( Player ) {
	return {
		system: null,
		players: [ ],
		addPlayer: function( ) {
			var player = new Player( ),
				count;

			this.players.push( player );

			player.init( this.system, this );
			player.spawn( );

			if ( ( count = document.getElementById( 'bglPlayers' ) ) != null ) {
				count.innerHTML = parseInt( count.innerHTML, 10 ) + 1;
			}
		},
		start: function( ) {
			var self = this;

			this.system.verbose( 'blindGL: game started' );

			this.system.audio.playMusic( 'game/snd/overworld.mp3', 25 );

			this.addPlayer( );
		},
		init: function( aSystem ) {
			this.system = aSystem;

			this.start( );

			this.system.think( );
		}
	};
});
