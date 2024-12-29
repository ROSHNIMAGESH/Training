//Location Finder
function isTimeConsumption(t){
    time=1000
    return time<=t
}

function locationFinder(){
    train = 7
    return new Promise((resolve,reject)=>{
        if(train==7){
            resolve("Train has arrived")
        }
        else{
            reject("Train hasn't arrived")
        }
    })
}
locationFinder().then((resolvedMsg)=>{
    console.log(resolvedMsg)
}).catch(function (rejectedMsg){
    console.log(rejectedMsg)
})

