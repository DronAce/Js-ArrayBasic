/**                                                          
* What is an Array? 
*                                                         
* The Array object, as with arrays in other programming languages,           
* enables storing a collection of multiple items under a single              
* variable name, and has members for performing common array operations.     
* Arrays can contain any data type, including numbers, strings, and objects. 
**/

 // To demonstrate how arrays can be useful, consider the following
const car1 = 'Honda';
const car2 = 'Nissan';
const car3 = 'Audi';
const car4 = 'Lexus';

////////////////////////////////////
//SECTION 1: Creating Array//
////////////////////////////////////
/**
 * 
 * Here are three ways to create new array: first using array literal 
 * notation, then using the Array() constructor, and finally using 
 * String.prototype.split() to build the array from a string. 
 **/

// Creating cars array
const cars = ['Honda', 'Nissan', 'Audi', 'Lexus'];
// console.log('cars:', cars);

const cars2 = new Array('Honda', 'Nissan', 'Audi', 'Lexus');
// console.log('cars2:',cars2);

const cars3 = 'Honda, Nissan, Audi, Lexus'.split(', ');
// console.log('cars3:',cars3);

// We can also store different data types in an array.
const random = ['string', 1, 2, 3, true, cars2];

// You can find the length of an array using the length property.
const carsLength = cars.length;
// console.log('car length:', carsLength);

///////////////////////////////////////////
//SECTION 2: Index and Accessing Arrays  //
///////////////////////////////////////////
/**
 * 
 * Items in an array are numbered, starting from zero. This number is 
 * called the item's index. So the first item has index 0, the second 
 * has index 1, and so on. You can access individual items in the array 
 * using bracket notation and supplying the item's index.
 */

// Here we can get the first item from cars
const firstCar = cars[0];
// console.log(firstCar);

// You can also modify an item in an array by giving a single array 
// item a new value.
cars[0] = 'Tesla';
// console.log('cars:', cars);

///////////////////////////////////////////
//SECTION 3: - Adding Items to an Array  //
///////////////////////////////////////////
// To add one or more items to the end of an array we can use push()
cars.push('Honda');
// console.log('cars :', cars);
cars.push('dodge');
// console.log('cars :', cars);

// To add an item to the start of the array, use unshift():
cars.unshift('GMC');
// console.log('cars :', cars);
cars.unshift('Subaru');
// console.log('cars :', cars);

/////////////////////////////////////////////
//SECTION 4: - Removing Items to an Array  //
/////////////////////////////////////////////
// To remove the last item from the array, use pop().
cars.pop();
// console.log('cars :', cars);

// The pop() method returns the item that was removed.
const myCar = cars.pop();
// console.log(myCar);

// To remove the first item from an array, use shift():
cars.shift();
// console.log('cars :', cars);

///////////////////////////////////////////
//SECTION 5: - Looping Through an Array  //
///////////////////////////////////////////
/* instead of writing cars[0]; cars[1]; cars[2]; cars[3]; cars[4]; cars[5];
We can loop through the entirety of the array with the for keyword */
// JavaScript For Loop
for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i]);
}
// The For Of Loop
for (const car of cars) {
//   console.log(car);
}


//Exercise 1 //
// Create an Array called fruits with "Banana", "Orange", "Apple", "Mango"

const fruits = ["Banana", "Orange", "Apple", "Mango"];

//Exercise 2 //
// Assign the Mango in fruits array to lastFruit variable 

const lastFruit = fruits[fruits.length - 1];

//Exercise 3 //
// Add Egg to the end of the movies array
