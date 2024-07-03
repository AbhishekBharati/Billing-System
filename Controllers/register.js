const User = require("../Models/user.js");

const register = async (req, res) => {

  const { firstName, lastName, userName, role, phone, email, password } = req.body;
  console.log(firstName);

  res.send("Hey from register controller")
}

const login = async (req, res) => {
  res.send("Hii from Login");
}

module.exports = {
  register,
  login
}
