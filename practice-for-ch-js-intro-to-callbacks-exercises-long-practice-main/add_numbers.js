const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0){
        rl.question('Give me a number', function(num1){ 
            let number = parseInt(num1);
            sum += number;
            console.log(sum)
            addNumbers(sum, numsLeft - 1, completionCallback)
         });
    }else if(numsLeft === 0){
        completionCallback(sum)
        rl.close();
    }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
