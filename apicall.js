document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    fetch('http://localhost:5000/api/v1/webhook?secret=012569')
        .then(response => response.json())
        .then(data => {
            let res = ''
            for (var i = 0; i < data.length; i++) {
                const record = {
                    id: data[i].id,
                    description: data[i].description,
                }
                res += JSON.stringify(record);
                res += '===================================='
            }
            document.body.innerHTML = res;
        })
        .catch(error => {
            // Обработка ошибок при вызове API
            console.error('Ошибка:', error);
        });
});