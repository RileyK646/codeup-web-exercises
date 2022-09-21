(function(){
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
/*var person = {
            firstName: "Riley",
            lastName: "King"
    }
    console.log(person.firstName)*/
    /*
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
  /*  person.sayHello = function () {
            return "Hello from " + person.firstName + " " + person.lastName
    }
    console.log(person.sayHello())*/
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    /* Needs too:
                    Use ForEach
                   Display name of person
                   The amount before discount
                   and the amount after discount
       Code should run like:
                            Display Names and Purchase amounts.
                                say whether or not a discount should be applied
                                    if yes, the amount of the discount
                                            and then the price after discount
                                     If no, list purchase amount, no discount.

                    (if) amount spent is over $200

     */

/*
     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
    ];
     */
/*

    console.log(shoppers[1]);
*/
/*
    shoppers.forEach(function ({name,amount}) {
        console.log(name + "'s total was $" + amount)
                if (amount > 200) {
                    let discount = amount * .12
                    console.log(name + " got a discount of $" + discount + " and paid $"+ (amount - discount))
                }
                else {
                    console.log(name + " did not get a discount")
                }

    }
)
    */
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
        var books = [
        {
            title: "Eragon",
            author: {
                firstName:"Christopher",
                 lastName:"Paolini"
            }


        },
        {
            title: "Enders Game",
            author: {
                firstName:"Orson",
                lastName:"Scott Card"
            }

        },
        {
            title: "To Sleep in a Sea of Stars",
            author: {
                firstName:"Christopher",
                lastName:"Paolini"
            }

        },
        {
            title: "I am Legend",
            author: {
                firstName:"Richard",
                lastName:"Matheson"
            }

        },
        {
            title: "Shift",
            author: {
                firstName:"Hugh",
                lastName:"Howell"
            }

        }
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function ({title,author}, index) {
            console.log("Book #" + (index + 1));

            console.log("Title: " +title)
            console.log("Author: " + author.firstName + " " + author.lastName );
            console.log("------------------")



        }
    )
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();