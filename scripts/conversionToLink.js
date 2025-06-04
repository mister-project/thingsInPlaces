console.log("conversionToLink.js подключен");

// Функция для преобразования текста в ссылку
function convertTextToLinks() {
  // Получаем таблицу по идентификатору
  const table = document.getElementById("thingsAndPlaсes");
  // Перебираем все строки таблицы, начиная со второй (игнорируя заголовок)
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    // Перебираем все ячейки в строке
    for (let j = 0; j < row.cells.length; j++) {
      const cell = row.cells[j];
      const cellContent = cell.innerText.trim(); // Получаем текст ячейки
      // Проверяем, содержит ли текст 'http'
      if (cellContent.includes("http")) {
        // Создаем ссылку
        const link = document.createElement("a");
        link.href = cellContent; // Устанавливаем адрес ссылки
        link.target = "_blank"; // Открывать в новой вкладке
        link.innerText = cellContent; // Устанавливаем текст ссылки

        // Очищаем содержимое ячейки и добавляем ссылку
        cell.innerHTML = "";
        cell.appendChild(link);
      }
    }
  }
}

// Вызываем функцию преобразования
convertTextToLinks();
