// submitForm("Form Submitted Successfull",databaseSharing)
// function databaseSharing(){
//     console.log("Data strored successfully");
// }
// function submitForm(formMsg,dbs){
//     dbs()
//     console.log(formMsg);
// }


function databaseSharing(){
    console.log("Data strored successfully");
}
function submitForm(formMsg,dbs){
    setTimeout(()=>{
        dbs()
        console.log(formMsg);
    },10000)
}
submitForm("Form Submitted Successfull",databaseSharing)
