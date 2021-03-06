const mongoose = require('mongoose')
const validator=require('validator')

const Schema = mongoose.Schema
const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        minlength:10,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(email){
                return validator.isEmail(email)
            },
            message: function(){
                return 'Provide a valid email'
            }
        }


    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    
    user: {
        type: Schema.Types.ObjectId,
		ref:'User',
		required:true
    }
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
