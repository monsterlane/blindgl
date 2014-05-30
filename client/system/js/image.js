
define( [ 'global', 'entity', 'class' ], function( aGlobal, aEntity ) {
	var GLOBAL = new aGlobal( );

	/**
	 * Class: Image
	 */

	var Image = aEntity.extend({
		element: null,
		width: 0,
		height: 0,
		effect: null,
		opacity: 1,
		dirty: false,

		/**
		 * Method: init
		 * @param {Object} aOptions
		 */

		init: function( aOptions ) {
			var image = aOptions.element,
				self = this;

			this._super( aOptions );

			this.element = document.createElement( 'img' );
			this.element.setAttribute( 'src', image.fileUrl );

			this.element.addEventListener( 'load', function( ) {
				self.dirty = true;
			}, true );

			if ( image.hasOwnProperty( 'effect' ) == true ) {
				this.effect = image.effect;

				if ( this.effect == 'bounce' ) {
					this.width += 100;
					this.height += 100;
				}
			}

			if ( image.hasOwnProperty( 'opacity' ) ) {
				this.opacity = image.opacity;
			}

			this.system.verbose( 'image->init' );
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			var pattern;

			if ( this.dirty == true ) {
				if ( this.opacity < 1 ) {
					this.layer.bufferContext.save( );
					this.layer.bufferContext.globalAlpha = this.opacity;
				}

				if ( this.effect == 'repeat' || this.effect == 'bounce' ) {
					this.layer.bufferContext.clearRect( 0, 0, this.layer.width, this.layer.height );

					pattern = this.layer.bufferContext.createPattern( this.element, 'repeat' );

					this.layer.bufferContext.fillStyle = pattern;
					this.layer.bufferContext.fillRect( this.position.x, this.position.y, this.layer.width, this.layer.height );
				}
				else {
					this.layer.bufferContext.clearRect( this.position.x, this.position.y, this.width, this.height );
					this.layer.bufferContext.drawImage( this.element, this.position.x, this.position.y );
				}

				if ( this.opacity < 1 ) {
					this.layer.bufferContext.restore( );
				}

				this.dirty = false;
			}
		},

		/**
		 * Method: think
		 */

		/*
		think: function( ) {
			var minX = 0,
				maxX = 50,
				minY = 0,
				maxY = 50,
				posX, posY;

			this._super( );

			if ( this.effect == 'bounce' ) {
				if ( this.goal == null ) {
					posX = Math.floor( Math.random( ) * ( maxX - minX + 1 ) ) + minX;
					posY = Math.floor( Math.random( ) * ( maxY - minY + 1 ) ) + minY;

					this.setGoal({
						x: posX - 50,
						y: posY - 50,
					});
				}
				else {
					this.moveToGoal( );
				}

				this.dirty = true;
			}
		}
		*/
	});

	return Image;
});
