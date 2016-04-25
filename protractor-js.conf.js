var data = module.exports = require('./protractor-shared.js');
var config = data.config;


config.baseUrl = process.env.SELENIUM || 'http://selenium:4444/wd/hub';
console.log('we are bout to connect to selenium server ' + config.baseUrl);

// TODO: remove exclusion when JS verison of scrolling benchmark is available
config.exclude.push('dist/js/cjs/benchmarks_external/e2e_test/naive_infinite_scroll_spec.js');
config.exclude.push('dist/js/cjs/benchmarks_external/e2e_test/naive_infinite_scroll_perf.js');

data.createBenchpressRunner({
  lang: 'js'
});
