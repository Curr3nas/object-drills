/* eslint-disable no-prototype-builtins */
// Drill 1. Object initializers and methods

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water / this.flour * 100;
  }
};

console.log(loaf.hydration());

// Drill 2. Iterating over an object's properties

const object = {
  foo: 'why',
  bar: 'does',
  fum: 'this',
  quux: 'look',
  spam: 'weird'
};

for (const key in object) {
  const value = object[key];
  console.log(value, key);
}

// Drill 3. Arrays in objects

const hobbits = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbits.meals[3]);

//Drill 4. Arrays of objects

const array = [
  {
    name: 'Douglas',
    jobTitle: 'Developer',
    boss: 'Paul'
  },
  {
    name: 'Paul',
    jobTitle: 'Pastor'
  },
  {
    name: 'Brian',
    jobTitle: 'Sales Manager',
    boss: 'Chuck'
  }
];

// Drill 5. Properties that aren't There

array.forEach(function(element) {
  const { name, jobTitle, boss } = element;
  if (element.hasOwnProperty('boss')) {
    console.log(`${jobTitle} ${name} reports to ${boss}`);
  } else {console.log(`${element.jobTitle} ${element.name} doesn't report to anybody`);}
});

// Drill 6.

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

const codedMessageString = 'craft block argon meter bells brown croon droop';
const codedMessageArray = codedMessageString.split(' ');

// console.log(codedMessageArray);

// console.log(codedMessageArray[0].charAt(0));

const decoded = function(element) {
  return element.charAt(0);
  // let key = element.charAt(0);

  // if (key === cipher.hasOwnProperty(key)) {
  //   return cipher.key;
  // }
};
/*****Left off here! You changed your .forEach() to a .map() so that it would actually return something ::facepalm:: *****/
let results = codedMessageArray.map(decoded);

console.log(results);