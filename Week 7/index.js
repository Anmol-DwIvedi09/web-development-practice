const express = require("express");
const  { UserModel, TodoModel } = require ("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "asdasd123@123";

mongoose.connect("mongodb+srv://anmoldwivedi292:<db_password>@cluster0.7i6q2gq.mongodb.net/");

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res){
     const requiredBody = z.object({
        email: z.string (). min(3). max(100). email(),
        name: z.string (). min(3). max(100),
        password: z.string (). min(3). max(30)
     })


    // const parsedData = requireBody.parse(req.body);
    const ParsedDataWithSuccess = requireBody.safeParse(req.Body);

    if ( !parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect format ",
            error: parsedDatawithSuccess.error 
        })
        return
    }

    const email = req.body.email;  // string @, 5
    const password = req.body.password;  // string, 10 char, 1 spl, 1 uppercase, 1 lowercase
    const name = req.body.name;  // string
   //promisify the fs function call 


    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    });

    res.json({
        message : "you are signed up" 
    })
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UsermModel.findOne({
        email: email,
    })
    if(!response){
       res.status(403).json({
           message : "User does not exist in our db"
       })
       return
    }
    const passwordMatch = bcrypt.compare(passord, response.password);

    if(user) {
        const token = "jwt.sign"({
            id: user._id. toString()
        }, JWT_secret );
        res.json({
          token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", function(req, res){
   const userId = req.userId;
   const title = req.body.itle;

   TodoModel.create({
      title,
      userId
   })

   res.json({
         userId: userId
   })
});

app.get("/todos", function(req, res){
   const userId = req.userId;
   const todos = TodoModel.find({
      userId: userId
   }) 

   res.json({
    userId: userId
   })
});

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData) {
        req.userId = decodedData.userId;
        next();
    }else {
        res.status(403).json({
            message : "incorrect credentials"
        })
    }
}

app.listen(3000);