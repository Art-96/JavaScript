var date = new Date(); // получаем текущую дату
var time = date.getHours(); // получаем текущее время в часах
if (time<13) // сравниваем время с число 13
    alert('Good morning!'); // если время меньше 13
else
    alert('Good evening!'); // если время равно 13 и больше

var income = 300; // к переменной присваивается значение
income = 400; // изменил значение
console.log(income);

let price = 76; // к переменной присваивается значение
price = 54;
console.log(price);

const arte = 10; // определил константу
arte = 23;  // ошибка, arte - константа, мы не можем изменить ее значение
const arte; // ошибка, arte не инициализирована

// Number: представляет числовое значение` 
// Целые числа диапазон: от -2^53 до 2^53
// Дробные числа диапазон: от -2^53 до 2^53 нп:
var x = 45;
var y = 23.897;

// String: представляет строку
var companyName = "Бюро \"Рога и копыта\"";
var companyName1 = "Бюро 'Рога и копыта'";
var companyName2 = 'Бюро "Рога и копыта"';

// Boolean: представляет логическое значение true или false
var isAlive = true;
var isDead = false;

// undefined: указывает, что значение не установлено
// null: указывает на неопределенное значение
var isAlive;
console.log(isAlive); // undefined
isAlive = null;
console.log(isAlive); // null
isAlive = undefined;  // снова установим тип undefined
console.log(isAlive); // undefined

// object: представляет сложный объект
var user = {}; // Простейшее определение объекта
var user = {name: "Tom", age:24};
console.log(user.name);

// typeof: С помощью оператора typeof можно получить тип переменной
var name = "Tom";
console.log(typeof name); // string
var isEnabled = true;
console.log(typeof isEnabled); // boolean
var undefVariable;
console.log(typeof undefVariable); // undefined


var x = 40;
var y = 7;
// Деление по модулю (оператор %) возвращает остаток от деления:
var z = x % y;

// Инкремент:
x++; // x = 6

// префиксный инкремент
var x = 5;
var z = ++x;
console.log(x); // 6
console.log(z); // 6

// постфиксный инкремент
var a = 5;
var b = a++;
console.log(a); // 6
console.log(b); // 5

// префиксный декремент
var x = 5;
var z = --x;
console.log(x); // 4
console.log(z); // 4

// постфиксный декремент
var a = 5;
var b = a--;
console.log(a); // 4
console.log(b); // 5

// Операторы сравнения  
x == 5 // Оператор равенства, если они равны, возвращает true


x === 5 // Оператор тождественности сравнивает два значения и их тип, и если они равны, возвращает true


x != 5 // Сравнивает два значенияv если они не равны, возвращает true


x !== 5 // Сравнивает два значения и их типы, если они не равны, возвращает true


x > 5 // Сравнивает два значения, и если первое больше второго, то возвращает true


x < 5 // Сравнивает два значения, и если первое меньше второго, то возвращает true


x >= 5 // Сравнивает два значения, и если первое больше или равно второму, то возвращает true


x <= 5 // Сравнивает два значения, и если первое меньше или равно второму, то возвращает true


// Логические операции

var income = 100;
var percent = 10;
var result = income > 50 && percent < 12; //(&&) Возвращает true, если обе операции сравнения возвращают true
console.log(result); //true 

var income = 100;
var isDeposit = true;
var result = income > 50 || isDeposit == true; // (||) Возвращает true, если хотя бы одна операция сравнения возвращают true
console.log(result); //true

var isDeposit = false;
var result2 = !isDeposit; //(!) Возвращает true, если операция сравнения возвращает false
console.log(result2); // true


// Для преобразования строки в число применяется функция parseInt():
var number1 = "46";
var number2 = "4";
var result = parseInt(number1) + parseInt(number2);
console.log(result); // 50


// Для преобразования строк в дробные числа применяется функция parseFloat():
var number1 = "46.07";
var number2 = "4.98";
var result = parseFloat(number1) + parseFloat(number2);
console.log(result); //51.05


// С помощью специальной функции isNaN() можно проверить, представляет ли строка число
var num1 = "javascript";
var num2 = "22";
var result = isNaN(num1);
console.log(result); // true - num1 не является числом
     
result = isNaN(num2);
console.log(result); //  false - num2 - это число


// Для создания массива применяется выражение new Array():
var myArray = new Array();

// Существует также более короткий способ инициализации массива:
var myArray = [];

var people = ["Tom", "Alice", "Sam"];
console.log(people[0]); // Tom
var person3 = people[2]; // Sam
console.log(person3); // Sam
console.log(people[7]); // undefined

people[0] = "Bob";
console.log(people[0]); // Bob

