//Question 37 Large Shirts: Default values in make_shirt().
function make_shirt(size = "Large", message = "I love Typescript") {
    console.log(`I Wear ${size} size shirt ,printing on it ${message}`);
}
make_shirt();
make_shirt("Medium", "I like Python");
make_shirt("Small", "I like Java");
// Question 38: Cities: Describing cities with a function.
//Creat a function called discribe_city()
function discribe_city(city = "Lahore", message = "Pakistan") {
    console.log(`${city} is in ${message}`);
}
//function call with default message
discribe_city("Karachi");
//Function call with default value and default message
discribe_city();
//function call with default message
discribe_city("Quetta");
//  Question 39 : City Names: Formatting city-country pairs.
//Create a function called city_country()
function city_country(city, country) {
    return `${city},${country}`;
}
;
//Call function with three city-country pairs, and printing the value that’s returned.
console.log(city_country("Peshawar", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Multan", "Pakistan"));
export {};
//
