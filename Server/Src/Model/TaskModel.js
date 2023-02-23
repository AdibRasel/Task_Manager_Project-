const Mongoose = require("mongoose");
const DataSchema = Mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String},
    createdDate:{type:Date, default:Date.now()},
}, {versionKey:false});
const TaskModel = Mongoose.model("Tasks",DataSchema);
module.exports = TaskModel;