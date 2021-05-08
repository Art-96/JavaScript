// to string 

console.log(typeof(String(null)));
console.log(typeof(String(4)));

console.log(typeof(5 + ''));


// to number

console.log(typeof(Number('4')));

console.log(typeof(+'5'));

console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("some question ?", "");


// to boolean

// 0, '', null. undefined, NaN => False

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

console.log(typeof(Boolean(3)));

console.log(typeof(!!'33'));