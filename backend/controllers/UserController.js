const User = require('../models/UserModel');

// Get user coins by Telegram ID
exports.getUserCoins = async (req, res) => {
    try {
        const { telegram_id } = req.params;
        const user = await User.findOne({ telegram_id });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ coins: user.coins });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user coins', error });
    }
};

// Increment user coins
exports.incrementCoins = async (req, res) => {
    try {
        const { telegram_id } = req.params;
        let user = await User.findOne({ telegram_id });
        
        // If user doesn't exist, create one
        if (!user) {
            user = new User({ telegram_id, coins: 0 });
            await user.save();
        } else {
            user.coins += 1;
            await user.save();
        }

        res.status(200).json({ coins: user.coins });
    } catch (error) {
        res.status(500).json({ message: 'Error Incrementing coins', error });
    }
};
