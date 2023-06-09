// ASSESSMENT 3: Coding Practical Questions with Jest






// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("greaterThanTwo", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(greaterThanTwo(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(greaterThanTwo(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// // Pseudo code:
// create a function named greaterThanTwo that takes in any number greater than 2.
//previous 2 numbers of array added up equal next number of array.
//create array and push into it
// returns array of the length of the number inputed.
// 

// b) Create the function that makes the test pass.
const greaterThanTwo = (num) => {
  let array = [1, 1]
  for(let i = 2; i < num; i++) {
    array[i-2] + array[i-1] 
    array.push(array[i-2] + array[i-1])
  }
  return array

}



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// Pseudo code: 
//create a function named sortedArray that takes in an object as parameter
//use the Object.values and sort to get the numbers from small to biggest
describe("sortedArray", () => {
  it("Create a function that takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(sortedArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortedArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.
const sortedArray = (object) => {
  return Object.values(object).sort((a, b) => a - b)
}
  





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// Pseudo code: 
//create a function called arraySum that takes in an array 
//create a for loop to iterate the length of the array
//create an empty array and use .push to push new sum into it
// return the new array

describe("arraySum", () => {
  it(" takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(arraySum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arraySum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(arraySum(accountTransactions3)).toEqual([])
  })
})
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const arraySum= (array) => {
  let sum = 0
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    sum = array[i] + sum
    newArray.push(sum)
  }
  return newArray
}
