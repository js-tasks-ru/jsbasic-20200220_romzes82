/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
  let sum = 0;
    for (const key in salaries) {
      //console.log(typeof(obj[key]));
      if (typeof(salaries[key]) === `number`) {
        sum = sum + salaries[key];
      }
    }
  return sum;
} 