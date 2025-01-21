let countTheNumbers = (array) => {
    let howManyElements = 0;

    //If the array isn't fully iterated, then add 1 more to the variable counting the elements and then call the function again.
    return array.length === 0 ? howManyElements : (howManyElements + 1) + countTheNumbers(array.slice(1));
}

console.log(countTheNumbers([2,4,6,4,13,613]));