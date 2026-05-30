/*
const express = require("express");

const app = express();


let requestCount=0;

function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    console.log("Total number of requests = " + requestCount);
    res.json({
        message:"I ended the request early"
    });
    next()
}

function realSumHandler(req,res){
    console.log("control reached the real handler")

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a + b,
    });
}
app.use(requestIncreaser)
// better routing , add database , middleware

app.get("/sum",  realSumHandler );
  

app.get("/multiply",  realSumHandler );


app.get("/divide",  realSumHandler );


app.get("/subtract",  realSumHandler );

app.get("/admin", function(){
    res.json({
        message :"Total number of requests on the server is "+ requestCount
    })
});



app.listen(3000);
*/

// map , filter , arrow fns

/*
function sum (a, b) {
    return a + b ;
}

const sum = (a, b) => {
    return a + b;
}

app.get("/", (req, res) =>{

})

app.get("/", function (req, res){

})

const ans = sum (1, 2);
console.log(ans);
*/

/*
const input = [1, 2, 3, 4, 5]

const ans = input.map(function(i){
    return i * 2
});
console.log(ans);
*/

//create a map function that takes two inputs
//an array, and a transformation callback/fn
//and transforms the array into a new one using 
//the transform fn

//filtering

/*
const arr = [1, 2, 3, 4, 5]
//ans

function filterLogic(n){
    if(n%2 == 0){
    return true;
    } else {
    return false; 
    }
}

const ans = arr.filter (filterLogic);
console.log(ans);
*/

// axios vs fetch
/*
function main() {
   fetch("https://sum-server.100xdevs.com/todos")
   .then( async response => {
    const json = await response.json();
    console.log(json.todos.length);
    // await response.text()
   })
}


const axios = require("axios");

//post
async function main() {
   const response = await fetch("https://www.toptal.com/developers/postbin/1706261117587-5522551864851", 
   {
    method : "POST",
    body : {
        username : "harkirat",
        password : "1234567"
    },
    headers: {
        "Authorization" : "Bearer 123" 
     }
   },
);
    const textualData  = await response.text();
    console.log(textualData);
}

//post
//change request method 
//send body
//send header
async function main() {
   const response = await axios.post("https://www.toptal.com/developers/postbin/1706261117587-5522551864851", {
     username : "harkirat",
     password : "1234567",
    },    
    {
    headers: {
        Authorization: "Bearer 123" ,
     },
   },
 );
    console.log(response.data);
}

main();

*/