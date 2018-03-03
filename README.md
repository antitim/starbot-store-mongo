# starbot-store-redis [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## About

Store module for [StarBot](https://github.com/antitim/starbot)

## Installation

```sh
$ npm install --save starbot-store-mongo
```

## Options

```js
const StoreRedis = require('starbot-store-mongo');

const store = new StoreMongo({
  url: 'mongodb://localhost:27017/dbName',
  options: {
    sslValidate: true,
  },
  collection: 'bot1',
});
```


## License

MIT © [antitim](http://vk.com/antitim)


[npm-image]: https://badge.fury.io/js/starbot-store-mongo.svg
[npm-url]: https://npmjs.org/package/starbot-store-mongo
[travis-image]: https://travis-ci.org/antitim/starbot-store-mongo.svg?branch=master
[travis-url]: https://travis-ci.org/antitim/starbot-store-mongo
