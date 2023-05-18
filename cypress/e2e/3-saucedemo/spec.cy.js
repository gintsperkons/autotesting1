import LoginPage from "../../pageObjects/Login.page";
import HomePage from "../../pageObjects/home.page";
import CartPage from "../../pageObjects/cart.page";

describe("Saucedemo", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  it("1.Login scenario", () => {
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("secret_sauce");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    LoginPage.loginButton.should("not.exist");
  });
  it("2.Login scenario - Negative case", () => {
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("xxxxxxxxxxx");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("be.visible");
  });
  it("3.Logout scenario", () => {
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.stackIcon.click();
    HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "false");
    HomePage.logoutLink.click();
    LoginPage.loginButton.should("be.visible");
  });
  it("4.Add Item to cart scenario", () => {
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.SauceLabBackpackAddCartButton.click();
    HomePage.SauceLabTShirtAddCartButton.click();
    HomePage.SauceLabOnesieAddCartButton.click();
    HomePage.ShopingCartBadge.invoke("text").should("eq", "3");
  });
  it("5.Add and remove item", () => {
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.SauceLabBackpackAddCartButton.click();
    HomePage.ShopingCartBadge.invoke("text").should("eq", "1");
    HomePage.SauceLabBackpackRemoveCartButton.click();
    HomePage.ShopingCartBadge.should("not.exist");
  });
  it("6.Open Item and Validate title", () => {
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.SaucLabBackpackLink.click();
    HomePage.ItemTitle.invoke("text").should("eq", "Sauce Labs Backpack");
  });
  it.only("6.Buy Sauce Labs Backpack", () => {
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.SauceLabBackpackAddCartButton.click();
    HomePage.SauceLabTShirtAddCartButton.click();
    HomePage.ShopingCartBadge.invoke("text").should("eq", "2");
    HomePage.ShoppingCart.click();
    CartPage.CartList.find("div.cart_item").should("have.length", 2);
    CartPage.CartItemsList.eq(0)
      .invoke("text")
      .should("eq", "Sauce Labs Backpack");
    CartPage.CartItemsList.eq(1)
      .invoke("text")
      .should("eq", "Sauce Labs Bolt T-Shirt");
    CartPage.CheckoutButton.click();
    CartPage.NameField.type("me");
    CartPage.LastNameField.type("you");
    CartPage.ZIPCodeField.type("1256");
    CartPage.ContinueButton.click();
    CartPage.TotalSum.invoke("text").then((text) => {
      var splitText = text.split("$")[1];
      expect(splitText).to.equal("49.66");
    });
    CartPage.FinishButton.click();
    CartPage.ThanksTitle.invoke("text").should(
      "eq",
      "Thank you for your order!"
    );
  });
});
