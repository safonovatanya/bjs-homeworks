"use strict"
//задача1

let a;
let b;
let c;

function getSolutions(a,b,c) {
    let D = (b ** 2 - 4 * a * c);
    if (D<0) {
        return {D:D}
    } else if (D == 0) {
        let x1 = (-b / (2 * a))
        return {roots: x1, D:D}
    } else if (D>0) {
        let x1 = ((-b + Math.sqrt(D)) / (2 * a));
        let x2 = ((-b - Math.sqrt(D)) / (2 * a));
        return {
            roots: [x1, x2], D:D
        }
    }
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions (a,b,c);
    console.log("Вычислим корни квадратного уравнения ${a}x^2 + ${b}x + ${c} = 0");
    console.log("Значение дискриминанта: ${result.D}");
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D) {
        console.log("Уравнение имеет один корень x1 = ${result.roots[0]}");
    } else if (result.D > 0) {
        console.log("Уравнение имеет два корня. X1 = ${result.roots[0]}, x2 = ${result.roots[1]}")
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2)

//задача2

function getAverageScore(data) {
    let allAverage = 0;
    let objectLenght = 0;
    for (let averageMark in data) {
        let value = data [averageMark];
        let summa = 0;
        for (let i = 0; i < value.length; i++) {
            summa = summa + value[i];
        } data[averageMark] = summa / value.length;
        allAverage = allAverage + data [averageMark];
        objectLenght++
        data.average = allAverage / objectLenght;
    }
    return data
}

console.log(getAverageScore) {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry:[2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));


    //задача3
    function getPersonData(secretData){
        let firstname
        let lastname
        if (secretData.aaa === 0){
        firstname = "Родриго";
        }else if ((secretData.aaa === 1))
        {
        firstname = "Эмильо";
        }
        if (secretData.bbb === 0){
        lastname = "Родриго"
        }else if ((secretData.bbb === 1)){
        lastname = "Эмильо"
        }
        return {firstname: firstname , lastname: lastname}
        }
        
        console.log(getPersonData({
        aaa: 0,
        bbb: 0
        }))
        console.log(getPersonData({
        aaa: 0,
        bbb: 1
        }))
        console.log(getPersonData({
        aaa: 1,
        bbb: 0
        }))
        console.log(getPersonData({
        aaa: 1,
        bbb: 1
        }))
        