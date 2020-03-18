/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
  function namify(users) {
    let arr_name = [];
    for (const iterator of users) {
      console.log(iterator.name);
      arr_name.push(iterator.name);
    }
    
    return arr_name;
    //console.log(arr_name);   
  }
