/******************************/
//Level 1 Simple Array Sum
/******************************/
// Input: An array of integers
// Output: the sum of all the integers in the array
// Edge cases:
// Restrictions: 0 < n, ar[i] <= 1000


const simpleSumArr = (array) => {
    let summation = 0;
    array.forEach(num => {
        summation = summation + num
    });
    return summation
};

console.log(simpleSumArr([1,2,3,4,5,6]));
