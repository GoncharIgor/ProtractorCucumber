'use strict';

let navigationSteps = {
    navigateTo: function (url) {
        if (url === 'index') {
            url = 'http://computer-database.herokuapp.com/computers';
        }
        else if (url === 'AddNewComputer') {
            url = 'http://computer-database.herokuapp.com/computers/new';
        } else {
            throw `Given page ${url} does not exist`;
        }
        return browser.get(url);
    }
};

module.exports = navigationSteps;