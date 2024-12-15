console.log('sumCell в работе')
const getSumCell = (idTable) => {
    const table = document.querySelector(idTable);

    let sumCell = Array.from(table.rows)
        .slice(1) //отсекли заголовки
   //перебор строк и сложение нужных ячеек
    sumCell.forEach((str) => {
        str.cells[3].innerText = `${str.cells[1].innerText}/${str.cells[2].innerText}`;
    })
}
try {
   // document.querySelector('#openModalPlace').addEventListener('click', () => {
       getSumCell('#plase');
   // })

} catch (error) {
    console.log('че - то сумма в поле не работает')
}
