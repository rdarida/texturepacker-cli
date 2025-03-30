export enum AlphaHandling {
  ClearTransparentPixels = 'ClearTransparentPixels',
  KeepTransparentPixels = 'KeepTransparentPixels',
  PremultiplyAlpha = 'PremultiplyAlpha',
  ReduceBorderArtifacts = 'ReduceBorderArtifacts'
}

export enum Format {
  JSONHash = 'json',
  PixiJS = 'pixijs4',
  Spine = 'spine'
}

export type TexturePackerOptions = {
  /**
   * Defines how color values of transparent pixels are processed.
   */
  alphaHandling: AlphaHandling;

  /**
   * Sets the output filename for the Data file. This file contains metadata
   * like sprite sizes and coordinates.
   */
  data: string;

  /**
   * Prevents sprites from being rotated by 90 degrees for better texture packing.
   */
  disableRotation: boolean;

  /**
   * Sets the data format or framework for a new project. This choice enables
   * additional feature. It determines how sprite metadata is saved.
   */
  format: Format;

  /**
   * Transparent margin which is left over after trimming.
   */
  trimMargin: number;

  /**
   * Removes image file extensions like *.png* or *.tga* from sprite names.
   */
  trimSpriteNames: boolean;
};
