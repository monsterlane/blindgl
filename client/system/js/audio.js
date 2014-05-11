
define(function( ) {
	const NUM_BANKS = 32;

	function Soundbank( aSound ) {
		this.sound = aSound;
		this.playing = false;
		this.paused = false;
	}

	function Audio( aSystem ) {
		this.system = aSystem;
		this.background = null;
		this.banks = [ ];
	}

	Audio.prototype.init = function( ) {
		var el = document.getElementById( 'bglAudio' ),
			frag = document.createDocumentFragment( ),
			bank, i;

		bank = document.createElement( 'audio' );
		bank.setAttribute( 'id', 'bglAudioBackground' );
		bank.setAttribute( 'autoplay', 'autoplay' );
		bank.setAttribute( 'loop', 'loop' );
		frag.appendChild( bank );

		this.background = new Soundbank( bank );

		for ( i = 0; i < NUM_BANKS; i++ ) {
			bank = document.createElement( 'audio' );
			bank.setAttribute( 'id', 'bglAudioBank' + i );
			bank.setAttribute( 'autoplay', 'autoplay' );
			frag.appendChild( bank );

			this.banks.push( new Soundbank( bank ) );
		}

		el.appendChild( frag );
	};

	Audio.prototype.playMusic = function( aUrl, aVolume ) {
		this.background.sound.setAttribute( 'src', aUrl );
		this.background.sound.setAttribute( 'volume', aVolume );
		this.background.sound.load( );

		this.background.playing = true;
		this.background.sound.play( );
	};

	Audio.prototype.pauseMusic = function( ) {
		this.background.sound.pause( );
		this.background.playing = false;
		this.background.paused = true;
	};

	Audio.prototype.stopMusic = function( ) {
		this.background.sound.pause( );
		this.background.sound.currentTime = 0;
		this.background.playing = false;
		this.background.paused = false;
	};

	return Audio;
});
