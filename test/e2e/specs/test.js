// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'default e2e tests': function (browser) {
        // Automatically uses dev Server port from /config.index.js
        // Default: http://localhost:8080
        // See nightwatch.conf.js
        const devServer = browser.globals.devServerURL;

        browser
        .url(devServer)
        .waitForElementVisible('#app', 5000)
        .assert.elementPresent('.hello')
        .assert.containsText('h1', 'Welcome to Your Vue.js App')
        .assert.elementCount('img', 1)
        .end();
    }
};
