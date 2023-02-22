/* eslint-disable no-unused-vars */
function multiply(arr) {
  // set total = 1
  let total = 1;
  // loop over the arrary and multiply all numbers in the array
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
}

function includesCopy(arr, searchValue) {
  //loop through array check if item in array is equal to searchValue
  // if yes we should return true
  // if not wait until end of the loop and return false
  for (let i = 0; i < arr.length; i++) {
    const repitedValue = arr[i];
    if (repitedValue === searchValue) {
      return true;
    }
  }
  return false;


}

function inventory(arr) {

}

function camelCase(str) {

}

function joiner(arr, del = ',') {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + del;
    }
  }
  return str;
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
