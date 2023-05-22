// const text= document.querySelector('.head');
// const changeColor= document.querySelector('.btn');

// changeColor.addEventListener('click', function(){
//     text.classList.toggle('.head')
// });

let empty = [];
let number = document.querySelectorAll('.number');
let display = document.querySelector('.displayScreen');
let equal = document.querySelector('.equal');
let allClear = document.querySelector('.allClear');
let del = document.querySelector('.del');

number.forEach((numbers) => {
        numbers.addEventListener('click', (e) => {
            if(display.value === 'ERROR')  {
                display.value = '';
            } else {
                e.preventDefault();
                console.log(e.target.innerText);
                empty.push(e.target.innerText)
                let numbers = e.target.innerText
                display.value += numbers ;
            }
        })
    } 
)

function updateScreen(e) {
    console.log('done');
}

equal.addEventListener('click', (e)=> {
    try {
        if(display.value == '') {
            display.value = '';
        } else{
            e.preventDefault();
            console.log(e.target.innerText);
            let evaluation = eval(display.value);
            console.log(evaluation);
            display.value = ''
            display.value += evaluation;        
        }
    } catch (err) {
        display.value = '';
        display.value += "ERROR"
    }
});

allClear.addEventListener('click', (e)=> {
    e.preventDefault();
    display.value = '';
});

del.addEventListener('click', (e)=> {
    display.value = display.value.slice(0, -1);
})
