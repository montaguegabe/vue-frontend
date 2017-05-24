import Vue from 'vue';

Vue.config.productionTip = false;

// Require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// Require all src files except main.js for coverage.
// You can also change this to match only the subset of files that
// You want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
