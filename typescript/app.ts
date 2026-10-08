export{}
// Question-1 Write a simple JavaScript program to print expected Output using following array.

let myColor:string[] = ["Red ","Green ","White ","Black "];
document.getElementById('colorArr')!.innerHTML = `myColor = [ ${myColor} ]`;
document.getElementById('color-output-1')!.innerHTML = `Output-1 = [ ${myColor.join('-')} ]`;
document.getElementById('color-output-2')!.innerHTML = `Output-2 = [ ${myColor.join('+')} ]`;
myColor.pop();
document.getElementById('color-output-3')!.innerHTML = `Output-3 = [ ${myColor}]`;
myColor.push('Black');
document.getElementById('color-output-4')!.innerHTML = `Output-4 = [ ${myColor[0]}]`;
document.getElementById('color-output-5')!.innerHTML = `Output-5 = [ ${myColor[1]} , ${myColor[2]}]`;
myColor.push("Orange");
document.getElementById('color-output-6')!.innerHTML = `Output-6 = [ ${myColor}]`;

// Question-2 Write a JavaScript program to get sum of all array element using for loop and foreach loop.

let sumArr:number[] = [10 , 20 , 30 , 40 , 50];
let sum_for:number = 0;
document.getElementById('sumArr')!.innerHTML = `Sum array : [${sumArr}]`;

for(let i = 0 ; i < sumArr.length ; i++){
    sum_for += sumArr[i];
}

document.getElementById('sum-for')!.innerHTML = `Sum of the array element using for Loop : ${sum_for}`;

let sum_for_each:number = 0;
sumArr.forEach(i => {
    sum_for_each += i;
});

document.getElementById('sum-for-each')!.innerHTML = `Sum of the array element using for Each : ${sum_for_each}`;

// Question-3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let min_max_Arr:number[] = [10, 20, 30, 40, 50];
document.getElementById('min-Arr')!.innerHTML = `Array = [ ${min_max_Arr}]`;
let min:number = min_max_Arr[0];
let max:number = min_max_Arr[0];

function minFinder (min_max_Arr:number[]){
    for (let i = 0; i < min_max_Arr.length; i++) {
        if(min_max_Arr[i] <= min){
            min = min_max_Arr[i];
        }
    }
    document.getElementById('min')!.innerHTML = `Minimum Number is  => ${min}`;
}

minFinder(min_max_Arr);

function maxFinder (min_max_Arr:number[]){
    for (let i = 0; i < min_max_Arr.length; i++) {
        if (min_max_Arr[i] >= max) {
            max = min_max_Arr[i];
        }
    }
    document.getElementById('max')!.innerHTML = `Maximum Number is => ${max}`;
}

maxFinder(min_max_Arr);

// Question-4 Write a JavaScript program for convert all array element in ASCII value.

let asciiArr:string[] = ['a' , 'b' , 'c' , 'd'];
let ascii_str:string = '';

document.getElementById('ascii-Arr')!.innerHTML = `Array = [ ${asciiArr}]`;

for(let i = 0 ; i < asciiArr.length ; i++ ){
    let ascii:number = asciiArr[i].charCodeAt(0);
    ascii_str += `<br/> ${asciiArr[i]} => ${ascii}`;
}

document.getElementById('ascii_str')!.innerHTML = `ASCII value of Array elements : ${ascii_str}`;

// Question-5 Write a JavaScript program for remove negative values using the filter array function.

let numbersArr:number[] = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

document.getElementById('numbers-Arr')!.innerHTML = `Array = [ ${numbersArr}]`;
document.getElementById('negative')!.innerHTML = `Negative Array elements : ${numbersArr.filter(x => x < 0)}`;

// Question-6 Write a JavaScript program using array map() method and return the square of array element.

let map_Arr:number[] = [2, 5, 6, 3, 8, 9];
document.getElementById('map-Arr')!.innerHTML = `Array = [ ${map_Arr}]`;
document.getElementById('square')!.innerHTML = `Square of Array elements : ${map_Arr.map(x => x * x)}`;

// Question-7 Write a JavaScript program for sort array in ascending descending.

let sort_Arr:number[] = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
document.getElementById('sort-Arr')!.innerHTML = `Array = [ ${sort_Arr}]`;

let temp:number = 0;

