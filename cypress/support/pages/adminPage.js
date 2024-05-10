let el = require('../elements/adminElements').ADMIN
const {click, set, waitElement, get_text_index, get_text, click_index, set_Index } = require('../actions');
const { validarElNaoVisiveis, pressEnterIndex } = require('../utils')

export default {
    fillInInformations(userRole, employeeName, status, username, password, confirmPassword) {
        if (userRole !== null) {
                switch(userRole) {
                    case 'Admin':
                        click_index(el.fieldSelect, 0)
                        click_index(el.optionSelect, 1)
                    break;
                    case 'ESS':
                        click_index(el.fieldSelect, 0)
                        click_index(el.optionSelect, 2)
                    default:
                        'Favor informar uma opção'
                }
            }

            if (employeeName !== null) {
                set(el.inputEmployeeName, employeeName)
                cy.wait(2000)
                click(el.optionEmployee)
            }

            if (status !== null) {
                switch(status) {
                    case 'Enabled':
                        click_index(el.fieldSelect, 1)
                        click_index(el.optionSelect, 1)
                    break;
                    case 'Disabled':
                        click_index(el.fieldSelect, 1)
                        click_index(el.optionSelect, 2)
                    default:
                        'Favor informar uma opção'
                }
            }

        if (username !== null) {
            set_Index(el.inputUser, username, 1);
        }

        if (password !== null) {
            set_Index(el.inputUser, password, 2)
        }

        if (confirmPassword !== null) {
            set_Index(el.inputUser, confirmPassword, 3)
        }
    },

    ValidateSearchAdmin(option) {
        switch(option){
            case 'Username':
                set_Index(el.inputUser, 'Guilherme', 1)
                cy.wait(1000)
                click_index(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 2)
            case 'UserRole':
                click_index(el.fieldSelect, 0)
                click_index(el.optionSelect, 1)
                click_index(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 3)
            case 'EmployeeName':
                set(el.inputEmployeeName, 'Teste Automation') 
                cy.wait(2000)
                click_index(el.optionEmployee, 0)
                click_index(el.buttonSearch, 1)
                return get_text_index(el.optionGrid, 4)
            case 'Status':
                click_index(el.fieldSelect, 1)
                click_index(el.optionSelect, 1)  
                click_index(el.buttonSearch, 1)
                return get_text_index(el.optionGrid, 5)
            default:
                'Favor informar uma opção válida'
        }
    },

    validateLoginPage() {
        return waitElement(el.validateLogin)
    },

    clickAdd() {
        click(el.btnAdd)
    },

    clickSave() {
        click_index(el.btnSave, 1)
    },

    clickDelete() {
        click(el.btnDelete)
        cy.wait(2000)
        click(el.btnConfirmDelete)
    },

    clickReset() {
        click_index(el.buttonSearch, 0)
    },

    clickSearch() {
        click_index(el.buttonSearch, 1)
    },

    validateAlert() {
        return get_text(el.alertSuccess)
    }
}