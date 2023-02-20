const Mongoose = require("mongoose");
const DataSchema = Mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String},
    createdDate:{type:String, default:Date.now()},
}, {versionKey:false});
const TaskModel = Mongose.model("Tasks",DataSchema);
module.exports = TaskModel;