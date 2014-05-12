
define( [ 'linkedlist' ], function( LinkedList ) {
	const AUDIO_BANKS = 32;

	/**
	 * Class: Soundbank
	 * @param {DOMelement} aElement
	 */

	function Soundbank( aElement ) {
		var self = this;

		this.sound = aElement;
		this.playing = false;
		this.paused = false;

		this.sound.addEventListener( 'ended', function( ) {
			self.playing = false;
			self.sound.removeAttribute( 'src' );
			self.sound.removeAttribute( 'volume' );
		});
	}

	/**
	 * Class: Audio
	 */

	var Audio = {
		system: null,
		background: null,
		banks: new LinkedList( ),
		lastBank: null
	};

	/**
	 * Method: init
	 * @param {Object} aSystem
	 */

	Audio.init = function( aSystem ) {
		var el = document.getElementById( 'bglAudio' ),
			frag = document.createDocumentFragment( ),
			bank, i;

		this.system = aSystem;

		bank = document.createElement( 'audio' );
		bank.setAttribute( 'id', 'bglAudioMusic' );
		bank.setAttribute( 'autoplay', 'autoplay' );
		bank.setAttribute( 'loop', 'loop' );
		frag.appendChild( bank );

		this.background = new Soundbank( bank );

		for ( i = 0; i < AUDIO_BANKS; i++ ) {
			bank = document.createElement( 'audio' );
			bank.setAttribute( 'id', 'bglAudioBank' + i );
			bank.setAttribute( 'autoplay', 'autoplay' );
			frag.appendChild( bank );

			this.banks.add( new Soundbank( bank ) );
		}

		el.appendChild( frag );

		this.system.verbose( 'audio engine initialized' );
	};

	/**
	 * Method: getNextBank
	 */

	Audio.getNextBank = function( ) {
		var next = ( this.lastBank == null || this.lastBank == this.banks.tail ) ? this.banks.head : this.lastBank.next,
			i = 0;

		if ( next.playing == true ) {
			while ( i < this.banks.length ) {
				if ( next.playing == false ) {
					break;
				}

				next = ( next == this.banks.tail ) ? this.banks.head : this.lastBank.next;
				i++;
			}

		}

		return ( i == this.banks.length ) ? false : next;
	};

	/**
	 * Method: playMusic
	 * @param {String} aUrl
	 * @param {Int} aVolume
	 */

	Audio.playMusic = function( aUrl, aVolume ) {
		this.background.sound.setAttribute( 'src', aUrl );
		this.background.sound.setAttribute( 'volume', aVolume );
		this.background.sound.load( );

		this.background.playing = true;
		this.background.sound.play( );
	};

	/**
	 * Method: pauseMusic
	 */

	Audio.pauseMusic = function( ) {
		this.background.sound.pause( );
		this.background.playing = false;
		this.background.paused = true;
	};

	/**
	 * Method: stopMusic
	 */

	Audio.stopMusic = function( ) {
		this.background.sound.pause( );
		this.background.sound.currentTime = 0;
		this.background.playing = false;
		this.background.paused = false;
	};

	/**
	 * Method: playSound
	 * @param {String} aUrl
	 * @param {Int} aVolume
	 */

	Audio.playSound = function( aUrl, aVolume ) {
		var bank = this.getNextBank( );

		if ( bank !== false ) {
			this.lastBank = bank;

			bank.data.sound.setAttribute( 'src', aUrl );
			bank.data.sound.setAttribute( 'volume', aVolume );
			bank.data.sound.load( );

			bank.data.playing = true;
			bank.data.sound.play( );
		}
	};

	return Audio;
});
