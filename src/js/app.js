const form = document.querySelector('#name-field');
const textField = document.querySelector('input');
const clockSection = document.querySelector('#clock-section');
const clock = document.querySelector('#clock');


document.addEventListener('submit', hideForm);

function hideForm(event) {
    event.preventDefault();
    form.style.display = 'none'
    clockSection.style.display = 'flex';
    time()
}

function time() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    minute = checkTime(minute);
    seconds = checkTime(seconds);
    document.getElementById('clock').textContent = `Merhaba ${textField.value}, Saat ${hour}:${minute}`;
    setTimeout(time, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}