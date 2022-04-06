
// numbers section
document.getElementById("7").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("7").innerHTML
}

document.getElementById("8").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("8").innerHTML
}
document.getElementById("9").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("9").innerHTML
}
document.getElementById("6").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("6").innerHTML
}
document.getElementById("5").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("5").innerHTML
}
document.getElementById("4").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("4").innerHTML
}
document.getElementById("3").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("3").innerHTML
}
document.getElementById("2").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("2").innerHTML
}
document.getElementById("1").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("1").innerHTML
}
document.getElementById("0").onclick = function () {
    document.getElementById("display").innerHTML += document.getElementById("0").innerHTML
}
document.getElementById(".").onclick = function () {
    let string = document.getElementById("display").innerHTML
    let last = string[string.length - 1];
        if (last == ".") {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1);
        document.getElementById("display").innerHTML += document.getElementById(".").innerHTML
    } else {
        document.getElementById("display").innerHTML += document.getElementById(".").innerHTML
    }
    
}
document.getElementById("C").onclick = function () {
    document.getElementById("display").innerHTML = ""
}

// operators section

document.getElementById("*").onclick = function () {
    let string = document.getElementById("display").innerHTML
    let last = string[string.length - 1];
        if (last == '*' || last == '-' || last == '/' || last == '+' || last == ".") {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1);
        document.getElementById("display").innerHTML += document.getElementById("*").innerHTML;
    } else {
        document.getElementById("display").innerHTML += document.getElementById("*").innerHTML;
    }
}

document.getElementById("/").onclick = function () {
    let string = document.getElementById("display").innerHTML
    let last = string[string.length - 1];
        if (last == '*' || last == '-' || last == '/' || last == '+' || last == ".") {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1);
        document.getElementById("display").innerHTML += document.getElementById("/").innerHTML
    } else {
        document.getElementById("display").innerHTML += document.getElementById("/").innerHTML
    }
    
}

document.getElementById("+").onclick = function () {
    let string = document.getElementById("display").innerHTML
    let last = string[string.length - 1];
        if (last == '*' || last == '-' || last == '/' || last == '+' || last == ".") {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1);
        document.getElementById("display").innerHTML += document.getElementById("+").innerHTML
    } else {
        document.getElementById("display").innerHTML += document.getElementById("+").innerHTML
    }
    
}

document.getElementById("-").onclick = function () {
    let string = document.getElementById("display").innerHTML
    let last = string[string.length - 1];
        if (last == '*' || last == '-' || last == '/' || last == '+' || last == ".") {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1);
        document.getElementById("display").innerHTML += document.getElementById("-").innerHTML
    } else {
        document.getElementById("display").innerHTML += document.getElementById("-").innerHTML
    }
    
}

// "equal to" operator
document.getElementById("equal").onclick = function () {
    let query = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = eval(query)
}

// backspace operator
document.getElementById("backspace").onclick = function () {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1)
}



// Keyboard access section
document.getElementById("calculator").onkeyup = function (e) {

    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (e.key in array || e.key == '*' || e.key == '-' || e.key == '/' || e.key == '+' || e.key == ".") {
        document.getElementById("display").innerHTML += e.key
    } else if (e.key == "Backspace") {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1)
    } else if (e.key == "Enter") {
        let query = document.getElementById("display").innerHTML
        document.getElementById("display").innerHTML = eval(query)
    } else if (e.key == "Delete") {
        document.getElementById("display").innerHTML = ""
    }

}