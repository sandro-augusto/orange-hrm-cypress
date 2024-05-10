import { clear_index, click, click_index, get_text, replaceIN, set_Index, splitIn, get_text_index } from "../actions"
let el = require('../elements/pimElements').EMPLOYEE

export default {

    clickAdd() {
        click(el.btnAdd)
    },

    fillInformationsPIM(firstname, middlename, lastname, employeeId) {
        set_Index(el.inputFields, firstname, 0)
        set_Index(el.inputFields, middlename, 1)
        set_Index(el.inputFields, lastname, 2)
        clear_index(el.inputFields, 3)
        set_Index(el.inputFields, employeeId, 3)
    },

    clickSave(){
        click(el.btnSave)
    },

    validateMessSuccess() {
        return get_text(el.alertSucess)
    },

    searchEmployee(employeeName){
        set_Index(el.employeeSupervisor, employeeName, 0)
        cy.wait(2000)
        click_index(el.optionSelect, 0)
    },

    clickSearch(){
        click(el.btnSearch)
    },

    validateGrid() {
        return get_text_index(el.gridId, 1)       
    },

    clickDelete() {
        click(el.btnDelete)
        cy.wait(2000)
        click(el.btnConfirmDelete)
    },


}