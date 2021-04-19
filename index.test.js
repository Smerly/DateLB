const date = require('./index');
const unixEpoch = new date.D(0);

test('Test Year', () => {
	const e = new date.D('9/26/1965');
	expect(e.year).toBe(1965);
});
test('Test yr', () => {
	const e = new date.D('9/26/1965');
	expect(e.yr).toBe(65);
});
test('Test month', () => {
	const e = new date.D('9/26/1965');
	expect(e.month).toBe('September');
});
test('Test mon', () => {
	const e = new date.D('9/26/1965');
	expect(e.mon).toBe(8);
});
test('Test day', () => {
	const e = new date.D('9/26/1965');
	expect(e.day).toBe('Saturday');
});

test('Test dy', () => {
	const e = new date.D('9/26/1965');
	expect(e.dy).toBe('Sun');
});

test('Test hours', () => {
	const e = new date.D('9/26/1965');
	expect(e.hours).toBe(0);
});

test('Test seconds', () => {
	const e = new date.D('9/26/1965');
	expect(e.seconds).toBe(0);
});

test('Test date', () => {
	const e = new date.D('9/26/1965');
	const f = new date.D('9/1/1965');
	expect(e.date).toBe(26);
	expect(f.date).toBe('01');
});

test('Test dt', () => {
	const e = new date.D('9/26/1965');
	const f = new date.D('9/1/1965');
	expect(e.dt).toBe(26);
	expect(f.dt).toBe(1);
});

// ---------------

test('Test format', () => {
	const e = new date.D('9/26/1965');
	expect(e.format('y/m/d')).toBe('1965/9/26');
});

test('Test when', () => {
	const e = new date.D('9/26/1965');
	expect(e.when()).toBe('56 years ago');
});
