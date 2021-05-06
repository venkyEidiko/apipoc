const db = require('../services/db');

const  schema = require('../model/bookSchema');





let add = async (name,author,date,price,quantity)=>{
    try{
       let book = await new schema({bName:name,bAuthor:author,bDate:date,bPrice:price,bQuantity:quantity}).save();
       console.log('incrud')
       return "Your book added successfully";

    }
    catch(err)
    {
        console.log("failed to add a book "+err);
    }
}

let findAll = async () =>{
    try{
       let data = await schema.find();
       console.log(data);
       return data;
    }
    catch(err)
    {
        console.log("error occured in finding all the books"+err);
    }
}

let findOne = async (id)=>{

    try{
        let data =  await schema.find({bId:id});

    return data;


    }
    catch(err)
    {
        console.log("error at finding one book "+err);
    }
    
}

let del = async (id)=>{
    try{
        let data =await schema.deleteOne({bId:id});
        return  " your book has deleted succesfully";
    }
    catch(err)
    {
        console.log("error at deleting a book in crud  "+err);
    }
}

let updateQuantity = async (id,quantity)=>{
    try{
       await schema.updateOne({bId:id},{bQuantity:quantity});
       return "your book has updated sucessfully";
    }
    catch(err)
    {
        console.log("error at updating quantity "+err);
    }
}


let getBookQntInAcc =async ()=>{
    try{
        var mysort = { bQuantity: 1 }; 
       let data = await schema.find().sort(mysort);
       console.log(data.sort);
       return data;


    }
    catch(err)
    {
        console.log("error at get book by quantity ascending"+err);
    }
}



let getBookNameInAcc =async ()=>{
    try{
        var mysort = { bName: 1 }; 
       let data = await schema.find().sort(mysort);
    //    console.log(data.sort);
       return data;


    }
    catch(err)
    {
        console.log("error at get book by quantity ascending"+err);
    }
}





module.exports={add,findAll,findOne,del,updateQuantity,getBookQntInAcc,getBookNameInAcc};

