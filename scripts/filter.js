'use strict'
console.log('filtr.js в работе')

const getFilter = (idInput, idTable) => {


    const filter = document.querySelector(idInput);


    let strTable = document.querySelector(idTable).querySelector('tbody').querySelectorAll('tr')
    console.log(strTable);

    // let strTableNo = document.querySelectorAll('.trNoFilter')
    // // console.log(document.querySelector('span'))

    filter.addEventListener('input', (e) => {

        //     strTableNo.forEach((el) => {
        //         el.style.display = "none"
        //         console.log(el);
        //     })
        strTable.forEach(element => {

            if (element.textContent.toUpperCase().includes((e.target.value).toUpperCase())) {
                element.style.display = "";



            } else {
                element.style.display = "none"
            }
        });

    })

};

getFilter('#filter', "#thingsAndPlaсes")
