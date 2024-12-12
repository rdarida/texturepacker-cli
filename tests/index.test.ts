import { greet } from '../src/index';

describe('Test exports', () => {
  it('should be truthy', () => {
    expect(greet).toBeTruthy();
  });

  it('should return with "Hello, TexturePacker!"', () => {
    expect(greet()).toBe('Hello, TexturePacker!');
  });
});
