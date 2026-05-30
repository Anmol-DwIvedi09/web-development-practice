/* function sum(a , b) {
    return a + b;
}

let ans = sum(20 , 30 )
console.log(ans); */


/* function sum(a , b) {
    return parseInt(a) + parseInt(b);
}

let ans = sum(20 , 30 )
console.log(ans); */ 

/*function sum (n) {
 let ans = 0 
}

const ans = sum(10);
console.log(ans);*/

/*
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3); */

/*
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2); */


// functional arguments

/* function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(3, 2, multiply)) */



// Asynchronous code
/* const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
}); */

/*
const fs = require("fs");

function print(err,data){
    console.log(data);
}

fs.readFile("a.txt","utf-8", print); //asynchronous
fs.readFile("b.txt","utf-8", print); //asynchronous

function readfile(filepath, encoding,op){
    //read file
    op("Error!!","hi there")
} */



 // set timeout function for callback   
/*    
console.log("hi");

function timeout(){
  console.log("click the buttton!");

}

setTimeout(timeout, 5000);

console.log("welcome to loupe."); */

/*
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second(); */


// function between cpu oriented and I/O oriented
/*
function timeout(){
  console.log("click the button");

}

console.log("hi");

setTimeout(timeout,1000);

console.log("welcome to loupe.");

let c = 0;
for (let i=0;i<10000000000; i++){
    c = c + 1;

}

console.log("expensive operation done"); */



// settimeout in synchronous code 
/*
function setTimeoutSync(timeout){
    let startTime = new Date();
     while(1) {
         let currentTime = new Date ();
         if (currentTime.getTime() - startTime.getTime() > timeout){
          break;
    }
  }
}

setTimeoutSync(1000)

console.log("hi there"); */


// define claas 
/*
class Rectangle {
  constructor(width, height, color) {
     this.width = width;
     this.height = height;
     this.color = color; 
  }
  
  area() {
    const area = this.width * this.height;
    return area;
  }
  
  paint() {
     console.log("color is");
     console.log(this.color);
  }
  
  destroy() {
  }

}

const rect = new Rectangle(2, 4, "red")
const area = rect.area();
rect.paint();
console.log(area)  */

//some clases like date ,time map

/*
const map = new Map();
map.set( 'name',' Anmol');
map.set('age','21');

console.log(map.get('age')); */


// promisified class

/*
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback)*/


// one more example

/*
function afterDone (){
   console.log("5 seconds have passed");

}

setTimeoutPromisified(5000).then(afterDone);*/


//resolve
/*
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}*/


// simple promise function
/*
function random(resolve){ //resolve is also a function
   setTimeout (resolve , 3000);
}

let p = new Promise(random); // supposed to return u something eventually


// using the eventual value returned by the promise 
function callback(){
console.log("promise succeded" );
}
p.then(callback);*/


