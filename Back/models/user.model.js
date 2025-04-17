const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    avatar:{
        type:String,
        default: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isActive:{
        type:Boolean,
        default: true,
        required: true
    },      
}, {timestamp: createdAT = true}); 


module.exports = mongoose.model('User', UserSchema);
