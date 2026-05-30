/*
const express = require ("express");

const app = express();

. function sum(n) {
    let ans =0;
    for(let i=1;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}

    app.get("/", function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi your ans is " + ans);
})

    app.get("/", function(req,res){
    throw new Error("asdasdsda");
})

app.listen(3000);


const users = [{
    name: "john",
    kidneys:[{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req,res) {
    const johnKidneys= users[0].kidneys;
    const numberOfKidneys= johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (i = 0; i<johnKidneys.length; i++ ){
        if(johnKidneys[i].healthy){
           numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
       msg:"Done!"
    })
})

app.put("/", function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//removing all the unhealthy kidneys 
// you shoukd return a 411
//only if atleast one unhealthy kidney is there do this ,else return 411

app.delete("/", function(req, res){
    if( isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for( let i=0; i<users[0].kidneys.length; i++){
             if(!users[0].kidneys[i].healty){
             newKidneys.push({
                healthy:true
          })
        }
    }
        users[0].kidneys = newKidneys;
        res.json({msg:"done"})
    } else {
        res.status(411).json({
        msg:"you have no bad kidneys"
        });

    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length;i++){
     if( !users[0].kidneys[i].healthy){
        atleastOneUnhealthyKidney=true;
      }
    }
    return atleastOneUnhealthyKidney
}


app.listen(3000);
*/

