var display = document.querySelector('#display');
let arrayvalues = [];
let arrayops = [];


let wait = () => {
    display.innerHTML = ''
}

let press = (e) => {
    if(display.innerHTML == 0){
        display.innerHTML = e;
    } else {
        display.innerHTML += e;
        if(display.innerHTML.length > 10){
            display.innerHTML = 'Maximun 10 digits';
            setTimeout(wait, 1000);
            clr();
        }
        if(e == '.'){
            if(display.innerHTML.includes('.')){
                display.innerHTML = 'Maximun 1 decimal';
                setTimeout(wait, 1000);
                clr();
            } else {
                display.innerHTML += e;
            }
        }
    }
}

let setOP = (e) => {
    let valuedisplay = parseFloat(display.innerHTML);
    arrayvalues.push(valuedisplay);
    arrayops.push(e);
    setTimeout(wait, 50);
    if(arrayops.length == 2){
        calc();
    }
}

let clr = () => {
    setTimeout(wait, 100);
    arrayvalues = [];
    arrayops = [];
}

let calc = () => {
    let valuedisplay = parseFloat(display.innerHTML);
    arrayvalues.push(valuedisplay);
    let result = 0;
    for(let i = 0; i < arrayops.length; i++){
        if(arrayops[i] == '+'){
            result = arrayvalues[i] + arrayvalues[i+1];
        } else if(arrayops[i] == '-'){
            result = arrayvalues[i] - arrayvalues[i+1];
        } else if(arrayops[i] == '*'){
            result = arrayvalues[i] * arrayvalues[i+1];
        } else if(arrayops[i] == '/'){
            result = arrayvalues[i] / arrayvalues[i+1];
        }
    }
    display.innerHTML = result;
    arrayvalues = [];
    arrayops = [];
}















