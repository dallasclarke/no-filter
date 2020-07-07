/******************
 * YOUR CODE HERE *
 ******************/

const onlyOdds = function (numbers) {
  let result = [];

  for (const odds of numbers) {
    if (odds % 2 === 1) {
      result.push(odds)
    }
  }
  return result
}

const onlyEvens = function (numbers) {
  let result = [];

  for (const evens of numbers) {
    if (evens % 2 === 0) {
      result.push(evens);
    }
  }
  return result;
}

const shortNamesOnly = function (names) {
  let result = [];

  for (const shortNames of names) {
    if (shortNames.length < 7) {
      result.push(shortNames)
    }
  }
  return result;
}

const dNames = function (names) {
  let result = [];

  for (const dName of names) {
    if (dName.startsWith('D')) {
      result.push(dName)
    }
  }
  return result;
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
