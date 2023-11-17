// Q-1
document.write(`<h3>  You have learned the function indexOf. Code your own custom 
                function that will perform the same functionality. You can code 
                for single character as of now.</h3>`);
function apnaIndexOf() {
  let someWord = "Hello";
  document.write(`The word is <b>${someWord}</b> </br>`);
  let findWord = "k";
  document.write(
    `The Character to be find in The word : <b>${findWord}</b> </br>`
  );
  document.write(
    `If Character is found in The word index number will show You else -1 .   </br>`
  );
  let index = "";
  let found = false;
  someWord.split("");
  for (let i = 0; i < someWord.length; i++) {
    const element = someWord[i];
    if (findWord === element) {
      found = true;
      index = i;
      document.write(`" ${element} " is available on this index ${index}`);
    }
  }
  if (!found) {
    document.write(`-1 is not available`);
  }
}
apnaIndexOf();
document.write(`<br><hr><br>`);

// Q-2
document.write(`<h3> Write a function to delete all vowels from a sentence. Assume 
that the sentence is not more than 25 characters long.
</h3>`);
function findVowelsInSentence() {
  let sentence = "Sunsets are so beautiful.";
  document.write(`The Sentence With Vowels Character's : <b>${sentence}</b> <br>.`)
  let result = "";
  sentence = sentence.split("");
  for (const item of sentence) {
      if (
          item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
      ) 
      {          
        continue;
    }
    result += item;
}
document.write(`The Sentence WithOut Vowels Character's : <b>${result}</b> <br>.`)
}
findVowelsInSentence();
