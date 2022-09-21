/*
Area of a Triangle: Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
    Reverse a String: Write a JS function that accepts a string and returns the string in reverse. example input: codeup, example output: puedoc
    */
/*
let length1 = prompt("What is the length of the first side");
let length2 = prompt("What is the length of the second side");
let length3 = prompt("What is the length of the third side");
*/

function triangleArea(num1,num2,num3) {
        /*
        let side1 = prompt("side 1")
        let side2 = prompt("side 2")
        let side3 = prompt("Side 3")
        */
    let SemiPerim = (num1 + num2 + num3) / 2;

                let tArea = Math.sqrt( (SemiPerim-num1)(s-num2)(s-num3) )

                 alert("The area of the triangle is " + tArea)

}

console.log(triangleArea(10,15,20))

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
