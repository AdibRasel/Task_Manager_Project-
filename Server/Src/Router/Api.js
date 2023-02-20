const Express = require("express");
const Router = Express.Router();

const UserController = require("../Controller/UserController")

//Registration
Router.post("/Registration", UserController.Registration)



module.exports = Router