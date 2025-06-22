document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (fileEvent) {
      const jsonData = JSON.parse(fileEvent.target.result);
      createTables(jsonData);
    };

    reader.readAsText(file);
  });

function createTables(data) {
  const container = document.getElementById("tablesContainer");
  container.innerHTML = ""; // Очистка контейнера перед созданием новых таблиц

  for (const [tableName, rows] of Object.entries(data)) {
    const table = document.createElement("table");
    table.id = tableName;
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.marginBottom = "20px";

    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Создание заголовков
    Object.keys(rows[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      th.style.border = "1px solid black";
      th.style.padding = "8px";
      headerRow.appendChild(th);
    });
    header.appendChild(headerRow);
    table.appendChild(header);

    const body = document.createElement("tbody");

    // Создание строк данных
    rows.forEach((row) => {
      const dataRow = document.createElement("tr");

      Object.values(row).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        td.style.border = "1px solid black";
        td.style.padding = "8px";
        dataRow.appendChild(td);
      });

      body.appendChild(dataRow);
    });

    table.appendChild(body);
    container.appendChild(table);
  }
}
