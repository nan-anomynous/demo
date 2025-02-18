const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
    }
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User',userSchema)

module.exports = User;