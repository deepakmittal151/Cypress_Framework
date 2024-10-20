class BaseTest{
    static getEnvironmentDetails(){        
        // Load environment-specific details based on the envName
        cy.fixture('env').then((envDetails) => {          
          cy.wrap(envDetails[Cypress.env('envName')]).as('envDetails')
        });
    }
}
export default BaseTest;