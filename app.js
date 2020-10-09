{
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
    // const firstName = 'William';
    // const lastName = 'Johnson';
    // const age = 36;
    // const str = 'Hello my name is Sam';
    // const tags = 'javascript, css, html';
    // let val;
    // val = firstName + lastName;
    // // Concatenation
    // val = firstName + ' ' + lastName;
    // // Append
    // val = 'Brad ';
    // val += 'Traversy';
    // val = 'Hello, my name is ' + firstName + ' and I am ' + age;
    // // Escaping (using a backslash to have a character ignored(prettier prevents this?)) \' within single quotes wont end the quote
    // val = "That's awesome, I can't wait";
    // // Length
    // val = firstName.length;
    // // concat() method
    // val = firstName.concat(' ', lastName);
    // // Change case
    // val = firstName.toUpperCase();
    // val = firstName.toLowerCase();
    // val = firstName[0];
    // // indexOf()
    // val = firstName.indexOf('l');
    // val = firstName.lastIndexOf('l');
    // // charAt()
    // val = firstName.charAt(1);
    // // Get last char
    // val = firstName.charAt(firstName.length - 1);
    // // substring()
    // val = firstName.substring(0, 4);
    // // slice()
    // val = firstName.slice(0, 4);
    // val = firstName.slice(-3); // starts from the end
    // // split()
    // val = str.split(' ');
    // val = tags.split(',');
    // // replace()
    // val = str.replace('Sam', 'Jack');
    // // includes()
    // val = str.includes('Tom');
    // console.log(val);
  }

  // Template Literals
  {
    // const name = 'John';
    // const age = 30;
    // const job = 'Web Developer';
    // const city = 'Miami';
    // // Without template strings (es5)
    // // html =
    // //   '<ul><li>Name: ' +
    // //   name +
    // //   '</li><li>Age: ' +
    // //   age +
    // //   '</li><li>Job: ' +
    // //   job +
    // //   '</li><li>City: ' +
    // //   city +
    // //   '</li></ul>';
    // function hello() {
    //   return 'Hello';
    // }
    // // With template strings (es6)
    // html = `
    //   <ul>
    //     <li>Name: ${name}</li>
    //     <li>Age: ${age}</li>
    //     <li>Job: ${job}</li>
    //     <li>City: ${city}</li>
    //     <li>${2 + 2}</li>
    //     <li>${hello()}</li>
    //     <li>${age > 21 ? 'Over 21' : 'Under 21'}</li>
    //   </ul>
    // `;
    // document.body.innerHTML = html;
  }

  // Arrays and Array Methods
  {
    // Create some arrays
    // const numbers = [1, 2, 3, 4, 5];
    // const numbers2 = new Array(33, 55, 31, 4, 73);
    // const fruit = ['Apple', 'Kiwi', 'Bannana', 'Orange'];
    // const mixed = [2, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];
    // let val;
    // Get array length
    // val = numbers.length;
    // // Check if is array
    // val = Array.isArray(numbers);
    // // Get single value
    // val = numbers[2];
    // // Insert into array
    // numbers[2] = 100;
    // // Find index of value
    // val = numbers.indexOf(4);
    // // MUTATING ARRAYS
    // // Add on to end of array
    // numbers.push(250);
    // // Add on to front
    // numbers.unshift(120);
    // // Take off from end
    // numbers.pop();
    // // Take off from front
    // numbers.shift();
    // // Splice values
    // numbers.splice(2, 1); // Takes out the one value at the 2nd index
    // // reverse
    // numbers.reverse();
    // Concatenate array
    // val = numbers.concat(numbers2);
    // // Sort
    // val = fruit.sort();
    // val = numbers2.sort();
    // // use the "compare function"
    // val = numbers2.sort(function (x, y) {
    //   return x - y;
    // });
    // // Reverse sort
    // val = numbers2.sort(function (x, y) {
    //   return y - x;
    // });
    // // Find
    // function under50(num) {
    //   return num < 50;
    // }
    // val = numbers2.find(under50); // finds first number under 50
    // console.log(numbers);
    // console.log(val);
  }

  // Object Literals
  {
    // const person = {
    //   firstName: 'Steve',
    //   lastName: 'Smith',
    //   age: 30,
    //   email: 'steve@gmail.com',
    //   hobbies: ['music', 'sports'],
    //   address: {
    //     city: 'Miami',
    //     state: 'FL',
    //   },
    //   getBirthYear: function () {
    //     return 2020 - this.age; // need to use this to get age
    //   },
    // };
    // let val;
    // val = person;
    // // Get specific value
    // val = person.firstName; // dot notation is the recommended syntax
    // val = person['firstName'];
    // val = person.hobbies[1];
    // val = person.address.state;
    // val = person.getBirthYear();
    // console.log(val);
    // const people = [
    //   { name: 'John', age: 30 },
    //   { name: 'Mike', age: 23 },
    // ];
    // for (let i = 0; i < people.length; i++) {
    //   console.log(people[i].name);
    // }
  }

  // Dates and Times
  {
    // let val;
    // const today = new Date(); // Date is an object
    // let birthday = new Date('7-7-1992');
    // birthday = new Date('July 7 1992');
    // val = today.getMonth(); // this is 0 based so 9 refers to October
    // val = today.getDate();
    // val = today.getDay(); // day of week
    // val = today.getFullYear();
    // val = today.getHours();
    // val = today.getMinutes();
    // val = today.getSeconds();
    // val = today.getMilliseconds();
    // val = today.getTime();
    // birthday.setMonth(2);
    // birthday.setDate(12);
    // birthday.setFullYear(1990);
    // birthday.setHours(1);
    // birthday.setMinutes(12);
    // birthday.setSeconds(39);
    // console.log(birthday);
  }

  // If Statements and Comparison Operators
  {
    // let id = 100;
    // EQUAL TO
    // if (id == 101) {
    //   console.log('correct');
    // } else {
    //   console.log('incorrect');
    // }
    // // NOT EQUAL TO
    // if (id != 101) {
    //   console.log('correct');
    // } else {
    //   console.log('incorrect');
    // }
    // // EQUAL TO VALUE AND TYPE
    // if (id === 100) {
    //   console.log('correct');
    // } else {
    //   console.log('incorrect');
    // }
    // // NOT EQUAL TO VALUE AND TYPE
    // if (id !== 100) {
    //   console.log('correct');
    // } else {
    //   console.log('incorrect');
    // }
    // Test if undefined
    // if (typeof id !== 'undefined') {
    //   console.log(`The ID is ${id}`);
    // } else {
    //   console.log('no id');
    // }
    // GREATER OR LESS THAN
    // if (id > 200) {
    //   console.log('correct');
    // } else {
    //   console.log('incorrect');
    // }
    // // IF ELSE
    // const color = 'yellow';
    // if (color === 'red') {
    //   console.log('Color is red');
    // } else if (color === 'blue') {
    //   console.log('Color is blue');
    // } else {
    //   console.log('Color is not red or blue');
    // }
    // // LOGICAL OPERATORS
    // const name = 'Steve';
    // const age = 20;
    // AND &&
    // if (age > 0 && age < 12) {
    //   console.log(`${name} is a child`);
    // } else if (age >= 13 && age <= 19) {
    //   console.log(`${name} is a teen`);
    // } else {
    //   console.log(`${name} is an adult`);
    // }
    //   // OR ||
    //   if (age < 16 || age > 65) {
    //     console.log(`${name} cannot participate`);
    //   } else {
    //     console.log(`${name} can participate`);
    //   }
    //   // TERNARY OPERATOR
    //   console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
  }

  // Switches
  {
    // const color = 'red';
    // switch (color) {
    //   case 'blue':
    //     console.log('Color is blue');
    //     break;
    //   case 'red':
    //     console.log('Color is red');
    //     break;
    //   default:
    //     console.log('color is not red or blue');
    //     break;
    // }
    // let day;
    // switch (new Date().getDay()) {
    //   case 0:
    //     day = 'Sunday';
    //     break;
    //   case 1:
    //     day = 'Monday';
    //     break;
    //   case 2:
    //     day = 'Tuesday';
    //     break;
    //   case 3:
    //     day = 'Wednesday';
    //     break;
    //   case 4:
    //     day = 'Thursday';
    //     break;
    //   case 5:
    //     day = 'Friday';
    //     break;
    //   case 6:
    //     day = 'Saturday';
    //     break;
    // }
    // console.log(`Today is ${day}`);
  }

  // Function Declarations and Expressions
  {
    // // FUNCTION DECLARATIONS
    // function greet(firstName = 'John', lastName = 'Doe') {
    //   return `Hello ${firstName} ${lastName}`;
    // }
    // console.log(greet()); // By defining the defaults in the function declaration's arguments we prevent having undefined in the return
    // console.log(greet('Sam', 'Smith'));
    // // FUNCTION EXPRESSIONS
    // const square = function (x) {
    //   return x * x;
    // };
    // console.log(square(8));
    // // IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS -IIFEs
    // (function () {
    //   console.log('IIFE Ran...');
    // })();
    // (function (name) {
    //   console.log(`Hello ${name}`);
    // })('Brad');
    // // PROPERTY METHODS
    // // functions within objects are called methods
    // const todo = {
    //   add: function () {
    //     console.log('Add todo...');
    //   },
    //   edit: function (id) {
    //     console.log(`Edit todo ${id}`);
    //   },
    // };
    // // You can also add a method to an object with dot notation
    // todo.delete = function () {
    //   console.log('Delete todo...');
    // };
    // // calling the methods
    // todo.add();
    // todo.edit(22);
    // todo.delete();
  }

  // General Loops
  {
    // // FOR LOOP
    // for (let i = 0; i < 10; i++) {
    //   if (i === 2) {
    //     console.log('2 is my favorite number');
    //     continue; // continues to next iteration
    //   }
    //   if (i === 5) break;
    //   console.log(`Number ${i}`);
    // }
    // // WHILE LOOP
    // let i = 0;
    // while (i < 10) {
    //   console.log(`Number ${i}`);
    //   i++;
    // }
    // // DO WHILE
    // let i = 0;
    // do {
    //   console.log(`Number ${i}`);
    //   i++;
    // } while (i < 10);
    // // LOOP THROUGH ARRAY
    // const cars = ['Ford', 'Honda', 'Chevy'];
    // for (let i = 0; i < cars.length; i++) {
    //   console.log(`Car is a ${cars[i]}`);
    // }
    // // .forEach
    // cars.forEach(function (car) {
    //   console.log(car);
    // });
    // // .map
    // const users = [
    //   { id: 1, name: 'John' },
    //   { id: 2, name: 'Sara' },
    //   { id: 3, name: 'Karen' },
    // ];
    // const ids = users.map((user) => user.id);
    // console.log(ids);
    // // for in
    // const user = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   age: 30,
    // };
    // // x is the key, user[x] is the value
    // for (let x in user) {
    //   console.log(x);
    //   console.log(`${x} : ${user[x]}`);
    // }
  }

  // The Window Object
  {
    // The window is the global object
    // WINDOW METHODS / OBJECTS / PROPERTIES
    // // Alert
    // window.alert('Hello World');
    // // Prompts
    // const input = prompt();
    // alert(input);
    // // Confirm
    // if (confirm('Are you sure')) {
    //   console.log('Yes');
    // } else {
    //   console.log('No');
    // }
    // // These aren't generally used in modern projects
    // let val;
    // // Outer height and width
    // val = window.outerHeight;
    // val = window.outerWidth;
    // // Inner height and width (within scroll bar)
    // val = window.innerHeight;
    // val = window.innerWidth;
    // // Scroll points
    // val = window.scrollY;
    // val = window.scrollX;
    // // Location object
    // val = window.location;
    // val = window.location.hostname;
    // val = window.location.port;
    // val = window.location.href;
    // val = window.location.search; // shows query string in url (/?id=1)
    // // Redirect
    // window.location.href = 'http://google.com';
    // // Reload
    // window.location.reload();
    // // History Object
    // // window.history.go(-1); // takes you back how ever many pages you specify
    // val = window.history.length;
    // // Navigator Object
    // val = window.navigator;
    // val = window.navigator.appName;
    // val = window.navigator.appVersion;
    // val = window.navigator.userAgent;
    // val = window.navigator.platform;
    // val = window.navigator.language;
    // console.log(val);
  }

  // Block Scope
  {
    // // Global Scope
    // var a = 1;
    // let b = 2;
    // const c = 3;
    // function test() {
    //   var a = 4;
    //   let b = 5;
    //   const c = 6;
    //   console.log('Function Scope: ', a, b, c);
    // }
    // test();
    // if (true) {
    //   //Block Scope
    //   var a = 4;
    //   let b = 5;
    //   const c = 6;
    //   console.log('If Scope: ', a, b, c);
    // }
    // for (var a = 0; a < 10; a++) {
    //   console.log(`Loop: ${a}`);
    // }
    // console.log('Global Scope: ', a, b, c); // var effects the global scope
  }

  // Mouse Event
  {
    // document.body.querySelector('div').addEventListener('mousemove', (e) => {
    //   console.log(e.type);
    //   document.body.querySelector('h2').innerText = `${e.offsetX} ${e.offsetY}`;
    //   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${
    //     (e.offsetX + e.offsetY) / 2
    //   })`;
    // });
  }

  // Local and Session Storage
  {
    // localStorage.setItem('name', 'John');
    // // sessionStorage.setItem('name', 'John'); // this clears when a page is reloaded
    // // localStorage.removeItem('name');
    // // get from storage
    // const name = localStorage.getItem('name');
    // console.log(name);
    // localStorage.clear(); // clears all storage
    //   document.querySelector('form').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const task = document.getElementById('task').nodeValue;
    //     let tasks;
    //     if (localStorage.getItem('tasks') === null) {
    //       tasks = [];
    //     } else {
    //       tasks = JSON.parse(localStorage.getItem('tasks'));
    //     }
    //     tasks.push(task);
    //     localStorage.setItem('task', JSON.stringify(task));
    //   });
    //   const tasks = JSON.parse(localStorage.getItem('tasks'));
    //   tasks.forEach((task) => console.log(task));
  }
}

