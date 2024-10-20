import LocationPageControl from "./LocationPageControl";
class LocationModal {

//methods

EnterLocation(value)
{
    return cy.get(LocationPageControl.location).type(value)
}

SelectLocation()
{
    return cy.get(LocationPageControl.selectLocation)
}

CheckCheckbox()
{
   return cy.get(LocationPageControl.checkCheckbox)
}

ClickPurchasebtn()
{
    return cy.get(LocationPageControl.clickpurchasebtn)
}






}

export default LocationModal;