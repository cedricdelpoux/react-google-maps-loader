# react-google-maps-loader

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

React Component to use google maps services into your react applications using a render prop.

## Getting started

[![react-google-maps-loader](https://nodei.co/npm/react-google-maps-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-google-maps-loader/)

You can download `react-google-maps-loader` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-google-maps-loader
npm install react-google-maps-loader --save
```

If you don't use package manager and you want to include `react-google-maps-loader` directly in your html, you could get it from the UNPKG CDN

```html
https://unpkg.com/react-google-maps-loader/dist/react-google-maps-loader.min.js.
```

## Usage

```javascript
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"

const App = () =>
  <ReactGoogleMapLoader
    params={{
        key: YOUR_API_KEY, // Define your api key here
        libraries: "places,geometry", // To request multiple libraries, separate them with a comma
    }}
    render={googleMaps =>
        googleMaps && (
            <div>Google Maps is loaded !</div>
        )}
    />
```

## Demo

See [Demo page][github-page]

## Contributing

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please [create an issue][github-issue].
* Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-google-maps-loader.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-google-maps-loader

[build-badge]: https://img.shields.io/travis/xuopled/react-google-maps-loader/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-google-maps-loader

[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-google-maps-loader.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-google-maps-loader

[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square

[github-page]: https://xuopled.github.io/react-google-maps-loader
[github-issue]: https://github.com/xuopled/react-google-maps-loader/issues/new
