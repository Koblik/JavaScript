'use strict';
let money = prompt("Ваш бюджет на месяц");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(time);
let answer = prompt("Введите обязательную статью расходов в этом месяце");
console.log(answer);
let cost = prompt("Во сколько обойдется?");
console.log(cost);

var appData = {
    bydjet: money,
    timeData: time,
    expenses: {answer, cost},
    optionalExpenses: {},
    income:['','',''],
    savings: false
};

console.log(appData.bydjet);
console.log(appData.timeData);

alert("Бюджет на "+ appData.timeData + " = "+ ((appData.bydjet - appData.expenses.cost)/30))
