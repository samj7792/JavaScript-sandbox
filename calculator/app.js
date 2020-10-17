const inputs = document.querySelectorAll('.btn'),
  clear = document.getElementById('clear'),
  del = document.getElementById('delete');
let equation = '',
  solution = document.getElementById('solution');

inputs.forEach((input) => {
  input.addEventListener('click', function () {
    equation += input.value;
    console.log(equation);

    solution.innerText === '. . .'
      ? (solution.innerText = input.value)
      : (solution.innerText += input.value);

    if (input.value === '=') {
      // console.log(equation);
      if (equation.includes('+')) {
        equation = equation.split('+');
        equation = equation.map((num) => parseFloat(num));
        solution.innerText = equation.reduce((a, b) => a + b);
        equation = solution.innerText;
      } else if (equation.includes('-')) {
        equation = equation.split('-');
        equation = equation.map((num) => parseFloat(num));
        solution.innerText = equation.reduce((a, b) => a - b);
        equation = solution.innerText;
      } else if (equation.includes('x')) {
        equation = equation.split('x');
        equation = equation.map((num) => parseFloat(num));
        solution.innerText = equation.reduce((a, b) => a * b);
        equation = solution.innerText;
      } else if (equation.includes('/')) {
        equation = equation.split('/');
        equation = equation.map((num) => parseFloat(num));
        solution.innerText = equation.reduce((a, b) => a / b);
        equation = solution.innerText;
      }
    }
  });
});

// Clear
clear.addEventListener('click', function () {
  solution.innerText = '. . .';
  equation = '';
});

// Delete / Backspace
del.addEventListener('click', async function () {
  let equation = await equation.slice(0, -1);
  solution.innerText === ''
    ? (solution.innerText = '. . .')
    : (solution.innerText = equation);
});

// Working solution not so pretty
{
  // // Declare vars
  // let one = document.getElementById('one'),
  //   two = document.getElementById('two'),
  //   three = document.getElementById('three'),
  //   four = document.getElementById('four'),
  //   five = document.getElementById('five'),
  //   six = document.getElementById('six'),
  //   seven = document.getElementById('seven'),
  //   eight = document.getElementById('eight'),
  //   nine = document.getElementById('nine'),
  //   zero = document.getElementById('zero'),
  //   plus = document.getElementById('plus'),
  //   minus = document.getElementById('minus'),
  //   multiply = document.getElementById('multiply'),
  //   divide = document.getElementById('divide'),
  //   equals = document.getElementById('equals'),
  //   solution = document.getElementById('solution');
  // one.addEventListener('click', function () {
  //   equation += one.innerText;
  // });
  // two.addEventListener('click', function () {
  //   equation += two.innerText;
  // });
  // three.addEventListener('click', function () {
  //   equation += three.innerText;
  // });
  // four.addEventListener('click', function () {
  //   equation += four.innerText;
  // });
  // five.addEventListener('click', function () {
  //   equation += five.innerText;
  // });
  // six.addEventListener('click', function () {
  //   equation += six.innerText;
  // });
  // seven.addEventListener('click', function () {
  //   equation += seven.innerText;
  // });
  // eight.addEventListener('click', function () {
  //   equation += eight.innerText;
  // });
  // nine.addEventListener('click', function () {
  //   equation += nine.innerText;
  // });
  // zero.addEventListener('click', function () {
  //   equation += zero.innerText;
  // });
  // plus.addEventListener('click', function () {
  //   equation += plus.innerText;
  // });
  // minus.addEventListener('click', function () {
  //   equation += minus.innerText;
  // });
  // divide.addEventListener('click', function () {
  //   equation += divide.innerText;
  // });
  // multiply.addEventListener('click', function () {
  //   equation += multiply.innerText;
  // });
  // equals.addEventListener('click', function () {
  //   console.log(equation);
  //   if (equation.includes('+')) {
  //     equation = equation.split('+');
  //     equation = equation.map((num) => parseInt(num));
  //     solution.innerText = equation.reduce((a, b) => a + b);
  //     equation = '';
  //   } else if (equation.includes('-')) {
  //     equation = equation.split('-');
  //     equation = equation.map((num) => parseInt(num));
  //     solution.innerText = equation.reduce((a, b) => a - b);
  //     equation = '';
  //   } else if (equation.includes('x')) {
  //     equation = equation.split('x');
  //     equation = equation.map((num) => parseInt(num));
  //     solution.innerText = equation.reduce((a, b) => a * b);
  //     equation = '';
  //   } else if (equation.includes('/')) {
  //     equation = equation.split('/');
  //     equation = equation.map((num) => parseInt(num));
  //     solution.innerText = equation.reduce((a, b) => a / b);
  //     equation = '';
  //   }
  // });
}
