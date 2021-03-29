const oneWayFunctionBasic = require("./oneWayFunctionBasic");
const oneWayFunctionAdvantage = require("./oneWayFunctionAdvantage");

(async function () {
  try {
    const value = "test encode";
    /**
     - pbkdf2(peper, salt, password)
    */

    console.log("=========PBKDF2(pepper, salt, password)===========");
  
    console.log(1, oneWayFunctionBasic.encode(value));
    const { hash: hasher, salt: salter } = oneWayFunctionBasic.encode(value);
    console.log(2, oneWayFunctionBasic.compare(value, hasher, salter));


    /**
        - HMAC(pepper, PBKDF2(salt, password))
        - PBKDF2(pepper, HMAC(salt, password))
    */
    console.log(
      "\n",
      "=========HMAC(pepper, PBKDF2(salt, password))==========="
    );

    console.log(3, oneWayFunctionAdvantage.encode(value));
    const { hash: hasher2, salt: salter2 } = oneWayFunctionAdvantage.encode(value);
    console.log(4, oneWayFunctionAdvantage.compare(value, hasher2, salter2));
  } catch (err) {
    console.log(`Some error ${err}`);
  }
})();
