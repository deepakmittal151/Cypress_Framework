import HomePageControl from "../Controller/HomePageControl"
class HomePageModal {

//methods

geteditbox(value)
{
     cy.get(HomePageControl.editbox).type(value)
}

getTwoWayBinding()
{
    return cy.get(HomePageControl.twowaybinding)
    
}

SelectGender(gender)
{
     cy.get(HomePageControl.gender).select(gender)
}

SelectStatus()
{
    return cy.get(HomePageControl.enterprinour)
}




}

export default HomePageModal;