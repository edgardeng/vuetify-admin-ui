// module.exports = {
//   "root": true,
//   "env": {
//     "node": true
//   },
//   "extends": [
//     "plugin:vue/essential",
//     "@vue/airbnb"
//   ],
//   "rules": {
//     "no-console": 0,
//     "no-debugger": "off",
//     "no-shadow": 0,
//     "operator-linebreak": [2, "before"],
//     "max-len": [
//       "error",
//       {
//         "ignoreStrings": true,
//         "ignoreUrls": true,
//         "ignoreRegExpLiterals": true,
//         "ignoreTemplateLiterals": true,
//         "code": 120
//       }
//     ],
//     "no-param-reassign": [
//       "error",
//       {
//         "props": true,
//         "ignorePropertyModificationsFor": [
//           "state",
//           "acc",
//           "e"
//         ]
//       }
//     ],
//     'import/no-extraneous-dependencies': true,
//     "no-mixed-operators": 0,
//   },
//   "parserOptions": {
//     "parser": "babel-eslint"
//   }
// }
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    '@vue/airbnb'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'semi': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-undef': 1,
    'next-line': 0,
    'object-curly-spacing': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
