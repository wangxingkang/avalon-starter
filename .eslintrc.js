module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "html"
  ],
  // 定义全局变量
  "globals": {
    "jQuery": true,
    "$": true,
    "avalon": true
  },
  "rules": {
    "no-cond-assign": [2, "always"],
    "no-constant-condition": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-func-assign": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    "eqeqeq": [0, "always"],
    "quotes": [2, "single"],
    "no-caller": 2,
    "no-eval": 2,
    "no-redeclare": 2,
    "no-undef": 2,
    "no-unused-vars": 0,
    "no-use-before-define": 2,
    "comma-dangle": [1, "never"],
    "no-const-assign": 2,
    "no-dupe-class-members": 2
  }
};
