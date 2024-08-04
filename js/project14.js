function sub_array(arr) {
    let sum_even=0;
    let sum_odd=0;
    let sum;

    for(let i=0;i<=arr.length-1;i++){
if(arr[i] % 2==0){
    sum_even=sum_even+arr[i];
 
}
else if(arr[i]% 2!=0){
    
    sum_odd=sum_odd+arr[i];
}
else{
    console,log("invalid entery")
}
    }
    console.log(sum_even)
    console.log(sum_odd)
sum=sum_even-sum_odd;
return sum

}

let arr=[5, 6, 99, 8, 76, 4, 68, 44];
let result=sub_array(arr);
console.log(result);
