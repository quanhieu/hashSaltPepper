const crypto = require("crypto");
const { defaults } = require("./utils");

function encode(val) {
  const { saltLength, iterations, hashLength, digest, pepper2, hashType } = defaults;

  const salt = crypto.randomBytes(saltLength).toString("base64");
  const saltValue = val.concat(salt);
  const firstEncript = crypto.createHash(hashType).update(saltValue).digest();

  const hash = crypto
    .pbkdf2Sync(firstEncript, pepper2, iterations, hashLength, digest)
    .toString("base64");
  return { hash, salt };
}

function compare(compareVal, hash, salt) {
  const { iterations, hashLength, digest, pepper2, hashType } = defaults;

  const saltValue = compareVal.concat(salt);
  const firstEncript = crypto.createHash(hashType).update(saltValue).digest();

  const comparisonHash = crypto
    .pbkdf2Sync(firstEncript, pepper2, iterations, hashLength, digest)
    .toString("base64");
  return comparisonHash === hash;
}

module.exports = { encode, compare }