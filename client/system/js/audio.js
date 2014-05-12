
define( [ 'global', 'linkedlist', 'class' ], function( Global, LinkedList ) {
	var GLOBAL = new Global( );

	/**
	 * Class: Soundbank
	 * @param {DOMelement} aElement
	 */

	var Soundbank = Class.extend({
		sound: null,
		playing: false,
		paused: false,

		/**
		 * Method: init
		 * @param {DOMelement} aElement
		 */

		init: function( aElement) {
			var self = this;

			this.sound = aElement;

			this.sound.addEventListener( 'ended', function( ) {
				self.playing = false;
				self.sound.removeAttribute( 'src' );
				self.sound.removeAttribute( 'volume' );
			});
		}
	});

	/**
	 * Class: Audio
	 */

	var Audio = Class.extend({
		system: null,
		background: null,
		banks: new LinkedList( ),
		lastBank: null,

		/**
		 * Method: init
		 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
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

			for ( i = 0; i < GLOBAL.audio.numBanks; i++ ) {
				bank = document.createElement( 'audio' );
				bank.setAttribute( 'id', 'bglAudioBank' + i );
				bank.setAttribute( 'autoplay', 'autoplay' );
				frag.appendChild( bank );

				this.banks.add( new Soundbank( bank ) );
			}

			el.appendChild( frag );

			this.system.verbose( 'audio engine initialized' );
		},

		/**
		 * Method: getNextBank
		 */

		getNextBank: function( ) {
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
		},

		/**
		 * Method: playMusic
		 * @param {String} aUrl
		 * @param {Int} aVolume
		 */

		playMusic: function( aUrl, aVolume ) {
			this.background.sound.setAttribute( 'src', aUrl );
			this.background.sound.setAttribute( 'volume', aVolume );
			this.background.sound.load( );

			this.background.playing = true;
			this.background.sound.play( );
		},

		/**
		 * Method: pauseMusic
		 */

		pauseMusic: function( ) {
			this.background.sound.pause( );
			this.background.playing = false;
			this.background.paused = true;
		},

		/**
		 * Method: stopMusic
		 */

		stopMusic: function( ) {
			this.background.sound.pause( );
			this.background.sound.currentTime = 0;
			this.background.playing = false;
			this.background.paused = false;
		},

		/**
		 * Method: playSound
		 * @param {String} aUrl
		 * @param {Int} aVolume
		 */

		playSound: function( aUrl, aVolume ) {
			var bank = this.getNextBank( );

			if ( bank !== false ) {
				this.lastBank = bank;

				bank.data.sound.setAttribute( 'src', aUrl );
				bank.data.sound.setAttribute( 'volume', aVolume );
				bank.data.sound.load( );

				bank.data.playing = true;
				bank.data.sound.play( );
			}
		}
	});

	return Audio;
});
