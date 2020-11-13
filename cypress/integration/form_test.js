
describe('Form app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });

    // const nameInput = () => cy.get("input[name='name']");
    // const emailInput = () => cy.get("input[name='email']");
    // const passwordInput = () => cy.get("input[name='password']");
    // const agreeCheckbox = () => cy.get("input[name='terms']");    

    // it('selecting elems from DOM', () => {
    //     nameInput().should("exist");
    //     emailInput().should("exist");
    //     passwordInput().should("exist");
    //     agreeCheckbox().should("exist");
    //     submitButton().should("exist");
    // })

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

    // it("can type in the inputs", () => {
    //     nameInput()
    //         .should("have.value", "")
    //         .type("Josh")
    //         .should("have.value", "Josh")
    //         .clear()
        
    //     emailInput()
    //         .should("have.value", "")
    //         .type("josh@josh.com")
    //         .should("have.value", "josh@josh.com")
    //         .clear()

    //     passwordInput()
    //         .should("have.value", "")
    //         .type("joshspassword")
    //         .should("have.value", "joshspassword")
    //         .clear()
        
    //     agreeCheckbox()
    //         .should("not.be.checked")
    //         .check()
    //         .should("be.checked")
    //         .uncheck()
    //         .should("not.be.checked") 
    // });

    // const submitButton = () => cy.get("button").contains("submit");

    // const nameCard = () => cy.get("h2[name='cardName']");
    // const emailCard = () => cy.get("p[name='cardEmail']");
    // const passCard = () => cy.get("p[name='cardPass']");
    // const termsCard = () => cy.get("p[name='agreed']");

    // it("submitted form data is displayed", () => {
    //     nameInput()
    //         .should("have.value", "")
    //         .type("Josh")
        
    //     emailInput()
    //         .should("have.value", "")
    //         .type("josh@josh.com")

    //     passwordInput()
    //         .should("have.value", "")
    //         .type("joshspassword")
        
    //     agreeCheckbox()
    //         .should("not.be.checked")
    //         .check()

    //     submitButton().click()
    //     cy.get("div[class='friend container']").should("exist")

    //     nameCard().should("have.text", "Josh")
    //     emailCard().should("have.text", "Email: josh@josh.com")
    //     passCard().should("have.text", "Password: joshspassword")
    //     termsCard().should("have.text", "Agreed to terms of service.")
    // });



    // const nameError = () => cy.get("div[name='nameError']");
    // const emailError = () => cy.get("div[name='emailError']");
    // const passwordError = () => cy.get("div[name='passwordError']");
    // const termsError = () => cy.get("div[name='termsError']");

    // it("gets correct error messages", () => {
    //     // should also have checks for absent values
    //     // but I am not having validation return text for that, 
    //     // just having it disable the submit button.
    //     // So I suppose I could do the casework for button being disbaled too...
        
    //     nameInput()
    //         .should("have.value", "")
    //         .type("jo")
    //     nameError().should("have.text", "Username must be 3 chars long.")

    //     emailInput()
    //         .should("have.value", "")
    //         .type("joshjosh.com")
    //     emailError().should("have.text", "Must be valid email address.")

    //     passwordInput()
    //         .should("have.value", "")
    //         .type("jo")
    //     passwordError().should("have.text", "Password must be 3 chars long.")
    // });
});