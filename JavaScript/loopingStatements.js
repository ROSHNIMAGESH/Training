a=[10,20,30,[40.4,50.5],"a","KEC",true]
console.log(a);

//for...in
for(var i in a)
{
    console.log("Element at",i,"is",a[i]);
}
for(var j in a[3])
{
    console.log("Element of inner array at",j,"is",a[3][j]);
}

//for...of
for(var i of a)
{
    console.log(i);
}
for(var j of a[3])
{
    console.log(j);
}

//foreach

//1
array=[10,20,30]
array.forEach((element,index)=>{
    console.log("Element is",element,"and Index is",index)
})

//2
a={
    "firstname":"Roshni",
    "lastname":"Magesh",
    "age":20
}

for(const key in a){
    console.log(key,a[key])
}

for(const [key,element] of Object.entries(a)){
    console.log(key,element)
}

Object.entries(a).forEach(([key,value])=>{
    console.log(key,value)
})