import { AlphaHandling, Format, TexturePackerOptions } from './types';

export const DEFAULT_OPTIONS: TexturePackerOptions = {
  format: Format.JSONHash,
  data: '',
  trimMargin: 1,
  alphaHandling: AlphaHandling.ClearTransparentPixels,
  trimSpriteNames: false,
  disableRotation: false
};
