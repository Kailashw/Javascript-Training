// Question : print all the even numbers from 1 to 20.
// 1. Loops
// > For 
// > for/in 
// > for/of  
// > while
// > do/while 

// starting index; ending index (condition); operation
for (let index = 1; index < 21; index++) {
    if(index%2==0){
        // console.log(index);    
    }
}

let index = 1; 
while (index<21) {
    if(index%2==0){
        // console.log(index);    
    }
    index++;
}

let i=1;
do {
    if(i%2==0){
        // console.log(i);    
    }
    i++;
} while (i<21);


const arr = [10,20,30,40,50,60,70,80,90,100]
const object = {
    name : 'sravanthi',
    age : 29,
    city: 'hyderabad',
    qualification:'BTech'
}

for (const key in arr) {
    // console.log(arr[key])
}

for (const key in object) {
    // console.log(`${key} ==> ${object[key]}`)
    if(key==='name'){
        // console.log(object[key])
    }
}

const arrObj = [
    {
        name : 'sravanthi',
        age : 29,
        city: 'hyderabad',
        qualification:'BTech'
    },
    {
        name : 'Kailas',
        age : 28,
        city: 'bidar',
        qualification:'MTech'
    },
    {
        name : 'Radhana',
        age : 29,
        city: 'banagalore',
        qualification:'MCA'
    },
    {
        name : 'Mahesh',
        age : 38,
        city: 'Vizag',
        qualification:'BSC'
    }
]

// use this when you have array of objects.
for (const obj of arrObj) {
    // console.log(obj.name, obj.age)
}

// for/while/dowhile can be used to print between range, print an array/object/array of objects
for (let index = 0; index < arrObj.length; index++) {
    // console.log(arrObj[index].name, arrObj[index].age)
}


const arrList = [10,20,30,40,50,60,70,80,90,100]

for (let index = 0; index < arrList.length; index++) {
    // continue is to used to skip the values
    if(arrList[index] === 30){
        continue;
    }
    // console.log(arrList[index])    
    // break is to used to exit the loop
    if(arrList[index] === 70){
        break;
    }
}


for (let index = 1; index < 11; index++) {
    // console.log( (index%2==0) ? `${index} is a even number` : `${index} is a odd number`);
}


const HOURS = 1;

// console.log(`Number of seconds in ${HOURS} hours is ${HOURS * 60 * 60}`)


function getPremeter(len,bdt){
    return  2 * (len+bdt);
}

console.log(`permeter of given recatngle is ${getPremeter(20,30)} mtr`)
console.log(`permeter of given recatngle is ${getPremeter(200,30)} mtr`)
console.log(`permeter of given recatngle is ${getPremeter(10,30)} mtr`)