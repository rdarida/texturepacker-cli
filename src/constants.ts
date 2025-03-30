import { AlphaHandling, Format } from './enums';
import { TexturePackerOptions } from './types';

export const DEFAULT_OPTIONS: TexturePackerOptions = {
  format: Format.Cocos2D,
  data: '',
  trimMargin: 1,
  alphaHandling: AlphaHandling.ClearTransparentPixels,
  trimSpriteNames: false,
  disableRotation: false
};
