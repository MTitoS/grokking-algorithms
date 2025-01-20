let countTheNumbers = (array) => {
    let howManyElements = 0;

    return array.length === 0 ? howManyElements : (howManyElements + 1) + countTheNumbers(array.slice(1));
}

console.log(countTheNumbers([2,4,6,4,13,613]));