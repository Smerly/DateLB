const moment = require('moment');

class D {
	constructor(...args) {
		this._date = new Date(...args);
	}

	get year() {
		return this._date.getFullYear();
	}

	// set year() {
	// 	return this._date.setFullYear(year);
	// }

	get year() {
		return this._date.getFullYear();
	}

	get yr() {
		return this._date.getFullYear() % 100;
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
		const actualMonth = months[this._date.getMonth()];
		return actualMonth;
	}

	get mon() {
		return this._date.getMonth();
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
		const theDay = days[this._date.getDay()];
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
		const theDay = days[this._date.getDay()];
		var i;
		for (i = 0; i < theDay.length; i++) {
			if (i < 3) {
				newDay = newDay += theDay[i];
			}
		}

		return newDay;
	}

	get hours() {
		return this._date.getHours();
	}
	get seconds() {
		return this._date.getSeconds();
	}

	get date() {
		let dated = '';
		const x = this._date.getDate();
		if (x < 10) {
			dated = '0' + this._date.getDate();
			return dated;
		} else {
			// return this._date.getDate();
			return this._date.getDate();
		}
	}

	get dt() {
		return this._date.getDate();
	}

	/**
	 * format
	 * @param {String} input the format you want with the corresponding keys
	 * @returns {String} returns the date of that object in the given format.
	 */
	format(dates) {
		let m = moment(this._date).format(dates);
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
ex = new D('9/26/1965');

// console.log(ex.date);

console.log(ex.format('y/m/d'));

// console.log(ex.when());

module.exports = {
	D,
};
