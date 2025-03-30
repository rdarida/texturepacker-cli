import { AlphaHandling, Format } from '../src/types';
import { TexturePacker } from '../src/TexturePacker';

describe('Test TexturePacker class', () => {
  it('', () => {
    const actual = new TexturePacker({
      data: '<data>',
      trimMargin: 0,
      alphaHandling: AlphaHandling.ReduceBorderArtifacts,
      trimSpriteNames: true,
      disableRotation: true
    }).toString();

    const expected = [
      'TexturePacker',
      '--format json',
      '--data <data>',
      '--trim-margin 0',
      '--alpha-handling ReduceBorderArtifacts',
      '--trim-sprite-names',
      '--disable-rotation'
    ].join(' ');

    expect(actual.toString()).toBe(expected);
  });

  it('', () => {
    const actual = new TexturePacker()
      .setData('<data>')
      .setTrimMargin(0)
      .setAlphaHandling(AlphaHandling.ReduceBorderArtifacts)
      .trimSpriteNames()
      .disableRotation();

    const expected = [
      'TexturePacker',
      '--format json',
      '--data <data>',
      '--trim-margin 0',
      '--alpha-handling ReduceBorderArtifacts',
      '--trim-sprite-names',
      '--disable-rotation'
    ].join(' ');

    expect(actual.toString()).toBe(expected);
  });
});
