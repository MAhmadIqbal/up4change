const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const historySchema = mongoose.Schema(
  {
    artwork: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Artwork',
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    auction: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Auction',
    },
    bid: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Bid',
    },
    message: {
      type: String,
    },
    type: {
      type: String,
    },
    cart:{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Cart',
    },
    user:{
      type:mongoose.SchemaTypes.ObjectId,
      ref:'User'
    },
    raffle:{
      type:mongoose.SchemaTypes.ObjectId,
      ref:'Raffle'
    }

  },
  {
    timestamps: true,
  }
);

historySchema.plugin(toJSON);

const History = mongoose.model('History', historySchema);

module.exports = History;
