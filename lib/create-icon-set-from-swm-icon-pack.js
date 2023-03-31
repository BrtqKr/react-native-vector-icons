import { Platform } from 'react-native';
import createMultiStyleIconSet from './create-multi-style-icon-set';

const SwmIconStyle = {
  outline: 'outline',
  broken: 'broken',
  curved: 'curved',
};

function createSwmIconPackSet(glyphMap) {
  const fontFamily = `SwmIconPack`;

  function createSwmIconPackStyle(style, fontWeight, family = fontFamily) {
    const styleName = style[0].toUpperCase() + style.slice(1);
    const fontFile = `SwmIconPack_${styleName}.ttf`;

    return {
      fontFamily: `${family}-${styleName}`,
      fontFile,
      fontStyle: Platform.select({
        ios: {
          fontWeight,
        },
        default: {},
      }),
      glyphMap,
    };
  }

  const outlineIcons = createSwmIconPackStyle('outline', '400');
  const brokenIcons = createSwmIconPackStyle('broken', '400');
  const curvedIcons = createSwmIconPackStyle('curved', '400');

  const Icon = createMultiStyleIconSet(
    {
      outline: outlineIcons,
      broken: brokenIcons,
      curved: curvedIcons,
    },
    {
      defaultStyle: 'outline',
      fallbackFamily: 'outline',
    }
  );

  return Icon;
}

export { SwmIconStyle, createSwmIconPackSet };
