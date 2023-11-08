describe("MyFirstTestRecording", () => {
    it("tests MyFirstTestRecording", async () => {
        //await browser.setWindowSize(583, 612)
        await browser.url("https://the-internet.herokuapp.com/login")
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
        await browser.$("//*[@id=\"content\"]/div/h4/em[1]").click()
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: '' }]
        }])
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyUp', value: '' }]
        }])
        await browser.$("#username").click()
        await browser.$("#username").setValue("tomsmith")
        await browser.$("//*[@id=\"content\"]/div/h4/em[2]").click()
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: '' }]
        }])
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyUp', value: '' }]
        }])
        await browser.$("#password").click()
        await browser.$("#password").setValue("SuperSecretPassword!")
        await browser.$('button[type="submit"]').click()
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
        await browser.$("aria/Logout").click()
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    });
});
//# recorderSourceMap=BCBDCFBGFLALALFQBRBSBTFYAYAYFdBeBfChBC