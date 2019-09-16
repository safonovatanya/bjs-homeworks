"use strict"
//задача1
function getSolutions(a,b,c) {
    let D = b * 2 - 4 * a * c;
    let x1;
    let x2;
    if (D<0) {
        return {D:D}
    } else if (D==0) {
        x1 = -b / 2 * a;
        return { roots : [x1], D:D}
    } else if (D>0) {
        x1 = (-b + Math.sqrt(D)) / 2 * a;
        x2 = (-b - Math.sqrt(D)) / 2 * a;
        return { roots: [x1 : x2], D : D};
    }
}

function showSolutionsMessage (a,b,c) {
    let result = getSolutions (a,b,c);
    console.log("Вычислим корни квадратного уравнения ${a}x*x + ${b}x + ${c}");
    console.log("Значение дискриминанта: + result.D");
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней")
    } else if (result.D == 0) {
        console.log("Уравнение имеет один корень x1 = " + result.roots)
    } else if (result.D > 0) {
        console.log('Уравнение имеет два корня. X₁ = ' + result.roots[0] + ', X₂ = ' + result.roots[1])
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2)

//задача2
let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry:[2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
    };

function getAverageScore (data) {
    let total = 0;
    for (i = 0; i < data.lenght; i |+= 1) {
        total += data [i];
    }
    return total / data.lenght;
}

function getAverageScore(scores){
    let average = {};
    let totalcount = 0
    let totalscore = 0
    
    for (key in scores){
    average[key] = calculateAverage(scores[key])
    totalscore += calculateAverage(scores[key])
    totalcount++
    }
    average["average"] = totalscore/totalcount
    return(average)
    }

    console.log(getAverageScore( {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry:[2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
    }))

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
        