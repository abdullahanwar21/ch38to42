// Q-1

document.write(`<h3> Write a function with switch statement to count the number of 
occurrences of any two vowels in succession in a line of text.</h3>`);

// function countConsecutiveVowels(){
let text = "Pleases read this application and give me gratuity";
document.write(`The Sentence : <b>${text}</b> <br>.`)

function countOccurrencesOfTwoVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length ; i++) {
    switch (text[i]) {
      case "a":
        if (
          text[i + 1] === "e" ||
          text[i + 1] === "i" ||
          text[i + 1] === "o" ||
          text[i + 1] === "u"
        ) {
          count++;
        }
        break;
      case "e":
        if (
          text[i + 1] === "a" ||
          text[i + 1] === "i" ||
          text[i + 1] === "o" ||
          text[i + 1] === "u"
        ) {
          count++;
        }
        break;
      case "i":
        if (
          text[i + 1] === "a" ||
          text[i + 1] === "e" ||
          text[i + 1] === "o" ||
          text[i + 1] === "u"
        ) {
          count++;
        }
        break;
      case "o":
        if (
          text[i + 1] === "a" ||
          text[i + 1] === "e" ||
          text[i + 1] === "i" ||
          text[i + 1] === "u"
        ) {
          count++;
        }
        break;
      case "u":
        if (
          text[i + 1] === "a" ||
          text[i + 1] === "e" ||
          text[i + 1] === "i" ||
          text[i + 1] === "o"
        ) {
          count++;
        }
        break;
      default:
        break;
    }
  }
  document.write(`The Occurences of Vowels <b> ea , ea , io, ui</b></br> `)
  document.write(`The Count of Vowels : <b>${count}</b></br> `)
  return count;
}
countOccurrencesOfTwoVowels(text)
// Q-2

document.write(`<h3> The distance between two cities (in km.) is input through the 
keyboard. Write four functions to convert and print this 
distance in meters, feet, inches and centimeters.</h3>`);
document.write(`<h4>Distance KiloMeters To Meters </h4>`)
function convertMeter(){
    let km = 90;
    document.write(`The Distance Between Two cities In KiloMeters : <b>${km} </b> <br>`)
    let result = km * 1000;
    document.write(`The Distance Between Two cities In Meters : <b>${result} </b> <br>`)
    return result;
}
console.log(convertMeter());

document.write(`<h4>Distance KiloMeters To Feet </h4>`)
function convertToFeet(){
    let km = 90;
    document.write(`The Distance Between Two cities In KiloMeters : <b>${km} </b> <br>`)
    let result = km * 3280.84 ;
    document.write(`The Distance Between Two cities In Feet : <b>${Math.floor(result)} </b> <br>`)
    return Math.floor(result);
}
console.log(convertToFeet());

document.write(`<h4>Distance KiloMeters To Inches </h4>`)
function convertToInches(){
    let km = 90;
    document.write(`The Distance Between Two cities In KiloMeters : <b>${km} </b> <br>`)
    let result = km * 39370;
    document.write(`The Distance Between Two cities In Inches : <b>${result} </b> <br>`)
    return result;
}
console.log(convertToInches());

document.write(`<h4>Distance KiloMeters To CentiMeters </h4>`)
function convertToCentimeters(){
    let km = 90;
    document.write(`The Distance Between Two cities In KiloMeters : <b>${km} </b> <br>`)
    let result = km * 100000;
    document.write(`The Distance Between Two cities In CentiMeters : <b>${result} </b> <br>`)
    return result;
}
console.log(convertToCentimeters());

