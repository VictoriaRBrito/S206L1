/// <reference types="cypress"/>


describe('Cenário de teste: Testar funcionalidades de login do site globalsqa', () => {

    it ('Caso de teste: Registrar um usuário com sucesso', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        cy.get('.btn-link').click();
        cy.get('#firstName').type('qainatel');
        cy.get('#Text1').type('qainatel');
        cy.get('#username').type('qainatel');
        cy.get('#password').type('qainatel');
        cy.get('.btn-primary').click();
        cy.get('.ng-binding').should('contain.text', 'Registration successful');

    })

    it ('Caso de teste: Falha ao tentar registrar um usuario com dados invalidos', () => {

        // Aumentar a cobertura de testes: Entrando na tela de registrar por duas formas diferentes
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register');
        cy.get('#firstName').type('qainatel');
        cy.get('#Text1').type('qainatel');
        cy.get('#username').type('qainatel');
        cy.get('#password').type('qainatel');
        cy.get('#firstName').clear();
        cy.get('.has-error > .help-block').should('have.text', 'First name is required');
        cy.get('.btn-primary').should('be.disabled');

    })

    it ('Caso de teste: Login na plataforma com sucesso', () => {

        var userInfo = criarUsusario();
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        cy.get('#username').type(userInfo[0]);
        cy.get('#password').type(userInfo[1]);
        cy.get('.btn-primary').click();
        cy.get('h1.ng-binding').should('contain.text', userInfo[0])

    })

})

//Função
function criarUsusario(){

    let horas = new Date().getHours().toString();
    let minutos = new Date().getMinutes().toString();
    let seg = new Date().getSeconds().toString();
    let userId = horas + minutos + seg + '_userId';
    let userPass = horas + minutos + seg + '_userPass';
    let userInfo = [userId, userPass]

    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('.btn-link').click();
    cy.get('#firstName').type(userId);
    cy.get('#Text1').type(userId);
    cy.get('#username').type(userId);
    cy.get('#password').type(userPass);
    cy.get('.btn-primary').click();
    cy.get('.ng-binding').should('contain.text', 'Registration successful');

    return userInfo;

}
