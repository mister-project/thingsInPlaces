console.log('modalWindow в работе');



// ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА И ДОБАВЛЕНИЯ НОВОЙ СТРОКИ В ТАБЛИЦУ


const modalWindow = {};
const localStor = (modalWindow) => {
    const container = document.querySelector(modalWindow.containerId)
    let table = container.querySelector(modalWindow.tableId)
    const tBody = table.querySelector('tBody')
    tBody.innerHTML = localStorage.getItem(modalWindow.tableId)
}
const getModalWindow = (modalWindow) => {

    const container = document.querySelector(modalWindow.containerId)
    let table = container.querySelector(modalWindow.tableId)
    const openModalBtn = container.querySelector(modalWindow.modalButtonId); // Кнопка открытия модального окна
    const modal = document.querySelector(modalWindow.modalId); //само модальное окно
    const closeModalBtn = modal.getElementsByClassName('close')[0]; //кнопка закрытия модального окна
    let form = modal.querySelector('#form');
    const buttonSubmit = modal.querySelector('#submit')
    const tBody = table.querySelector('tBody')

    //ФОРМИРОВАНИЕ ID ЗАПИСИ ЧЕРЕЗ МЕТКУ ВРЕМЕНИ
    const now = new Date();
    let idRow = `${now.getFullYear()}`.slice(-2) + `0${now.getMonth() + 1}`.slice(-2) + `0${now.getDate()}`.slice(-2) + `0${now.getHours()}`.slice(-2) + `0${now.getMinutes()}`.slice(-2) + `0${now.getSeconds()}`.slice(-2)

    //Функция для ФОРМИРОВАНИя строк выпадающего СПИСКА
    const getSelect = () => {
        console.log(document.querySelector('#points'));
        document.querySelector(modalWindow.idTableSelect).querySelector('tbody').querySelectorAll('tr').forEach(str => {

            const option = document.createElement('option')

            // selectContainer.appendChild(option);
            option.innerText = str.querySelectorAll('td')[modalWindow.idColSelect].innerText
            option.value = str.querySelectorAll('td')[modalWindow.idColSelectValue].innerText

            document.querySelector('#points').appendChild(option);
            console.log(option.innerText)
        });
    }
    //ОТКРЫТИЕ МОДАЛЬНОГО ОКНА

    modal.style.display = 'block';


    // Переброска записи из формы в таблицу
    container.addEventListener('click', (event) => {

        // ПОЛУЧАЕМ НУЖНУЮ СТРАНИЦУ ЧЕРЕЗ ДЕЛЕГИРОВАНИЕ
        if (event.target.closest(modalWindow.containerId)) {
            addStr(table) // ЗАПУСКАЕМ ФУНКЦИЮ ДОБАВЛЕНИЯ СТРОК В НУЖНОЙ ТАБЛИЦЕ
            // ПО ДРУГОМУ НЕ РАБОТАЕТ
        }

    });
    //ФУНКЦИЯ ДОБАВЛЕНИЯ СТРОКИ В ТАБЛИЦУ
    const addStr = (tabl) => {
        // console.log(tabl)
        tabl.querySelectorAll('th').forEach((th, index) => {
            //  Добавление в форму модального окна всех остальных полей
            const div = document.createElement('div')
            const input = document.createElement('input')
            const select = document.createElement('select')
            form.appendChild(div);
            input.setAttribute('type', 'text');
            if (index === modalWindow.columnIdStr) {
                input.value = idRow;
                input.setAttribute('placeholder', th.textContent);
                div.appendChild(input);
            }
            if (index === modalWindow.idInputSelect) { //создаем select для выпадающего списка и кладем в нужное поле
                select.setAttribute('id', "points")
                div.appendChild(select);
                getSelect(select);
            } else {
                input.setAttribute('placeholder', th.textContent);
                div.appendChild(input);
            }

        });

        // Слушаем форму и поля на изменение полей для добавления идентификаторов из других таблиц

        // form.addEventListener('change', () => {
        //     console.log(form.querySelectorAll('select'));


        // })

        const insertId = (arg, val) => {

            const cells = form.querySelectorAll('input, textarea, select')
            cells.forEach((el, index) => {
                if (index === arg + 1) {
                    el.value = val;
                    // console.log(el.value);

                }

            })
        }
        //Добавление строк в таблицу
        buttonSubmit.addEventListener('click', (btn) => {

            const newRow = tabl.querySelector('tbody').insertRow();
            const cells = form.querySelectorAll('input, textarea, select');


            for (let i = 0; i < cells.length; i++) {
                const newCell = newRow.insertCell(i);
                if (cells[i].localName === 'select') {
                    newCell.textContent = cells[i].textContent
                    insertId(i, cells[i].value);
                } else {
                    newCell.textContent = cells[i].value;
                }

            }
            // debugger;

            closeModal(modalWindow);
        });


    }


    tBody.innerHTML = localStorage.getItem(modalWindow.tableId);

    // Закрытие модального окна отправка в локальное хранилище нового экземпляра таблицы
    // И ПЕРЕЗАГРУЗКА СТРАНИЦЫ

    closeModalBtn.addEventListener('click', () => {
        closeModal(modalWindow);
    });

    const closeModal = (modalWindow) => {

        modal.style.display = 'none';
        localStorage.setItem(modalWindow.tableId, tBody.innerHTML);
        form.querySelectorAll('input').forEach((input) => {
            input.remove();
        })
        location.reload() // Перезагрузка страницы - еСЛИ ЭТОГО НЕ СДЕЛАТЬ, БЕЗ ПЕРЕГРУЗКИ, ДОБАВЛЕНИЕ БУДЕТ В ОБЕ ТАБЛИЦЫ

    }

}

