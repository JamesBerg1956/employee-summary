const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeTypeQuestion = {type: "list", message: "Select what kind of employee to add, or select done", choices: ["Manager", "Engineer", "Intern", "done"],name: "employeeType"};
const nameQuestion = {type: "input", message: `Enter the name of the employee`, name: "name"};
const emailQuestion = {type: "input", message: `Enter the email of the employee`, name: "email"};
const officeNumberQuestion = {type: "input", message: "Enter the office number of the Manager", name: "officeNumber"};
const githubQuestion = {type: "input", message: `Enter the GitHub username of the Engineer`, name: "github"};
const schoolQuestion = {type: "input", message: `Enter the school of the Intern`, name: "school"};

const questions = [nameQuestion, emailQuestion];

let run = true;

async function createEmployee(currentEmployeeNum){
    const employees = [];
    
    await inquirer
    .prompt([employeeTypeQuestion])
    // START inquirer employeeType callback
    .then(async function({employeeType}){

        // START build questions array
        switch (employeeType){

            case "Manager":
                questions.push(officeNumberQuestion);
            break;

            case "Engineer":
                questions.push(githubQuestion);
            break;

            case "Intern":
                questions.push(schoolQuestion);
            break;

            case "done":
                run = false;
            break;

        }
        // END build questions array

    })
    // END inquirer employeeType callback
    // START inquirer employee questions callback
    .then(async function(){
        if(run){
            await inquirer
            .prompt(questions)
            // START create employee object callback
            .then(async function(employee){
                questions.splice(-1,1);
                const lastKey = Object.keys(employee)[2];
                
                switch (lastKey){

                    case "officeNumber":
                        
                        employees.push(new Manager(employee.name, currentEmployeeNum, employee.email, employee.officeNumber));
                        
                    break;

                    case "github":
                        
                        employees.push(new Engineer(employee.name, currentEmployeeNum, employee.email, employee.github));
                        
                    break;

                    case "school":
                        
                        employees.push(new Intern(employee.name, currentEmployeeNum, employee.email, employee.school));
                        
                    break;

                }
               
            })
            // END create employee object callback
        }
    })
    // END inquirer employee questions callback
    
    return employees;

}

async function init(){
    let i  = 1
    let employees = [];
    while (run) {
        var e = await createEmployee(i);
        employees = employees.concat(e);
        i++;
        console.log(employees);
    }

}

init();
