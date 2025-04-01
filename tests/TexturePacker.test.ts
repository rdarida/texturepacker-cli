import { AlphaHandling, Format } from '../src/enums';
import { TexturePacker } from '../src/TexturePacker';

const EXPECTED = [
  'TexturePacker',
  'img 1.png',
  'img 2.png',
  '--format',
  'json',
  '--data',
  '<data>',
  '--trim-margin',
  '0',
  '--alpha-handling',
  'ReduceBorderArtifacts'
]
  .map(v => `"${v}"`)
  .join(' ');

describe('Test TexturePacker class', () => {
  it('', () => {
    const actual = new TexturePacker({
      format: 'json',
      data: '<data>',
      trimMargin: 0,
      alphaHandling: AlphaHandling.ReduceBorderArtifacts
    }).setFileList(['img 1.png', 'img 2.png']);

    expect(actual.toString()).toBe(EXPECTED);
    expect(actual.command).toBe('TexturePacker');
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

    const expected = EXPECTED + ' "--trim-sprite-names" "--disable-rotation"';

    expect(actual.toString()).toBe(expected);
    expect(actual.command).toBe('TexturePacker');
  });

  it('throws an error if TexturePacker executable is not found', async () => {
    const tp = new TexturePacker();
    const mockCommandName = 'NonExistentTexturePacker';
    const expectedErrorMsg = `not found: ${mockCommandName}`;

    jest.spyOn(tp, 'command', 'get').mockReturnValue(mockCommandName);

    expect(() => tp.runSync()).toThrow(expectedErrorMsg);
    await expect(tp.run()).rejects.toThrow(expectedErrorMsg);
  });
});
