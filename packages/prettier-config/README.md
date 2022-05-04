# Prettier Config

My personal shareable prettier configuration.

## Install

```bash
npm i --save-dev prettier @nghiatv/prettier-config
```

## Usage

**`.prettierrc.js`**

```js
module.exports = "@nghiatv/prettier-config";
```

## Extending

**`.prettierrc.js`**

```js
module.exports = {
  ...require("@nghiatv/prettier-config"),
  semi: false,
};
```

## License

MIT
