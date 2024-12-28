function fun(...input){
    return Math.max(...input)
}
console.log(fun(5,10,15));

//the above using spread
nums=[5,10,15]
console.log(Math.max(...nums))

//Rest->combains elements into an array/object
//Gathers data

//Spread->expands elements from an array/object
//Spreads data