
define( [ 'class' ], function( ) {
	/**
	 * Class: Global
	 */

	var Global = Class.extend({
		settings: {
			verbose: true,
			showFps: true
		},
		audio: {
			numBanks: 32
		},
		video: {
			fps: 60,
			resolutions: [
				[ 800, 600 ],
				[ 1024, 576 ],
				[ 1024, 768 ],
				[ 1280, 720 ],
				[ 1280, 1024 ],
				[ 1600, 1200 ],
				[ 1664, 936 ],
				[ 1920, 1080 ]
			],
			numLayers: 3
		},
		input: {
			keyboard: {
				up: 38,
				down: 40,
				left: 37,
				right: 39
			}
		},
		solid: {
			not: 0,
			bbox: 1
		},
		moveType: {
			none: 0,
			walk: 1,
			run: 2
		},
		ai: {
			idle: 0,
			walk: 1,
			run: 2,
			chase: 3,
			evade: 4
		}
	});

	return Global;
});
