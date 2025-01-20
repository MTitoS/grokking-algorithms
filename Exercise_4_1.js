let sum = (array) => {
    return array.length === 0 ? 0 : array[0] + sum(array.slice(1));

    // let total = array[0];
    // array.shift();

    // if (array.length === 0) {
    //     return total;
    // } else {
    //     sum(array);
    //     return total + sum(array);
    // }
}

console.log(sum([2,4,6]));
console.log(sum([1,2,3,4,5,6,7,8,9,10]));
console.log(sum([]));