people[7] = "Tom"; // можно установить элемент, который изначально не установлен
console.log(people[7]); // Tom

var objects = ["Tom", 12, true, 3.14, false];
console.log(objects); // один массив может хранить данные разных типов


// spread-оператор ... позволяет взять значения из массива по отдельности:
let numbers = [1, 2, 3, 4];
console.log(...numbers);    // 1 2 3 4
console.log(numbers);       // [1, 2, 3, 4]


// Многомерные массивы
var numbers1 = [0, 1, 2, 3, 4, 5 ]; // одномерный массив
var numbers2 = [[0, 1, 2], [3, 4, 5] ]; // двумерный массив

var people = [
    ["Tom", 25, false],
    ["Bill", 38, true],
    ["Alice", 21, false]
];

console.log(people[0]); // ["Tom", 25, false]
console.log(people[1]); // ["Bill", 38, true]

console.log("Имя: " + people[0][0]); // Tom
console.log("Возраст: " + people[0][1]); // 25

people[1] = ["Bob", 29, false]; // присваиваем массив
console.log(people[1][0]); // Bob

// Выражение if
// if(условие) действия;
var income = 100;
var age = 19;
if(income < 150 && age > 18){
 
    var message = "доход больше 50";
    alert(message);
}

// В конструкции if мы также можем использовать блок else
var age = 17;
if(age >= 18){
 
    alert("Вы допущены к программе кредитования");
}
else{
    alert("Вы не можете участвовать в программе, так как возраст меньше 18");
}

// С помощью конструкции else if мы можем добавить альтернативное условие к блоку if:
var income = 300;
if(income < 200){
 
    alert("Доход ниже среднего");
}
else if(income >= 200 && income <= 400){
     
    alert("Средний доход");
}
else{
     
    alert("Доход выше среднего");
}

// Конструкция switch..case
var income = 300;
switch(income){
 
    case 100 : 
        console.log("Доход равен 100");
        break;
    case 200 : 
        console.log("Доход равен 200");
        break;
    case 300 : 
        console.log("Доход равен 300");
        break;
    default: 
        console.log("Доход неизвестной величины");
        break;
}

// Тернарная операция
var a = 1;
var b = 2;
var result = a < b ? a + b : a - b;
console.log(result); // 3


// Цикл for
/* for ([инициализация счетчика]; [условие]; [изменение счетчика]){
 
    // действия
} */
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = 0; i<people.length; i++){
     
    console.log(people[i]);
} // Получить длину массива можно с помощью свойства length


// for..in
/* for (индекс in массив) {
    // действия
}*/
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var index in people){
     
    console.log(people[index]);
}

// Цикл for...of
let users = ["Tom", "Bob", "Sam"];
for(let val of users)
    console.log(val);

// Цикл while
/* while(условие){
     
    // действия
} */
var people = ["Tom", "Alice", "Bob", "Sam"];
var index = 0;
while(index < people.length){
     
    console.log(people[index]);
    index++;
}

// do..while
var x = 1;
do{
    console.log(x * x);
    x++;
}while(x < 10)

// Операторы continue и break
var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for (var i = 0; i < array.length; i++)
{
    if (array[i] > 10)
        break; // прервет выполнение цикла
    document.write(array[i] + "</br>");
}

var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for (var i = 0; i < array.length; i++)
{
    if (array[i] > 10)
        continue; // пропустить итерацию
    document.write(array[i] + "</br>");
}



// Функции
/* function имя_функции([параметр [, ...]]){
 
    // Инструкции
} */

var display = function(){  // определение функции
 
    document.write("функция в JavaScript");
}
display();

function goodMorning(){
 
    document.write("Доброе утро");
}
function goodEvening(){
 
    document.write("Добрый вечер");
}
var message = goodMorning;
message(); // Доброе утро
message = goodEvening;
message(); // Добрый вечер


// Параметры функции
function display(x){  // определение функции
 
    var z = x * x;
    document.write(x + " в квадрате равно " + z);
}
 
display(5); // вызов функции


// Необязательные параметры
function display(x, y){
 
    if(y === undefined) y = 5;
    if(x === undefined) x = 8;
    let z = x * y;
    console.log(z);
}
display();  // 40
display(6); // 30
display(6, 4) // 24


// Неопределенное количество параметров
function display(season, ...temps){
    console.log(season);
    for(index in temps){
        console.log(temps[index]);
    }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);

// Результат функции
var y = 5;
var z = square(y);
document.write(y + " в квадрате равно " + z);
 
function square(x) {
  return x * x;
}


// Функции в качестве параметров
function sum(x, y){
    return x + y;
}
 
