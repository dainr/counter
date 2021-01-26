const btn = document.querySelectorAll('.btn');
const counterValue = document.getElementById('value');
let counter = 0;

btn.forEach(btns => {
    btns.addEventListener('click', e => {
        
        let selectedBtn = e.currentTarget.classList;

        if (selectedBtn.contains('increase')) {
            counter++;

        } else if (selectedBtn.contains('decrease')) {
            counter--;

        } else {
            counter = 0;
        }

        if (counter > 0) {
            counterValue.style.color = 'green';
        } else if (counter < 0) {
            counterValue.style.color = 'red';
        } else {
            counterValue.style.color = '#777';
        }
        
        counterValue.innerText = counter;
    });
});

