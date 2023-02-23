const Jwt = require("jsonwebtoken");

module.exports=(Req, Res, Next)=>{
    let Token = Req.headers["token"];
    Jwt.verify(Token, "SecretKey12345", function(Err, Decode){
        if(Err){
            console.log(Token);
            Res.status(401).json({status:"Jwt Verify Faild"})
        }else{
            let Email = Decode["data"]
            console.log(Email);
            Req.headers.Email = Email;
            Next()
        }
    })
}