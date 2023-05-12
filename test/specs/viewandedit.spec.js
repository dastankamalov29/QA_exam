const LoginPage = require("../pageobjects/LoginPage");
const ViewAndEditPage = require("../pageobjects/ViewAndEditPage");

describe('Edit suit', () => {
    it('Edit client', async () => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');

        await ViewAndEditPage.doEdit('Annie', 'Rose', '03.03.1996', '996555887788', 'Annie@gmail.com');
    })
})
