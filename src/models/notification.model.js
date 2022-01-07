const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const notificationSchema = mongoose.Schema(
  {
    receiver: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
    },
    extraData: {
      follower: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
      },
      bid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Bid',
      },
      auction: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Auction',
      },
      raffle:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Raffle'
      },
      product:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Artwork'
      }
    },
  },
  {
    timestamps: true,
  }
);

notificationSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
