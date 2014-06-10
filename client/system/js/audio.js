
define( [ 'global', 'class' ], function( aGlobal ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Class: Soundbank
	 * @param {DOMelement} aElement
	 */

	var Soundbank = Class.extend({
		/**
		 * Method: init
		 * @param {DOMelement} aElement
		 */

		init: function( aElement) {
			var self = this;

			this.sound = aElement;
			this.playing = false;
			this.paused = false;
			this.next = null;

			this.sound.addEventListener( 'ended', function( ) {
				if ( self.sound !== null && self.sound.hasAttribute( 'loop' ) === false ) {
					self.stop( );
				}
			}, true );
		},

		/**
		 * Method: play
		 */

		play: function( ) {
			if ( this.sound !== null ) {
				this.playing = true;
				this.sound.play( );
			}
		},

		/**
		 * Method: stop
		 */

		stop: function( ) {
			if ( this.sound !== null && this.playing === true ) {
				this.sound.pause( );
				this.sound.currentTime = 0;

				this.sound.removeAttribute( 'src' );
				this.sound.removeAttribute( 'volume' );
				this.sound.removeAttribute( 'loop' );

				this.playing = false;
			}
		}
	});

	/**
	 * Class: Audio
	 */

	var Audio = Class.extend({
		/**
		 * Method: init
		 * @param {Object} aSystem
		 */

		init: function( aSystem ) {
			var el = document.getElementById( 'bglAudio' ),
				frag = document.createDocumentFragment( ),
				bank, i;

			this.system = aSystem;

			this.banks = [ ];
			this.lastBank = null;

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

			if ( len === 0 ) {
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
		 * @return {Object/Bool}
		 */

		getNextBank: function( ) {
			var bank, i;

			if ( this.lastBank === false ) {
				return false;
			}

			i = this.banks.length;
			bank = this.lastBank;

			while (i-- && bank.playing === true ) {
				bank = bank.next;
			}

			return ( i === 0 ) ? false : bank;
		},

		/**
		 * Method: playMusic
		 * @param {Object} aSound
		 */

		playMusic: function( aSound ) {
			var sound = {
				fileUrl: aSound.fileUrl,
				volume: aSound.volume || 50,
				effectName: aSound.effectName || false,
				effectDuration: aSound.effectDuration || 0
			};

			this.background.sound.setAttribute( 'src', sound.fileUrl );
			this.background.sound.setAttribute( 'volume', sound.volume );
			this.background.sound.setAttribute( 'loop', '' );
			this.background.sound.load( );

			if ( sound.effectName === 'fadeIn' ) {
				this.effectsFadeIn( this.background, sound.effectDuration );
			}
			else {
				this.background.playing = true;
				this.background.sound.play( );
			}
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
		 * @param {Object} aSound
		 * @return {Object/Bool}
		 */

		playSound: function( aSound ) {
			var bank = this.getNextBank( ),
				volume = aSound.volume || 75,
				loop = aSound.loop || false,
				effectName = aSound.effectName || false,
				effectDuration = aSound.effectDuration || 0;

			if ( bank !== false ) {
				this.lastBank = bank;

				bank.sound.setAttribute( 'src', aSound.fileUrl );
				bank.sound.setAttribute( 'volume', volume );

				if ( loop ) {
					bank.sound.setAttribute( 'loop', '' );
				}

				bank.sound.load( );

				if ( effectName === 'fadeIn' ) {
					this.effectFadeIn( bank, effectDuration );
				}
				else {
					bank.play( );
				}
			}

			return bank;
		},

		/**
		 * Method: playRandomSound
		 * @param {Array} aSounds
		 * @return {Object/Bool}
		 */

		playRandomSound: function( aSounds ) {
			var rnd = Math.floor( Math.random( ) * aSounds.files.length ),
				sound = aSounds.files[ rnd ],
				volume = aSounds.volume || sound.volume || 50,
				loop = aSounds.loop || sound.loop || false;

			return this.playSound({
				fileUrl: sound.fileUrl,
				volume: volume,
				loop: loop
			});
		},

		/**
		 * Method: effectsFadeIn
		 * @param {Object} aSoundbank
		 */

		effectsFadeIn: function( aSoundbank, aDuration ) {
			var bank = aSoundbank,
				duration = aDuration,
				volume, max, step,
				self = this;

			if ( bank.playing === false ) {
				max = parseFloat( bank.sound.getAttribute( 'volume' ), 10 );
				duration = duration / 20;
				step = parseFloat( max / duration, 10 );

				bank.sound.setAttribute( 'volume', 0 );
				bank.sound.setAttribute( 'data-volume', max );
				bank.sound.setAttribute( 'data-step', step );

				bank.play( );

				setTimeout(function( ) {
					self.effectsFadeIn( bank, duration );
				});
			}
			else {
				max = parseFloat( bank.sound.getAttribute( 'data-volume' ), 10 );
				step = parseFloat( bank.sound.getAttribute( 'data-step' ), 10 );

				volume = parseFloat( bank.sound.getAttribute( 'volume' ), 10 );
				volume += step;

				if ( volume > max ) {
					volume = max;

					bank.sound.setAttribute( 'volume', volume );
					bank.sound.removeAttribute( 'data-volume' );
					bank.sound.removeAttribute( 'data-step' );
				}
				else {
					bank.sound.setAttribute( 'volume', volume );

					setTimeout(function( ) {
						self.effectsFadeIn( bank, duration );
					});
				}
			}
		}
	});

	return Audio;
});
