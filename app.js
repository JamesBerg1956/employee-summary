// import Manager class
const Manager = require("./lib/Manager");
// import Engineer class
const Engineer = require("./lib/Engineer");
// import Intern class
const Intern = require("./lib/Intern");
// import inquirer package
const inquirer = require("inquirer");
// import path package
const path = require("path");
//import file system package
const fs = require("fs");

// create var for directory for output team.html file generated
const OUTPUT_DIR = path.resolve(__dirname, "output");
// create var for full file path plus file name for generated team.html
const outputPath = path.join(OUTPUT_DIR, "team.html");

// create instance of render function from htmlRenderer.js
const render = require("./lib/htmlRenderer");

// create inquirer question - selects type of employee to create
const employeeTypeQuestion = {type: "list", message: "Select what kind of employee to add, or select done", choices: ["Manager", "Engineer", "Intern", "done"],name: "employeeType"};
// create inquirer question - gets name of employee
const nameQuestion = {type: "input", message: `Enter the name of the employee`, name: "name"};
// create inquirer question - gets email of employee
const emailQuestion = {type: "input", message: `Enter the email of the employee`, name: "email"};
// create inquirer question - gets office number of manager
const officeNumberQuestion = {type: "input", message: "Enter the office number of the Manager", name: "officeNumber"};
// create inquirer question - gets github of engineer
const githubQuestion = {type: "input", message: `Enter the GitHub username of the Engineer`, name: "github"};
// create inquirer question - gets school of intern
const schoolQuestion = {type: "input", message: `Enter the school of the Intern`, name: "school"};
// create question object array - this always starts with the name and email question
const questions = [nameQuestion, emailQuestion];

// determines if we continue to prompt user for new employees - set to false if user select "done"
let run = true;

// START createEmployee function - arg: current employee number, return: employee object
async function createEmployee(currentEmployeeNum){
    
    // create empty employees array
    const employees = [];
    
    // inquirer call
    await inquirer
    // prompt user asking for type of employee to be created
    .prompt([employeeTypeQuestion])
    // START inquirer employeeType callback
    .then(async function({employeeType}){

        // START build questions array switch
        switch (employeeType){

            // if user chose Manager
            case "Manager":
                // push the office number question to questions array
                questions.push(officeNumberQuestion);
            break;

            // if user chose Engineer
            case "Engineer":
                // push the github question to questions array
                questions.push(githubQuestion);
            break;

            // if user chose Intern
            case "Intern":
                // push the school question to the questions array
                questions.push(schoolQuestion);
            break;

            // if user chose done
            case "done":
                // skip all additional processing in subsequent promises
                run = false;
            break;

        }
        // END build questions array switch

    })
    // END inquirer employeeType callback

    // START inquirer employee questions callback
    .then(async function(){
        
        // only prompt the user for employee info if user did not select "done"
        if(run){

            // inquirer call
            await inquirer
            // prompt user for employee info based on employee type previously selected
            .prompt(questions)
            // START create employee object callback - arg: previous user responses as "employee" object
            .then(async function(employee){

                // remove last question from question array, which is specific to the employee type
                questions.splice(-1,1);

                // get the last key name of the employee object, which will indicate what kind of employee to create
                const lastKey = Object.keys(employee)[2];
                
                // START switch on value of lastKey (employeeType)
                switch (lastKey){

                    // if officeNumber
                    case "officeNumber":
                        // push a new Manager object to the employees array
                        employees.push(new Manager(employee.name, currentEmployeeNum, employee.email, employee.officeNumber));                   
                    break;

                    // if github
                    case "github":
                        // push a new Engineer object to the employees array                        
                        employees.push(new Engineer(employee.name, currentEmployeeNum, employee.email, employee.github));                        
                    break;

                    // if school
                    case "school":
                        // push a new Intern object to the employees array                        
                        employees.push(new Intern(employee.name, currentEmployeeNum, employee.email, employee.school));                        
                    break;

                }
                // END switch on value of lastKey
               
            })
            // END create employee object callback
        }
    })
    // END inquirer employee questions callback
    
    // return employee object
    return employees;

}
// END createEmployee function

// main function call
async function init(){
    
    // current employee number
    let i  = 1
    // blank employees object array
    let employees = [];

    // continue to prompt for more employees until user selects "done"
    while (run) {
        // create var for employee returned
        var e = await createEmployee(i);
        // add employee to employees array
        employees = employees.concat(e);
        // increment current employee number
        i++;
    }
    
    // render employees array to html using htmlRenderer.js
    const html = render(employees);

    // write html to file
    fs.writeFile(outputPath, html, function(err){

        // error checking for write file
        if(err){
            // report error to console
            return console.log(err);
        }

        // report success to console
        console.log("team.html successfully created!");

    })

}

// call main function
init();
