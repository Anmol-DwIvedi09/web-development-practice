const { Router } = require ("express");
const courseRouter = Router();


courseRouter.post("/purchases", function(req, res) {
  app  // you would expect the user to pay you the money 
  res.json ({
      message: "signup endpoint"
    })
})

courseRouter.get("/preview", function(req, res) {
  res.json ({
      message: "signup endpoint"
    })
})


module.exports = {
  courseRouter : courseRouter
}