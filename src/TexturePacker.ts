import { AlphaHandling, Format, TexturePackerOptions } from './types';
import { DEFAULT_OPTIONS } from './constants';

export class TexturePacker {
  private _options: TexturePackerOptions;

  constructor(options?: Partial<TexturePackerOptions>) {
    this._options = {
      ...DEFAULT_OPTIONS,
      ...options
    };
  }

  public setFormat(format: Format): TexturePacker {
    this._options.format = format;
    return this;
  }

  public setData(data: string): TexturePacker {
    this._options.data = data;
    return this;
  }

  public setTrimMargin(trimMargin: number): TexturePacker {
    this._options.trimMargin = trimMargin;
    return this;
  }

  public setAlphaHandling(alphaHandling: AlphaHandling): TexturePacker {
    this._options.alphaHandling = alphaHandling;
    return this;
  }

  public trimSpriteNames(): TexturePacker {
    this._options.trimSpriteNames = true;
    return this;
  }

  public disableRotation(): TexturePacker {
    this._options.disableRotation = true;
    return this;
  }

  public toString(): string {
    const {
      format,
      data,
      trimMargin,
      alphaHandling,
      trimSpriteNames,
      disableRotation
    } = this._options;

    return [
      'TexturePacker',
      `--format ${format}`,
      `--data ${data}`,
      `--trim-margin ${trimMargin}`,
      `--alpha-handling ${alphaHandling}`,
      trimSpriteNames ? '--trim-sprite-names' : '',
      disableRotation ? '--disable-rotation' : ''
    ]
      .join(' ')
      .trim();
  }
}
