// Write your solution in this file!

const employee = {
    name: "Sheldon",
    streetAddress: "SImba Drive",
  };
  
        function updateEmployeeWithKeyAndValue(employee, key, value) {
            const employees = { ...employee };
            employees[key] = value;
            return employees;
        }
  
  updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
  
        function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
            employee.name = "Sam";
            employee.streetAddress = "12 Broadway";
            const employees = { ...employee };
            employees[key] = value;
            return employees;
        }
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue());
  
        function deleteFromEmployeeByKey(employee, key) {
            let newEmployee = { ...employee };
            delete newEmployee.name;
            delete newEmployee.streetAddress;
        
            return newEmployee;
        }
  
  deleteFromEmployeeByKey(employee, "name");
  
        function destructivelyDeleteFromEmployeeByKey(employee, key) {
            let newEmployee = employee;
            delete newEmployee.name;
            delete newEmployee.streetAddress;
        
            return employee;
        }
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");