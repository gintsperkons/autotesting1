import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get stackIcon() {
    return cy.get("#react-burger-menu-btn");
  }
  static get sideBar() {
    return cy.get(".bm-menu-wrap");
  }
  static get logoutLink() {
    return cy.get("#logout_sidebar_link");
  }
  static get SauceLabBackpackAddCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
  static get SauceLabTShirtAddCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  }
  static get SauceLabOnesieAddCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
  }
  static get ShopingCartBadge() {
    return cy.get(".shopping_cart_badge");
  }
  static get SauceLabBackpackRemoveCartButton() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }
  static get SaucLabBackpackLink() {
    return cy.get("#item_4_title_link");
  }
  static get ItemTitle() {
    return cy.get(".inventory_details_name");
  }
}

export default HomePage;
