function checkType(a) {
    return typeof a === "number";
}

function add(a, b) {
    if(checkType(a) && checkType(b)){
        return a + b;
    }
    return null;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

module.exports = {
    add,
    sub,
    mult,
    div
}