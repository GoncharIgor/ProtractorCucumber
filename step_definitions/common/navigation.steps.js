'use strict';

module.exports = function () {

    this.Given(/^I navigate to (.*) page$/, function (url) {
        if (url === 'index') {
            url = 'http://computer-database.herokuapp.com/computers';
        }
        else if (url === 'Add new computer') {
            url = 'http://computer-database.herokuapp.com/computers/new';
        } else {
            throw `Given page ${url} does not exist`;
        }
        return browser.get(url);
    });

};