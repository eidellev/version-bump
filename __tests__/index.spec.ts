import { ReleaseLevels, versionBump } from '../index';

describe('versionBump', () => {
  test('should bump patch', () => {
    expect(versionBump('0.0.0', ReleaseLevels.PATCH)).toBe('0.0.1');
  });
  test('should bump minor', () => {
    expect(versionBump('0.0.0', ReleaseLevels.MINOR)).toBe('0.1.0');
  });
  test('should bump minor', () => {
    expect(versionBump('0.0.0', ReleaseLevels.MAJOR)).toBe('1.0.0');
  });
});
