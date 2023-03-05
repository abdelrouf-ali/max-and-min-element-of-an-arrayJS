

let array = [];

array[0] = prompt("Enter the first number");
array[1] = prompt("Enter the Second number");
array[2] = prompt("Enter the Third number");


let min = Math.min(...array);
let max = Math.max(...array);

alert( "min: " + min + "     max:  " + max );