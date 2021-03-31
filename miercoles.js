// # Programming Basics: Basic String Methods

// ## These exercises are aimed at making you more familiar with string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results. 

// **NB: declare each variable with a unique name so that you can run the exercises below in a single script without SyntaxErrors. If you are not sure what we mean by that, try first running your script with multiple variables of the same name and see what happens. We'll wait.**

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.


let strn1 = "I can walk in the park all day!";

console.log(strn1.substring(17,22))

// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

let strn2 = "Hello World"
console.log(strn2.toUpperCase()) //tconvert  everithing to uppercase 




// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 



let strn3 = "Hello Earthling";
console.log(strn3.toLowerCase())

// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.



let strn4 = "JavaScript"
console.log(strn4.substring(3,6))
// 5. Check if the sentence "nice shoes" contains the letter l or n. 


let strn5 = "nice shoes";
console.log(strn5.includes("n"))
console.log(strn5.includes("l"))



// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB


let strn6 = "Sol";

console.log(strn6.substring(0,1)+strn6 +strn6.substring(0,1))




// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch

let strn7 = "mustard"
console.log(strn7.substring(0,3)+strn7 + strn7.substring(0,3) )

// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB

let strn8 = "Funk";
console.log(strn8.substring(3,4) + strn8.substring(1,3) + strn8.substring(0,1))

// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 

let firstName = "Josefa"
let myBeruf = "Tattoo Artist"
let birthCity = "Berlin"

console.log("My name is " + firstName +" I Work as an " + myBeruf + " And I Live in " + birthCity)
// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let strn9 = "the quick brown fox"
let firstLetter = strn9[0].toUpperCase()
let rest = strn9.substring(1)
console.log(firstLetter + rest)


