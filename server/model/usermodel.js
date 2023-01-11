const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema=new Schema({
    fname:{
        type:String,
        required:[true,'First Name not provided']

    },
    lname:{
        type:String,
        required:[true,'Last Name not provided']

    },
    email:{
        type:String,
        unique:[true,"Email already exist"],
        lowercase:true,
        trim:true,
        required:[true,'Email not provided'],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value);
            },
            message: '{VALUE} is noa a valid email address'
        }
    },
    password:{
        type: String,
        required:[true,'Please provide a password']
    }
})

module.exports=('User',userSchema)