social-browser
=========

A node module providing utility methods to detect which social browser is a client using.

## Installation

```shell
  npm install social-browser --save
```

## Usage

```js
  var socialbrowser = require('social-browser');
  var browser = socialbrowser.detect();
  if (browser.major === "facebook") {
    console.log('User is using Facebook client browser.');
  }

```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.1 Initial release
