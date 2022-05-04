
module.exports = {
    endOfLine: 'auto',
    // https://prettier.io/docs/en/options.html#print-width
    printWidth: 120,
    tabWidth: 2,
    arrowParens: 'always',
    singleQuote: true,
    semi: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    bracketSameLine:true,
    overrides: [
      {
        files: ['*.html'],
        options: {
          // disable to prevent conflicts with html-validate
          trailingComma: false,
          // https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting
          htmlWhitespaceSensitivity: 'css',
        },
      },
    ],
  };