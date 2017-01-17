module.exports = function () {

    this.When(/^for login widget I login as "([^"]*)" username and "([^"]*)" password$/, function (userName, password) {
        return this.getWidget('login').login(userName, password);
    });

};