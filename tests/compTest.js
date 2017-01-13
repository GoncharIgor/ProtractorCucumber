"use strict";
var indexPage = require('./../pageobjects/IndexPage');

describe('Computers Demo App', function () {

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('should have visible elements', function () {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

});