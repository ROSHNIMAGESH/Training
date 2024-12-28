//without argument without return type
fun = () => {
    a=10
    ans=(a%2==0)?"Even":"Odd"
    console.log(ans);
}
fun()

//without argument with return type
fun = () => {
    a=10
    ans=(a%2==0)?"Even":"Odd"
    return ans
}
console.log(fun())

//with argument without return type
fun = (a) => {
    ans=(a%2==0)?"Even":"Odd"
    console.log(ans);
}
fun(10)

//with argument with return type
fun = (a) => {
    ans=(a%2==0)?"Even":"Odd"
    return ans
}
console.log(fun(10))