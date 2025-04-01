import { DEFAULT_OPTIONS } from './constants';
import { TexturePackerOptions } from './types';
import { AlphaHandlingType, FormatType } from './helpers';
import { execute, executeSync } from './utils';

export class TexturePacker {
  private static readonly Command = 'TexturePacker';
  private _options: TexturePackerOptions;

  public get command(): string {
    return TexturePacker.Command;
  }

  public get args(): string[] {
    const {
      fileList,
      format,
      data,
      trimMargin,
      alphaHandling,
      trimSpriteNames,
      disableRotation
    } = this._options;

    return [
      ...fileList,
      '--format',
      format,
      '--data',
      data,
      '--trim-margin',
      trimMargin.toString(),
      '--alpha-handling',
      alphaHandling,
      trimSpriteNames ? '--trim-sprite-names' : '',
      disableRotation ? '--disable-rotation' : ''
    ].filter(v => !!v);
  }

  public get data(): string {
    return this._options.data;
  }

  constructor(options?: Partial<TexturePackerOptions>) {
    this._options = {
      ...DEFAULT_OPTIONS,
      ...options
    };
  }

  public setFileList(fileList: string[]): TexturePacker {
    this._options.fileList = fileList;
    return this;
  }

  public setFormat(format: FormatType): TexturePacker {
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

  public setAlphaHandling(alphaHandling: AlphaHandlingType): TexturePacker {
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
    return [this.command, ...this.args].map(v => `"${v}"`).join(' ');
  }

  public async run(): Promise<void> {
    const { command, args } = this;
    return execute(command, args);
  }

  public runSync(): void {
    const { command, args } = this;
    executeSync(command, args);
  }
}
