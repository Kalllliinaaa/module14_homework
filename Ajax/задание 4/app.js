const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');

submitButton.addEventListener('click', () => {
  const width = parseInt(input1.value);
  const height = parseInt(input2.value);

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
    result.textContent = 'Одно из чисел вне диапазона от 100 до 300';
    return;
  }

  const url = `https://dummyimage.com/${width}x${height}/`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при получении изображения');
      }
      return response.blob();
    })
    .then(blob => {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      result.innerHTML = ''; // Очищаем предыдущее содержимое
      result.appendChild(img);
    })
    .catch(error => {
      result.textContent = error.message;
    });
});