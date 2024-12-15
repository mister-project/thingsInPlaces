'use strict'
console.log('createSelect.js в работе')


const createSelect = (tableId, idList, valueColumn, textColumn) => {
    console.log(tableId, idList, valueColumn, textColumn)
    let selectContainer = document.querySelector(idList)



    document.querySelector(tableId).querySelector('tbody').querySelectorAll('tr').forEach(str => {

        const option = document.createElement('option')

        selectContainer.appendChild(option);
        option.innerText = str.querySelectorAll('td')[textColumn].innerText
        option.value = str.querySelectorAll('td')[valueColumn].innerText

    });

}
try {
// document.querySelector('form').querySelectorAll('input')[2].addEventListener('change', () => {
//     console.log('прикол')
// })
    createSelect('#flat', '#points', 0, 1);
} catch {
    console.log('что-то пошло не так')

}

