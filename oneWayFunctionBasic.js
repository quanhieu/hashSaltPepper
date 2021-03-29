const crypto = require("crypto");
const { defaults } = require('./utils');

function encode(val) {
  const { saltLength, pepper, iterations, hashLength, digest } = defaults;
  const salt = crypto.randomBytes(saltLength).toString("base64");
  const pepperedSalt = pepper.concat(salt);
  const hash = crypto
    .pbkdf2Sync(val, pepperedSalt, iterations, hashLength, digest)
    .toString("base64");
  return { hash, salt };
}

function compare(compareVal, hash, salt) {
  const { saltLength, pepper, iterations, hashLength, digest } = defaults;
  const pepperedSalt = pepper.concat(salt);
  const comparisonHash = crypto
    .pbkdf2Sync(compareVal, pepperedSalt, iterations, hashLength, digest)
    .toString("base64");
  return comparisonHash === hash;
}

module.exports = { encode, compare }