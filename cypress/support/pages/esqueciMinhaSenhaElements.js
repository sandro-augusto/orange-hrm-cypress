    let el = require('../elements/esqueciMinhaSenhaElements').RESET_PASSWORD
    const {click, set, get_text, click_index} = require('../actions');
    
    export default {
        preencheResetPassword(username) {
            if (username !== null) {
                set(el.inputUsername, username);
            }
        },

        clicarResetPassword() {
            click(el.btnSubmit)
        },

        clicarBotaoCancel() {
            click_index(el.btnCancel, 0)
        },
    
        validaReseteSenhaPage() {
            return get_text(el.validaTitleReset)
        },

        validaAlertRequired() {
            return get_text(el.msgRequired)
        }
    }