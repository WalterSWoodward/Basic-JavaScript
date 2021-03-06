// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  const m = num * 10;
  return m;
};

const subtractFive = (num) => {
  // return num after subtracting five
  const s = num - 5;
  return s;
};

const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length) {
    return true;
  } return false;
};

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  } return false;
};

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  } return false;
};

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  } return false;
};

const add = (x, y) => {
  // add x and y together and return the value
  const sum = x + y;
  return sum;
};

const subtract = (x, y) => {
  // subtract y from x and return the value
  const dif = x - y;
  return dif;
};

const divide = (x, y) => {
  // divide x by y and return the value
  const quo = x / y;
  return quo;
};

const multiply = (x, y) => {
  // multiply x by y and return the value
  const prod = x * y;
  return prod;
};

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  return x % y;
};

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0) {
    return true;
  } return false;
};

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  if (num % 2 === 0) {
    return false;
  } return true;
};

const square = (num) => {
  // square num and return the new value
  const expTwo = Math.pow(num, 2);
  return expTwo;
};

const cube = (num) => {
  // cube num and return the new value
  const expThree = Math.pow(num, 3);
  return expThree;
};

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  const exp = Math.pow(num, exponent);
  return exp;
};

const roundNumber = (num) => {
  // round num and return it
  const round = Math.round(num);
  return round;
};

const roundUp = (num) => {
  // round num up and return it
  const ceil = Math.ceil(num);
  return ceil;
};

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  const addExclam = `${str}!`;
  return addExclam;
};

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  const fullName = `${firstName} ${lastName}`;
  return fullName;
};

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  const toGreeting = `Hello ${name}!`;
  return toGreeting;
};

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  const a = length * width;
  return a;
};

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  const aTri = (base * height) / 2;
  return aTri;
};

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  const aCirc = Math.round(3.14159 * Math.pow(radius, 2));
  return aCirc;
};

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  const vol = length * width * height;
  return vol;
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
