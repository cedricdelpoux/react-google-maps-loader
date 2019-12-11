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

You can also try the component's editable demo hands-on and install it from [bit.dev](https://bit.dev/cedricdelpoux/react-google-maps-loader/react-google-maps-loader?example=5d592e9f500b4e00146cca67).

## Usage

### Load Map Only

This renders when the map is ready, with no loading state.

```javascript
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"

const App = () => (
    <ReactGoogleMapLoader
        params={{
            key: YOUR_API_KEY, // Define your api key here
            libraries: "places,geometry", // To request multiple libraries, separate them with a comma
        }}
        render={googleMaps => googleMaps && <div>Google Maps is loaded !</div>}
    />
)
```

### Show Loading State

You can show a custom loading state while the user is still online by using the error values.

#### Error Values

-   `[String] Network Error` - if the user us offline.

-   `[String] SDK Authentication Error` - if there is a problem loading Google maps due to incorrect keys, going over quota or one of the errors listed in the [Error Messages Documentation](https://developers.google.com/maps/documentation/javascript/error-messages).

-   `undefined` - map loaded correctly.

```js
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"

const App = () => (
    <ReactGoogleMapLoader
        params={{
            key: YOUR_API_KEY, // Define your api key here
            libraries: "places,geometry", // To request multiple libraries, separate them with a comma
        }}
        render={(googleMaps, error) =>
            googleMaps ? (
                <div>
                    {/*Show a custom error if SDK Authentication Error. See N/B 2 below.*/}
                    {error ? error : "Google Maps is loaded !"}
                </div>
            ) : (
                <div>
                    {/*Check for network error so loading state ends if user lost connection.*/}
                    {error === "Network Error" ? (
                        <p>{error}</p>
                    ) : (
                        <p>isLoading...</p>
                    )}
                </div>
            )
        }
    />
)
```

N/B:

1. The Google Maps API does not provide errors in the callback but logs them to the console. We grouped all Google Maps errors not related to network connectivity as `SDK Authentication Error`. Check the console if you get this.

2. `googleMaps` always loads as long as there is no `Network Error` and the previous state is not cached. So, handle `SDK Authentication Errors` (See 1. above) in the `googleMaps` part of the conditional rendering as shown in the code above.

## Demo

See [Demo page][github-page]

## Contributing

-   ⇄ Pull/Merge requests and ★ Stars are always welcome.
-   For bugs and feature requests, please [create an issue][github-issue].
-   Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-google-maps-loader.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-google-maps-loader
[build-badge]: https://img.shields.io/travis/cedricdelpoux/react-google-maps-loader/master.svg?style=flat-square
[build]: https://travis-ci.org/cedricdelpoux/react-google-maps-loader
[codecov-badge]: https://img.shields.io/codecov/c/github/cedricdelpoux/react-google-maps-loader.svg?style=flat-square
[codecov]: https://codecov.io/gh/cedricdelpoux/react-google-maps-loader
[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square
[github-page]: https://cedricdelpoux.github.io/react-google-maps-loader
[github-issue]: https://github.com/cedricdelpoux/react-google-maps-loader/issues/new
