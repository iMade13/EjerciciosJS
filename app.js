let phrase = prompt('Escribe una frase');
if (phrase === '') {
    alert('Debe ingresar un mensaje');
} else {
    document.getElementById('frase').innerHTML = ("La frase  \'  " + phrase + " \'tiene " + count(phrase) + " carácteres y " + spaces(phrase) + " espacios");
    printPhrase(phrase);
}

function count(phrase) {
    let i = 0;
    for (; i < phrase.length; i++) {}
    return i;
};

function spaces(phrase) {
    let countS = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) === " ") {
            countS++;
        }
    }
    return countS;
};

function printPhrase(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        document.write('El carácter en el índice ' + i + ' es:' + phrase.charAt(i).toUpperCase() +
            `</br>`);
    }
};