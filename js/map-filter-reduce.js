const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let ThreeLang = users.filter((e) => e.languages.length >= 3)
console.log(ThreeLang)

let emails = users.map(function (ele) {
    return  ele.email
})
console.log(emails);

let totalyears = users.reduce((total, person) => {
    return total + person.yearsOfExperience
}, 0)
console.log(totalyears);

let longestemail = users.reduce((x,e) => x.email.length > e.email.length ? x : e).email
console.log(longestemail);
let namearray = users.reduce((acc, ele) => {
    console.log(`current is ${acc} and current value is ${ele}`)
    return acc + ele.name
} , ' ')
console.log(namearray);