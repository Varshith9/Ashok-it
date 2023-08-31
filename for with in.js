// for in we can use in object oreinted programing 
//for in : it can iterate through the object and we can get  the acess of all the keys of the object properties.
// syntax :for(<varibale declaration>in<object name>){
//}
var obj = {
    name: "varshith",
    university: "UD",
    graduvation_date: "may 2023",
    gpa: 3.42,
}

for(var x in obj){
    console.log(x,":",obj[x]);
}