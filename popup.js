const btn = document.querySelector('button');
const popup = document.querySelector('.popup-wraper');
const poClose = document.querySelector('.popup-close');

btn.addEventListener('click', () =>{
    popup.style.display = 'block';
});

poClose.addEventListener('click', () =>{
    popup.style.display = 'none';
});

popup.addEventListener('click', _ =>{
    popup.style.display = 'none';
});