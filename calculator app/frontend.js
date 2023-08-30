// frontend.js

/* 
 Making buttons input numerical values into the "inputBox" element 
*/

// constant variable for input box element (below)
let inputBox = document.getElementById("inputBox");
let numZero = document.getElementById("numZero");
let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let numThree = document.getElementById("numThree");
let numFour = document.getElementById("numFour");
let numFive = document.getElementById("numFive");
let numSix = document.getElementById("numSix");
let numSeven = document.getElementById("numSeven");
let numEight = document.getElementById("numEight");
let numNine = document.getElementById("numNine");
let butttonClear = document.getElementById("buttonClear"); // clear button "CE"
let buttonAdd = document.getElementById("buttonAdd"); // this is the addition button (+)
let buttonSub = document.getElementById("buttonSub"); // subtraction button
let buttonMulti = document.getElementById("buttonMulti"); // multiplication button
let buttonDiv = document.getElementById("buttonDiv"); // division button
let buttonDot = document.getElementById("buttonDot"); // dot button ?
let buttonRoot = document.getElementById("buttonRoot"); // root button
let buttonPercent = document.getElementById("buttonPercent"); // percent button
let buttonNegative = document.getElementById("buttonNegative"); // negative button
let buttonSum = document.getElementById("buttonSum"); // sum button
// button "zero"
numZero.addEventListener("click", () => {
  const currentValue = inputBox.value;
  // getting current val of the input box
  // num char thats added
  const zeroValue = "0";
  // combindig values of both "numZero" and "inputBox"
  const updatedZero = currentValue + zeroValue;
  // update inputbox with new value
  inputBox.value = updatedZero;
});

// button "one"
numOne.addEventListener("click", () => {
  const currentOneValue = inputBox.value;
  const oneValue = "1";
  const updatedOne = currentOneValue + oneValue;
  inputBox.value = updatedOne;
});

// button "two"
numTwo.addEventListener("click", () => {
  const currentTwoValue = inputBox.value;
  const twoValue = "2";
  const updatedTwo = currentTwoValue + twoValue;
  inputBox.value = updatedTwo;
});

// button "three"
numThree.addEventListener("click", () => {
  const currentThreeValue = inputBox.value;
  const threeValue = "3";
  const updatedThree = currentThreeValue + threeValue;
  inputBox.value = updatedThree;
});

// button "four"
numFour.addEventListener("click", () => {
  const currentFourValue = inputBox.value;
  const fourValue = "4";
  const updatedFour = currentFourValue + fourValue;
  inputBox.value = updatedFour;
});

// button "five"
numFive.addEventListener("click", () => {
  const currentFiveValue = inputBox.value;
  const fiveValue = "5";
  const updatedFive = currentFiveValue + fiveValue;
  inputBox.value = updatedFive;
});

// button "six"
numSix.addEventListener("click", () => {
  const currentSixValue = inputBox.value;
  const sixValue = "6";
  const updatedSix = currentSixValue + sixValue;
  inputBox.value = updatedSix;
});

// button "seven"
numSeven.addEventListener("click", () => {
  const currentSevenValue = inputBox.value;
  const sevenValue = "7";
  const updatedSeven = currentSevenValue + sevenValue;
  inputBox.value = updatedSeven;
});

// button "eight"
numEight.addEventListener("click", () => {
  const currentEightValue = inputBox.value;
  const eightValue = "8";
  const updateEight = currentEightValue + eightValue;
  inputBox.value = updateEight;
});

// button "nine"
numNine.addEventListener("click", () => {
  const currentNineValue = inputBox.value;
  const nineValue = "9";
  const updatedNine = currentNineValue + nineValue;
  inputBox.value = updatedNine;
});

// button "addition"
buttonAdd.addEventListener("click", () => {
  const currentAddValue = inputBox.value;
  const addValue = "+";
  const updatedAdd = currentAddValue + addValue;
  inputBox.value = updatedAdd;
});

// button "subtraction"
buttonSub.addEventListener("click", () => {
  const currentSubValue = inputBox.value;
  const subValue = "-";
  const updateSub = currentSubValue + subValue;
  inputBox.value = updateSub;
});

// button "multiplication"
buttonMulti.addEventListener("click", () => {
  const currentMultiValue = inputBox.value;
  const multiValue = "*";
  const updatedMulti = currentMultiValue + multiValue;
  inputBox.value = updatedMulti;
});

// button "division"
buttonDiv.addEventListener("click", () => {
  const currentDivValue = inputBox.value;
  const divValue = "/";
  const updatedDivValue = currentDivValue + divValue;
  inputBox.value = updatedDivValue;
});

// button dot
buttonDot.addEventListener("click", () => {
  const currentDotValue = inputBox.value;
  const dotValue = ".";
  const updatedDotValue = currentDotValue + dotValue;
  inputBox.value = updatedDotValue;
});

// button root
buttonRoot.addEventListener("click", () => {
  const currentRootValue = inputBox.value;
  const rootValue = "√";
  const updatedRootValue = currentRootValue + rootValue;
  inputBox.value = updatedRootValue;
});

// percent button
buttonPercent.addEventListener("click", () => {
  const currentPercentValue = inputBox.value;
  const percentValue = "%";
  const updatedPercentValue = currentPercentValue + percentValue;
  inputBox.value = updatedPercentValue;
});

// var to check if a number has been submitted in input box
// negative button
buttonNegative.addEventListener("click", () => {
  // need buttons need logic to only be able to be inputed if a number has already
  // been submitted.
  // i am going to use "typeof" to make this work
  let inputValue = inputBox.value; // getting value from input box
  if (typeof parseFloat(inputValue) == "number" && !isNaN(inputValue)) {
    // checking if the input value is valid num
    const updatedValue = "-" + inputValue;
    inputBox.value = updatedValue;
  } else {
  }
  // Alright this works!
});

// button "clear(CE)"
butttonClear.addEventListener("click", () => {
  // need to add the logic to be able to clear the input box, along with being able to "kill" any backend logic as well
  // first i am going to attempt to do this buy making the "clear" button refresh the page to kill all things on it
  // this may need to be changed in the future

  location.reload(); // refreshes the page
  // this is working as of 1:32PM 8/30/23
});

//
//

/* 
Everything is done except for the sum button, I need a way to be able to calculate the values of numbers put in the inputbox. 
>> Sum Button Currently Does Not Work!
*/

//
//