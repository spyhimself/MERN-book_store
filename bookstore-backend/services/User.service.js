const User = require("../models/User");

const createUser = async (user) => {
  return await User.create(user);
};

const getAllUsers = async () => {
  return await User.find();
};

module.exports = {
  createUser,
  getAllUsers,
};
