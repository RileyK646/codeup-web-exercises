/*
Area of a Triangle: Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
    Reverse a String: Write a JS function that accepts a string and returns the string in reverse. example input: codeup, example output: puedoc
    */
/*
let length1 = prompt("What is the length of the first side");
let length2 = prompt("What is the length of the second side");
let length3 = prompt("What is the length of the third side");
*/
/*
function triangleArea(num1,num2,num3) {
        /!*
        let side1 = prompt("side 1")
        let side2 = prompt("side 2")
        let side3 = prompt("Side 3")
        *!/
    let SemiPerim = (num1 + num2 + num3) / 2;

                let tArea = Math.sqrt( (SemiPerim-num1)(s-num2)(s-num3) )

                 alert("The area of the triangle is " + tArea)

}

console.log(triangleArea(10,15,20))*/

/*
function reverseInput(input) {

        let phrase = prompt("What would you like reversed?")
   let inputArray = phrase.split("");
        console.log(inputArray)
    let reverseArray = inputArray.reverse();
    console.log(reverseArray)
    let joinedArray = reverseArray.join(" ")
    console.log(joinedArray)

}
console.log(reverseInput())*/


// SEPT 22
/*
Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
*/
    function lowHigh(array) {

        return array.sort(function(a, b) {
            return a - b;
        }
        )
    }

console.log(lowHigh([25, 2, 99, 2222, 209]));


/*
2. Write a function that returns the reading status of each of the following books:
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
 */
