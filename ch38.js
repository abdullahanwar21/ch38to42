// Q-1
document.write(`<h3> Write a custom function power ( a, b ), to calculate the value of 
                a raised to b.</h3>`);
let a = 2;
document.write(`The value of a is : <b>${a}</b> <br>`);
let b = 3;
document.write(`The value of b is : <b>${b}</b> <br>`);
function raiseAPower(a, b) {
  let res = a ** b;
  return res;
}
document.write(`Answer : <b>`, raiseAPower(2, 3), `</b><br>`);
document.write(`<br><hr><br>`);
// Q-2
document.write(`<h3> Any year is entered through the keyboard. Write a function to 
                determine whether the year is a leap year or not.
            </h3>`);
let enterYear = +prompt("Enter Year to check Leap year or not e.g 2020,2012");
let year = new Date().getFullYear();
function leapYearOrNot(year) {
  let a1 = year % 4 === 0;
  if (a1) {
    alert("Yes it's leap year");
    document.write(`Yes its a  leap year : <b>${year}<b/><br>`);
  }  else {
    alert("No it's Not a  leap year");
    document.write(`No its not a  leap year :  <b>${year}<b/><br>`);
  }
  return a1;
}
leapYearOrNot(enterYear);
console.log();
document.write(`<br><hr><br>`);
