//  Q-1
document.write(`<h3>Q-9  Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour.</h3><br><br>`);

function employerOvertimeCalc() {
  let minHoursOfWork = 40;
  let employeeWorksHours = 45;
  let overTimePay = employeeWorksHours - minHoursOfWork;
  let regularHoursPay = minHoursOfWork * 1200;
  let overTimePayHours = overTimePay * 1200;
  let totalPayToEmpOfSalary = regularHoursPay + overTimePayHours;
  let res = `The Min Hours OF works : <b>${minHoursOfWork}hrs</b> <br> 
  The Employee Total Works Hours : <b> ${employeeWorksHours}hrs </b> <br>
  OverTimes Hours : <b>${overTimePay}hrs </b> <br>
  Total Salary : <b> ${totalPayToEmpOfSalary}Rs </b> <br>`;
  document.write(res);
  return totalPayToEmpOfSalary;
}
employerOvertimeCalc();
document.write("<br><hr><br>");

//  Q-2
document.write(`<h3>Q-9 A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer.</h3><br><br>`);

