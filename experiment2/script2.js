document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const jsonData = JSON.parse(e.target.result);
        populateTables(jsonData);
      };

      reader.readAsText(file);
    }
  });

function populateTables(data) {
  for (let tableId in data) {
    const tableData = data[tableId];
    const tableBody = document.getElementById(tableId).querySelector("tbody");

    // Очистка существующих строк
    tableBody.innerHTML = "";

    tableData.forEach((item) => {
      const row = document.createElement("tr");

      // Создаем ячейки для каждой строки
      for (let key in item) {
        const cell = document.createElement("td");
        cell.textContent = item[key];
        row.appendChild(cell);
      }

      // Добавляем строку в таблицу
      tableBody.appendChild(row);
    });
  }
}
