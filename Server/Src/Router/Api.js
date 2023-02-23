const Express = require("express");
const Router = Express.Router();

//import UserController
const UserController = require("../Controller/UserController")
// import TaskController
const TaskController = require("../Controller/TaskController")

//Registration
Router.post("/Registration", UserController.Registration)

//Login User
Router.post("/LoginUser", UserController.LoginUser)


//Profile Update
Router.post("/ProfileUpdate", UserController.ProfileUpdate)


//Create Task
Router.post("/CreateTask", TaskController.CreateTask)

//Delete Task
Router.post("/DeleteTask/:id", TaskController.DeleteTask)

//Task Status Update
Router.get("/UpdateTask/:id/:status", TaskController.UpdateTask)

//List Search By Status
Router.post("/ListSearchByStatus/:status", TaskController.ListSearchByStatus)



module.exports = Router