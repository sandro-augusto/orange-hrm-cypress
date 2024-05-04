let el = require('../elements/adminElements').ADMIN
const {click, set, waitElement, get_text_index, get_text, click_index } = require('../actions');

export default {
    preencheUsername(username) {
        if (username !== null) {
            set(el.inputUser, username);
        }
    },

    validaLoginPage() {
        return waitElement(el.validaLogin)
    },

    clickAdd() {
        click_index(el.buttonSearch, 2)
    },

    clickReset() {
        click_index(el.buttonSearch, 0)
    },

    clickSearch() {
        click_index(el.buttonSearch, 1)
    },

    clickForgetPassword() {
        click(el.linkForgetPass)
    },

    validaMensErro() {
        return get_text_index(el.validaMensErro, 0)
    },

    validaMensErro2() {
        return get_text_index(el.validaMensErro, 1)
    },

    validaAlertaErro() {
        return get_text(el.alertErro)
    }
}