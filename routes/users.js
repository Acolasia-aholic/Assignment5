var express = require('express');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/user/add",(req,res)=>{
  console.log(req.body)

  const {username,something,days} = req.body
  UserModel.create({
    username,something,days
  }).then(data=>{
    console.log(data)
    res.send({
      ok:1
    })
  })
})

router.post("/user/update/:id",(req,res)=>{
  console.log(req.body,req.params.id)
  const {username,something,days} = req.body
  UserModel.updateOne({_id:req.params.id},{
    username,something,days
  }).then(data=>{
    res.send({
      ok:1
    })
  })
})

router.get("/user/delete/:id",(req,res)=>{
  UserModel.deleteOne({
    _id:req.params.id
  }).then(data=>{
    res.send({
      ok:1
    })
  })
})

router.get("/user/list",(req,res)=>{
  UserModel.find().then(data=>{
    res.send(data)
  })
})

module.exports = router;
