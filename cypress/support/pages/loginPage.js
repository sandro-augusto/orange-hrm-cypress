let el = require('../elements/loginElements').LOGIN
const {click, set, loadPage, waitElement, get_text_index, get_text } = require('../actions');

export default {
    accessPage() {
        loadPage(el.url)
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

    clickForgetPassword() {
        click(el.linkForgetPass)
    },

    validateErrorMess() {
        return get_text_index(el.validateErrorMess, 0)
    },

    validateErrorMess2() {
        return get_text_index(el.validateErrorMess, 1)
    },

    validateErrorAlert() {
        return get_text(el.alertError)
    }
}