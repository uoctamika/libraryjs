// test.js
const assert = require('assert');
const { printf } = require('../dist/cjs/stdio/index.js'); // asumsikan printf sudah dikompilasi ke .js

// Tangkap output
let output = '';
const originalWrite = process.stdout.write;
process.stdout.write = (chunk) => {
  output += chunk;
  return true;
};

// Fungsi bantu untuk menjalankan tes
function test(name, fn) {
  output = ''; // reset output sebelum setiap tes
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (e) {
    console.log(`✗ ${name}: ${e.message}`);
  }
}

// ================== %s ==================
test('%s - string', () => {
  const ret = printf('Hello %s', 'World');
  assert.strictEqual(output, 'Hello World');
  assert.strictEqual(ret, 11);
});

test('%s - number', () => {
  const ret = printf('%s', 42);
  assert.strictEqual(output, '42');
  assert.strictEqual(ret, 2);
});

test('%s - object', () => {
  const ret = printf('%s', { a: 1 });
  assert.strictEqual(output, '[object Object]');
  assert.strictEqual(ret, 15);
});

test('%s - null', () => {
  const ret = printf('%s', null);
  assert.strictEqual(output, 'null');
  assert.strictEqual(ret, 4);
});

test('%s - undefined', () => {
  const ret = printf('%s', undefined);
  assert.strictEqual(output, 'undefined');
  assert.strictEqual(ret, 9);
});

// ================== %d / %i ==================
test('%d - integer', () => {
  const ret = printf('%d', 42);
  assert.strictEqual(output, '42');
  assert.strictEqual(ret, 2);
});

test('%d - string integer', () => {
  const ret = printf('%d', '  42  ');
  assert.strictEqual(output, '42');
  assert.strictEqual(ret, 2);
});

test('%d - float (truncated)', () => {
  const ret = printf('%d', 3.14);
  assert.strictEqual(output, '3');
  assert.strictEqual(ret, 1);
});

test('%d - non-number (NaN)', () => {
  const ret = printf('%d', 'abc');
  assert.strictEqual(output, 'NaN');
  assert.strictEqual(ret, 3);
});

test('%i behaves like %d', () => {
  const ret = printf('%i', 10);
  assert.strictEqual(output, '10');
  assert.strictEqual(ret, 2);
});

// ================== %f ==================
test('%f - float', () => {
  const ret = printf('%f', 3.14);
  assert.strictEqual(output, '3.140000');
  assert.strictEqual(ret, 9);
});

test('%f - integer', () => {
  const ret = printf('%f', 5);
  assert.strictEqual(output, '5.000000');
  assert.strictEqual(ret, 8);
});

test('%f - non-number (NaN)', () => {
  const ret = printf('%f', 'xyz');
  assert.strictEqual(output, 'NaN');
  assert.strictEqual(ret, 3);
});

// ================== %c ==================
test('%c - single char string', () => {
  const ret = printf('%c', 'A');
  assert.strictEqual(output, 'A');
  assert.strictEqual(ret, 1);
});

test('%c - string with multiple chars (first char)', () => {
  const ret = printf('%c', 'Hello');
  assert.strictEqual(output, 'H');
  assert.strictEqual(ret, 1);
});

test('%c - number (first digit char)', () => {
  const ret = printf('%c', 97);
  assert.strictEqual(output, '9'); // String(97) = '97', first char '9'
  assert.strictEqual(ret, 1);
});

test('%c - empty string', () => {
  const ret = printf('%c', '');
  assert.strictEqual(output, '');
  assert.strictEqual(ret, 0);
});

test('%c - null', () => {
  const ret = printf('%c', null);
  assert.strictEqual(output, 'n'); // String(null) = 'null', first char 'n'
  assert.strictEqual(ret, 1);
});

test('%c - undefined', () => {
  const ret = printf('%c', undefined);
  assert.strictEqual(output, 'u'); // String(undefined) = 'undefined', first char 'u'
  assert.strictEqual(ret, 1);
});

// ================== %o ==================
test('%o - object (same as String())', () => {
  const ret = printf('%o', { key: 'val' });
  assert.strictEqual(output, '[object Object]');
  assert.strictEqual(ret, 15);
});

