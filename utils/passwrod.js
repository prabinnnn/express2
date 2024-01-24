const bcrypt = require("bcryptjs");
const encriptpw = (string) => {
  return bcrypt.hashSync(string, 10);
};
module.exports = { encriptpw };
