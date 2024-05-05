let el = require('../elements/adminElements').ADMIN
let elements = require('../elements/homeElements').HOME
const {click, set, waitElement, get_text_index, get_text, click_index, scrollTo, set_Index, click_indexForce } = require('../actions');
const { validarElNaoVisiveis } = require('../utils')

export default {

    
    preencheUsername(username) {
        if (username !== null) {
            set(el.inputUser, username);
        }
    },

    ValidarPesquisaAdmin(opcoes) {
        click_index(elements.opcoesMenu, 0)
        switch(opcoes){
            case 'Username':
                set_Index(el.inputUser, 1, 'FMLName1')
                click_indexForce(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.opcoesGrid, 2)
            case 'UserRole':
                click_indexForce(el.campoSelect, 0)
                click_index(el.opcoesSelect, 2)
                click_indexForce(el.buttonSearch, 1)
                cy.wait(1000)
                return get_text_index(el.opcoesGrid, 3)
            case 'EmployeeName':
                set(el.inputEmployeeName, 'Qwerty LName') 
                cy.wait(2000)
                click_index(el.opcaoEmployee, 0)
                click_indexForce(el.buttonSearch, 1)
                return get_text_index(el.opcoesGrid, 4)
            case 'Status':
                click_indexForce(el.campoSelect, 1)
                click_indexForce(el.opcoesSelect, 1)  
                click_indexForce(el.buttonSearch, 1)
                return get_text_index(el.opcoesGrid, 6)
            default:
                'Favor informar uma opção válida'
        }
    },


    // teste(){
    //     click_index(el.opcoesSelect, 0)
    //     // validarElNaoVisiveis()
    //     cy.wait(2000)

    //     click_index(el.opcaoUseRole, 2)
    //     cy.wait(2000)

    //     cy.scrollTo('top');
    //     cy.wait(2000)

    // },

    validaLoginPage() {
        return waitElement(el.validaLogin)
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