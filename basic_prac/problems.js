//Reverse String

// const input1='javascript'

// let reverse=input1.split('').reverse().join('')  //Split covert string to array 
// console.log(reverse);


// let str1= "Ahmer Developer"
// let count=0
// for (const element of str1.toLowerCase()) {
//     if(element=='a'|| element=='i' || element=='e' ||element=="o"||element=="u"){
//     count++
//     }
// }
// console.log(count);


//find vowel 

// let str1= "Ahmer Developer"
// let vowel='aeiou'
// let count=0
// for (const element of str1.toLowerCase()) {
//  if(vowel.includes(element)){
//     count++
//  }
// }
// console.log(count);


//find vowel Advance way

// let str1= "Ahmer Developer"
// let vowel='aeoiu'
// const arr1=[...str1.toLowerCase()].filter((value)=> vowel.includes(value)).length
// console.log(arr1);


//largest/max number

// function compare(arr){
//     let largest= arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
//     }
//      return largest
// } 

// console.log(compare([3, 7, 2, 9, 5]));



const arr2=[3, 7, 2, 9, 5]
// console.log(Math.max(...arr2));


//Advance way of finding the Max number

// let maxValue=arr2.reduce((accumulator, currentValue)=>{
// return currentValue>accumulator? accumulator=currentValue: accumulator
// })
// console.log(maxValue);



let str='madam'
// let polindrom=str.split("").reverse().join("")
// console.log(str==polindrom);



//RemoveDublication
// let arDub=[1, 2, 2, 3, 4, 4, 5]

// let arDub=["AHmer",'altaf','ahmer','wasif']
// let sorted=[...new Set(arDub.map((value)=> value.toLowerCase()))]
// console.log(sorted);


//find the second Largest

// let ar=[10, 5, 8, 20, 15]
// let largest= -Infinity
// let second= -Infinity

// for (const element of ar) {
//     if(element> largest){
//         second=largest
//         largest=element
//     }
//     else if(element>second && element!==largest){
//         second=element
//     }
// }

// console.log(second, largest);


//Capitalize first letter of each word

let smallString="i am learning javascript"
for (const element of smallString.trim()) {
   element.split(" ")
}
console.log(smallString);
  


