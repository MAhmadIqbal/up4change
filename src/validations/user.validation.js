const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'superAdmin','admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    bio: Joi.string().optional(),
    profilePic: Joi.string().optional(),
    email:Joi.string().optional()
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const getUserFollowers = {
  query: Joi.object().keys({
    userId: Joi.string().required(),
    page: Joi.string().required(),
    perPage: Joi.string().required(),
  }),
};

const getUserFollowing = {
  query: Joi.object().keys({
    userId: Joi.string().required(),
    page: Joi.string().required(),
    perPage: Joi.string().required(),
  }),
};

const followUser = {
  body: Joi.object().keys({
    otherUserId: Joi.string().required(),
  }),
};

const unfollowUser = {
  body: Joi.object().keys({
    otherUserId: Joi.string().required(),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  unfollowUser,
  followUser,
  getUserFollowing,
  getUserFollowers,
};
