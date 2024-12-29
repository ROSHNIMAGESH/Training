async function fun1(){
    setTimeout(()=>{
        return "hi"
    },5000)
    console.log(await "kec")
}
fun2=async()=>{
    console.log("Hello")
}
fun1().then((result) => {
    console.log(result);
    fun2();
});

//

// async function fun1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hi");
//         }, 1000);
//     });
// }
// const fun2 = async () => {
//     console.log("Hello");
// };
// (async () => {
//     console.log(await fun1());
//     fun2();
// })();
