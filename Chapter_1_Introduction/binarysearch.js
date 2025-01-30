const checkNumbers = (array, number) => {
    let top = array.length - 1;
    let bottom = 0;
    let middle = (top + bottom) / 2;

    while (bottom <= top) {
        middle = (parseInt(middle));

        if (array[middle] == number) {
            console.log(`You found the ${number} in the index ${middle}`);
            return middle;
        }

        if (array[middle] < number) {
            bottom = middle + 1;
            middle = (bottom + top) / 2;
        }

        if (array[middle] > number) {
            top = middle - 1;
            middle = (bottom + top) / 2;
        }
    }

    return undefined;
}

let arrayOfNumbers = [1, 3, 4, 5, 7, 9, 11, 12, 21];

console.log(checkNumbers(arrayOfNumbers, 21));