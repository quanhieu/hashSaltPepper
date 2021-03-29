// iterations: argument must be a number set as high as possible. The higher the number of iterations, the more secure the derived key will be, but will take a longer amount of time to complete.

const defaults = {
  saltLength: 32,
  iterations: 100000, // ~200ms to compute with current key/salt lengths
  hashLength: 128,
  digest: "sha512",
  pepper: "aaaaaaaaa",
  pepper2: "pepper123",
  hashType: "sha256"
};

module.exports = { defaults }