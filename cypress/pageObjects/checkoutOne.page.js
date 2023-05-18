class CheckoutOne {
  static get CheckoutButton() {
    return cy.get('[data-test="checkout"]');
  }
  static get NameField() {
    return cy.get('[data-test="firstName"]');
  }
  static get LastNameField() {
    return cy.get('[data-test="lastName"]');
  }
  static get ZIPCodeField() {
    return cy.get('[data-test="postalCode"]');
  }
  static get ContinueButton() {
    return cy.get('[data-test="continue"]');
  }
  static get CartList() {
    return cy.get(".cart_list");
  }
  static get CartItemsList() {
    return cy.get(".inventory_item_name");
  }
}
export default CheckoutOne;
