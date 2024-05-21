let el = require('../elements/adminElements').ADMIN
const {click, set, waitElement, get_text_index, get_text, click_index, set_Index } = require('../actions');
const { ValidateElNotVisible, pressEnterIndex } = require('../utils')

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
        cy.wait(5000)
        switch(option){
            case 'Username':
                set_Index(el.inputUser, 'Guilherme', 1)
                cy.wait(1000)
                click_index(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 1)
            case 'UserRole':
                set_Index(el.inputUser, 'Guilherme', 1)
                click_index(el.fieldSelect, 0)
                click_index(el.optionSelect, 1)
                click_index(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 2)
            case 'EmployeeName':
                set(el.inputEmployeeName, 'Test Employee') 
                cy.wait(2000)
                click_index(el.optionEmployee, 0)
                click_index(el.buttonSearch, 1)
                return get_text_index(el.optionGrid, 3)
            case 'Status':
                set_Index(el.inputUser, 'Guilherme', 1)
                click_index(el.fieldSelect, 1)
                click_index(el.optionSelect, 1)  
                click_index(el.buttonSearch, 1)
                return get_text_index(el.optionGrid, 4)
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
        click_index(el.btnDelete, 0)
        cy.wait(2000)
        click(el.btnConfirmDelete)
    },

    clickReset() {
        click_index(el.buttonSearch, 0)
    },

    searchUser(user){
        set_Index(el.employeeSupervisor, user, 1)
        cy.wait(2000)
        click_index(el.optionSelect, 0)
    },

    clickSearch() {
        click_index(el.buttonSearch, 1)
    },

    validateGrid() {
        return get_text_index(el.gridId, 1)       
    },

    validateAlert() {
        return get_text(el.alertSuccess)
    },

    validateAlertError() {
        cy.wait(1000)
        return get_text(el.alertRequired)
    },

    validateAlertErrors(index) {
        cy.wait(1000)
        return get_text_index(el.alertRequired, index)
    },

    logout() {
        click(el.logoutMenu)
        click_index(el.btnOptions, 3)
    }
}