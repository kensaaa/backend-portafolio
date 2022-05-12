const { Schema, model } = require('mongoose')

const ProjectSchema = Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    technology:{
        type: [ String ],
        required:true
    },
    url:{
        type:String,
        required:true
    },
    icon:{
        type:String,
    }
})


module.exports = model('Project',ProjectSchema)
