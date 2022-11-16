import LoginPage from "../pages/LoginPage";

let loginPage


describe('Iniciar sesion en la pagia', () => {
  beforeAll(async () => {
    loginPage = new LoginPage()
    //jest.setTimeout(30000)
  }, 30000)

  it('debera ir a la pagina', async () => {
    await loginPage.visit()
    jest.setTimeout(30000)
  })

  it('debera llenar los campos', async () => {
    await loginPage.login('user@phptravels.com', 'demouser')
    jest.setTimeout(30000)
  })


  it('validar que este en el dashboard', async () => {
    await loginPage.validateLogin()
    jest.setTimeout(30000)
  })
})