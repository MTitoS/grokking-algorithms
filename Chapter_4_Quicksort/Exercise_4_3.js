let findHighestNumber = (array) => {
    if (array.length === 0) {
        return -Infinity; //Any number will be more than -Infinity, so it doesn't break the code with a random number being added into the array (like a random 0)
    }

    //The code will iterate through these 2 variables till it gets to the last call, that will return the "current" variable, as it will be higher then -Infinity (last value assigned to highestInRest).
    //After it's iterated, then it will be going down the array (from right to left), so in the example below will be: 9, 8, 7, 6...
    //It will be mantaining in the stack the highest number (current or highestInRest depending on the values).
    let current = array[0]; 
    let highestInRest = findHighestNumber(array.slice(1)); 

    return current > highestInRest ? current : highestInRest;
}

console.log(findHighestNumber([1,2,3,4,5,100,6,7,8,9]));