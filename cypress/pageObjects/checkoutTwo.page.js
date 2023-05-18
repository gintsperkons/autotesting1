class CheckoutTwo {
  static get FinishButton() {
    return cy.get('[data-test="finish"]');
  }
  static get ThanksTitle() {
    return cy.get(".complete-header");
  }
  static get TotalSum() {
    return cy.get(".summary_total_label");
  }
}
export default CheckoutTwo;
