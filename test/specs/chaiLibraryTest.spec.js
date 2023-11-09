const expectChai = require('chai').expect

describe('Chai Tests', function () {

    it('Launch Google Home Page', async () => {
       await browser.url('https://www.google.com')
       expectChai(await browser.getUrl()).to.include('google')
       expectChai(await browser.getTitle()).to.equal('Google')
    })

})