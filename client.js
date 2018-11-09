console.log('JS');

$(document).ready( jQReady );

let employeeArray = [];

class Employee {
    constructor(firstNameIn, lastNameIn, employeeIDIn, titleIn, annualSalaryIn) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.employeeID = employeeIDIn;
        this.title = titleIn;
        this.annualSalary = annualSalaryIn;
    }
}

function addClickHandlers() {
    console.log('in addClickHandlers');
    $('#inputSubmitButton').on('click', inputSubmit);
}// end addClickHandlers function

function appendDom() {
    console.log('in appendDom');
    $('#tableBody').empty();
    for (let index = 0; index < employeeArray.length; index++) {
        let firstName = employeeArray[index].firstName;
        let lastName = employeeArray[index].lastName;
        let employeeID = employeeArray[index].employeeID;
        let title = employeeArray[index].title;
        let annualSalary = employeeArray[index].annualSalary;
        let tablerow = $(`<tr><th>${firstName}</th><th>${lastName}</th><th>${employeeID}</th><th>${title}</th><th>${annualSalary}</th>`);
        $('#tableBody').append(tablerow);
    }// end for loop
}//end appendDom function

function inputSubmit() {
    console.log('in inputSubmit');
    let firstName = $('#firstNameInput').val();
    $('#firstNameInput').val('');
    let lastName = $('#lastNameInput').val();
    $('#lastNameInput').val('');
    let employeeID = $('#employeeIDInput').val();
    $('#employeeIDInput').val('');
    let title = $('#titleInput').val();
    $('#titleInput').val('');
    let annualSalary = $('#annualSalaryInput').val();
    $('#annualSalaryInput').val('');
    console.log(firstName, lastName, employeeID, title, annualSalary);
    let employee = new Employee(firstName, lastName, employeeID, title, annualSalary);
    employeeArray.push(employee);
    appendDom();
}// end inputSubmit function

function jQReady() {
    console.log('$ up'); 
    addClickHandlers();
}// end jQReady function