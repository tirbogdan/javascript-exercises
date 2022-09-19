const removeFromArray = function (array, ...items) {
  for (let i = 0; i < items.length; i++) {
    let position = array.indexOf(items[i]);
    if (position != -1) {
      array.splice(position, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
