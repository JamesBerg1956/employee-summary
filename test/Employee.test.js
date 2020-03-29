// import Employee package
const Employee = require("../lib/Employee");

// Positive test no arg constructor
test("Can instantiate Employee instance", () => {
  
  // create test Employee object
  const e = new Employee();

  // expect that Employee object to be type of object
  expect(typeof(e)).toBe("object");

});

// Positive test args: name constructor
test("Can set name via constructor arguments", () => {

  // create test parameter
  const name = "Alice";

  // create test Employee object
  const e = new Employee(name);

  // expect test parameter to be same as that passed to constructor
  expect(e.name).toBe(name);

});

// Positive test args: name, id constructor
test("Can set id via constructor argument", () => {

  // create test parameter
  const testValue = 100;

  // create test Employee object
  const e = new Employee("Foo", testValue);

  // expect test parameter to be same as that passed to constructor
  expect(e.id).toBe(testValue);

});

// Positive test args: name, id, email constructor
test("Can set email via constructor argument", () => {

  // create test parameter
  const testValue = "test@test.com";

  // create test Employee object
  const e = new Employee("Foo", 1, testValue);

  // expect test parameter to be same as that passed to constructor
  expect(e.email).toBe(testValue);

});

// Positive test getName method
test("Can get name via getName()", () => {

  // create test parameter
  const testValue = "Alice";

  // create test Employee object
  const e = new Employee(testValue);

  // expect test parameter to be same as that passed to constructor
  expect(e.getName()).toBe(testValue);

});

// Positive test getId method
test("Can get id via getId()", () => {

  // create test parameter
  const testValue = 100;

  // create test Employee object
  const e = new Employee("Foo", testValue);

  // expect test parameter to be same as that passed to constructor
  expect(e.getId()).toBe(testValue);

});

// Positive test getEmail method
test("Can get email via getEmail()", () => {

  // create test parameter
  const testValue = "test@test.com";

  // create test Employee object
  const e = new Employee("Foo", 1, testValue);

  // expect test parameter to be same as that passed to constructor
  expect(e.getEmail()).toBe(testValue);

});

// Positive test getRole method
test("getRole() should return \"Employee\"", () => {

  // create test parameter
  const testValue = "Employee";

  // create test Employee object
  const e = new Employee("Alice", 1, "test@test.com");

  // expect test parameter to be same as that passed to constructor
  expect(e.getRole()).toBe(testValue);
  
});
