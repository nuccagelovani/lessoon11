let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche', 'audi'];
 
for (let i = 1; i < 5; i++) {
    console.log(cars[i]);
}

let names = ['giorgi', 'beqa', 'luka', 'ani'];

for (let i = 0; i < names.length; i ++) {
    if (names[i].length < 3 ) {
        console.log(names[i]);
    }   
}

let numbers = [1,2,3,4,5,6,7]; 

for (var i = 0; i < numbers.length; i ++) {
    if (numbers[i] % 2 == 0 ) {
        console.log(numbers[i]);
    }
}

let number = [ 15, 67, 100, 5, 7, [80, 500] ]; 

console.log(number[5][2]);


var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };

console.log(person.eyecolor) ;


let array = ['giorgi', 'tika', 'qeta', 32 , 33];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};






