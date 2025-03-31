import { AlphaHandling, Format } from '../src/enums';
import { TexturePacker } from '../src/TexturePacker';

const EXPECTED = [
  'TexturePacker',
  '"img 1.png" "img 2.png"',
  '--format json',
  '--data "<data>"',
  '--trim-margin 0',
  '--alpha-handling ReduceBorderArtifacts'
].join(' ');

describe('Test TexturePacker class', () => {
  it('', () => {
    const actual = new TexturePacker({
      format: 'json',
      data: '<data>',
      trimMargin: 0,
      alphaHandling: AlphaHandling.ReduceBorderArtifacts,
    }).setFileList(['img 1.png', 'img 2.png']);

    expect(actual.toString()).toBe(EXPECTED);
    expect(actual.command).toBe('TexturePacker');
    expect(actual.data).toBe('"<data>"');
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

    const expected = EXPECTED + ' --trim-sprite-names --disable-rotation';

    expect(actual.toString()).toBe(expected);
    expect(actual.command).toBe('TexturePacker');
    expect(actual.data).toBe('"<data>"');
  });
});
