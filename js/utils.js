'use strict';
class Utils {
	/** random int
	 *
	 * @param {int}
	 * @param {int}
	 * @returns {int}
	 */
	static getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
}