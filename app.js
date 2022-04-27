// equal to your age
let myAge = 27;
// first 2 years of life
let earlyYears = 2;
earlyYears *= 10.5;
// subtracting first 2 years from my age
let laterYears = myAge - 2;
// to calculate the number of dog years accounted for by your later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// total dog years
myAgeInDogYears = earlyYears + laterYears;
// my name in lower case
myName = 'Steve'.toLowerCase();
// displays my name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)