function test(a,b) {
    for(i=a;i<=b;i++){
        if(i%3==0){
            console.log(i +" is Divisble by 3!")
        }
        else if(i%3!=0){
            console.log(i +" is not Divisble by 3!")
        }
    }

}

let value=test(5,25);
console.log(value)