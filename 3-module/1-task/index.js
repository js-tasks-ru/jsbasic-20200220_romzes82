/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data
    .filter(iter => iter.age <= age)
    .map(iter => `${iter.name}, ${iter.balance}`)
    .join(`\n`);
}
