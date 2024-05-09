import { clear_index, click, get_text, set_Index } from "../actions"
let el = require('../elements/pimElements').EMPLOYEE

export default {

    fillInformationsPIM(firstname, middlename, lastname, employeeId) {
        click(el.btnAdd)
        set_Index(el.inputFields, firstname, 0)
        set_Index(el.inputFields, middlename, 1)
        set_Index(el.inputFields, lastname, 2)
        clear_index(el.inputFields, 3)
        set_Index(el.inputFields, employeeId, 3)
        click(el.btnSave)
    },

    validateMessSuccess() {
        return get_text(el.alertSucess)
    }



}