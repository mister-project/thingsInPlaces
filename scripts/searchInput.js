"use strict";
console.log("searchInput в работе");
// const updateButton = document.querySelector("#updateButton");

const getSearchSelect = (object) => {
  let openModalBtn = document.querySelector(object.btnOpenModal);
  openModalBtn.addEventListener("click", () => {
    // слушаем кнопку открытия модального окна
    console.log("Нажатие1");
    updateButton.addEventListener("click", () => {
      // слушаем кнопку "Обновить"
      const searchInput = document.querySelector("#searchSelect");
      searchInput.addEventListener("input", (el) => {
        console.log(searchInput.value.toLowerCase());
      });
    });
  });
};

try {
  const object1 = {
    btnOpenModal: "#openModalPlace", // кнопка "Внести новое место"
  };
  getSearchSelect(object1);
} catch (error) {
  console.log("функция поиска  Места в выпадающем не запустилась");
}
