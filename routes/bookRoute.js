
const express = require('express');

const router = express.Router();

const crud = require('../controllers/bookCrud');


router.get('/',function(req,res){
    res.send('index.html')
    
});

router.get('/addBook',function(req,res){

  let status =  crud.add(req.query.bName,req.query.bAuthor,req.query.bDate,req.query.bPrice,req.query.bQuantity);
  status.then(result=>{
      console.log("inroute ")
      res.json(result);
  }).catch(result=>{
      console.log("failed in routing:::::::: " + result);
  })
})

router.get('/getAllBooks',function(req,res){
    let status = crud.findAll();
    status.then(result=>{
        console.log("yes");
        res.json(result);

    }).catch(result=>{
        console.log('failed to display all books '+ result);
    })
})

router.get('/getOneBook',function(req,res){
    let status = crud.findOne(req.query.id);
    status.then(result=>{
        res.json(result);
    }).catch(result=>{
        console.log("error occured at finding one book "+result);
    })
})

router.get('/delBookById',function(req,res){
    let status = crud.del(req.query.id);
    status.then(result=>{
        res.json(result);
    }).catch(result=>{
        console.log("book not deleted successfully "+result);
    })
})

router.get('/updateBookQuantity',function(req,res){
 let status =   crud.updateQuantity(req.query.id,req.query.quantity);
 status.then(result=>{
     res.json(result);
 }).catch(result=>{
     console.log("error at updating quantity in routing catch"+result);
 })
})


router.get('/getBookQunByAsc',function(req,res){
    let status = crud.getBookQntInAcc();
    status.then(result=>{
        res.json(result);
    }).catch(result=>{
        console.log("error at ass in book" + result);
    })
})


router.get('/getBookNameByAsc',function(req,res){
    let status = crud.getBookNameInAcc();
    status.then(result=>{
        res.json(result);
    }).catch(result=>{
        console.log("error at ass in book" + result);
    })
})




router.get('*',function(req,res){
    res.send("OOPS 404 error!!! page not  found");
})



module.exports=router;
