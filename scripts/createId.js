const createId = (idform, idColumn) => {
    const openModalBtn = document.querySelector('#openModal')

    const now = new Date();
    let idRow = `${now.getFullYear()}`.slice(-2) + `0${now.getMonth() + 1}`.slice(-2) + `0${now.getDate()}`.slice(-2) + `0${now.getHours()}`.slice(-2) + `0${now.getMinutes()}`.slice(-2) + `0${now.getSeconds()}`.slice(-2)
    console.log(idRow)
    // openModalBtn.addEventListener('click', () => {
    //     console.log(form.querySelectorAll('input'));
    // })

    // document.getElementById('openModal').addEventListener('click', () => {
    //     insertId()
    console.log(modal.querySelector('form').querySelectorAll('input'));


    // })

    // const insertId = () => {
    //     const inputs = form.getElementsByTagName('input')
    //     console.log(inputs);
    //     for (let index = 0; index < inputs.length; index++) {
    //         const element = inputs[index];
    //         console.log(index);


    //     }


    //     // })

    // }

}

try {
    document.querySelector('#openModal').addEventListener('click', () => {
        createId('#form', 0)
    })

} catch (error) {

}
