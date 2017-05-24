// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },

    // https://www.npmjs.com/package/eslint-config-crockford
    extends: 'crockford',

    // Required to lint *.vue files
    plugins: [
        'html'
    ],

    // Add your custom rules here
    'rules': {

        // Allow paren-less arrow functions
        'arrow-parens': 0,

        // Allow async-await
        'generator-star-spacing': 0,

        // Allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        'one-var': 'off',
        'vars-on-top': 'off'
    }
}
