// function oddReverse(arr) {
//     // Return an array containing all the odd indices starting from the end
//     // Your code here
//     let oddArr = [];
//     for(let i = arr.length - 2; i >= 1; i-= 2){
//         oddArr.push(arr[i]);
//     }
//     return oddArr;
// }

// let arr = [1, 2, 3, 4]
// //let arr = [1, 2, 3];
// console.log(oddReverse(arr), '\n');

// function oddIndices(arr) {
//     // Return an array containing all the odd indices in the array
//     // Your code here

//     let newArr = [];
//     for( let i = 1; i < arr.length; i+= 2){
//         newArr.push(arr[i]);
//    }
//    return newArr
// }

// console.log(oddIndices(arr), '\n');


function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let firstHalf = [];
    for(let i = 0; i <= (arr.length / 2) -1; i++){
        firstHalf.push(arr[i]);
    }
    return firstHalf
}

let arr = [1, 2, 3, 4, 5, 6 ,7, 8, 9];
console.log(firstHalf(arr), '\n');