{
  // Constructors and the 'this' keyword
  {
    // // object literals
    // const brad = {
    //   name: 'brad',
    //   age: 30,
    // };
    // // Person constructor Should be capitalized
    // function Person(name, dob) {
    //   this.name = name; // this keyword refers to the current instance of the object
    //   console.log(this);
    //   // this.age = age;
    //   this.birthday = new Date(dob);
    //   this.calcAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    //   };
    // }
    // console.log(this); // Using this in the global scope refers to the Window object
    // // const brad = new Person('Brad', 35);
    // // const john = new Person('John', 21);
    // const brad = new Person('Brad', '7/7/1992');
    // console.log(brad.calcAge());
  }

  // Built in Constructors
  {
    // // String
    // const name1 = 'John';
    // const name2 = new String('John');
    // // name2.foo = 'bar';
    // console.log(name1, name2);
    // console.log(typeof name2);
    // // type of name one is an object, not string
    // if (name2 === 'John') {
    //   console.log('YES');
    // } else console.log('NO');
    // // Number
    // const num1 = 5;
    // const num2 = new Number(6);
    // console.log(num2, typeof num2);
    // // Bool
    // const bool1 = true;
    // const bool2 = new Boolean(true);
    // // Functions
    // const getSum1 = function (x, y) {
    //   return x + y;
    // };
    // const getSum2 = new Function('x', 'y', 'return x + y');
    // console.log(getSum2(1, 2));
    // // Object
    // const john = { name: 'John' };
    // const john2 = new Object({ name: 'John' });
    // console.log(john);
    // console.log(john2);
    // // Array
    // const array = [1, 2, 3];
    // const array2 = new Array(1, 2, 3, 4);
    // console.log(array);
    // console.log(array2);
    // // Regular Expression RegEx
    // const regex1 = /\w+/;
    // const regex2 = new RegExp('\\w+');
    // console.log(regex1);
    // console.log(regex2);
  }

  // Prototypes Explained
  {
    // Object.prototype
    // Person.prototype
    // function Person(firstName, lastName, dob) {
    //   this.firstName = firstName; // this keyword refers to the current instance of the object
    //   this.lastName = lastName;
    //   this.birthday = new Date(dob);
    //   // this.calcAge = function () {
    //   //   const diff = Date.now() - this.birthday.getTime();
    //   //   const ageDate = new Date(diff);
    //   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    //   // };
    // }
    // // Calculate age
    // Person.prototype.calcAge = function () {
    //   const diff = Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // };
    // // Get full name
    // Person.prototype.getFullName = function () {
    //   return `${this.firstName} ${this.lastName}`;
    // };
    // // Gets married
    // Person.prototype.getsMarried = function (newLastName) {
    //   this.lastName = newLastName;
    // };
    // const john = new Person('John', 'Doe', '8/12/1990');
    // const mary = new Person('Mary', 'Johnson', 'March 20 1970');
    // console.log(mary);
    // console.log(john.calcAge());
    // console.log(mary.getFullName());
    // mary.getsMarried('Smith');
    // console.log(mary.getFullName());
    // console.log(mary.hasOwnProperty('firstName'));
    // console.log(mary.hasOwnProperty('getFullName')); // not part of the property, it is in the prototype
  }

  // Prototypal Inheritance
  {
    // Person Constructor
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    // Greeting
    Person.prototype.greeting = function () {
      return `Hello there ${this.firstName} ${this.lastName}`;
    };

    const person1 = new Person('John', 'Doe');
    console.log(person1.greeting());

    // Customer constructor
    function Customer(firstName, lastName, phone, membership) {
      Person.call(this, firstName, lastName); // allows us to call another function
      this.phone = phone;
      this.membership = membership;
    }

    // Inherit the Person prototype methods
    Customer.prototype = Object.create(Person.prototype);

    // Make Customer.prototype return Customer()
    Customer.prototype.constructor = Customer;

    // Create customer
    const customer1 = new Customer('Tom', 'Smith', '222-222-2222', 'Standard');

    console.log(customer1);

    // Customer greeting
    Customer.prototype.greeting = function () {
      return `Hello there ${this.firstName} ${this.lastName} welcome to our company.`;
    };

    console.log(customer1.greeting()); // not a function because the customer is not inheriting the greeting until we inherit above
  }
}
