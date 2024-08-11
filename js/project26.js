function Nested(arr1,arr2){
if(!(Array.isArray(arr1)&& Array.isArray(arr2))){
    return "both are not array please enter an array";
}
let arr1sorted=arr1.sort();
let arr2sorted=arr2.sort();

let arr1min=arr1sorted[0];
let arr2min=arr2sorted[0];

let arr1max=arr1sorted[arr1.length-1];
let arr2max=arr2sorted[arr2.length-1];


if(arr1min>=arr2min && arr2max >= arr1max){
    return true;
}
else{
    return false;
}




}


console.log(Nested([1,2,3,4],[0,6]));