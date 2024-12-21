'use strict'
console.log('импорт CSV в работе');

//функция загрузки CSV - файла
function loadTableData(idTable, idInput, file) {
    console.log(idTable, idInput, file);
    let csv = document.getElementById(idInput);
    const tBody = document.querySelector(idTable).querySelector('tbody');

    // const tBody = document.getElementById(idTable).querySelector('tbody')

    // csv.addEventListener('change', (event) => {

    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split('\n')
            .map(row => row.split(';'));
        const table = document.querySelector(idTable);
        const tbody = table.querySelector('tbody')

        tbody.innerHTML = '';

        for (let i = 0; i < rows.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < rows[i].length; j++) {
                let td = document.createElement('td');
                td.textContent = rows[i][j];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        localStorage.setItem(idTable, tBody.innerHTML);
        csv.style.display = 'none';
        // button.style.display = 'block';
    };

    reader.readAsText(file);
    // });
    // ====ЕСЛИ РАБОТАЕМ НА СЕРВЕРЕ, то используем FeTCH=======
    // fetch(csvFileName)
    //     .then(response => response.text())
    //     .then(data => {
    //         const rows = data.split('\n');
    //         for (let i = 0; i < rows.length; i++) {
    //             const cells = rows[i].split(';');
    //             // console.log(document.querySelector('#tableOne'))

    //             const row = document.createElement('tr');
    //             cells.forEach(cellData => {
    //                 const cell = document.createElement('td');
    //                 cell.textContent = cellData;
    //                 row.appendChild(cell);
    //             });
    //             document.querySelector(idTable).querySelector('tbody').appendChild(row);

    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });

}

//Запуск функции подгрузки таблицы ВЕЩЕЙ и их мест
try {

    document.getElementById('csv').addEventListener('change', (event) => {
        const file = event.target.files[0];
        loadTableData('#thingsAndPlaсes', 'csv', file);
    })
} catch (error) {
    console.log('не работает загрузка таблицы ВЕЩИ ПО МЕСТАМ')
}

//Запуск функции подгрузки таблицы  мест
try {

    document.getElementById('csvPlace').addEventListener('change', (event) => {
        const file = event.target.files[0];
        loadTableData('#plase', 'csvPlace', file);
    })
} catch (error) {
    console.log('не работает загрузка таблицы ВЕЩИ ПО МЕСТАМ')
}