function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});
// Пиши код ниже этой строки

makePizza('Ультрасыр', function notify(pizzaName) {console.log(pizzaName)});



// Задание
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр');

// Тесты
// Объявлена функция makePizza.
// Функция makePizza принимает два параметра.
// Вторым аргументом при вызове makePizza('Ультрасыр') передана функция eatPizza с единственным параметром pizzaName.

// Результаты
// Объявлена функция `makePizza`
// Функция `makePizza` принимает два параметра
// Вторым аргументом при вызове `makePizza('Ультрасыр')` передана функция `eatPizza` с единственным параметром `pizzaName`