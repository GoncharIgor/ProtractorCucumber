const _ = require('lodash');
const baseConfig = require('./base/conf');


const config = {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    cucumberOpts: {
        require: './../step_definitions',
        tags: ['@regression, @amount'],
        //tags: false,
        format: 'pretty',
    },
    specs: ['./../features/computer-creation.feature'],

    params: {
        cucumberStepTimeout: 200 * 1000
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }
};

exports.config = _.merge(baseConfig.config, config);
