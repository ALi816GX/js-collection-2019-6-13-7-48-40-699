'use strict';

function grouping_count(collection) {

  const result = {};
  for(let i = 1;i <= 4;i++){
    const newArray = collection.filter(item => item == i);
    console.log(newArray);
    let amount = newArray.length;
    result[''+i] = amount;
  }

  // console.log(2222);

  return result;

}

module.exports = grouping_count;
