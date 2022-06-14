//at()

 let arr = [1,2,3,4,5];

let index = -2;

  b = arr.at(2);

  let index = arr.at(-3)

  console.log(index);

 //concat()

  let arr1 = [2,3,4,5];

  let arr2 = [5,6,7,8];

  let joined = arr1.concat(arr2);

  console.log(joined);

 //copywithin()

  let arr = ["blue","red","white","green","yellow","orange"];

  let z = arr.copyWithin(2,0);

  console.log(z);

//fill()

 let fruits = ["apple","banana","mango"];

  let d = fruits.fill("cherry",1);

  console.log(d);

//foreach()

 let numbers = [1, 3, 4, 9, 8];

 function computeSquare(element) {
      console.log(element+1);
  } 
  numbers.forEach(computeSquare);

//includes()

 let arr = ["java","c","c++"];

 let z = arr.includes("java");

 console.log(z);

//index of

 let arr = ["blue","red","orange","red"];

 let z = arr.indexOf("orange");

 console.log(z);

