
define( [ 'global', 'class' ], function( aGlobal ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Soundbank
	 * @param {DOMelement} aElement
	 */

	var Soundbank = Class.extend({
		sound: null,
		playing: false,
		paused: false,
		next: null,

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
		banks: [ ],
		lastBank: false,

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

				this.addBank( bank );
			}

			el.appendChild( frag );

			this.system.verbose( 'init->audio' );
		},

		/**
		 * Method: addBank
		 * @param {Object} aBank
		 */

		addBank: function( aBank ) {
			var bank = new Soundbank( aBank ),
				len = this.banks.length;

			this.banks.push( bank );

			if ( len == 0 ) {
				this.banks[ 0 ].next = this.banks[ 0 ];
				this.lastBank = this.banks[ 0 ];
			}
			else {
				this.banks[ len ].next = this.banks[ 0 ];
				this.banks[ len - 1 ].next = this.banks[ len ];
			}
		},

		/**
		 * Method: getNextBank
		 */

		getNextBank: function( ) {
			var bank,
				i, len;

			if ( this.lastBank === false ) {
				return false;
			}

			i = 0;
			len = this.banks.length;
			bank = this.lastBank;

			while ( i < len && bank.playing == true ) {
				bank = bank.next;
				i++;
			}

			return ( i == len ) ? false : bank;
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

				bank.sound.setAttribute( 'src', aUrl );
				bank.sound.setAttribute( 'volume', aVolume );
				bank.sound.load( );

				bank.playing = true;
				bank.sound.play( );
			}
		},

		/**
		 * Method: playRandomSound
		 * @param {Array} aSounds
		 */

		playRandomSound: function( aSounds ) {
			var rnd = Math.floor( Math.random( ) * aSounds.length );

			this.playSound( aSounds[ rnd ].file_url, aSounds[ rnd ].volume );
		}
	});

	return Audio;
});
