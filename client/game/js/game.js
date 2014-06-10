
define( [ '../../system/js/world' ], function( aWorld ) {
	'use strict';

	/**
	 * Class: Game
	 */

	var Game = aWorld.extend({
		/**
		 * Method: start
		 */

		start: function( ) {
			this._super( );

			this.system.verbose( 'game->start' );

			this.loadView({
				background: {
					fileUrl: 'game/img/world/map/0-0.png',
					width: 1024,
					height: 768
				},
				foreground: {
					fileUrl: 'game/img/world/weather/fog.png',
					width: 512,
					height: 512,
					effect: {
						name: 'bounce',
						offset: {
							x: 100,
							y: 100
						},
						velocity: {
							x: 0.15,
							y: 0.15
						}
					},
					opacity: 0.3
				},
				spawn: {
					x: 174,
					y: 150
				},
				grid: [
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleBottomLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleBottomRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						}
					],
					[
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'angleTopRight',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'none',
							effect: null
						},
						{
							collide: 'angleTopLeft',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					],
					[
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						},
						{
							collide: 'wall',
							effect: null
						}
					]
				]
			});

			/*
			this.system.audio.playMusic({
				fileUrl: 'game/snd/world/music/overworld.mp3',
				volume: 70,
				effectName: 'fadeIn',
				effectDuration: 10000
			});
			*/

			this.addClient( this.view.spawn );
		}
	});

	return Game;
});
