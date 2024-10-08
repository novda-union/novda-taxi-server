const MIN = 1000000;
const MAX = 9999999;

/**
 * @param {"client" | "driver" | "admin" | "car" | "time" | "ride"} field
 */

async function createId(field) {
  const randomNumbers = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

  if (field === "client") {
    const letterCombinations = ["PA", "PB", "PD", "PE", "PF"];

    const randomIndex = Math.floor(Math.random() * letterCombinations.length);

    const randomCombination = letterCombinations[randomIndex];

    return randomCombination + randomNumbers;
  }

  if (field === "driver") {
    const letterCombinations = ["DA", "DB", "DD", "DE", "DF"];

    const randomIndex = Math.floor(Math.random() * letterCombinations.length);

    const randomCombination = letterCombinations[randomIndex];

    return randomCombination + randomNumbers;
  }

  if (field === "admin") {
    const letterCombinations = ["AA", "AB", "AD", "AE", "AF"];

    const randomIndex = Math.floor(Math.random() * letterCombinations.length);

    const randomCombination = letterCombinations[randomIndex];

    return randomCombination + randomNumbers;
  }

  if (field === "car") {
    const letterCombinations = ["CA", "CB", "CD", "CE", "CF"];

    const randomIndex = Math.floor(Math.random() * letterCombinations.length);

    const randomCombination = letterCombinations[randomIndex];

    return randomCombination + randomNumbers;
  }

  if (field === "time") {
    const letterCombinations = ["TA", "TB", "TD", "TE", "TF"];

    const randomIndex = Math.floor(Math.random() * letterCombinations.length);

    const randomCombination = letterCombinations[randomIndex];

    return randomCombination + randomNumbers;
  }

  if (field === 'ride') {
    const letterCombinations = ["RA", "RB", "RD", "RE", "RF"];

    const randomIndex = Math.floor(Math.random() * letterCombinations.length);

    const randomCombination = letterCombinations[randomIndex];

    return randomCombination + randomNumbers;
  }
}

module.exports = { createId };