function subtract(x, y){
    return x - y;
}
 
function operation(x, y, func){
  
    var result = func(x, y);
    console.log(result);
}
 
console.log("Sum");
operation(10, 6, sum);  // 16
 
console.log("Subtract");
operation(10, 6, subtract); // 4

// Возвращение функции из функции
function menu(n){
  
    if(n==1) return function(x, y){ return x+y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return undefined;
}
 
for(var i=1; i < 5; i++){
    var action = menu(i);
    if(action!==undefined){
        var result = action(5, 4);
        console.log(result);
    }
}


// Глобальные переменные
var x = 5; // Глобал
let d = 8; // Глобал
function displaySquare(){
 
    var z = x * x;
    console.log(z);
}

// Локальные переменные
function displaySquare(){
 
    var z = 10; // Локал
    console.log(z);
     
    let b = 8; // Локал
    console.log(b);
}
console.log(z); //ошибка, так как z не определена

// Сокрытие переменных
var z = 89;
function displaySquare(){
 
    var z = 10; //  в функции будет использоваться локальная переменная
    console.log(z); // 10
}
displaySquare(); // 10 


// Константы
const z = 10;
function displayZ(){
  
    const z = 20;
     
    {
        const z = 30;
        console.log("Block:", z);   // 30
    }
    console.log("Function:", z);    // 20
}
 
displayZ();
console.log("Global:", z);  // 10


// Необъявленные переменные
function bar(){
    foo = "25"; // глобальной
}
bar();
console.log(foo);   // 25


// strict mode
"use strict"; // будет применяться для всего кода
function bar(){
    // "use strict"; будет применяться только для этой функции
    foo = "25";
}
  
bar();
console.log(foo); // ошибка SyntaxError: Unexpected identifier



// Замыкания
/* function outer(){       // внешняя функция
    var n;              // некоторая переменная
    return inner(){     // вложенная функция
        // действия с переменной n
    }
} */
function outer(){
    let x = 5;
    function inner(){
        x++;
        console.log(x);
    };
    return inner;
}
let fn = outer();   // fn = inner, так как функция outer возвращает функцию inner
// вызываем внутреннюю функцию inner
fn();   // 6
fn();   // 7
fn();   // 8

// Самовызывающиеся функции
(function (n){
     
    var result = 1;
    for(var i=1; i<=n; i++)
        result *=i;
    console.log("Факториал числа " + n + " равен " + result);
}(4));


// Паттерн Модуль

let foo = (function(){
    let obj = {greeting: "hello"};
     
    return {
        display: function(){
            console.log(obj.greeting);
        }
    }
})();
foo.display();  // hello

let calculator = (function(){
    let data = { number: 0};
     
    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();   // Result: 9



// Рекурсивные функции
function getFactorial(n){
    if (n === 1){
        return 1;
    }
    else{
         
        return n * getFactorial(n - 1);
    }
}
var result = getFactorial(4); 
console.log(result); // 24

function getFibonachi(n)
{
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    else{
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
var result = getFibonachi(8); //21 
console.log(result); // 21



// Переопределение функций
function display(){
    console.log("Доброе утро");
    display = function(){
        console.log("Добрый день");
    }
}
// присвоение ссылки на функцию до переопределения
var displayMessage = display;
display(); // Доброе утро
display(); // Добрый день
displayMessage(); // Доброе утро
displayMessage(); // Доброе утро



console.log(foo); // ошибка ReferenceError: foo is not defined
console.log(foo);   // undefined
var foo = "Tom";

var c = a * b;
var a = 7;
var b = 3;
console.log(c); // NaN

display();
 
function display(){
    console.log("Hello Hoisting");
}

display();
 
var display = function (){
    console.log("Hello Hoisting");
} // ошибка TypeError: display is not a function. 



// Передача параметров по значению
function change(x){
    x = 2 * x;
    console.log("x in change:", x);
}
 
var n = 10;
console.log("n before change:", n); // n before change: 10
change(n);                          // x in change: 20
console.log("n after change:", n);  // n after change: 10


// Передача по ссылке
function change(user){
    user.name = "Tom";
}
 
var bob ={ 
    name: "Bob"
};
console.log("before change:", bob.name);    // Bob
change(bob);
console.log("after change:", bob.name);     // Tom

function change(array){
    array[0] = 8;
}
function changeFull(array){
    array = [9, 8, 7];
}
 
var numbers = [1, 2, 3];
 
console.log("before change:", numbers);     // [1, 2, 3]
change(numbers);
console.log("after change:", numbers);      // [8, 2, 3]
changeFull(numbers);
console.log("after changeFull:", numbers);  // [8, 2, 3]


// Стрелочные функции
let sum = (x, y) => x + y;
let a = sum(4, 5);      // 9
let b = sum(10, 5);     // 15


let sum = (x, y) => console.log(x + y);
sum(4, 5);      // 9
sum(10, 5);     // 15


var square = n => n * n;
 
console.log(square(5));     // 25
console.log(square(6));     // 36
console.log(square(-7));    // 49


var square = n => {
    let result = n * n;
    return result;
}
 
console.log(square(5));     // 25


let user = (userName, userAge) => ({name: userName, age: userAge});
 
let tom = user("Tom", 34);
let bob = user("Bob", 25);
 
console.log(tom.name, tom.age);     // "Tom", 34
console.log(bob.name, bob.age);     // "Bob", 25


var hello = ()=> console.log("Hello World");
hello();    // Hello World



// Создание нового объекта
// способы создания нового объекта:
var user = new Object();
var user = {};

// Свойства объекта
user.name = "Tom";
user.age = 26;

var user = {
  
    name: "Tom",
    age: 26
};

var name = "Tom";
var age = 34;
var user = {name, age};
 
var teacher = {user, course: "JavaScript"};
console.log(teacher.user);      // {name: "Tom", age: 34}
console.log(teacher.course);    // JavaScript


// Методы объекта
var user = {
  
    name: "Tom",
    age: 26,
    display: function(){
      
        console.log(this.name);
        console.log(this.age);
    }
};
// вызов метода
user.display();


var user = {
  
    name: "Tom",
    age: 26,
    display(){
      
        console.log(this.name, this.age);
    },
    move(place){
        console.log(this.name, "goes to", place);
    }
};
user.display(); // Tom 26
user.move("the shop");  // Tom goes to the shop


// Синтаксис массивов
var user = {};
user["name"] = "Tom";
user["age"] = 26;
user["display"] = function(){
     
    console.log(user.name);
    console.log(user.age);
};
 
// вызов метода
user["display"]();


// Строки в качестве свойств и методов
var user = {
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    "display info": function(){
     
        console.log(user.name);
        console.log(user.age);
    }
};
console.log(user["full name"]);
user["display info"]();


// Удаление свойств
// delete объект.свойство
// delete объект["свойство"]
var user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(user.name);
    console.log(user.age);
};
 
console.log(user.name); // Tom
delete user.name; // удаляем свойство
console.log(user.name); // undefined



var country = {
 
    name: "Германия",
    language: "немецкий",
    capital:{
     
        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};
console.log("Столица: " + country.capital.name); // Берлин
console.log("Население: " + country["capital"]["population"]); // 3375000
console.log("Год основания: " + country.capital["year"]); // 1237


var country = {
 
    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital:{
     
        name: "Берн",
        population: 126598
    },
    cities: [
        { name: "Цюрих", population: 378884},
        { name: "Женева", population: 188634},
        { name: "Базель", population: 164937}
    ]
};
 
// вывод всех элементов из country.languages
document.write("<h3>Официальные языки Швейцарии</h3>");
for(var i=0; i < country.languages.length; i++)
    document.write(country.languages[i] + "<br/>");
     
// вывод всех элементов из country.cities
document.write("<h3>Города Швейцарии</h3>");
for(var i=0; i < country.cities.length; i++)
    document.write(country.cities[i].name + "<br/>");



var user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(user.name);
    console.log(user.age);
};
var hasNameProp = "name" in user;
console.log(hasNameProp); // true - свойство name есть в user
var hasWeightProp = "weight" in user;
console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight

var hasNameProp = user.name!==undefined;
console.log(hasNameProp); // true
var hasWeightProp = user.weight!==undefined;
console.log(hasWeightProp); // false

var hasNameProp = user.hasOwnProperty('name');
console.log(hasNameProp); // true
var hasDisplayProp = user.hasOwnProperty('display');
console.log(hasDisplayProp); // true
var hasWeightProp = user.hasOwnProperty('weight');
console.log(hasWeightProp); // false



// Перебор свойств и методов
var user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(user.name);
    console.log(user.age);
};
for(var key in user) {
    console.log(key + " : " + user[key]);
}



function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        }
    };
};
var tom = createUser("Tom", 26);
tom.displayInfo();
var alice = createUser("Alice", 24);
alice.displayInfo();


