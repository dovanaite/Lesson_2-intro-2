[![view on npm](http://img.shields.io/npm/v/dead-server.svg)](https://www.npmjs.org/package/dead-server)
[![npm module downloads per month](http://img.shields.io/npm/dm/dead-server.svg)](https://www.npmjs.org/package/dead-server)

# Dead Server

This is a quick fix (updated version) for an original ["Live Server"](https://www.npmjs.com/package/live-server) package. Original version doesn't seem be maintained, and while there was a mayor braiking change ir the dependencies, I took to quick-fix it.

## Install

```
npm i -D dead-server
```

## Usage

Package.json example:

```json
  "scripts": {
    "dev": "dead-server --port=3000 --host=localhost"
  }
```

Terminal command:

```bash
npm run dev
```

For more details, please refer to [live-server](https://www.npmjs.com/package/live-server) documentation.
