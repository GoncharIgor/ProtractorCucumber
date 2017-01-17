var _ = require('lodash'),
    baseConfig = require('./base/conf');

exports.config = _.merge(baseConfig.config, {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    cucumberOpts: {
        require: './../step_definitions',
        // tags: ['~@ignore', '~@dev'],
        format: 'pretty',
    },
    specs: ['./../features'],

    params: {
        // portalName: 'retail-banking-demo/',
        cucumberStepTimeout: 200 * 1000
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }

});