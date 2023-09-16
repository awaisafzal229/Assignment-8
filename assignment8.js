"use strict";
// Q1. Install Node.js, TypeScript and VS Code on your computer.
var _a, _b;
// I have installed the Node.js, TypeScript and VS Code in my computer.
// Q2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let nameOfPerson:string= "Ali";
// console.log(`"Hello ${nameOfPerson}, would you like to to learn some Python today?"`);
// Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let nameOfPerson = "ALI HAIDER";
let cases = nameOfPerson.toLowerCase();
console.log(cases);
let cases2 = nameOfPerson.toUpperCase();
console.log(cases2);
const cases3 = nameOfPerson.split(" ");
console.log(cases3);
const titlecaseName = cases3
    .map((element) => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
    .join(" ");
console.log("Titlecase Name:", titlecaseName);
// Q4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let quote = "Don't be afraid of losing people, but be afraid that you don't lose yourself while making people happy.";
let author = "Bano Qudsia";
console.log(`${author} once said,"${quote}"`);
// Q5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let quote = "Don't be afraid of losing people, but be afraid that you don't lose yourself while making people happy.";
let famous_person = "Bano Qudsia";
let message = `${famous_person} once said,"${quote}"`;
console.log(message);
// Q6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name_of_person = "    \tali junaid sadique\n           ";
console.log(name_of_person);
let striping = name_of_person.trim();
console.log(striping);
// Q7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
const additionResult = 4 + 4;
console.log(`Addition: 4 + 4 = ${additionResult}`);
const subtractionResult = 10 - 2;
console.log(`Subtraction: 10 - 2 = ${subtractionResult}`);
const multiplicationResult = 2 * 4;
console.log(`Multiplication: 2 * 4 = ${multiplicationResult}`);
const divisionResult = 16 / 2;
console.log(`Division: 16 / 2 = ${divisionResult}`);
You;
should;
create;
four;
lines;
that;
look;
like;
this;
console.log(5 + 3);
// Q8. Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(4 + 4);
console.log(10 - 2);
console.log(16 / 2);
// Q9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let myFavouriteNum = 22;
let message = `Your Favourite Number is ${myFavouriteNum}`;
console.log(message);
// Q10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// let Author:string= awais
// Date: Date: 16/Sep/2023
// Description: This program performs a simple addition operation and prints the result.
const result = 5 + 3; // Perform addition
console.log("The result of 5 + 3 is:", result);
// let Author:string= awais
// Date: 16/Sep/2023
// Description: This program stores and reveals the author's favorite number.
const favoriteNumber = 42; // Replace with your actual favorite number
const message = `My favorite number is ${favoriteNumber}.`;
console.log(message);
// Q11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ['awais', 'ahmad', 'abubakar', 'huzaifa'];
names.forEach(element => {
    console.log(element);
});
// Q12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ['awais', 'ahmad', 'abubakar', 'huzaifa'];
names.forEach(element => {
    console.log(`Hi how are you ${element}`);
});
// Q13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const favouriteModesOfTransport = ["Grande", "Porsche 911", "Honda Civic", "Honda Prius Hybrid"];
console.log("My Favorite Modes of Transportation:");
favouriteModesOfTransport.forEach((transportations) => {
    console.log(`I would like to own a ${transportations}.`);
});
// Q14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guests = ["Rana Naveed", "Abu Hurairah", "Zia Khan"];
console.log("Dinner Invitations:");
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
});
// Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
const guests = ["Rana Naveed", "Abu Hurairah", "Zia Khan"];
console.log("Dinner Invitations:");
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
});
let absentee = guests.pop();
guests.push('Mahnoor');
console.log("After removing the person:");
guests.forEach(element => {
    console.log(`Dear ${element}, you are cordially invited to dinner. We would be honored to have you join us. `);
});
// Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guests = ["Rana Naveed", "Abu Hurairah", "Zia Khan"];
console.log(" We have a bigger dinner table tonight! ");
guests.unshift('Raza');
guests.splice(2, 0, 'Shahid');
guests.push('Babar');
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have you join us.`);
});
//Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
//two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.
console.log("I'm very sorry that our dinner is re-scheduled.And for today their are only two persons invited.Thank you");
console.log('!*Removed persons*!');
const guests = ["Raza", "Rana Naveed", "Shahid", "Abu Hurairah", "Zia Khan", "Babar"];
let message2 = "You're invited to dinner tonight at my place. We'd love to have you for great food and conversation. ";
for (let i = guests.length - 1; i > 1; i--) {
    let message = `Hey ${(_a = guests.pop()) === null || _a === void 0 ? void 0 : _a.toUpperCase()}! `;
    console.log(message + "We are sorry but you are not invited tonight but we will arrange another dinner anyday else!\n");
}
console.log('After removing persons!\n');
for (let i = 0; i < guests.length; i++) {
    let message = `Hey ${guests[i].toUpperCase()}!`;
    console.log(message + message2, "\n");
}
console.log('Removed persons!\n');
for (let i = guests.length; i > 0; i--) {
    let message = `${(_b = guests.pop()) === null || _b === void 0 ? void 0 : _b.toUpperCase()} is removed`;
    console.log(message, "\n");
}
console.log('Final list!\n');
for (let i = 0; i < guests.length; i++) {
    console.log('Your list contains \n' + guests[i]);
}
//Q18. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has 
//changed.
let locations = ['Naran', 'Murree', 'Tah Mahal', 'K2', 'Adelaide'];
console.log(locations);
console.log("Alphabetical Order:", [...locations].sort());
console.log("Original Order (Unchanged):", locations);
console.log("Reverse Alphabetical Order:", [...locations].sort().reverse());
console.log("Original Order (Unchanged):", locations);
locations.reverse();
console.log("Reversed Order:", locations);
locations.reverse();
console.log("Back to Original Order:", locations);
locations.sort();
console.log("Alphabetical Order (Modified):", locations);
locations.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order (Modified):", locations);
//Q19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating 
//the number of people you are inviting to dinner.
console.log(`The number of people invited ${guests.length}`);
//Q20. Think of something you could store in a array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
//containing these items.
const countries = ["Pakistan", "Canada", "Australia", "Japan", "United States"];
console.log("Countries around the world.");
countries.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
});
//Q21: They think of something you could store in a TypeScript Object. Write a program that creates
//Objects containing these items.
const citiesInfo = {
    "United States": ["New York", "Los Angeles", "Chicago"],
    "Canada": ["Toronto", "Vancouver", "Montreal"],
    "Australia": ["Sydney", "Melbourne", "Brisbane"],
    "Japan": ["Tokyo", "Kyoto", "Osaka"],
    "Pakistan": ["Islamabad", "Lahore", "Faisalabad"]
};
const selectedCountry = "Pakistan";
console.log(`Cities in ${selectedCountry}:`);
citiesInfo[selectedCountry].forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
});
//Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet, 
//try to make one happen. Change an index in one of your programs to produce an index error. Make 
//sure you correct the error before closing the program.
let numbers = [1, 2, 3, 4, 5, 6, 7];
let errorNumber = numbers[7]; // As there is no index of 7 in numbers array so it is an error 
console.log(errorNumber); // But compiler will show us the undefind message which is obvious
//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
//prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
const citiesInfo = {
    united_States: "New York",
    canada: "Toronto",
    australia: "Sydney",
    japan: "Tokyo",
    pakistan: "Islamabad"
};
console.log("Is inited_States == 'New York'? I predict True");
console.log(citiesInfo.united_States == "New York");
console.log("Is canada == 'New York'? I predict False");
console.log(citiesInfo.canada == 'New York');
console.log("Is australia == 'Lahore'? I predict True");
console.log(citiesInfo.australia == 'Lahore');
console.log("Is pakistan == 'Islamabad'? I predict True");
console.log(citiesInfo.pakistan == 'Islamabad');
console.log("Is japan == 'shengai'? I predict False");
console.log(citiesInfo.japan == 'shengai');
