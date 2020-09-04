// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("createOng", () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3333/ongs',
        body: {
            name: "Gatos queridos",
            email: "gatos@mail.com",
            whatsapp: "519999999999",
            city: "Porto Alegre",
            uf: "RS"    
        }
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        Cypress.env('createdOngId', response.body.id);
    });
})

Cypress.Commands.add("createNewIncident", () => {
    Cypress.env('createdOngId')
    cy.request({
        method: 'POST',
        url: 'http://localhost:3333/incidents',
        headers: { 'Authorization': `${ Cypress.env('createdOngId') }`, },
        body: {
            title: "Animal com fome",
            description: "Animal precisa de alimento para viver.",
            value: "250"
        }
    }).then(response => {
        expect(response.body.id).is.not.null;
        cy.log(response.body.id);

        Cypress.env('createdIncidentId', response.body.id);
    });
})

Cypress.Commands.add("login", () => {
    cy.visit('http://localhost:3000/profile', {
        onBeforeLoad: (win) => {
            win.localStorage.clear();
            win.localStorage.setItem('ongId', Cypress.env('createdOngId'));
            win.localStorage.setItem('ongName', 'Gatos queridos');
        }
    });
})