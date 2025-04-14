import { calcPoints, possibleCheckout } from './darts';

describe('Darts Game Tests', () => {
  describe('calcPoints', () => {
    test('calculates points correctly for single, double, and triple', () => {
      expect(calcPoints('3 20 1 17 2 4')).toBe(85);
      expect(calcPoints('2 15 1 18 3 19')).toBe(105);
      expect(calcPoints('3 20 1 5')).toBe(65);
    });

    test('returns 0 if no valid hits are made', () => {
      expect(calcPoints('')).toBe(0);
    });
  });

  describe('possibleCheckout', () => {
    test('calculates possible checkout correctly', () => {
      expect(possibleCheckout(477)).toBe('Double 12');
      expect(possibleCheckout(480)).toBe('Impossible');
      expect(possibleCheckout(441)).toBe('Impossible');
    });
  });
});
