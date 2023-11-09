function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here

    let newArr = [];
    for( let i = 1; i < arr.length; i+= 2){
        newArr.push(arr[i]);
   }
   return newArr
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr = [];
    for( let i = 1; i < arr.length; i+= 2){
        newArr.push(arr[i]);
   }
   return newArr.reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let powerArr = [];
    for(i = 1; i < arr.length; i*=2) {
        powerArr.push(arr[i]);
    }
    return powerArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let powerOfNArr = [];
    for(let i = 1; i < arr.length; i *= n){
        powerOfNArr.push(arr[i]);
    }
    return powerOfNArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let firstHalf = [];
    for(let i = 0; i <= (arr.length / 2); i++){
        firstHalf.push(arr[i]);
    }
    return firstHalf
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let secHalf = [];
    for(i = (arr.length /2)-1; i < arr.length; i++){
        secHalf.push(arr[i])
    }
    return secHalf;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
