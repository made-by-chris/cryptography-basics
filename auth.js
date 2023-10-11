import bcrypt from "bcrypt";

const saltRounds = 10;
const passwordA = "password";
const passwordB = "password123";

const register = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
};

const registeredHash = await register(passwordA);
console.log(registeredHash);

const login = async (password, passwordHash) => {
  const match = await bcrypt.compare(password, passwordHash);
  return match;
};

const loginResult = await login("qoiwjdoqwijdqwoidjwqoidj", registeredHash);
console.log(loginResult ? "login successful" : "login failed");

// ===========================
// REGISTER -> email, password "red"

// "red" -> hashing function ("blue") -> hash "purple"

// user: aidan
// email: aidan@aidan.com
// passwordHash: purple
// salt: 123

// save your password hash in the database
// ============================

// LOGIN -> email, password "red"

// "red" -> hashing function ("blue") -> hash "purple"

// new hash === saved hash from the DB ? login : "please try again"

// apple -> hashing function  -> hash "12ioej1o2ijd"
// apple -> hashing function  -> hash "12ioej1o2ijd"

// register -> email, password "banana"

// generate a "salt" for aidan = 123
// "banana" + salt -> hashing function  -> hash "12ioej1o2ijd"

// generate a "salt" for alex = 456
// "banana" + salt -> hashing function  -> hash "**"!§I)=)=DWQD"
