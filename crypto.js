// crypto bcrypt
import crypto from "crypto";

function encryptMessage(message, key, iv) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(message, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}
function decryptMessage(encryptedMessage, key, iv) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedMessage, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

const originalMessage = "Hello world!"; // PLAIN TEXT
// console.log(`originalMessage = ${originalMessage}`);
const key = crypto.randomBytes(32);
// console.log(`key = ${key}`);
const iv = crypto.randomBytes(16); // initialisation vector
// console.log(`iv = ${iv}`);

const encryptedMessage = encryptMessage(originalMessage, key, iv);
console.log(`encryptedMessage = ${encryptedMessage}`);

const decryptedMessage = decryptMessage(encryptedMessage, key, iv);
console.log(`decryptedMessage = ${decryptedMessage}`);
