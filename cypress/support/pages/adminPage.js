let el = require('../elements/adminElements').ADMIN
let elements = require('../elements/homeElements').HOME
const {click, set, waitElement, get_text_index, get_text, click_index, scrollTo, set_Index, click_indexForce } = require('../actions');
const { validarElNaoVisiveis, pressEnterIndex } = require('../utils')

export default {

    
    fillUsername(username) {
        if (username !== null) {
            set(el.inputUser, username);
        }
    },

    ValidateSearchAdmin(option) {
        click_index(elements.optionMenu, 0)
        switch(option){
            case 'Username':
                cy.scrollTo('top', { scrollBehavior: false });
                set_Index(el.inputUser, 1, 'FMLName')
                cy.wait(1000)
                click_index(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 2)
            case 'UserRole':
                click_indexForce(el.fieldSelect, 0)
                click_index(el.optionSelect, 2)
                click_indexForce(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.optionGrid, 3)
            case 'EmployeeName':
                set(el.inputEmployeeName, 'Qwerty LName') 
                cy.wait(2000)
                click_index(el.optionEmployee, 0)
                click_indexForce(el.buttonSearch, 1)
                return get_text_index(el.optionGrid, 4)
            case 'Status':
                click_indexForce(el.fieldSelect, 1)
                click_indexForce(el.optionSelect, 1)  
                click_indexForce(el.buttonSearch, 1)
                return get_text_index(el.optionGrid, 5)
            default:
                'Favor informar uma opção válida'
        }
    },


    teste(){
        click_index(elements.optionMenu, 0)
        click(el.btnAdd)
        cy.wait(5000)
        // click_index(el.optionSelect, 0)
        // // validarElNaoVisiveis()
        // cy.wait(2000)

        // click_index(el.opcaoUseRole, 2)
        // cy.wait(2000)

        // cy.scrollTo('top');
        // cy.wait(2000)

    },

    validateLoginPage() {
        return waitElement(el.validateLogin)
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