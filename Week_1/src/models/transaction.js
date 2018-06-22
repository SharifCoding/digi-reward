const mongoose = require('mongoose');

const { Schema } = mongoose;

const TransactionSchema = new Schema({
  transaction: {
    transaction_id: { type: String, require: true },
    transaction_description: { type: String, require: true },
    merchant: { type: Schema.Types.ObjectId, ref: 'Merchant' },
  },
});

const TransactionModel = mongoose.model('UserListing', TransactionSchema);

module.exports = TransactionModel;
