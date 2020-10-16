// Declare vars
let one = document.getElementById('one'),
  two = document.getElementById('two'),
  three = document.getElementById('three'),
  four = document.getElementById('four'),
  five = document.getElementById('five'),
  six = document.getElementById('six'),
  seven = document.getElementById('seven'),
  eight = document.getElementById('eight'),
  nine = document.getElementById('nine'),
  zero = document.getElementById('zero'),
  plus = document.getElementById('plus'),
  minus = document.getElementById('minus'),
  multiply = document.getElementById('multiply'),
  divide = document.getElementById('divide'),
  equals = document.getElementById('equals'),
  solution = document.getElementById('solution');

let equation = '';

one.addEventListener('click', function () {
  equation += one.innerText;
});

two.addEventListener('click', function () {
  equation += two.innerText;
});

three.addEventListener('click', function () {
  equation += three.innerText;
});

four.addEventListener('click', function () {
  equation += four.innerText;
});

five.addEventListener('click', function () {
  equation += five.innerText;
});

six.addEventListener('click', function () {
  equation += six.innerText;
});

seven.addEventListener('click', function () {
  equation += seven.innerText;
});

eight.addEventListener('click', function () {
  equation += eight.innerText;
});

nine.addEventListener('click', function () {
  equation += nine.innerText;
});

zero.addEventListener('click', function () {
  equation += zero.innerText;
});

plus.addEventListener('click', function () {
  equation += plus.innerText;
});

minus.addEventListener('click', function () {
  equation += minus.innerText;
});

divide.addEventListener('click', function () {
  equation += divide.innerText;
});

multiply.addEventListener('click', function () {
  equation += multiply.innerText;
});

equals.addEventListener('click', function () {
  console.log(equation);
  if (equation.includes('+')) {
    equation = equation.split('+');
    equation = equation.map((num) => parseInt(num));
    solution.innerText = equation.reduce((a, b) => a + b);
    equation = '';
  } else if (equation.includes('-')) {
    equation = equation.split('-');
    equation = equation.map((num) => parseInt(num));
    solution.innerText = equation.reduce((a, b) => a - b);
    equation = '';
  } else if (equation.includes('x')) {
    equation = equation.split('x');
    equation = equation.map((num) => parseInt(num));
    solution.innerText = equation.reduce((a, b) => a * b);
    equation = '';
  } else if (equation.includes('/')) {
    equation = equation.split('/');
    equation = equation.map((num) => parseInt(num));
    solution.innerText = equation.reduce((a, b) => a / b);
    equation = '';
  }
});