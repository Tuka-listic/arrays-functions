//Question 1a
// Mutating array method involves Mutation in context of JavaScript arrays is basically changing the array itself instead of returning a new array with the new changes whereas
// Non-Mutation is returning a whole new array which has all the changes.

//1b
//Mutating Methods in JavaScript are; array.pop(), array.shift(), array.sort(), array.splice() and array.unshift().

// Non-Mutating Methods in JavaScript are; array.concat(), array.join(), array.lastIndexOf(), array.slice(), and array.toString().

//Question 2
//using an array literal
let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
console.log(languages);

//Adding Kotlin to the end of the array
languages.push("Kotlin");
console.log(languages);

//Adding Java after Ruby
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python", "Kotlin"];

languages.splice(3, 2, 1, 0, 'Java');

console.log(languages); //["C#", "JavaScript", "Ruby", "Java" "PHP", "Python", "Kotlin"];

//Removing the first item on the array
const removedElementFirst = languages.shift();
console.log(languages); // ["JavaScript", "Ruby", "Java", "PHP", "Python", "Kotlin"];
console.log("The removed element is" + removeElementFirst);

console.log(languages.indexOf ("C#"));

//Adding "Scala" and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages); // ["Scala", "Swift", JavaScript", "Ruby", "Java", "PHP", "Python", "Kotlin"];

//Replacing 'PHP' with 'Go' and 'Rust'
let removedElements = languages.splice ('Scala', 'Swift', 'JavaScript','Ruby','Java','2', '1', 'Python', 'Kotlin');
console.log("The removed element is" + removeElementMiddle);


//Question 3
//The value of fruit will be; 
//Fruits = ['apple', 'orange', 'banana'];

//Question 4
let numbers = ['-2','4', '5', '10'];
function returnMaxValue(numbers) {
    maximumValue = "10";
    return result;  
}
console.log(maximumValue);

//Question 5
function valTimesIndex([1,2,3]) // [0,2,6]
let multBy2 = [1, 2, 3]. map(function (num) {
    let result = num * 2;
    return result
})
console.log(valTimesIndex);

function valTimesIndex([5,10,15]) // [0,10,30]
let multBy2 = [5, 10, 15]. map(function (num) {
    let result = num * 2;
    return result
})
console.log(valTimesIndex);


