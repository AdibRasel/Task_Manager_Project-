const App = require("./App.js");

const dotenv = require("dotenv")

dotenv.config({path:"./Config.env"})

App.listen(process.env.RUNNING_PORT, ()=>{
        console.log("Server Run Success")
})