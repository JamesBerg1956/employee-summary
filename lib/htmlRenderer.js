// import path node package
const path = require("path");
// import file system node package
const fs = require("fs");

// get path to templates folder
const templatesDir = path.resolve(__dirname, "../templates");

// define render object
const render = employees => {
  
  // create blank array, which will store html content
  const html = [];

  // push Manager html array
  html.push(employees
    // return a filtered array where Employee.role equals "Manager"
    .filter(employee => employee.getRole() === "Manager")
    // return html from the filtered manager array via renderManager
    .map(manager => renderManager(manager))
  );

  // push Engineer html array
  html.push(employees
    // return a filtered array where Employee.role equals "Engineer"
    .filter(employee => employee.getRole() === "Engineer")
    // return html from the filtered engineer array via renderEngineer
    .map(engineer => renderEngineer(engineer))
  );

  // push Intern html to array
  html.push(employees
    // return a filtered array where Employee.role equals "Intern"
    .filter(employee => employee.getRole() === "Intern")
    // return html from filtered intern array via renderInern
    .map(intern => renderIntern(intern))
  );
  
  // return a single joined html block
  return renderMain(html.join(""));

};

// generate html block for Manager object in employees array
const renderManager = manager => {

  // get manager.html template
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");

  // replace {{ name }} placeholders with Manager.name
  template = replacePlaceholders(template, "name", manager.getName());
  // replace {{ role }} placeholders with Manager.role
  template = replacePlaceholders(template, "role", manager.getRole());
  // replace {{ email }} placeholders with Manager.email
  template = replacePlaceholders(template, "email", manager.getEmail());
  // replace {{ id }} placeholders with Manager.id
  template = replacePlaceholders(template, "id", manager.getId());
  // replace {{ officeNumber }} placeholders with Manager.officeNumber
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());

  // return html template with replaced values
  return template;

};
// generate html block for Engineer objects in employees array
const renderEngineer = engineer => {

  // get engineer.html template
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");

  // replace {{ name }} placeholders with Engineer.name
  template = replacePlaceholders(template, "name", engineer.getName());
  // replace {{ role }} placeholders with Engineer.role
  template = replacePlaceholders(template, "role", engineer.getRole());
  // replace {{ email }} placeholders with Engineer.email
  template = replacePlaceholders(template, "email", engineer.getEmail());
  // replace {{ id }} placeholders with Engineer.id
  template = replacePlaceholders(template, "id", engineer.getId());
  // replace {{ github }} placeholders with Engineer.github
  template = replacePlaceholders(template, "github", engineer.getGithub());

  // return html template with replaced values
  return template;

};

// generate html block for Intern objects in employees array
const renderIntern = intern => {

  // get intern.html template
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");

  // replace {{ name }} placeholders with Intern.name
  template = replacePlaceholders(template, "name", intern.getName());
  // replace {{ role }} placeholders with Intern.role
  template = replacePlaceholders(template, "role", intern.getRole());
  // replace {{ email }} placeholders with Intern.email
  template = replacePlaceholders(template, "email", intern.getEmail());
  // replace {{ is }} placeholders with Intern.id
  template = replacePlaceholders(template, "id", intern.getId());
  // replace {{ school }} placeholders with Intern.school
  template = replacePlaceholders(template, "school", intern.getSchool());

  // return html template with replaced values
  return template;

};

// takes main.html template and replaces {{ team }} placeholder with built html
const renderMain = html => {

  // get main.html template
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");

  // return main.html with {{ team }} replaced with built html
  return replacePlaceholders(template, "team", html);
  
};

// takes html template and replaces {{ placeholder }} with the passed value
const replacePlaceholders = (template, placeholder, value) => {

  // capture the {{  }} pattern to replace with passed value
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");

  // return the template with replaced values
  return template.replace(pattern, value);

};

// export the render object
module.exports = render;
