# Eslint Config

My personal shareable eslint configuration.

## Install

```bash
npm i --save-dev eslint @nghiatv/eslint-config
```

## Usage

**`.eslintrc.js`**

### TS

```ts
module.exports = {
  extends: '@nghiatv/eslint-config',
};
```

## Extending

**`.eslintrc.js`**

```js
module.exports = {
  ignorePatterns: ['dist/**'],
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['@nghiatv/eslint-config'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
```

## Under The Hood

### `index.js`

- Plugins
  - `@typescript-eslint/eslint-plugin`
  - `eslint-plugin-prettier`
- Parser
  - `@typescript-eslint/parser`
- Extends
  - `@typescript-eslint/eslint-plugin`
  - `eslint-config-airbnb-typescript`
  - `eslint-config-prettier`
- Rules
  - [Custom Special Rules](https://github.com/prettier/eslint-config-prettier#special-rules)

## License

MIT
