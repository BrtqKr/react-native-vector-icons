/**
 * SwmIconPack icon set component.
 * Usage: <SwmIcon name="icon-name" size={20} color="#001A72" />
 */

import glyphMap from './glyphmaps/SwmIconPack.json';
import metadata from './glyphmaps/FontAwesome5Free_meta.json';
import { createSwmIconPackSet } from './lib/create-icon-set-from-swm-icon-pack';

export { SwmIconStyle } from './lib/create-icon-set-from-swm-icon-pack';

const iconSet = createSwmIconPackSet(glyphMap, metadata);

export default iconSet;
export const { Button, getImageSource, getImageSourceSync } = iconSet;
