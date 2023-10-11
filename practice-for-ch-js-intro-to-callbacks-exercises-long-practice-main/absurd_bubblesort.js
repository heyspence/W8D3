// function absurdBubbleSort(arr, sortCompletionCallback){

// }


// function absurdBubblesort(arr, sortCompletionCallback){
//     let sorted = false
//     while (!sorted){
//         sorted = true
//         for( let i = 0; i < arr.length; i++){
//             if (arr[i] > arr[i + 1]){
//             // if (sortCompletionCallback(arr[i], arr[i + 1]) === 1){
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 sorted = false
//             }
//         }
//     }
//     return arr
// }

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`is ${el1} > ${el2}? (yes or no)`, function(answer){
    if(answer === 'yes'){
        return callback(true)
    }else{
        return callback(false)
    };
  });
};

askIfGreaterThan(1,10000,(answer)=>{ console.log(answer)})

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
    if (i === arr.length - 1){
      outerBubbleSortLoop(madeAnySwaps)

    }else if(i < arr.length - 1){
      askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
        
        if (isGreaterThan){
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          madeAnySwaps = true;
  
  
        };
      });

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    };
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
};

innerBubbleSortLoop([1,5,43,2,2,5,4], )

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});