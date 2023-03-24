const userServices = require("../services/User.service");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  try {
    const user = req.body;
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    await userServices.createUser(user);
    return res.status(201).json({ msg: "User created." });
  } catch (error) {
    // mongoose validators
    if (error.code === 11000)
      return res.status(500).json({ error: "Email already exist." });
    if (error.errors) {
      const { email, password } = error.errors;
      if (email !== undefined)
        return res.status(500).json({ error: error.errors.email.message });
      if (password !== undefined)
        return res.status(500).json({ error: error.errors.password.message });
    }

    return res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await userServices.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  addUser,
  getUsers,
};
