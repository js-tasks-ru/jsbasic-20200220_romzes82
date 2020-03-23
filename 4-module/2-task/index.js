/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

  let arrRows = table.rows;

  for (let i = 0; i < arrRows.length; i++) {
    //console.log(table.rows[i].cells[i].innerHTML);
    table.rows[i].cells[i].innerHTML = table.rows[i].cells[i].innerHTML;
    table.rows[i].cells[i].style.backgroundColor = `red`;
  }

  return table.replaceWith(table);
}
