describe("something", () => {
  beforeEach(() => {
    cy.visit("/products/detail/1");
  });

  it("Should load", () => {
    cy.get('.product_title').should("have.text", "Fazley Outlaw Series Sheriff Basic HH Green elektrische gitaar met gigbag")
  });
});
