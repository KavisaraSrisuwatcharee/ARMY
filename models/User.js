const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    role: { type: String, default: 'admin' },
    money: { type: Number, default: 5000 },
});

mongoose.model('users', userSchema);
