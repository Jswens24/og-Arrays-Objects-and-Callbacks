/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var arr = [10, 20, 30];
// Do not edit the code above.

/*
  Create a function named 'first' that is given 'arr' as an argument.
  Return the first item in the given array.
*/

const first = arr => arr[0]

////////// PROBLEM 2 //////////

// Do not edit the code below.
var arr = [40, 50, 60];
// Do not edit the code above.

/*
  Create a function named 'last' that is given 'arr' as an argument. 
  Return the last item in the given array.
*/

const last = arr => arr[arr.length - 1]


////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
// Do not edit the code above.

/*
  Create a function named 'looper' that is given family as it's only argument. 
  Loop through the given array and alert every item in the array.
*/

const looper = family => {
  return family.map(fam => {
    alert(fam)
  })
}

////////// PROBLEM 4 //////////

// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Write a function called reversedLooper that is given letters as it's only argument. 
  Loop backwards, starting at the end of the letters array, alerting every item in the array.
*/

const reversedLooper = letters => {
  const reversedArr = letters.reverse();
  return reversedArr.map(letter => {
    alert(letter)
  })
}


////////// PROBLEM 5 //////////

// Do not edit the code below.
var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
// Do not edit the code above.

/*
  Write a function named evenFinder that is given nums as it's only argument.
  Return an array that contains the even numbers from the nums array.
*/

const evenFinder = nums => nums.filter(num => num % 2 === 0)


/////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////

////////// PROBLEM 6 //////////

// Do not edit the code below.
var numbersArray = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
// Do not edit the code above.

/*
  Write a function called divider that is given one argument, numbersArray.
  Have divider return an array with the first item in the array being the evens array (all the even values from numbersArray)
  and the second item in the array being the odds array (all the odd values from numbersArray).
*/

const divider = (numbersArray) => {
  const evenArr = [];
  const oddArr = [];
  numbersArray.map((num) => {
    if (num % 2 === 0) {
      evenArr.push(num)
    } else {
      oddArr.push(num)
    }
  })
  return [evenArr, oddArr]
}

////////// PROBLEM 7 //////////

// Do not edit the code below.
var getRandomArbitrary = function () {
  return Math.floor(Math.random() * 30);
};
// Do not edit the code above.

/* 
  var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  Above you're given a function (getRandomArbitrary) that will return a random number between 0 and 30.
  There is also a commented out array full of numbers to help you visualize what your function will be receiving.
  Write a function named finder that will take in an array as an argument.
  In the function create a variable called randomNumber and set it to the invocation of getRandomArbitrary.
  Loop through the array to see if randomNumber is in the array. 
  If it is, return true, if it's not, return false
*/

const finder = (arr) => {
  let randomNumber = getRandomArbitrary()
  let bool = false
  arr.map(num => {
    if (num === randomNumber) {
      bool = true;
    }
  })
  return bool
}

////////// PROBLEM 8 //////////

// Do not edit the code below.
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
// Do not edit the code above.

/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList. 
  If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. 
  In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

  In both removeItem and addItem check to see if the 'myGroceryList' and 'item' arguments are truthy.
  If they are not, return an empty array.

  Here are some examples of calling your functions and what should be returned:
  removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
  addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
  removeItem(myGroceryList) --> [];
  addItem() --> [];
*/

const removeItem = (myGroceryList, item) => {
  myGroceryList.map((itemEl, index) => {
    if (itemEl === item) {
      myGroceryList.splice(index, 1)
    }
  })
  return myGroceryList
}

const addItem = (myGroceryList, item) => {
  myGroceryList.push(item)
  return myGroceryList
}

////////// PROBLEM 9 //////////

/*
  Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.
*/

const maker = () => {
  const makerArr = [];
  for (let i = 1; i <= 215; i++) {
    makerArr.push(i)
  }
  return makerArr
}

////////// PROBLEM 10 //////////

// Do not edit the code below.
var numbers = [5, '9', 16, 19, '25', '34', 48];
// Do not edit the code above.

