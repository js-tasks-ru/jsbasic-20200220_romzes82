/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
     if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + String.fromCharCode(8230);  //console.log(`?`.charCodeAt(0)) => 8230      
     } else {
      return str;
     }
   }