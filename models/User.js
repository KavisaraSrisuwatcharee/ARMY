const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    role: { type: String, default: 'user' },
    money: { type: Number, default: 5000 },
});

mongoose.model('users', userSchema);
