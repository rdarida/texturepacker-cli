import { pack, unpack } from '../src/index';

describe('Test exports', () => {
  test('pack should be exported', () => {
    expect(pack).toBeTruthy();
  });

  test('pack should return with "pack"', () => {
    expect(pack()).toBe('pack');
  });

  test('unpack should be exported', () => {
    expect(unpack).toBeTruthy();
  });

  test('unpack should return with "unpack"', () => {
    expect(unpack()).toBe('unpack');
  });
});