/*
  Write a function called addTen that is given 'numbers' as it's only argument.
  Return a new array after adding ten to each item in numbers. 
  Your output should look like this -> [15, 19, 26, 29, 35, 44, 58]
*/

const addTen = (numbers) => {
  return numbers.map(num => {
    return +num + 10
  })
}

////////// PROBLEM 11 //////////

// Do not edit the code below.
var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for (var i = 0; i < num1; i++) {
  arr1.push(i);
}
for (var i = 0; i < num2; i++) {
  arr2.push(i);
}
// Do not edit the code above.

/*
  Above is some code that adds a random number of values to both arr1 and arr2.
  Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. 
  Return the longer of the two arrays.
*/

const longer = (arr1, arr2) => arr1.length > arr2.length ? arr1 : arr2

/*
  As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.

  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

const both = (arr1, arr2) => {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i])
      }
    }
  }
  return newArr;
}

////////// PROBLEM 12 //////////

// Do not edit the code below.
var devMountainEmployees = [];

var joe = {
  name: 'Joe',
  position: 'Instructor',
  spiritAnimal: 'Honey Badger',
};

var cahlan = {
  name: 'Cahlan',
  position: 'CEO',
  spiritAnimal: 'butterfly',
};

var ryan = {
  name: 'Ryan',
  position: 'Marketing',
  spiritAnimal: 'fox',
};

var colt = {
  name: 'Colt',
  position: 'Everything really',
  spiritAnimal: 'Young Male Horse',
};
// Do not edit the code above.

/*
  Above you're given an empty array and four variables containing objects. 
  Fill the devMountainEmployees array with those four objects. Do this in either
  the global scope or in a function. If done in a function, invoke it.
  After that, console.log the length of the Array and make sure that it's equal to 4. 
*/

devMountainEmployees.push(joe, cahlan, ryan, colt);
// console.log(devMountainEmployees.length);

/*
  Now let's say Cahlan has to take a leave of absence.
  Loop through your devMountainEmployees until you find cahlan, then remove him from the array.
*/

devMountainEmployees.map((emp, index) => {
  if (emp.name === 'Cahlan') {
    devMountainEmployees.splice(index, 1)
  }
})

// console.log(devMountainEmployees);

////////// PROBLEM 13 //////////

/*
  A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of data is to have an array full of objects. 
  Create an empty array called users.
*/

const users = [];

/*
  Now add three user objects to your users array. Each user object should contain the following properties: name, email, password, username.

  Include the following user1 object as one of the objects in your array.
  
  MAKE SURE TO DO THIS IN THE SECTION BELOW WHERE USER1 IS DECLARED
*/

// Do not edit the code below.
var user1 = {
  name: 'Mark McIver',
  email: 'mark.mciver@devmounta.in',
  password: 'hunter2',
  username: 'ihazcode',
};
// Do not edit the code above.

const user2 = {
  name: 'Larry the Cucumber',
  email: 'cucumber@devmounta.in',
  password: 'larry123',
  username: 'BadLarry'
}

const user3 = {
  name: 'Bob the Tomato',
  email: 'tomato@devmounta.in',
  password: 'bob123',
  username: 'TomatoPotato'
}

users.push(user1, user2, user3)


/*
  Now you have a very common data structure.
  Twitter is a good use case.
  It's easy to imagine that your followers list on Twitter is an array full of objects and those objects contain properties about the specific person you follow.

  Now let's say that Mark decided to delete his account.
  Loop through your array of objects until you find Mark's account (use his email, mark.mciver@devmounta.in, to find him).
  Once you find the array index he's located in, delete him from the array.
*/

const deleteUser = (userArr, email) => {
  userArr.map((user, index) => {
    if (user.email === email) {
      userArr.splice(index, 1)
    }
  })
  return userArr
}

console.log(deleteUser(users, 'mark.mciver@devmounta.in'));

/*
  The activity we just did is very much how data works in 'the real world'.
*/
