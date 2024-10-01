const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    telegram_id: {
        type: String,
        required: true,
        unique: true
    },
    coins: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('TapUser', userSchema);
module.exports = User;
