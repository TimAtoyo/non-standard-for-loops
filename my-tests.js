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

let arr = [1, 2, 3];

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let firstHalf = [];
    let midleIndex = Math.floor(arr.length/2)
    //console.log("This is math.floor"+midleIndex)
//console.log(`mid index ${midleIndex}`);
    for(let i = 0; i <= midleIndex; i++){
        //console.log(arr[i]);
        firstHalf.push(arr[i]);
    }
    //console.log(firstHalf)
    return firstHalf
}


console.log(firstHalf(arr), '\n');
