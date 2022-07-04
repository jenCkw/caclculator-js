let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button')); //Array.from empeche les elements des s'afficher sous forme d'array dans la console.

//creation nouveau tableau avec les resultats de la fonction sur chaque element du tableau
buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText)
       switch(e.target.innerText){
           case 'c': 
                display.innerText = '';
                break;

           case '←': 
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;

           case '=': 
               // display.innerText = "*";

               try {
                display.innerText = eval(display.innerText);
               } catch {
                   display.innerText = 'Error';
               }
                break;
           default:
               display.innerText += e.target.innerText;
       }
    });
});