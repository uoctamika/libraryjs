// test/printf.js
import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { printf } from '../src/stdio/index';

describe('printf', () => {
  let output = '';

  beforeEach(() => {
    output = '';
    vi.spyOn(process.stdout, 'write').mockImplementation((chunk) => {
      output += chunk;
      return true;
    });
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  describe('%s', () => {
    it('string', () => {
      const ret = printf('Hello %s', 'World');
      expect(output).toBe('Hello World');
      expect(ret).toBe(11);
    });

    it('number', () => {
      const ret = printf('%s', 42);
      expect(output).toBe('42');
      expect(ret).toBe(2);
    });

    it('object', () => {
      const ret = printf('%s', { a: 1 });
      expect(output).toBe('[object Object]');
      expect(ret).toBe(15);
    });

    it('null', () => {
      const ret = printf('%s', null);
      expect(output).toBe('null');
      expect(ret).toBe(4);
    });

    it('undefined', () => {
      const ret = printf('%s', undefined);
      expect(output).toBe('undefined');
      expect(ret).toBe(9);
    });
  });

  describe('%d / %i', () => {
    it('%d - integer', () => {
      const ret = printf('%d', 42);
      expect(output).toBe('42');
      expect(ret).toBe(2);
    });

    it('%d - string integer', () => {
      const ret = printf('%d', '  42  ');
      expect(output).toBe('42');
      expect(ret).toBe(2);
    });

    it('%d - float (truncated)', () => {
      const ret = printf('%d', 3.14);
      expect(output).toBe('3');
      expect(ret).toBe(1);
    });

    it('%d - non-number (NaN)', () => {
      const ret = printf('%d', 'abc');
      expect(output).toBe('NaN');
      expect(ret).toBe(3);
    });

    it('%i behaves like %d', () => {
      const ret = printf('%i', 10);
      expect(output).toBe('10');
      expect(ret).toBe(2);
    });
  });

  describe('%f', () => {
    it('float', () => {
      const ret = printf('%f', 3.14);
      expect(output).toBe('3.140000');
      expect(ret).toBe(8);
    });

    it('integer', () => {
      const ret = printf('%f', 5);
      expect(output).toBe('5.000000');
      expect(ret).toBe(8);
    });

    it('non-number (NaN)', () => {
      const ret = printf('%f', 'xyz');
      expect(output).toBe('NaN');
      expect(ret).toBe(3);
    });
  });

  describe('%c', () => {
    it('single char string', () => {
      const ret = printf('%c', 'A');
      expect(output).toBe('A');
      expect(ret).toBe(1);
    });

    it('string with multiple chars (first char)', () => {
      const ret = printf('%c', 'Hello');
      expect(output).toBe('H');
      expect(ret).toBe(1);
    });

    it('number (first digit char)', () => {
      const ret = printf('%c', 97);
      expect(output).toBe('9');
      expect(ret).toBe(1);
    });

    it('empty string', () => {
      const ret = printf('%c', '');
      expect(output).toBe('');
      expect(ret).toBe(0);
    });

    it('null', () => {
      const ret = printf('%c', null);
      expect(output).toBe('n');
      expect(ret).toBe(1);
    });

    it('undefined', () => {
      const ret = printf('%c', undefined);
      expect(output).toBe('u');
      expect(ret).toBe(1);
    });
  });

  describe('%o', () => {
    it('object (same as String())', () => {
      const ret = printf('%o', { key: 'val' });
      expect(output).toBe('[object Object]');
      expect(ret).toBe(15);
    });

    it('number', () => {
      const ret = printf('%o', 255);
      expect(output).toBe('255');
      expect(ret).toBe(3);
    });
  });

  describe('%O', () => {
    it('plain object (inspect)', () => {
      const ret = printf('%O', { a: 1 });
      expect(output).toBe('{ a: 1 }');
      expect(ret).toBe(output.length);
    });

    it('nested object', () => {
      const ret = printf('%O', { a: { b: 2 } });
      expect(output).toBe('{ a: { b: 2 } }');
      expect(ret).toBe(output.length);
    });

    it('string (with quotes)', () => {
      const ret = printf('%O', 'hello');
      expect(output).toBe("'hello'");
      expect(ret).toBe(7);
    });
  });

  describe('%x / %X / %b', () => {
    it('%x - number hex lowercase', () => {
      const ret = printf('%x', 255);
      expect(output).toBe('ff');
      expect(ret).toBe(2);
    });

    it('%x - non-number (NaN)', () => {
      const ret = printf('%x', 'abc');
      expect(output).toBe('NaN');
      expect(ret).toBe(3);
    });

    it('%X - number hex uppercase', () => {
      const ret = printf('%X', 255);
      expect(output).toBe('FF');
      expect(ret).toBe(2);
    });

    it('%b - number binary', () => {
      const ret = printf('%b', 5);
      expect(output).toBe('101');
      expect(ret).toBe(3);
    });

    it('%b - non-number (NaN)', () => {
      const ret = printf('%b', null);
      expect(output).toBe('NaN');
      expect(ret).toBe(3);
    });
  });

  describe('%j', () => {
    it('object JSON', () => {
      const ret = printf('%j', { x: 1 });
      expect(output).toBe('{"x":1}');
      expect(ret).toBe(7);
    });

    it('string JSON', () => {
      const ret = printf('%j', 'hello');
      expect(output).toBe('"hello"');
      expect(ret).toBe(7);
    });

    it('undefined (JSON.stringify returns undefined, join gives "")', () => {
      const ret = printf('%j', undefined);
      expect(output).toBe('');
      expect(ret).toBe(0);
    });
  });

  describe('%%', () => {
    it('prints percent sign', () => {
      const ret = printf('100%%');
      expect(output).toBe('100%');
      expect(ret).toBe(4);
    });
  });

  describe('Kombinasi & edge case', () => {
    it('Multiple specifiers', () => {
      const ret = printf('%s %d %f', 'test', 1, 3.14);
      expect(output).toBe('test 1 3.140000');
      expect(ret).toBe(15);
    });

    it('No specifiers, plain string', () => {
      const ret = printf('Hello');
      expect(output).toBe('Hello');
      expect(ret).toBe(5);
    });

    it('Unknown specifier treated as literal', () => {
      const ret = printf('%q', 123);
      expect(output).toBe('%q');
      expect(ret).toBe(2);
    });

    it('More specifiers than arguments (missing arg becomes undefined)', () => {
      const ret = printf('%s %s', 'a');
      expect(output).toBe('a undefined');
      expect(ret).toBe(11);
    });

    it('More arguments than specifiers (extra ignored)', () => {
      const ret = printf('%s', 'a', 'b');
      expect(output).toBe('a');
      expect(ret).toBe(1);
    });

    it('Mixed literal and specifiers', () => {
      const ret = printf('x=%x y=%s', 250, 'hi');
      expect(output).toBe('x=fa y=hi');
      expect(ret).toBe(9);
    });
  });
});
