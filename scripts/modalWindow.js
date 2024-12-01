console.log('modalWindow в работе');

// ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА И ДОБАВЛЕНИЯ НОВОЙ СТРОКИ В ТАБЛИЦУ

const modalWindow = {};

const getModalWindow = (modalWindow) => {
    const table = document.querySelector(modalWindow.tableId)

    const openModalBtn = document.querySelector(modalWindow.modalButtonId); // Кнопка открытия модального окна
    const modal = document.querySelector(modalWindow.modalId); //само модальное окно
    const closeModalBtn = modal.getElementsByClassName(modalWindow.classButtonClose)[0]; //кнопка закрытия модального окна
    const form = document.querySelector(modalWindow.formId);
    const buttonSubmit = modal.querySelector(modalWindow.buttonSubmitId)
    const tBody = table.querySelector('tBody')

    //ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
    openModalBtn.addEventListener('click', () => {

        modal.style.display = 'block';
    });

    // Переброска записи из формы в таблицу
    openModalBtn.addEventListener('click', () => {

        table.querySelectorAll('th').forEach((th, index) => {
            //  Добавление в форму модального окна всех остальных полей
            const div = document.createElement('div')
            const input = document.createElement('input')
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', th.textContent);
            form.appendChild(div);
            div.appendChild(input);
        });

    });

    //Закрытие модального окна
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        localStorage.setItem(modalWindow.nameLs, tBody.innerHTML);
    });


    //Добавление строк во вторую таблицу и закрытие модального окна
    buttonSubmit.addEventListener('click', () => {


        const newRow = tBody.insertRow();
        const cells = form.querySelectorAll('input, textarea');

        for (let i = 0; i < cells.length; i++) {
            const newCell = newRow.insertCell(i);
            newCell.textContent = cells[i].value;
        }

    });

    tBody.innerHTML = localStorage.getItem(modalWindow.nameLs);

}

//Подгрузка таблицы ПО ВЕЩАМ И МЕСТАМ ХРАНЕНИЯ 'thingsInPlaces/index.html'
try {
    const thingsAndPlases = {
        tableId: '#thingsAndPlases', //ИД таблицы, в которую будем заносить данные
        modalButtonId: '#openModal',//ИД кнопки открытия мобильного окна
        modalId: '#modal',//Ид модального окна
        classButtonClose: 'close', //класс кнопки закрытия
        formId: '#form',
        buttonSubmitId: '#submit', // класс кнопки внесения данных
        nameLs: 'tableData',// имя таблицы в localStorage
    }
    getModalWindow(thingsAndPlases)
} catch (error) {
    console.log('неполадочки в таблице вещей и мест')
}
