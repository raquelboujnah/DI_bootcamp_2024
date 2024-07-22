const bcrypt = require("bcrypt")
const hashMyPassword = (password) => {
     return bcrypt.hashSync(password + "", 10)
};

module.exports = {
    hashMyPassword,
};