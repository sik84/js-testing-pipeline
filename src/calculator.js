/**
 * Einfacher Taschenrechner mit grundlegenden mathematischen Operationen
 */
class Calculator {
  /**
   * Addiert zwei Zahlen
   * @param {number} a - Erste Zahl
   * @param {number} b - Zweite Zahl
   * @returns {number} Summe der beiden Zahlen
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtrahiert b von a
   * @param {number} a - Erste Zahl
   * @param {number} b - Zweite Zahl
   * @returns {number} Differenz der beiden Zahlen
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multipliziert zwei Zahlen
   * @param {number} a - Erste Zahl
   * @param {number} b - Zweite Zahl
   * @returns {number} Produkt der beiden Zahlen
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Dividiert a durch b
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Quotient der Division
   * @throws {Error} Wenn der Divisor 0 ist
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division durch Null ist nicht erlaubt.');
    }
    return a / b;
  }
}

module.exports = Calculator;
