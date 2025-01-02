'use strict'
console.log('clearls в работе');
const getClearLs = (idTable) => {
    localStorage.removeItem(idTable)
    location.reload()
}

// Удаление из LS таблицы вещей
try {
    document.querySelector('#clearLsThihks').addEventListener('click', () => {
        getClearLs('#thingsAndPlaсes')

    })

} catch (error) {
    console.log('удаление Вещей из LS не работает');

}

// Удаление из LS таблицы МЕСТ
try {
    document.querySelector('#clearLsPlace').addEventListener('click', () => {
        getClearLs('#plase')

    })

} catch (error) {
    console.log('удаление Вещей из LS не работает');

}

// Удаление из LS групп
try {
    document.querySelector('#clearLsGroup').addEventListener('click', () => {
        getClearLs('#group')

    })

} catch (error) {
    console.log('удаление групп из LS не работает');

}
