
const ROLES = {
  USER : 'user',
  ADMIN : 'admin',
  ORGANIZATION : 'organization'
};

const SEARCH_FILTERS = {
  USERS: 'users',
  ARTWORKS: 'artworks',
  AUCTIONS: 'auctions',
  RAFFLES: 'raffles'
};

const HISTORY_TYPE = {
  PRODUCT_CREATED: 'productCreated',
  PRODUCT_DELETED: 'productDeleted',
  AUCTION_STARTED: 'auctionStarted',
  AUCTION_END: 'auctionEnd',
  BID_PLACED: 'bidPlaced',
  CART_CHECKOUT:'cartCheckout',
  RAFFLE_STARTED:'raffleStarted',
  RAFFLE_ENDED:'raffleEnded',
  RAFFLE_ANNOUNCED:'raffleAnnounced',
  RAFFLE_USER_ADDED:'raffleUserAdded'
};

const TRANSACTION_TYPE = {
  DEBIT: 'debit',
  CREDIT: 'credit',
};

const NOTIFICATION_TYPE = {
  NEW_FOLLOWER: 'newFollower',
  NEW_BID: 'newBid',
  AUCTION_TIMEOUT: 'auctionTimeout',
  AUCTION_END: 'auctionEnd',
  AUCTION_WIN: 'auctionWin',
  RAFFLE_WIN:'raffleWin'
};

module.exports = {
  ROLES,
  SEARCH_FILTERS,
  HISTORY_TYPE,
  TRANSACTION_TYPE,
  NOTIFICATION_TYPE,
  
};
