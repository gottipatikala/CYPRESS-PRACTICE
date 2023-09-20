import user from '../../fixtures/example.json'
it('loads the same object', () => {
  cy.fixture('example').then(function (example) {
    this.example= example
    cy.log(example.name)
    cy.log(example.gender)
    cy.log(example.productName)
})
})

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://www.amazon.co.uk/')
//   })
// })