let findHighestNumber = (array) => {
    let number;

    if (array.length === 0) {
        return number;
    } else if (number > array[0]) {
        number += findHighestNumber(array.slice[1]);
    } else {
        findHighestNumber(array.slice[1]);
    }

    //number > array[slice1]

    //return array.length === 0 ? number :
}

console.log(findHighestNumber([1,2,3,4,5,6]));