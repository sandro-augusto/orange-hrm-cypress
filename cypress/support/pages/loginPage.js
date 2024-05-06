let el = require('../elements/loginElements').LOGIN
const {click, set, carregaPage, waitElement, get_text_index, get_text } = require('../actions');

export default {
    accessPage() {
        // Para usar as url's dos ambientes tem que deixar apenas a "/"
        carregaPage(el.url)
    },

    fillLogin(username, password) {
        if (username !== null) {
            set(el.username, username);
        }
        if (password !== null) {
            set(el.password, password);
        }
    },

    validateLoginPage() {
        return waitElement(el.validateLogin)
    },

    clickLogin() {
        click(el.btnLogin)
    },

    clickForgetPassword() {
        click(el.linkForgetPass)
    },

    validateMessError() {
        return get_text_index(el.validateMessError, 0)
    },

    validateMessError2() {
        return get_text_index(el.validateMessError, 1)
    },

    validateAlertError() {
        return get_text(el.alertErro)
    }
}