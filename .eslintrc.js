module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,  // Includes Mocha globals if used for testing
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off'
  },
  globals: {
    artifacts: 'readonly',
    contract: 'readonly',
    assert: 'readonly',
    web3: 'readonly',         // Add if using Web3
    beforeEach: 'readonly',   // Add if using beforeEach hook
    afterEach: 'readonly',    // Add if using afterEach hook
  }
};

