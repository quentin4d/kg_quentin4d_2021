//0-9 in plain english strings
const digits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//Array containing arguments passed in (assumes all arguments are integers, and that at least one arg is present)
const inputNumbers = process.argv.slice(2);

//Verify that none of the integer args are negative
console.log( inputNumbers.find(elem => elem < 0) ? "All integers must be positive!" :  convertToStrings(inputNumbers) );

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