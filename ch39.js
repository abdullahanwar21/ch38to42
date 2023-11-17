// Q-1
document.write(`<h3> If the lengths of the sides of a triangle are denoted by a, b, and 
                    c, then area of triangle is given by
                    .</h3>`);
function calcSidesOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  function calcAreaOfTriangle(a, b, c) {
    let area = s * (s - a) * (s - b) * (s - c);
    return area;
  }
  document.write(
    ` for the given triangle with side lengths ${a} , ${b} , ${c} <br> the area is <b>`,
    calcAreaOfTriangle(a, b, c),
    `</b> square units.`
  );
  return s;
}
calcSidesOfTriangle(5, 6, 7);

document.write(`<br><hr><br>`);
// Q-2
document.write(`<h3> Write a function that receives marks received by a student in 3 
                    subjects and returns the average and percentage of these
                    marks. there should be 3 functions one is the mainFunction 
                    and other are for average and percentage. Call those functions 
                    from mainFunction and display result in mainFunction.
            </h3>`);
let urduMarks = 80;
document.write(`First Subject Mark is = <b>${urduMarks}</b><br>`);
let chemistryMarks = 92;
document.write(`Second Subject Mark is = <b>${chemistryMarks}</b><br>`);
let englishMarks = 78;
document.write(`Third Subject Mark is = <b>${englishMarks}</b><br> <br>`);
function studentRecCalc(urduMarks, chemistryMarks, englishMarks) {
  function averageMarks() {
    let avg = (urduMarks + chemistryMarks + englishMarks) / 3;
    document.write(`The Average is ${Math.floor(avg)} avg <br>`);
    return avg;
  }
  averageMarks();
  function marksPercentage() {
    let marksObt = urduMarks + chemistryMarks + englishMarks;
    console.log(marksObt);
    let percentage = (marksObt / 300) * 100;
    document.write(`The Percentage is ${percentage.toFixed(2)}% <br>`);
    return percentage;
  }
  marksPercentage();
}
studentRecCalc(urduMarks, chemistryMarks, englishMarks);
console.log();
document.write(`<br><hr><br>`);
