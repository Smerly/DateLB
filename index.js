/* eslint-disable no-tabs */
/* eslint-disable indent */
const moment = require('moment');

class D {
	constructor(...args) {
		this.date = new Date(...args);
	}

	// set year() {
	// 	return this._date.setFullYear(year);
	// }

	get year() {
		return this.date.getFullYear();
	}

	get yr() {
		return this.date.getFullYear() % 100;
	}

	get month() {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const actualMonth = months[this.date.getMonth()];
		return actualMonth;
	}

	get mon() {
		return this.date.getMonth();
	}

	get day() {
		const days = [
			'Saturday',
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
		];
		const theDay = days[this.date.getDay()];
		return theDay;
	}

	get dy() {
		let newDay = '';
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const theDay = days[this.date.getDay()];
		let i;
		// eslint-disable-next-line no-plusplus
		for (i = 0; i < theDay.length; i++) {
			if (i < 3) {
				// eslint-disable-next-line no-multi-assign
				newDay = newDay += theDay[i];
			}
		}

		return newDay;
	}

	get hours() {
		return this.date.getHours();
	}

	get seconds() {
		return this.date.getSeconds();
	}

	get date() {
		let dated = '';
		const x = this.date.getDate();
		if (x < 10) {
			dated = `0${this.date.getDate()}`;
			return dated;
		}
		// return this._date.getDate();
		return this.date.getDate();
	}

	get dt() {
		return this.date.getDate();
	}

	/**
	 * format
	 * @param {String} input the format you want with the corresponding keys
	 * @returns {String} returns the date of that object in the given format.
	 */
	format(dates) {
		const m = moment(this.date).format(dates);
		return m;
	}

	/**
	 * when
	 * @param no parameter
	 * @returns {String} amount of time between now and the object's date
	 */

	when() {
		const ago = moment([this.year, this.mon, this.dt]).fromNow();
		return ago;
	}
}

// Testing Ahead --------

// 26

const ex = new D('9/26/1965');

// console.log(ex.date);

// eslint-disable-next-line no-console
console.log(ex.format('y/m/d'));

// console.log(ex.when());

module.exports = {
	D,
};
