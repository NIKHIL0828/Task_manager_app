const mongoose =require('mongoose');
const schema = mongoose.Schema;

const TaskSchema = new schema({
    TaskName : {
        type: String,
        required : true
    },
     isDone :{
        type: Boolean,
        required:true
     }
});

const TaskModel = mongoose.model('todos',TaskSchema);

module.exports =TaskModel;
