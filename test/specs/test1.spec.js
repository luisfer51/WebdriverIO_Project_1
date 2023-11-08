describe('Demo Tests', function () {

    it('My First Test', async () => {
        browser.url('https://www.google.com')
        await browser.pause(1000)
        //await $('[id="APjFqb"]').setValue('WebdriverIO')
        await $('[name="q"]').setValue('WebdriverIO')
        //await $("[name='btnK']").click()
        browser.keys('Enter')
        await browser.pause(3000)
    })

})