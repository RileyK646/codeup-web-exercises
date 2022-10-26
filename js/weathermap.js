
//Call without UI pieces:
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

console.log(openweatherKey); //"API key" we put after appID

let myFavoriteVacation = "New Orleans";
let newsearch = document.getElementById("#searchBox");
console.log("This is from the search bar " + newsearch)

console.log(`https://api.openweathermap.org/data/2.5/weather?q=${newsearch}&appid=${openweatherKey}`);

let testdata = $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${newsearch}&appid=${openweatherKey}&units=imperial`).done(function(data){

})


$.ajax(`https://api.openweathermap.org/data/2.5/forecast?q=${newsearch}&appid=${openweatherKey}&units=imperial`).done(function(data){

})

//Putting together some HTML to work with:
$("#searchBtn").click(function(e){
    e.preventDefault();
    console.log($("#searchBox").val());

    let inputStr = $("#searchBox").val();

    let key = "06c64291dac1db4d4d159aac0fab98da";


    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${inputStr}&appid=${key}`).done(function(data){
        console.log(data);
    })
})

