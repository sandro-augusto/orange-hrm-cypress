let el = require('../elements/loginElements').LOGIN
const {click, set, carregaPage, waitElement, get_text_index, get_text } = require('../actions');

export default {
    acessarPage() {
        // Para usar as url's dos ambientes tem que deixar apenas a "/"
        carregaPage(el.url)
    },

    preencheLogin(username, senha) {
        if (username !== null) {
            set(el.username, username);
        }
        if (senha !== null) {
            set(el.senha, senha);
        }
    },

    validaLoginPage() {
        return waitElement(el.validaLogin)
    },

    clicarLogin() {
        click(el.btnLogin)
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