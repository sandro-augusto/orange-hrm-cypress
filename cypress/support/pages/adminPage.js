let el = require('../elements/adminElements').ADMIN
const {click, set, setIndex, waitElement, get_text_index, get_text, click_index, click_text } = require('../actions');

export default {
    fillInUsername(username) {
        if (username !== null) {
            setIndex(el.input, username, 1);
        }
    },

    fillInEmployeeName(name) {
        if (name !== null) {
            set(el.inputEmployeeName, name);
        }
    },

    fillInPassword(password) {
        if (password !== null) {
            setIndex(el.input, password, 2);
        }
    },

    fillInConfirmPassword(password) {
        if (password !== null) {
            setIndex(el.input, password, 3);
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

    clickSave() {
        click_index(el.buttonSearch, )
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