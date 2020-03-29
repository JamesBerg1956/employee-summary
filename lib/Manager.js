// import Employee class
const Employee = require("./Employee");

class Manager extends Employee{

    // Manager class constructor
    constructor(name, id, email, officeNumber){

        // populate paramters of the Employee superclass
        super(name, id, email);

        // assign officeNumber property
        this.officeNumber = officeNumber;

        // assign role property
        this.role = "Manager";

    }

}

// add getOfficeNumner method to Manager class
Manager.prototype.getOfficeNumber = function (){
    // return officeNumber property
    return this.officeNumber;
};

// make Manager class available to other classes
module.exports = Manager;