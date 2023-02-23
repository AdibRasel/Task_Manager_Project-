const UserModel = require("../Model/UserModel");

const Jwt = require("jsonwebtoken")


// Registration 
exports.Registration=(Req, Res)=>{
    let ReqBody = Req.body;
    UserModel.create(ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}

//Login User
exports.LoginUser=(Req, Res)=>{
    let ReqBody = Req.body;
    UserModel.aggregate([
        {$match:ReqBody},
        {$project:{_id:0, Email:1, FirstName:1, LasttName:1, Photo:1}}
    ],(Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            if(Data.length>0){
                let Payload = {exp: Math.floor(Date.now()/ 100) + (24*60*60), data:Data[0]["Email"]}
                let Token = Jwt.sign(Payload, "SecretKey12345");
                Res.status(200).json({status:"Success Login", Token:Token, data:Data[0]})
            }else{
                Res.status(401).json({status:"Unathorized, Login Faild"})
            }
        }
    })
}




// Profile Update 
exports.ProfileUpdate=(Req, Res)=>{
    let Email = Req.headers["email"];
    let ReqBody = Req.body;
    UserModel.updateOne({email:Email}, ReqBody, (Err, Data)=>{
        if(Err){
            Res.status(400).json({status:"Fail", data:Err})
        }else{
            Res.status(200).json({status:"Success", data:Data})
        }
    })
}