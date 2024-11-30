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
    console.log(tBody);



    //ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
    openModalBtn.addEventListener('click', () => {
        console.log('jgf');

        modal.style.display = 'block';
    });

    // Переброска записи из формы в таблицу
    openModalBtn.addEventListener('click', () => {
        table.querySelectorAll('th').forEach((th, index) => {
            //Добавление 3-го поля для направлений + Преобразование полей в TEXTAREA
            if (index === 2 || index === 4) {
                const textarea = document.createElement('textarea');
                textarea.setAttribute('placeholder', th.textContent);
                form.appendChild(textarea);
            } else { // Добавление в форму модального окна всех остальных полей
                const input = document.createElement('input')
                input.setAttribute('type', 'text');
                input.setAttribute('placeholder', th.textContent);
                form.appendChild(input);

            }

        });
    });

    console.log(`${modalWindow.nameLs}`);

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
        // localStorage.setItem('tableData', table.innerHTML);
        // table.innerHTML = localStorage.getItem('tableData');
    });

    tBody.innerHTML = localStorage.getItem(modalWindow.nameLs);
    console.log(tBody.innerHTML);

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
    console.log('неполадочки')
}
