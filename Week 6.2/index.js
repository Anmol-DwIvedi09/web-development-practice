const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRET = "Anmol123";

const app = express();
app.use(express.json());

app.use(cors({
    domains : []
}))
const users = [];

function logger(req, res, next){
    console.log(req.method + "request came");
    next();
    console.log(req.method + " the request has ended ");
}

// localhost:3000 , cors
app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, function (req, res,){
   const username = req.body.username
   const password = req.body.password
   users.push({
    username: username,
    password: password
   })

   // we should check if a user with this username already exixts

   res.json({
      message:"you are signed in"
   })
})

app.post("/signin",logger, function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0 ; i < users.length; i++ ){
        if (users[i].username === username && users[i].password == password){
         foundUser = users[i]
        }
    }
    if (!foundUser){
        res.json({
            message : "credentials incorrect"
        })
        return
    }else{
        const token = jwt.sign({
            username : foundUser.username,
            iat: new Date().getTime(),
            name: "Anmol"
        }, JWT_SECRET);
        res.header("jwt", token);

        res.header("random", "Anmol");

        res.json({
            token: token
        })
    }
})

function auth(req, res, next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        // req = {status, headers...., username, password, userfirstName}
        next()
    }else{
        res.json({
            message: "you are not logged in"
        })
    }
}

app.get("/me",logger, auth, function (req, res) {
      const currentUser = req.username;
   // const token = req.headers.token;
   // const decodedData = jwt.verify(token, JWT_SECRET);
   // const currentUser = decodedData.username

        for (let i = 0; i<users.length; i++){
            if (users[i].username === currentUser){
                foundUser = users[i]
            }
        }
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    })

/*app.get("/todo", auth, function (req, res) {

    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);
     
     if(decodedData.username);
    
})

app.post("/todo", auth, function (req, res){

})  

app.post("/todo", auth, function (req, res){

})

app.delete("/todo", auth, function (req, res){

})
*/
app.listen(3000);
