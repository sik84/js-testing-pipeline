const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  // Vor jedem Test eine neue Instanz erstellen
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should handle negative numbers', () => {
      expect(calculator.add(-1, -3)).toBe(-4);
      expect(calculator.add(-1, 5)).toBe(4);
    });

    test('should handle zero', () => {
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract method', () => {
    test('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should handle negative results', () => {
      expect(calculator.subtract(2, 5)).toBe(-3);
    });

    test('should handle zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply method', () => {
    test('should multiply two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should handle negative numbers', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
      expect(calculator.multiply(-2, -3)).toBe(6);
    });

    test('should handle zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide method', () => {
    test('should divide two numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should handle dividing by negative numbers', () => {
      expect(calculator.divide(6, -3)).toBe(-2);
      expect(calculator.divide(-6, -3)).toBe(2);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division durch Null ist nicht erlaubt.');
    });
  });

  describe('power method', () => {
    test('should calculate power correctly for positive numbers', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(3, 2)).toBe(9);
    });

    test('should handle zero exponent', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should handle negative exponent', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should handle zero base', () => {
      expect(calculator.power(0, 5)).toBe(0);
    });
  });
});
