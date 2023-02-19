let inpt = "";
let btntxt = "";

window.onload = () => {
    document.addEventListener("keydown", keypress)
    
    let btns = document.querySelectorAll('button');
    let array = Array.from(btns);
    array.forEach((button) => {
        button.addEventListener('click', evaluate)
    })
}

function evaluate(event) {
    let screen = document.querySelector('input');
    btntxt = event.target.innerHTML;
    if (btntxt == 'C') {
        inpt = '';
        screen.value = inpt;
    }
    else if (btntxt == ' = ') {
        screen.value = eval(inpt);
        inpt = '';
    }
    else if (btntxt == 'x') {
        btntxt = '*';
        screen.value = inpt + btntxt;
        inpt = screen.value;
    }
    else {
        screen.value = inpt + btntxt;
        inpt = screen.value;
    }
}

function keypress(event) {
    let screen = document.querySelector('input');
    console.log(event.key);
    console.log(event.keyCode);
    if (event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "/" ||
        event.key == "." ||
        event.key == "%" ||
        event.key == "(" ||
        event.key == ")" ||
        event.key <= "9"
    ) {
        screen.value = inpt + event.key;
        inpt = screen.value;
    }
    else if (event.keyCode = 13) {
        screen.value = eval(inpt);
        inpt = '';
        return;                                     // Unknown Error :'(
    }
    else if (event.keyCode >= 65 && event.keyCode <= 90) {
        alert("Wrong Keypress");
    }
}

window.onerror = function () {
    alert("Wrong Input");
    screen = document.querySelector('input');
    inpt = "";
    screen.value = inpt;
};





