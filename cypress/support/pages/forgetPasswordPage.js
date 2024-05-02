    let el = require('../elements/forgetPasswordElements').RESET_PASSWORD
    const {click, set, get_text, click_index} = require('../actions');
    
    export default {
        preencheResetPassword(username) {
            if (username !== null) {
                set(el.inputUsername, username);
            }
        },

        clickResetPassword() {
            click(el.btnSubmit)
        },

        clickCancel() {
            click_index(el.btnCancel, 0)
        },
    
        validatePasswordResetPageTitle() {
            return get_text(el.validaTitleReset)
        },

        validateRequiredAlert() {
            return get_text(el.msgRequired)
        }
    }