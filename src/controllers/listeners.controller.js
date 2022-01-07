const { User, Store: Artwork, Auction, History, Notification, Transaction } = require('../models');
const { settingService } = require('../services');
const { MINT_STATUS } = require('../utils/enums');
const logger = require('../config/logger');

const addCollectionInUser = async (params) => {
  const { collectionId, userId } = params;
  await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: { collections: collectionId },
    }
  );
  console.log('collection added in user successfully');
};

const addArtworkInUser = async (params) => {
  const { artworkId, userId } = params;
  await User.findOneAndUpdate(
    { _id: userId },
    {
      $push: { artworks: artworkId },
    }
  );
  console.log('artwork added in user successfully');
};

const addArtworkInCollection = async (params) => {
  const { artworkId, collectionId } = params;
  await Collection.findOneAndUpdate(
    { _id: collectionId },
    {
      $push: { artworks: artworkId },
    }
  );
  console.log('artwork added in collection successfully');
};

const saveBidInAuction = async (params) => {
  const {  bid,  auction,bid_amount } = params;
  
  await Auction.findOneAndUpdate(
    { _id: auction },
    {
      $push: { bids: {bidId:bid ,
      bid_amount: bid_amount  }
      }
    })
    console.log('bid saved in auction successfully');
};

const openArtworkAuction = async (params) => {
  const { artworkId, auction } = params;
  await Artwork.findOneAndUpdate(
    { _id: artworkId },
    {
      auction: auction,
      isAuctionOpen: true,
    }
  );
  console.log('auction opened for artwork successfully');
};

const updateArtworkHistory = async (params) => {
  await History.create(params);
};
const updateHistory = async (params) => {
  await History.create(params);
};

const updateUserHistory = async (params) => {
  await History.create(params);
  console.log("Cart checkout history updated");
};
const createNotification = async (params) => {
  // const setting =await settingService.getSettings()
  // const notificationPermissioninSetting = setting[0].notifications
  // if(notificationPermissioninSetting === false){
    await Notification.create(params);
    logger.info('Notification Sent!')
  // }
};

const createTransaction = async (params) => {
  const transact = await Transaction.create(params);
  console.log('--transaction created successfully--:', transact);
};

module.exports = {
  addCollectionInUser,
  addArtworkInUser,
  addArtworkInCollection,
  saveBidInAuction,
  openArtworkAuction,
  updateArtworkHistory,
  createNotification,
  createTransaction,
  updateUserHistory,
  updateHistory
};
