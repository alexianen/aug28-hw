//Ex. 5 for loop

let numbers = [];

for (let i=10; i<=30; i+=2) {
    numbers.push(i);
}
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

//Ex. 6

let numbers2 = [24, 73, 48, 55, 81, 219, 104];

const average = numbers2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0) / numbers2.length;

console.log(average.toFixed(2));


