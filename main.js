let bill = document.querySelector('.inputs-section__bill-input');
let billNumber = parseInt(bill.value);

let people = document.querySelector('.inputs-section__people-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');

let buttons = document.querySelectorAll('.btns__button');

let totalResult = document.querySelector('.results__total-value');
let tipValue = 5;
let alert = document.querySelector('#alert');
buttons.forEach(element => {
    element.addEventListener('click', e => {
        tipValue = parseInt(e.target.innerText.slice(0, -1));

        calculateTip();
    });
})

bill.addEventListener('input', () => {
    billNumber = parseFloat(bill.value);
    calculateTip();
})

let custom = document.querySelector('.btns__custom');

custom.addEventListener('input', () => {
    tipValue = parseInt(custom.value);
    if (!isNaN(tipValue)) {
        calculateTip();
    }
})

people.addEventListener('input', () => {
    peopleNumber = parseFloat(people.value);

    if (peopleNumber == 0 || isNaN(peopleNumber)) {
        people.style.borderColor = 'rgb(164, 68, 68)';
        alert.classList.add('error');
    } else {
        alert.classList.remove('error');
        people.style.borderColor = 'hsl(189, 41%,97%)';

        calculateTip();
    }
})

let resetBtn = document.querySelector('.results-section__reset');
resetBtn.addEventListener('click', () => {
    bill.vallue = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = 'Custom';
    calculateTip();
})

function calculateTip() {
    tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

    totalResult.innerHTML = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);

}