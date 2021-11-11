// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


test('Test isPhoneNumber for correct phone number', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Test isPhoneNumber for correct phone number with different spaces', () => {
    expect(functions.isPhoneNumber('(098)123-4567')).toBe(true);
});

test('Test isPhoneNumber for incorrect phone number, not enough digits', () => {
    expect(functions.isPhoneNumber('(098) 123-456')).toBe(false);
});

test('Test isPhoneNumber for incorrect phone number, more than required digits', () => {
    expect(functions.isPhoneNumber('(098) 123-456-789')).toBe(false);
});

test('Test isEmail for correct email', () => {
    expect(functions.isEmail('n1sharma@ucsd.edu')).toBe(true);
});

test('Test isEmail for correct email', () => {
    expect(functions.isEmail('n1sharma@yahoo.com')).toBe(true);
});

test('Test isEmail for incorrect email', () => {
    expect(functions.isEmail('n1sharma-ucsd.edu')).toBe(false);
});

test('Test isEmail for incorrect email', () => {
    expect(functions.isEmail('n1sharmaucsd.edu')).toBe(false);
});

test('Test isStrongPassword for correct password', () => {
    expect(functions.isStrongPassword('Nish_123')).toBe(true);
});

test('Test isStrongPassword for correct password', () => {
    expect(functions.isStrongPassword('iIioQoUwU_123')).toBe(true);
});

test('Test isStrongPassword for incorrect password, incorrect symbol', () => {
    expect(functions.isStrongPassword('Nish@123')).toBe(false);
});

test('Test isStrongPassword for incorrect password, incorrect length', () => {
    expect(functions.isStrongPassword('Nis')).toBe(false);
});

test('Test isDate for correct date', () => {
    expect(functions.isDate('01/01/2020')).toBe(true);
});

test('Test isDate for correct date', () => {
    expect(functions.isDate('31/12/2020')).toBe(true);
});

test('Test isDate for incorrect date, too many chars', () => {
    expect(functions.isDate('013/01/2020')).toBe(false);
});

test('Test isDate for incorrect date, not enough chars', () => {
    expect(functions.isDate('27/01/20')).toBe(false);
});

test('Test isHexColor for correct color', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('Test isHexColor for correct color', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});

test('Test isHexColor for incorrect color, hash misplaced', () => {
    expect(functions.isHexColor('ff#ffff')).toBe(false);
});

test('Test isHexColor for correct color, not enough chars', () => {
    expect(functions.isHexColor('#f')).toBe(false);
});