function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        },
        driveCar: function(car){
            document.write(this.name + " ведет машину " + car.name + "<br/>");
        }
    };
};
 
function createCar(mName, mYear){
    return{
        name: mName,
        year: mYear
    };
};
var tom = createUser("Том", 26);
tom.displayInfo();
var bently = createCar("Бентли", 2004);
tom.driveCar(bently);



var tom = new Object(); // создаем объект

// конструктор типа Car
function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
    };
};
// конструктор типа User
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        document.write(this.name + " ведет машину " + car.name + "<br/>");
    };
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};
 
var tom = new User("Том", 26);
tom.displayInfo();
var bently = new Car("Бентли", 2004);
tom.driveCar(bently);

// Оператор instanceof
var isUser = tom instanceof User;
var isCar = tom instanceof Car;
console.log(isUser);    // true
console.log(isCar);     // false



User.prototype.hello = function(){
    document.write(this.name + " говорит: 'Привет!'<br/>");
};
User.prototype.maxAge = 110;
 
var tom = new User("Том", 26);
tom.hello();
var john = new User("Джон", 28);
john.hello();
console.log(tom.maxAge); // 110
console.log(john.maxAge); // 110


User.prototype.maxAge = 110;
var tom = new User("Том", 26);
var john = new User("Джон", 28);
tom.maxAge = 99;
console.log(tom.maxAge); // 99
console.log(john.maxAge); // 110



