//0-9 in plain english strings
const digits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//Array containing arguments passed in (assumes all arguments are integers, and that at least one arg is present)
const inputNumbers = process.argv.slice(2);

//Verify that none of the integer args are negative
console.log( inputNumbers.find(elem => elem < 0) ? "All integers must be positive!" :  convertToStrings(inputNumbers) );

/**
 * Given an array containing positive integers, prints out the strings 
 * representing the phonetic equivalent of each integer
 * 
 * Ex: 
 *  Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout. 
 *  Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.
 * 
 * @param arr - Array containing all integers to be converted to strings
 * @returns - String containing all (comma-separated) string representations of the values of arr
 */
function convertToStrings(arr) {

    let outputString = "";

    //iterate over strings in the array
    arr.forEach((number, idx) => {

        let numberString = number.toString();

        //iterate over characters in each string
        [...numberString].forEach(char => {
            outputString += digits[parseInt(char)]
        })

        //add comma between every array number, excluding last one
        outputString += (idx < arr.length-1) ? "," : "";
    });

    return outputString;
}