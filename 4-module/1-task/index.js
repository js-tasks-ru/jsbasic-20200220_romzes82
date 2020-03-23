/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    
  let newLi = document.createElement('li');
  let lis = ``;
  let newUl = document.createElement('ul');

  for (const iterator of friends) {
    newLi.innerHTML = iterator.firstName + ` ` + iterator.lastName;
    lis = lis + newLi.outerHTML;
 }
  
  newUl.innerHTML = lis; // либо newUl.insertAdjacentHTML(`afterbegin`, lis);
  //console.log( newUl );
  return newUl;

}
