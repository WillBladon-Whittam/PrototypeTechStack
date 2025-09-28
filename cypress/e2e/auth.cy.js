describe("Authentication", () => {
  it("should load the login page", () => {
    cy.visit("http://localhost:3000/login");
    cy.contains("Login"); // verifies page loaded
  });

  it("should allow a user to register and login", () => {
    const email = `will_test_${Date.now()}@test.local`;
    const password = "123";

    // Register
    cy.visit("http://localhost:3000/register");
    cy.get("input[placeholder=Email]").type(email);
    cy.get("input[placeholder=Password]").type(password);
    cy.get("button[type=submit]").click();

    // Redirects to login
    cy.url().should("include", "/login");

    // Login
    cy.get("input[placeholder=Email]").type(email);
    cy.get("input[placeholder=Password]").type(password);
    cy.get("button[type=submit]").click();

    // Should land on dashboard
    cy.url().should("include", "/dashboard");
    cy.contains(email);
  });
});
