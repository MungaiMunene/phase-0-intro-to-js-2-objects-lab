//updateEmployeeWithKeyAndValue function:
const employee = {
    name: `John Doe`, 
    streetAddress: `123 Main Strt`,
}; 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value 
    }; 
}
//destructivelyUpdateEmployeeWithKeyAndValue function:
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee
}

// Function to non-destructively delete a key from an employee object
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
//// Function to destructively delete a key from an employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee
 }; 