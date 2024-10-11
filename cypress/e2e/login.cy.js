/// <reference types="cypress"/>

// funcionalidae 
describe('Login', () => {

    // cenario
    it('Login com sucesso', () => {
        //DADO
        //acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')
        //digitar email
        cy.get('#user').type('teste@qazando.com')
        //digitar senha
        cy.get('#password').type('123456')
        //QUANDO
        //clicar no botão de login
        cy.get('#btnLogin').click()
        //ENTÃO
        //validar que o login foi realizado
        cy.get('#swal2-title').should('have.text', "Login realizado")
        cy.url().should('contain', '/my-account')
    })

    it('Login com email vazia', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Login com senha vazia', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('teste@qazando.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it('Login com email invalido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('testeAqazandoCom')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Login com senha invalida', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('teste@qazando.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

})

