function fun1(msg1,fun){
    console.log(msg1)
    fun("Calling fun2")
}
function fun2(msg2){
    console.log(msg2)
}
fun1("Calling fun1",fun2)