for(let i = 0 ; i < sort_Arr.length ; i++){
    for(let j = 0 ; j < sort_Arr.length - 1 ; j++){
        if(sort_Arr[i] <= sort_Arr[j]){ 
            temp = sort_Arr[i]; 
            sort_Arr[i] = sort_Arr[j]; 
            sort_Arr[j] = temp; 
        }

    }
}

document.getElementById('ascending')!.innerHTML = `Array elements in Ascending Order : ${sort_Arr}`;

for(let i = 0 ; i < sort_Arr.length ; i++){
    for(let j = 0 ; j < sort_Arr.length - 1 ; j++){
        if(sort_Arr[i] >= sort_Arr[j]){
            temp = sort_Arr[i];
            sort_Arr[i] = sort_Arr[j];
            sort_Arr[j] = temp;
        }
        
    }
}
document.getElementById('descending')!.innerHTML = `Array elements in Descending Order : ${sort_Arr}`;

// Question-8  Write a JavaScript program which filters out any string which is less than 8 characters. 

let string_Arr:string[] = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById('string-Arr')!.innerHTML = `Array = [ ${string_Arr}]`;
document.getElementById('char-output')!.innerHTML = `Array elements which has a less than 8 Character : ${string_Arr.filter(x => x.length < 8)}`;

// Question-9  write a JavaScript program to  to print expected output for following string.

// x = "airplane";    output:- r

let x:string = "airplane";
document.getElementById('str1')!.innerHTML = `Input : ${x}`;
document.getElementById('str1-output')!.innerHTML = `Output : ${x.charAt(2)}`;

//y= "oxoxoxox";   output:- "oXoXoXoX"

let y:string = "oxoxoxox";
document.getElementById('str2')!.innerHTML = `Input : ${y}`;
document.getElementById('str2-output')!.innerHTML = `Output : ${y.replaceAll('x','X')}`;

//z = "A New Java Book"; output:-  "a new java book" , "A NEW JAVA BOOK"  

let z:string = "A New Java Book";
document.getElementById('str3')!.innerHTML = `input : ${z}`;
document.getElementById('str3-output')!.innerHTML = `Output : ${z.toLowerCase()} , ${z.toUpperCase()}`;


// Question-10  write a JavaScript program for array reverse.

let reverse_Arr:number[] = [24, 89 , 82 , 90 , 1];
let reverse_str:string = '';

document.getElementById('reverse-Arr')!.innerHTML = `Array : [${reverse_Arr}]`;

for(let i = reverse_Arr.length - 1 ; i >= 0 ; i--){
    reverse_str += reverse_Arr[i] + ' , ';
}

document.getElementById('reverse-output')!.innerHTML = `Array elements in Reverse Order : ${reverse_str}`;


// Question-11 write a JavaScript program for check value is found or not?

let found_Arr:number[] = [25, 83 , 82 , 90 , 13];

document.getElementById('found-Arr')!.innerHTML = `Array : [${found_Arr}]`;

let found_num:number = 25;
if( found_Arr.includes(found_num) === true){
    document.getElementById('found-output')!.innerHTML = `${found_num} is Found in array`;
}else{
    document.getElementById('found-output')!.innerHTML = `${found_num} is Not Found in array`;
    
}

// Question-12 write a JavaScript program for print your name and write the no of total character.

let name:string = "Aastha"; 

document.getElementById('name')!.innerHTML = `Your Name is ${name}`;
document.getElementById('character-output')!.innerHTML = `The name ${name} has a total of ${name.length} charaters`;


// Question-13  write a JavaScript program given this output using replace concept.

let replace_string:string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

document.getElementById('normal-string')!.innerHTML = "Input : I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

document.getElementById('replace-string')!.innerHTML = `Output : ${replace_string.replaceAll('dog', 'cat')}`;

// Question-14  write a JavaScript program convert string to array.


let normal_string_2:string = "Hire the top 1% freelance developers";

document.getElementById('normal-string-2')!.innerHTML = `Input : ${normal_string_2}`;
document.getElementById('array-string-output')!.innerHTML = `Output : ${normal_string_2.split(' ')}`;


// Question-15  write a JavaScript program convert for array to string.

let array_string_input:string[] =  ['5', '32', 'Daniel'];

document.getElementById('array-string-input')!.innerHTML = `Input : [${array_string_input}]`;
document.getElementById('string-output')!.innerHTML = `Output : ${array_string_input.join(',')}`;