// Инкапсуляция
function User (name) {
    this.name = name;
    var _age = 1;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + _age);
    };
    this.getAge = function() { // getter
        return _age;
    }
    this.setAge = function(age) { // setter
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var tom = new User("Том");
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 1
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение
tom.setAge(123); // Недопустимое значение



// Функция как объект
var square = new Function('n', 'return n * n;');
console.log(square(5));

/*Среди свойств объекта Function можно выделить следующие:

arguments: массив аргументов, передаваемых в функцию

length: определяет количество аргументов, которые ожидает функция

caller: определяет функцию, вызвавшую текущую выполняющуюся функцию

name: имя функции

prototype: прототип функции*/


function display(){
     
    console.log("привет мир");
}
Function.prototype.program ="Hello";
 
console.log(display.program); // Hello


// Метод call() вызывает функцию с указанным значением this и аргументами:
function add(x, y){
     
    return x + y;
}
var result = add.call(this, 3, 8);
 
console.log(result); // 11


function User (name, age) {
    this.name = name;
    this.age = age;
}
var tom = new User("Том", 26);
function display(){
    console.log("Ваше имя: " + this.name);
}
display.call(tom); // Ваше имя: Том


function add(x, y){
     
    return x + y;
}
var result = add.call(null, 3, 8);
 
console.log(result); // 11


function add(x, y){
     
    return x + y;
}
var result = add.apply(null, [3, 8]);
 
console.log(result); // 11


// Наследование
// конструктор пользователя
function User (name, age) {
    this.name = name;
    this.age = age;
    this.go = function(){document.write(this.name + " идет <br/>");}
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}
User.prototype.maxage = 110;
 
// конструктор работника
function Employee(name, age, comp){
    User.call(this, name, age);
    this.company = comp;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
    };
}
Employee.prototype = Object.create(User.prototype);
 
var tom = new User("Том", 26);
var bill = new Employee("Билл", 32, "Google");
tom.go();
bill.go();
tom.displayInfo(); 
bill.displayInfo(); 
console.log(bill.maxage);



// Ключевое слово this
// Глобальный контекст
this.alert("global alert");
this.console.log("global console");
 
var currentDocument = this.document; // в данном случае использвание this избыточно.


// Контекст функции
function foo(){
    var bar = "bar2";
    console.log(this.bar);
}
 
var bar = "bar1";
 
foo();  // bar1 

// Контекст объекта
var o = {
    bar: "bar3",
    foo: function(){
        console.log(this.bar);
    }
}
var bar = "bar1";
o.foo();    // bar3

function foo(){
    var bar = "bar2";
    console.log(this.bar);
}
 
var o3 = {bar:"bar3", foo: foo};
var o4 = {bar:"bar4", foo: foo};
 
var bar = "bar1";
 
foo();  // bar1
o3.foo();   // bar3
o4.foo();   // bar4

// Явная привязка
function foo(){
    console.log(this.bar);
}
 
var o3 = {bar: "bar3"}
var bar = "bar1";
foo();  // bar1
foo.apply(o3);  // bar3
// или
// foo.call(o3);

// Метод bind
function foo(){
    console.log(this.bar);
}
 
var o3 = {bar: "bar3"}
var bar = "bar1";
foo();  // bar1
var func = foo.bind(o3);
func(); // bar3

// this и стрелочные функции
var school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        var that = this;
        this.courses.forEach(function(course){
            console.log(that.title, course);
        })
    }
}
school.printCourses();

var school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        this.courses.forEach((course)=>console.log(this.title, course))
    }
}
school.printCourses();



