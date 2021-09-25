var bt0 = document.querySelector('.bt0');
var bt1 = document.querySelector('.bt1');
var bt2 = document.querySelector('.bt2');
var bt3 = document.querySelector('.bt3');
var bt4 = document.querySelector('.bt4');
var bt5 = document.querySelector('.bt5');
var bt6 = document.querySelector('.bt6');
var bt7 = document.querySelector('.bt7');
var bt8 = document.querySelector('.bt8');
var bt9 = document.querySelector('.bt9');

var btAdd = document.querySelector('.btAdd');
var btSub = document.querySelector('.btSub');
var btMul = document.querySelector('.btMul');
var btDiv = document.querySelector('.btDiv');

var btReset = document.querySelector('.btReset');
var btPonto = document.querySelector('.btPonto');
var btResut = document.querySelector('.btResut');

var num1 = 0;
var num2 = 0;
var op = null;
var resultado = null;
var concluido = false;
var decimal = false;
var display = document.querySelector('.display');

//Evet Listeners calculadora
btAdd.addEventListener('click', function(){
    decimal = false;
    op = "+";
    addDisplay(op);
});
btSub.addEventListener('click', function(){
    decimal = false;
    op = "-";
    addDisplay(op);
});
btMul.addEventListener('click', function(){
    decimal = false;
    op = "*";
    addDisplay(op);
});
btDiv.addEventListener('click', function(){
    decimal = false;
    op = "/";
    addDisplay(op);
});
btPonto.addEventListener('click', function(){
    decimal = false;
    op = "%";
    addDisplay(op);
});
bt1.addEventListener('click', function(){
    addCalc(1);
    addDisplay(1);
});
bt2.addEventListener('click', function(){
    addCalc(2);
    addDisplay(2);
});
bt4.addEventListener('click', function(){
    addCalc(4);
    addDisplay(4);
});
bt5.addEventListener('click', function(){
    addCalc(5);
    addDisplay(5);
});
bt6.addEventListener('click', function(){
    addCalc(6);
    addDisplay(6);
});
bt7.addEventListener('click', function(){
    addCalc(7);
    addDisplay(7);
});
bt8.addEventListener('click', function(){
    addCalc(8);
    addDisplay(8);
});
bt9.addEventListener('click', function(){
    addCalc(9);
    addDisplay(9);
});
bt0.addEventListener('click', function(){
    addCalc(0);
    addDisplay(0);
});

//Funções
function addCalc(n){
    if(concluido){
        reset();
        concluido = false;
    }

    if(op == null){
        if(decimal){
            num1 += + n/10;
        }else{
            num1 = num1*10 + n;
        }
    }else{
        if(decimal){
            num2 += + n/10;
        }else{
            num2 = num2*10 + n;
        }
    }

    if(num1 == 0 || op == null || num2 == 0){
        btResut.disabled = true;
    }else{
        btResut.disabled = false;
    }
}


btResut.addEventListener('click', function(){
    concluido = true;
    switch (op){
        case "+" :
            soma();
            break;
        case "-":
            subtr();
            break;
        case "*":
            mult();
            break;
        case "/":
            div();
            break;
        case "%":
            mod();
            break;
    }
})


function soma(){
    setDisplay(num1 + num2);
}
function subtr(){
    setDisplay(num1 - num2);
}
function mult(){
    setDisplay(num1 * num2);
}
function div(){
    setDisplay(num1 / num2);
}
function mod(){
    setDisplay(num1 % num2);
}
function addDisplay(n){
    console.log(display.textContent.length);
    if(display.textContent.length < 12){
        display.textContent += n; 
    }
}

function setDisplay(str){
    display.textContent = str;
    if(display.textContent <= 12){
        display.textContent = display.textContent.trim();
    }else{
        display.textContent = display.textContent.substr(0, 11);
    }
}

btReset.addEventListener('click', reset);

function reset(){
    num1 = 0;
    num2 = 0;
    op = null;
    resultado = null;
    display.textContent = '';
    btResut.disabled = true;
    decimal = false;
}
