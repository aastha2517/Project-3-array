// Question-1 Write a simple JavaScript program to print expected Output using following array.
let myColor = ["Red ", "Green ", "White ", "Black "];
document.getElementById('colorArr').innerHTML = `myColor = [ ${myColor} ]`;
document.getElementById('color-output-1').innerHTML = `Output-1 = [ ${myColor.join('-')} ]`;
document.getElementById('color-output-2').innerHTML = `Output-2 = [ ${myColor.join('+')} ]`;
myColor.pop();
document.getElementById('color-output-3').innerHTML = `Output-3 = [ ${myColor}]`;
myColor.push('Black');
document.getElementById('color-output-4').innerHTML = `Output-4 = [ ${myColor[0]}]`;
document.getElementById('color-output-5').innerHTML = `Output-5 = [ ${myColor[1]} , ${myColor[2]}]`;
myColor.push("Orange");
document.getElementById('color-output-6').innerHTML = `Output-6 = [ ${myColor}]`;
// Question-2 Write a JavaScript program to get sum of all array element using for loop and foreach loop.
let sumArr = [10, 20, 30, 40, 50];
let sum_for = 0;
document.getElementById('sumArr').innerHTML = `Sum array : [${sumArr}]`;
for (let i = 0; i < sumArr.length; i++) {
    sum_for += sumArr[i];
}
document.getElementById('sum-for').innerHTML = `Sum of the array element using for Loop : ${sum_for}`;
let sum_for_each = 0;
sumArr.forEach(i => {
    sum_for_each += i;
});
document.getElementById('sum-for-each').innerHTML = `Sum of the array element using for Each : ${sum_for_each}`;
// Question-3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
let min_max_Arr = [10, 20, 30, 40, 50];
document.getElementById('min-Arr').innerHTML = `Array = [ ${min_max_Arr}]`;
let min = min_max_Arr[0];
let max = min_max_Arr[0];
function minFinder(min_max_Arr) {
    for (let i = 0; i < min_max_Arr.length; i++) {
        if (min_max_Arr[i] <= min) {
            min = min_max_Arr[i];
        }
    }
    document.getElementById('min').innerHTML = `Minimum Number is  => ${min}`;
}
minFinder(min_max_Arr);
function maxFinder(min_max_Arr) {
    for (let i = 0; i < min_max_Arr.length; i++) {
        if (min_max_Arr[i] >= max) {
            max = min_max_Arr[i];
        }
    }
    document.getElementById('max').innerHTML = `Maximum Number is => ${max}`;
}
maxFinder(min_max_Arr);
// Question-4 Write a JavaScript program for convert all array element in ASCII value.
let asciiArr = ['a', 'b', 'c', 'd'];
let ascii_str = '';
document.getElementById('ascii-Arr').innerHTML = `Array = [ ${asciiArr}]`;
for (let i = 0; i < asciiArr.length; i++) {
    let ascii = asciiArr[i].charCodeAt(0);
    ascii_str += `<br/> ${asciiArr[i]} => ${ascii}`;
}
document.getElementById('ascii_str').innerHTML = `ASCII value of Array elements : ${ascii_str}`;
// Question-5 Write a JavaScript program for remove negative values using the filter array function.
let numbersArr = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById('numbers-Arr').innerHTML = `Array = [ ${numbersArr}]`;
document.getElementById('negative').innerHTML = `Negative Array elements : ${numbersArr.filter(x => x < 0)}`;
// Question-6 Write a JavaScript program using array map() method and return the square of array element.
let map_Arr = [2, 5, 6, 3, 8, 9];
document.getElementById('map-Arr').innerHTML = `Array = [ ${map_Arr}]`;
document.getElementById('square').innerHTML = `Square of Array elements : ${map_Arr.map(x => x * x)}`;
// Question-7 Write a JavaScript program for sort array in ascending descending.
let sort_Arr = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
document.getElementById('sort-Arr').innerHTML = `Array = [ ${sort_Arr}]`;
let temp = 0;
for (let i = 0; i < sort_Arr.length; i++) {
    for (let j = 0; j < sort_Arr.length - 1; j++) {
        if (sort_Arr[i] <= sort_Arr[j]) {
            temp = sort_Arr[i];
            sort_Arr[i] = sort_Arr[j];
            sort_Arr[j] = temp;
        }
    }
}
document.getElementById('ascending').innerHTML = `Array elements in Ascending Order : ${sort_Arr}`;
for (let i = 0; i < sort_Arr.length; i++) {
    for (let j = 0; j < sort_Arr.length - 1; j++) {
        if (sort_Arr[i] >= sort_Arr[j]) {
            temp = sort_Arr[i];
            sort_Arr[i] = sort_Arr[j];
            sort_Arr[j] = temp;
        }
    }
}
document.getElementById('descending').innerHTML = `Array elements in Descending Order : ${sort_Arr}`;
// Question-8  Write a JavaScript program which filters out any string which is less than 8 characters. 
let string_Arr = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById('string-Arr').innerHTML = `Array = [ ${string_Arr}]`;
document.getElementById('char-output').innerHTML = `Array elements which has a less than 8 Character : ${string_Arr.filter(x => x.length < 8)}`;
// Question-9  write a JavaScript program to  to print expected output for following string.
// Question-10  write a JavaScript program for array reverse.
let reverse_Arr = [24, 89, 82, 90, 1];
let reverse_str = '';
document.getElementById('reverse-Arr').innerHTML = `Array : [${reverse_Arr}]`;
for (let i = reverse_Arr.length - 1; i >= 0; i--) {
    reverse_str += reverse_Arr[i] + ' , ';
}
document.getElementById('reverse-output').innerHTML = `Array elements in Reverse Order : ${reverse_str}`;
// Question-11 write a JavaScript program for check value is found or not?
let found_Arr = [25, 83, 82, 90, 13];
document.getElementById('found-Arr').innerHTML = `Array : [${found_Arr}]`;
let found_num = 25;
if (found_Arr.includes(found_num) === true) {
    document.getElementById('found-output').innerHTML = `${found_num} is Found in array`;
}
else {
    document.getElementById('found-output').innerHTML = `${found_num} is Not Found in array`;
}