//Подгрузка таблицы ПО ВЕЩАМ И МЕСТАМ ХРАНЕНИЯ 'thingsInPlaces/index.html'
//Подзагрузка таблицы по местам
try {
    const placesAndThings = {
        columnIdStr: 0,
        containerId: '#containerOne', //ИД контейнера
        tableId: '#thingsAndPlaсes', //'#thingsAndPlases', //ИД таблицы, в которую будем заносить данные
        modalButtonId: '#openModal', //'#openModal',//ИД кнопки открытия мобильного окна
        modalId: '#modal', //Ид модального окна
        // buttonSubmitId: '#submitPlaces', // класс кнопки внесения данных
        idInputSelect: 4, //номер поля в форме, куда вставляется вып. список
        idTableSelect: '#plase', //имя таблицы, содержащей данные для вып. списка
        idColSelect: 3, // номер столбца таблицы, содержащего данные для вып.  списка
        idColSelectValue: 0

    }
    document.querySelector('#openModal').addEventListener('click', () => {

        getModalWindow(placesAndThings);

    })
    localStor(placesAndThings); //Запуск функции загрузки данныех из  LS

} catch (error) {
    console.log('неполадочки в таблице Вещей и мест')
}

//Подзагрузка таблицы по местам
try {
    const places = {
        columnIdStr: 0,
        containerId: '#containerTwo', //ИД контейнера
        tableId: '#plase', //'#thingsAndPlases', //ИД таблицы, в которую будем заносить данные
        modalButtonId: '#openModalPlace', //'#openModal',//ИД кнопки открытия мобильного окна
        modalId: '#modal', //Ид модального окна
        idInputSelect: 1, //номер поля в форме, куда вставляется вып. список
        // buttonSubmitыId: '#submitPlaces', // класс кнопки внесения данных
        idTableSelect: '#flat', //имя таблицы, содержащей данные для вып. списка
        idColSelect: 1 // номер столбца, содержащего данные для вып.  списка

    }
    document.querySelector('#openModalPlace').addEventListener('click', () => {
        getModalWindow(places);

    })
    localStor(places); //Запуск функции загрузки данныех из  LS

} catch (error) {
    console.log('неполадочки в таблице мест')
}


//подзагрузка таблицы помещений
try {
    const flat = {
        columnIdStr: 0,
        containerId: '#containerFree', //ИД контейнера
        tableId: '#flat', //'#thingsAndPlases', //ИД таблицы, в которую будем заносить данные
        modalButtonId: '#openModalFlat', //'#openModal',//ИД кнопки открытия мобильного окна
        modalId: '#modal', //Ид модального окна
        // classButtonClose: 'close', //класс кнопки закрытия
        // formId: '#form',
        //buttonSubmitId: '#submitPlaces', // класс кнопки внесения данных
        /* nameLs: 'tablePlaces', //'tableData',// имя таблицы в localStorage*/
    }

    document.querySelector('#openModalFlat').addEventListener('click', () => {
        console.log('нажата кнопка помещений2')
        getModalWindow(flat);
    })
    localStor(flat); //Запуск функции загрузки данныех из  LS

} catch (error) {
    console.log('неполадочки в таблице ПОМЕЩЕНИЙ')
}

//Подзагрузка таблицы по ГРУППАМ
try {
    const group = {
        columnIdStr: 0, //Номер столбца с ID кодом
        containerId: '#containerGroup', //ИД контейнера
        tableId: '#group', //'#thingsAndPlases', //ИД таблицы, в которую будем заносить данные
        modalButtonId: '#openModalGroup', //'#openModal',//ИД кнопки открытия модального окна
        modalId: '#modal', //Ид модального окна
        // buttonSubmitId: '#submitPlaces', // класс кнопки внесения данных
        // idTableSelect: '#flat', //имя таблицы, содержащей данные для вып. списка
        // idColSelect: 1 // номер столбца, содержащего данные для вып.  списка
    }
    document.querySelector('#openModalGroup').addEventListener('click', () => {
        getModalWindow(group);

    })
    localStor(group); //Запуск функции загрузки данныех из  LS

} catch (error) {
    console.log('неподгружается таблица групп')
}