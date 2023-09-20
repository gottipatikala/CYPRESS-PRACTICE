
 ///<reference types="cypress/">
 import Homepage from  "../pageobjectmodel/Homepage"
 import productpage from "../pageobjectmodel/Productpage"



 describe('test frame Worker',function()
 {
  before (function()
     { 
       cy.fixture('example').then (function(example)
       {
         this.example=example
      })
    })
 it('my first test',function()
{
  const homePage=new Homepage()
  const Productpage= new productpage()
    cy.visit(Cypress.env('url'))

    homePage.giveName().type(this.example.name)
    homePage.giveGender().select(this.example.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.example.name)
    homePage.giveName().should('have.attr','minlength','2')
    homePage.getEntrepreneaur().should('be.disabled')
    homePage.getShopTab().click()
    Cypress.config('defaultCommandTimeout', 8000)
cy
      this.example.productName.forEach(function(element)
      {
     cy.selectproduct(element)
      })
      Productpage.clickButton().click()
       var sum=0
     cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) =>
     {
       const amount=$e1.text()
        var res=amount.split("")
        res=res[1].trim()
        sum=Number(sum)+Number(res)
     }).then(function()
     {
      cy.log(sum)
     })
     cy.get('h3 strong').then(function(element)
     {
      const amount=element.text()
      var res=amount.split("")
       var total=res[1].trim()
    
       expect(Number(total)).to.equal(sum)
       
      
     })
      

      cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
     // cy.get('-child(5) > .b:nth-child(4) > :nthtn').click()
      cy.get('#country').type('India')
      cy.get('.suggestions > ul > li > a').click()
      cy.get('#checkbox2').click({force:true})
      cy.get('input[type=submit]').click()
      cy.get('.alert').then(function(element)
      {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
      }
      )

  })


 })
 