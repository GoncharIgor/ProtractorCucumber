var myHooks = function () {
    //   this.Before(function (event) {
    this.Before(function () {
        // console.log(event.getPayloadItem('scenario'));
// This code will be run before each scenario
    });
};

module.exports = myHooks;