/*console.log("Hello from External Javascript!")
alert("Welcome to my website!")
var favColor = prompt("Whats your favorite color?")
console.log(favColor)
alert("Great! " + favColor + " is my favorite color too!" )*/

/* Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

 */
/*

var pricePerDay = prompt("What is the price per day")
var littleMermaid = prompt("How long do you want to rent Little Mermaid?")
var BB = prompt("How long do you want to rent the Brother Bear?")
var Hercules = prompt("How long do you want to rent Hercules?")
console.log(littleMermaid,BB,Hercules)
var totalDay = parseInt(littleMermaid) + parseInt(BB) + parseInt(Hercules)
        alert("You're total is: " + totalDay * pricePerDay)
*/
/*

var google = prompt("how much does google pay?(400)")
var gHours = prompt("how many hours did you work at Google(6)")
var gTotal= parseInt(google) * parseInt(gHours)
alert(gTotal)

var amazon = prompt("how much does amazon pay(380)")
var aHours = prompt("how many hours did you work at amazon(4)?")
var aTotal = parseInt(amazon) * parseInt(aHours)
alert(aTotal)

var facebook = prompt("how much does facebook pay(350)?")
var fHours = prompt("how many hours did you work at facebook(10)")
var fTotal = parseInt(facebook) * parseInt(fHours)
alert(fTotal)
var totalPaid = parseInt(gTotal + aTotal + fTotal)
alert("You got paid " + totalPaid + " this week")

*/

/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */
/*

let spaceOpen = true;

let openSchedule = false;

let canBeEnrolled = spaceOpen && openSchedule;

console.log("Can I be enrolled?: " + canBeEnrolled);
*/

let offerNotExpired = true;

let moreThan2 = false;

let isPremiumMember = true;

let offerCanBeApplied = offerNotExpired && (moreThan2 || isPremiumMember);