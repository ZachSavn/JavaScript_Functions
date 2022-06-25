console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//create function that prints only odds
function printOdds(count) {
  for (let i = 0; i <= count; i++) {
    if (count <= 0) {
      console.log("Enter valid positive integer.");
    } else if (i % 2 == 1) {
      console.log(i);
    } else {
      continue;
    }
  }
}
printOdds(0);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  do {
    userName = prompt("What is your name?");
  } while (userName == "" || userName == " ");

  do {
    age = prompt("What is your age?");
  } while (age <= 0);

  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age >= 16) {
    alert(aboveSixteen);
  } else {
    alert(belowSixteen);
  }
}

checkAge();