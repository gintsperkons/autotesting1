import LoginPage from "../../pageObjects/Login.page";
import HomePage from "../../pageObjects/home.page";

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
  it.only("6.Open Item and Validate title", () => {
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    HomePage.SaucLabBackpackLink.click();
    HomePage.ItemTitle.invoke("text").should("eq", "Sauce Labs Backpack");
  });
});
