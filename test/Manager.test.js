// import Manager class
const Manager = require("../lib/Manager");
// import Employee class
//const Employee = require("../lib/Employee");

// Positive test args: name, id, email, officeNumber
test("Can set office number via constructor argument", () => {

  // create test parameter
  const testValue = 100;

  // create test Manager object
  const e = new Manager("Foo", 1, "test@test.com", testValue);

  // expect officeNumber parameter to be same as value passed to constructor
  expect(e.officeNumber).toBe(testValue);
});

// Positive test getRole method
test('getRole() should return "Manager"', () => {

  // create test value
  const testValue = "Manager";

  // create test Manager object
  const e = new Manager("Foo", 1, "test@test.com", 100);

  // expect getRole method to be "Manager"
  expect(e.getRole()).toBe(testValue);

});

// Positive test getOffice method
test("Can get office number via getOffice()", () => {

  // create test parameter
  const testValue = 100;

  // create test Manager object
  const e = new Manager("Foo", 1, "test@test.com", testValue);

  // create getOfficeNumber to be same as value passed to constructor
  expect(e.getOfficeNumber()).toBe(testValue);
  
});
