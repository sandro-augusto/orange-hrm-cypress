<h1 align="center"> AUTOMAÇÃO FRONT-END - ORANGE HRM 🍊</h1>

![STATUS](https://img.shields.io/static/v1?label=STATUS&message=%20EM%20CONSTRU%C3%87%C3%83O&color=yellow&style=for-the-badge)


## 💬 Sobre o projeto
<p> Este projeto tem como objetivo aprimorar nossas habilidades em automação e lógica de programação, através da troca de conhecimentos baseados em nossa experiência. O projeto visa <b>estudo</b> e aprimoramento de nossos conhecimentos, utilizando a ferramenta <b>Cypress</b> com o intuito de dominá-la em um <b>nível avançado</b>

## 💻 Tecnologias utilizadas

- Node (v20.11.0)

- Cypress

## 📋 Pré-Requisitos
- Instalar o [Node.js](https://nodejs.org/)
- Instalar uma IDE, como o [Visual Studio Code](https://code.visualstudio.com/download)
- Instalar o [Git](https://git-scm.com/downloads) (caso queira trabalhar com projeto em sua máquina) 

##  📥 Clonando o projeto:
```bash
git clone https://github.com/sandro-augusto/orange-hrm-cypress.git
  ```

##  👩🏻‍💻​ Para instalar as depências e plugin do projeto:

Abra o terminal no VSCode (utilize o CTRL + J) e digite o seguinte comando:

```bash
yarn install
  ```

### Comando para abrir o Cypress:

```bash
yarn cypress open
  ```

#### Executando no modo headless 
```bash
yarn cypress run
```

# Cypress Project Structure

| Directory                | Purpose                                                                         |
|--------------------------|-----------------------------------------------------------------------------------|
| `e2e/`  | Está todas os passos que foram implementados nas `pages` |
| `support/pages/`  | Objetos de página ou módulos, como `cadastroPage.js`, contendo métodos relacionados.|
| `support/elements/`      | Definições de elementos comuns usados nas páginas, por exemplo, `homeElements.js`. |
| `cypress.json`           | Arquivo de configuração principal do Cypress, onde podem ser definidas configurações globais para testes. |

**SCRIPTS:**
* **"run_allure" - TAG pra rodar em headless com o Yarn e o relatório Allure**
* **"run_allure_npm" - TAG pra rodar em headless com o NPM e o relatório Allure** 
* **"yallure_serve" - Abrir o servidor do relatório Allure com o Yarn**
* **"nallure_serve" - Abrir o servidor do relatório Allure com o NPM**
* **"test" - Rodar o projeto em headless e abrir o relatório Allure em HTML**

## Recursos Adicionais
- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Exemplos de receitas](https://github.com/cypress-io/cypress-example-recipes)

## 👥 Autores do projeto
<table>
  <tbody>
    <tr>
	  <td align="center" valign="top" width="14.28%">
        <a href="https://www.linkedin.com/in/sandro-augusto/" target="_blank"><img src="https://avatars.githubusercontent.com/u/107635632?v=4" width="100px;" alt="Sandro Augusto"/></a><br />
        <sub><b><a href="https://github.com/Amandatec" target="_blank">Sandro Augusto</a></b></sub><br />
    </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://www.linkedin.com/in/marilliadantas/" target="_blank"><img src="https://avatars.githubusercontent.com/u/105676314?v=4" width="100px;" alt="Marillia Dantas"/></a><br />
        <sub><b><a href="https://github.com/marilliadantas" target="_blank">Marillia Dantas</a></b></sub><br />
      </td>
  </tbody>
</table>