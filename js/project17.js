function sorting(sampleArray) {
    sampleArray.sort((a,b)=> a-b);
    return sampleArray
}
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
let result=sorting(sampleArray);
console.log(result);