### Trilha 2 da semana agilizei

Essa trilha consiste em mostrar o incio de um projeto cypress, conceitos e testes com cypress. Logo após, mostrou conceitos e como funciona o padrão de page objects. Por fim, mostrou como criar relatórios dos testes através do framework Allure.

Github do projeto
https://github.com/samlucax/youtube-cypress/tree/video4


-----------------------------------

Baixe o projeto no Github do professor Samuel Lucas
- `https://github.com/samlucax/youtube-cypress.git`

Passo a passo para executar os testes:

1.Acessar o diretório backend, instalar as dependências e iniciar a api:
  - `cd backend` 
  - depois `npm install`
  - depois `npm start`

2.Acessar o diretório frontend, instalar as dependências e iniciar o site:
  - `cd frontend`
  - depois `npm install`
  - depois `npm start`
  
3.Acessar o diretório root do projeto (que tem a pasta Cypress), instalar as dependências e abrir o Cypress Runner:
  - `npm install`
  - `./node_modules/.bin/cypress open`
  
  Se quiser, apague o projeto do Cypress e tente fazer do zero acompanhando o vídeo. 
  Bons estudos!


## PageObjects

Páginas:
- Logon
- Register (cadastro)
- Profile (perfil da ong)
- NewIncident (cadastro de casos)

Cada pagina, possui: 
- acoes -> index.js
- elementos -> elements.js

## Framework allure

Allure:
Allure framework: https://docs.qameta.io/allure/#_reporting
Plugin do alure https://github.com/Shelex/cypress-allure-plugin

----------------------------------

