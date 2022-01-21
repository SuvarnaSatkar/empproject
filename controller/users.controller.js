const router=require('./mysql.connection')
module.exports={
displayallemp :(req,res,next) =>
{    connection.query(`select empid,empmname,empsal,empdesig,password from emp`,(err,data)=>
    {
        if(err)
        {
            res.send({error:true,message:err})
        }
        else
        {

            res.send({error:false,info:data})
        }

    }
  
    
    )

}

}


