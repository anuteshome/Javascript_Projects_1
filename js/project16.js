function Array_Method(sampleArray) {

    sampleArray.pop();
    sampleArray.push(32);
    return sampleArray;
}


let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
let result=Array_Method(sampleArray);
console.log(result);