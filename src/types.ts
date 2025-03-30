export type TexturePackerOptions = {
  /**
   * Selects the packing algorithm.
   */
  algorithm: 'Polygon' | 'MaxRects' | 'Grid' | 'Basic';

  /**
   * Defines how color values of transparent pixels are processed.
   */
  alphaHandling:
    | 'KeepTransparentPixels'
    | 'ClearTransparentPixels'
    | 'ReduceBorderArtifacts'
    | 'PremultiplyAlpha';

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
  format: 'json' | 'pixijs4' | 'phaser';

  /**
   * Sets the maximum height for the texture. The default value is 2048.
   */
  maxHeight: number;

  /**
   * Sets the heuristics used to place sprites in the texture.
   */
  maxrectsHeuristics:
    | 'Best'
    | 'ShortSideFit'
    | 'LongSideFit'
    | 'AreaFit'
    | 'BottomLeft'
    | 'ContactPoint';

  /**
   * Sets the maximum width for the texture. The default value is 2048.
   */
  maxWidth: number;

  /**
   * Controls the time TexturePacker spends finding the minimum texture size.
   */
  packMode: 'Fast' | 'Good' | 'Best';

  /**
   * Sets the basic scale factor for the sprites. Default is 1 to keep the
   * original sprite sizes.
   */
  scale: number;

  /**
   * Selects the algorithm used for scaling the sprites.
   */
  scaleMode:
    | 'Smooth'
    | 'Fast'
    | 'Scale2x'
    | 'Scale3x'
    | 'Scale4x'
    | 'Eagle'
    | 'Hq2x';

  /**
   * Removes transparent pixels from sprite borders for tighter packing and
   * faster rendering.
   */
  trimMode: 'Trim' | 'CropKeepPos' | 'Crop' | 'Polygon';

  /**
   * Transparent margin which is left over after trimming.
   */
  trimMargin: number;

  /**
   * Removes image file extensions like *.png* or *.tga* from sprite names.
   */
  trimSpriteNames: boolean;
};
