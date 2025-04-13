"use strict";
console.log("searchInput в работе");
// const updateButton = document.querySelector("#updateButton");

const getSearchSelect = (object) => {
  let openModalBtn = document.querySelector(object.btnOpenModal);
  openModalBtn.addEventListener("click", () => {
    // слушаем кнопку открытия модального окна
    console.log("Нажатие1");
    setTimeout(() => {
      //ввод задержки при открытии модального окна и получение значений из окна поиска значений вып. списка

      const searchInput = document.querySelector("#searchSelect"); //получаем поле для фильтрации селекта
      const select = document.querySelector("#points");
      searchInput.addEventListener("focus", function () {
        select.classList.add("show");
      });
      searchInput.addEventListener("input", (el) => {
        //НАЧАЛО - ФИЛЬТРАЦИЯ ВЫПАДАЮЩИХ ЗНАЧЕНИЙ В ПОЛЕ points ПО ЗНАЧЕНИЮ В ПОЛЕ 'searchSelect'

        const filter = searchInput.value.toLowerCase();
        const options = select.options;

        for (let i = 0; i < options.length; i++) {
          const txtValue = options[i].text.toLowerCase();
          options[i].style.display = txtValue.includes(filter) ? "" : "none";
        }
        //ОКОНЧАНИЕ - ФИЛЬТРАЦИЯ ВЫПАДАЮЩИХ ЗНАЧЕНИЙ В ПОЛЕ points ПО ЗНАЧЕНИЮ В ПОЛЕ 'searchSelect'
      });

      function updateValue() {
        // const selectedOption = select.options[select.selectedIndex];
        // searchInput.value = selectedOption.text;

        searchInput.remove();
      }

      document
        .querySelector("#updateButton")
        .addEventListener("click", () => {});
      document.querySelector("#points").addEventListener("change", () => {
        updateValue();
      });
    }, 500); // Задержка для обработки клика
  });
};

//Фильтрация выпадающего списка при вводе нового МЕСТА
try {
  const object1 = {
    btnOpenModal: "#openModalPlace", // кнопка "Внести новое место"
  };
  getSearchSelect(object1);
} catch (error) {
  console.log("функция поиска  Места в выпадающем не запустилась");
}

//Фильтрация выпадающего списка при вводе ВЕЩИ И МЕСТА (верхняя таблица)
try {
  const object2 = {
    btnOpenModal: "#openModal", // кнопка "Внести новое место"
  };
  getSearchSelect(object2);
} catch (error) {
  console.log("функция поиска ВЕЩИ И МЕСТА (верхняя таблица) не активна");
}
