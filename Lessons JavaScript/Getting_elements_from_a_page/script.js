const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circle = document.getElementsByClassName('circle');
console.log(circle);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
})


const oneheart = document.querySelector('.heart');
console.log(oneheart);
