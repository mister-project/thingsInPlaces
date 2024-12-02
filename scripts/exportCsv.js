'use strict'
console.log('exportCsv работает')

//функция экспорта в csv. Аргументы(все с аппострофами): 

const exportCsv = (tableId, tegTbody, buttonId, separator, fileName) => {
    const csvFile = fileName;
    const tbodyTable = document.querySelector(tableId).querySelector(tegTbody);

    document.getElementById(buttonId).addEventListener('click', () => {
        const rows = tbodyTable.querySelectorAll('tr');
        const csvContent = Array.from(rows).map(row =>
            Array.from(row.children).map(cell => cell.textContent).join(separator)
        ).join('\n');

        const blob = new Blob([csvContent], {
            type: 'text/csv'
        });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = csvFile;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

//(    tableId - id экспортируемой таблицы, 
//     tegTbody - тэг экспортируемой части, 
//     buttonId - id кнопки, запускающей экспорт)
//     fileName - имя создаваемого файла

//ОПТРАВКА в  CSV Журнала - в имени удалить цифры, положить в папку journal/
try {
    exportCsv('#thingsAndPlases', 'tbody', 'saveCSV', ';', 'Вещи и места.csv');
} catch (error) {
    console.log('Основная таблица')
}
//ОПТРАВКА в  CSV Таблицы НАПРАВЛЕНИЙ - в имени удалить цифры, положить в папку journal/
try {
    exportCsv('#naprStv2', 'tbody', 'saveCSV', ';', 'napr.csv');
} catch (error) {
    console.log('вторая таблица - не работает экспорт в CSV')
}
