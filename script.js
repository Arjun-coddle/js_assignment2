
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

//1. ​Console this star pattern
for (let i = 1; i <= 5; i++) {
    let space = '';

    for (let j = i; j < 5; j++) {
        space += ' ';
    }
    for (let k = 0; k < i; k++) {
        space += '* ';
    }
    console.log(space);
}



//2. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and //console each item by using switch statement.

a = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
a.map(items => {
    switch (items) {
        case 'car':
            console.log("car");
            break;
        case 1:
            console.log("1");
            break;
        case 5:
            console.log("5");
            break;
        case 'js':
            console.log("js");
            break;
        case 'node js':
            console.log("node js");
            break;
        case 'mysql':
            console.log("my sql");
            break;
        case 'sql':
            console.log("sql");
            break;
        default:
            console.log('Unknown Item');
    }
})



//3. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.
let numbers = [1, 2, 3, 4, 5, 6];

let deleteIndexes = (array) => {
    return () => {
        array.splice(4, 1);
        array.splice(1, 1);
        return array;
    };
};

let newArray = deleteIndexes(numbers);

console.log(newArray());



//4. Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)

class array4 {
    constructor(array) {
        array.forEach(element => console.log(element));
    }
}

const arr = [1, 2, 3, 4, 5];
const print = new array4(arr);



//5. Create a self-invoking function to console you name.
(function () {
    console.log("Arjun");
})();
