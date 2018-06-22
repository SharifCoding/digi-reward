const mongoose = require('mongoose');

const { Schema } = mongoose;

const RewardSchema = new Schema({
  reward: {
    reward_id: { type: String, require: true },
    reward_total: { type: Number, require: true },
  },
});

const RewardModel = mongoose.model('UserListing', RewardSchema);

module.exports = RewardModel;
