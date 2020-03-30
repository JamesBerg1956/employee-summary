const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// create employees object array
const employees = [];

// init function
function init(){
            
    // push to employees array Manager object returned from inquireManager function
    inquireManager();
   
    // push to employees array Engineer-Intern objects from inquireEmployees function
    // TODO: employees.push(inquireEmployees());

    // pass employees object array to render function and return an html block
    // TODO: const html = render(employees);

    // pass html block to createTeamHtml function to write output/team.html file
    // TODO: createTeamHtml(html);

}

// inquireManager function
function inquireManager(){

    // create blank manager object
    let manager;

    // inquirer call
    inquirer
        // prompt for manager
        .prompt([
            // Manager prompts
            {
                type: "input",
                message: "Enter the name of the manager",
                name: "name"
            },
            {
                type: "input",
                message: "Enter the employee # of the manager",
                name: "employeeNumber"
            },
            {
                type: "input",
                message: "Enter the email of the manager",
                name: "email"
            },
            {
                type: "input",
                message: "Enter the office number of the manager",
                name: "officeNumber"
            }

        ])
        // then callback promise function
        .then(function({name, employeeNumber, email, officeNumber}){

            // construct manager object
            manager = new Manager(name, employeeNumber, email, officeNumber);

            // return manager object
            employees.push(manager);
            
        })
        .then(function(){
            inquireEmployees();
        })
        .catch(error => console.log(error));
            
}

// inquireEmployees function​
function inquireEmployees(){

    return;
}

// TODO: createTeamHtml function
function createTeamHtml(html){

    return;
}

init();