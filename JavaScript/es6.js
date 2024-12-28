//1.variables - var,let,const (refer to declaration.js)

//2.Arrow Functions 
// 1
arrowfun = (StudentDept) => {
    console.log(StudentDept);
}
arrowfun(["AIML","CSE","IT"])

// 2
arrowfun = (StudentDept) => {
    return StudentDept[0]
}
console.log(arrowfun(['AIML,CSE,IT',"AIML","CSE","IT"]))

//3.Destructuring operator
var marks=[90,95,98]
var[m1,m2]=marks
console.log(m1,m2);

//4.Ternary operator
a=10
ans=(a%2==0)?"Even":"Odd"
console.log(ans)

//5.Spread operator
arr1=[10,20,30]
arr2=[40, 50]
arr3=[...arr1,arr2] //[ 10, 20, 30, [ 40, 50 ] ]
arr3=[...arr1,...arr2]
console.log(arr3);

//6.Rest operator
// function restop

//7.Scope
// var a=10
// const pi=3.14
// console.log(pi);
// console.log(a);
// {
//     var a=5 // global scope
//     let pi=7
//     console.log(pi);
//     console.log(a);
// }
// console.log(pi);
// console.log(a);

//8.Hoisting
console.log(a) //undefined
var a=10
console.log(a) //10

// console.log(a) //error:Cannot access 'a' before initialization
// const a=3.14
// console.log(a)

// console.log(a) //error:Cannot access 'a' before initialization
// let a=10
// console.log(a)