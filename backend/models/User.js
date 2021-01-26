const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    weight: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        required: true  
    },
    password: {
        type: String,
        required: true
    }
})


const User = mongoose.model("User", UserSchema);

User.prototype.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password);
}

User.addHook('beforeCreate', user => {
    user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(12),
        null
    );
})
module.exports = User;
return User;