social-browser
=========

A node module providing utility methods to detect which social browser is a client using.

## Installation

```shell
npm install social-browser --save
```

## Usage

```js
var browser = require('social-browser').detect();
if (browser.major === "facebook") {
  console.log('User is using Facebook client browser.');
}

```
## Detectable browsers

|Browser |browser.major |browser.platform|
|--------|------|--------|
|Twitter for iOS|twitter|ios|
|Facebook for iOS|facebook|ios|

## Tests

```shell
npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release, with support for Facebook/iOS and Twitter/iOS.
