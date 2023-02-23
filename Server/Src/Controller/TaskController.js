const TaskModel = require("../Model/TaskModel");


// Create Task 
exports.CreateTask=(Req, Res)=>{
    let ReqBody = Req.body;
    TaskModel.create(ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}


//Delete Task
exports.DeleteTask=(Req, Res)=>{
    let Id = Req.params.id;
    let Query = {_id:Id};
    TaskModel.remove(Query, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}



// Task Status Update 
exports.UpdateTask=(Req, Res)=>{
    let Id = Req.params.id;
    let Status = Req.params.status;
    let Query = {_id: Id};
    let ReqBody = {status:Status};
    TaskModel.updateOne(Query, ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}



// List Search by Status
exports.ListSearchByStatus=(Req, Res)=>{
    let status = Req.params.status;
    let email = Req.headers["email"];
    TaskModel.aggregate([
        {$match:{status:status, email:email}},
        {$project:{
            _id:1, title:1, description:1, status:1,
            createdDate:{
                $dateToString:{
                    date:"$createdDate",
                    format:"%d-%m-%Y"
                }
            }
        }}
    ],(Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}
