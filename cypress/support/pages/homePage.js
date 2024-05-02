let el = require('../elements/homeElements').HOME
const { get_text, get_text_index } = require('../actions');

export default {

    validaHome() {
        return get_text_index(el.validaElHome, 0)
    },

    validaURLHome() {
        return cy.url()
    }



}

