import { AlphaHandlingType, FormatType } from './helpers';

export type TexturePackerOptions = {
  /**
   * Defines how color values of transparent pixels are processed.
   */
  alphaHandling: AlphaHandlingType;

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
  format: FormatType;

  /**
   * Transparent margin which is left over after trimming.
   */
  trimMargin: number;

  /**
   * Removes image file extensions like *.png* or *.tga* from sprite names.
   */
  trimSpriteNames: boolean;
};
