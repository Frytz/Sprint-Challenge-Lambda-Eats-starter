/* eslint-disable no-undef */
describe("", function (){
    beforeEach(function () {
        cy.visit("http://localhost:3000/form")
    });
    it("add",function (){
        cy.get('[data-cy= nameArea]')
            .type("john")
            .should("have.value", "john");
    })

})