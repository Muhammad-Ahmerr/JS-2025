// the 2 ways in which the data store and access in memory like call by function/call by Reference  
//#Premitive   (call by Value) it means whenever you use it data it will be as copy not actuall reference then every changes will be copy 

//Also JavaScript is a dynamically typed language because we didn't provide its type like String

//7-types:
//String, Number, boolean, bigInt, Symbol, undefined,null

const id=Symbol("123")
const anotherID=Symbol("123")

// console.log(id===anotherID);


//#NonPremitive (Reference Type)
//Array, Objects and functions


const data =["phislosophy", "marval", 123, true]


// console.log(data[0]);

let myObj={
    name: "Ahmer",
    age: "27",
    city:"Multan"    
}

// console.log(myObj["name"]);  //both are fine for calling the objects keys
// console.log(myObj.name);



let ahm= function(){


}

//if you want to become a JS expert then you need to know the JS Objects and web events

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//How memory works
// Stack (Premitive (memory copy)), heap(noPremitive (refrence))

let grade= "Blue"

let newGrade= grade
newGrade="Pink"
// console.log(newGrade);  //it give me copy and changes made in copy

let myDetail={
    namee: "Ahmer",
    age: 27,
    class: "pink"

}

let newDetails=myDetail
newDetails.namee="wasif"
// console.log(newDetails["namee"]);  //it changes the orignal refrence value
// console.log(myDetail["namee"]);



// let obj1={
//     location: "Johar Town",
//     country:"Pakistan"
// }

// let obj2=obj1
// obj2.location="Multan"

// console.log(obj1.location);


