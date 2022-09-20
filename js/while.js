/*
Create a while loop that uses console.log() to create the output shown below.
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
 */
/*

let i = 0;

while (Math.pow(2,i) < Math.pow(2, 16)) {
    console.log(Math.pow(2, ++i))

}

*/
/*
An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;


Should be like;
5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones

*/
/*
(50) Get random number of  cones
(52)  Get how many cones are sold per "transaction

code should run as
        run "Transaction"
        minus transaction against total cones
        display result if there are cones left

 */
let allCones = Math.floor(Math.random() * 50) + 50;

/*let conesBought = Math.floor(Math.random() * 5) + 1;*/


do {
        console.log("Icecream store!")
        let conesSold = Math.floor(Math.random() * 5) + 1;

        console.log("Excellent you want " + conesSold + " - I have " + allCones + " left, let me get that for you" );
            if(conesSold > allCones) {
                console.log("I dont have enough cones")
                continue;
            }

        allCones -= conesSold
        console.log("You bought " + conesSold + " , now i have " + allCones)

} while (  allCones > 0);
