
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let conterValue = document.querySelector('#value');

const clickFunction = {
    value: 0,
    handeleDecrement() {
        this.value -= 1;
        return conterValue.textContent = this.value;
    },

    handeleIncrement() {
        this.value += 1;
        return conterValue.textContent = this.value;
    },
};

decrement.addEventListener('click', clickFunction.handeleDecrement.bind(clickFunction));
increment.addEventListener('click', clickFunction.handeleIncrement.bind(clickFunction))
