function even_index(arr) {
   for(let i=0;i<=arr.length-1;i+=2){
    console.log(arr[i])
   }
}


let arr=[5, 6, 99, 8, 76, 4, 68, 44];
let fun=even_index(arr);
console.log(fun)