
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
				enter: 13,
				shift: 16,
				ctrl: 17,
				alt: 18,
				escape: 27,
				space: 32,
				left: 37,
				up: 38,
				right: 39,
				down: 40,
				zero: 48,
				one: 49,
				two: 50,
				three: 51,
				four: 52,
				five: 53,
				six: 54,
				seven: 55,
				eight: 56,
				nine: 57,
				a: 65,
				b: 66,
				c: 67,
				d: 68,
				e: 69,
				f: 70,
				g: 71,
				h: 72,
				i: 73,
				j: 74,
				k: 75,
				l: 76,
				m: 77,
				n: 78,
				o: 79,
				p: 80,
				q: 81,
				r: 82,
				s: 83,
				t: 84,
				u: 85,
				v: 86,
				w: 87,
				x: 88,
				y: 89,
				z: 90,
				f1: 112,
				f2: 113,
				f3: 114,
				f4: 115,
				f5: 116,
				f6: 117,
				f7: 118,
				f8: 119,
				f9: 120,
				f10: 121,
				f11: 122,
				f12: 123
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
