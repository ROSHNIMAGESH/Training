//Assignment
a=10
console.log(a)

//Arithmetic 
a=10
b=5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Relational
a="10"
b=10
console.log(a==b)
console.log(a===b)

//Logical
a=10
if(a%2==0 && a>=0)
{
    console.log("Positive Even")
}
else{
    console.log("Not positive Even")
}

//Bitwise
a=10
b=-10
console.log(a<<2)
console.log(a>>2)
console.log(b>>2) //preserves the sign (extends the leftmost bit for negative numbers)
console.log(b>>>2) //does not preserve the sign (fills with zeros)

//Ternary
a=10
a%2==0?console.log("Even"):console.log("Odd")

//Unary
a=2
b=2
console.log(a++)
console.log(++b)
