let el = require('../elements/homeElements').HOME
const { get_text, get_text_index, click, click_index } = require('../actions');

export default {

    validaHome() {
        return get_text_index(el.validaElHome, 0)
    },

    validaURLHome() {
        return cy.url()
    },

    ValidarOpcoesMenu(opcao) {
        switch (opcao) {
            case 'Admin':
                click_index(el.opcoesMenu, 0)
                return  get_text(el.validaMensaMEnu)
            case 'PIM':
                click_index(el.opcoesMenu, 1)
                return  get_text(el.validaMensaMEnu)
            case 'Leave':
                click_index(el.opcoesMenu, 2)
                return  get_text(el.validaMensaMEnu)
            case 'Time':
                click_index(el.opcoesMenu, 3)
                return  get_text_index(el.validaTextMenu, 2)
            case 'Recruitment':
                click_index(el.opcoesMenu, 4)
                return  get_text(el.validaMensaMEnu)
            case 'MyInfo':
                click_index(el.opcoesMenu, 5)
                return  get_text_index(el.validaTextMenu, 2)
            case 'Performance':
                click_index(el.opcoesMenu, 6)
                return  get_text(el.validaMensaMEnu)
            case 'DashBoard':
                click_index(el.opcoesMenu, 7)
                return  get_text_index(el.validaDashboard, 0)
            case 'Directory':
                click_index(el.opcoesMenu, 8)
                return  get_text(el.validaTextMenu)
            case 'Maintenance':
                click_index(el.opcoesMenu, 9)
                return  get_text(el.validaTextMenu)
            case 'Claim':
                click_index(el.opcoesMenu, 10)
                return  get_text(el.validaMensaMEnu)
            case 'Buzz':
                click_index(el.opcoesMenu, 11)
                return  get_text_index(el.validaBuzz, 0)
            default:
              'Favor informar uma opção válida'
          }
    },

    validaUrlAdmin() {
        return cy.url()
    }




}

