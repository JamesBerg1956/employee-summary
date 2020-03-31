const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");

const employeeTypeQuestion = {type: "list", message: "Select what kind of employee to add, or select done", choices: ["Manager", "Engineer", "Intern", "done"],name: "employeeType"};
const nameQuestion = {type: "input", message: `Enter the name of the employee`, name: "name"};
const emailQuestion = {type: "input", message: `Enter the email of the employee`, name: "email"};
const officeNumberQuestion = {type: "input", message: "Enter the office number of the Manager", name: "officeNumber"};
const githubQuestion = {type: "input", message: `Enter the GitHub username of the Engineer`, name: "github"};
const schoolQuestion = {type: "input", message: `Enter the school of the Intern`, name: "school"};

const questions = [nameQuestion, emailQuestion];
const employees = [];
let currentEmployeeNum = 1;

class Team {
    constructor(){
        
    }

}

Team.prototype.getEmployees = function(){
    return this.employees;
};

Team.prototype.doEverything = function(){
    inquirer
    .prompt([employeeTypeQuestion])
    // START inquirer employeeType callback
    .then(function({employeeType}){

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

            break;

        }
        // END build questions array

    })
    // END inquirer employeeType callback
    // START inquirer employee questions callback
    .then(function(){
        
        inquirer
        .prompt(questions)
        // START create employee object callback
        .then(function(employee){
            
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
            currentEmployeeNum++;
            console.log(employees);
        })
        // END create employee object callback
    })
    // END inquirer employee questions callback
}

Team.prototype.addEmployee = function(employee){
    
};

// Make Team class available to other packages
module.exports = Team;
