let arr = [1,2,3,4,5,6,7,8,9,10]

// map
// reduce
// forEach

// map anipulates elements in an iterable object
arr = arr.map(el=> el = el * 2)
console.log(arr)

for (let index = 1; index < 30; index++) {
    let arr2 = arr.map(el=> el = el * index)
    console.log(arr2)
    console.log("===================")
}

// for each is just used to lop throughiterator object, but it can not be used to manipulate elements inside it.
arr = arr.forEach(element => {
   element = element * 2 
   console.log(element)
});
console.log(arr);

// reduce method is used to reduce the current array to one single value
arr = arr.reduce((accumulator, currentValue) =>{
    // console.log( accumulator , currentValue)
    return accumulator + currentValue
});

console.log(arr);

let arr2 = []
for (let index = 1; index < 101; index++) {
    arr2.push(index);    
}
console.log(arr2)

arr2 = arr2.reduce((accumulator, currentValue) =>{
    console.log( accumulator , currentValue)
    return accumulator + currentValue
});

console.log(arr2)

// how do you generate tables for n numbers
// how do you calculate sum of first n numbers using arrary.reduce method
