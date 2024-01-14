const Task = require('../model/model')

// create
const create_pro = async(req,res)=>{
    try{
        const user = await Task.create(req.body)
        res.status(201).json({user})
    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

// Read
const all_pro = async(req,res)=>{
    try{
        const user = await Task.find({})
        res.status(200).json({user})

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

// Update
const update_pro = async(req,res)=>{
    try{
        const {id:userId} = req.params
        const user = await Task.findByIdAndUpdate({_id:userId},
            req.body,{
                new:true,
                runValidators:true
            })
        res.status(200).json({user})

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

// Delete
const delete_pro = async(req,res)=>{
    try{
        const {id:userId} = req.params
        const user = await Task.findOneAndDelete({id:userId})
        res.status(200).json({user})

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

// single
const single_pro = async (req,res)=>{
    try{
        const {id:userId} = req.params
        const user = await Task.findById({_id:userId})
        res.status(200).json({user})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

module.exports = {
    create_pro,
    all_pro,
    update_pro,
    delete_pro,
    single_pro
}