// import Employee class
const Employee = require("./Employee");

// declare Intern class, which extends the Employee class
class Intern extends Employee{

    // constructor function
    constructor(name, id, email, school){

        // populate paramters of the Employee superclass
        super(name, id, email);

        // assign school property
        this.school = school;

        // assign role property
        this.role = "Intern";

    }

}

Intern.prototype.getSchool = function(){
    // return current school property
    return this.school;
};

// make Intern class available to other classes
module.exports = Intern;