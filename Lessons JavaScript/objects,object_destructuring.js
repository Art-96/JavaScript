const options = {
    name : 'test',
    width : 1024,
    height : 1024,
    colors : {
        border : 'black',
        bg : 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

options.makeTest();

console.log(Object.keys(options).length);


for (let key in options){
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Property ${i} has the meaning ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has the meaning ${options[key]}`);   
    }
}

// object destructuring

const {border, bg} = options.colors;
console.log(border);