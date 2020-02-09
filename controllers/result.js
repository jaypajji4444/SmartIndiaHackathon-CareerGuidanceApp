const User=require("../models/user")

exports.resultString=async(req,res)=>{
  
    try{
        const {id,result}=req.body
    const user=await User.findOne({_id:id})
    user.result=result
    user.save()
    res.status(200).json({success:true,data:user})
    }
    catch(err){
        res.status(401).json({success:false,msg:err})
    }
    
}



exports.getResultString=async(req,res)=>{
    try{
        console.log(req.params.id)
        const id=req.params.id
        const user=await User.find({_id:id})
    
 res.json(user)
    }
    catch(err){
        res.status(401).json({success:false,msg:err})
    }
}


exports.fieldSuggested=async(req,res)=>{

    try{
    const {id,fields}=req.body
    const user=await User.findOne({_id:id})
    user.fieldSuggested.push(fields)
    user.save()
    res.status(200).json({success:true,data:user})
    }
    catch(err){
        res.status(401).json({success:false,msg:err})
    }
    
}


exports.getFieldSuggested=async(req,res)=>{
    try{
        const id=req.params.id
        const user=await User.findOne({_id:id})
        const fields=user.fieldSuggested[user.fieldSuggested.length-1]
        res.status(200).json(fields)
    }
    catch(err){
        res.status(401).json({success:false,msg:err})
    }
}

