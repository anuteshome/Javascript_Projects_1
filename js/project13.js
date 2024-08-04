function sum_array(arr) {
 let sum=0;

 for(let i=0;i<=arr.length-1;i++){
    sum=sum+arr[i]
 }
    return sum;

}

let arr= [5, 6, 99, 8, 76, 4, 68, 44];
let sum_result=sum_array(arr);
console.log(sum_result);