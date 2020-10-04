// Variables
{
  // Log to console
  // console.log('Hello World');
  // console.table({ a: 1, b: 2 });
  // console.error('This is an error');
  // console.warn('This is a warning');
  // console.time('Time');
  // console.log('Hello World');
  // console.log('Hello World');
  // console.log('Hello World');
  // console.timeEnd('Time');
  // Variables
  // var, let, const
  // var name = 'John Doe';
  // console.log(name);
  // name = 'Steve Smith';
  // console.log(name);
  // // Initialize a variable (not assigning a value to the variable)
  // var greeting;
  // console.log(greeting);
  // greeting = 'hello';
  // console.log(greeting);
  // // Multi word vars
  // var firstName = 'John'; // Camel case is the typical way to declare a multi word variable
  // LET
  // let name = 'John Doe';
  // console.log(name);
  // name = 'Steve Smith';
  // console.log(name);
  // CONST can not be reassigned
  // const name = 'John';
  // console.log(name);
  // name = 'Sara';
  // You also have to assign a value to const variables
  // const greeting; // will not work
  // you can mutate variables declared with const, like objects or arrays
  // const person = {
  //   name: 'John',
  // };
  // console.log(person);
  // person.name = 'Sara';
  // console.log(person);
  // const numbers = [1, 2, 3];
  // console.log(numbers);
  // numbers.push(4, 5);
  // console.log(numbers);
}

// Data Types
{
  // Primitive Data Types: Stored directily in the location the variable accesses. Stored on the stack.
  // Reference Data Types: Acccessed by reference. Objects that are stored on the heap. A pointer to a location in memory

  // Primitive data types are String, Number, Boolean, Null, Undefined, and Symbols (ES6)

  // Reference Data Types are Arrays, Object Literals, Functions, Dates, Anything Else...

  // Dynamically Typed Language: Types are associated with values not variables. The same variable can hold multiple types. We do not need to specify types. Most other languages are statically typed. There are supersets of JS and addons to allow static typing (TypeScript, Flow.js)

  // PRIMITIVE
  // String
  const name = 'John Doe';
  // Number
  const age = 45;
  // Boolean
  const hasKids = true;
  // Null
  const car = null; // null will return type of object even though that is not true
  // Undefined
  let test;
  // Symbol
  const sym = Symbol();

  // REFERENCE TYPES - Objects
  // Array
  const hobbies = ['movies', 'music'];
  // Object literal
  const address = {
    city: 'Fairfax',
    state: 'Va',
  };
  // Date
  const today = new Date();
  // console.log(today);

  // console.log(typeof today); // typeof tells you what the primitive data type is
}

// Type Conversion
{
  // let val;
  // // Number to String
  // val = String(555);
  // val = String(4 + 4);
  // // Bool to string
  // val = String(true);
  // // Date to string
  // val = String(new Date());
  // // Array to string
  // val = String([1, 2, 3, 4]);
  // // toString() method
  // val = (5).toString();
  // val = true.toString();
  // // String to number
  // val = Number('5');
  // val = Number(true); // true evaluates to 1
  // val = Number(false);
  // val = Number(null); // null and false both evaluate to 0
  // val = Number('hello'); // strings and arrays evaluate to Not a Number
  // val = parseInt('100.30'); // parses as an integer
  // val = parseFloat('100.30');
  // // Output
  // console.log(val);
  // console.log(typeof val);
  // console.log(val.length); // length only works on strings, arrays
  // console.log(val.toFixed(2)); // only works on numbers
  // Type coersion
  // const val1 = String(5);
  // const val2 = 6;
  // const sum = val1 + val2; // If these are both numbers, they will add together. If one or more is a String they will concatenate
  // console.log(sum);
  // console.log(typeof sum);
}

// Numbers and the Math Object
{
  // const num1 = 100;
  // const num2 = 50;
  // let val;
  //
  // // Simple math with numbers (addition, subtraction, multiplication, division, modulus)
  // val = num1 % num2;
  //
  // // Math Object
  // val = Math.PI;
  // val = Math.E; // Euler's number
  // val = Math.round(2.8); // rounds to nearest
  // val = Math.ceil(2.4); // ceil always rounds up, floor always rounds down
  // val = Math.sqrt(64);
  // val = Math.pow(8, 2);
  // val = Math.abs(-3);
  // val = Math.min(2, 3, 44, -1);
  // val = Math.max(2, 3, 44, -1);
  // val = Math.random(); // gives a random decimal between 0 and 1
  // val = Math.ceil(Math.random() * 5); // random whole number between 1 and 5
  //
  // console.log(val);
}

// String Methods and Concatenation
{
  const firstName = 'William';
  const lastName = 'Johnson';
  const age = 36;
  const str = 'Hello my name is Sam';
  const tags = 'javascript, css, html';

  let val;

  val = firstName + lastName;

  // Concatenation
  val = firstName + ' ' + lastName;

  // Append
  val = 'Brad ';
  val += 'Traversy';

  val = 'Hello, my name is ' + firstName + ' and I am ' + age;

  // Escaping (using a backslash to have a character ignored(prettier prevents this?)) \' within single quotes wont end the quote
  val = "That's awesome, I can't wait";

  // Length
  val = firstName.length;

  // concat() method
  val = firstName.concat(' ', lastName);

  // Change case
  val = firstName.toUpperCase();
  val = firstName.toLowerCase();

  val = firstName[0];

  // indexOf()
  val = firstName.indexOf('l');
  val = firstName.lastIndexOf('l');

  // charAt()
  val = firstName.charAt(1);

  // Get last char
  val = firstName.charAt(firstName.length - 1);

  // substring()
  val = firstName.substring(0, 4);

  // slice()
  val = firstName.slice(0, 4);
  val = firstName.slice(-3); // starts from the end

  // split()
  val = str.split(' ');
  val = tags.split(',');

  // replace()
  val = str.replace('Sam', 'Jack');

  // includes()
  val = str.includes('Tom');

  console.log(val);
}
