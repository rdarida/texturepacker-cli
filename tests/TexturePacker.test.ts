import { AlphaHandling, Format } from '../src/enums';
import { TexturePacker } from '../src/TexturePacker';

const EXPECTED = [
  'TexturePacker',
  '"img 1.png" "img 2.png"',
  '--format json',
  '--data "<data>"',
  '--trim-margin 0',
  '--alpha-handling ReduceBorderArtifacts',
  '--trim-sprite-names',
  '--disable-rotation'
].join(' ');

describe('Test TexturePacker class', () => {
  it('', () => {
    const actual = new TexturePacker({
      format: 'json',
      data: '<data>',
      trimMargin: 0,
      alphaHandling: AlphaHandling.ReduceBorderArtifacts,
      trimSpriteNames: true,
      disableRotation: true
    }).setFileList(['img 1.png', 'img 2.png']);

    expect(actual.toString()).toBe(EXPECTED);
  });

  it('', () => {
    const actual = new TexturePacker()
      .setFileList(['img 1.png', 'img 2.png'])
      .setFormat(Format.JSONHash)
      .setData('<data>')
      .setTrimMargin(0)
      .setAlphaHandling('ReduceBorderArtifacts')
      .trimSpriteNames()
      .disableRotation();

    expect(actual.toString()).toBe(EXPECTED);
  });
});
