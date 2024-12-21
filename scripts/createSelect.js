'use strict'
console.log('createSelect.js в работе')
const select = document.createElement('select')
const updateButton = document.querySelector('#updateButton')
// updateButton.innerText = "ОБНОВИТЬ"


// document.querySelector('#form').appendChild(updateButton)
const selectObject = {};
const createSelect = (selectObject) => {
    // console.log(selectObject.idSelectInputOne);
    updateButton.addEventListener('click', (el) => {


        const inputs = document.querySelector('#form').querySelectorAll('input');
        inputs.forEach((input, index) => {

            if (index === selectObject.idSelectInputOne) {
                console.log(input)
                // const option = document.createElement('option')
                getSelect(selectObject);

                input.parentNode.replaceChild(select, input);
            }

        })
    });

}

// const select = document.createElement('select')
// if (index === modalWindow.idColSelect) { //создаем select для выпадающего списка и кладем в нужное поле
//     select.setAttribute('id', "points")
//     div.appendChild(select);
//     getSelect(select);


//Функция для ФОРМИРОВАНИя строк выпадающего СПИСКА из Таблицы с id = idTableSelect
const getSelect = (selectObject) => {

    document.querySelector(selectObject.idTableSelect).querySelector('tbody').querySelectorAll('tr').forEach(str => {
        let option = document.createElement('option')
        option.value = str.querySelectorAll('td')[selectObject.nameColSelect].innerText
        option.innerText = str.querySelectorAll('td')[selectObject.nameColSelect].innerText
        select.add(option)
    });
}

// Запуск первого выпадающего списка в таблице вещей и мест
try {
    // Задаю исходные данные для запуска функции
    const selectOne = {
        idSelectInputOne: 2, // номер поля для вставки  вып списка в форму  
        idTableSelect: '#group', // id таблицы, из которой делается вып. список
        idColSelect: 0, //номер столбца ид =value= вставляемого значения из списка 
        nameColSelect: 1 //номер столбца текстовое название вставляемого значения

    }

    document.querySelector('#openModal').addEventListener('click', (e) => {
        createSelect(selectOne);
    })

} catch (error) {
    console.log('вставка значений в поле Группы не работает');

}

// // Запуск =ВТОРОГО= выпадающего списка в таблице вещей и мест
// try {
//     // Задаю исходные данные для запуска функции
//     const selectTwo = {
//         idSelectInputOne: 4, // номер поля для вставки  вып списка в форму  
//         idTableSelect: '#plase', // id таблицы, из которой делается вып. список
//         idColSelect: 0, //номер столбца ид =value= вставляемого значения из списка 
//         nameColSelect: 3 //номер столбца текстовое название вставляемого значения

//     }

//     document.querySelector('#openModal').addEventListener('click', () => {
//         createSelect(selectTwo);
//     })

// } catch (error) {
//     console.log('вставка значений в поле Группы не работает');

// }