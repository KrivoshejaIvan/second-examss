'use strict';
/*
var smallName = prompt('Введите маленькое имя: ');
function usFirst(name){
    if (name === null) {
        return a
    } else {
        return alert(name.slice(0, -1)+ name.toUpperCase().charAt(name.length - 1)) ;
    }



}
usFirst(smallName);
var value1 = prompt('Введите первое число');
var value2 = prompt('Введите второе число');

function smallAdd (num1, num2) {
    var number1 = +num1;
    var number2 = +num2;

    if (number1 > number2) {
        return alert("Меньшее число: " + number2);
    } else if (number1 < number2) {
        return alert("Меньшее число: " + number1);
    } else {
        return alert("Ну ты и Вася");
    }
}
smallAdd(value1, value2);
*/

/*
function numberValidation(numberValue) {
    var userNumber = +prompt('Введите число  больше чем' + numberValue);
    while ((userNumber <= numberValue) || userNumber != 0) {
        userNumber = +prompt('Введите число  больше чем' + numberValue);
    }
    return userNumber;
}
console.log(numberValidation(100));*/

/*
var numberAdd = +prompt('Введите число от 1 до 5');

switch (numberAdd) {
    case 1:
        alert('Неправильно штрокую на широкую');
        break;
    case 2:
        alert('Неправильно штрокую на широкую');
        break;
    case 3:
        alert('Неправильно штрокую на широкую');
        break;
    case 4:
        alert('Ай молодца');
        break;
    default:
        alert('хернб пишешь');
        break;
}*//*Цикл свич кейс*/
/*var i = 6;

while ( i < 18 ) {
    alert(i);
    i++
}*/
//function shownRandom () {
//    var random = Math.floor(Math.random()* 6) + 1;
//    alert(random)
//}
//shownRandom();
/*
function myFunction() {
    return 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri';
}
var days = myFunction();
console.log(days);*/
//nextPrime:
//    for (var i = 2; i <= 10; i++) {
//
//        for (var j = 2; j < i; j++) {
//            if (i % j == 0) continue nextPrime;
//        }
//
//        alert( i ); // простое
//    }

/*
var govno = ['parasha',
            'herasha',
            'sosaha',
            'malasha'];

function govnoList (fuck) {
    document.write(fuck)
}

function printList(fuck) {
    var oList = '<ol>';
    for (var i=0; i < govno.length; i++) {
        oList += '<li>' + fuck[i] + '</li>'
    }
    oList += '</ol>';
    govnoList(oList);
}
printList(govno);*/

var listItem = document.getElementsByClassName('menu-item');
$(document).ready(function () {
$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true
});
});