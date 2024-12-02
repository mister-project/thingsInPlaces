console.log('modalWindow в работе');

// ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА И ДОБАВЛЕНИЯ НОВОЙ СТРОКИ В ТАБЛИЦУ

const modalWindow = {};

const getModalWindow = (modalWindow) => {
    const container = document.querySelector(modalWindow.containerId)


    let table = container.querySelector(modalWindow.tableId)

    const openModalBtn = container.querySelector(modalWindow.modalButtonId); // Кнопка открытия модального окна

    const modal = document.querySelector(modalWindow.modalId); //само модальное окно

    const closeModalBtn = modal.getElementsByClassName('close')[0]; //кнопка закрытия модального окна

    let form = modal.querySelector('#form');
    const buttonSubmit = modal.querySelector('#submit')

    const tBody = table.querySelector('tBody')

    tBody.innerHTML = localStorage.getItem(modalWindow.nameLs)

    //ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });


    // Переброска записи из формы в таблицу
    container.addEventListener('click', (event) => {

        // ПОЛУЧАЕМ НУЖНУЮ СТРАНИЦУ ЧЕРЕЗ ДЕЛЕГИРОВАНИЕ
        if (event.target.closest(modalWindow.containerId)) {
            addStr(table) // ЗАПУСКАЕМ ФУНКЦИЮ ДОБАВЛЕНИЯ СТРОК В НУЖНОЙ ТАБЛИЦЕ
            // ПО ДРУГОМУ НЕ РАБОТАЕТ
        }

    });

    const addStr = (tabl) => {
        console.log(tabl)
        tabl.querySelectorAll('th').forEach((th, index) => {
            //  Добавление в форму модального окна всех остальных полей
            const div = document.createElement('div')
            const input = document.createElement('input')
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', th.textContent);
            form.appendChild(div);
            div.appendChild(input);
        });

        //Добавление строк в таблицу и закрытие модального окна
        buttonSubmit.addEventListener('click', (btn) => {

            const newRow = tabl.querySelector('tbody').insertRow();
            const cells = form.querySelectorAll('input, textarea');

            for (let i = 0; i < cells.length; i++) {
                const newCell = newRow.insertCell(i);
                newCell.textContent = cells[i].value;
            }
        });

        return
    }


    tBody.innerHTML = localStorage.getItem(modalWindow.nameLs);

    // Закрытие модального окна отправка в локальное хранилище нового экземпляра таблицы
    // И ПЕРЕЗАГРУЗКА СТРАНИЦЫ

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        localStorage.setItem(modalWindow.nameLs, tBody.innerHTML);
        form.querySelectorAll('input').forEach((input) => {
            input.remove();
        })
        location.reload() // Перезагрузка страницы - еСЛИ ЭТОГО НЕ СДЕЛАТЬ, БЕЗ ПЕРЕГРУЗКИ, ДОБАВЛЕНИЕ БУДЕТ В ОБЕ ТАБЛИЦЫ

    });

}

//Подгрузка таблицы ПО ВЕЩАМ И МЕСТАМ ХРАНЕНИЯ 'thingsInPlaces/index.html'
try {
    const thingsAndPlases = {
        containerId: '#containerOne', //ИД контейнера
        tableId: '#thingsAndPlases', //ИД таблицы, в которую будем заносить данные
        modalButtonId: '#openModal',//ИД кнопки открытия мобильного окна
        modalId: '#modal',//Ид модального окна
        // classButtonClose: 'close', //класс кнопки закрытия
        // formId: '#form',
        buttonSubmitId: '#submitThinks', // класс кнопки внесения данных
        nameLs: 'tableData',// имя таблицы в localStorage
    }
    // document.querySelector('#openModal').addEventListener('click', () => {
    //     console.log('13');

    getModalWindow(thingsAndPlases)
    // })

} catch (error) {
    console.log('неполадочки в таблице вещей и мест')
}

try {
    const places = {
        containerId: '#containerTwo', //ИД контейнера
        tableId: '#plase',//'#thingsAndPlases', //ИД таблицы, в которую будем заносить данные
        modalButtonId: '#openModalPlace',//'#openModal',//ИД кнопки открытия мобильного окна
        modalId: '#modal',//Ид модального окна
        // classButtonClose: 'close', //класс кнопки закрытия
        // formId: '#form',
        buttonSubmitId: '#submitPlaces', // класс кнопки внесения данных
        nameLs: 'tablePlaces', //'tableData',// имя таблицы в localStorage
    }

    // document.querySelector('#openModalPlace').addEventListener('click', () => {
    getModalWindow(places);
    // })

} catch (error) {
    console.log('неполадочки в таблице мест')
}