// own.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // предотвращаем отправку формы по умолчанию

        // Получаем значения из полей формы
        const name = document.getElementById('name').value;
        const tel = document.getElementById('tel').value;

        const resultElement = document.createElement('h1');
        const clean = document.getElementById('res');
        if (clean)
            clean.remove();
        resultElement.id = 'res'
        resultElement.textContent = `${name}, you were successfully confirmed!`;
        //Добавляем новый элемент на страницу
        document.body.appendChild(resultElement);
    });
});