const arr = [1, 2, 3, 6, 8];

arr.pop();

arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside an array ${arr}`);
});

const str = prompt("", "");

const product = str.split(", ");

console.log(product);
product.sort();
console.log(product.join("; "));

function compareNum(a, b) {
    return a - b;
}
const ar = [2, 13, 26, 8, 9];

ar.sort(compareNum);
console.log(ar);