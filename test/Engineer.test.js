// import Engineer class
const Engineer = require("../lib/Engineer");

// Positive test args: name, id, email, gitHub constructor
test("Can set GitHUb account via constructor", () => {

  // create test parameter
  const testValue = "GitHubUser";

  // create test Engineer object
  const e = new Engineer("Foo", 1, "test@test.com", testValue);

  // expect github property to be same as value passed in constructor
  expect(e.github).toBe(testValue);

});

// Positive test getRole method
test("getRole() should return \"Engineer\"", () => {

  // create test value for role parameter
  const testValue = "Engineer";

  // create test Engineer object
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");

  // expect getRole method to return "Engineer"
  expect(e.getRole()).toBe(testValue);
  
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
