let Base = function () {

    this.homeUrl = 'https://weather.com/';
    this.navigateToHome = function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        browser.get(this.homeUrl);
    }
}

module.exports = new Base();