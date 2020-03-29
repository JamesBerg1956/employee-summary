// import Intern class
const Intern = require("../lib/Intern");

// Positive test args: name, id, email, school
test("Can set school via constructor", () => {

  // create test parameter
  const testValue = "UCLA";

  // create test Intern object
  const e = new Intern("Foo", 1, "test@test.com", testValue);

  // expect school property to be same as value passed to constructor
  expect(e.school).toBe(testValue);

});

// Positive test getRole method
test("getRole() should return \"Intern\"", () => {

  // create test value
  const testValue = "Intern";

  // create test Intern object
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");

  // expect getRole method to return "Intern"
  expect(e.getRole()).toBe(testValue);
  
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
