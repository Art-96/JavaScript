const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert('Click');
// };
// btn.onclick = function() {
//     alert('Second click');
// };


// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('click', () => {
//     alert('Second click');
// });


// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });
// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });


// let i = 0;
const delElem = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++
    // if (i == 1) {
    //     btn.removeEventListener('click', delElem);
    // }
};
// btn.addEventListener('click', delElem);
// overlay.addEventListener('click', delElem);


btns.forEach(btn => {
    btn.addEventListener('click', delElem, {once:true});
});


const link = document.querySelector('a');
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.target);
});