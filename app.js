console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 1; i <= count; i++) {
    if (count < 0) {
      console.log("Please enter positive value");
    }
    if (i % 2 == 1) {
      console.log(i);
    } else {
      continue;
    }
  }
}

printOdds(10);
printOdds(5);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age, name = "mysterous one ") {
  if (!parseInt(age) && age !== 0) {
    console.log("You gave an invalid age");
  }
  let aboveSixteen = `Congrats! ${name}, you may drive if it pleases you.`;
  let belowSixteen = `Unfortunately, ${name}, you have yet to meet the required age threshold of sixteen to drive.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

checkAge(7, "Biscuit");
checkAge(21, "Biscuit");
checkAge(12);

//Exercise 3

function describePointLocation(x, y) {
  if (x == 0 || y == 0) {
    //Is the point on the x-axis
    if (x == 0 && y == 0) {
      console.log("Point is in center of graph");
    }
    if (x == 0) {
      console.log("Point is on x-axis");
    }
    //Is the point on the y-axis
    if (y == 0) {
      console.log("Point is on y-axis");
    }
  } else{
      //what quaadrant

      if (x > 0 && y > 0){
          //quad 1
          console.log("Point is in first quadrant")
          //quad 2
      }else if (x < 0 && y > 0){
        console.log("Point is in second quadrant")
        //quad 3
    } else if (x < 0 && y < 0){
        console.log("Point is in third quadrant")
        //quadrant 4
    } else{
        console.log("Point is in fourth quadrant")
    }

      }
  }

  describePointLocation(0,0)
  describePointLocation( -1,5)
  describePointLocation(-5,-5)
  describePointLocation(5,-2)


  //exercise 4

function triangleEval (side1, side2, side3){
    //is triangle valid
    if(side1+side2 < side3){
        console.log ("Invaid triangle")
    } if(side1 == side2 && side1 == side3){
        console.log("equalateral")
    } else if(side1 ==side2 || side2 == side3 || side1 ==side3){
        console.log("Isosceles triangle")
    } else {
        console.log("Scalene triangle")
    }
}
triangleEval(1,4,3)
triangleEval(1,1,1)
triangleEval(2,2,5)
triangleEval(1,2,4)

//exercise 5

const dataReport = (dataLimit, day, usage)=>{
    const cycleLength = 30
    let avgDailyUse = usage / day
    let estUse = (cycleLength - day) *avgDailyUse
    let avgSuggestedUse = dataLimit / cycleLength
    let status

    if (avgDailyUse > avgSuggestedUse){
        status = "EXCEEDING"
        feedback = 'exceed your data plan by <tbd> GB'
    } else if(avgDailyUse <avgSuggestedUse){
        status = "UNDER"
        feedback = `lose ${estUse} GB`
    } else {
        status = "ON TRACK WITH"
        feedback = "use all of your data"
    }
    //usage / day == average daily usage
    //dataLimit / cycleLength ==average daily usage without running over
    //((cycleLength - day) * (usage / day)) - dataLimit 
    let output = `${day} day( s ) used, ${cycleLength - day} day( s ) remaining\n
    Average daily use: ${avgDailyUse} GB/day
    You are ${status} your average daily use (${avgDailyUse} GB/day),
    continuing this high usage, you'll exceed your data plan by
    <tbd> GB.
    To stay below your data plan, use no more than <tbd> GB/day.`