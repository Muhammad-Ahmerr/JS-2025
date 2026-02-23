// String Operation

const myStr="this is the main guide line of my line"

// console.log(myStr.concat("...."));

// let ar=new Array(2,3,4,4)
// console.log(ar.splice(0,3,"delted"));

// console.log(ar);
// console.log(ar.join("")); //this also remove the , by using ""

// let ar3=ar2

// ar3.push(10)
// console.log(ar2);

// ar2[3]=0
// ar2.reduce   
// console.log(ar2);

const nameOfArray=['Wasif','zaid','haris','ahmer','zubair']
// console.log((nameOfArray.toString)..sort());

// const result=(nameOfArray.map(name=>name.toLowerCase()).sort()).reverse()  //this will make all the elements lower than sort acending then reverse() make it decending

// console.log(nameOfArray.reverse());

// const numberAr=[70,10,20,30,5,12]
// let result=numberAr.sort((a,b)=>b-a)  //a-b for ascending b-a for decending numbers
// console.log(result);

// console.log(nameOfArray.every);

// const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];

// console.log(items.sort((a,b)=> a.localeCompare(b,'fr))); //local compare is used to compare every language and number format

// console.log("ä".localeCompare("a", "de"))

const newSt="the  regular expression is the  of the jungle"

// console.log(newSt.matchAll("key"));


// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z]/g;  // match a-z/A-Z character in the String 
// const found = (paragraph.match(regex)).sort();

// console.log(found);

// const para="the following is the key success"
// const reg="key"               //match gives the position index of the element 
// console.log(para.match(reg));

// const para="the key following is the key success"
// const reg="key"               //search also gives the position index of the element 
// console.log(para.search(reg));



//Normalize++++++++++++++++++++++++++++++++

// const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
// const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

// console.log(`${name1}, ${name2}`);
// console.log(name1===name2);  //False
// console.log(name1.length===name2.length);//False



// const name1NFC= name1.normalize('NFC')  //by default NFC means 1st form applied
// const name2NFC= name2.normalize('NFC')

// console.log(`${name1NFC}, ${name2NFC}`);
// console.log(name1NFC===name2NFC);//True
// console.log(name1NFC.length===name2NFC.length);//True

// ++++++++++++++++++++++++++++++++++
// padStart

const number1="thermostate";

// console.log(number1.padStart(13,'s'));  //need to specify the total lenght of string first (lenght is always start from 1)

// console.log(number1.padEnd(13,"s"));
// console.log(number1.padStart(13,"s"));

// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maxpad=last4Digits.padStart(fullNumber.length,'*')  //for card **********5581 logic 
// console.log((maxpad));


// const fullNumber="2983797320383"
// const last4Digits=fullNumber.slice(-4)
// const maxPad=last4Digits.padEnd(fullNumber.length,'*')
// console.log(maxPad);


const valueString= new String("Ahmer")
// console.log(typeof valueString);//Object String
// console.log(valueString);// gives output [String: "Ahmer"]

// console.log(valueString.valueOf()); //it gives the value of String Object


const strr="the name of thrown is the filling"

// console.log(strr.split(" ")); //it always return an array
// console.log(strr.split("o")); 
// console.log(strr.split("o",2)); //it will gives results according to limit and end with only result not full string


// String Operation ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const testString="Ahmer@gmail.com"

// console.log(testString.at(6));  //g
// console.log(testString.charAt(2))// m
// console.log(testString.concat(" Altaf"));// concate
// console.log(testString.endsWith("com"));//true
// console.log(testString.includes('@',5));//true
// console.log(testString.lastIndexOf('a')); //8
// console.log(testString.localeCompare("aHmer@gmail.com")); //without case sensitive
// console.log(testString.localeCompare("ahmer@gmail.com", "en", {sensitivity: "base"})); //case-sensitive
// console.log(testString.match('com')); //find the element at index
// console.log(testString.search('@')); //gives only the index
// console.log(testString.padStart(17,"*7"));  //add in the start of string


//ah******.com (with slice())

// const hiddens=testString.slice(0,2)+"*****"+testString.slice(-4)   //ah******.com

// console.log(hiddens);
// const hiddens=testString.slice(0,2)+"*".repeat(testString.length-4) + testString.slice(-4) //this is the complete ah***********.com logic
// console.log(hiddens);


