/* eslint-disable no-undef */
describe("", function (){
    beforeEach(function () {
        cy.visit("http://localhost:3000/form")
    });
    it("add",function (){
        cy.get('[data-cy= nameArea]')
            .type("john")
            .should("have.value", "john");
        cy.get('[data-cy= size]')
            .select('18in')
            .should('have.value', '18in')
        cy.get('[data-cy= sauce]')
            .select('marinara')
            .should('have.value', 'marinara')
        cy.get('[data-cy= pepperoni]').check()
            .should('be.checked')
        cy.get('[data-cy= sausage]').check()
            .should('be.checked')
        cy.get('[data-cy= canadian]').check()
            .should('be.checked')
        cy.get('[data-cy= spicy]').check()
            .should('be.checked')
        cy.get('[data-cy= chicken]').check()
            .should('be.checked')
        cy.get('[data-cy= addButton]').click()
        cy.get('[data-cy= instructions]')
            .type("test")
            .should("have.value", "test");
    });

})