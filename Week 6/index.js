const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomAnmol";
const app = express();
app.use(express.json());

const users = [];

 //   should return a random long string
    function generateToken() {
        let options = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
        let token = "";
        for (let i = 0; i < 32; i++){
            //use a simple function here
            token = token + options[Math.floor(Math.random()* options.length)]; 
        }
        return token;
    }

app.post("/signup",function (req, res){
    const username = req.body.username;
    const password = req.body.password;
 
    users.push({
      username: username,
      password: password
    })

    res.json({
        message : "you are signed up"
    })
    console.log(users)
})    

    //if(users.find(u => u.username === username)) {
    //   res.json()({
    //     message : "you are already signen up"
    //    })
    //    return
    //}
    
    //if(username.length < 5) {
    //    res.json({
    //        message : "your username is very small"
    //    })
    //    return;
    //}*/

app.post("/signin", function(req, res){

    const username = req.body.username;
    const password = req.body.password;
  
    // maps and filters
    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if (users[i].username == username && users [i].password == password){
            foundUser = users[i]
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET); // convert their username over to a jwt

        // foundUser.token = token ;
        res.json({
            token: token 
        })
    } else {
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
    console.log(users)
})
    //const foundUser = users.find(function(u){
    //    if (users[i].username == username && users[i].password == password){
    //        return true;
    //    } else {
    //        return false
    //    }   
    //}) 

app.get("/me", function (req ,res){
    const token = req.headers.token
    const decodedInformation = jwt.verify(token , JWT_SECRET);
    const unAuthDecodedinfo = jwt.decode(token,);
    const username = decodedInformation.username

    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username == username) { 
          foundUser = users[i]
        }
    }
    if (foundUser) {

    res.json({
        username : foundUser.username ,
        password : foundUser.password 
     })
   } else {
     res.json ({
        message : "token invalid"
     })
   }
})

app.get("/courses", function (req , res){
    //decode the user
    //const user = await db.query("SELECT * FROM users where token=" + req.header.token)
    const userid = jwt.verify(req.headers.token);
    
    //get their purchase
    
})

app.listen(3001);//that the http server is listening on port 30000