
describe ('Google', () => {

    it ('abrir el navegador', async () => {

        await page.goto('https://google.com')
        await page.waitForTimeout(5000)
        
    },10000)


})