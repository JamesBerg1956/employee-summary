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

    // pass html block to createTeamHtml function to write output/team.html file
    // TODO: createTeamHtml(html);

    promiseManger
    .then((emp) => {
        
        return employees;

    })
    .then((emp) => {
        
        return new Promise((resolve, reject) => {

            // inquirer call to select type of employee to enter
            inquirer
                .prompt([
                    {
                        type: "list",
                        message: "Select what kind of employee to add, or select done",
                        choices: ["Engineer", "Intern"],
                        name: "employeeType"
                    }
                ])
                // inquire properties of selected employee type
                .then(function({employeeType}){

                    resolve(employeeType);
        
                })
        
        })

    })
    .then((employeeType) => {
        
        switch (employeeType){

            case "Engineer":

                return new Promise((resolve, reject) => {

                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: `Enter the name of the ${employeeType}`,
                                name: "name"
                            },
                            {
                                type: "input",
                                message: `Enter the employee # of the ${employeeType}`,
                                name: "employeeNumber"
                            },
                            {
                                type: "input",
                                message: `Enter the email of the ${employeeType}`,
                                name: "email"
                            },
                            {
                                type: "input",
                                message: `Enter the GitHub username of the ${employeeType}`,
                                name: "github"
                            },
                        ])
                        .then(function({name, email, employeeNumber, github}){

                            employees.push(new Engineer(name, email, employeeNumber, github));
                            resolve(employees);

                        })
                
                })

            break;

            case "Intern":

                return new Promise((resolve, reject) => {

                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: `Enter the name of the ${employeeType}`,
                                name: "name"
                            },
                            {
                                type: "input",
                                message: `Enter the employee # of the ${employeeType}`,
                                name: "employeeNumber"
                            },
                            {
                                type: "input",
                                message: `Enter the email of the ${employeeType}`,
                                name: "email"
                            },
                            {
                                type: "input",
                                message: `Enter the school of the ${employeeType}`,
                                name: "school"
                            },
                        ])
                        .then(function({name, email, employeeNumber, school}){

                            employees.push(new Intern(name, email, employeeNumber, school));
                            resolve(employees);

                        })
                
                })

            break;

        }

    })
    

}

let promiseManger = new Promise((resolve, reject) => {
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

            // push manager object to employees array
            employees.push(new Manager(name, employeeNumber, email, officeNumber));
            resolve(employees);
            
        })

});


// TODO: createTeamHtml function
function createTeamHtml(html){

    return;
}

init();