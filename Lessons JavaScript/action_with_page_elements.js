const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneheart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = "background-color: blue; width: 500px;"

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
// const btn = document.createTextNode('Button');

div.classList.add('black');

// wrapper.append(div); // In the end
wrapper.appendChild(div); // deprecated method

// wrapper.prepend(div); // To the beginning

// hearts[0].before(div);
// hearts[0].after(div);
wrapper.insertBefore(div, hearts[1]); // deprecated method


// circle[0].remove();
wrapper.removeChild(hearts[1]); // deprecated method

// hearts[0].replaceWith(circle[0]);
wrapper.replaceChild(circle[0], hearts[0]); // deprecated method


div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
div.insertAdjacentHTML("beforeend", "<h3>Hello</h3>");
div.insertAdjacentHTML("afterend", "<h4>Hello</h4>");
div.insertAdjacentHTML("afterbegin", "<h5>Hello</h5>")