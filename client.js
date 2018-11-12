console.log('JS');

$(document).ready( jQReady );

let employeeArray = [];
let totalAnnualSalary = [];
let totalMonthlyPay = 0;

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
        const emp = employeeArray[index];
        let tablerow = $(`<tr class="${emp.employeeID}">
        <td>${emp.firstName}</td>
        <td>${emp.lastName}</td>
        <td>${emp.employeeID}</td>
        <td>${emp.title}</td>
        <td>${emp.annualSalary}</td>
        <td><button class="${emp.employeeID}, btn btn-danger">DELETE</button>
        </td></tr>`);
        $('#tableBody').append(tablerow);
        $(`.${emp.employeeID}`).on('click', function () {
            // console.log('baleeted');
            $(`.${emp.employeeID}`).remove();
            console.log('totalMonthlyPay:', totalMonthlyPay);
            console.log('emp ID:', parseInt(`${emp.employeeID}`));
            /////////////////////////////////////////////////////////////////////////////Vang Method
            let employeeIndex = employeeArray.indexOf(emp);
            employeeArray.splice(employeeIndex,1);
            /////////////////////////////////////////////////////////////////////////////My broken method
            // for (let index = employeeArray.length - 1; index >= 0 ; index--) {
            //     if (employeeArray[index].employeeID == `${emp.employeeID}` ) {
            //         employeeArray.splice[index,1];
            //     }//end if statement
            // }//end for loop
            // divideAgainMonthly(emp.annualSalary);
            sumUpSalary();
        }//end ANON function
        )//end on click
    }//end for loop
}//end appendDom function

function divideAgainMonthly(removedSalary) {
    console.log('in divideAgainMonthly');
    let removedMonthly = removedSalary / 12;
    console.log('removedMonthly', removedMonthly);
    console.log('removedSalary', removedSalary);
    sumUpSalary(removedMonthly);
}//end divideAgainMonthly function

// function divideMonthly(numToDivide, numRemoved) {//_________________2 added 2nd arg numRemoved
function divideMonthly(numToDivide) {    
    // console.log('in divideMonthly');
    // let monthlyPay = numToDivide / 12;//____________________________3 changed totalMonthlyPay to monthlyPay
    // let totalMonthlyPay = monthlyPay - numRemoved;//________________4 added this line
    let totalMonthlyPay = numToDivide / 12;
    console.log('total monthly:' + totalMonthlyPay.toFixed(2));
    $('#totalMonthlyPay').empty();
    if (totalMonthlyPay.toFixed(2) <= 20000) {
        $('#totalMonthlyPay').append('Total Monthly: ', totalMonthlyPay.toFixed(2));
    }//end <20
    else{
        $('#totalMonthlyPay').css('background-color', 'red');
        $('#totalMonthlyPay').append('Total Monthly: ', totalMonthlyPay.toFixed(2));
    }
    console.log('totalMonthlyPay: ', totalMonthlyPay);
    
}//end divideMonthly function

function inputSubmit() {
    console.log('in inputSubmit');
    let firstName = $('#firstNameInput').val();
    $('#firstNameInput').val('');
    let lastName = $('#lastNameInput').val();
    $('#lastNameInput').val('');
    let employeeID = parseInt($('#employeeIDInput').val());
    $('#employeeIDInput').val('');
    let title = $('#titleInput').val();
    $('#titleInput').val('');
    let annualSalary = parseInt($('#annualSalaryInput').val());
    $('#annualSalaryInput').val('');
    console.log(firstName, lastName, employeeID, title, annualSalary);
    let employee = new Employee(firstName, lastName, employeeID, title, annualSalary);
    employeeArray.push(employee);
    appendDom();
    // sumUpSalary(0);
    sumUpSalary();
}// end inputSubmit function

function jQReady() {
    console.log('$ up'); 
    addClickHandlers();
}// end jQReady function

// function sumUpSalary(removedPay) {
function sumUpSalary() {
    // console.log('in sumUpSalary'); 
    let totalPay = 0;
    for (let index = 0; index < employeeArray.length; index++) {
         totalPay += employeeArray[index].annualSalary;
    }
    // let removed = removedPay;
    // console.log(' removed:', removedPay);
    
    // divideMonthly(totalPay, removed); //___________________________________1 added zero as an arg
    divideMonthly(totalPay);
}//end sumUpSalary function