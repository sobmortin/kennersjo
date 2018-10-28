// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.
  
function modulo (a, b) {
    // return the remainder of the division a / b
    return a%b
}
  
function squareRoot (n) {
    // return the square root of n
    return Math.sqrt(n)
}
  
function raiseToPower (m, n) {
    // return the result of raising m to the nth power
    return Math.pow(m, n)
}

function formatMoney (amount) {
    /**
     * return a the amount formatted into pounds sterling
     * Amounts should be a string with the £ symbol in front
     * formatMoney(2.33) => "£2.33"
     * Amounts should be rounded to 2 decimal numbers
     * formatMoney(2.338) => "£2.34"
     * Amounts should always have 2 decimal numbers even if they are zeroes
     * formatMoney(1) => "£1.00"
     */
    let currency = amount.toFixed(2)
    return '£' + currency
}
  
function calculateCircleArea (r) {
    // return the area of a circle with radius r
    // round result to 3 decimal numbers
   let area = Math.PI * (r*r)
   let area3 = parseFloat(area.toFixed(3))
   return area3
}
  
function calculateFullTurns (degrees) {
    // return the number of full turns you can make with the provided degrees
    // 1 full turn === 360 degrees
    let turns = degrees / 360
    return Math.floor(turns)
}

function getLength (str) {
    // return the length of the passed string
    return str.length
}


function putNamesTogether (firstName, lastName) {
    // return the first and last names with a space between them
    return firstName + ' ' + lastName
}
  
function capitaliseString (str) {
    // return the passed string with its first letter capitalised
    return str[0].toUpperCase() + str.slice(1)
}
  
function dontShoutSentence (SENTENCE) {
    // return the passed sentence (IN ALL CAPS) in lower case
    // keep the first character capitalised
   let lowerSentence = SENTENCE.toLowerCase()
   return lowerSentence[0].toUpperCase() + lowerSentence.slice(1)
}

function getMiddle (str) {
    // return the middle (or middle two) character(s) of the passed string
    let length = str.length
    let middle = length / 2
    if (Number.isInteger(middle)) {return str[middle] + str[middle - 1]
    } else {
        return str[Math.floor(middle)]
    }
}

function getLastWord (words) {
    // return the last word of a sentence
    // you can assume words doesn't have a period at the end
   let splitWords = words.split(' ')
   let count = -1
   for (let i = 0; i < splitWords.length; i++) {
       count = count + 1
   }
   return splitWords[count]
}
  
function hyphenateWords (words) {
    // return the passed string with the spaces replaced by hyphens ("-")
   return words.split(' ').join('-')
  
}
  
function convertToCamelCase (words) {
    // convert the passed string of space-separated words to camel case
    // camel case looks like this --> camelCaseLooksLikeThis
    return words.split(' ').map(function(word,index){
        if(index == 0){
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');
}

function areValuesEqual (left, right) {
    // return true if the passed arguments are strictly equal
     if (left === right) {
         return true
     } else {
         return false
     }
}
  
function areValuesNotEqual (left, right) {
    // return true if the passed arguments are NOT equal
    if (left !== right) {
        return true
    } else {
        return false
    }
}
  
function isFromThe60s (year) {
    // return true if the year is in the 1960's
    if ( year > 1959 && year < 1970) {
        return true
    } else {
        return false
    }
}
  
function isEvenLength (string) {
    // return true if string has an even length
    let length = (string.length) / 2
    return Number.isInteger(length)
    }
  
function areStringsEqualCaseInsensitive (left, right) {
    // return true if the passed strings are equal ignoring case 
    let lowerLeft = left.toLowerCase()
    let lowerRight = right.toLowerCase()
    if (lowerLeft === lowerRight) {
        return true
    } else {
        return false
    }
}
  
function getEvenNumbers (nums) {
    //return an array of only the even numbers in the given array
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (Number.isInteger(nums[i] / 2)) {
            arr.push(nums[i])
        }
    }
    return arr
}
  
function getItemsLongerThan (array, len) {
    //return an array of only the items longer than the given length
    let emptyArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > len) {
            emptyArr.push(array[i])
        }
    }
    return emptyArr
}
  
function getLastItems (array, n) {
    // return an array with the 'n' last items of 'array'
    return array.slice(Math.max(array.length - n))
}

  
function getSandwichFilling (sandwich) {
    // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
    sandwich.pop();
    sandwich.shift();
    return sandwich
}

  
function removeItem (array, n) {
    // return a new array without the item on position 'n', effectively removing it from the array
    const newArr = [...array]
    newArr.splice(n, 1);
    return newArr
}
  
function mergeArrays (arr1, arr2) {
    // return a new array with all the elements of arr1 followed by all the elements of arr2
    return arr1.concat(arr2);
}

function flattenArray (arrayOfArrays) {
    // given a nested array or arrays, return a new, flat array with all the elements of all the nested arrays in their original order
     var flattened = arrayOfArrays.reduce(function(a, b) {
        return a.concat(b);
    }, []);
    return flattened
}

function isItemOmnipresent (arrayOfArrays, item) {
    // return true if the passed item is present in all the arrays inside arrayOfArrays
    for (let i = 0; i < arrayOfArrays.length; i++) {
       // for (let j = 0; arrayOfArrays[i].length; j++) {
            if (arrayOfArrays[i].includes(item)) {
                return true
            } 
            else {
                return false
            }
        }
    }

  
function isOver40 (user) {
    /*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */
}
  
function getUserAge (user) {
    // return the user's age as a number.
    // you can assume that the passed user will always have a 'yearOfBirth' property.
}
  
function createProduct () {
    /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
    */
}
  
function addPriceToProduct (product, price) {
    /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */
}
  
function createNorthcoder (name, yearOfBirth) {
    // return an object with:
    // a name property set to the value of the name parameter
    // an age property set to whatever the age of the northcoder would be on the year 2018
    // a language property set to 'JavaScript'
}
  
function createUserString (userObj) {
    // should take as an argument an object with the format from createNorthcoder
    // returns a string with the user's details in the form:
    // 'name: Mitch, age: 27, language: Javascript';
    // Note - this is a good use case of string template literals. 
}
  
function getAlbumProperties (obj) {
    // should take an object with information about an album
    // should return an array containing all of the object's keys
    // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
}
  
function deleteManyPasswords (users) {
    /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */
}
  
function countTheObjects (arr) {
    /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
}
  
module.exports = {
    modulo, squareRoot, raiseToPower, formatMoney, calculateCircleArea, calculateFullTurns, areValuesEqual, areValuesNotEqual, isFromThe60s, isEvenLength, areStringsEqualCaseInsensitive, getLength, putNamesTogether, capitaliseString, dontShoutSentence, getMiddle, getLastWord, hyphenateWords, convertToCamelCase, getEvenNumbers, getItemsLongerThan, getLastItems, getSandwichFilling, removeItem, mergeArrays, flattenArray, isItemOmnipresent, isOver40, getUserAge, createProduct, addPriceToProduct, createNorthcoder, createUserString, getAlbumProperties, deleteManyPasswords, countTheObjects
}