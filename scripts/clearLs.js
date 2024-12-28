'use strict'
console.log('clearls в работе');
const getClearLs = (idTable) => {
    localStorage.removeItem(idTable)
}


try {
    document.querySelector('#clearLsGroup').addEventListener('click', () => {
        getClearLs('#group')

    })

} catch (error) {
    console.log('удаление групп из LS не работает');

}
