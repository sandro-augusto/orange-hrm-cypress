let el = require('../elements/adminElements').ADMIN
let elements = require('../elements/homeElements').HOME
const {click, set, waitElement, get_text_index, get_text, click_index, set_Index } = require('../actions');
const { validarElNaoVisiveis, pressEnterIndex } = require('../utils')

export default {
    fillInInformations(userRole, status, employeeName, username, password, confirmPassword) {
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
        

        if (employeeName !== null) {
            set(el.inputEmployeeName, employeeName)
            cy.wait(2000)
            click(el.optionEmployee)
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

    testeAdmin() {
        click(el.btnAdd)
        click_index(el.fieldSelect, 0)
        click_index(el.optionSelect, 1)
    },

    ValidateSearchAdmin(option) {
        click_index(elements.optionMenu, 0)
        switch(option){
            case 'Username':
                cy.scrollTo('top', { scrollBehavior: false });
                set_Index(el.inputUser, 1, 'FMLName1')
                cy.wait(1000)
                click_index(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 2)
            case 'UserRole':
                click_index(el.fieldSelect, 0)
                click_index(el.optionSelect, 2)
                click_index(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 3)
            case 'EmployeeName':
                set(el.inputEmployeeName, 'Qwerty LName') 
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

    clickReset() {
        click_index(el.buttonSearch, 0)
    },

    clickSearch() {
        click_index(el.buttonSearch, 1)
    },

    clickForgetPassword() {
        click(el.linkForgetPass)
    },

    validateMessError() {
        return get_text_index(el.validateMessError, 0)
    },

    validateMessError2() {
        return get_text_index(el.validateMessError, 1)
    },

    validateAlertError() {
        return get_text(el.alertErro)
    }
}