import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
    
const randomName = () => {
    return faker.person.fullName();
}

function randomEmail () {
    return faker.internet.email();
}

const randomUserName = () => {
    return faker.person.firstName();
}

const randomPassword = () => {
    return  faker.number.int({ min: 10000000, max: 99999999 });
}

const randomNumeric = (numero) => {
    return faker.random.numeric(numero)
}

function upload() {
    cy.get('input[accept="image/*"]').selectFile('images/cnh.png', {force: true})
}

const cancelCallAPI = () => {
    const app = window.top;
        if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
        style.innerHTML =
            '.command-name-request, .command-name-xhr { display: none }';
        style.setAttribute('data-hide-command-log-request', '');
        app.document.head.appendChild(style);
    }
}

const validarElNaoVisiveis = () => {
    cy.document().then((doc) => {
        const elementosVisiveis = Array.from(doc.querySelectorAll('*')).filter((el) => {
          const style = getComputedStyle(el);
          return el.offsetWidth > 0 && el.offsetHeight > 0 && style.visibility !== 'hidden' && style.display !== 'none';
        });
        console.log(elementosVisiveis);
    });
}

module.exports = {
    randomName, randomEmail, randomUserName, randomPassword, cancelCallAPI, randomNumeric, upload, validarElNaoVisiveis
};