const mongoose = require('mongoose');

const { Schema } = mongoose;

const MerchantSchema = new Schema({
  merchant: {
    merchant_id: { type: String, require: true },
    merchant_name: { type: String, require: true },
  },
});

const MerchantModel = mongoose.model('UserListing', MerchantSchema);

module.exports = MerchantModel;
