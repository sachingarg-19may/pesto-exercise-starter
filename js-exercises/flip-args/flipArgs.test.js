// write your own test cases
import { flipArgs } from './flipArgs';

describe('flip Arguments', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('object');
  });
  it('should return flipped', () => {
    expect(flipArgs(1, 2, 3, 4)[0]).toBe(4);
    expect(flipArgs(1, 2, 3, 4)[3]).toBe(1);
  });
});