const value = document.querySelector('input').value;
const button = document.getElementById('submitId');
const number = document.getElementById('headText');
const inputText = value;

const xhr = new XMLHttpRequest;


xhr.onload = function() {
    if (inputText < 1 || inputText > 10) {
        console.log('число вне диапазона от 1 до 10');
    } else {
        const photos = JSON.parse(xhr.response); 
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = photo.title;
            document.getElementById('image-container').appendChild(img);
        });
    }
};


xhr.onerror = function() {
    if(inputText < 1 || inputText > 10){
        console.log('число вне диапазона от 1 до 10');
    }
};

button.addEventListener('click', function(){
    const inputText = value;
    const result = number.textContent = `Вы ввели: ${inputText}`; 
    console.log(inputText); 
    console.log(result); 
})

xhr.open("get", `https://jsonplaceholder.typicode.com/photos?_limit=${inputText}`, true);

xhr.send();


