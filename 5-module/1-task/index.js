/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    let tbody = table.getElementsByTagName('tbody')[0];
    let alltr = tbody.querySelectorAll('tr'); //('tr > td:last-child');

    //console.log(alltr);
    
    for (let i = 0; i < alltr.length; i++) {
        let statusCell = alltr[i].cells[3];

        //1. Проставит атрибут hidden, если такого атрибута нет вообще
        if (statusCell.dataset.available === 'true') {
            //console.log(statusCell);
            //statusCell.classList.add('available');
            alltr[i].classList.add('available');
        }

        if (statusCell.dataset.available === 'false') {
            //console.log(statusCell);
            alltr[i].classList.add('unavailable');
        }

        //2. Проставит атрибут hidden, если такого атрибута нет вообще
        if (!statusCell.dataset.available) {
            alltr[i].setAttribute('hidden', 'display: none');
        }

        //3. Проставит класс male/female, в зависимости от содержимого ячейки Gender
        let genderCell = alltr[i].cells[2];  
        if (genderCell.innerHTML === 'm') {
            alltr[i].classList.add('male');
        }              

        if (genderCell.innerHTML === 'f') {
            alltr[i].classList.add('female');
        }  

        //4. Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18
        let ageCell = alltr[i].cells[1]; 
        if (ageCell.innerHTML < 18) {
            alltr[i].style.textDecoration ="line-through";
        }   
    }
}
