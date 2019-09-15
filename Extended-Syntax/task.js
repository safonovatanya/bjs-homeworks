"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let D = b**2-4*a*c;
    if (D < 0) {
        return [];
    }
    let x1 = (b + Math.sqrt(D))/2*a;
    let x2 = (b - Math.sqrt(D))/2*a;
    if (D == 0) {
        return [x1];
    }
    else {
        return [x1, x2];
    }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let summa = 0;
    if (marks.lenght > 5) {
        marks.splice(5)
        console.log('Много оценок!');
    }
    for (let i = 0; i < marks.lenght; i++) {
        summa += marks [i];
    }
    let averageMark = 'Средний балл: ${summa / marks.length}';
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let today = new Date().getFullYear();
    let BirthdayYear = dateOfBirthday.getFullYear();
    let age = today - BirthdayYear;
    let result;
    if (age >= 18) {
        result = `Не желаете ли вина, ${name}?`;
}
else {
result = `Сожалею, ${name}, но я не могу вам продать алкоголь. `;
}
console.log(result);
return result;
}
}