const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');

submitButton.addEventListener('click', () => {
  const page = parseInt(input1.value);
  const limit = parseInt(input2.value);

  if (isNaN(page) || page < 1 || page > 10) {
    result.textContent = 'Номер страниц вне диапазона от 1 до 10';
    return;
  }

  if (isNaN(limit)  || limit < 1 || limit > 10) {
    result.textContent = 'Лимит вне диапазона от 1 до 10';
    return;
  }

  if (isNaN(page) || isNaN(limit) || page < 1 || page > 10 || limit < 1 || limit > 10) {
    result.textContent = 'Лимит и номер страницы вне диапазона от 1 до 10';
    return;
  }

  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`;

  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при получении данных');
    }
    return response.json();
  })
  .then(data => {
    localStorage.setItem('photos', JSON.stringify(data));

    result.innerHTML = '';

    data.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.thumbnailUrl;
      result.appendChild(img);
    });
  })
  .catch(error => {
    result.textContent = error.message;
  });
});

window.addEventListener('load', () => {
const photos = JSON.parse(localStorage.getItem('photos'));
if (photos) {
  result.innerHTML = '';
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.thumbnailUrl;
    result.appendChild(img);
  });
}
});