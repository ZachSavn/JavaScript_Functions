console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//create function that prints only odds
function printOdds (count){
  for (let i = 1; i <= count; i++) {
    if (i % 2 == 1) {
    console.log(i);
    } else {
      continue;
    }
  }
}
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");