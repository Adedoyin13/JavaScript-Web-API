// Web storage API is a mechanism provided by web browsers to store key-value pairs in a web application

// Local storage is useful for storing data that should be available across browser sessions, such as user preference.

// Store an Object  

localStorage.setItem('myObject', JSON.stringify({name: 'Emmy', age: 20}));

// localStorage.removeItem('myObject')
// localStorage.clear();

const storeObject = JSON.parse(localStorage.getItem('myObject'));
console.log(storeObject);


localStorage.setItem('theme', 'dark');
localStorage.setItem('fontSize', '10px');

const getObject1 = localStorage.getItem('theme');
console.log(getObject1);

const getObject2 = localStorage.getItem('fontSize');
console.log(getObject2);

sessionStorage.setItem('formData', JSON.stringify({name: 'Chapo', age: 30}));
const getData = JSON.parse(sessionStorage.getItem('formData'));
console.log(getData.name);


// ASYNCHRONOUS JS

// Callback : is one of the common asynchronous patterns, a way to handle asynchronous operations. Callbak is a function that is passed to another function as an argument

function myDisplayer(some) {
    return some;
  }
  
  function myFormatter(solution) {
    return `The result is ${solution}`
};
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    return myCallback(sum); 
  }
  
  const result = myCalculator(5, 5, myDisplayer);
  const result2 = myCalculator(5, 5, myFormatter);
  console.log(result);
  console.log(result2);







