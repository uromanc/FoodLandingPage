module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // permit linter jsx files
    'react/jsx-uses-react': 'off',
    // you can stop import react in each component
    'react/react-in-jsx-scope': 'off',
    // add a new line while format a file
    'eol-last': 0,
    // permit not define prop-types
    'react/prop-types': 'off'
  }
}
