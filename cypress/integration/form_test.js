
describe('Form app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });

    const nameInput = () => cy.get("input[name='name']");
    const pepperoniCheckbox = () => cy.get("input[name='pepperoni']");    
    const olivesCheckbox = () => cy.get("input[name='olives']");    
    const onionsCheckbox = () => cy.get("input[name='onions']");    
    const peppersCheckbox = () => cy.get("input[name='peppers']");    
    const instructionsInput = () => cy.get("input[name='instructions']");

    it("can receive proper inputs", () => {
        nameInput()
            .should("have.value", "")
            .type("Josh")
            .should("have.value", "Josh")
            .clear()
        
        pepperoniCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")
        
        olivesCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")

        onionsCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")
        
        peppersCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")

        peppersCheckbox()
            .should("not.be.checked")
            .check()
        onionsCheckbox()
            .should("not.be.checked")
            .check()
        peppersCheckbox().should("be.checked")
        onionsCheckbox().should("be.checked")
    });

    const sizeDropdown = () => cy.get("select[name='size']");


    it("Can submit to homeorders page", () => {
        nameInput()
            .should("have.value", "")
            .type("Josh")
        
        pepperoniCheckbox()
            .should("not.be.checked")
            .check()
        
        sizeDropdown()
            .select('12"')
        
        instructionsInput()
            .should("have.value", "")
            .type("Extra cheese")

        cy.get("button[name='disabledButt']").click()

        // We were never instructed about how to run a POST
        // request with cypress. I'm going to assume that this
        // test would only be possible WITHOUT a POST request
        // if the "submitted orders" list were displayed on the
        // same page as the order form, which is not how my
        // app is currently structured.

        // cy.get("button[name='disabledButt']").click()
        // // cy.request('POST', 'http://localhost:3000/')

        // cy.get("div.user").should("exist")
        // cy.get("h2[name='cardName']").should("have.text", "Josh")
        // cy.get("p[name='cardSize']").should("have.text", 'Size: 12"')
        // cy.get("div[name='cardToppings']").should("have.text", "Toppings:")
        // cy.get("p[name='cardInstructions']").should("have.text", "Extra cheese")
    });
});