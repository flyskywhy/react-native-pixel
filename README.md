# react-native-pixel-image

[![npm version](http://img.shields.io/npm/v/react-native-pixel-image.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-image "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-pixel-image.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-image "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-pixel-image.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-image "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-image "View this project on npm")

> Parse image file to ImageData for React Native

Installation
---

```bash
$ npm install react-native-pixel-image
```
For RN >= 0.65, run `npm install react-native-blob-util`.

For RN < 0.65, run `npm install react-native-blob-util@0.16.3`, and patch manually to [fix: with react-native-web product build will export 'URIUtil' (reexported as 'URIUtil') was not found](https://github.com/RonRadtke/react-native-blob-util/pull/201/files).
```js
var pixel= require('react-native-pixel-image');
console.log(pixel); //object
```

API
---

## pixel(`file`) -> Promise<ImageData[]>

return `images` is Array contains one or more `ImageData`.
> `images` can be resized and also keep property e.g. `delay` by `resizeImageDatas` of [react-native-pixel-util](https://github.com/flyskywhy/react-native-pixel-util).

`file` is...

* string: url (e.g. `http[s]://...`)
* string: datauri (e.g. `data:image/...` which can comes from [data-uri.macro](https://github.com/Andarist/data-uri.macro))
* string: path (e.g. `/storage/emulated/0/Pictures/gifs/ani (1).gif` on Android, `file:///private/var/mobile/Containers/.../foo.png` on iOS)
* string: binary (unless above)
* object: Blob/File
* object: Buffer/ArrayBuffer/Uint8Array/Uint8ClampedArray
* object: HTMLImageElement

## Support
* gif (static/animation)
* png (static/animation)
* jpeg
* bitmap (32bit or less)
* webp (static/animation)

Related projects
---
* __react-native-pixel-image__
* [react-native-pixel-util](https://github.com/flyskywhy/react-native-pixel-util)
* [react-native-pixel-gif](https://github.com/flyskywhy/react-native-pixel-gif)
* [react-native-pixel-png](https://github.com/flyskywhy/react-native-pixel-png)
* [react-native-pixel-jpg](https://github.com/flyskywhy/react-native-pixel-jpg)
* [react-native-pixel-bmp](https://github.com/flyskywhy/react-native-pixel-bmp)
* [react-native-pixel-webp](https://github.com/flyskywhy/react-native-pixel-webp)
* [pixel-to-ansi](https://github.com/59naga/pixel-to-ansi)
* [pixel-to-svg](https://github.com/59naga/pixel-to-svg)

License
---
[MIT][License]

[License]: http://59naga.mit-license.org/