test('%o - number', () => {
  const ret = printf('%o', 255);
  assert.strictEqual(output, '255');
  assert.strictEqual(ret, 3);
});

// ================== %O ==================
test('%O - plain object (inspect)', () => {
  const ret = printf('%O', { a: 1 });
  // inspect({ a: 1 }, { depth: null, colors: false }) => "{ a: 1 }"
  assert.strictEqual(output, '{ a: 1 }');
  assert.strictEqual(ret, output.length);
});

test('%O - nested object', () => {
  const ret = printf('%O', { a: { b: 2 } });
  assert.strictEqual(output, '{ a: { b: 2 } }');
  assert.strictEqual(ret, output.length);
});

test('%O - string (with quotes)', () => {
  const ret = printf('%O', 'hello');
  assert.strictEqual(output, "'hello'");
  assert.strictEqual(ret, 7);
});

// ================== %x / %X / %b ==================
test('%x - number hex lowercase', () => {
  const ret = printf('%x', 255);
  assert.strictEqual(output, 'ff');
  assert.strictEqual(ret, 2);
});

test('%x - non-number (NaN)', () => {
  const ret = printf('%x', 'abc');
  assert.strictEqual(output, 'NaN');
  assert.strictEqual(ret, 3);
});

test('%X - number hex uppercase', () => {
  const ret = printf('%X', 255);
  assert.strictEqual(output, 'FF');
  assert.strictEqual(ret, 2);
});

test('%b - number binary', () => {
  const ret = printf('%b', 5);
  assert.strictEqual(output, '101');
  assert.strictEqual(ret, 3);
});

test('%b - non-number (NaN)', () => {
  const ret = printf('%b', null);
  assert.strictEqual(output, 'NaN');
  assert.strictEqual(ret, 3);
});

// ================== %j ==================
test('%j - object JSON', () => {
  const ret = printf('%j', { x: 1 });
  assert.strictEqual(output, '{"x":1}');
  assert.strictEqual(ret, 7);
});

test('%j - string JSON', () => {
  const ret = printf('%j', 'hello');
  assert.strictEqual(output, '"hello"');
  assert.strictEqual(ret, 7);
});

test('%j - undefined (JSON.stringify returns undefined, join gives "")', () => {
  const ret = printf('%j', undefined);
  // JSON.stringify(undefined) -> undefined, Array.join converts to empty string
  assert.strictEqual(output, '');
  assert.strictEqual(ret, 0);
});

// ================== %% ==================
test('%% prints percent sign', () => {
  const ret = printf('100%%');
  assert.strictEqual(output, '100%');
  assert.strictEqual(ret, 4);
});

// ================== Kombinasi & edge case ==================
test('Multiple specifiers', () => {
  const ret = printf('%s %d %f', 'test', 1, 3.14);
  assert.strictEqual(output, 'test 1 3.140000');
  assert.strictEqual(ret, 16);
});

test('No specifiers, plain string', () => {
  const ret = printf('Hello');
  assert.strictEqual(output, 'Hello');
  assert.strictEqual(ret, 5);
});

test('Unknown specifier treated as literal', () => {
  const ret = printf('%q', 123);
  // %q not in VALID_SPECIFIERS, so prints '%q' literally, arg ignored
  assert.strictEqual(output, '%q');
  assert.strictEqual(ret, 2);
});

test('More specifiers than arguments (missing arg becomes undefined)', () => {
  const ret = printf('%s %s', 'a');
  // Second %s gets undefined, String(undefined) = 'undefined'
  assert.strictEqual(output, 'a undefined');
  assert.strictEqual(ret, 12);
});

test('More arguments than specifiers (extra ignored)', () => {
  const ret = printf('%s', 'a', 'b');
  assert.strictEqual(output, 'a');
  assert.strictEqual(ret, 1);
});

test('Mixed literal and specifiers', () => {
  const ret = printf('x=%x y=%s', 250, 'hi');
  assert.strictEqual(output, 'x=fa y=hi');
  assert.strictEqual(ret, 9);
});

// Kembalikan stdout
process.stdout.write = originalWrite;
console.log('\nPengujian selesai.');
