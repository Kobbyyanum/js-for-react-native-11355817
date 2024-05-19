function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3;
        }
    });
}

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultArray = processArray(inputArray);
console.log(resultArray);


function formatArrayStrings(stringsArr, numbersArr) {
    return stringsArr.map((str, index) => {
        if (numbersArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}


const inputStrings = ["Hello", "World", "Goodbye"];
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings); 