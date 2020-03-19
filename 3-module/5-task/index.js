/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
  function filterRange(arr, a, b) {
    let new_arr = [];
    
    arr.forEach((item, index, arr) => {
      if (item >= a && item <= b) {
        new_arr.push(item);
      }

    });
    return new_arr;
  }
