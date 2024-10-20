import HomePageModal from "../../Pages/Modal/HomePageModal"
import LocationModal from "../../Pages/LocationPageModal"
import ShopPageModal from "../../Pages/ShopPageModal"
import TotalAmountModal from "../../Pages/TotalAmountPageModal"
import LoginPageModal from "../../Pages/Modal/LoginpageModal"
import BaseTest from "../BaseTest"

describe('My Second Test Suite', function () {

  let environmentDetails;
  const loginPageModal = new LoginPageModal();
  before(function () {

    // runs once before all tests in the block
    cy.fixture('product').then(function (data) {
      this.data = data
    })
    
    BaseTest.getEnvironmentDetails();
    cy.get('@envDetails').then((envDetails) => {
      environmentDetails = envDetails;
      loginPageModal.navigateToURL(environmentDetails.url)
    });

  })

  it('framework design', function () {

    const homepagemodal = new HomePageModal()
    const shoppagemodal = new ShopPageModal()
    const totalamountpage = new TotalAmountModal()
    const locationpage = new LocationModal()
    homepagemodal.geteditbox(this.data.name)
    homepagemodal.getTwoWayBinding().should('have.value', this.data.name)
    homepagemodal.SelectGender(this.data.gender)
    homepagemodal.SelectStatus().should('be.disabled')
    shoppagemodal.ClickShopLink().click()
    Cypress.config('defaultCommandTimeout',8000)
    this.data.ProductName.forEach(element => {

       shoppagemodal.SelectProduct(element)
     });

     shoppagemodal.ClickCheckoutButton().click()
     totalamountpage.ClickCheckoutbtn().click()
     locationpage.EnterLocation(this.data.country)
     locationpage.SelectLocation().click()
     locationpage.CheckCheckbox().click({force:true})
     locationpage.ClickPurchasebtn().click()
  //   cy.get('.alert').then(function(element)
  //  {
  //   const actualText = element.text
  //   expect(actualText.includes("Success")).to.be.true

   
  //  })

     
  })
})