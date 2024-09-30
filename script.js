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



function performTask (taskName, callback) {
  console.log(`Starting task: ${taskName}`);

  console.log('Loading...');

  setTimeout(() => {
    console.log(`Finished task: ${taskName}`);
    callback();
  }, 2000)
}

function taskCompleted () {
  console.log('Task is complete');
}
performTask('Download completed', taskCompleted)


// Fetching a data from an API - Application programming Language


api = [
  {
    name : 'Mubarak',
    language : 'Birum'
  },
  {
    name : 'Chapo',
    language : 'Okun'
  },
  {
    name : 'OG',
    language : 'Yoruba'
  },
  {
    name : 'Anate',
    language : 'Ebira'
  }
]

function fetchData (callback) {
  // console.log('Loading...');
  setTimeout(() => {
    console.log(`data fetched successfully`);
    const data = api.find(person => person.name === 'Anate')
    callback(data)
  }, 2000)
}

function dataFetched (data) {
  console.log(data);
}

fetchData(dataFetched)


// PROMISE ==> A modern way to handle asynchronous operations. Represention the eventual completion or failure of an asychronous operation and its resulting value.

function fetchCohort () {
  return new Promise ((resolve, reject) => {

    // Simulate the data fatching

    setTimeout(() => {
      const success = true;
      if (success) {
        const data = api.find(person => person.name === 'Chapo')
        resolve(data)
      } else {
        reject(new Error('Failed to get the data'));
      }
    }, 5000)
  })
}


// Using the fatchCohort function with promise

fetchCohort().then((data) => {
  console.log(data.language);
}).catch((error) => {
  console.error('Name does not exist');
})




