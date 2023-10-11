const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Give me a number', (num1) => {
//     console.log(`this is the sum of your number: ${Number(num1)}`);
//         rl.question('Give me another number NOW: ', (num2) => {
//             console.log(`this is the sum of your numbers: ${Number(num1)+ Number(num2)}`)
//         })
// })

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






// rl.question('What do you think of JavaScript? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.question('What do you really think of JavaScript? ', (answer2) => {
//         console.log(`You said: ${answer2}. Thank you for your honesty.`);
//         rl.close();
//     });
// });