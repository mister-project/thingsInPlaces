"use strict";
console.log("exportCsv работает");

//функция экспорта в csv. Аргументы(все с аппострофами):

const exportCsv = (tableId, tegTbody, buttonId, separator, fileName) => {
  console.log(tableId, tegTbody, buttonId, separator, fileName);

  const csvFile = fileName;
  const tbodyTable = document.querySelector(tableId).querySelector(tegTbody);

  // document.getElementById(buttonId).addEventListener('click', () => {
  // console.log(document.getElementById(buttonId));

  const rows = tbodyTable.querySelectorAll("tr");
  const csvContent = Array.from(rows)
    .map((row) =>
      Array.from(row.children)
        .map((cell) => cell.textContent)
        .join(separator)
    )
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = csvFile;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // });
};

//(    tableId - id экспортируемой таблицы,
//     tegTbody - тэг экспортируемой части,
//     buttonId - id кнопки, запускающей экспорт)
//     fileName - имя создаваемого файла

//ОПТРАВКА в  CSV Журнала - в имени удалить цифры, положить в папку journal/
try {
  document.getElementById("saveCSV").addEventListener("click", () => {
    window.location.reload();
    setTimeout(
      exportCsv(
        "#thingsAndPlaсes",
        "tbody",
        "saveCSV",
        ";",
        "Вещи и места.csv"
      ),
      5000
    );
  });
} catch (error) {
  console.log("Таблица вещей и мест не подгружена");
}

//ОПТРАВКА в  CSV Таблицы мест
try {
  document.getElementById("saveCsvPlace").addEventListener("click", () => {
    exportCsv("#plase", "tbody", "saveCsvPlace", ";", "места.csv");
  });
} catch (error) {
  console.log("Таблица мест не подгружена");
}

//ОПТРАВКА в  CSV Таблицы помещений
try {
  document.getElementById("saveCsvFlat").addEventListener("click", () => {
    exportCsv("#flat", "tbody", "saveCsvFlat", ";", "помещения.csv");
  });
} catch (error) {
  console.log("Таблица помещений не подгружена");
}

//ОПТРАВКА в  CSV Таблицы ГРУПП вещей
try {
  document.getElementById("saveCsvGroup").addEventListener("click", () => {
    exportCsv("#group", "tbody", "saveCsvGroup", ";", "группы_вещей.csv");
  });
} catch (error) {
  console.log("Таблица групп не подгружена");
}

//ОПТРАВКА в  CSV ВСЕХ ТАБЛИЦ
try {
  document.getElementById("saveAllTable").addEventListener("click", () => {
    exportCsv("#thingsAndPlaсes", "tbody", "saveCSV", ";", "Вещи и места.csv");
    exportCsv("#plase", "tbody", "saveCsvPlace", ";", "места.csv");
    exportCsv("#flat", "tbody", "saveCsvFlat", ";", "помещения.csv");
    exportCsv("#group", "tbody", "saveCsvGroup", ";", "группы_вещей.csv");
    alert("Загрузка содержимого ВСЕХ таблиц запущена");
  });
} catch (error) {
  alert("Загрузка всех таблиц НЕ запущена");
}
