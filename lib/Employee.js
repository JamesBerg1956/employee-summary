// Employee class
class Employee {

    // Employee constructor function
    constructor(name, id, email){
        // assign parameter values
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    
}

// add getName method to Employee class
Employee.prototype.getName = function(){
    // return current value of name property
    return this.name;
};

// add getId method to Employee class
Employee.prototype.getId = function(){
    // return current value of id property
    return this.id;
}

// add getEmail method to Employee class
Employee.prototype.getEmail = function(){
    // return current value of email property
    return this.email;
}

// add getRole method to Employee class
Employee.prototype.getRole = function(){
    // return current value of role property
    return this.role;
}

module.exports = Employee