function doubler(arr) {
  return arr.map(num => num * 2);
}

function mapCap(arr) {
  return arr.map(item => item.toUpperCase());
}

function canRideTheRide(arr) {
  const newArr = [];
  arr.map(item => {
    if (item.age > 16) {
      newArr.push(`${item.name} can ride the ride`);
    } else {
      newArr.push(`Sorry, ${item.name} cannot ride the ride`);
    }
  });
  return newArr;
}

function indAndVal(arr) {
  const newArr = [];
  let num = 0;
  arr.map(item => {
    newArr.push({ index: num++, value: item });
  });
  return newArr;
}

function filterEvens(arr) {
  const newArr = [];
  arr.filter((num) => {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  });
  return newArr;
}

function gmailSearch(arr) {
  const newArr = [];
  arr.filter((email) => {
    if (email.includes("@gmail.com")) {
      newArr.push(email);
    }
  });
  return newArr;
}

function getCart(arr) {
  const sum = arr.reduce((accumulator, iterator) => {
    if (iterator.price < 100) {
      return accumulator + iterator.price;
    }
    return accumulator;
  }, 0);
  return sum;
}

function findGreater(arr) {
  return arr.find(({ price }) =>
    price > 100);
}

module.exports = {
  doubler,
  mapCap,
  canRideTheRide,
  indAndVal,
  filterEvens,
  gmailSearch,
  getCart,
  findGreater,
};
