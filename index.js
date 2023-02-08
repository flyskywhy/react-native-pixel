import pixelUtil from 'react-native-pixel-util';
import gif from 'react-native-pixel-gif';
import jpg from 'react-native-pixel-jpg';
import png from 'react-native-pixel-png';
import bmp from 'react-native-pixel-bmp';
import {parse as webpParse} from 'react-native-pixel-webp';

export default async file => {
  const types = await pixelUtil.detect(file);
  switch (types.ext) {
    case 'gif':
      return gif.parse(file);
    case 'png':
      return png.parse(file);
    case 'jpg':
      return jpg.parse(file);
    case 'bmp':
      return bmp.parse(file);
    case 'webp':
      return webpParse(file);
    default:
      return Promise.reject(new Error(types.ext + ' is Unsupported type.'));
  }
};
