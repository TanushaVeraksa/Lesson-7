/* 
1. Fix following code at least in 2 different ways

Actual result:

Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined


Expected result:
Index: 0, element: 100
Index: 1, element: 101
Index: 2, element: 102
Index: 3, element: 103

*/

const numbers = [100, 101, 102, 103];

for (let i = 0; i < numbers.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + numbers[i]);
  }, 1000);
}



/*
2. Write a recursion function to console.log() all values in every nested object.
Recursion is used here to support nested structures of unlimited depth length

Expected result (order doesn't matter here):

'child_1'
'child_2'
...
etc.

*/

const items = [
    { 
        value: 'child_1',
        parents: [{
            value: 'parent_1',
            parents: [{
                value: 'grandparent_1',
                parents: [],
            }],
        },
        {
            value: 'parent_2',
            parents: [{
                value: 'grandparent_2',
                parents: [{
                    value: 'grandgrandparent_2',
                    parents: null,
                }],
            }],
        }],
    },
    { 
        value: 'child_2',
        parents: null,
    }
];


function viewItems(itemsArr) {
    if(itemsArr === null) {
        return;
    }
    for(let i = 0; i < itemsArr.length; i++) {
        if(typeof itemsArr[i] === "string") {
            console.log(itemsArr[i]);
        } else if (typeof itemsArr[i] === "object") {
            for (let k in itemsArr[i]) {
                if(typeof itemsArr[i][k] === "object") {
                    viewItems(itemsArr[i][k]);
                } else {
                    console.log(itemsArr[i][k]);
               }
            }
        } else {
            viewItems(itemsArr[i]);
        }
    }
}

viewItems(items);

/*
3. Write a functions for promise chain
    - getSum        -- sums two arguments and resolves result in 2 sec
    - double        -- multiplies its first agrument by 2 and resolves result in 2 sec 
    - factorial     -- calculates factorial of agrument and resolves result in 2 sec
    - errorHandler  -- just console.error its first argument

*/

/*let i1 = 2;
let j = 1;

getSum(i1, j)
    .then(double)
    .then(factorial)
    .then(result => {
        console.log(result);
    })
    .catch(errorHandler);*/


let i1 = 2;
let j1 = 1;

getSum(i1, j1)
    .then(function (element) {
        double(element), 
    result => console.log(result);
    });
    //.then(factorial)
   
    //.catch(errorHandler);*/


function getSum(num1, num2) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(num1 + num2);
        }, 2000)
    });
}

function double(num1) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(num1 * num1);
        }, 2000)
    });
}
