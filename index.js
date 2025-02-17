// Write your solution in this file!
const employee = {
    name: ["George"],
    streetAddress: ["123 Street"],
}

function updateEmployeeWithKeyAndValue(obj, key, value){
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  
    return obj;
  }

  function deleteFromEmployeeByKey(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key];
  
    return employee;
  }
  