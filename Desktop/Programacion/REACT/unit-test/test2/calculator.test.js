
import { calculator } from ".";

test('does the sum of a & b', () => {
    const result = calculator.sum(1,2);
    expect(result).toBe(3);
 })

 test('does the sum of a & b', () => {
    const result = calculator.substract(2,2);
    expect(result).toBe(0);
 })

 test('does the sum of a & b', () => {
    const result = calculator.multiply(1,2);
    expect(result).toBe(2);
 })

 test('does the sum of a & b', () => {
    const result = calculator.divide(4,2);
    expect(result).toBe(2);
 })