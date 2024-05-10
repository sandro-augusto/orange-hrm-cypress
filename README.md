<h1 align="center"> FRONT-END AUTOMATION - ORANGE HRM 🍊</h1>

![STATUS](https://img.shields.io/static/v1?label=STATUS&message=UNDER%20CONSTRUCTION&color=yellow&style=for-the-badge)


## 💬 About the project
<p> This project aims to improve our skills in automation and programming logic, through the exchange of knowledge based on our experience. The project aims to <b>study</b> and improve our knowledge, using the <b>Cypress</b> tool with the aim of mastering it at an <b>advanced level</b>.

## 💻 Technologies used

- Node (v20.11.0)

- Cypress

## 📋 Prerequisites
- Install the [Node.js](https://nodejs.org/)
- Install an IDE, such as [Visual Studio Code](https://code.visualstudio.com/download)
- Install the [Git](https://git-scm.com/downloads) (if you want to work with a project on your machine) 

##  📥 Cloning the project:
```bash
git clone https://github.com/sandro-augusto/orange-hrm-cypress.git
  ```

##  👩🏻‍💻​ To install project dependencies and plugins:

Open the terminal in VSCode (use CTRL + J) and type the following command:

```bash
yarn install
  ```

### Command to open Cypress:

```bash
yarn cypress open
  ```

#### Running in headless mode
```bash
yarn cypress run
```

# Cypress Project Structure

| Directory                | Purpose                                                                         |
|--------------------------|-----------------------------------------------------------------------------------|
| `e2e/`  | All the steps that were implemented in the `pages` |
| `support/pages/`  | Page objects or modules, such as `registerPage.js`, containing related methods.|
| `support/elements/`      | Definitions of common elements used on pages, `homeElements.js`. |
| `cypress.json`           | Cypress main configuration file where global settings for testing can be defined. |

**SCRIPTS:**
* **"run_allure" - TAG to run headless with Yarn and the report Allure**
* **"run_allure_npm" - TAG to run headless with NPM and the report Allure** 
* **"yallure_serve" - Open the report server Allure as Yarn**
* **"nallure_serve" - Open the report server Allure as NPM**
* **"test" - Run the project headless and open the Allure report in HTML**

## Additional Resources
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)
- [Recipe examples](https://github.com/cypress-io/cypress-example-recipes)

## 👥 Project authors
<table>
  <tbody>
    <tr>
	  <td align="center" valign="top" width="14.28%">
        <a href="https://www.linkedin.com/in/sandro-augusto/" target="_blank"><img src="https://avatars.githubusercontent.com/u/107635632?v=4" width="100px;" alt="Sandro Augusto"/></a><br />
        <sub><b><a href="https://github.com/sandro-augusto" target="_blank">Sandro Augusto</a></b></sub><br />
    </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://www.linkedin.com/in/marilliadantas/" target="_blank"><img src="https://avatars.githubusercontent.com/u/105676314?v=4" width="100px;" alt="Marillia Dantas"/></a><br />
        <sub><b><a href="https://github.com/marilliadantas" target="_blank">Marillia Dantas</a></b></sub><br />
      </td>
  </tbody>
</table>