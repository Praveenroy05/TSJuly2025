// 1. ClassName should be similar to file name
// 2. It should start with capital letter and if it consists of multiple words then each word should start with capital letter as well

// Class - Is a blueprint/structure which consists of properties and methods. which helps to create multiple objects(Instance of a class).

// Class - OOP concepts - ES6 (ECMA SCRIPT 2015)

// Syntax:

let i = 10

function fun(){

}

/*
{...}

class ClassName {

    // properties
        // private property - Belongs to the class only. It cannot be accessed outside of the class
        // public property - Can be accessed anywhere
        // readonly property - It is a constant property. It cannot be modified. - TS
        // static property - It belongs to the class. It cannot be accessible by using the object of the class. To access this proerty we hvae to access by using the ClassName. ClassName.key4
        // Non-static property - It belongs to the object of the class. It can be accessible only by using the object of the class.
        // protected property - It can be accessible within the class and its child classes only. 

        key1 : datatype
        private key2 : datatype
        readonly key3 : datatype
        static key4 = "ABC"

        // constructor - Is a special type of function which helps us in initialisation of the properties inside the class at the time of creation of an object. It should be created by using a keyword know as "constructor"

        // this - It is a reference variable that refers the current class object

        constructor(k1, k2, k3){
            this.key1 = k1 // obj.key1
            this.key2 = k2 // obj.key2
            this.key3 = k3 // obj.key3
        }


    // Methods

        info(): returntype{
        console.log(this.key1)
        }

        static info1(){...}

}


const obj = new ClassName(arg1, arg2, arg3)
obj.key1
obj.key2
obj.info()
ClassName.key4
ClassName.info1()

const obj1 = new ClassName(arg1, arg2, arg3)
obj1.key1  = arg1



*/

// export and import


export class Employee{

    // properties
    empId : string
    empName: string
    private empSalary
    readonly offer = 30000
    static company = "ABC"

    constructor(empId, empName, empSalary){
        this.empId = empId // this.empId = 101
        this.empName = empName // this.empName = "John"
        this.empSalary = empSalary
    }


    employeeInformation(){
        console.log(`Employee ID is ${this.empId}`);
        console.log(`Employee Salary is ${this.empSalary}`);
    }

    static companyName(){
        console.log(Employee.company);
    }
    
}

const emp = new Employee(101, "John", 100000)
console.log(emp.empName);
emp.employeeInformation()
Employee.company
Employee.companyName()

const emp1 = new Employee(201, "Rahul", 400000)
console.log(emp1.empName);
emp1.employeeInformation()
Employee.company
Employee.companyName()

console.log(emp);
console.log(emp1);