//Repeat()

// console.log((testString+" ").repeat(2)); //in repeat with space

// console.log(testString.replace("@","-"));  //replace element
// console.log(testString.replaceAll("m",'')); //replace all
// console.log(testString.search("@")); //gives index
// console.log(testString.split("@")); //return array [ 'Ahmer', 'gmail.com' ]
// console.log(testString.split('m',2)); // [ 'Ah', 'er@g' ]
// console.log(testString.startsWith("A")); //true

// console.log(testString.substring(2,6)); //mer@ //range not included
// console.log(testString.valueOf());  //return string also could be used to covert array to string



// Array Operations


// #copywith (Array)

const ar1=[20,10,30,43,21,2,100]
const ar2=['ahmer','wasif','haris','rauf','altaf']  
// console.log( ar1.concat(ar2));   //concate 2 array witout nested 

// const ar3=[...ar1,...ar2]//spread operator concate

// console.log([...ar1,...ar2]);

// console.log(ar1.at(0)); //index value
// const ar3=ar1.copyWithin(0,4,5)  //this is used to copy the elements of array to override the target element
// console.log(ar3);



// #Entries(Array)


// const ar3=ar1.entries()   //it returns the object of array in term of key,value pair [ 0, 20 ]

// for (const result1 of ar3) {
//     console.log(result1);
// }



// #Every() in Array



// let courses=[
//     {
//         name: "Ahmer",
//         language: 'javaScript',
//     },
//     {
//         name: "wasif",
//         language: 'javaScript',
//     },
//     {
//         name: "haris",
//         language: 'Python',
//     }
// ]

// let student=courses.every(course=> course.language=="javaScript")  //Also every needs callBack() and return Boolean
// console.log(student);



// #Fill(Array)

// console.log(ar1.fill(1,2,4)); //it fill the value in the array and return the modified arry
// console.log(ar1.filter(5,1,4));

// function creatFill(length,value){
//     return new Array(length).fill(value)
// }

// let a1=creatFill(5, 8)    //[ 8, 8, 8, 8, 8 ]
// console.log(a1);

const arFilter=[4,2,4,1,7,3]

// let arFilter2=arFilter.filter((value)=>{   //it doesn't change the orignal array but return the array
//     return value>5
// })
// console.log(arFilter2);

// #Map(Array)

// let arMap=[23,32,4,354,4]
// let mapcheck=arMap.map((value,index,array)=>{
//     console.log(value,index, array);
    
//     return value
// })
// console.log(mapcheck);

// #Reduce(Array)

// const arReduce=[1,3,2,1,4,1] //24    it comparison 1st 2 then 2nd and 3rd then 3rd and 4th and so on..........

// let reduceCheck=arReduce.reduce((value1,value2)=>{
//     return value1*value2
// })

// console.log(reduceCheck);




//ForEach(Array)
// const arrForEach=[3,2,11,4,5,22,3]
// let sum=0
// arrForEach.forEach((value)=>{
//      sum+=value
// })

// console.log(sum);   //sum all the value of array




// # custom made filter()

// const arrayNumber=[44,2,11,32,34,4,2,1]

// arrayNumber.filtering=function(compar){    
//     const ans=[]
// for (const element of this) {
//     if(compar(element)){    //((num)=> num>5)(element)
//      ans.push(element)
//     }
// }
// return ans
// }

// let finalFilter=arrayNumber.filtering((num)=> num>5) // pass the value as function(compar)
// console.log(finalFilter);



//Real world filter()

const products= [
{ id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
{ id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
{ id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
{ id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
{ id: 5, name: "Keyboard", category: "Electronică", price: 75, inStock: true },
{ id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
{ id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock:true}
]

// let finalFilter=(products.filter((value)=> value.price<200)).sort((a,b)=> a.price-b.price)   //filter and sorting the values in ascending order
// console.log(finalFilter);



//Real World Map()
// products.map((value)=>{
// console.log(`Name: ${value.name} and Price: ${value.price} `);  //this return String 
// });

// let getMap=products.map((values)=>({name:values.name, price: values.price}))
// console.log(getMap);


let totalPrice=products.reduce((accumulator,currentValue)=>{
    if(currentValue.inStock==false)
        return accumulator+ currentValue.price
    else
        return accumulator
},0
)

console.log(totalPrice);
