// import Employee class
const Employee = require("./Employee");

// declare Engineer class, which extends Employee class
class Engineer extends Employee{
    
    // Engineer class constructor
    constructor(name, id, email, github){

        // populate paramters of the Employee superclass
        super(name, id, email);

        // assign gitHub username property
        this.github = github;
        // override role property
        this.role = "Engineer";

    }

}

Engineer.prototype.getGithub = function(){
    // return current github property
    return this.github;
};

// make Engineer class available to other classes
module.exports = Engineer;