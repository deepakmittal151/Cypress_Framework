import ShopPageControl from "./ShopPageControl"
class ShopPageModal {

//methods

ClickShopLink()
{
    return cy.get(ShopPageControl.shoplink)
}

SelectProduct()
{
    cy.get(ShopPageControl.selectproduct).each((el,index,$list) => {

        if (el.text().includes('Blackberry'))
        {
            cy.get(ShopPageControl.clickAddToCart).eq(index).click()
        }
    
      })
}

ClickCheckoutButton()
{
   return  cy.get(ShopPageControl.clickcheckout)
}




}

export default ShopPageModal;