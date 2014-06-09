
define( [ 'global', 'vector', 'entity', 'class' ], function( aGlobal, aVector, aEntity ) {
	'use strict';

	var GLOBAL = new aGlobal( );

	/**
	 * Class: Image
	 */

	var Image = aEntity.extend({
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

			this.pattern = null;

			if ( image.hasOwnProperty( 'effect' ) === true && image.effect.hasOwnProperty( 'name' ) === true ) {
				this.effect = image.effect;

				if ( this.effect.name === 'bounce' ) {
					this.width += this.effect.offset.x;
					this.height += this.effect.offset.y;

					this.maxVelocity = new aVector({
						x: this.effect.velocity.x,
						y: this.effect.velocity.y
					});
				}
			}
			else {
				this.effect = null;
			}

			if ( image.hasOwnProperty( 'opacity' ) === true ) {
				this.opacity = image.opacity;
			}
			else {
				this.opacity = 1;
			}

			this.dirty = false;

			this.system.verbose( 'image->init' );
		},

		/**
		 * Method: draw
		 */

		draw: function( ) {
			if ( this.dirty === true ) {
				if ( this.effect && ( this.effect.name === 'repeat' || this.effect.name === 'bounce' ) ) {
					if ( this.pattern === null ) {
						this.pattern = this.layer.bufferContext.createPattern( this.element, 'repeat' );
					}

					this.layer.bufferContext.save( );
					this.layer.bufferContext.clearRect( 0, 0, this.layer.width, this.layer.height );

        			this.layer.bufferContext.translate( this.position.x, this.position.y );
        			this.layer.bufferContext.globalAlpha = this.opacity;
					this.layer.bufferContext.fillStyle = this.pattern;
					this.layer.bufferContext.fillRect( -( this.position.x ), -( this.position.y ), this.layer.width, this.layer.height );
					this.layer.bufferContext.translate( -( this.position.x ), -( this.position.y ) );
					this.layer.bufferContext.restore( );
				}
				else {
					this.layer.bufferContext.save( );
					this.layer.bufferContext.clearRect( this.position.x, this.position.y, this.width, this.height );
					this.layer.bufferContext.globalAlpha = this.opacity;
					this.layer.bufferContext.drawImage( this.element, this.position.x, this.position.y );
					this.layer.bufferContext.restore( );
				}

				this.dirty = false;
			}
		},

		/**
		 * Method: think
		 */

		think: function( ) {
			var minX, maxX,
				minY, maxY,
				posX, posY;

			this._super( );

			if ( this.effect ) {
					if ( this.effect.name === 'bounce' ) {
						minX = minY = 0;
						maxX = this.effect.offset.x;
						maxY = this.effect.offset.y;

						if ( this.goal === null ) {
							posX = Math.floor( Math.random( ) * ( maxX - minX + 1 ) ) + minX;
							posY = Math.floor( Math.random( ) * ( maxY - minY + 1 ) ) + minY;

							this.setGoal({
								x: posX - this.effect.offset.x,
								y: posY - this.effect.offset.y
							});
						}
						else {
							this.moveToGoal( );
						}

						this.dirty = true;
					}
				}
			}
	});

	return Image;
});
