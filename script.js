let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button')); //Array.from empeche les elements des s'afficher sous forme d'array dans la console.


buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    })
})