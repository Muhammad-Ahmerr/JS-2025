const ar1=[0,1,2,3,4,5,6,7,8]
const st1="javascript"
// console.log(ar1[3]);
// console.log(ar1.includes(4));
// console.log(ar1.indexOf(2));


// ar1.push(5) //add the element 
// ar1.unshift(2) //add element in the start
// ar1.shift()  //remove element from the start

// ar1.pop()  //remove element from the end
// ar1.reverse() //reverse
let newar1=ar1.join() //covert it into string
// console.log(newar1);

// console.log(st1.slice(-5,-2)); //it doesn't include last index & for positive it start from 0 and negative -1
// console.log(ar1);
const months=['jan','feb','march','april']
console.log(months.splice(1,2,'deleted')); // (syntex: startnumber, deletecount, replaceItem) it manupulate the orignal array means splice part cut from orgial array also it include the range in slice not
// console.log(ar1);
console.log(months);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const classicCar=["Ferari","Bmw","Mercedes"]
const traditionalCar=["Suzuki","kia","mehran"]
// classicCar.push(traditionalCar) // it give nested array
// console.log(classicCar);
// console.log(classicCar[3][0])


const totalCar=[...classicCar,...traditionalCar] //spread operator to concate to arrays with nested
// console.log(totalCar);

const anotherArray=[2,3,1,[5,3,1],7,[0,3,2,[2,1,4,2]]]

// console.log(anotherArray[5][3][1]);//1 way accessing nested array
const newAnotherArray=anotherArray.flat(Infinity) // in which you give number of debth and Infinity as well
// console.log(newAnotherArray);

// console.log(Array.isArray(anotherArray)); //true
// console.log(Array.from('anotherArray')); //is used to make string/object to array
// console.log(Array.from({namee: "ahmer",age:21, location:"lahore"})); //it give empty array because didn't understand to convert we need to tell him whether keys/values

const score1=100
const score2=200
const score3=300

// console.log(Array.of(score1,score2,score3));

