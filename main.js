const numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

//should pring out "OneZero,ThreeZeroZero,Five"
console.log(convert([10,300,5]));

function convert(arr) {
    let outputString = "";
    //iterate over strings in the array
    arr.forEach((digit, idx) => {
        let digString = digit.toString();
        //iterate over characters in each string
        [...digString].forEach(char => {
            outputString += numbers[parseInt(char)]
        })
        //add comma between every array number, excluding last one
        outputString += (idx < arr.length-1) ? "," : "";
    });
    return outputString;
}